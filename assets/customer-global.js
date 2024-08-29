window.initAddressView = () => {
  // console.log("initAddressView------");
  Array.from(document.querySelectorAll("form-control-group")).forEach(
    (item) => {
      item.classList.remove("error");
      item.update?.();
    }
  );

  Array.from(document.querySelectorAll('[name="address[country]"]')).forEach(
    (item) => {
      console.log(item.closest("div").querySelector('[name="address[phone]"]'));
      item
        .closest("div")
        .insertBefore(
          item.closest("form-control-group"),
          item
            .closest("div")
            .querySelector('[name="address[phone]"]')
            .closest("form-control-group")
        );
    }
  );
};

const sectionCache = new Map();
const requestDefaultConfigs = {
  mode: "same-origin",
  credentials: "same-origin",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
};
function getRequestDefaultConfigs() {
  return JSON.parse(JSON.stringify(requestDefaultConfigs));
}
const fetchSection = (sectionId, fetchFromCache = false) => {
  return new Promise((resolve, reject) => {
    if (fetchFromCache) {
      const cached = sectionCache.get(sectionId);
      if (cached) return resolve(cached);
    }
    fetch(
      `${window.spratlyThemeSettings.rootUrl}?section_id=${sectionId}`,
      getRequestDefaultConfigs()
    )
      .then((res) => res.text())
      .then((html) => {
        const cartHTML = document.createElement("div", null);
        cartHTML.innerHTML = html;
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        let total = 0;
        Array.from(doc.querySelectorAll(".scd-item__qty_input")).forEach(
          (item) => {
            total += parseInt(item.value);
          }
        );
        Array.from(document.querySelectorAll(".sf-cart-count")).forEach(
          (item) => {
            item.innerHTML = total;
            item.parentElement.click();
          }
        );
        sectionCache.set(sectionId, cartHTML);
        resolve(cartHTML);
        let cart_ = document.querySelector("#shopify-section-cart-drawer");

        const newCartBody = cartHTML.querySelector(".scd__body");
        const newCartSummary = cartHTML.querySelector(".scd__summary");
        const currentCartBody = cart_.querySelector(".scd__body");
        const currentCartSummary = cart_.querySelector(".scd__summary");
        currentCartBody.replaceWith(newCartBody);
        currentCartSummary.replaceWith(newCartSummary);
      })
      .catch(reject);
  });
};
const C = {
  initFavorUI(wisshlist) {
    if (wisshlist.length) {
      document.body.classList.add('wishlist-has-item')
    } else {
      document.body.classList.remove('wishlist-has-item')
    }
  },
  addFavor(handle) {
    let wisshlist = C.lsGet('sf__wishlist-products')
    wisshlist = [...wisshlist.filter(item => item != handle), handle]
    C.lsSet('sf__wishlist-products', wisshlist)
    C.initFavorUI(wisshlist)
  },
  removeFavor(handle) {
    let wisshlist = C.lsGet('sf__wishlist-products')
    wisshlist = wisshlist.filter(item => item != handle)
    C.lsSet('sf__wishlist-products', wisshlist)
    C.initFavorUI(wisshlist)
  },
  lsSet(key, v) {
    localStorage.setItem(key, typeof v == 'object' ? JSON.stringify(v) : v)
  },
  lsGet(key) {
    let v = localStorage.getItem(key)
    if (v) {
      if (v.indexOf('{') > -1 || v.indexOf('[') > -1) {
        return JSON.parse(v)
      }
      return v;
    }
    return v;
  },
  click(ele, cb) {
    if (ele) {
      ele.addEventListener('click', cb)
    }
  },
  selector(selector) {
    if (selector) {
      return Array.from(document.querySelectorAll(selector))//.addEventListener('click',cb)
    }
    return []
  },
  submit(selector) {
    let that = this;
    Array.from(document.querySelectorAll(selector)).forEach((form) => {
      form.removeEventListener('submit')
      form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        evt.stopPropagation()
        //that.addToCart({ id: form.querySelector("[name=id]").value });
        //document.querySelector('t-popup')?.open?.()
      });
    });
  },
  addToCart: (data) => {
    new Promise((resolve, reject) => {
      fetch("/cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
          // const addedItem =
          //   data === null || data === void 0 ? void 0 : data.items[0];
          // addedItem.source = "quantity-upsell";
          // window.Shopify.onItemAdded(addedItem);
          fetchSection("cart-drawer");
        })
        .catch(reject);
    });
  },
};


class FormControlGroup extends HTMLElement {
  constructor() {
    super();
    //  this.init();
  }
  connectedCallback() {
    //this.init();
    setTimeout(() => this.init(), 400);
  }
  focus = false;
  update(flag) {
    //console.log("update",this.focus,this.querySelector("input").value);
    if (flag || this.focus) {
      this.classList.add("added");
    } else if (this.querySelector("input,select").value) {
      this.classList.add("added");
    } else {
      this.querySelector("input") && this.classList.remove("added");
    }
    if (this.querySelector("input,select").value) {
      this.querySelector("input") && this.classList.remove("error");
    } else {
      this.classList.add("error");
    }
  }
  init() {
    this.querySelector(".pwd-icon")?.addEventListener?.("click", (evt) => {
      if (this.querySelector("input")?.getAttribute?.("type") == "password") {
        this.querySelector("input")?.setAttribute?.("type", "text");
      } else {
        this.querySelector("input").setAttribute("type", "password");
      }
    });
    this.addEventListener("change", (evt) => {
      this.update();
    });
    this.querySelector("input")?.addEventListener?.("focus", (evt) => {
      this.update(true);
      this.focus = true;
    });
    this.querySelector("input")?.addEventListener?.("blur", (evt) => {
      this.focus = false;
      this.update();
    });
    this.addEventListener("input", (evt) => {
      this.update();
    });

    //setTimeout(() => , 3000);
    if (window.location.href.indexOf("address") > -1) {
      //  this.update()
    }
    this.querySelector("label")?.addEventListener?.("click", (evt) => {
      this.focus = true;
      this.update();
      this.querySelector("input")?.focus();
    });
  }
}
if (!customElements.get("form-control-group")) {
  customElements.define("form-control-group", FormControlGroup);
}

document.addEventListener("DOMContentLoaded", () => {

  document
    .querySelector(".sf-customer__reset-password-btn")
    ?.addEventListener?.("click", () => {
      document.querySelector(".web-account-section").classList.add("reset-pwd");
    });
  if (document.querySelector(".show-recover-password-form")) {
    document.querySelector(".web-account-section").classList.add("reset-pwd");
  }

  const updateWishlist = () => {
    if (document.querySelector(".wishlist-title-custom")) document.querySelector(".wishlist-title-custom").style.display = "block";
    Array.from(document.querySelectorAll(".wish_shop_btn a")).forEach(
      (item) => {
        let btn = document.createElement("button");
        btn.innerHTML = "Add to Bag";
        btn.classList = item.classList;
        btn.setAttribute("type", "button");
        item.replaceWith(btn);
        btn.addEventListener('click', () => {
          //document.querySelector('t-popup')?.open?.()
          console.log('----')
        })
      }
    );
    Array.from(
      document.querySelectorAll(".wish_bag_icon button")
    ).forEach((item) => {
      item.insertBefore(
        item
          .closest("form")
          .querySelector('.wish_shop_btn [type="button"]')
          .closest(".wish_shop_btn"),
        item.querySelector("a")
      );
    });
    //C.submit(".sf-wishlist__container form,[action=\"/cart/add\"]");

    if (document.querySelector(".section-my-v2"))
      document.querySelector(".section-my-v2").style.display = "none";
    C.selector(".wishlist .wish_trash_icon,.wishlist .posi_absolute").forEach(
      (item) => {
        if (item.closest('.wish_trash_icon')) {
          let el = item.closest('.wish_trash_icon').parentElement;
          el.classList.remove('w-3/4')
          el.classList.add('w-full')
        }
        C.click(item, () => {
          let url = item.closest('form').querySelector('.sf__pcard-name').getAttribute('href')
          let handle = url.split('?')[0].split('/').slice(-1)[0]
          let wisshlist = C.lsGet('sf__wishlist-products')
          C.lsSet('sf__wishlist-products', wisshlist.filter(item => item != handle))
          setTimeout(() => {
            if (
              C.selector(".wishlist .wish_trash_icon").length == 0
            ) {
              document.querySelector(".wishlist-title-custom").style.display =
                "none";

              if (document.querySelector(".section-my-v2"))
                document.querySelector(".section-my-v2").style.display = "block";
            }
          }, 100)
        });
      }
    );
    //
    setTimeout(() => {
      C.selector(".wish_trash_icon button").forEach(
        (item) => {
          item.innerHTML = "Remove";
        }
      );
      // C.selector("h3.block.text-base.mob_fs_8").forEach((item) => {
      //   //  item.parentElement.insertBefore(item,item.previousElementSibling); console.log('----')
      // });
    }, 300);
  };
  // updateWishlist();
  let insert = false;
  //if (document.querySelector(".sf-wishlist__container")) {
  let wishlistContainer = document.querySelector(".sf-wishlist__container")
  if (wishlistContainer) new MutationObserver(() => {
    updateWishlist();
  }).observe(wishlistContainer, {
    childList: true,
  });

  //  }
  document
    .querySelector(".sf-wishlist__container")
    ?.addEventListener?.("DOMNodeInserted", () => {
      if (insert) return;
      insert = true;
      updateWishlist()
    });

  document
    .querySelector(".sf-customer__cancel-reset")
    ?.addEventListener?.("click", () => {
      document
        .querySelector(".web-account-section")
        .classList.remove("reset-pwd");
    });

  Array.from(
    document.querySelectorAll(".sf-customer__add-new,.sf-customer-btn__edit")
  ).forEach((item) => {
    item?.addEventListener?.("click", () => {
      window.initAddressView?.();
    });
  });
});
