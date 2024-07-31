/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7134:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* provided dependency */ var createElement = __webpack_require__(6295)["default"];
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({
  type,
  message,
  onclick
}) {
  let icon;

  if (type === 'warning') {
    icon = createElement("svg", {
      class: "w-6 h-6",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, createElement("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }));
  } else if (type === 'success') {
    icon = createElement("svg", {
      class: "w-6 h-6",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, createElement("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }));
  }

  return createElement("div", {
    className: `notification ${type}`,
    onclick: onclick
  }, icon, createElement("div", {
    className: "ml-3 text-sm md:text-base"
  }, message));
}

/***/ }),

/***/ 7701:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4942);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2870);



class CountdownTimer {
  constructor(container, startTime, endTime, options = {}) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "times", ['day', 'hour', 'min', 'sec']);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "selectors", {
      day: '.countdown-timer-day',
      hour: '.countdown-timer-hour',
      min: '.countdown-timer-minute',
      sec: '.countdown-timer-sec'
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "DAY_IN_MS", 24 * 60 * 60 * 1000);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "HOUR_IN_MS", 60 * 60 * 1000);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "MIN_IN_MS", 60 * 1000);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "start", () => {
      this.timer = setInterval(() => {
        if (this.startTime > this.endTime) this.stop();else this.update();
      }, this.intervalTime);
      this.container.classList.add("opacity-100");
      this.container.classList.remove("opacity-0");
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "update", () => {
      const timeData = this.format(this.endTime - this.startTime);
      this.times.forEach(time => {
        var _this$domNodes;

        if (this !== null && this !== void 0 && (_this$domNodes = this.domNodes) !== null && _this$domNodes !== void 0 && _this$domNodes[time]) {
          this.domNodes[time].textContent = this.addZeroPrefix(timeData[time]);
        }
      });
      this.startTime += this.intervalTime;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "stop", () => {
      clearInterval(this.timer);

      if (this.options.loop) {
        this.startTime = this.savedStartTime;
        this.start();
      } else {
        this.timer = null;
        this.options.callback();
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "clear", () => {
      clearInterval(this.timer);
      this.timer = null;
      this.startTime = this.savedStartTime;
      this.times.forEach(time => {
        var _this$domNodes2;

        if (this !== null && this !== void 0 && (_this$domNodes2 = this.domNodes) !== null && _this$domNodes2 !== void 0 && _this$domNodes2[time]) {
          this.domNodes[time].textContent = "00";
        }
      });
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "addZeroPrefix", num => {
      var _this$options;

      if (this !== null && this !== void 0 && (_this$options = this.options) !== null && _this$options !== void 0 && _this$options.addZeroPrefix && num < 10) {
        return `0${num}`;
      }

      return num.toString();
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "format", ms => {
      return {
        day: Math.floor(ms / this.DAY_IN_MS),
        hour: Math.floor(ms / this.HOUR_IN_MS) % 24,
        min: Math.floor(ms / this.MIN_IN_MS) % 60,
        sec: Math.floor(ms / 1000) % 60
      };
    });

    this.container = container;
    this.startTime = startTime;
    this.savedStartTime = startTime;
    this.endTime = endTime;
    this.options = Object.assign({}, {
      addZeroPrefix: true,
      loop: false,
      callback: () => {}
    }, options);
    this.intervalTime = 1000;
    this.timer = null;
    this.domNodes = (0,_utils_index__WEBPACK_IMPORTED_MODULE_0__/* .queryDomNodes */ .zt)(this.selectors, container);
    this.start();
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (CountdownTimer);

/***/ }),

/***/ 1521:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4942);
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7134);
/* provided dependency */ var createElement = __webpack_require__(6295)["default"];

// eslint-disable-next-line no-unused-vars


class Notification {
  constructor() {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "noti", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "removeTimeoutId", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "hideTimeoutId", null);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "transitionDuration", 300);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "show", ({
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
        this.noti = createElement(_components_Notification__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
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

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "handleClick", () => {
      clearTimeout(this.removeTimeoutId);
      this.noti.classList.add('hide');
      setTimeout(this.removeNoti, this.transitionDuration * 2);
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "clearTimeout", () => {
      clearTimeout(this.removeTimeoutId);
      clearTimeout(this.hideTimeoutId);
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(this, "removeNoti", () => {
      var _this$noti;

      this === null || this === void 0 ? void 0 : (_this$noti = this.noti) === null || _this$noti === void 0 ? void 0 : _this$noti.remove();
    });
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (new Notification());

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

/***/ 8971:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": function() { return /* binding */ addEventDelegate; }
/* harmony export */ });
/* unused harmony export default */
const addEventDelegate = ({
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

/***/ }),

/***/ 6662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRequestDefaultConfigs": function() { return /* binding */ getRequestDefaultConfigs; },
/* harmony export */   "fetchJSON": function() { return /* binding */ fetchJSON; },
/* harmony export */   "fetchSection": function() { return /* binding */ fetchSection; }
/* harmony export */ });
/* unused harmony exports fetchCache, fetchJsonCache */
/* provided dependency */ var createElement = __webpack_require__(6295)["default"];
const requestDefaultConfigs = {
  mode: 'same-origin',
  credentials: 'same-origin',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
};
function getRequestDefaultConfigs() {
  return JSON.parse(JSON.stringify(requestDefaultConfigs));
}
const fetchJSON = (url, config = getRequestDefaultConfigs()) => {
  return fetch(url, config).then(function (response) {
    if (!response.ok) {
      throw response;
    }

    return response.json();
  });
};
const cache = new Map();
const fetchCache = (url, config = getRequestDefaultConfigs()) => {
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

    fetch(`${window.spratlyThemeSettings.rootUrl}?section_id=${sectionId}`, getRequestDefaultConfigs()).then(res => res.text()).then(html => {
      const div = createElement("div", null);
      div.innerHTML = html;
      sectionCache.set(sectionId, div);
      resolve(div);
    }).catch(reject);
  });
};
const cache2 = new Map();
const fetchJsonCache = (url, config = requestDefaultConfigs) => {
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

/***/ }),

/***/ 2870:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zt": function() { return /* binding */ queryDomNodes; }
/* harmony export */ });
/* unused harmony exports productFormCheck, camelCaseToSnakeCase, animateReplace, createSearchLink, isInViewport, getVideoURL, scrollToTop, setCookie, getCookie, addRecentViewedProduct, generateDomFromString, emailIsValid, updateParam, getParams, runHelpers */
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(643);
/* harmony import */ var scroll_into_view__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scroll_into_view__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _load_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2837);
/* provided dependency */ var createElement = __webpack_require__(6295)["default"];






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
  const d = createElement("div", null);
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

/***/ }),

/***/ 2837:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony exports loadJS, loadCSS, loadAssets */
function loadJS(src, target = document.body, async = true, defer = false) {
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
function loadCSS(href, target = document.head) {
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
    load: loadJS
  },
  'css': {
    urls: themeStyleURLs,
    load: loadCSS
  }
};

function log(asset) {
  console.groupCollapsed('%c Asset loaded: ', '#f7a046', asset);
  console.trace();
  console.groupEnd();
}

function loadAssets(param) {
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

/***/ }),

/***/ 7559:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": function() { return /* binding */ formatMoney; }
/* harmony export */ });
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
// EXTERNAL MODULE: ./src/js/modules/countdown-timer.js
var countdown_timer = __webpack_require__(7701);
// EXTERNAL MODULE: ./node_modules/@shopify/theme-currency/currency.js
var currency = __webpack_require__(7559);
// EXTERNAL MODULE: ./src/js/utilities/events.js
var events = __webpack_require__(8971);
// EXTERNAL MODULE: ./src/js/utilities/fetch.js
var utilities_fetch = __webpack_require__(6662);
// EXTERNAL MODULE: ./src/js/utilities/index.js
var utilities = __webpack_require__(2870);
;// CONCATENATED MODULE: ./src/js/modules/animate-loading.js

class AnimateLoading {
  constructor(target, options = {}) {
    (0,defineProperty/* default */.Z)(this, "selectors", {
      loadingBar: 'al-loading-bar',
      loadingOverlay: 'al-loading-overlay'
    });

    (0,defineProperty/* default */.Z)(this, "defaultOptions", {
      overlay: null,
      thickness: '3px',
      color: 'gray',
      startDuration: 1000,
      finishDuration: 300
    });

    this.options = Object.assign({}, this.defaultOptions, options);
    this.target = target;
    this.overlay = this.options.overlay || this.target;
    this.cleanUp = this.cleanUp.bind(this);
    this.setLoadingData();
  }

  setLoadingData() {
    const {
      overlay,
      options: {
        startDuration,
        finishDuration,
        thickness,
        color
      }
    } = this;
    overlay.style.setProperty('--al-thickness', ` ${thickness}`);
    overlay.style.setProperty('--al-color', ` ${color}`);
    overlay.style.setProperty('--al-start-duration', ` ${startDuration}ms`);
    overlay.style.setProperty('--al-finish-duration', ` ${finishDuration}ms`);
  }

  start() {
    this.target.classList.add(this.selectors.loadingBar, 'start', 'loading');
    this.overlay.classList.add(this.selectors.loadingOverlay, 'overlay-show');
  }

  finish(callback = () => {}) {
    const {
      target,
      overlay,
      cleanUp,
      options: {
        finishDuration
      }
    } = this;
    const endWidth = window.getComputedStyle(target, ':before').width;
    target.style.setProperty('--al-end-width', endWidth);
    target.classList.add('loaded');
    target.classList.remove('loading');
    setTimeout(() => {
      target.classList.add('finished');
      overlay.classList.remove('overlay-show');
    }, 50);
    setTimeout(cleanUp, finishDuration * 2);
    setTimeout(callback, finishDuration);
  }

  cleanUp() {
    this.target.classList.remove(this.selectors.loadingBar, 'start', 'loaded', 'finished');
    this.overlay.classList.remove(this.selectors.loadingOverlay);
  }

}
// EXTERNAL MODULE: ./src/js/modules/notification.js
var notification = __webpack_require__(1521);
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-addresses/loader.js
var query = "query countries($locale: SupportedLocale!) {" + "  countries(locale: $locale) {" + "    name" + "    code" + "    labels {" + "      address1" + "      address2" + "      city" + "      company" + "      country" + "      firstName" + "      lastName" + "      phone" + "      postalCode" + "      zone" + "    }" + "    formatting {" + "      edit" + "    }" + "    zones {" + "      name" + "      code" + "    }" + "  }" + "}";
var GRAPHQL_ENDPOINT = 'https://country-service.shopifycloud.com/graphql';
function loadCountries(locale) {
  var response = fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      query: query,
      operationName: 'countries',
      variables: {
        locale: toSupportedLocale(locale)
      }
    })
  });
  return response.then(function (res) {
    return res.json();
  }).then(function (countries) {
    return countries.data.countries;
  });
}
var DEFAULT_LOCALE = 'EN';
var SUPPORTED_LOCALES = ['DA', 'DE', 'EN', 'ES', 'FR', 'IT', 'JA', 'NL', 'PT', 'PT_BR'];
function toSupportedLocale(locale) {
  var supportedLocale = locale.replace(/-/, '_').toUpperCase();

  if (SUPPORTED_LOCALES.indexOf(supportedLocale) !== -1) {
    return supportedLocale;
  } else if (SUPPORTED_LOCALES.indexOf(supportedLocale.substring(0, 2)) !== -1) {
    return supportedLocale.substring(0, 2);
  } else {
    return DEFAULT_LOCALE;
  }
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-addresses/helpers.js
function mergeObjects() {
  var to = Object({});

  for (var index = 0; index < arguments.length; index++) {
    var nextSource = arguments[index];

    if (nextSource) {
      for (var nextKey in nextSource) {
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }

  return to;
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-addresses/addressForm.js


var FIELD_REGEXP = /({\w+})/g;
var LINE_DELIMITER = '_';
var INPUT_SELECTORS = {
  lastName: '[name="address[last_name]"]',
  firstName: '[name="address[first_name]"]',
  company: '[name="address[company]"]',
  address1: '[name="address[address1]"]',
  address2: '[name="address[address2]"]',
  country: '[name="address[country]"]',
  zone: '[name="address[province]"]',
  postalCode: '[name="address[zip]"]',
  city: '[name="address[city]"]',
  phone: '[name="address[phone]"]'
};
function AddressForm(rootEl, locale, options) {
  locale = locale || 'en';
  options = options || {
    inputSelectors: {}
  };
  var formElements = loadFormElements(rootEl, mergeObjects(INPUT_SELECTORS, options.inputSelectors));
  validateElements(formElements);
  return loadShippingCountries(options.shippingCountriesOnly).then(function (shippingCountryCodes) {
    return loadCountries(locale).then(function (countries) {
      init(rootEl, formElements, filterCountries(countries, shippingCountryCodes));
    });
  });
}
/**
 * Runs when countries have been loaded
 */

function init(rootEl, formElements, countries) {
  populateCountries(formElements, countries);
  var selectedCountry = formElements.country.input ? formElements.country.input.value : null;
  setEventListeners(rootEl, formElements, countries);
  handleCountryChange(rootEl, formElements, selectedCountry, countries);
}
/**
 * Handles when a country change: set labels, reorder fields, populate zones
 */


function handleCountryChange(rootEl, formElements, countryCode, countries) {
  var country = getCountry(countryCode, countries);
  setLabels(formElements, country);
  reorderFields(rootEl, formElements, country);
  populateZones(formElements, country);
}
/**
 * Sets up event listener for country change
 */


function setEventListeners(rootEl, formElements, countries) {
  formElements.country.input.addEventListener('change', function (event) {
    handleCountryChange(rootEl, formElements, event.target.value, countries);
  });
}
/**
 * Reorder fields in the DOM and add data-attribute to fields given a country
 */


function reorderFields(rootEl, formElements, country) {
  var formFormat = country.formatting.edit;
  var countryWrapper = formElements.country.wrapper;
  var afterCountry = false;
  getOrderedField(formFormat).forEach(function (row) {
    row.forEach(function (line) {
      formElements[line].wrapper.dataset.lineCount = row.length;

      if (!formElements[line].wrapper) {
        return;
      }

      if (line === 'country') {
        afterCountry = true;
        return;
      }

      if (afterCountry) {
        rootEl.append(formElements[line].wrapper);
      } else {
        rootEl.insertBefore(formElements[line].wrapper, countryWrapper);
      }
    });
  });
}
/**
 * Update labels for a given country
 */


function setLabels(formElements, country) {
  Object.keys(formElements).forEach(function (formElementName) {
    formElements[formElementName].labels.forEach(function (label) {
      label.textContent = country.labels[formElementName];
    });
  });
}
/**
 * Add right countries in the dropdown for a given country
 */


function populateCountries(formElements, countries) {
  var countrySelect = formElements.country.input;
  var duplicatedCountrySelect = countrySelect.cloneNode(true);
  countries.forEach(function (country) {
    var optionElement = document.createElement('option');
    optionElement.value = country.code;
    optionElement.textContent = country.name;
    duplicatedCountrySelect.appendChild(optionElement);
  });
  countrySelect.innerHTML = duplicatedCountrySelect.innerHTML;

  if (countrySelect.dataset.default) {
    countrySelect.value = countrySelect.dataset.default;
  }
}
/**
 * Add right zones in the dropdown for a given country
 */


function populateZones(formElements, country) {
  var zoneEl = formElements.zone;

  if (!zoneEl) {
    return;
  }

  if (country.zones.length === 0) {
    zoneEl.wrapper.dataset.ariaHidden = 'true';
    zoneEl.input.innerHTML = '';
    return;
  }

  zoneEl.wrapper.dataset.ariaHidden = 'false';
  var zoneSelect = zoneEl.input;
  var duplicatedZoneSelect = zoneSelect.cloneNode(true);
  duplicatedZoneSelect.innerHTML = '';
  country.zones.forEach(function (zone) {
    var optionElement = document.createElement('option');
    optionElement.value = zone.code;
    optionElement.textContent = zone.name;
    duplicatedZoneSelect.appendChild(optionElement);
  });
  zoneSelect.innerHTML = duplicatedZoneSelect.innerHTML;

  if (zoneSelect.dataset.default) {
    zoneSelect.value = zoneSelect.dataset.default;
  }
}
/**
 * Will throw if an input or a label is missing from the wrapper
 */


function validateElements(formElements) {
  Object.keys(formElements).forEach(function (elementKey) {
    var element = formElements[elementKey].input;
    var labels = formElements[elementKey].labels;

    if (!element) {
      return;
    }

    if (typeof element !== 'object') {
      throw new TypeError(formElements[elementKey] + ' is missing an input or select.');
    } else if (typeof labels !== 'object') {
      throw new TypeError(formElements[elementKey] + ' is missing a label.');
    }
  });
}
/**
 * Given an countryCode (eg. 'CA'), will return the data of that country
 */


function getCountry(countryCode, countries) {
  countryCode = countryCode || 'CA';
  return countries.filter(function (country) {
    return country.code === countryCode;
  })[0];
}
/**
 * Given a format (eg. "{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{country}{province}{zip}_{phone}")
 * will return an array of how the form needs to be formatted, eg.:
 * =>
 * [
 *   ['firstName', 'lastName'],
 *   ['company'],
 *   ['address1'],
 *   ['address2'],
 *   ['city'],
 *   ['country', 'province', 'zip'],
 *   ['phone']
 * ]
 */


function getOrderedField(format) {
  return format.split(LINE_DELIMITER).map(function (fields) {
    var result = fields.match(FIELD_REGEXP);

    if (!result) {
      return [];
    }

    return result.map(function (fieldName) {
      var newFieldName = fieldName.replace(/[{}]/g, '');

      switch (newFieldName) {
        case 'zip':
          return 'postalCode';

        case 'province':
          return 'zone';

        default:
          return newFieldName;
      }
    });
  });
}
/**
 * Given a rootEl where all `input`s, `select`s, and `labels` are nested, it
 * will returns all form elements (wrapper, input and labels) of the form.
 * See `FormElements` type for details
 */


function loadFormElements(rootEl, inputSelectors) {
  var elements = {};
  Object.keys(INPUT_SELECTORS).forEach(function (inputKey) {
    var input = rootEl.querySelector(inputSelectors[inputKey]);
    elements[inputKey] = input ? {
      wrapper: input.parentElement,
      input: input,
      labels: document.querySelectorAll('[for="' + input.id + '"]')
    } : {};
  });
  return elements;
}
/**
 * If shippingCountriesOnly is set to true, will return the list of countries the
 * shop ships to. Otherwise returns null.
 */


function loadShippingCountries(shippingCountriesOnly) {
  if (!shippingCountriesOnly) {
    // eslint-disable-next-line no-undef
    return Promise.resolve(null);
  }

  var response = fetch(location.origin + '/meta.json');
  return response.then(function (res) {
    return res.json();
  }).then(function (meta) {
    // If ships_to_countries has * in the list, it means the shop ships to
    // all countries
    return meta.ships_to_countries.indexOf('*') !== -1 ? null : meta.ships_to_countries;
  }).catch(function () {
    return null;
  });
}
/**
 * Only returns countries that are in includedCountryCodes
 * Returns all countries if no includedCountryCodes is passed
 */


function filterCountries(countries, includedCountryCodes) {
  if (!includedCountryCodes) {
    return countries;
  }

  return countries.filter(function (country) {
    return includedCountryCodes.indexOf(country.code) !== -1;
  });
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-addresses/theme-addresses.js


;// CONCATENATED MODULE: ./src/js/modules/cart.js
/* provided dependency */ var createElement = __webpack_require__(6295)["default"];










class Cart {
  constructor() {
    (0,defineProperty/* default */.Z)(this, "selectors", {
      cartIcon: '.sf-cart-icon',
      cartCounts: ['.sf-cart-count'],
      cartDrawer: '.scd__wrapper',
      cartDrawerContent: '.scd__content',
      cartDrawerFooter: '.scd__footer',
      cartDrawerClose: '.scd__close',
      cartDiscountCode: '[name="discount"]',
      cartDiscountCodeNoti: '[data-discount-noti]',
      cartDrawerItems: '.scd__items',
      cartCountDown: '.scd__countdown',
      cartCountDownMessage: "[data-countdown-message]",
      overlay: '.scd__overlay',
      addressForm: '[data-address="root"]',
      zipCode: '[name="address[zip]"]',
      province: '[name="address[province]"]',
      country: '[name="address[country]"]',
      shippingContent: '.scd__addon-message',
      cartNote: '[name="note"]'
    });

    (0,defineProperty/* default */.Z)(this, "cartItemSelectors", {
      btn: '.scd-item__btn',
      qtyInput: '.scd-item__qty_input',
      remove: '.scd-item__remove'
    });

    (0,defineProperty/* default */.Z)(this, "cart", {});

    (0,defineProperty/* default */.Z)(this, "scrollHandlerAdded", false);

    (0,defineProperty/* default */.Z)(this, "countdownTimerStarted", false);

    (0,defineProperty/* default */.Z)(this, "openAddon", null);

    (0,defineProperty/* default */.Z)(this, "discountCodeKey", 'mn-discount-code');

    (0,defineProperty/* default */.Z)(this, "isCartPage", window.spratlyThemeSettings.templateName === 'cart');

    (0,defineProperty/* default */.Z)(this, "enableCartDrawer", window.spratlyThemeSettings.enable_cart_drawer);

    (0,defineProperty/* default */.Z)(this, "cartSection", this.isCartPage ? 'cart-template' : 'cart-drawer');

    (0,defineProperty/* default */.Z)(this, "fetchCartSection", async () => {
      return await (0,utilities_fetch.fetchSection)(this.cartSection);
    });

    (0,defineProperty/* default */.Z)(this, "initCartCountDown", () => {
      const {
        cartCountDown
      } = this.domNodes;

      if (cartCountDown) {
        const startTime = Date.now();
        const duration = Number(cartCountDown.dataset.countdownTime) || 5;
        const repeat = cartCountDown.dataset.repeat === 'true';
        const message = cartCountDown.dataset.timeoutMessage;
        const endTime = startTime + duration * 60 * 1000;
        this.countdownTimer = new countdown_timer/* default */.Z(cartCountDown, startTime, endTime, {
          addZeroPrefix: false,
          loop: repeat,
          callback: () => {
            if (!repeat && message) {
              this.domNodes.cartCountDownMessage.innerHTML = message;
              cartCountDown.classList.add('time-out');
              cartCountDown.style.color = '#f44336';
            }
          }
        });
        this.countdownTimerStarted = true;
      }
    });

    (0,defineProperty/* default */.Z)(this, "addScrollHandler", () => {
      var _this$domNodes, _this$domNodes$cartDr, _this$domNodes2, _this$domNodes2$cartD, _this$domNodes3, _this$domNodes3$cartD, _this$domNodes3$cartD2;

      const cartItemsOffsetTop = (_this$domNodes = this.domNodes) === null || _this$domNodes === void 0 ? void 0 : (_this$domNodes$cartDr = _this$domNodes.cartDrawerItems) === null || _this$domNodes$cartDr === void 0 ? void 0 : _this$domNodes$cartDr.offsetTop;
      const footerHeight = (_this$domNodes2 = this.domNodes) === null || _this$domNodes2 === void 0 ? void 0 : (_this$domNodes2$cartD = _this$domNodes2.cartDrawerFooter) === null || _this$domNodes2$cartD === void 0 ? void 0 : _this$domNodes2$cartD.offsetHeight;
      const cartItemsPaddingTop = '10px';
      (_this$domNodes3 = this.domNodes) === null || _this$domNodes3 === void 0 ? void 0 : (_this$domNodes3$cartD = _this$domNodes3.cartDrawerItems) === null || _this$domNodes3$cartD === void 0 ? void 0 : (_this$domNodes3$cartD2 = _this$domNodes3$cartD.style) === null || _this$domNodes3$cartD2 === void 0 ? void 0 : _this$domNodes3$cartD2.setProperty('--scd-items-max-height', `calc(100vh - ${cartItemsOffsetTop}px - ${footerHeight}px - ${cartItemsPaddingTop})`);
      this.scrollHandlerAdded = true;
    });

    (0,defineProperty/* default */.Z)(this, "getCartItemByKey", key => {
      const {
        items
      } = this.cart;

      if (Array.isArray(items)) {
        const item = items.find(({
          key: _key
        }) => _key === key);
        if (item) return item;
      }
    });

    (0,defineProperty/* default */.Z)(this, "getCart", () => {
      return (0,utilities_fetch.fetchJSON)('/cart.json');
    });

    (0,defineProperty/* default */.Z)(this, "changeCart", lineItem => {
      return (0,utilities_fetch.fetchJSON)('/cart/change.js', { ...(0,utilities_fetch.getRequestDefaultConfigs)(),
        method: 'POST',
        body: JSON.stringify(lineItem)
      });
    });

    (0,defineProperty/* default */.Z)(this, "updateCart", data => {
      return (0,utilities_fetch.fetchJSON)('/cart/update.js', { ...(0,utilities_fetch.getRequestDefaultConfigs)(),
        method: 'POST',
        body: JSON.stringify(data)
      });
    });

    (0,defineProperty/* default */.Z)(this, "changeItemQty", async lineItem => {
      const {
        not_enough_item_message = 'Not enough items available. Only __inventory_quantity__ left.',
        sold_out_items_message = 'The product is already sold out.'
      } = window.spratlyThemeSettings;

      try {
        const {
          id: key,
          quantity
        } = lineItem;
        this.loading.start();
        const newCart = await this.changeCart(lineItem);
        this.cart = newCart;
        const cartHTML = await this.fetchCartSection();
        this.loading.finish(() => {
          this.renderNewCart(cartHTML);
          window.Shopify.onCartUpdate(newCart, false);
          const newItem = newCart.items.find(({
            key: _key
          }) => _key === key);

          if (quantity > (newItem === null || newItem === void 0 ? void 0 : newItem.quantity)) {
            const {
              product_id
            } = newItem;
            const lineItems = newCart.items.filter(({
              product_id: pId
            }) => pId === product_id);

            if (lineItems.length === 1) {
              const lineItemNode = this.getLineItemNode(lineItem);
              notification/* default */.Z === null || notification/* default */.Z === void 0 ? void 0 : notification/* default.show */.Z.show({
                target: lineItemNode,
                type: 'warning',
                message: not_enough_item_message.replace('__inventory_quantity__', newItem.quantity)
              });
            }
          }
        });
      } catch (err) {
        this.loading.finish();

        if ((err === null || err === void 0 ? void 0 : err.status) === 422) {
          const lineItemNode = this.getLineItemNode(lineItem);

          if (lineItemNode) {
            notification/* default */.Z === null || notification/* default */.Z === void 0 ? void 0 : notification/* default.show */.Z.show({
              target: lineItemNode,
              type: 'warning',
              message: sold_out_items_message
            });
          }
        }

        console.warn("Failed to change item quantity: ", err);
      }
    });

    (0,defineProperty/* default */.Z)(this, "getLineItemNode", lineItem => {
      const {
        cartDrawerItems
      } = this.domNodes;
      let lineItemNode = cartDrawerItems.querySelector(`.scd-item[data-id="${lineItem.id}"]`);

      if (!lineItemNode) {
        lineItemNode = cartDrawerItems.querySelector(`.scd-item[data-index="${lineItem.line}"]`);
      }

      return lineItemNode;
    });

    (0,defineProperty/* default */.Z)(this, "renderNewCart", async cartHTML => {
      if (!cartHTML) {
        cartHTML = await this.fetchCartSection();
      }

      const newCartBody = cartHTML.querySelector('.scd__body');
      const newCartSummary = cartHTML.querySelector('.scd__summary');
      const currentCartBody = this.domNodes.cartDrawer.querySelector('.scd__body');
      const currentCartSummary = this.domNodes.cartDrawer.querySelector('.scd__summary');
      currentCartBody.replaceWith(newCartBody);
      currentCartSummary.replaceWith(newCartSummary);
      this.domNodes = (0,utilities/* queryDomNodes */.zt)(this.selectors);
    });

    (0,defineProperty/* default */.Z)(this, "refreshCart", async () => {
      this.cart = await this.getCart();
    });

    (0,defineProperty/* default */.Z)(this, "updateCartCount", cart => {
      if (Number(cart.item_count) < 1) {
        var _this$container, _this$container$class;

        (_this$container = this.container) === null || _this$container === void 0 ? void 0 : (_this$container$class = _this$container.classList) === null || _this$container$class === void 0 ? void 0 : _this$container$class.remove('cart-has-items');

        if (this.countdownTimer) {
          this.countdownTimer.clear();
          this.countdownTimerStarted = false;
        }

        document.body.classList.add('cart-empty');
      } else {
        var _this$container2, _this$container2$clas;

        (_this$container2 = this.container) === null || _this$container2 === void 0 ? void 0 : (_this$container2$clas = _this$container2.classList) === null || _this$container2$clas === void 0 ? void 0 : _this$container2$clas.add('cart-has-items');
        document.body.classList.remove('cart-empty');

        if (!this.countdownTimerStarted && this.countdownTimer) {
          this.countdownTimer.start();
          this.countdownTimerStarted = true;
        }
      }

      [...this.domNodes.cartCounts].forEach(cartCount => {
        cartCount.textContent = cart.item_count;
      });
    });

    (0,defineProperty/* default */.Z)(this, "updateCartNote", () => {
      this.updateCart({
        note: this.domNodes.cartNote.value
      });
    });

    (0,defineProperty/* default */.Z)(this, "openCartDrawer", e => {
      var _e$preventDefault;

      if (this.isCartPage || !this.enableCartDrawer) return;
      e === null || e === void 0 ? void 0 : (_e$preventDefault = e.preventDefault) === null || _e$preventDefault === void 0 ? void 0 : _e$preventDefault.call(e);
      const {
        cartDrawer,
        cartDrawerContent
      } = this.domNodes;

      if (cartDrawer && cartDrawerContent) {
        if (window.innerWidth < 770) {
          document.documentElement.classList.add('prevent-scroll');
          cartDrawer.classList.add('mobile');
        }

        cartDrawer.classList.remove('hidden');
        requestAnimationFrame(() => {
          cartDrawer.style.setProperty('--tw-bg-opacity', '0.5');
          cartDrawerContent.classList.remove('translate-x-full');
          !this.scrollHandlerAdded && this.addScrollHandler();
        });
      }
    });

    (0,defineProperty/* default */.Z)(this, "closeCartDrawer", () => {
      const {
        cartDrawer,
        cartDrawerContent
      } = this.domNodes;

      if (cartDrawer && cartDrawerContent) {
        var _cartDrawer$style;

        cartDrawer === null || cartDrawer === void 0 ? void 0 : (_cartDrawer$style = cartDrawer.style) === null || _cartDrawer$style === void 0 ? void 0 : _cartDrawer$style.setProperty('--tw-bg-opacity', '0');
        cartDrawerContent === null || cartDrawerContent === void 0 ? void 0 : cartDrawerContent.classList.add('translate-x-full');
        setTimeout(() => {
          var _cartDrawer$classList, _cartDrawer$classList2;

          cartDrawer === null || cartDrawer === void 0 ? void 0 : (_cartDrawer$classList = cartDrawer.classList) === null || _cartDrawer$classList === void 0 ? void 0 : _cartDrawer$classList.add('hidden');
          cartDrawer === null || cartDrawer === void 0 ? void 0 : (_cartDrawer$classList2 = cartDrawer.classList) === null || _cartDrawer$classList2 === void 0 ? void 0 : _cartDrawer$classList2.remove('mobile');
          document.documentElement.classList.remove('prevent-scroll');
          this.closeAddon();
        }, 300);
      }
    });

    (0,defineProperty/* default */.Z)(this, "initCartAddons", () => {
      (0,events/* addEventDelegate */.X)({
        selector: '.scd__footer-actions button',
        handler: (e, addonButton) => {
          e.preventDefault();

          if (this.isCartPage) {
            var _document$querySelect, _document$querySelect2;

            (_document$querySelect = document.querySelector('.scd__addon.open')) === null || _document$querySelect === void 0 ? void 0 : (_document$querySelect2 = _document$querySelect.classList) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.remove('open');
          }

          const {
            cartDrawer,
            overlay,
            addressForm,
            cartDiscountCodeNoti
          } = this.domNodes;
          const {
            open: addonTarget
          } = addonButton.dataset;
          const addonNode = cartDrawer.querySelector(`#scd-${addonTarget}`);
          addonButton.classList.add('active');
          addonNode === null || addonNode === void 0 ? void 0 : addonNode.classList.add('open');
          overlay === null || overlay === void 0 ? void 0 : overlay.classList.add('open');
          this.openAddon = addonNode;

          if (addonTarget === 'shipping') {
            AddressForm(addressForm, window.Shopify.locale);
          }

          if (addonTarget === 'coupon' && cartDiscountCodeNoti) {
            cartDiscountCodeNoti.style.display = 'none';
          }
        }
      });
      (0,events/* addEventDelegate */.X)({
        selector: '.btn-cancel',
        context: this.domNodes.cartDrawer,
        handler: this.closeAddon
      });
      (0,events/* addEventDelegate */.X)({
        selector: '.btn-calc',
        context: this.domNodes.cartDrawer,
        handler: this.calculateShipping
      });
      const {
        cartDiscountCode,
        cartDiscountCodeNoti
      } = this.domNodes;

      if (cartDiscountCode) {
        const code = localStorage.getItem(this.discountCodeKey);

        if (code) {
          cartDiscountCode.value = code;

          if (cartDiscountCodeNoti) {
            cartDiscountCodeNoti.style.display = 'inline';
          }
        }
      }

      this.saveAddonValue();
    });

    (0,defineProperty/* default */.Z)(this, "closeAddon", e => {
      var _e$preventDefault2, _this$openAddon, _this$domNodes$overla;

      e === null || e === void 0 ? void 0 : (_e$preventDefault2 = e.preventDefault) === null || _e$preventDefault2 === void 0 ? void 0 : _e$preventDefault2.call(e);
      (_this$openAddon = this.openAddon) === null || _this$openAddon === void 0 ? void 0 : _this$openAddon.classList.remove('open');
      (_this$domNodes$overla = this.domNodes.overlay) === null || _this$domNodes$overla === void 0 ? void 0 : _this$domNodes$overla.classList.remove('open');
      this.openAddon = null;
    });

    (0,defineProperty/* default */.Z)(this, "calculateShipping", e => {
      var _this$domNodes$zipCod;

      e.preventDefault();
      const zipCode = (_this$domNodes$zipCod = this.domNodes.zipCode.value) === null || _this$domNodes$zipCod === void 0 ? void 0 : _this$domNodes$zipCod.trim();
      const country = this.domNodes.country.value;
      const province = this.domNodes.province.value;
      this.domNodes.shippingContent.classList.remove('error');
      this.domNodes.shippingContent.innerHTML = '';
      fetch(`/cart/shipping_rates.json?shipping_address%5Bzip%5D=${zipCode}&shipping_address%5Bcountry%5D=${country}&shipping_address%5Bprovince%5D=${province}`).then(res => res.json()).then(res => {
        if (res && res.shipping_rates) {
          const {
            shipping_rates
          } = res;
          const {
            shippingRatesResult,
            noShippingRate
          } = window.spratlyThemeStrings;

          if (shipping_rates.length > 0) {
            this.domNodes.shippingContent.appendChild(createElement("p", {
              className: "mb-3 text-base"
            }, shippingRatesResult.replace('{{count}}', shipping_rates.length), ":"));
            shipping_rates.map(rate => {
              var _window, _window$spratlyThemeS;

              const rateNode = createElement("span", null);
              rateNode.innerHTML = (0,currency/* formatMoney */.l)(rate.price, (_window = window) === null || _window === void 0 ? void 0 : (_window$spratlyThemeS = _window.spratlyThemeSettings) === null || _window$spratlyThemeS === void 0 ? void 0 : _window$spratlyThemeS.money_format);
              this.domNodes.shippingContent.appendChild(createElement("p", null, rate.name, ": ", rateNode));
            });
          } else {
            this.domNodes.shippingContent.innerHTML = `<p>${noShippingRate}</p>`;
          }
        } else {
          this.domNodes.shippingContent.classList.add('error');
          Object.entries(res).map(error => {
            const message = `${error[0]} ${error[1][0]}`;
            this.domNodes.shippingContent.appendChild(createElement("p", null, message));
          });
        }
      }).catch(console.error);
    });

    (0,defineProperty/* default */.Z)(this, "saveAddonValue", () => {
      if (this.domNodes.cartDiscountCode) {
        (0,events/* addEventDelegate */.X)({
          event: 'click',
          context: this.domNodes.cartDrawer,
          selector: '.btn-save',
          handler: (e, target) => {
            e.preventDefault();

            if ((target === null || target === void 0 ? void 0 : target.dataset.action) === 'coupon') {
              const code = this.domNodes.cartDiscountCode.value;
              localStorage.setItem(this.discountCodeKey, code);
            }

            if ((target === null || target === void 0 ? void 0 : target.dataset.action) === 'note') {
              this.updateCartNote();
            }

            this.closeAddon();
          }
        });
      }
    });

    this.getCart().then(cart => {
      this.cart = cart;

      if (this.isCartPage) {
        this.init();
      } else {
        this.fetchCartSection().then(drawer => {
          const cartDrawerContainer = document.querySelector('#cart-drawer-container');
          cartDrawerContainer.appendChild(drawer);
          this.init();
        });
      }
    });
  }

  init() {
    var _window2, _window2$_ThemeEvent, _window2$_ThemeEvent$;

    this.container = this.isCartPage ? document.documentElement : document.querySelector('section.sf-header');
    this.domNodes = (0,utilities/* queryDomNodes */.zt)(this.selectors);
    this.loading = new AnimateLoading(this.domNodes.cartDrawerContent);

    if (this.enableCartDrawer) {
      (0,events/* addEventDelegate */.X)({
        selector: this.selectors.cartIcon,
        handler: this.openCartDrawer
      });
      (0,events/* addEventDelegate */.X)({
        selector: this.selectors.cartDrawerClose,
        handler: this.closeCartDrawer
      });
      (0,events/* addEventDelegate */.X)({
        selector: this.selectors.cartDrawer,
        handler: e => {
          if (e.target === this.domNodes.cartDrawer) {
            this.closeCartDrawer();
          }
        }
      });
    }

    (0,events/* addEventDelegate */.X)({
      context: this.domNodes.cartDrawer,
      selector: this.cartItemSelectors.btn,
      handler: (e, btn) => {
        e.preventDefault();
        const {
          qtyChange,
          id
        } = btn.dataset;
        const item = this.getCartItemByKey(id);

        if (item) {
          let {
            quantity
          } = item;
          quantity += qtyChange === 'dec' ? -1 : +1;
          this.changeItemQty({
            id,
            quantity
          });
        } else {
          console.warn(`Cart item to change quantity not found. Key: ${id}`);
        }
      }
    });
    (0,events/* addEventDelegate */.X)({
      context: this.domNodes.cartDrawer,
      event: 'change',
      selector: this.cartItemSelectors.qtyInput,
      handler: (e, input) => {
        e.preventDefault();
        const {
          id
        } = input.dataset;
        const quantity = Number(input.value);
        this.changeItemQty({
          id,
          quantity
        });
      }
    });
    (0,events/* addEventDelegate */.X)({
      context: this.domNodes.cartDrawer,
      selector: this.cartItemSelectors.remove,
      handler: (e, removeBtn) => {
        e.preventDefault();
        const {
          id
        } = removeBtn.dataset;
        const item = this.getCartItemByKey(id);

        if (item) {
          const index = this.cart.items.indexOf(item);
          this.changeItemQty({
            line: index + 1,
            quantity: 0
          });
        } else {
          console.warn(`Cart item to remove not found. Key: ${id}`);
        }
      }
    });
    this.initCartCountDown();
    this.initCartAddons();
    (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$_ThemeEvent = _window2._ThemeEvent) === null || _window2$_ThemeEvent === void 0 ? void 0 : (_window2$_ThemeEvent$ = _window2$_ThemeEvent.subscribe) === null || _window2$_ThemeEvent$ === void 0 ? void 0 : _window2$_ThemeEvent$.call(_window2$_ThemeEvent, 'ON_CART_UPDATE', cart => {
      this.cart = cart;
      this.updateCartCount(cart);
    });
  }

}

/* harmony default export */ var cart = (new Cart());
}();
/******/ })()
;