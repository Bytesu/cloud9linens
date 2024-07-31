/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7345:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);


class I18N {
  constructor() {
    var _window$spratlyThemeS, _window$spratlyThemeS2;

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, "shop_locale", ((_window$spratlyThemeS = window.spratlyThemeSettings) === null || _window$spratlyThemeS === void 0 ? void 0 : (_window$spratlyThemeS2 = _window$spratlyThemeS.shop_locale) === null || _window$spratlyThemeS2 === void 0 ? void 0 : _window$spratlyThemeS2.current) || 'en');

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, "locales", {
      'default': {
        add_button: "Add",
        added_button: "Added",
        bundle_button: "Add selected item(s)",
        bundle_saved: "Saved",
        bundle_select: "Select",
        bundle_selected: "Selected",
        bundle_this_item: "This item",
        bundle_total: "Total price",
        checkout: "Checkout",
        discount_summary: "You will get <strong>{discount_value} OFF</strong> on each product",
        discount_title: "SPECIAL OFFER",
        free: "FREE",
        incart_title: "Customers also bought with \"{product_title}\"",
        prepurchase_added: "You just added",
        prepurchase_title: "Frequently bought with \"{product_title}\"",
        qty_discount_note: "on each product",
        qty_discount_title: '{item_count} item(s) get {discount_value} OFF',
        sizechart_button: "Size chart",
        field_name: 'Enter your name',
        field_email: 'Enter your email',
        field_birthday: 'Date of birth',
        discount_noti: '* Discount will be calculated and applied at checkout',
        fox_discount_noti: `* You are entitled to 1 discount offer of <span>{price}</span> (<span>{discount_title}</span>). This offer <b>can't be combined</b> with any other discount you add here!`
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, "tr", (key, _params = {}) => {
      var _locales$shop_locale;

      const {
        locales,
        shop_locale
      } = this;
      let text = ((_locales$shop_locale = locales[shop_locale]) === null || _locales$shop_locale === void 0 ? void 0 : _locales$shop_locale[key]) || locales['default'][key] || `Foxkit: translation missing for ${key}!`;
      const params = Object.keys(_params);

      if (params.length) {
        Object.entries(_params).forEach(([k, v]) => text = text.replace(`{${k}}`, v));
      }

      return text;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, "setLocales", (locale, data) => {
      this.locales[locale] = data;
    });
  }

}

const i18n = window.__i18n || new I18N();
window.__i18n = window.__i18n || i18n;
/* harmony default export */ __webpack_exports__["default"] = (i18n);

/***/ }),

/***/ 6295:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2422);
/* harmony import */ var mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0__);


class JSX {
  constructor() {
    this.component = this.component.bind(this);
    return this.component;
  }

  component(tagName, attrs, ...children) {
    if (typeof tagName === 'function') {
      // Override children
      return tagName({ ...attrs,
        children
      });
    }

    if (children) {
      children = children.filter(val => val !== null);
    }

    if (attrs) {
      if (attrs.class) {
        attrs.className = attrs.class;
      }

      delete attrs.children;
    } // Normal DOM node tagName


    function createWithAttrs(tagName, attrs) {
      attrs = attrs || {};
      let elem = document.createElement(tagName);

      try {
        elem = Object.assign(elem, attrs);
      } catch {
        const attrKeys = Object.keys(attrs);

        for (let i = 0; i < attrKeys.length; i++) {
          if (attrs[i] !== 'dataSet') {
            elem.setAttribute(attrKeys[i], attrs[attrKeys[i]]);
          }
        }
      }

      return elem;
    }

    let elem = tagName !== 'fragment' ? createWithAttrs(tagName, attrs) : document.createDocumentFragment(); // Evaluate SVG DOM node tagName
    // All svg inner tags: https://developer.mozilla.org/en-US/docs/Web/SVG/Element

    const svgInnerTags = ['svg', 'path', 'rect', 'text', 'circle', 'g'];

    if (svgInnerTags.indexOf(tagName) !== -1) {
      elem = document.createElementNS('http://www.w3.org/2000/svg', tagName);

      for (const key in attrs) {
        const attrName = key === 'className' ? 'class' : key;
        elem.setAttribute(attrName, attrs[key]);
      }
    } // Populate children to created DOM Node


    for (const child of children) {
      if (Array.isArray(child)) {
        elem.append(...child);
      } else {
        elem.append(child);
      }
    } // After elements are created


    if (attrs !== null && attrs !== void 0 && attrs.dataSet) {
      for (const key in attrs.dataSet) {
        if (Object.prototype.hasOwnProperty.call(attrs.dataSet, key)) {
          elem.dataset[key] = attrs.dataSet[key];
        }
      }
    }

    if (attrs && !window.__aleartedJSXData) {
      if (Object.keys(attrs).find(key => key.match(/^data-/))) {
        console.trace(`Your "${tagName}" component uses a data-* attribute! Use dataSet instead!!`);
        alert('Do not use data-* in your JSX component! Use dataSet instead!! - Check the console.trace for more info');
        window.__aleartedJSXData = true;
      }
    }

    if (attrs !== null && attrs !== void 0 && attrs.ref) {
      // Create a custom reference to DOM node
      if (typeof attrs.ref === 'function') {
        attrs.ref(elem);
      } else {
        attrs.ref = elem;
      }
    }

    if (attrs !== null && attrs !== void 0 && attrs.on) {
      Object.entries(attrs.on).forEach(([event, handler]) => {
        elem.addEventListener(event, handler);
      });
    } // Append style attributes to created DOM node


    if (attrs !== null && attrs !== void 0 && attrs.style) {
      Object.entries(attrs.style).forEach(([property, value]) => {
        elem.style.setProperty(property, value);
      }); // Object.assign(elem.style, attrs.style);
    }

    return elem;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new JSX());

/***/ }),

/***/ 2422:
/***/ (function() {

!function () {
  function t() {
    var e = Array.prototype.slice.call(arguments),
        n = document.createDocumentFragment();
    e.forEach(function (e) {
      var t = e instanceof Node;
      n.appendChild(t ? e : document.createTextNode(String(e)));
    }), this.appendChild(n);
  }

  [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (e) {
    e.hasOwnProperty("append") || Object.defineProperty(e, "append", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  });
}();

/***/ }),

/***/ 4942:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
;// CONCATENATED MODULE: ./src/js/components/LazyImage.jsx
/* provided dependency */ var createElement = __webpack_require__(6295)["default"];
/* harmony default export */ function LazyImage(props) {
  const {
    src,
    alt,
    style = {},
    className = '',
    onLoad = () => {},
    onError = () => {}
  } = props;
  const image = createElement("img", {
    style: style,
    className: `transition-opacity opacity-0 ${className}`,
    src: src,
    alt: alt
  });
  image.addEventListener('load', imgLoaded);
  image.addEventListener('error', imgError);

  if (image.complete && image.naturalWidth) {
    imgLoaded();
  }

  function imgLoaded() {
    onLoad && onLoad();
    image.classList.add('opacity-100');
    image.removeEventListener('load', imgLoaded);
    image.removeEventListener('error', imgError);
  }

  function imgError(err) {
    console.error('Failed to load LazyImage. ', err, props);
    onError && onError();
    image.style.opacity = 0;
    image.removeEventListener('load', imgLoaded);
    image.removeEventListener('error', imgError);
  }

  return image;
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-images/images.js
/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * https://github.com/Shopify/slate.git.
 *
 */

/**
 * Preloads an image in memory and uses the browsers cache to store it until needed.
 *
 * @param {Array} images - A list of image urls
 * @param {String} size - A shopify image size attribute
 */
function preload(images, size) {
  if (typeof images === 'string') {
    images = [images];
  }

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    loadImage(getSizedImageUrl(image, size));
  }
}
/**
 * Loads and caches an image in the browsers cache.
 * @param {string} path - An image url
 */

function loadImage(path) {
  new Image().src = path;
}
/**
 * Find the Shopify image attribute size
 *
 * @param {string} src
 * @returns {null}
 */

function imageSize(src) {
  const match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

  if (match) {
    return match[1];
  } else {
    return null;
  }
}
/**
 * Adds a Shopify size attribute to a URL
 *
 * @param src
 * @param size
 * @returns {*}
 */

function getSizedImageUrl(src, size) {
  if (size === null) {
    return src;
  }

  if (size === 'master') {
    return removeProtocol(src);
  }

  const match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

  if (match) {
    const prefix = src.split(match[0]);
    const suffix = match[0];
    return removeProtocol(`${prefix[0]}_${size}${suffix}`);
  } else {
    return null;
  }
}
function removeProtocol(path) {
  return path.replace(/http(s)?:/, '');
}
;// CONCATENATED MODULE: ./src/js/utilities/fetch.js
/* provided dependency */ var fetch_createElement = __webpack_require__(6295)["default"];
const requestDefaultConfigs = {
  mode: 'same-origin',
  credentials: 'same-origin',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
};
function fetch_getRequestDefaultConfigs() {
  return JSON.parse(JSON.stringify(requestDefaultConfigs));
}
const fetch_fetchJSON = (url, config = fetch_getRequestDefaultConfigs()) => {
  return fetch(url, config).then(function (response) {
    if (!response.ok) {
      throw response;
    }

    return response.json();
  });
};
const cache = new Map();
const fetchCache = (url, config = fetch_getRequestDefaultConfigs()) => {
  return new Promise((resolve, reject) => {
    let cached = cache.get(url);
    if (cached) return resolve(cached);
    fetch(url, config).then(res => {
      cached = res.text();
      cache.set(url, cached);
      resolve(cached);
    }).catch(reject);
  });
};
const sectionCache = new Map();
const fetchSection = (sectionId, fetchFromCache = false) => {
  return new Promise((resolve, reject) => {
    if (fetchFromCache) {
      const cached = sectionCache.get(sectionId);
      if (cached) return resolve(cached);
    }

    fetch(`${window.spratlyThemeSettings.rootUrl}?section_id=${sectionId}`, fetch_getRequestDefaultConfigs()).then(res => res.text()).then(html => {
      const div = fetch_createElement("div", null);
      div.innerHTML = html;
      sectionCache.set(sectionId, div);
      resolve(div);
    }).catch(reject);
  });
};
const cache2 = new Map();
const fetch_fetchJsonCache = (url, config = requestDefaultConfigs) => {
  return new Promise((resolve, reject) => {
    if (cache2.get(url)) {
      return resolve(cache2.get(url));
    }

    fetch(url, config).then(res => {
      if (res.ok) {
        const json = res.json();
        resolve(json);
        cache2.set(url, json);
        return json;
      } else {
        reject(res);
      }
    }).catch(reject);
  });
};
;// CONCATENATED MODULE: ./src/js/foxkit/helpers.js
/* provided dependency */ var helpers_createElement = __webpack_require__(6295)["default"];
/* provided dependency */ var i18n = __webpack_require__(7345)["default"];



if (!String.prototype.capitalize) {
  String.prototype.capitalize = function () {
    var _this$, _this$$toUpperCase;

    return this.replace(this[0], (_this$ = this[0]) === null || _this$ === void 0 ? void 0 : (_this$$toUpperCase = _this$.toUpperCase) === null || _this$$toUpperCase === void 0 ? void 0 : _this$$toUpperCase.call(_this$));
  };
}

function handleSubscribe(data) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: new URLSearchParams({
      data: JSON.stringify(data)
    })
  };
  return new Promise((resolve, reject) => {
    fetch(`${window.FoxKit.appURL}/api/public/subscribe?shop=${window.Shopify.shop}`, requestOptions).then(response => response.json()).then(resolve).catch(reject);
  });
}
function copyToClipboard(value, button) {
  const input = document.body.appendChild(document.createElement("input"));
  input.value = value;
  input.select();
  document.execCommand('copy');
  input.parentNode.removeChild(input);
  if (button) button.innerText = 'Copied';
}
function insertAfter(newNode, referenceNode) {
  if (!referenceNode) return;
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function productUrlByHandle(handle) {
  var _window$spratlyThemeS;

  return `${(_window$spratlyThemeS = window.spratlyThemeSettings) === null || _window$spratlyThemeS === void 0 ? void 0 : _window$spratlyThemeS.shop_domain}/products/${handle}`;
}
function addToCart(data = []) {
  return new Promise((resolve, reject) => {
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
      resolve(data);
      const addedItem = data === null || data === void 0 ? void 0 : data.items[0];
      addedItem.source = 'quantity-upsell';
      window.Shopify.onItemAdded(addedItem);
    }).catch(reject);
  });
}
function changeCart(lineItem) {
  return fetchJSON('/cart/change.js', { ...getRequestDefaultConfigs(),
    method: 'POST',
    body: JSON.stringify(lineItem)
  });
}
async function getJsonProducts(handles) {
  if ((handles === null || handles === void 0 ? void 0 : handles.length) < 1) return [];
  const products = [];
  const promises = handles.map(async hdl => {
    try {
      const data = await fetchJsonCache(`/products/${hdl}.js`);
      if (data) products.push(data);
    } catch (err) {
      console.error(err);
    }
  });
  await Promise.all(promises);
  return products;
}
const maxBy = (arr, key) => arr.reduce((acc, curr) => acc[key] >= curr[key] ? acc : curr, {});
function getDiscountSummary(discount) {
  var _window$Shopify, _window$Shopify$curre, _window, _window$spratlyThemeS2;

  const discountText = helpers_createElement("span", null);
  const discountValue = (discount === null || discount === void 0 ? void 0 : discount.type) === 'PERCENTAGE' ? `${discount === null || discount === void 0 ? void 0 : discount.value}%` : formatMoney((discount === null || discount === void 0 ? void 0 : discount.value) * 100 * Number(((_window$Shopify = window.Shopify) === null || _window$Shopify === void 0 ? void 0 : (_window$Shopify$curre = _window$Shopify.currency) === null || _window$Shopify$curre === void 0 ? void 0 : _window$Shopify$curre.rate) || 1), (_window = window) === null || _window === void 0 ? void 0 : (_window$spratlyThemeS2 = _window.spratlyThemeSettings) === null || _window$spratlyThemeS2 === void 0 ? void 0 : _window$spratlyThemeS2.money_format);
  discountText.innerHTML = i18n.tr('discount_summary', {
    'discount_value': discountValue
  });
  return discountText;
}
function lightOrDark(color) {
  // Variables for red, green, blue values
  var r, g, b, hsp; // Check the format of the color, HEX or RGB?

  if (color.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    // If hex --> Convert it to RGB: http://gist.github.com/983661
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
    r = color >> 16;
    g = color >> 8 & 255;
    b = color & 255;
  } // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html


  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b)); // Using the HSP value, determine whether the color is light or dark

  if (hsp > 127.5) {
    return 'light';
  } else {
    return 'dark';
  }
}
;// CONCATENATED MODULE: ./src/js/components/SalePopup.jsx
/* provided dependency */ var SalePopup_createElement = __webpack_require__(6295)["default"];
// eslint-disable-next-line no-unused-vars



/* harmony default export */ function SalePopup({
  product,
  hideOnMobile,
  message,
  time,
  handleRemove,
  handleMouseEnter,
  handleMouseLeave
}) {
  const {
    title,
    handle,
    image
  } = product;
  const aspectRatio = (image === null || image === void 0 ? void 0 : image.width) / (image === null || image === void 0 ? void 0 : image.height);
  return SalePopup_createElement("div", {
    className: `sale-pop fixed transition-all duration-300 opacity-0 translate-y-1/3 ${hideOnMobile ? 'hide-on-mobile' : ''}`,
    style: {
      'box-shadow': '0 0 10px 0 rgba(0, 0, 0, 0.09)',
      width: '380px',
      'z-index': 99,
      'max-width': '90vw'
    },
    on: {
      'mouseenter': handleMouseEnter,
      'mouseleave': handleMouseLeave
    }
  }, SalePopup_createElement("div", {
    className: "bg-white flex relative overflow-hidden",
    style: {
      padding: '10px'
    }
  }, image && SalePopup_createElement("a", {
    href: productUrlByHandle(handle),
    className: "flex-shrink-0",
    style: {
      width: '60px',
      '--aspect-ratio': aspectRatio
    }
  }, SalePopup_createElement(LazyImage, {
    src: getSizedImageUrl(image.src, '200x'),
    alt: title,
    style: {
      'object-fit': 'contain'
    }
  })), SalePopup_createElement("div", {
    className: "flex-grow flex flex-col justify-between",
    style: {
      'margin-left': '24px',
      width: '276px'
    }
  }, SalePopup_createElement("div", {
    className: "mb-4"
  }, message && SalePopup_createElement("p", {
    className: "mb-1 text-sm line-clamp-2",
    style: {
      'padding-right': '32px'
    }
  }, message), SalePopup_createElement("a", {
    className: "font-medium text-[18px] hover:text-color-primary-darker line-clamp-2",
    href: productUrlByHandle(handle)
  }, title)), time && SalePopup_createElement("div", {
    className: "flex items-center opacity-40"
  }, SalePopup_createElement("svg", {
    className: "flex-shrink-0",
    style: {
      width: '12px',
      height: '12px'
    },
    fill: "currentColor",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, SalePopup_createElement("path", {
    d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"
  })), SalePopup_createElement("p", {
    className: "ml-2 text-xs line-clamp-2"
  }, time))), SalePopup_createElement("div", {
    className: "absolute right-4 top-4 sale-pop-remove cursor-pointer bg-white z-10",
    on: {
      'click': handleRemove
    }
  }, SalePopup_createElement("svg", {
    style: {
      width: '12px',
      height: '12px'
    },
    fill: "currentColor",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, SalePopup_createElement("path", {
    d: "M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
  })))));
}
;// CONCATENATED MODULE: ./src/js/modules/sales-notifications.js
/* provided dependency */ var sales_notifications_createElement = __webpack_require__(6295)["default"];

// eslint-disable-next-line no-unused-vars


class SalesNotifications {
  constructor(settings = {}) {
    (0,defineProperty/* default */.Z)(this, "shuffleProducts", []);

    (0,defineProperty/* default */.Z)(this, "popupItem", null);

    (0,defineProperty/* default */.Z)(this, "showTimeoutId", -1);

    (0,defineProperty/* default */.Z)(this, "removeTimeoutId", -1);

    (0,defineProperty/* default */.Z)(this, "transitionDuration", 300);

    (0,defineProperty/* default */.Z)(this, "showCount", 0);

    (0,defineProperty/* default */.Z)(this, "showPopup", () => {
      if (this.popupItem) this.removePopup();
      if (this.showCount >= this.settings.maximum) return;
      setTimeout(() => {
        const product = this.shuffleProducts.splice(Math.random() * this.shuffleProducts.length | 0, 1)[0]; // console.log('=========> show prod sale popup', product, this.shuffleProducts, this.showCount + 1)

        if (product) {
          const {
            message,
            time
          } = this.generateData();
          this.popupItem = sales_notifications_createElement(SalePopup, {
            product: product,
            message: message,
            time: time,
            hideOnMobile: this.settings.hideOnMobile,
            handleRemove: this.handleClickRemove,
            handleMouseEnter: this.handleMouseEnter,
            handleMouseLeave: this.handleMouseLeave
          });
          document.body.appendChild(this.popupItem);
          setTimeout(() => this.popupItem.classList.add('show'), 50);
          this.removeTimeoutId = setTimeout(this.removePopup, this.settings.duration * 1000);
          this.showCount += 1;

          if (!this.shuffleProducts.length) {
            this.shuffleProducts = Array.from(this.settings.products);
          }

          const delayTime = this.getRandomDelayTime();
          this.showTimeoutId = setTimeout(this.showPopup, delayTime);
        }
      }, this.transitionDuration);
    });

    (0,defineProperty/* default */.Z)(this, "generateData", () => {
      const {
        names = [],
        locations = [],
        title,
        time: timeTemplate
      } = this.settings;
      const randomName = names[Math.random() * names.length | 0].trim();
      const randomLocation = locations[Math.random() * locations.length | 0].trim();
      const randomTime = this.generateTime();
      const message = title === null || title === void 0 ? void 0 : title.replace("{{name}}", randomName).replace("{{location}}", randomLocation);
      const time = timeTemplate === null || timeTemplate === void 0 ? void 0 : timeTemplate.replace("{{time}}", randomTime).replace("{{location}}", randomLocation);
      return {
        message,
        time
      };
    });

    (0,defineProperty/* default */.Z)(this, "generateTime", () => {
      const units = [window.spratlyThemeStrings.mins, window.spratlyThemeStrings.hours];
      const randomInteger = Math.floor(Math.random() * 54) + 5;
      let unit = units[Math.random() * units.length | 0];

      if (randomInteger > 12) {
        unit = units[0];
      }

      return `${randomInteger} ${unit}`;
    });

    (0,defineProperty/* default */.Z)(this, "handleMouseEnter", () => {
      clearTimeout(this.removeTimeoutId);
      clearTimeout(this.showTimeoutId);
    });

    (0,defineProperty/* default */.Z)(this, "handleMouseLeave", () => {
      this.removeTimeoutId = setTimeout(this.removePopup, this.settings.duration * 1000);
      const delayTime = this.getRandomDelayTime();
      this.showTimeoutId = setTimeout(this.showPopup, delayTime);
    });

    (0,defineProperty/* default */.Z)(this, "handleClickRemove", () => {
      this.removePopup();
      const delayTime = this.getRandomDelayTime();
      this.showTimeoutId = setTimeout(this.showPopup, delayTime);
    });

    (0,defineProperty/* default */.Z)(this, "removePopup", () => {
      clearTimeout(this.removeTimeoutId);
      if (!this.popupItem) return;
      this.popupItem.classList.remove('show');
      setTimeout(() => {
        var _this$popupItem, _this$popupItem$remov;

        (_this$popupItem = this.popupItem) === null || _this$popupItem === void 0 ? void 0 : (_this$popupItem$remov = _this$popupItem.remove) === null || _this$popupItem$remov === void 0 ? void 0 : _this$popupItem$remov.call(_this$popupItem);
        this.popupItem = null;
      }, this.transitionDuration);
    });

    (0,defineProperty/* default */.Z)(this, "getRandomDelayTime", () => {
      const {
        delayMin,
        delayMax,
        duration
      } = this.settings;
      let delayTime = delayMin;

      if (delayMax !== delayMin) {
        delayTime = Math.floor(Math.random() * (delayMax - delayMin + 1)) + delayMin;
      }

      return (delayTime + duration) * 1000;
    });

    this.settings = settings;
    const {
      products,
      delay,
      showAfter
    } = this.settings;

    if (products && products.length) {
      const _delay = delay || "10-15";

      const [delayMin, delayMax] = _delay.split("-");

      this.settings.delayMin = Number(delayMin);
      this.settings.delayMax = Number(delayMax || delayMin);
      this.shuffleProducts = Array.from(products);
      setTimeout(this.showPopup, showAfter * 1000);
    }
  }

}

window.FoxKit = window.FoxKit || {};
window.FoxKit.SalesNotifications = SalesNotifications;
}();
/******/ })()
;