window.tRoutes = {
  cart_add_url: '/cart/add.js',
  cart: '/cart.js',
  cart_change_url: '/cart/change.js',
  cart_update_url: '/cart/update.js',
  predictive_search_url: '{{ routes.predictive_search_url }}',
};
const insertCssRule = (rules) => {
  rules.forEach(item => document.styleSheets[0].insertRule(item))
}
const insertCssRuleItem = (item) => {
  document.styleSheets[0].insertRule(item);
};
const THelper = {
  querySelectorByOrder(selectors, scopeEle) {
    const eleSelector = selectors.find(item => scopeEle.querySelector(item))
    if (eleSelector) return scopeEle.querySelector(eleSelector)
    return null;
  },

  toggleAddButton: (formEle, disable = true, text) => {
    if (!formEle) return;
    const addButton = formEle.querySelector('[type="submit"]');
    const addButtonSpan = THelper.querySelectorByOrder('[type="submit"] span,[name="add"] t-btn-container,[type="submit"]'.split(','), formEle);

    if (!addButton) return;

    if (disable) {
      addButton.setAttribute('disabled', 'disabled');
      if (text) addButtonSpan.innerHTML = text
    } else {
      addButton.removeAttribute('disabled');
      if (text) addButtonSpan.innerHTML = text
    }
  },
  getCurrrentVariant: (variantsArr, selectedOptionsArr) => {
    return variantsArr.find(
      variant =>
        !variant.options
          .sort()
          .map((option, index) => selectedOptionsArr[index] === option)
          .includes(false)
    );
  },
  getCurrrentVariantById: (variantsArr, id) => {
    return variantsArr.find(variant => `${variant.id}` === `${id}`);
  },
  getOptions: (ele) => {
    const elements = Array.from(ele.querySelectorAll('fieldset,select'))
    let options = elements
      .map(element => {
        if (element.tagName === 'FIELDSET') {
          let selectedInput = element.querySelector(
            'input[type=radio]:checked'
          );
          return selectedInput.value;
        }
        return element.value;
      })
      .flat(1)
      .sort();
    return options
  },
  moneyFn: (num) => {
    if (!num) return 0;
    return `${window.spratlyThemeSettings.money_format.replace('{{amount}}', '')}${(num / 100).toFixed(2)}`
  },
  discountRationFn: (ratio) => {
    return (ratio * 100).toFixed(0) + '%'
  },
  discountFn: (price, originalPrice) => {
    if (!originalPrice || originalPrice === price) return { discountRatio: 0, label: THelper.discountRationFn(0) };
    const discountRatio = (originalPrice - price) / originalPrice
    return {
      discountRatio,
      label: THelper.discountRationFn(discountRatio)
    }
  },
  loadingSvgStr: (color = 'black') => `<svg aria-hidden="true" focusable="false" role="presentation" class="t-spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle class="t-path" fill="none" stroke-width="6" cx="33" cy="33" r="30" style="stroke: ${color};"></circle> </svg>`,
  btnLoading(el, color = 'black') {
    el.innerHTML = el.innerHTML + this.loadingSvgStr(color)
    if (!el.classList.contains('wish_shop_btn')) {
      el.classList.add('relative')
    }
  },
  cancelBtnLoading(el) {
    el.querySelector?.('svg.t-spinner')?.remove?.()
  },

  isMobile: () => window.innerWidth < 768,
  DOMready: function (callback) {
    if (document.readyState != 'loading') callback()
    else document.addEventListener('DOMContentLoaded', callback)
  },
  log: msg => console.log(msg),
  error: msg => console.error(msg),
  debounce: function (fn, wait) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  },
  staRender: (num, total) => THelper.sta(THelper.RecordType.RENDERED, num, total),
  staAddtoCart: (num, total) => THelper.sta(THelper.RecordType.ADD_TO_CART, num, total),
  /**
   * pro or dev env judage
   * @returns boolean 
   */
  isPro: () => !['byte0101', '127.0.0.1', 'ngrok.io'].find(term => window.location.host.indexOf(term) > -1),

  sta(type, num, total) {
    let url = window.tCobo.path;
    if (THelper.isPro()) url = url.replace('cobo-dev/sta', 'cobo-pro/sta')

    THelper.fetch({
      ...THelper.postConfig,
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({})
    }, `${url}s=${window.tCobo.getStoreId()}&t=${type}&t1=${total}&n=${num}`)
  },
  RecordType: { RENDERED: 2, ADD_TO_CART: 3, PAIED: 4 },
  focusVisiblePolyfill: function () {
    const navKeys = [
      'ARROWUP',
      'ARROWDOWN',
      'ARROWLEFT',
      'ARROWRIGHT',
      'TAB',
      'ENTER',
      'SPACE',
      'ESCAPE',
      'HOME',
      'END',
      'PAGEUP',
      'PAGEDOWN',
    ];

    window.addEventListener('keydown', event => {
      if (navKeys.includes(event.code.toUpperCase())) {
        mouseClick = false;
      }
    });

    window.addEventListener('mousedown', event => {
      mouseClick = true;
    });

    window.addEventListener(
      'focus',
      () => {
        // if (currentFocusedElement)
        //   currentFocusedElement.classList.remove("focused");
        // if (mouseClick) return;
        // currentFocusedElement = document.activeElement;
        // currentFocusedElement.classList.add("focused");
      },
      true
    );
  },
  pauseAllMedia: function () {
    // document.querySelectorAll(".js-youtube").forEach((video) => {
    //   video.contentWindow.postMessage(
    //     '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
    //     "*"
    //   );
    // });
    // document.querySelectorAll(".js-vimeo").forEach((video) => {
    //   video.contentWindow.postMessage('{"method":"pause"}', "*");
    // });
    // document.querySelectorAll("video").forEach((video) => video.pause());
    // document.querySelectorAll("product-model").forEach((model) => {
    //   if (model.modelViewerUI) model.modelViewerUI.pause();
    // });
  },

  removeTrapFocus: function (elementToFocus = null) {
    document.removeEventListener('focusin', tTrapFocusHandlers.focusin);
    document.removeEventListener('focusout', tTrapFocusHandlers.focusout);
    document.removeEventListener('keydown', tTrapFocusHandlers.keydown);

    if (elementToFocus) elementToFocus.focus();
  },

  onKeyUpEscape: function (event) {
    if (event.code.toUpperCase() !== 'ESCAPE') return;

    const openDetailsElement = event.target.closest('details[open]');
    if (!openDetailsElement) return;

    const summaryElement = openDetailsElement.querySelector('summary');
    openDetailsElement.removeAttribute('open');
    if (summaryElement) {
      summaryElement.setAttribute('aria-expanded', false);
      summaryElement.focus();
    }
  },

  cardType: { CUP_SHE: 'cupshe', },
  // ----------------------------------------  ajax  ----------------------------------------
  fetchConfig: function (type = 'application/json') {
    return {
      method: 'POST',
      //headers: { 'Content-Type': 'application/json', 'Accept': `text/html` }
      headers: { 'Content-Type': 'application/json', 'Accept': `${type}` }
    };
  },
  postConfig: { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest', }, method: 'POST' },
  /**
   * 
   * @param {*} obj 
   * @returns 
   */
  convertParamFn(obj) {
    return Object.keys(obj || {}).map(key => `${key}=${obj[key]}`).join('&')
  },
  /**
   * ## 更新购物车中一条lineItem 对象
   * @param {*} obj  {[key]:value} or Array<{[key]:value}>
   * 
   * ## eg:
   * {id:'42726933594367:1bb317c086457acb4ae924861dc2ff62',['properties[bundle]']:'bundle0'}
   * 
   *  更新 lineItem.key='42726933594367:1bb317c086457acb4ae924861dc2ff62'的 properties[bundle] 值
   * 
   */
  changeCart(obj) {
    // convert obj to format like 'id=42726933594367:1bb317c086457acb4ae924861dc2ff62&properties[bundle]=bundle10'
    let body = THelper.convertParamFn(obj)
    THelper.fetch({ ...THelper.postConfig, body }, window.tRoutes.cart_change_url).then(res => {
      console.log(res);
    });
  },
  /**
   * 
   * ## Extension 加入购物车
   * 
   * @param {nu} itemsObj    {[key]:value} 参数
   * @param {nu} opt 参数配置 
   * {
   *  getReturn: 获取加入购物车成功后的返回结果，而是否不跳转
   *  successCb: 成功后跳转前的回调函数
   * }
   */
  async addToCart(itemsObj, opt = { getReturn: false }) {

    /**
     * ## 配置参数`BundleBuyExtraParam`
     * 添加`store`自定义的请求参数
     */
    let extraParam = window.tCobo?.BundleBuyExtraParam;
    if (extraParam) {
      itemsObj = {
        ...extraParam,
        ...itemsObj
      }
    }
    let res = await THelper.fetch({ ...THelper.postConfig, body: THelper.convertParamFn(itemsObj) })
    if (!opt.getReturn) {
      opt.successCb?.()
      /**
       * ## 配置参数`ActionAfterBundleBuy`
       * 调用定制化的配置函数
       */
      if (window.tCobo?.ActionAfterBundleBuy) {
        window.tCobo?.ActionAfterBundleBuy(res)
      } else {
        window.location = '/cart'
      }
    } else {
      return res;
    }
  },

  /***
   * ## 更新购物车，保持`bundle`商品满足数量
   * @param arrs  购物车中商品Array<{[key,varant]:[quantity]}> 
   */
  // async updateCart(arrs) {
  //   try {
  //     // 筛选key值的id对象
  //     let obj = arrs.filter(item => item.id.indexOf(':') > -1).reduce((res, item) => {
  //       res[`updates[${item.id}]`] = item.quantity;
  //       return res;
  //     }, {})

  //     let body = THelper.convertParamFn(obj)
  //     // 更新购物车
  //     let res = await THelper.fetch({ ...THelper.postConfig, body }, window.tRoutes.cart_update_url)

  //     let updateArr = arrs.filter(item => item.id.indexOf(':') == -1);
  //     if (updateArr.length) {
  //       let itemsObj = {};
  //       // 筛选variant_id 值的id对象
  //       arrs.filter(item => item.id.indexOf(':') == -1).forEach((item, index) => {
  //         itemsObj[`items[${index}][quantity]`] = item.quantity;
  //         itemsObj[`items[${index}][id]`] = item.id;
  //       })

  //       // 更新购物车中由`bundle`商品转化而成的`普通商品`
  //       let resAdd = await THelper.addToCart(itemsObj, { getReturn: true })
  //       return resAdd
  //     } else {
  //       return res;
  //     }

  //   } catch (error) {
  //     return null;
  //   }


  // },
  /***
   * ## 获取购物车对象
   */
  async cart() {
    let res = await THelper.fetch({
      ...THelper.postConfig,
      method: 'GET'
    }, '/cart.js');
    return res;
  },
  /**
   *  ## fetch encapsulation
   */
  fetch(
    config = {
      type: 'json',
    },
    url = window.tRoutes.cart_add_url
  ) {
    return new Promise((resolve, reject) => {
      fetch(`${url}`, config)
        .then(response => {
          if (response.ok) {
            if (config.headers.Accept.indexOf('text') > -1) {
              return response.text();
            } else {
              return response.json();
            }
          } {

            return response
          }
        })
        .then(response => resolve(response))
        .catch(e => {
          reject(e);
          console.error(e);
        })
        .finally(() => {
          // console.log(' -- cobo bundle -- ');
        });
    });
  },
  defaultProperties: 'default',

  /**
   *  ## 剔出返回不满足`bundle`的<{[variant]:quantity}> 键值对商品
   * @param {*} bundleProducts  <{[bundleKey|THelper.defaultProperties]:Array<lineItem>}>
   * @returns  返回从bundle中剔出来的<{[variant]:quantity}> 键值对
   */
  handleBundle(bundleProducts) {
    let bundles = Object.keys(bundleProducts);
    let extraProduct = {}

    bundles.forEach(bundleKey => {
      if (bundleKey === this.defaultProperties) return;
      let handleQuantity = bundleProducts[bundleKey].reduce((res, item) => {
        res[item.handle] = item.quantity;
        return res;
      }, {})
      let values = Object.values(handleQuantity);
      // 此处默认`bundle` key 是`bundle-3`这种格式，3是`bundle`中商品数量
      if (handleQuantity.length === bundleKey.split('-')[1] && Object.keys(handleQuantity).every(handle => bundleKey.indexOf(handle)) && values.every(num => num === values[0])) {

      } else {
        let bundleNum = Math.min(...values) // 套餐数
        bundleProducts[bundleKey].forEach(item => {
          if (item.quantity > bundleNum) {
            let extraNumOutOfBundle = item.quantity - bundleNum;
            // 多个`bundle`不满足`bundle`数量商品的累积数量
            extraProduct[item.variant_id] = (extraProduct[item.variant_id] ?? 0) + extraNumOutOfBundle;
            item.quantity = bundleNum;
          }
        })
      }

    })
    return extraProduct;
  },
  /**
   * ## 计算购物车中商品，确保满足`bundle`数量(如套餐中包含3个商品，则购物中此类`bundle`商品在数量上符合)
   * @param {*} body change 请求参数
   * @param {*} cart 购物车
   * @returns 
   */
  // updateChange(body, cart) {
  //   cart.items[parseInt(body.line) - 1].quantity = parseInt(body.quantity);

  //   let res = cart.items.reduce((res, item) => {
  //     let key = item.properties?.bundle ?? this.defaultProperties

  //     if (!res[key]) res[key] = []
  //     res[key].push(item)

  //     return res;

  //   }, {})

  //   let extraProduct = THelper.handleBundle(res)

  //   return [
  //     ...Object.keys(res).map(key => {
  //       return res[key].map(item => ({
  //         id: item.key,
  //         quantity: item.quantity
  //       }))
  //     }).flat(1),
  //     ...Object.keys(extraProduct).map(variantId => {
  //       return {
  //         id: variantId,
  //         quantity: extraProduct[variantId]
  //       }
  //     })
  //   ];
  // },
  /**
   *  ## 拦截`fetch`请求
   */
  // injectFetch() {
  //   const constantMock = window.fetch;
  //   window.fetch = function () {
  //     return new Promise(async (resolve, reject) => {

  //       // if (arguments[0].indexOf("/cart/change") > -1) {
  //       //   try {
  //       //     // let body = JSON.parse(arguments[1].body)
  //       //     // let cart = await THelper.cart()
  //       //     // let newParam = THelper.updateChange(body, cart);
  //       //     // let res = await THelper.updateCart(newParam)
  //       //     resolve(res)
  //       //     return;
  //       //   } catch (error) {
  //       //     console.log(error);
  //       //   }
  //       // }
  //       constantMock.apply(this, arguments)
  //         .then((response) => resolve(response))
  //         .catch((error) => {
  //           reject(response);
  //         })
  //     });
  //   }
  // },
  /**
   * catch error
   * @param {*} error
   */
  catchError(error) {
    console.log(error);
  },
  query(selector, ele = document) {
    return ele.querySelectorAll(selector);
  },

  /***
   *
   * ## scroll load
   *
   *
   * @param
   * options.element: dom element
   * options.threshold:  threshold distance
   * options.callback:  cb function
   *
   *
   * ### eg:
   *
   * THelper.initWhenVisible({
   *    element: this.container,
   *    callback: this.init.bind(this),
   *    threshold: 600,
   * })
   */
  initWhenVisible: function (options) {
    var threshold = options.threshold ? options.threshold : 0;
    var observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (typeof options.callback === 'function') {
              options.callback();
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { rootMargin: '0px 0px ' + threshold + 'px 0px' }
    );

    observer.observe(options.element);
  },
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
const TDomHelper = {
  getComputedStyle: (ele, attr) => {
    return window.getComputedStyle(ele, null).getPropertyValue(attr)
  },
  /**
   *  insert css var into :root{}
   * @param {*} arr  [{key,val}]
   */
  updateRootVarCss(arr) {
    if (arr.length) {
      var r = document.querySelector(':root');
      arr.forEach(item => r.style.setProperty(item.key, `${item.val}`))
    }
  },
  insertCssRule,
  insertColor: (colorMap = {}) => {
    insertCssRule(Object.keys(colorMap).map(color => {
      let colorVal = colorMap[color]
      if (
        colorVal.indexOf('http://') > -1 ||
        colorVal.indexOf('https://') > -1
      ) {
        colorVal = `background-image: url(${colorVal});
        background-position: center;
        background-size: contain;`
      } else {
        colorVal = `background-color: ${colorVal}!important;`
      }
      return (
        `.t-product-form__input.option-Color input[type='radio'] + label.${color.toLowerCase()} {
          ${colorVal}
        }`
      )
    }))
  },
  observer: null,
  addObserveSubscription: (cb,) => {
    TDomHelper.observerSubscription.push(cb)
  },
  observerSubscription: [],
  observerCb: (mutationList, observer) => {
    TDomHelper.observerSubscription
      .forEach(cb => {
        cb?.(mutationList, observer)
      })
    // for (const mutation of mutationList) {
    //   if (mutation.type === 'childList') {
    //     console.log('A child node has been added or removed.');
    //   } else if (mutation.type === 'attributes') {
    //     console.log(`The ${mutation.attributeName} attribute was modified.`);
    //   }
    // }
  },
  /**
   * 
   * @param {*} targetNode 
   * @param {*} cb 
   * @param {*} config  // { attributes: true, childList: true, subtree: true })
   */
  observe(targetNode, cb, config = { attributes: true, childList: true, subtree: true }) {
    // const callback = (mutationList, observer) => {
    //   for (const mutation of mutationList) {
    //     if (mutation.type === 'childList') {
    //       console.log('A child node has been added or removed.');
    //     } else if (mutation.type === 'attributes') {
    //       console.log(`The ${mutation.attributeName} attribute was modified.`);
    //     }
    //   }
    // };

    if (!this.observer) this.observer = new MutationObserver(TDomHelper.observerCb);
    // const config = { attributes: true, childList: true, subtree: true };
    this.observer.observe(targetNode, config);
    TDomHelper.addObserveSubscription(cb)
  },

  domReady(cb) {
    if (document.readyState !== 'compelete') {
      window.addEventListener('load', () => cb?.())
    } else {
      cb?.()
    }


  },
  parseFromString(domStr) {
    let el = this.createElement('div')
    el.innerHTML = domStr;
    return el.childNodes?.length ? el.childNodes[0] : el.childNodes
  },
  parseFromStringV2(responseText) {
    return new DOMParser().parseFromString(responseText, 'text/html')
  },
  /**
   *  图片同步加载
   * @param {*} imgs 
   * @returns 
   */
  async imgLoad(imgs) {

    if (imgs.length) {
      let current = null;
      if (imgs.length > 3) {
        current = imgs[3]
      } else {
        current = imgs[imgs.length - 1]
      }
      return new Promise((resolve, reject) => {
        TDomHelper.addListener(current, 'load', () => {
          resolve('success')
        })
      })

    }
    return;
  },
  /**
   *  `linkObj` link是否存在,如果存在则删除`linkObj`, 否则是用户
   * @param {} linkObj 
   * @returns 
   */
  existLink(eleObj,) {
    let existStyLink = false;
    if (eleObj) {
      if (document.querySelector(`[href="${eleObj.getAttribute('href')}"]`)) { // 文档中已经存在此链接, 则删除本弹框中的`link`
        eleObj.remove();
        existStyLink = true;
      } else if (document.querySelector(`[src="${eleObj.getAttribute('src')}"]`)) { // 判断脚本是否存在
        eleObj.remove();
        existStyLink = true;
      }
    }
    return existStyLink;
  },
  /**
   * ## find element by `selector`
   * @param {*} selector 
   * @param {*} ele 
   * @returns 
   */
  find: (selector, ele) => (ele || document).querySelector(selector),
  /**
   *  ## get closet parent element by `selector`
   * @param {*} selector 
   * @param {*} ele 
   * @returns 
   */
  closest: (selector, ele) => (ele).closest(selector),
  /**
   * ## create element by `eleStr`
   * @param {*} eleStr 
   * @returns 
   */
  createElement: (eleStr) => document.createElement(eleStr),
  /**
   *  ## append child 
   * @param {*} eleChild  child element
   * @param {*} ele       parent element
   * @returns 
   */
  appendChild: (eleChild, ele) => (ele || document.body).appendChild(eleChild),
  /**
   * ## add listener for `target`
   * 
   * @param {*} target | Array<target>
   * @param {*} eventName 
   * @param {*} callback 
   */
  addListener: (target, eventName, callback) => {
    if (target) {
      if (target instanceof Array || target.length || target instanceof NodeList) {
        target.forEach(el => el.addEventListener ? el.addEventListener(eventName, callback, false) : el.attachEvent('on' + eventName, callback))
      } else {
        target.addEventListener ? target.addEventListener(eventName, callback, false) : target.attachEvent('on' + eventName, callback);
      }
    }
  },

  /**
   * ele 元素是否包含`classStr` class
   * @param {*} ele 
   * @param {*} classStr 
   * @returns 
   */
  hasClass: (ele, classStr) => {
    if (!ele) return false;
    return [...ele.classList].includes(classStr)
  },
  addClass: (ele, classStr) => { if (ele) ele.classList = [...ele.classList, classStr].join(' ') },
  removeClass: (ele, classStr) => { if (ele) ele.classList = [...ele.classList].filter(item => item != classStr).join(' ') }
}
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
  ajaxForm(cb) {
    let formEl = this.querySelector('form[action="/cart/add"]')
    if (formEl) {
      this.addEvent(formEl, 'submit', async (evt) => {
        THelper.btnLoading(formEl.querySelector('[type="submit"]'), 'white');
        evt.preventDefault();
        let formData = new FormData(formEl)
        let res = await this.fetch('/cart/add?id=' + formData.get('id') + '&quantity=1')
        // let res1 = await this.fetch('/recommendations/products.json?product_id=' + this.product.id)
        // console.log(res1)
        // this.product.related = res1.products;
        cb?.()
        THelper.cancelBtnLoading(formEl.querySelector('[type="submit"]'));
      })
    }
  }
  fetch(url, data = { method: 'GET' }, type = 'application/json') {
    // opt = {
    //   method: "GET",
    //   ...opt,
    // };
    return new Promise((resolve, reject) => {
      THelper.fetch({ ...THelper.fetchConfig(type), ...data }, url)
        .then(function (cart) {
          resolve(cart);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }
}
const ProductFormType = {}
/***
 *  ## TConsts Object
 */
const TConsts = {
  MODAL_DIALOG: 't-modal-dialog',
  MODAL_OPENER: 't-modal-opener',
  DEFERRED_MEDIA: 't-deferred-media',
  SLIDER_COMPONENT: 't-slider-component',
  SLIDESHOW_COMPONENT: 't-slideshow-component',

  PRODUCT_FORM: 't-product-form',
  PRODUCT_MODAL: 't-product-modal',
  MEDIA_GALLARY: 't-media-gallery',
  VARIANT_SELECTS: 't-variant-selects',
  VARIANT_SELECTS_ITEM: 't-variant-selects-item',
  VARIANT_RADIOS: 't-variant-radios',
  QUANTITY_INPUT: 't-quantity-input',
  BTN_CONTAINER: 't-btn-container',
  IMG_CONTAINER: 't-img-container'
};
/***
 *  ## variant selects of product form structure
 */
class TVariantSelects extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('change', this.onVariantChange);
  }
  sectionHandle = ''
  connectedCallback() {
    this.sectionHandle = `${this.dataset.section}-${this.dataset.url.split('/').pop()}`
  }
  updateShipStatus() {
    let ssdEl = this.parentElement.querySelector('.ship-status-date')
    // const txtJson = JSON.parse(ssdEl.querySelector('noscript').textContent)
    // console.log(txtJson)
  }
  getCurrentSelectedOptions() {
    return Array.from(this.querySelectorAll('input[type=radio]:checked')).map(item => item.value)
  }
  getCurrentSelectedVariant(options) {

    if (!options) options = this.getCurrentSelectedOptions().sort().join('')
    if (!options) {
      return this.getVariantData()[0]
    }
    return this.getVariantData().filter(item => item.options.sort().join('') == options)?.[0]
  }
  updateOptionLabel(target) {
    console.log(target)
    let spanEl = target.closest('fieldset').parentElement.children[0]
    if (spanEl.querySelector('span')) {
      spanEl.querySelector('span').innerHTML = target.value.toLowerCase()
    } else {
      let spanEl_ = document.createElement('span')
      spanEl_.innerHTML = target.value.toLowerCase()
      spanEl.prepend(spanEl_)
    }
  }
  onVariantChange(e) {
    // 判断是否切换颜色
    this.updateOptionLabel(e.target)
    //this.isColorChanged = TDomHelper.hasClass(TDomHelper.closest('fieldset', e.target), `option-${window.tCobo.colorLabel}`)
    this.updateShipStatus()
    try {
      this.updateOptions();
      this.updateMasterId();
      this.toggleAddButton(false, '');
      this.updatePickupAvailability();
      this.removeErrorMessage();

      if (!this.currentVariant) {
        this.toggleAddButton(true, '');
        this.setUnavailable();
      } else if (this.getAttribute('type') === ProductFormType.LIST) {
        this.updateMedia();
        this.updateURL();
        this.updateVariantInput();
        this.renderListProductInfo();
        this.updateShareUrl();
      } else {
        this.updateMedia();
        this.updateURL();

        this.updateVariantInput();

        this.renderProductInfo();
        this.updateShareUrl();
      }
      this.updateAvaliableOptions() //
    } catch (error) {
      THelper.catchError(error);
    }

    // 颜色切换，更新标签名称
    if (this.isColorChanged) TDomHelper.closest('fieldset', e.target).querySelector('legend span').innerHTML = e.target.value;
  }

  updateOptions() {
    try {
      this.options = THelper.getOptions(this.closest('section'))
    } catch (error) {
      THelper.catchError(error);
    }
  }

  updateMasterId() {
    this.currentVariant = THelper.getCurrrentVariant(this.getVariantData(), this.options);
  }

  updateMedia() {
    if (!this.currentVariant) return;
    if (!this.currentVariant.featured_media) return;

    const mediaGallery = document.getElementById(
      `MediaGallery-${this.sectionHandle}`
    );
    mediaGallery &&
      mediaGallery.setActiveMedia(
        `${this.dataset.section}-${this.currentVariant.featured_media.id}`,
        true
      );

    const modalContent = document.querySelector(
      `#ProductModal-${this.sectionHandle} .product-media-modal__content`
    );
    if (modalContent) {
      const newMediaModal = modalContent.querySelector(
        `[data-media-id="${this.currentVariant.featured_media.id}"]`
      );
      modalContent.prepend(newMediaModal);
    }
  }

  updateURL() {
    // 在弹框内，禁止改变URL地址
    if (TDomHelper.closest(TConsts.MODAL_DIALOG, this)) return;
    if (!this.currentVariant || this.dataset.updateUrl === 'false') return;
    window.history.replaceState(
      {},
      '',
      `${this.dataset.url}?variant=${this.currentVariant.id}`
    );
  }

  updateShareUrl() {
    const shareButton = document.getElementById(
      `Share-${this.sectionHandle}`
    );
    if (!shareButton) return;
    shareButton.updateUrl(
      `${window.shopUrl}${this.dataset.url}?variant=${this.currentVariant.id}`
    );
  }

  updateVariantInput() {
    const productForms = this.closest(TConsts.MODAL_DIALOG) ? this.closest(TConsts.MODAL_DIALOG).querySelectorAll('form') : document.querySelectorAll(
      `#product-form-${this.handleBundle}, #product-form-installment`
    );
    productForms.forEach(productForm => {
      const input = productForm.querySelector('input[name="id"]');
      input.value = this.currentVariant.id;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }

  /**
   * setting option available or not
   * @param {*} checkedFirst 
   */
  updateAvaliableOptions(checkedFirst) {
    let p = this.closest('t-add-to-cart-slide').product

    let vs = JSON.parse(this.querySelector('t-variant-radios [type="application/json"]').textContent)
    let map_res = vs.reduce(((res, item) => {
      if (item.available) {
        let variant_options = item.title.split('/');
        variant_options.forEach(option => {
          if (!res[option.trim()]) res[option.trim()] = []
          res[option.trim()] = res[option.trim()].concat(variant_options.filter(optItem => {
            return optItem.trim() != option.trim();
          }).map(item => item.trim()))
        })
      }
      return res;
    }), {})

    //console.log(map_res)
    if (checkedFirst) {
      let first_avaliable_option = Object.keys(map_res)[0];
      if (first_avaliable_option) [
        first_avaliable_option,
        ...map_res[first_avaliable_option]
      ].forEach(item => {
        this.querySelector('[type="radio"][value="' + item + '"]').setAttribute('checked', 'checked')
      })



    }

    if (p.options) {
      let first_name = p.options[0].name
      p.options.forEach((option, index) => {
        if (index == 0) {
          // let first_value = this.querySelector(`[name="${first_name}"]:checked`).value
          option.values.forEach(v => {
            Array.from(this.querySelectorAll(`[name="${option.name}"][value="${v}"]`)).forEach(el => {
              if (!map_res[v]) {
                el.setAttribute('disabled', 'disabled')
              } else {
                el.removeAttribute('disabled', 'disabled')
              }
            })
          })
        } else { // 处理对应数据
          let first_value = this.querySelector(`[name="${first_name}"]:checked`).value
          if (first_value && map_res[first_value].length) {
            Array.from(this.querySelectorAll(`[name="${option.name}"]`)).forEach(el => {
              if (!map_res[first_value].includes(el.value)) {
                el.setAttribute('disabled', 'disabled')
              } else {
                el.removeAttribute('disabled', 'disabled')
              }
            })
          }
        }
      })
    }

    Array.from(this.querySelectorAll('[type="radio"]:checked'))
      .forEach(item => {
        this.updateOptionLabel(item)
      })


  }
  updatePickupAvailability() {
    const pickUpAvailability = this.closest(TConsts.MODAL_DIALOG) ? this.closest(TConsts.MODAL_DIALOG).querySelector('t-pickup-availability') : document.querySelector('t-pickup-availability');
    if (!pickUpAvailability) return;

    if (this.currentVariant && this.currentVariant.available) {
      pickUpAvailability.fetchAvailability(this.currentVariant.id);
    } else {
      pickUpAvailability.removeAttribute('available');
      pickUpAvailability.innerHTML = '';
    }
  }

  removeErrorMessage() {
    const section = this.closest('section');
    if (!section) return;

    const productForm = section.querySelector('t-product-form');
    if (productForm) productForm.handleErrorMessage();
  }

  renderProductInfo() {
    THelper.fetch(
      { type: 'text' },
      `${this.dataset.url}?variant=${this.currentVariant.id}&section_id=${this.dataset.section}`
    ).then(responseText => {
      const id = `price-${this.sectionHandle}`;
      const html = new DOMParser().parseFromString(responseText, 'text/html');
      const destination = document.getElementById(id);
      const source = html.getElementById(id);

      if (source && destination) destination.innerHTML = source.innerHTML;
      const price = document.getElementById(`price-${this.dataset.section}`);

      if (price) price.classList.remove('visibility-hidden');
      this.toggleAddButton(
        !this.currentVariant.available,
        ''
      );
    });
  }
  renderListProductInfo() {
    fetch(
      `${this.dataset.url}?variant=${this.currentVariant.id}&section_id=${this.dataset.section}&sections=price-section`
    )
      .then(response => response.text())
      .then(responseText => {

        const id = `price-${this.sectionHandle}`;
        responseText = JSON.parse(responseText)['price-section'];
        responseText = responseText.replace(
          /price-section/gi,
          this.dataset.section
        );

        const html = new DOMParser().parseFromString(responseText, 'text/html');
        const destination = document.getElementById(id);
        const source = html.getElementById(id);
        if (source && destination) destination.innerHTML = source.innerHTML;
        const price = document.getElementById(`price-${this.sectionHandle}`);
        if (price) price.classList.remove('visibility-hidden');
        this.toggleAddButton(
          !this.currentVariant.available,
          ''
        );
      })
      .catch(e => {
        console.log(e);
      });
  }

  toggleAddButton(disable = true, text) {
    const productForm = document.getElementById(`product-form-${this.sectionHandle}`);
    if (!productForm) return;
    THelper.toggleAddButton(productForm, disable, text)
  }

  setUnavailable() {
    const button = document.getElementById(`product-form-${this.sectionHandle}`);
    const addButton = button.querySelector('[name="add"]');
    const addButtonText = button.querySelector('[name="add"] > span');
    const price = document.getElementById(`price-${this.sectionHandle}`);
    if (!addButton) return;
    addButtonText.textContent = window.tCobo.unavailable;
    if (price) price.classList.add('visibility-hidden');
  }
  /**
   *  ## 获取`product`的`variant` 数组
   * 
   * @returns  `variant` 数组
   */
  getVariantData() {
    this.variantData = JSON.parse(this.querySelector('[type="application/json"]').textContent);
    return this.variantData;
  }
}
if (!customElements.get(TConsts.VARIANT_SELECTS)) customElements.define(TConsts.VARIANT_SELECTS, TVariantSelects);

/***
 *  ## variant radios of product form structure
 */
class TVariantRadios extends TVariantSelects {

  constructor() {
    super();
  }
  updateOptions() {
    const fieldsets = Array.from(this.querySelectorAll('fieldset'));
    this.options = fieldsets.map((fieldset) => {
      return Array.from(fieldset.querySelectorAll('input')).find((radio) => radio.checked).value;
    }).sort();
  }
}
if (!customElements.get(TConsts.VARIANT_RADIOS)) customElements.define(TConsts.VARIANT_RADIOS, TVariantRadios);

class TPopup extends BaseV2 {
  closeEvent() {
    let closeEl = this.querySelector(".pop-close");
    console.log(closeEl);
    if (closeEl) {
      this.addEvent(closeEl, "click", () => {
        // this.style.display = "none";
        this.classList.remove('active');
      });
    }
    this.addEvent(this, 'click', (event) => {
      console.log(event)
    })
  }
  close() {
    this.classList.remove('active');
  }
  connectedCallback() {
    this.closeEvent();
  }
  open(type = `t-add-to-cart-slide`) {
    //this.style.display = "block";
    this.setAttribute('view-type', type)
    this.classList.add('active');
  }
  openByType(type = 't-add-to-cart-slide') {
    this.setAttribute('view-type', type)
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
  parseAvailable(str, product) {
    let targets = TDomHelper.parseFromStringV2(str).querySelector('[type="page-metafields"]')
    let availabileOptionMap = {}
    let variantMap = Object.keys(targets.dataset).reduce((res, key) => {
      if (key.startsWith('v-')) {
        let id = key.replace('v-', '')
        res[id] = targets.dataset[key]
        let currentVariant = product.variants.find(v => `${v.id}` == id);
        currentVariant.available = targets.dataset[key] == 'true'
        if (currentVariant.available) {
          let options = currentVariant.title.split('/').map(item => item.trim())
          if (!availabileOptionMap[options[0]]) {
            availabileOptionMap[options[0]] = []
          } else if (options[1]) {
            availabileOptionMap[options[0]].push(options[1])
          }

        }
      }
      else if (key.endsWith('firstAvailableVariant')) {
        product.firstAvailableVariant = targets.dataset[key]
      } else if (key.startsWith('handle')) {
        let handle = key.replace('handle', '').replace(/_/ig, '-')
        handle = handle.charAt(0).toLowerCase() + handle.slice(1)
        if (!product.related) product.related = []
        product.related.push({ src: targets.dataset[key], handle })
      } else if (key.startsWith('color-')) {
        if (!product.color) product.color = {}
        product.color[targets.dataset[key].trim()] = key.replace('color-', '')
      } else if (key.endsWith('includeCollection')) {
        product[`includeCollection`] = targets.dataset[key]
      }
      product.availabileOptionMap = availabileOptionMap
      product.firstAvailableVariantData = product.variants.find(item => `${item.id}` == `${product.firstAvailableVariant}`)
      return res;
    }, {})

    return product
  }
  async init(handle) {
    if (this.isMobile()) {
      this.querySelector('.m-images-container').appendChild(this.querySelector('.sf-prod-media__wrapper'))
    }
    let [res_1, res] = await Promise.all([
      this.fetch(`/products/${handle}?view=metafields`, { method: 'GET' }, `text/html`),
      this.fetch(`/products/${handle}.json`)
    ]); // {product:{}}
    this.product = this.parseAvailable(res_1, res.product)

    console.log(this.product)
    this.initImages(res.product.images);

    this.initProductInfo(res.product)
    this.ajaxForm(() => {
      let v = this.querySelector('t-variant-radios').getCurrentSelectedVariant()

      this.closest('t-popup').querySelector('t-added-to-cart-slide').initSelected(this.product, v)
      this.closest('t-popup').openByType('t-added-to-cart-slide')
    })
    this.initEvent();

    // Close btn loading
    THelper.debounce(() => {
      this.closest('t-popup').open()
      let spinners = Array.from(document.querySelectorAll(`[href*=\"${handle}\"]`)).filter(item => item.closest('form')?.querySelector?.('.t-spinner'));
      spinners.map(item => {
        let btn = item.closest('form').querySelector('.t-spinner')
        if (btn) THelper.cancelBtnLoading(btn.parentElement)
      })
    }, 1800)()

  }
  product = null;
  initImages(images) {
    let imgEl = this.querySelector(".mobile__slider");
    images.forEach((image, index) => {
      let imgClone = index == 0 ? imgEl : imgEl.cloneNode(true);
      //      imgClone = imgEl.cloneNode(true);

      let img_1 = image.src.split(".jpg?");
      let imgFn = (param) => {
        return [img_1[0], param, ".jpg?", img_1[1]].join("");
      };
      let imgSubEl = imgClone.querySelector("img");
      let img_path = `${imgFn(`_180x`)} 180w, ${imgFn(`_360x`)} 360w, ${imgFn(
        `_540x`
      )} 540w, ${imgFn(`_666x`)} 666w`;
      imgSubEl.setAttribute("srcset", img_path);
      imgSubEl.setAttribute("data-srcset", img_path);
      imgEl.parentElement.appendChild(imgClone);
    });
    if (this.isMobile()) {
      this.querySelector('.sf-product-media__mobile').style.width = `calc(${(images.length)}*75vw + 10px * ${images.length - 1})`
    }
  }
  connectedCallback() {

  }
  initEvent() {
    this.addEvent(this, 'change', () => {
      ///console.log('change event');
      this.updatePrice()
    })
  }
  updatePrice() {
    let current = this.querySelector('t-variant-radios').getCurrentSelectedVariant()
    this.querySelector('.p-price').innerHTML = THelper.moneyFn(100 * current.price)
    this.querySelector('[name="id"]').value = current.id
  }


  initProductInfo(p, v) {
    this.querySelector('.p-title').innerHTML = p.title
    this.querySelector('.p-vendor').innerHTML = p.vendor
    if (!v) {
      if (p.includeCollection) {
        this.querySelector('.p-collections div').innerHTML = p.includeCollection.split('\n').join('<br/>')
        this.querySelector('.p-collections').style.display = 'block'
      } else {
        this.querySelector('.p-collections').style.display = 'none'
      }
    }
    p.variants = p.variants.map(item => {
      item.options = item.title.split('/').map(item => item.trim())
      return item;
    })
    let tags = p.tags.split(','), url = '/pages/beddings-size-chart'
    if (tags.includes('bedlinens')) {
      url = '/pages/beddings-size-chart'
    } else if (tags.includes('bathlinens')) {
      url = '/pages/bath-size-chart'
    } else if (tags.includes('bedroom-essentials')) {
      url = '/pages/bedroom-essentials-size-chart'
    }
    else if (tags.includes('lounge-wear')) {
      url = '/pages/lounge-wear-size-chart'
    }
    let sizeLink = `<a href="${url}"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M4.3 17.5q-.75 0-1.275-.525Q2.5 16.45 2.5 15.7V8.3q0-.75.525-1.275Q3.55 6.5 4.3 6.5h15.4q.75 0 1.275.525.525.525.525 1.275v7.4q0 .75-.525 1.275-.525.525-1.275.525Zm0-1.5h15.4q.1 0 .2-.1t.1-.2V8.3q0-.1-.1-.2t-.2-.1h-2.95v3.625h-1.5V8h-2.5v3.625h-1.5V8h-2.5v3.625h-1.5V8H4.3q-.1 0-.2.1t-.1.2v7.4q0 .1.1.2t.2.1Zm2.95-4.375h1.5Zm4 0h1.5Zm4 0h1.5ZM12 12Z"/></svg></a>`
    //let availabileOptions = p.firstAvailableVariantData?.options ?? [] //

    if (this.querySelector('t-variant-radios') && !v) {
      let availabileOptions = []
      this.querySelector('t-variant-radios').innerHTML = p.options.map((item, index) => {
        let firstChecked = ''
        if (index == 0) {
          //availabileOptions = p.availabileOptionMap[item.]
        }
        let options = item.values.map((v, vIndex) => {
          if (availabileOptions.includes(v) && p.firstAvailableVariant) firstChecked = v.toLowerCase()
          return `<div><input type="radio" id="t-add-to-cart-slide-form-${index}-${vIndex}" ${p.firstAvailableVariant ? '' : ' disabled="disabled" '} name="${item.name}" value="${v}" form="t-add-to-cart-slide-form" class="t-radio-btn"
                          ${availabileOptions.includes(v) && p.firstAvailableVariant ? 'checked="checked"' : ''} ><label 
                            style="${item.name == 'Color' ? 'background-color:' + p.color[v] + ';' : ''}"
                          for="t-add-to-cart-slide-form-${index}-${vIndex}" class="bleu-denim"><span>${v}</span></label></div>`
        }).join('')
        return `<div class="${item.name == 'Color' ? 'color-options' : ''}">
        <span class="${item.name == 'Size' ? 'size-container' : 'size-container'} flex-center" style=" justify-content: flex-start;">
        ${item.name}:${item.name == 'Size' ? `<span>${(p.firstAvailableVariantData?.[`option` + (index + 1)] ?? '').toLowerCase()}</span>` + sizeLink : ' <span>' + firstChecked.toLowerCase() + '</span>'}</span/><fieldset class="t-js t-product-form__input option-${item.name}">${options}</fieldset></div>
          <script type="application/json">${JSON.stringify(p.variants)}</script>`
      }).join('')
      this.querySelector('t-variant-radios').updateAvaliableOptions(true)
      this.querySelector('.p-detail').setAttribute('href', `/products/${p.handle}`)
      this.updatePrice()
    } else if (this.querySelector('.p-variants') && v) { // 
      this.querySelector('.p-variants').innerHTML = v.options.map((item, index) => {
        return `<span>${p.options[index].name}: <b>${item}</b></span>`
      }).join('')
      this.querySelector('.p-price').innerHTML = THelper.moneyFn(100 * v.price)
      this.querySelector('.added-to-cart-img img').setAttribute('src', p.image.src)
      this.queryAll(this, '.items-look')[0].innerHTML = p.related.map(item => {
        return `<div class="item-look">
                  <a href="/products/${item.handle}">
                    <img
                      src="${item.src}"
                      alt=""
                    >
                  </a>
                </div>`
      }).join('')

    }
    if (p.firstAvailableVariant) {
      if (this.querySelector('.klaviyo-form-customize')) this.querySelector('.klaviyo-form-customize').style.display = 'none'
      if (this.querySelector('.product-form')) this.querySelector('.product-form').style.display = 'block'
    } else {
      if (this.querySelector('.klaviyo-form-customize')) this.querySelector('.klaviyo-form-customize').style.display = 'block'
      if (this.querySelector('.product-form')) this.querySelector('.product-form').style.display = 'none'

    }
  }



}
if (!customElements.get(`t-add-to-cart-slide`)) {
  customElements.define(`t-add-to-cart-slide`, AddToCartSlide);
}
class AddedToCartSlide extends AddToCartSlide {
  constructor() {
    super();
  }
  async initSelected(product, variant) {
    this.initProductInfo(product, variant)
    let res = await this.fetch('/cart')
    this.querySelector(`[type="submit"]`).innerHTML = `CHECKOUT (${res.item_count})`
  }
  ajaxForm() { }
  init() {
    this.addEvent(this.querySelector('.btn-contine'), 'click', () => {
      this.closest('t-popup').close()
    })
  }
  connectedCallback() { }
}
if (!customElements.get(`t-added-to-cart-slide`)) {
  customElements.define(`t-added-to-cart-slide`, AddedToCartSlide);
}

THelper.DOMready(() => {
  document.addEventListener('click', (evt) => {
    console.log(evt.currentTarget)

    // add to tag
    if (evt.target.tagName == 'T-POPUP') {
      evt.target.close()
    } else if (evt.target.closest('.wish_shop_btn')) {
      THelper.btnLoading(evt.target)
      let link = evt.target.closest('.sf__pcard').querySelector('.sf__pcard-name')
      if (link) {
        let handle = link.getAttribute('href').split('/').slice(-1)[0].split('?')[0]
        document.querySelector('t-add-to-cart-slide').init(handle)
      }
    }
  })
  let timer = 0
  let intervaler = setInterval(() => {
    let btns = queryAll(document, '.wish_shop_btn a')
    //console.log(btns)
    btns.forEach(item => {
      item.setAttribute('href', `javascript:void(0)`)
      item.innerHTML = 'Add to Bag'
    })
    if (timer > 10) {
      intervaler && clearInterval(intervaler)
    }
    timer++;
  }, 1000)

})