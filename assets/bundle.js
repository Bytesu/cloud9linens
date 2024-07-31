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

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
;// CONCATENATED MODULE: ./src/js/components/Spinner.jsx
/* provided dependency */ var createElement = __webpack_require__(6295)["default"];
/* harmony default export */ function Spinner({
  className = ''
}) {
  return createElement("svg", {
    className: `animate-spin hidden w-[20px] h-[20px] ${className}`,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none"
  }, createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }), createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }));
}
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

function formatMoney(cents, format) {
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
// EXTERNAL MODULE: ./node_modules/scroll-into-view/scrollIntoView.js
var scroll_into_view_scrollIntoView = __webpack_require__(643);
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
;// CONCATENATED MODULE: ./src/js/components/Notification.jsx
/* provided dependency */ var Notification_createElement = __webpack_require__(6295)["default"];
/* harmony default export */ function components_Notification({
  type,
  message,
  onclick
}) {
  let icon;

  if (type === 'warning') {
    icon = Notification_createElement("svg", {
      class: "w-6 h-6",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, Notification_createElement("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }));
  } else if (type === 'success') {
    icon = Notification_createElement("svg", {
      class: "w-6 h-6",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, Notification_createElement("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }));
  }

  return Notification_createElement("div", {
    className: `notification ${type}`,
    onclick: onclick
  }, icon, Notification_createElement("div", {
    className: "ml-3 text-sm md:text-base"
  }, message));
}
;// CONCATENATED MODULE: ./src/js/modules/notification.js
/* provided dependency */ var notification_createElement = __webpack_require__(6295)["default"];

// eslint-disable-next-line no-unused-vars


class Notification {
  constructor() {
    (0,defineProperty/* default */.Z)(this, "noti", null);

    (0,defineProperty/* default */.Z)(this, "removeTimeoutId", null);

    (0,defineProperty/* default */.Z)(this, "hideTimeoutId", null);

    (0,defineProperty/* default */.Z)(this, "transitionDuration", 300);

    (0,defineProperty/* default */.Z)(this, "show", ({
      target,
      type,
      message,
      method = 'after',
      last = 3000,
      delay = 0
    }) => {
      this.clearTimeout();
      this.removeNoti();
      setTimeout(() => {
        this.noti = notification_createElement(components_Notification, {
          type: type,
          message: message,
          onclick: this.handleClick
        });
        target === null || target === void 0 ? void 0 : target[method](this.noti);
        requestAnimationFrame(() => this.noti.classList.add('show'));
        this.hideTimeoutId = setTimeout(() => {
          this.noti.classList.add('hide');
          this.removeTimeoutId = setTimeout(this.removeNoti, this.transitionDuration * 2);
        }, last);
      }, delay);
    });

    (0,defineProperty/* default */.Z)(this, "handleClick", () => {
      clearTimeout(this.removeTimeoutId);
      this.noti.classList.add('hide');
      setTimeout(this.removeNoti, this.transitionDuration * 2);
    });

    (0,defineProperty/* default */.Z)(this, "clearTimeout", () => {
      clearTimeout(this.removeTimeoutId);
      clearTimeout(this.hideTimeoutId);
    });

    (0,defineProperty/* default */.Z)(this, "removeNoti", () => {
      var _this$noti;

      this === null || this === void 0 ? void 0 : (_this$noti = this.noti) === null || _this$noti === void 0 ? void 0 : _this$noti.remove();
    });
  }

}

/* harmony default export */ var notification = (new Notification());
;// CONCATENATED MODULE: ./src/js/utilities/product-fns.js
/* provided dependency */ var product_fns_createElement = __webpack_require__(6295)["default"];


const themeProducts = window._themeProducts || {};
const fetchProductByHandle = async handle => {
  const product = await fetchJsonCache(`/products/${handle}.js`).catch(console.error);

  if (product) {
    themeProducts[product.id] = product;
    return product;
  }

  return false;
};
const getProductData = async ({
  productId,
  productHandle
}) => {
  var _productData, _productData2;

  let productData = themeProducts[productId];

  if (!productData) {
    productData = await fetchProductByHandle(productHandle).catch(console.error);
  }

  productData.has_only_default_variant = ((_productData = productData) === null || _productData === void 0 ? void 0 : _productData.has_only_default_variant) || productHasOnlyDefaultVariant((_productData2 = productData) === null || _productData2 === void 0 ? void 0 : _productData2.options);
  return Object.assign({}, productData);
};
const getProductJSON = async handle => {
  const html = await fetchCache(`/products/${handle}?section_id=product-json`);

  if (html && !/^<!doctype html>/.test(html)) {
    const node = product_fns_createElement("div", null);
    node.innerHTML = html;
    const productJSONNode = node.querySelector('script.product-json');

    if (productJSONNode) {
      const data = JSON.parse(productJSONNode.innerText);

      if (data) {
        const {
          dataset
        } = productJSONNode;
        Object.entries(dataset).forEach(([k, v]) => data[camelCaseToSnakeCase(k)] = ['true', 'false'].indexOf(v) + 1 ? v === "true" : v);
        const selectedVariantNode = node.querySelector('script.selected-variant-json');

        if (selectedVariantNode) {
          data.selected_or_first_available_variant = JSON.parse(selectedVariantNode.innerText);
        }

        return data;
      }
    }
  }

  return null;
};
const getProductsJSON = async handles => {
  const productData = {};
  const promises = handles.map(async hdl => {
    productData[hdl] = await getProductJSON(hdl);
  });
  await Promise.all(promises);
  return handles.map(hdl => productData[hdl]);
};
const productHasOnlyDefaultVariant = prodOptions => {
  if (Array.isArray(prodOptions) && prodOptions.length === 1) {
    var _firstOption$values;

    const firstOption = prodOptions[0];

    if ((firstOption === null || firstOption === void 0 ? void 0 : firstOption.name) === "Title" && (firstOption === null || firstOption === void 0 ? void 0 : (_firstOption$values = firstOption.values) === null || _firstOption$values === void 0 ? void 0 : _firstOption$values.join()) === "Default Title") {
      return true;
    }
  }

  return false;
};
const getProductInstances = query => {
  let fieldSearch = 'id';

  if (typeof query === "string") {
    fieldSearch = 'handle';
  }

  return window.spratlyTheme.Products.productInstances.filter(pro => {
    var _pro$productData;

    return ((_pro$productData = pro.productData) === null || _pro$productData === void 0 ? void 0 : _pro$productData[fieldSearch]) === query;
  });
};
window._getProductInstances = getProductInstances;
const getThemeProductSettings = () => {
  if (window.themeProductSettings) {
    return window.themeProductSettings;
  }

  const {
    spratlyThemeSettings,
    adminThemeSettings: {
      product_colors,
      use_ajax_atc
    },
    money_format
  } = window;
  let colorSwatch = [];
  let imageSwatch = [];

  try {
    colorSwatch = product_colors.split(',').filter(Boolean).map(item => {
      const [key, value] = item.split(':');
      return {
        key: key.trim().toLowerCase(),
        value: value.trim()
      };
    });
    Object.keys(spratlyThemeSettings).forEach(key => {
      if (key.includes('filter_color') && !key.includes('.png')) {
        if (spratlyThemeSettings[`${key}.png`]) {
          imageSwatch.push({
            key: spratlyThemeSettings[key].toLowerCase(),
            value: spratlyThemeSettings[`${key}.png`]
          });
        }
      }
    });
  } catch (e) {
    console.error('Failed to convert color/image swatch structure!', e);
  }

  const productSettings = {
    colorSwatch,
    imageSwatch,
    use_ajax_atc,
    money_format
  };
  window.themeProductSettings = productSettings;
  return productSettings;
};
const isValidColor = color => {
  const otpNode = new Option();
  otpNode.style.color = color.replace(/\s/g, '').toLowerCase();
  return otpNode.style.color === color;
};
const getOptionValueFromOptionNode = optNode => {
  if (optNode.type === 'checkbox') {
    return optNode.value;
  }

  if (optNode.tagName === 'OPTION') {
    const select = optNode.closest('select');
    return select.value;
  }

  return optNode.innerText.trim();
};
;// CONCATENATED MODULE: ./src/js/components/Bundle/IconPlus.jsx
/* provided dependency */ var IconPlus_createElement = __webpack_require__(6295)["default"];
/* harmony default export */ var IconPlus = (() => IconPlus_createElement("div", {
  className: "icon-plus hidden md:block"
}, IconPlus_createElement("svg", {
  className: "w-[20px] h-[20px]",
  fill: "currentColor",
  stroke: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512"
}, IconPlus_createElement("path", {
  d: "M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"
}))));
;// CONCATENATED MODULE: ./src/js/components/LazyImage.jsx
/* provided dependency */ var LazyImage_createElement = __webpack_require__(6295)["default"];
/* harmony default export */ function LazyImage(props) {
  const {
    src,
    alt,
    style = {},
    className = '',
    onLoad = () => {},
    onError = () => {}
  } = props;
  const image = LazyImage_createElement("img", {
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
;// CONCATENATED MODULE: ./src/js/components/Bundle/ProductPrices.jsx
/* provided dependency */ var ProductPrices_createElement = __webpack_require__(6295)["default"];


const ProductPrices = ({
  variant
}) => {
  var _window;

  const {
    money_format
  } = ((_window = window) === null || _window === void 0 ? void 0 : _window.spratlyThemeSettings) || {};
  const comparePriceNode = ProductPrices_createElement("span", {
    class: "prod__compare_price mr-2 line-through text-color-secondary"
  });
  comparePriceNode.innerHTML = formatMoney(variant.compare_at_price, money_format);
  const priceNode = ProductPrices_createElement("span", {
    class: "prod__price"
  });
  priceNode.innerHTML = formatMoney(variant.price, money_format);
  return ProductPrices_createElement("div", null, variant.compare_at_price ? comparePriceNode : null, variant.price ? priceNode : null);
};

/* harmony default export */ var Bundle_ProductPrices = (ProductPrices);
;// CONCATENATED MODULE: ./src/js/components/Bundle/ProductTitle.jsx
/* provided dependency */ var ProductTitle_createElement = __webpack_require__(6295)["default"];
const ProductTitle = ({
  url,
  title,
  handle
}) => {
  const isMainProduct = handle === window.spratlyThemeSettings.productHandle;

  if (isMainProduct) {
    return ProductTitle_createElement("span", {
      className: "prod__title"
    }, title);
  }

  return ProductTitle_createElement("a", {
    href: url,
    className: "prod__title upsell cursor-pointer"
  }, title);
};

/* harmony default export */ var Bundle_ProductTitle = (ProductTitle);
;// CONCATENATED MODULE: ./src/js/components/Bundle/VariantSelect.jsx
/* provided dependency */ var VariantSelect_createElement = __webpack_require__(6295)["default"];


const VariantSelect = ({
  product,
  layout
}) => {
  var _window;

  const {
    money_format
  } = ((_window = window) === null || _window === void 0 ? void 0 : _window.spratlyThemeSettings) || {};
  if (product.has_only_default_variant) return null;
  return VariantSelect_createElement("select", {
    name: "id",
    dataSet: {
      productHandle: product.handle
    },
    className: `sf-product-variant-option-dropdown combined-variant ${layout === 'layout-2' ? 'text-color-secondary' : ''}`
  }, product.variants.map(variant => {
    const priceNode = VariantSelect_createElement("span", null);
    priceNode.innerHTML = `- ${formatMoney(variant.price, money_format)}`;
    return VariantSelect_createElement("option", {
      value: variant.id
    }, variant.title, " ", layout === 'layout-1' ? null : priceNode);
  }));
};

/* harmony default export */ var Bundle_VariantSelect = (VariantSelect);
;// CONCATENATED MODULE: ./src/js/components/Bundle/CheckboxSelect.jsx
/* provided dependency */ var CheckboxSelect_createElement = __webpack_require__(6295)["default"];
const CheckboxSelect = ({
  productHandle,
  className = ''
}) => {
  const isMainProduct = productHandle === window.spratlyThemeSettings.productHandle;
  const defaultClasses = 'upsell__checkbox-label flex-shrink-0 mr-4 cursor-pointer relative';
  return CheckboxSelect_createElement("label", {
    className: `${defaultClasses} ${isMainProduct ? 'main-prod' : ''} ${className}`
  }, CheckboxSelect_createElement("input", {
    type: "checkbox",
    checked: "checked",
    className: "upsell__checkbox hidden",
    dataSet: {
      productHandle
    }
  }), CheckboxSelect_createElement("span", {
    className: "upsell__checkmark absolute top-0 left-0 w-full h-full"
  }));
};

/* harmony default export */ var Bundle_CheckboxSelect = (CheckboxSelect);
;// CONCATENATED MODULE: ./src/js/components/Bundle/Product.jsx
/* provided dependency */ var Product_createElement = __webpack_require__(6295)["default"];
/* provided dependency */ var i18n = __webpack_require__(7345)["default"];






const ProductComponent = ({
  product,
  layout,
  position
}) => {
  const selectedVariant = product.selected_or_first_available_variant;
  const isMainProduct = product.handle === window.spratlyThemeSettings.productHandle;
  return Product_createElement("div", {
    className: "sf-prod__block",
    dataSet: {
      view: 'card',
      mainProduct: isMainProduct
    }
  }, Product_createElement("form", {
    className: "product-form form",
    noValidate: true,
    dataSet: {
      productId: product.id,
      productHandle: product.handle
    }
  }, Product_createElement("input", {
    hidden: true,
    name: "id",
    required: true,
    value: selectedVariant === null || selectedVariant === void 0 ? void 0 : selectedVariant.id
  }), layout === 'layout-2' ? null : Product_createElement("div", {
    className: "inline-flex md:hidden items-center"
  }, Product_createElement(Bundle_CheckboxSelect, {
    productHandle: product.handle,
    className: "block md:hidden"
  })), Product_createElement("div", {
    className: "product-img select-none flex-shrink-0"
  }, Product_createElement("a", {
    className: `block cursor-pointer w-full ${isMainProduct ? 'pointer-events-none' : ''}`,
    href: product.url
  }, Product_createElement("div", {
    className: "spc__main-img transition-opacity duration-300 opacity-100 max-w-full",
    style: {
      '--aspect-ratio': product.aspect_ratio
    }
  }, Product_createElement(LazyImage, {
    style: {
      'object-fit': 'contain'
    },
    src: product.featured_image,
    alt: product.title
  })))), Product_createElement("div", {
    className: "upsell__prod-info flex flex-col"
  }, position === 'inside' && layout === 'layout-2' ? null : Product_createElement('fragment', null, Product_createElement(Bundle_ProductTitle, {
    title: product.title,
    handle: product.handle,
    url: product.url
  }), Product_createElement(Bundle_ProductPrices, {
    variant: selectedVariant
  })), Product_createElement("div", {
    className: "flex mt-4",
    dataSet: {
      variantSelect: true
    }
  }, position === 'inside' && layout === 'layout-1' ? null : Product_createElement(Bundle_CheckboxSelect, {
    productHandle: product.handle
  }), layout === 'layout-1' ? Product_createElement(Bundle_VariantSelect, {
    product: product,
    layout: layout
  }) : Product_createElement("div", {
    className: "content-group flex"
  }, Product_createElement(Bundle_ProductTitle, {
    title: `${isMainProduct ? `${i18n.tr('bundle_this_item')}:` : ''} ${product.title}`,
    handle: product.handle,
    url: product.url
  }), Product_createElement(Bundle_VariantSelect, {
    product: product,
    layout: layout
  })))), position === 'inside' && layout === 'layout-1' ? Product_createElement("div", null, Product_createElement("button", {
    className: `select-button sf__btn sf__btn-secondary selected ${isMainProduct ? 'main-prod' : ''}`,
    dataSet: {
      productHandle: product.handle
    }
  }, i18n.tr(isMainProduct ? 'bundle_this_item' : 'bundle_selected'))) : null));
};

/* harmony default export */ var Product = (ProductComponent);
;// CONCATENATED MODULE: ./src/js/components/Bundle/DiscountNode.jsx
/* provided dependency */ var DiscountNode_createElement = __webpack_require__(6295)["default"];
const DiscountNode = ({
  discountSummary
}) => {
  if (!discountSummary) return null;
  return DiscountNode_createElement("div", {
    class: "bundle_discount flex items-center"
  }, DiscountNode_createElement("svg", {
    className: "mr-2",
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "19",
    fill: "none",
    viewBox: "0 0 18 19"
  }, DiscountNode_createElement("path", {
    fill: "#DA3F3F",
    d: "M17.4375 7.49219C17.8125 8.00781 18 8.59375 18 9.25s-.1875 1.2539-.5625 1.793c-.375.5156-.8555.8789-1.4414 1.0898.2578.5625.3281 1.1719.2109 1.8281-.0937.6329-.375 1.1836-.8437 1.6524-.4688.4687-1.0195.75-1.6524.8437-.6328.1172-1.2421.0469-1.8281-.2109-.1406.3984-.3516.7383-.6328 1.0195-.2812.3047-.6211.5391-1.0195.7032-.37503.1874-.78519.2812-1.2305.2812-.65625 0-1.25391-.1875-1.79297-.5625-.51562-.375-.87891-.8555-1.08984-1.4414-.58594.2578-1.19531.3281-1.82813.2109-.63281-.0937-1.18359-.375-1.65234-.8437-.46875-.4688-.76172-1.0195-.87891-1.6524-.09375-.6562-.01172-1.2656.2461-1.8281C1.41797 11.9219.9375 11.5586.5625 11.043.1875 10.5039 0 9.90625 0 9.25s.1875-1.24219.5625-1.75781c.375-.53906.85547-.91407 1.44141-1.125-.25782-.5625-.33985-1.16016-.2461-1.79297.11719-.65625.41016-1.21875.87891-1.6875.46875-.46875 1.01953-.75 1.65234-.84375.65625-.11719 1.26563-.04688 1.82813.21094.21093-.58594.57422-1.06641 1.08984-1.44141C7.74609.4375 8.34375.25 9 .25s1.2422.1875 1.7578.5625c.5391.375.9141.85547 1.125 1.44141.5625-.25782 1.1602-.32813 1.793-.21094.6562.09375 1.2187.375 1.6875.84375.4687.46875.75 1.03125.8437 1.6875.1172.63281.0469 1.23047-.2109 1.79297.5859.21093 1.0664.58594 1.4414 1.125zM7.52344 6.22656C7.3125 5.99219 7.05469 5.875 6.75 5.875s-.57422.11719-.80859.35156C5.73047 6.4375 5.625 6.69531 5.625 7s.10547.57422.31641.80859c.23437.21094.5039.31641.80859.31641s.5625-.10547.77344-.31641C7.75781 7.57422 7.875 7.30469 7.875 7s-.11719-.5625-.35156-.77344zm-.35156 6.04684l4.85152-4.85152c.2578-.25782.2578-.51563 0-.77344l-.4218-.42188c-.2578-.25781-.5157-.25781-.7735 0L5.97656 11.0781c-.25781.2578-.25781.5157 0 .7735l.42188.4218c.25781.2578.51562.2578.77344 0zm3.26952.0352c.2344.2109.5039.3164.8086.3164.3047 0 .5625-.1055.7734-.3164.2344-.2344.3516-.5039.3516-.8086 0-.3047-.1172-.5625-.3516-.7734-.2109-.2344-.4687-.3516-.7734-.3516-.3047 0-.5742.1172-.8086.3516-.2109.2109-.3164.4687-.3164.7734 0 .3047.1055.5742.3164.8086z"
  })), discountSummary);
};

/* harmony default export */ var Bundle_DiscountNode = (DiscountNode);
;// CONCATENATED MODULE: ./src/js/components/Bundle/Layout.jsx
/* provided dependency */ var Layout_createElement = __webpack_require__(6295)["default"];
/* provided dependency */ var Layout_i18n = __webpack_require__(7345)["default"];



/* harmony default export */ function Layout({
  bundle_heading,
  products,
  layout,
  container,
  position,
  discountSummary,
  discountClass
}) {
  const containerClass = position === 'outside' ? container : '';
  return Layout_createElement("div", {
    className: `prod-section-upsell ${containerClass} ${layout} ${position} ${discountClass}`,
    dataSet: {
      bundleContainer: "true"
    }
  }, Layout_createElement("h3", {
    className: "upsell_heading"
  }, bundle_heading), Layout_createElement(Bundle_DiscountNode, {
    discountSummary: discountSummary
  }), Layout_createElement("div", {
    className: "upsell__container"
  }, Layout_createElement("div", {
    className: "upsell__products-wrapper flex items-stretch"
  }, products.filter(Boolean).map(product => {
    const isMainProduct = product.handle === window.spratlyThemeSettings.productHandle;
    return Layout_createElement('fragment', null, Layout_createElement(Product, {
      product: product,
      layout: layout,
      position: position
    }), !isMainProduct || position === 'inside' && layout === 'layout-1' ? null : Layout_createElement(IconPlus, null));
  })), layout === 'layout-1' ? null : Layout_createElement("div", {
    className: "upsell__products-info flex flex-col"
  }), Layout_createElement("div", {
    className: "total w-full"
  }, Layout_createElement("div", {
    className: "total-block"
  }, Layout_createElement("div", null, Layout_createElement("span", {
    className: "text-color-prod-desc"
  }, Layout_i18n.tr('bundle_total'), ":"), Layout_createElement("span", {
    dataSet: {
      total: true
    },
    className: "mx-2 hidden text-lg line-through text-color-secondary leading-6"
  }), Layout_createElement("span", {
    dataSet: {
      subTotal: true
    },
    className: "upsell__sub-total text-lg ml-2"
  })), Layout_createElement("div", {
    dataSet: {
      savedBlock: true
    },
    className: "mt-1 hidden"
  }, Layout_createElement("span", {
    className: "text-color-prod-desc"
  }, Layout_i18n.tr('bundle_saved'), ":"), Layout_createElement("span", {
    dataSet: {
      savedPrice: true
    },
    className: "mx-2 text-lg text-color-secondary leading-6"
  })), Layout_createElement("button", {
    className: "sf__btn sf__btn-primary upsell__atc mt-5 flex justify-center w-full"
  }, Layout_createElement("span", null, Layout_i18n.tr('bundle_button'))), Layout_createElement("div", {
    className: "upsell__error"
  })))));
}
;// CONCATENATED MODULE: ./src/js/foxkit/helpers.js
/* provided dependency */ var helpers_createElement = __webpack_require__(6295)["default"];
/* provided dependency */ var helpers_i18n = __webpack_require__(7345)["default"];



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
  discountText.innerHTML = helpers_i18n.tr('discount_summary', {
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
;// CONCATENATED MODULE: ./src/js/utilities/debounce.js
function debounce(fn, wait = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}
;// CONCATENATED MODULE: ./src/js/foxkit/plugins/bundle.js
/* provided dependency */ var bundle_createElement = __webpack_require__(6295)["default"];
/* provided dependency */ var bundle_i18n = __webpack_require__(7345)["default"];

// eslint-disable-next-line no-unused-vars











class ProductBundle {
  constructor(container, settings) {
    var _window$spratlyThemeS, _this$handles;

    (0,defineProperty/* default */.Z)(this, "selectors", {
      bundleContainer: '[data-bundle-container]',
      productsWrapper: '.upsell__products-wrapper',
      productForms: ['form[data-product-id]'],
      variantSelects: ['[data-variant-select]'],
      mainImg: '[data-main-product] .spc__main-img img',
      productsInfo: '.upsell__products-info',
      iconPlus: '.icon-plus',
      atc: '.upsell__atc',
      total: '.total',
      totalPrice: '[data-total]',
      subTotalPrice: '[data-sub-total]',
      savedBlock: '[data-saved-block]',
      savedPrice: '[data-saved-price]',
      errorWrapper: '.upsell__error'
    });

    (0,defineProperty/* default */.Z)(this, "spinner", bundle_createElement(Spinner, {
      className: "m-0.5"
    }));

    (0,defineProperty/* default */.Z)(this, "products", []);

    (0,defineProperty/* default */.Z)(this, "productInstances", []);

    (0,defineProperty/* default */.Z)(this, "containerClass", window.spratlyThemeSettings.productContainer || 'container');

    (0,defineProperty/* default */.Z)(this, "money_format", ((_window$spratlyThemeS = window.spratlyThemeSettings) === null || _window$spratlyThemeS === void 0 ? void 0 : _window$spratlyThemeS.money_format) || "${{amount}}");

    (0,defineProperty/* default */.Z)(this, "init", async () => {
      try {
        // Fetch product section
        this.products = await getProductsJSON(this.handles);
        const {
          bundle_heading,
          position,
          layout,
          active_discount,
          discount
        } = this.settings;
        const hasDiscount = active_discount && discount.value;
        const bundle = bundle_createElement(Layout, {
          layout: layout,
          container: this.containerClass,
          position: position,
          bundle_heading: bundle_heading,
          products: this.products,
          discountSummary: hasDiscount ? getDiscountSummary(discount) : null,
          discountClass: hasDiscount ? 'has-discount' : 'no-discount'
        });
        this.container.appendChild(bundle);
        this.domNodes = queryDomNodes(this.selectors, this.container);
        const promises = this.domNodes.productForms.map(async form => {
          const prodInstance = new window.spratlyTheme.Product(form, {
            autoInit: false
          });
          await prodInstance.init();
          prodInstance.selected = true;
          this.productInstances.push(prodInstance);
        });
        await Promise.all(promises);

        if (layout === 'layout-1') {
          this.setTotalBlockShadow();
        } else if (layout === 'layout-2') {
          this.moveVariantSelectsOut();
        }

        this.setMainImgHeight();
        bundle.style.opacity = 1;
      } catch (error) {
        console.error("Failed to init Product Upsell section", error);
      }
    });

    (0,defineProperty/* default */.Z)(this, "moveVariantSelectsOut", () => {
      const {
        variantSelects,
        productsInfo
      } = this.domNodes;
      variantSelects.forEach(varSel => productsInfo.appendChild(varSel));
    });

    (0,defineProperty/* default */.Z)(this, "setMainImgHeight", () => {
      const func = () => {
        const {
          mainImg
        } = this.domNodes;

        if (mainImg) {
          this.container.style.setProperty('--main-img-height', `${mainImg.offsetHeight}px`);
        }
      };

      func();
      window.addEventListener("resize", debounce(func));
    });

    (0,defineProperty/* default */.Z)(this, "setTotalBlockShadow", () => {
      const func = () => {
        var _total$classList, _total$classList$meth;

        const {
          productsWrapper,
          total
        } = this.domNodes;
        const {
          clientWidth,
          scrollWidth
        } = productsWrapper;
        const method = scrollWidth > clientWidth ? 'add' : 'remove';
        total === null || total === void 0 ? void 0 : (_total$classList = total.classList) === null || _total$classList === void 0 ? void 0 : (_total$classList$meth = _total$classList[method]) === null || _total$classList$meth === void 0 ? void 0 : _total$classList$meth.call(_total$classList, 'has-shadow');
      };

      func();
      window.addEventListener("resize", debounce(func));
    });

    (0,defineProperty/* default */.Z)(this, "handleSelectProduct", () => {
      events_addEventDelegate({
        event: 'change',
        context: this.container,
        selector: '.sf-product-variant-option-dropdown',
        handler: this.setTotalPrices
      });
      events_addEventDelegate({
        event: 'change',
        context: this.container,
        selector: '.upsell__checkbox',
        handler: (e, checkbox) => {
          const handle = checkbox.dataset.productHandle;
          const prodInstance = this.productInstances.find(ins => ins.productData.handle === handle);
          prodInstance.selected = checkbox.checked;
          const img = prodInstance.productHelper.domNodes.featuredImage;

          if (img) {
            img.style.opacity = checkbox.checked ? 1 : 0.5;
          }

          this.setAddToCartBtnState();
          this.setTotalPrices();
        }
      });
      events_addEventDelegate({
        context: this.container,
        selector: '.select-button',
        handler: (e, btn) => {
          e.preventDefault();
          btn.blur();
          const handle = btn.dataset.productHandle;
          const prodInstance = this.productInstances.find(ins => ins.productData.handle === handle);
          const selected = btn.classList.contains('selected');
          btn.classList[selected ? 'remove' : 'add']('selected');
          btn.textContent = bundle_i18n.tr(selected ? 'bundle_select' : 'bundle_selected');
          prodInstance.selected = !selected;
          const img = prodInstance.productHelper.domNodes.featuredImage;

          if (img) {
            img.style.opacity = !selected ? 1 : 0.6;
          }

          this.setAddToCartBtnState();
          this.setTotalPrices();
        }
      });
    });

    (0,defineProperty/* default */.Z)(this, "setAddToCartBtnState", () => {
      const {
        atc
      } = this.domNodes;
      const selectedProducts = this.productInstances.filter(inst => inst.selected);
      const method = selectedProducts.length > 1 ? 'remove' : 'add';
      atc.classList[method]('disabled');
    });

    (0,defineProperty/* default */.Z)(this, "handleAddToCart", () => {
      events_addEventDelegate({
        context: this.container,
        selector: this.selectors.atc,
        handler: () => {
          const ids = [];
          this.productInstances.forEach(ins => {
            if (ins.selected) {
              ids.push(Number(ins.domNodes.variantIdNode.value));
            }
          });
          const data = {
            items: ids.map(id => ({
              id,
              quantity: 1,
              properties: {
                _foxDiscount: {
                  plugin: 'Bundle',
                  offer_id: this.settings._id
                }
              }
            }))
          };
          const config = fetch_getRequestDefaultConfigs();
          config.method = 'POST';
          config.body = JSON.stringify(data);
          this.toggleLoading(true);
          fetch('/cart/add.js', config).then(async res => {
            if (!(res !== null && res !== void 0 && res.ok)) {
              const err = await res.json();
              this.showError((err === null || err === void 0 ? void 0 : err.description) || "Failed to add all items to cart!");
            } else {
              const {
                items
              } = await res.json();
              const firstItem = items.shift();
              window.Shopify.onItemAdded(firstItem);
              items.forEach(itm => setTimeout(() => window.Shopify.onItemAdded(itm, false), 3000));
            }

            setTimeout(() => this.toggleLoading(false), 300);
          }).catch(err => {
            var _err$toString;

            this.showError(err === null || err === void 0 ? void 0 : (_err$toString = err.toString) === null || _err$toString === void 0 ? void 0 : _err$toString.call(err));
            this.toggleLoading(false);
          });
        }
      });
    });

    (0,defineProperty/* default */.Z)(this, "setTotalPrices", () => {
      const variants = this.productInstances.filter(ins => ins.selected).map(ins => {
        const variantId = ins.domNodes.variantIdNode.value;
        const variant = ins.productData.variants.find(v => (v === null || v === void 0 ? void 0 : v.id) === Number(variantId));
        return variant;
      }).filter(Boolean);
      let total, subTotal;
      const price = variants.reduce((s, v) => s + v.price, 0);
      const {
        active_discount,
        discount
      } = this.settings;
      let discountedPrice;

      if (variants.length === 1) {
        discountedPrice = price;
      } else if (active_discount && discount && discount.value) {
        if (discount.type === "PERCENTAGE") {
          discountedPrice = price * (100 - discount.value) / 100;
        } else if (discount.type === "FIXED_AMOUNT") {
          discountedPrice = price - discount.value * 100 * variants.length;
          if (discountedPrice < 0) discountedPrice = 0;
        }
      }

      if (typeof discountedPrice === "number") {
        total = price;
        subTotal = discountedPrice;
      } else {
        const comparePrice = variants.reduce((s, v) => s + (v.compare_at_price || v.price), 0);

        if (comparePrice > price) {
          total = comparePrice;
        }

        subTotal = price;
      }

      const saved = total - subTotal;
      const {
        money_format
      } = this;
      const {
        totalPrice,
        subTotalPrice,
        savedBlock,
        savedPrice
      } = this.domNodes;
      subTotalPrice.innerHTML = formatMoney(subTotal, money_format);

      if (total) {
        totalPrice.innerHTML = formatMoney(total, money_format);
        savedPrice.innerHTML = formatMoney(saved, money_format);
        savedBlock.classList.remove('hidden');
        totalPrice.classList.remove('hidden');
      } else {
        savedBlock.classList.add('hidden');
        totalPrice.classList.add('hidden');
      }
    });

    (0,defineProperty/* default */.Z)(this, "showError", err => {
      var _this$domNodes;

      notification.show({
        target: (_this$domNodes = this.domNodes) === null || _this$domNodes === void 0 ? void 0 : _this$domNodes.errorWrapper,
        method: 'appendChild',
        type: 'warning',
        message: err
      });
    });

    (0,defineProperty/* default */.Z)(this, "toggleLoading", loading => {
      if (loading) {
        this.domNodes.atc.appendChild(this.spinner);
        this.domNodes.atc.classList.add('sf-spinner-loading');
      } else {
        var _this$spinner;

        this === null || this === void 0 ? void 0 : (_this$spinner = this.spinner) === null || _this$spinner === void 0 ? void 0 : _this$spinner.remove();
        this.domNodes.atc.classList.remove('sf-spinner-loading');
      }
    });

    if (!container || !settings) return;
    this.container = container;
    this.settings = settings;
    this.settings.mainProduct = window.spratlyThemeSettings.productHandle;
    this.handles = [this.settings.mainProduct, ...this.settings.products];

    if ((_this$handles = this.handles) !== null && _this$handles !== void 0 && _this$handles.length) {
      this.init().then(() => {
        this.setTotalPrices();
        this.handleSelectProduct();
        this.handleAddToCart();
      }).catch(err => console.error("Failed to init product upsell", err));
    } else {
      var _container$remove;

      container === null || container === void 0 ? void 0 : (_container$remove = container.remove) === null || _container$remove === void 0 ? void 0 : _container$remove.call(container);
    }
  }

}

window.spratlyTheme = window.spratlyTheme || {};
window.spratlyTheme.ProductBundle = ProductBundle;
}();
/******/ })()
;