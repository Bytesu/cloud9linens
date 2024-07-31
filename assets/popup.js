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

/***/ 2727:
/***/ (function(module) {

"use strict";


var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
  try {
    // Try to decode the entire string first
    return decodeURIComponent(components.join(''));
  } catch (err) {// Do nothing
  }

  if (components.length === 1) {
    return components;
  }

  split = split || 1; // Split the array in 2 parts

  var left = components.slice(0, split);
  var right = components.slice(split);
  return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
  try {
    return decodeURIComponent(input);
  } catch (err) {
    var tokens = input.match(singleMatcher);

    for (var i = 1; i < tokens.length; i++) {
      input = decodeComponents(tokens, i).join('');
      tokens = input.match(singleMatcher);
    }

    return input;
  }
}

function customDecodeURIComponent(input) {
  // Keep track of all the replacements and prefill the map with the `BOM`
  var replaceMap = {
    '%FE%FF': '\uFFFD\uFFFD',
    '%FF%FE': '\uFFFD\uFFFD'
  };
  var match = multiMatcher.exec(input);

  while (match) {
    try {
      // Decode as big chunks as possible
      replaceMap[match[0]] = decodeURIComponent(match[0]);
    } catch (err) {
      var result = decode(match[0]);

      if (result !== match[0]) {
        replaceMap[match[0]] = result;
      }
    }

    match = multiMatcher.exec(input);
  } // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else


  replaceMap['%C2'] = '\uFFFD';
  var entries = Object.keys(replaceMap);

  for (var i = 0; i < entries.length; i++) {
    // Replace all decoded components
    var key = entries[i];
    input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
  }

  return input;
}

module.exports = function (encodedURI) {
  if (typeof encodedURI !== 'string') {
    throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
  }

  try {
    encodedURI = encodedURI.replace(/\+/g, ' '); // Try the built in decoder first

    return decodeURIComponent(encodedURI);
  } catch (err) {
    // Fallback to a more advanced decoder
    return customDecodeURIComponent(encodedURI);
  }
};

/***/ }),

/***/ 5359:
/***/ (function(module) {

"use strict";


module.exports = function (obj, predicate) {
  var ret = {};
  var keys = Object.keys(obj);
  var isArr = Array.isArray(predicate);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var val = obj[key];

    if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
      ret[key] = val;
    }
  }

  return ret;
};

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

/***/ 7757:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


const strictUriEncode = __webpack_require__(6990);

const decodeComponent = __webpack_require__(2727);

const splitOnFirst = __webpack_require__(4468);

const filterObject = __webpack_require__(5359);

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
  switch (options.arrayFormat) {
    case 'index':
      return key => (result, value) => {
        const index = result.length;

        if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
          return result;
        }

        if (value === null) {
          return [...result, [encode(key, options), '[', index, ']'].join('')];
        }

        return [...result, [encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')];
      };

    case 'bracket':
      return key => (result, value) => {
        if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
          return result;
        }

        if (value === null) {
          return [...result, [encode(key, options), '[]'].join('')];
        }

        return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
      };

    case 'comma':
    case 'separator':
      return key => (result, value) => {
        if (value === null || value === undefined || value.length === 0) {
          return result;
        }

        if (result.length === 0) {
          return [[encode(key, options), '=', encode(value, options)].join('')];
        }

        return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
      };

    default:
      return key => (result, value) => {
        if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
          return result;
        }

        if (value === null) {
          return [...result, encode(key, options)];
        }

        return [...result, [encode(key, options), '=', encode(value, options)].join('')];
      };
  }
}

function parserForArrayFormat(options) {
  let result;

  switch (options.arrayFormat) {
    case 'index':
      return (key, value, accumulator) => {
        result = /\[(\d*)\]$/.exec(key);
        key = key.replace(/\[\d*\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = {};
        }

        accumulator[key][result[1]] = value;
      };

    case 'bracket':
      return (key, value, accumulator) => {
        result = /(\[\])$/.exec(key);
        key = key.replace(/\[\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = [value];
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };

    case 'comma':
    case 'separator':
      return (key, value, accumulator) => {
        const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
        const isEncodedArray = typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator);
        value = isEncodedArray ? decode(value, options) : value;
        const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
        accumulator[key] = newValue;
      };

    default:
      return (key, value, accumulator) => {
        if (accumulator[key] === undefined) {
          accumulator[key] = value;
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };
  }
}

function validateArrayFormatSeparator(value) {
  if (typeof value !== 'string' || value.length !== 1) {
    throw new TypeError('arrayFormatSeparator must be single character string');
  }
}

function encode(value, options) {
  if (options.encode) {
    return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
  }

  return value;
}

function decode(value, options) {
  if (options.decode) {
    return decodeComponent(value);
  }

  return value;
}

function keysSorter(input) {
  if (Array.isArray(input)) {
    return input.sort();
  }

  if (typeof input === 'object') {
    return keysSorter(Object.keys(input)).sort((a, b) => Number(a) - Number(b)).map(key => input[key]);
  }

  return input;
}

function removeHash(input) {
  const hashStart = input.indexOf('#');

  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }

  return input;
}

function getHash(url) {
  let hash = '';
  const hashStart = url.indexOf('#');

  if (hashStart !== -1) {
    hash = url.slice(hashStart);
  }

  return hash;
}

function extract(input) {
  input = removeHash(input);
  const queryStart = input.indexOf('?');

  if (queryStart === -1) {
    return '';
  }

  return input.slice(queryStart + 1);
}

function parseValue(value, options) {
  if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
    value = Number(value);
  } else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
    value = value.toLowerCase() === 'true';
  }

  return value;
}

function parse(query, options) {
  options = Object.assign({
    decode: true,
    sort: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ',',
    parseNumbers: false,
    parseBooleans: false
  }, options);
  validateArrayFormatSeparator(options.arrayFormatSeparator);
  const formatter = parserForArrayFormat(options); // Create an object with no prototype

  const ret = Object.create(null);

  if (typeof query !== 'string') {
    return ret;
  }

  query = query.trim().replace(/^[?#&]/, '');

  if (!query) {
    return ret;
  }

  for (const param of query.split('&')) {
    if (param === '') {
      continue;
    }

    let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '='); // Missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters

    value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
    formatter(decode(key, options), value, ret);
  }

  for (const key of Object.keys(ret)) {
    const value = ret[key];

    if (typeof value === 'object' && value !== null) {
      for (const k of Object.keys(value)) {
        value[k] = parseValue(value[k], options);
      }
    } else {
      ret[key] = parseValue(value, options);
    }
  }

  if (options.sort === false) {
    return ret;
  }

  return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
    const value = ret[key];

    if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
      // Sort object keys, not values
      result[key] = keysSorter(value);
    } else {
      result[key] = value;
    }

    return result;
  }, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
  if (!object) {
    return '';
  }

  options = Object.assign({
    encode: true,
    strict: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ','
  }, options);
  validateArrayFormatSeparator(options.arrayFormatSeparator);

  const shouldFilter = key => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === '';

  const formatter = encoderForArrayFormat(options);
  const objectCopy = {};

  for (const key of Object.keys(object)) {
    if (!shouldFilter(key)) {
      objectCopy[key] = object[key];
    }
  }

  const keys = Object.keys(objectCopy);

  if (options.sort !== false) {
    keys.sort(options.sort);
  }

  return keys.map(key => {
    const value = object[key];

    if (value === undefined) {
      return '';
    }

    if (value === null) {
      return encode(key, options);
    }

    if (Array.isArray(value)) {
      return value.reduce(formatter(key), []).join('&');
    }

    return encode(key, options) + '=' + encode(value, options);
  }).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (url, options) => {
  options = Object.assign({
    decode: true
  }, options);
  const [url_, hash] = splitOnFirst(url, '#');
  return Object.assign({
    url: url_.split('?')[0] || '',
    query: parse(extract(url), options)
  }, options && options.parseFragmentIdentifier && hash ? {
    fragmentIdentifier: decode(hash, options)
  } : {});
};

exports.stringifyUrl = (object, options) => {
  options = Object.assign({
    encode: true,
    strict: true
  }, options);
  const url = removeHash(object.url).split('?')[0] || '';
  const queryFromUrl = exports.extract(object.url);
  const parsedQueryFromUrl = exports.parse(queryFromUrl, {
    sort: false
  });
  const query = Object.assign(parsedQueryFromUrl, object.query);
  let queryString = exports.stringify(query, options);

  if (queryString) {
    queryString = `?${queryString}`;
  }

  let hash = getHash(object.url);

  if (object.fragmentIdentifier) {
    hash = `#${encode(object.fragmentIdentifier, options)}`;
  }

  return `${url}${queryString}${hash}`;
};

exports.pick = (input, filter, options) => {
  options = Object.assign({
    parseFragmentIdentifier: true
  }, options);
  const {
    url,
    query,
    fragmentIdentifier
  } = exports.parseUrl(input, options);
  return exports.stringifyUrl({
    url,
    query: filterObject(query, filter),
    fragmentIdentifier
  }, options);
};

exports.exclude = (input, filter, options) => {
  const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);
  return exports.pick(input, exclusionFilter, options);
};

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

/***/ 4468:
/***/ (function(module) {

"use strict";


module.exports = (string, separator) => {
  if (!(typeof string === 'string' && typeof separator === 'string')) {
    throw new TypeError('Expected the arguments to be of type `string`');
  }

  if (separator === '') {
    return [string];
  }

  const separatorIndex = string.indexOf(separator);

  if (separatorIndex === -1) {
    return [string];
  }

  return [string.slice(0, separatorIndex), string.slice(separatorIndex + separator.length)];
};

/***/ }),

/***/ 6990:
/***/ (function(module) {

"use strict";


module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);

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
;// CONCATENATED MODULE: ./src/js/components/Spinner.jsx
/* provided dependency */ var Spinner_createElement = __webpack_require__(6295)["default"];
/* harmony default export */ function Spinner({
  className = ''
}) {
  return Spinner_createElement("svg", {
    className: `animate-spin hidden w-[20px] h-[20px] ${className}`,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none"
  }, Spinner_createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }), Spinner_createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }));
}
;// CONCATENATED MODULE: ./src/js/components/Popup.jsx
/* provided dependency */ var Popup_createElement = __webpack_require__(6295)["default"];

function Popup_Popup({
  template,
  title,
  description,
  image,
  button,
  popup_type,
  email_placeholder,
  coupon,
  copy_button,
  success_text,
  popup_bg,
  text_color,
  button_color,
  teaser_color,
  button_url
}) {
  const subTitle = Popup_createElement("div", {
    className: 'f-popup__subtitle'
  });
  subTitle.innerHTML = description;
  return Popup_createElement("div", {
    className: `f-popup ${template} ${popup_type}`,
    style: {
      '--popup-bg': popup_bg,
      '--text-color': text_color,
      '--button-color': button_color,
      '--teaser-color': teaser_color
    }
  }, Popup_createElement("div", {
    className: `f-popup__inner relative text-center`
  }, template !== 'template-1' && image ? Popup_createElement("div", {
    className: "f-popup__image"
  }, Popup_createElement("img", {
    src: image,
    alt: title
  })) : '', Popup_createElement("div", {
    className: "f-popup__content"
  }, Popup_createElement("div", {
    className: "f-popup__content-inner"
  }, Popup_createElement("h3", {
    className: 'font-medium f-popup__title'
  }, title), description ? subTitle : '', ['collect_lead', 'subscribe_to_discount'].includes(popup_type) ? Popup_createElement("div", {
    className: 'f-popup__form mt-8'
  }, Popup_createElement("input", {
    type: "email",
    placeholder: email_placeholder,
    className: "f-popup__input form-control w-full"
  }), Popup_createElement("button", {
    className: 'f-popup__submit sf__btn sf__btn-primary'
  }, Popup_createElement(Spinner, null), Popup_createElement("span", null, button))) : '', ['give_coupon'].includes(popup_type) && !!coupon ? Popup_createElement("div", {
    className: "flex f-popup__coupon"
  }, Popup_createElement("div", {
    className: "f-popup__coupon-code"
  }, Popup_createElement("span", {
    className: 'uppercase font-bold'
  }, coupon)), Popup_createElement("button", {
    className: 'sf__btn sf__btn-primary font-medium btn-copy'
  }, copy_button || 'Copy')) : '', popup_type === 'announcement' && button_url ? Popup_createElement("a", {
    className: 'sf__btn sf__btn-primary font-medium f-popup__submit mt-3',
    href: button_url
  }, button) : '')), Popup_createElement("div", {
    className: "f-popup__thankyou"
  }, popup_type === 'subscribe_to_discount' ? Popup_createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1430 398"
  }, Popup_createElement("g", {
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10"
  }, Popup_createElement("path", {
    d: "M428 313.05c-12.1-2.3-21.8-13.77-22.05-26.08S414.9 262.8 426.9 260c1.6-.38 3.3-.6 4.87-.14 1.58.47 3 1.77 3.15 3.4.16 1.76-1.18 3.4-2.8 4.1-1.6.73-3.44.75-5.2.74-10-.1-20.36-1.16-28.95-6.25-8.6-5.1-14.94-15.1-13.02-24.92 1.15-5.84 5.05-10.88 9.88-14.36s10.55-5.52 16.3-6.98c1.66-.42 3.4-.8 5.05-.38s3.17 1.9 3.06 3.6c-.13 2.08-2.43 3.3-4.48 3.66-6.6 1.15-13.52-2.75-16.8-8.6s-3.23-13.2-.8-19.46c2.45-6.25 7.07-11.46 12.4-15.55",
    stroke: "#258a5f"
  }), Popup_createElement("path", {
    d: "M1112.15 331.37c-8.9-8.52-10.78-23.4-4.3-33.88s20.66-15.4 32.24-11.25c1.55.56 3.1 1.3 4.16 2.54s1.55 3.12.8 4.57c-.82 1.57-2.83 2.2-4.58 1.93s-3.3-1.24-4.77-2.22c-8.33-5.5-16.44-12.06-20.9-21-4.44-8.95-4.3-20.8 2.64-28 4.14-4.27 10.16-6.38 16.1-6.67 5.94-.28 11.85 1.1 17.5 3.02 1.62.55 3.3 1.18 4.45 2.43s1.63 3.3.6 4.68c-1.24 1.67-3.83 1.45-5.75.63-6.17-2.64-9.85-9.67-9.42-16.36.42-6.7 4.48-12.84 9.93-16.75s12.17-5.76 18.86-6.3",
    stroke: "#edd315"
  })), Popup_createElement("g", {
    "fill-rule": "evenodd"
  }, Popup_createElement("ellipse", {
    cx: "269.69",
    cy: "264.26",
    rx: "26.05",
    ry: "26",
    fill: "#91c741"
  }), Popup_createElement("ellipse", {
    cx: "512.76",
    cy: "91.01",
    rx: "21.69",
    ry: "21.66",
    fill: "#11a7df"
  }), Popup_createElement("g", {
    fill: "#5f3787"
  }, Popup_createElement("ellipse", {
    cx: "977.17",
    cy: "91.01",
    rx: "21.69",
    ry: "21.66"
  }), Popup_createElement("ellipse", {
    cx: "738.45",
    cy: "311.92",
    rx: "21.69",
    ry: "21.66"
  })), Popup_createElement("path", {
    d: "M350.5 116.37L305.1 91.5c-2.5-1.36-5.02.37-5.02 2.7v49.86c0 2.55 2.8 3.8 4.92 2.67 2.9-1.53 43.05-23.56 45.5-24.94 2.2-1.24 2.24-4.17 0-5.4zm825.44 1.3l-6.2-51.32c-.35-2.82-3.23-3.86-5.12-2.5l-40.6 29.05c-2.08 1.5-1.46 4.47.7 5.55 2.94 1.47 44.27 21.2 46.83 22.38 2.3 1.06 4.7-.62 4.4-3.15z",
    fill: "#f04f1a"
  }), Popup_createElement("path", {
    d: "M164.5 172.16l.76-26.12-15.92 20.75-24.65-8.8 14.85 21.52-16 20.68 25.1-7.44 14.77 21.58.66-26.12 25.13-7.35z",
    fill: "#6c88b4"
  }), Popup_createElement("path", {
    d: "M894.7 217.95l-27.54-2.75-5.8-27-11.13 25.3-27.53-2.85L843.4 229l-11.23 25.25 23.9-13.93 20.6 18.45-5.9-26.98z",
    fill: "#0eade4"
  }), Popup_createElement("path", {
    d: "M557.62 271.26l-19.34 5.1-10.22-15.66-1.67 18.77-19.35 5.04 18.3 6.5-1.75 18.77 12.98-14.76 18.28 6.56-10.28-15.6z",
    fill: "#edd315"
  }), Popup_createElement("path", {
    d: "M1306.48 216.27l-21.87-6.14-.8-22.65-12.6 18.85-21.84-6.22 14.07 17.8-12.68 18.8 21.3-7.85 14 17.84-.9-22.65z",
    fill: "#e40989"
  }), Popup_createElement("path", {
    d: "M930.37 293.35l-15.2 26.25 26.3 15.16 15.2-26.25z",
    fill: "#a63759"
  }), Popup_createElement("ellipse", {
    cx: "1031.39",
    cy: "210.12",
    rx: "19.53",
    ry: "19.48",
    fill: "#95bc4e"
  }))) : '', success_text ? Popup_createElement("p", null, success_text) : '', popup_type === 'subscribe_to_discount' ? Popup_createElement("div", null, Popup_createElement("div", {
    className: "flex f-popup__coupon"
  }, Popup_createElement("div", {
    className: "f-popup__coupon-code"
  }, Popup_createElement("span", {
    className: 'uppercase font-bold'
  })), Popup_createElement("button", {
    className: 'sf__btn sf__btn-primary font-medium btn-copy'
  }, copy_button || 'Copy')), Popup_createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1430 398"
  }, Popup_createElement("g", {
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10"
  }, Popup_createElement("path", {
    d: "M428 313.05c-12.1-2.3-21.8-13.77-22.05-26.08S414.9 262.8 426.9 260c1.6-.38 3.3-.6 4.87-.14 1.58.47 3 1.77 3.15 3.4.16 1.76-1.18 3.4-2.8 4.1-1.6.73-3.44.75-5.2.74-10-.1-20.36-1.16-28.95-6.25-8.6-5.1-14.94-15.1-13.02-24.92 1.15-5.84 5.05-10.88 9.88-14.36s10.55-5.52 16.3-6.98c1.66-.42 3.4-.8 5.05-.38s3.17 1.9 3.06 3.6c-.13 2.08-2.43 3.3-4.48 3.66-6.6 1.15-13.52-2.75-16.8-8.6s-3.23-13.2-.8-19.46c2.45-6.25 7.07-11.46 12.4-15.55",
    stroke: "#258a5f"
  }), Popup_createElement("path", {
    d: "M1112.15 331.37c-8.9-8.52-10.78-23.4-4.3-33.88s20.66-15.4 32.24-11.25c1.55.56 3.1 1.3 4.16 2.54s1.55 3.12.8 4.57c-.82 1.57-2.83 2.2-4.58 1.93s-3.3-1.24-4.77-2.22c-8.33-5.5-16.44-12.06-20.9-21-4.44-8.95-4.3-20.8 2.64-28 4.14-4.27 10.16-6.38 16.1-6.67 5.94-.28 11.85 1.1 17.5 3.02 1.62.55 3.3 1.18 4.45 2.43s1.63 3.3.6 4.68c-1.24 1.67-3.83 1.45-5.75.63-6.17-2.64-9.85-9.67-9.42-16.36.42-6.7 4.48-12.84 9.93-16.75s12.17-5.76 18.86-6.3",
    stroke: "#edd315"
  })), Popup_createElement("g", {
    "fill-rule": "evenodd"
  }, Popup_createElement("ellipse", {
    cx: "269.69",
    cy: "264.26",
    rx: "26.05",
    ry: "26",
    fill: "#91c741"
  }), Popup_createElement("ellipse", {
    cx: "512.76",
    cy: "91.01",
    rx: "21.69",
    ry: "21.66",
    fill: "#11a7df"
  }), Popup_createElement("g", {
    fill: "#5f3787"
  }, Popup_createElement("ellipse", {
    cx: "977.17",
    cy: "91.01",
    rx: "21.69",
    ry: "21.66"
  }), Popup_createElement("ellipse", {
    cx: "738.45",
    cy: "311.92",
    rx: "21.69",
    ry: "21.66"
  })), Popup_createElement("path", {
    d: "M350.5 116.37L305.1 91.5c-2.5-1.36-5.02.37-5.02 2.7v49.86c0 2.55 2.8 3.8 4.92 2.67 2.9-1.53 43.05-23.56 45.5-24.94 2.2-1.24 2.24-4.17 0-5.4zm825.44 1.3l-6.2-51.32c-.35-2.82-3.23-3.86-5.12-2.5l-40.6 29.05c-2.08 1.5-1.46 4.47.7 5.55 2.94 1.47 44.27 21.2 46.83 22.38 2.3 1.06 4.7-.62 4.4-3.15z",
    fill: "#f04f1a"
  }), Popup_createElement("path", {
    d: "M164.5 172.16l.76-26.12-15.92 20.75-24.65-8.8 14.85 21.52-16 20.68 25.1-7.44 14.77 21.58.66-26.12 25.13-7.35z",
    fill: "#6c88b4"
  }), Popup_createElement("path", {
    d: "M894.7 217.95l-27.54-2.75-5.8-27-11.13 25.3-27.53-2.85L843.4 229l-11.23 25.25 23.9-13.93 20.6 18.45-5.9-26.98z",
    fill: "#0eade4"
  }), Popup_createElement("path", {
    d: "M557.62 271.26l-19.34 5.1-10.22-15.66-1.67 18.77-19.35 5.04 18.3 6.5-1.75 18.77 12.98-14.76 18.28 6.56-10.28-15.6z",
    fill: "#edd315"
  }), Popup_createElement("path", {
    d: "M1306.48 216.27l-21.87-6.14-.8-22.65-12.6 18.85-21.84-6.22 14.07 17.8-12.68 18.8 21.3-7.85 14 17.84-.9-22.65z",
    fill: "#e40989"
  }), Popup_createElement("path", {
    d: "M930.37 293.35l-15.2 26.25 26.3 15.16 15.2-26.25z",
    fill: "#a63759"
  }), Popup_createElement("ellipse", {
    cx: "1031.39",
    cy: "210.12",
    rx: "19.53",
    ry: "19.48",
    fill: "#95bc4e"
  })))) : '')));
}
const Teaser = ({
  teaser_title,
  teaser_color,
  teaser_position,
  teaser_activate
}) => {
  return teaser_activate ? Popup_createElement("div", {
    className: `f-popup__teaser ${teaser_position}`,
    style: {
      '--teaser-color': teaser_color
    }
  }, Popup_createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "15",
    fill: "none"
  }, Popup_createElement("path", {
    fill: "#fff",
    d: "M1.14895 15.09625V8.5719h5.51649v6.89685H1.52005c-.0488 0-.097-.0096-.1421-.0284-.045-.0187-.0859-.0461-.1203-.0807-.0345-.0346-.0618-.0757-.0805-.1209-.0186-.0452-.0282-.0936-.0282-.1425zm7.18563.3725h5.14543c.09841 0 .19279-.0393.26238-.1091.06959-.0699.10869-.1646.10869-.2634V8.5719h-5.5165v6.89685zM.83985 7.76546h5.82559V5.21857H.83985c-.0488 0-.097.00963-.142.02835a.36979.36979 0 00-.1204.08076c-.0345.0346-.0618.07567-.0805.12087a.374677.374677 0 00-.0282.14256v1.80181c0 .04892.0096.09736.0282.14256.0187.0452.046.08627.0805.12087a.369604.369604 0 00.1204.08075c.045.01873.0932.02836.142.02836zm7.49473 0h5.8256a.369813.369813 0 00.142-.02835.371231.371231 0 00.12039-.08076.372698.372698 0 00.08043-.12087.373778.373778 0 00.02825-.14256V5.59111a.374008.374008 0 00-.02824-.14257c-.01865-.0452-.04598-.08627-.08044-.12086a.370914.370914 0 00-.12039-.08076.369626.369626 0 00-.142-.02835H8.33457l.00001 2.54689zM2.17965 1.43727C2.17965-.22865 5.49588.17071 7.5 3.29048c2.00412-3.11977 5.32037-3.51913 5.32037-1.8532 0 1.66455-2.27716 3.05247-5.32037 3.05247-3.04325 0-5.32035-1.38792-5.32035-3.05247v-.00001zm5.63406 2.71001c1.24133-.16531 3.46397-1.18994 3.46397-2.07854 0-.37341-.31988-.55209-.78214-.46154-.67905.133-2.05951 1.46591-2.68183 2.54008zM3.72235 2.06873c0 .88861 2.22261 1.91323 3.46394 2.07854C6.56398 3.0731 5.18355 1.7402 4.50445 1.6072c-.4622-.09056-.7821.08812-.7821.46153z"
  })), Popup_createElement("span", null, teaser_title || 'Get a discount!')) : '';
};
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
;// CONCATENATED MODULE: ./src/js/utilities/displays.js

function triggerAfterScroll(scrollTop = 200, trigger) {
  let opened = false;
  window.addEventListener('scroll', () => {
    if (scrollY > scrollTop && !opened) {
      trigger();
      opened = true;
    }
  });
}
function triggerAfterDelay(delay = 5, trigger) {
  setTimeout(() => trigger(), parseInt(delay) * 1000);
}
function exitIntent(handleOpen) {
  function onMouseOut(event) {
    // If the mouse is near the top of the window, show the popup
    // Also, do NOT trigger when hovering or clicking on selects
    const shouldShowExitIntent = !event.toElement && !event.relatedTarget && event.clientY < 50 && event.target.nodeName.toLowerCase() !== 'select';

    if (shouldShowExitIntent) {
      // Remove this event listener
      document.removeEventListener('mouseout', onMouseOut); // Show the popup

      handleOpen();
    }
  }

  document.addEventListener('mouseout', onMouseOut);
}
function setRepeatOpen(saveKey, saveValue, repeat) {
  console.log(repeat, 'repeat');
  let expires;

  switch (repeat) {
    case 'every_3_mins':
      expires = 3 / 60 / 24;
      break;

    case 'every_5_mins':
      expires = 5 / 60 / 24;
      break;

    case 'every_10_mins':
      expires = 1 / 6 / 24;
      break;

    case 'every_15_mins':
      expires = 15 / 60 / 24;
      break;

    case 'every_30_mins':
      expires = 1 / 2 / 24;
      break;

    case 'every_1_hr':
      expires = 1 / 24;
      break;

    case 'every_6_hrs':
      expires = 6 / 24;
      break;

    case 'every_12_hrs':
      expires = 1 / 2;
      break;

    case 'every_day':
      expires = 1;
      break;

    case 'every_3_days':
      expires = 3;
      break;

    case 'every_week':
      expires = 7;
      break;

    case 'every_2_week':
      expires = 14;
      break;

    case 'every_month':
      expires = 30;
      break;

    default:
      expires = 7;
      break;
  }

  setCookie(saveKey, JSON.stringify(saveValue), expires);
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
// EXTERNAL MODULE: ./node_modules/query-string/index.js
var query_string = __webpack_require__(7757);
;// CONCATENATED MODULE: ./src/js/modules/popup.js
/* provided dependency */ var popup_createElement = __webpack_require__(6295)["default"];

 // eslint-disable-next-line no-unused-vars








class Popup {
  constructor(settings) {
    (0,defineProperty/* default */.Z)(this, "selectors", {
      popup: '.f-popup',
      email: '.f-popup__input',
      submit: '.f-popup__submit',
      content: '.f-popup__content',
      form: '.f-popup__form',
      thankyou: '.f-popup__thankyou',
      couponBox: '.f-popup__thankyou .f-popup__coupon',
      couponCode: '.f-popup__thankyou .f-popup__coupon-code span',
      teaser: '.f-popup__teaser',
      btnCopy: '.f-popup .btn-copy',
      couponInput: '.f-popup [name="coupon"]'
    });

    (0,defineProperty/* default */.Z)(this, "classes", {
      open: 'f-popup--open',
      success: 'f-popup--success',
      loading: 'sf-spinner-loading'
    });

    (0,defineProperty/* default */.Z)(this, "saveKey", '__foxkit_popup');

    (0,defineProperty/* default */.Z)(this, "forceOpenQueryFlag", 'fox_show_popup');

    (0,defineProperty/* default */.Z)(this, "init", () => {
      var _this$settings, _this$settings2, _this$settings3, _this$settings4, _this$settings5, _this$settings6, _this$settings7, _this$settings8, _this$settings9, _this$settings10, _this$settings11, _this$settings12, _this$settings13, _this$settings14;

      this.popupComponent = popup_createElement(Popup_Popup, {
        title: (_this$settings = this.settings) === null || _this$settings === void 0 ? void 0 : _this$settings.title,
        description: (_this$settings2 = this.settings) === null || _this$settings2 === void 0 ? void 0 : _this$settings2.description,
        button: (_this$settings3 = this.settings) === null || _this$settings3 === void 0 ? void 0 : _this$settings3.button,
        email_placeholder: (_this$settings4 = this.settings) === null || _this$settings4 === void 0 ? void 0 : _this$settings4.email_placeholder,
        popup_type: (_this$settings5 = this.settings) === null || _this$settings5 === void 0 ? void 0 : _this$settings5.popup_type,
        coupon: (_this$settings6 = this.settings) === null || _this$settings6 === void 0 ? void 0 : _this$settings6.coupon,
        copy_button: (_this$settings7 = this.settings) === null || _this$settings7 === void 0 ? void 0 : _this$settings7.copy_button,
        template: (_this$settings8 = this.settings) === null || _this$settings8 === void 0 ? void 0 : _this$settings8.template,
        image: (_this$settings9 = this.settings) === null || _this$settings9 === void 0 ? void 0 : _this$settings9.image,
        success_text: (_this$settings10 = this.settings) === null || _this$settings10 === void 0 ? void 0 : _this$settings10.success_text,
        popup_bg: (_this$settings11 = this.settings) === null || _this$settings11 === void 0 ? void 0 : _this$settings11.popup_bg,
        text_color: (_this$settings12 = this.settings) === null || _this$settings12 === void 0 ? void 0 : _this$settings12.text_color,
        button_color: (_this$settings13 = this.settings) === null || _this$settings13 === void 0 ? void 0 : _this$settings13.button_color
      });

      if (!((_this$settings14 = this.settings) !== null && _this$settings14 !== void 0 && _this$settings14.show_on_mobile)) {
        document.body.classList.add('mobile-hide-popup');
      }

      this.handleOpen();
      this.handleCopy();
    });

    (0,defineProperty/* default */.Z)(this, "open", (shouldSetRepeatOpen = true) => {
      var _this$domNodes, _this$domNodes$submit;

      this.popup.appendChild(this.popupComponent);
      this.popup.open();
      this.domNodes = queryDomNodes(this.selectors);
      (_this$domNodes = this.domNodes) === null || _this$domNodes === void 0 ? void 0 : (_this$domNodes$submit = _this$domNodes.submit) === null || _this$domNodes$submit === void 0 ? void 0 : _this$domNodes$submit.addEventListener('click', this.handleSubmit);

      if (shouldSetRepeatOpen) {
        setRepeatOpen(this.saveKey, {
          opened: true
        }, this.settings.repeat_open);
      }
    });

    (0,defineProperty/* default */.Z)(this, "handleOpen", () => {
      var _cookieData, _this$settings16, _this$settings18, _this$settings19;

      if (this.forcedOpen) return this.open(false);
      let cookieData = getCookie(this.saveKey);
      if (cookieData) cookieData = JSON.parse(cookieData); // Don't show popup

      if (cookieData && (_cookieData = cookieData) !== null && _cookieData !== void 0 && _cookieData.opened) {
        var _this$settings15, _cookieData2;

        if ((_this$settings15 = this.settings) !== null && _this$settings15 !== void 0 && _this$settings15.teaser_activate && ((_cookieData2 = cookieData) === null || _cookieData2 === void 0 ? void 0 : _cookieData2.converted) !== true) {
          this.showTeaser();
        }

        return false;
      }

      if (((_this$settings16 = this.settings) === null || _this$settings16 === void 0 ? void 0 : _this$settings16.trigger) === 'after_specific_time') {
        var _this$settings17;

        triggerAfterDelay((_this$settings17 = this.settings) === null || _this$settings17 === void 0 ? void 0 : _this$settings17.delay_show, this.open);
      } else if (((_this$settings18 = this.settings) === null || _this$settings18 === void 0 ? void 0 : _this$settings18.trigger) === 'after_scroll') {
        triggerAfterScroll(350, this.open);
      } else if (((_this$settings19 = this.settings) === null || _this$settings19 === void 0 ? void 0 : _this$settings19.trigger) === 'exit_intent') {
        exitIntent(this.open);
      } else {
        this.open();
      }
    });

    (0,defineProperty/* default */.Z)(this, "handleSubmit", async () => {
      var _this$domNodes$email$;

      this.domNodes.email.classList.remove('form-control--error', 'shake');
      const emailVal = (_this$domNodes$email$ = this.domNodes.email.value) === null || _this$domNodes$email$ === void 0 ? void 0 : _this$domNodes$email$.trim();
      const validated = this.validateField(emailVal);

      if (validated) {
        var _this$settings20, _this$settings20$save, _this$settings21, _this$settings21$save;

        const saveToApp = (_this$settings20 = this.settings) === null || _this$settings20 === void 0 ? void 0 : (_this$settings20$save = _this$settings20.save_to) === null || _this$settings20$save === void 0 ? void 0 : _this$settings20$save.includes('foxkit_subscribers');
        const syncWithShopify = (_this$settings21 = this.settings) === null || _this$settings21 === void 0 ? void 0 : (_this$settings21$save = _this$settings21.save_to) === null || _this$settings21$save === void 0 ? void 0 : _this$settings21$save.includes('shopify_customers');
        const data = {
          email: emailVal,
          firstName: '',
          lastName: '',
          acceptsMarketing: true,
          syncWithShopify,
          saveToApp,
          source: 'popup',
          deleted: !saveToApp
        };
        this.toggleLoading(true);
        const result = await handleSubscribe(data);

        if (result.ok) {
          this.showCoupon();
          let cookieData = getCookie(this.saveKey);
          if (cookieData) cookieData = JSON.parse(cookieData);
          setCookie(this.saveKey, JSON.stringify({ ...cookieData,
            converted: true
          }), 7);
        }

        this.toggleLoading(false);
      }

      return false;
    });

    (0,defineProperty/* default */.Z)(this, "validateField", emailVal => {
      if (!emailIsValid(emailVal)) {
        this.domNodes.form.classList.add('shake');
        this.domNodes.email.classList.add('form-control--error');
      } else {
        this.domNodes.form.classList.remove('shake');
        this.domNodes.email.classList.remove('form-control--error', 'shake');
      }

      return emailIsValid(emailVal);
    });

    (0,defineProperty/* default */.Z)(this, "showCoupon", () => {
      var _this$domNodes$popup, _this$domNodes$coupon;

      (_this$domNodes$popup = this.domNodes.popup) === null || _this$domNodes$popup === void 0 ? void 0 : _this$domNodes$popup.classList.add(this.classes.success);
      (_this$domNodes$coupon = this.domNodes.couponCard) === null || _this$domNodes$coupon === void 0 ? void 0 : _this$domNodes$coupon.classList.add('shake');
      this.domNodes.couponCode.innerHTML = this.settings.coupon;
      this.domNodes.couponInput.value = this.settings.coupon;
    });

    (0,defineProperty/* default */.Z)(this, "showTeaser", () => {
      var _this$settings22, _this$settings23, _this$settings24, _this$settings25;

      this.teaser = popup_createElement(Teaser, {
        teaser_color: (_this$settings22 = this.settings) === null || _this$settings22 === void 0 ? void 0 : _this$settings22.teaser_color,
        teaser_title: (_this$settings23 = this.settings) === null || _this$settings23 === void 0 ? void 0 : _this$settings23.teaser_title,
        teaser_position: (_this$settings24 = this.settings) === null || _this$settings24 === void 0 ? void 0 : _this$settings24.teaser_position,
        teaser_activate: (_this$settings25 = this.settings) === null || _this$settings25 === void 0 ? void 0 : _this$settings25.teaser_activate
      });
      document.body.appendChild(this.teaser);
      document.querySelector(this.selectors.teaser).addEventListener('click', this.open);
    });

    (0,defineProperty/* default */.Z)(this, "toggleLoading", loading => {
      if (loading) {
        this.domNodes.submit.classList.add(this.classes.loading);
      } else {
        this.domNodes.submit.classList.remove(this.classes.loading);
      }
    });

    (0,defineProperty/* default */.Z)(this, "handleCopy", () => {
      events_addEventDelegate({
        selector: this.selectors.btnCopy,
        event: 'click',
        handler: () => {
          var _this$settings26;

          copyToClipboard((_this$settings26 = this.settings) === null || _this$settings26 === void 0 ? void 0 : _this$settings26.coupon, this.domNodes.btnCopy);
        }
      });
    });

    this.settings = settings;
    this.popup = new modal('foxkit-popup');
    const qs = (0,query_string.parse)(location.search);

    if (qs[this.forceOpenQueryFlag] === "true") {
      this.forcedOpen = true;
    }

    this.init();
  }

}

window.FoxKit = window.FoxKit || {};
window.FoxKit.Popup = Popup;
}();
/******/ })()
;