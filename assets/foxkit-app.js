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

/***/ 643:
/***/ (function(module) {

var COMPLETE = 'complete',
    CANCELED = 'canceled';

function raf(task) {
  if ('requestAnimationFrame' in window) {
    return window.requestAnimationFrame(task);
  }

  setTimeout(task, 16);
}

function setElementScroll(element, x, y) {
  Math.max(0, x);
  Math.max(0, y);

  if (element.self === element) {
    element.scrollTo(x, y);
  } else {
    element.scrollLeft = x;
    element.scrollTop = y;
  }
}

function getTargetScrollLocation(scrollSettings, parent) {
  var align = scrollSettings.align,
      target = scrollSettings.target,
      targetPosition = target.getBoundingClientRect(),
      parentPosition,
      x,
      y,
      differenceX,
      differenceY,
      targetWidth,
      targetHeight,
      leftAlign = align && align.left != null ? align.left : 0.5,
      topAlign = align && align.top != null ? align.top : 0.5,
      leftOffset = align && align.leftOffset != null ? align.leftOffset : 0,
      topOffset = align && align.topOffset != null ? align.topOffset : 0,
      leftScalar = leftAlign,
      topScalar = topAlign;

  if (scrollSettings.isWindow(parent)) {
    targetWidth = Math.min(targetPosition.width, parent.innerWidth);
    targetHeight = Math.min(targetPosition.height, parent.innerHeight);
    x = targetPosition.left + parent.pageXOffset - parent.innerWidth * leftScalar + targetWidth * leftScalar;
    y = targetPosition.top + parent.pageYOffset - parent.innerHeight * topScalar + targetHeight * topScalar;
    x -= leftOffset;
    y -= topOffset;
    x = scrollSettings.align.lockX ? parent.pageXOffset : x;
    y = scrollSettings.align.lockY ? parent.pageYOffset : y;
    differenceX = x - parent.pageXOffset;
    differenceY = y - parent.pageYOffset;
  } else {
    targetWidth = targetPosition.width;
    targetHeight = targetPosition.height;
    parentPosition = parent.getBoundingClientRect();
    var offsetLeft = targetPosition.left - (parentPosition.left - parent.scrollLeft);
    var offsetTop = targetPosition.top - (parentPosition.top - parent.scrollTop);
    x = offsetLeft + targetWidth * leftScalar - parent.clientWidth * leftScalar;
    y = offsetTop + targetHeight * topScalar - parent.clientHeight * topScalar;
    x -= leftOffset;
    y -= topOffset;
    x = Math.max(Math.min(x, parent.scrollWidth - parent.clientWidth), 0);
    y = Math.max(Math.min(y, parent.scrollHeight - parent.clientHeight), 0);
    x = scrollSettings.align.lockX ? parent.scrollLeft : x;
    y = scrollSettings.align.lockY ? parent.scrollTop : y;
    differenceX = x - parent.scrollLeft;
    differenceY = y - parent.scrollTop;
  }

  return {
    x: x,
    y: y,
    differenceX: differenceX,
    differenceY: differenceY
  };
}

function animate(parent) {
  var scrollSettings = parent._scrollSettings;

  if (!scrollSettings) {
    return;
  }

  var maxSynchronousAlignments = scrollSettings.maxSynchronousAlignments;
  var location = getTargetScrollLocation(scrollSettings, parent),
      time = Date.now() - scrollSettings.startTime,
      timeValue = Math.min(1 / scrollSettings.time * time, 1);

  if (scrollSettings.endIterations >= maxSynchronousAlignments) {
    setElementScroll(parent, location.x, location.y);
    parent._scrollSettings = null;
    return scrollSettings.end(COMPLETE);
  }

  var easeValue = 1 - scrollSettings.ease(timeValue);
  setElementScroll(parent, location.x - location.differenceX * easeValue, location.y - location.differenceY * easeValue);

  if (time >= scrollSettings.time) {
    scrollSettings.endIterations++; // Align ancestor synchronously

    scrollSettings.scrollAncestor && animate(scrollSettings.scrollAncestor);
    animate(parent);
    return;
  }

  raf(animate.bind(null, parent));
}

function defaultIsWindow(target) {
  return target.self === target;
}

function transitionScrollTo(target, parent, settings, scrollAncestor, callback) {
  var idle = !parent._scrollSettings,
      lastSettings = parent._scrollSettings,
      now = Date.now(),
      cancelHandler,
      passiveOptions = {
    passive: true
  };

  if (lastSettings) {
    lastSettings.end(CANCELED);
  }

  function end(endType) {
    parent._scrollSettings = null;

    if (parent.parentElement && parent.parentElement._scrollSettings) {
      parent.parentElement._scrollSettings.end(endType);
    }

    if (settings.debug) {
      console.log('Scrolling ended with type', endType, 'for', parent);
    }

    callback(endType);

    if (cancelHandler) {
      parent.removeEventListener('touchstart', cancelHandler, passiveOptions);
      parent.removeEventListener('wheel', cancelHandler, passiveOptions);
    }
  }

  var maxSynchronousAlignments = settings.maxSynchronousAlignments;

  if (maxSynchronousAlignments == null) {
    maxSynchronousAlignments = 3;
  }

  parent._scrollSettings = {
    startTime: now,
    endIterations: 0,
    target: target,
    time: settings.time,
    ease: settings.ease,
    align: settings.align,
    isWindow: settings.isWindow || defaultIsWindow,
    maxSynchronousAlignments: maxSynchronousAlignments,
    end: end,
    scrollAncestor
  };

  if (!('cancellable' in settings) || settings.cancellable) {
    cancelHandler = end.bind(null, CANCELED);
    parent.addEventListener('touchstart', cancelHandler, passiveOptions);
    parent.addEventListener('wheel', cancelHandler, passiveOptions);
  }

  if (idle) {
    animate(parent);
  }

  return cancelHandler;
}

function defaultIsScrollable(element) {
  return 'pageXOffset' in element || (element.scrollHeight !== element.clientHeight || element.scrollWidth !== element.clientWidth) && getComputedStyle(element).overflow !== 'hidden';
}

function defaultValidTarget() {
  return true;
}

function findParentElement(el) {
  if (el.assignedSlot) {
    return findParentElement(el.assignedSlot);
  }

  if (el.parentElement) {
    if (el.parentElement.tagName === 'BODY') {
      return el.parentElement.ownerDocument.defaultView || el.parentElement.ownerDocument.ownerWindow;
    }

    return el.parentElement;
  }

  if (el.getRootNode) {
    var parent = el.getRootNode();

    if (parent.nodeType === 11) {
      return parent.host;
    }
  }
}

module.exports = function (target, settings, callback) {
  if (!target) {
    return;
  }

  if (typeof settings === 'function') {
    callback = settings;
    settings = null;
  }

  if (!settings) {
    settings = {};
  }

  settings.time = isNaN(settings.time) ? 1000 : settings.time;

  settings.ease = settings.ease || function (v) {
    return 1 - Math.pow(1 - v, v / 2);
  };

  settings.align = settings.align || {};
  var parent = findParentElement(target),
      parents = 1;

  function done(endType) {
    parents--;

    if (!parents) {
      callback && callback(endType);
    }
  }

  var validTarget = settings.validTarget || defaultValidTarget;
  var isScrollable = settings.isScrollable;

  if (settings.debug) {
    console.log('About to scroll to', target);

    if (!parent) {
      console.error('Target did not have a parent, is it mounted in the DOM?');
    }
  }

  var scrollingElements = [];

  while (parent) {
    if (settings.debug) {
      console.log('Scrolling parent node', parent);
    }

    if (validTarget(parent, parents) && (isScrollable ? isScrollable(parent, defaultIsScrollable) : defaultIsScrollable(parent))) {
      parents++;
      scrollingElements.push(parent);
    }

    parent = findParentElement(parent);

    if (!parent) {
      done(COMPLETE);
      break;
    }
  }

  return scrollingElements.reduce((cancel, parent, index) => transitionScrollTo(target, parent, settings, scrollingElements[index + 1], done), null);
};

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

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
;// CONCATENATED MODULE: ./src/js/utilities/fetch.js
/* provided dependency */ var createElement = __webpack_require__(6295)["default"];
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
      const div = createElement("div", null);
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
;// CONCATENATED MODULE: ./src/js/utilities/load-assets.js
function load_assets_loadJS(src, target = document.body, async = true, defer = false) {
  return new Promise((resolve, reject) => {
    const doc = target.ownerDocument;
    const currScript = doc.querySelector(`script[src="${src}"]`);

    if (currScript) {
      if (currScript.dataset.loaded) return resolve(true);
      currScript.addEventListener("load", () => {
        currScript.dataset.loaded = true;
        resolve(true);
      });
      return;
    }

    const script = doc.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;
    script.addEventListener("load", () => {
      script.dataset.loaded = true;
      resolve(true);
    });
    script.onerror = reject;
    target.appendChild(script);
  });
}
function load_assets_loadCSS(href, target = document.head) {
  return new Promise((resolve, reject) => {
    const doc = target.ownerDocument;
    const currLink = doc.querySelector(`link[href="${href}"]`);

    if (currLink) {
      if (currLink.dataset.loaded) return resolve(true);
      currLink.addEventListener("load", () => {
        currLink.dataset.loaded = true;
        resolve(true);
      });
      return;
    }

    const link = doc.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.addEventListener("load", () => {
      link.dataset.loaded = true;
      resolve(true);
    });
    link.onerror = reject;
    target.appendChild(link);
  });
}
const {
  themeScriptURLs,
  themeStyleURLs
} = window;
if (!themeScriptURLs || !themeStyleURLs) console.warn("Missing Assest URLs source");
const themeAssets = {
  'js': {
    urls: themeScriptURLs,
    load: load_assets_loadJS
  },
  'css': {
    urls: themeStyleURLs,
    load: load_assets_loadCSS
  }
};

function log(asset) {
  console.groupCollapsed('%c Asset loaded: ', '#f7a046', asset);
  console.trace();
  console.groupEnd();
}

function load_assets_loadAssets(param) {
  return new Promise((resolve, reject) => {
    const files = typeof param === "string" ? [param] : param;
    Promise.all(files.map(async file => {
      try {
        const [, name, type] = file.match(/(.*)\.(js|css)$/) || [, file, 'js'];
        const {
          urls: {
            [name]: {
              url
            }
          },
          load
        } = themeAssets[type];
        await load(url);
        log(`${name}.${type}`);
      } catch (err) {
        console.warn(`Failed to load asset: ${file}.`, err);
      }
    })).then(resolve).catch(reject);
  });
}
;// CONCATENATED MODULE: ./src/js/components/Modal.jsx
/* provided dependency */ var Modal_createElement = __webpack_require__(6295)["default"];
function Modal_Modal({
  wrapper_class = ''
}) {
  return Modal_createElement("div", {
    style: {
      '--tw-bg-opacity': '0.3'
    },
    className: `sf-modal sf-modal__wrapper fixed inset-0 px-5 bg-black flex items-center justify-center transition-opacity opacity-0 duration-200 ease-out ${wrapper_class}`
  }, Modal_createElement("div", {
    className: "sf-modal__content bg-white relative rounded max-h-[90vh]"
  }, Modal_createElement("button", {
    className: "sf-modal__close text-black absolute p-2 bg-white hover:bg-gray-300 rounded-full z-10"
  }, Modal_createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, Modal_createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  }))), Modal_createElement("div", {
    className: "sf-modal__content-inner"
  })));
}
;// CONCATENATED MODULE: ./src/js/utilities/events.js
const events_addEventDelegate = ({
  context = document.documentElement,
  event = 'click',
  selector,
  handler,
  capture = false
}) => {
  const listener = function (e) {
    // loop parent nodes from the target to the delegation node
    for (let target = e.target; target && target !== this; target = target.parentNode) {
      if (target.matches(selector)) {
        handler.call(target, e, target);
        break;
      }
    }
  };

  context.addEventListener(event, listener, capture);
  return () => {
    context.removeEventListener(event, listener, capture);
  };
};
class Event {
  constructor() {
    this.events = {};
  }

  get evts() {
    return Object.keys(this.events);
  }

  subscribe(event, handler) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(handler);
    return () => this.unSubscribe(event, handler);
  }

  unSubscribe(event, handler) {
    const handlers = this.events[event];

    if (handlers && Array.isArray(handlers)) {
      for (let i = 0; i < handlers.length; i++) {
        if (handlers[i] === handler) {
          handlers.splice(i, 1);
          break;
        }
      }
    }
  }

  emit(event, ...args) {
    // console.groupCollapsed(`Theme Event: ${event}`);
    // console.trace();
    // console.groupEnd();
    (this.events[event] || []).forEach(handler => {
      handler(...args);
    });
  }

}
;// CONCATENATED MODULE: ./src/js/modules/modal.js
/* provided dependency */ var modal_createElement = __webpack_require__(6295)["default"];

// eslint-disable-next-line no-unused-vars

 // import ScrollLock from '@utils/scroll-lock'

class Modal {
  constructor(wrapper_class) {
    var _this$modal, _this$modal2;

    (0,defineProperty/* default */.Z)(this, "init", () => {
      events_addEventDelegate({
        selector: '.sf-modal__wrapper',
        handler: e => {
          var _e$target;

          if ((e === null || e === void 0 ? void 0 : e.target) === this.modal || e !== null && e !== void 0 && (_e$target = e.target) !== null && _e$target !== void 0 && _e$target.closest('.sf-modal__close')) {
            this.close(e);
          }
        }
      });
    });

    (0,defineProperty/* default */.Z)(this, "setSizes", (sizes = '') => {
      this.resetSize();
      this.sizes = sizes;
      sizes.split(" ").forEach(size => {
        var _this$modalContent, _this$modalContent$cl;

        (_this$modalContent = this.modalContent) === null || _this$modalContent === void 0 ? void 0 : (_this$modalContent$cl = _this$modalContent.classList) === null || _this$modalContent$cl === void 0 ? void 0 : _this$modalContent$cl.add(size);
      });
    });

    (0,defineProperty/* default */.Z)(this, "setWidth", width => {
      this.modalContent.style.width = width;
    });

    (0,defineProperty/* default */.Z)(this, "resetSize", () => {
      if (this.sizes) {
        this.sizes.split(" ").forEach(size => {
          var _this$modalContent2, _this$modalContent2$c;

          (_this$modalContent2 = this.modalContent) === null || _this$modalContent2 === void 0 ? void 0 : (_this$modalContent2$c = _this$modalContent2.classList) === null || _this$modalContent2$c === void 0 ? void 0 : _this$modalContent2$c.remove(size);
        });
        this.sizes = '';
      }
    });

    (0,defineProperty/* default */.Z)(this, "appendChild", child => {
      var _this$modalContentInn;

      this === null || this === void 0 ? void 0 : (_this$modalContentInn = this.modalContentInner) === null || _this$modalContentInn === void 0 ? void 0 : _this$modalContentInn.appendChild(child);
      this.children = child;
    });

    (0,defineProperty/* default */.Z)(this, "removeChild", () => {
      var _this$children;

      this === null || this === void 0 ? void 0 : (_this$children = this.children) === null || _this$children === void 0 ? void 0 : _this$children.remove();
    });

    (0,defineProperty/* default */.Z)(this, "open", () => {
      // this.scrollLock.enable()
      document.documentElement.classList.add('prevent-scroll');
      document.body.appendChild(this.modal);
      setTimeout(() => this.modal.classList.add('opacity-100'));
      window.addEventListener("keydown", this.handleKeyDown);
    });

    (0,defineProperty/* default */.Z)(this, "close", e => {
      e === null || e === void 0 ? void 0 : e.preventDefault();
      this.modal.classList.remove('opacity-100'); // this.scrollLock.disable()

      window.removeEventListener("keydown", this.handleKeyDown);
      setTimeout(() => {
        this.modal.remove();
        this.removeChild();
        this.resetSize();
        this.modalContent.style.removeProperty('width');
        document.documentElement.classList.remove('prevent-scroll');
      }, this.transitionDuration);
    });

    (0,defineProperty/* default */.Z)(this, "handleKeyDown", e => {
      // ESC
      if (e.keyCode === 27) {
        this.close();
      }
    });

    this.modal = modal_createElement(Modal_Modal, {
      wrapper_class: wrapper_class || undefined
    });
    this.modalContent = (_this$modal = this.modal) === null || _this$modal === void 0 ? void 0 : _this$modal.firstChild;
    this.modalContentInner = (_this$modal2 = this.modal) === null || _this$modal2 === void 0 ? void 0 : _this$modal2.querySelector('.sf-modal__content-inner');
    this.transitionDuration = 200;
    this.init(); // this.scrollLock = new ScrollLock(document.body)
  }

}

/* harmony default export */ var modal = (Modal);
// EXTERNAL MODULE: ./node_modules/scroll-into-view/scrollIntoView.js
var scroll_into_view_scrollIntoView = __webpack_require__(643);
;// CONCATENATED MODULE: ./src/js/utilities/index.js
/* provided dependency */ var utilities_createElement = __webpack_require__(6295)["default"];






window.__getSectionInstanceByType = type => window.Shopify.theme.sections.instances.find(inst => inst.type === type);

function productFormCheck(form) {
  const fieldSelectors = '[data-theme-fields] [name][required]:not([hidden]):not([type="hidden"])';
  const requiredFields = form.querySelectorAll(fieldSelectors);
  const missingFields = [];
  requiredFields.forEach(field => {
    if (field.type === 'radio') {
      const raidoButtons = form.querySelectorAll(`input[name="${field.name}"]`);
      const selected = Array.from(raidoButtons).some(btn => btn.checked);

      if (!selected) {
        missingFields.push(field);
      }
    } else if (!field.value) {
      missingFields.push(field);
    }
  });
  return missingFields;
}
function queryDomNodes(selectors = {}, context = document) {
  const domNodes = Object.entries(selectors).reduce((acc, [name, selector]) => {
    var _context$queryMethod;

    const findOne = typeof selector === 'string';
    const queryMethod = findOne ? 'querySelector' : 'querySelectorAll';
    const sl = findOne ? selector : selector[0];
    acc[name] = context === null || context === void 0 ? void 0 : (_context$queryMethod = context[queryMethod]) === null || _context$queryMethod === void 0 ? void 0 : _context$queryMethod.call(context, sl);

    if (!findOne && acc[name]) {
      acc[name] = [...acc[name]];
    }

    return acc;
  }, {});
  return domNodes;
}
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, $1 => `_${$1.toLowerCase()}`);
function animateReplace(oldNode, newNode) {
  if (!oldNode || !newNode) {
    return;
  }

  oldNode.classList.add('ar__old-node');
  newNode.classList.add('ar__new-node');
  oldNode.style.opacity = 0;
  oldNode.replaceWith(newNode);
  setTimeout(() => newNode.style.opacity = 1);
}
function createSearchLink(query) {
  const searchParams = new URLSearchParams({
    type: 'product',
    ['options[unavailable_products]']: 'last',
    ['options[prefix]']: 'last',
    q: query
  });
  return `${PredictiveSearch.SEARCH_PATH}?${searchParams.toString()}`;
}
function isInViewport(elem) {
  const rect = elem.getBoundingClientRect(); // NOTE: not accuracy in all cases but we only need this

  return rect.top > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight);
}

function loadStyles() {
  const {
    themeStyleURLs = {}
  } = window;
  Object.values(themeStyleURLs).forEach(style => {
    const {
      url,
      required,
      afterWindowLoaded
    } = style;

    if (url && required) {
      var _window;

      if (!afterWindowLoaded || (_window = window) !== null && _window !== void 0 && _window.__sfWindowLoaded) {
        loadCSS(url);
      } else {
        window.addEventListener("load", () => loadCSS(url));
      }
    }
  });
}

function loadScripts() {
  const {
    themeScriptURLs = {}
  } = window;
  Object.values(themeScriptURLs).forEach(script => {
    const {
      url,
      required,
      afterWindowLoaded
    } = script;

    if (url && required) {
      var _window2;

      if (!afterWindowLoaded || (_window2 = window) !== null && _window2 !== void 0 && _window2.__sfWindowLoaded) {
        loadJS(url);
      } else {
        window.addEventListener("load", () => loadJS(url));
      }
    }
  });
}

function addCustomerFormHandlers() {
  addEventDelegate({
    selector: '.sf-customer__forms',
    handler: (e, form) => {
      if (e.target.classList.contains('sf-customer__reset-password-btn')) {
        form.classList.add('show-recover-password-form');
        return;
      }

      if (e.target.classList.contains('sf-customer__cancel-reset')) {
        form.classList.remove('show-recover-password-form');
        return;
      }
    }
  });

  if (document.querySelector('.sf-customer__recover-form-posted')) {
    var _document$querySelect, _document$querySelect2;

    (_document$querySelect = document.querySelector('.sf-customer__forms')) === null || _document$querySelect === void 0 ? void 0 : (_document$querySelect2 = _document$querySelect.classList) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.add('show-recover-password-form');
  }
}

function getVideoURL(id, host) {
  if (host === 'youtube') {
    return `https://www.youtube.com/watch?v=${id}&gl=true`;
  }

  if (host === 'vimeo') {
    return `https://vimeo.com/${id}`;
  }

  return '';
}

function showCookieConsent() {
  const {
    show_cookie_consent
  } = window.adminThemeSettings;
  const cookieAccepted = getCookie('cookieconsent_status');

  if (show_cookie_consent && !cookieAccepted) {
    loadAssets(['cookieConsent.css', 'cookieConsent.js']);
  }
}

function initTermsCheckbox() {
  addEventDelegate({
    selector: '.agree-terms [name="agree_terms"]',
    event: 'change',
    handler: (e, target) => {
      const button = target.closest('.agree-terms').nextElementSibling;

      if (button && button.hasAttributes('data-terms-action')) {
        if (target.checked) {
          button.removeAttribute('disabled');
        } else {
          button.setAttribute('disabled', true);
        }
      }
    }
  });
}

const scrollToTopTarget = document.querySelector('#scroll-to-top-target');
function scrollToTop(callback) {
  scrollIntoView(scrollToTopTarget, callback);
}

function initScrollTop() {
  const scrollTopButton = document.querySelector('#scroll-to-top-button');

  if (scrollTopButton) {
    scrollTopButton.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', function () {
      const method = window.scrollY > 100 ? 'add' : 'remove';
      scrollTopButton.classList[method]('opacity-100');
    });
  }
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
}
function addRecentViewedProduct(handle) {
  let max = 20;
  const saveKey = 'sf-recent-viewed-products';
  const products = getCookie(saveKey) ? JSON.parse(getCookie(saveKey)) : [];
  if (handle && !products.includes(handle)) products.push(handle);
  setCookie(saveKey, JSON.stringify(products.filter((x, i) => {
    return i <= max - 1;
  })));
}
const generateDomFromString = value => {
  const d = utilities_createElement("div", null);
  d.innerHTML = value;
  return d;
};
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function updateParam(key, value) {
  var {
    location
  } = window;
  var baseUrl = [location.protocol, '//', location.host, location.pathname].join('');
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  if (urlParams.has(key)) {
    if (value !== '' && value !== 'undefined') {
      urlParams.set(key, value);
    }

    if (value === '' || value === 'undefined') {
      urlParams.delete(key);
    }
  } else {
    if (value) urlParams.append(key, value);
  }

  window.history.replaceState({}, "", baseUrl + '?' + urlParams.toString());
  return false;
}
function getParams() {
  let params = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  for (const entry of urlParams.entries()) {
    params[entry[0]] = entry[1];
  }

  return params;
}
function runHelpers() {
  try {
    loadScripts();
    loadStyles(); ////////////////////

    showCookieConsent();
    initTermsCheckbox();
    initLocalization();
    addCustomerFormHandlers();
    initScrollTop();
  } catch (err) {
    console.error('Failed to run helpers.', err);
  }
}
;// CONCATENATED MODULE: ./src/js/modules/size-chart.js
/* provided dependency */ var size_chart_createElement = __webpack_require__(6295)["default"];

// eslint-disable-next-line no-unused-vars




class SizeChart {
  constructor(sizeChartEnabled, _chart_content, _buttonText = 'Size guide') {
    (0,defineProperty/* default */.Z)(this, "selectors", {
      openBtn: '[data-open-sizeguide]'
    });

    (0,defineProperty/* default */.Z)(this, "init", (chart_content, buttonText) => {
      var _this$domNodes$openBt, _this$domNodes$openBt2;

      const productSection = document.querySelector('.product-template');
      (_this$domNodes$openBt = this.domNodes.openBtn) === null || _this$domNodes$openBt === void 0 ? void 0 : (_this$domNodes$openBt2 = _this$domNodes$openBt.classList) === null || _this$domNodes$openBt2 === void 0 ? void 0 : _this$domNodes$openBt2.remove('hidden');
      document.querySelectorAll(this.selectors.openBtn).forEach(button => {
        console.log(button, button.querySelector('span'), buttonText, 'button');
        button.querySelector('span').innerText = buttonText;
      });
      const sizeChartBlock = size_chart_createElement("div", null);
      sizeChartBlock.classList.add('rte', 'prose', 'size-chart-content');
      sizeChartBlock.innerHTML = chart_content;
      this.modal = new modal();
      events_addEventDelegate({
        selector: this.selectors.openBtn,
        handler: e => {
          e.preventDefault();

          if (chart_content) {
            this.modal.appendChild(sizeChartBlock);
            this.modal.setSizes('bg-white size-chart');
            this.modal.open();
          }
        }
      });
      productSection.classList.add('size-chart-initialized');
    });

    this.domNodes = queryDomNodes(this.selectors);
    this.init(_chart_content, _buttonText);
  }

}

/* harmony default export */ var size_chart = (SizeChart);
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-currency/currency.js
/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 */
const moneyFormat = '${{amount}}';
/**
 * Format money values based on your shop currency settings
 * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents
 * or 3.00 dollars
 * @param  {String} format - shop money_format setting
 * @return {String} value - formatted value
 */

function currency_formatMoney(cents, format) {
  if (typeof cents === 'string') {
    cents = cents.replace('.', '');
  }

  let value = '';
  const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  const formatString = format || moneyFormat;

  function formatWithDelimiters(number, precision = 2, thousands = ',', decimal = '.') {
    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);
    const parts = number.split('.');
    const dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${thousands}`);
    const centsAmount = parts[1] ? decimal + parts[1] : '';
    return dollarsAmount + centsAmount;
  }

  switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;

    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;

    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;

    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }

  return formatString.replace(placeholderRegex, value);
}
;// CONCATENATED MODULE: ./src/js/foxkit/main.js
/* provided dependency */ var main_i18n = __webpack_require__(7345)["default"];
/* provided dependency */ var main_createElement = __webpack_require__(6295)["default"];









class FoxKit {
  constructor() {
    (0,defineProperty/* default */.Z)(this, "appURL", window.spratlyThemeSettings.foxkitAppURL ? `https://${window.spratlyThemeSettings.foxkitAppURL}` : '');

    (0,defineProperty/* default */.Z)(this, "shop", window.Shopify.shop);

    (0,defineProperty/* default */.Z)(this, "page", window.spratlyThemeSettings.template);

    (0,defineProperty/* default */.Z)(this, "foxKitSettings", {});

    (0,defineProperty/* default */.Z)(this, "discountCodeKey", 'mn-discount-code');

    (0,defineProperty/* default */.Z)(this, "selectors", {
      bundleContainerOutside: '#fox-product-bundle-outside',
      bundleContainerInsideDesktop: '.sf-prod-template__desktop #fox-product-bundle-inside',
      bundleContainerInsideMobile: '.sf-prod-template__mobile #fox-product-bundle-inside'
    });

    (0,defineProperty/* default */.Z)(this, "cartSelectors", {
      checkoutButton: '[name="checkout"]',
      cartDiscountsWrapper: '[data-discounts-wrapper]',
      cartDiscounts: '[data-discounts]',
      cartDiscountsList: '[data-discounts-list]',
      subTotalPrice: '[data-cart-subtotal-price]',
      cartItem: '.scd-item',
      cartItemPrices: '.scd-item__prices',
      cartItemOriginalPrice: '[data-cart-item-original-price]',
      cartItemFinalPrice: '[data-cart-item-final-price]',
      couponMessages: '#coupon-messages',
      cartDiscountCode: '[name="discount"]',
      discountNoti: '[data-discount-noti]'
    });

    (0,defineProperty/* default */.Z)(this, "newCart", null);

    (0,defineProperty/* default */.Z)(this, "lastDiscount", void 0);

    (0,defineProperty/* default */.Z)(this, "showNoti", false);

    (0,defineProperty/* default */.Z)(this, "checkoutEventAdded", false);

    (0,defineProperty/* default */.Z)(this, "init", async () => {
      var _window$spratlyTheme, _window$spratlyTheme$, _window$_ThemeEvent;

      console.log('======> Start init FoxKit App plugins!');
      this.domNodes = queryDomNodes(this.selectors);
      await load_assets_loadAssets('foxkitApp.css');
      const localesResponse = await this.fetchShopLocales();

      if (localesResponse && localesResponse.ok && localesResponse.payload) {
        const {
          locale,
          data
        } = localesResponse.payload;
        main_i18n.setLocales(locale, data);
      }

      const response = await this.fetchData();

      if (response !== null && response !== void 0 && response.ok && response !== null && response !== void 0 && response.payload) {
        this.foxKitSettings = { ...response.payload,
          'inCart': {
            active: true
          },
          'prePurchase': {
            active: true
          }
        };
        Object.entries(this.foxKitSettings).forEach(([plugin, data]) => {
          let active = (data === null || data === void 0 ? void 0 : data.active) || false;

          if (['popup', 'luckyWheel'].includes(plugin) && active) {
            if (window.innerWidth < 767) active = data.show_on_mobile;
            if (active && data.display_on === 'home_only' && this.page !== 'index') active = false;
          }

          if (active) {
            const initFunction = `init${plugin.capitalize()}`;
            load_assets_loadAssets(plugin).then(this[initFunction]);
          }
        });
      }

      await this.renderNewCart((_window$spratlyTheme = window.spratlyTheme) === null || _window$spratlyTheme === void 0 ? void 0 : (_window$spratlyTheme$ = _window$spratlyTheme.Cart) === null || _window$spratlyTheme$ === void 0 ? void 0 : _window$spratlyTheme$.cart);
      (_window$_ThemeEvent = window._ThemeEvent) === null || _window$_ThemeEvent === void 0 ? void 0 : _window$_ThemeEvent.subscribe('ON_CART_UPDATE', this.renderNewCart);
    });

    (0,defineProperty/* default */.Z)(this, "handleCheckout", e => {
      var _window$spratlyTheme2, _window$spratlyTheme3, _window$spratlyThemeS;

      e.preventDefault();
      e.stopPropagation();
      const checkoutButton = e.target;
      const newCart = this.generateFoxkitCart((_window$spratlyTheme2 = window.spratlyTheme) === null || _window$spratlyTheme2 === void 0 ? void 0 : (_window$spratlyTheme3 = _window$spratlyTheme2.Cart) === null || _window$spratlyTheme3 === void 0 ? void 0 : _window$spratlyTheme3.cart);
      const locale = ((_window$spratlyThemeS = window.spratlyThemeSettings.shop_locale) === null || _window$spratlyThemeS === void 0 ? void 0 : _window$spratlyThemeS.current) || 'en';
      fetch(`${this.appURL}/api/public/checkout?shop=${this.shop}`, {
        method: 'POST',
        body: JSON.stringify(newCart)
      }).then(res => res.json()).then(res => {
        const {
          invoiceUrl
        } = (res === null || res === void 0 ? void 0 : res.payload) || {};

        if (invoiceUrl) {
          window.location.href = `${invoiceUrl}?locale=${locale}`;
        } else {
          this.toogleCheckoutEvent(0);
          checkoutButton.click();
        }
      }).catch(err => {
        console.error('Failed to handle checkout by Foxkit.', err);
        this.toogleCheckoutEvent(0);
        checkoutButton.click();
      });
    });

    (0,defineProperty/* default */.Z)(this, "fetchShopLocales", () => {
      return new Promise((resolve, reject) => {
        var _window$spratlyThemeS2, _window$spratlyThemeS3;

        const locale = ((_window$spratlyThemeS2 = window.spratlyThemeSettings) === null || _window$spratlyThemeS2 === void 0 ? void 0 : (_window$spratlyThemeS3 = _window$spratlyThemeS2.shop_locale) === null || _window$spratlyThemeS3 === void 0 ? void 0 : _window$spratlyThemeS3.current) || 'en';
        fetch(`${this.appURL}/api/public/locale?shop=${this.shop}&locale=${locale}`).then(response => response.json()).then(resolve).catch(reject);
      });
    });

    (0,defineProperty/* default */.Z)(this, "fetchData", () => {
      return new Promise((resolve, reject) => {
        const productId = document.body.dataset.productId;
        let requestUrl = `${this.appURL}/api/public/?shop=${this.shop}`;
        if (productId) requestUrl += `&productId=${productId}`;
        fetch(requestUrl).then(response => response.json()).then(resolve).catch(reject);
      });
    });

    (0,defineProperty/* default */.Z)(this, "initProductRecommendations", () => {
      const {
        productRecommendations
      } = this.foxKitSettings;
      const {
        recommended_products,
        heading = 'Recommend for you'
      } = productRecommendations;
      const ProductRecommendation = window.spratlyTheme.ProductRecommendation;
      const relatedProductSection = document.querySelector('[data-section-type="foxkit-related-products"]');

      if (Array.isArray(recommended_products) && recommended_products.length && ProductRecommendation && relatedProductSection) {
        const headingNode = relatedProductSection.querySelector('.sf-product__section-heading');
        const {
          productTitle,
          productVendor,
          productType
        } = relatedProductSection.dataset;
        headingNode.textContent = heading.replace('{product_title}', productTitle).replace('{product_vendor}', productType).replace('{product_type}', productVendor);
        this.RelatedProducts = new ProductRecommendation(relatedProductSection, recommended_products);
      }
    });

    (0,defineProperty/* default */.Z)(this, "initBundle", () => {
      var _window$spratlyTheme4;

      const ProductBundle = (_window$spratlyTheme4 = window.spratlyTheme) === null || _window$spratlyTheme4 === void 0 ? void 0 : _window$spratlyTheme4.ProductBundle;

      if (ProductBundle) {
        const {
          bundle: settings
        } = this.foxKitSettings;
        const {
          bundleContainerOutside,
          bundleContainerInsideMobile,
          bundleContainerInsideDesktop
        } = this.domNodes;

        if (settings.position === 'inside') {
          this.Bundle = {
            desktop: new ProductBundle(bundleContainerInsideDesktop, settings),
            mobile: new ProductBundle(bundleContainerInsideMobile, settings)
          };
        } else {
          this.Bundle = new ProductBundle(bundleContainerOutside, settings);
        }
      }
    });

    (0,defineProperty/* default */.Z)(this, "initPopup", () => {
      console.log('initPopup');
      const {
        popup
      } = this.foxKitSettings;
      this.Popup = new window.FoxKit.Popup(popup);
    });

    (0,defineProperty/* default */.Z)(this, "initLuckyWheel", () => {
      console.log('init luckyWheel');
      const {
        luckyWheel
      } = this.foxKitSettings;
      this.LuckyWheel = new window.FoxKit.LuckyWheel(luckyWheel);
    });

    (0,defineProperty/* default */.Z)(this, "initSizeChart", () => {
      const {
        sizeChart
      } = this.foxKitSettings;
      this.SizeChart = new size_chart(this.sizeChartEnabled, sizeChart === null || sizeChart === void 0 ? void 0 : sizeChart.chart_content, main_i18n.tr('sizechart_button'));
    });

    (0,defineProperty/* default */.Z)(this, "initSalesNotification", () => {
      const {
        salesNotification
      } = this.foxKitSettings;
      const settings = {
        title: salesNotification.title,
        time: salesNotification.time,
        hideOnMobile: !salesNotification.show_on_mobile,
        duration: parseInt(salesNotification.display_time) || 5,
        delay: salesNotification.delay_time || '10-15',
        showAfter: salesNotification.delay_show || 5,
        maximum: parseInt(salesNotification.max_show),
        products: salesNotification === null || salesNotification === void 0 ? void 0 : salesNotification.products,
        names: salesNotification.names.split(', '),
        locations: salesNotification.locations.split(', ')
      };
      this.SalesPop = new window.FoxKit.SalesNotifications(settings);
    });

    (0,defineProperty/* default */.Z)(this, "initCountdown", () => {
      const {
        countdown
      } = this.foxKitSettings;
      this.Countdown = new window.spratlyTheme.ProductCountdown(countdown);
    });

    (0,defineProperty/* default */.Z)(this, "initStockCountdown", () => {});

    (0,defineProperty/* default */.Z)(this, "initPrePurchase", () => {
      const {
        prePurchase
      } = this.foxKitSettings;
      this.PrePurchase = new window.FoxKit.PrePurchase(prePurchase);
    });

    (0,defineProperty/* default */.Z)(this, "initCartGoal", () => {
      const {
        cartGoal
      } = this.foxKitSettings;
      this.CartGoal = new window.FoxKit.CartGoal(cartGoal);
    });

    (0,defineProperty/* default */.Z)(this, "initInCart", () => {
      this.InCart = new window.FoxKit.InCart();
    });

    (0,defineProperty/* default */.Z)(this, "initQuantityDiscount", () => {
      const {
        quantityDiscount
      } = this.foxKitSettings;
      this.QuantityDiscount = new window.FoxKit.QuantityDiscount(quantityDiscount);
    });

    (0,defineProperty/* default */.Z)(this, "updateCartAttribute", async offer => {
      var _window$spratlyTheme5, _window$spratlyTheme6, _window, _window$Shopify, _window$Shopify$onCar;

      if (!offer || !(offer !== null && offer !== void 0 && offer.offer_id)) return false;
      const cart = (_window$spratlyTheme5 = window.spratlyTheme) === null || _window$spratlyTheme5 === void 0 ? void 0 : (_window$spratlyTheme6 = _window$spratlyTheme5.Cart) === null || _window$spratlyTheme6 === void 0 ? void 0 : _window$spratlyTheme6.cart;
      const {
        attributes
      } = cart;
      let {
        _foxCartDiscounts
      } = attributes;
      let newAttributes = [];

      if (_foxCartDiscounts) {
        _foxCartDiscounts = JSON.parse(_foxCartDiscounts);

        const check = _foxCartDiscounts.find(d => {
          return JSON.parse(d).product_id === offer.product_id;
        });

        if (check) {
          return false;
        } else {
          newAttributes = [..._foxCartDiscounts];
        }
      }

      newAttributes.push(JSON.stringify(offer));
      await fetch_fetchJSON('/cart/update.js', { ...fetch_getRequestDefaultConfigs(),
        method: 'POST',
        body: JSON.stringify({
          attributes: {
            _foxCartDiscounts: [...newAttributes]
          }
        })
      });
      (_window = window) === null || _window === void 0 ? void 0 : (_window$Shopify = _window.Shopify) === null || _window$Shopify === void 0 ? void 0 : (_window$Shopify$onCar = _window$Shopify.onCartUpdate) === null || _window$Shopify$onCar === void 0 ? void 0 : _window$Shopify$onCar.call(_window$Shopify);
    });

    (0,defineProperty/* default */.Z)(this, "getNewCart", async cart => {
      return new Promise((resolve, reject) => {
        var _this$foxKitSettings, _this$foxKitSettings$;

        const foxCart = this.generateFoxkitCart(cart);
        if (!foxCart) return resolve();
        const apiVersion = ((_this$foxKitSettings = this.foxKitSettings) === null || _this$foxKitSettings === void 0 ? void 0 : (_this$foxKitSettings$ = _this$foxKitSettings.shop) === null || _this$foxKitSettings$ === void 0 ? void 0 : _this$foxKitSettings$.discount_apply_by) === 'discount_code' ? '/v2' : '';
        const cartAPI = `${this.appURL}/api/public${apiVersion}/cart/?shop=${this.shop}`;
        fetch(cartAPI, {
          method: 'POST',
          body: JSON.stringify(foxCart)
        }).then(res => res.json()).then(resolve).catch(reject);
      });
    });

    (0,defineProperty/* default */.Z)(this, "generateFoxkitCart", cart => {
      var _cart$items, _foxCartDiscounts2, _window$Shopify2, _this$foxKitSettings2, _this$foxKitSettings3;

      if (!cart || !(cart !== null && cart !== void 0 && (_cart$items = cart.items) !== null && _cart$items !== void 0 && _cart$items.length)) return false;
      const {
        attributes
      } = cart;
      let {
        _foxCartDiscounts = []
      } = attributes;
      let newCart = { ...cart
      };

      if ((_foxCartDiscounts2 = _foxCartDiscounts) !== null && _foxCartDiscounts2 !== void 0 && _foxCartDiscounts2.length) {
        _foxCartDiscounts = JSON.parse(_foxCartDiscounts).map(d => JSON.parse(d));
      }

      const {
        cartGoal
      } = this.foxKitSettings;

      if (cartGoal) {
        const {
          active,
          goal_amount,
          disable_foxkit_discount
        } = cartGoal;

        if (active && !disable_foxkit_discount && goal_amount * 100 - cart.total_price <= 0) {
          _foxCartDiscounts.push({
            offer_id: cartGoal._id,
            plugin: 'CartGoal'
          });
        }
      }

      newCart.attributes = { ...attributes,
        _foxCartDiscounts: [..._foxCartDiscounts]
      };
      const discount_code = getCookie('discount_code');

      if (discount_code) {
        newCart.discount_code = discount_code;
      }

      newCart._foxCurrency = { ...(((_window$Shopify2 = window.Shopify) === null || _window$Shopify2 === void 0 ? void 0 : _window$Shopify2.currency) || {}),
        published: (_this$foxKitSettings2 = this.foxKitSettings) === null || _this$foxKitSettings2 === void 0 ? void 0 : (_this$foxKitSettings3 = _this$foxKitSettings2.shop) === null || _this$foxKitSettings3 === void 0 ? void 0 : _this$foxKitSettings3.currency
      };
      return newCart;
    });

    (0,defineProperty/* default */.Z)(this, "renderNewCart", cart => {
      if (!cart || !cart.item_count) return;
      this.getNewCart(cart).then(({
        payload: newCart
      }) => {
        this.cartNodes = queryDomNodes(this.cartSelectors);
        let showFoxWarning = false;

        if (newCart) {
          var _this$lastDiscount;

          const {
            _foxCartPrices
          } = newCart;
          this.toogleCheckoutEvent(_foxCartPrices === null || _foxCartPrices === void 0 ? void 0 : _foxCartPrices.total_discounted_amount);
          this.applyDiscount(_foxCartPrices === null || _foxCartPrices === void 0 ? void 0 : _foxCartPrices.discount);
          (_this$lastDiscount = this.lastDiscount) === null || _this$lastDiscount === void 0 ? void 0 : _this$lastDiscount.remove();

          if (_foxCartPrices) {
            showFoxWarning = true;
            const {
              cartDiscounts,
              subTotalPrice,
              cartDiscountsWrapper
            } = this.cartNodes;
            const {
              total_discounted_amount,
              total_price
            } = _foxCartPrices;
            this.toogleCheckoutEvent(total_discounted_amount);
            const cartDiscountTitle = this.generateCartDiscount(total_discounted_amount);
            cartDiscounts === null || cartDiscounts === void 0 ? void 0 : cartDiscounts.appendChild(cartDiscountTitle);
            this.lastDiscount = cartDiscountTitle;
            const {
              money_format
            } = window.spratlyThemeSettings;
            setTimeout(() => subTotalPrice.innerHTML = currency_formatMoney(total_price, money_format), 200);
            cartDiscountsWrapper === null || cartDiscountsWrapper === void 0 ? void 0 : cartDiscountsWrapper.classList.remove('hidden');
          }
        }

        if (this.cartNodes.couponMessages) {
          let msg = main_i18n.tr('discount_noti');

          if (showFoxWarning) {
            msg = main_i18n.tr('fox_discount_noti', {
              price: currency_formatMoney(newCart._foxCartPrices.total_discounted_amount, window.spratlyThemeSettings.money_format),
              discount_title: main_i18n.tr('discount_title')
            });
            const {
              discountNoti,
              cartDiscountCode
            } = this.cartNodes;

            if (!this.showNoti) {
              const code = localStorage.getItem(this.discountCodeKey);

              if (cartDiscountCode && code) {
                discountNoti.style.display = 'inline';
                this.showNoti = true;
              }
            }
          }

          this.cartNodes.couponMessages.firstElementChild.innerHTML = msg;
        }
      }).catch(console.error);
    });

    (0,defineProperty/* default */.Z)(this, "toogleCheckoutEvent", discounted_amount => {
      var _this$foxKitSettings4, _this$foxKitSettings5;

      const {
        checkoutButton
      } = this.cartNodes;
      const useDraftOrder = ((_this$foxKitSettings4 = this.foxKitSettings) === null || _this$foxKitSettings4 === void 0 ? void 0 : (_this$foxKitSettings5 = _this$foxKitSettings4.shop) === null || _this$foxKitSettings5 === void 0 ? void 0 : _this$foxKitSettings5.discount_apply_by) !== 'discount_code';

      if (checkoutButton && useDraftOrder) {
        if (discounted_amount) {
          if (!this.checkoutEventAdded) {
            checkoutButton.addEventListener('click', this.handleCheckout, true);
            this.checkoutEventAdded = true;
          }
        } else {
          checkoutButton.removeEventListener('click', this.handleCheckout, true);
          this.checkoutEventAdded = false;
        }
      }
    });

    (0,defineProperty/* default */.Z)(this, "applyDiscount", discount => {
      if (!discount) return;
      const {
        codeDiscount,
        shareable_url,
        code,
        summary
      } = discount;

      if ((codeDiscount === null || codeDiscount === void 0 ? void 0 : codeDiscount.status) === "ACTIVE" && shareable_url) {
        const current_code = getCookie('discount_code');

        if (current_code !== code) {
          fetch(shareable_url).then(() => console.log(`[Foxkit] - Discount applied. Code: ${code} - ${summary}`)).catch(console.error);
        }
      }
    });

    (0,defineProperty/* default */.Z)(this, "generateCartDiscount", discountValue => {
      var _window2, _window2$spratlyTheme;

      const discountList = main_createElement("ul", null);
      discountList.classList.add('scd-cart__discounts');
      discountValue = currency_formatMoney(discountValue, (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$spratlyTheme = _window2.spratlyThemeSettings) === null || _window2$spratlyTheme === void 0 ? void 0 : _window2$spratlyTheme.money_format);
      const discountTitle = main_createElement("li", null);
      discountTitle.innerHTML = `<svg aria-hidden="true" width="20" height="20" focusable="false" role="presentation" viewBox="0 0 12 13"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 .5h3a2 2 0 0 1 2 2v3a.995.995 0 0 1-.293.707l-6 6a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l6-6A.995.995 0 0 1 7 .5zm2 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" fill="currentColor"></path></svg> ${main_i18n.tr('discount_title')} (-${discountValue})`;
      discountList.appendChild(discountTitle);
      return discountList;
    });

    const {
      appURL,
      shop
    } = this;

    if (!appURL) {
      return console.log(`%c[Fox Kit] App hasn't been installed on this Shop!`, 'background-color:#ffd79d; color: #000; font-size: 14px;');
    }

    if (!shop) {
      return console.log(`%c[Fox Kit] Couldn't find 'shop' in 'window.Shopify'!`, 'background-color:#ffd79d; color: #000; font-size: 14px;');
    }

    this.init().catch(console.error);
  }

}

/* harmony default export */ var main = ((/* unused pure expression or super */ null && (FoxKit)));
window.FoxKit = new FoxKit();
}();
/******/ })()
;