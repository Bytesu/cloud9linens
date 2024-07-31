const insertCssRuleItem = (item) => {
  document.styleSheets[0].insertRule(item);
};
/**
 * @param ele  element|element[]|selector
 */
const removeClass = (ele, classStr) => {
  if (ele instanceof Array) {
    [...ele].forEach(
      (el) =>
      (el.classList = [...el.classList]
        .filter((item) => item != classStr)
        .join(" "))
    );
    return [...ele];
  } else if (typeof ele === "string") {
    [...document.querySelectorAll(ele)].forEach(
      (el) =>
      (el.classList = [...el.classList]
        .filter((item) => item != classStr)
        .join(" "))
    );
    return [...document.querySelectorAll(ele)];
  } else {
    if (ele)
      ele.classList = [...ele.classList]
        .filter((item) => item != classStr)
        .join(" ");
    return [ele];
  }
};
const addClass = (ele, classStr) => {
  if (ele instanceof Array) {
    [...ele].forEach(
      (el) => (el.classList = [...ele.classList, classStr].join(" "))
    );
  } else if (typeof ele === "string") {
    [...document.querySelectorAll(ele)].forEach(
      (el) => (el.classList = [...ele.classList, classStr].join(" "))
    );
  } else {
    if (ele) ele.classList = [...ele.classList, classStr].join(" ");
  }
};
const queryAll = (ele, selector) => {
  return Array.from(ele.querySelectorAll(selector));
};
const eleIndex = (liEl) => {
  return [...liEl.parentElement.children].findIndex((li, index) => liEl == li);
};
const singleEleEvent = (ele, eventName, cb) => {
  if (ele) {
    try {
      if (ele.getAttribute?.("listener-lock")) return;
      ele.setAttribute?.("listener-lock", "done");
      ele.removeEventListener(eventName, cb);
    } catch (error) {
      console.log(error);
    }
    ele.addEventListener(eventName, cb);
  } else {
    console.error(ele);
  }
};
/**
 * @param ele  element|element[]|selector
 */
const addEvent = (ele, eventName, cb) => {
  if (ele instanceof Array) {
    [...ele].forEach((el) => singleEleEvent(el, eventName, cb));
  } else if (typeof ele === "string") {
    [...document.querySelectorAll(ele)].forEach((el) =>
      singleEleEvent(el, eventName, cb)
    );
  } else {
    if (ele) singleEleEvent(ele, eventName, cb);
  }
};
class BaseV2 extends HTMLElement {
  constructor() {
    super();
  }
  siblings(liEl) {
    return [...liEl.parentElement.children].filter((li, index) => liEl !== li);
  }
  index(liEl) {
    return eleIndex(liEl);
  }
  /**
   * active current li element
   */
  activeCurrentEl(liEl) {
    this.siblings(liEl).forEach((li) => {
      this.removeClass(li, "active");
    });
    //current-img
    this.addClass(liEl, "active");
  }
  isMobile() {
    return window.innerWidth < 750;
  }
  createEle(eleStr = "div") {
    return document.createElement(eleStr);
  }

  /***
   * shopify price = num = actual display price * 100
   */
  moneyFn(num) {
    if (!num) return 0;
    if (num instanceof Array) {
      num = num.reduce((res, item) => {
        res += item;
        return res;
      }, 0);
    }
    return `$${(num / 100).toFixed(2)}`;
  }
  click(el, cb) {
    this.addEvent(el, "click", cb);
  }
  debounce(fn, wait) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }
  addEvent(ele, eventName, cb) {
    addEvent(ele, eventName, cb);
  }
  /**
   * ele 元素是否包含`classStr` class
   * @param {*} ele
   * @param {*} classStr
   * @returns
   */
  hasClass(ele, classStr) {
    if (!ele) return false;
    return [...ele.classList].includes(classStr);
  }
  /**
   *  # add class
   * @param {*} ele
   * @param {*} classStr
   */
  addClass(ele, classStr) {
    addClass(ele, classStr);
  }
  removeClass(ele, classStr) {
    removeClass(ele, classStr);
  }
  queryAll(ele, selector) {
    return Array.from(ele.querySelectorAll(selector));
  }
  isMobile() {
    return window.innerWidth < 750;
  }
  fetch(url, data, opt) {
    opt = {
      method: 'GET',
      ...opt
    }
    return new Promise((resolve, reject) => {
      return fetch(url, {
        method: opt.method,
        body: JSON.stringify(data),
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      }).then((response) => response.json())
        .then(function (cart) {
          resolve(cart);
        })
        .catch(e => {
          reject(e);
        })
    })
  }
}
class TPopup extends BaseV2 {
  closeEvent() {
    let closeEl = this.querySelector(".pop-close");
    console.log(closeEl);
    if (closeEl) {
      this.addEvent(closeEl, "click", () => {
        this.style.display = "none";
      });
    }
  }
  connectedCallback() {
    this.closeEvent();
  }
  open() {
    this.style.display = "block";
  }
  constructor() {
    super();
  }
}
if (!customElements.get(`t-popup`)) {
  customElements.define(`t-popup`, TPopup);
}
class AddToCartSlide extends BaseV2 {
  constructor() {
    super();
  }
}
if (!customElements.get(`t-add-to-cart-slide`)) {
  customElements.define(`t-add-to-cart-slide`, AddToCartSlide);
}
class AddedToCartSlide extends BaseV2 {
  constructor() {
    super();
  }
}
if (!customElements.get(`t-added-to-cart-slide`)) {
  customElements.define(`t-added-to-cart-slide`, AddedToCartSlide);
}
