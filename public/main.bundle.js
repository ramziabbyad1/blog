webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(377);
	var app_module_1 = __webpack_require__(566);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
	    .catch(function (err) { return console.error(err); });
	

/***/ },

/***/ 25:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var globalScope;
	if (typeof window === 'undefined') {
	    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	        globalScope = self;
	    }
	    else {
	        globalScope = global;
	    }
	}
	else {
	    globalScope = window;
	}
	function scheduleMicroTask(fn) {
	    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
	}
	exports.scheduleMicroTask = scheduleMicroTask;
	// Need to declare a new variable for global here since TypeScript
	// exports the original value of the symbol.
	var _global = globalScope;
	exports.global = _global;
	/**
	 * Runtime representation a type that a Component or other object is instances of.
	 *
	 * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
	 * the `MyCustomComponent` constructor function.
	 *
	 * @stable
	 */
	exports.Type = Function;
	function getTypeNameForDebugging(type) {
	    if (type['name']) {
	        return type['name'];
	    }
	    return typeof type;
	}
	exports.getTypeNameForDebugging = getTypeNameForDebugging;
	exports.Math = _global.Math;
	exports.Date = _global.Date;
	// TODO: remove calls to assert in production environment
	// Note: Can't just export this and import in in other files
	// as `assert` is a reserved keyword in Dart
	_global.assert = function assert(condition) {
	    // TODO: to be fixed properly via #2830, noop for now
	};
	function isPresent(obj) {
	    return obj !== undefined && obj !== null;
	}
	exports.isPresent = isPresent;
	function isBlank(obj) {
	    return obj === undefined || obj === null;
	}
	exports.isBlank = isBlank;
	function isBoolean(obj) {
	    return typeof obj === 'boolean';
	}
	exports.isBoolean = isBoolean;
	function isNumber(obj) {
	    return typeof obj === 'number';
	}
	exports.isNumber = isNumber;
	function isString(obj) {
	    return typeof obj === 'string';
	}
	exports.isString = isString;
	function isFunction(obj) {
	    return typeof obj === 'function';
	}
	exports.isFunction = isFunction;
	function isType(obj) {
	    return isFunction(obj);
	}
	exports.isType = isType;
	function isStringMap(obj) {
	    return typeof obj === 'object' && obj !== null;
	}
	exports.isStringMap = isStringMap;
	var STRING_MAP_PROTO = Object.getPrototypeOf({});
	function isStrictStringMap(obj) {
	    return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
	}
	exports.isStrictStringMap = isStrictStringMap;
	function isPromise(obj) {
	    // allow any Promise/A+ compliant thenable.
	    // It's up to the caller to ensure that obj.then conforms to the spec
	    return isPresent(obj) && isFunction(obj.then);
	}
	exports.isPromise = isPromise;
	function isArray(obj) {
	    return Array.isArray(obj);
	}
	exports.isArray = isArray;
	function isDate(obj) {
	    return obj instanceof exports.Date && !isNaN(obj.valueOf());
	}
	exports.isDate = isDate;
	function noop() { }
	exports.noop = noop;
	function stringify(token) {
	    if (typeof token === 'string') {
	        return token;
	    }
	    if (token === undefined || token === null) {
	        return '' + token;
	    }
	    if (token.overriddenName) {
	        return token.overriddenName;
	    }
	    if (token.name) {
	        return token.name;
	    }
	    var res = token.toString();
	    var newLineIndex = res.indexOf('\n');
	    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
	}
	exports.stringify = stringify;
	// serialize / deserialize enum exist only for consistency with dart API
	// enums in typescript don't need to be serialized
	function serializeEnum(val) {
	    return val;
	}
	exports.serializeEnum = serializeEnum;
	function deserializeEnum(val, values) {
	    return val;
	}
	exports.deserializeEnum = deserializeEnum;
	function resolveEnumToken(enumValue, val) {
	    return enumValue[val];
	}
	exports.resolveEnumToken = resolveEnumToken;
	var StringWrapper = (function () {
	    function StringWrapper() {
	    }
	    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	    StringWrapper.equals = function (s, s2) { return s === s2; };
	    StringWrapper.stripLeft = function (s, charVal) {
	        if (s && s.length) {
	            var pos = 0;
	            for (var i = 0; i < s.length; i++) {
	                if (s[i] != charVal)
	                    break;
	                pos++;
	            }
	            s = s.substring(pos);
	        }
	        return s;
	    };
	    StringWrapper.stripRight = function (s, charVal) {
	        if (s && s.length) {
	            var pos = s.length;
	            for (var i = s.length - 1; i >= 0; i--) {
	                if (s[i] != charVal)
	                    break;
	                pos--;
	            }
	            s = s.substring(0, pos);
	        }
	        return s;
	    };
	    StringWrapper.replace = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.replaceAll = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.slice = function (s, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return s.slice(from, to === null ? undefined : to);
	    };
	    StringWrapper.replaceAllMapped = function (s, from, cb) {
	        return s.replace(from, function () {
	            var matches = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                matches[_i - 0] = arguments[_i];
	            }
	            // Remove offset & string from the result array
	            matches.splice(-2, 2);
	            // The callback receives match, p1, ..., pn
	            return cb(matches);
	        });
	    };
	    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	    StringWrapper.compare = function (a, b) {
	        if (a < b) {
	            return -1;
	        }
	        else if (a > b) {
	            return 1;
	        }
	        else {
	            return 0;
	        }
	    };
	    return StringWrapper;
	}());
	exports.StringWrapper = StringWrapper;
	var StringJoiner = (function () {
	    function StringJoiner(parts) {
	        if (parts === void 0) { parts = []; }
	        this.parts = parts;
	    }
	    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
	    StringJoiner.prototype.toString = function () { return this.parts.join(''); };
	    return StringJoiner;
	}());
	exports.StringJoiner = StringJoiner;
	var NumberParseError = (function (_super) {
	    __extends(NumberParseError, _super);
	    function NumberParseError(message) {
	        _super.call(this);
	        this.message = message;
	    }
	    NumberParseError.prototype.toString = function () { return this.message; };
	    return NumberParseError;
	}(Error));
	exports.NumberParseError = NumberParseError;
	var NumberWrapper = (function () {
	    function NumberWrapper() {
	    }
	    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	    NumberWrapper.equal = function (a, b) { return a === b; };
	    NumberWrapper.parseIntAutoRadix = function (text) {
	        var result = parseInt(text);
	        if (isNaN(result)) {
	            throw new NumberParseError('Invalid integer literal when parsing ' + text);
	        }
	        return result;
	    };
	    NumberWrapper.parseInt = function (text, radix) {
	        if (radix == 10) {
	            if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else if (radix == 16) {
	            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else {
	            var result = parseInt(text, radix);
	            if (!isNaN(result)) {
	                return result;
	            }
	        }
	        throw new NumberParseError('Invalid integer literal when parsing ' + text + ' in base ' + radix);
	    };
	    // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
	    NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
	    Object.defineProperty(NumberWrapper, "NaN", {
	        get: function () { return NaN; },
	        enumerable: true,
	        configurable: true
	    });
	    NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
	    NumberWrapper.isNaN = function (value) { return isNaN(value); };
	    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	    return NumberWrapper;
	}());
	exports.NumberWrapper = NumberWrapper;
	exports.RegExp = _global.RegExp;
	var FunctionWrapper = (function () {
	    function FunctionWrapper() {
	    }
	    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
	    FunctionWrapper.bind = function (fn, scope) { return fn.bind(scope); };
	    return FunctionWrapper;
	}());
	exports.FunctionWrapper = FunctionWrapper;
	// JS has NaN !== NaN
	function looseIdentical(a, b) {
	    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	}
	exports.looseIdentical = looseIdentical;
	// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
	function getMapKey(value) {
	    return value;
	}
	exports.getMapKey = getMapKey;
	function normalizeBlank(obj) {
	    return isBlank(obj) ? null : obj;
	}
	exports.normalizeBlank = normalizeBlank;
	function normalizeBool(obj) {
	    return isBlank(obj) ? false : obj;
	}
	exports.normalizeBool = normalizeBool;
	function isJsObject(o) {
	    return o !== null && (typeof o === 'function' || typeof o === 'object');
	}
	exports.isJsObject = isJsObject;
	function print(obj) {
	    console.log(obj);
	}
	exports.print = print;
	function warn(obj) {
	    console.warn(obj);
	}
	exports.warn = warn;
	// Can't be all uppercase as our transpiler would think it is a special directive...
	var Json = (function () {
	    function Json() {
	    }
	    Json.parse = function (s) { return _global.JSON.parse(s); };
	    Json.stringify = function (data) {
	        // Dart doesn't take 3 arguments
	        return _global.JSON.stringify(data, null, 2);
	    };
	    return Json;
	}());
	exports.Json = Json;
	var DateWrapper = (function () {
	    function DateWrapper() {
	    }
	    DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
	        if (month === void 0) { month = 1; }
	        if (day === void 0) { day = 1; }
	        if (hour === void 0) { hour = 0; }
	        if (minutes === void 0) { minutes = 0; }
	        if (seconds === void 0) { seconds = 0; }
	        if (milliseconds === void 0) { milliseconds = 0; }
	        return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
	    };
	    DateWrapper.fromISOString = function (str) { return new exports.Date(str); };
	    DateWrapper.fromMillis = function (ms) { return new exports.Date(ms); };
	    DateWrapper.toMillis = function (date) { return date.getTime(); };
	    DateWrapper.now = function () { return new exports.Date(); };
	    DateWrapper.toJson = function (date) { return date.toJSON(); };
	    return DateWrapper;
	}());
	exports.DateWrapper = DateWrapper;
	function setValueOnPath(global, path, value) {
	    var parts = path.split('.');
	    var obj = global;
	    while (parts.length > 1) {
	        var name = parts.shift();
	        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
	            obj = obj[name];
	        }
	        else {
	            obj = obj[name] = {};
	        }
	    }
	    if (obj === undefined || obj === null) {
	        obj = {};
	    }
	    obj[parts.shift()] = value;
	}
	exports.setValueOnPath = setValueOnPath;
	var _symbolIterator = null;
	function getSymbolIterator() {
	    if (isBlank(_symbolIterator)) {
	        if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
	            _symbolIterator = Symbol.iterator;
	        }
	        else {
	            // es6-shim specific logic
	            var keys = Object.getOwnPropertyNames(Map.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (key !== 'entries' && key !== 'size' &&
	                    Map.prototype[key] === Map.prototype['entries']) {
	                    _symbolIterator = key;
	                }
	            }
	        }
	    }
	    return _symbolIterator;
	}
	exports.getSymbolIterator = getSymbolIterator;
	function evalExpression(sourceUrl, expr, declarations, vars) {
	    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
	    var fnArgNames = [];
	    var fnArgValues = [];
	    for (var argName in vars) {
	        fnArgNames.push(argName);
	        fnArgValues.push(vars[argName]);
	    }
	    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
	}
	exports.evalExpression = evalExpression;
	function isPrimitive(obj) {
	    return !isJsObject(obj);
	}
	exports.isPrimitive = isPrimitive;
	function hasConstructor(value, type) {
	    return value.constructor === type;
	}
	exports.hasConstructor = hasConstructor;
	function escape(s) {
	    return _global.encodeURI(s);
	}
	exports.escape = escape;
	function escapeRegExp(s) {
	    return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
	}
	exports.escapeRegExp = escapeRegExp;
	//# sourceMappingURL=lang.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var lang_1 = __webpack_require__(25);
	exports.Map = lang_1.global.Map;
	exports.Set = lang_1.global.Set;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Map constructor.  We work around that by manually adding the items.
	var createMapFromPairs = (function () {
	    try {
	        if (new exports.Map([[1, 2]]).size === 1) {
	            return function createMapFromPairs(pairs) { return new exports.Map(pairs); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromPairs(pairs) {
	        var map = new exports.Map();
	        for (var i = 0; i < pairs.length; i++) {
	            var pair = pairs[i];
	            map.set(pair[0], pair[1]);
	        }
	        return map;
	    };
	})();
	var createMapFromMap = (function () {
	    try {
	        if (new exports.Map(new exports.Map())) {
	            return function createMapFromMap(m) { return new exports.Map(m); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromMap(m) {
	        var map = new exports.Map();
	        m.forEach(function (v, k) { map.set(k, v); });
	        return map;
	    };
	})();
	var _clearValues = (function () {
	    if ((new exports.Map()).keys().next) {
	        return function _clearValues(m) {
	            var keyIterator = m.keys();
	            var k;
	            while (!((k = keyIterator.next()).done)) {
	                m.set(k.value, null);
	            }
	        };
	    }
	    else {
	        return function _clearValuesWithForeEach(m) {
	            m.forEach(function (v, k) { m.set(k, null); });
	        };
	    }
	})();
	// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	var _arrayFromMap = (function () {
	    try {
	        if ((new exports.Map()).values().next) {
	            return function createArrayFromMap(m, getValues) {
	                return getValues ? Array.from(m.values()) : Array.from(m.keys());
	            };
	        }
	    }
	    catch (e) {
	    }
	    return function createArrayFromMapWithForeach(m, getValues) {
	        var res = ListWrapper.createFixedSize(m.size), i = 0;
	        m.forEach(function (v, k) {
	            res[i] = getValues ? v : k;
	            i++;
	        });
	        return res;
	    };
	})();
	var MapWrapper = (function () {
	    function MapWrapper() {
	    }
	    MapWrapper.clone = function (m) { return createMapFromMap(m); };
	    MapWrapper.createFromStringMap = function (stringMap) {
	        var result = new exports.Map();
	        for (var prop in stringMap) {
	            result.set(prop, stringMap[prop]);
	        }
	        return result;
	    };
	    MapWrapper.toStringMap = function (m) {
	        var r = {};
	        m.forEach(function (v, k) { return r[k] = v; });
	        return r;
	    };
	    MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	    MapWrapper.clearValues = function (m) { _clearValues(m); };
	    MapWrapper.iterable = function (m) { return m; };
	    MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	    MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	    return MapWrapper;
	}());
	exports.MapWrapper = MapWrapper;
	/**
	 * Wraps Javascript Objects
	 */
	var StringMapWrapper = (function () {
	    function StringMapWrapper() {
	    }
	    StringMapWrapper.create = function () {
	        // Note: We are not using Object.create(null) here due to
	        // performance!
	        // http://jsperf.com/ng2-object-create-null
	        return {};
	    };
	    StringMapWrapper.contains = function (map, key) {
	        return map.hasOwnProperty(key);
	    };
	    StringMapWrapper.get = function (map, key) {
	        return map.hasOwnProperty(key) ? map[key] : undefined;
	    };
	    StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	    StringMapWrapper.keys = function (map) { return Object.keys(map); };
	    StringMapWrapper.values = function (map) {
	        return Object.keys(map).map(function (k) { return map[k]; });
	    };
	    StringMapWrapper.isEmpty = function (map) {
	        for (var prop in map) {
	            return false;
	        }
	        return true;
	    };
	    StringMapWrapper.delete = function (map, key) { delete map[key]; };
	    StringMapWrapper.forEach = function (map, callback) {
	        for (var _i = 0, _a = Object.keys(map); _i < _a.length; _i++) {
	            var k = _a[_i];
	            callback(map[k], k);
	        }
	    };
	    StringMapWrapper.merge = function (m1, m2) {
	        var m = {};
	        for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	            var k = _a[_i];
	            m[k] = m1[k];
	        }
	        for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	            var k = _c[_b];
	            m[k] = m2[k];
	        }
	        return m;
	    };
	    StringMapWrapper.equals = function (m1, m2) {
	        var k1 = Object.keys(m1);
	        var k2 = Object.keys(m2);
	        if (k1.length != k2.length) {
	            return false;
	        }
	        var key;
	        for (var i = 0; i < k1.length; i++) {
	            key = k1[i];
	            if (m1[key] !== m2[key]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    return StringMapWrapper;
	}());
	exports.StringMapWrapper = StringMapWrapper;
	var ListWrapper = (function () {
	    function ListWrapper() {
	    }
	    // JS has no way to express a statically fixed size list, but dart does so we
	    // keep both methods.
	    ListWrapper.createFixedSize = function (size) { return new Array(size); };
	    ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	    ListWrapper.clone = function (array) { return array.slice(0); };
	    ListWrapper.forEachWithIndex = function (array, fn) {
	        for (var i = 0; i < array.length; i++) {
	            fn(array[i], i);
	        }
	    };
	    ListWrapper.first = function (array) {
	        if (!array)
	            return null;
	        return array[0];
	    };
	    ListWrapper.last = function (array) {
	        if (!array || array.length == 0)
	            return null;
	        return array[array.length - 1];
	    };
	    ListWrapper.indexOf = function (array, value, startIndex) {
	        if (startIndex === void 0) { startIndex = 0; }
	        return array.indexOf(value, startIndex);
	    };
	    ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	    ListWrapper.reversed = function (array) {
	        var a = ListWrapper.clone(array);
	        return a.reverse();
	    };
	    ListWrapper.concat = function (a, b) { return a.concat(b); };
	    ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	    ListWrapper.removeAt = function (list, index) {
	        var res = list[index];
	        list.splice(index, 1);
	        return res;
	    };
	    ListWrapper.removeAll = function (list, items) {
	        for (var i = 0; i < items.length; ++i) {
	            var index = list.indexOf(items[i]);
	            list.splice(index, 1);
	        }
	    };
	    ListWrapper.remove = function (list, el) {
	        var index = list.indexOf(el);
	        if (index > -1) {
	            list.splice(index, 1);
	            return true;
	        }
	        return false;
	    };
	    ListWrapper.clear = function (list) { list.length = 0; };
	    ListWrapper.isEmpty = function (list) { return list.length == 0; };
	    ListWrapper.fill = function (list, value, start, end) {
	        if (start === void 0) { start = 0; }
	        if (end === void 0) { end = null; }
	        list.fill(value, start, end === null ? list.length : end);
	    };
	    ListWrapper.equals = function (a, b) {
	        if (a.length != b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (a[i] !== b[i])
	                return false;
	        }
	        return true;
	    };
	    ListWrapper.slice = function (l, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return l.slice(from, to === null ? undefined : to);
	    };
	    ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	    ListWrapper.sort = function (l, compareFn) {
	        if (lang_1.isPresent(compareFn)) {
	            l.sort(compareFn);
	        }
	        else {
	            l.sort();
	        }
	    };
	    ListWrapper.toString = function (l) { return l.toString(); };
	    ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	    ListWrapper.maximum = function (list, predicate) {
	        if (list.length == 0) {
	            return null;
	        }
	        var solution = null;
	        var maxValue = -Infinity;
	        for (var index = 0; index < list.length; index++) {
	            var candidate = list[index];
	            if (lang_1.isBlank(candidate)) {
	                continue;
	            }
	            var candidateValue = predicate(candidate);
	            if (candidateValue > maxValue) {
	                solution = candidate;
	                maxValue = candidateValue;
	            }
	        }
	        return solution;
	    };
	    ListWrapper.flatten = function (list) {
	        var target = [];
	        _flattenArray(list, target);
	        return target;
	    };
	    ListWrapper.addAll = function (list, source) {
	        for (var i = 0; i < source.length; i++) {
	            list.push(source[i]);
	        }
	    };
	    return ListWrapper;
	}());
	exports.ListWrapper = ListWrapper;
	function _flattenArray(source, target) {
	    if (lang_1.isPresent(source)) {
	        for (var i = 0; i < source.length; i++) {
	            var item = source[i];
	            if (lang_1.isArray(item)) {
	                _flattenArray(item, target);
	            }
	            else {
	                target.push(item);
	            }
	        }
	    }
	    return target;
	}
	function isListLikeIterable(obj) {
	    if (!lang_1.isJsObject(obj))
	        return false;
	    return lang_1.isArray(obj) ||
	        (!(obj instanceof exports.Map) &&
	            lang_1.getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	}
	exports.isListLikeIterable = isListLikeIterable;
	function areIterablesEqual(a, b, comparator) {
	    var iterator1 = a[lang_1.getSymbolIterator()]();
	    var iterator2 = b[lang_1.getSymbolIterator()]();
	    while (true) {
	        var item1 = iterator1.next();
	        var item2 = iterator2.next();
	        if (item1.done && item2.done)
	            return true;
	        if (item1.done || item2.done)
	            return false;
	        if (!comparator(item1.value, item2.value))
	            return false;
	    }
	}
	exports.areIterablesEqual = areIterablesEqual;
	function iterateListLike(obj, fn) {
	    if (lang_1.isArray(obj)) {
	        for (var i = 0; i < obj.length; i++) {
	            fn(obj[i]);
	        }
	    }
	    else {
	        var iterator = obj[lang_1.getSymbolIterator()]();
	        var item;
	        while (!((item = iterator.next()).done)) {
	            fn(item.value);
	        }
	    }
	}
	exports.iterateListLike = iterateListLike;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Set constructor.  We work around that by manually adding the items.
	var createSetFromList = (function () {
	    var test = new exports.Set([1, 2, 3]);
	    if (test.size === 3) {
	        return function createSetFromList(lst) { return new exports.Set(lst); };
	    }
	    else {
	        return function createSetAndPopulateFromList(lst) {
	            var res = new exports.Set(lst);
	            if (res.size !== lst.length) {
	                for (var i = 0; i < lst.length; i++) {
	                    res.add(lst[i]);
	                }
	            }
	            return res;
	        };
	    }
	})();
	var SetWrapper = (function () {
	    function SetWrapper() {
	    }
	    SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
	    SetWrapper.has = function (s, key) { return s.has(key); };
	    SetWrapper.delete = function (m, k) { m.delete(k); };
	    return SetWrapper;
	}());
	exports.SetWrapper = SetWrapper;
	//# sourceMappingURL=collection.js.map

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	/**
	 * Used to provide a {@link ControlValueAccessor} for form controls.
	 *
	 * See {@link DefaultValueAccessor} for how to implement one.
	 * @experimental
	 */
	exports.NG_VALUE_ACCESSOR = new core_1.OpaqueToken('NgValueAccessor');
	//# sourceMappingURL=control_value_accessor.js.map

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var toPromise_1 = __webpack_require__(281);
	var collection_1 = __webpack_require__(38);
	var lang_1 = __webpack_require__(25);
	/**
	 * Providers for validators to be used for {@link FormControl}s in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * ### Example
	 *
	 * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	 * @experimental
	 */
	exports.NG_VALIDATORS = new core_1.OpaqueToken('NgValidators');
	/**
	 * Providers for asynchronous validators to be used for {@link FormControl}s
	 * in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * See {@link NG_VALIDATORS} for more details.
	 *
	 * @experimental
	 */
	exports.NG_ASYNC_VALIDATORS = new core_1.OpaqueToken('NgAsyncValidators');
	/**
	 * Provides a set of validators used by form controls.
	 *
	 * A validator is a function that processes a {@link FormControl} or collection of
	 * controls and returns a map of errors. A null map means that validation has passed.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * var loginControl = new FormControl("", Validators.required)
	 * ```
	 *
	 * @experimental
	 */
	var Validators = (function () {
	    function Validators() {
	    }
	    /**
	     * Validator that requires controls to have a non-empty value.
	     */
	    Validators.required = function (control) {
	        return lang_1.isBlank(control.value) || (lang_1.isString(control.value) && control.value == '') ?
	            { 'required': true } :
	            null;
	    };
	    /**
	     * Validator that requires controls to have a value of a minimum length.
	     */
	    Validators.minLength = function (minLength) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var v = control.value;
	            return v.length < minLength ?
	                { 'minlength': { 'requiredLength': minLength, 'actualLength': v.length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires controls to have a value of a maximum length.
	     */
	    Validators.maxLength = function (maxLength) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var v = control.value;
	            return v.length > maxLength ?
	                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': v.length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires a control to match a regex to its value.
	     */
	    Validators.pattern = function (pattern) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var regex = new RegExp("^" + pattern + "$");
	            var v = control.value;
	            return regex.test(v) ? null :
	                { 'pattern': { 'requiredPattern': "^" + pattern + "$", 'actualValue': v } };
	        };
	    };
	    /**
	     * No-op validator.
	     */
	    Validators.nullValidator = function (c) { return null; };
	    /**
	     * Compose multiple validators into a single function that returns the union
	     * of the individual error maps.
	     */
	    Validators.compose = function (validators) {
	        if (lang_1.isBlank(validators))
	            return null;
	        var presentValidators = validators.filter(lang_1.isPresent);
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            return _mergeErrors(_executeValidators(control, presentValidators));
	        };
	    };
	    Validators.composeAsync = function (validators) {
	        if (lang_1.isBlank(validators))
	            return null;
	        var presentValidators = validators.filter(lang_1.isPresent);
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	            return Promise.all(promises).then(_mergeErrors);
	        };
	    };
	    return Validators;
	}());
	exports.Validators = Validators;
	function _convertToPromise(obj) {
	    return lang_1.isPromise(obj) ? obj : toPromise_1.toPromise.call(obj);
	}
	function _executeValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	function _executeAsyncValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	function _mergeErrors(arrayOfErrors) {
	    var res = arrayOfErrors.reduce(function (res, errors) {
	        return lang_1.isPresent(errors) ? collection_1.StringMapWrapper.merge(res, errors) : res;
	    }, {});
	    return collection_1.StringMapWrapper.isEmpty(res) ? null : res;
	}
	//# sourceMappingURL=validators.js.map

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_control_directive_1 = __webpack_require__(235);
	/**
	 * A directive that contains multiple {@link NgControl}s.
	 *
	 * Only used by the forms module.
	 *
	 * @experimental
	 */
	var ControlContainer = (function (_super) {
	    __extends(ControlContainer, _super);
	    function ControlContainer() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(ControlContainer.prototype, "formDirective", {
	        /**
	         * Get the form to which this container belongs.
	         */
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ControlContainer.prototype, "path", {
	        /**
	         * Get the path to this container.
	         */
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return ControlContainer;
	}(abstract_control_directive_1.AbstractControlDirective));
	exports.ControlContainer = ControlContainer;
	//# sourceMappingURL=control_container.js.map

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var collection_1 = __webpack_require__(38);
	var exceptions_1 = __webpack_require__(80);
	var lang_1 = __webpack_require__(25);
	var validators_1 = __webpack_require__(45);
	var checkbox_value_accessor_1 = __webpack_require__(152);
	var default_value_accessor_1 = __webpack_require__(153);
	var normalize_validator_1 = __webpack_require__(522);
	var number_value_accessor_1 = __webpack_require__(238);
	var radio_control_value_accessor_1 = __webpack_require__(155);
	var select_control_value_accessor_1 = __webpack_require__(156);
	var select_multiple_control_value_accessor_1 = __webpack_require__(157);
	function controlPath(name, parent) {
	    var p = collection_1.ListWrapper.clone(parent.path);
	    p.push(name);
	    return p;
	}
	exports.controlPath = controlPath;
	function setUpControl(control, dir) {
	    if (lang_1.isBlank(control))
	        _throwError(dir, 'Cannot find control with');
	    if (lang_1.isBlank(dir.valueAccessor))
	        _throwError(dir, 'No value accessor for form control with');
	    control.validator = validators_1.Validators.compose([control.validator, dir.validator]);
	    control.asyncValidator = validators_1.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    dir.valueAccessor.writeValue(control.value);
	    // view -> model
	    dir.valueAccessor.registerOnChange(function (newValue) {
	        dir.viewToModelUpdate(newValue);
	        control.markAsDirty();
	        control.setValue(newValue, { emitModelToViewChange: false });
	    });
	    control.registerOnChange(function (newValue, emitModelEvent) {
	        // control -> view
	        dir.valueAccessor.writeValue(newValue);
	        // control -> ngModel
	        if (emitModelEvent)
	            dir.viewToModelUpdate(newValue);
	    });
	    // touched
	    dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	}
	exports.setUpControl = setUpControl;
	function setUpFormContainer(control, dir) {
	    if (lang_1.isBlank(control))
	        _throwError(dir, 'Cannot find control with');
	    control.validator = validators_1.Validators.compose([control.validator, dir.validator]);
	    control.asyncValidator = validators_1.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	}
	exports.setUpFormContainer = setUpFormContainer;
	function _throwError(dir, message) {
	    var messageEnd;
	    if (dir.path.length > 1) {
	        messageEnd = "path: '" + dir.path.join(' -> ') + "'";
	    }
	    else if (dir.path[0]) {
	        messageEnd = "name: '" + dir.path + "'";
	    }
	    else {
	        messageEnd = 'unspecified name attribute';
	    }
	    throw new exceptions_1.BaseException(message + " " + messageEnd);
	}
	function composeValidators(validators) {
	    return lang_1.isPresent(validators) ? validators_1.Validators.compose(validators.map(normalize_validator_1.normalizeValidator)) : null;
	}
	exports.composeValidators = composeValidators;
	function composeAsyncValidators(validators) {
	    return lang_1.isPresent(validators) ? validators_1.Validators.composeAsync(validators.map(normalize_validator_1.normalizeAsyncValidator)) :
	        null;
	}
	exports.composeAsyncValidators = composeAsyncValidators;
	function isPropertyUpdated(changes, viewModel) {
	    if (!collection_1.StringMapWrapper.contains(changes, 'model'))
	        return false;
	    var change = changes['model'];
	    if (change.isFirstChange())
	        return true;
	    return !lang_1.looseIdentical(viewModel, change.currentValue);
	}
	exports.isPropertyUpdated = isPropertyUpdated;
	// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
	function selectValueAccessor(dir, valueAccessors) {
	    if (lang_1.isBlank(valueAccessors))
	        return null;
	    var defaultAccessor;
	    var builtinAccessor;
	    var customAccessor;
	    valueAccessors.forEach(function (v) {
	        if (lang_1.hasConstructor(v, default_value_accessor_1.DefaultValueAccessor)) {
	            defaultAccessor = v;
	        }
	        else if (lang_1.hasConstructor(v, checkbox_value_accessor_1.CheckboxControlValueAccessor) || lang_1.hasConstructor(v, number_value_accessor_1.NumberValueAccessor) ||
	            lang_1.hasConstructor(v, select_control_value_accessor_1.SelectControlValueAccessor) ||
	            lang_1.hasConstructor(v, select_multiple_control_value_accessor_1.SelectMultipleControlValueAccessor) ||
	            lang_1.hasConstructor(v, radio_control_value_accessor_1.RadioControlValueAccessor)) {
	            if (lang_1.isPresent(builtinAccessor))
	                _throwError(dir, 'More than one built-in value accessor matches form control with');
	            builtinAccessor = v;
	        }
	        else {
	            if (lang_1.isPresent(customAccessor))
	                _throwError(dir, 'More than one custom value accessor matches form control with');
	            customAccessor = v;
	        }
	    });
	    if (lang_1.isPresent(customAccessor))
	        return customAccessor;
	    if (lang_1.isPresent(builtinAccessor))
	        return builtinAccessor;
	    if (lang_1.isPresent(defaultAccessor))
	        return defaultAccessor;
	    _throwError(dir, 'No valid value accessor for form control with');
	    return null;
	}
	exports.selectValueAccessor = selectValueAccessor;
	//# sourceMappingURL=shared.js.map

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var exceptions_1 = __webpack_require__(80);
	var abstract_control_directive_1 = __webpack_require__(235);
	/**
	 * A base class that all control directive extend.
	 * It binds a {@link Control} object to a DOM element.
	 *
	 * Used internally by Angular forms.
	 *
	 * @experimental
	 */
	var NgControl = (function (_super) {
	    __extends(NgControl, _super);
	    function NgControl() {
	        _super.apply(this, arguments);
	        this.name = null;
	        this.valueAccessor = null;
	    }
	    Object.defineProperty(NgControl.prototype, "validator", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControl.prototype, "asyncValidator", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return NgControl;
	}(abstract_control_directive_1.AbstractControlDirective));
	exports.NgControl = NgControl;
	//# sourceMappingURL=ng_control.js.map

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_wrapped_exception_1 = __webpack_require__(366);
	var exception_handler_1 = __webpack_require__(367);
	var exception_handler_2 = __webpack_require__(367);
	exports.ExceptionHandler = exception_handler_2.ExceptionHandler;
	/**
	 * @stable
	 */
	var BaseException = (function (_super) {
	    __extends(BaseException, _super);
	    function BaseException(message) {
	        if (message === void 0) { message = '--'; }
	        _super.call(this, message);
	        this.message = message;
	        this.stack = (new Error(message)).stack;
	    }
	    BaseException.prototype.toString = function () { return this.message; };
	    return BaseException;
	}(Error));
	exports.BaseException = BaseException;
	/**
	 * Wraps an exception and provides additional context or information.
	 * @stable
	 */
	var WrappedException = (function (_super) {
	    __extends(WrappedException, _super);
	    function WrappedException(_wrapperMessage, _originalException /** TODO #9100 */, _originalStack /** TODO #9100 */, _context /** TODO #9100 */) {
	        _super.call(this, _wrapperMessage);
	        this._wrapperMessage = _wrapperMessage;
	        this._originalException = _originalException;
	        this._originalStack = _originalStack;
	        this._context = _context;
	        this._wrapperStack = (new Error(_wrapperMessage)).stack;
	    }
	    Object.defineProperty(WrappedException.prototype, "wrapperMessage", {
	        get: function () { return this._wrapperMessage; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "wrapperStack", {
	        get: function () { return this._wrapperStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalException", {
	        get: function () { return this._originalException; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalStack", {
	        get: function () { return this._originalStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "context", {
	        get: function () { return this._context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "message", {
	        get: function () { return exception_handler_1.ExceptionHandler.exceptionToString(this); },
	        enumerable: true,
	        configurable: true
	    });
	    WrappedException.prototype.toString = function () { return this.message; };
	    return WrappedException;
	}(base_wrapped_exception_1.BaseWrappedException));
	exports.WrappedException = WrappedException;
	function makeTypeError(message) {
	    return new TypeError(message);
	}
	exports.makeTypeError = makeTypeError;
	function unimplemented() {
	    throw new BaseException('unimplemented');
	}
	exports.unimplemented = unimplemented;
	//# sourceMappingURL=exceptions.js.map

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(41);
	var Observable_1 = __webpack_require__(5);
	exports.Observable = Observable_1.Observable;
	var Subject_2 = __webpack_require__(41);
	exports.Subject = Subject_2.Subject;
	/**
	 * Use by directives and components to emit custom Events.
	 *
	 * ### Examples
	 *
	 * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	 * title gets clicked:
	 *
	 * ```
	 * @Component({
	 *   selector: 'zippy',
	 *   template: `
	 *   <div class="zippy">
	 *     <div (click)="toggle()">Toggle</div>
	 *     <div [hidden]="!visible">
	 *       <ng-content></ng-content>
	 *     </div>
	 *  </div>`})
	 * export class Zippy {
	 *   visible: boolean = true;
	 *   @Output() open: EventEmitter<any> = new EventEmitter();
	 *   @Output() close: EventEmitter<any> = new EventEmitter();
	 *
	 *   toggle() {
	 *     this.visible = !this.visible;
	 *     if (this.visible) {
	 *       this.open.emit(null);
	 *     } else {
	 *       this.close.emit(null);
	 *     }
	 *   }
	 * }
	 * ```
	 *
	 * The events payload can be accessed by the parameter `$event` on the components output event
	 * handler:
	 *
	 * ```
	 * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	 * ```
	 *
	 * Uses Rx.Observable but provides an adapter to make it work as specified here:
	 * https://github.com/jhusain/observable-spec
	 *
	 * Once a reference implementation of the spec is available, switch to it.
	 * @stable
	 */
	var EventEmitter = (function (_super) {
	    __extends(EventEmitter, _super);
	    /**
	     * Creates an instance of [EventEmitter], which depending on [isAsync],
	     * delivers events synchronously or asynchronously.
	     */
	    function EventEmitter(isAsync) {
	        if (isAsync === void 0) { isAsync = false; }
	        _super.call(this);
	        this.__isAsync = isAsync;
	    }
	    EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	    /**
	     * @deprecated - use .emit(value) instead
	     */
	    EventEmitter.prototype.next = function (value) { _super.prototype.next.call(this, value); };
	    EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	        var schedulerFn;
	        var errorFn = function (err) { return null; };
	        var completeFn = function () { return null; };
	        if (generatorOrNext && typeof generatorOrNext === 'object') {
	            schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                setTimeout(function () { return generatorOrNext.next(value); });
	            } : function (value /** TODO #9100 */) { generatorOrNext.next(value); };
	            if (generatorOrNext.error) {
	                errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                    function (err) { generatorOrNext.error(err); };
	            }
	            if (generatorOrNext.complete) {
	                completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                    function () { generatorOrNext.complete(); };
	            }
	        }
	        else {
	            schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                setTimeout(function () { return generatorOrNext(value); });
	            } : function (value /** TODO #9100 */) { generatorOrNext(value); };
	            if (error) {
	                errorFn =
	                    this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	            }
	            if (complete) {
	                completeFn =
	                    this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	            }
	        }
	        return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	    };
	    return EventEmitter;
	}(Subject_1.Subject));
	exports.EventEmitter = EventEmitter;
	//# sourceMappingURL=async.js.map

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var control_container_1 = __webpack_require__(64);
	var shared_1 = __webpack_require__(65);
	/**
	 * This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	 *
	 * @experimental
	 */
	var AbstractFormGroupDirective = (function (_super) {
	    __extends(AbstractFormGroupDirective, _super);
	    function AbstractFormGroupDirective() {
	        _super.apply(this, arguments);
	    }
	    AbstractFormGroupDirective.prototype.ngOnInit = function () {
	        this._checkParentType();
	        this.formDirective.addFormGroup(this);
	    };
	    AbstractFormGroupDirective.prototype.ngOnDestroy = function () { this.formDirective.removeFormGroup(this); };
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	        /**
	         * Get the {@link FormGroup} backing this binding.
	         */
	        get: function () { return this.formDirective.getFormGroup(this); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	        /**
	         * Get the path to this control group.
	         */
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	        /**
	         * Get the {@link Form} to which this group belongs.
	         */
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	        get: function () { return shared_1.composeAsyncValidators(this._asyncValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    AbstractFormGroupDirective.prototype._checkParentType = function () { };
	    return AbstractFormGroupDirective;
	}(control_container_1.ControlContainer));
	exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	//# sourceMappingURL=abstract_form_group_directive.js.map

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(96);
	var collection_1 = __webpack_require__(38);
	var lang_1 = __webpack_require__(25);
	var model_1 = __webpack_require__(158);
	var validators_1 = __webpack_require__(45);
	var control_container_1 = __webpack_require__(64);
	var shared_1 = __webpack_require__(65);
	exports.formDirectiveProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return NgForm; })
	};
	var resolvedPromise = Promise.resolve(null);
	var NgForm = (function (_super) {
	    __extends(NgForm, _super);
	    function NgForm(validators, asyncValidators) {
	        _super.call(this);
	        this._submitted = false;
	        this.ngSubmit = new async_1.EventEmitter();
	        this.form = new model_1.FormGroup({}, null, shared_1.composeValidators(validators), shared_1.composeAsyncValidators(asyncValidators));
	    }
	    Object.defineProperty(NgForm.prototype, "submitted", {
	        get: function () { return this._submitted; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "formDirective", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "controls", {
	        get: function () { return this.form.controls; },
	        enumerable: true,
	        configurable: true
	    });
	    NgForm.prototype.addControl = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var container = _this._findContainer(dir.path);
	            dir._control = container.registerControl(dir.name, dir.control);
	            shared_1.setUpControl(dir.control, dir);
	            dir.control.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	    NgForm.prototype.removeControl = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var container = _this._findContainer(dir.path);
	            if (lang_1.isPresent(container)) {
	                container.removeControl(dir.name);
	            }
	        });
	    };
	    NgForm.prototype.addFormGroup = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var container = _this._findContainer(dir.path);
	            var group = new model_1.FormGroup({});
	            shared_1.setUpFormContainer(group, dir);
	            container.registerControl(dir.name, group);
	            group.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    NgForm.prototype.removeFormGroup = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var container = _this._findContainer(dir.path);
	            if (lang_1.isPresent(container)) {
	                container.removeControl(dir.name);
	            }
	        });
	    };
	    NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	    NgForm.prototype.updateModel = function (dir, value) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var ctrl = _this.form.get(dir.path);
	            ctrl.setValue(value);
	        });
	    };
	    NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	    NgForm.prototype.onSubmit = function () {
	        this._submitted = true;
	        this.ngSubmit.emit(null);
	        return false;
	    };
	    NgForm.prototype.onReset = function () { this.form.reset(); };
	    /** @internal */
	    NgForm.prototype._findContainer = function (path) {
	        path.pop();
	        return collection_1.ListWrapper.isEmpty(path) ? this.form : this.form.get(path);
	    };
	    /** @nocollapse */
	    NgForm.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                    providers: [exports.formDirectiveProvider],
	                    host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
	                    outputs: ['ngSubmit'],
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    /** @nocollapse */
	    NgForm.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    return NgForm;
	}(control_container_1.ControlContainer));
	exports.NgForm = NgForm;
	//# sourceMappingURL=ng_form.js.map

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(96);
	var collection_1 = __webpack_require__(38);
	var lang_1 = __webpack_require__(25);
	var validators_1 = __webpack_require__(45);
	var control_container_1 = __webpack_require__(64);
	var reactive_errors_1 = __webpack_require__(241);
	var shared_1 = __webpack_require__(65);
	exports.formDirectiveProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormGroupDirective; })
	};
	var FormGroupDirective = (function (_super) {
	    __extends(FormGroupDirective, _super);
	    function FormGroupDirective(_validators, _asyncValidators) {
	        _super.call(this);
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this._submitted = false;
	        this.directives = [];
	        this.form = null;
	        this.ngSubmit = new async_1.EventEmitter();
	    }
	    FormGroupDirective.prototype.ngOnChanges = function (changes) {
	        this._checkFormPresent();
	        if (collection_1.StringMapWrapper.contains(changes, 'form')) {
	            var sync = shared_1.composeValidators(this._validators);
	            this.form.validator = validators_1.Validators.compose([this.form.validator, sync]);
	            var async = shared_1.composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = validators_1.Validators.composeAsync([this.form.asyncValidator, async]);
	            this.form.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        this._updateDomValue();
	    };
	    Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	        get: function () { return this._submitted; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    FormGroupDirective.prototype.addControl = function (dir) {
	        var ctrl = this.form.get(dir.path);
	        shared_1.setUpControl(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	        this.directives.push(dir);
	    };
	    FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	    FormGroupDirective.prototype.removeControl = function (dir) { collection_1.ListWrapper.remove(this.directives, dir); };
	    FormGroupDirective.prototype.addFormGroup = function (dir) {
	        var ctrl = this.form.get(dir.path);
	        shared_1.setUpFormContainer(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	    };
	    FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	    FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	    FormGroupDirective.prototype.addFormArray = function (dir) {
	        var ctrl = this.form.get(dir.path);
	        shared_1.setUpFormContainer(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	    };
	    FormGroupDirective.prototype.removeFormArray = function (dir) { };
	    FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
	    FormGroupDirective.prototype.updateModel = function (dir, value) {
	        var ctrl = this.form.get(dir.path);
	        ctrl.setValue(value);
	    };
	    FormGroupDirective.prototype.onSubmit = function () {
	        this._submitted = true;
	        this.ngSubmit.emit(null);
	        return false;
	    };
	    FormGroupDirective.prototype.onReset = function () { this.form.reset(); };
	    /** @internal */
	    FormGroupDirective.prototype._updateDomValue = function () {
	        var _this = this;
	        this.directives.forEach(function (dir) {
	            var ctrl = _this.form.get(dir.path);
	            dir.valueAccessor.writeValue(ctrl.value);
	        });
	    };
	    FormGroupDirective.prototype._checkFormPresent = function () {
	        if (lang_1.isBlank(this.form)) {
	            reactive_errors_1.ReactiveErrors.missingFormException();
	        }
	    };
	    /** @nocollapse */
	    FormGroupDirective.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[formGroup]',
	                    providers: [exports.formDirectiveProvider],
	                    host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    /** @nocollapse */
	    FormGroupDirective.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormGroupDirective.propDecorators = {
	        'form': [{ type: core_1.Input, args: ['formGroup',] },],
	        'ngSubmit': [{ type: core_1.Output },],
	    };
	    return FormGroupDirective;
	}(control_container_1.ControlContainer));
	exports.FormGroupDirective = FormGroupDirective;
	//# sourceMappingURL=form_group_directive.js.map

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var validators_1 = __webpack_require__(45);
	var abstract_form_group_directive_1 = __webpack_require__(105);
	var control_container_1 = __webpack_require__(64);
	var reactive_errors_1 = __webpack_require__(241);
	var shared_1 = __webpack_require__(65);
	var form_group_directive_1 = __webpack_require__(107);
	exports.formGroupNameProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormGroupName; })
	};
	var FormGroupName = (function (_super) {
	    __extends(FormGroupName, _super);
	    function FormGroupName(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    /** @internal */
	    FormGroupName.prototype._checkParentType = function () {
	        if (_hasInvalidParent(this._parent)) {
	            reactive_errors_1.ReactiveErrors.groupParentException();
	        }
	    };
	    /** @nocollapse */
	    FormGroupName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formGroupName]', providers: [exports.formGroupNameProvider] },] },
	    ];
	    /** @nocollapse */
	    FormGroupName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormGroupName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formGroupName',] },],
	    };
	    return FormGroupName;
	}(abstract_form_group_directive_1.AbstractFormGroupDirective));
	exports.FormGroupName = FormGroupName;
	exports.formArrayNameProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormArrayName; })
	};
	var FormArrayName = (function (_super) {
	    __extends(FormArrayName, _super);
	    function FormArrayName(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    FormArrayName.prototype.ngOnInit = function () {
	        this._checkParentType();
	        this.formDirective.addFormArray(this);
	    };
	    FormArrayName.prototype.ngOnDestroy = function () { this.formDirective.removeFormArray(this); };
	    Object.defineProperty(FormArrayName.prototype, "control", {
	        get: function () { return this.formDirective.getFormArray(this); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "formDirective", {
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "path", {
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	        get: function () { return shared_1.composeAsyncValidators(this._asyncValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    FormArrayName.prototype._checkParentType = function () {
	        if (_hasInvalidParent(this._parent)) {
	            reactive_errors_1.ReactiveErrors.arrayParentException();
	        }
	    };
	    /** @nocollapse */
	    FormArrayName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formArrayName]', providers: [exports.formArrayNameProvider] },] },
	    ];
	    /** @nocollapse */
	    FormArrayName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormArrayName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formArrayName',] },],
	    };
	    return FormArrayName;
	}(control_container_1.ControlContainer));
	exports.FormArrayName = FormArrayName;
	function _hasInvalidParent(parent) {
	    return !(parent instanceof FormGroupName) && !(parent instanceof form_group_directive_1.FormGroupDirective) &&
	        !(parent instanceof FormArrayName);
	}
	//# sourceMappingURL=form_group_name.js.map

/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(55);
	__webpack_require__(278);
	var CriteriaService = (function () {
	    function CriteriaService(http) {
	        this.http = http;
	        this.criteriaUrl = 'app/criteria'; // URL to web api
	    }
	    CriteriaService.prototype.getCriteria = function () {
	        return this.http.get(this.criteriaUrl)
	            .toPromise()
	            .then(function (response) { return response.json().data; })
	            .catch(this.handleError);
	    };
	    CriteriaService.prototype.getCriterium = function (id) {
	        return this.getCriteria()
	            .then(function (criteria) { return criteria.find(function (c) { return c.id === id; }); });
	    };
	    CriteriaService.prototype.save = function (criterium) {
	        if (criterium.id) {
	            return this.put(criterium);
	        }
	        return this.post(criterium);
	    };
	    CriteriaService.prototype.delete = function (criterium) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        var url = this.criteriaUrl + "/" + criterium.id;
	        return this.http
	            .delete(url, { headers: headers })
	            .toPromise()
	            .catch(this.handleError);
	    };
	    // Add new Criterium
	    CriteriaService.prototype.post = function (criterium) {
	        var headers = new http_1.Headers({
	            'Content-Type': 'application/json' });
	        return this.http
	            .post(this.criteriaUrl, JSON.stringify(criterium), { headers: headers })
	            .toPromise()
	            .then(function (res) { return res.json().data; })
	            .catch(this.handleError);
	    };
	    // Update existing Criterium
	    CriteriaService.prototype.put = function (criterium) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        var url = this.criteriaUrl + "/" + criterium.id;
	        return this.http
	            .put(url, JSON.stringify(criterium), { headers: headers })
	            .toPromise()
	            .then(function () { return criterium; })
	            .catch(this.handleError);
	    };
	    CriteriaService.prototype.handleError = function (error) {
	        console.error('An error occurred', error);
	        return Promise.reject(error.message || error);
	    };
	    CriteriaService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], CriteriaService);
	    return CriteriaService;
	    var _a;
	}());
	exports.CriteriaService = CriteriaService;
	

/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var control_value_accessor_1 = __webpack_require__(44);
	exports.CHECKBOX_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return CheckboxControlValueAccessor; }),
	    multi: true
	};
	var CheckboxControlValueAccessor = (function () {
	    function CheckboxControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	    };
	    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @nocollapse */
	    CheckboxControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                    host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                    providers: [exports.CHECKBOX_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    CheckboxControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return CheckboxControlValueAccessor;
	}());
	exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	//# sourceMappingURL=checkbox_value_accessor.js.map

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(25);
	var control_value_accessor_1 = __webpack_require__(44);
	exports.DEFAULT_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return DefaultValueAccessor; }),
	    multi: true
	};
	var DefaultValueAccessor = (function () {
	    function DefaultValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    DefaultValueAccessor.prototype.writeValue = function (value) {
	        var normalizedValue = lang_1.isBlank(value) ? '' : value;
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	    };
	    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @nocollapse */
	    DefaultValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                    // TODO: vsavkin replace the above selector with the one below it once
	                    // https://github.com/angular/angular/issues/3011 is implemented
	                    // selector: '[ngControl],[ngModel],[ngFormControl]',
	                    host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                    providers: [exports.DEFAULT_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    DefaultValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return DefaultValueAccessor;
	}());
	exports.DefaultValueAccessor = DefaultValueAccessor;
	//# sourceMappingURL=default_value_accessor.js.map

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var validators_1 = __webpack_require__(45);
	var abstract_form_group_directive_1 = __webpack_require__(105);
	var control_container_1 = __webpack_require__(64);
	var ng_form_1 = __webpack_require__(106);
	var template_driven_errors_1 = __webpack_require__(365);
	exports.modelGroupProvider = {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return NgModelGroup; })
	};
	var NgModelGroup = (function (_super) {
	    __extends(NgModelGroup, _super);
	    function NgModelGroup(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    /** @internal */
	    NgModelGroup.prototype._checkParentType = function () {
	        if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof ng_form_1.NgForm)) {
	            template_driven_errors_1.TemplateDrivenErrors.modelGroupParentException();
	        }
	    };
	    /** @nocollapse */
	    NgModelGroup.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[ngModelGroup]', providers: [exports.modelGroupProvider], exportAs: 'ngModelGroup' },] },
	    ];
	    /** @nocollapse */
	    NgModelGroup.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    NgModelGroup.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['ngModelGroup',] },],
	    };
	    return NgModelGroup;
	}(abstract_form_group_directive_1.AbstractFormGroupDirective));
	exports.NgModelGroup = NgModelGroup;
	//# sourceMappingURL=ng_model_group.js.map

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(38);
	var exceptions_1 = __webpack_require__(80);
	var lang_1 = __webpack_require__(25);
	var control_value_accessor_1 = __webpack_require__(44);
	var ng_control_1 = __webpack_require__(79);
	exports.RADIO_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return RadioControlValueAccessor; }),
	    multi: true
	};
	var RadioControlRegistry = (function () {
	    function RadioControlRegistry() {
	        this._accessors = [];
	    }
	    RadioControlRegistry.prototype.add = function (control, accessor) {
	        this._accessors.push([control, accessor]);
	    };
	    RadioControlRegistry.prototype.remove = function (accessor) {
	        var indexToRemove = -1;
	        for (var i = 0; i < this._accessors.length; ++i) {
	            if (this._accessors[i][1] === accessor) {
	                indexToRemove = i;
	            }
	        }
	        collection_1.ListWrapper.removeAt(this._accessors, indexToRemove);
	    };
	    RadioControlRegistry.prototype.select = function (accessor) {
	        var _this = this;
	        this._accessors.forEach(function (c) {
	            if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                c[1].fireUncheck(accessor.value);
	            }
	        });
	    };
	    RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	        if (!controlPair[0].control)
	            return false;
	        return controlPair[0].control.root === accessor._control.control.root &&
	            controlPair[1].name === accessor.name;
	    };
	    /** @nocollapse */
	    RadioControlRegistry.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return RadioControlRegistry;
	}());
	exports.RadioControlRegistry = RadioControlRegistry;
	var RadioControlValueAccessor = (function () {
	    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this._registry = _registry;
	        this._injector = _injector;
	        this.onChange = function () { };
	        this.onTouched = function () { };
	    }
	    RadioControlValueAccessor.prototype.ngOnInit = function () {
	        this._control = this._injector.get(ng_control_1.NgControl);
	        this._checkName();
	        this._registry.add(this._control, this);
	    };
	    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	    RadioControlValueAccessor.prototype.writeValue = function (value) {
	        this._state = value === this.value;
	        if (lang_1.isPresent(value)) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        }
	    };
	    RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this._fn = fn;
	        this.onChange = function () {
	            fn(_this.value);
	            _this._registry.select(_this);
	        };
	    };
	    RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    RadioControlValueAccessor.prototype._checkName = function () {
	        if (this.name && this.formControlName && this.name !== this.formControlName) {
	            this._throwNameError();
	        }
	        if (!this.name && this.formControlName)
	            this.name = this.formControlName;
	    };
	    RadioControlValueAccessor.prototype._throwNameError = function () {
	        throw new exceptions_1.BaseException("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	    };
	    /** @nocollapse */
	    RadioControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                    host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                    providers: [exports.RADIO_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    RadioControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	        { type: RadioControlRegistry, },
	        { type: core_1.Injector, },
	    ];
	    /** @nocollapse */
	    RadioControlValueAccessor.propDecorators = {
	        'name': [{ type: core_1.Input },],
	        'formControlName': [{ type: core_1.Input },],
	        'value': [{ type: core_1.Input },],
	    };
	    return RadioControlValueAccessor;
	}());
	exports.RadioControlValueAccessor = RadioControlValueAccessor;
	//# sourceMappingURL=radio_control_value_accessor.js.map

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(38);
	var lang_1 = __webpack_require__(25);
	var control_value_accessor_1 = __webpack_require__(44);
	exports.SELECT_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return SelectControlValueAccessor; }),
	    multi: true
	};
	function _buildValueString(id, value) {
	    if (lang_1.isBlank(id))
	        return "" + value;
	    if (!lang_1.isPrimitive(value))
	        value = 'Object';
	    return lang_1.StringWrapper.slice(id + ": " + value, 0, 50);
	}
	function _extractId(valueString) {
	    return valueString.split(':')[0];
	}
	var SelectControlValueAccessor = (function () {
	    function SelectControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        /** @internal */
	        this._optionMap = new Map();
	        /** @internal */
	        this._idCounter = 0;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    SelectControlValueAccessor.prototype.writeValue = function (value) {
	        this.value = value;
	        var valueString = _buildValueString(this._getOptionId(value), value);
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	    };
	    SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this.onChange = function (valueString) {
	            _this.value = valueString;
	            fn(_this._getOptionValue(valueString));
	        };
	    };
	    SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @internal */
	    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	    /** @internal */
	    SelectControlValueAccessor.prototype._getOptionId = function (value) {
	        for (var _i = 0, _a = collection_1.MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	            var id = _a[_i];
	            if (lang_1.looseIdentical(this._optionMap.get(id), value))
	                return id;
	        }
	        return null;
	    };
	    /** @internal */
	    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	        var value = this._optionMap.get(_extractId(valueString));
	        return lang_1.isPresent(value) ? value : valueString;
	    };
	    /** @nocollapse */
	    SelectControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                    host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                    providers: [exports.SELECT_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    SelectControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return SelectControlValueAccessor;
	}());
	exports.SelectControlValueAccessor = SelectControlValueAccessor;
	var NgSelectOption = (function () {
	    function NgSelectOption(_element, _renderer, _select) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._select = _select;
	        if (lang_1.isPresent(this._select))
	            this.id = this._select._registerOption();
	    }
	    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	        set: function (value) {
	            if (this._select == null)
	                return;
	            this._select._optionMap.set(this.id, value);
	            this._setElementValue(_buildValueString(this.id, value));
	            this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgSelectOption.prototype, "value", {
	        set: function (value) {
	            this._setElementValue(value);
	            if (lang_1.isPresent(this._select))
	                this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    NgSelectOption.prototype._setElementValue = function (value) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	    };
	    NgSelectOption.prototype.ngOnDestroy = function () {
	        if (lang_1.isPresent(this._select)) {
	            this._select._optionMap.delete(this.id);
	            this._select.writeValue(this._select.value);
	        }
	    };
	    /** @nocollapse */
	    NgSelectOption.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'option' },] },
	    ];
	    /** @nocollapse */
	    NgSelectOption.ctorParameters = [
	        { type: core_1.ElementRef, },
	        { type: core_1.Renderer, },
	        { type: SelectControlValueAccessor, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	    ];
	    /** @nocollapse */
	    NgSelectOption.propDecorators = {
	        'ngValue': [{ type: core_1.Input, args: ['ngValue',] },],
	        'value': [{ type: core_1.Input, args: ['value',] },],
	    };
	    return NgSelectOption;
	}());
	exports.NgSelectOption = NgSelectOption;
	//# sourceMappingURL=select_control_value_accessor.js.map

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(38);
	var lang_1 = __webpack_require__(25);
	var control_value_accessor_1 = __webpack_require__(44);
	exports.SELECT_MULTIPLE_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	    multi: true
	};
	function _buildValueString(id, value) {
	    if (lang_1.isBlank(id))
	        return "" + value;
	    if (lang_1.isString(value))
	        value = "'" + value + "'";
	    if (!lang_1.isPrimitive(value))
	        value = 'Object';
	    return lang_1.StringWrapper.slice(id + ": " + value, 0, 50);
	}
	function _extractId(valueString) {
	    return valueString.split(':')[0];
	}
	/** Mock interface for HTMLCollection */
	var HTMLCollection = (function () {
	    function HTMLCollection() {
	    }
	    return HTMLCollection;
	}());
	var SelectMultipleControlValueAccessor = (function () {
	    function SelectMultipleControlValueAccessor() {
	        /** @internal */
	        this._optionMap = new Map();
	        /** @internal */
	        this._idCounter = 0;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	        var _this = this;
	        this.value = value;
	        if (value == null)
	            return;
	        var values = value;
	        // convert values to ids
	        var ids = values.map(function (v) { return _this._getOptionId(v); });
	        this._optionMap.forEach(function (opt, o) { opt._setSelected(ids.indexOf(o.toString()) > -1); });
	    };
	    SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this.onChange = function (_) {
	            var selected = [];
	            if (_.hasOwnProperty('selectedOptions')) {
	                var options = _.selectedOptions;
	                for (var i = 0; i < options.length; i++) {
	                    var opt = options.item(i);
	                    var val = _this._getOptionValue(opt.value);
	                    selected.push(val);
	                }
	            }
	            else {
	                var options = _.options;
	                for (var i = 0; i < options.length; i++) {
	                    var opt = options.item(i);
	                    if (opt.selected) {
	                        var val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	            }
	            fn(selected);
	        };
	    };
	    SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	        var id = (this._idCounter++).toString();
	        this._optionMap.set(id, value);
	        return id;
	    };
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	        for (var _i = 0, _a = collection_1.MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	            var id = _a[_i];
	            if (lang_1.looseIdentical(this._optionMap.get(id)._value, value))
	                return id;
	        }
	        return null;
	    };
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	        var opt = this._optionMap.get(_extractId(valueString));
	        return lang_1.isPresent(opt) ? opt._value : valueString;
	    };
	    /** @nocollapse */
	    SelectMultipleControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                    host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                    providers: [exports.SELECT_MULTIPLE_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    SelectMultipleControlValueAccessor.ctorParameters = [];
	    return SelectMultipleControlValueAccessor;
	}());
	exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	var NgSelectMultipleOption = (function () {
	    function NgSelectMultipleOption(_element, _renderer, _select) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._select = _select;
	        if (lang_1.isPresent(this._select)) {
	            this.id = this._select._registerOption(this);
	        }
	    }
	    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	        set: function (value) {
	            if (this._select == null)
	                return;
	            this._value = value;
	            this._setElementValue(_buildValueString(this.id, value));
	            this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	        set: function (value) {
	            if (lang_1.isPresent(this._select)) {
	                this._value = value;
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            }
	            else {
	                this._setElementValue(value);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    NgSelectMultipleOption.prototype._setElementValue = function (value) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	    };
	    /** @internal */
	    NgSelectMultipleOption.prototype._setSelected = function (selected) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	    };
	    NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	        if (lang_1.isPresent(this._select)) {
	            this._select._optionMap.delete(this.id);
	            this._select.writeValue(this._select.value);
	        }
	    };
	    /** @nocollapse */
	    NgSelectMultipleOption.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'option' },] },
	    ];
	    /** @nocollapse */
	    NgSelectMultipleOption.ctorParameters = [
	        { type: core_1.ElementRef, },
	        { type: core_1.Renderer, },
	        { type: SelectMultipleControlValueAccessor, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	    ];
	    /** @nocollapse */
	    NgSelectMultipleOption.propDecorators = {
	        'ngValue': [{ type: core_1.Input, args: ['ngValue',] },],
	        'value': [{ type: core_1.Input, args: ['value',] },],
	    };
	    return NgSelectMultipleOption;
	}());
	exports.NgSelectMultipleOption = NgSelectMultipleOption;
	exports.SELECT_DIRECTIVES = [SelectMultipleControlValueAccessor, NgSelectMultipleOption];
	//# sourceMappingURL=select_multiple_control_value_accessor.js.map

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var PromiseObservable_1 = __webpack_require__(185);
	var shared_1 = __webpack_require__(65);
	var async_1 = __webpack_require__(96);
	var collection_1 = __webpack_require__(38);
	var exceptions_1 = __webpack_require__(80);
	var lang_1 = __webpack_require__(25);
	/**
	 * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	 */
	exports.VALID = 'VALID';
	/**
	 * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	 */
	exports.INVALID = 'INVALID';
	/**
	 * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	 * errors are not yet available for the input value.
	 */
	exports.PENDING = 'PENDING';
	function isControl(control) {
	    return control instanceof AbstractControl;
	}
	exports.isControl = isControl;
	function _find(control, path, delimiter) {
	    if (lang_1.isBlank(path))
	        return null;
	    if (!(path instanceof Array)) {
	        path = path.split(delimiter);
	    }
	    if (path instanceof Array && collection_1.ListWrapper.isEmpty(path))
	        return null;
	    return path.reduce(function (v, name) {
	        if (v instanceof FormGroup) {
	            return lang_1.isPresent(v.controls[name]) ? v.controls[name] : null;
	        }
	        else if (v instanceof FormArray) {
	            var index = name;
	            return lang_1.isPresent(v.at(index)) ? v.at(index) : null;
	        }
	        else {
	            return null;
	        }
	    }, control);
	}
	function toObservable(r) {
	    return lang_1.isPromise(r) ? PromiseObservable_1.PromiseObservable.create(r) : r;
	}
	function coerceToValidator(validator) {
	    return Array.isArray(validator) ? shared_1.composeValidators(validator) : validator;
	}
	function coerceToAsyncValidator(asyncValidator) {
	    return Array.isArray(asyncValidator) ? shared_1.composeAsyncValidators(asyncValidator) : asyncValidator;
	}
	/**
	 * @experimental
	 */
	var AbstractControl = (function () {
	    function AbstractControl(validator, asyncValidator) {
	        this.validator = validator;
	        this.asyncValidator = asyncValidator;
	        this._pristine = true;
	        this._touched = false;
	    }
	    Object.defineProperty(AbstractControl.prototype, "value", {
	        get: function () { return this._value; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "status", {
	        get: function () { return this._status; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valid", {
	        get: function () { return this._status === exports.VALID; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "invalid", {
	        get: function () { return this._status === exports.INVALID; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "errors", {
	        /**
	         * Returns the errors of this control.
	         */
	        get: function () { return this._errors; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pristine", {
	        get: function () { return this._pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "dirty", {
	        get: function () { return !this.pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "touched", {
	        get: function () { return this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "untouched", {
	        get: function () { return !this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	        get: function () { return this._valueChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	        get: function () { return this._statusChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pending", {
	        get: function () { return this._status == exports.PENDING; },
	        enumerable: true,
	        configurable: true
	    });
	    AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	        this.asyncValidator = coerceToAsyncValidator(newValidator);
	    };
	    AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	    AbstractControl.prototype.setValidators = function (newValidator) {
	        this.validator = coerceToValidator(newValidator);
	    };
	    AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	    AbstractControl.prototype.markAsTouched = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._touched = true;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsTouched({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsDirty = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._pristine = false;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsDirty({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsPristine = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._pristine = true;
	        this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent._updatePristine({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsUntouched = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._touched = false;
	        this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent._updateTouched({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsPending = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._status = exports.PENDING;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsPending({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	    AbstractControl.prototype.updateValueAndValidity = function (_a) {
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        emitEvent = lang_1.isPresent(emitEvent) ? emitEvent : true;
	        this._updateValue();
	        this._errors = this._runValidator();
	        this._status = this._calculateStatus();
	        if (this._status == exports.VALID || this._status == exports.PENDING) {
	            this._runAsyncValidator(emitEvent);
	        }
	        if (emitEvent) {
	            this._valueChanges.emit(this._value);
	            this._statusChanges.emit(this._status);
	        }
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        }
	    };
	    AbstractControl.prototype._runValidator = function () {
	        return lang_1.isPresent(this.validator) ? this.validator(this) : null;
	    };
	    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	        var _this = this;
	        if (lang_1.isPresent(this.asyncValidator)) {
	            this._status = exports.PENDING;
	            this._cancelExistingSubscription();
	            var obs = toObservable(this.asyncValidator(this));
	            this._asyncValidationSubscription = obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	        }
	    };
	    AbstractControl.prototype._cancelExistingSubscription = function () {
	        if (lang_1.isPresent(this._asyncValidationSubscription)) {
	            this._asyncValidationSubscription.unsubscribe();
	        }
	    };
	    /**
	     * Sets errors on a form control.
	     *
	     * This is used when validations are run not automatically, but manually by the user.
	     *
	     * Calling `setErrors` will also update the validity of the parent control.
	     *
	     * ## Usage
	     *
	     * ```
	     * var login = new FormControl("someLogin");
	     * login.setErrors({
	     *   "notUnique": true
	     * });
	     *
	     * expect(login.valid).toEqual(false);
	     * expect(login.errors).toEqual({"notUnique": true});
	     *
	     * login.updateValue("someOtherLogin");
	     *
	     * expect(login.valid).toEqual(true);
	     * ```
	     */
	    AbstractControl.prototype.setErrors = function (errors, _a) {
	        var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	        emitEvent = lang_1.isPresent(emitEvent) ? emitEvent : true;
	        this._errors = errors;
	        this._updateControlsErrors(emitEvent);
	    };
	    /**
	     * @deprecated - use get() instead
	     */
	    AbstractControl.prototype.find = function (path) { return _find(this, path, '/'); };
	    AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	    AbstractControl.prototype.getError = function (errorCode, path) {
	        if (path === void 0) { path = null; }
	        var control = lang_1.isPresent(path) && !collection_1.ListWrapper.isEmpty(path) ? this.find(path) : this;
	        if (lang_1.isPresent(control) && lang_1.isPresent(control._errors)) {
	            return collection_1.StringMapWrapper.get(control._errors, errorCode);
	        }
	        else {
	            return null;
	        }
	    };
	    AbstractControl.prototype.hasError = function (errorCode, path) {
	        if (path === void 0) { path = null; }
	        return lang_1.isPresent(this.getError(errorCode, path));
	    };
	    Object.defineProperty(AbstractControl.prototype, "root", {
	        get: function () {
	            var x = this;
	            while (lang_1.isPresent(x._parent)) {
	                x = x._parent;
	            }
	            return x;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	        this._status = this._calculateStatus();
	        if (emitEvent) {
	            this._statusChanges.emit(this._status);
	        }
	        if (lang_1.isPresent(this._parent)) {
	            this._parent._updateControlsErrors(emitEvent);
	        }
	    };
	    /** @internal */
	    AbstractControl.prototype._initObservables = function () {
	        this._valueChanges = new async_1.EventEmitter();
	        this._statusChanges = new async_1.EventEmitter();
	    };
	    AbstractControl.prototype._calculateStatus = function () {
	        if (lang_1.isPresent(this._errors))
	            return exports.INVALID;
	        if (this._anyControlsHaveStatus(exports.PENDING))
	            return exports.PENDING;
	        if (this._anyControlsHaveStatus(exports.INVALID))
	            return exports.INVALID;
	        return exports.VALID;
	    };
	    /** @internal */
	    AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	        return this._anyControls(function (control) { return control.status == status; });
	    };
	    /** @internal */
	    AbstractControl.prototype._anyControlsDirty = function () {
	        return this._anyControls(function (control) { return control.dirty; });
	    };
	    /** @internal */
	    AbstractControl.prototype._anyControlsTouched = function () {
	        return this._anyControls(function (control) { return control.touched; });
	    };
	    /** @internal */
	    AbstractControl.prototype._updatePristine = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._pristine = !this._anyControlsDirty();
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent._updatePristine({ onlySelf: onlySelf });
	        }
	    };
	    /** @internal */
	    AbstractControl.prototype._updateTouched = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._touched = this._anyControlsTouched();
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent._updateTouched({ onlySelf: onlySelf });
	        }
	    };
	    return AbstractControl;
	}());
	exports.AbstractControl = AbstractControl;
	/**
	 * Defines a part of a form that cannot be divided into other controls. `FormControl`s have values
	 * and
	 * validation state, which is determined by an optional validation function.
	 *
	 * `FormControl` is one of the three fundamental building blocks used to define forms in Angular,
	 * along
	 * with {@link FormGroup} and {@link FormArray}.
	 *
	 * ## Usage
	 *
	 * By default, a `FormControl` is created for every `<input>` or other form component.
	 * With {@link FormControlDirective} or {@link FormGroupDirective} an existing {@link FormControl}
	 * can be bound to a DOM element instead. This `FormControl` can be configured with a custom
	 * validation function.
	 *
	 * @experimental
	 */
	var FormControl = (function (_super) {
	    __extends(FormControl, _super);
	    function FormControl(value, validator, asyncValidator) {
	        if (value === void 0) { value = null; }
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	        /** @internal */
	        this._onChange = [];
	        this._value = value;
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        this._initObservables();
	    }
	    /**
	     * Set the value of the form control to `value`.
	     *
	     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	     * and not its parent component. If `emitEvent` is `true`, this change will cause a
	     * `valueChanges` event on the `FormControl` to be emitted. Both of these options default to
	     * `false`.
	     *
	     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	     * specified.
	     *
	     * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	     * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	     */
	    FormControl.prototype.setValue = function (value, _a) {
	        var _this = this;
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	        emitModelToViewChange = lang_1.isPresent(emitModelToViewChange) ? emitModelToViewChange : true;
	        emitViewToModelChange = lang_1.isPresent(emitViewToModelChange) ? emitViewToModelChange : true;
	        this._value = value;
	        if (this._onChange.length && emitModelToViewChange) {
	            this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange); });
	        }
	        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	    };
	    /**
	     * This function is functionally the same as updateValue() at this level.  It exists for
	     * symmetry with patchValue() on FormGroups and FormArrays, where it does behave differently.
	     */
	    FormControl.prototype.patchValue = function (value, options) {
	        if (options === void 0) { options = {}; }
	        this.setValue(value, options);
	    };
	    /**
	     * @deprecated Please use setValue() instead.
	     */
	    FormControl.prototype.updateValue = function (value, options) {
	        if (options === void 0) { options = {}; }
	        this.setValue(value, options);
	    };
	    FormControl.prototype.reset = function (value, _a) {
	        if (value === void 0) { value = null; }
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this.markAsPristine({ onlySelf: onlySelf });
	        this.markAsUntouched({ onlySelf: onlySelf });
	        this.setValue(value, { onlySelf: onlySelf });
	    };
	    /**
	     * @internal
	     */
	    FormControl.prototype._updateValue = function () { };
	    /**
	     * @internal
	     */
	    FormControl.prototype._anyControls = function (condition) { return false; };
	    /**
	     * Register a listener for change events.
	     */
	    FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	    /**
	     * @internal
	     */
	    FormControl.prototype._forEachChild = function (cb) { };
	    return FormControl;
	}(AbstractControl));
	exports.FormControl = FormControl;
	/**
	 * Defines a part of a form, of fixed length, that can contain other controls.
	 *
	 * A `FormGroup` aggregates the values of each {@link FormControl} in the group.
	 * The status of a `FormGroup` depends on the status of its children.
	 * If one of the controls in a group is invalid, the entire group is invalid.
	 * Similarly, if a control changes its value, the entire group changes as well.
	 *
	 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {@link FormControl} and {@link FormArray}. {@link FormArray} can also contain other
	 * controls, but is of variable length.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
	 *
	 * @experimental
	 */
	var FormGroup = (function (_super) {
	    __extends(FormGroup, _super);
	    function FormGroup(controls, optionals, validator, asyncValidator) {
	        if (optionals === void 0) { optionals = null; }
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, validator, asyncValidator);
	        this.controls = controls;
	        this._optionals = lang_1.isPresent(optionals) ? optionals : {};
	        this._initObservables();
	        this._setParentForControls();
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	    }
	    /**
	     * Register a control with the group's list of controls.
	     */
	    FormGroup.prototype.registerControl = function (name, control) {
	        if (this.controls[name])
	            return this.controls[name];
	        this.controls[name] = control;
	        control.setParent(this);
	        return control;
	    };
	    /**
	     * Add a control to this group.
	     */
	    FormGroup.prototype.addControl = function (name, control) {
	        this.registerControl(name, control);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Remove a control from this group.
	     */
	    FormGroup.prototype.removeControl = function (name) {
	        collection_1.StringMapWrapper.delete(this.controls, name);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Mark the named control as non-optional.
	     */
	    FormGroup.prototype.include = function (controlName) {
	        collection_1.StringMapWrapper.set(this._optionals, controlName, true);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Mark the named control as optional.
	     */
	    FormGroup.prototype.exclude = function (controlName) {
	        collection_1.StringMapWrapper.set(this._optionals, controlName, false);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Check whether there is a control with the given name in the group.
	     */
	    FormGroup.prototype.contains = function (controlName) {
	        var c = collection_1.StringMapWrapper.contains(this.controls, controlName);
	        return c && this._included(controlName);
	    };
	    FormGroup.prototype.setValue = function (value, _a) {
	        var _this = this;
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._checkAllValuesPresent(value);
	        collection_1.StringMapWrapper.forEach(value, function (newValue, name) {
	            _this._throwIfControlMissing(name);
	            _this.controls[name].setValue(newValue, { onlySelf: true });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	    };
	    FormGroup.prototype.patchValue = function (value, _a) {
	        var _this = this;
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        collection_1.StringMapWrapper.forEach(value, function (newValue, name) {
	            if (_this.controls[name]) {
	                _this.controls[name].patchValue(newValue, { onlySelf: true });
	            }
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	    };
	    FormGroup.prototype.reset = function (value, _a) {
	        if (value === void 0) { value = {}; }
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._forEachChild(function (control, name) {
	            control.reset(value[name], { onlySelf: true });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	        this._updatePristine({ onlySelf: onlySelf });
	        this._updateTouched({ onlySelf: onlySelf });
	    };
	    /** @internal */
	    FormGroup.prototype._throwIfControlMissing = function (name) {
	        if (!Object.keys(this.controls).length) {
	            throw new exceptions_1.BaseException("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	        }
	        if (!this.controls[name]) {
	            throw new exceptions_1.BaseException("Cannot find form control with name: " + name + ".");
	        }
	    };
	    /** @internal */
	    FormGroup.prototype._forEachChild = function (cb) {
	        collection_1.StringMapWrapper.forEach(this.controls, cb);
	    };
	    /** @internal */
	    FormGroup.prototype._setParentForControls = function () {
	        var _this = this;
	        this._forEachChild(function (control, name) { control.setParent(_this); });
	    };
	    /** @internal */
	    FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	    /** @internal */
	    FormGroup.prototype._anyControls = function (condition) {
	        var _this = this;
	        var res = false;
	        this._forEachChild(function (control, name) {
	            res = res || (_this.contains(name) && condition(control));
	        });
	        return res;
	    };
	    /** @internal */
	    FormGroup.prototype._reduceValue = function () {
	        return this._reduceChildren({}, function (acc, control, name) {
	            acc[name] = control.value;
	            return acc;
	        });
	    };
	    /** @internal */
	    FormGroup.prototype._reduceChildren = function (initValue, fn) {
	        var _this = this;
	        var res = initValue;
	        this._forEachChild(function (control, name) {
	            if (_this._included(name)) {
	                res = fn(res, control, name);
	            }
	        });
	        return res;
	    };
	    /** @internal */
	    FormGroup.prototype._included = function (controlName) {
	        var isOptional = collection_1.StringMapWrapper.contains(this._optionals, controlName);
	        return !isOptional || collection_1.StringMapWrapper.get(this._optionals, controlName);
	    };
	    /** @internal */
	    FormGroup.prototype._checkAllValuesPresent = function (value) {
	        this._forEachChild(function (control, name) {
	            if (value[name] === undefined) {
	                throw new exceptions_1.BaseException("Must supply a value for form control with name: '" + name + "'.");
	            }
	        });
	    };
	    return FormGroup;
	}(AbstractControl));
	exports.FormGroup = FormGroup;
	/**
	 * Defines a part of a form, of variable length, that can contain other controls.
	 *
	 * A `FormArray` aggregates the values of each {@link FormControl} in the group.
	 * The status of a `FormArray` depends on the status of its children.
	 * If one of the controls in a group is invalid, the entire array is invalid.
	 * Similarly, if a control changes its value, the entire array changes as well.
	 *
	 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {@link FormControl} and {@link FormGroup}. {@link FormGroup} can also contain
	 * other controls, but is of fixed length.
	 *
	 * ## Adding or removing controls
	 *
	 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	 * the `FormArray` directly, as that will result in strange and unexpected behavior such
	 * as broken change detection.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
	 *
	 * @experimental
	 */
	var FormArray = (function (_super) {
	    __extends(FormArray, _super);
	    function FormArray(controls, validator, asyncValidator) {
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, validator, asyncValidator);
	        this.controls = controls;
	        this._initObservables();
	        this._setParentForControls();
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	    }
	    /**
	     * Get the {@link AbstractControl} at the given `index` in the array.
	     */
	    FormArray.prototype.at = function (index) { return this.controls[index]; };
	    /**
	     * Insert a new {@link AbstractControl} at the end of the array.
	     */
	    FormArray.prototype.push = function (control) {
	        this.controls.push(control);
	        control.setParent(this);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Insert a new {@link AbstractControl} at the given `index` in the array.
	     */
	    FormArray.prototype.insert = function (index, control) {
	        collection_1.ListWrapper.insert(this.controls, index, control);
	        control.setParent(this);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Remove the control at the given `index` in the array.
	     */
	    FormArray.prototype.removeAt = function (index) {
	        collection_1.ListWrapper.removeAt(this.controls, index);
	        this.updateValueAndValidity();
	    };
	    Object.defineProperty(FormArray.prototype, "length", {
	        /**
	         * Length of the control array.
	         */
	        get: function () { return this.controls.length; },
	        enumerable: true,
	        configurable: true
	    });
	    FormArray.prototype.setValue = function (value, _a) {
	        var _this = this;
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._checkAllValuesPresent(value);
	        value.forEach(function (newValue, index) {
	            _this._throwIfControlMissing(index);
	            _this.at(index).setValue(newValue, { onlySelf: true });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	    };
	    FormArray.prototype.patchValue = function (value, _a) {
	        var _this = this;
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        value.forEach(function (newValue, index) {
	            if (_this.at(index)) {
	                _this.at(index).patchValue(newValue, { onlySelf: true });
	            }
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	    };
	    FormArray.prototype.reset = function (value, _a) {
	        if (value === void 0) { value = []; }
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._forEachChild(function (control, index) {
	            control.reset(value[index], { onlySelf: true });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf });
	        this._updatePristine({ onlySelf: onlySelf });
	        this._updateTouched({ onlySelf: onlySelf });
	    };
	    /** @internal */
	    FormArray.prototype._throwIfControlMissing = function (index) {
	        if (!this.controls.length) {
	            throw new exceptions_1.BaseException("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	        }
	        if (!this.at(index)) {
	            throw new exceptions_1.BaseException("Cannot find form control at index " + index);
	        }
	    };
	    /** @internal */
	    FormArray.prototype._forEachChild = function (cb) {
	        this.controls.forEach(function (control, index) { cb(control, index); });
	    };
	    /** @internal */
	    FormArray.prototype._updateValue = function () { this._value = this.controls.map(function (control) { return control.value; }); };
	    /** @internal */
	    FormArray.prototype._anyControls = function (condition) {
	        return this.controls.some(function (control) { return condition(control); });
	    };
	    /** @internal */
	    FormArray.prototype._setParentForControls = function () {
	        var _this = this;
	        this._forEachChild(function (control) { control.setParent(_this); });
	    };
	    /** @internal */
	    FormArray.prototype._checkAllValuesPresent = function (value) {
	        this._forEachChild(function (control, i) {
	            if (value[i] === undefined) {
	                throw new exceptions_1.BaseException("Must supply a value for form control at index: " + i + ".");
	            }
	        });
	    };
	    return FormArray;
	}(AbstractControl));
	exports.FormArray = FormArray;
	//# sourceMappingURL=model.js.map

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(55);
	__webpack_require__(184);
	var Github = (function () {
	    function Github(http) {
	        this.http = http;
	    }
	    Github.prototype.getOrg = function (org) {
	        return this.makeRequest("orgs/" + org);
	    };
	    Github.prototype.getReposForOrg = function (org) {
	        return this.makeRequest("orgs/" + org + "/repos");
	    };
	    Github.prototype.getRepoForOrg = function (org, repo) {
	        return this.makeRequest("repos/" + org + "/" + repo);
	    };
	    Github.prototype.makeRequest = function (path) {
	        var params = new http_1.URLSearchParams();
	        params.set('per_page', '100');
	        var url = "https://api.github.com/" + path;
	        return this.http.get(url, { search: params })
	            .map(function (res) { return res.json(); });
	    };
	    Github = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], Github);
	    return Github;
	    var _a;
	}());
	exports.Github = Github;
	

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var exceptions_1 = __webpack_require__(80);
	var lang_1 = __webpack_require__(25);
	/**
	 * Base class for control directives.
	 *
	 * Only used internally in the forms module.
	 *
	 * @experimental
	 */
	var AbstractControlDirective = (function () {
	    function AbstractControlDirective() {
	    }
	    Object.defineProperty(AbstractControlDirective.prototype, "control", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "value", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.value : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.valid : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.invalid : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.pending : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.errors : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.pristine : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.dirty : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.touched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.untouched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.statusChanges : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.valueChanges : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "path", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    AbstractControlDirective.prototype.reset = function (value) {
	        if (value === void 0) { value = undefined; }
	        if (lang_1.isPresent(this.control))
	            this.control.reset(value);
	    };
	    return AbstractControlDirective;
	}());
	exports.AbstractControlDirective = AbstractControlDirective;
	//# sourceMappingURL=abstract_control_directive.js.map

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(25);
	var ng_control_1 = __webpack_require__(79);
	var NgControlStatus = (function () {
	    function NgControlStatus(cd) {
	        this._cd = cd;
	    }
	    Object.defineProperty(NgControlStatus.prototype, "ngClassUntouched", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.untouched : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassTouched", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.touched : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassPristine", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.pristine : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassDirty", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.dirty : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassValid", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.valid : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassInvalid", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? !this._cd.control.valid : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @nocollapse */
	    NgControlStatus.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[formControlName],[ngModel],[formControl]',
	                    host: {
	                        '[class.ng-untouched]': 'ngClassUntouched',
	                        '[class.ng-touched]': 'ngClassTouched',
	                        '[class.ng-pristine]': 'ngClassPristine',
	                        '[class.ng-dirty]': 'ngClassDirty',
	                        '[class.ng-valid]': 'ngClassValid',
	                        '[class.ng-invalid]': 'ngClassInvalid'
	                    }
	                },] },
	    ];
	    /** @nocollapse */
	    NgControlStatus.ctorParameters = [
	        { type: ng_control_1.NgControl, decorators: [{ type: core_1.Self },] },
	    ];
	    return NgControlStatus;
	}());
	exports.NgControlStatus = NgControlStatus;
	//# sourceMappingURL=ng_control_status.js.map

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(96);
	var model_1 = __webpack_require__(158);
	var validators_1 = __webpack_require__(45);
	var abstract_form_group_directive_1 = __webpack_require__(105);
	var control_container_1 = __webpack_require__(64);
	var control_value_accessor_1 = __webpack_require__(44);
	var ng_control_1 = __webpack_require__(79);
	var ng_form_1 = __webpack_require__(106);
	var ng_model_group_1 = __webpack_require__(154);
	var shared_1 = __webpack_require__(65);
	var template_driven_errors_1 = __webpack_require__(365);
	exports.formControlBinding = {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return NgModel; })
	};
	var resolvedPromise = Promise.resolve(null);
	var NgModel = (function (_super) {
	    __extends(NgModel, _super);
	    function NgModel(_parent, _validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._parent = _parent;
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        /** @internal */
	        this._control = new model_1.FormControl();
	        /** @internal */
	        this._registered = false;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    NgModel.prototype.ngOnChanges = function (changes) {
	        this._checkForErrors();
	        if (!this._registered)
	            this._setUpControl();
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this._updateValue(this.model);
	            this.viewModel = this.model;
	        }
	    };
	    NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	    Object.defineProperty(NgModel.prototype, "control", {
	        get: function () { return this._control; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "path", {
	        get: function () {
	            return this._parent ? shared_1.controlPath(this.name, this._parent) : [this.name];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "formDirective", {
	        get: function () { return this._parent ? this._parent.formDirective : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgModel.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    NgModel.prototype._setUpControl = function () {
	        this._isStandalone() ? this._setUpStandalone() :
	            this.formDirective.addControl(this);
	        this._registered = true;
	    };
	    NgModel.prototype._isStandalone = function () {
	        return !this._parent || (this.options && this.options.standalone);
	    };
	    NgModel.prototype._setUpStandalone = function () {
	        shared_1.setUpControl(this._control, this);
	        this._control.updateValueAndValidity({ emitEvent: false });
	    };
	    NgModel.prototype._checkForErrors = function () {
	        if (!this._isStandalone()) {
	            this._checkParentType();
	        }
	        this._checkName();
	    };
	    NgModel.prototype._checkParentType = function () {
	        if (!(this._parent instanceof ng_model_group_1.NgModelGroup) &&
	            this._parent instanceof abstract_form_group_directive_1.AbstractFormGroupDirective) {
	            template_driven_errors_1.TemplateDrivenErrors.formGroupNameException();
	        }
	        else if (!(this._parent instanceof ng_model_group_1.NgModelGroup) && !(this._parent instanceof ng_form_1.NgForm)) {
	            template_driven_errors_1.TemplateDrivenErrors.modelParentException();
	        }
	    };
	    NgModel.prototype._checkName = function () {
	        if (this.options && this.options.name)
	            this.name = this.options.name;
	        if (!this._isStandalone() && !this.name) {
	            template_driven_errors_1.TemplateDrivenErrors.missingNameException();
	        }
	    };
	    NgModel.prototype._updateValue = function (value) {
	        var _this = this;
	        resolvedPromise.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	    };
	    /** @nocollapse */
	    NgModel.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[ngModel]:not([formControlName]):not([formControl])',
	                    providers: [exports.formControlBinding],
	                    exportAs: 'ngModel'
	                },] },
	    ];
	    /** @nocollapse */
	    NgModel.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    NgModel.propDecorators = {
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'name': [{ type: core_1.Input },],
	        'options': [{ type: core_1.Input, args: ['ngModelOptions',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return NgModel;
	}(ng_control_1.NgControl));
	exports.NgModel = NgModel;
	//# sourceMappingURL=ng_model.js.map

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(25);
	var control_value_accessor_1 = __webpack_require__(44);
	exports.NUMBER_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return NumberValueAccessor; }),
	    multi: true
	};
	var NumberValueAccessor = (function () {
	    function NumberValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    NumberValueAccessor.prototype.writeValue = function (value) {
	        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	        var normalizedValue = lang_1.isBlank(value) ? '' : value;
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	    };
	    NumberValueAccessor.prototype.registerOnChange = function (fn) {
	        this.onChange = function (value) { fn(value == '' ? null : lang_1.NumberWrapper.parseFloat(value)); };
	    };
	    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @nocollapse */
	    NumberValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                    host: {
	                        '(change)': 'onChange($event.target.value)',
	                        '(input)': 'onChange($event.target.value)',
	                        '(blur)': 'onTouched()'
	                    },
	                    providers: [exports.NUMBER_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    NumberValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return NumberValueAccessor;
	}());
	exports.NumberValueAccessor = NumberValueAccessor;
	//# sourceMappingURL=number_value_accessor.js.map

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(96);
	var collection_1 = __webpack_require__(38);
	var validators_1 = __webpack_require__(45);
	var control_value_accessor_1 = __webpack_require__(44);
	var ng_control_1 = __webpack_require__(79);
	var shared_1 = __webpack_require__(65);
	exports.formControlBinding = {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return FormControlDirective; })
	};
	var FormControlDirective = (function (_super) {
	    __extends(FormControlDirective, _super);
	    function FormControlDirective(_validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    FormControlDirective.prototype.ngOnChanges = function (changes) {
	        if (this._isControlChanged(changes)) {
	            shared_1.setUpControl(this.form, this);
	            this.form.updateValueAndValidity({ emitEvent: false });
	        }
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this.form.setValue(this.model);
	            this.viewModel = this.model;
	        }
	    };
	    Object.defineProperty(FormControlDirective.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "control", {
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    FormControlDirective.prototype._isControlChanged = function (changes) {
	        return collection_1.StringMapWrapper.contains(changes, 'form');
	    };
	    /** @nocollapse */
	    FormControlDirective.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formControl]', providers: [exports.formControlBinding], exportAs: 'ngForm' },] },
	    ];
	    /** @nocollapse */
	    FormControlDirective.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    FormControlDirective.propDecorators = {
	        'form': [{ type: core_1.Input, args: ['formControl',] },],
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return FormControlDirective;
	}(ng_control_1.NgControl));
	exports.FormControlDirective = FormControlDirective;
	//# sourceMappingURL=form_control_directive.js.map

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var async_1 = __webpack_require__(96);
	var validators_1 = __webpack_require__(45);
	var abstract_form_group_directive_1 = __webpack_require__(105);
	var control_container_1 = __webpack_require__(64);
	var control_value_accessor_1 = __webpack_require__(44);
	var ng_control_1 = __webpack_require__(79);
	var reactive_errors_1 = __webpack_require__(241);
	var shared_1 = __webpack_require__(65);
	var form_group_directive_1 = __webpack_require__(107);
	var form_group_name_1 = __webpack_require__(108);
	exports.controlNameBinding = {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return FormControlName; })
	};
	var FormControlName = (function (_super) {
	    __extends(FormControlName, _super);
	    function FormControlName(_parent, _validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._parent = _parent;
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this._added = false;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    FormControlName.prototype.ngOnChanges = function (changes) {
	        if (!this._added) {
	            this._checkParentType();
	            this.formDirective.addControl(this);
	            this._added = true;
	        }
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this.viewModel = this.model;
	            this.formDirective.updateModel(this, this.model);
	        }
	    };
	    FormControlName.prototype.ngOnDestroy = function () { this.formDirective.removeControl(this); };
	    FormControlName.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    Object.defineProperty(FormControlName.prototype, "path", {
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "formDirective", {
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "control", {
	        get: function () { return this.formDirective.getControl(this); },
	        enumerable: true,
	        configurable: true
	    });
	    FormControlName.prototype._checkParentType = function () {
	        if (!(this._parent instanceof form_group_name_1.FormGroupName) &&
	            this._parent instanceof abstract_form_group_directive_1.AbstractFormGroupDirective) {
	            reactive_errors_1.ReactiveErrors.ngModelGroupException();
	        }
	        else if (!(this._parent instanceof form_group_name_1.FormGroupName) &&
	            !(this._parent instanceof form_group_directive_1.FormGroupDirective) &&
	            !(this._parent instanceof form_group_name_1.FormArrayName)) {
	            reactive_errors_1.ReactiveErrors.controlParentException();
	        }
	    };
	    /** @nocollapse */
	    FormControlName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formControlName]', providers: [exports.controlNameBinding] },] },
	    ];
	    /** @nocollapse */
	    FormControlName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    FormControlName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formControlName',] },],
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return FormControlName;
	}(ng_control_1.NgControl));
	exports.FormControlName = FormControlName;
	//# sourceMappingURL=form_control_name.js.map

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var exceptions_1 = __webpack_require__(80);
	var error_examples_1 = __webpack_require__(364);
	var ReactiveErrors = (function () {
	    function ReactiveErrors() {
	    }
	    ReactiveErrors.controlParentException = function () {
	        throw new exceptions_1.BaseException("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + error_examples_1.FormErrorExamples.formControlName);
	    };
	    ReactiveErrors.ngModelGroupException = function () {
	        throw new exceptions_1.BaseException("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + error_examples_1.FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + error_examples_1.FormErrorExamples.ngModelGroup);
	    };
	    ReactiveErrors.missingFormException = function () {
	        throw new exceptions_1.BaseException("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + error_examples_1.FormErrorExamples.formControlName);
	    };
	    ReactiveErrors.groupParentException = function () {
	        throw new exceptions_1.BaseException("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + error_examples_1.FormErrorExamples.formGroupName);
	    };
	    ReactiveErrors.arrayParentException = function () {
	        throw new exceptions_1.BaseException("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + error_examples_1.FormErrorExamples.formArrayName);
	    };
	    return ReactiveErrors;
	}());
	exports.ReactiveErrors = ReactiveErrors;
	//# sourceMappingURL=reactive_errors.js.map

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(25);
	var validators_1 = __webpack_require__(45);
	exports.REQUIRED = validators_1.Validators.required;
	exports.REQUIRED_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useValue: exports.REQUIRED,
	    multi: true
	};
	var RequiredValidator = (function () {
	    function RequiredValidator() {
	    }
	    /** @nocollapse */
	    RequiredValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[required][formControlName],[required][formControl],[required][ngModel]',
	                    providers: [exports.REQUIRED_VALIDATOR]
	                },] },
	    ];
	    return RequiredValidator;
	}());
	exports.RequiredValidator = RequiredValidator;
	/**
	 * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {@example common/forms/ts/validators/validators.ts region='min'}
	 */
	exports.MIN_LENGTH_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return MinLengthValidator; }),
	    multi: true
	};
	var MinLengthValidator = (function () {
	    function MinLengthValidator(minLength) {
	        this._validator = validators_1.Validators.minLength(lang_1.NumberWrapper.parseInt(minLength, 10));
	    }
	    MinLengthValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    MinLengthValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                    providers: [exports.MIN_LENGTH_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    MinLengthValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['minlength',] },] },
	    ];
	    return MinLengthValidator;
	}());
	exports.MinLengthValidator = MinLengthValidator;
	/**
	 * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {@example common/forms/ts/validators/validators.ts region='max'}
	 */
	exports.MAX_LENGTH_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return MaxLengthValidator; }),
	    multi: true
	};
	var MaxLengthValidator = (function () {
	    function MaxLengthValidator(maxLength) {
	        this._validator = validators_1.Validators.maxLength(lang_1.NumberWrapper.parseInt(maxLength, 10));
	    }
	    MaxLengthValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    MaxLengthValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                    providers: [exports.MAX_LENGTH_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    MaxLengthValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['maxlength',] },] },
	    ];
	    return MaxLengthValidator;
	}());
	exports.MaxLengthValidator = MaxLengthValidator;
	exports.PATTERN_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return PatternValidator; }),
	    multi: true
	};
	var PatternValidator = (function () {
	    function PatternValidator(pattern) {
	        this._validator = validators_1.Validators.pattern(pattern);
	    }
	    PatternValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    PatternValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                    providers: [exports.PATTERN_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    PatternValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['pattern',] },] },
	    ];
	    return PatternValidator;
	}());
	exports.PatternValidator = PatternValidator;
	//# sourceMappingURL=validators.js.map

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var About = (function () {
	    function About() {
	    }
	    About = __decorate([
	        core_1.Component({
	            selector: 'about',
	            styles: [__webpack_require__(795)],
	            template: __webpack_require__(739)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], About);
	    return About;
	}());
	exports.About = About;
	

/***/ },

/***/ 255:
/***/ function(module, exports) {

	"use strict";
	var Criterium = (function () {
	    function Criterium(name) {
	        this.name = name;
	    }
	    return Criterium;
	}());
	exports.Criterium = Criterium;
	

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(55);
	__webpack_require__(278);
	var MatrixService = (function () {
	    function MatrixService(http) {
	        this.http = http;
	        this.matrixUrl = 'app/matrices'; // URL to web api
	    }
	    MatrixService.prototype.getMatrices = function () {
	        return this.http.get(this.matrixUrl)
	            .toPromise()
	            .then(function (response) {
	            return response.json().data[0];
	        })
	            .catch(this.handleError);
	    };
	    /*
	     * Could break it into puts for each matrix but keep batched for now
	     * */
	    MatrixService.prototype.save = function (matrices) {
	        return this.post(matrices);
	    };
	    MatrixService.prototype.delete = function (id) {
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        var url = this.matrixUrl + "/" + id;
	        return this.http
	            .delete(url, { headers: headers })
	            .toPromise()
	            .catch(this.handleError);
	    };
	    // Add new Criterium
	    MatrixService.prototype.post = function (matrices) {
	        var headers = new http_1.Headers({
	            'Content-Type': 'application/json' });
	        return this.http
	            .post(this.matrixUrl, JSON.stringify(matrices), { headers: headers })
	            .toPromise()
	            .then(function (res) {
	            return res.json().data;
	        })
	            .catch(this.handleError);
	    };
	    MatrixService.prototype.handleError = function (error) {
	        console.error('An error occurred', error);
	        return Promise.reject(error.message || error);
	    };
	    MatrixService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], MatrixService);
	    return MatrixService;
	    var _a;
	}());
	exports.MatrixService = MatrixService;
	

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(62);
	var Subscription_1 = __webpack_require__(183);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FutureAction = (function (_super) {
	    __extends(FutureAction, _super);
	    function FutureAction(scheduler, work) {
	        _super.call(this);
	        this.scheduler = scheduler;
	        this.work = work;
	        this.pending = false;
	    }
	    FutureAction.prototype.execute = function () {
	        if (this.isUnsubscribed) {
	            this.error = new Error('executing a cancelled action');
	        }
	        else {
	            try {
	                this.work(this.state);
	            }
	            catch (e) {
	                this.unsubscribe();
	                this.error = e;
	            }
	        }
	    };
	    FutureAction.prototype.schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (this.isUnsubscribed) {
	            return this;
	        }
	        return this._schedule(state, delay);
	    };
	    FutureAction.prototype._schedule = function (state, delay) {
	        var _this = this;
	        if (delay === void 0) { delay = 0; }
	        // Always replace the current state with the new state.
	        this.state = state;
	        // Set the pending flag indicating that this action has been scheduled, or
	        // has recursively rescheduled itself.
	        this.pending = true;
	        var id = this.id;
	        // If this action has an intervalID and the specified delay matches the
	        // delay we used to create the intervalID, don't call `setInterval` again.
	        if (id != null && this.delay === delay) {
	            return this;
	        }
	        this.delay = delay;
	        // If this action has an intervalID, but was rescheduled with a different
	        // `delay` time, cancel the current intervalID and call `setInterval` with
	        // the new `delay` time.
	        if (id != null) {
	            this.id = null;
	            root_1.root.clearInterval(id);
	        }
	        //
	        // Important implementation note:
	        //
	        // By default, FutureAction only executes once. However, Actions have the
	        // ability to be rescheduled from within the scheduled callback (mimicking
	        // recursion for asynchronous methods). This allows us to implement single
	        // and repeated actions with the same code path without adding API surface
	        // area, and implement tail-call optimization over asynchronous boundaries.
	        //
	        // However, JS runtimes make a distinction between intervals scheduled by
	        // repeatedly calling `setTimeout` vs. a single `setInterval` call, with
	        // the latter providing a better guarantee of precision.
	        //
	        // In order to accommodate both single and repeatedly rescheduled actions,
	        // use `setInterval` here for both cases. By default, the interval will be
	        // canceled after its first execution, or if the action schedules itself to
	        // run again with a different `delay` time.
	        //
	        // If the action recursively schedules itself to run again with the same
	        // `delay` time, the interval is not canceled, but allowed to loop again.
	        // The check of whether the interval should be canceled or not is run every
	        // time the interval is executed. The first time an action fails to
	        // reschedule itself, the interval is canceled.
	        //
	        this.id = root_1.root.setInterval(function () {
	            _this.pending = false;
	            var _a = _this, id = _a.id, scheduler = _a.scheduler;
	            scheduler.actions.push(_this);
	            scheduler.flush();
	            //
	            // Terminate this interval if the action didn't reschedule itself.
	            // Don't call `this.unsubscribe()` here, because the action could be
	            // rescheduled later. For example:
	            //
	            // ```
	            // scheduler.schedule(function doWork(counter) {
	            //   /* ... I'm a busy worker bee ... */
	            //   var originalAction = this;
	            //   /* wait 100ms before rescheduling this action again */
	            //   setTimeout(function () {
	            //     originalAction.schedule(counter + 1);
	            //   }, 100);
	            // }, 1000);
	            // ```
	            if (_this.pending === false && id != null) {
	                _this.id = null;
	                root_1.root.clearInterval(id);
	            }
	        }, delay);
	        return this;
	    };
	    FutureAction.prototype._unsubscribe = function () {
	        this.pending = false;
	        var _a = this, id = _a.id, scheduler = _a.scheduler;
	        var actions = scheduler.actions;
	        var index = actions.indexOf(this);
	        if (id != null) {
	            this.id = null;
	            root_1.root.clearInterval(id);
	        }
	        if (index !== -1) {
	            actions.splice(index, 1);
	        }
	        this.work = null;
	        this.state = null;
	        this.scheduler = null;
	    };
	    return FutureAction;
	}(Subscription_1.Subscription));
	exports.FutureAction = FutureAction;
	//# sourceMappingURL=FutureAction.js.map

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var checkbox_value_accessor_1 = __webpack_require__(152);
	var default_value_accessor_1 = __webpack_require__(153);
	var ng_control_status_1 = __webpack_require__(236);
	var ng_form_1 = __webpack_require__(106);
	var ng_model_1 = __webpack_require__(237);
	var ng_model_group_1 = __webpack_require__(154);
	var number_value_accessor_1 = __webpack_require__(238);
	var radio_control_value_accessor_1 = __webpack_require__(155);
	var form_control_directive_1 = __webpack_require__(239);
	var form_control_name_1 = __webpack_require__(240);
	var form_group_directive_1 = __webpack_require__(107);
	var form_group_name_1 = __webpack_require__(108);
	var select_control_value_accessor_1 = __webpack_require__(156);
	var select_multiple_control_value_accessor_1 = __webpack_require__(157);
	var validators_1 = __webpack_require__(242);
	var checkbox_value_accessor_2 = __webpack_require__(152);
	exports.CheckboxControlValueAccessor = checkbox_value_accessor_2.CheckboxControlValueAccessor;
	var default_value_accessor_2 = __webpack_require__(153);
	exports.DefaultValueAccessor = default_value_accessor_2.DefaultValueAccessor;
	var ng_control_1 = __webpack_require__(79);
	exports.NgControl = ng_control_1.NgControl;
	var ng_control_status_2 = __webpack_require__(236);
	exports.NgControlStatus = ng_control_status_2.NgControlStatus;
	var ng_form_2 = __webpack_require__(106);
	exports.NgForm = ng_form_2.NgForm;
	var ng_model_2 = __webpack_require__(237);
	exports.NgModel = ng_model_2.NgModel;
	var ng_model_group_2 = __webpack_require__(154);
	exports.NgModelGroup = ng_model_group_2.NgModelGroup;
	var number_value_accessor_2 = __webpack_require__(238);
	exports.NumberValueAccessor = number_value_accessor_2.NumberValueAccessor;
	var radio_control_value_accessor_2 = __webpack_require__(155);
	exports.RadioControlValueAccessor = radio_control_value_accessor_2.RadioControlValueAccessor;
	var form_control_directive_2 = __webpack_require__(239);
	exports.FormControlDirective = form_control_directive_2.FormControlDirective;
	var form_control_name_2 = __webpack_require__(240);
	exports.FormControlName = form_control_name_2.FormControlName;
	var form_group_directive_2 = __webpack_require__(107);
	exports.FormGroupDirective = form_group_directive_2.FormGroupDirective;
	var form_group_name_2 = __webpack_require__(108);
	exports.FormArrayName = form_group_name_2.FormArrayName;
	exports.FormGroupName = form_group_name_2.FormGroupName;
	var select_control_value_accessor_2 = __webpack_require__(156);
	exports.NgSelectOption = select_control_value_accessor_2.NgSelectOption;
	exports.SelectControlValueAccessor = select_control_value_accessor_2.SelectControlValueAccessor;
	var select_multiple_control_value_accessor_2 = __webpack_require__(157);
	exports.NgSelectMultipleOption = select_multiple_control_value_accessor_2.NgSelectMultipleOption;
	exports.SelectMultipleControlValueAccessor = select_multiple_control_value_accessor_2.SelectMultipleControlValueAccessor;
	var validators_2 = __webpack_require__(242);
	exports.MaxLengthValidator = validators_2.MaxLengthValidator;
	exports.MinLengthValidator = validators_2.MinLengthValidator;
	exports.PatternValidator = validators_2.PatternValidator;
	exports.RequiredValidator = validators_2.RequiredValidator;
	exports.SHARED_FORM_DIRECTIVES = [
	    select_control_value_accessor_1.NgSelectOption, select_multiple_control_value_accessor_1.NgSelectMultipleOption, default_value_accessor_1.DefaultValueAccessor, number_value_accessor_1.NumberValueAccessor,
	    checkbox_value_accessor_1.CheckboxControlValueAccessor, select_control_value_accessor_1.SelectControlValueAccessor, select_multiple_control_value_accessor_1.SelectMultipleControlValueAccessor,
	    radio_control_value_accessor_1.RadioControlValueAccessor, ng_control_status_1.NgControlStatus, validators_1.RequiredValidator, validators_1.MinLengthValidator,
	    validators_1.MaxLengthValidator, validators_1.PatternValidator
	];
	exports.TEMPLATE_DRIVEN_DIRECTIVES = [ng_model_1.NgModel, ng_model_group_1.NgModelGroup, ng_form_1.NgForm];
	exports.REACTIVE_DRIVEN_DIRECTIVES = [form_control_directive_1.FormControlDirective, form_group_directive_1.FormGroupDirective, form_control_name_1.FormControlName, form_group_name_1.FormGroupName, form_group_name_1.FormArrayName];
	/**
	 *
	 * A list of all the form directives used as part of a `@Component` annotation.
	 *
	 *  This is a shorthand for importing them each individually.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * @Component({
	 *   selector: 'my-app',
	 *   directives: [FORM_DIRECTIVES]
	 * })
	 * class MyApp {}
	 * ```
	 * @experimental
	 */
	exports.FORM_DIRECTIVES = [exports.TEMPLATE_DRIVEN_DIRECTIVES, exports.SHARED_FORM_DIRECTIVES];
	/**
	 * @experimental
	 */
	exports.REACTIVE_FORM_DIRECTIVES = [exports.REACTIVE_DRIVEN_DIRECTIVES, exports.SHARED_FORM_DIRECTIVES];
	var InternalFormsSharedModule = (function () {
	    function InternalFormsSharedModule() {
	    }
	    /** @nocollapse */
	    InternalFormsSharedModule.decorators = [
	        { type: core_1.NgModule, args: [{ declarations: exports.SHARED_FORM_DIRECTIVES, exports: exports.SHARED_FORM_DIRECTIVES },] },
	    ];
	    return InternalFormsSharedModule;
	}());
	exports.InternalFormsSharedModule = InternalFormsSharedModule;
	//# sourceMappingURL=directives.js.map

/***/ },

/***/ 364:
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	exports.FormErrorExamples = {
	    formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	    formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	    formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	    ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	    ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	};
	//# sourceMappingURL=error_examples.js.map

/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var exceptions_1 = __webpack_require__(80);
	var error_examples_1 = __webpack_require__(364);
	var TemplateDrivenErrors = (function () {
	    function TemplateDrivenErrors() {
	    }
	    TemplateDrivenErrors.modelParentException = function () {
	        throw new exceptions_1.BaseException("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + error_examples_1.FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + error_examples_1.FormErrorExamples.ngModelWithFormGroup);
	    };
	    TemplateDrivenErrors.formGroupNameException = function () {
	        throw new exceptions_1.BaseException("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + error_examples_1.FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + error_examples_1.FormErrorExamples.ngModelGroup);
	    };
	    TemplateDrivenErrors.missingNameException = function () {
	        throw new exceptions_1.BaseException("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	    };
	    TemplateDrivenErrors.modelGroupParentException = function () {
	        throw new exceptions_1.BaseException("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + error_examples_1.FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + error_examples_1.FormErrorExamples.ngModelGroup);
	    };
	    return TemplateDrivenErrors;
	}());
	exports.TemplateDrivenErrors = TemplateDrivenErrors;
	//# sourceMappingURL=template_driven_errors.js.map

/***/ },

/***/ 366:
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * A base class for the WrappedException that can be used to identify
	 * a WrappedException from ExceptionHandler without adding circular
	 * dependency.
	 */
	var BaseWrappedException = (function (_super) {
	    __extends(BaseWrappedException, _super);
	    function BaseWrappedException(message) {
	        _super.call(this, message);
	    }
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperMessage", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalException", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "context", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "message", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseWrappedException;
	}(Error));
	exports.BaseWrappedException = BaseWrappedException;
	//# sourceMappingURL=base_wrapped_exception.js.map

/***/ },

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var base_wrapped_exception_1 = __webpack_require__(366);
	var collection_1 = __webpack_require__(38);
	var lang_1 = __webpack_require__(25);
	var _ArrayLogger = (function () {
	    function _ArrayLogger() {
	        this.res = [];
	    }
	    _ArrayLogger.prototype.log = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logError = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroup = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroupEnd = function () { };
	    ;
	    return _ArrayLogger;
	}());
	/**
	 * Provides a hook for centralized exception handling.
	 *
	 * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
	 * intercept error handling,
	 * write a custom exception handler that replaces this default as appropriate for your app.
	 *
	 * ### Example
	 *
	 * ```javascript
	 *
	 * class MyExceptionHandler implements ExceptionHandler {
	 *   call(error, stackTrace = null, reason = null) {
	 *     // do something with the exception
	 *   }
	 * }
	 *
	 * bootstrap(MyApp, [{provide: ExceptionHandler, useClass: MyExceptionHandler}])
	 *
	 * ```
	 * @stable
	 */
	var ExceptionHandler = (function () {
	    function ExceptionHandler(_logger, _rethrowException) {
	        if (_rethrowException === void 0) { _rethrowException = true; }
	        this._logger = _logger;
	        this._rethrowException = _rethrowException;
	    }
	    ExceptionHandler.exceptionToString = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var l = new _ArrayLogger();
	        var e = new ExceptionHandler(l, false);
	        e.call(exception, stackTrace, reason);
	        return l.res.join('\n');
	    };
	    ExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var originalException = this._findOriginalException(exception);
	        var originalStack = this._findOriginalStack(exception);
	        var context = this._findContext(exception);
	        this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
	        if (lang_1.isPresent(stackTrace) && lang_1.isBlank(originalStack)) {
	            this._logger.logError('STACKTRACE:');
	            this._logger.logError(this._longStackTrace(stackTrace));
	        }
	        if (lang_1.isPresent(reason)) {
	            this._logger.logError("REASON: " + reason);
	        }
	        if (lang_1.isPresent(originalException)) {
	            this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
	        }
	        if (lang_1.isPresent(originalStack)) {
	            this._logger.logError('ORIGINAL STACKTRACE:');
	            this._logger.logError(this._longStackTrace(originalStack));
	        }
	        if (lang_1.isPresent(context)) {
	            this._logger.logError('ERROR CONTEXT:');
	            this._logger.logError(context);
	        }
	        this._logger.logGroupEnd();
	        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
	        // when an exception happens. If we do not rethrow, bootstrap will always succeed.
	        if (this._rethrowException)
	            throw exception;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._extractMessage = function (exception) {
	        return exception instanceof base_wrapped_exception_1.BaseWrappedException ? exception.wrapperMessage :
	            exception.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._longStackTrace = function (stackTrace) {
	        return collection_1.isListLikeIterable(stackTrace) ? stackTrace.join('\n\n-----async gap-----\n') :
	            stackTrace.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findContext = function (exception) {
	        try {
	            if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	                return null;
	            return lang_1.isPresent(exception.context) ? exception.context :
	                this._findContext(exception.originalException);
	        }
	        catch (e) {
	            // exception.context can throw an exception. if it happens, we ignore the context.
	            return null;
	        }
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalException = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception.originalException;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	        }
	        return e;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalStack = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception;
	        var stack = exception.originalStack;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	            if (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	                stack = e.originalStack;
	            }
	        }
	        return stack;
	    };
	    return ExceptionHandler;
	}());
	exports.ExceptionHandler = ExceptionHandler;
	//# sourceMappingURL=exception_handler.js.map

/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var collection_1 = __webpack_require__(38);
	var lang_1 = __webpack_require__(25);
	var model_1 = __webpack_require__(158);
	var FormBuilder = (function () {
	    function FormBuilder() {
	    }
	    /**
	     * Construct a new {@link FormGroup} with the given map of configuration.
	     * Valid keys for the `extra` parameter map are `optionals` and `validator`.
	     *
	     * See the {@link FormGroup} constructor for more details.
	     */
	    FormBuilder.prototype.group = function (controlsConfig, extra) {
	        if (extra === void 0) { extra = null; }
	        var controls = this._reduceControls(controlsConfig);
	        var optionals = (lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'optionals') : null);
	        var validator = lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'validator') : null;
	        var asyncValidator = lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'asyncValidator') : null;
	        return new model_1.FormGroup(controls, optionals, validator, asyncValidator);
	    };
	    /**
	     * Construct a new {@link FormControl} with the given `value`,`validator`, and `asyncValidator`.
	     */
	    FormBuilder.prototype.control = function (value, validator, asyncValidator) {
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        return new model_1.FormControl(value, validator, asyncValidator);
	    };
	    /**
	     * Construct an array of {@link FormControl}s from the given `controlsConfig` array of
	     * configuration, with the given optional `validator` and `asyncValidator`.
	     */
	    FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	        var _this = this;
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	        return new model_1.FormArray(controls, validator, asyncValidator);
	    };
	    /** @internal */
	    FormBuilder.prototype._reduceControls = function (controlsConfig) {
	        var _this = this;
	        var controls = {};
	        collection_1.StringMapWrapper.forEach(controlsConfig, function (controlConfig, controlName) {
	            controls[controlName] = _this._createControl(controlConfig);
	        });
	        return controls;
	    };
	    /** @internal */
	    FormBuilder.prototype._createControl = function (controlConfig) {
	        if (controlConfig instanceof model_1.FormControl || controlConfig instanceof model_1.FormGroup ||
	            controlConfig instanceof model_1.FormArray) {
	            return controlConfig;
	        }
	        else if (lang_1.isArray(controlConfig)) {
	            var value = controlConfig[0];
	            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
	            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	            return this.control(value, validator, asyncValidator);
	        }
	        else {
	            return this.control(controlConfig);
	        }
	    };
	    /** @nocollapse */
	    FormBuilder.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return FormBuilder;
	}());
	exports.FormBuilder = FormBuilder;
	//# sourceMappingURL=form_builder.js.map

/***/ },

/***/ 394:
/***/ function(module, exports) {

	"use strict";
	exports.STATUS = {
	    CONTINUE: 100,
	    SWITCHING_PROTOCOLS: 101,
	    OK: 200,
	    CREATED: 201,
	    ACCEPTED: 202,
	    NON_AUTHORITATIVE_INFORMATION: 203,
	    NO_CONTENT: 204,
	    RESET_CONTENT: 205,
	    PARTIAL_CONTENT: 206,
	    MULTIPLE_CHOICES: 300,
	    MOVED_PERMANTENTLY: 301,
	    FOUND: 302,
	    SEE_OTHER: 303,
	    NOT_MODIFIED: 304,
	    USE_PROXY: 305,
	    TEMPORARY_REDIRECT: 307,
	    BAD_REQUEST: 400,
	    UNAUTHORIZED: 401,
	    PAYMENT_REQUIRED: 402,
	    FORBIDDEN: 403,
	    NOT_FOUND: 404,
	    METHOD_NOT_ALLOWED: 405,
	    NOT_ACCEPTABLE: 406,
	    PROXY_AUTHENTICATION_REQUIRED: 407,
	    REQUEST_TIMEOUT: 408,
	    CONFLICT: 409,
	    GONE: 410,
	    LENGTH_REQUIRED: 411,
	    PRECONDITION_FAILED: 412,
	    PAYLOAD_TO_LARGE: 413,
	    URI_TOO_LONG: 414,
	    UNSUPPORTED_MEDIA_TYPE: 415,
	    RANGE_NOT_SATISFIABLE: 416,
	    EXPECTATION_FAILED: 417,
	    IM_A_TEAPOT: 418,
	    UPGRADE_REQUIRED: 426,
	    INTERNAL_SERVER_ERROR: 500,
	    NOT_IMPLEMENTED: 501,
	    BAD_GATEWAY: 502,
	    SERVICE_UNAVAILABLE: 503,
	    GATEWAY_TIMEOUT: 504,
	    HTTP_VERSION_NOT_SUPPORTED: 505,
	    PROCESSING: 102,
	    MULTI_STATUS: 207,
	    IM_USED: 226,
	    PERMANENT_REDIRECT: 308,
	    UNPROCESSABLE_ENTRY: 422,
	    LOCKED: 423,
	    FAILED_DEPENDENCY: 424,
	    PRECONDITION_REQUIRED: 428,
	    TOO_MANY_REQUESTS: 429,
	    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
	    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
	    VARIANT_ALSO_NEGOTIATES: 506,
	    INSUFFICIENT_STORAGE: 507,
	    NETWORK_AUTHENTICATION_REQUIRED: 511
	};
	/*tslint:disable:quotemark max-line-length one-line */
	exports.STATUS_CODE_INFO = {
	    "100": {
	        "code": 100,
	        "text": "Continue",
	        "description": "\"The initial part of a request has been received and has not yet been rejected by the server.\"",
	        "spec_title": "RFC7231#6.2.1",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.2.1"
	    },
	    "101": {
	        "code": 101,
	        "text": "Switching Protocols",
	        "description": "\"The server understands and is willing to comply with the client's request, via the Upgrade header field, for a change in the application protocol being used on this connection.\"",
	        "spec_title": "RFC7231#6.2.2",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.2.2"
	    },
	    "200": {
	        "code": 200,
	        "text": "OK",
	        "description": "\"The request has succeeded.\"",
	        "spec_title": "RFC7231#6.3.1",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.1"
	    },
	    "201": {
	        "code": 201,
	        "text": "Created",
	        "description": "\"The request has been fulfilled and has resulted in one or more new resources being created.\"",
	        "spec_title": "RFC7231#6.3.2",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.2"
	    },
	    "202": {
	        "code": 202,
	        "text": "Accepted",
	        "description": "\"The request has been accepted for processing, but the processing has not been completed.\"",
	        "spec_title": "RFC7231#6.3.3",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.3"
	    },
	    "203": {
	        "code": 203,
	        "text": "Non-Authoritative Information",
	        "description": "\"The request was successful but the enclosed payload has been modified from that of the origin server's 200 (OK) response by a transforming proxy.\"",
	        "spec_title": "RFC7231#6.3.4",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.4"
	    },
	    "204": {
	        "code": 204,
	        "text": "No Content",
	        "description": "\"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.\"",
	        "spec_title": "RFC7231#6.3.5",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.5"
	    },
	    "205": {
	        "code": 205,
	        "text": "Reset Content",
	        "description": "\"The server has fulfilled the request and desires that the user agent reset the \"document view\", which caused the request to be sent, to its original state as received from the origin server.\"",
	        "spec_title": "RFC7231#6.3.6",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.6"
	    },
	    "206": {
	        "code": 206,
	        "text": "Partial Content",
	        "description": "\"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests's Range header field.\"",
	        "spec_title": "RFC7233#4.1",
	        "spec_href": "http://tools.ietf.org/html/rfc7233#section-4.1"
	    },
	    "300": {
	        "code": 300,
	        "text": "Multiple Choices",
	        "description": "\"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.\"",
	        "spec_title": "RFC7231#6.4.1",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.1"
	    },
	    "301": {
	        "code": 301,
	        "text": "Moved Permanently",
	        "description": "\"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.\"",
	        "spec_title": "RFC7231#6.4.2",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.2"
	    },
	    "302": {
	        "code": 302,
	        "text": "Found",
	        "description": "\"The target resource resides temporarily under a different URI.\"",
	        "spec_title": "RFC7231#6.4.3",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.3"
	    },
	    "303": {
	        "code": 303,
	        "text": "See Other",
	        "description": "\"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.\"",
	        "spec_title": "RFC7231#6.4.4",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.4"
	    },
	    "304": {
	        "code": 304,
	        "text": "Not Modified",
	        "description": "\"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.\"",
	        "spec_title": "RFC7232#4.1",
	        "spec_href": "http://tools.ietf.org/html/rfc7232#section-4.1"
	    },
	    "305": {
	        "code": 305,
	        "text": "Use Proxy",
	        "description": "*deprecated*",
	        "spec_title": "RFC7231#6.4.5",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.5"
	    },
	    "307": {
	        "code": 307,
	        "text": "Temporary Redirect",
	        "description": "\"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.\"",
	        "spec_title": "RFC7231#6.4.7",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.4.7"
	    },
	    "400": {
	        "code": 400,
	        "text": "Bad Request",
	        "description": "\"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.\"",
	        "spec_title": "RFC7231#6.5.1",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.1"
	    },
	    "401": {
	        "code": 401,
	        "text": "Unauthorized",
	        "description": "\"The request has not been applied because it lacks valid authentication credentials for the target resource.\"",
	        "spec_title": "RFC7235#6.3.1",
	        "spec_href": "http://tools.ietf.org/html/rfc7235#section-3.1"
	    },
	    "402": {
	        "code": 402,
	        "text": "Payment Required",
	        "description": "*reserved*",
	        "spec_title": "RFC7231#6.5.2",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.2"
	    },
	    "403": {
	        "code": 403,
	        "text": "Forbidden",
	        "description": "\"The server understood the request but refuses to authorize it.\"",
	        "spec_title": "RFC7231#6.5.3",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.3"
	    },
	    "404": {
	        "code": 404,
	        "text": "Not Found",
	        "description": "\"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.\"",
	        "spec_title": "RFC7231#6.5.4",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.4"
	    },
	    "405": {
	        "code": 405,
	        "text": "Method Not Allowed",
	        "description": "\"The method specified in the request-line is known by the origin server but not supported by the target resource.\"",
	        "spec_title": "RFC7231#6.5.5",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.5"
	    },
	    "406": {
	        "code": 406,
	        "text": "Not Acceptable",
	        "description": "\"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.\"",
	        "spec_title": "RFC7231#6.5.6",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.6"
	    },
	    "407": {
	        "code": 407,
	        "text": "Proxy Authentication Required",
	        "description": "\"The client needs to authenticate itself in order to use a proxy.\"",
	        "spec_title": "RFC7231#6.3.2",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.3.2"
	    },
	    "408": {
	        "code": 408,
	        "text": "Request Timeout",
	        "description": "\"The server did not receive a complete request message within the time that it was prepared to wait.\"",
	        "spec_title": "RFC7231#6.5.7",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.7"
	    },
	    "409": {
	        "code": 409,
	        "text": "Conflict",
	        "description": "\"The request could not be completed due to a conflict with the current state of the resource.\"",
	        "spec_title": "RFC7231#6.5.8",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.8"
	    },
	    "410": {
	        "code": 410,
	        "text": "Gone",
	        "description": "\"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.\"",
	        "spec_title": "RFC7231#6.5.9",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.9"
	    },
	    "411": {
	        "code": 411,
	        "text": "Length Required",
	        "description": "\"The server refuses to accept the request without a defined Content-Length.\"",
	        "spec_title": "RFC7231#6.5.10",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.10"
	    },
	    "412": {
	        "code": 412,
	        "text": "Precondition Failed",
	        "description": "\"One or more preconditions given in the request header fields evaluated to false when tested on the server.\"",
	        "spec_title": "RFC7232#4.2",
	        "spec_href": "http://tools.ietf.org/html/rfc7232#section-4.2"
	    },
	    "413": {
	        "code": 413,
	        "text": "Payload Too Large",
	        "description": "\"The server is refusing to process a request because the request payload is larger than the server is willing or able to process.\"",
	        "spec_title": "RFC7231#6.5.11",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.11"
	    },
	    "414": {
	        "code": 414,
	        "text": "URI Too Long",
	        "description": "\"The server is refusing to service the request because the request-target is longer than the server is willing to interpret.\"",
	        "spec_title": "RFC7231#6.5.12",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.12"
	    },
	    "415": {
	        "code": 415,
	        "text": "Unsupported Media Type",
	        "description": "\"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.\"",
	        "spec_title": "RFC7231#6.5.13",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.13"
	    },
	    "416": {
	        "code": 416,
	        "text": "Range Not Satisfiable",
	        "description": "\"None of the ranges in the request's Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.\"",
	        "spec_title": "RFC7233#4.4",
	        "spec_href": "http://tools.ietf.org/html/rfc7233#section-4.4"
	    },
	    "417": {
	        "code": 417,
	        "text": "Expectation Failed",
	        "description": "\"The expectation given in the request's Expect header field could not be met by at least one of the inbound servers.\"",
	        "spec_title": "RFC7231#6.5.14",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.14"
	    },
	    "418": {
	        "code": 418,
	        "text": "I'm a teapot",
	        "description": "\"1988 April Fools Joke. Returned by tea pots requested to brew coffee.\"",
	        "spec_title": "RFC 2324",
	        "spec_href": "https://tools.ietf.org/html/rfc2324"
	    },
	    "426": {
	        "code": 426,
	        "text": "Upgrade Required",
	        "description": "\"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.\"",
	        "spec_title": "RFC7231#6.5.15",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.5.15"
	    },
	    "500": {
	        "code": 500,
	        "text": "Internal Server Error",
	        "description": "\"The server encountered an unexpected condition that prevented it from fulfilling the request.\"",
	        "spec_title": "RFC7231#6.6.1",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.1"
	    },
	    "501": {
	        "code": 501,
	        "text": "Not Implemented",
	        "description": "\"The server does not support the functionality required to fulfill the request.\"",
	        "spec_title": "RFC7231#6.6.2",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.2"
	    },
	    "502": {
	        "code": 502,
	        "text": "Bad Gateway",
	        "description": "\"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.\"",
	        "spec_title": "RFC7231#6.6.3",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.3"
	    },
	    "503": {
	        "code": 503,
	        "text": "Service Unavailable",
	        "description": "\"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.\"",
	        "spec_title": "RFC7231#6.6.4",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.4"
	    },
	    "504": {
	        "code": 504,
	        "text": "Gateway Time-out",
	        "description": "\"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.\"",
	        "spec_title": "RFC7231#6.6.5",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.5"
	    },
	    "505": {
	        "code": 505,
	        "text": "HTTP Version Not Supported",
	        "description": "\"The server does not support, or refuses to support, the protocol version that was used in the request message.\"",
	        "spec_title": "RFC7231#6.6.6",
	        "spec_href": "http://tools.ietf.org/html/rfc7231#section-6.6.6"
	    },
	    "102": {
	        "code": 102,
	        "text": "Processing",
	        "description": "\"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it.\"",
	        "spec_title": "RFC5218#10.1",
	        "spec_href": "http://tools.ietf.org/html/rfc2518#section-10.1"
	    },
	    "207": {
	        "code": 207,
	        "text": "Multi-Status",
	        "description": "\"Status for multiple independent operations.\"",
	        "spec_title": "RFC5218#10.2",
	        "spec_href": "http://tools.ietf.org/html/rfc2518#section-10.2"
	    },
	    "226": {
	        "code": 226,
	        "text": "IM Used",
	        "description": "\"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.\"",
	        "spec_title": "RFC3229#10.4.1",
	        "spec_href": "http://tools.ietf.org/html/rfc3229#section-10.4.1"
	    },
	    "308": {
	        "code": 308,
	        "text": "Permanent Redirect",
	        "description": "\"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.\"",
	        "spec_title": "RFC7238",
	        "spec_href": "http://tools.ietf.org/html/rfc7238"
	    },
	    "422": {
	        "code": 422,
	        "text": "Unprocessable Entity",
	        "description": "\"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.\"",
	        "spec_title": "RFC5218#10.3",
	        "spec_href": "http://tools.ietf.org/html/rfc2518#section-10.3"
	    },
	    "423": {
	        "code": 423,
	        "text": "Locked",
	        "description": "\"The source or destination resource of a method is locked.\"",
	        "spec_title": "RFC5218#10.4",
	        "spec_href": "http://tools.ietf.org/html/rfc2518#section-10.4"
	    },
	    "424": {
	        "code": 424,
	        "text": "Failed Dependency",
	        "description": "\"The method could not be performed on the resource because the requested action depended on another action and that action failed.\"",
	        "spec_title": "RFC5218#10.5",
	        "spec_href": "http://tools.ietf.org/html/rfc2518#section-10.5"
	    },
	    "428": {
	        "code": 428,
	        "text": "Precondition Required",
	        "description": "\"The origin server requires the request to be conditional.\"",
	        "spec_title": "RFC6585#3",
	        "spec_href": "http://tools.ietf.org/html/rfc6585#section-3"
	    },
	    "429": {
	        "code": 429,
	        "text": "Too Many Requests",
	        "description": "\"The user has sent too many requests in a given amount of time (\"rate limiting\").\"",
	        "spec_title": "RFC6585#4",
	        "spec_href": "http://tools.ietf.org/html/rfc6585#section-4"
	    },
	    "431": {
	        "code": 431,
	        "text": "Request Header Fields Too Large",
	        "description": "\"The server is unwilling to process the request because its header fields are too large.\"",
	        "spec_title": "RFC6585#5",
	        "spec_href": "http://tools.ietf.org/html/rfc6585#section-5"
	    },
	    "451": {
	        "code": 451,
	        "text": "Unavailable For Legal Reasons",
	        "description": "\"The server is denying access to the resource in response to a legal demand.\"",
	        "spec_title": "draft-ietf-httpbis-legally-restricted-status",
	        "spec_href": "http://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status"
	    },
	    "506": {
	        "code": 506,
	        "text": "Variant Also Negotiates",
	        "description": "\"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.\"",
	        "spec_title": "RFC2295#8.1",
	        "spec_href": "http://tools.ietf.org/html/rfc2295#section-8.1"
	    },
	    "507": {
	        "code": 507,
	        "text": "Insufficient Storage",
	        "description": "\The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.\"",
	        "spec_title": "RFC5218#10.6",
	        "spec_href": "http://tools.ietf.org/html/rfc2518#section-10.6"
	    },
	    "511": {
	        "code": 511,
	        "text": "Network Authentication Required",
	        "description": "\"The client needs to authenticate to gain network access.\"",
	        "spec_title": "RFC6585#6",
	        "spec_href": "http://tools.ietf.org/html/rfc6585#section-6"
	    }
	};
	//# sourceMappingURL=http-status-codes.js.map

/***/ },

/***/ 395:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(55);
	var Observable_1 = __webpack_require__(5);
	__webpack_require__(756);
	var http_status_codes_1 = __webpack_require__(394);
	/**
	* Class that creates seed data for in-memory database
	* Must implement InMemoryDbService.
	*/
	exports.SEED_DATA = new core_1.OpaqueToken('seedData');
	/**
	*  InMemoryBackendService configuration options
	*  Usage:
	*    provide(InMemoryBackendConfig, {useValue: {delay:600}}),
	*/
	var InMemoryBackendConfig = (function () {
	    function InMemoryBackendConfig(config) {
	        if (config === void 0) { config = {}; }
	        Object.assign(this, {
	            defaultResponseOptions: new http_1.BaseResponseOptions(),
	            delay: 500,
	            delete404: false
	        }, config);
	    }
	    return InMemoryBackendConfig;
	}());
	exports.InMemoryBackendConfig = InMemoryBackendConfig;
	exports.isSuccess = function (status) { return (status >= 200 && status < 300); };
	/**
	 * Simulate the behavior of a RESTy web api
	 * backed by the simple in-memory data store provided by the injected InMemoryDataService service.
	 * Conforms mostly to behavior described here:
	 * http://www.restapitutorial.com/lessons/httpmethods.html
	 *
	 * ### Usage
	 *
	 * Create InMemoryDataService class the implements InMemoryDataService.
	 * Register both this service and the seed data as in:
	 * ```
	 * // other imports
	 * import { HTTPPROVIDERS, XHRBackend } from 'angular2/http';
	 * import { InMemoryBackendConfig, InMemoryBackendService, SEEDDATA } from '../in-memory-backend/in-memory-backend.service';
	 * import { InMemoryStoryService } from '../api/in-memory-story.service';
	 *
	 * @Component({
	 *   selector: ...,
	 *   templateUrl: ...,
	 *   providers: [
	 *     HTTPPROVIDERS,
	 *     provide(XHRBackend, { useClass: InMemoryBackendService }),
	 *     provide(SEEDDATA, { useClass: InMemoryStoryService }),
	 *     provide(InMemoryBackendConfig, { useValue: { delay: 600 } }),
	 *   ]
	 * })
	 * export class AppComponent { ... }
	 * ```
	 */
	var InMemoryBackendService = (function () {
	    function InMemoryBackendService(seedData, config) {
	        this.seedData = seedData;
	        this.config = new InMemoryBackendConfig();
	        this.resetDb();
	        var loc = this.getLocation('./');
	        this.config.host = loc.host;
	        this.config.rootPath = loc.pathname;
	        Object.assign(this.config, config);
	    }
	    InMemoryBackendService.prototype.createConnection = function (req) {
	        var res = this.handleRequest(req);
	        var response = new Observable_1.Observable(function (responseObserver) {
	            if (exports.isSuccess(res.status)) {
	                responseObserver.next(res);
	                responseObserver.complete();
	            }
	            else {
	                responseObserver.error(res);
	            }
	            return function () { }; // unsubscribe function
	        });
	        response = response.delay(this.config.delay || 500);
	        return {
	            readyState: http_1.ReadyState.Done,
	            request: req,
	            response: response
	        };
	    };
	    ////  protected /////
	    /**
	     * Process Request and return an Http Response object
	     * in the manner of a RESTy web api.
	     *
	     * Expect URI pattern in the form :base/:collectionName/:id?
	     * Examples:
	     *   // for store with a 'characters' collection
	     *   GET api/characters          // all characters
	     *   GET api/characters/42       // the character with id=42
	     *   GET api/characters?name=^j  // 'j' is a regex; returns characters whose name contains 'j' or 'J'
	     *   GET api/characters.json/42  // ignores the ".json"
	     *
	     *   POST commands/resetDb  // resets the "database"
	     */
	    InMemoryBackendService.prototype.handleRequest = function (req) {
	        var _a = this.parseUrl(req.url), base = _a.base, collectionName = _a.collectionName, id = _a.id, resourceUrl = _a.resourceUrl, query = _a.query;
	        var collection = this.db[collectionName];
	        var reqInfo = {
	            req: req,
	            base: base,
	            collection: collection,
	            collectionName: collectionName,
	            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
	            id: this.parseId(collection, id),
	            query: query,
	            resourceUrl: resourceUrl
	        };
	        var options;
	        try {
	            if ('commands' === reqInfo.base.toLowerCase()) {
	                options = this.commands(reqInfo);
	            }
	            else if (reqInfo.collection) {
	                switch (req.method) {
	                    case http_1.RequestMethod.Get:
	                        options = this.get(reqInfo);
	                        break;
	                    case http_1.RequestMethod.Post:
	                        options = this.post(reqInfo);
	                        break;
	                    case http_1.RequestMethod.Put:
	                        options = this.put(reqInfo);
	                        break;
	                    case http_1.RequestMethod.Delete:
	                        options = this.delete(reqInfo);
	                        break;
	                    default:
	                        options = this.createErrorResponse(http_status_codes_1.STATUS.METHOD_NOT_ALLOWED, 'Method not allowed');
	                        break;
	                }
	            }
	            else {
	                options = this.createErrorResponse(http_status_codes_1.STATUS.NOT_FOUND, "Collection '" + collectionName + "' not found");
	            }
	        }
	        catch (error) {
	            var err = error.message || error;
	            options = this.createErrorResponse(http_status_codes_1.STATUS.INTERNAL_SERVER_ERROR, "" + err);
	        }
	        options = this.setStatusText(options);
	        if (this.config.defaultResponseOptions) {
	            options = this.config.defaultResponseOptions.merge(options);
	        }
	        return new http_1.Response(options);
	    };
	    /**
	     * Apply query/search parameters as a filter over the collection
	     * This impl only supports RegExp queries on string properties of the collection
	     * ANDs the conditions together
	     */
	    InMemoryBackendService.prototype.applyQuery = function (collection, query) {
	        // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
	        var conditions = [];
	        query.paramsMap.forEach(function (value, name) {
	            value.forEach(function (v) { return conditions.push({ name: name, rx: new RegExp(decodeURI(v), 'i') }); });
	        });
	        var len = conditions.length;
	        if (!len) {
	            return collection;
	        }
	        // AND the RegExp conditions
	        return collection.filter(function (row) {
	            var ok = true;
	            var i = len;
	            while (ok && i) {
	                i -= 1;
	                var cond = conditions[i];
	                ok = cond.rx.test(row[cond.name]);
	            }
	            return ok;
	        });
	    };
	    InMemoryBackendService.prototype.clone = function (data) {
	        return JSON.parse(JSON.stringify(data));
	    };
	    /**
	     * When the `base`="commands", the `collectionName` is the command
	     * Example URLs:
	     *   commands/resetdb   // Reset the "database" to its original state
	     *   commands/config (GET) // Return this service's config object
	     *   commands/config (!GET) // Update the config (e.g. delay)
	     *
	     * Usage:
	     *   http.post('commands/resetdb', null);
	     *   http.get('commands/config');
	     *   http.post('commands/config', '{"delay":1000}');
	     */
	    InMemoryBackendService.prototype.commands = function (reqInfo) {
	        var command = reqInfo.collectionName.toLowerCase();
	        var method = reqInfo.req.method;
	        var options;
	        switch (command) {
	            case 'resetdb':
	                this.resetDb();
	                options = new http_1.ResponseOptions({ status: http_status_codes_1.STATUS.OK });
	                break;
	            case 'config':
	                if (method === http_1.RequestMethod.Get) {
	                    options = new http_1.ResponseOptions({
	                        body: this.clone(this.config),
	                        status: http_status_codes_1.STATUS.OK
	                    });
	                }
	                else {
	                    // Be nice ... any other method is a config update
	                    var body = JSON.parse(reqInfo.req.text() || '{}');
	                    Object.assign(this.config, body);
	                    options = new http_1.ResponseOptions({ status: http_status_codes_1.STATUS.NO_CONTENT });
	                }
	                break;
	            default:
	                options = this.createErrorResponse(http_status_codes_1.STATUS.INTERNAL_SERVER_ERROR, "Unknown command \"" + command + "\"");
	        }
	        return options;
	    };
	    InMemoryBackendService.prototype.createErrorResponse = function (status, message) {
	        return new http_1.ResponseOptions({
	            body: { 'error': "" + message },
	            headers: new http_1.Headers({ 'Content-Type': 'application/json' }),
	            status: status
	        });
	    };
	    InMemoryBackendService.prototype.delete = function (_a) {
	        var id = _a.id, collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers;
	        if (!id) {
	            return this.createErrorResponse(http_status_codes_1.STATUS.NOT_FOUND, "Missing \"" + collectionName + "\" id");
	        }
	        var exists = this.removeById(collection, id);
	        return new http_1.ResponseOptions({
	            headers: headers,
	            status: (exists || !this.config.delete404) ? http_status_codes_1.STATUS.NO_CONTENT : http_status_codes_1.STATUS.NOT_FOUND
	        });
	    };
	    InMemoryBackendService.prototype.findById = function (collection, id) {
	        return collection.find(function (item) { return item.id === id; });
	    };
	    InMemoryBackendService.prototype.genId = function (collection) {
	        // assumes numeric ids
	        var maxId = 0;
	        collection.reduce(function (prev, item) {
	            maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
	        }, null);
	        return maxId + 1;
	    };
	    InMemoryBackendService.prototype.get = function (_a) {
	        var id = _a.id, query = _a.query, collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers;
	        var data = collection;
	        if (id) {
	            data = this.findById(collection, id);
	        }
	        else if (query) {
	            data = this.applyQuery(collection, query);
	        }
	        if (!data) {
	            return this.createErrorResponse(http_status_codes_1.STATUS.NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
	        }
	        return new http_1.ResponseOptions({
	            body: { data: this.clone(data) },
	            headers: headers,
	            status: http_status_codes_1.STATUS.OK
	        });
	    };
	    InMemoryBackendService.prototype.getLocation = function (href) {
	        var l = document.createElement('a');
	        l.href = href;
	        return l;
	    };
	    ;
	    InMemoryBackendService.prototype.indexOf = function (collection, id) {
	        return collection.findIndex(function (item) { return item.id === id; });
	    };
	    // tries to parse id as number if collection item.id is a number.
	    // returns the original param id otherwise.
	    InMemoryBackendService.prototype.parseId = function (collection, id) {
	        if (!id) {
	            return null;
	        }
	        var isNumberId = collection[0] && typeof collection[0].id === 'number';
	        if (isNumberId) {
	            var idNum = parseFloat(id);
	            return isNaN(idNum) ? id : idNum;
	        }
	        return id;
	    };
	    InMemoryBackendService.prototype.parseUrl = function (url) {
	        try {
	            var loc = this.getLocation(url);
	            var drop = this.config.rootPath.length;
	            var urlRoot = '';
	            if (loc.host !== this.config.host) {
	                // url for a server on a different host!
	                // assume it's collection is actually here too.
	                drop = 1; // the leading slash
	                urlRoot = loc.protocol + '//' + loc.host + '/';
	            }
	            var path = loc.pathname.substring(drop);
	            var _a = path.split('/'), base = _a[0], collectionName = _a[1], id = _a[2];
	            var resourceUrl = urlRoot + base + '/' + collectionName + '/';
	            collectionName = collectionName.split('.')[0]; // ignore anything after the '.', e.g., '.json'
	            var query = loc.search && new http_1.URLSearchParams(loc.search.substr(1));
	            return { base: base, id: id, collectionName: collectionName, resourceUrl: resourceUrl, query: query };
	        }
	        catch (err) {
	            var msg = "unable to parse url '" + url + "'; original error: " + err.message;
	            throw new Error(msg);
	        }
	    };
	    InMemoryBackendService.prototype.post = function (_a) {
	        var collection = _a.collection, headers = _a.headers, id = _a.id, req = _a.req, resourceUrl = _a.resourceUrl;
	        var item = JSON.parse(req.text());
	        if (!item.id) {
	            item.id = id || this.genId(collection);
	        }
	        // ignore the request id, if any. Alternatively,
	        // could reject request if id differs from item.id
	        id = item.id;
	        var existingIx = this.indexOf(collection, id);
	        if (existingIx > -1) {
	            collection[existingIx] = item;
	            return new http_1.ResponseOptions({
	                headers: headers,
	                status: http_status_codes_1.STATUS.NO_CONTENT
	            });
	        }
	        else {
	            collection.push(item);
	            headers.set('Location', resourceUrl + '/' + id);
	            return new http_1.ResponseOptions({
	                headers: headers,
	                body: { data: this.clone(item) },
	                status: http_status_codes_1.STATUS.CREATED
	            });
	        }
	    };
	    InMemoryBackendService.prototype.put = function (_a) {
	        var id = _a.id, collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, req = _a.req;
	        var item = JSON.parse(req.text());
	        if (!id) {
	            return this.createErrorResponse(http_status_codes_1.STATUS.NOT_FOUND, "Missing '" + collectionName + "' id");
	        }
	        if (id !== item.id) {
	            return this.createErrorResponse(http_status_codes_1.STATUS.BAD_REQUEST, "\"" + collectionName + "\" id does not match item.id");
	        }
	        var existingIx = this.indexOf(collection, id);
	        if (existingIx > -1) {
	            collection[existingIx] = item;
	            return new http_1.ResponseOptions({
	                headers: headers,
	                status: http_status_codes_1.STATUS.NO_CONTENT // successful; no content
	            });
	        }
	        else {
	            collection.push(item);
	            return new http_1.ResponseOptions({
	                body: { data: this.clone(item) },
	                headers: headers,
	                status: http_status_codes_1.STATUS.CREATED
	            });
	        }
	    };
	    InMemoryBackendService.prototype.removeById = function (collection, id) {
	        var ix = this.indexOf(collection, id);
	        if (ix > -1) {
	            collection.splice(ix, 1);
	            return true;
	        }
	        return false;
	    };
	    /**
	     * Reset the "database" to its original state
	     */
	    InMemoryBackendService.prototype.resetDb = function () {
	        this.db = this.seedData.createDb();
	    };
	    InMemoryBackendService.prototype.setStatusText = function (options) {
	        try {
	            var statusCode = http_status_codes_1.STATUS_CODE_INFO[options.status];
	            options['statusText'] = statusCode ? statusCode.text : 'Unknown Status';
	            return options;
	        }
	        catch (err) {
	            return new http_1.ResponseOptions({
	                status: http_status_codes_1.STATUS.INTERNAL_SERVER_ERROR,
	                statusText: 'Invalid Server Operation'
	            });
	        }
	    };
	    InMemoryBackendService = __decorate([
	        __param(0, core_1.Inject(exports.SEED_DATA)),
	        __param(1, core_1.Inject(InMemoryBackendConfig)),
	        __param(1, core_1.Optional()), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], InMemoryBackendService);
	    return InMemoryBackendService;
	}());
	exports.InMemoryBackendService = InMemoryBackendService;
	//# sourceMappingURL=in-memory-backend.service.js.map

/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var D3 = __webpack_require__(443);
	var matrix_1 = __webpack_require__(572);
	var PieChart = (function () {
	    function PieChart(element) {
	        this.element = element;
	        this.htmlElement = this.element.nativeElement;
	        this.host = D3.select(this.element.nativeElement);
	    }
	    PieChart.prototype.ngOnInit = function () {
	        this.setup();
	        this.buildSvg();
	    };
	    PieChart.prototype.setup = function () {
	        this.width = 360;
	        this.height = 360;
	        this.legendRectSize = 18;
	        this.legendSpacing = 4;
	        this.donutWidth = 75;
	        this.radius = Math.min(this.width, this.height) / 2;
	        this.colorScale = D3.scaleOrdinal(D3.schemeCategory20b);
	    };
	    PieChart.prototype.buildSvg = function () {
	        var _this = this;
	        this.svg = this.host.select('.chart')
	            .append('svg');
	        this.g = this.svg
	            .attr('width', this.width)
	            .attr('height', this.height)
	            .append('g')
	            .attr('transform', 'translate(' + (this.width / 2) + ',' + (this.height / 2) + ')');
	        var arc = D3.arc()
	            .innerRadius(this.radius - this.donutWidth)
	            .outerRadius(this.radius);
	        var pie = D3.pie()
	            .value(function (d) { return d.count; })
	            .sort(null);
	        var tooltip = this.host.select('.chart')
	            .append('div')
	            .attr('class', 'tooltip');
	        tooltip.append('div')
	            .attr('class', 'label');
	        tooltip.append('div')
	            .attr('class', 'percent');
	        var weights = this.matrix.weights;
	        var labels = this.matrix.names;
	        var dataset = [];
	        weights.forEach(function (w, i) { return dataset.push({ count: w, label: labels[i], enabled: false }); });
	        var path = this.g.selectAll('path')
	            .data(pie(dataset))
	            .enter()
	            .append('path')
	            .attr('d', arc)
	            .attr('fill', function (d) { return _this.colorScale(d.data.label); }).each(function (d) { return _this._current = d; });
	        path.on('mouseover', function (d) {
	            var percent = d.data.count.toFixed(2) * 100;
	            tooltip.select('.label').html(d.data.label);
	            tooltip.select('.percent').html(percent + '%');
	            tooltip.style('display', 'block');
	        });
	        path.on('mouseout', function () {
	            tooltip.style('display', 'none');
	        });
	        /* OPTIONAL
	        path.on('mousemove', function(d) {
	          tooltip.style('top', (D3.event.pageY + 10) + 'px')
	            .style('left', (D3.event.pageX + 10) + 'px');
	        });
	        */
	        var legend = this.g.selectAll('.legend')
	            .data(this.colorScale.domain())
	            .enter()
	            .append('g')
	            .attr('class', 'legend')
	            .attr('transform', function (d, i) {
	            var height = _this.legendRectSize + _this.legendSpacing;
	            var offset = height * _this.colorScale.domain().length / 2;
	            var horz = -2 * _this.legendRectSize;
	            var vert = i * height - offset;
	            return 'translate(' + horz + ',' + vert + ')';
	        });
	        legend.append('rect')
	            .attr('width', this.legendRectSize)
	            .attr('height', this.legendRectSize)
	            .style('fill', this.colorScale)
	            .style('stroke', this.colorScale).on('click', function (label) {
	            var rect = D3.select(this);
	            var enabled = true;
	            var totalEnabled = D3.sum(this.weights.map(function (d) {
	                return (d.enabled) ? 1 : 0;
	            }));
	            if (rect.attr('class') === 'disabled') {
	                rect.attr('class', '');
	            }
	            else {
	                if (totalEnabled < 2)
	                    return;
	                rect.attr('class', 'disabled');
	                enabled = false;
	            }
	            pie.value(function (d, i) {
	                if (d === label)
	                    d.enabled = enabled;
	                return (d.enabled) ? d.count : 0;
	            });
	            path = path.data(pie(dataset));
	            path.transition()
	                .duration(750)
	                .attrTween('d', function (d) {
	                var interpolate = D3.interpolate(this._current, d);
	                this._current = interpolate(0);
	                return function (t) {
	                    return arc(interpolate(t));
	                };
	            });
	        });
	        legend.append('text')
	            .attr('x', this.legendRectSize + this.legendSpacing)
	            .attr('y', this.legendRectSize - this.legendSpacing)
	            .text(function (d) { return d; });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof matrix_1.Matrix !== 'undefined' && matrix_1.Matrix) === 'function' && _a) || Object)
	    ], PieChart.prototype, "matrix", void 0);
	    PieChart = __decorate([
	        core_1.Component({
	            selector: 'pie-chart',
	            styles: [__webpack_require__(797)],
	            template: '<div class="chart"></div>'
	        }), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object])
	    ], PieChart);
	    return PieChart;
	    var _a, _b;
	}());
	exports.PieChart = PieChart;
	

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(47);
	var hierarchy_1 = __webpack_require__(402);
	var pie_chart_1 = __webpack_require__(396);
	var matrix_service_1 = __webpack_require__(256);
	var matrices_1 = __webpack_require__(407);
	var ComparisonResults = (function () {
	    function ComparisonResults(
	        //private comparison
	        matrixService, route) {
	        this.matrixService = matrixService;
	        this.route = route;
	        this.close = new core_1.EventEmitter();
	        this.navigated = false;
	    }
	    /*
	     * TODO: could do with better error handling
	     * */
	    ComparisonResults.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.forEach(function (params) {
	            if (params['naved'] !== undefined) {
	                var id = +params['naved'];
	                _this.navigated = true;
	                _this.matrixService.getMatrices()
	                    .then(function (matrices) {
	                    _this.matrices = matrices;
	                })
	                    .catch(function (e) { return _this.error = e; });
	            }
	            else {
	                _this.navigated = false;
	            }
	        });
	    };
	    ComparisonResults.prototype.goBack = function (comparisonsSaved) {
	        if (comparisonsSaved === void 0) { comparisonsSaved = true; }
	        this.close.emit(comparisonsSaved);
	        if (this.navigated) {
	            window.history.back();
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof matrices_1.Matrices !== 'undefined' && matrices_1.Matrices) === 'function' && _a) || Object)
	    ], ComparisonResults.prototype, "matrices", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], ComparisonResults.prototype, "close", void 0);
	    ComparisonResults = __decorate([
	        core_1.Component({
	            selector: 'comparison-results',
	            directives: [hierarchy_1.Hierarchy, pie_chart_1.PieChart],
	            template: __webpack_require__(741),
	            styles: [__webpack_require__(798)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof matrix_service_1.MatrixService !== 'undefined' && matrix_service_1.MatrixService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _c) || Object])
	    ], ComparisonResults);
	    return ComparisonResults;
	    var _a, _b, _c;
	}());
	exports.ComparisonResults = ComparisonResults;
	

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(47);
	var criterium_1 = __webpack_require__(255);
	var group_1 = __webpack_require__(571);
	var pair_1 = __webpack_require__(573);
	var criteria_service_1 = __webpack_require__(118);
	var calculator_1 = __webpack_require__(569);
	var matrices_1 = __webpack_require__(407);
	var matrix_service_1 = __webpack_require__(256);
	var Comparisons = (function () {
	    function Comparisons(criteriaService, matrixService, router) {
	        this.criteriaService = criteriaService;
	        this.matrixService = matrixService;
	        this.router = router;
	        this.comparisonsSaved = false;
	        this.CONVERSIONS = {
	            '1': 1 / 9, '2': 1 / 8, '3': 1 / 7, '4': 1 / 6, '5': 1 / 5, '6': 1 / 4, '7': 1 / 3,
	            '8': 1 / 2, '9': 1, '10': 2, '11': 3, '12': 4, '13': 5, '14': 6, '15': 7,
	            '16': 8, '17': 9
	        };
	        this.calculator = new calculator_1.Calculator();
	    }
	    //this works okay, but if you use only matrices with names replaced by criteria it will be best
	    Comparisons.prototype.ngOnInit = function () {
	        var _this = this;
	        this.groups = [];
	        this.groups_obj = {};
	        this.matrixService
	            .getMatrices()
	            .then(function (matrices) {
	            _this.matrices = matrices || new matrices_1.Matrices();
	            _this.criteriaService
	                .getCriteria()
	                .then(function (criteria) {
	                _this.criteria = criteria;
	                var changed = _this.criteriaChanged(_this.criteria);
	                /*
	                 * If changed, clear all comparisons, otherwise use saved matrices
	                 * */
	                if (changed) {
	                    _this.matrices.matrices = [];
	                    _this.groupBy(_this.criteria);
	                }
	                else {
	                    _this.constructGroupsFromMatrices();
	                }
	                _this.clearCriteria(_this.criteria);
	            })
	                .catch(function (error) { return _this.error = error; });
	        })
	            .catch(function (error) { return _this.error = error; });
	    };
	    Comparisons.prototype.criteriaChanged = function (criteria) {
	        for (var _i = 0, criteria_1 = criteria; _i < criteria_1.length; _i++) {
	            var criterium = criteria_1[_i];
	            if (criterium.changed)
	                return true;
	        }
	        return false;
	    };
	    Comparisons.prototype.clearCriteria = function (criteria) {
	        criteria.forEach(function (c) { return c.changed = false; });
	        var criterium = criteria[0];
	        criterium.changed = false;
	    };
	    /*
	     *TODO: we can work with JUST matrices, not both groups and matrices
	     * */
	    Comparisons.prototype.constructGroupsFromMatrices = function () {
	        this.groups = [];
	        for (var _i = 0, _a = this.matrices.matrices; _i < _a.length; _i++) {
	            var matrix = _a[_i];
	            var group = new group_1.Group(matrix.groupName);
	            group.dimension = matrix.names.length;
	            for (var i = 0; i < matrix.names.length; i++) {
	                for (var j = i + 1; j < matrix.names.length; j++) {
	                    var pair = new pair_1.Pair(new criterium_1.Criterium(matrix.names[i]), new criterium_1.Criterium(matrix.names[j]));
	                    if (matrix.data[i][j] < 1) {
	                        pair.score = "" + (matrix.data[j][i] - 8);
	                    }
	                    else {
	                        pair.score = "" + (matrix.data[i][j] + 8);
	                    }
	                    group.pairs.push(pair);
	                }
	            }
	            this.groups.push(group);
	        }
	    };
	    Comparisons.prototype.groupBy = function (criteria) {
	        criteria.reduce(function (acc, item) {
	            var key = item.parent_name;
	            key && (acc[key] = acc[key] || []);
	            key && acc[key].push(item);
	            return acc;
	        }, this.groups_obj);
	        this.pairwiseGroup(this.groups_obj);
	    };
	    /*
	     * This is the ghetto way, a better way is to use D3 to do topological sort
	     *
	     * */
	    Comparisons.prototype.pairwiseGroup = function (groups_obj) {
	        this.groups = [];
	        for (var key in groups_obj) {
	            if (groups_obj[key].length > 1) {
	                var criteria = groups_obj[key];
	                var group = new group_1.Group(key);
	                group.dimension = criteria.length;
	                for (var i = 0; i < criteria.length; i++) {
	                    for (var j = i + 1; j < criteria.length; j++) {
	                        group.pairs.push(new pair_1.Pair(criteria[i], criteria[j]));
	                    }
	                }
	                this.groups.push(group);
	            }
	        }
	    };
	    Comparisons.prototype.loadMatrices = function () {
	        var _this = this;
	        this.matrices = new matrices_1.Matrices();
	        this.groups.forEach(function (g, groupIndex) { return _this.loadUpperTriangle(g, groupIndex); });
	        this.invertUpperTriangle();
	    };
	    /*
	     * Load user provided comparisons into the upper triangle
	     * TODO: get rid of some of the confusion by seperating out into:
	     * 0) load an empty Matrix
	     * 1) init zeros using numeric.rep
	     * 2) extract names
	     * 3) load upper triangle
	     * TODO: this logic looks like it belongs in Matrix
	     * */
	    Comparisons.prototype.loadUpperTriangle = function (g, groupIndex) {
	        this.matrices.matrices.push({
	            groupName: g.groupName,
	            names: [],
	            data: []
	        });
	        var dim = g.dimension;
	        var pair_index = 0;
	        var matrix = this.matrices.matrices[groupIndex];
	        if (g.pairs.length > 0) {
	            matrix.names.push(g.pairs[0].left.name);
	        }
	        for (var row = 0; row < dim; row++) {
	            matrix.data.push([]);
	            for (var col = 0; col < dim; col++) {
	                if (row == col) {
	                    matrix.data[row].push(1);
	                    if (row !== (dim - 1)) {
	                        matrix.names.push(g.pairs[row].right.name);
	                    }
	                }
	                else if (row < col) {
	                    matrix
	                        .data[row]
	                        .push(this.CONVERSIONS[g.pairs[pair_index].score]);
	                    ++pair_index;
	                }
	                else {
	                    matrix.data[row].push(0);
	                }
	            }
	        }
	    };
	    Comparisons.prototype.invertUpperTriangle = function () {
	        for (var matrixIndex = 0; matrixIndex < this.matrices.matrices.length; matrixIndex++) {
	            var matrix = this.matrices.matrices[matrixIndex].data;
	            for (var row = 0; row < matrix.length; row++) {
	                for (var col = 0; col < row; col++) {
	                    matrix[row][col] = 1 / matrix[col][row];
	                }
	            }
	        }
	    };
	    Comparisons.prototype.save = function () {
	        var _this = this;
	        this.matrixService
	            .delete(1)
	            .then(function () {
	            return _this.matrixService.save(_this.matrices)
	                .then(function (matrices) {
	                _this.matrices = matrices; // saved criterium, w/ id if new
	                _this.goToResults(matrices);
	            });
	        })
	            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
	        this.criteriaService
	            .save(this.criteria[0])
	            .catch(function (e) { return _this.error = e; });
	    };
	    Comparisons.prototype.onCompute = function () {
	        this.loadMatrices();
	        this.calculator.calculateAll(this.matrices.matrices);
	        this.save();
	    };
	    Comparisons.prototype.goToResults = function (matrices) {
	        this.router.navigate(['/results', true]);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], Comparisons.prototype, "groups", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof matrices_1.Matrices !== 'undefined' && matrices_1.Matrices) === 'function' && _a) || Object)
	    ], Comparisons.prototype, "matrices", void 0);
	    Comparisons = __decorate([
	        core_1.Component({
	            selector: 'comparisons',
	            template: __webpack_require__(742),
	            styles: [__webpack_require__(799)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof criteria_service_1.CriteriaService !== 'undefined' && criteria_service_1.CriteriaService) === 'function' && _b) || Object, (typeof (_c = typeof matrix_service_1.MatrixService !== 'undefined' && matrix_service_1.MatrixService) === 'function' && _c) || Object, (typeof (_d = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _d) || Object])
	    ], Comparisons);
	    return Comparisons;
	    var _a, _b, _c, _d;
	}());
	exports.Comparisons = Comparisons;
	

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(47);
	var Observable_1 = __webpack_require__(5);
	var Subject_1 = __webpack_require__(41);
	var criteria_search_1 = __webpack_require__(575);
	var criterium_1 = __webpack_require__(255);
	var CriteriaSearch = (function () {
	    function CriteriaSearch(criteriaSearchService, router) {
	        this.criteriaSearchService = criteriaSearchService;
	        this.router = router;
	        //@Output() talk = new EventEmitter();
	        this.searchTerms = new Subject_1.Subject();
	    }
	    // Push a search term into the observable stream.
	    CriteriaSearch.prototype.search = function (term) {
	        this.searchTerms.next(term);
	    };
	    CriteriaSearch.prototype.ngOnInit = function () {
	        var _this = this;
	        this.criteria = this.searchTerms
	            .debounceTime(300) // wait for 300ms pause in events
	            .distinctUntilChanged() // ignore if next search term is same as previous
	            .switchMap(function (term) { return term // switch to new observable each time
	            ? _this.criteriaSearchService.search(term)
	            : Observable_1.Observable.of([]); })
	            .catch(function (error) {
	            // TODO: real error handling
	            console.log(error);
	            return Observable_1.Observable.of([]);
	        });
	    };
	    //bubble chosen parent up
	    CriteriaSearch.prototype.chooseParent = function (chosenParent) {
	        this.childCriterium.parent_id = chosenParent.id;
	        this.childCriterium.parent_name = chosenParent.name;
	        this.criteria = null;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof criterium_1.Criterium !== 'undefined' && criterium_1.Criterium) === 'function' && _a) || Object)
	    ], CriteriaSearch.prototype, "childCriterium", void 0);
	    CriteriaSearch = __decorate([
	        core_1.Component({
	            selector: 'criteria-search',
	            template: __webpack_require__(743),
	            styles: [__webpack_require__(800)],
	            providers: [criteria_search_1.CriteriaSearchService]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof criteria_search_1.CriteriaSearchService !== 'undefined' && criteria_search_1.CriteriaSearchService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
	    ], CriteriaSearch);
	    return CriteriaSearch;
	    var _a, _b, _c;
	}());
	exports.CriteriaSearch = CriteriaSearch;
	

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(47);
	var criteria_service_1 = __webpack_require__(118);
	var Criteria = (function () {
	    function Criteria(router, criteriaService) {
	        this.router = router;
	        this.criteriaService = criteriaService;
	        this.addingCriterium = false;
	    }
	    Criteria.prototype.getCriteria = function () {
	        var _this = this;
	        this.criteriaService
	            .getCriteria()
	            .then(function (criteria) { return _this.criteria = criteria; })
	            .catch(function (error) { return _this.error = error; });
	    };
	    Criteria.prototype.addCriterium = function () {
	        this.addingCriterium = true;
	        this.selectedCriterium = null;
	    };
	    Criteria.prototype.close = function (savedCriterium) {
	        this.addingCriterium = false;
	        if (savedCriterium) {
	            this.getCriteria();
	        }
	    };
	    Criteria.prototype.deleteCriterium = function (criterium, event) {
	        var _this = this;
	        event.stopPropagation();
	        this.criteriaService
	            .delete(criterium)
	            .then(function (res) {
	            _this.criteria = _this.criteria.filter(function (c) { return c !== criterium; });
	            _this.criteria.forEach(function (c) {
	                if (c.parent_id === criterium.id) {
	                    _this.deleteCriterium(c, event);
	                }
	            });
	            if (_this.selectedCriterium === criterium) {
	                _this.selectedCriterium = null;
	            }
	        })
	            .catch(function (error) { return _this.error = error; });
	    };
	    Criteria.prototype.ngOnInit = function () {
	        this.getCriteria();
	    };
	    Criteria.prototype.onSelect = function (criterium) {
	        this.selectedCriterium = criterium;
	        this.addingCriterium = false;
	    };
	    Criteria.prototype.gotoDetail = function () {
	        this.router.navigate([
	            '/detail',
	            this.selectedCriterium.id
	        ]);
	    };
	    Criteria = __decorate([
	        core_1.Component({
	            selector: 'criteria',
	            providers: [criteria_service_1.CriteriaService],
	            template: __webpack_require__(744),
	            styles: [__webpack_require__(801)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof criteria_service_1.CriteriaService !== 'undefined' && criteria_service_1.CriteriaService) === 'function' && _b) || Object])
	    ], Criteria);
	    return Criteria;
	    var _a, _b;
	}());
	exports.Criteria = Criteria;
	

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(47);
	var criterium_1 = __webpack_require__(255);
	var criteria_service_1 = __webpack_require__(118);
	var criteria_search_1 = __webpack_require__(399);
	var CriteriumDetail = (function () {
	    function CriteriumDetail(criteriaService, route) {
	        this.criteriaService = criteriaService;
	        this.route = route;
	        this.close = new core_1.EventEmitter();
	        this.navigated = false; //true if navigated here
	    }
	    CriteriumDetail.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.forEach(function (params) {
	            if (params['id'] !== undefined) {
	                var id = +params['id'];
	                _this.navigated = true;
	                _this.criteriaService.getCriterium(id)
	                    .then(function (criterium) { return _this.criterium = criterium; });
	            }
	            else {
	                _this.navigated = false;
	                _this.criterium = new criterium_1.Criterium();
	                _this.criteriaService.getCriterium(11)
	                    .then(function (criterium) {
	                    _this.decision = criterium;
	                    _this.decision.changed = true;
	                })
	                    .then(function () {
	                    return _this.criteriaService.save(_this.decision);
	                })
	                    .catch(function (error) { return _this.error = error; }); // TODO: Display error message
	            }
	        });
	    };
	    CriteriumDetail.prototype.save = function () {
	        var _this = this;
	        this.criteriaService
	            .save(this.criterium)
	            .then(function (criterium) {
	            _this.criterium = criterium; // saved criterium, w/ id if new
	            _this.goBack(criterium);
	        })
	            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
	    };
	    CriteriumDetail.prototype.goBack = function (savedCriterium) {
	        if (savedCriterium === void 0) { savedCriterium = null; }
	        this.close.emit(savedCriterium);
	        if (this.navigated) {
	            window.history.back();
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof criterium_1.Criterium !== 'undefined' && criterium_1.Criterium) === 'function' && _a) || Object)
	    ], CriteriumDetail.prototype, "criterium", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], CriteriumDetail.prototype, "close", void 0);
	    CriteriumDetail = __decorate([
	        core_1.Component({
	            selector: 'criterium-detail',
	            directives: [criteria_search_1.CriteriaSearch],
	            template: __webpack_require__(745),
	            styles: [__webpack_require__(802)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof criteria_service_1.CriteriaService !== 'undefined' && criteria_service_1.CriteriaService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _c) || Object])
	    ], CriteriumDetail);
	    return CriteriumDetail;
	    var _a, _b, _c;
	}());
	exports.CriteriumDetail = CriteriumDetail;
	

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var criteria_service_1 = __webpack_require__(118);
	var D3 = __webpack_require__(443);
	var Hierarchy = (function () {
	    /*Get the element reference from angular
	     * and interface with D3*/
	    function Hierarchy(element, criteriaService) {
	        this.element = element;
	        this.criteriaService = criteriaService;
	        this.htmlElement = this.element.nativeElement;
	        this.host = D3.select(this.element.nativeElement);
	    }
	    Hierarchy.prototype.getRoot = function () {
	        var _this = this;
	        return this.criteriaService
	            .getCriteria()
	            .then(function (criteria) {
	            _this.root = D3.stratify()
	                .id(function (d) { return d.id; })
	                .parentId(function (d) { return d.parent_id; })(criteria);
	        })
	            .catch(function (error) { return _this.error = error; });
	    };
	    Hierarchy.prototype.ngOnInit = function () {
	        var _this = this;
	        this.setup();
	        this.getRoot()
	            .then(function () {
	            _this.render();
	        });
	    };
	    Hierarchy.prototype.render = function () {
	        this.buildSvg();
	        this.buildHierarchy();
	        this.buildPaths();
	        this.buildNodes();
	    };
	    /*
	     * TODO: Add margins to boxes
	     * */
	    Hierarchy.prototype.setup = function () {
	        this.canvasHeight = 600;
	        this.canvasWidth = 800;
	        this.boxHeight = 50;
	        this.boxWidth = 50;
	    };
	    Hierarchy.prototype.buildSvg = function () {
	        this.svg = this.host.append("svg")
	            .attr("width", this.canvasWidth)
	            .attr("height", this.canvasHeight);
	        this.containerGroup = this.svg.append("g").attr("transform", "translate(0,60)");
	    };
	    Hierarchy.prototype.buildHierarchy = function () {
	        this.hierarchy = D3.hierarchy(this.root);
	        var tree = D3.tree().size([this.canvasWidth, this.canvasHeight - 160]);
	        tree(this.hierarchy);
	    };
	    Hierarchy.prototype.buildPaths = function () {
	        this.containerGroup.selectAll(".link")
	            .data(this.hierarchy.descendants().slice(1))
	            .enter().append("path")
	            .attr("class", "link")
	            .attr("d", function (d) {
	            return "M" + d.x + "," + d.y
	                + "C" + (d.x + d.parent.x) / 2 + "," + d.y
	                + " " + (d.x + d.parent.x) / 2 + "," + d.parent.y
	                + " " + d.parent.x + "," + d.parent.y;
	        });
	    };
	    Hierarchy.prototype.buildNodes = function () {
	        this.nodes = this.containerGroup.selectAll(".node")
	            .data(this.hierarchy.descendants())
	            .enter().append("g")
	            .attr("class", function (d) { return "node node--internal"; })
	            .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });
	        this.nodes.append("rect")
	            .attr("x", -this.boxWidth / 2)
	            .attr("y", -this.boxHeight / 2)
	            .attr("width", this.boxWidth)
	            .attr("height", this.boxHeight);
	        this.nodes.append("text")
	            .attr("font-family", "sans-serif")
	            .attr("font-size", "14px")
	            .attr("fill", "white")
	            .style("text-anchor", "middle")
	            .style("word-wrap", "break-word")
	            .style("width", 100)
	            .text(function (d) { return d.data.data.name + (d.data.data.weight || ""); });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], Hierarchy.prototype, "criteria", void 0);
	    Hierarchy = __decorate([
	        core_1.Component({
	            selector: 'hierarchy',
	            styles: [__webpack_require__(803)],
	            template: "\n\t\t<h2>Sample Hierarchy</h2>\n\t\t<p>Click criteria tab to edit</p>\n\t\t<ng-content></ng-content>\n\t",
	            directives: []
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof criteria_service_1.CriteriaService !== 'undefined' && criteria_service_1.CriteriaService) === 'function' && _b) || Object])
	    ], Hierarchy);
	    return Hierarchy;
	    var _a, _b;
	}());
	exports.Hierarchy = Hierarchy;
	

/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(47);
	var github_1 = __webpack_require__(171);
	var RepoBrowser = (function () {
	    function RepoBrowser(router, github) {
	        this.router = router;
	        this.github = github;
	    }
	    RepoBrowser.prototype.searchForOrg = function (orgName) {
	        var _this = this;
	        this.github.getOrg(orgName)
	            .subscribe(function (_a) {
	            var name = _a.name;
	            console.log(name);
	            _this.router.navigate(['/github', orgName]);
	        });
	    };
	    RepoBrowser = __decorate([
	        core_1.Component({
	            selector: 'repo-browser',
	            template: __webpack_require__(746),
	            styles: [__webpack_require__(804)]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof github_1.Github !== 'undefined' && github_1.Github) === 'function' && _b) || Object])
	    ], RepoBrowser);
	    return RepoBrowser;
	    var _a, _b;
	}());
	exports.RepoBrowser = RepoBrowser;
	

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(47);
	var github_1 = __webpack_require__(171);
	var RepoDetail = (function () {
	    function RepoDetail(github, router, route) {
	        this.github = github;
	        this.router = router;
	        this.route = route;
	        this.repoDetails = {};
	    }
	    RepoDetail.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.subscribe(function (params) {
	            _this.org = _this.router.routerState.parent(_this.route).snapshot.params['org'];
	            _this.repo = params['repo'] || '';
	            if (_this.repo) {
	                _this.github.getRepoForOrg(_this.org, _this.repo)
	                    .subscribe(function (repoDetails) {
	                    _this.repoDetails = repoDetails;
	                });
	            }
	        });
	    };
	    RepoDetail = __decorate([
	        core_1.Component({
	            selector: 'repo-detail',
	            styles: [__webpack_require__(805)],
	            template: __webpack_require__(747)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof github_1.Github !== 'undefined' && github_1.Github) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _c) || Object])
	    ], RepoDetail);
	    return RepoDetail;
	    var _a, _b, _c;
	}());
	exports.RepoDetail = RepoDetail;
	

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var github_1 = __webpack_require__(171);
	var router_1 = __webpack_require__(47);
	var RepoList = (function () {
	    function RepoList(github, route) {
	        this.github = github;
	        this.route = route;
	    }
	    RepoList.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.subscribe(function (params) {
	            _this.org = params['org'];
	            if (_this.org) {
	                _this.repos = _this.github.getReposForOrg(_this.org);
	            }
	        });
	    };
	    RepoList = __decorate([
	        core_1.Component({
	            selector: 'repo-list',
	            styles: [__webpack_require__(806)],
	            template: __webpack_require__(748),
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof github_1.Github !== 'undefined' && github_1.Github) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object])
	    ], RepoList);
	    return RepoList;
	    var _a, _b;
	}());
	exports.RepoList = RepoList;
	

/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var about_1 = __webpack_require__(254);
	var Home = (function () {
	    function Home() {
	    }
	    Home = __decorate([
	        core_1.Component({
	            selector: 'home',
	            directives: [about_1.About],
	            styles: [__webpack_require__(807)],
	            template: __webpack_require__(749)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Home);
	    return Home;
	}());
	exports.Home = Home;
	

/***/ },

/***/ 407:
/***/ function(module, exports) {

	"use strict";
	var Matrices = (function () {
	    function Matrices() {
	        this.matrices = [];
	    }
	    return Matrices;
	}());
	exports.Matrices = Matrices;
	

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org Version 4.2.2. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3 = global.d3 || {})));
	}(this, (function (exports) { 'use strict';

	  var version = "4.2.2";

	  function ascending(a, b) {
	    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	  }

	  function bisector(compare) {
	    if (compare.length === 1) compare = ascendingComparator(compare);
	    return {
	      left: function(a, x, lo, hi) {
	        if (lo == null) lo = 0;
	        if (hi == null) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) < 0) lo = mid + 1;
	          else hi = mid;
	        }
	        return lo;
	      },
	      right: function(a, x, lo, hi) {
	        if (lo == null) lo = 0;
	        if (hi == null) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) > 0) hi = mid;
	          else lo = mid + 1;
	        }
	        return lo;
	      }
	    };
	  }

	  function ascendingComparator(f) {
	    return function(d, x) {
	      return ascending(f(d), x);
	    };
	  }

	  var ascendingBisect = bisector(ascending);
	  var bisectRight = ascendingBisect.right;
	  var bisectLeft = ascendingBisect.left;

	  function descending(a, b) {
	    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	  }

	  function number(x) {
	    return x === null ? NaN : +x;
	  }

	  function variance(array, f) {
	    var n = array.length,
	        m = 0,
	        a,
	        d,
	        s = 0,
	        i = -1,
	        j = 0;

	    if (f == null) {
	      while (++i < n) {
	        if (!isNaN(a = number(array[i]))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    }

	    else {
	      while (++i < n) {
	        if (!isNaN(a = number(f(array[i], i, array)))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    }

	    if (j > 1) return s / (j - 1);
	  }

	  function deviation(array, f) {
	    var v = variance(array, f);
	    return v ? Math.sqrt(v) : v;
	  }

	  function extent(array, f) {
	    var i = -1,
	        n = array.length,
	        a,
	        b,
	        c;

	    if (f == null) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) { a = c = b; break; }
	      while (++i < n) if ((b = array[i]) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }

	    else {
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = c = b; break; }
	      while (++i < n) if ((b = f(array[i], i, array)) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }

	    return [a, c];
	  }

	  var array = Array.prototype;

	  var slice = array.slice;
	  var map = array.map;

	  function constant(x) {
	    return function() {
	      return x;
	    };
	  }

	  function identity(x) {
	    return x;
	  }

	  function range(start, stop, step) {
	    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

	    var i = -1,
	        n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
	        range = new Array(n);

	    while (++i < n) {
	      range[i] = start + i * step;
	    }

	    return range;
	  }

	  var e10 = Math.sqrt(50);
	  var e5 = Math.sqrt(10);
	  var e2 = Math.sqrt(2);
	  function ticks(start, stop, count) {
	    var step = tickStep(start, stop, count);
	    return range(
	      Math.ceil(start / step) * step,
	      Math.floor(stop / step) * step + step / 2, // inclusive
	      step
	    );
	  }

	  function tickStep(start, stop, count) {
	    var step0 = Math.abs(stop - start) / Math.max(0, count),
	        step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
	        error = step0 / step1;
	    if (error >= e10) step1 *= 10;
	    else if (error >= e5) step1 *= 5;
	    else if (error >= e2) step1 *= 2;
	    return stop < start ? -step1 : step1;
	  }

	  function sturges(values) {
	    return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
	  }

	  function histogram() {
	    var value = identity,
	        domain = extent,
	        threshold = sturges;

	    function histogram(data) {
	      var i,
	          n = data.length,
	          x,
	          values = new Array(n);

	      for (i = 0; i < n; ++i) {
	        values[i] = value(data[i], i, data);
	      }

	      var xz = domain(values),
	          x0 = xz[0],
	          x1 = xz[1],
	          tz = threshold(values, x0, x1);

	      // Convert number of thresholds into uniform thresholds.
	      if (!Array.isArray(tz)) tz = ticks(x0, x1, tz);

	      // Remove any thresholds outside the domain.
	      var m = tz.length;
	      while (tz[0] <= x0) tz.shift(), --m;
	      while (tz[m - 1] >= x1) tz.pop(), --m;

	      var bins = new Array(m + 1),
	          bin;

	      // Initialize bins.
	      for (i = 0; i <= m; ++i) {
	        bin = bins[i] = [];
	        bin.x0 = i > 0 ? tz[i - 1] : x0;
	        bin.x1 = i < m ? tz[i] : x1;
	      }

	      // Assign data to bins by value, ignoring any outside the domain.
	      for (i = 0; i < n; ++i) {
	        x = values[i];
	        if (x0 <= x && x <= x1) {
	          bins[bisectRight(tz, x, 0, m)].push(data[i]);
	        }
	      }

	      return bins;
	    }

	    histogram.value = function(_) {
	      return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), histogram) : value;
	    };

	    histogram.domain = function(_) {
	      return arguments.length ? (domain = typeof _ === "function" ? _ : constant([_[0], _[1]]), histogram) : domain;
	    };

	    histogram.thresholds = function(_) {
	      return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), histogram) : threshold;
	    };

	    return histogram;
	  }

	  function threshold(array, p, f) {
	    if (f == null) f = number;
	    if (!(n = array.length)) return;
	    if ((p = +p) <= 0 || n < 2) return +f(array[0], 0, array);
	    if (p >= 1) return +f(array[n - 1], n - 1, array);
	    var n,
	        h = (n - 1) * p,
	        i = Math.floor(h),
	        a = +f(array[i], i, array),
	        b = +f(array[i + 1], i + 1, array);
	    return a + (b - a) * (h - i);
	  }

	  function freedmanDiaconis(values, min, max) {
	    values = map.call(values, number).sort(ascending);
	    return Math.ceil((max - min) / (2 * (threshold(values, 0.75) - threshold(values, 0.25)) * Math.pow(values.length, -1 / 3)));
	  }

	  function scott(values, min, max) {
	    return Math.ceil((max - min) / (3.5 * deviation(values) * Math.pow(values.length, -1 / 3)));
	  }

	  function max(array, f) {
	    var i = -1,
	        n = array.length,
	        a,
	        b;

	    if (f == null) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
	    }

	    else {
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b > a) a = b;
	    }

	    return a;
	  }

	  function mean(array, f) {
	    var s = 0,
	        n = array.length,
	        a,
	        i = -1,
	        j = n;

	    if (f == null) {
	      while (++i < n) if (!isNaN(a = number(array[i]))) s += a; else --j;
	    }

	    else {
	      while (++i < n) if (!isNaN(a = number(f(array[i], i, array)))) s += a; else --j;
	    }

	    if (j) return s / j;
	  }

	  function median(array, f) {
	    var numbers = [],
	        n = array.length,
	        a,
	        i = -1;

	    if (f == null) {
	      while (++i < n) if (!isNaN(a = number(array[i]))) numbers.push(a);
	    }

	    else {
	      while (++i < n) if (!isNaN(a = number(f(array[i], i, array)))) numbers.push(a);
	    }

	    return threshold(numbers.sort(ascending), 0.5);
	  }

	  function merge(arrays) {
	    var n = arrays.length,
	        m,
	        i = -1,
	        j = 0,
	        merged,
	        array;

	    while (++i < n) j += arrays[i].length;
	    merged = new Array(j);

	    while (--n >= 0) {
	      array = arrays[n];
	      m = array.length;
	      while (--m >= 0) {
	        merged[--j] = array[m];
	      }
	    }

	    return merged;
	  }

	  function min(array, f) {
	    var i = -1,
	        n = array.length,
	        a,
	        b;

	    if (f == null) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
	    }

	    else {
	      while (++i < n) if ((b = f(array[i], i, array)) != null && b >= b) { a = b; break; }
	      while (++i < n) if ((b = f(array[i], i, array)) != null && a > b) a = b;
	    }

	    return a;
	  }

	  function pairs(array) {
	    var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
	    while (i < n) pairs[i] = [p, p = array[++i]];
	    return pairs;
	  }

	  function permute(array, indexes) {
	    var i = indexes.length, permutes = new Array(i);
	    while (i--) permutes[i] = array[indexes[i]];
	    return permutes;
	  }

	  function scan(array, compare) {
	    if (!(n = array.length)) return;
	    var i = 0,
	        n,
	        j = 0,
	        xi,
	        xj = array[j];

	    if (!compare) compare = ascending;

	    while (++i < n) if (compare(xi = array[i], xj) < 0 || compare(xj, xj) !== 0) xj = xi, j = i;

	    if (compare(xj, xj) === 0) return j;
	  }

	  function shuffle(array, i0, i1) {
	    var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
	        t,
	        i;

	    while (m) {
	      i = Math.random() * m-- | 0;
	      t = array[m + i0];
	      array[m + i0] = array[i + i0];
	      array[i + i0] = t;
	    }

	    return array;
	  }

	  function sum(array, f) {
	    var s = 0,
	        n = array.length,
	        a,
	        i = -1;

	    if (f == null) {
	      while (++i < n) if (a = +array[i]) s += a; // Note: zero and null are equivalent.
	    }

	    else {
	      while (++i < n) if (a = +f(array[i], i, array)) s += a;
	    }

	    return s;
	  }

	  function transpose(matrix) {
	    if (!(n = matrix.length)) return [];
	    for (var i = -1, m = min(matrix, length), transpose = new Array(m); ++i < m;) {
	      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
	        row[j] = matrix[j][i];
	      }
	    }
	    return transpose;
	  }

	  function length(d) {
	    return d.length;
	  }

	  function zip() {
	    return transpose(arguments);
	  }

	  var prefix = "$";

	  function Map() {}

	  Map.prototype = map$1.prototype = {
	    constructor: Map,
	    has: function(key) {
	      return (prefix + key) in this;
	    },
	    get: function(key) {
	      return this[prefix + key];
	    },
	    set: function(key, value) {
	      this[prefix + key] = value;
	      return this;
	    },
	    remove: function(key) {
	      var property = prefix + key;
	      return property in this && delete this[property];
	    },
	    clear: function() {
	      for (var property in this) if (property[0] === prefix) delete this[property];
	    },
	    keys: function() {
	      var keys = [];
	      for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
	      return keys;
	    },
	    values: function() {
	      var values = [];
	      for (var property in this) if (property[0] === prefix) values.push(this[property]);
	      return values;
	    },
	    entries: function() {
	      var entries = [];
	      for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
	      return entries;
	    },
	    size: function() {
	      var size = 0;
	      for (var property in this) if (property[0] === prefix) ++size;
	      return size;
	    },
	    empty: function() {
	      for (var property in this) if (property[0] === prefix) return false;
	      return true;
	    },
	    each: function(f) {
	      for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
	    }
	  };

	  function map$1(object, f) {
	    var map = new Map;

	    // Copy constructor.
	    if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

	    // Index array by numeric index or specified key function.
	    else if (Array.isArray(object)) {
	      var i = -1,
	          n = object.length,
	          o;

	      if (f == null) while (++i < n) map.set(i, object[i]);
	      else while (++i < n) map.set(f(o = object[i], i, object), o);
	    }

	    // Convert object to map.
	    else if (object) for (var key in object) map.set(key, object[key]);

	    return map;
	  }

	  function nest() {
	    var keys = [],
	        sortKeys = [],
	        sortValues,
	        rollup,
	        nest;

	    function apply(array, depth, createResult, setResult) {
	      if (depth >= keys.length) return rollup != null
	          ? rollup(array) : (sortValues != null
	          ? array.sort(sortValues)
	          : array);

	      var i = -1,
	          n = array.length,
	          key = keys[depth++],
	          keyValue,
	          value,
	          valuesByKey = map$1(),
	          values,
	          result = createResult();

	      while (++i < n) {
	        if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
	          values.push(value);
	        } else {
	          valuesByKey.set(keyValue, [value]);
	        }
	      }

	      valuesByKey.each(function(values, key) {
	        setResult(result, key, apply(values, depth, createResult, setResult));
	      });

	      return result;
	    }

	    function entries(map, depth) {
	      if (++depth > keys.length) return map;
	      var array, sortKey = sortKeys[depth - 1];
	      if (rollup != null && depth >= keys.length) array = map.entries();
	      else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
	      return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
	    }

	    return nest = {
	      object: function(array) { return apply(array, 0, createObject, setObject); },
	      map: function(array) { return apply(array, 0, createMap, setMap); },
	      entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
	      key: function(d) { keys.push(d); return nest; },
	      sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
	      sortValues: function(order) { sortValues = order; return nest; },
	      rollup: function(f) { rollup = f; return nest; }
	    };
	  }

	  function createObject() {
	    return {};
	  }

	  function setObject(object, key, value) {
	    object[key] = value;
	  }

	  function createMap() {
	    return map$1();
	  }

	  function setMap(map, key, value) {
	    map.set(key, value);
	  }

	  function Set() {}

	  var proto = map$1.prototype;

	  Set.prototype = set.prototype = {
	    constructor: Set,
	    has: proto.has,
	    add: function(value) {
	      value += "";
	      this[prefix + value] = value;
	      return this;
	    },
	    remove: proto.remove,
	    clear: proto.clear,
	    values: proto.keys,
	    size: proto.size,
	    empty: proto.empty,
	    each: proto.each
	  };

	  function set(object, f) {
	    var set = new Set;

	    // Copy constructor.
	    if (object instanceof Set) object.each(function(value) { set.add(value); });

	    // Otherwise, assume it’s an array.
	    else if (object) {
	      var i = -1, n = object.length;
	      if (f == null) while (++i < n) set.add(object[i]);
	      else while (++i < n) set.add(f(object[i], i, object));
	    }

	    return set;
	  }

	  function keys(map) {
	    var keys = [];
	    for (var key in map) keys.push(key);
	    return keys;
	  }

	  function values(map) {
	    var values = [];
	    for (var key in map) values.push(map[key]);
	    return values;
	  }

	  function entries(map) {
	    var entries = [];
	    for (var key in map) entries.push({key: key, value: map[key]});
	    return entries;
	  }

	  function uniform(min, max) {
	    min = min == null ? 0 : +min;
	    max = max == null ? 1 : +max;
	    if (arguments.length === 1) max = min, min = 0;
	    else max -= min;
	    return function() {
	      return Math.random() * max + min;
	    };
	  }

	  function normal(mu, sigma) {
	    var x, r;
	    mu = mu == null ? 0 : +mu;
	    sigma = sigma == null ? 1 : +sigma;
	    return function() {
	      var y;

	      // If available, use the second previously-generated uniform random.
	      if (x != null) y = x, x = null;

	      // Otherwise, generate a new x and y.
	      else do {
	        x = Math.random() * 2 - 1;
	        y = Math.random() * 2 - 1;
	        r = x * x + y * y;
	      } while (!r || r > 1);

	      return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
	    };
	  }

	  function logNormal() {
	    var randomNormal = normal.apply(this, arguments);
	    return function() {
	      return Math.exp(randomNormal());
	    };
	  }

	  function irwinHall(n) {
	    return function() {
	      for (var sum = 0, i = 0; i < n; ++i) sum += Math.random();
	      return sum;
	    };
	  }

	  function bates(n) {
	    var randomIrwinHall = irwinHall(n);
	    return function() {
	      return randomIrwinHall() / n;
	    };
	  }

	  function exponential(lambda) {
	    return function() {
	      return -Math.log(1 - Math.random()) / lambda;
	    };
	  }

	  function linear(t) {
	    return +t;
	  }

	  function quadIn(t) {
	    return t * t;
	  }

	  function quadOut(t) {
	    return t * (2 - t);
	  }

	  function quadInOut(t) {
	    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
	  }

	  function cubicIn(t) {
	    return t * t * t;
	  }

	  function cubicOut(t) {
	    return --t * t * t + 1;
	  }

	  function easeCubicInOut(t) {
	    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
	  }

	  var exponent = 3;

	  var polyIn = (function custom(e) {
	    e = +e;

	    function polyIn(t) {
	      return Math.pow(t, e);
	    }

	    polyIn.exponent = custom;

	    return polyIn;
	  })(exponent);

	  var polyOut = (function custom(e) {
	    e = +e;

	    function polyOut(t) {
	      return 1 - Math.pow(1 - t, e);
	    }

	    polyOut.exponent = custom;

	    return polyOut;
	  })(exponent);

	  var polyInOut = (function custom(e) {
	    e = +e;

	    function polyInOut(t) {
	      return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
	    }

	    polyInOut.exponent = custom;

	    return polyInOut;
	  })(exponent);

	  var pi = Math.PI;
	  var halfPi = pi / 2;
	  function sinIn(t) {
	    return 1 - Math.cos(t * halfPi);
	  }

	  function sinOut(t) {
	    return Math.sin(t * halfPi);
	  }

	  function sinInOut(t) {
	    return (1 - Math.cos(pi * t)) / 2;
	  }

	  function expIn(t) {
	    return Math.pow(2, 10 * t - 10);
	  }

	  function expOut(t) {
	    return 1 - Math.pow(2, -10 * t);
	  }

	  function expInOut(t) {
	    return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
	  }

	  function circleIn(t) {
	    return 1 - Math.sqrt(1 - t * t);
	  }

	  function circleOut(t) {
	    return Math.sqrt(1 - --t * t);
	  }

	  function circleInOut(t) {
	    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
	  }

	  var b1 = 4 / 11;
	  var b2 = 6 / 11;
	  var b3 = 8 / 11;
	  var b4 = 3 / 4;
	  var b5 = 9 / 11;
	  var b6 = 10 / 11;
	  var b7 = 15 / 16;
	  var b8 = 21 / 22;
	  var b9 = 63 / 64;
	  var b0 = 1 / b1 / b1;
	  function bounceIn(t) {
	    return 1 - bounceOut(1 - t);
	  }

	  function bounceOut(t) {
	    return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
	  }

	  function bounceInOut(t) {
	    return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
	  }

	  var overshoot = 1.70158;

	  var backIn = (function custom(s) {
	    s = +s;

	    function backIn(t) {
	      return t * t * ((s + 1) * t - s);
	    }

	    backIn.overshoot = custom;

	    return backIn;
	  })(overshoot);

	  var backOut = (function custom(s) {
	    s = +s;

	    function backOut(t) {
	      return --t * t * ((s + 1) * t + s) + 1;
	    }

	    backOut.overshoot = custom;

	    return backOut;
	  })(overshoot);

	  var backInOut = (function custom(s) {
	    s = +s;

	    function backInOut(t) {
	      return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
	    }

	    backInOut.overshoot = custom;

	    return backInOut;
	  })(overshoot);

	  var tau = 2 * Math.PI;
	  var amplitude = 1;
	  var period = 0.3;
	  var elasticIn = (function custom(a, p) {
	    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

	    function elasticIn(t) {
	      return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
	    }

	    elasticIn.amplitude = function(a) { return custom(a, p * tau); };
	    elasticIn.period = function(p) { return custom(a, p); };

	    return elasticIn;
	  })(amplitude, period);

	  var elasticOut = (function custom(a, p) {
	    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

	    function elasticOut(t) {
	      return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
	    }

	    elasticOut.amplitude = function(a) { return custom(a, p * tau); };
	    elasticOut.period = function(p) { return custom(a, p); };

	    return elasticOut;
	  })(amplitude, period);

	  var elasticInOut = (function custom(a, p) {
	    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

	    function elasticInOut(t) {
	      return ((t = t * 2 - 1) < 0
	          ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
	          : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
	    }

	    elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
	    elasticInOut.period = function(p) { return custom(a, p); };

	    return elasticInOut;
	  })(amplitude, period);

	  function area(polygon) {
	    var i = -1,
	        n = polygon.length,
	        a,
	        b = polygon[n - 1],
	        area = 0;

	    while (++i < n) {
	      a = b;
	      b = polygon[i];
	      area += a[1] * b[0] - a[0] * b[1];
	    }

	    return area / 2;
	  }

	  function centroid(polygon) {
	    var i = -1,
	        n = polygon.length,
	        x = 0,
	        y = 0,
	        a,
	        b = polygon[n - 1],
	        c,
	        k = 0;

	    while (++i < n) {
	      a = b;
	      b = polygon[i];
	      k += c = a[0] * b[1] - b[0] * a[1];
	      x += (a[0] + b[0]) * c;
	      y += (a[1] + b[1]) * c;
	    }

	    return k *= 3, [x / k, y / k];
	  }

	  // Returns the 2D cross product of AB and AC vectors, i.e., the z-component of
	  // the 3D cross product in a quadrant I Cartesian coordinate system (+x is
	  // right, +y is up). Returns a positive value if ABC is counter-clockwise,
	  // negative if clockwise, and zero if the points are collinear.
	  function cross(a, b, c) {
	    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
	  }

	  function lexicographicOrder(a, b) {
	    return a[0] - b[0] || a[1] - b[1];
	  }

	  // Computes the upper convex hull per the monotone chain algorithm.
	  // Assumes points.length >= 3, is sorted by x, unique in y.
	  // Returns an array of indices into points in left-to-right order.
	  function computeUpperHullIndexes(points) {
	    var n = points.length,
	        indexes = [0, 1],
	        size = 2;

	    for (var i = 2; i < n; ++i) {
	      while (size > 1 && cross(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0) --size;
	      indexes[size++] = i;
	    }

	    return indexes.slice(0, size); // remove popped points
	  }

	  function hull(points) {
	    if ((n = points.length) < 3) return null;

	    var i,
	        n,
	        sortedPoints = new Array(n),
	        flippedPoints = new Array(n);

	    for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
	    sortedPoints.sort(lexicographicOrder);
	    for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];

	    var upperIndexes = computeUpperHullIndexes(sortedPoints),
	        lowerIndexes = computeUpperHullIndexes(flippedPoints);

	    // Construct the hull polygon, removing possible duplicate endpoints.
	    var skipLeft = lowerIndexes[0] === upperIndexes[0],
	        skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1],
	        hull = [];

	    // Add upper hull in right-to-l order.
	    // Then add lower hull in left-to-right order.
	    for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
	    for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);

	    return hull;
	  }

	  function contains(polygon, point) {
	    var n = polygon.length,
	        p = polygon[n - 1],
	        x = point[0], y = point[1],
	        x0 = p[0], y0 = p[1],
	        x1, y1,
	        inside = false;

	    for (var i = 0; i < n; ++i) {
	      p = polygon[i], x1 = p[0], y1 = p[1];
	      if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside;
	      x0 = x1, y0 = y1;
	    }

	    return inside;
	  }

	  function length$1(polygon) {
	    var i = -1,
	        n = polygon.length,
	        b = polygon[n - 1],
	        xa,
	        ya,
	        xb = b[0],
	        yb = b[1],
	        perimeter = 0;

	    while (++i < n) {
	      xa = xb;
	      ya = yb;
	      b = polygon[i];
	      xb = b[0];
	      yb = b[1];
	      xa -= xb;
	      ya -= yb;
	      perimeter += Math.sqrt(xa * xa + ya * ya);
	    }

	    return perimeter;
	  }

	var   pi$1 = Math.PI;
	var   tau$1 = 2 * pi$1;
	  var epsilon = 1e-6;
	  var tauEpsilon = tau$1 - epsilon;
	  function Path() {
	    this._x0 = this._y0 = // start of current subpath
	    this._x1 = this._y1 = null; // end of current subpath
	    this._ = [];
	  }

	  function path() {
	    return new Path;
	  }

	  Path.prototype = path.prototype = {
	    constructor: Path,
	    moveTo: function(x, y) {
	      this._.push("M", this._x0 = this._x1 = +x, ",", this._y0 = this._y1 = +y);
	    },
	    closePath: function() {
	      if (this._x1 !== null) {
	        this._x1 = this._x0, this._y1 = this._y0;
	        this._.push("Z");
	      }
	    },
	    lineTo: function(x, y) {
	      this._.push("L", this._x1 = +x, ",", this._y1 = +y);
	    },
	    quadraticCurveTo: function(x1, y1, x, y) {
	      this._.push("Q", +x1, ",", +y1, ",", this._x1 = +x, ",", this._y1 = +y);
	    },
	    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
	      this._.push("C", +x1, ",", +y1, ",", +x2, ",", +y2, ",", this._x1 = +x, ",", this._y1 = +y);
	    },
	    arcTo: function(x1, y1, x2, y2, r) {
	      x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
	      var x0 = this._x1,
	          y0 = this._y1,
	          x21 = x2 - x1,
	          y21 = y2 - y1,
	          x01 = x0 - x1,
	          y01 = y0 - y1,
	          l01_2 = x01 * x01 + y01 * y01;

	      // Is the radius negative? Error.
	      if (r < 0) throw new Error("negative radius: " + r);

	      // Is this path empty? Move to (x1,y1).
	      if (this._x1 === null) {
	        this._.push(
	          "M", this._x1 = x1, ",", this._y1 = y1
	        );
	      }

	      // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
	      else if (!(l01_2 > epsilon));

	      // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
	      // Equivalently, is (x1,y1) coincident with (x2,y2)?
	      // Or, is the radius zero? Line to (x1,y1).
	      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
	        this._.push(
	          "L", this._x1 = x1, ",", this._y1 = y1
	        );
	      }

	      // Otherwise, draw an arc!
	      else {
	        var x20 = x2 - x0,
	            y20 = y2 - y0,
	            l21_2 = x21 * x21 + y21 * y21,
	            l20_2 = x20 * x20 + y20 * y20,
	            l21 = Math.sqrt(l21_2),
	            l01 = Math.sqrt(l01_2),
	            l = r * Math.tan((pi$1 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
	            t01 = l / l01,
	            t21 = l / l21;

	        // If the start tangent is not coincident with (x0,y0), line to.
	        if (Math.abs(t01 - 1) > epsilon) {
	          this._.push(
	            "L", x1 + t01 * x01, ",", y1 + t01 * y01
	          );
	        }

	        this._.push(
	          "A", r, ",", r, ",0,0,", +(y01 * x20 > x01 * y20), ",", this._x1 = x1 + t21 * x21, ",", this._y1 = y1 + t21 * y21
	        );
	      }
	    },
	    arc: function(x, y, r, a0, a1, ccw) {
	      x = +x, y = +y, r = +r;
	      var dx = r * Math.cos(a0),
	          dy = r * Math.sin(a0),
	          x0 = x + dx,
	          y0 = y + dy,
	          cw = 1 ^ ccw,
	          da = ccw ? a0 - a1 : a1 - a0;

	      // Is the radius negative? Error.
	      if (r < 0) throw new Error("negative radius: " + r);

	      // Is this path empty? Move to (x0,y0).
	      if (this._x1 === null) {
	        this._.push(
	          "M", x0, ",", y0
	        );
	      }

	      // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
	      else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
	        this._.push(
	          "L", x0, ",", y0
	        );
	      }

	      // Is this arc empty? We’re done.
	      if (!r) return;

	      // Is this a complete circle? Draw two arcs to complete the circle.
	      if (da > tauEpsilon) {
	        this._.push(
	          "A", r, ",", r, ",0,1,", cw, ",", x - dx, ",", y - dy,
	          "A", r, ",", r, ",0,1,", cw, ",", this._x1 = x0, ",", this._y1 = y0
	        );
	      }

	      // Otherwise, draw an arc!
	      else {
	        if (da < 0) da = da % tau$1 + tau$1;
	        this._.push(
	          "A", r, ",", r, ",0,", +(da >= pi$1), ",", cw, ",", this._x1 = x + r * Math.cos(a1), ",", this._y1 = y + r * Math.sin(a1)
	        );
	      }
	    },
	    rect: function(x, y, w, h) {
	      this._.push("M", this._x0 = this._x1 = +x, ",", this._y0 = this._y1 = +y, "h", +w, "v", +h, "h", -w, "Z");
	    },
	    toString: function() {
	      return this._.join("");
	    }
	  };

	  function tree_add(d) {
	    var x = +this._x.call(null, d),
	        y = +this._y.call(null, d);
	    return add(this.cover(x, y), x, y, d);
	  }

	  function add(tree, x, y, d) {
	    if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

	    var parent,
	        node = tree._root,
	        leaf = {data: d},
	        x0 = tree._x0,
	        y0 = tree._y0,
	        x1 = tree._x1,
	        y1 = tree._y1,
	        xm,
	        ym,
	        xp,
	        yp,
	        right,
	        bottom,
	        i,
	        j;

	    // If the tree is empty, initialize the root as a leaf.
	    if (!node) return tree._root = leaf, tree;

	    // Find the existing leaf for the new point, or add it.
	    while (node.length) {
	      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
	      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
	      if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
	    }

	    // Is the new point is exactly coincident with the existing point?
	    xp = +tree._x.call(null, node.data);
	    yp = +tree._y.call(null, node.data);
	    if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

	    // Otherwise, split the leaf node until the old and new point are separated.
	    do {
	      parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
	      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
	      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
	    } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
	    return parent[j] = node, parent[i] = leaf, tree;
	  }

	  function addAll(data) {
	    var d, i, n = data.length,
	        x,
	        y,
	        xz = new Array(n),
	        yz = new Array(n),
	        x0 = Infinity,
	        y0 = Infinity,
	        x1 = -Infinity,
	        y1 = -Infinity;

	    // Compute the points and their extent.
	    for (i = 0; i < n; ++i) {
	      if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
	      xz[i] = x;
	      yz[i] = y;
	      if (x < x0) x0 = x;
	      if (x > x1) x1 = x;
	      if (y < y0) y0 = y;
	      if (y > y1) y1 = y;
	    }

	    // If there were no (valid) points, inherit the existing extent.
	    if (x1 < x0) x0 = this._x0, x1 = this._x1;
	    if (y1 < y0) y0 = this._y0, y1 = this._y1;

	    // Expand the tree to cover the new points.
	    this.cover(x0, y0).cover(x1, y1);

	    // Add the new points.
	    for (i = 0; i < n; ++i) {
	      add(this, xz[i], yz[i], data[i]);
	    }

	    return this;
	  }

	  function tree_cover(x, y) {
	    if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

	    var x0 = this._x0,
	        y0 = this._y0,
	        x1 = this._x1,
	        y1 = this._y1;

	    // If the quadtree has no extent, initialize them.
	    // Integer extent are necessary so that if we later double the extent,
	    // the existing quadrant boundaries don’t change due to floating point error!
	    if (isNaN(x0)) {
	      x1 = (x0 = Math.floor(x)) + 1;
	      y1 = (y0 = Math.floor(y)) + 1;
	    }

	    // Otherwise, double repeatedly to cover.
	    else if (x0 > x || x > x1 || y0 > y || y > y1) {
	      var z = x1 - x0,
	          node = this._root,
	          parent,
	          i;

	      switch (i = (y < (y0 + y1) / 2) << 1 | (x < (x0 + x1) / 2)) {
	        case 0: {
	          do parent = new Array(4), parent[i] = node, node = parent;
	          while (z *= 2, x1 = x0 + z, y1 = y0 + z, x > x1 || y > y1);
	          break;
	        }
	        case 1: {
	          do parent = new Array(4), parent[i] = node, node = parent;
	          while (z *= 2, x0 = x1 - z, y1 = y0 + z, x0 > x || y > y1);
	          break;
	        }
	        case 2: {
	          do parent = new Array(4), parent[i] = node, node = parent;
	          while (z *= 2, x1 = x0 + z, y0 = y1 - z, x > x1 || y0 > y);
	          break;
	        }
	        case 3: {
	          do parent = new Array(4), parent[i] = node, node = parent;
	          while (z *= 2, x0 = x1 - z, y0 = y1 - z, x0 > x || y0 > y);
	          break;
	        }
	      }

	      if (this._root && this._root.length) this._root = node;
	    }

	    // If the quadtree covers the point already, just return.
	    else return this;

	    this._x0 = x0;
	    this._y0 = y0;
	    this._x1 = x1;
	    this._y1 = y1;
	    return this;
	  }

	  function tree_data() {
	    var data = [];
	    this.visit(function(node) {
	      if (!node.length) do data.push(node.data); while (node = node.next)
	    });
	    return data;
	  }

	  function tree_extent(_) {
	    return arguments.length
	        ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
	        : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
	  }

	  function Quad(node, x0, y0, x1, y1) {
	    this.node = node;
	    this.x0 = x0;
	    this.y0 = y0;
	    this.x1 = x1;
	    this.y1 = y1;
	  }

	  function tree_find(x, y, radius) {
	    var data,
	        x0 = this._x0,
	        y0 = this._y0,
	        x1,
	        y1,
	        x2,
	        y2,
	        x3 = this._x1,
	        y3 = this._y1,
	        quads = [],
	        node = this._root,
	        q,
	        i;

	    if (node) quads.push(new Quad(node, x0, y0, x3, y3));
	    if (radius == null) radius = Infinity;
	    else {
	      x0 = x - radius, y0 = y - radius;
	      x3 = x + radius, y3 = y + radius;
	      radius *= radius;
	    }

	    while (q = quads.pop()) {

	      // Stop searching if this quadrant can’t contain a closer node.
	      if (!(node = q.node)
	          || (x1 = q.x0) > x3
	          || (y1 = q.y0) > y3
	          || (x2 = q.x1) < x0
	          || (y2 = q.y1) < y0) continue;

	      // Bisect the current quadrant.
	      if (node.length) {
	        var xm = (x1 + x2) / 2,
	            ym = (y1 + y2) / 2;

	        quads.push(
	          new Quad(node[3], xm, ym, x2, y2),
	          new Quad(node[2], x1, ym, xm, y2),
	          new Quad(node[1], xm, y1, x2, ym),
	          new Quad(node[0], x1, y1, xm, ym)
	        );

	        // Visit the closest quadrant first.
	        if (i = (y >= ym) << 1 | (x >= xm)) {
	          q = quads[quads.length - 1];
	          quads[quads.length - 1] = quads[quads.length - 1 - i];
	          quads[quads.length - 1 - i] = q;
	        }
	      }

	      // Visit this point. (Visiting coincident points isn’t necessary!)
	      else {
	        var dx = x - +this._x.call(null, node.data),
	            dy = y - +this._y.call(null, node.data),
	            d2 = dx * dx + dy * dy;
	        if (d2 < radius) {
	          var d = Math.sqrt(radius = d2);
	          x0 = x - d, y0 = y - d;
	          x3 = x + d, y3 = y + d;
	          data = node.data;
	        }
	      }
	    }

	    return data;
	  }

	  function tree_remove(d) {
	    if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

	    var parent,
	        node = this._root,
	        retainer,
	        previous,
	        next,
	        x0 = this._x0,
	        y0 = this._y0,
	        x1 = this._x1,
	        y1 = this._y1,
	        x,
	        y,
	        xm,
	        ym,
	        right,
	        bottom,
	        i,
	        j;

	    // If the tree is empty, initialize the root as a leaf.
	    if (!node) return this;

	    // Find the leaf node for the point.
	    // While descending, also retain the deepest parent with a non-removed sibling.
	    if (node.length) while (true) {
	      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
	      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
	      if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
	      if (!node.length) break;
	      if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
	    }

	    // Find the point to remove.
	    while (node.data !== d) if (!(previous = node, node = node.next)) return this;
	    if (next = node.next) delete node.next;

	    // If there are multiple coincident points, remove just the point.
	    if (previous) return (next ? previous.next = next : delete previous.next), this;

	    // If this is the root point, remove it.
	    if (!parent) return this._root = next, this;

	    // Remove this leaf.
	    next ? parent[i] = next : delete parent[i];

	    // If the parent now contains exactly one leaf, collapse superfluous parents.
	    if ((node = parent[0] || parent[1] || parent[2] || parent[3])
	        && node === (parent[3] || parent[2] || parent[1] || parent[0])
	        && !node.length) {
	      if (retainer) retainer[j] = node;
	      else this._root = node;
	    }

	    return this;
	  }

	  function removeAll(data) {
	    for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
	    return this;
	  }

	  function tree_root() {
	    return this._root;
	  }

	  function tree_size() {
	    var size = 0;
	    this.visit(function(node) {
	      if (!node.length) do ++size; while (node = node.next)
	    });
	    return size;
	  }

	  function tree_visit(callback) {
	    var quads = [], q, node = this._root, child, x0, y0, x1, y1;
	    if (node) quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
	    while (q = quads.pop()) {
	      if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
	        var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
	        if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
	        if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
	        if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
	        if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
	      }
	    }
	    return this;
	  }

	  function tree_visitAfter(callback) {
	    var quads = [], next = [], q;
	    if (this._root) quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
	    while (q = quads.pop()) {
	      var node = q.node;
	      if (node.length) {
	        var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
	        if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
	        if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
	        if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
	        if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
	      }
	      next.push(q);
	    }
	    while (q = next.pop()) {
	      callback(q.node, q.x0, q.y0, q.x1, q.y1);
	    }
	    return this;
	  }

	  function defaultX(d) {
	    return d[0];
	  }

	  function tree_x(_) {
	    return arguments.length ? (this._x = _, this) : this._x;
	  }

	  function defaultY(d) {
	    return d[1];
	  }

	  function tree_y(_) {
	    return arguments.length ? (this._y = _, this) : this._y;
	  }

	  function quadtree(nodes, x, y) {
	    var tree = new Quadtree(x == null ? defaultX : x, y == null ? defaultY : y, NaN, NaN, NaN, NaN);
	    return nodes == null ? tree : tree.addAll(nodes);
	  }

	  function Quadtree(x, y, x0, y0, x1, y1) {
	    this._x = x;
	    this._y = y;
	    this._x0 = x0;
	    this._y0 = y0;
	    this._x1 = x1;
	    this._y1 = y1;
	    this._root = undefined;
	  }

	  function leaf_copy(leaf) {
	    var copy = {data: leaf.data}, next = copy;
	    while (leaf = leaf.next) next = next.next = {data: leaf.data};
	    return copy;
	  }

	  var treeProto = quadtree.prototype = Quadtree.prototype;

	  treeProto.copy = function() {
	    var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
	        node = this._root,
	        nodes,
	        child;

	    if (!node) return copy;

	    if (!node.length) return copy._root = leaf_copy(node), copy;

	    nodes = [{source: node, target: copy._root = new Array(4)}];
	    while (node = nodes.pop()) {
	      for (var i = 0; i < 4; ++i) {
	        if (child = node.source[i]) {
	          if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
	          else node.target[i] = leaf_copy(child);
	        }
	      }
	    }

	    return copy;
	  };

	  treeProto.add = tree_add;
	  treeProto.addAll = addAll;
	  treeProto.cover = tree_cover;
	  treeProto.data = tree_data;
	  treeProto.extent = tree_extent;
	  treeProto.find = tree_find;
	  treeProto.remove = tree_remove;
	  treeProto.removeAll = removeAll;
	  treeProto.root = tree_root;
	  treeProto.size = tree_size;
	  treeProto.visit = tree_visit;
	  treeProto.visitAfter = tree_visitAfter;
	  treeProto.x = tree_x;
	  treeProto.y = tree_y;

	  var slice$1 = [].slice;

	  var noabort = {};

	  function Queue(size) {
	    if (!(size >= 1)) throw new Error;
	    this._size = size;
	    this._call =
	    this._error = null;
	    this._tasks = [];
	    this._data = [];
	    this._waiting =
	    this._active =
	    this._ended =
	    this._start = 0; // inside a synchronous task callback?
	  }

	  Queue.prototype = queue.prototype = {
	    constructor: Queue,
	    defer: function(callback) {
	      if (typeof callback !== "function" || this._call) throw new Error;
	      if (this._error != null) return this;
	      var t = slice$1.call(arguments, 1);
	      t.push(callback);
	      ++this._waiting, this._tasks.push(t);
	      poke(this);
	      return this;
	    },
	    abort: function() {
	      if (this._error == null) abort(this, new Error("abort"));
	      return this;
	    },
	    await: function(callback) {
	      if (typeof callback !== "function" || this._call) throw new Error;
	      this._call = function(error, results) { callback.apply(null, [error].concat(results)); };
	      maybeNotify(this);
	      return this;
	    },
	    awaitAll: function(callback) {
	      if (typeof callback !== "function" || this._call) throw new Error;
	      this._call = callback;
	      maybeNotify(this);
	      return this;
	    }
	  };

	  function poke(q) {
	    if (!q._start) try { start(q); } // let the current task complete
	    catch (e) { if (q._tasks[q._ended + q._active - 1]) abort(q, e); } // task errored synchronously
	  }

	  function start(q) {
	    while (q._start = q._waiting && q._active < q._size) {
	      var i = q._ended + q._active,
	          t = q._tasks[i],
	          j = t.length - 1,
	          c = t[j];
	      t[j] = end(q, i);
	      --q._waiting, ++q._active;
	      t = c.apply(null, t);
	      if (!q._tasks[i]) continue; // task finished synchronously
	      q._tasks[i] = t || noabort;
	    }
	  }

	  function end(q, i) {
	    return function(e, r) {
	      if (!q._tasks[i]) return; // ignore multiple callbacks
	      --q._active, ++q._ended;
	      q._tasks[i] = null;
	      if (q._error != null) return; // ignore secondary errors
	      if (e != null) {
	        abort(q, e);
	      } else {
	        q._data[i] = r;
	        if (q._waiting) poke(q);
	        else maybeNotify(q);
	      }
	    };
	  }

	  function abort(q, e) {
	    var i = q._tasks.length, t;
	    q._error = e; // ignore active callbacks
	    q._data = undefined; // allow gc
	    q._waiting = NaN; // prevent starting

	    while (--i >= 0) {
	      if (t = q._tasks[i]) {
	        q._tasks[i] = null;
	        if (t.abort) try { t.abort(); }
	        catch (e) { /* ignore */ }
	      }
	    }

	    q._active = NaN; // allow notification
	    maybeNotify(q);
	  }

	  function maybeNotify(q) {
	    if (!q._active && q._call) q._call(q._error, q._data);
	  }

	  function queue(concurrency) {
	    return new Queue(arguments.length ? +concurrency : Infinity);
	  }

	  function constant$1(x) {
	    return function constant() {
	      return x;
	    };
	  }

	  var epsilon$1 = 1e-12;
	  var pi$2 = Math.PI;
	  var halfPi$1 = pi$2 / 2;
	  var tau$2 = 2 * pi$2;

	  function arcInnerRadius(d) {
	    return d.innerRadius;
	  }

	  function arcOuterRadius(d) {
	    return d.outerRadius;
	  }

	  function arcStartAngle(d) {
	    return d.startAngle;
	  }

	  function arcEndAngle(d) {
	    return d.endAngle;
	  }

	  function arcPadAngle(d) {
	    return d && d.padAngle; // Note: optional!
	  }

	  function asin(x) {
	    return x >= 1 ? halfPi$1 : x <= -1 ? -halfPi$1 : Math.asin(x);
	  }

	  function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
	    var x10 = x1 - x0, y10 = y1 - y0,
	        x32 = x3 - x2, y32 = y3 - y2,
	        t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
	    return [x0 + t * x10, y0 + t * y10];
	  }

	  // Compute perpendicular offset line of length rc.
	  // http://mathworld.wolfram.com/Circle-LineIntersection.html
	  function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
	    var x01 = x0 - x1,
	        y01 = y0 - y1,
	        lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01),
	        ox = lo * y01,
	        oy = -lo * x01,
	        x11 = x0 + ox,
	        y11 = y0 + oy,
	        x10 = x1 + ox,
	        y10 = y1 + oy,
	        x00 = (x11 + x10) / 2,
	        y00 = (y11 + y10) / 2,
	        dx = x10 - x11,
	        dy = y10 - y11,
	        d2 = dx * dx + dy * dy,
	        r = r1 - rc,
	        D = x11 * y10 - x10 * y11,
	        d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)),
	        cx0 = (D * dy - dx * d) / d2,
	        cy0 = (-D * dx - dy * d) / d2,
	        cx1 = (D * dy + dx * d) / d2,
	        cy1 = (-D * dx + dy * d) / d2,
	        dx0 = cx0 - x00,
	        dy0 = cy0 - y00,
	        dx1 = cx1 - x00,
	        dy1 = cy1 - y00;

	    // Pick the closer of the two intersection points.
	    // TODO Is there a faster way to determine which intersection to use?
	    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

	    return {
	      cx: cx0,
	      cy: cy0,
	      x01: -ox,
	      y01: -oy,
	      x11: cx0 * (r1 / r - 1),
	      y11: cy0 * (r1 / r - 1)
	    };
	  }

	  function arc() {
	    var innerRadius = arcInnerRadius,
	        outerRadius = arcOuterRadius,
	        cornerRadius = constant$1(0),
	        padRadius = null,
	        startAngle = arcStartAngle,
	        endAngle = arcEndAngle,
	        padAngle = arcPadAngle,
	        context = null;

	    function arc() {
	      var buffer,
	          r,
	          r0 = +innerRadius.apply(this, arguments),
	          r1 = +outerRadius.apply(this, arguments),
	          a0 = startAngle.apply(this, arguments) - halfPi$1,
	          a1 = endAngle.apply(this, arguments) - halfPi$1,
	          da = Math.abs(a1 - a0),
	          cw = a1 > a0;

	      if (!context) context = buffer = path();

	      // Ensure that the outer radius is always larger than the inner radius.
	      if (r1 < r0) r = r1, r1 = r0, r0 = r;

	      // Is it a point?
	      if (!(r1 > epsilon$1)) context.moveTo(0, 0);

	      // Or is it a circle or annulus?
	      else if (da > tau$2 - epsilon$1) {
	        context.moveTo(r1 * Math.cos(a0), r1 * Math.sin(a0));
	        context.arc(0, 0, r1, a0, a1, !cw);
	        if (r0 > epsilon$1) {
	          context.moveTo(r0 * Math.cos(a1), r0 * Math.sin(a1));
	          context.arc(0, 0, r0, a1, a0, cw);
	        }
	      }

	      // Or is it a circular or annular sector?
	      else {
	        var a01 = a0,
	            a11 = a1,
	            a00 = a0,
	            a10 = a1,
	            da0 = da,
	            da1 = da,
	            ap = padAngle.apply(this, arguments) / 2,
	            rp = (ap > epsilon$1) && (padRadius ? +padRadius.apply(this, arguments) : Math.sqrt(r0 * r0 + r1 * r1)),
	            rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
	            rc0 = rc,
	            rc1 = rc,
	            t0,
	            t1;

	        // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
	        if (rp > epsilon$1) {
	          var p0 = asin(rp / r0 * Math.sin(ap)),
	              p1 = asin(rp / r1 * Math.sin(ap));
	          if ((da0 -= p0 * 2) > epsilon$1) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
	          else da0 = 0, a00 = a10 = (a0 + a1) / 2;
	          if ((da1 -= p1 * 2) > epsilon$1) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
	          else da1 = 0, a01 = a11 = (a0 + a1) / 2;
	        }

	        var x01 = r1 * Math.cos(a01),
	            y01 = r1 * Math.sin(a01),
	            x10 = r0 * Math.cos(a10),
	            y10 = r0 * Math.sin(a10);

	        // Apply rounded corners?
	        if (rc > epsilon$1) {
	          var x11 = r1 * Math.cos(a11),
	              y11 = r1 * Math.sin(a11),
	              x00 = r0 * Math.cos(a00),
	              y00 = r0 * Math.sin(a00);

	          // Restrict the corner radius according to the sector angle.
	          if (da < pi$2) {
	            var oc = da0 > epsilon$1 ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
	                ax = x01 - oc[0],
	                ay = y01 - oc[1],
	                bx = x11 - oc[0],
	                by = y11 - oc[1],
	                kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2),
	                lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
	            rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
	            rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
	          }
	        }

	        // Is the sector collapsed to a line?
	        if (!(da1 > epsilon$1)) context.moveTo(x01, y01);

	        // Does the sector’s outer ring have rounded corners?
	        else if (rc1 > epsilon$1) {
	          t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
	          t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

	          context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

	          // Have the corners merged?
	          if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);

	          // Otherwise, draw the two corners and the ring.
	          else {
	            context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
	            context.arc(0, 0, r1, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
	            context.arc(t1.cx, t1.cy, rc1, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
	          }
	        }

	        // Or is the outer ring just a circular arc?
	        else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

	        // Is there no inner ring, and it’s a circular sector?
	        // Or perhaps it’s an annular sector collapsed due to padding?
	        if (!(r0 > epsilon$1) || !(da0 > epsilon$1)) context.lineTo(x10, y10);

	        // Does the sector’s inner ring (or point) have rounded corners?
	        else if (rc0 > epsilon$1) {
	          t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
	          t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

	          context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

	          // Have the corners merged?
	          if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);

	          // Otherwise, draw the two corners and the ring.
	          else {
	            context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
	            context.arc(0, 0, r0, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
	            context.arc(t1.cx, t1.cy, rc0, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
	          }
	        }

	        // Or is the inner ring just a circular arc?
	        else context.arc(0, 0, r0, a10, a00, cw);
	      }

	      context.closePath();

	      if (buffer) return context = null, buffer + "" || null;
	    }

	    arc.centroid = function() {
	      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
	          a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi$2 / 2;
	      return [Math.cos(a) * r, Math.sin(a) * r];
	    };

	    arc.innerRadius = function(_) {
	      return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant$1(+_), arc) : innerRadius;
	    };

	    arc.outerRadius = function(_) {
	      return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant$1(+_), arc) : outerRadius;
	    };

	    arc.cornerRadius = function(_) {
	      return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant$1(+_), arc) : cornerRadius;
	    };

	    arc.padRadius = function(_) {
	      return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant$1(+_), arc) : padRadius;
	    };

	    arc.startAngle = function(_) {
	      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$1(+_), arc) : startAngle;
	    };

	    arc.endAngle = function(_) {
	      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$1(+_), arc) : endAngle;
	    };

	    arc.padAngle = function(_) {
	      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$1(+_), arc) : padAngle;
	    };

	    arc.context = function(_) {
	      return arguments.length ? ((context = _ == null ? null : _), arc) : context;
	    };

	    return arc;
	  }

	  function Linear(context) {
	    this._context = context;
	  }

	  Linear.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; // proceed
	        default: this._context.lineTo(x, y); break;
	      }
	    }
	  };

	  function curveLinear(context) {
	    return new Linear(context);
	  }

	  function x(p) {
	    return p[0];
	  }

	  function y(p) {
	    return p[1];
	  }

	  function line() {
	    var x$$ = x,
	        y$$ = y,
	        defined = constant$1(true),
	        context = null,
	        curve = curveLinear,
	        output = null;

	    function line(data) {
	      var i,
	          n = data.length,
	          d,
	          defined0 = false,
	          buffer;

	      if (context == null) output = curve(buffer = path());

	      for (i = 0; i <= n; ++i) {
	        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
	          if (defined0 = !defined0) output.lineStart();
	          else output.lineEnd();
	        }
	        if (defined0) output.point(+x$$(d, i, data), +y$$(d, i, data));
	      }

	      if (buffer) return output = null, buffer + "" || null;
	    }

	    line.x = function(_) {
	      return arguments.length ? (x$$ = typeof _ === "function" ? _ : constant$1(+_), line) : x$$;
	    };

	    line.y = function(_) {
	      return arguments.length ? (y$$ = typeof _ === "function" ? _ : constant$1(+_), line) : y$$;
	    };

	    line.defined = function(_) {
	      return arguments.length ? (defined = typeof _ === "function" ? _ : constant$1(!!_), line) : defined;
	    };

	    line.curve = function(_) {
	      return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
	    };

	    line.context = function(_) {
	      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
	    };

	    return line;
	  }

	  function area$1() {
	    var x0 = x,
	        x1 = null,
	        y0 = constant$1(0),
	        y1 = y,
	        defined = constant$1(true),
	        context = null,
	        curve = curveLinear,
	        output = null;

	    function area(data) {
	      var i,
	          j,
	          k,
	          n = data.length,
	          d,
	          defined0 = false,
	          buffer,
	          x0z = new Array(n),
	          y0z = new Array(n);

	      if (context == null) output = curve(buffer = path());

	      for (i = 0; i <= n; ++i) {
	        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
	          if (defined0 = !defined0) {
	            j = i;
	            output.areaStart();
	            output.lineStart();
	          } else {
	            output.lineEnd();
	            output.lineStart();
	            for (k = i - 1; k >= j; --k) {
	              output.point(x0z[k], y0z[k]);
	            }
	            output.lineEnd();
	            output.areaEnd();
	          }
	        }
	        if (defined0) {
	          x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
	          output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
	        }
	      }

	      if (buffer) return output = null, buffer + "" || null;
	    }

	    function arealine() {
	      return line().defined(defined).curve(curve).context(context);
	    }

	    area.x = function(_) {
	      return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$1(+_), x1 = null, area) : x0;
	    };

	    area.x0 = function(_) {
	      return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$1(+_), area) : x0;
	    };

	    area.x1 = function(_) {
	      return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant$1(+_), area) : x1;
	    };

	    area.y = function(_) {
	      return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$1(+_), y1 = null, area) : y0;
	    };

	    area.y0 = function(_) {
	      return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$1(+_), area) : y0;
	    };

	    area.y1 = function(_) {
	      return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant$1(+_), area) : y1;
	    };

	    area.lineX0 =
	    area.lineY0 = function() {
	      return arealine().x(x0).y(y0);
	    };

	    area.lineY1 = function() {
	      return arealine().x(x0).y(y1);
	    };

	    area.lineX1 = function() {
	      return arealine().x(x1).y(y0);
	    };

	    area.defined = function(_) {
	      return arguments.length ? (defined = typeof _ === "function" ? _ : constant$1(!!_), area) : defined;
	    };

	    area.curve = function(_) {
	      return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
	    };

	    area.context = function(_) {
	      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
	    };

	    return area;
	  }

	  function descending$1(a, b) {
	    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	  }

	  function identity$1(d) {
	    return d;
	  }

	  function pie() {
	    var value = identity$1,
	        sortValues = descending$1,
	        sort = null,
	        startAngle = constant$1(0),
	        endAngle = constant$1(tau$2),
	        padAngle = constant$1(0);

	    function pie(data) {
	      var i,
	          n = data.length,
	          j,
	          k,
	          sum = 0,
	          index = new Array(n),
	          arcs = new Array(n),
	          a0 = +startAngle.apply(this, arguments),
	          da = Math.min(tau$2, Math.max(-tau$2, endAngle.apply(this, arguments) - a0)),
	          a1,
	          p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
	          pa = p * (da < 0 ? -1 : 1),
	          v;

	      for (i = 0; i < n; ++i) {
	        if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
	          sum += v;
	        }
	      }

	      // Optionally sort the arcs by previously-computed values or by data.
	      if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
	      else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

	      // Compute the arcs! They are stored in the original data's order.
	      for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
	        j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
	          data: data[j],
	          index: i,
	          value: v,
	          startAngle: a0,
	          endAngle: a1,
	          padAngle: p
	        };
	      }

	      return arcs;
	    }

	    pie.value = function(_) {
	      return arguments.length ? (value = typeof _ === "function" ? _ : constant$1(+_), pie) : value;
	    };

	    pie.sortValues = function(_) {
	      return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
	    };

	    pie.sort = function(_) {
	      return arguments.length ? (sort = _, sortValues = null, pie) : sort;
	    };

	    pie.startAngle = function(_) {
	      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$1(+_), pie) : startAngle;
	    };

	    pie.endAngle = function(_) {
	      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$1(+_), pie) : endAngle;
	    };

	    pie.padAngle = function(_) {
	      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$1(+_), pie) : padAngle;
	    };

	    return pie;
	  }

	  var curveRadialLinear = curveRadial(curveLinear);

	  function Radial(curve) {
	    this._curve = curve;
	  }

	  Radial.prototype = {
	    areaStart: function() {
	      this._curve.areaStart();
	    },
	    areaEnd: function() {
	      this._curve.areaEnd();
	    },
	    lineStart: function() {
	      this._curve.lineStart();
	    },
	    lineEnd: function() {
	      this._curve.lineEnd();
	    },
	    point: function(a, r) {
	      this._curve.point(r * Math.sin(a), r * -Math.cos(a));
	    }
	  };

	  function curveRadial(curve) {

	    function radial(context) {
	      return new Radial(curve(context));
	    }

	    radial._curve = curve;

	    return radial;
	  }

	  function radialLine(l) {
	    var c = l.curve;

	    l.angle = l.x, delete l.x;
	    l.radius = l.y, delete l.y;

	    l.curve = function(_) {
	      return arguments.length ? c(curveRadial(_)) : c()._curve;
	    };

	    return l;
	  }

	  function radialLine$1() {
	    return radialLine(line().curve(curveRadialLinear));
	  }

	  function radialArea() {
	    var a = area$1().curve(curveRadialLinear),
	        c = a.curve,
	        x0 = a.lineX0,
	        x1 = a.lineX1,
	        y0 = a.lineY0,
	        y1 = a.lineY1;

	    a.angle = a.x, delete a.x;
	    a.startAngle = a.x0, delete a.x0;
	    a.endAngle = a.x1, delete a.x1;
	    a.radius = a.y, delete a.y;
	    a.innerRadius = a.y0, delete a.y0;
	    a.outerRadius = a.y1, delete a.y1;
	    a.lineStartAngle = function() { return radialLine(x0()); }, delete a.lineX0;
	    a.lineEndAngle = function() { return radialLine(x1()); }, delete a.lineX1;
	    a.lineInnerRadius = function() { return radialLine(y0()); }, delete a.lineY0;
	    a.lineOuterRadius = function() { return radialLine(y1()); }, delete a.lineY1;

	    a.curve = function(_) {
	      return arguments.length ? c(curveRadial(_)) : c()._curve;
	    };

	    return a;
	  }

	  var circle = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size / pi$2);
	      context.moveTo(r, 0);
	      context.arc(0, 0, r, 0, tau$2);
	    }
	  };

	  var cross$1 = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size / 5) / 2;
	      context.moveTo(-3 * r, -r);
	      context.lineTo(-r, -r);
	      context.lineTo(-r, -3 * r);
	      context.lineTo(r, -3 * r);
	      context.lineTo(r, -r);
	      context.lineTo(3 * r, -r);
	      context.lineTo(3 * r, r);
	      context.lineTo(r, r);
	      context.lineTo(r, 3 * r);
	      context.lineTo(-r, 3 * r);
	      context.lineTo(-r, r);
	      context.lineTo(-3 * r, r);
	      context.closePath();
	    }
	  };

	  var tan30 = Math.sqrt(1 / 3);
	  var tan30_2 = tan30 * 2;
	  var diamond = {
	    draw: function(context, size) {
	      var y = Math.sqrt(size / tan30_2),
	          x = y * tan30;
	      context.moveTo(0, -y);
	      context.lineTo(x, 0);
	      context.lineTo(0, y);
	      context.lineTo(-x, 0);
	      context.closePath();
	    }
	  };

	  var ka = 0.89081309152928522810;
	  var kr = Math.sin(pi$2 / 10) / Math.sin(7 * pi$2 / 10);
	  var kx = Math.sin(tau$2 / 10) * kr;
	  var ky = -Math.cos(tau$2 / 10) * kr;
	  var star = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size * ka),
	          x = kx * r,
	          y = ky * r;
	      context.moveTo(0, -r);
	      context.lineTo(x, y);
	      for (var i = 1; i < 5; ++i) {
	        var a = tau$2 * i / 5,
	            c = Math.cos(a),
	            s = Math.sin(a);
	        context.lineTo(s * r, -c * r);
	        context.lineTo(c * x - s * y, s * x + c * y);
	      }
	      context.closePath();
	    }
	  };

	  var square = {
	    draw: function(context, size) {
	      var w = Math.sqrt(size),
	          x = -w / 2;
	      context.rect(x, x, w, w);
	    }
	  };

	  var sqrt3 = Math.sqrt(3);

	  var triangle = {
	    draw: function(context, size) {
	      var y = -Math.sqrt(size / (sqrt3 * 3));
	      context.moveTo(0, y * 2);
	      context.lineTo(-sqrt3 * y, -y);
	      context.lineTo(sqrt3 * y, -y);
	      context.closePath();
	    }
	  };

	  var c = -0.5;
	  var s = Math.sqrt(3) / 2;
	  var k = 1 / Math.sqrt(12);
	  var a = (k / 2 + 1) * 3;
	  var wye = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size / a),
	          x0 = r / 2,
	          y0 = r * k,
	          x1 = x0,
	          y1 = r * k + r,
	          x2 = -x1,
	          y2 = y1;
	      context.moveTo(x0, y0);
	      context.lineTo(x1, y1);
	      context.lineTo(x2, y2);
	      context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
	      context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
	      context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
	      context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
	      context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
	      context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
	      context.closePath();
	    }
	  };

	  var symbols = [
	    circle,
	    cross$1,
	    diamond,
	    square,
	    star,
	    triangle,
	    wye
	  ];

	  function symbol() {
	    var type = constant$1(circle),
	        size = constant$1(64),
	        context = null;

	    function symbol() {
	      var buffer;
	      if (!context) context = buffer = path();
	      type.apply(this, arguments).draw(context, +size.apply(this, arguments));
	      if (buffer) return context = null, buffer + "" || null;
	    }

	    symbol.type = function(_) {
	      return arguments.length ? (type = typeof _ === "function" ? _ : constant$1(_), symbol) : type;
	    };

	    symbol.size = function(_) {
	      return arguments.length ? (size = typeof _ === "function" ? _ : constant$1(+_), symbol) : size;
	    };

	    symbol.context = function(_) {
	      return arguments.length ? (context = _ == null ? null : _, symbol) : context;
	    };

	    return symbol;
	  }

	  function noop() {}

	  function point(that, x, y) {
	    that._context.bezierCurveTo(
	      (2 * that._x0 + that._x1) / 3,
	      (2 * that._y0 + that._y1) / 3,
	      (that._x0 + 2 * that._x1) / 3,
	      (that._y0 + 2 * that._y1) / 3,
	      (that._x0 + 4 * that._x1 + x) / 6,
	      (that._y0 + 4 * that._y1 + y) / 6
	    );
	  }

	  function Basis(context) {
	    this._context = context;
	  }

	  Basis.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 =
	      this._y0 = this._y1 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 3: point(this, this._x1, this._y1); // proceed
	        case 2: this._context.lineTo(this._x1, this._y1); break;
	      }
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
	        default: point(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = x;
	      this._y0 = this._y1, this._y1 = y;
	    }
	  };

	  function basis(context) {
	    return new Basis(context);
	  }

	  function BasisClosed(context) {
	    this._context = context;
	  }

	  BasisClosed.prototype = {
	    areaStart: noop,
	    areaEnd: noop,
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
	      this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 1: {
	          this._context.moveTo(this._x2, this._y2);
	          this._context.closePath();
	          break;
	        }
	        case 2: {
	          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
	          this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
	          this._context.closePath();
	          break;
	        }
	        case 3: {
	          this.point(this._x2, this._y2);
	          this.point(this._x3, this._y3);
	          this.point(this._x4, this._y4);
	          break;
	        }
	      }
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
	        case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
	        case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
	        default: point(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = x;
	      this._y0 = this._y1, this._y1 = y;
	    }
	  };

	  function basisClosed(context) {
	    return new BasisClosed(context);
	  }

	  function BasisOpen(context) {
	    this._context = context;
	  }

	  BasisOpen.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 =
	      this._y0 = this._y1 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
	        case 3: this._point = 4; // proceed
	        default: point(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = x;
	      this._y0 = this._y1, this._y1 = y;
	    }
	  };

	  function basisOpen(context) {
	    return new BasisOpen(context);
	  }

	  function Bundle(context, beta) {
	    this._basis = new Basis(context);
	    this._beta = beta;
	  }

	  Bundle.prototype = {
	    lineStart: function() {
	      this._x = [];
	      this._y = [];
	      this._basis.lineStart();
	    },
	    lineEnd: function() {
	      var x = this._x,
	          y = this._y,
	          j = x.length - 1;

	      if (j > 0) {
	        var x0 = x[0],
	            y0 = y[0],
	            dx = x[j] - x0,
	            dy = y[j] - y0,
	            i = -1,
	            t;

	        while (++i <= j) {
	          t = i / j;
	          this._basis.point(
	            this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
	            this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
	          );
	        }
	      }

	      this._x = this._y = null;
	      this._basis.lineEnd();
	    },
	    point: function(x, y) {
	      this._x.push(+x);
	      this._y.push(+y);
	    }
	  };

	  var bundle = (function custom(beta) {

	    function bundle(context) {
	      return beta === 1 ? new Basis(context) : new Bundle(context, beta);
	    }

	    bundle.beta = function(beta) {
	      return custom(+beta);
	    };

	    return bundle;
	  })(0.85);

	  function point$1(that, x, y) {
	    that._context.bezierCurveTo(
	      that._x1 + that._k * (that._x2 - that._x0),
	      that._y1 + that._k * (that._y2 - that._y0),
	      that._x2 + that._k * (that._x1 - x),
	      that._y2 + that._k * (that._y1 - y),
	      that._x2,
	      that._y2
	    );
	  }

	  function Cardinal(context, tension) {
	    this._context = context;
	    this._k = (1 - tension) / 6;
	  }

	  Cardinal.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 =
	      this._y0 = this._y1 = this._y2 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 2: this._context.lineTo(this._x2, this._y2); break;
	        case 3: point$1(this, this._x1, this._y1); break;
	      }
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
	        case 2: this._point = 3; // proceed
	        default: point$1(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  var cardinal = (function custom(tension) {

	    function cardinal(context) {
	      return new Cardinal(context, tension);
	    }

	    cardinal.tension = function(tension) {
	      return custom(+tension);
	    };

	    return cardinal;
	  })(0);

	  function CardinalClosed(context, tension) {
	    this._context = context;
	    this._k = (1 - tension) / 6;
	  }

	  CardinalClosed.prototype = {
	    areaStart: noop,
	    areaEnd: noop,
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
	      this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 1: {
	          this._context.moveTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	        case 2: {
	          this._context.lineTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	        case 3: {
	          this.point(this._x3, this._y3);
	          this.point(this._x4, this._y4);
	          this.point(this._x5, this._y5);
	          break;
	        }
	      }
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
	        case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
	        case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
	        default: point$1(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  var cardinalClosed = (function custom(tension) {

	    function cardinal(context) {
	      return new CardinalClosed(context, tension);
	    }

	    cardinal.tension = function(tension) {
	      return custom(+tension);
	    };

	    return cardinal;
	  })(0);

	  function CardinalOpen(context, tension) {
	    this._context = context;
	    this._k = (1 - tension) / 6;
	  }

	  CardinalOpen.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 =
	      this._y0 = this._y1 = this._y2 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
	        case 3: this._point = 4; // proceed
	        default: point$1(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  var cardinalOpen = (function custom(tension) {

	    function cardinal(context) {
	      return new CardinalOpen(context, tension);
	    }

	    cardinal.tension = function(tension) {
	      return custom(+tension);
	    };

	    return cardinal;
	  })(0);

	  function point$2(that, x, y) {
	    var x1 = that._x1,
	        y1 = that._y1,
	        x2 = that._x2,
	        y2 = that._y2;

	    if (that._l01_a > epsilon$1) {
	      var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
	          n = 3 * that._l01_a * (that._l01_a + that._l12_a);
	      x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
	      y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
	    }

	    if (that._l23_a > epsilon$1) {
	      var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
	          m = 3 * that._l23_a * (that._l23_a + that._l12_a);
	      x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
	      y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
	    }

	    that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
	  }

	  function CatmullRom(context, alpha) {
	    this._context = context;
	    this._alpha = alpha;
	  }

	  CatmullRom.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 =
	      this._y0 = this._y1 = this._y2 = NaN;
	      this._l01_a = this._l12_a = this._l23_a =
	      this._l01_2a = this._l12_2a = this._l23_2a =
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 2: this._context.lineTo(this._x2, this._y2); break;
	        case 3: this.point(this, this._x2, this._y2); break;
	      }
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;

	      if (this._point) {
	        var x23 = this._x2 - x,
	            y23 = this._y2 - y;
	        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	      }

	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; // proceed
	        default: point$2(this, x, y); break;
	      }

	      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  var catmullRom = (function custom(alpha) {

	    function catmullRom(context) {
	      return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
	    }

	    catmullRom.alpha = function(alpha) {
	      return custom(+alpha);
	    };

	    return catmullRom;
	  })(0.5);

	  function CatmullRomClosed(context, alpha) {
	    this._context = context;
	    this._alpha = alpha;
	  }

	  CatmullRomClosed.prototype = {
	    areaStart: noop,
	    areaEnd: noop,
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
	      this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
	      this._l01_a = this._l12_a = this._l23_a =
	      this._l01_2a = this._l12_2a = this._l23_2a =
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 1: {
	          this._context.moveTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	        case 2: {
	          this._context.lineTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	        case 3: {
	          this.point(this._x3, this._y3);
	          this.point(this._x4, this._y4);
	          this.point(this._x5, this._y5);
	          break;
	        }
	      }
	    },
	    point: function(x, y) {
	      x = +x, y = +y;

	      if (this._point) {
	        var x23 = this._x2 - x,
	            y23 = this._y2 - y;
	        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	      }

	      switch (this._point) {
	        case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
	        case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
	        case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
	        default: point$2(this, x, y); break;
	      }

	      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  var catmullRomClosed = (function custom(alpha) {

	    function catmullRom(context) {
	      return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
	    }

	    catmullRom.alpha = function(alpha) {
	      return custom(+alpha);
	    };

	    return catmullRom;
	  })(0.5);

	  function CatmullRomOpen(context, alpha) {
	    this._context = context;
	    this._alpha = alpha;
	  }

	  CatmullRomOpen.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 =
	      this._y0 = this._y1 = this._y2 = NaN;
	      this._l01_a = this._l12_a = this._l23_a =
	      this._l01_2a = this._l12_2a = this._l23_2a =
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;

	      if (this._point) {
	        var x23 = this._x2 - x,
	            y23 = this._y2 - y;
	        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	      }

	      switch (this._point) {
	        case 0: this._point = 1; break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
	        case 3: this._point = 4; // proceed
	        default: point$2(this, x, y); break;
	      }

	      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  var catmullRomOpen = (function custom(alpha) {

	    function catmullRom(context) {
	      return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
	    }

	    catmullRom.alpha = function(alpha) {
	      return custom(+alpha);
	    };

	    return catmullRom;
	  })(0.5);

	  function LinearClosed(context) {
	    this._context = context;
	  }

	  LinearClosed.prototype = {
	    areaStart: noop,
	    areaEnd: noop,
	    lineStart: function() {
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._point) this._context.closePath();
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      if (this._point) this._context.lineTo(x, y);
	      else this._point = 1, this._context.moveTo(x, y);
	    }
	  };

	  function linearClosed(context) {
	    return new LinearClosed(context);
	  }

	  function sign(x) {
	    return x < 0 ? -1 : 1;
	  }

	  // Calculate the slopes of the tangents (Hermite-type interpolation) based on
	  // the following paper: Steffen, M. 1990. A Simple Method for Monotonic
	  // Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
	  // NOV(II), P. 443, 1990.
	  function slope3(that, x2, y2) {
	    var h0 = that._x1 - that._x0,
	        h1 = x2 - that._x1,
	        s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
	        s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
	        p = (s0 * h1 + s1 * h0) / (h0 + h1);
	    return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
	  }

	  // Calculate a one-sided slope.
	  function slope2(that, t) {
	    var h = that._x1 - that._x0;
	    return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
	  }

	  // According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
	  // "you can express cubic Hermite interpolation in terms of cubic Bézier curves
	  // with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
	  function point$3(that, t0, t1) {
	    var x0 = that._x0,
	        y0 = that._y0,
	        x1 = that._x1,
	        y1 = that._y1,
	        dx = (x1 - x0) / 3;
	    that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
	  }

	  function MonotoneX(context) {
	    this._context = context;
	  }

	  MonotoneX.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 =
	      this._y0 = this._y1 =
	      this._t0 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 2: this._context.lineTo(this._x1, this._y1); break;
	        case 3: point$3(this, this._t0, slope2(this, this._t0)); break;
	      }
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      var t1 = NaN;

	      x = +x, y = +y;
	      if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; point$3(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
	        default: point$3(this, this._t0, t1 = slope3(this, x, y)); break;
	      }

	      this._x0 = this._x1, this._x1 = x;
	      this._y0 = this._y1, this._y1 = y;
	      this._t0 = t1;
	    }
	  }

	  function MonotoneY(context) {
	    this._context = new ReflectContext(context);
	  }

	  (MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
	    MonotoneX.prototype.point.call(this, y, x);
	  };

	  function ReflectContext(context) {
	    this._context = context;
	  }

	  ReflectContext.prototype = {
	    moveTo: function(x, y) { this._context.moveTo(y, x); },
	    closePath: function() { this._context.closePath(); },
	    lineTo: function(x, y) { this._context.lineTo(y, x); },
	    bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
	  };

	  function monotoneX(context) {
	    return new MonotoneX(context);
	  }

	  function monotoneY(context) {
	    return new MonotoneY(context);
	  }

	  function Natural(context) {
	    this._context = context;
	  }

	  Natural.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x = [];
	      this._y = [];
	    },
	    lineEnd: function() {
	      var x = this._x,
	          y = this._y,
	          n = x.length;

	      if (n) {
	        this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
	        if (n === 2) {
	          this._context.lineTo(x[1], y[1]);
	        } else {
	          var px = controlPoints(x),
	              py = controlPoints(y);
	          for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
	            this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
	          }
	        }
	      }

	      if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	      this._x = this._y = null;
	    },
	    point: function(x, y) {
	      this._x.push(+x);
	      this._y.push(+y);
	    }
	  };

	  // See https://www.particleincell.com/2012/bezier-splines/ for derivation.
	  function controlPoints(x) {
	    var i,
	        n = x.length - 1,
	        m,
	        a = new Array(n),
	        b = new Array(n),
	        r = new Array(n);
	    a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
	    for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
	    a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
	    for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
	    a[n - 1] = r[n - 1] / b[n - 1];
	    for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
	    b[n - 1] = (x[n] + a[n - 1]) / 2;
	    for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
	    return [a, b];
	  }

	  function natural(context) {
	    return new Natural(context);
	  }

	  function Step(context, t) {
	    this._context = context;
	    this._t = t;
	  }

	  Step.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x = this._y = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; // proceed
	        default: {
	          if (this._t <= 0) {
	            this._context.lineTo(this._x, y);
	            this._context.lineTo(x, y);
	          } else {
	            var x1 = this._x * (1 - this._t) + x * this._t;
	            this._context.lineTo(x1, this._y);
	            this._context.lineTo(x1, y);
	          }
	          break;
	        }
	      }
	      this._x = x, this._y = y;
	    }
	  };

	  function step(context) {
	    return new Step(context, 0.5);
	  }

	  function stepBefore(context) {
	    return new Step(context, 0);
	  }

	  function stepAfter(context) {
	    return new Step(context, 1);
	  }

	  var slice$2 = Array.prototype.slice;

	  function none(series, order) {
	    if (!((n = series.length) > 1)) return;
	    for (var i = 1, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
	      s0 = s1, s1 = series[order[i]];
	      for (var j = 0; j < m; ++j) {
	        s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
	      }
	    }
	  }

	  function none$1(series) {
	    var n = series.length, o = new Array(n);
	    while (--n >= 0) o[n] = n;
	    return o;
	  }

	  function stackValue(d, key) {
	    return d[key];
	  }

	  function stack() {
	    var keys = constant$1([]),
	        order = none$1,
	        offset = none,
	        value = stackValue;

	    function stack(data) {
	      var kz = keys.apply(this, arguments),
	          i,
	          m = data.length,
	          n = kz.length,
	          sz = new Array(n),
	          oz;

	      for (i = 0; i < n; ++i) {
	        for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
	          si[j] = sij = [0, +value(data[j], ki, j, data)];
	          sij.data = data[j];
	        }
	        si.key = ki;
	      }

	      for (i = 0, oz = order(sz); i < n; ++i) {
	        sz[oz[i]].index = i;
	      }

	      offset(sz, oz);
	      return sz;
	    }

	    stack.keys = function(_) {
	      return arguments.length ? (keys = typeof _ === "function" ? _ : constant$1(slice$2.call(_)), stack) : keys;
	    };

	    stack.value = function(_) {
	      return arguments.length ? (value = typeof _ === "function" ? _ : constant$1(+_), stack) : value;
	    };

	    stack.order = function(_) {
	      return arguments.length ? (order = _ == null ? none$1 : typeof _ === "function" ? _ : constant$1(slice$2.call(_)), stack) : order;
	    };

	    stack.offset = function(_) {
	      return arguments.length ? (offset = _ == null ? none : _, stack) : offset;
	    };

	    return stack;
	  }

	  function expand(series, order) {
	    if (!((n = series.length) > 0)) return;
	    for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
	      for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
	      if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
	    }
	    none(series, order);
	  }

	  function silhouette(series, order) {
	    if (!((n = series.length) > 0)) return;
	    for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
	      for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
	      s0[j][1] += s0[j][0] = -y / 2;
	    }
	    none(series, order);
	  }

	  function wiggle(series, order) {
	    if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
	    for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
	      for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
	        var si = series[order[i]],
	            sij0 = si[j][1] || 0,
	            sij1 = si[j - 1][1] || 0,
	            s3 = (sij0 - sij1) / 2;
	        for (var k = 0; k < i; ++k) {
	          var sk = series[order[k]],
	              skj0 = sk[j][1] || 0,
	              skj1 = sk[j - 1][1] || 0;
	          s3 += skj0 - skj1;
	        }
	        s1 += sij0, s2 += s3 * sij0;
	      }
	      s0[j - 1][1] += s0[j - 1][0] = y;
	      if (s1) y -= s2 / s1;
	    }
	    s0[j - 1][1] += s0[j - 1][0] = y;
	    none(series, order);
	  }

	  function ascending$1(series) {
	    var sums = series.map(sum$1);
	    return none$1(series).sort(function(a, b) { return sums[a] - sums[b]; });
	  }

	  function sum$1(series) {
	    var s = 0, i = -1, n = series.length, v;
	    while (++i < n) if (v = +series[i][1]) s += v;
	    return s;
	  }

	  function descending$2(series) {
	    return ascending$1(series).reverse();
	  }

	  function insideOut(series) {
	    var n = series.length,
	        i,
	        j,
	        sums = series.map(sum$1),
	        order = none$1(series).sort(function(a, b) { return sums[b] - sums[a]; }),
	        top = 0,
	        bottom = 0,
	        tops = [],
	        bottoms = [];

	    for (i = 0; i < n; ++i) {
	      j = order[i];
	      if (top < bottom) {
	        top += sums[j];
	        tops.push(j);
	      } else {
	        bottom += sums[j];
	        bottoms.push(j);
	      }
	    }

	    return bottoms.reverse().concat(tops);
	  }

	  function reverse(series) {
	    return none$1(series).reverse();
	  }

	  function define(constructor, factory, prototype) {
	    constructor.prototype = factory.prototype = prototype;
	    prototype.constructor = constructor;
	  }

	  function extend(parent, definition) {
	    var prototype = Object.create(parent.prototype);
	    for (var key in definition) prototype[key] = definition[key];
	    return prototype;
	  }

	  function Color() {}

	  var darker = 0.7;
	  var brighter = 1 / darker;

	  var reHex3 = /^#([0-9a-f]{3})$/;
	  var reHex6 = /^#([0-9a-f]{6})$/;
	  var reRgbInteger = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/;
	  var reRgbPercent = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
	  var reRgbaInteger = /^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
	  var reRgbaPercent = /^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
	  var reHslPercent = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/;
	  var reHslaPercent = /^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/;
	  var named = {
	    aliceblue: 0xf0f8ff,
	    antiquewhite: 0xfaebd7,
	    aqua: 0x00ffff,
	    aquamarine: 0x7fffd4,
	    azure: 0xf0ffff,
	    beige: 0xf5f5dc,
	    bisque: 0xffe4c4,
	    black: 0x000000,
	    blanchedalmond: 0xffebcd,
	    blue: 0x0000ff,
	    blueviolet: 0x8a2be2,
	    brown: 0xa52a2a,
	    burlywood: 0xdeb887,
	    cadetblue: 0x5f9ea0,
	    chartreuse: 0x7fff00,
	    chocolate: 0xd2691e,
	    coral: 0xff7f50,
	    cornflowerblue: 0x6495ed,
	    cornsilk: 0xfff8dc,
	    crimson: 0xdc143c,
	    cyan: 0x00ffff,
	    darkblue: 0x00008b,
	    darkcyan: 0x008b8b,
	    darkgoldenrod: 0xb8860b,
	    darkgray: 0xa9a9a9,
	    darkgreen: 0x006400,
	    darkgrey: 0xa9a9a9,
	    darkkhaki: 0xbdb76b,
	    darkmagenta: 0x8b008b,
	    darkolivegreen: 0x556b2f,
	    darkorange: 0xff8c00,
	    darkorchid: 0x9932cc,
	    darkred: 0x8b0000,
	    darksalmon: 0xe9967a,
	    darkseagreen: 0x8fbc8f,
	    darkslateblue: 0x483d8b,
	    darkslategray: 0x2f4f4f,
	    darkslategrey: 0x2f4f4f,
	    darkturquoise: 0x00ced1,
	    darkviolet: 0x9400d3,
	    deeppink: 0xff1493,
	    deepskyblue: 0x00bfff,
	    dimgray: 0x696969,
	    dimgrey: 0x696969,
	    dodgerblue: 0x1e90ff,
	    firebrick: 0xb22222,
	    floralwhite: 0xfffaf0,
	    forestgreen: 0x228b22,
	    fuchsia: 0xff00ff,
	    gainsboro: 0xdcdcdc,
	    ghostwhite: 0xf8f8ff,
	    gold: 0xffd700,
	    goldenrod: 0xdaa520,
	    gray: 0x808080,
	    green: 0x008000,
	    greenyellow: 0xadff2f,
	    grey: 0x808080,
	    honeydew: 0xf0fff0,
	    hotpink: 0xff69b4,
	    indianred: 0xcd5c5c,
	    indigo: 0x4b0082,
	    ivory: 0xfffff0,
	    khaki: 0xf0e68c,
	    lavender: 0xe6e6fa,
	    lavenderblush: 0xfff0f5,
	    lawngreen: 0x7cfc00,
	    lemonchiffon: 0xfffacd,
	    lightblue: 0xadd8e6,
	    lightcoral: 0xf08080,
	    lightcyan: 0xe0ffff,
	    lightgoldenrodyellow: 0xfafad2,
	    lightgray: 0xd3d3d3,
	    lightgreen: 0x90ee90,
	    lightgrey: 0xd3d3d3,
	    lightpink: 0xffb6c1,
	    lightsalmon: 0xffa07a,
	    lightseagreen: 0x20b2aa,
	    lightskyblue: 0x87cefa,
	    lightslategray: 0x778899,
	    lightslategrey: 0x778899,
	    lightsteelblue: 0xb0c4de,
	    lightyellow: 0xffffe0,
	    lime: 0x00ff00,
	    limegreen: 0x32cd32,
	    linen: 0xfaf0e6,
	    magenta: 0xff00ff,
	    maroon: 0x800000,
	    mediumaquamarine: 0x66cdaa,
	    mediumblue: 0x0000cd,
	    mediumorchid: 0xba55d3,
	    mediumpurple: 0x9370db,
	    mediumseagreen: 0x3cb371,
	    mediumslateblue: 0x7b68ee,
	    mediumspringgreen: 0x00fa9a,
	    mediumturquoise: 0x48d1cc,
	    mediumvioletred: 0xc71585,
	    midnightblue: 0x191970,
	    mintcream: 0xf5fffa,
	    mistyrose: 0xffe4e1,
	    moccasin: 0xffe4b5,
	    navajowhite: 0xffdead,
	    navy: 0x000080,
	    oldlace: 0xfdf5e6,
	    olive: 0x808000,
	    olivedrab: 0x6b8e23,
	    orange: 0xffa500,
	    orangered: 0xff4500,
	    orchid: 0xda70d6,
	    palegoldenrod: 0xeee8aa,
	    palegreen: 0x98fb98,
	    paleturquoise: 0xafeeee,
	    palevioletred: 0xdb7093,
	    papayawhip: 0xffefd5,
	    peachpuff: 0xffdab9,
	    peru: 0xcd853f,
	    pink: 0xffc0cb,
	    plum: 0xdda0dd,
	    powderblue: 0xb0e0e6,
	    purple: 0x800080,
	    rebeccapurple: 0x663399,
	    red: 0xff0000,
	    rosybrown: 0xbc8f8f,
	    royalblue: 0x4169e1,
	    saddlebrown: 0x8b4513,
	    salmon: 0xfa8072,
	    sandybrown: 0xf4a460,
	    seagreen: 0x2e8b57,
	    seashell: 0xfff5ee,
	    sienna: 0xa0522d,
	    silver: 0xc0c0c0,
	    skyblue: 0x87ceeb,
	    slateblue: 0x6a5acd,
	    slategray: 0x708090,
	    slategrey: 0x708090,
	    snow: 0xfffafa,
	    springgreen: 0x00ff7f,
	    steelblue: 0x4682b4,
	    tan: 0xd2b48c,
	    teal: 0x008080,
	    thistle: 0xd8bfd8,
	    tomato: 0xff6347,
	    turquoise: 0x40e0d0,
	    violet: 0xee82ee,
	    wheat: 0xf5deb3,
	    white: 0xffffff,
	    whitesmoke: 0xf5f5f5,
	    yellow: 0xffff00,
	    yellowgreen: 0x9acd32
	  };

	  define(Color, color, {
	    displayable: function() {
	      return this.rgb().displayable();
	    },
	    toString: function() {
	      return this.rgb() + "";
	    }
	  });

	  function color(format) {
	    var m;
	    format = (format + "").trim().toLowerCase();
	    return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
	        : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
	        : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
	        : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
	        : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
	        : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
	        : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
	        : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
	        : named.hasOwnProperty(format) ? rgbn(named[format])
	        : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
	        : null;
	  }

	  function rgbn(n) {
	    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
	  }

	  function rgba(r, g, b, a) {
	    if (a <= 0) r = g = b = NaN;
	    return new Rgb(r, g, b, a);
	  }

	  function rgbConvert(o) {
	    if (!(o instanceof Color)) o = color(o);
	    if (!o) return new Rgb;
	    o = o.rgb();
	    return new Rgb(o.r, o.g, o.b, o.opacity);
	  }

	  function colorRgb(r, g, b, opacity) {
	    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
	  }

	  function Rgb(r, g, b, opacity) {
	    this.r = +r;
	    this.g = +g;
	    this.b = +b;
	    this.opacity = +opacity;
	  }

	  define(Rgb, colorRgb, extend(Color, {
	    brighter: function(k) {
	      k = k == null ? brighter : Math.pow(brighter, k);
	      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
	    },
	    darker: function(k) {
	      k = k == null ? darker : Math.pow(darker, k);
	      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
	    },
	    rgb: function() {
	      return this;
	    },
	    displayable: function() {
	      return (0 <= this.r && this.r <= 255)
	          && (0 <= this.g && this.g <= 255)
	          && (0 <= this.b && this.b <= 255)
	          && (0 <= this.opacity && this.opacity <= 1);
	    },
	    toString: function() {
	      var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
	      return (a === 1 ? "rgb(" : "rgba(")
	          + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
	          + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
	          + Math.max(0, Math.min(255, Math.round(this.b) || 0))
	          + (a === 1 ? ")" : ", " + a + ")");
	    }
	  }));

	  function hsla(h, s, l, a) {
	    if (a <= 0) h = s = l = NaN;
	    else if (l <= 0 || l >= 1) h = s = NaN;
	    else if (s <= 0) h = NaN;
	    return new Hsl(h, s, l, a);
	  }

	  function hslConvert(o) {
	    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
	    if (!(o instanceof Color)) o = color(o);
	    if (!o) return new Hsl;
	    if (o instanceof Hsl) return o;
	    o = o.rgb();
	    var r = o.r / 255,
	        g = o.g / 255,
	        b = o.b / 255,
	        min = Math.min(r, g, b),
	        max = Math.max(r, g, b),
	        h = NaN,
	        s = max - min,
	        l = (max + min) / 2;
	    if (s) {
	      if (r === max) h = (g - b) / s + (g < b) * 6;
	      else if (g === max) h = (b - r) / s + 2;
	      else h = (r - g) / s + 4;
	      s /= l < 0.5 ? max + min : 2 - max - min;
	      h *= 60;
	    } else {
	      s = l > 0 && l < 1 ? 0 : h;
	    }
	    return new Hsl(h, s, l, o.opacity);
	  }

	  function colorHsl(h, s, l, opacity) {
	    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
	  }

	  function Hsl(h, s, l, opacity) {
	    this.h = +h;
	    this.s = +s;
	    this.l = +l;
	    this.opacity = +opacity;
	  }

	  define(Hsl, colorHsl, extend(Color, {
	    brighter: function(k) {
	      k = k == null ? brighter : Math.pow(brighter, k);
	      return new Hsl(this.h, this.s, this.l * k, this.opacity);
	    },
	    darker: function(k) {
	      k = k == null ? darker : Math.pow(darker, k);
	      return new Hsl(this.h, this.s, this.l * k, this.opacity);
	    },
	    rgb: function() {
	      var h = this.h % 360 + (this.h < 0) * 360,
	          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
	          l = this.l,
	          m2 = l + (l < 0.5 ? l : 1 - l) * s,
	          m1 = 2 * l - m2;
	      return new Rgb(
	        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
	        hsl2rgb(h, m1, m2),
	        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
	        this.opacity
	      );
	    },
	    displayable: function() {
	      return (0 <= this.s && this.s <= 1 || isNaN(this.s))
	          && (0 <= this.l && this.l <= 1)
	          && (0 <= this.opacity && this.opacity <= 1);
	    }
	  }));

	  /* From FvD 13.37, CSS Color Module Level 3 */
	  function hsl2rgb(h, m1, m2) {
	    return (h < 60 ? m1 + (m2 - m1) * h / 60
	        : h < 180 ? m2
	        : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
	        : m1) * 255;
	  }

	  var deg2rad = Math.PI / 180;
	  var rad2deg = 180 / Math.PI;

	  var Kn = 18;
	  var Xn = 0.950470;
	  var Yn = 1;
	  var Zn = 1.088830;
	  var t0 = 4 / 29;
	  var t1 = 6 / 29;
	  var t2 = 3 * t1 * t1;
	  var t3 = t1 * t1 * t1;
	  function labConvert(o) {
	    if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
	    if (o instanceof Hcl) {
	      var h = o.h * deg2rad;
	      return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
	    }
	    if (!(o instanceof Rgb)) o = rgbConvert(o);
	    var b = rgb2xyz(o.r),
	        a = rgb2xyz(o.g),
	        l = rgb2xyz(o.b),
	        x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
	        y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
	        z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
	    return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
	  }

	  function lab(l, a, b, opacity) {
	    return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
	  }

	  function Lab(l, a, b, opacity) {
	    this.l = +l;
	    this.a = +a;
	    this.b = +b;
	    this.opacity = +opacity;
	  }

	  define(Lab, lab, extend(Color, {
	    brighter: function(k) {
	      return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
	    },
	    darker: function(k) {
	      return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
	    },
	    rgb: function() {
	      var y = (this.l + 16) / 116,
	          x = isNaN(this.a) ? y : y + this.a / 500,
	          z = isNaN(this.b) ? y : y - this.b / 200;
	      y = Yn * lab2xyz(y);
	      x = Xn * lab2xyz(x);
	      z = Zn * lab2xyz(z);
	      return new Rgb(
	        xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
	        xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
	        xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
	        this.opacity
	      );
	    }
	  }));

	  function xyz2lab(t) {
	    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
	  }

	  function lab2xyz(t) {
	    return t > t1 ? t * t * t : t2 * (t - t0);
	  }

	  function xyz2rgb(x) {
	    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
	  }

	  function rgb2xyz(x) {
	    return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
	  }

	  function hclConvert(o) {
	    if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
	    if (!(o instanceof Lab)) o = labConvert(o);
	    var h = Math.atan2(o.b, o.a) * rad2deg;
	    return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
	  }

	  function colorHcl(h, c, l, opacity) {
	    return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
	  }

	  function Hcl(h, c, l, opacity) {
	    this.h = +h;
	    this.c = +c;
	    this.l = +l;
	    this.opacity = +opacity;
	  }

	  define(Hcl, colorHcl, extend(Color, {
	    brighter: function(k) {
	      return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
	    },
	    darker: function(k) {
	      return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
	    },
	    rgb: function() {
	      return labConvert(this).rgb();
	    }
	  }));

	  var A = -0.14861;
	  var B = +1.78277;
	  var C = -0.29227;
	  var D = -0.90649;
	  var E = +1.97294;
	  var ED = E * D;
	  var EB = E * B;
	  var BC_DA = B * C - D * A;
	  function cubehelixConvert(o) {
	    if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
	    if (!(o instanceof Rgb)) o = rgbConvert(o);
	    var r = o.r / 255,
	        g = o.g / 255,
	        b = o.b / 255,
	        l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
	        bl = b - l,
	        k = (E * (g - l) - C * bl) / D,
	        s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
	        h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
	    return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
	  }

	  function cubehelix(h, s, l, opacity) {
	    return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
	  }

	  function Cubehelix(h, s, l, opacity) {
	    this.h = +h;
	    this.s = +s;
	    this.l = +l;
	    this.opacity = +opacity;
	  }

	  define(Cubehelix, cubehelix, extend(Color, {
	    brighter: function(k) {
	      k = k == null ? brighter : Math.pow(brighter, k);
	      return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
	    },
	    darker: function(k) {
	      k = k == null ? darker : Math.pow(darker, k);
	      return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
	    },
	    rgb: function() {
	      var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
	          l = +this.l,
	          a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
	          cosh = Math.cos(h),
	          sinh = Math.sin(h);
	      return new Rgb(
	        255 * (l + a * (A * cosh + B * sinh)),
	        255 * (l + a * (C * cosh + D * sinh)),
	        255 * (l + a * (E * cosh)),
	        this.opacity
	      );
	    }
	  }));

	  function basis$1(t1, v0, v1, v2, v3) {
	    var t2 = t1 * t1, t3 = t2 * t1;
	    return ((1 - 3 * t1 + 3 * t2 - t3) * v0
	        + (4 - 6 * t2 + 3 * t3) * v1
	        + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
	        + t3 * v3) / 6;
	  }

	  function basis$2(values) {
	    var n = values.length - 1;
	    return function(t) {
	      var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
	          v1 = values[i],
	          v2 = values[i + 1],
	          v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
	          v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
	      return basis$1((t - i / n) * n, v0, v1, v2, v3);
	    };
	  }

	  function basisClosed$1(values) {
	    var n = values.length;
	    return function(t) {
	      var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
	          v0 = values[(i + n - 1) % n],
	          v1 = values[i % n],
	          v2 = values[(i + 1) % n],
	          v3 = values[(i + 2) % n];
	      return basis$1((t - i / n) * n, v0, v1, v2, v3);
	    };
	  }

	  function constant$2(x) {
	    return function() {
	      return x;
	    };
	  }

	  function linear$1(a, d) {
	    return function(t) {
	      return a + t * d;
	    };
	  }

	  function exponential$1(a, b, y) {
	    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
	      return Math.pow(a + t * b, y);
	    };
	  }

	  function hue(a, b) {
	    var d = b - a;
	    return d ? linear$1(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$2(isNaN(a) ? b : a);
	  }

	  function gamma(y) {
	    return (y = +y) === 1 ? nogamma : function(a, b) {
	      return b - a ? exponential$1(a, b, y) : constant$2(isNaN(a) ? b : a);
	    };
	  }

	  function nogamma(a, b) {
	    var d = b - a;
	    return d ? linear$1(a, d) : constant$2(isNaN(a) ? b : a);
	  }

	  var interpolateRgb = (function rgbGamma(y) {
	    var color = gamma(y);

	    function rgb(start, end) {
	      var r = color((start = colorRgb(start)).r, (end = colorRgb(end)).r),
	          g = color(start.g, end.g),
	          b = color(start.b, end.b),
	          opacity = color(start.opacity, end.opacity);
	      return function(t) {
	        start.r = r(t);
	        start.g = g(t);
	        start.b = b(t);
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }

	    rgb.gamma = rgbGamma;

	    return rgb;
	  })(1);

	  function rgbSpline(spline) {
	    return function(colors) {
	      var n = colors.length,
	          r = new Array(n),
	          g = new Array(n),
	          b = new Array(n),
	          i, color;
	      for (i = 0; i < n; ++i) {
	        color = colorRgb(colors[i]);
	        r[i] = color.r || 0;
	        g[i] = color.g || 0;
	        b[i] = color.b || 0;
	      }
	      r = spline(r);
	      g = spline(g);
	      b = spline(b);
	      color.opacity = 1;
	      return function(t) {
	        color.r = r(t);
	        color.g = g(t);
	        color.b = b(t);
	        return color + "";
	      };
	    };
	  }

	  var rgbBasis = rgbSpline(basis$2);
	  var rgbBasisClosed = rgbSpline(basisClosed$1);

	  function array$1(a, b) {
	    var nb = b ? b.length : 0,
	        na = a ? Math.min(nb, a.length) : 0,
	        x = new Array(nb),
	        c = new Array(nb),
	        i;

	    for (i = 0; i < na; ++i) x[i] = interpolate(a[i], b[i]);
	    for (; i < nb; ++i) c[i] = b[i];

	    return function(t) {
	      for (i = 0; i < na; ++i) c[i] = x[i](t);
	      return c;
	    };
	  }

	  function date(a, b) {
	    var d = new Date;
	    return a = +a, b -= a, function(t) {
	      return d.setTime(a + b * t), d;
	    };
	  }

	  function interpolateNumber(a, b) {
	    return a = +a, b -= a, function(t) {
	      return a + b * t;
	    };
	  }

	  function object(a, b) {
	    var i = {},
	        c = {},
	        k;

	    if (a === null || typeof a !== "object") a = {};
	    if (b === null || typeof b !== "object") b = {};

	    for (k in b) {
	      if (k in a) {
	        i[k] = interpolate(a[k], b[k]);
	      } else {
	        c[k] = b[k];
	      }
	    }

	    return function(t) {
	      for (k in i) c[k] = i[k](t);
	      return c;
	    };
	  }

	  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
	  var reB = new RegExp(reA.source, "g");
	  function zero(b) {
	    return function() {
	      return b;
	    };
	  }

	  function one(b) {
	    return function(t) {
	      return b(t) + "";
	    };
	  }

	  function interpolateString(a, b) {
	    var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
	        am, // current match in a
	        bm, // current match in b
	        bs, // string preceding current number in b, if any
	        i = -1, // index in s
	        s = [], // string constants and placeholders
	        q = []; // number interpolators

	    // Coerce inputs to strings.
	    a = a + "", b = b + "";

	    // Interpolate pairs of numbers in a & b.
	    while ((am = reA.exec(a))
	        && (bm = reB.exec(b))) {
	      if ((bs = bm.index) > bi) { // a string precedes the next number in b
	        bs = b.slice(bi, bs);
	        if (s[i]) s[i] += bs; // coalesce with previous string
	        else s[++i] = bs;
	      }
	      if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
	        if (s[i]) s[i] += bm; // coalesce with previous string
	        else s[++i] = bm;
	      } else { // interpolate non-matching numbers
	        s[++i] = null;
	        q.push({i: i, x: interpolateNumber(am, bm)});
	      }
	      bi = reB.lastIndex;
	    }

	    // Add remains of b.
	    if (bi < b.length) {
	      bs = b.slice(bi);
	      if (s[i]) s[i] += bs; // coalesce with previous string
	      else s[++i] = bs;
	    }

	    // Special optimization for only a single match.
	    // Otherwise, interpolate each of the numbers and rejoin the string.
	    return s.length < 2 ? (q[0]
	        ? one(q[0].x)
	        : zero(b))
	        : (b = q.length, function(t) {
	            for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
	            return s.join("");
	          });
	  }

	  function interpolate(a, b) {
	    var t = typeof b, c;
	    return b == null || t === "boolean" ? constant$2(b)
	        : (t === "number" ? interpolateNumber
	        : t === "string" ? ((c = color(b)) ? (b = c, interpolateRgb) : interpolateString)
	        : b instanceof color ? interpolateRgb
	        : b instanceof Date ? date
	        : Array.isArray(b) ? array$1
	        : isNaN(b) ? object
	        : interpolateNumber)(a, b);
	  }

	  function interpolateRound(a, b) {
	    return a = +a, b -= a, function(t) {
	      return Math.round(a + b * t);
	    };
	  }

	  var degrees = 180 / Math.PI;

	  var identity$2 = {
	    translateX: 0,
	    translateY: 0,
	    rotate: 0,
	    skewX: 0,
	    scaleX: 1,
	    scaleY: 1
	  };

	  function decompose(a, b, c, d, e, f) {
	    var scaleX, scaleY, skewX;
	    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
	    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
	    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
	    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
	    return {
	      translateX: e,
	      translateY: f,
	      rotate: Math.atan2(b, a) * degrees,
	      skewX: Math.atan(skewX) * degrees,
	      scaleX: scaleX,
	      scaleY: scaleY
	    };
	  }

	  var cssNode;
	  var cssRoot;
	  var cssView;
	  var svgNode;
	  function parseCss(value) {
	    if (value === "none") return identity$2;
	    if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
	    cssNode.style.transform = value;
	    value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
	    cssRoot.removeChild(cssNode);
	    value = value.slice(7, -1).split(",");
	    return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
	  }

	  function parseSvg(value) {
	    if (value == null) return identity$2;
	    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
	    svgNode.setAttribute("transform", value);
	    if (!(value = svgNode.transform.baseVal.consolidate())) return identity$2;
	    value = value.matrix;
	    return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
	  }

	  function interpolateTransform(parse, pxComma, pxParen, degParen) {

	    function pop(s) {
	      return s.length ? s.pop() + " " : "";
	    }

	    function translate(xa, ya, xb, yb, s, q) {
	      if (xa !== xb || ya !== yb) {
	        var i = s.push("translate(", null, pxComma, null, pxParen);
	        q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
	      } else if (xb || yb) {
	        s.push("translate(" + xb + pxComma + yb + pxParen);
	      }
	    }

	    function rotate(a, b, s, q) {
	      if (a !== b) {
	        if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
	        q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
	      } else if (b) {
	        s.push(pop(s) + "rotate(" + b + degParen);
	      }
	    }

	    function skewX(a, b, s, q) {
	      if (a !== b) {
	        q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
	      } else if (b) {
	        s.push(pop(s) + "skewX(" + b + degParen);
	      }
	    }

	    function scale(xa, ya, xb, yb, s, q) {
	      if (xa !== xb || ya !== yb) {
	        var i = s.push(pop(s) + "scale(", null, ",", null, ")");
	        q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
	      } else if (xb !== 1 || yb !== 1) {
	        s.push(pop(s) + "scale(" + xb + "," + yb + ")");
	      }
	    }

	    return function(a, b) {
	      var s = [], // string constants and placeholders
	          q = []; // number interpolators
	      a = parse(a), b = parse(b);
	      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
	      rotate(a.rotate, b.rotate, s, q);
	      skewX(a.skewX, b.skewX, s, q);
	      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
	      a = b = null; // gc
	      return function(t) {
	        var i = -1, n = q.length, o;
	        while (++i < n) s[(o = q[i]).i] = o.x(t);
	        return s.join("");
	      };
	    };
	  }

	  var interpolateTransform$1 = interpolateTransform(parseCss, "px, ", "px)", "deg)");
	  var interpolateTransform$2 = interpolateTransform(parseSvg, ", ", ")", ")");

	  var rho = Math.SQRT2;
	  var rho2 = 2;
	  var rho4 = 4;
	  var epsilon2 = 1e-12;
	  function cosh(x) {
	    return ((x = Math.exp(x)) + 1 / x) / 2;
	  }

	  function sinh(x) {
	    return ((x = Math.exp(x)) - 1 / x) / 2;
	  }

	  function tanh(x) {
	    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	  }

	  // p0 = [ux0, uy0, w0]
	  // p1 = [ux1, uy1, w1]
	  function interpolateZoom(p0, p1) {
	    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
	        ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
	        dx = ux1 - ux0,
	        dy = uy1 - uy0,
	        d2 = dx * dx + dy * dy,
	        i,
	        S;

	    // Special case for u0 ≅ u1.
	    if (d2 < epsilon2) {
	      S = Math.log(w1 / w0) / rho;
	      i = function(t) {
	        return [
	          ux0 + t * dx,
	          uy0 + t * dy,
	          w0 * Math.exp(rho * t * S)
	        ];
	      }
	    }

	    // General case.
	    else {
	      var d1 = Math.sqrt(d2),
	          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
	          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
	          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
	          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
	      S = (r1 - r0) / rho;
	      i = function(t) {
	        var s = t * S,
	            coshr0 = cosh(r0),
	            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
	        return [
	          ux0 + u * dx,
	          uy0 + u * dy,
	          w0 * coshr0 / cosh(rho * s + r0)
	        ];
	      }
	    }

	    i.duration = S * 1000;

	    return i;
	  }

	  function hsl(hue) {
	    return function(start, end) {
	      var h = hue((start = colorHsl(start)).h, (end = colorHsl(end)).h),
	          s = nogamma(start.s, end.s),
	          l = nogamma(start.l, end.l),
	          opacity = nogamma(start.opacity, end.opacity);
	      return function(t) {
	        start.h = h(t);
	        start.s = s(t);
	        start.l = l(t);
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }
	  }

	  var hsl$1 = hsl(hue);
	  var hslLong = hsl(nogamma);

	  function lab$1(start, end) {
	    var l = nogamma((start = lab(start)).l, (end = lab(end)).l),
	        a = nogamma(start.a, end.a),
	        b = nogamma(start.b, end.b),
	        opacity = nogamma(start.opacity, end.opacity);
	    return function(t) {
	      start.l = l(t);
	      start.a = a(t);
	      start.b = b(t);
	      start.opacity = opacity(t);
	      return start + "";
	    };
	  }

	  function hcl(hue) {
	    return function(start, end) {
	      var h = hue((start = colorHcl(start)).h, (end = colorHcl(end)).h),
	          c = nogamma(start.c, end.c),
	          l = nogamma(start.l, end.l),
	          opacity = nogamma(start.opacity, end.opacity);
	      return function(t) {
	        start.h = h(t);
	        start.c = c(t);
	        start.l = l(t);
	        start.opacity = opacity(t);
	        return start + "";
	      };
	    }
	  }

	  var hcl$1 = hcl(hue);
	  var hclLong = hcl(nogamma);

	  function cubehelix$1(hue) {
	    return (function cubehelixGamma(y) {
	      y = +y;

	      function cubehelix$$(start, end) {
	        var h = hue((start = cubehelix(start)).h, (end = cubehelix(end)).h),
	            s = nogamma(start.s, end.s),
	            l = nogamma(start.l, end.l),
	            opacity = nogamma(start.opacity, end.opacity);
	        return function(t) {
	          start.h = h(t);
	          start.s = s(t);
	          start.l = l(Math.pow(t, y));
	          start.opacity = opacity(t);
	          return start + "";
	        };
	      }

	      cubehelix$$.gamma = cubehelixGamma;

	      return cubehelix$$;
	    })(1);
	  }

	  var cubehelix$2 = cubehelix$1(hue);
	  var interpolateCubehelixLong = cubehelix$1(nogamma);

	  function quantize(interpolator, n) {
	    var samples = new Array(n);
	    for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
	    return samples;
	  }

	  var noop$1 = {value: function() {}};

	  function dispatch() {
	    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
	      if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
	      _[t] = [];
	    }
	    return new Dispatch(_);
	  }

	  function Dispatch(_) {
	    this._ = _;
	  }

	  function parseTypenames(typenames, types) {
	    return typenames.trim().split(/^|\s+/).map(function(t) {
	      var name = "", i = t.indexOf(".");
	      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	      if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
	      return {type: t, name: name};
	    });
	  }

	  Dispatch.prototype = dispatch.prototype = {
	    constructor: Dispatch,
	    on: function(typename, callback) {
	      var _ = this._,
	          T = parseTypenames(typename + "", _),
	          t,
	          i = -1,
	          n = T.length;

	      // If no callback was specified, return the callback of the given type and name.
	      if (arguments.length < 2) {
	        while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
	        return;
	      }

	      // If a type was specified, set the callback for the given type and name.
	      // Otherwise, if a null callback was specified, remove callbacks of the given name.
	      if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
	      while (++i < n) {
	        if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);
	        else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
	      }

	      return this;
	    },
	    copy: function() {
	      var copy = {}, _ = this._;
	      for (var t in _) copy[t] = _[t].slice();
	      return new Dispatch(copy);
	    },
	    call: function(type, that) {
	      if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
	      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	      for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	    },
	    apply: function(type, that, args) {
	      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	      for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	    }
	  };

	  function get(type, name) {
	    for (var i = 0, n = type.length, c; i < n; ++i) {
	      if ((c = type[i]).name === name) {
	        return c.value;
	      }
	    }
	  }

	  function set$1(type, name, callback) {
	    for (var i = 0, n = type.length; i < n; ++i) {
	      if (type[i].name === name) {
	        type[i] = noop$1, type = type.slice(0, i).concat(type.slice(i + 1));
	        break;
	      }
	    }
	    if (callback != null) type.push({name: name, value: callback});
	    return type;
	  }

	  function objectConverter(columns) {
	    return new Function("d", "return {" + columns.map(function(name, i) {
	      return JSON.stringify(name) + ": d[" + i + "]";
	    }).join(",") + "}");
	  }

	  function customConverter(columns, f) {
	    var object = objectConverter(columns);
	    return function(row, i) {
	      return f(object(row), i, columns);
	    };
	  }

	  // Compute unique columns in order of discovery.
	  function inferColumns(rows) {
	    var columnSet = Object.create(null),
	        columns = [];

	    rows.forEach(function(row) {
	      for (var column in row) {
	        if (!(column in columnSet)) {
	          columns.push(columnSet[column] = column);
	        }
	      }
	    });

	    return columns;
	  }

	  function dsv(delimiter) {
	    var reFormat = new RegExp("[\"" + delimiter + "\n]"),
	        delimiterCode = delimiter.charCodeAt(0);

	    function parse(text, f) {
	      var convert, columns, rows = parseRows(text, function(row, i) {
	        if (convert) return convert(row, i - 1);
	        columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
	      });
	      rows.columns = columns;
	      return rows;
	    }

	    function parseRows(text, f) {
	      var EOL = {}, // sentinel value for end-of-line
	          EOF = {}, // sentinel value for end-of-file
	          rows = [], // output rows
	          N = text.length,
	          I = 0, // current character index
	          n = 0, // the current line number
	          t, // the current token
	          eol; // is the current token followed by EOL?

	      function token() {
	        if (I >= N) return EOF; // special case: end of file
	        if (eol) return eol = false, EOL; // special case: end of line

	        // special case: quotes
	        var j = I, c;
	        if (text.charCodeAt(j) === 34) {
	          var i = j;
	          while (i++ < N) {
	            if (text.charCodeAt(i) === 34) {
	              if (text.charCodeAt(i + 1) !== 34) break;
	              ++i;
	            }
	          }
	          I = i + 2;
	          c = text.charCodeAt(i + 1);
	          if (c === 13) {
	            eol = true;
	            if (text.charCodeAt(i + 2) === 10) ++I;
	          } else if (c === 10) {
	            eol = true;
	          }
	          return text.slice(j + 1, i).replace(/""/g, "\"");
	        }

	        // common case: find next delimiter or newline
	        while (I < N) {
	          var k = 1;
	          c = text.charCodeAt(I++);
	          if (c === 10) eol = true; // \n
	          else if (c === 13) { eol = true; if (text.charCodeAt(I) === 10) ++I, ++k; } // \r|\r\n
	          else if (c !== delimiterCode) continue;
	          return text.slice(j, I - k);
	        }

	        // special case: last token before EOF
	        return text.slice(j);
	      }

	      while ((t = token()) !== EOF) {
	        var a = [];
	        while (t !== EOL && t !== EOF) {
	          a.push(t);
	          t = token();
	        }
	        if (f && (a = f(a, n++)) == null) continue;
	        rows.push(a);
	      }

	      return rows;
	    }

	    function format(rows, columns) {
	      if (columns == null) columns = inferColumns(rows);
	      return [columns.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
	        return columns.map(function(column) {
	          return formatValue(row[column]);
	        }).join(delimiter);
	      })).join("\n");
	    }

	    function formatRows(rows) {
	      return rows.map(formatRow).join("\n");
	    }

	    function formatRow(row) {
	      return row.map(formatValue).join(delimiter);
	    }

	    function formatValue(text) {
	      return text == null ? ""
	          : reFormat.test(text += "") ? "\"" + text.replace(/\"/g, "\"\"") + "\""
	          : text;
	    }

	    return {
	      parse: parse,
	      parseRows: parseRows,
	      format: format,
	      formatRows: formatRows
	    };
	  }

	  var csv = dsv(",");

	  var csvParse = csv.parse;
	  var csvParseRows = csv.parseRows;
	  var csvFormat = csv.format;
	  var csvFormatRows = csv.formatRows;

	  var tsv = dsv("\t");

	  var tsvParse = tsv.parse;
	  var tsvParseRows = tsv.parseRows;
	  var tsvFormat = tsv.format;
	  var tsvFormatRows = tsv.formatRows;

	  function request(url, callback) {
	    var request,
	        event = dispatch("beforesend", "progress", "load", "error"),
	        mimeType,
	        headers = map$1(),
	        xhr = new XMLHttpRequest,
	        user = null,
	        password = null,
	        response,
	        responseType,
	        timeout = 0;

	    // If IE does not support CORS, use XDomainRequest.
	    if (typeof XDomainRequest !== "undefined"
	        && !("withCredentials" in xhr)
	        && /^(http(s)?:)?\/\//.test(url)) xhr = new XDomainRequest;

	    "onload" in xhr
	        ? xhr.onload = xhr.onerror = xhr.ontimeout = respond
	        : xhr.onreadystatechange = function(o) { xhr.readyState > 3 && respond(o); };

	    function respond(o) {
	      var status = xhr.status, result;
	      if (!status && hasResponse(xhr)
	          || status >= 200 && status < 300
	          || status === 304) {
	        if (response) {
	          try {
	            result = response.call(request, xhr);
	          } catch (e) {
	            event.call("error", request, e);
	            return;
	          }
	        } else {
	          result = xhr;
	        }
	        event.call("load", request, result);
	      } else {
	        event.call("error", request, o);
	      }
	    }

	    xhr.onprogress = function(e) {
	      event.call("progress", request, e);
	    };

	    request = {
	      header: function(name, value) {
	        name = (name + "").toLowerCase();
	        if (arguments.length < 2) return headers.get(name);
	        if (value == null) headers.remove(name);
	        else headers.set(name, value + "");
	        return request;
	      },

	      // If mimeType is non-null and no Accept header is set, a default is used.
	      mimeType: function(value) {
	        if (!arguments.length) return mimeType;
	        mimeType = value == null ? null : value + "";
	        return request;
	      },

	      // Specifies what type the response value should take;
	      // for instance, arraybuffer, blob, document, or text.
	      responseType: function(value) {
	        if (!arguments.length) return responseType;
	        responseType = value;
	        return request;
	      },

	      timeout: function(value) {
	        if (!arguments.length) return timeout;
	        timeout = +value;
	        return request;
	      },

	      user: function(value) {
	        return arguments.length < 1 ? user : (user = value == null ? null : value + "", request);
	      },

	      password: function(value) {
	        return arguments.length < 1 ? password : (password = value == null ? null : value + "", request);
	      },

	      // Specify how to convert the response content to a specific type;
	      // changes the callback value on "load" events.
	      response: function(value) {
	        response = value;
	        return request;
	      },

	      // Alias for send("GET", …).
	      get: function(data, callback) {
	        return request.send("GET", data, callback);
	      },

	      // Alias for send("POST", …).
	      post: function(data, callback) {
	        return request.send("POST", data, callback);
	      },

	      // If callback is non-null, it will be used for error and load events.
	      send: function(method, data, callback) {
	        xhr.open(method, url, true, user, password);
	        if (mimeType != null && !headers.has("accept")) headers.set("accept", mimeType + ",*/*");
	        if (xhr.setRequestHeader) headers.each(function(value, name) { xhr.setRequestHeader(name, value); });
	        if (mimeType != null && xhr.overrideMimeType) xhr.overrideMimeType(mimeType);
	        if (responseType != null) xhr.responseType = responseType;
	        if (timeout > 0) xhr.timeout = timeout;
	        if (callback == null && typeof data === "function") callback = data, data = null;
	        if (callback != null && callback.length === 1) callback = fixCallback(callback);
	        if (callback != null) request.on("error", callback).on("load", function(xhr) { callback(null, xhr); });
	        event.call("beforesend", request, xhr);
	        xhr.send(data == null ? null : data);
	        return request;
	      },

	      abort: function() {
	        xhr.abort();
	        return request;
	      },

	      on: function() {
	        var value = event.on.apply(event, arguments);
	        return value === event ? request : value;
	      }
	    };

	    if (callback != null) {
	      if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
	      return request.get(callback);
	    }

	    return request;
	  }

	  function fixCallback(callback) {
	    return function(error, xhr) {
	      callback(error == null ? xhr : null);
	    };
	  }

	  function hasResponse(xhr) {
	    var type = xhr.responseType;
	    return type && type !== "text"
	        ? xhr.response // null on error
	        : xhr.responseText; // "" on error
	  }

	  function type(defaultMimeType, response) {
	    return function(url, callback) {
	      var r = request(url).mimeType(defaultMimeType).response(response);
	      if (callback != null) {
	        if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
	        return r.get(callback);
	      }
	      return r;
	    };
	  }

	  var html = type("text/html", function(xhr) {
	    return document.createRange().createContextualFragment(xhr.responseText);
	  });

	  var json = type("application/json", function(xhr) {
	    return JSON.parse(xhr.responseText);
	  });

	  var text = type("text/plain", function(xhr) {
	    return xhr.responseText;
	  });

	  var xml = type("application/xml", function(xhr) {
	    var xml = xhr.responseXML;
	    if (!xml) throw new Error("parse error");
	    return xml;
	  });

	  function dsv$1(defaultMimeType, parse) {
	    return function(url, row, callback) {
	      if (arguments.length < 3) callback = row, row = null;
	      var r = request(url).mimeType(defaultMimeType);
	      r.row = function(_) { return arguments.length ? r.response(responseOf(parse, row = _)) : row; };
	      r.row(row);
	      return callback ? r.get(callback) : r;
	    };
	  }

	  function responseOf(parse, row) {
	    return function(request) {
	      return parse(request.responseText, row);
	    };
	  }

	  var csv$1 = dsv$1("text/csv", csvParse);

	  var tsv$1 = dsv$1("text/tab-separated-values", tsvParse);

	  var frame = 0;
	  var timeout = 0;
	  var interval = 0;
	  var pokeDelay = 1000;
	  var taskHead;
	  var taskTail;
	  var clockLast = 0;
	  var clockNow = 0;
	  var clockSkew = 0;
	  var clock = typeof performance === "object" && performance.now ? performance : Date;
	  var setFrame = typeof requestAnimationFrame === "function"
	          ? (clock === Date ? function(f) { requestAnimationFrame(function() { f(clock.now()); }); } : requestAnimationFrame)
	          : function(f) { setTimeout(f, 17); };
	  function now() {
	    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
	  }

	  function clearNow() {
	    clockNow = 0;
	  }

	  function Timer() {
	    this._call =
	    this._time =
	    this._next = null;
	  }

	  Timer.prototype = timer.prototype = {
	    constructor: Timer,
	    restart: function(callback, delay, time) {
	      if (typeof callback !== "function") throw new TypeError("callback is not a function");
	      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
	      if (!this._next && taskTail !== this) {
	        if (taskTail) taskTail._next = this;
	        else taskHead = this;
	        taskTail = this;
	      }
	      this._call = callback;
	      this._time = time;
	      sleep();
	    },
	    stop: function() {
	      if (this._call) {
	        this._call = null;
	        this._time = Infinity;
	        sleep();
	      }
	    }
	  };

	  function timer(callback, delay, time) {
	    var t = new Timer;
	    t.restart(callback, delay, time);
	    return t;
	  }

	  function timerFlush() {
	    now(); // Get the current time, if not already set.
	    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
	    var t = taskHead, e;
	    while (t) {
	      if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
	      t = t._next;
	    }
	    --frame;
	  }

	  function wake(time) {
	    clockNow = (clockLast = time || clock.now()) + clockSkew;
	    frame = timeout = 0;
	    try {
	      timerFlush();
	    } finally {
	      frame = 0;
	      nap();
	      clockNow = 0;
	    }
	  }

	  function poke$1() {
	    var now = clock.now(), delay = now - clockLast;
	    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
	  }

	  function nap() {
	    var t0, t1 = taskHead, t2, time = Infinity;
	    while (t1) {
	      if (t1._call) {
	        if (time > t1._time) time = t1._time;
	        t0 = t1, t1 = t1._next;
	      } else {
	        t2 = t1._next, t1._next = null;
	        t1 = t0 ? t0._next = t2 : taskHead = t2;
	      }
	    }
	    taskTail = t0;
	    sleep(time);
	  }

	  function sleep(time) {
	    if (frame) return; // Soonest alarm already set, or will be.
	    if (timeout) timeout = clearTimeout(timeout);
	    var delay = time - clockNow;
	    if (delay > 24) {
	      if (time < Infinity) timeout = setTimeout(wake, delay);
	      if (interval) interval = clearInterval(interval);
	    } else {
	      if (!interval) interval = setInterval(poke$1, pokeDelay);
	      frame = 1, setFrame(wake);
	    }
	  }

	  function timeout$1(callback, delay, time) {
	    var t = new Timer;
	    delay = delay == null ? 0 : +delay;
	    t.restart(function(elapsed) {
	      t.stop();
	      callback(elapsed + delay);
	    }, delay, time);
	    return t;
	  }

	  function interval$1(callback, delay, time) {
	    var t = new Timer, total = delay;
	    if (delay == null) return t.restart(callback, delay, time), t;
	    delay = +delay, time = time == null ? now() : +time;
	    t.restart(function tick(elapsed) {
	      elapsed += total;
	      t.restart(tick, total += delay, time);
	      callback(elapsed);
	    }, delay, time);
	    return t;
	  }

	var   t0$1 = new Date;
	var   t1$1 = new Date;
	  function newInterval(floori, offseti, count, field) {

	    function interval(date) {
	      return floori(date = new Date(+date)), date;
	    }

	    interval.floor = interval;

	    interval.ceil = function(date) {
	      return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
	    };

	    interval.round = function(date) {
	      var d0 = interval(date),
	          d1 = interval.ceil(date);
	      return date - d0 < d1 - date ? d0 : d1;
	    };

	    interval.offset = function(date, step) {
	      return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
	    };

	    interval.range = function(start, stop, step) {
	      var range = [];
	      start = interval.ceil(start);
	      step = step == null ? 1 : Math.floor(step);
	      if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
	      do range.push(new Date(+start)); while (offseti(start, step), floori(start), start < stop)
	      return range;
	    };

	    interval.filter = function(test) {
	      return newInterval(function(date) {
	        while (floori(date), !test(date)) date.setTime(date - 1);
	      }, function(date, step) {
	        while (--step >= 0) while (offseti(date, 1), !test(date));
	      });
	    };

	    if (count) {
	      interval.count = function(start, end) {
	        t0$1.setTime(+start), t1$1.setTime(+end);
	        floori(t0$1), floori(t1$1);
	        return Math.floor(count(t0$1, t1$1));
	      };

	      interval.every = function(step) {
	        step = Math.floor(step);
	        return !isFinite(step) || !(step > 0) ? null
	            : !(step > 1) ? interval
	            : interval.filter(field
	                ? function(d) { return field(d) % step === 0; }
	                : function(d) { return interval.count(0, d) % step === 0; });
	      };
	    }

	    return interval;
	  }

	  var millisecond = newInterval(function() {
	    // noop
	  }, function(date, step) {
	    date.setTime(+date + step);
	  }, function(start, end) {
	    return end - start;
	  });

	  // An optimized implementation for this simple case.
	  millisecond.every = function(k) {
	    k = Math.floor(k);
	    if (!isFinite(k) || !(k > 0)) return null;
	    if (!(k > 1)) return millisecond;
	    return newInterval(function(date) {
	      date.setTime(Math.floor(date / k) * k);
	    }, function(date, step) {
	      date.setTime(+date + step * k);
	    }, function(start, end) {
	      return (end - start) / k;
	    });
	  };

	  var milliseconds = millisecond.range;

	  var durationSecond = 1e3;
	  var durationMinute = 6e4;
	  var durationHour = 36e5;
	  var durationDay = 864e5;
	  var durationWeek = 6048e5;

	  var second = newInterval(function(date) {
	    date.setTime(Math.floor(date / durationSecond) * durationSecond);
	  }, function(date, step) {
	    date.setTime(+date + step * durationSecond);
	  }, function(start, end) {
	    return (end - start) / durationSecond;
	  }, function(date) {
	    return date.getUTCSeconds();
	  });

	  var seconds = second.range;

	  var minute = newInterval(function(date) {
	    date.setTime(Math.floor(date / durationMinute) * durationMinute);
	  }, function(date, step) {
	    date.setTime(+date + step * durationMinute);
	  }, function(start, end) {
	    return (end - start) / durationMinute;
	  }, function(date) {
	    return date.getMinutes();
	  });

	  var minutes = minute.range;

	  var hour = newInterval(function(date) {
	    var offset = date.getTimezoneOffset() * durationMinute % durationHour;
	    if (offset < 0) offset += durationHour;
	    date.setTime(Math.floor((+date - offset) / durationHour) * durationHour + offset);
	  }, function(date, step) {
	    date.setTime(+date + step * durationHour);
	  }, function(start, end) {
	    return (end - start) / durationHour;
	  }, function(date) {
	    return date.getHours();
	  });

	  var hours = hour.range;

	  var day = newInterval(function(date) {
	    date.setHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setDate(date.getDate() + step);
	  }, function(start, end) {
	    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay;
	  }, function(date) {
	    return date.getDate() - 1;
	  });

	  var days = day.range;

	  function weekday(i) {
	    return newInterval(function(date) {
	      date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
	      date.setHours(0, 0, 0, 0);
	    }, function(date, step) {
	      date.setDate(date.getDate() + step * 7);
	    }, function(start, end) {
	      return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
	    });
	  }

	  var timeWeek = weekday(0);
	  var timeMonday = weekday(1);
	  var tuesday = weekday(2);
	  var wednesday = weekday(3);
	  var thursday = weekday(4);
	  var friday = weekday(5);
	  var saturday = weekday(6);

	  var sundays = timeWeek.range;
	  var mondays = timeMonday.range;
	  var tuesdays = tuesday.range;
	  var wednesdays = wednesday.range;
	  var thursdays = thursday.range;
	  var fridays = friday.range;
	  var saturdays = saturday.range;

	  var month = newInterval(function(date) {
	    date.setDate(1);
	    date.setHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setMonth(date.getMonth() + step);
	  }, function(start, end) {
	    return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
	  }, function(date) {
	    return date.getMonth();
	  });

	  var months = month.range;

	  var year = newInterval(function(date) {
	    date.setMonth(0, 1);
	    date.setHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setFullYear(date.getFullYear() + step);
	  }, function(start, end) {
	    return end.getFullYear() - start.getFullYear();
	  }, function(date) {
	    return date.getFullYear();
	  });

	  // An optimized implementation for this simple case.
	  year.every = function(k) {
	    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
	      date.setFullYear(Math.floor(date.getFullYear() / k) * k);
	      date.setMonth(0, 1);
	      date.setHours(0, 0, 0, 0);
	    }, function(date, step) {
	      date.setFullYear(date.getFullYear() + step * k);
	    });
	  };

	  var years = year.range;

	  var utcMinute = newInterval(function(date) {
	    date.setUTCSeconds(0, 0);
	  }, function(date, step) {
	    date.setTime(+date + step * durationMinute);
	  }, function(start, end) {
	    return (end - start) / durationMinute;
	  }, function(date) {
	    return date.getUTCMinutes();
	  });

	  var utcMinutes = utcMinute.range;

	  var utcHour = newInterval(function(date) {
	    date.setUTCMinutes(0, 0, 0);
	  }, function(date, step) {
	    date.setTime(+date + step * durationHour);
	  }, function(start, end) {
	    return (end - start) / durationHour;
	  }, function(date) {
	    return date.getUTCHours();
	  });

	  var utcHours = utcHour.range;

	  var utcDay = newInterval(function(date) {
	    date.setUTCHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setUTCDate(date.getUTCDate() + step);
	  }, function(start, end) {
	    return (end - start) / durationDay;
	  }, function(date) {
	    return date.getUTCDate() - 1;
	  });

	  var utcDays = utcDay.range;

	  function utcWeekday(i) {
	    return newInterval(function(date) {
	      date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
	      date.setUTCHours(0, 0, 0, 0);
	    }, function(date, step) {
	      date.setUTCDate(date.getUTCDate() + step * 7);
	    }, function(start, end) {
	      return (end - start) / durationWeek;
	    });
	  }

	  var utcWeek = utcWeekday(0);
	  var utcMonday = utcWeekday(1);
	  var utcTuesday = utcWeekday(2);
	  var utcWednesday = utcWeekday(3);
	  var utcThursday = utcWeekday(4);
	  var utcFriday = utcWeekday(5);
	  var utcSaturday = utcWeekday(6);

	  var utcSundays = utcWeek.range;
	  var utcMondays = utcMonday.range;
	  var utcTuesdays = utcTuesday.range;
	  var utcWednesdays = utcWednesday.range;
	  var utcThursdays = utcThursday.range;
	  var utcFridays = utcFriday.range;
	  var utcSaturdays = utcSaturday.range;

	  var utcMonth = newInterval(function(date) {
	    date.setUTCDate(1);
	    date.setUTCHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setUTCMonth(date.getUTCMonth() + step);
	  }, function(start, end) {
	    return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
	  }, function(date) {
	    return date.getUTCMonth();
	  });

	  var utcMonths = utcMonth.range;

	  var utcYear = newInterval(function(date) {
	    date.setUTCMonth(0, 1);
	    date.setUTCHours(0, 0, 0, 0);
	  }, function(date, step) {
	    date.setUTCFullYear(date.getUTCFullYear() + step);
	  }, function(start, end) {
	    return end.getUTCFullYear() - start.getUTCFullYear();
	  }, function(date) {
	    return date.getUTCFullYear();
	  });

	  // An optimized implementation for this simple case.
	  utcYear.every = function(k) {
	    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
	      date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
	      date.setUTCMonth(0, 1);
	      date.setUTCHours(0, 0, 0, 0);
	    }, function(date, step) {
	      date.setUTCFullYear(date.getUTCFullYear() + step * k);
	    });
	  };

	  var utcYears = utcYear.range;

	  // Computes the decimal coefficient and exponent of the specified number x with
	  // significant digits p, where x is positive and p is in [1, 21] or undefined.
	  // For example, formatDecimal(1.23) returns ["123", 0].
	  function formatDecimal(x, p) {
	    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
	    var i, coefficient = x.slice(0, i);

	    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
	    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
	    return [
	      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
	      +x.slice(i + 1)
	    ];
	  }

	  function exponent$1(x) {
	    return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
	  }

	  function formatGroup(grouping, thousands) {
	    return function(value, width) {
	      var i = value.length,
	          t = [],
	          j = 0,
	          g = grouping[0],
	          length = 0;

	      while (i > 0 && g > 0) {
	        if (length + g + 1 > width) g = Math.max(1, width - length);
	        t.push(value.substring(i -= g, i + g));
	        if ((length += g + 1) > width) break;
	        g = grouping[j = (j + 1) % grouping.length];
	      }

	      return t.reverse().join(thousands);
	    };
	  }

	  function formatDefault(x, p) {
	    x = x.toPrecision(p);

	    out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
	      switch (x[i]) {
	        case ".": i0 = i1 = i; break;
	        case "0": if (i0 === 0) i0 = i; i1 = i; break;
	        case "e": break out;
	        default: if (i0 > 0) i0 = 0; break;
	      }
	    }

	    return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
	  }

	  var prefixExponent;

	  function formatPrefixAuto(x, p) {
	    var d = formatDecimal(x, p);
	    if (!d) return x + "";
	    var coefficient = d[0],
	        exponent = d[1],
	        i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
	        n = coefficient.length;
	    return i === n ? coefficient
	        : i > n ? coefficient + new Array(i - n + 1).join("0")
	        : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
	        : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
	  }

	  function formatRounded(x, p) {
	    var d = formatDecimal(x, p);
	    if (!d) return x + "";
	    var coefficient = d[0],
	        exponent = d[1];
	    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
	        : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
	        : coefficient + new Array(exponent - coefficient.length + 2).join("0");
	  }

	  var formatTypes = {
	    "": formatDefault,
	    "%": function(x, p) { return (x * 100).toFixed(p); },
	    "b": function(x) { return Math.round(x).toString(2); },
	    "c": function(x) { return x + ""; },
	    "d": function(x) { return Math.round(x).toString(10); },
	    "e": function(x, p) { return x.toExponential(p); },
	    "f": function(x, p) { return x.toFixed(p); },
	    "g": function(x, p) { return x.toPrecision(p); },
	    "o": function(x) { return Math.round(x).toString(8); },
	    "p": function(x, p) { return formatRounded(x * 100, p); },
	    "r": formatRounded,
	    "s": formatPrefixAuto,
	    "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
	    "x": function(x) { return Math.round(x).toString(16); }
	  };

	  // [[fill]align][sign][symbol][0][width][,][.precision][type]
	  var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

	  function formatSpecifier(specifier) {
	    return new FormatSpecifier(specifier);
	  }

	  function FormatSpecifier(specifier) {
	    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);

	    var match,
	        fill = match[1] || " ",
	        align = match[2] || ">",
	        sign = match[3] || "-",
	        symbol = match[4] || "",
	        zero = !!match[5],
	        width = match[6] && +match[6],
	        comma = !!match[7],
	        precision = match[8] && +match[8].slice(1),
	        type = match[9] || "";

	    // The "n" type is an alias for ",g".
	    if (type === "n") comma = true, type = "g";

	    // Map invalid types to the default format.
	    else if (!formatTypes[type]) type = "";

	    // If zero fill is specified, padding goes after sign and before digits.
	    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

	    this.fill = fill;
	    this.align = align;
	    this.sign = sign;
	    this.symbol = symbol;
	    this.zero = zero;
	    this.width = width;
	    this.comma = comma;
	    this.precision = precision;
	    this.type = type;
	  }

	  FormatSpecifier.prototype.toString = function() {
	    return this.fill
	        + this.align
	        + this.sign
	        + this.symbol
	        + (this.zero ? "0" : "")
	        + (this.width == null ? "" : Math.max(1, this.width | 0))
	        + (this.comma ? "," : "")
	        + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
	        + this.type;
	  };

	  var prefixes = ["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];

	  function identity$3(x) {
	    return x;
	  }

	  function formatLocale(locale) {
	    var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity$3,
	        currency = locale.currency,
	        decimal = locale.decimal;

	    function newFormat(specifier) {
	      specifier = formatSpecifier(specifier);

	      var fill = specifier.fill,
	          align = specifier.align,
	          sign = specifier.sign,
	          symbol = specifier.symbol,
	          zero = specifier.zero,
	          width = specifier.width,
	          comma = specifier.comma,
	          precision = specifier.precision,
	          type = specifier.type;

	      // Compute the prefix and suffix.
	      // For SI-prefix, the suffix is lazily computed.
	      var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
	          suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? "%" : "";

	      // What format function should we use?
	      // Is this an integer type?
	      // Can this type generate exponential notation?
	      var formatType = formatTypes[type],
	          maybeSuffix = !type || /[defgprs%]/.test(type);

	      // Set the default precision if not specified,
	      // or clamp the specified precision to the supported range.
	      // For significant precision, it must be in [1, 21].
	      // For fixed precision, it must be in [0, 20].
	      precision = precision == null ? (type ? 6 : 12)
	          : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
	          : Math.max(0, Math.min(20, precision));

	      function format(value) {
	        var valuePrefix = prefix,
	            valueSuffix = suffix,
	            i, n, c;

	        if (type === "c") {
	          valueSuffix = formatType(value) + valueSuffix;
	          value = "";
	        } else {
	          value = +value;

	          // Convert negative to positive, and compute the prefix.
	          // Note that -0 is not less than 0, but 1 / -0 is!
	          var valueNegative = (value < 0 || 1 / value < 0) && (value *= -1, true);

	          // Perform the initial formatting.
	          value = formatType(value, precision);

	          // If the original value was negative, it may be rounded to zero during
	          // formatting; treat this as (positive) zero.
	          if (valueNegative) {
	            i = -1, n = value.length;
	            valueNegative = false;
	            while (++i < n) {
	              if (c = value.charCodeAt(i), (48 < c && c < 58)
	                  || (type === "x" && 96 < c && c < 103)
	                  || (type === "X" && 64 < c && c < 71)) {
	                valueNegative = true;
	                break;
	              }
	            }
	          }

	          // Compute the prefix and suffix.
	          valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
	          valueSuffix = valueSuffix + (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + (valueNegative && sign === "(" ? ")" : "");

	          // Break the formatted value into the integer “value” part that can be
	          // grouped, and fractional or exponential “suffix” part that is not.
	          if (maybeSuffix) {
	            i = -1, n = value.length;
	            while (++i < n) {
	              if (c = value.charCodeAt(i), 48 > c || c > 57) {
	                valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
	                value = value.slice(0, i);
	                break;
	              }
	            }
	          }
	        }

	        // If the fill character is not "0", grouping is applied before padding.
	        if (comma && !zero) value = group(value, Infinity);

	        // Compute the padding.
	        var length = valuePrefix.length + value.length + valueSuffix.length,
	            padding = length < width ? new Array(width - length + 1).join(fill) : "";

	        // If the fill character is "0", grouping is applied after padding.
	        if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

	        // Reconstruct the final output based on the desired alignment.
	        switch (align) {
	          case "<": return valuePrefix + value + valueSuffix + padding;
	          case "=": return valuePrefix + padding + value + valueSuffix;
	          case "^": return padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
	        }
	        return padding + valuePrefix + value + valueSuffix;
	      }

	      format.toString = function() {
	        return specifier + "";
	      };

	      return format;
	    }

	    function formatPrefix(specifier, value) {
	      var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
	          e = Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))) * 3,
	          k = Math.pow(10, -e),
	          prefix = prefixes[8 + e / 3];
	      return function(value) {
	        return f(k * value) + prefix;
	      };
	    }

	    return {
	      format: newFormat,
	      formatPrefix: formatPrefix
	    };
	  }

	  var locale;
	  defaultLocale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [3],
	    currency: ["$", ""]
	  });

	  function defaultLocale(definition) {
	    locale = formatLocale(definition);
	    exports.format = locale.format;
	    exports.formatPrefix = locale.formatPrefix;
	    return locale;
	  }

	  function precisionFixed(step) {
	    return Math.max(0, -exponent$1(Math.abs(step)));
	  }

	  function precisionPrefix(step, value) {
	    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))) * 3 - exponent$1(Math.abs(step)));
	  }

	  function precisionRound(step, max) {
	    step = Math.abs(step), max = Math.abs(max) - step;
	    return Math.max(0, exponent$1(max) - exponent$1(step)) + 1;
	  }

	  function localDate(d) {
	    if (0 <= d.y && d.y < 100) {
	      var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
	      date.setFullYear(d.y);
	      return date;
	    }
	    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
	  }

	  function utcDate(d) {
	    if (0 <= d.y && d.y < 100) {
	      var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
	      date.setUTCFullYear(d.y);
	      return date;
	    }
	    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
	  }

	  function newYear(y) {
	    return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
	  }

	  function formatLocale$1(locale) {
	    var locale_dateTime = locale.dateTime,
	        locale_date = locale.date,
	        locale_time = locale.time,
	        locale_periods = locale.periods,
	        locale_weekdays = locale.days,
	        locale_shortWeekdays = locale.shortDays,
	        locale_months = locale.months,
	        locale_shortMonths = locale.shortMonths;

	    var periodRe = formatRe(locale_periods),
	        periodLookup = formatLookup(locale_periods),
	        weekdayRe = formatRe(locale_weekdays),
	        weekdayLookup = formatLookup(locale_weekdays),
	        shortWeekdayRe = formatRe(locale_shortWeekdays),
	        shortWeekdayLookup = formatLookup(locale_shortWeekdays),
	        monthRe = formatRe(locale_months),
	        monthLookup = formatLookup(locale_months),
	        shortMonthRe = formatRe(locale_shortMonths),
	        shortMonthLookup = formatLookup(locale_shortMonths);

	    var formats = {
	      "a": formatShortWeekday,
	      "A": formatWeekday,
	      "b": formatShortMonth,
	      "B": formatMonth,
	      "c": null,
	      "d": formatDayOfMonth,
	      "e": formatDayOfMonth,
	      "H": formatHour24,
	      "I": formatHour12,
	      "j": formatDayOfYear,
	      "L": formatMilliseconds,
	      "m": formatMonthNumber,
	      "M": formatMinutes,
	      "p": formatPeriod,
	      "S": formatSeconds,
	      "U": formatWeekNumberSunday,
	      "w": formatWeekdayNumber,
	      "W": formatWeekNumberMonday,
	      "x": null,
	      "X": null,
	      "y": formatYear,
	      "Y": formatFullYear,
	      "Z": formatZone,
	      "%": formatLiteralPercent
	    };

	    var utcFormats = {
	      "a": formatUTCShortWeekday,
	      "A": formatUTCWeekday,
	      "b": formatUTCShortMonth,
	      "B": formatUTCMonth,
	      "c": null,
	      "d": formatUTCDayOfMonth,
	      "e": formatUTCDayOfMonth,
	      "H": formatUTCHour24,
	      "I": formatUTCHour12,
	      "j": formatUTCDayOfYear,
	      "L": formatUTCMilliseconds,
	      "m": formatUTCMonthNumber,
	      "M": formatUTCMinutes,
	      "p": formatUTCPeriod,
	      "S": formatUTCSeconds,
	      "U": formatUTCWeekNumberSunday,
	      "w": formatUTCWeekdayNumber,
	      "W": formatUTCWeekNumberMonday,
	      "x": null,
	      "X": null,
	      "y": formatUTCYear,
	      "Y": formatUTCFullYear,
	      "Z": formatUTCZone,
	      "%": formatLiteralPercent
	    };

	    var parses = {
	      "a": parseShortWeekday,
	      "A": parseWeekday,
	      "b": parseShortMonth,
	      "B": parseMonth,
	      "c": parseLocaleDateTime,
	      "d": parseDayOfMonth,
	      "e": parseDayOfMonth,
	      "H": parseHour24,
	      "I": parseHour24,
	      "j": parseDayOfYear,
	      "L": parseMilliseconds,
	      "m": parseMonthNumber,
	      "M": parseMinutes,
	      "p": parsePeriod,
	      "S": parseSeconds,
	      "U": parseWeekNumberSunday,
	      "w": parseWeekdayNumber,
	      "W": parseWeekNumberMonday,
	      "x": parseLocaleDate,
	      "X": parseLocaleTime,
	      "y": parseYear,
	      "Y": parseFullYear,
	      "Z": parseZone,
	      "%": parseLiteralPercent
	    };

	    // These recursive directive definitions must be deferred.
	    formats.x = newFormat(locale_date, formats);
	    formats.X = newFormat(locale_time, formats);
	    formats.c = newFormat(locale_dateTime, formats);
	    utcFormats.x = newFormat(locale_date, utcFormats);
	    utcFormats.X = newFormat(locale_time, utcFormats);
	    utcFormats.c = newFormat(locale_dateTime, utcFormats);

	    function newFormat(specifier, formats) {
	      return function(date) {
	        var string = [],
	            i = -1,
	            j = 0,
	            n = specifier.length,
	            c,
	            pad,
	            format;

	        if (!(date instanceof Date)) date = new Date(+date);

	        while (++i < n) {
	          if (specifier.charCodeAt(i) === 37) {
	            string.push(specifier.slice(j, i));
	            if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
	            else pad = c === "e" ? " " : "0";
	            if (format = formats[c]) c = format(date, pad);
	            string.push(c);
	            j = i + 1;
	          }
	        }

	        string.push(specifier.slice(j, i));
	        return string.join("");
	      };
	    }

	    function newParse(specifier, newDate) {
	      return function(string) {
	        var d = newYear(1900),
	            i = parseSpecifier(d, specifier, string += "", 0);
	        if (i != string.length) return null;

	        // The am-pm flag is 0 for AM, and 1 for PM.
	        if ("p" in d) d.H = d.H % 12 + d.p * 12;

	        // Convert day-of-week and week-of-year to day-of-year.
	        if ("W" in d || "U" in d) {
	          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
	          var day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
	          d.m = 0;
	          d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
	        }

	        // If a time zone is specified, all fields are interpreted as UTC and then
	        // offset according to the specified time zone.
	        if ("Z" in d) {
	          d.H += d.Z / 100 | 0;
	          d.M += d.Z % 100;
	          return utcDate(d);
	        }

	        // Otherwise, all fields are in local time.
	        return newDate(d);
	      };
	    }

	    function parseSpecifier(d, specifier, string, j) {
	      var i = 0,
	          n = specifier.length,
	          m = string.length,
	          c,
	          parse;

	      while (i < n) {
	        if (j >= m) return -1;
	        c = specifier.charCodeAt(i++);
	        if (c === 37) {
	          c = specifier.charAt(i++);
	          parse = parses[c in pads ? specifier.charAt(i++) : c];
	          if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
	        } else if (c != string.charCodeAt(j++)) {
	          return -1;
	        }
	      }

	      return j;
	    }

	    function parsePeriod(d, string, i) {
	      var n = periodRe.exec(string.slice(i));
	      return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }

	    function parseShortWeekday(d, string, i) {
	      var n = shortWeekdayRe.exec(string.slice(i));
	      return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }

	    function parseWeekday(d, string, i) {
	      var n = weekdayRe.exec(string.slice(i));
	      return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }

	    function parseShortMonth(d, string, i) {
	      var n = shortMonthRe.exec(string.slice(i));
	      return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }

	    function parseMonth(d, string, i) {
	      var n = monthRe.exec(string.slice(i));
	      return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
	    }

	    function parseLocaleDateTime(d, string, i) {
	      return parseSpecifier(d, locale_dateTime, string, i);
	    }

	    function parseLocaleDate(d, string, i) {
	      return parseSpecifier(d, locale_date, string, i);
	    }

	    function parseLocaleTime(d, string, i) {
	      return parseSpecifier(d, locale_time, string, i);
	    }

	    function formatShortWeekday(d) {
	      return locale_shortWeekdays[d.getDay()];
	    }

	    function formatWeekday(d) {
	      return locale_weekdays[d.getDay()];
	    }

	    function formatShortMonth(d) {
	      return locale_shortMonths[d.getMonth()];
	    }

	    function formatMonth(d) {
	      return locale_months[d.getMonth()];
	    }

	    function formatPeriod(d) {
	      return locale_periods[+(d.getHours() >= 12)];
	    }

	    function formatUTCShortWeekday(d) {
	      return locale_shortWeekdays[d.getUTCDay()];
	    }

	    function formatUTCWeekday(d) {
	      return locale_weekdays[d.getUTCDay()];
	    }

	    function formatUTCShortMonth(d) {
	      return locale_shortMonths[d.getUTCMonth()];
	    }

	    function formatUTCMonth(d) {
	      return locale_months[d.getUTCMonth()];
	    }

	    function formatUTCPeriod(d) {
	      return locale_periods[+(d.getUTCHours() >= 12)];
	    }

	    return {
	      format: function(specifier) {
	        var f = newFormat(specifier += "", formats);
	        f.toString = function() { return specifier; };
	        return f;
	      },
	      parse: function(specifier) {
	        var p = newParse(specifier += "", localDate);
	        p.toString = function() { return specifier; };
	        return p;
	      },
	      utcFormat: function(specifier) {
	        var f = newFormat(specifier += "", utcFormats);
	        f.toString = function() { return specifier; };
	        return f;
	      },
	      utcParse: function(specifier) {
	        var p = newParse(specifier, utcDate);
	        p.toString = function() { return specifier; };
	        return p;
	      }
	    };
	  }

	  var pads = {"-": "", "_": " ", "0": "0"};
	  var numberRe = /^\s*\d+/;
	  var percentRe = /^%/;
	  var requoteRe = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
	  function pad(value, fill, width) {
	    var sign = value < 0 ? "-" : "",
	        string = (sign ? -value : value) + "",
	        length = string.length;
	    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
	  }

	  function requote(s) {
	    return s.replace(requoteRe, "\\$&");
	  }

	  function formatRe(names) {
	    return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
	  }

	  function formatLookup(names) {
	    var map = {}, i = -1, n = names.length;
	    while (++i < n) map[names[i].toLowerCase()] = i;
	    return map;
	  }

	  function parseWeekdayNumber(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 1));
	    return n ? (d.w = +n[0], i + n[0].length) : -1;
	  }

	  function parseWeekNumberSunday(d, string, i) {
	    var n = numberRe.exec(string.slice(i));
	    return n ? (d.U = +n[0], i + n[0].length) : -1;
	  }

	  function parseWeekNumberMonday(d, string, i) {
	    var n = numberRe.exec(string.slice(i));
	    return n ? (d.W = +n[0], i + n[0].length) : -1;
	  }

	  function parseFullYear(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 4));
	    return n ? (d.y = +n[0], i + n[0].length) : -1;
	  }

	  function parseYear(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
	  }

	  function parseZone(d, string, i) {
	    var n = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(string.slice(i, i + 6));
	    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
	  }

	  function parseMonthNumber(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
	  }

	  function parseDayOfMonth(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.d = +n[0], i + n[0].length) : -1;
	  }

	  function parseDayOfYear(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 3));
	    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
	  }

	  function parseHour24(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.H = +n[0], i + n[0].length) : -1;
	  }

	  function parseMinutes(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.M = +n[0], i + n[0].length) : -1;
	  }

	  function parseSeconds(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 2));
	    return n ? (d.S = +n[0], i + n[0].length) : -1;
	  }

	  function parseMilliseconds(d, string, i) {
	    var n = numberRe.exec(string.slice(i, i + 3));
	    return n ? (d.L = +n[0], i + n[0].length) : -1;
	  }

	  function parseLiteralPercent(d, string, i) {
	    var n = percentRe.exec(string.slice(i, i + 1));
	    return n ? i + n[0].length : -1;
	  }

	  function formatDayOfMonth(d, p) {
	    return pad(d.getDate(), p, 2);
	  }

	  function formatHour24(d, p) {
	    return pad(d.getHours(), p, 2);
	  }

	  function formatHour12(d, p) {
	    return pad(d.getHours() % 12 || 12, p, 2);
	  }

	  function formatDayOfYear(d, p) {
	    return pad(1 + day.count(year(d), d), p, 3);
	  }

	  function formatMilliseconds(d, p) {
	    return pad(d.getMilliseconds(), p, 3);
	  }

	  function formatMonthNumber(d, p) {
	    return pad(d.getMonth() + 1, p, 2);
	  }

	  function formatMinutes(d, p) {
	    return pad(d.getMinutes(), p, 2);
	  }

	  function formatSeconds(d, p) {
	    return pad(d.getSeconds(), p, 2);
	  }

	  function formatWeekNumberSunday(d, p) {
	    return pad(timeWeek.count(year(d), d), p, 2);
	  }

	  function formatWeekdayNumber(d) {
	    return d.getDay();
	  }

	  function formatWeekNumberMonday(d, p) {
	    return pad(timeMonday.count(year(d), d), p, 2);
	  }

	  function formatYear(d, p) {
	    return pad(d.getFullYear() % 100, p, 2);
	  }

	  function formatFullYear(d, p) {
	    return pad(d.getFullYear() % 10000, p, 4);
	  }

	  function formatZone(d) {
	    var z = d.getTimezoneOffset();
	    return (z > 0 ? "-" : (z *= -1, "+"))
	        + pad(z / 60 | 0, "0", 2)
	        + pad(z % 60, "0", 2);
	  }

	  function formatUTCDayOfMonth(d, p) {
	    return pad(d.getUTCDate(), p, 2);
	  }

	  function formatUTCHour24(d, p) {
	    return pad(d.getUTCHours(), p, 2);
	  }

	  function formatUTCHour12(d, p) {
	    return pad(d.getUTCHours() % 12 || 12, p, 2);
	  }

	  function formatUTCDayOfYear(d, p) {
	    return pad(1 + utcDay.count(utcYear(d), d), p, 3);
	  }

	  function formatUTCMilliseconds(d, p) {
	    return pad(d.getUTCMilliseconds(), p, 3);
	  }

	  function formatUTCMonthNumber(d, p) {
	    return pad(d.getUTCMonth() + 1, p, 2);
	  }

	  function formatUTCMinutes(d, p) {
	    return pad(d.getUTCMinutes(), p, 2);
	  }

	  function formatUTCSeconds(d, p) {
	    return pad(d.getUTCSeconds(), p, 2);
	  }

	  function formatUTCWeekNumberSunday(d, p) {
	    return pad(utcWeek.count(utcYear(d), d), p, 2);
	  }

	  function formatUTCWeekdayNumber(d) {
	    return d.getUTCDay();
	  }

	  function formatUTCWeekNumberMonday(d, p) {
	    return pad(utcMonday.count(utcYear(d), d), p, 2);
	  }

	  function formatUTCYear(d, p) {
	    return pad(d.getUTCFullYear() % 100, p, 2);
	  }

	  function formatUTCFullYear(d, p) {
	    return pad(d.getUTCFullYear() % 10000, p, 4);
	  }

	  function formatUTCZone() {
	    return "+0000";
	  }

	  function formatLiteralPercent() {
	    return "%";
	  }

	  var locale$1;
	  defaultLocale$1({
	    dateTime: "%x, %X",
	    date: "%-m/%-d/%Y",
	    time: "%-I:%M:%S %p",
	    periods: ["AM", "PM"],
	    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	  });

	  function defaultLocale$1(definition) {
	    locale$1 = formatLocale$1(definition);
	    exports.timeFormat = locale$1.format;
	    exports.timeParse = locale$1.parse;
	    exports.utcFormat = locale$1.utcFormat;
	    exports.utcParse = locale$1.utcParse;
	    return locale$1;
	  }

	  var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

	  function formatIsoNative(date) {
	    return date.toISOString();
	  }

	  var formatIso = Date.prototype.toISOString
	      ? formatIsoNative
	      : exports.utcFormat(isoSpecifier);

	  function parseIsoNative(string) {
	    var date = new Date(string);
	    return isNaN(date) ? null : date;
	  }

	  var parseIso = +new Date("2000-01-01T00:00:00.000Z")
	      ? parseIsoNative
	      : exports.utcParse(isoSpecifier);

	  var array$2 = Array.prototype;

	  var map$2 = array$2.map;
	  var slice$3 = array$2.slice;

	  var implicit = {name: "implicit"};

	  function ordinal(range) {
	    var index = map$1(),
	        domain = [],
	        unknown = implicit;

	    range = range == null ? [] : slice$3.call(range);

	    function scale(d) {
	      var key = d + "", i = index.get(key);
	      if (!i) {
	        if (unknown !== implicit) return unknown;
	        index.set(key, i = domain.push(d));
	      }
	      return range[(i - 1) % range.length];
	    }

	    scale.domain = function(_) {
	      if (!arguments.length) return domain.slice();
	      domain = [], index = map$1();
	      var i = -1, n = _.length, d, key;
	      while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
	      return scale;
	    };

	    scale.range = function(_) {
	      return arguments.length ? (range = slice$3.call(_), scale) : range.slice();
	    };

	    scale.unknown = function(_) {
	      return arguments.length ? (unknown = _, scale) : unknown;
	    };

	    scale.copy = function() {
	      return ordinal()
	          .domain(domain)
	          .range(range)
	          .unknown(unknown);
	    };

	    return scale;
	  }

	  function band() {
	    var scale = ordinal().unknown(undefined),
	        domain = scale.domain,
	        ordinalRange = scale.range,
	        range$$ = [0, 1],
	        step,
	        bandwidth,
	        round = false,
	        paddingInner = 0,
	        paddingOuter = 0,
	        align = 0.5;

	    delete scale.unknown;

	    function rescale() {
	      var n = domain().length,
	          reverse = range$$[1] < range$$[0],
	          start = range$$[reverse - 0],
	          stop = range$$[1 - reverse];
	      step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
	      if (round) step = Math.floor(step);
	      start += (stop - start - step * (n - paddingInner)) * align;
	      bandwidth = step * (1 - paddingInner);
	      if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
	      var values = range(n).map(function(i) { return start + step * i; });
	      return ordinalRange(reverse ? values.reverse() : values);
	    }

	    scale.domain = function(_) {
	      return arguments.length ? (domain(_), rescale()) : domain();
	    };

	    scale.range = function(_) {
	      return arguments.length ? (range$$ = [+_[0], +_[1]], rescale()) : range$$.slice();
	    };

	    scale.rangeRound = function(_) {
	      return range$$ = [+_[0], +_[1]], round = true, rescale();
	    };

	    scale.bandwidth = function() {
	      return bandwidth;
	    };

	    scale.step = function() {
	      return step;
	    };

	    scale.round = function(_) {
	      return arguments.length ? (round = !!_, rescale()) : round;
	    };

	    scale.padding = function(_) {
	      return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
	    };

	    scale.paddingInner = function(_) {
	      return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
	    };

	    scale.paddingOuter = function(_) {
	      return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
	    };

	    scale.align = function(_) {
	      return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
	    };

	    scale.copy = function() {
	      return band()
	          .domain(domain())
	          .range(range$$)
	          .round(round)
	          .paddingInner(paddingInner)
	          .paddingOuter(paddingOuter)
	          .align(align);
	    };

	    return rescale();
	  }

	  function pointish(scale) {
	    var copy = scale.copy;

	    scale.padding = scale.paddingOuter;
	    delete scale.paddingInner;
	    delete scale.paddingOuter;

	    scale.copy = function() {
	      return pointish(copy());
	    };

	    return scale;
	  }

	  function point$4() {
	    return pointish(band().paddingInner(1));
	  }

	  function constant$3(x) {
	    return function() {
	      return x;
	    };
	  }

	  function number$1(x) {
	    return +x;
	  }

	  var unit = [0, 1];

	  function deinterpolate(a, b) {
	    return (b -= (a = +a))
	        ? function(x) { return (x - a) / b; }
	        : constant$3(b);
	  }

	  function deinterpolateClamp(deinterpolate) {
	    return function(a, b) {
	      var d = deinterpolate(a = +a, b = +b);
	      return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
	    };
	  }

	  function reinterpolateClamp(reinterpolate) {
	    return function(a, b) {
	      var r = reinterpolate(a = +a, b = +b);
	      return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
	    };
	  }

	  function bimap(domain, range, deinterpolate, reinterpolate) {
	    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
	    if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
	    else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
	    return function(x) { return r0(d0(x)); };
	  }

	  function polymap(domain, range, deinterpolate, reinterpolate) {
	    var j = Math.min(domain.length, range.length) - 1,
	        d = new Array(j),
	        r = new Array(j),
	        i = -1;

	    // Reverse descending domains.
	    if (domain[j] < domain[0]) {
	      domain = domain.slice().reverse();
	      range = range.slice().reverse();
	    }

	    while (++i < j) {
	      d[i] = deinterpolate(domain[i], domain[i + 1]);
	      r[i] = reinterpolate(range[i], range[i + 1]);
	    }

	    return function(x) {
	      var i = bisectRight(domain, x, 1, j) - 1;
	      return r[i](d[i](x));
	    };
	  }

	  function copy(source, target) {
	    return target
	        .domain(source.domain())
	        .range(source.range())
	        .interpolate(source.interpolate())
	        .clamp(source.clamp());
	  }

	  // deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
	  // reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
	  function continuous(deinterpolate$$, reinterpolate) {
	    var domain = unit,
	        range = unit,
	        interpolate$$ = interpolate,
	        clamp = false,
	        piecewise,
	        output,
	        input;

	    function rescale() {
	      piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
	      output = input = null;
	      return scale;
	    }

	    function scale(x) {
	      return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate$$) : deinterpolate$$, interpolate$$)))(+x);
	    }

	    scale.invert = function(y) {
	      return (input || (input = piecewise(range, domain, deinterpolate, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
	    };

	    scale.domain = function(_) {
	      return arguments.length ? (domain = map$2.call(_, number$1), rescale()) : domain.slice();
	    };

	    scale.range = function(_) {
	      return arguments.length ? (range = slice$3.call(_), rescale()) : range.slice();
	    };

	    scale.rangeRound = function(_) {
	      return range = slice$3.call(_), interpolate$$ = interpolateRound, rescale();
	    };

	    scale.clamp = function(_) {
	      return arguments.length ? (clamp = !!_, rescale()) : clamp;
	    };

	    scale.interpolate = function(_) {
	      return arguments.length ? (interpolate$$ = _, rescale()) : interpolate$$;
	    };

	    return rescale();
	  }

	  function tickFormat(domain, count, specifier) {
	    var start = domain[0],
	        stop = domain[domain.length - 1],
	        step = tickStep(start, stop, count == null ? 10 : count),
	        precision;
	    specifier = formatSpecifier(specifier == null ? ",f" : specifier);
	    switch (specifier.type) {
	      case "s": {
	        var value = Math.max(Math.abs(start), Math.abs(stop));
	        if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
	        return exports.formatPrefix(specifier, value);
	      }
	      case "":
	      case "e":
	      case "g":
	      case "p":
	      case "r": {
	        if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
	        break;
	      }
	      case "f":
	      case "%": {
	        if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
	        break;
	      }
	    }
	    return exports.format(specifier);
	  }

	  function linearish(scale) {
	    var domain = scale.domain;

	    scale.ticks = function(count) {
	      var d = domain();
	      return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
	    };

	    scale.tickFormat = function(count, specifier) {
	      return tickFormat(domain(), count, specifier);
	    };

	    scale.nice = function(count) {
	      var d = domain(),
	          i = d.length - 1,
	          n = count == null ? 10 : count,
	          start = d[0],
	          stop = d[i],
	          step = tickStep(start, stop, n);

	      if (step) {
	        step = tickStep(Math.floor(start / step) * step, Math.ceil(stop / step) * step, n);
	        d[0] = Math.floor(start / step) * step;
	        d[i] = Math.ceil(stop / step) * step;
	        domain(d);
	      }

	      return scale;
	    };

	    return scale;
	  }

	  function linear$2() {
	    var scale = continuous(deinterpolate, interpolateNumber);

	    scale.copy = function() {
	      return copy(scale, linear$2());
	    };

	    return linearish(scale);
	  }

	  function identity$4() {
	    var domain = [0, 1];

	    function scale(x) {
	      return +x;
	    }

	    scale.invert = scale;

	    scale.domain = scale.range = function(_) {
	      return arguments.length ? (domain = map$2.call(_, number$1), scale) : domain.slice();
	    };

	    scale.copy = function() {
	      return identity$4().domain(domain);
	    };

	    return linearish(scale);
	  }

	  function nice(domain, interval) {
	    domain = domain.slice();

	    var i0 = 0,
	        i1 = domain.length - 1,
	        x0 = domain[i0],
	        x1 = domain[i1],
	        t;

	    if (x1 < x0) {
	      t = i0, i0 = i1, i1 = t;
	      t = x0, x0 = x1, x1 = t;
	    }

	    domain[i0] = interval.floor(x0);
	    domain[i1] = interval.ceil(x1);
	    return domain;
	  }

	  function deinterpolate$1(a, b) {
	    return (b = Math.log(b / a))
	        ? function(x) { return Math.log(x / a) / b; }
	        : constant$3(b);
	  }

	  function reinterpolate(a, b) {
	    return a < 0
	        ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
	        : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
	  }

	  function pow10(x) {
	    return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
	  }

	  function powp(base) {
	    return base === 10 ? pow10
	        : base === Math.E ? Math.exp
	        : function(x) { return Math.pow(base, x); };
	  }

	  function logp(base) {
	    return base === Math.E ? Math.log
	        : base === 10 && Math.log10
	        || base === 2 && Math.log2
	        || (base = Math.log(base), function(x) { return Math.log(x) / base; });
	  }

	  function reflect(f) {
	    return function(x) {
	      return -f(-x);
	    };
	  }

	  function log() {
	    var scale = continuous(deinterpolate$1, reinterpolate).domain([1, 10]),
	        domain = scale.domain,
	        base = 10,
	        logs = logp(10),
	        pows = powp(10);

	    function rescale() {
	      logs = logp(base), pows = powp(base);
	      if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
	      return scale;
	    }

	    scale.base = function(_) {
	      return arguments.length ? (base = +_, rescale()) : base;
	    };

	    scale.domain = function(_) {
	      return arguments.length ? (domain(_), rescale()) : domain();
	    };

	    scale.ticks = function(count) {
	      var d = domain(),
	          u = d[0],
	          v = d[d.length - 1],
	          r;

	      if (r = v < u) i = u, u = v, v = i;

	      var i = logs(u),
	          j = logs(v),
	          p,
	          k,
	          t,
	          n = count == null ? 10 : +count,
	          z = [];

	      if (!(base % 1) && j - i < n) {
	        i = Math.round(i) - 1, j = Math.round(j) + 1;
	        if (u > 0) for (; i < j; ++i) {
	          for (k = 1, p = pows(i); k < base; ++k) {
	            t = p * k;
	            if (t < u) continue;
	            if (t > v) break;
	            z.push(t);
	          }
	        } else for (; i < j; ++i) {
	          for (k = base - 1, p = pows(i); k >= 1; --k) {
	            t = p * k;
	            if (t < u) continue;
	            if (t > v) break;
	            z.push(t);
	          }
	        }
	      } else {
	        z = ticks(i, j, Math.min(j - i, n)).map(pows);
	      }

	      return r ? z.reverse() : z;
	    };

	    scale.tickFormat = function(count, specifier) {
	      if (specifier == null) specifier = base === 10 ? ".0e" : ",";
	      if (typeof specifier !== "function") specifier = exports.format(specifier);
	      if (count === Infinity) return specifier;
	      if (count == null) count = 10;
	      var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
	      return function(d) {
	        var i = d / pows(Math.round(logs(d)));
	        if (i * base < base - 0.5) i *= base;
	        return i <= k ? specifier(d) : "";
	      };
	    };

	    scale.nice = function() {
	      return domain(nice(domain(), {
	        floor: function(x) { return pows(Math.floor(logs(x))); },
	        ceil: function(x) { return pows(Math.ceil(logs(x))); }
	      }));
	    };

	    scale.copy = function() {
	      return copy(scale, log().base(base));
	    };

	    return scale;
	  }

	  function raise(x, exponent) {
	    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
	  }

	  function pow() {
	    var exponent = 1,
	        scale = continuous(deinterpolate, reinterpolate),
	        domain = scale.domain;

	    function deinterpolate(a, b) {
	      return (b = raise(b, exponent) - (a = raise(a, exponent)))
	          ? function(x) { return (raise(x, exponent) - a) / b; }
	          : constant$3(b);
	    }

	    function reinterpolate(a, b) {
	      b = raise(b, exponent) - (a = raise(a, exponent));
	      return function(t) { return raise(a + b * t, 1 / exponent); };
	    }

	    scale.exponent = function(_) {
	      return arguments.length ? (exponent = +_, domain(domain())) : exponent;
	    };

	    scale.copy = function() {
	      return copy(scale, pow().exponent(exponent));
	    };

	    return linearish(scale);
	  }

	  function sqrt() {
	    return pow().exponent(0.5);
	  }

	  function quantile() {
	    var domain = [],
	        range = [],
	        thresholds = [];

	    function rescale() {
	      var i = 0, n = Math.max(1, range.length);
	      thresholds = new Array(n - 1);
	      while (++i < n) thresholds[i - 1] = threshold(domain, i / n);
	      return scale;
	    }

	    function scale(x) {
	      if (!isNaN(x = +x)) return range[bisectRight(thresholds, x)];
	    }

	    scale.invertExtent = function(y) {
	      var i = range.indexOf(y);
	      return i < 0 ? [NaN, NaN] : [
	        i > 0 ? thresholds[i - 1] : domain[0],
	        i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
	      ];
	    };

	    scale.domain = function(_) {
	      if (!arguments.length) return domain.slice();
	      domain = [];
	      for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
	      domain.sort(ascending);
	      return rescale();
	    };

	    scale.range = function(_) {
	      return arguments.length ? (range = slice$3.call(_), rescale()) : range.slice();
	    };

	    scale.quantiles = function() {
	      return thresholds.slice();
	    };

	    scale.copy = function() {
	      return quantile()
	          .domain(domain)
	          .range(range);
	    };

	    return scale;
	  }

	  function quantize$1() {
	    var x0 = 0,
	        x1 = 1,
	        n = 1,
	        domain = [0.5],
	        range = [0, 1];

	    function scale(x) {
	      if (x <= x) return range[bisectRight(domain, x, 0, n)];
	    }

	    function rescale() {
	      var i = -1;
	      domain = new Array(n);
	      while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
	      return scale;
	    }

	    scale.domain = function(_) {
	      return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
	    };

	    scale.range = function(_) {
	      return arguments.length ? (n = (range = slice$3.call(_)).length - 1, rescale()) : range.slice();
	    };

	    scale.invertExtent = function(y) {
	      var i = range.indexOf(y);
	      return i < 0 ? [NaN, NaN]
	          : i < 1 ? [x0, domain[0]]
	          : i >= n ? [domain[n - 1], x1]
	          : [domain[i - 1], domain[i]];
	    };

	    scale.copy = function() {
	      return quantize$1()
	          .domain([x0, x1])
	          .range(range);
	    };

	    return linearish(scale);
	  }

	  function threshold$1() {
	    var domain = [0.5],
	        range = [0, 1],
	        n = 1;

	    function scale(x) {
	      if (x <= x) return range[bisectRight(domain, x, 0, n)];
	    }

	    scale.domain = function(_) {
	      return arguments.length ? (domain = slice$3.call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
	    };

	    scale.range = function(_) {
	      return arguments.length ? (range = slice$3.call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
	    };

	    scale.invertExtent = function(y) {
	      var i = range.indexOf(y);
	      return [domain[i - 1], domain[i]];
	    };

	    scale.copy = function() {
	      return threshold$1()
	          .domain(domain)
	          .range(range);
	    };

	    return scale;
	  }

	var   durationSecond$1 = 1000;
	var   durationMinute$1 = durationSecond$1 * 60;
	var   durationHour$1 = durationMinute$1 * 60;
	var   durationDay$1 = durationHour$1 * 24;
	var   durationWeek$1 = durationDay$1 * 7;
	  var durationMonth = durationDay$1 * 30;
	  var durationYear = durationDay$1 * 365;
	  function date$1(t) {
	    return new Date(t);
	  }

	  function number$2(t) {
	    return t instanceof Date ? +t : +new Date(+t);
	  }

	  function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
	    var scale = continuous(deinterpolate, interpolateNumber),
	        invert = scale.invert,
	        domain = scale.domain;

	    var formatMillisecond = format(".%L"),
	        formatSecond = format(":%S"),
	        formatMinute = format("%I:%M"),
	        formatHour = format("%I %p"),
	        formatDay = format("%a %d"),
	        formatWeek = format("%b %d"),
	        formatMonth = format("%B"),
	        formatYear = format("%Y");

	    var tickIntervals = [
	      [second,  1,      durationSecond$1],
	      [second,  5,  5 * durationSecond$1],
	      [second, 15, 15 * durationSecond$1],
	      [second, 30, 30 * durationSecond$1],
	      [minute,  1,      durationMinute$1],
	      [minute,  5,  5 * durationMinute$1],
	      [minute, 15, 15 * durationMinute$1],
	      [minute, 30, 30 * durationMinute$1],
	      [  hour,  1,      durationHour$1  ],
	      [  hour,  3,  3 * durationHour$1  ],
	      [  hour,  6,  6 * durationHour$1  ],
	      [  hour, 12, 12 * durationHour$1  ],
	      [   day,  1,      durationDay$1   ],
	      [   day,  2,  2 * durationDay$1   ],
	      [  week,  1,      durationWeek$1  ],
	      [ month,  1,      durationMonth ],
	      [ month,  3,  3 * durationMonth ],
	      [  year,  1,      durationYear  ]
	    ];

	    function tickFormat(date) {
	      return (second(date) < date ? formatMillisecond
	          : minute(date) < date ? formatSecond
	          : hour(date) < date ? formatMinute
	          : day(date) < date ? formatHour
	          : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
	          : year(date) < date ? formatMonth
	          : formatYear)(date);
	    }

	    function tickInterval(interval, start, stop, step) {
	      if (interval == null) interval = 10;

	      // If a desired tick count is specified, pick a reasonable tick interval
	      // based on the extent of the domain and a rough estimate of tick size.
	      // Otherwise, assume interval is already a time interval and use it.
	      if (typeof interval === "number") {
	        var target = Math.abs(stop - start) / interval,
	            i = bisector(function(i) { return i[2]; }).right(tickIntervals, target);
	        if (i === tickIntervals.length) {
	          step = tickStep(start / durationYear, stop / durationYear, interval);
	          interval = year;
	        } else if (i) {
	          i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
	          step = i[1];
	          interval = i[0];
	        } else {
	          step = tickStep(start, stop, interval);
	          interval = millisecond;
	        }
	      }

	      return step == null ? interval : interval.every(step);
	    }

	    scale.invert = function(y) {
	      return new Date(invert(y));
	    };

	    scale.domain = function(_) {
	      return arguments.length ? domain(map$2.call(_, number$2)) : domain().map(date$1);
	    };

	    scale.ticks = function(interval, step) {
	      var d = domain(),
	          t0 = d[0],
	          t1 = d[d.length - 1],
	          r = t1 < t0,
	          t;
	      if (r) t = t0, t0 = t1, t1 = t;
	      t = tickInterval(interval, t0, t1, step);
	      t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
	      return r ? t.reverse() : t;
	    };

	    scale.tickFormat = function(count, specifier) {
	      return specifier == null ? tickFormat : format(specifier);
	    };

	    scale.nice = function(interval, step) {
	      var d = domain();
	      return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
	          ? domain(nice(d, interval))
	          : scale;
	    };

	    scale.copy = function() {
	      return copy(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
	    };

	    return scale;
	  }

	  function time() {
	    return calendar(year, month, timeWeek, day, hour, minute, second, millisecond, exports.timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
	  }

	  function utcTime() {
	    return calendar(utcYear, utcMonth, utcWeek, utcDay, utcHour, utcMinute, second, millisecond, exports.utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
	  }

	  function colors(s) {
	    return s.match(/.{6}/g).map(function(x) {
	      return "#" + x;
	    });
	  }

	  var category10 = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

	  var category20b = colors("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");

	  var category20c = colors("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");

	  var category20 = colors("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");

	  var cubehelix$3 = interpolateCubehelixLong(cubehelix(300, 0.5, 0.0), cubehelix(-240, 0.5, 1.0));

	  var warm = interpolateCubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.50, 0.8));

	  var cool = interpolateCubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.50, 0.8));

	  var rainbow = cubehelix();

	  function rainbow$1(t) {
	    if (t < 0 || t > 1) t -= Math.floor(t);
	    var ts = Math.abs(t - 0.5);
	    rainbow.h = 360 * t - 100;
	    rainbow.s = 1.5 - 1.5 * ts;
	    rainbow.l = 0.8 - 0.9 * ts;
	    return rainbow + "";
	  }

	  function ramp(range) {
	    var n = range.length;
	    return function(t) {
	      return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
	    };
	  }

	  var viridis = ramp(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));

	  var magma = ramp(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

	  var inferno = ramp(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

	  var plasma = ramp(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

	  function sequential(interpolator) {
	    var x0 = 0,
	        x1 = 1,
	        clamp = false;

	    function scale(x) {
	      var t = (x - x0) / (x1 - x0);
	      return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
	    }

	    scale.domain = function(_) {
	      return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
	    };

	    scale.clamp = function(_) {
	      return arguments.length ? (clamp = !!_, scale) : clamp;
	    };

	    scale.interpolator = function(_) {
	      return arguments.length ? (interpolator = _, scale) : interpolator;
	    };

	    scale.copy = function() {
	      return sequential(interpolator).domain([x0, x1]).clamp(clamp);
	    };

	    return linearish(scale);
	  }

	  var xhtml = "http://www.w3.org/1999/xhtml";

	  var namespaces = {
	    svg: "http://www.w3.org/2000/svg",
	    xhtml: xhtml,
	    xlink: "http://www.w3.org/1999/xlink",
	    xml: "http://www.w3.org/XML/1998/namespace",
	    xmlns: "http://www.w3.org/2000/xmlns/"
	  };

	  function namespace(name) {
	    var prefix = name += "", i = prefix.indexOf(":");
	    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	    return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
	  }

	  function creatorInherit(name) {
	    return function() {
	      var document = this.ownerDocument,
	          uri = this.namespaceURI;
	      return uri === xhtml && document.documentElement.namespaceURI === xhtml
	          ? document.createElement(name)
	          : document.createElementNS(uri, name);
	    };
	  }

	  function creatorFixed(fullname) {
	    return function() {
	      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
	    };
	  }

	  function creator(name) {
	    var fullname = namespace(name);
	    return (fullname.local
	        ? creatorFixed
	        : creatorInherit)(fullname);
	  }

	  var nextId = 0;

	  function local() {
	    return new Local;
	  }

	  function Local() {
	    this._ = "@" + (++nextId).toString(36);
	  }

	  Local.prototype = local.prototype = {
	    constructor: Local,
	    get: function(node) {
	      var id = this._;
	      while (!(id in node)) if (!(node = node.parentNode)) return;
	      return node[id];
	    },
	    set: function(node, value) {
	      return node[this._] = value;
	    },
	    remove: function(node) {
	      return this._ in node && delete node[this._];
	    },
	    toString: function() {
	      return this._;
	    }
	  };

	  var matcher = function(selector) {
	    return function() {
	      return this.matches(selector);
	    };
	  };

	  if (typeof document !== "undefined") {
	    var element = document.documentElement;
	    if (!element.matches) {
	      var vendorMatches = element.webkitMatchesSelector
	          || element.msMatchesSelector
	          || element.mozMatchesSelector
	          || element.oMatchesSelector;
	      matcher = function(selector) {
	        return function() {
	          return vendorMatches.call(this, selector);
	        };
	      };
	    }
	  }

	  var matcher$1 = matcher;

	  var filterEvents = {};

	  exports.event = null;

	  if (typeof document !== "undefined") {
	    var element$1 = document.documentElement;
	    if (!("onmouseenter" in element$1)) {
	      filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
	    }
	  }

	  function filterContextListener(listener, index, group) {
	    listener = contextListener(listener, index, group);
	    return function(event) {
	      var related = event.relatedTarget;
	      if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
	        listener.call(this, event);
	      }
	    };
	  }

	  function contextListener(listener, index, group) {
	    return function(event1) {
	      var event0 = exports.event; // Events can be reentrant (e.g., focus).
	      exports.event = event1;
	      try {
	        listener.call(this, this.__data__, index, group);
	      } finally {
	        exports.event = event0;
	      }
	    };
	  }

	  function parseTypenames$1(typenames) {
	    return typenames.trim().split(/^|\s+/).map(function(t) {
	      var name = "", i = t.indexOf(".");
	      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	      return {type: t, name: name};
	    });
	  }

	  function onRemove(typename) {
	    return function() {
	      var on = this.__on;
	      if (!on) return;
	      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
	        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
	          this.removeEventListener(o.type, o.listener, o.capture);
	        } else {
	          on[++i] = o;
	        }
	      }
	      if (++i) on.length = i;
	      else delete this.__on;
	    };
	  }

	  function onAdd(typename, value, capture) {
	    var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
	    return function(d, i, group) {
	      var on = this.__on, o, listener = wrap(value, i, group);
	      if (on) for (var j = 0, m = on.length; j < m; ++j) {
	        if ((o = on[j]).type === typename.type && o.name === typename.name) {
	          this.removeEventListener(o.type, o.listener, o.capture);
	          this.addEventListener(o.type, o.listener = listener, o.capture = capture);
	          o.value = value;
	          return;
	        }
	      }
	      this.addEventListener(typename.type, listener, capture);
	      o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
	      if (!on) this.__on = [o];
	      else on.push(o);
	    };
	  }

	  function selection_on(typename, value, capture) {
	    var typenames = parseTypenames$1(typename + ""), i, n = typenames.length, t;

	    if (arguments.length < 2) {
	      var on = this.node().__on;
	      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
	        for (i = 0, o = on[j]; i < n; ++i) {
	          if ((t = typenames[i]).type === o.type && t.name === o.name) {
	            return o.value;
	          }
	        }
	      }
	      return;
	    }

	    on = value ? onAdd : onRemove;
	    if (capture == null) capture = false;
	    for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
	    return this;
	  }

	  function customEvent(event1, listener, that, args) {
	    var event0 = exports.event;
	    event1.sourceEvent = exports.event;
	    exports.event = event1;
	    try {
	      return listener.apply(that, args);
	    } finally {
	      exports.event = event0;
	    }
	  }

	  function sourceEvent() {
	    var current = exports.event, source;
	    while (source = current.sourceEvent) current = source;
	    return current;
	  }

	  function point$5(node, event) {
	    var svg = node.ownerSVGElement || node;

	    if (svg.createSVGPoint) {
	      var point = svg.createSVGPoint();
	      point.x = event.clientX, point.y = event.clientY;
	      point = point.matrixTransform(node.getScreenCTM().inverse());
	      return [point.x, point.y];
	    }

	    var rect = node.getBoundingClientRect();
	    return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
	  }

	  function mouse(node) {
	    var event = sourceEvent();
	    if (event.changedTouches) event = event.changedTouches[0];
	    return point$5(node, event);
	  }

	  function none$2() {}

	  function selector(selector) {
	    return selector == null ? none$2 : function() {
	      return this.querySelector(selector);
	    };
	  }

	  function selection_select(select) {
	    if (typeof select !== "function") select = selector(select);

	    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
	          if ("__data__" in node) subnode.__data__ = node.__data__;
	          subgroup[i] = subnode;
	        }
	      }
	    }

	    return new Selection(subgroups, this._parents);
	  }

	  function empty() {
	    return [];
	  }

	  function selectorAll(selector) {
	    return selector == null ? empty : function() {
	      return this.querySelectorAll(selector);
	    };
	  }

	  function selection_selectAll(select) {
	    if (typeof select !== "function") select = selectorAll(select);

	    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	        if (node = group[i]) {
	          subgroups.push(select.call(node, node.__data__, i, group));
	          parents.push(node);
	        }
	      }
	    }

	    return new Selection(subgroups, parents);
	  }

	  function selection_filter(match) {
	    if (typeof match !== "function") match = matcher$1(match);

	    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
	        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	          subgroup.push(node);
	        }
	      }
	    }

	    return new Selection(subgroups, this._parents);
	  }

	  function sparse(update) {
	    return new Array(update.length);
	  }

	  function selection_enter() {
	    return new Selection(this._enter || this._groups.map(sparse), this._parents);
	  }

	  function EnterNode(parent, datum) {
	    this.ownerDocument = parent.ownerDocument;
	    this.namespaceURI = parent.namespaceURI;
	    this._next = null;
	    this._parent = parent;
	    this.__data__ = datum;
	  }

	  EnterNode.prototype = {
	    constructor: EnterNode,
	    appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
	    insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
	    querySelector: function(selector) { return this._parent.querySelector(selector); },
	    querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
	  };

	  function constant$4(x) {
	    return function() {
	      return x;
	    };
	  }

	  var keyPrefix = "$"; // Protect against keys like “__proto__”.

	  function bindIndex(parent, group, enter, update, exit, data) {
	    var i = 0,
	        node,
	        groupLength = group.length,
	        dataLength = data.length;

	    // Put any non-null nodes that fit into update.
	    // Put any null nodes into enter.
	    // Put any remaining data into enter.
	    for (; i < dataLength; ++i) {
	      if (node = group[i]) {
	        node.__data__ = data[i];
	        update[i] = node;
	      } else {
	        enter[i] = new EnterNode(parent, data[i]);
	      }
	    }

	    // Put any non-null nodes that don’t fit into exit.
	    for (; i < groupLength; ++i) {
	      if (node = group[i]) {
	        exit[i] = node;
	      }
	    }
	  }

	  function bindKey(parent, group, enter, update, exit, data, key) {
	    var i,
	        node,
	        nodeByKeyValue = {},
	        groupLength = group.length,
	        dataLength = data.length,
	        keyValues = new Array(groupLength),
	        keyValue;

	    // Compute the key for each node.
	    // If multiple nodes have the same key, the duplicates are added to exit.
	    for (i = 0; i < groupLength; ++i) {
	      if (node = group[i]) {
	        keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
	        if (keyValue in nodeByKeyValue) {
	          exit[i] = node;
	        } else {
	          nodeByKeyValue[keyValue] = node;
	        }
	      }
	    }

	    // Compute the key for each datum.
	    // If there a node associated with this key, join and add it to update.
	    // If there is not (or the key is a duplicate), add it to enter.
	    for (i = 0; i < dataLength; ++i) {
	      keyValue = keyPrefix + key.call(parent, data[i], i, data);
	      if (node = nodeByKeyValue[keyValue]) {
	        update[i] = node;
	        node.__data__ = data[i];
	        nodeByKeyValue[keyValue] = null;
	      } else {
	        enter[i] = new EnterNode(parent, data[i]);
	      }
	    }

	    // Add any remaining nodes that were not bound to data to exit.
	    for (i = 0; i < groupLength; ++i) {
	      if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
	        exit[i] = node;
	      }
	    }
	  }

	  function selection_data(value, key) {
	    if (!value) {
	      data = new Array(this.size()), j = -1;
	      this.each(function(d) { data[++j] = d; });
	      return data;
	    }

	    var bind = key ? bindKey : bindIndex,
	        parents = this._parents,
	        groups = this._groups;

	    if (typeof value !== "function") value = constant$4(value);

	    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
	      var parent = parents[j],
	          group = groups[j],
	          groupLength = group.length,
	          data = value.call(parent, parent && parent.__data__, j, parents),
	          dataLength = data.length,
	          enterGroup = enter[j] = new Array(dataLength),
	          updateGroup = update[j] = new Array(dataLength),
	          exitGroup = exit[j] = new Array(groupLength);

	      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

	      // Now connect the enter nodes to their following update node, such that
	      // appendChild can insert the materialized enter node before this node,
	      // rather than at the end of the parent node.
	      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
	        if (previous = enterGroup[i0]) {
	          if (i0 >= i1) i1 = i0 + 1;
	          while (!(next = updateGroup[i1]) && ++i1 < dataLength);
	          previous._next = next || null;
	        }
	      }
	    }

	    update = new Selection(update, parents);
	    update._enter = enter;
	    update._exit = exit;
	    return update;
	  }

	  function selection_exit() {
	    return new Selection(this._exit || this._groups.map(sparse), this._parents);
	  }

	  function selection_merge(selection) {

	    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	        if (node = group0[i] || group1[i]) {
	          merge[i] = node;
	        }
	      }
	    }

	    for (; j < m0; ++j) {
	      merges[j] = groups0[j];
	    }

	    return new Selection(merges, this._parents);
	  }

	  function selection_order() {

	    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
	      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
	        if (node = group[i]) {
	          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
	          next = node;
	        }
	      }
	    }

	    return this;
	  }

	  function selection_sort(compare) {
	    if (!compare) compare = ascending$2;

	    function compareNode(a, b) {
	      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
	    }

	    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
	        if (node = group[i]) {
	          sortgroup[i] = node;
	        }
	      }
	      sortgroup.sort(compareNode);
	    }

	    return new Selection(sortgroups, this._parents).order();
	  }

	  function ascending$2(a, b) {
	    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	  }

	  function selection_call() {
	    var callback = arguments[0];
	    arguments[0] = this;
	    callback.apply(null, arguments);
	    return this;
	  }

	  function selection_nodes() {
	    var nodes = new Array(this.size()), i = -1;
	    this.each(function() { nodes[++i] = this; });
	    return nodes;
	  }

	  function selection_node() {

	    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
	        var node = group[i];
	        if (node) return node;
	      }
	    }

	    return null;
	  }

	  function selection_size() {
	    var size = 0;
	    this.each(function() { ++size; });
	    return size;
	  }

	  function selection_empty() {
	    return !this.node();
	  }

	  function selection_each(callback) {

	    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
	      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
	        if (node = group[i]) callback.call(node, node.__data__, i, group);
	      }
	    }

	    return this;
	  }

	  function attrRemove(name) {
	    return function() {
	      this.removeAttribute(name);
	    };
	  }

	  function attrRemoveNS(fullname) {
	    return function() {
	      this.removeAttributeNS(fullname.space, fullname.local);
	    };
	  }

	  function attrConstant(name, value) {
	    return function() {
	      this.setAttribute(name, value);
	    };
	  }

	  function attrConstantNS(fullname, value) {
	    return function() {
	      this.setAttributeNS(fullname.space, fullname.local, value);
	    };
	  }

	  function attrFunction(name, value) {
	    return function() {
	      var v = value.apply(this, arguments);
	      if (v == null) this.removeAttribute(name);
	      else this.setAttribute(name, v);
	    };
	  }

	  function attrFunctionNS(fullname, value) {
	    return function() {
	      var v = value.apply(this, arguments);
	      if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
	      else this.setAttributeNS(fullname.space, fullname.local, v);
	    };
	  }

	  function selection_attr(name, value) {
	    var fullname = namespace(name);

	    if (arguments.length < 2) {
	      var node = this.node();
	      return fullname.local
	          ? node.getAttributeNS(fullname.space, fullname.local)
	          : node.getAttribute(fullname);
	    }

	    return this.each((value == null
	        ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
	        ? (fullname.local ? attrFunctionNS : attrFunction)
	        : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
	  }

	  function window(node) {
	    return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
	        || (node.document && node) // node is a Window
	        || node.defaultView; // node is a Document
	  }

	  function styleRemove(name) {
	    return function() {
	      this.style.removeProperty(name);
	    };
	  }

	  function styleConstant(name, value, priority) {
	    return function() {
	      this.style.setProperty(name, value, priority);
	    };
	  }

	  function styleFunction(name, value, priority) {
	    return function() {
	      var v = value.apply(this, arguments);
	      if (v == null) this.style.removeProperty(name);
	      else this.style.setProperty(name, v, priority);
	    };
	  }

	  function selection_style(name, value, priority) {
	    var node;
	    return arguments.length > 1
	        ? this.each((value == null
	              ? styleRemove : typeof value === "function"
	              ? styleFunction
	              : styleConstant)(name, value, priority == null ? "" : priority))
	        : window(node = this.node())
	            .getComputedStyle(node, null)
	            .getPropertyValue(name);
	  }

	  function propertyRemove(name) {
	    return function() {
	      delete this[name];
	    };
	  }

	  function propertyConstant(name, value) {
	    return function() {
	      this[name] = value;
	    };
	  }

	  function propertyFunction(name, value) {
	    return function() {
	      var v = value.apply(this, arguments);
	      if (v == null) delete this[name];
	      else this[name] = v;
	    };
	  }

	  function selection_property(name, value) {
	    return arguments.length > 1
	        ? this.each((value == null
	            ? propertyRemove : typeof value === "function"
	            ? propertyFunction
	            : propertyConstant)(name, value))
	        : this.node()[name];
	  }

	  function classArray(string) {
	    return string.trim().split(/^|\s+/);
	  }

	  function classList(node) {
	    return node.classList || new ClassList(node);
	  }

	  function ClassList(node) {
	    this._node = node;
	    this._names = classArray(node.getAttribute("class") || "");
	  }

	  ClassList.prototype = {
	    add: function(name) {
	      var i = this._names.indexOf(name);
	      if (i < 0) {
	        this._names.push(name);
	        this._node.setAttribute("class", this._names.join(" "));
	      }
	    },
	    remove: function(name) {
	      var i = this._names.indexOf(name);
	      if (i >= 0) {
	        this._names.splice(i, 1);
	        this._node.setAttribute("class", this._names.join(" "));
	      }
	    },
	    contains: function(name) {
	      return this._names.indexOf(name) >= 0;
	    }
	  };

	  function classedAdd(node, names) {
	    var list = classList(node), i = -1, n = names.length;
	    while (++i < n) list.add(names[i]);
	  }

	  function classedRemove(node, names) {
	    var list = classList(node), i = -1, n = names.length;
	    while (++i < n) list.remove(names[i]);
	  }

	  function classedTrue(names) {
	    return function() {
	      classedAdd(this, names);
	    };
	  }

	  function classedFalse(names) {
	    return function() {
	      classedRemove(this, names);
	    };
	  }

	  function classedFunction(names, value) {
	    return function() {
	      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
	    };
	  }

	  function selection_classed(name, value) {
	    var names = classArray(name + "");

	    if (arguments.length < 2) {
	      var list = classList(this.node()), i = -1, n = names.length;
	      while (++i < n) if (!list.contains(names[i])) return false;
	      return true;
	    }

	    return this.each((typeof value === "function"
	        ? classedFunction : value
	        ? classedTrue
	        : classedFalse)(names, value));
	  }

	  function textRemove() {
	    this.textContent = "";
	  }

	  function textConstant(value) {
	    return function() {
	      this.textContent = value;
	    };
	  }

	  function textFunction(value) {
	    return function() {
	      var v = value.apply(this, arguments);
	      this.textContent = v == null ? "" : v;
	    };
	  }

	  function selection_text(value) {
	    return arguments.length
	        ? this.each(value == null
	            ? textRemove : (typeof value === "function"
	            ? textFunction
	            : textConstant)(value))
	        : this.node().textContent;
	  }

	  function htmlRemove() {
	    this.innerHTML = "";
	  }

	  function htmlConstant(value) {
	    return function() {
	      this.innerHTML = value;
	    };
	  }

	  function htmlFunction(value) {
	    return function() {
	      var v = value.apply(this, arguments);
	      this.innerHTML = v == null ? "" : v;
	    };
	  }

	  function selection_html(value) {
	    return arguments.length
	        ? this.each(value == null
	            ? htmlRemove : (typeof value === "function"
	            ? htmlFunction
	            : htmlConstant)(value))
	        : this.node().innerHTML;
	  }

	  function raise$1() {
	    if (this.nextSibling) this.parentNode.appendChild(this);
	  }

	  function selection_raise() {
	    return this.each(raise$1);
	  }

	  function lower() {
	    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
	  }

	  function selection_lower() {
	    return this.each(lower);
	  }

	  function selection_append(name) {
	    var create = typeof name === "function" ? name : creator(name);
	    return this.select(function() {
	      return this.appendChild(create.apply(this, arguments));
	    });
	  }

	  function constantNull() {
	    return null;
	  }

	  function selection_insert(name, before) {
	    var create = typeof name === "function" ? name : creator(name),
	        select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
	    return this.select(function() {
	      return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
	    });
	  }

	  function remove() {
	    var parent = this.parentNode;
	    if (parent) parent.removeChild(this);
	  }

	  function selection_remove() {
	    return this.each(remove);
	  }

	  function selection_datum(value) {
	    return arguments.length
	        ? this.property("__data__", value)
	        : this.node().__data__;
	  }

	  function dispatchEvent(node, type, params) {
	    var window$$ = window(node),
	        event = window$$.CustomEvent;

	    if (event) {
	      event = new event(type, params);
	    } else {
	      event = window$$.document.createEvent("Event");
	      if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
	      else event.initEvent(type, false, false);
	    }

	    node.dispatchEvent(event);
	  }

	  function dispatchConstant(type, params) {
	    return function() {
	      return dispatchEvent(this, type, params);
	    };
	  }

	  function dispatchFunction(type, params) {
	    return function() {
	      return dispatchEvent(this, type, params.apply(this, arguments));
	    };
	  }

	  function selection_dispatch(type, params) {
	    return this.each((typeof params === "function"
	        ? dispatchFunction
	        : dispatchConstant)(type, params));
	  }

	  var root = [null];

	  function Selection(groups, parents) {
	    this._groups = groups;
	    this._parents = parents;
	  }

	  function selection() {
	    return new Selection([[document.documentElement]], root);
	  }

	  Selection.prototype = selection.prototype = {
	    constructor: Selection,
	    select: selection_select,
	    selectAll: selection_selectAll,
	    filter: selection_filter,
	    data: selection_data,
	    enter: selection_enter,
	    exit: selection_exit,
	    merge: selection_merge,
	    order: selection_order,
	    sort: selection_sort,
	    call: selection_call,
	    nodes: selection_nodes,
	    node: selection_node,
	    size: selection_size,
	    empty: selection_empty,
	    each: selection_each,
	    attr: selection_attr,
	    style: selection_style,
	    property: selection_property,
	    classed: selection_classed,
	    text: selection_text,
	    html: selection_html,
	    raise: selection_raise,
	    lower: selection_lower,
	    append: selection_append,
	    insert: selection_insert,
	    remove: selection_remove,
	    datum: selection_datum,
	    on: selection_on,
	    dispatch: selection_dispatch
	  };

	  function select(selector) {
	    return typeof selector === "string"
	        ? new Selection([[document.querySelector(selector)]], [document.documentElement])
	        : new Selection([[selector]], root);
	  }

	  function selectAll(selector) {
	    return typeof selector === "string"
	        ? new Selection([document.querySelectorAll(selector)], [document.documentElement])
	        : new Selection([selector == null ? [] : selector], root);
	  }

	  function touch(node, touches, identifier) {
	    if (arguments.length < 3) identifier = touches, touches = sourceEvent().changedTouches;

	    for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
	      if ((touch = touches[i]).identifier === identifier) {
	        return point$5(node, touch);
	      }
	    }

	    return null;
	  }

	  function touches(node, touches) {
	    if (touches == null) touches = sourceEvent().touches;

	    for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
	      points[i] = point$5(node, touches[i]);
	    }

	    return points;
	  }

	  var emptyOn = dispatch("start", "end", "interrupt");
	  var emptyTween = [];

	  var CREATED = 0;
	  var SCHEDULED = 1;
	  var STARTING = 2;
	  var STARTED = 3;
	  var ENDING = 4;
	  var ENDED = 5;

	  function schedule(node, name, id, index, group, timing) {
	    var schedules = node.__transition;
	    if (!schedules) node.__transition = {};
	    else if (id in schedules) return;
	    create(node, id, {
	      name: name,
	      index: index, // For context during callback.
	      group: group, // For context during callback.
	      on: emptyOn,
	      tween: emptyTween,
	      time: timing.time,
	      delay: timing.delay,
	      duration: timing.duration,
	      ease: timing.ease,
	      timer: null,
	      state: CREATED
	    });
	  }

	  function init(node, id) {
	    var schedule = node.__transition;
	    if (!schedule || !(schedule = schedule[id]) || schedule.state > CREATED) throw new Error("too late");
	    return schedule;
	  }

	  function set$2(node, id) {
	    var schedule = node.__transition;
	    if (!schedule || !(schedule = schedule[id]) || schedule.state > STARTING) throw new Error("too late");
	    return schedule;
	  }

	  function get$1(node, id) {
	    var schedule = node.__transition;
	    if (!schedule || !(schedule = schedule[id])) throw new Error("too late");
	    return schedule;
	  }

	  function create(node, id, self) {
	    var schedules = node.__transition,
	        tween;

	    // Initialize the self timer when the transition is created.
	    // Note the actual delay is not known until the first callback!
	    schedules[id] = self;
	    self.timer = timer(schedule, 0, self.time);

	    // If the delay is greater than this first sleep, sleep some more;
	    // otherwise, start immediately.
	    function schedule(elapsed) {
	      self.state = SCHEDULED;
	      if (self.delay <= elapsed) start(elapsed - self.delay);
	      else self.timer.restart(start, self.delay, self.time);
	    }

	    function start(elapsed) {
	      var i, j, n, o;

	      for (i in schedules) {
	        o = schedules[i];
	        if (o.name !== self.name) continue;

	        // Interrupt the active transition, if any.
	        // Dispatch the interrupt event.
	        if (o.state === STARTED) {
	          o.state = ENDED;
	          o.timer.stop();
	          o.on.call("interrupt", node, node.__data__, o.index, o.group);
	          delete schedules[i];
	        }

	        // Cancel any pre-empted transitions. No interrupt event is dispatched
	        // because the cancelled transitions never started. Note that this also
	        // removes this transition from the pending list!
	        else if (+i < id) {
	          o.state = ENDED;
	          o.timer.stop();
	          delete schedules[i];
	        }
	      }

	      // Defer the first tick to end of the current frame; see mbostock/d3#1576.
	      // Note the transition may be canceled after start and before the first tick!
	      // Note this must be scheduled before the start event; see d3/d3-transition#16!
	      // Assuming this is successful, subsequent callbacks go straight to tick.
	      timeout$1(function() {
	        if (self.state === STARTED) {
	          self.timer.restart(tick, self.delay, self.time);
	          tick(elapsed);
	        }
	      });

	      // Dispatch the start event.
	      // Note this must be done before the tween are initialized.
	      self.state = STARTING;
	      self.on.call("start", node, node.__data__, self.index, self.group);
	      if (self.state !== STARTING) return; // interrupted
	      self.state = STARTED;

	      // Initialize the tween, deleting null tween.
	      tween = new Array(n = self.tween.length);
	      for (i = 0, j = -1; i < n; ++i) {
	        if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
	          tween[++j] = o;
	        }
	      }
	      tween.length = j + 1;
	    }

	    function tick(elapsed) {
	      var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.state = ENDING, 1),
	          i = -1,
	          n = tween.length;

	      while (++i < n) {
	        tween[i].call(null, t);
	      }

	      // Dispatch the end event.
	      if (self.state === ENDING) {
	        self.state = ENDED;
	        self.timer.stop();
	        self.on.call("end", node, node.__data__, self.index, self.group);
	        for (i in schedules) if (+i !== id) return void delete schedules[id];
	        delete node.__transition;
	      }
	    }
	  }

	  function interrupt(node, name) {
	    var schedules = node.__transition,
	        schedule,
	        active,
	        empty = true,
	        i;

	    if (!schedules) return;

	    name = name == null ? null : name + "";

	    for (i in schedules) {
	      if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
	      active = schedule.state === STARTED;
	      schedule.state = ENDED;
	      schedule.timer.stop();
	      if (active) schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group);
	      delete schedules[i];
	    }

	    if (empty) delete node.__transition;
	  }

	  function selection_interrupt(name) {
	    return this.each(function() {
	      interrupt(this, name);
	    });
	  }

	  function tweenRemove(id, name) {
	    var tween0, tween1;
	    return function() {
	      var schedule = set$2(this, id),
	          tween = schedule.tween;

	      // If this node shared tween with the previous node,
	      // just assign the updated shared tween and we’re done!
	      // Otherwise, copy-on-write.
	      if (tween !== tween0) {
	        tween1 = tween0 = tween;
	        for (var i = 0, n = tween1.length; i < n; ++i) {
	          if (tween1[i].name === name) {
	            tween1 = tween1.slice();
	            tween1.splice(i, 1);
	            break;
	          }
	        }
	      }

	      schedule.tween = tween1;
	    };
	  }

	  function tweenFunction(id, name, value) {
	    var tween0, tween1;
	    if (typeof value !== "function") throw new Error;
	    return function() {
	      var schedule = set$2(this, id),
	          tween = schedule.tween;

	      // If this node shared tween with the previous node,
	      // just assign the updated shared tween and we’re done!
	      // Otherwise, copy-on-write.
	      if (tween !== tween0) {
	        tween1 = (tween0 = tween).slice();
	        for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
	          if (tween1[i].name === name) {
	            tween1[i] = t;
	            break;
	          }
	        }
	        if (i === n) tween1.push(t);
	      }

	      schedule.tween = tween1;
	    };
	  }

	  function transition_tween(name, value) {
	    var id = this._id;

	    name += "";

	    if (arguments.length < 2) {
	      var tween = get$1(this.node(), id).tween;
	      for (var i = 0, n = tween.length, t; i < n; ++i) {
	        if ((t = tween[i]).name === name) {
	          return t.value;
	        }
	      }
	      return null;
	    }

	    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
	  }

	  function tweenValue(transition, name, value) {
	    var id = transition._id;

	    transition.each(function() {
	      var schedule = set$2(this, id);
	      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
	    });

	    return function(node) {
	      return get$1(node, id).value[name];
	    };
	  }

	  function interpolate$1(a, b) {
	    var c;
	    return (typeof b === "number" ? interpolateNumber
	        : b instanceof color ? interpolateRgb
	        : (c = color(b)) ? (b = c, interpolateRgb)
	        : interpolateString)(a, b);
	  }

	  function attrRemove$1(name) {
	    return function() {
	      this.removeAttribute(name);
	    };
	  }

	  function attrRemoveNS$1(fullname) {
	    return function() {
	      this.removeAttributeNS(fullname.space, fullname.local);
	    };
	  }

	  function attrConstant$1(name, interpolate, value1) {
	    var value00,
	        interpolate0;
	    return function() {
	      var value0 = this.getAttribute(name);
	      return value0 === value1 ? null
	          : value0 === value00 ? interpolate0
	          : interpolate0 = interpolate(value00 = value0, value1);
	    };
	  }

	  function attrConstantNS$1(fullname, interpolate, value1) {
	    var value00,
	        interpolate0;
	    return function() {
	      var value0 = this.getAttributeNS(fullname.space, fullname.local);
	      return value0 === value1 ? null
	          : value0 === value00 ? interpolate0
	          : interpolate0 = interpolate(value00 = value0, value1);
	    };
	  }

	  function attrFunction$1(name, interpolate, value) {
	    var value00,
	        value10,
	        interpolate0;
	    return function() {
	      var value0, value1 = value(this);
	      if (value1 == null) return void this.removeAttribute(name);
	      value0 = this.getAttribute(name);
	      return value0 === value1 ? null
	          : value0 === value00 && value1 === value10 ? interpolate0
	          : interpolate0 = interpolate(value00 = value0, value10 = value1);
	    };
	  }

	  function attrFunctionNS$1(fullname, interpolate, value) {
	    var value00,
	        value10,
	        interpolate0;
	    return function() {
	      var value0, value1 = value(this);
	      if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
	      value0 = this.getAttributeNS(fullname.space, fullname.local);
	      return value0 === value1 ? null
	          : value0 === value00 && value1 === value10 ? interpolate0
	          : interpolate0 = interpolate(value00 = value0, value10 = value1);
	    };
	  }

	  function transition_attr(name, value) {
	    var fullname = namespace(name), i = fullname === "transform" ? interpolateTransform$2 : interpolate$1;
	    return this.attrTween(name, typeof value === "function"
	        ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, "attr." + name, value))
	        : value == null ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname)
	        : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value));
	  }

	  function attrTweenNS(fullname, value) {
	    function tween() {
	      var node = this, i = value.apply(node, arguments);
	      return i && function(t) {
	        node.setAttributeNS(fullname.space, fullname.local, i(t));
	      };
	    }
	    tween._value = value;
	    return tween;
	  }

	  function attrTween(name, value) {
	    function tween() {
	      var node = this, i = value.apply(node, arguments);
	      return i && function(t) {
	        node.setAttribute(name, i(t));
	      };
	    }
	    tween._value = value;
	    return tween;
	  }

	  function transition_attrTween(name, value) {
	    var key = "attr." + name;
	    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	    if (value == null) return this.tween(key, null);
	    if (typeof value !== "function") throw new Error;
	    var fullname = namespace(name);
	    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
	  }

	  function delayFunction(id, value) {
	    return function() {
	      init(this, id).delay = +value.apply(this, arguments);
	    };
	  }

	  function delayConstant(id, value) {
	    return value = +value, function() {
	      init(this, id).delay = value;
	    };
	  }

	  function transition_delay(value) {
	    var id = this._id;

	    return arguments.length
	        ? this.each((typeof value === "function"
	            ? delayFunction
	            : delayConstant)(id, value))
	        : get$1(this.node(), id).delay;
	  }

	  function durationFunction(id, value) {
	    return function() {
	      set$2(this, id).duration = +value.apply(this, arguments);
	    };
	  }

	  function durationConstant(id, value) {
	    return value = +value, function() {
	      set$2(this, id).duration = value;
	    };
	  }

	  function transition_duration(value) {
	    var id = this._id;

	    return arguments.length
	        ? this.each((typeof value === "function"
	            ? durationFunction
	            : durationConstant)(id, value))
	        : get$1(this.node(), id).duration;
	  }

	  function easeConstant(id, value) {
	    if (typeof value !== "function") throw new Error;
	    return function() {
	      set$2(this, id).ease = value;
	    };
	  }

	  function transition_ease(value) {
	    var id = this._id;

	    return arguments.length
	        ? this.each(easeConstant(id, value))
	        : get$1(this.node(), id).ease;
	  }

	  function transition_filter(match) {
	    if (typeof match !== "function") match = matcher$1(match);

	    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
	        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
	          subgroup.push(node);
	        }
	      }
	    }

	    return new Transition(subgroups, this._parents, this._name, this._id);
	  }

	  function transition_merge(transition) {
	    if (transition._id !== this._id) throw new Error;

	    for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
	      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
	        if (node = group0[i] || group1[i]) {
	          merge[i] = node;
	        }
	      }
	    }

	    for (; j < m0; ++j) {
	      merges[j] = groups0[j];
	    }

	    return new Transition(merges, this._parents, this._name, this._id);
	  }

	  function start$1(name) {
	    return (name + "").trim().split(/^|\s+/).every(function(t) {
	      var i = t.indexOf(".");
	      if (i >= 0) t = t.slice(0, i);
	      return !t || t === "start";
	    });
	  }

	  function onFunction(id, name, listener) {
	    var on0, on1, sit = start$1(name) ? init : set$2;
	    return function() {
	      var schedule = sit(this, id),
	          on = schedule.on;

	      // If this node shared a dispatch with the previous node,
	      // just assign the updated shared dispatch and we’re done!
	      // Otherwise, copy-on-write.
	      if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

	      schedule.on = on1;
	    };
	  }

	  function transition_on(name, listener) {
	    var id = this._id;

	    return arguments.length < 2
	        ? get$1(this.node(), id).on.on(name)
	        : this.each(onFunction(id, name, listener));
	  }

	  function removeFunction(id) {
	    return function() {
	      var parent = this.parentNode;
	      for (var i in this.__transition) if (+i !== id) return;
	      if (parent) parent.removeChild(this);
	    };
	  }

	  function transition_remove() {
	    return this.on("end.remove", removeFunction(this._id));
	  }

	  function transition_select(select) {
	    var name = this._name,
	        id = this._id;

	    if (typeof select !== "function") select = selector(select);

	    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
	        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
	          if ("__data__" in node) subnode.__data__ = node.__data__;
	          subgroup[i] = subnode;
	          schedule(subgroup[i], name, id, i, subgroup, get$1(node, id));
	        }
	      }
	    }

	    return new Transition(subgroups, this._parents, name, id);
	  }

	  function transition_selectAll(select) {
	    var name = this._name,
	        id = this._id;

	    if (typeof select !== "function") select = selectorAll(select);

	    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	        if (node = group[i]) {
	          for (var children = select.call(node, node.__data__, i, group), child, inherit = get$1(node, id), k = 0, l = children.length; k < l; ++k) {
	            if (child = children[k]) {
	              schedule(child, name, id, k, children, inherit);
	            }
	          }
	          subgroups.push(children);
	          parents.push(node);
	        }
	      }
	    }

	    return new Transition(subgroups, parents, name, id);
	  }

	  var Selection$1 = selection.prototype.constructor;

	  function transition_selection() {
	    return new Selection$1(this._groups, this._parents);
	  }

	  function styleRemove$1(name, interpolate) {
	    var value00,
	        value10,
	        interpolate0;
	    return function() {
	      var style = window(this).getComputedStyle(this, null),
	          value0 = style.getPropertyValue(name),
	          value1 = (this.style.removeProperty(name), style.getPropertyValue(name));
	      return value0 === value1 ? null
	          : value0 === value00 && value1 === value10 ? interpolate0
	          : interpolate0 = interpolate(value00 = value0, value10 = value1);
	    };
	  }

	  function styleRemoveEnd(name) {
	    return function() {
	      this.style.removeProperty(name);
	    };
	  }

	  function styleConstant$1(name, interpolate, value1) {
	    var value00,
	        interpolate0;
	    return function() {
	      var value0 = window(this).getComputedStyle(this, null).getPropertyValue(name);
	      return value0 === value1 ? null
	          : value0 === value00 ? interpolate0
	          : interpolate0 = interpolate(value00 = value0, value1);
	    };
	  }

	  function styleFunction$1(name, interpolate, value) {
	    var value00,
	        value10,
	        interpolate0;
	    return function() {
	      var style = window(this).getComputedStyle(this, null),
	          value0 = style.getPropertyValue(name),
	          value1 = value(this);
	      if (value1 == null) value1 = (this.style.removeProperty(name), style.getPropertyValue(name));
	      return value0 === value1 ? null
	          : value0 === value00 && value1 === value10 ? interpolate0
	          : interpolate0 = interpolate(value00 = value0, value10 = value1);
	    };
	  }

	  function transition_style(name, value, priority) {
	    var i = (name += "") === "transform" ? interpolateTransform$1 : interpolate$1;
	    return value == null ? this
	            .styleTween(name, styleRemove$1(name, i))
	            .on("end.style." + name, styleRemoveEnd(name))
	        : this.styleTween(name, typeof value === "function"
	            ? styleFunction$1(name, i, tweenValue(this, "style." + name, value))
	            : styleConstant$1(name, i, value), priority);
	  }

	  function styleTween(name, value, priority) {
	    function tween() {
	      var node = this, i = value.apply(node, arguments);
	      return i && function(t) {
	        node.style.setProperty(name, i(t), priority);
	      };
	    }
	    tween._value = value;
	    return tween;
	  }

	  function transition_styleTween(name, value, priority) {
	    var key = "style." + (name += "");
	    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	    if (value == null) return this.tween(key, null);
	    if (typeof value !== "function") throw new Error;
	    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
	  }

	  function textConstant$1(value) {
	    return function() {
	      this.textContent = value;
	    };
	  }

	  function textFunction$1(value) {
	    return function() {
	      var value1 = value(this);
	      this.textContent = value1 == null ? "" : value1;
	    };
	  }

	  function transition_text(value) {
	    return this.tween("text", typeof value === "function"
	        ? textFunction$1(tweenValue(this, "text", value))
	        : textConstant$1(value == null ? "" : value + ""));
	  }

	  function transition_transition() {
	    var name = this._name,
	        id0 = this._id,
	        id1 = newId();

	    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	        if (node = group[i]) {
	          var inherit = get$1(node, id0);
	          schedule(node, name, id1, i, group, {
	            time: inherit.time + inherit.delay + inherit.duration,
	            delay: 0,
	            duration: inherit.duration,
	            ease: inherit.ease
	          });
	        }
	      }
	    }

	    return new Transition(groups, this._parents, name, id1);
	  }

	  var id = 0;

	  function Transition(groups, parents, name, id) {
	    this._groups = groups;
	    this._parents = parents;
	    this._name = name;
	    this._id = id;
	  }

	  function transition(name) {
	    return selection().transition(name);
	  }

	  function newId() {
	    return ++id;
	  }

	  var selection_prototype = selection.prototype;

	  Transition.prototype = transition.prototype = {
	    constructor: Transition,
	    select: transition_select,
	    selectAll: transition_selectAll,
	    filter: transition_filter,
	    merge: transition_merge,
	    selection: transition_selection,
	    transition: transition_transition,
	    call: selection_prototype.call,
	    nodes: selection_prototype.nodes,
	    node: selection_prototype.node,
	    size: selection_prototype.size,
	    empty: selection_prototype.empty,
	    each: selection_prototype.each,
	    on: transition_on,
	    attr: transition_attr,
	    attrTween: transition_attrTween,
	    style: transition_style,
	    styleTween: transition_styleTween,
	    text: transition_text,
	    remove: transition_remove,
	    tween: transition_tween,
	    delay: transition_delay,
	    duration: transition_duration,
	    ease: transition_ease
	  };

	  var defaultTiming = {
	    time: null, // Set on use.
	    delay: 0,
	    duration: 250,
	    ease: easeCubicInOut
	  };

	  function inherit(node, id) {
	    var timing;
	    while (!(timing = node.__transition) || !(timing = timing[id])) {
	      if (!(node = node.parentNode)) {
	        return defaultTiming.time = now(), defaultTiming;
	      }
	    }
	    return timing;
	  }

	  function selection_transition(name) {
	    var id,
	        timing;

	    if (name instanceof Transition) {
	      id = name._id, name = name._name;
	    } else {
	      id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
	    }

	    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
	      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
	        if (node = group[i]) {
	          schedule(node, name, id, i, group, timing || inherit(node, id));
	        }
	      }
	    }

	    return new Transition(groups, this._parents, name, id);
	  }

	  selection.prototype.interrupt = selection_interrupt;
	  selection.prototype.transition = selection_transition;

	  var root$1 = [null];

	  function active(node, name) {
	    var schedules = node.__transition,
	        schedule,
	        i;

	    if (schedules) {
	      name = name == null ? null : name + "";
	      for (i in schedules) {
	        if ((schedule = schedules[i]).state > SCHEDULED && schedule.name === name) {
	          return new Transition([[node]], root$1, name, +i);
	        }
	      }
	    }

	    return null;
	  }

	  var slice$4 = Array.prototype.slice;

	  function identity$5(x) {
	    return x;
	  }

	  var top = 1;
	  var right = 2;
	  var bottom = 3;
	  var left = 4;
	var   epsilon$2 = 1e-6;
	  function translateX(scale0, scale1, d) {
	    var x = scale0(d);
	    return "translate(" + (isFinite(x) ? x : scale1(d)) + ",0)";
	  }

	  function translateY(scale0, scale1, d) {
	    var y = scale0(d);
	    return "translate(0," + (isFinite(y) ? y : scale1(d)) + ")";
	  }

	  function center(scale) {
	    var offset = scale.bandwidth() / 2;
	    if (scale.round()) offset = Math.round(offset);
	    return function(d) {
	      return scale(d) + offset;
	    };
	  }

	  function entering() {
	    return !this.__axis;
	  }

	  function axis(orient, scale) {
	    var tickArguments = [],
	        tickValues = null,
	        tickFormat = null,
	        tickSizeInner = 6,
	        tickSizeOuter = 6,
	        tickPadding = 3;

	    function axis(context) {
	      var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
	          format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$5) : tickFormat,
	          spacing = Math.max(tickSizeInner, 0) + tickPadding,
	          transform = orient === top || orient === bottom ? translateX : translateY,
	          range = scale.range(),
	          range0 = range[0] + 0.5,
	          range1 = range[range.length - 1] + 0.5,
	          position = (scale.bandwidth ? center : identity$5)(scale.copy()),
	          selection = context.selection ? context.selection() : context,
	          path = selection.selectAll(".domain").data([null]),
	          tick = selection.selectAll(".tick").data(values, scale).order(),
	          tickExit = tick.exit(),
	          tickEnter = tick.enter().append("g").attr("class", "tick"),
	          line = tick.select("line"),
	          text = tick.select("text"),
	          k = orient === top || orient === left ? -1 : 1,
	          x, y = orient === left || orient === right ? (x = "x", "y") : (x = "y", "x");

	      path = path.merge(path.enter().insert("path", ".tick")
	          .attr("class", "domain")
	          .attr("stroke", "#000"));

	      tick = tick.merge(tickEnter);

	      line = line.merge(tickEnter.append("line")
	          .attr("stroke", "#000")
	          .attr(x + "2", k * tickSizeInner)
	          .attr(y + "1", 0.5)
	          .attr(y + "2", 0.5));

	      text = text.merge(tickEnter.append("text")
	          .attr("fill", "#000")
	          .attr(x, k * spacing)
	          .attr(y, 0.5)
	          .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

	      if (context !== selection) {
	        path = path.transition(context);
	        tick = tick.transition(context);
	        line = line.transition(context);
	        text = text.transition(context);

	        tickExit = tickExit.transition(context)
	            .attr("opacity", epsilon$2)
	            .attr("transform", function(d) { return transform(position, this.parentNode.__axis || position, d); });

	        tickEnter
	            .attr("opacity", epsilon$2)
	            .attr("transform", function(d) { return transform(this.parentNode.__axis || position, position, d); });
	      }

	      tickExit.remove();

	      path
	          .attr("d", orient === left || orient == right
	              ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter
	              : "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter);

	      tick
	          .attr("opacity", 1)
	          .attr("transform", function(d) { return transform(position, position, d); });

	      line
	          .attr(x + "2", k * tickSizeInner);

	      text
	          .attr(x, k * spacing)
	          .text(format);

	      selection.filter(entering)
	          .attr("fill", "none")
	          .attr("font-size", 10)
	          .attr("font-family", "sans-serif")
	          .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

	      selection
	          .each(function() { this.__axis = position; });
	    }

	    axis.scale = function(_) {
	      return arguments.length ? (scale = _, axis) : scale;
	    };

	    axis.ticks = function() {
	      return tickArguments = slice$4.call(arguments), axis;
	    };

	    axis.tickArguments = function(_) {
	      return arguments.length ? (tickArguments = _ == null ? [] : slice$4.call(_), axis) : tickArguments.slice();
	    };

	    axis.tickValues = function(_) {
	      return arguments.length ? (tickValues = _ == null ? null : slice$4.call(_), axis) : tickValues && tickValues.slice();
	    };

	    axis.tickFormat = function(_) {
	      return arguments.length ? (tickFormat = _, axis) : tickFormat;
	    };

	    axis.tickSize = function(_) {
	      return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
	    };

	    axis.tickSizeInner = function(_) {
	      return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
	    };

	    axis.tickSizeOuter = function(_) {
	      return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
	    };

	    axis.tickPadding = function(_) {
	      return arguments.length ? (tickPadding = +_, axis) : tickPadding;
	    };

	    return axis;
	  }

	  function axisTop(scale) {
	    return axis(top, scale);
	  }

	  function axisRight(scale) {
	    return axis(right, scale);
	  }

	  function axisBottom(scale) {
	    return axis(bottom, scale);
	  }

	  function axisLeft(scale) {
	    return axis(left, scale);
	  }

	  function defaultSeparation(a, b) {
	    return a.parent === b.parent ? 1 : 2;
	  }

	  function meanX(children) {
	    return children.reduce(meanXReduce, 0) / children.length;
	  }

	  function meanXReduce(x, c) {
	    return x + c.x;
	  }

	  function maxY(children) {
	    return 1 + children.reduce(maxYReduce, 0);
	  }

	  function maxYReduce(y, c) {
	    return Math.max(y, c.y);
	  }

	  function leafLeft(node) {
	    var children;
	    while (children = node.children) node = children[0];
	    return node;
	  }

	  function leafRight(node) {
	    var children;
	    while (children = node.children) node = children[children.length - 1];
	    return node;
	  }

	  function cluster() {
	    var separation = defaultSeparation,
	        dx = 1,
	        dy = 1,
	        nodeSize = false;

	    function cluster(root) {
	      var previousNode,
	          x = 0;

	      // First walk, computing the initial x & y values.
	      root.eachAfter(function(node) {
	        var children = node.children;
	        if (children) {
	          node.x = meanX(children);
	          node.y = maxY(children);
	        } else {
	          node.x = previousNode ? x += separation(node, previousNode) : 0;
	          node.y = 0;
	          previousNode = node;
	        }
	      });

	      var left = leafLeft(root),
	          right = leafRight(root),
	          x0 = left.x - separation(left, right) / 2,
	          x1 = right.x + separation(right, left) / 2;

	      // Second walk, normalizing x & y to the desired size.
	      return root.eachAfter(nodeSize ? function(node) {
	        node.x = (node.x - root.x) * dx;
	        node.y = (root.y - node.y) * dy;
	      } : function(node) {
	        node.x = (node.x - x0) / (x1 - x0) * dx;
	        node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
	      });
	    }

	    cluster.separation = function(x) {
	      return arguments.length ? (separation = x, cluster) : separation;
	    };

	    cluster.size = function(x) {
	      return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? null : [dx, dy]);
	    };

	    cluster.nodeSize = function(x) {
	      return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? [dx, dy] : null);
	    };

	    return cluster;
	  }

	  function node_each(callback) {
	    var node = this, current, next = [node], children, i, n;
	    do {
	      current = next.reverse(), next = [];
	      while (node = current.pop()) {
	        callback(node), children = node.children;
	        if (children) for (i = 0, n = children.length; i < n; ++i) {
	          next.push(children[i]);
	        }
	      }
	    } while (next.length);
	    return this;
	  }

	  function node_eachBefore(callback) {
	    var node = this, nodes = [node], children, i;
	    while (node = nodes.pop()) {
	      callback(node), children = node.children;
	      if (children) for (i = children.length - 1; i >= 0; --i) {
	        nodes.push(children[i]);
	      }
	    }
	    return this;
	  }

	  function node_eachAfter(callback) {
	    var node = this, nodes = [node], next = [], children, i, n;
	    while (node = nodes.pop()) {
	      next.push(node), children = node.children;
	      if (children) for (i = 0, n = children.length; i < n; ++i) {
	        nodes.push(children[i]);
	      }
	    }
	    while (node = next.pop()) {
	      callback(node);
	    }
	    return this;
	  }

	  function node_sum(value) {
	    return this.eachAfter(function(node) {
	      var sum = +value(node.data) || 0,
	          children = node.children,
	          i = children && children.length;
	      while (--i >= 0) sum += children[i].value;
	      node.value = sum;
	    });
	  }

	  function node_sort(compare) {
	    return this.eachBefore(function(node) {
	      if (node.children) {
	        node.children.sort(compare);
	      }
	    });
	  }

	  function node_path(end) {
	    var start = this,
	        ancestor = leastCommonAncestor(start, end),
	        nodes = [start];
	    while (start !== ancestor) {
	      start = start.parent;
	      nodes.push(start);
	    }
	    var k = nodes.length;
	    while (end !== ancestor) {
	      nodes.splice(k, 0, end);
	      end = end.parent;
	    }
	    return nodes;
	  }

	  function leastCommonAncestor(a, b) {
	    if (a === b) return a;
	    var aNodes = a.ancestors(),
	        bNodes = b.ancestors(),
	        c = null;
	    a = aNodes.pop();
	    b = bNodes.pop();
	    while (a === b) {
	      c = a;
	      a = aNodes.pop();
	      b = bNodes.pop();
	    }
	    return c;
	  }

	  function node_ancestors() {
	    var node = this, nodes = [node];
	    while (node = node.parent) {
	      nodes.push(node);
	    }
	    return nodes;
	  }

	  function node_descendants() {
	    var nodes = [];
	    this.each(function(node) {
	      nodes.push(node);
	    });
	    return nodes;
	  }

	  function node_leaves() {
	    var leaves = [];
	    this.eachBefore(function(node) {
	      if (!node.children) {
	        leaves.push(node);
	      }
	    });
	    return leaves;
	  }

	  function node_links() {
	    var root = this, links = [];
	    root.each(function(node) {
	      if (node !== root) { // Don’t include the root’s parent, if any.
	        links.push({source: node.parent, target: node});
	      }
	    });
	    return links;
	  }

	  function hierarchy(data, children) {
	    var root = new Node(data),
	        valued = +data.value && (root.value = data.value),
	        node,
	        nodes = [root],
	        child,
	        childs,
	        i,
	        n;

	    if (children == null) children = defaultChildren;

	    while (node = nodes.pop()) {
	      if (valued) node.value = +node.data.value;
	      if ((childs = children(node.data)) && (n = childs.length)) {
	        node.children = new Array(n);
	        for (i = n - 1; i >= 0; --i) {
	          nodes.push(child = node.children[i] = new Node(childs[i]));
	          child.parent = node;
	          child.depth = node.depth + 1;
	        }
	      }
	    }

	    return root.eachBefore(computeHeight);
	  }

	  function node_copy() {
	    return hierarchy(this).eachBefore(copyData);
	  }

	  function defaultChildren(d) {
	    return d.children;
	  }

	  function copyData(node) {
	    node.data = node.data.data;
	  }

	  function computeHeight(node) {
	    var height = 0;
	    do node.height = height;
	    while ((node = node.parent) && (node.height < ++height));
	  }

	  function Node(data) {
	    this.data = data;
	    this.depth =
	    this.height = 0;
	    this.parent = null;
	  }

	  Node.prototype = hierarchy.prototype = {
	    constructor: Node,
	    each: node_each,
	    eachAfter: node_eachAfter,
	    eachBefore: node_eachBefore,
	    sum: node_sum,
	    sort: node_sort,
	    path: node_path,
	    ancestors: node_ancestors,
	    descendants: node_descendants,
	    leaves: node_leaves,
	    links: node_links,
	    copy: node_copy
	  };

	  function Node$2(value) {
	    this._ = value;
	    this.next = null;
	  }

	  function shuffle$1(array) {
	    var i,
	        n = (array = array.slice()).length,
	        head = null,
	        node = head;

	    while (n) {
	      var next = new Node$2(array[n - 1]);
	      if (node) node = node.next = next;
	      else node = head = next;
	      array[i] = array[--n];
	    }

	    return {
	      head: head,
	      tail: node
	    };
	  }

	  function enclose(circles) {
	    return encloseN(shuffle$1(circles), []);
	  }

	  function encloses(a, b) {
	    var dx = b.x - a.x,
	        dy = b.y - a.y,
	        dr = a.r - b.r;
	    return dr * dr + 1e-6 > dx * dx + dy * dy;
	  }

	  // Returns the smallest circle that contains circles L and intersects circles B.
	  function encloseN(L, B) {
	    var circle,
	        l0 = null,
	        l1 = L.head,
	        l2,
	        p1;

	    switch (B.length) {
	      case 1: circle = enclose1(B[0]); break;
	      case 2: circle = enclose2(B[0], B[1]); break;
	      case 3: circle = enclose3(B[0], B[1], B[2]); break;
	    }

	    while (l1) {
	      p1 = l1._, l2 = l1.next;
	      if (!circle || !encloses(circle, p1)) {

	        // Temporarily truncate L before l1.
	        if (l0) L.tail = l0, l0.next = null;
	        else L.head = L.tail = null;

	        B.push(p1);
	        circle = encloseN(L, B); // Note: reorders L!
	        B.pop();

	        // Move l1 to the front of L and reconnect the truncated list L.
	        if (L.head) l1.next = L.head, L.head = l1;
	        else l1.next = null, L.head = L.tail = l1;
	        l0 = L.tail, l0.next = l2;

	      } else {
	        l0 = l1;
	      }
	      l1 = l2;
	    }

	    L.tail = l0;
	    return circle;
	  }

	  function enclose1(a) {
	    return {
	      x: a.x,
	      y: a.y,
	      r: a.r
	    };
	  }

	  function enclose2(a, b) {
	    var x1 = a.x, y1 = a.y, r1 = a.r,
	        x2 = b.x, y2 = b.y, r2 = b.r,
	        x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1,
	        l = Math.sqrt(x21 * x21 + y21 * y21);
	    return {
	      x: (x1 + x2 + x21 / l * r21) / 2,
	      y: (y1 + y2 + y21 / l * r21) / 2,
	      r: (l + r1 + r2) / 2
	    };
	  }

	  function enclose3(a, b, c) {
	    var x1 = a.x, y1 = a.y, r1 = a.r,
	        x2 = b.x, y2 = b.y, r2 = b.r,
	        x3 = c.x, y3 = c.y, r3 = c.r,
	        a2 = 2 * (x1 - x2),
	        b2 = 2 * (y1 - y2),
	        c2 = 2 * (r2 - r1),
	        d2 = x1 * x1 + y1 * y1 - r1 * r1 - x2 * x2 - y2 * y2 + r2 * r2,
	        a3 = 2 * (x1 - x3),
	        b3 = 2 * (y1 - y3),
	        c3 = 2 * (r3 - r1),
	        d3 = x1 * x1 + y1 * y1 - r1 * r1 - x3 * x3 - y3 * y3 + r3 * r3,
	        ab = a3 * b2 - a2 * b3,
	        xa = (b2 * d3 - b3 * d2) / ab - x1,
	        xb = (b3 * c2 - b2 * c3) / ab,
	        ya = (a3 * d2 - a2 * d3) / ab - y1,
	        yb = (a2 * c3 - a3 * c2) / ab,
	        A = xb * xb + yb * yb - 1,
	        B = 2 * (xa * xb + ya * yb + r1),
	        C = xa * xa + ya * ya - r1 * r1,
	        r = (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A);
	    return {
	      x: xa + xb * r + x1,
	      y: ya + yb * r + y1,
	      r: r
	    };
	  }

	  function place(a, b, c) {
	    var ax = a.x,
	        ay = a.y,
	        da = b.r + c.r,
	        db = a.r + c.r,
	        dx = b.x - ax,
	        dy = b.y - ay,
	        dc = dx * dx + dy * dy;
	    if (dc) {
	      var x = 0.5 + ((db *= db) - (da *= da)) / (2 * dc),
	          y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
	      c.x = ax + x * dx + y * dy;
	      c.y = ay + x * dy - y * dx;
	    } else {
	      c.x = ax + db;
	      c.y = ay;
	    }
	  }

	  function intersects(a, b) {
	    var dx = b.x - a.x,
	        dy = b.y - a.y,
	        dr = a.r + b.r;
	    return dr * dr > dx * dx + dy * dy;
	  }

	  function distance2(circle, x, y) {
	    var dx = circle.x - x,
	        dy = circle.y - y;
	    return dx * dx + dy * dy;
	  }

	  function Node$1(circle) {
	    this._ = circle;
	    this.next = null;
	    this.previous = null;
	  }

	  function packEnclose(circles) {
	    if (!(n = circles.length)) return 0;

	    var a, b, c, n;

	    // Place the first circle.
	    a = circles[0], a.x = 0, a.y = 0;
	    if (!(n > 1)) return a.r;

	    // Place the second circle.
	    b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
	    if (!(n > 2)) return a.r + b.r;

	    // Place the third circle.
	    place(b, a, c = circles[2]);

	    // Initialize the weighted centroid.
	    var aa = a.r * a.r,
	        ba = b.r * b.r,
	        ca = c.r * c.r,
	        oa = aa + ba + ca,
	        ox = aa * a.x + ba * b.x + ca * c.x,
	        oy = aa * a.y + ba * b.y + ca * c.y,
	        cx, cy, i, j, k, sj, sk;

	    // Initialize the front-chain using the first three circles a, b and c.
	    a = new Node$1(a), b = new Node$1(b), c = new Node$1(c);
	    a.next = c.previous = b;
	    b.next = a.previous = c;
	    c.next = b.previous = a;

	    // Attempt to place each remaining circle…
	    pack: for (i = 3; i < n; ++i) {
	      place(a._, b._, c = circles[i]), c = new Node$1(c);

	      // If there are only three elements in the front-chain…
	      if ((k = a.previous) === (j = b.next)) {
	        // If the new circle intersects the third circle,
	        // rotate the front chain to try the next position.
	        if (intersects(j._, c._)) {
	          a = b, b = j, --i;
	          continue pack;
	        }
	      }

	      // Find the closest intersecting circle on the front-chain, if any.
	      else {
	        sj = j._.r, sk = k._.r;
	        do {
	          if (sj <= sk) {
	            if (intersects(j._, c._)) {
	              b = j, a.next = b, b.previous = a, --i;
	              continue pack;
	            }
	            j = j.next, sj += j._.r;
	          } else {
	            if (intersects(k._, c._)) {
	              a = k, a.next = b, b.previous = a, --i;
	              continue pack;
	            }
	            k = k.previous, sk += k._.r;
	          }
	        } while (j !== k.next);
	      }

	      // Success! Insert the new circle c between a and b.
	      c.previous = a, c.next = b, a.next = b.previous = b = c;

	      // Update the weighted centroid.
	      oa += ca = c._.r * c._.r;
	      ox += ca * c._.x;
	      oy += ca * c._.y;

	      // Compute the new closest circle a to centroid.
	      aa = distance2(a._, cx = ox / oa, cy = oy / oa);
	      while ((c = c.next) !== b) {
	        if ((ca = distance2(c._, cx, cy)) < aa) {
	          a = c, aa = ca;
	        }
	      }
	      b = a.next;
	    }

	    // Compute the enclosing circle of the front chain.
	    a = [b._], c = b; while ((c = c.next) !== b) a.push(c._); c = enclose(a);

	    // Translate the circles to put the enclosing circle around the origin.
	    for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;

	    return c.r;
	  }

	  function siblings(circles) {
	    packEnclose(circles);
	    return circles;
	  }

	  function optional(f) {
	    return f == null ? null : required(f);
	  }

	  function required(f) {
	    if (typeof f !== "function") throw new Error;
	    return f;
	  }

	  function constantZero() {
	    return 0;
	  }

	  function constant$5(x) {
	    return function() {
	      return x;
	    };
	  }

	  function defaultRadius(d) {
	    return Math.sqrt(d.value);
	  }

	  function index() {
	    var radius = null,
	        dx = 1,
	        dy = 1,
	        padding = constantZero;

	    function pack(root) {
	      root.x = dx / 2, root.y = dy / 2;
	      if (radius) {
	        root.eachBefore(radiusLeaf(radius))
	            .eachAfter(packChildren(padding, 0.5))
	            .eachBefore(translateChild(1));
	      } else {
	        root.eachBefore(radiusLeaf(defaultRadius))
	            .eachAfter(packChildren(constantZero, 1))
	            .eachAfter(packChildren(padding, root.r / Math.min(dx, dy)))
	            .eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
	      }
	      return root;
	    }

	    pack.radius = function(x) {
	      return arguments.length ? (radius = optional(x), pack) : radius;
	    };

	    pack.size = function(x) {
	      return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];
	    };

	    pack.padding = function(x) {
	      return arguments.length ? (padding = typeof x === "function" ? x : constant$5(+x), pack) : padding;
	    };

	    return pack;
	  }

	  function radiusLeaf(radius) {
	    return function(node) {
	      if (!node.children) {
	        node.r = Math.max(0, +radius(node) || 0);
	      }
	    };
	  }

	  function packChildren(padding, k) {
	    return function(node) {
	      if (children = node.children) {
	        var children,
	            i,
	            n = children.length,
	            r = padding(node) * k || 0,
	            e;

	        if (r) for (i = 0; i < n; ++i) children[i].r += r;
	        e = packEnclose(children);
	        if (r) for (i = 0; i < n; ++i) children[i].r -= r;
	        node.r = e + r;
	      }
	    };
	  }

	  function translateChild(k) {
	    return function(node) {
	      var parent = node.parent;
	      node.r *= k;
	      if (parent) {
	        node.x = parent.x + k * node.x;
	        node.y = parent.y + k * node.y;
	      }
	    };
	  }

	  function roundNode(node) {
	    node.x0 = Math.round(node.x0);
	    node.y0 = Math.round(node.y0);
	    node.x1 = Math.round(node.x1);
	    node.y1 = Math.round(node.y1);
	  }

	  function treemapDice(parent, x0, y0, x1, y1) {
	    var nodes = parent.children,
	        node,
	        i = -1,
	        n = nodes.length,
	        k = parent.value && (x1 - x0) / parent.value;

	    while (++i < n) {
	      node = nodes[i], node.y0 = y0, node.y1 = y1;
	      node.x0 = x0, node.x1 = x0 += node.value * k;
	    }
	  }

	  function partition() {
	    var dx = 1,
	        dy = 1,
	        padding = 0,
	        round = false;

	    function partition(root) {
	      var n = root.height + 1;
	      root.x0 =
	      root.y0 = padding;
	      root.x1 = dx;
	      root.y1 = dy / n;
	      root.eachBefore(positionNode(dy, n));
	      if (round) root.eachBefore(roundNode);
	      return root;
	    }

	    function positionNode(dy, n) {
	      return function(node) {
	        if (node.children) {
	          treemapDice(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
	        }
	        var x0 = node.x0,
	            y0 = node.y0,
	            x1 = node.x1 - padding,
	            y1 = node.y1 - padding;
	        if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
	        if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
	        node.x0 = x0;
	        node.y0 = y0;
	        node.x1 = x1;
	        node.y1 = y1;
	      };
	    }

	    partition.round = function(x) {
	      return arguments.length ? (round = !!x, partition) : round;
	    };

	    partition.size = function(x) {
	      return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
	    };

	    partition.padding = function(x) {
	      return arguments.length ? (padding = +x, partition) : padding;
	    };

	    return partition;
	  }

	var   keyPrefix$1 = "$";
	  var preroot = {depth: -1};
	  var ambiguous = {};
	  function defaultId(d) {
	    return d.id;
	  }

	  function defaultParentId(d) {
	    return d.parentId;
	  }

	  function stratify() {
	    var id = defaultId,
	        parentId = defaultParentId;

	    function stratify(data) {
	      var d,
	          i,
	          n = data.length,
	          root,
	          parent,
	          node,
	          nodes = new Array(n),
	          nodeId,
	          nodeKey,
	          nodeByKey = {};

	      for (i = 0; i < n; ++i) {
	        d = data[i], node = nodes[i] = new Node(d);
	        if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
	          nodeKey = keyPrefix$1 + (node.id = nodeId);
	          nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;
	        }
	      }

	      for (i = 0; i < n; ++i) {
	        node = nodes[i], nodeId = parentId(data[i], i, data);
	        if (nodeId == null || !(nodeId += "")) {
	          if (root) throw new Error("multiple roots");
	          root = node;
	        } else {
	          parent = nodeByKey[keyPrefix$1 + nodeId];
	          if (!parent) throw new Error("missing: " + nodeId);
	          if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
	          if (parent.children) parent.children.push(node);
	          else parent.children = [node];
	          node.parent = parent;
	        }
	      }

	      if (!root) throw new Error("no root");
	      root.parent = preroot;
	      root.eachBefore(function(node) { node.depth = node.parent.depth + 1; --n; }).eachBefore(computeHeight);
	      root.parent = null;
	      if (n > 0) throw new Error("cycle");

	      return root;
	    }

	    stratify.id = function(x) {
	      return arguments.length ? (id = required(x), stratify) : id;
	    };

	    stratify.parentId = function(x) {
	      return arguments.length ? (parentId = required(x), stratify) : parentId;
	    };

	    return stratify;
	  }

	  function defaultSeparation$1(a, b) {
	    return a.parent === b.parent ? 1 : 2;
	  }

	  // function radialSeparation(a, b) {
	  //   return (a.parent === b.parent ? 1 : 2) / a.depth;
	  // }

	  // This function is used to traverse the left contour of a subtree (or
	  // subforest). It returns the successor of v on this contour. This successor is
	  // either given by the leftmost child of v or by the thread of v. The function
	  // returns null if and only if v is on the highest level of its subtree.
	  function nextLeft(v) {
	    var children = v.children;
	    return children ? children[0] : v.t;
	  }

	  // This function works analogously to nextLeft.
	  function nextRight(v) {
	    var children = v.children;
	    return children ? children[children.length - 1] : v.t;
	  }

	  // Shifts the current subtree rooted at w+. This is done by increasing
	  // prelim(w+) and mod(w+) by shift.
	  function moveSubtree(wm, wp, shift) {
	    var change = shift / (wp.i - wm.i);
	    wp.c -= change;
	    wp.s += shift;
	    wm.c += change;
	    wp.z += shift;
	    wp.m += shift;
	  }

	  // All other shifts, applied to the smaller subtrees between w- and w+, are
	  // performed by this function. To prepare the shifts, we have to adjust
	  // change(w+), shift(w+), and change(w-).
	  function executeShifts(v) {
	    var shift = 0,
	        change = 0,
	        children = v.children,
	        i = children.length,
	        w;
	    while (--i >= 0) {
	      w = children[i];
	      w.z += shift;
	      w.m += shift;
	      shift += w.s + (change += w.c);
	    }
	  }

	  // If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
	  // returns the specified (default) ancestor.
	  function nextAncestor(vim, v, ancestor) {
	    return vim.a.parent === v.parent ? vim.a : ancestor;
	  }

	  function TreeNode(node, i) {
	    this._ = node;
	    this.parent = null;
	    this.children = null;
	    this.A = null; // default ancestor
	    this.a = this; // ancestor
	    this.z = 0; // prelim
	    this.m = 0; // mod
	    this.c = 0; // change
	    this.s = 0; // shift
	    this.t = null; // thread
	    this.i = i; // number
	  }

	  TreeNode.prototype = Object.create(Node.prototype);

	  function treeRoot(root) {
	    var tree = new TreeNode(root, 0),
	        node,
	        nodes = [tree],
	        child,
	        children,
	        i,
	        n;

	    while (node = nodes.pop()) {
	      if (children = node._.children) {
	        node.children = new Array(n = children.length);
	        for (i = n - 1; i >= 0; --i) {
	          nodes.push(child = node.children[i] = new TreeNode(children[i], i));
	          child.parent = node;
	        }
	      }
	    }

	    (tree.parent = new TreeNode(null, 0)).children = [tree];
	    return tree;
	  }

	  // Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
	  function tree() {
	    var separation = defaultSeparation$1,
	        dx = 1,
	        dy = 1,
	        nodeSize = null;

	    function tree(root) {
	      var t = treeRoot(root);

	      // Compute the layout using Buchheim et al.’s algorithm.
	      t.eachAfter(firstWalk), t.parent.m = -t.z;
	      t.eachBefore(secondWalk);

	      // If a fixed node size is specified, scale x and y.
	      if (nodeSize) root.eachBefore(sizeNode);

	      // If a fixed tree size is specified, scale x and y based on the extent.
	      // Compute the left-most, right-most, and depth-most nodes for extents.
	      else {
	        var left = root,
	            right = root,
	            bottom = root;
	        root.eachBefore(function(node) {
	          if (node.x < left.x) left = node;
	          if (node.x > right.x) right = node;
	          if (node.depth > bottom.depth) bottom = node;
	        });
	        var s = left === right ? 1 : separation(left, right) / 2,
	            tx = s - left.x,
	            kx = dx / (right.x + s + tx),
	            ky = dy / (bottom.depth || 1);
	        root.eachBefore(function(node) {
	          node.x = (node.x + tx) * kx;
	          node.y = node.depth * ky;
	        });
	      }

	      return root;
	    }

	    // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
	    // applied recursively to the children of v, as well as the function
	    // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
	    // node v is placed to the midpoint of its outermost children.
	    function firstWalk(v) {
	      var children = v.children,
	          siblings = v.parent.children,
	          w = v.i ? siblings[v.i - 1] : null;
	      if (children) {
	        executeShifts(v);
	        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
	        if (w) {
	          v.z = w.z + separation(v._, w._);
	          v.m = v.z - midpoint;
	        } else {
	          v.z = midpoint;
	        }
	      } else if (w) {
	        v.z = w.z + separation(v._, w._);
	      }
	      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
	    }

	    // Computes all real x-coordinates by summing up the modifiers recursively.
	    function secondWalk(v) {
	      v._.x = v.z + v.parent.m;
	      v.m += v.parent.m;
	    }

	    // The core of the algorithm. Here, a new subtree is combined with the
	    // previous subtrees. Threads are used to traverse the inside and outside
	    // contours of the left and right subtree up to the highest common level. The
	    // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
	    // superscript o means outside and i means inside, the subscript - means left
	    // subtree and + means right subtree. For summing up the modifiers along the
	    // contour, we use respective variables si+, si-, so-, and so+. Whenever two
	    // nodes of the inside contours conflict, we compute the left one of the
	    // greatest uncommon ancestors using the function ANCESTOR and call MOVE
	    // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
	    // Finally, we add a new thread (if necessary).
	    function apportion(v, w, ancestor) {
	      if (w) {
	        var vip = v,
	            vop = v,
	            vim = w,
	            vom = vip.parent.children[0],
	            sip = vip.m,
	            sop = vop.m,
	            sim = vim.m,
	            som = vom.m,
	            shift;
	        while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
	          vom = nextLeft(vom);
	          vop = nextRight(vop);
	          vop.a = v;
	          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
	          if (shift > 0) {
	            moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
	            sip += shift;
	            sop += shift;
	          }
	          sim += vim.m;
	          sip += vip.m;
	          som += vom.m;
	          sop += vop.m;
	        }
	        if (vim && !nextRight(vop)) {
	          vop.t = vim;
	          vop.m += sim - sop;
	        }
	        if (vip && !nextLeft(vom)) {
	          vom.t = vip;
	          vom.m += sip - som;
	          ancestor = v;
	        }
	      }
	      return ancestor;
	    }

	    function sizeNode(node) {
	      node.x *= dx;
	      node.y = node.depth * dy;
	    }

	    tree.separation = function(x) {
	      return arguments.length ? (separation = x, tree) : separation;
	    };

	    tree.size = function(x) {
	      return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
	    };

	    tree.nodeSize = function(x) {
	      return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
	    };

	    return tree;
	  }

	  function treemapSlice(parent, x0, y0, x1, y1) {
	    var nodes = parent.children,
	        node,
	        i = -1,
	        n = nodes.length,
	        k = parent.value && (y1 - y0) / parent.value;

	    while (++i < n) {
	      node = nodes[i], node.x0 = x0, node.x1 = x1;
	      node.y0 = y0, node.y1 = y0 += node.value * k;
	    }
	  }

	  var phi = (1 + Math.sqrt(5)) / 2;

	  function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
	    var rows = [],
	        nodes = parent.children,
	        row,
	        nodeValue,
	        i0 = 0,
	        i1,
	        n = nodes.length,
	        dx, dy,
	        value = parent.value,
	        sumValue,
	        minValue,
	        maxValue,
	        newRatio,
	        minRatio,
	        alpha,
	        beta;

	    while (i0 < n) {
	      dx = x1 - x0, dy = y1 - y0;
	      minValue = maxValue = sumValue = nodes[i0].value;
	      alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
	      beta = sumValue * sumValue * alpha;
	      minRatio = Math.max(maxValue / beta, beta / minValue);

	      // Keep adding nodes while the aspect ratio maintains or improves.
	      for (i1 = i0 + 1; i1 < n; ++i1) {
	        sumValue += nodeValue = nodes[i1].value;
	        if (nodeValue < minValue) minValue = nodeValue;
	        if (nodeValue > maxValue) maxValue = nodeValue;
	        beta = sumValue * sumValue * alpha;
	        newRatio = Math.max(maxValue / beta, beta / minValue);
	        if (newRatio > minRatio) { sumValue -= nodeValue; break; }
	        minRatio = newRatio;
	      }

	      // Position and record the row orientation.
	      rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});
	      if (row.dice) treemapDice(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
	      else treemapSlice(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
	      value -= sumValue, i0 = i1;
	    }

	    return rows;
	  }

	  var squarify = (function custom(ratio) {

	    function squarify(parent, x0, y0, x1, y1) {
	      squarifyRatio(ratio, parent, x0, y0, x1, y1);
	    }

	    squarify.ratio = function(x) {
	      return custom((x = +x) > 1 ? x : 1);
	    };

	    return squarify;
	  })(phi);

	  function index$1() {
	    var tile = squarify,
	        round = false,
	        dx = 1,
	        dy = 1,
	        paddingStack = [0],
	        paddingInner = constantZero,
	        paddingTop = constantZero,
	        paddingRight = constantZero,
	        paddingBottom = constantZero,
	        paddingLeft = constantZero;

	    function treemap(root) {
	      root.x0 =
	      root.y0 = 0;
	      root.x1 = dx;
	      root.y1 = dy;
	      root.eachBefore(positionNode);
	      paddingStack = [0];
	      if (round) root.eachBefore(roundNode);
	      return root;
	    }

	    function positionNode(node) {
	      var p = paddingStack[node.depth],
	          x0 = node.x0 + p,
	          y0 = node.y0 + p,
	          x1 = node.x1 - p,
	          y1 = node.y1 - p;
	      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
	      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
	      node.x0 = x0;
	      node.y0 = y0;
	      node.x1 = x1;
	      node.y1 = y1;
	      if (node.children) {
	        p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
	        x0 += paddingLeft(node) - p;
	        y0 += paddingTop(node) - p;
	        x1 -= paddingRight(node) - p;
	        y1 -= paddingBottom(node) - p;
	        if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
	        if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
	        tile(node, x0, y0, x1, y1);
	      }
	    }

	    treemap.round = function(x) {
	      return arguments.length ? (round = !!x, treemap) : round;
	    };

	    treemap.size = function(x) {
	      return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
	    };

	    treemap.tile = function(x) {
	      return arguments.length ? (tile = required(x), treemap) : tile;
	    };

	    treemap.padding = function(x) {
	      return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
	    };

	    treemap.paddingInner = function(x) {
	      return arguments.length ? (paddingInner = typeof x === "function" ? x : constant$5(+x), treemap) : paddingInner;
	    };

	    treemap.paddingOuter = function(x) {
	      return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
	    };

	    treemap.paddingTop = function(x) {
	      return arguments.length ? (paddingTop = typeof x === "function" ? x : constant$5(+x), treemap) : paddingTop;
	    };

	    treemap.paddingRight = function(x) {
	      return arguments.length ? (paddingRight = typeof x === "function" ? x : constant$5(+x), treemap) : paddingRight;
	    };

	    treemap.paddingBottom = function(x) {
	      return arguments.length ? (paddingBottom = typeof x === "function" ? x : constant$5(+x), treemap) : paddingBottom;
	    };

	    treemap.paddingLeft = function(x) {
	      return arguments.length ? (paddingLeft = typeof x === "function" ? x : constant$5(+x), treemap) : paddingLeft;
	    };

	    return treemap;
	  }

	  function binary(parent, x0, y0, x1, y1) {
	    var nodes = parent.children,
	        i, n = nodes.length,
	        sum, sums = new Array(n + 1);

	    for (sums[0] = sum = i = 0; i < n; ++i) {
	      sums[i + 1] = sum += nodes[i].value;
	    }

	    partition(0, n, parent.value, x0, y0, x1, y1);

	    function partition(i, j, value, x0, y0, x1, y1) {
	      if (i >= j - 1) {
	        var node = nodes[i];
	        node.x0 = x0, node.y0 = y0;
	        node.x1 = x1, node.y1 = y1;
	        return;
	      }

	      var valueOffset = sums[i],
	          valueTarget = (value / 2) + valueOffset,
	          k = i + 1,
	          hi = j - 1;

	      while (k < hi) {
	        var mid = k + hi >>> 1;
	        if (sums[mid] < valueTarget) k = mid + 1;
	        else hi = mid;
	      }

	      var valueLeft = sums[k] - valueOffset,
	          valueRight = value - valueLeft;

	      if ((y1 - y0) > (x1 - x0)) {
	        var yk = (y0 * valueRight + y1 * valueLeft) / value;
	        partition(i, k, valueLeft, x0, y0, x1, yk);
	        partition(k, j, valueRight, x0, yk, x1, y1);
	      } else {
	        var xk = (x0 * valueRight + x1 * valueLeft) / value;
	        partition(i, k, valueLeft, x0, y0, xk, y1);
	        partition(k, j, valueRight, xk, y0, x1, y1);
	      }
	    }
	  }

	  function sliceDice(parent, x0, y0, x1, y1) {
	    (parent.depth & 1 ? treemapSlice : treemapDice)(parent, x0, y0, x1, y1);
	  }

	  var resquarify = (function custom(ratio) {

	    function resquarify(parent, x0, y0, x1, y1) {
	      if ((rows = parent._squarify) && (rows.ratio === ratio)) {
	        var rows,
	            row,
	            nodes,
	            i,
	            j = -1,
	            n,
	            m = rows.length,
	            value = parent.value;

	        while (++j < m) {
	          row = rows[j], nodes = row.children;
	          for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
	          if (row.dice) treemapDice(row, x0, y0, x1, y0 += (y1 - y0) * row.value / value);
	          else treemapSlice(row, x0, y0, x0 += (x1 - x0) * row.value / value, y1);
	          value -= row.value;
	        }
	      } else {
	        parent._squarify = rows = squarifyRatio(ratio, parent, x0, y0, x1, y1);
	        rows.ratio = ratio;
	      }
	    }

	    resquarify.ratio = function(x) {
	      return custom((x = +x) > 1 ? x : 1);
	    };

	    return resquarify;
	  })(phi);

	  function center$1(x, y) {
	    var nodes;

	    if (x == null) x = 0;
	    if (y == null) y = 0;

	    function force() {
	      var i,
	          n = nodes.length,
	          node,
	          sx = 0,
	          sy = 0;

	      for (i = 0; i < n; ++i) {
	        node = nodes[i], sx += node.x, sy += node.y;
	      }

	      for (sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i) {
	        node = nodes[i], node.x -= sx, node.y -= sy;
	      }
	    }

	    force.initialize = function(_) {
	      nodes = _;
	    };

	    force.x = function(_) {
	      return arguments.length ? (x = +_, force) : x;
	    };

	    force.y = function(_) {
	      return arguments.length ? (y = +_, force) : y;
	    };

	    return force;
	  }

	  function constant$6(x) {
	    return function() {
	      return x;
	    };
	  }

	  function jiggle() {
	    return (Math.random() - 0.5) * 1e-6;
	  }

	  function x$1(d) {
	    return d.x + d.vx;
	  }

	  function y$1(d) {
	    return d.y + d.vy;
	  }

	  function collide(radius) {
	    var nodes,
	        radii,
	        strength = 1,
	        iterations = 1;

	    if (typeof radius !== "function") radius = constant$6(radius == null ? 1 : +radius);

	    function force() {
	      var i, n = nodes.length,
	          tree,
	          node,
	          xi,
	          yi,
	          ri,
	          ri2;

	      for (var k = 0; k < iterations; ++k) {
	        tree = quadtree(nodes, x$1, y$1).visitAfter(prepare);
	        for (i = 0; i < n; ++i) {
	          node = nodes[i];
	          ri = radii[i], ri2 = ri * ri;
	          xi = node.x + node.vx;
	          yi = node.y + node.vy;
	          tree.visit(apply);
	        }
	      }

	      function apply(quad, x0, y0, x1, y1) {
	        var data = quad.data, rj = quad.r, r = ri + rj;
	        if (data) {
	          if (data.index > i) {
	            var x = xi - data.x - data.vx,
	                y = yi - data.y - data.vy,
	                l = x * x + y * y;
	            if (l < r * r) {
	              if (x === 0) x = jiggle(), l += x * x;
	              if (y === 0) y = jiggle(), l += y * y;
	              l = (r - (l = Math.sqrt(l))) / l * strength;
	              node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
	              node.vy += (y *= l) * r;
	              data.vx -= x * (r = 1 - r);
	              data.vy -= y * r;
	            }
	          }
	          return;
	        }
	        return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
	      }
	    }

	    function prepare(quad) {
	      if (quad.data) return quad.r = radii[quad.data.index];
	      for (var i = quad.r = 0; i < 4; ++i) {
	        if (quad[i] && quad[i].r > quad.r) {
	          quad.r = quad[i].r;
	        }
	      }
	    }

	    force.initialize = function(_) {
	      var i, n = (nodes = _).length; radii = new Array(n);
	      for (i = 0; i < n; ++i) radii[i] = +radius(nodes[i], i, nodes);
	    };

	    force.iterations = function(_) {
	      return arguments.length ? (iterations = +_, force) : iterations;
	    };

	    force.strength = function(_) {
	      return arguments.length ? (strength = +_, force) : strength;
	    };

	    force.radius = function(_) {
	      return arguments.length ? (radius = typeof _ === "function" ? _ : constant$6(+_), force) : radius;
	    };

	    return force;
	  }

	  function index$2(d, i) {
	    return i;
	  }

	  function link(links) {
	    var id = index$2,
	        strength = defaultStrength,
	        strengths,
	        distance = constant$6(30),
	        distances,
	        nodes,
	        count,
	        bias,
	        iterations = 1;

	    if (links == null) links = [];

	    function defaultStrength(link) {
	      return 1 / Math.min(count[link.source.index], count[link.target.index]);
	    }

	    function force(alpha) {
	      for (var k = 0, n = links.length; k < iterations; ++k) {
	        for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
	          link = links[i], source = link.source, target = link.target;
	          x = target.x + target.vx - source.x - source.vx || jiggle();
	          y = target.y + target.vy - source.y - source.vy || jiggle();
	          l = Math.sqrt(x * x + y * y);
	          l = (l - distances[i]) / l * alpha * strengths[i];
	          x *= l, y *= l;
	          target.vx -= x * (b = bias[i]);
	          target.vy -= y * b;
	          source.vx += x * (b = 1 - b);
	          source.vy += y * b;
	        }
	      }
	    }

	    function initialize() {
	      if (!nodes) return;

	      var i,
	          n = nodes.length,
	          m = links.length,
	          nodeById = map$1(nodes, id),
	          link;

	      for (i = 0, count = new Array(n); i < n; ++i) {
	        count[i] = 0;
	      }

	      for (i = 0; i < m; ++i) {
	        link = links[i], link.index = i;
	        if (typeof link.source !== "object") link.source = nodeById.get(link.source);
	        if (typeof link.target !== "object") link.target = nodeById.get(link.target);
	        ++count[link.source.index], ++count[link.target.index];
	      }

	      for (i = 0, bias = new Array(m); i < m; ++i) {
	        link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
	      }

	      strengths = new Array(m), initializeStrength();
	      distances = new Array(m), initializeDistance();
	    }

	    function initializeStrength() {
	      if (!nodes) return;

	      for (var i = 0, n = links.length; i < n; ++i) {
	        strengths[i] = +strength(links[i], i, links);
	      }
	    }

	    function initializeDistance() {
	      if (!nodes) return;

	      for (var i = 0, n = links.length; i < n; ++i) {
	        distances[i] = +distance(links[i], i, links);
	      }
	    }

	    force.initialize = function(_) {
	      nodes = _;
	      initialize();
	    };

	    force.links = function(_) {
	      return arguments.length ? (links = _, initialize(), force) : links;
	    };

	    force.id = function(_) {
	      return arguments.length ? (id = _, force) : id;
	    };

	    force.iterations = function(_) {
	      return arguments.length ? (iterations = +_, force) : iterations;
	    };

	    force.strength = function(_) {
	      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initializeStrength(), force) : strength;
	    };

	    force.distance = function(_) {
	      return arguments.length ? (distance = typeof _ === "function" ? _ : constant$6(+_), initializeDistance(), force) : distance;
	    };

	    return force;
	  }

	  function x$2(d) {
	    return d.x;
	  }

	  function y$2(d) {
	    return d.y;
	  }

	  var initialRadius = 10;
	  var initialAngle = Math.PI * (3 - Math.sqrt(5));
	  function simulation(nodes) {
	    var simulation,
	        alpha = 1,
	        alphaMin = 0.001,
	        alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
	        alphaTarget = 0,
	        velocityDecay = 0.6,
	        forces = map$1(),
	        stepper = timer(step),
	        event = dispatch("tick", "end");

	    if (nodes == null) nodes = [];

	    function step() {
	      tick();
	      event.call("tick", simulation);
	      if (alpha < alphaMin) {
	        stepper.stop();
	        event.call("end", simulation);
	      }
	    }

	    function tick() {
	      var i, n = nodes.length, node;

	      alpha += (alphaTarget - alpha) * alphaDecay;

	      forces.each(function(force) {
	        force(alpha);
	      });

	      for (i = 0; i < n; ++i) {
	        node = nodes[i];
	        if (node.fx == null) node.x += node.vx *= velocityDecay;
	        else node.x = node.fx, node.vx = 0;
	        if (node.fy == null) node.y += node.vy *= velocityDecay;
	        else node.y = node.fy, node.vy = 0;
	      }
	    }

	    function initializeNodes() {
	      for (var i = 0, n = nodes.length, node; i < n; ++i) {
	        node = nodes[i], node.index = i;
	        if (isNaN(node.x) || isNaN(node.y)) {
	          var radius = initialRadius * Math.sqrt(i), angle = i * initialAngle;
	          node.x = radius * Math.cos(angle);
	          node.y = radius * Math.sin(angle);
	        }
	        if (isNaN(node.vx) || isNaN(node.vy)) {
	          node.vx = node.vy = 0;
	        }
	      }
	    }

	    function initializeForce(force) {
	      if (force.initialize) force.initialize(nodes);
	      return force;
	    }

	    initializeNodes();

	    return simulation = {
	      tick: tick,

	      restart: function() {
	        return stepper.restart(step), simulation;
	      },

	      stop: function() {
	        return stepper.stop(), simulation;
	      },

	      nodes: function(_) {
	        return arguments.length ? (nodes = _, initializeNodes(), forces.each(initializeForce), simulation) : nodes;
	      },

	      alpha: function(_) {
	        return arguments.length ? (alpha = +_, simulation) : alpha;
	      },

	      alphaMin: function(_) {
	        return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
	      },

	      alphaDecay: function(_) {
	        return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
	      },

	      alphaTarget: function(_) {
	        return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
	      },

	      velocityDecay: function(_) {
	        return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
	      },

	      force: function(name, _) {
	        return arguments.length > 1 ? ((_ == null ? forces.remove(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
	      },

	      find: function(x, y, radius) {
	        var i = 0,
	            n = nodes.length,
	            dx,
	            dy,
	            d2,
	            node,
	            closest;

	        if (radius == null) radius = Infinity;
	        else radius *= radius;

	        for (i = 0; i < n; ++i) {
	          node = nodes[i];
	          dx = x - node.x;
	          dy = y - node.y;
	          d2 = dx * dx + dy * dy;
	          if (d2 < radius) closest = node, radius = d2;
	        }

	        return closest;
	      },

	      on: function(name, _) {
	        return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
	      }
	    };
	  }

	  function manyBody() {
	    var nodes,
	        node,
	        alpha,
	        strength = constant$6(-30),
	        strengths,
	        distanceMin2 = 1,
	        distanceMax2 = Infinity,
	        theta2 = 0.81;

	    function force(_) {
	      var i, n = nodes.length, tree = quadtree(nodes, x$2, y$2).visitAfter(accumulate);
	      for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
	    }

	    function initialize() {
	      if (!nodes) return;
	      var i, n = nodes.length;
	      strengths = new Array(n);
	      for (i = 0; i < n; ++i) strengths[i] = +strength(nodes[i], i, nodes);
	    }

	    function accumulate(quad) {
	      var strength = 0, q, c, x, y, i;

	      // For internal nodes, accumulate forces from child quadrants.
	      if (quad.length) {
	        for (x = y = i = 0; i < 4; ++i) {
	          if ((q = quad[i]) && (c = q.value)) {
	            strength += c, x += c * q.x, y += c * q.y;
	          }
	        }
	        quad.x = x / strength;
	        quad.y = y / strength;
	      }

	      // For leaf nodes, accumulate forces from coincident quadrants.
	      else {
	        q = quad;
	        q.x = q.data.x;
	        q.y = q.data.y;
	        do strength += strengths[q.data.index];
	        while (q = q.next);
	      }

	      quad.value = strength;
	    }

	    function apply(quad, x1, _, x2) {
	      if (!quad.value) return true;

	      var x = quad.x - node.x,
	          y = quad.y - node.y,
	          w = x2 - x1,
	          l = x * x + y * y;

	      // Apply the Barnes-Hut approximation if possible.
	      // Limit forces for very close nodes; randomize direction if coincident.
	      if (w * w / theta2 < l) {
	        if (l < distanceMax2) {
	          if (x === 0) x = jiggle(), l += x * x;
	          if (y === 0) y = jiggle(), l += y * y;
	          if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
	          node.vx += x * quad.value * alpha / l;
	          node.vy += y * quad.value * alpha / l;
	        }
	        return true;
	      }

	      // Otherwise, process points directly.
	      else if (quad.length || l >= distanceMax2) return;

	      // Limit forces for very close nodes; randomize direction if coincident.
	      if (quad.data !== node || quad.next) {
	        if (x === 0) x = jiggle(), l += x * x;
	        if (y === 0) y = jiggle(), l += y * y;
	        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
	      }

	      do if (quad.data !== node) {
	        w = strengths[quad.data.index] * alpha / l;
	        node.vx += x * w;
	        node.vy += y * w;
	      } while (quad = quad.next);
	    }

	    force.initialize = function(_) {
	      nodes = _;
	      initialize();
	    };

	    force.strength = function(_) {
	      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
	    };

	    force.distanceMin = function(_) {
	      return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
	    };

	    force.distanceMax = function(_) {
	      return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
	    };

	    force.theta = function(_) {
	      return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
	    };

	    return force;
	  }

	  function x$3(x) {
	    var strength = constant$6(0.1),
	        nodes,
	        strengths,
	        xz;

	    if (typeof x !== "function") x = constant$6(x == null ? 0 : +x);

	    function force(alpha) {
	      for (var i = 0, n = nodes.length, node; i < n; ++i) {
	        node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
	      }
	    }

	    function initialize() {
	      if (!nodes) return;
	      var i, n = nodes.length;
	      strengths = new Array(n);
	      xz = new Array(n);
	      for (i = 0; i < n; ++i) {
	        strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
	      }
	    }

	    force.initialize = function(_) {
	      nodes = _;
	      initialize();
	    };

	    force.strength = function(_) {
	      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
	    };

	    force.x = function(_) {
	      return arguments.length ? (x = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : x;
	    };

	    return force;
	  }

	  function y$3(y) {
	    var strength = constant$6(0.1),
	        nodes,
	        strengths,
	        yz;

	    if (typeof y !== "function") y = constant$6(y == null ? 0 : +y);

	    function force(alpha) {
	      for (var i = 0, n = nodes.length, node; i < n; ++i) {
	        node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
	      }
	    }

	    function initialize() {
	      if (!nodes) return;
	      var i, n = nodes.length;
	      strengths = new Array(n);
	      yz = new Array(n);
	      for (i = 0; i < n; ++i) {
	        strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
	      }
	    }

	    force.initialize = function(_) {
	      nodes = _;
	      initialize();
	    };

	    force.strength = function(_) {
	      return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
	    };

	    force.y = function(_) {
	      return arguments.length ? (y = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : y;
	    };

	    return force;
	  }

	  function nopropagation() {
	    exports.event.stopImmediatePropagation();
	  }

	  function noevent() {
	    exports.event.preventDefault();
	    exports.event.stopImmediatePropagation();
	  }

	  function dragDisable(view) {
	    var root = view.document.documentElement,
	        selection = select(view).on("dragstart.drag", noevent, true);
	    if ("onselectstart" in root) {
	      selection.on("selectstart.drag", noevent, true);
	    } else {
	      root.__noselect = root.style.MozUserSelect;
	      root.style.MozUserSelect = "none";
	    }
	  }

	  function dragEnable(view, noclick) {
	    var root = view.document.documentElement,
	        selection = select(view).on("dragstart.drag", null);
	    if (noclick) {
	      selection.on("click.drag", noevent, true);
	      setTimeout(function() { selection.on("click.drag", null); }, 0);
	    }
	    if ("onselectstart" in root) {
	      selection.on("selectstart.drag", null);
	    } else {
	      root.style.MozUserSelect = root.__noselect;
	      delete root.__noselect;
	    }
	  }

	  function constant$7(x) {
	    return function() {
	      return x;
	    };
	  }

	  function DragEvent(target, type, subject, id, active, x, y, dx, dy, dispatch) {
	    this.target = target;
	    this.type = type;
	    this.subject = subject;
	    this.identifier = id;
	    this.active = active;
	    this.x = x;
	    this.y = y;
	    this.dx = dx;
	    this.dy = dy;
	    this._ = dispatch;
	  }

	  DragEvent.prototype.on = function() {
	    var value = this._.on.apply(this._, arguments);
	    return value === this._ ? this : value;
	  };

	  // Ignore right-click, since that should open the context menu.
	  function defaultFilter() {
	    return !exports.event.button;
	  }

	  function defaultContainer() {
	    return this.parentNode;
	  }

	  function defaultSubject(d) {
	    return d == null ? {x: exports.event.x, y: exports.event.y} : d;
	  }

	  function drag() {
	    var filter = defaultFilter,
	        container = defaultContainer,
	        subject = defaultSubject,
	        gestures = {},
	        listeners = dispatch("start", "drag", "end"),
	        active = 0,
	        mousemoving,
	        touchending;

	    function drag(selection) {
	      selection
	          .on("mousedown.drag", mousedowned)
	          .on("touchstart.drag", touchstarted)
	          .on("touchmove.drag", touchmoved)
	          .on("touchend.drag touchcancel.drag", touchended)
	          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	    }

	    function mousedowned() {
	      if (touchending || !filter.apply(this, arguments)) return;
	      var gesture = beforestart("mouse", container.apply(this, arguments), mouse, this, arguments);
	      if (!gesture) return;
	      select(exports.event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
	      dragDisable(exports.event.view);
	      nopropagation();
	      mousemoving = false;
	      gesture("start");
	    }

	    function mousemoved() {
	      noevent();
	      mousemoving = true;
	      gestures.mouse("drag");
	    }

	    function mouseupped() {
	      select(exports.event.view).on("mousemove.drag mouseup.drag", null);
	      dragEnable(exports.event.view, mousemoving);
	      noevent();
	      gestures.mouse("end");
	    }

	    function touchstarted() {
	      if (!filter.apply(this, arguments)) return;
	      var touches = exports.event.changedTouches,
	          c = container.apply(this, arguments),
	          n = touches.length, i, gesture;

	      for (i = 0; i < n; ++i) {
	        if (gesture = beforestart(touches[i].identifier, c, touch, this, arguments)) {
	          nopropagation();
	          gesture("start");
	        }
	      }
	    }

	    function touchmoved() {
	      var touches = exports.event.changedTouches,
	          n = touches.length, i, gesture;

	      for (i = 0; i < n; ++i) {
	        if (gesture = gestures[touches[i].identifier]) {
	          noevent();
	          gesture("drag");
	        }
	      }
	    }

	    function touchended() {
	      var touches = exports.event.changedTouches,
	          n = touches.length, i, gesture;

	      if (touchending) clearTimeout(touchending);
	      touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
	      for (i = 0; i < n; ++i) {
	        if (gesture = gestures[touches[i].identifier]) {
	          nopropagation();
	          gesture("end");
	        }
	      }
	    }

	    function beforestart(id, container, point, that, args) {
	      var p = point(container, id), s, dx, dy,
	          sublisteners = listeners.copy();

	      if (!customEvent(new DragEvent(drag, "beforestart", s, id, active, p[0], p[1], 0, 0, sublisteners), function() {
	        if ((exports.event.subject = s = subject.apply(that, args)) == null) return false;
	        dx = s.x - p[0] || 0;
	        dy = s.y - p[1] || 0;
	        return true;
	      })) return;

	      return function gesture(type) {
	        var p0 = p, n;
	        switch (type) {
	          case "start": gestures[id] = gesture, n = active++; break;
	          case "end": delete gestures[id], --active; // nobreak
	          case "drag": p = point(container, id), n = active; break;
	        }
	        customEvent(new DragEvent(drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [type, that, args]);
	      };
	    }

	    drag.filter = function(_) {
	      return arguments.length ? (filter = typeof _ === "function" ? _ : constant$7(!!_), drag) : filter;
	    };

	    drag.container = function(_) {
	      return arguments.length ? (container = typeof _ === "function" ? _ : constant$7(_), drag) : container;
	    };

	    drag.subject = function(_) {
	      return arguments.length ? (subject = typeof _ === "function" ? _ : constant$7(_), drag) : subject;
	    };

	    drag.on = function() {
	      var value = listeners.on.apply(listeners, arguments);
	      return value === listeners ? drag : value;
	    };

	    return drag;
	  }

	  function constant$8(x) {
	    return function() {
	      return x;
	    };
	  }

	  function x$4(d) {
	    return d[0];
	  }

	  function y$4(d) {
	    return d[1];
	  }

	  function RedBlackTree() {
	    this._ = null; // root node
	  }

	  function RedBlackNode(node) {
	    node.U = // parent node
	    node.C = // color - true for red, false for black
	    node.L = // left node
	    node.R = // right node
	    node.P = // previous node
	    node.N = null; // next node
	  }

	  RedBlackTree.prototype = {
	    constructor: RedBlackTree,

	    insert: function(after, node) {
	      var parent, grandpa, uncle;

	      if (after) {
	        node.P = after;
	        node.N = after.N;
	        if (after.N) after.N.P = node;
	        after.N = node;
	        if (after.R) {
	          after = after.R;
	          while (after.L) after = after.L;
	          after.L = node;
	        } else {
	          after.R = node;
	        }
	        parent = after;
	      } else if (this._) {
	        after = RedBlackFirst(this._);
	        node.P = null;
	        node.N = after;
	        after.P = after.L = node;
	        parent = after;
	      } else {
	        node.P = node.N = null;
	        this._ = node;
	        parent = null;
	      }
	      node.L = node.R = null;
	      node.U = parent;
	      node.C = true;

	      after = node;
	      while (parent && parent.C) {
	        grandpa = parent.U;
	        if (parent === grandpa.L) {
	          uncle = grandpa.R;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.R) {
	              RedBlackRotateLeft(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            RedBlackRotateRight(this, grandpa);
	          }
	        } else {
	          uncle = grandpa.L;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.L) {
	              RedBlackRotateRight(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            RedBlackRotateLeft(this, grandpa);
	          }
	        }
	        parent = after.U;
	      }
	      this._.C = false;
	    },

	    remove: function(node) {
	      if (node.N) node.N.P = node.P;
	      if (node.P) node.P.N = node.N;
	      node.N = node.P = null;

	      var parent = node.U,
	          sibling,
	          left = node.L,
	          right = node.R,
	          next,
	          red;

	      if (!left) next = right;
	      else if (!right) next = left;
	      else next = RedBlackFirst(right);

	      if (parent) {
	        if (parent.L === node) parent.L = next;
	        else parent.R = next;
	      } else {
	        this._ = next;
	      }

	      if (left && right) {
	        red = next.C;
	        next.C = node.C;
	        next.L = left;
	        left.U = next;
	        if (next !== right) {
	          parent = next.U;
	          next.U = node.U;
	          node = next.R;
	          parent.L = node;
	          next.R = right;
	          right.U = next;
	        } else {
	          next.U = parent;
	          parent = next;
	          node = next.R;
	        }
	      } else {
	        red = node.C;
	        node = next;
	      }

	      if (node) node.U = parent;
	      if (red) return;
	      if (node && node.C) { node.C = false; return; }

	      do {
	        if (node === this._) break;
	        if (node === parent.L) {
	          sibling = parent.R;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            RedBlackRotateLeft(this, parent);
	            sibling = parent.R;
	          }
	          if ((sibling.L && sibling.L.C)
	              || (sibling.R && sibling.R.C)) {
	            if (!sibling.R || !sibling.R.C) {
	              sibling.L.C = false;
	              sibling.C = true;
	              RedBlackRotateRight(this, sibling);
	              sibling = parent.R;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.R.C = false;
	            RedBlackRotateLeft(this, parent);
	            node = this._;
	            break;
	          }
	        } else {
	          sibling = parent.L;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            RedBlackRotateRight(this, parent);
	            sibling = parent.L;
	          }
	          if ((sibling.L && sibling.L.C)
	            || (sibling.R && sibling.R.C)) {
	            if (!sibling.L || !sibling.L.C) {
	              sibling.R.C = false;
	              sibling.C = true;
	              RedBlackRotateLeft(this, sibling);
	              sibling = parent.L;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.L.C = false;
	            RedBlackRotateRight(this, parent);
	            node = this._;
	            break;
	          }
	        }
	        sibling.C = true;
	        node = parent;
	        parent = parent.U;
	      } while (!node.C);

	      if (node) node.C = false;
	    }
	  };

	  function RedBlackRotateLeft(tree, node) {
	    var p = node,
	        q = node.R,
	        parent = p.U;

	    if (parent) {
	      if (parent.L === p) parent.L = q;
	      else parent.R = q;
	    } else {
	      tree._ = q;
	    }

	    q.U = parent;
	    p.U = q;
	    p.R = q.L;
	    if (p.R) p.R.U = p;
	    q.L = p;
	  }

	  function RedBlackRotateRight(tree, node) {
	    var p = node,
	        q = node.L,
	        parent = p.U;

	    if (parent) {
	      if (parent.L === p) parent.L = q;
	      else parent.R = q;
	    } else {
	      tree._ = q;
	    }

	    q.U = parent;
	    p.U = q;
	    p.L = q.R;
	    if (p.L) p.L.U = p;
	    q.R = p;
	  }

	  function RedBlackFirst(node) {
	    while (node.L) node = node.L;
	    return node;
	  }

	  function createEdge(left, right, v0, v1) {
	    var edge = [null, null],
	        index = edges.push(edge) - 1;
	    edge.left = left;
	    edge.right = right;
	    if (v0) setEdgeEnd(edge, left, right, v0);
	    if (v1) setEdgeEnd(edge, right, left, v1);
	    cells[left.index].halfedges.push(index);
	    cells[right.index].halfedges.push(index);
	    return edge;
	  }

	  function createBorderEdge(left, v0, v1) {
	    var edge = [v0, v1];
	    edge.left = left;
	    return edge;
	  }

	  function setEdgeEnd(edge, left, right, vertex) {
	    if (!edge[0] && !edge[1]) {
	      edge[0] = vertex;
	      edge.left = left;
	      edge.right = right;
	    } else if (edge.left === right) {
	      edge[1] = vertex;
	    } else {
	      edge[0] = vertex;
	    }
	  }

	  // Liang–Barsky line clipping.
	  function clipEdge(edge, x0, y0, x1, y1) {
	    var a = edge[0],
	        b = edge[1],
	        ax = a[0],
	        ay = a[1],
	        bx = b[0],
	        by = b[1],
	        t0 = 0,
	        t1 = 1,
	        dx = bx - ax,
	        dy = by - ay,
	        r;

	    r = x0 - ax;
	    if (!dx && r > 0) return;
	    r /= dx;
	    if (dx < 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    } else if (dx > 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    }

	    r = x1 - ax;
	    if (!dx && r < 0) return;
	    r /= dx;
	    if (dx < 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    } else if (dx > 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    }

	    r = y0 - ay;
	    if (!dy && r > 0) return;
	    r /= dy;
	    if (dy < 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    } else if (dy > 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    }

	    r = y1 - ay;
	    if (!dy && r < 0) return;
	    r /= dy;
	    if (dy < 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    } else if (dy > 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    }

	    if (!(t0 > 0) && !(t1 < 1)) return true; // TODO Better check?

	    if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
	    if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
	    return true;
	  }

	  function connectEdge(edge, x0, y0, x1, y1) {
	    var v1 = edge[1];
	    if (v1) return true;

	    var v0 = edge[0],
	        left = edge.left,
	        right = edge.right,
	        lx = left[0],
	        ly = left[1],
	        rx = right[0],
	        ry = right[1],
	        fx = (lx + rx) / 2,
	        fy = (ly + ry) / 2,
	        fm,
	        fb;

	    if (ry === ly) {
	      if (fx < x0 || fx >= x1) return;
	      if (lx > rx) {
	        if (!v0) v0 = [fx, y0];
	        else if (v0[1] >= y1) return;
	        v1 = [fx, y1];
	      } else {
	        if (!v0) v0 = [fx, y1];
	        else if (v0[1] < y0) return;
	        v1 = [fx, y0];
	      }
	    } else {
	      fm = (lx - rx) / (ry - ly);
	      fb = fy - fm * fx;
	      if (fm < -1 || fm > 1) {
	        if (lx > rx) {
	          if (!v0) v0 = [(y0 - fb) / fm, y0];
	          else if (v0[1] >= y1) return;
	          v1 = [(y1 - fb) / fm, y1];
	        } else {
	          if (!v0) v0 = [(y1 - fb) / fm, y1];
	          else if (v0[1] < y0) return;
	          v1 = [(y0 - fb) / fm, y0];
	        }
	      } else {
	        if (ly < ry) {
	          if (!v0) v0 = [x0, fm * x0 + fb];
	          else if (v0[0] >= x1) return;
	          v1 = [x1, fm * x1 + fb];
	        } else {
	          if (!v0) v0 = [x1, fm * x1 + fb];
	          else if (v0[0] < x0) return;
	          v1 = [x0, fm * x0 + fb];
	        }
	      }
	    }

	    edge[0] = v0;
	    edge[1] = v1;
	    return true;
	  }

	  function clipEdges(x0, y0, x1, y1) {
	    var i = edges.length,
	        edge;

	    while (i--) {
	      if (!connectEdge(edge = edges[i], x0, y0, x1, y1)
	          || !clipEdge(edge, x0, y0, x1, y1)
	          || !(Math.abs(edge[0][0] - edge[1][0]) > epsilon$3
	              || Math.abs(edge[0][1] - edge[1][1]) > epsilon$3)) {
	        delete edges[i];
	      }
	    }
	  }

	  function createCell(site) {
	    return cells[site.index] = {
	      site: site,
	      halfedges: []
	    };
	  }

	  function cellHalfedgeAngle(cell, edge) {
	    var site = cell.site,
	        va = edge.left,
	        vb = edge.right;
	    if (site === vb) vb = va, va = site;
	    if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
	    if (site === va) va = edge[1], vb = edge[0];
	    else va = edge[0], vb = edge[1];
	    return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
	  }

	  function cellHalfedgeStart(cell, edge) {
	    return edge[+(edge.left !== cell.site)];
	  }

	  function cellHalfedgeEnd(cell, edge) {
	    return edge[+(edge.left === cell.site)];
	  }

	  function sortCellHalfedges() {
	    for (var i = 0, n = cells.length, cell, halfedges, j, m; i < n; ++i) {
	      if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
	        var index = new Array(m),
	            array = new Array(m);
	        for (j = 0; j < m; ++j) index[j] = j, array[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
	        index.sort(function(i, j) { return array[j] - array[i]; });
	        for (j = 0; j < m; ++j) array[j] = halfedges[index[j]];
	        for (j = 0; j < m; ++j) halfedges[j] = array[j];
	      }
	    }
	  }

	  function clipCells(x0, y0, x1, y1) {
	    var nCells = cells.length,
	        iCell,
	        cell,
	        site,
	        iHalfedge,
	        halfedges,
	        nHalfedges,
	        start,
	        startX,
	        startY,
	        end,
	        endX,
	        endY,
	        cover = true;

	    for (iCell = 0; iCell < nCells; ++iCell) {
	      if (cell = cells[iCell]) {
	        site = cell.site;
	        halfedges = cell.halfedges;
	        iHalfedge = halfedges.length;

	        // Remove any dangling clipped edges.
	        while (iHalfedge--) {
	          if (!edges[halfedges[iHalfedge]]) {
	            halfedges.splice(iHalfedge, 1);
	          }
	        }

	        // Insert any border edges as necessary.
	        iHalfedge = 0, nHalfedges = halfedges.length;
	        while (iHalfedge < nHalfedges) {
	          end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
	          start = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
	          if (Math.abs(endX - startX) > epsilon$3 || Math.abs(endY - startY) > epsilon$3) {
	            halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(site, end,
	                Math.abs(endX - x0) < epsilon$3 && y1 - endY > epsilon$3 ? [x0, Math.abs(startX - x0) < epsilon$3 ? startY : y1]
	                : Math.abs(endY - y1) < epsilon$3 && x1 - endX > epsilon$3 ? [Math.abs(startY - y1) < epsilon$3 ? startX : x1, y1]
	                : Math.abs(endX - x1) < epsilon$3 && endY - y0 > epsilon$3 ? [x1, Math.abs(startX - x1) < epsilon$3 ? startY : y0]
	                : Math.abs(endY - y0) < epsilon$3 && endX - x0 > epsilon$3 ? [Math.abs(startY - y0) < epsilon$3 ? startX : x0, y0]
	                : null)) - 1);
	            ++nHalfedges;
	          }
	        }

	        if (nHalfedges) cover = false;
	      }
	    }

	    // If there weren’t any edges, have the closest site cover the extent.
	    // It doesn’t matter which corner of the extent we measure!
	    if (cover) {
	      var dx, dy, d2, dc = Infinity;

	      for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
	        if (cell = cells[iCell]) {
	          site = cell.site;
	          dx = site[0] - x0;
	          dy = site[1] - y0;
	          d2 = dx * dx + dy * dy;
	          if (d2 < dc) dc = d2, cover = cell;
	        }
	      }

	      if (cover) {
	        var v00 = [x0, y0], v01 = [x0, y1], v11 = [x1, y1], v10 = [x1, y0];
	        cover.halfedges.push(
	          edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1,
	          edges.push(createBorderEdge(site, v01, v11)) - 1,
	          edges.push(createBorderEdge(site, v11, v10)) - 1,
	          edges.push(createBorderEdge(site, v10, v00)) - 1
	        );
	      }
	    }

	    // Lastly delete any cells with no edges; these were entirely clipped.
	    for (iCell = 0; iCell < nCells; ++iCell) {
	      if (cell = cells[iCell]) {
	        if (!cell.halfedges.length) {
	          delete cells[iCell];
	        }
	      }
	    }
	  }

	  var circlePool = [];

	  var firstCircle;

	  function Circle() {
	    RedBlackNode(this);
	    this.x =
	    this.y =
	    this.arc =
	    this.site =
	    this.cy = null;
	  }

	  function attachCircle(arc) {
	    var lArc = arc.P,
	        rArc = arc.N;

	    if (!lArc || !rArc) return;

	    var lSite = lArc.site,
	        cSite = arc.site,
	        rSite = rArc.site;

	    if (lSite === rSite) return;

	    var bx = cSite[0],
	        by = cSite[1],
	        ax = lSite[0] - bx,
	        ay = lSite[1] - by,
	        cx = rSite[0] - bx,
	        cy = rSite[1] - by;

	    var d = 2 * (ax * cy - ay * cx);
	    if (d >= -epsilon2$1) return;

	    var ha = ax * ax + ay * ay,
	        hc = cx * cx + cy * cy,
	        x = (cy * ha - ay * hc) / d,
	        y = (ax * hc - cx * ha) / d;

	    var circle = circlePool.pop() || new Circle;
	    circle.arc = arc;
	    circle.site = cSite;
	    circle.x = x + bx;
	    circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom

	    arc.circle = circle;

	    var before = null,
	        node = circles._;

	    while (node) {
	      if (circle.y < node.y || (circle.y === node.y && circle.x <= node.x)) {
	        if (node.L) node = node.L;
	        else { before = node.P; break; }
	      } else {
	        if (node.R) node = node.R;
	        else { before = node; break; }
	      }
	    }

	    circles.insert(before, circle);
	    if (!before) firstCircle = circle;
	  }

	  function detachCircle(arc) {
	    var circle = arc.circle;
	    if (circle) {
	      if (!circle.P) firstCircle = circle.N;
	      circles.remove(circle);
	      circlePool.push(circle);
	      RedBlackNode(circle);
	      arc.circle = null;
	    }
	  }

	  var beachPool = [];

	  function Beach() {
	    RedBlackNode(this);
	    this.edge =
	    this.site =
	    this.circle = null;
	  }

	  function createBeach(site) {
	    var beach = beachPool.pop() || new Beach;
	    beach.site = site;
	    return beach;
	  }

	  function detachBeach(beach) {
	    detachCircle(beach);
	    beaches.remove(beach);
	    beachPool.push(beach);
	    RedBlackNode(beach);
	  }

	  function removeBeach(beach) {
	    var circle = beach.circle,
	        x = circle.x,
	        y = circle.cy,
	        vertex = [x, y],
	        previous = beach.P,
	        next = beach.N,
	        disappearing = [beach];

	    detachBeach(beach);

	    var lArc = previous;
	    while (lArc.circle
	        && Math.abs(x - lArc.circle.x) < epsilon$3
	        && Math.abs(y - lArc.circle.cy) < epsilon$3) {
	      previous = lArc.P;
	      disappearing.unshift(lArc);
	      detachBeach(lArc);
	      lArc = previous;
	    }

	    disappearing.unshift(lArc);
	    detachCircle(lArc);

	    var rArc = next;
	    while (rArc.circle
	        && Math.abs(x - rArc.circle.x) < epsilon$3
	        && Math.abs(y - rArc.circle.cy) < epsilon$3) {
	      next = rArc.N;
	      disappearing.push(rArc);
	      detachBeach(rArc);
	      rArc = next;
	    }

	    disappearing.push(rArc);
	    detachCircle(rArc);

	    var nArcs = disappearing.length,
	        iArc;
	    for (iArc = 1; iArc < nArcs; ++iArc) {
	      rArc = disappearing[iArc];
	      lArc = disappearing[iArc - 1];
	      setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
	    }

	    lArc = disappearing[0];
	    rArc = disappearing[nArcs - 1];
	    rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);

	    attachCircle(lArc);
	    attachCircle(rArc);
	  }

	  function addBeach(site) {
	    var x = site[0],
	        directrix = site[1],
	        lArc,
	        rArc,
	        dxl,
	        dxr,
	        node = beaches._;

	    while (node) {
	      dxl = leftBreakPoint(node, directrix) - x;
	      if (dxl > epsilon$3) node = node.L; else {
	        dxr = x - rightBreakPoint(node, directrix);
	        if (dxr > epsilon$3) {
	          if (!node.R) {
	            lArc = node;
	            break;
	          }
	          node = node.R;
	        } else {
	          if (dxl > -epsilon$3) {
	            lArc = node.P;
	            rArc = node;
	          } else if (dxr > -epsilon$3) {
	            lArc = node;
	            rArc = node.N;
	          } else {
	            lArc = rArc = node;
	          }
	          break;
	        }
	      }
	    }

	    createCell(site);
	    var newArc = createBeach(site);
	    beaches.insert(lArc, newArc);

	    if (!lArc && !rArc) return;

	    if (lArc === rArc) {
	      detachCircle(lArc);
	      rArc = createBeach(lArc.site);
	      beaches.insert(newArc, rArc);
	      newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
	      attachCircle(lArc);
	      attachCircle(rArc);
	      return;
	    }

	    if (!rArc) { // && lArc
	      newArc.edge = createEdge(lArc.site, newArc.site);
	      return;
	    }

	    // else lArc !== rArc
	    detachCircle(lArc);
	    detachCircle(rArc);

	    var lSite = lArc.site,
	        ax = lSite[0],
	        ay = lSite[1],
	        bx = site[0] - ax,
	        by = site[1] - ay,
	        rSite = rArc.site,
	        cx = rSite[0] - ax,
	        cy = rSite[1] - ay,
	        d = 2 * (bx * cy - by * cx),
	        hb = bx * bx + by * by,
	        hc = cx * cx + cy * cy,
	        vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];

	    setEdgeEnd(rArc.edge, lSite, rSite, vertex);
	    newArc.edge = createEdge(lSite, site, null, vertex);
	    rArc.edge = createEdge(site, rSite, null, vertex);
	    attachCircle(lArc);
	    attachCircle(rArc);
	  }

	  function leftBreakPoint(arc, directrix) {
	    var site = arc.site,
	        rfocx = site[0],
	        rfocy = site[1],
	        pby2 = rfocy - directrix;

	    if (!pby2) return rfocx;

	    var lArc = arc.P;
	    if (!lArc) return -Infinity;

	    site = lArc.site;
	    var lfocx = site[0],
	        lfocy = site[1],
	        plby2 = lfocy - directrix;

	    if (!plby2) return lfocx;

	    var hl = lfocx - rfocx,
	        aby2 = 1 / pby2 - 1 / plby2,
	        b = hl / plby2;

	    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;

	    return (rfocx + lfocx) / 2;
	  }

	  function rightBreakPoint(arc, directrix) {
	    var rArc = arc.N;
	    if (rArc) return leftBreakPoint(rArc, directrix);
	    var site = arc.site;
	    return site[1] === directrix ? site[0] : Infinity;
	  }

	  var epsilon$3 = 1e-6;
	  var epsilon2$1 = 1e-12;
	  var beaches;
	  var cells;
	  var circles;
	  var edges;

	  function triangleArea(a, b, c) {
	    return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
	  }

	  function lexicographic(a, b) {
	    return b[1] - a[1]
	        || b[0] - a[0];
	  }

	  function Diagram(sites, extent) {
	    var site = sites.sort(lexicographic).pop(),
	        x,
	        y,
	        circle;

	    edges = [];
	    cells = new Array(sites.length);
	    beaches = new RedBlackTree;
	    circles = new RedBlackTree;

	    while (true) {
	      circle = firstCircle;
	      if (site && (!circle || site[1] < circle.y || (site[1] === circle.y && site[0] < circle.x))) {
	        if (site[0] !== x || site[1] !== y) {
	          addBeach(site);
	          x = site[0], y = site[1];
	        }
	        site = sites.pop();
	      } else if (circle) {
	        removeBeach(circle.arc);
	      } else {
	        break;
	      }
	    }

	    sortCellHalfedges();

	    if (extent) {
	      var x0 = +extent[0][0],
	          y0 = +extent[0][1],
	          x1 = +extent[1][0],
	          y1 = +extent[1][1];
	      clipEdges(x0, y0, x1, y1);
	      clipCells(x0, y0, x1, y1);
	    }

	    this.edges = edges;
	    this.cells = cells;

	    beaches =
	    circles =
	    edges =
	    cells = null;
	  }

	  Diagram.prototype = {
	    constructor: Diagram,

	    polygons: function() {
	      var edges = this.edges;

	      return this.cells.map(function(cell) {
	        var polygon = cell.halfedges.map(function(i) { return cellHalfedgeStart(cell, edges[i]); });
	        polygon.data = cell.site.data;
	        return polygon;
	      });
	    },

	    triangles: function() {
	      var triangles = [],
	          edges = this.edges;

	      this.cells.forEach(function(cell, i) {
	        var site = cell.site,
	            halfedges = cell.halfedges,
	            j = -1,
	            m = halfedges.length,
	            s0,
	            e1 = edges[halfedges[m - 1]],
	            s1 = e1.left === site ? e1.right : e1.left;

	        while (++j < m) {
	          s0 = s1;
	          e1 = edges[halfedges[j]];
	          s1 = e1.left === site ? e1.right : e1.left;
	          if (i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
	            triangles.push([site.data, s0.data, s1.data]);
	          }
	        }
	      });

	      return triangles;
	    },

	    links: function() {
	      return this.edges.filter(function(edge) {
	        return edge.right;
	      }).map(function(edge) {
	        return {
	          source: edge.left.data,
	          target: edge.right.data
	        };
	      });
	    }
	  }

	  function voronoi() {
	    var x = x$4,
	        y = y$4,
	        extent = null;

	    function voronoi(data) {
	      return new Diagram(data.map(function(d, i) {
	        var s = [Math.round(x(d, i, data) / epsilon$3) * epsilon$3, Math.round(y(d, i, data) / epsilon$3) * epsilon$3];
	        s.index = i;
	        s.data = d;
	        return s;
	      }), extent);
	    }

	    voronoi.polygons = function(data) {
	      return voronoi(data).polygons();
	    };

	    voronoi.links = function(data) {
	      return voronoi(data).links();
	    };

	    voronoi.triangles = function(data) {
	      return voronoi(data).triangles();
	    };

	    voronoi.x = function(_) {
	      return arguments.length ? (x = typeof _ === "function" ? _ : constant$8(+_), voronoi) : x;
	    };

	    voronoi.y = function(_) {
	      return arguments.length ? (y = typeof _ === "function" ? _ : constant$8(+_), voronoi) : y;
	    };

	    voronoi.extent = function(_) {
	      return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
	    };

	    voronoi.size = function(_) {
	      return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
	    };

	    return voronoi;
	  }

	  function constant$9(x) {
	    return function() {
	      return x;
	    };
	  }

	  function ZoomEvent(target, type, transform) {
	    this.target = target;
	    this.type = type;
	    this.transform = transform;
	  }

	  function Transform(k, x, y) {
	    this.k = k;
	    this.x = x;
	    this.y = y;
	  }

	  Transform.prototype = {
	    constructor: Transform,
	    scale: function(k) {
	      return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
	    },
	    translate: function(x, y) {
	      return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
	    },
	    apply: function(point) {
	      return [point[0] * this.k + this.x, point[1] * this.k + this.y];
	    },
	    applyX: function(x) {
	      return x * this.k + this.x;
	    },
	    applyY: function(y) {
	      return y * this.k + this.y;
	    },
	    invert: function(location) {
	      return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
	    },
	    invertX: function(x) {
	      return (x - this.x) / this.k;
	    },
	    invertY: function(y) {
	      return (y - this.y) / this.k;
	    },
	    rescaleX: function(x) {
	      return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
	    },
	    rescaleY: function(y) {
	      return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
	    },
	    toString: function() {
	      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	    }
	  };

	  var identity$6 = new Transform(1, 0, 0);

	  transform.prototype = Transform.prototype;

	  function transform(node) {
	    return node.__zoom || identity$6;
	  }

	  function nopropagation$1() {
	    exports.event.stopImmediatePropagation();
	  }

	  function noevent$1() {
	    exports.event.preventDefault();
	    exports.event.stopImmediatePropagation();
	  }

	  // Ignore right-click, since that should open the context menu.
	  function defaultFilter$1() {
	    return !exports.event.button;
	  }

	  function defaultExtent() {
	    var e = this, w, h;
	    if (e instanceof SVGElement) {
	      e = e.ownerSVGElement || e;
	      w = e.width.baseVal.value;
	      h = e.height.baseVal.value;
	    } else {
	      w = e.clientWidth;
	      h = e.clientHeight;
	    }
	    return [[0, 0], [w, h]];
	  }

	  function defaultTransform() {
	    return this.__zoom || identity$6;
	  }

	  function zoom() {
	    var filter = defaultFilter$1,
	        extent = defaultExtent,
	        k0 = 0,
	        k1 = Infinity,
	        x0 = -k1,
	        x1 = k1,
	        y0 = x0,
	        y1 = x1,
	        duration = 250,
	        gestures = [],
	        listeners = dispatch("start", "zoom", "end"),
	        touchstarting,
	        touchending,
	        touchDelay = 500,
	        wheelDelay = 150;

	    function zoom(selection) {
	      selection
	          .on("wheel.zoom", wheeled)
	          .on("mousedown.zoom", mousedowned)
	          .on("dblclick.zoom", dblclicked)
	          .on("touchstart.zoom", touchstarted)
	          .on("touchmove.zoom", touchmoved)
	          .on("touchend.zoom touchcancel.zoom", touchended)
	          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
	          .property("__zoom", defaultTransform);
	    }

	    zoom.transform = function(collection, transform) {
	      var selection = collection.selection ? collection.selection() : collection;
	      selection.property("__zoom", defaultTransform);
	      if (collection !== selection) {
	        schedule(collection, transform);
	      } else {
	        selection.interrupt().each(function() {
	          gesture(this, arguments)
	              .start()
	              .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
	              .end();
	        });
	      }
	    };

	    zoom.scaleBy = function(selection, k) {
	      zoom.scaleTo(selection, function() {
	        var k0 = this.__zoom.k,
	            k1 = typeof k === "function" ? k.apply(this, arguments) : k;
	        return k0 * k1;
	      });
	    };

	    zoom.scaleTo = function(selection, k) {
	      zoom.transform(selection, function() {
	        var e = extent.apply(this, arguments),
	            t0 = this.__zoom,
	            p0 = centroid(e),
	            p1 = t0.invert(p0),
	            k1 = typeof k === "function" ? k.apply(this, arguments) : k;
	        return constrain(translate(scale(t0, k1), p0, p1), e);
	      });
	    };

	    zoom.translateBy = function(selection, x, y) {
	      zoom.transform(selection, function() {
	        return constrain(this.__zoom.translate(
	          typeof x === "function" ? x.apply(this, arguments) : x,
	          typeof y === "function" ? y.apply(this, arguments) : y
	        ), extent.apply(this, arguments));
	      });
	    };

	    function scale(transform, k) {
	      k = Math.max(k0, Math.min(k1, k));
	      return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
	    }

	    function translate(transform, p0, p1) {
	      var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
	      return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
	    }

	    function constrain(transform, extent) {
	      var dx = Math.min(0, transform.invertX(extent[0][0]) - x0) || Math.max(0, transform.invertX(extent[1][0]) - x1),
	          dy = Math.min(0, transform.invertY(extent[0][1]) - y0) || Math.max(0, transform.invertY(extent[1][1]) - y1);
	      return dx || dy ? transform.translate(dx, dy) : transform;
	    }

	    function centroid(extent) {
	      return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
	    }

	    function schedule(transition, transform, center) {
	      transition
	          .on("start.zoom", function() { gesture(this, arguments).start(); })
	          .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).end(); })
	          .tween("zoom", function() {
	            var that = this,
	                args = arguments,
	                g = gesture(that, args),
	                e = extent.apply(that, args),
	                p = center || centroid(e),
	                w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
	                a = that.__zoom,
	                b = typeof transform === "function" ? transform.apply(that, args) : transform,
	                i = interpolateZoom(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
	            return function(t) {
	              if (t === 1) t = b; // Avoid rounding error on end.
	              else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
	              g.zoom(null, t);
	            };
	          });
	    }

	    function gesture(that, args) {
	      for (var i = 0, n = gestures.length, g; i < n; ++i) {
	        if ((g = gestures[i]).that === that) {
	          return g;
	        }
	      }
	      return new Gesture(that, args);
	    }

	    function Gesture(that, args) {
	      this.that = that;
	      this.args = args;
	      this.index = -1;
	      this.active = 0;
	      this.extent = extent.apply(that, args);
	    }

	    Gesture.prototype = {
	      start: function() {
	        if (++this.active === 1) {
	          this.index = gestures.push(this) - 1;
	          this.emit("start");
	        }
	        return this;
	      },
	      zoom: function(key, transform) {
	        if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
	        if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
	        if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
	        this.that.__zoom = transform;
	        this.emit("zoom");
	        return this;
	      },
	      end: function() {
	        if (--this.active === 0) {
	          gestures.splice(this.index, 1);
	          this.index = -1;
	          this.emit("end");
	        }
	        return this;
	      },
	      emit: function(type) {
	        customEvent(new ZoomEvent(zoom, type, this.that.__zoom), listeners.apply, listeners, [type, this.that, this.args]);
	      }
	    };

	    function wheeled() {
	      if (!filter.apply(this, arguments)) return;
	      var g = gesture(this, arguments),
	          t = this.__zoom,
	          k = Math.max(k0, Math.min(k1, t.k * Math.pow(2, -exports.event.deltaY * (exports.event.deltaMode ? 120 : 1) / 500))),
	          p = mouse(this);

	      // If the mouse is in the same location as before, reuse it.
	      // If there were recent wheel events, reset the wheel idle timeout.
	      if (g.wheel) {
	        if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
	          g.mouse[1] = t.invert(g.mouse[0] = p);
	        }
	        clearTimeout(g.wheel);
	      }

	      // If this wheel event won’t trigger a transform change, ignore it.
	      else if (t.k === k) return;

	      // Otherwise, capture the mouse point and location at the start.
	      else {
	        g.mouse = [p, t.invert(p)];
	        interrupt(this);
	        g.start();
	      }

	      noevent$1();
	      g.wheel = setTimeout(wheelidled, wheelDelay);
	      g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent));

	      function wheelidled() {
	        g.wheel = null;
	        g.end();
	      }
	    }

	    function mousedowned() {
	      if (touchending || !filter.apply(this, arguments)) return;
	      var g = gesture(this, arguments),
	          v = select(exports.event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
	          p = mouse(this);

	      dragDisable(exports.event.view);
	      nopropagation$1();
	      g.mouse = [p, this.__zoom.invert(p)];
	      interrupt(this);
	      g.start();

	      function mousemoved() {
	        noevent$1();
	        g.moved = true;
	        g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = mouse(g.that), g.mouse[1]), g.extent));
	      }

	      function mouseupped() {
	        v.on("mousemove.zoom mouseup.zoom", null);
	        dragEnable(exports.event.view, g.moved);
	        noevent$1();
	        g.end();
	      }
	    }

	    function dblclicked() {
	      if (!filter.apply(this, arguments)) return;
	      var t0 = this.__zoom,
	          p0 = mouse(this),
	          p1 = t0.invert(p0),
	          k1 = t0.k * (exports.event.shiftKey ? 0.5 : 2),
	          t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, arguments));

	      noevent$1();
	      if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0);
	      else select(this).call(zoom.transform, t1);
	    }

	    function touchstarted() {
	      if (!filter.apply(this, arguments)) return;
	      var g = gesture(this, arguments),
	          touches = exports.event.changedTouches,
	          n = touches.length, i, t, p;

	      nopropagation$1();
	      for (i = 0; i < n; ++i) {
	        t = touches[i], p = touch(this, touches, t.identifier);
	        p = [p, this.__zoom.invert(p), t.identifier];
	        if (!g.touch0) g.touch0 = p;
	        else if (!g.touch1) g.touch1 = p;
	      }
	      if (touchstarting) {
	        touchstarting = clearTimeout(touchstarting);
	        if (!g.touch1) return g.end(), dblclicked.apply(this, arguments);
	      }
	      if (exports.event.touches.length === n) {
	        touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
	        interrupt(this);
	        g.start();
	      }
	    }

	    function touchmoved() {
	      var g = gesture(this, arguments),
	          touches = exports.event.changedTouches,
	          n = touches.length, i, t, p, l;

	      noevent$1();
	      if (touchstarting) touchstarting = clearTimeout(touchstarting);
	      for (i = 0; i < n; ++i) {
	        t = touches[i], p = touch(this, touches, t.identifier);
	        if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
	        else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
	      }
	      t = g.that.__zoom;
	      if (g.touch1) {
	        var p0 = g.touch0[0], l0 = g.touch0[1],
	            p1 = g.touch1[0], l1 = g.touch1[1],
	            dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
	            dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
	        t = scale(t, Math.sqrt(dp / dl));
	        p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
	        l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
	      }
	      else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
	      else return;
	      g.zoom("touch", constrain(translate(t, p, l), g.extent));
	    }

	    function touchended() {
	      var g = gesture(this, arguments),
	          touches = exports.event.changedTouches,
	          n = touches.length, i, t;

	      nopropagation$1();
	      if (touchending) clearTimeout(touchending);
	      touchending = setTimeout(function() { touchending = null; }, touchDelay);
	      for (i = 0; i < n; ++i) {
	        t = touches[i];
	        if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
	        else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
	      }
	      if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
	      if (!g.touch0) g.end();
	    }

	    zoom.filter = function(_) {
	      return arguments.length ? (filter = typeof _ === "function" ? _ : constant$9(!!_), zoom) : filter;
	    };

	    zoom.extent = function(_) {
	      return arguments.length ? (extent = typeof _ === "function" ? _ : constant$9([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
	    };

	    zoom.scaleExtent = function(_) {
	      return arguments.length ? (k0 = +_[0], k1 = +_[1], zoom) : [k0, k1];
	    };

	    zoom.translateExtent = function(_) {
	      return arguments.length ? (x0 = +_[0][0], x1 = +_[1][0], y0 = +_[0][1], y1 = +_[1][1], zoom) : [[x0, y0], [x1, y1]];
	    };

	    zoom.duration = function(_) {
	      return arguments.length ? (duration = +_, zoom) : duration;
	    };

	    zoom.on = function() {
	      var value = listeners.on.apply(listeners, arguments);
	      return value === listeners ? zoom : value;
	    };

	    return zoom;
	  }

	  function constant$10(x) {
	    return function() {
	      return x;
	    };
	  }

	  function BrushEvent(target, type, selection) {
	    this.target = target;
	    this.type = type;
	    this.selection = selection;
	  }

	  function nopropagation$2() {
	    exports.event.stopImmediatePropagation();
	  }

	  function noevent$2() {
	    exports.event.preventDefault();
	    exports.event.stopImmediatePropagation();
	  }

	  var MODE_DRAG = {name: "drag"};
	  var MODE_SPACE = {name: "space"};
	  var MODE_HANDLE = {name: "handle"};
	  var MODE_CENTER = {name: "center"};
	  var X = {
	    name: "x",
	    handles: ["e", "w"].map(type$1),
	    input: function(x, e) { return x && [[x[0], e[0][1]], [x[1], e[1][1]]]; },
	    output: function(xy) { return xy && [xy[0][0], xy[1][0]]; }
	  };

	  var Y = {
	    name: "y",
	    handles: ["n", "s"].map(type$1),
	    input: function(y, e) { return y && [[e[0][0], y[0]], [e[1][0], y[1]]]; },
	    output: function(xy) { return xy && [xy[0][1], xy[1][1]]; }
	  };

	  var XY = {
	    name: "xy",
	    handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(type$1),
	    input: function(xy) { return xy; },
	    output: function(xy) { return xy; }
	  };

	  var cursors = {
	    overlay: "crosshair",
	    selection: "move",
	    n: "ns-resize",
	    e: "ew-resize",
	    s: "ns-resize",
	    w: "ew-resize",
	    nw: "nwse-resize",
	    ne: "nesw-resize",
	    se: "nwse-resize",
	    sw: "nesw-resize"
	  };

	  var flipX = {
	    e: "w",
	    w: "e",
	    nw: "ne",
	    ne: "nw",
	    se: "sw",
	    sw: "se"
	  };

	  var flipY = {
	    n: "s",
	    s: "n",
	    nw: "sw",
	    ne: "se",
	    se: "ne",
	    sw: "nw"
	  };

	  var signsX = {
	    overlay: +1,
	    selection: +1,
	    n: null,
	    e: +1,
	    s: null,
	    w: -1,
	    nw: -1,
	    ne: +1,
	    se: +1,
	    sw: -1
	  };

	  var signsY = {
	    overlay: +1,
	    selection: +1,
	    n: -1,
	    e: null,
	    s: +1,
	    w: null,
	    nw: -1,
	    ne: -1,
	    se: +1,
	    sw: +1
	  };

	  function type$1(t) {
	    return {type: t};
	  }

	  // Ignore right-click, since that should open the context menu.
	  function defaultFilter$2() {
	    return !exports.event.button;
	  }

	  function defaultExtent$1() {
	    var svg = this.ownerSVGElement || this;
	    return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
	  }

	  // Like d3.local, but with the name “__brush” rather than auto-generated.
	  function local$1(node) {
	    while (!node.__brush) if (!(node = node.parentNode)) return;
	    return node.__brush;
	  }

	  function empty$1(extent) {
	    return extent[0][0] === extent[1][0]
	        || extent[0][1] === extent[1][1];
	  }

	  function brushSelection(node) {
	    var state = node.__brush;
	    return state ? state.dim.output(state.selection) : null;
	  }

	  function brushX() {
	    return brush$1(X);
	  }

	  function brushY() {
	    return brush$1(Y);
	  }

	  function brush() {
	    return brush$1(XY);
	  }

	  function brush$1(dim) {
	    var extent = defaultExtent$1,
	        filter = defaultFilter$2,
	        listeners = dispatch(brush, "start", "brush", "end"),
	        handleSize = 6,
	        touchending;

	    function brush(group) {
	      var overlay = group
	          .property("__brush", initialize)
	        .selectAll(".overlay")
	        .data([type$1("overlay")]);

	      overlay.enter().append("rect")
	          .attr("class", "overlay")
	          .attr("pointer-events", "all")
	          .attr("cursor", cursors.overlay)
	        .merge(overlay)
	          .each(function() {
	            var extent = local$1(this).extent;
	            select(this)
	                .attr("x", extent[0][0])
	                .attr("y", extent[0][1])
	                .attr("width", extent[1][0] - extent[0][0])
	                .attr("height", extent[1][1] - extent[0][1]);
	          });

	      group.selectAll(".selection")
	        .data([type$1("selection")])
	        .enter().append("rect")
	          .attr("class", "selection")
	          .attr("cursor", cursors.selection)
	          .attr("fill", "#777")
	          .attr("fill-opacity", 0.3)
	          .attr("stroke", "#fff")
	          .attr("shape-rendering", "crispEdges");

	      var handle = group.selectAll(".handle")
	        .data(dim.handles, function(d) { return d.type; });

	      handle.exit().remove();

	      handle.enter().append("rect")
	          .attr("class", function(d) { return "handle handle--" + d.type; })
	          .attr("cursor", function(d) { return cursors[d.type]; });

	      group
	          .each(redraw)
	          .attr("fill", "none")
	          .attr("pointer-events", "all")
	          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
	          .on("mousedown.brush touchstart.brush", started);
	    }

	    brush.move = function(group, selection) {
	      if (group.selection) {
	        group
	            .on("start.brush", function() { emitter(this, arguments).beforestart().start(); })
	            .on("interrupt.brush end.brush", function() { emitter(this, arguments).end(); })
	            .tween("brush", function() {
	              var that = this,
	                  state = that.__brush,
	                  emit = emitter(that, arguments),
	                  selection0 = state.selection,
	                  selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent),
	                  i = interpolate(selection0, selection1);

	              function tween(t) {
	                state.selection = t === 1 && empty$1(selection1) ? null : i(t);
	                redraw.call(that);
	                emit.brush();
	              }

	              return selection0 && selection1 ? tween : tween(1);
	            });
	      } else {
	        group
	            .each(function() {
	              var that = this,
	                  args = arguments,
	                  state = that.__brush,
	                  selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent),
	                  emit = emitter(that, args).beforestart();

	              interrupt(that);
	              state.selection = selection1 == null || empty$1(selection1) ? null : selection1;
	              redraw.call(that);
	              emit.start().brush().end();
	            });
	      }
	    };

	    function redraw() {
	      var group = select(this),
	          selection = local$1(this).selection;

	      if (selection) {
	        group.selectAll(".selection")
	            .style("display", null)
	            .attr("x", selection[0][0])
	            .attr("y", selection[0][1])
	            .attr("width", selection[1][0] - selection[0][0])
	            .attr("height", selection[1][1] - selection[0][1]);

	        group.selectAll(".handle")
	            .style("display", null)
	            .attr("x", function(d) { return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2; })
	            .attr("y", function(d) { return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2; })
	            .attr("width", function(d) { return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize; })
	            .attr("height", function(d) { return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize; });
	      }

	      else {
	        group.selectAll(".selection,.handle")
	            .style("display", "none")
	            .attr("x", null)
	            .attr("y", null)
	            .attr("width", null)
	            .attr("height", null);
	      }
	    }

	    function emitter(that, args) {
	      return that.__brush.emitter || new Emitter(that, args);
	    }

	    function Emitter(that, args) {
	      this.that = that;
	      this.args = args;
	      this.state = that.__brush;
	      this.active = 0;
	    }

	    Emitter.prototype = {
	      beforestart: function() {
	        if (++this.active === 1) this.state.emitter = this, this.starting = true;
	        return this;
	      },
	      start: function() {
	        if (this.starting) this.starting = false, this.emit("start");
	        return this;
	      },
	      brush: function() {
	        this.emit("brush");
	        return this;
	      },
	      end: function() {
	        if (--this.active === 0) delete this.state.emitter, this.emit("end");
	        return this;
	      },
	      emit: function(type) {
	        customEvent(new BrushEvent(brush, type, dim.output(this.state.selection)), listeners.apply, listeners, [type, this.that, this.args]);
	      }
	    };

	    function started() {
	      if (exports.event.touches) { if (exports.event.changedTouches.length < exports.event.touches.length) return noevent$2(); }
	      else if (touchending) return;
	      if (!filter.apply(this, arguments)) return;

	      var that = this,
	          type = exports.event.target.__data__.type,
	          mode = (exports.event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : (exports.event.altKey ? MODE_CENTER : MODE_HANDLE),
	          signX = dim === Y ? null : signsX[type],
	          signY = dim === X ? null : signsY[type],
	          state = local$1(that),
	          extent = state.extent,
	          selection = state.selection,
	          W = extent[0][0], w0, w1,
	          N = extent[0][1], n0, n1,
	          E = extent[1][0], e0, e1,
	          S = extent[1][1], s0, s1,
	          dx,
	          dy,
	          moving,
	          shifting = signX && signY && exports.event.shiftKey,
	          lockX,
	          lockY,
	          point0 = mouse(that),
	          point = point0,
	          emit = emitter(that, arguments).beforestart();

	      if (type === "overlay") {
	        state.selection = selection = [
	          [w0 = dim === Y ? W : point0[0], n0 = dim === X ? N : point0[1]],
	          [e0 = dim === Y ? E : w0, s0 = dim === X ? S : n0]
	        ];
	      } else {
	        w0 = selection[0][0];
	        n0 = selection[0][1];
	        e0 = selection[1][0];
	        s0 = selection[1][1];
	      }

	      w1 = w0;
	      n1 = n0;
	      e1 = e0;
	      s1 = s0;

	      var group = select(that)
	          .attr("pointer-events", "none");

	      var overlay = group.selectAll(".overlay")
	          .attr("cursor", cursors[type]);

	      if (exports.event.touches) {
	        group
	            .on("touchmove.brush", moved, true)
	            .on("touchend.brush touchcancel.brush", ended, true);
	      } else {
	        var view = select(exports.event.view)
	            .on("keydown.brush", keydowned, true)
	            .on("keyup.brush", keyupped, true)
	            .on("mousemove.brush", moved, true)
	            .on("mouseup.brush", ended, true);

	        dragDisable(exports.event.view);
	      }

	      nopropagation$2();
	      interrupt(that);
	      redraw.call(that);
	      emit.start();

	      function moved() {
	        var point1 = mouse(that);
	        if (shifting && !lockX && !lockY) {
	          if (Math.abs(point1[0] - point[0]) > Math.abs(point1[1] - point[1])) lockY = true;
	          else lockX = true;
	        }
	        point = point1;
	        moving = true;
	        noevent$2();
	        move();
	      }

	      function move() {
	        var t;

	        dx = point[0] - point0[0];
	        dy = point[1] - point0[1];

	        switch (mode) {
	          case MODE_SPACE:
	          case MODE_DRAG: {
	            if (signX) dx = Math.max(W - w0, Math.min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
	            if (signY) dy = Math.max(N - n0, Math.min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
	            break;
	          }
	          case MODE_HANDLE: {
	            if (signX < 0) dx = Math.max(W - w0, Math.min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
	            else if (signX > 0) dx = Math.max(W - e0, Math.min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
	            if (signY < 0) dy = Math.max(N - n0, Math.min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
	            else if (signY > 0) dy = Math.max(N - s0, Math.min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
	            break;
	          }
	          case MODE_CENTER: {
	            if (signX) w1 = Math.max(W, Math.min(E, w0 - dx * signX)), e1 = Math.max(W, Math.min(E, e0 + dx * signX));
	            if (signY) n1 = Math.max(N, Math.min(S, n0 - dy * signY)), s1 = Math.max(N, Math.min(S, s0 + dy * signY));
	            break;
	          }
	        }

	        if (e1 < w1) {
	          signX *= -1;
	          t = w0, w0 = e0, e0 = t;
	          t = w1, w1 = e1, e1 = t;
	          if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
	        }

	        if (s1 < n1) {
	          signY *= -1;
	          t = n0, n0 = s0, s0 = t;
	          t = n1, n1 = s1, s1 = t;
	          if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
	        }

	        selection = state.selection; // May be set by brush.move!

	        if (lockX) w1 = selection[0][0], e1 = selection[1][0];
	        if (lockY) n1 = selection[0][1], s1 = selection[1][1];

	        if (selection[0][0] !== w1
	            || selection[0][1] !== n1
	            || selection[1][0] !== e1
	            || selection[1][1] !== s1) {
	          state.selection = [[w1, n1], [e1, s1]];
	          redraw.call(that);
	          emit.brush();
	        }
	      }

	      function ended() {
	        nopropagation$2();
	        if (exports.event.touches) {
	          if (exports.event.touches.length) return;
	          if (touchending) clearTimeout(touchending);
	          touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
	          group.on("touchmove.brush touchend.brush touchcancel.brush", null);
	        } else {
	          dragEnable(exports.event.view, moving);
	          view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
	        }
	        group.attr("pointer-events", "all");
	        overlay.attr("cursor", cursors.overlay);
	        if (empty$1(selection)) state.selection = null, redraw.call(that);
	        emit.end();
	      }

	      function keydowned() {
	        switch (exports.event.keyCode) {
	          case 16: { // SHIFT
	            shifting = signX && signY;
	            break;
	          }
	          case 18: { // ALT
	            if (mode === MODE_HANDLE) {
	              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
	              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
	              mode = MODE_CENTER;
	              move();
	            }
	            break;
	          }
	          case 32: { // SPACE; takes priority over ALT
	            if (mode === MODE_HANDLE || mode === MODE_CENTER) {
	              if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
	              if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
	              mode = MODE_SPACE;
	              overlay.attr("cursor", cursors.selection);
	              move();
	            }
	            break;
	          }
	          default: return;
	        }
	        noevent$2();
	      }

	      function keyupped() {
	        switch (exports.event.keyCode) {
	          case 16: { // SHIFT
	            if (shifting) {
	              lockX = lockY = shifting = false;
	              move();
	            }
	            break;
	          }
	          case 18: { // ALT
	            if (mode === MODE_CENTER) {
	              if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
	              if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
	              mode = MODE_HANDLE;
	              move();
	            }
	            break;
	          }
	          case 32: { // SPACE
	            if (mode === MODE_SPACE) {
	              if (exports.event.altKey) {
	                if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
	                if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
	                mode = MODE_CENTER;
	              } else {
	                if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
	                if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
	                mode = MODE_HANDLE;
	              }
	              overlay.attr("cursor", cursors[type]);
	              move();
	            }
	            break;
	          }
	          default: return;
	        }
	        noevent$2();
	      }
	    }

	    function initialize() {
	      var state = this.__brush || {selection: null};
	      state.extent = extent.apply(this, arguments);
	      state.dim = dim;
	      return state;
	    }

	    brush.extent = function(_) {
	      return arguments.length ? (extent = typeof _ === "function" ? _ : constant$10([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), brush) : extent;
	    };

	    brush.filter = function(_) {
	      return arguments.length ? (filter = typeof _ === "function" ? _ : constant$10(!!_), brush) : filter;
	    };

	    brush.handleSize = function(_) {
	      return arguments.length ? (handleSize = +_, brush) : handleSize;
	    };

	    brush.on = function() {
	      var value = listeners.on.apply(listeners, arguments);
	      return value === listeners ? brush : value;
	    };

	    return brush;
	  }

	  var cos = Math.cos;
	  var sin = Math.sin;
	  var pi$3 = Math.PI;
	  var halfPi$2 = pi$3 / 2;
	  var tau$3 = pi$3 * 2;
	  var max$1 = Math.max;

	  function compareValue(compare) {
	    return function(a, b) {
	      return compare(
	        a.source.value + a.target.value,
	        b.source.value + b.target.value
	      );
	    };
	  }

	  function chord() {
	    var padAngle = 0,
	        sortGroups = null,
	        sortSubgroups = null,
	        sortChords = null;

	    function chord(matrix) {
	      var n = matrix.length,
	          groupSums = [],
	          groupIndex = range(n),
	          subgroupIndex = [],
	          chords = [],
	          groups = chords.groups = new Array(n),
	          subgroups = new Array(n * n),
	          k,
	          x,
	          x0,
	          dx,
	          i,
	          j;

	      // Compute the sum.
	      k = 0, i = -1; while (++i < n) {
	        x = 0, j = -1; while (++j < n) {
	          x += matrix[i][j];
	        }
	        groupSums.push(x);
	        subgroupIndex.push(range(n));
	        k += x;
	      }

	      // Sort groups…
	      if (sortGroups) groupIndex.sort(function(a, b) {
	        return sortGroups(groupSums[a], groupSums[b]);
	      });

	      // Sort subgroups…
	      if (sortSubgroups) subgroupIndex.forEach(function(d, i) {
	        d.sort(function(a, b) {
	          return sortSubgroups(matrix[i][a], matrix[i][b]);
	        });
	      });

	      // Convert the sum to scaling factor for [0, 2pi].
	      // TODO Allow start and end angle to be specified?
	      // TODO Allow padding to be specified as percentage?
	      k = max$1(0, tau$3 - padAngle * n) / k;
	      dx = k ? padAngle : tau$3 / n;

	      // Compute the start and end angle for each group and subgroup.
	      // Note: Opera has a bug reordering object literal properties!
	      x = 0, i = -1; while (++i < n) {
	        x0 = x, j = -1; while (++j < n) {
	          var di = groupIndex[i],
	              dj = subgroupIndex[di][j],
	              v = matrix[di][dj],
	              a0 = x,
	              a1 = x += v * k;
	          subgroups[dj * n + di] = {
	            index: di,
	            subindex: dj,
	            startAngle: a0,
	            endAngle: a1,
	            value: v
	          };
	        }
	        groups[di] = {
	          index: di,
	          startAngle: x0,
	          endAngle: x,
	          value: groupSums[di]
	        };
	        x += dx;
	      }

	      // Generate chords for each (non-empty) subgroup-subgroup link.
	      i = -1; while (++i < n) {
	        j = i - 1; while (++j < n) {
	          var source = subgroups[j * n + i],
	              target = subgroups[i * n + j];
	          if (source.value || target.value) {
	            chords.push(source.value < target.value
	                ? {source: target, target: source}
	                : {source: source, target: target});
	          }
	        }
	      }

	      return sortChords ? chords.sort(sortChords) : chords;
	    }

	    chord.padAngle = function(_) {
	      return arguments.length ? (padAngle = max$1(0, _), chord) : padAngle;
	    };

	    chord.sortGroups = function(_) {
	      return arguments.length ? (sortGroups = _, chord) : sortGroups;
	    };

	    chord.sortSubgroups = function(_) {
	      return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
	    };

	    chord.sortChords = function(_) {
	      return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord) : sortChords && sortChords._;
	    };

	    return chord;
	  }

	  var slice$5 = Array.prototype.slice;

	  function constant$11(x) {
	    return function() {
	      return x;
	    };
	  }

	  function defaultSource(d) {
	    return d.source;
	  }

	  function defaultTarget(d) {
	    return d.target;
	  }

	  function defaultRadius$1(d) {
	    return d.radius;
	  }

	  function defaultStartAngle(d) {
	    return d.startAngle;
	  }

	  function defaultEndAngle(d) {
	    return d.endAngle;
	  }

	  function ribbon() {
	    var source = defaultSource,
	        target = defaultTarget,
	        radius = defaultRadius$1,
	        startAngle = defaultStartAngle,
	        endAngle = defaultEndAngle,
	        context = null;

	    function ribbon() {
	      var buffer,
	          argv = slice$5.call(arguments),
	          s = source.apply(this, argv),
	          t = target.apply(this, argv),
	          sr = +radius.apply(this, (argv[0] = s, argv)),
	          sa0 = startAngle.apply(this, argv) - halfPi$2,
	          sa1 = endAngle.apply(this, argv) - halfPi$2,
	          sx0 = sr * cos(sa0),
	          sy0 = sr * sin(sa0),
	          tr = +radius.apply(this, (argv[0] = t, argv)),
	          ta0 = startAngle.apply(this, argv) - halfPi$2,
	          ta1 = endAngle.apply(this, argv) - halfPi$2;

	      if (!context) context = buffer = path();

	      context.moveTo(sx0, sy0);
	      context.arc(0, 0, sr, sa0, sa1);
	      if (sa0 !== ta0 || sa1 !== ta1) { // TODO sr !== tr?
	        context.quadraticCurveTo(0, 0, tr * cos(ta0), tr * sin(ta0));
	        context.arc(0, 0, tr, ta0, ta1);
	      }
	      context.quadraticCurveTo(0, 0, sx0, sy0);
	      context.closePath();

	      if (buffer) return context = null, buffer + "" || null;
	    }

	    ribbon.radius = function(_) {
	      return arguments.length ? (radius = typeof _ === "function" ? _ : constant$11(+_), ribbon) : radius;
	    };

	    ribbon.startAngle = function(_) {
	      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$11(+_), ribbon) : startAngle;
	    };

	    ribbon.endAngle = function(_) {
	      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$11(+_), ribbon) : endAngle;
	    };

	    ribbon.source = function(_) {
	      return arguments.length ? (source = _, ribbon) : source;
	    };

	    ribbon.target = function(_) {
	      return arguments.length ? (target = _, ribbon) : target;
	    };

	    ribbon.context = function(_) {
	      return arguments.length ? ((context = _ == null ? null : _), ribbon) : context;
	    };

	    return ribbon;
	  }

	  // Adds floating point numbers with twice the normal precision.
	  // Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
	  // Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
	  // 305–363 (1997).
	  // Code adapted from GeographicLib by Charles F. F. Karney,
	  // http://geographiclib.sourceforge.net/

	  function adder() {
	    return new Adder;
	  }

	  function Adder() {
	    this.reset();
	  }

	  Adder.prototype = {
	    constructor: Adder,
	    reset: function() {
	      this.s = // rounded value
	      this.t = 0; // exact error
	    },
	    add: function(y) {
	      add$1(temp, y, this.t);
	      add$1(this, temp.s, this.s);
	      if (this.s) this.t += temp.t;
	      else this.s = temp.t;
	    },
	    valueOf: function() {
	      return this.s;
	    }
	  };

	  var temp = new Adder;

	  function add$1(adder, a, b) {
	    var x = adder.s = a + b,
	        bv = x - a,
	        av = x - bv;
	    adder.t = (a - av) + (b - bv);
	  }

	  var epsilon$4 = 1e-6;
	  var epsilon2$2 = 1e-12;
	  var pi$4 = Math.PI;
	  var halfPi$3 = pi$4 / 2;
	  var quarterPi = pi$4 / 4;
	  var tau$4 = pi$4 * 2;

	  var degrees$1 = 180 / pi$4;
	  var radians = pi$4 / 180;

	  var abs = Math.abs;
	  var atan = Math.atan;
	  var atan2 = Math.atan2;
	  var cos$1 = Math.cos;
	  var ceil = Math.ceil;
	  var exp = Math.exp;
	  var log$1 = Math.log;
	  var pow$1 = Math.pow;
	  var sin$1 = Math.sin;
	  var sign$1 = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
	  var sqrt$1 = Math.sqrt;
	  var tan = Math.tan;

	  function acos(x) {
	    return x > 1 ? 0 : x < -1 ? pi$4 : Math.acos(x);
	  }

	  function asin$1(x) {
	    return x > 1 ? halfPi$3 : x < -1 ? -halfPi$3 : Math.asin(x);
	  }

	  function haversin(x) {
	    return (x = sin$1(x / 2)) * x;
	  }

	  function noop$2() {}

	  function streamGeometry(geometry, stream) {
	    if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
	      streamGeometryType[geometry.type](geometry, stream);
	    }
	  }

	  var streamObjectType = {
	    Feature: function(feature, stream) {
	      streamGeometry(feature.geometry, stream);
	    },
	    FeatureCollection: function(object, stream) {
	      var features = object.features, i = -1, n = features.length;
	      while (++i < n) streamGeometry(features[i].geometry, stream);
	    }
	  };

	  var streamGeometryType = {
	    Sphere: function(object, stream) {
	      stream.sphere();
	    },
	    Point: function(object, stream) {
	      object = object.coordinates;
	      stream.point(object[0], object[1], object[2]);
	    },
	    MultiPoint: function(object, stream) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
	    },
	    LineString: function(object, stream) {
	      streamLine(object.coordinates, stream, 0);
	    },
	    MultiLineString: function(object, stream) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) streamLine(coordinates[i], stream, 0);
	    },
	    Polygon: function(object, stream) {
	      streamPolygon(object.coordinates, stream);
	    },
	    MultiPolygon: function(object, stream) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) streamPolygon(coordinates[i], stream);
	    },
	    GeometryCollection: function(object, stream) {
	      var geometries = object.geometries, i = -1, n = geometries.length;
	      while (++i < n) streamGeometry(geometries[i], stream);
	    }
	  };

	  function streamLine(coordinates, stream, closed) {
	    var i = -1, n = coordinates.length - closed, coordinate;
	    stream.lineStart();
	    while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
	    stream.lineEnd();
	  }

	  function streamPolygon(coordinates, stream) {
	    var i = -1, n = coordinates.length;
	    stream.polygonStart();
	    while (++i < n) streamLine(coordinates[i], stream, 1);
	    stream.polygonEnd();
	  }

	  function geoStream(object, stream) {
	    if (object && streamObjectType.hasOwnProperty(object.type)) {
	      streamObjectType[object.type](object, stream);
	    } else {
	      streamGeometry(object, stream);
	    }
	  }

	  var areaRingSum = adder();

	  var areaSum = adder();
	  var lambda00;
	  var phi00;
	  var lambda0;
	  var cosPhi0;
	  var sinPhi0;
	  var areaStream = {
	    point: noop$2,
	    lineStart: noop$2,
	    lineEnd: noop$2,
	    polygonStart: function() {
	      areaRingSum.reset();
	      areaStream.lineStart = areaRingStart;
	      areaStream.lineEnd = areaRingEnd;
	    },
	    polygonEnd: function() {
	      var areaRing = +areaRingSum;
	      areaSum.add(areaRing < 0 ? tau$4 + areaRing : areaRing);
	      this.lineStart = this.lineEnd = this.point = noop$2;
	    },
	    sphere: function() {
	      areaSum.add(tau$4);
	    }
	  };

	  function areaRingStart() {
	    areaStream.point = areaPointFirst;
	  }

	  function areaRingEnd() {
	    areaPoint(lambda00, phi00);
	  }

	  function areaPointFirst(lambda, phi) {
	    areaStream.point = areaPoint;
	    lambda00 = lambda, phi00 = phi;
	    lambda *= radians, phi *= radians;
	    lambda0 = lambda, cosPhi0 = cos$1(phi = phi / 2 + quarterPi), sinPhi0 = sin$1(phi);
	  }

	  function areaPoint(lambda, phi) {
	    lambda *= radians, phi *= radians;
	    phi = phi / 2 + quarterPi; // half the angular distance from south pole

	    // Spherical excess E for a spherical triangle with vertices: south pole,
	    // previous point, current point.  Uses a formula derived from Cagnoli’s
	    // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
	    var dLambda = lambda - lambda0,
	        sdLambda = dLambda >= 0 ? 1 : -1,
	        adLambda = sdLambda * dLambda,
	        cosPhi = cos$1(phi),
	        sinPhi = sin$1(phi),
	        k = sinPhi0 * sinPhi,
	        u = cosPhi0 * cosPhi + k * cos$1(adLambda),
	        v = k * sdLambda * sin$1(adLambda);
	    areaRingSum.add(atan2(v, u));

	    // Advance the previous points.
	    lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
	  }

	  function area$2(object) {
	    areaSum.reset();
	    geoStream(object, areaStream);
	    return areaSum * 2;
	  }

	  function spherical(cartesian) {
	    return [atan2(cartesian[1], cartesian[0]), asin$1(cartesian[2])];
	  }

	  function cartesian(spherical) {
	    var lambda = spherical[0], phi = spherical[1], cosPhi = cos$1(phi);
	    return [cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi)];
	  }

	  function cartesianDot(a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	  }

	  function cartesianCross(a, b) {
	    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
	  }

	  // TODO return a
	  function cartesianAddInPlace(a, b) {
	    a[0] += b[0], a[1] += b[1], a[2] += b[2];
	  }

	  function cartesianScale(vector, k) {
	    return [vector[0] * k, vector[1] * k, vector[2] * k];
	  }

	  // TODO return d
	  function cartesianNormalizeInPlace(d) {
	    var l = sqrt$1(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
	    d[0] /= l, d[1] /= l, d[2] /= l;
	  }

	var   lambda0$1;
	  var phi0;
	  var lambda1;
	  var phi1;
	  var lambda2;
	var   lambda00$1;
	var   phi00$1;
	  var p0;
	  var deltaSum = adder();
	  var ranges;
	var   range$1;
	  var boundsStream = {
	    point: boundsPoint,
	    lineStart: boundsLineStart,
	    lineEnd: boundsLineEnd,
	    polygonStart: function() {
	      boundsStream.point = boundsRingPoint;
	      boundsStream.lineStart = boundsRingStart;
	      boundsStream.lineEnd = boundsRingEnd;
	      deltaSum.reset();
	      areaStream.polygonStart();
	    },
	    polygonEnd: function() {
	      areaStream.polygonEnd();
	      boundsStream.point = boundsPoint;
	      boundsStream.lineStart = boundsLineStart;
	      boundsStream.lineEnd = boundsLineEnd;
	      if (areaRingSum < 0) lambda0$1 = -(lambda1 = 180), phi0 = -(phi1 = 90);
	      else if (deltaSum > epsilon$4) phi1 = 90;
	      else if (deltaSum < -epsilon$4) phi0 = -90;
	      range$1[0] = lambda0$1, range$1[1] = lambda1;
	    }
	  };

	  function boundsPoint(lambda, phi) {
	    ranges.push(range$1 = [lambda0$1 = lambda, lambda1 = lambda]);
	    if (phi < phi0) phi0 = phi;
	    if (phi > phi1) phi1 = phi;
	  }

	  function linePoint(lambda, phi) {
	    var p = cartesian([lambda * radians, phi * radians]);
	    if (p0) {
	      var normal = cartesianCross(p0, p),
	          equatorial = [normal[1], -normal[0], 0],
	          inflection = cartesianCross(equatorial, normal);
	      cartesianNormalizeInPlace(inflection);
	      inflection = spherical(inflection);
	      var delta = lambda - lambda2,
	          sign = delta > 0 ? 1 : -1,
	          lambdai = inflection[0] * degrees$1 * sign,
	          phii,
	          antimeridian = abs(delta) > 180;
	      if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
	        phii = inflection[1] * degrees$1;
	        if (phii > phi1) phi1 = phii;
	      } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
	        phii = -inflection[1] * degrees$1;
	        if (phii < phi0) phi0 = phii;
	      } else {
	        if (phi < phi0) phi0 = phi;
	        if (phi > phi1) phi1 = phi;
	      }
	      if (antimeridian) {
	        if (lambda < lambda2) {
	          if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
	        } else {
	          if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
	        }
	      } else {
	        if (lambda1 >= lambda0$1) {
	          if (lambda < lambda0$1) lambda0$1 = lambda;
	          if (lambda > lambda1) lambda1 = lambda;
	        } else {
	          if (lambda > lambda2) {
	            if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
	          } else {
	            if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
	          }
	        }
	      }
	    } else {
	      boundsPoint(lambda, phi);
	    }
	    p0 = p, lambda2 = lambda;
	  }

	  function boundsLineStart() {
	    boundsStream.point = linePoint;
	  }

	  function boundsLineEnd() {
	    range$1[0] = lambda0$1, range$1[1] = lambda1;
	    boundsStream.point = boundsPoint;
	    p0 = null;
	  }

	  function boundsRingPoint(lambda, phi) {
	    if (p0) {
	      var delta = lambda - lambda2;
	      deltaSum.add(abs(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
	    } else {
	      lambda00$1 = lambda, phi00$1 = phi;
	    }
	    areaStream.point(lambda, phi);
	    linePoint(lambda, phi);
	  }

	  function boundsRingStart() {
	    areaStream.lineStart();
	  }

	  function boundsRingEnd() {
	    boundsRingPoint(lambda00$1, phi00$1);
	    areaStream.lineEnd();
	    if (abs(deltaSum) > epsilon$4) lambda0$1 = -(lambda1 = 180);
	    range$1[0] = lambda0$1, range$1[1] = lambda1;
	    p0 = null;
	  }

	  // Finds the left-right distance between two longitudes.
	  // This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
	  // the distance between ±180° to be 360°.
	  function angle(lambda0, lambda1) {
	    return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
	  }

	  function rangeCompare(a, b) {
	    return a[0] - b[0];
	  }

	  function rangeContains(range, x) {
	    return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
	  }

	  function bounds(feature) {
	    var i, n, a, b, merged, deltaMax, delta;

	    phi1 = lambda1 = -(lambda0$1 = phi0 = Infinity);
	    ranges = [];
	    geoStream(feature, boundsStream);

	    // First, sort ranges by their minimum longitudes.
	    if (n = ranges.length) {
	      ranges.sort(rangeCompare);

	      // Then, merge any ranges that overlap.
	      for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
	        b = ranges[i];
	        if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
	          if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
	          if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
	        } else {
	          merged.push(a = b);
	        }
	      }

	      // Finally, find the largest gap between the merged ranges.
	      // The final bounding box will be the inverse of this gap.
	      for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
	        b = merged[i];
	        if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0$1 = b[0], lambda1 = a[1];
	      }
	    }

	    ranges = range$1 = null;

	    return lambda0$1 === Infinity || phi0 === Infinity
	        ? [[NaN, NaN], [NaN, NaN]]
	        : [[lambda0$1, phi0], [lambda1, phi1]];
	  }

	  var W0;
	  var W1;
	  var X0;
	  var Y0;
	  var Z0;
	  var X1;
	  var Y1;
	  var Z1;
	  var X2;
	  var Y2;
	  var Z2;
	var   lambda00$2;
	var   phi00$2;
	  var x0;
	  var y0;
	  var z0;
	  // previous point

	  var centroidStream = {
	    sphere: noop$2,
	    point: centroidPoint,
	    lineStart: centroidLineStart,
	    lineEnd: centroidLineEnd,
	    polygonStart: function() {
	      centroidStream.lineStart = centroidRingStart;
	      centroidStream.lineEnd = centroidRingEnd;
	    },
	    polygonEnd: function() {
	      centroidStream.lineStart = centroidLineStart;
	      centroidStream.lineEnd = centroidLineEnd;
	    }
	  };

	  // Arithmetic mean of Cartesian vectors.
	  function centroidPoint(lambda, phi) {
	    lambda *= radians, phi *= radians;
	    var cosPhi = cos$1(phi);
	    centroidPointCartesian(cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi));
	  }

	  function centroidPointCartesian(x, y, z) {
	    ++W0;
	    X0 += (x - X0) / W0;
	    Y0 += (y - Y0) / W0;
	    Z0 += (z - Z0) / W0;
	  }

	  function centroidLineStart() {
	    centroidStream.point = centroidLinePointFirst;
	  }

	  function centroidLinePointFirst(lambda, phi) {
	    lambda *= radians, phi *= radians;
	    var cosPhi = cos$1(phi);
	    x0 = cosPhi * cos$1(lambda);
	    y0 = cosPhi * sin$1(lambda);
	    z0 = sin$1(phi);
	    centroidStream.point = centroidLinePoint;
	    centroidPointCartesian(x0, y0, z0);
	  }

	  function centroidLinePoint(lambda, phi) {
	    lambda *= radians, phi *= radians;
	    var cosPhi = cos$1(phi),
	        x = cosPhi * cos$1(lambda),
	        y = cosPhi * sin$1(lambda),
	        z = sin$1(phi),
	        w = atan2(sqrt$1((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
	    W1 += w;
	    X1 += w * (x0 + (x0 = x));
	    Y1 += w * (y0 + (y0 = y));
	    Z1 += w * (z0 + (z0 = z));
	    centroidPointCartesian(x0, y0, z0);
	  }

	  function centroidLineEnd() {
	    centroidStream.point = centroidPoint;
	  }

	  // See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
	  // J. Applied Mechanics 42, 239 (1975).
	  function centroidRingStart() {
	    centroidStream.point = centroidRingPointFirst;
	  }

	  function centroidRingEnd() {
	    centroidRingPoint(lambda00$2, phi00$2);
	    centroidStream.point = centroidPoint;
	  }

	  function centroidRingPointFirst(lambda, phi) {
	    lambda00$2 = lambda, phi00$2 = phi;
	    lambda *= radians, phi *= radians;
	    centroidStream.point = centroidRingPoint;
	    var cosPhi = cos$1(phi);
	    x0 = cosPhi * cos$1(lambda);
	    y0 = cosPhi * sin$1(lambda);
	    z0 = sin$1(phi);
	    centroidPointCartesian(x0, y0, z0);
	  }

	  function centroidRingPoint(lambda, phi) {
	    lambda *= radians, phi *= radians;
	    var cosPhi = cos$1(phi),
	        x = cosPhi * cos$1(lambda),
	        y = cosPhi * sin$1(lambda),
	        z = sin$1(phi),
	        cx = y0 * z - z0 * y,
	        cy = z0 * x - x0 * z,
	        cz = x0 * y - y0 * x,
	        m = sqrt$1(cx * cx + cy * cy + cz * cz),
	        u = x0 * x + y0 * y + z0 * z,
	        v = m && -acos(u) / m, // area weight
	        w = atan2(m, u); // line weight
	    X2 += v * cx;
	    Y2 += v * cy;
	    Z2 += v * cz;
	    W1 += w;
	    X1 += w * (x0 + (x0 = x));
	    Y1 += w * (y0 + (y0 = y));
	    Z1 += w * (z0 + (z0 = z));
	    centroidPointCartesian(x0, y0, z0);
	  }

	  function centroid$1(object) {
	    W0 = W1 =
	    X0 = Y0 = Z0 =
	    X1 = Y1 = Z1 =
	    X2 = Y2 = Z2 = 0;
	    geoStream(object, centroidStream);

	    var x = X2,
	        y = Y2,
	        z = Z2,
	        m = x * x + y * y + z * z;

	    // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
	    if (m < epsilon2$2) {
	      x = X1, y = Y1, z = Z1;
	      // If the feature has zero length, fall back to arithmetic mean of point vectors.
	      if (W1 < epsilon$4) x = X0, y = Y0, z = Z0;
	      m = x * x + y * y + z * z;
	      // If the feature still has an undefined ccentroid, then return.
	      if (m < epsilon2$2) return [NaN, NaN];
	    }

	    return [atan2(y, x) * degrees$1, asin$1(z / sqrt$1(m)) * degrees$1];
	  }

	  function constant$12(x) {
	    return function() {
	      return x;
	    };
	  }

	  function compose(a, b) {

	    function compose(x, y) {
	      return x = a(x, y), b(x[0], x[1]);
	    }

	    if (a.invert && b.invert) compose.invert = function(x, y) {
	      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
	    };

	    return compose;
	  }

	  function rotationIdentity(lambda, phi) {
	    return [lambda > pi$4 ? lambda - tau$4 : lambda < -pi$4 ? lambda + tau$4 : lambda, phi];
	  }

	  rotationIdentity.invert = rotationIdentity;

	  function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
	    return (deltaLambda %= tau$4) ? (deltaPhi || deltaGamma ? compose(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
	      : rotationLambda(deltaLambda))
	      : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
	      : rotationIdentity);
	  }

	  function forwardRotationLambda(deltaLambda) {
	    return function(lambda, phi) {
	      return lambda += deltaLambda, [lambda > pi$4 ? lambda - tau$4 : lambda < -pi$4 ? lambda + tau$4 : lambda, phi];
	    };
	  }

	  function rotationLambda(deltaLambda) {
	    var rotation = forwardRotationLambda(deltaLambda);
	    rotation.invert = forwardRotationLambda(-deltaLambda);
	    return rotation;
	  }

	  function rotationPhiGamma(deltaPhi, deltaGamma) {
	    var cosDeltaPhi = cos$1(deltaPhi),
	        sinDeltaPhi = sin$1(deltaPhi),
	        cosDeltaGamma = cos$1(deltaGamma),
	        sinDeltaGamma = sin$1(deltaGamma);

	    function rotation(lambda, phi) {
	      var cosPhi = cos$1(phi),
	          x = cos$1(lambda) * cosPhi,
	          y = sin$1(lambda) * cosPhi,
	          z = sin$1(phi),
	          k = z * cosDeltaPhi + x * sinDeltaPhi;
	      return [
	        atan2(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
	        asin$1(k * cosDeltaGamma + y * sinDeltaGamma)
	      ];
	    }

	    rotation.invert = function(lambda, phi) {
	      var cosPhi = cos$1(phi),
	          x = cos$1(lambda) * cosPhi,
	          y = sin$1(lambda) * cosPhi,
	          z = sin$1(phi),
	          k = z * cosDeltaGamma - y * sinDeltaGamma;
	      return [
	        atan2(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
	        asin$1(k * cosDeltaPhi - x * sinDeltaPhi)
	      ];
	    };

	    return rotation;
	  }

	  function rotation(rotate) {
	    rotate = rotateRadians(rotate[0] * radians, rotate[1] * radians, rotate.length > 2 ? rotate[2] * radians : 0);

	    function forward(coordinates) {
	      coordinates = rotate(coordinates[0] * radians, coordinates[1] * radians);
	      return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
	    }

	    forward.invert = function(coordinates) {
	      coordinates = rotate.invert(coordinates[0] * radians, coordinates[1] * radians);
	      return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
	    };

	    return forward;
	  }

	  // Generates a circle centered at [0°, 0°], with a given radius and precision.
	  function circleStream(stream, radius, delta, direction, t0, t1) {
	    if (!delta) return;
	    var cosRadius = cos$1(radius),
	        sinRadius = sin$1(radius),
	        step = direction * delta;
	    if (t0 == null) {
	      t0 = radius + direction * tau$4;
	      t1 = radius - step / 2;
	    } else {
	      t0 = circleRadius(cosRadius, t0);
	      t1 = circleRadius(cosRadius, t1);
	      if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau$4;
	    }
	    for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
	      point = spherical([cosRadius, -sinRadius * cos$1(t), -sinRadius * sin$1(t)]);
	      stream.point(point[0], point[1]);
	    }
	  }

	  // Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
	  function circleRadius(cosRadius, point) {
	    point = cartesian(point), point[0] -= cosRadius;
	    cartesianNormalizeInPlace(point);
	    var radius = acos(-point[1]);
	    return ((-point[2] < 0 ? -radius : radius) + tau$4 - epsilon$4) % tau$4;
	  }

	  function circle$1() {
	    var center = constant$12([0, 0]),
	        radius = constant$12(90),
	        precision = constant$12(6),
	        ring,
	        rotate,
	        stream = {point: point};

	    function point(x, y) {
	      ring.push(x = rotate(x, y));
	      x[0] *= degrees$1, x[1] *= degrees$1;
	    }

	    function circle() {
	      var c = center.apply(this, arguments),
	          r = radius.apply(this, arguments) * radians,
	          p = precision.apply(this, arguments) * radians;
	      ring = [];
	      rotate = rotateRadians(-c[0] * radians, -c[1] * radians, 0).invert;
	      circleStream(stream, r, p, 1);
	      c = {type: "Polygon", coordinates: [ring]};
	      ring = rotate = null;
	      return c;
	    }

	    circle.center = function(_) {
	      return arguments.length ? (center = typeof _ === "function" ? _ : constant$12([+_[0], +_[1]]), circle) : center;
	    };

	    circle.radius = function(_) {
	      return arguments.length ? (radius = typeof _ === "function" ? _ : constant$12(+_), circle) : radius;
	    };

	    circle.precision = function(_) {
	      return arguments.length ? (precision = typeof _ === "function" ? _ : constant$12(+_), circle) : precision;
	    };

	    return circle;
	  }

	  function clipBuffer() {
	    var lines = [],
	        line;
	    return {
	      point: function(x, y) {
	        line.push([x, y]);
	      },
	      lineStart: function() {
	        lines.push(line = []);
	      },
	      lineEnd: noop$2,
	      rejoin: function() {
	        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
	      },
	      result: function() {
	        var result = lines;
	        lines = [];
	        line = null;
	        return result;
	      }
	    };
	  }

	  function clipLine(a, b, x0, y0, x1, y1) {
	    var ax = a[0],
	        ay = a[1],
	        bx = b[0],
	        by = b[1],
	        t0 = 0,
	        t1 = 1,
	        dx = bx - ax,
	        dy = by - ay,
	        r;

	    r = x0 - ax;
	    if (!dx && r > 0) return;
	    r /= dx;
	    if (dx < 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    } else if (dx > 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    }

	    r = x1 - ax;
	    if (!dx && r < 0) return;
	    r /= dx;
	    if (dx < 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    } else if (dx > 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    }

	    r = y0 - ay;
	    if (!dy && r > 0) return;
	    r /= dy;
	    if (dy < 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    } else if (dy > 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    }

	    r = y1 - ay;
	    if (!dy && r < 0) return;
	    r /= dy;
	    if (dy < 0) {
	      if (r > t1) return;
	      if (r > t0) t0 = r;
	    } else if (dy > 0) {
	      if (r < t0) return;
	      if (r < t1) t1 = r;
	    }

	    if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
	    if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
	    return true;
	  }

	  function pointEqual(a, b) {
	    return abs(a[0] - b[0]) < epsilon$4 && abs(a[1] - b[1]) < epsilon$4;
	  }

	  function Intersection(point, points, other, entry) {
	    this.x = point;
	    this.z = points;
	    this.o = other; // another intersection
	    this.e = entry; // is an entry?
	    this.v = false; // visited
	    this.n = this.p = null; // next & previous
	  }

	  // A generalized polygon clipping algorithm: given a polygon that has been cut
	  // into its visible line segments, and rejoins the segments by interpolating
	  // along the clip edge.
	  function clipPolygon(segments, compareIntersection, startInside, interpolate, stream) {
	    var subject = [],
	        clip = [],
	        i,
	        n;

	    segments.forEach(function(segment) {
	      if ((n = segment.length - 1) <= 0) return;
	      var n, p0 = segment[0], p1 = segment[n], x;

	      // If the first and last points of a segment are coincident, then treat as a
	      // closed ring. TODO if all rings are closed, then the winding order of the
	      // exterior ring should be checked.
	      if (pointEqual(p0, p1)) {
	        stream.lineStart();
	        for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
	        stream.lineEnd();
	        return;
	      }

	      subject.push(x = new Intersection(p0, segment, null, true));
	      clip.push(x.o = new Intersection(p0, null, x, false));
	      subject.push(x = new Intersection(p1, segment, null, false));
	      clip.push(x.o = new Intersection(p1, null, x, true));
	    });

	    if (!subject.length) return;

	    clip.sort(compareIntersection);
	    link$1(subject);
	    link$1(clip);

	    for (i = 0, n = clip.length; i < n; ++i) {
	      clip[i].e = startInside = !startInside;
	    }

	    var start = subject[0],
	        points,
	        point;

	    while (1) {
	      // Find first unvisited intersection.
	      var current = start,
	          isSubject = true;
	      while (current.v) if ((current = current.n) === start) return;
	      points = current.z;
	      stream.lineStart();
	      do {
	        current.v = current.o.v = true;
	        if (current.e) {
	          if (isSubject) {
	            for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.n.x, 1, stream);
	          }
	          current = current.n;
	        } else {
	          if (isSubject) {
	            points = current.p.z;
	            for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.p.x, -1, stream);
	          }
	          current = current.p;
	        }
	        current = current.o;
	        points = current.z;
	        isSubject = !isSubject;
	      } while (!current.v);
	      stream.lineEnd();
	    }
	  }

	  function link$1(array) {
	    if (!(n = array.length)) return;
	    var n,
	        i = 0,
	        a = array[0],
	        b;
	    while (++i < n) {
	      a.n = b = array[i];
	      b.p = a;
	      a = b;
	    }
	    a.n = b = array[0];
	    b.p = a;
	  }

	  var clipMax = 1e9;
	  var clipMin = -clipMax;
	  // TODO Use d3-polygon’s polygonContains here for the ring check?
	  // TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

	  function clipExtent(x0, y0, x1, y1) {

	    function visible(x, y) {
	      return x0 <= x && x <= x1 && y0 <= y && y <= y1;
	    }

	    function interpolate(from, to, direction, stream) {
	      var a = 0, a1 = 0;
	      if (from == null
	          || (a = corner(from, direction)) !== (a1 = corner(to, direction))
	          || comparePoint(from, to) < 0 ^ direction > 0) {
	        do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
	        while ((a = (a + direction + 4) % 4) !== a1);
	      } else {
	        stream.point(to[0], to[1]);
	      }
	    }

	    function corner(p, direction) {
	      return abs(p[0] - x0) < epsilon$4 ? direction > 0 ? 0 : 3
	          : abs(p[0] - x1) < epsilon$4 ? direction > 0 ? 2 : 1
	          : abs(p[1] - y0) < epsilon$4 ? direction > 0 ? 1 : 0
	          : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
	    }

	    function compareIntersection(a, b) {
	      return comparePoint(a.x, b.x);
	    }

	    function comparePoint(a, b) {
	      var ca = corner(a, 1),
	          cb = corner(b, 1);
	      return ca !== cb ? ca - cb
	          : ca === 0 ? b[1] - a[1]
	          : ca === 1 ? a[0] - b[0]
	          : ca === 2 ? a[1] - b[1]
	          : b[0] - a[0];
	    }

	    return function(stream) {
	      var activeStream = stream,
	          bufferStream = clipBuffer(),
	          segments,
	          polygon,
	          ring,
	          x__, y__, v__, // first point
	          x_, y_, v_, // previous point
	          first,
	          clean;

	      var clipStream = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: polygonStart,
	        polygonEnd: polygonEnd
	      };

	      function point(x, y) {
	        if (visible(x, y)) activeStream.point(x, y);
	      }

	      function polygonInside() {
	        var winding = 0;

	        for (var i = 0, n = polygon.length; i < n; ++i) {
	          for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
	            a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
	            if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
	            else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
	          }
	        }

	        return winding;
	      }

	      // Buffer geometry within a polygon and then clip it en masse.
	      function polygonStart() {
	        activeStream = bufferStream, segments = [], polygon = [], clean = true;
	      }

	      function polygonEnd() {
	        var startInside = polygonInside(),
	            cleanInside = clean && startInside,
	            visible = (segments = merge(segments)).length;
	        if (cleanInside || visible) {
	          stream.polygonStart();
	          if (cleanInside) {
	            stream.lineStart();
	            interpolate(null, null, 1, stream);
	            stream.lineEnd();
	          }
	          if (visible) {
	            clipPolygon(segments, compareIntersection, startInside, interpolate, stream);
	          }
	          stream.polygonEnd();
	        }
	        activeStream = stream, segments = polygon = ring = null;
	      }

	      function lineStart() {
	        clipStream.point = linePoint;
	        if (polygon) polygon.push(ring = []);
	        first = true;
	        v_ = false;
	        x_ = y_ = NaN;
	      }

	      // TODO rather than special-case polygons, simply handle them separately.
	      // Ideally, coincident intersection points should be jittered to avoid
	      // clipping issues.
	      function lineEnd() {
	        if (segments) {
	          linePoint(x__, y__);
	          if (v__ && v_) bufferStream.rejoin();
	          segments.push(bufferStream.result());
	        }
	        clipStream.point = point;
	        if (v_) activeStream.lineEnd();
	      }

	      function linePoint(x, y) {
	        var v = visible(x, y);
	        if (polygon) ring.push([x, y]);
	        if (first) {
	          x__ = x, y__ = y, v__ = v;
	          first = false;
	          if (v) {
	            activeStream.lineStart();
	            activeStream.point(x, y);
	          }
	        } else {
	          if (v && v_) activeStream.point(x, y);
	          else {
	            var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
	                b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
	            if (clipLine(a, b, x0, y0, x1, y1)) {
	              if (!v_) {
	                activeStream.lineStart();
	                activeStream.point(a[0], a[1]);
	              }
	              activeStream.point(b[0], b[1]);
	              if (!v) activeStream.lineEnd();
	              clean = false;
	            } else if (v) {
	              activeStream.lineStart();
	              activeStream.point(x, y);
	              clean = false;
	            }
	          }
	        }
	        x_ = x, y_ = y, v_ = v;
	      }

	      return clipStream;
	    };
	  }

	  function extent$1() {
	    var x0 = 0,
	        y0 = 0,
	        x1 = 960,
	        y1 = 500,
	        cache,
	        cacheStream,
	        clip;

	    return clip = {
	      stream: function(stream) {
	        return cache && cacheStream === stream ? cache : cache = clipExtent(x0, y0, x1, y1)(cacheStream = stream);
	      },
	      extent: function(_) {
	        return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
	      }
	    };
	  }

	  var lengthSum = adder();
	var   lambda0$2;
	var   sinPhi0$1;
	var   cosPhi0$1;
	  var lengthStream = {
	    sphere: noop$2,
	    point: noop$2,
	    lineStart: lengthLineStart,
	    lineEnd: noop$2,
	    polygonStart: noop$2,
	    polygonEnd: noop$2
	  };

	  function lengthLineStart() {
	    lengthStream.point = lengthPointFirst;
	    lengthStream.lineEnd = lengthLineEnd;
	  }

	  function lengthLineEnd() {
	    lengthStream.point = lengthStream.lineEnd = noop$2;
	  }

	  function lengthPointFirst(lambda, phi) {
	    lambda *= radians, phi *= radians;
	    lambda0$2 = lambda, sinPhi0$1 = sin$1(phi), cosPhi0$1 = cos$1(phi);
	    lengthStream.point = lengthPoint;
	  }

	  function lengthPoint(lambda, phi) {
	    lambda *= radians, phi *= radians;
	    var sinPhi = sin$1(phi),
	        cosPhi = cos$1(phi),
	        delta = abs(lambda - lambda0$2),
	        cosDelta = cos$1(delta),
	        sinDelta = sin$1(delta),
	        x = cosPhi * sinDelta,
	        y = cosPhi0$1 * sinPhi - sinPhi0$1 * cosPhi * cosDelta,
	        z = sinPhi0$1 * sinPhi + cosPhi0$1 * cosPhi * cosDelta;
	    lengthSum.add(atan2(sqrt$1(x * x + y * y), z));
	    lambda0$2 = lambda, sinPhi0$1 = sinPhi, cosPhi0$1 = cosPhi;
	  }

	  function length$2(object) {
	    lengthSum.reset();
	    geoStream(object, lengthStream);
	    return +lengthSum;
	  }

	  var coordinates = [null, null];
	var   object$1 = {type: "LineString", coordinates: coordinates};
	  function distance(a, b) {
	    coordinates[0] = a;
	    coordinates[1] = b;
	    return length$2(object$1);
	  }

	  function graticuleX(y0, y1, dy) {
	    var y = range(y0, y1 - epsilon$4, dy).concat(y1);
	    return function(x) { return y.map(function(y) { return [x, y]; }); };
	  }

	  function graticuleY(x0, x1, dx) {
	    var x = range(x0, x1 - epsilon$4, dx).concat(x1);
	    return function(y) { return x.map(function(x) { return [x, y]; }); };
	  }

	  function graticule() {
	    var x1, x0, X1, X0,
	        y1, y0, Y1, Y0,
	        dx = 10, dy = dx, DX = 90, DY = 360,
	        x, y, X, Y,
	        precision = 2.5;

	    function graticule() {
	      return {type: "MultiLineString", coordinates: lines()};
	    }

	    function lines() {
	      return range(ceil(X0 / DX) * DX, X1, DX).map(X)
	          .concat(range(ceil(Y0 / DY) * DY, Y1, DY).map(Y))
	          .concat(range(ceil(x0 / dx) * dx, x1, dx).filter(function(x) { return abs(x % DX) > epsilon$4; }).map(x))
	          .concat(range(ceil(y0 / dy) * dy, y1, dy).filter(function(y) { return abs(y % DY) > epsilon$4; }).map(y));
	    }

	    graticule.lines = function() {
	      return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
	    };

	    graticule.outline = function() {
	      return {
	        type: "Polygon",
	        coordinates: [
	          X(X0).concat(
	          Y(Y1).slice(1),
	          X(X1).reverse().slice(1),
	          Y(Y0).reverse().slice(1))
	        ]
	      };
	    };

	    graticule.extent = function(_) {
	      if (!arguments.length) return graticule.extentMinor();
	      return graticule.extentMajor(_).extentMinor(_);
	    };

	    graticule.extentMajor = function(_) {
	      if (!arguments.length) return [[X0, Y0], [X1, Y1]];
	      X0 = +_[0][0], X1 = +_[1][0];
	      Y0 = +_[0][1], Y1 = +_[1][1];
	      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
	      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
	      return graticule.precision(precision);
	    };

	    graticule.extentMinor = function(_) {
	      if (!arguments.length) return [[x0, y0], [x1, y1]];
	      x0 = +_[0][0], x1 = +_[1][0];
	      y0 = +_[0][1], y1 = +_[1][1];
	      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
	      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
	      return graticule.precision(precision);
	    };

	    graticule.step = function(_) {
	      if (!arguments.length) return graticule.stepMinor();
	      return graticule.stepMajor(_).stepMinor(_);
	    };

	    graticule.stepMajor = function(_) {
	      if (!arguments.length) return [DX, DY];
	      DX = +_[0], DY = +_[1];
	      return graticule;
	    };

	    graticule.stepMinor = function(_) {
	      if (!arguments.length) return [dx, dy];
	      dx = +_[0], dy = +_[1];
	      return graticule;
	    };

	    graticule.precision = function(_) {
	      if (!arguments.length) return precision;
	      precision = +_;
	      x = graticuleX(y0, y1, 90);
	      y = graticuleY(x0, x1, precision);
	      X = graticuleX(Y0, Y1, 90);
	      Y = graticuleY(X0, X1, precision);
	      return graticule;
	    };

	    return graticule
	        .extentMajor([[-180, -90 + epsilon$4], [180, 90 - epsilon$4]])
	        .extentMinor([[-180, -80 - epsilon$4], [180, 80 + epsilon$4]]);
	  }

	  function interpolate$2(a, b) {
	    var x0 = a[0] * radians,
	        y0 = a[1] * radians,
	        x1 = b[0] * radians,
	        y1 = b[1] * radians,
	        cy0 = cos$1(y0),
	        sy0 = sin$1(y0),
	        cy1 = cos$1(y1),
	        sy1 = sin$1(y1),
	        kx0 = cy0 * cos$1(x0),
	        ky0 = cy0 * sin$1(x0),
	        kx1 = cy1 * cos$1(x1),
	        ky1 = cy1 * sin$1(x1),
	        d = 2 * asin$1(sqrt$1(haversin(y1 - y0) + cy0 * cy1 * haversin(x1 - x0))),
	        k = sin$1(d);

	    var interpolate = d ? function(t) {
	      var B = sin$1(t *= d) / k,
	          A = sin$1(d - t) / k,
	          x = A * kx0 + B * kx1,
	          y = A * ky0 + B * ky1,
	          z = A * sy0 + B * sy1;
	      return [
	        atan2(y, x) * degrees$1,
	        atan2(z, sqrt$1(x * x + y * y)) * degrees$1
	      ];
	    } : function() {
	      return [x0 * degrees$1, y0 * degrees$1];
	    };

	    interpolate.distance = d;

	    return interpolate;
	  }

	  function identity$7(x) {
	    return x;
	  }

	var   areaSum$1 = adder();
	var   areaRingSum$1 = adder();
	  var x00;
	  var y00;
	var   x0$1;
	var   y0$1;
	  var areaStream$1 = {
	    point: noop$2,
	    lineStart: noop$2,
	    lineEnd: noop$2,
	    polygonStart: function() {
	      areaStream$1.lineStart = areaRingStart$1;
	      areaStream$1.lineEnd = areaRingEnd$1;
	    },
	    polygonEnd: function() {
	      areaStream$1.lineStart = areaStream$1.lineEnd = areaStream$1.point = noop$2;
	      areaSum$1.add(abs(areaRingSum$1));
	      areaRingSum$1.reset();
	    },
	    result: function() {
	      var area = areaSum$1 / 2;
	      areaSum$1.reset();
	      return area;
	    }
	  };

	  function areaRingStart$1() {
	    areaStream$1.point = areaPointFirst$1;
	  }

	  function areaPointFirst$1(x, y) {
	    areaStream$1.point = areaPoint$1;
	    x00 = x0$1 = x, y00 = y0$1 = y;
	  }

	  function areaPoint$1(x, y) {
	    areaRingSum$1.add(y0$1 * x - x0$1 * y);
	    x0$1 = x, y0$1 = y;
	  }

	  function areaRingEnd$1() {
	    areaPoint$1(x00, y00);
	  }

	var   x0$2 = Infinity;
	var   y0$2 = x0$2;
	  var x1 = -x0$2;
	  var y1 = x1;
	  var boundsStream$1 = {
	    point: boundsPoint$1,
	    lineStart: noop$2,
	    lineEnd: noop$2,
	    polygonStart: noop$2,
	    polygonEnd: noop$2,
	    result: function() {
	      var bounds = [[x0$2, y0$2], [x1, y1]];
	      x1 = y1 = -(y0$2 = x0$2 = Infinity);
	      return bounds;
	    }
	  };

	  function boundsPoint$1(x, y) {
	    if (x < x0$2) x0$2 = x;
	    if (x > x1) x1 = x;
	    if (y < y0$2) y0$2 = y;
	    if (y > y1) y1 = y;
	  }

	var   X0$1 = 0;
	var   Y0$1 = 0;
	var   Z0$1 = 0;
	var   X1$1 = 0;
	var   Y1$1 = 0;
	var   Z1$1 = 0;
	var   X2$1 = 0;
	var   Y2$1 = 0;
	var   Z2$1 = 0;
	var   x00$1;
	var   y00$1;
	var   x0$3;
	var   y0$3;
	  var centroidStream$1 = {
	    point: centroidPoint$1,
	    lineStart: centroidLineStart$1,
	    lineEnd: centroidLineEnd$1,
	    polygonStart: function() {
	      centroidStream$1.lineStart = centroidRingStart$1;
	      centroidStream$1.lineEnd = centroidRingEnd$1;
	    },
	    polygonEnd: function() {
	      centroidStream$1.point = centroidPoint$1;
	      centroidStream$1.lineStart = centroidLineStart$1;
	      centroidStream$1.lineEnd = centroidLineEnd$1;
	    },
	    result: function() {
	      var centroid = Z2$1 ? [X2$1 / Z2$1, Y2$1 / Z2$1]
	          : Z1$1 ? [X1$1 / Z1$1, Y1$1 / Z1$1]
	          : Z0$1 ? [X0$1 / Z0$1, Y0$1 / Z0$1]
	          : [NaN, NaN];
	      X0$1 = Y0$1 = Z0$1 =
	      X1$1 = Y1$1 = Z1$1 =
	      X2$1 = Y2$1 = Z2$1 = 0;
	      return centroid;
	    }
	  };

	  function centroidPoint$1(x, y) {
	    X0$1 += x;
	    Y0$1 += y;
	    ++Z0$1;
	  }

	  function centroidLineStart$1() {
	    centroidStream$1.point = centroidPointFirstLine;
	  }

	  function centroidPointFirstLine(x, y) {
	    centroidStream$1.point = centroidPointLine;
	    centroidPoint$1(x0$3 = x, y0$3 = y);
	  }

	  function centroidPointLine(x, y) {
	    var dx = x - x0$3, dy = y - y0$3, z = sqrt$1(dx * dx + dy * dy);
	    X1$1 += z * (x0$3 + x) / 2;
	    Y1$1 += z * (y0$3 + y) / 2;
	    Z1$1 += z;
	    centroidPoint$1(x0$3 = x, y0$3 = y);
	  }

	  function centroidLineEnd$1() {
	    centroidStream$1.point = centroidPoint$1;
	  }

	  function centroidRingStart$1() {
	    centroidStream$1.point = centroidPointFirstRing;
	  }

	  function centroidRingEnd$1() {
	    centroidPointRing(x00$1, y00$1);
	  }

	  function centroidPointFirstRing(x, y) {
	    centroidStream$1.point = centroidPointRing;
	    centroidPoint$1(x00$1 = x0$3 = x, y00$1 = y0$3 = y);
	  }

	  function centroidPointRing(x, y) {
	    var dx = x - x0$3,
	        dy = y - y0$3,
	        z = sqrt$1(dx * dx + dy * dy);

	    X1$1 += z * (x0$3 + x) / 2;
	    Y1$1 += z * (y0$3 + y) / 2;
	    Z1$1 += z;

	    z = y0$3 * x - x0$3 * y;
	    X2$1 += z * (x0$3 + x);
	    Y2$1 += z * (y0$3 + y);
	    Z2$1 += z * 3;
	    centroidPoint$1(x0$3 = x, y0$3 = y);
	  }

	  function PathContext(context) {
	    var pointRadius = 4.5;

	    var stream = {
	      point: point,

	      // While inside a line, override point to moveTo then lineTo.
	      lineStart: function() { stream.point = pointLineStart; },
	      lineEnd: lineEnd,

	      // While inside a polygon, override lineEnd to closePath.
	      polygonStart: function() { stream.lineEnd = lineEndPolygon; },
	      polygonEnd: function() { stream.lineEnd = lineEnd; stream.point = point; },

	      pointRadius: function(_) {
	        pointRadius = _;
	        return stream;
	      },

	      result: noop$2
	    };

	    function point(x, y) {
	      context.moveTo(x + pointRadius, y);
	      context.arc(x, y, pointRadius, 0, tau$4);
	    }

	    function pointLineStart(x, y) {
	      context.moveTo(x, y);
	      stream.point = pointLine;
	    }

	    function pointLine(x, y) {
	      context.lineTo(x, y);
	    }

	    function lineEnd() {
	      stream.point = point;
	    }

	    function lineEndPolygon() {
	      context.closePath();
	    }

	    return stream;
	  }

	  function PathString() {
	    var pointCircle = circle$2(4.5),
	        string = [];

	    var stream = {
	      point: point,
	      lineStart: lineStart,
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        stream.lineEnd = lineEndPolygon;
	      },
	      polygonEnd: function() {
	        stream.lineEnd = lineEnd;
	        stream.point = point;
	      },
	      pointRadius: function(_) {
	        pointCircle = circle$2(_);
	        return stream;
	      },
	      result: function() {
	        if (string.length) {
	          var result = string.join("");
	          string = [];
	          return result;
	        }
	      }
	    };

	    function point(x, y) {
	      string.push("M", x, ",", y, pointCircle);
	    }

	    function pointLineStart(x, y) {
	      string.push("M", x, ",", y);
	      stream.point = pointLine;
	    }

	    function pointLine(x, y) {
	      string.push("L", x, ",", y);
	    }

	    function lineStart() {
	      stream.point = pointLineStart;
	    }

	    function lineEnd() {
	      stream.point = point;
	    }

	    function lineEndPolygon() {
	      string.push("Z");
	    }

	    return stream;
	  }

	  function circle$2(radius) {
	    return "m0," + radius
	        + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
	        + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
	        + "z";
	  }

	  function index$3() {
	    var pointRadius = 4.5,
	        projection,
	        projectionStream,
	        context,
	        contextStream;

	    function path(object) {
	      if (object) {
	        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
	        geoStream(object, projectionStream(contextStream));
	      }
	      return contextStream.result();
	    }

	    path.area = function(object) {
	      geoStream(object, projectionStream(areaStream$1));
	      return areaStream$1.result();
	    };

	    path.bounds = function(object) {
	      geoStream(object, projectionStream(boundsStream$1));
	      return boundsStream$1.result();
	    };

	    path.centroid = function(object) {
	      geoStream(object, projectionStream(centroidStream$1));
	      return centroidStream$1.result();
	    };

	    path.projection = function(_) {
	      return arguments.length ? (projectionStream = (projection = _) == null ? identity$7 : _.stream, path) : projection;
	    };

	    path.context = function(_) {
	      if (!arguments.length) return context;
	      contextStream = (context = _) == null ? new PathString : new PathContext(_);
	      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
	      return path;
	    };

	    path.pointRadius = function(_) {
	      if (!arguments.length) return pointRadius;
	      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
	      return path;
	    };

	    return path.projection(null).context(null);
	  }

	  var sum$2 = adder();

	  function polygonContains(polygon, point) {
	    var lambda = point[0],
	        phi = point[1],
	        normal = [sin$1(lambda), -cos$1(lambda), 0],
	        angle = 0,
	        winding = 0;

	    sum$2.reset();

	    for (var i = 0, n = polygon.length; i < n; ++i) {
	      if (!(m = (ring = polygon[i]).length)) continue;
	      var ring,
	          m,
	          point0 = ring[m - 1],
	          lambda0 = point0[0],
	          phi0 = point0[1] / 2 + quarterPi,
	          sinPhi0 = sin$1(phi0),
	          cosPhi0 = cos$1(phi0);

	      for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
	        var point1 = ring[j],
	            lambda1 = point1[0],
	            phi1 = point1[1] / 2 + quarterPi,
	            sinPhi1 = sin$1(phi1),
	            cosPhi1 = cos$1(phi1),
	            delta = lambda1 - lambda0,
	            sign = delta >= 0 ? 1 : -1,
	            absDelta = sign * delta,
	            antimeridian = absDelta > pi$4,
	            k = sinPhi0 * sinPhi1;

	        sum$2.add(atan2(k * sign * sin$1(absDelta), cosPhi0 * cosPhi1 + k * cos$1(absDelta)));
	        angle += antimeridian ? delta + sign * tau$4 : delta;

	        // Are the longitudes either side of the point’s meridian (lambda),
	        // and are the latitudes smaller than the parallel (phi)?
	        if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
	          var arc = cartesianCross(cartesian(point0), cartesian(point1));
	          cartesianNormalizeInPlace(arc);
	          var intersection = cartesianCross(normal, arc);
	          cartesianNormalizeInPlace(intersection);
	          var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin$1(intersection[2]);
	          if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
	            winding += antimeridian ^ delta >= 0 ? 1 : -1;
	          }
	        }
	      }
	    }

	    // First, determine whether the South pole is inside or outside:
	    //
	    // It is inside if:
	    // * the polygon winds around it in a clockwise direction.
	    // * the polygon does not (cumulatively) wind around it, but has a negative
	    //   (counter-clockwise) area.
	    //
	    // Second, count the (signed) number of times a segment crosses a lambda
	    // from the point to the South pole.  If it is zero, then the point is the
	    // same side as the South pole.

	    return (angle < -epsilon$4 || angle < epsilon$4 && sum$2 < -epsilon$4) ^ (winding & 1);
	  }

	  function clip(pointVisible, clipLine, interpolate, start) {
	    return function(rotate, sink) {
	      var line = clipLine(sink),
	          rotatedStart = rotate.invert(start[0], start[1]),
	          ringBuffer = clipBuffer(),
	          ringSink = clipLine(ringBuffer),
	          polygonStarted = false,
	          polygon,
	          segments,
	          ring;

	      var clip = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          clip.point = pointRing;
	          clip.lineStart = ringStart;
	          clip.lineEnd = ringEnd;
	          segments = [];
	          polygon = [];
	        },
	        polygonEnd: function() {
	          clip.point = point;
	          clip.lineStart = lineStart;
	          clip.lineEnd = lineEnd;
	          segments = merge(segments);
	          var startInside = polygonContains(polygon, rotatedStart);
	          if (segments.length) {
	            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
	            clipPolygon(segments, compareIntersection, startInside, interpolate, sink);
	          } else if (startInside) {
	            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
	            sink.lineStart();
	            interpolate(null, null, 1, sink);
	            sink.lineEnd();
	          }
	          if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
	          segments = polygon = null;
	        },
	        sphere: function() {
	          sink.polygonStart();
	          sink.lineStart();
	          interpolate(null, null, 1, sink);
	          sink.lineEnd();
	          sink.polygonEnd();
	        }
	      };

	      function point(lambda, phi) {
	        var point = rotate(lambda, phi);
	        if (pointVisible(lambda = point[0], phi = point[1])) sink.point(lambda, phi);
	      }

	      function pointLine(lambda, phi) {
	        var point = rotate(lambda, phi);
	        line.point(point[0], point[1]);
	      }

	      function lineStart() {
	        clip.point = pointLine;
	        line.lineStart();
	      }

	      function lineEnd() {
	        clip.point = point;
	        line.lineEnd();
	      }

	      function pointRing(lambda, phi) {
	        ring.push([lambda, phi]);
	        var point = rotate(lambda, phi);
	        ringSink.point(point[0], point[1]);
	      }

	      function ringStart() {
	        ringSink.lineStart();
	        ring = [];
	      }

	      function ringEnd() {
	        pointRing(ring[0][0], ring[0][1]);
	        ringSink.lineEnd();

	        var clean = ringSink.clean(),
	            ringSegments = ringBuffer.result(),
	            i, n = ringSegments.length, m,
	            segment,
	            point;

	        ring.pop();
	        polygon.push(ring);
	        ring = null;

	        if (!n) return;

	        // No intersections.
	        if (clean & 1) {
	          segment = ringSegments[0];
	          if ((m = segment.length - 1) > 0) {
	            if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
	            sink.lineStart();
	            for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
	            sink.lineEnd();
	          }
	          return;
	        }

	        // Rejoin connected segments.
	        // TODO reuse ringBuffer.rejoin()?
	        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

	        segments.push(ringSegments.filter(validSegment));
	      }

	      return clip;
	    };
	  }

	  function validSegment(segment) {
	    return segment.length > 1;
	  }

	  // Intersections are sorted along the clip edge. For both antimeridian cutting
	  // and circle clipping, the same comparison is used.
	  function compareIntersection(a, b) {
	    return ((a = a.x)[0] < 0 ? a[1] - halfPi$3 - epsilon$4 : halfPi$3 - a[1])
	         - ((b = b.x)[0] < 0 ? b[1] - halfPi$3 - epsilon$4 : halfPi$3 - b[1]);
	  }

	  var clipAntimeridian = clip(
	    function() { return true; },
	    clipAntimeridianLine,
	    clipAntimeridianInterpolate,
	    [-pi$4, -halfPi$3]
	  );

	  // Takes a line and cuts into visible segments. Return values: 0 - there were
	  // intersections or the line was empty; 1 - no intersections; 2 - there were
	  // intersections, and the first and last segments should be rejoined.
	  function clipAntimeridianLine(stream) {
	    var lambda0 = NaN,
	        phi0 = NaN,
	        sign0 = NaN,
	        clean; // no intersections

	    return {
	      lineStart: function() {
	        stream.lineStart();
	        clean = 1;
	      },
	      point: function(lambda1, phi1) {
	        var sign1 = lambda1 > 0 ? pi$4 : -pi$4,
	            delta = abs(lambda1 - lambda0);
	        if (abs(delta - pi$4) < epsilon$4) { // line crosses a pole
	          stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi$3 : -halfPi$3);
	          stream.point(sign0, phi0);
	          stream.lineEnd();
	          stream.lineStart();
	          stream.point(sign1, phi0);
	          stream.point(lambda1, phi0);
	          clean = 0;
	        } else if (sign0 !== sign1 && delta >= pi$4) { // line crosses antimeridian
	          if (abs(lambda0 - sign0) < epsilon$4) lambda0 -= sign0 * epsilon$4; // handle degeneracies
	          if (abs(lambda1 - sign1) < epsilon$4) lambda1 -= sign1 * epsilon$4;
	          phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
	          stream.point(sign0, phi0);
	          stream.lineEnd();
	          stream.lineStart();
	          stream.point(sign1, phi0);
	          clean = 0;
	        }
	        stream.point(lambda0 = lambda1, phi0 = phi1);
	        sign0 = sign1;
	      },
	      lineEnd: function() {
	        stream.lineEnd();
	        lambda0 = phi0 = NaN;
	      },
	      clean: function() {
	        return 2 - clean; // if intersections, rejoin first and last segments
	      }
	    };
	  }

	  function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
	    var cosPhi0,
	        cosPhi1,
	        sinLambda0Lambda1 = sin$1(lambda0 - lambda1);
	    return abs(sinLambda0Lambda1) > epsilon$4
	        ? atan((sin$1(phi0) * (cosPhi1 = cos$1(phi1)) * sin$1(lambda1)
	            - sin$1(phi1) * (cosPhi0 = cos$1(phi0)) * sin$1(lambda0))
	            / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
	        : (phi0 + phi1) / 2;
	  }

	  function clipAntimeridianInterpolate(from, to, direction, stream) {
	    var phi;
	    if (from == null) {
	      phi = direction * halfPi$3;
	      stream.point(-pi$4, phi);
	      stream.point(0, phi);
	      stream.point(pi$4, phi);
	      stream.point(pi$4, 0);
	      stream.point(pi$4, -phi);
	      stream.point(0, -phi);
	      stream.point(-pi$4, -phi);
	      stream.point(-pi$4, 0);
	      stream.point(-pi$4, phi);
	    } else if (abs(from[0] - to[0]) > epsilon$4) {
	      var lambda = from[0] < to[0] ? pi$4 : -pi$4;
	      phi = direction * lambda / 2;
	      stream.point(-lambda, phi);
	      stream.point(0, phi);
	      stream.point(lambda, phi);
	    } else {
	      stream.point(to[0], to[1]);
	    }
	  }

	  function clipCircle(radius, delta) {
	    var cr = cos$1(radius),
	        smallRadius = cr > 0,
	        notHemisphere = abs(cr) > epsilon$4; // TODO optimise for this common case

	    function interpolate(from, to, direction, stream) {
	      circleStream(stream, radius, delta, direction, from, to);
	    }

	    function visible(lambda, phi) {
	      return cos$1(lambda) * cos$1(phi) > cr;
	    }

	    // Takes a line and cuts into visible segments. Return values used for polygon
	    // clipping: 0 - there were intersections or the line was empty; 1 - no
	    // intersections 2 - there were intersections, and the first and last segments
	    // should be rejoined.
	    function clipLine(stream) {
	      var point0, // previous point
	          c0, // code for previous point
	          v0, // visibility of previous point
	          v00, // visibility of first point
	          clean; // no intersections
	      return {
	        lineStart: function() {
	          v00 = v0 = false;
	          clean = 1;
	        },
	        point: function(lambda, phi) {
	          var point1 = [lambda, phi],
	              point2,
	              v = visible(lambda, phi),
	              c = smallRadius
	                ? v ? 0 : code(lambda, phi)
	                : v ? code(lambda + (lambda < 0 ? pi$4 : -pi$4), phi) : 0;
	          if (!point0 && (v00 = v0 = v)) stream.lineStart();
	          // Handle degeneracies.
	          // TODO ignore if not clipping polygons.
	          if (v !== v0) {
	            point2 = intersect(point0, point1);
	            if (pointEqual(point0, point2) || pointEqual(point1, point2)) {
	              point1[0] += epsilon$4;
	              point1[1] += epsilon$4;
	              v = visible(point1[0], point1[1]);
	            }
	          }
	          if (v !== v0) {
	            clean = 0;
	            if (v) {
	              // outside going in
	              stream.lineStart();
	              point2 = intersect(point1, point0);
	              stream.point(point2[0], point2[1]);
	            } else {
	              // inside going out
	              point2 = intersect(point0, point1);
	              stream.point(point2[0], point2[1]);
	              stream.lineEnd();
	            }
	            point0 = point2;
	          } else if (notHemisphere && point0 && smallRadius ^ v) {
	            var t;
	            // If the codes for two points are different, or are both zero,
	            // and there this segment intersects with the small circle.
	            if (!(c & c0) && (t = intersect(point1, point0, true))) {
	              clean = 0;
	              if (smallRadius) {
	                stream.lineStart();
	                stream.point(t[0][0], t[0][1]);
	                stream.point(t[1][0], t[1][1]);
	                stream.lineEnd();
	              } else {
	                stream.point(t[1][0], t[1][1]);
	                stream.lineEnd();
	                stream.lineStart();
	                stream.point(t[0][0], t[0][1]);
	              }
	            }
	          }
	          if (v && (!point0 || !pointEqual(point0, point1))) {
	            stream.point(point1[0], point1[1]);
	          }
	          point0 = point1, v0 = v, c0 = c;
	        },
	        lineEnd: function() {
	          if (v0) stream.lineEnd();
	          point0 = null;
	        },
	        // Rejoin first and last segments if there were intersections and the first
	        // and last points were visible.
	        clean: function() {
	          return clean | ((v00 && v0) << 1);
	        }
	      };
	    }

	    // Intersects the great circle between a and b with the clip circle.
	    function intersect(a, b, two) {
	      var pa = cartesian(a),
	          pb = cartesian(b);

	      // We have two planes, n1.p = d1 and n2.p = d2.
	      // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
	      var n1 = [1, 0, 0], // normal
	          n2 = cartesianCross(pa, pb),
	          n2n2 = cartesianDot(n2, n2),
	          n1n2 = n2[0], // cartesianDot(n1, n2),
	          determinant = n2n2 - n1n2 * n1n2;

	      // Two polar points.
	      if (!determinant) return !two && a;

	      var c1 =  cr * n2n2 / determinant,
	          c2 = -cr * n1n2 / determinant,
	          n1xn2 = cartesianCross(n1, n2),
	          A = cartesianScale(n1, c1),
	          B = cartesianScale(n2, c2);
	      cartesianAddInPlace(A, B);

	      // Solve |p(t)|^2 = 1.
	      var u = n1xn2,
	          w = cartesianDot(A, u),
	          uu = cartesianDot(u, u),
	          t2 = w * w - uu * (cartesianDot(A, A) - 1);

	      if (t2 < 0) return;

	      var t = sqrt$1(t2),
	          q = cartesianScale(u, (-w - t) / uu);
	      cartesianAddInPlace(q, A);
	      q = spherical(q);

	      if (!two) return q;

	      // Two intersection points.
	      var lambda0 = a[0],
	          lambda1 = b[0],
	          phi0 = a[1],
	          phi1 = b[1],
	          z;

	      if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

	      var delta = lambda1 - lambda0,
	          polar = abs(delta - pi$4) < epsilon$4,
	          meridian = polar || delta < epsilon$4;

	      if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

	      // Check that the first point is between a and b.
	      if (meridian
	          ? polar
	            ? phi0 + phi1 > 0 ^ q[1] < (abs(q[0] - lambda0) < epsilon$4 ? phi0 : phi1)
	            : phi0 <= q[1] && q[1] <= phi1
	          : delta > pi$4 ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
	        var q1 = cartesianScale(u, (-w + t) / uu);
	        cartesianAddInPlace(q1, A);
	        return [q, spherical(q1)];
	      }
	    }

	    // Generates a 4-bit vector representing the location of a point relative to
	    // the small circle's bounding box.
	    function code(lambda, phi) {
	      var r = smallRadius ? radius : pi$4 - radius,
	          code = 0;
	      if (lambda < -r) code |= 1; // left
	      else if (lambda > r) code |= 2; // right
	      if (phi < -r) code |= 4; // below
	      else if (phi > r) code |= 8; // above
	      return code;
	    }

	    return clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi$4, radius - pi$4]);
	  }

	  function transform$1(prototype) {
	    return {
	      stream: transform$2(prototype)
	    };
	  }

	  function transform$2(prototype) {
	    function T() {}
	    var p = T.prototype = Object.create(Transform$1.prototype);
	    for (var k in prototype) p[k] = prototype[k];
	    return function(stream) {
	      var t = new T;
	      t.stream = stream;
	      return t;
	    };
	  }

	  function Transform$1() {}

	  Transform$1.prototype = {
	    point: function(x, y) { this.stream.point(x, y); },
	    sphere: function() { this.stream.sphere(); },
	    lineStart: function() { this.stream.lineStart(); },
	    lineEnd: function() { this.stream.lineEnd(); },
	    polygonStart: function() { this.stream.polygonStart(); },
	    polygonEnd: function() { this.stream.polygonEnd(); }
	  };

	  function fit(project, extent, object) {
	    var w = extent[1][0] - extent[0][0],
	        h = extent[1][1] - extent[0][1],
	        clip = project.clipExtent && project.clipExtent();

	    project
	        .scale(150)
	        .translate([0, 0]);

	    if (clip != null) project.clipExtent(null);

	    geoStream(object, project.stream(boundsStream$1));

	    var b = boundsStream$1.result(),
	        k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
	        x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
	        y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;

	    if (clip != null) project.clipExtent(clip);

	    return project
	        .scale(k * 150)
	        .translate([x, y]);
	  }

	  function fitSize(project) {
	    return function(size, object) {
	      return fit(project, [[0, 0], size], object);
	    };
	  }

	  function fitExtent(project) {
	    return function(extent, object) {
	      return fit(project, extent, object);
	    };
	  }

	  var maxDepth = 16;
	  var cosMinDistance = cos$1(30 * radians);
	  // cos(minimum angular distance)

	  function resample(project, delta2) {
	    return +delta2 ? resample$1(project, delta2) : resampleNone(project);
	  }

	  function resampleNone(project) {
	    return transform$2({
	      point: function(x, y) {
	        x = project(x, y);
	        this.stream.point(x[0], x[1]);
	      }
	    });
	  }

	  function resample$1(project, delta2) {

	    function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
	      var dx = x1 - x0,
	          dy = y1 - y0,
	          d2 = dx * dx + dy * dy;
	      if (d2 > 4 * delta2 && depth--) {
	        var a = a0 + a1,
	            b = b0 + b1,
	            c = c0 + c1,
	            m = sqrt$1(a * a + b * b + c * c),
	            phi2 = asin$1(c /= m),
	            lambda2 = abs(abs(c) - 1) < epsilon$4 || abs(lambda0 - lambda1) < epsilon$4 ? (lambda0 + lambda1) / 2 : atan2(b, a),
	            p = project(lambda2, phi2),
	            x2 = p[0],
	            y2 = p[1],
	            dx2 = x2 - x0,
	            dy2 = y2 - y0,
	            dz = dy * dx2 - dx * dy2;
	        if (dz * dz / d2 > delta2 // perpendicular projected distance
	            || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
	            || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
	          resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
	          stream.point(x2, y2);
	          resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
	        }
	      }
	    }
	    return function(stream) {
	      var lambda00, x00, y00, a00, b00, c00, // first point
	          lambda0, x0, y0, a0, b0, c0; // previous point

	      var resampleStream = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
	        polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
	      };

	      function point(x, y) {
	        x = project(x, y);
	        stream.point(x[0], x[1]);
	      }

	      function lineStart() {
	        x0 = NaN;
	        resampleStream.point = linePoint;
	        stream.lineStart();
	      }

	      function linePoint(lambda, phi) {
	        var c = cartesian([lambda, phi]), p = project(lambda, phi);
	        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
	        stream.point(x0, y0);
	      }

	      function lineEnd() {
	        resampleStream.point = point;
	        stream.lineEnd();
	      }

	      function ringStart() {
	        lineStart();
	        resampleStream.point = ringPoint;
	        resampleStream.lineEnd = ringEnd;
	      }

	      function ringPoint(lambda, phi) {
	        linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
	        resampleStream.point = linePoint;
	      }

	      function ringEnd() {
	        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
	        resampleStream.lineEnd = lineEnd;
	        lineEnd();
	      }

	      return resampleStream;
	    };
	  }

	  var transformRadians = transform$2({
	    point: function(x, y) {
	      this.stream.point(x * radians, y * radians);
	    }
	  });

	  function projection(project) {
	    return projectionMutator(function() { return project; })();
	  }

	  function projectionMutator(projectAt) {
	    var project,
	        k = 150, // scale
	        x = 480, y = 250, // translate
	        dx, dy, lambda = 0, phi = 0, // center
	        deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, projectRotate, // rotate
	        theta = null, preclip = clipAntimeridian, // clip angle
	        x0 = null, y0, x1, y1, postclip = identity$7, // clip extent
	        delta2 = 0.5, projectResample = resample(projectTransform, delta2), // precision
	        cache,
	        cacheStream;

	    function projection(point) {
	      point = projectRotate(point[0] * radians, point[1] * radians);
	      return [point[0] * k + dx, dy - point[1] * k];
	    }

	    function invert(point) {
	      point = projectRotate.invert((point[0] - dx) / k, (dy - point[1]) / k);
	      return point && [point[0] * degrees$1, point[1] * degrees$1];
	    }

	    function projectTransform(x, y) {
	      return x = project(x, y), [x[0] * k + dx, dy - x[1] * k];
	    }

	    projection.stream = function(stream) {
	      return cache && cacheStream === stream ? cache : cache = transformRadians(preclip(rotate, projectResample(postclip(cacheStream = stream))));
	    };

	    projection.clipAngle = function(_) {
	      return arguments.length ? (preclip = +_ ? clipCircle(theta = _ * radians, 6 * radians) : (theta = null, clipAntimeridian), reset()) : theta * degrees$1;
	    };

	    projection.clipExtent = function(_) {
	      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$7) : clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
	    };

	    projection.scale = function(_) {
	      return arguments.length ? (k = +_, recenter()) : k;
	    };

	    projection.translate = function(_) {
	      return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
	    };

	    projection.center = function(_) {
	      return arguments.length ? (lambda = _[0] % 360 * radians, phi = _[1] % 360 * radians, recenter()) : [lambda * degrees$1, phi * degrees$1];
	    };

	    projection.rotate = function(_) {
	      return arguments.length ? (deltaLambda = _[0] % 360 * radians, deltaPhi = _[1] % 360 * radians, deltaGamma = _.length > 2 ? _[2] % 360 * radians : 0, recenter()) : [deltaLambda * degrees$1, deltaPhi * degrees$1, deltaGamma * degrees$1];
	    };

	    projection.precision = function(_) {
	      return arguments.length ? (projectResample = resample(projectTransform, delta2 = _ * _), reset()) : sqrt$1(delta2);
	    };

	    projection.fitExtent = fitExtent(projection);

	    projection.fitSize = fitSize(projection);

	    function recenter() {
	      projectRotate = compose(rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma), project);
	      var center = project(lambda, phi);
	      dx = x - center[0] * k;
	      dy = y + center[1] * k;
	      return reset();
	    }

	    function reset() {
	      cache = cacheStream = null;
	      return projection;
	    }

	    return function() {
	      project = projectAt.apply(this, arguments);
	      projection.invert = project.invert && invert;
	      return recenter();
	    };
	  }

	  function conicProjection(projectAt) {
	    var phi0 = 0,
	        phi1 = pi$4 / 3,
	        m = projectionMutator(projectAt),
	        p = m(phi0, phi1);

	    p.parallels = function(_) {
	      return arguments.length ? m(phi0 = _[0] * radians, phi1 = _[1] * radians) : [phi0 * degrees$1, phi1 * degrees$1];
	    };

	    return p;
	  }

	  function conicEqualAreaRaw(y0, y1) {
	    var sy0 = sin$1(y0),
	        n = (sy0 + sin$1(y1)) / 2,
	        c = 1 + sy0 * (2 * n - sy0),
	        r0 = sqrt$1(c) / n;

	    function project(x, y) {
	      var r = sqrt$1(c - 2 * n * sin$1(y)) / n;
	      return [r * sin$1(x *= n), r0 - r * cos$1(x)];
	    }

	    project.invert = function(x, y) {
	      var r0y = r0 - y;
	      return [atan2(x, r0y) / n, asin$1((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
	    };

	    return project;
	  }

	  function conicEqualArea() {
	    return conicProjection(conicEqualAreaRaw)
	        .scale(155.424)
	        .center([0, 33.6442]);
	  }

	  function albers() {
	    return conicEqualArea()
	        .parallels([29.5, 45.5])
	        .scale(1070)
	        .translate([480, 250])
	        .rotate([96, 0])
	        .center([-0.6, 38.7]);
	  }

	  // The projections must have mutually exclusive clip regions on the sphere,
	  // as this will avoid emitting interleaving lines and polygons.
	  function multiplex(streams) {
	    var n = streams.length;
	    return {
	      point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
	      sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
	      lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
	      lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
	      polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
	      polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
	    };
	  }

	  // A composite projection for the United States, configured by default for
	  // 960×500. The projection also works quite well at 960×600 if you change the
	  // scale to 1285 and adjust the translate accordingly. The set of standard
	  // parallels for each region comes from USGS, which is published here:
	  // http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
	  function albersUsa() {
	    var cache,
	        cacheStream,
	        lower48 = albers(), lower48Point,
	        alaska = conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
	        hawaii = conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
	        point, pointStream = {point: function(x, y) { point = [x, y]; }};

	    function albersUsa(coordinates) {
	      var x = coordinates[0], y = coordinates[1];
	      return point = null,
	          (lower48Point.point(x, y), point)
	          || (alaskaPoint.point(x, y), point)
	          || (hawaiiPoint.point(x, y), point);
	    }

	    albersUsa.invert = function(coordinates) {
	      var k = lower48.scale(),
	          t = lower48.translate(),
	          x = (coordinates[0] - t[0]) / k,
	          y = (coordinates[1] - t[1]) / k;
	      return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
	          : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
	          : lower48).invert(coordinates);
	    };

	    albersUsa.stream = function(stream) {
	      return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
	    };

	    albersUsa.precision = function(_) {
	      if (!arguments.length) return lower48.precision();
	      lower48.precision(_), alaska.precision(_), hawaii.precision(_);
	      return albersUsa;
	    };

	    albersUsa.scale = function(_) {
	      if (!arguments.length) return lower48.scale();
	      lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
	      return albersUsa.translate(lower48.translate());
	    };

	    albersUsa.translate = function(_) {
	      if (!arguments.length) return lower48.translate();
	      var k = lower48.scale(), x = +_[0], y = +_[1];

	      lower48Point = lower48
	          .translate(_)
	          .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
	          .stream(pointStream);

	      alaskaPoint = alaska
	          .translate([x - 0.307 * k, y + 0.201 * k])
	          .clipExtent([[x - 0.425 * k + epsilon$4, y + 0.120 * k + epsilon$4], [x - 0.214 * k - epsilon$4, y + 0.234 * k - epsilon$4]])
	          .stream(pointStream);

	      hawaiiPoint = hawaii
	          .translate([x - 0.205 * k, y + 0.212 * k])
	          .clipExtent([[x - 0.214 * k + epsilon$4, y + 0.166 * k + epsilon$4], [x - 0.115 * k - epsilon$4, y + 0.234 * k - epsilon$4]])
	          .stream(pointStream);

	      return albersUsa;
	    };

	    albersUsa.fitExtent = fitExtent(albersUsa);

	    albersUsa.fitSize = fitSize(albersUsa);

	    return albersUsa.scale(1070);
	  }

	  function azimuthalRaw(scale) {
	    return function(x, y) {
	      var cx = cos$1(x),
	          cy = cos$1(y),
	          k = scale(cx * cy);
	      return [
	        k * cy * sin$1(x),
	        k * sin$1(y)
	      ];
	    }
	  }

	  function azimuthalInvert(angle) {
	    return function(x, y) {
	      var z = sqrt$1(x * x + y * y),
	          c = angle(z),
	          sc = sin$1(c),
	          cc = cos$1(c);
	      return [
	        atan2(x * sc, z * cc),
	        asin$1(z && y * sc / z)
	      ];
	    }
	  }

	  var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
	    return sqrt$1(2 / (1 + cxcy));
	  });

	  azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
	    return 2 * asin$1(z / 2);
	  });

	  function azimuthalEqualArea() {
	    return projection(azimuthalEqualAreaRaw)
	        .scale(124.75)
	        .clipAngle(180 - 1e-3);
	  }

	  var azimuthalEquidistantRaw = azimuthalRaw(function(c) {
	    return (c = acos(c)) && c / sin$1(c);
	  });

	  azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
	    return z;
	  });

	  function azimuthalEquidistant() {
	    return projection(azimuthalEquidistantRaw)
	        .scale(79.4188)
	        .clipAngle(180 - 1e-3);
	  }

	  function mercatorRaw(lambda, phi) {
	    return [lambda, log$1(tan((halfPi$3 + phi) / 2))];
	  }

	  mercatorRaw.invert = function(x, y) {
	    return [x, 2 * atan(exp(y)) - halfPi$3];
	  };

	  function mercator() {
	    return mercatorProjection(mercatorRaw)
	        .scale(961 / tau$4);
	  }

	  function mercatorProjection(project) {
	    var m = projection(project),
	        scale = m.scale,
	        translate = m.translate,
	        clipExtent = m.clipExtent,
	        clipAuto;

	    m.scale = function(_) {
	      return arguments.length ? (scale(_), clipAuto && m.clipExtent(null), m) : scale();
	    };

	    m.translate = function(_) {
	      return arguments.length ? (translate(_), clipAuto && m.clipExtent(null), m) : translate();
	    };

	    m.clipExtent = function(_) {
	      if (!arguments.length) return clipAuto ? null : clipExtent();
	      if (clipAuto = _ == null) {
	        var k = pi$4 * scale(),
	            t = translate();
	        _ = [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]];
	      }
	      clipExtent(_);
	      return m;
	    };

	    return m.clipExtent(null);
	  }

	  function tany(y) {
	    return tan((halfPi$3 + y) / 2);
	  }

	  function conicConformalRaw(y0, y1) {
	    var cy0 = cos$1(y0),
	        n = y0 === y1 ? sin$1(y0) : log$1(cy0 / cos$1(y1)) / log$1(tany(y1) / tany(y0)),
	        f = cy0 * pow$1(tany(y0), n) / n;

	    if (!n) return mercatorRaw;

	    function project(x, y) {
	      if (f > 0) { if (y < -halfPi$3 + epsilon$4) y = -halfPi$3 + epsilon$4; }
	      else { if (y > halfPi$3 - epsilon$4) y = halfPi$3 - epsilon$4; }
	      var r = f / pow$1(tany(y), n);
	      return [r * sin$1(n * x), f - r * cos$1(n * x)];
	    }

	    project.invert = function(x, y) {
	      var fy = f - y, r = sign$1(n) * sqrt$1(x * x + fy * fy);
	      return [atan2(x, fy) / n, 2 * atan(pow$1(f / r, 1 / n)) - halfPi$3];
	    };

	    return project;
	  }

	  function conicConformal() {
	    return conicProjection(conicConformalRaw)
	        .scale(109.5)
	        .parallels([30, 30]);
	  }

	  function equirectangularRaw(lambda, phi) {
	    return [lambda, phi];
	  }

	  equirectangularRaw.invert = equirectangularRaw;

	  function equirectangular() {
	    return projection(equirectangularRaw)
	        .scale(152.63);
	  }

	  function conicEquidistantRaw(y0, y1) {
	    var cy0 = cos$1(y0),
	        n = y0 === y1 ? sin$1(y0) : (cy0 - cos$1(y1)) / (y1 - y0),
	        g = cy0 / n + y0;

	    if (abs(n) < epsilon$4) return equirectangularRaw;

	    function project(x, y) {
	      var gy = g - y, nx = n * x;
	      return [gy * sin$1(nx), g - gy * cos$1(nx)];
	    }

	    project.invert = function(x, y) {
	      var gy = g - y;
	      return [atan2(x, gy) / n, g - sign$1(n) * sqrt$1(x * x + gy * gy)];
	    };

	    return project;
	  }

	  function conicEquidistant() {
	    return conicProjection(conicEquidistantRaw)
	        .scale(131.154)
	        .center([0, 13.9389]);
	  }

	  function gnomonicRaw(x, y) {
	    var cy = cos$1(y), k = cos$1(x) * cy;
	    return [cy * sin$1(x) / k, sin$1(y) / k];
	  }

	  gnomonicRaw.invert = azimuthalInvert(atan);

	  function gnomonic() {
	    return projection(gnomonicRaw)
	        .scale(144.049)
	        .clipAngle(60);
	  }

	  function orthographicRaw(x, y) {
	    return [cos$1(y) * sin$1(x), sin$1(y)];
	  }

	  orthographicRaw.invert = azimuthalInvert(asin$1);

	  function orthographic() {
	    return projection(orthographicRaw)
	        .scale(249.5)
	        .clipAngle(90 + epsilon$4);
	  }

	  function stereographicRaw(x, y) {
	    var cy = cos$1(y), k = 1 + cos$1(x) * cy;
	    return [cy * sin$1(x) / k, sin$1(y) / k];
	  }

	  stereographicRaw.invert = azimuthalInvert(function(z) {
	    return 2 * atan(z);
	  });

	  function stereographic() {
	    return projection(stereographicRaw)
	        .scale(250)
	        .clipAngle(142);
	  }

	  function transverseMercatorRaw(lambda, phi) {
	    return [log$1(tan((halfPi$3 + phi) / 2)), -lambda];
	  }

	  transverseMercatorRaw.invert = function(x, y) {
	    return [-y, 2 * atan(exp(x)) - halfPi$3];
	  };

	  function transverseMercator() {
	    var m = mercatorProjection(transverseMercatorRaw),
	        center = m.center,
	        rotate = m.rotate;

	    m.center = function(_) {
	      return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
	    };

	    m.rotate = function(_) {
	      return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
	    };

	    return rotate([0, 0, 90])
	        .scale(159.155);
	  }

	  exports.version = version;
	  exports.bisect = bisectRight;
	  exports.bisectRight = bisectRight;
	  exports.bisectLeft = bisectLeft;
	  exports.ascending = ascending;
	  exports.bisector = bisector;
	  exports.descending = descending;
	  exports.deviation = deviation;
	  exports.extent = extent;
	  exports.histogram = histogram;
	  exports.thresholdFreedmanDiaconis = freedmanDiaconis;
	  exports.thresholdScott = scott;
	  exports.thresholdSturges = sturges;
	  exports.max = max;
	  exports.mean = mean;
	  exports.median = median;
	  exports.merge = merge;
	  exports.min = min;
	  exports.pairs = pairs;
	  exports.permute = permute;
	  exports.quantile = threshold;
	  exports.range = range;
	  exports.scan = scan;
	  exports.shuffle = shuffle;
	  exports.sum = sum;
	  exports.ticks = ticks;
	  exports.tickStep = tickStep;
	  exports.transpose = transpose;
	  exports.variance = variance;
	  exports.zip = zip;
	  exports.entries = entries;
	  exports.keys = keys;
	  exports.values = values;
	  exports.map = map$1;
	  exports.set = set;
	  exports.nest = nest;
	  exports.randomUniform = uniform;
	  exports.randomNormal = normal;
	  exports.randomLogNormal = logNormal;
	  exports.randomBates = bates;
	  exports.randomIrwinHall = irwinHall;
	  exports.randomExponential = exponential;
	  exports.easeLinear = linear;
	  exports.easeQuad = quadInOut;
	  exports.easeQuadIn = quadIn;
	  exports.easeQuadOut = quadOut;
	  exports.easeQuadInOut = quadInOut;
	  exports.easeCubic = easeCubicInOut;
	  exports.easeCubicIn = cubicIn;
	  exports.easeCubicOut = cubicOut;
	  exports.easeCubicInOut = easeCubicInOut;
	  exports.easePoly = polyInOut;
	  exports.easePolyIn = polyIn;
	  exports.easePolyOut = polyOut;
	  exports.easePolyInOut = polyInOut;
	  exports.easeSin = sinInOut;
	  exports.easeSinIn = sinIn;
	  exports.easeSinOut = sinOut;
	  exports.easeSinInOut = sinInOut;
	  exports.easeExp = expInOut;
	  exports.easeExpIn = expIn;
	  exports.easeExpOut = expOut;
	  exports.easeExpInOut = expInOut;
	  exports.easeCircle = circleInOut;
	  exports.easeCircleIn = circleIn;
	  exports.easeCircleOut = circleOut;
	  exports.easeCircleInOut = circleInOut;
	  exports.easeBounce = bounceOut;
	  exports.easeBounceIn = bounceIn;
	  exports.easeBounceOut = bounceOut;
	  exports.easeBounceInOut = bounceInOut;
	  exports.easeBack = backInOut;
	  exports.easeBackIn = backIn;
	  exports.easeBackOut = backOut;
	  exports.easeBackInOut = backInOut;
	  exports.easeElastic = elasticOut;
	  exports.easeElasticIn = elasticIn;
	  exports.easeElasticOut = elasticOut;
	  exports.easeElasticInOut = elasticInOut;
	  exports.polygonArea = area;
	  exports.polygonCentroid = centroid;
	  exports.polygonHull = hull;
	  exports.polygonContains = contains;
	  exports.polygonLength = length$1;
	  exports.path = path;
	  exports.quadtree = quadtree;
	  exports.queue = queue;
	  exports.arc = arc;
	  exports.area = area$1;
	  exports.line = line;
	  exports.pie = pie;
	  exports.radialArea = radialArea;
	  exports.radialLine = radialLine$1;
	  exports.symbol = symbol;
	  exports.symbols = symbols;
	  exports.symbolCircle = circle;
	  exports.symbolCross = cross$1;
	  exports.symbolDiamond = diamond;
	  exports.symbolSquare = square;
	  exports.symbolStar = star;
	  exports.symbolTriangle = triangle;
	  exports.symbolWye = wye;
	  exports.curveBasisClosed = basisClosed;
	  exports.curveBasisOpen = basisOpen;
	  exports.curveBasis = basis;
	  exports.curveBundle = bundle;
	  exports.curveCardinalClosed = cardinalClosed;
	  exports.curveCardinalOpen = cardinalOpen;
	  exports.curveCardinal = cardinal;
	  exports.curveCatmullRomClosed = catmullRomClosed;
	  exports.curveCatmullRomOpen = catmullRomOpen;
	  exports.curveCatmullRom = catmullRom;
	  exports.curveLinearClosed = linearClosed;
	  exports.curveLinear = curveLinear;
	  exports.curveMonotoneX = monotoneX;
	  exports.curveMonotoneY = monotoneY;
	  exports.curveNatural = natural;
	  exports.curveStep = step;
	  exports.curveStepAfter = stepAfter;
	  exports.curveStepBefore = stepBefore;
	  exports.stack = stack;
	  exports.stackOffsetExpand = expand;
	  exports.stackOffsetNone = none;
	  exports.stackOffsetSilhouette = silhouette;
	  exports.stackOffsetWiggle = wiggle;
	  exports.stackOrderAscending = ascending$1;
	  exports.stackOrderDescending = descending$2;
	  exports.stackOrderInsideOut = insideOut;
	  exports.stackOrderNone = none$1;
	  exports.stackOrderReverse = reverse;
	  exports.color = color;
	  exports.rgb = colorRgb;
	  exports.hsl = colorHsl;
	  exports.lab = lab;
	  exports.hcl = colorHcl;
	  exports.cubehelix = cubehelix;
	  exports.interpolate = interpolate;
	  exports.interpolateArray = array$1;
	  exports.interpolateDate = date;
	  exports.interpolateNumber = interpolateNumber;
	  exports.interpolateObject = object;
	  exports.interpolateRound = interpolateRound;
	  exports.interpolateString = interpolateString;
	  exports.interpolateTransformCss = interpolateTransform$1;
	  exports.interpolateTransformSvg = interpolateTransform$2;
	  exports.interpolateZoom = interpolateZoom;
	  exports.interpolateRgb = interpolateRgb;
	  exports.interpolateRgbBasis = rgbBasis;
	  exports.interpolateRgbBasisClosed = rgbBasisClosed;
	  exports.interpolateHsl = hsl$1;
	  exports.interpolateHslLong = hslLong;
	  exports.interpolateLab = lab$1;
	  exports.interpolateHcl = hcl$1;
	  exports.interpolateHclLong = hclLong;
	  exports.interpolateCubehelix = cubehelix$2;
	  exports.interpolateCubehelixLong = interpolateCubehelixLong;
	  exports.interpolateBasis = basis$2;
	  exports.interpolateBasisClosed = basisClosed$1;
	  exports.quantize = quantize;
	  exports.dispatch = dispatch;
	  exports.dsvFormat = dsv;
	  exports.csvParse = csvParse;
	  exports.csvParseRows = csvParseRows;
	  exports.csvFormat = csvFormat;
	  exports.csvFormatRows = csvFormatRows;
	  exports.tsvParse = tsvParse;
	  exports.tsvParseRows = tsvParseRows;
	  exports.tsvFormat = tsvFormat;
	  exports.tsvFormatRows = tsvFormatRows;
	  exports.request = request;
	  exports.html = html;
	  exports.json = json;
	  exports.text = text;
	  exports.xml = xml;
	  exports.csv = csv$1;
	  exports.tsv = tsv$1;
	  exports.now = now;
	  exports.timer = timer;
	  exports.timerFlush = timerFlush;
	  exports.timeout = timeout$1;
	  exports.interval = interval$1;
	  exports.timeInterval = newInterval;
	  exports.timeMillisecond = millisecond;
	  exports.timeMilliseconds = milliseconds;
	  exports.timeSecond = second;
	  exports.timeSeconds = seconds;
	  exports.timeMinute = minute;
	  exports.timeMinutes = minutes;
	  exports.timeHour = hour;
	  exports.timeHours = hours;
	  exports.timeDay = day;
	  exports.timeDays = days;
	  exports.timeWeek = timeWeek;
	  exports.timeWeeks = sundays;
	  exports.timeSunday = timeWeek;
	  exports.timeSundays = sundays;
	  exports.timeMonday = timeMonday;
	  exports.timeMondays = mondays;
	  exports.timeTuesday = tuesday;
	  exports.timeTuesdays = tuesdays;
	  exports.timeWednesday = wednesday;
	  exports.timeWednesdays = wednesdays;
	  exports.timeThursday = thursday;
	  exports.timeThursdays = thursdays;
	  exports.timeFriday = friday;
	  exports.timeFridays = fridays;
	  exports.timeSaturday = saturday;
	  exports.timeSaturdays = saturdays;
	  exports.timeMonth = month;
	  exports.timeMonths = months;
	  exports.timeYear = year;
	  exports.timeYears = years;
	  exports.utcMillisecond = millisecond;
	  exports.utcMilliseconds = milliseconds;
	  exports.utcSecond = second;
	  exports.utcSeconds = seconds;
	  exports.utcMinute = utcMinute;
	  exports.utcMinutes = utcMinutes;
	  exports.utcHour = utcHour;
	  exports.utcHours = utcHours;
	  exports.utcDay = utcDay;
	  exports.utcDays = utcDays;
	  exports.utcWeek = utcWeek;
	  exports.utcWeeks = utcSundays;
	  exports.utcSunday = utcWeek;
	  exports.utcSundays = utcSundays;
	  exports.utcMonday = utcMonday;
	  exports.utcMondays = utcMondays;
	  exports.utcTuesday = utcTuesday;
	  exports.utcTuesdays = utcTuesdays;
	  exports.utcWednesday = utcWednesday;
	  exports.utcWednesdays = utcWednesdays;
	  exports.utcThursday = utcThursday;
	  exports.utcThursdays = utcThursdays;
	  exports.utcFriday = utcFriday;
	  exports.utcFridays = utcFridays;
	  exports.utcSaturday = utcSaturday;
	  exports.utcSaturdays = utcSaturdays;
	  exports.utcMonth = utcMonth;
	  exports.utcMonths = utcMonths;
	  exports.utcYear = utcYear;
	  exports.utcYears = utcYears;
	  exports.formatLocale = formatLocale;
	  exports.formatDefaultLocale = defaultLocale;
	  exports.formatSpecifier = formatSpecifier;
	  exports.precisionFixed = precisionFixed;
	  exports.precisionPrefix = precisionPrefix;
	  exports.precisionRound = precisionRound;
	  exports.isoFormat = formatIso;
	  exports.isoParse = parseIso;
	  exports.timeFormatLocale = formatLocale$1;
	  exports.timeFormatDefaultLocale = defaultLocale$1;
	  exports.scaleBand = band;
	  exports.scalePoint = point$4;
	  exports.scaleIdentity = identity$4;
	  exports.scaleLinear = linear$2;
	  exports.scaleLog = log;
	  exports.scaleOrdinal = ordinal;
	  exports.scaleImplicit = implicit;
	  exports.scalePow = pow;
	  exports.scaleSqrt = sqrt;
	  exports.scaleQuantile = quantile;
	  exports.scaleQuantize = quantize$1;
	  exports.scaleThreshold = threshold$1;
	  exports.scaleTime = time;
	  exports.scaleUtc = utcTime;
	  exports.schemeCategory10 = category10;
	  exports.schemeCategory20b = category20b;
	  exports.schemeCategory20c = category20c;
	  exports.schemeCategory20 = category20;
	  exports.scaleSequential = sequential;
	  exports.interpolateCubehelixDefault = cubehelix$3;
	  exports.interpolateRainbow = rainbow$1;
	  exports.interpolateWarm = warm;
	  exports.interpolateCool = cool;
	  exports.interpolateViridis = viridis;
	  exports.interpolateMagma = magma;
	  exports.interpolateInferno = inferno;
	  exports.interpolatePlasma = plasma;
	  exports.creator = creator;
	  exports.customEvent = customEvent;
	  exports.local = local;
	  exports.matcher = matcher$1;
	  exports.mouse = mouse;
	  exports.namespace = namespace;
	  exports.namespaces = namespaces;
	  exports.select = select;
	  exports.selectAll = selectAll;
	  exports.selection = selection;
	  exports.selector = selector;
	  exports.selectorAll = selectorAll;
	  exports.touch = touch;
	  exports.touches = touches;
	  exports.window = window;
	  exports.active = active;
	  exports.interrupt = interrupt;
	  exports.transition = transition;
	  exports.axisTop = axisTop;
	  exports.axisRight = axisRight;
	  exports.axisBottom = axisBottom;
	  exports.axisLeft = axisLeft;
	  exports.cluster = cluster;
	  exports.hierarchy = hierarchy;
	  exports.pack = index;
	  exports.packSiblings = siblings;
	  exports.packEnclose = enclose;
	  exports.partition = partition;
	  exports.stratify = stratify;
	  exports.tree = tree;
	  exports.treemap = index$1;
	  exports.treemapBinary = binary;
	  exports.treemapDice = treemapDice;
	  exports.treemapSlice = treemapSlice;
	  exports.treemapSliceDice = sliceDice;
	  exports.treemapSquarify = squarify;
	  exports.treemapResquarify = resquarify;
	  exports.forceCenter = center$1;
	  exports.forceCollide = collide;
	  exports.forceLink = link;
	  exports.forceManyBody = manyBody;
	  exports.forceSimulation = simulation;
	  exports.forceX = x$3;
	  exports.forceY = y$3;
	  exports.drag = drag;
	  exports.dragDisable = dragDisable;
	  exports.dragEnable = dragEnable;
	  exports.voronoi = voronoi;
	  exports.zoom = zoom;
	  exports.zoomIdentity = identity$6;
	  exports.zoomTransform = transform;
	  exports.brush = brush;
	  exports.brushX = brushX;
	  exports.brushY = brushY;
	  exports.brushSelection = brushSelection;
	  exports.chord = chord;
	  exports.ribbon = ribbon;
	  exports.geoAlbers = albers;
	  exports.geoAlbersUsa = albersUsa;
	  exports.geoArea = area$2;
	  exports.geoAzimuthalEqualArea = azimuthalEqualArea;
	  exports.geoAzimuthalEqualAreaRaw = azimuthalEqualAreaRaw;
	  exports.geoAzimuthalEquidistant = azimuthalEquidistant;
	  exports.geoAzimuthalEquidistantRaw = azimuthalEquidistantRaw;
	  exports.geoBounds = bounds;
	  exports.geoCentroid = centroid$1;
	  exports.geoCircle = circle$1;
	  exports.geoClipExtent = extent$1;
	  exports.geoConicConformal = conicConformal;
	  exports.geoConicConformalRaw = conicConformalRaw;
	  exports.geoConicEqualArea = conicEqualArea;
	  exports.geoConicEqualAreaRaw = conicEqualAreaRaw;
	  exports.geoConicEquidistant = conicEquidistant;
	  exports.geoConicEquidistantRaw = conicEquidistantRaw;
	  exports.geoDistance = distance;
	  exports.geoEquirectangular = equirectangular;
	  exports.geoEquirectangularRaw = equirectangularRaw;
	  exports.geoGnomonic = gnomonic;
	  exports.geoGnomonicRaw = gnomonicRaw;
	  exports.geoGraticule = graticule;
	  exports.geoInterpolate = interpolate$2;
	  exports.geoLength = length$2;
	  exports.geoMercator = mercator;
	  exports.geoMercatorRaw = mercatorRaw;
	  exports.geoOrthographic = orthographic;
	  exports.geoOrthographicRaw = orthographicRaw;
	  exports.geoPath = index$3;
	  exports.geoProjection = projection;
	  exports.geoProjectionMutator = projectionMutator;
	  exports.geoRotation = rotation;
	  exports.geoStereographic = stereographic;
	  exports.geoStereographicRaw = stereographicRaw;
	  exports.geoStream = geoStream;
	  exports.geoTransform = transform$1;
	  exports.geoTransverseMercator = transverseMercator;
	  exports.geoTransverseMercatorRaw = transverseMercatorRaw;

	  Object.defineProperty(exports, '__esModule', { value: true });

	})));

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsyncScheduler_1 = __webpack_require__(789);
	exports.async = new AsyncScheduler_1.AsyncScheduler();
	//# sourceMappingURL=async.js.map

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(524));
	//# sourceMappingURL=index.js.map

/***/ },

/***/ 522:
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function normalizeValidator(validator) {
	    if (validator.validate !== undefined) {
	        return function (c) { return validator.validate(c); };
	    }
	    else {
	        return validator;
	    }
	}
	exports.normalizeValidator = normalizeValidator;
	function normalizeAsyncValidator(validator) {
	    if (validator.validate !== undefined) {
	        return function (c) { return validator.validate(c); };
	    }
	    else {
	        return validator;
	    }
	}
	exports.normalizeAsyncValidator = normalizeAsyncValidator;
	//# sourceMappingURL=normalize_validator.js.map

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var directives_1 = __webpack_require__(363);
	var radio_control_value_accessor_1 = __webpack_require__(155);
	var form_builder_1 = __webpack_require__(368);
	/**
	 * Shorthand set of providers used for building Angular forms.
	 * @experimental
	 */
	exports.FORM_PROVIDERS = [radio_control_value_accessor_1.RadioControlRegistry];
	/**
	 * Shorthand set of providers used for building reactive Angular forms.
	 * @experimental
	 */
	exports.REACTIVE_FORM_PROVIDERS = [form_builder_1.FormBuilder, radio_control_value_accessor_1.RadioControlRegistry];
	var FormsModule = (function () {
	    function FormsModule() {
	    }
	    /** @nocollapse */
	    FormsModule.decorators = [
	        { type: core_1.NgModule, args: [{
	                    declarations: directives_1.TEMPLATE_DRIVEN_DIRECTIVES,
	                    providers: [exports.FORM_PROVIDERS],
	                    exports: [directives_1.InternalFormsSharedModule, directives_1.TEMPLATE_DRIVEN_DIRECTIVES]
	                },] },
	    ];
	    return FormsModule;
	}());
	exports.FormsModule = FormsModule;
	var ReactiveFormsModule = (function () {
	    function ReactiveFormsModule() {
	    }
	    /** @nocollapse */
	    ReactiveFormsModule.decorators = [
	        { type: core_1.NgModule, args: [{
	                    declarations: [directives_1.REACTIVE_DRIVEN_DIRECTIVES],
	                    providers: [exports.REACTIVE_FORM_PROVIDERS],
	                    exports: [directives_1.InternalFormsSharedModule, directives_1.REACTIVE_DRIVEN_DIRECTIVES]
	                },] },
	    ];
	    return ReactiveFormsModule;
	}());
	exports.ReactiveFormsModule = ReactiveFormsModule;
	/**
	 * @deprecated
	 */
	function disableDeprecatedForms() {
	    return [];
	}
	exports.disableDeprecatedForms = disableDeprecatedForms;
	/**
	 * @deprecated
	 */
	function provideForms() {
	    return [
	        { provide: core_1.PLATFORM_DIRECTIVES, useValue: directives_1.FORM_DIRECTIVES, multi: true }, exports.REACTIVE_FORM_PROVIDERS
	    ];
	}
	exports.provideForms = provideForms;
	//# sourceMappingURL=form_providers.js.map

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * @module
	 * @description
	 * This module is used for handling user input, by defining and building a {@link FormGroup} that
	 * consists of
	 * {@link FormControl} objects, and mapping them onto the DOM. {@link FormControl} objects can then
	 * be used
	 * to read information
	 * from the form DOM elements.
	 *
	 * Forms providers are not included in default providers; you must import these providers
	 * explicitly.
	 */
	var directives_1 = __webpack_require__(363);
	exports.FORM_DIRECTIVES = directives_1.FORM_DIRECTIVES;
	exports.REACTIVE_FORM_DIRECTIVES = directives_1.REACTIVE_FORM_DIRECTIVES;
	var abstract_control_directive_1 = __webpack_require__(235);
	exports.AbstractControlDirective = abstract_control_directive_1.AbstractControlDirective;
	var abstract_form_group_directive_1 = __webpack_require__(105);
	exports.AbstractFormGroupDirective = abstract_form_group_directive_1.AbstractFormGroupDirective;
	var checkbox_value_accessor_1 = __webpack_require__(152);
	exports.CheckboxControlValueAccessor = checkbox_value_accessor_1.CheckboxControlValueAccessor;
	var control_container_1 = __webpack_require__(64);
	exports.ControlContainer = control_container_1.ControlContainer;
	var control_value_accessor_1 = __webpack_require__(44);
	exports.NG_VALUE_ACCESSOR = control_value_accessor_1.NG_VALUE_ACCESSOR;
	var default_value_accessor_1 = __webpack_require__(153);
	exports.DefaultValueAccessor = default_value_accessor_1.DefaultValueAccessor;
	var ng_control_1 = __webpack_require__(79);
	exports.NgControl = ng_control_1.NgControl;
	var ng_control_status_1 = __webpack_require__(236);
	exports.NgControlStatus = ng_control_status_1.NgControlStatus;
	var ng_form_1 = __webpack_require__(106);
	exports.NgForm = ng_form_1.NgForm;
	var ng_model_1 = __webpack_require__(237);
	exports.NgModel = ng_model_1.NgModel;
	var ng_model_group_1 = __webpack_require__(154);
	exports.NgModelGroup = ng_model_group_1.NgModelGroup;
	var form_control_directive_1 = __webpack_require__(239);
	exports.FormControlDirective = form_control_directive_1.FormControlDirective;
	var form_control_name_1 = __webpack_require__(240);
	exports.FormControlName = form_control_name_1.FormControlName;
	var form_group_directive_1 = __webpack_require__(107);
	exports.FormGroupDirective = form_group_directive_1.FormGroupDirective;
	var form_group_name_1 = __webpack_require__(108);
	exports.FormArrayName = form_group_name_1.FormArrayName;
	var form_group_name_2 = __webpack_require__(108);
	exports.FormGroupName = form_group_name_2.FormGroupName;
	var select_control_value_accessor_1 = __webpack_require__(156);
	exports.NgSelectOption = select_control_value_accessor_1.NgSelectOption;
	exports.SelectControlValueAccessor = select_control_value_accessor_1.SelectControlValueAccessor;
	var select_multiple_control_value_accessor_1 = __webpack_require__(157);
	exports.SelectMultipleControlValueAccessor = select_multiple_control_value_accessor_1.SelectMultipleControlValueAccessor;
	var validators_1 = __webpack_require__(242);
	exports.MaxLengthValidator = validators_1.MaxLengthValidator;
	exports.MinLengthValidator = validators_1.MinLengthValidator;
	exports.PatternValidator = validators_1.PatternValidator;
	exports.RequiredValidator = validators_1.RequiredValidator;
	var form_builder_1 = __webpack_require__(368);
	exports.FormBuilder = form_builder_1.FormBuilder;
	var model_1 = __webpack_require__(158);
	exports.AbstractControl = model_1.AbstractControl;
	exports.FormArray = model_1.FormArray;
	exports.FormControl = model_1.FormControl;
	exports.FormGroup = model_1.FormGroup;
	var validators_2 = __webpack_require__(45);
	exports.NG_ASYNC_VALIDATORS = validators_2.NG_ASYNC_VALIDATORS;
	exports.NG_VALIDATORS = validators_2.NG_VALIDATORS;
	exports.Validators = validators_2.Validators;
	__export(__webpack_require__(523));
	//# sourceMappingURL=forms.js.map

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(394));
	__export(__webpack_require__(395));
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(55);
	var in_memory_backend_service_2 = __webpack_require__(395);
	var InMemoryWebApiModule = (function () {
	    function InMemoryWebApiModule() {
	    }
	    /**
	    *  Prepare in-memory-web-api in the root/boot application module
	    *  with class that implements InMemoryDbService and creates an in-memory database.
	    *
	    * @param {Type} dbCreator - Class that creates seed data for in-memory database. Must implement InMemoryDbService.
	    * @param {InMemoryBackendConfigArgs} [options]
	    *
	    * @example
	    * InMemoryWebApiModule.forRoot(dbCreator);
	    * InMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
	    */
	    InMemoryWebApiModule.forRoot = function (dbCreator, options) {
	        var providers = [
	            { provide: http_1.XHRBackend, useClass: in_memory_backend_service_2.InMemoryBackendService },
	            { provide: in_memory_backend_service_2.SEED_DATA, useClass: dbCreator }
	        ];
	        if (options) {
	            providers.push({ provide: in_memory_backend_service_2.InMemoryBackendConfig, useValue: options });
	        }
	        return {
	            ngModule: InMemoryWebApiModule,
	            providers: providers
	        };
	    };
	    InMemoryWebApiModule = __decorate([
	        core_1.NgModule({}), 
	        __metadata('design:paramtypes', [])
	    ], InMemoryWebApiModule);
	    return InMemoryWebApiModule;
	}());
	exports.InMemoryWebApiModule = InMemoryWebApiModule;
	//# sourceMappingURL=index.js.map

/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(47);
	var app_routes_1 = __webpack_require__(567);
	var app_1 = __webpack_require__(568);
	var github_1 = __webpack_require__(171);
	var forms_1 = __webpack_require__(521);
	var platform_browser_1 = __webpack_require__(97);
	var http_1 = __webpack_require__(55);
	var about_1 = __webpack_require__(254);
	var home_1 = __webpack_require__(406);
	var repo_browser_1 = __webpack_require__(403);
	var repo_list_1 = __webpack_require__(405);
	var repo_detail_1 = __webpack_require__(404);
	var common_1 = __webpack_require__(42);
	// Imports for loading & configuring the in-memory web api
	var http_2 = __webpack_require__(55);
	var angular2_in_memory_web_api_1 = __webpack_require__(565);
	var in_memory_data_1 = __webpack_require__(570);
	var criteria_1 = __webpack_require__(400);
	var comparisons_1 = __webpack_require__(398);
	var criterium_detail_1 = __webpack_require__(401);
	var criteria_service_1 = __webpack_require__(118);
	var criteria_search_1 = __webpack_require__(399);
	var matrix_service_1 = __webpack_require__(256);
	var comparison_results_1 = __webpack_require__(397);
	var pie_chart_1 = __webpack_require__(396);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            declarations: [
	                app_1.AppComponent,
	                about_1.About,
	                repo_browser_1.RepoBrowser,
	                repo_list_1.RepoList,
	                repo_detail_1.RepoDetail,
	                home_1.Home,
	                criteria_1.Criteria,
	                comparisons_1.Comparisons,
	                criteria_search_1.CriteriaSearch,
	                criterium_detail_1.CriteriumDetail,
	                comparison_results_1.ComparisonResults,
	                pie_chart_1.PieChart
	            ],
	            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(app_routes_1.rootRouterConfig)],
	            providers: [
	                github_1.Github,
	                criteria_service_1.CriteriaService,
	                matrix_service_1.MatrixService,
	                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
	                { provide: http_2.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
	                { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: in_memory_data_1.InMemoryData }
	            ],
	            bootstrap: [app_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;
	

/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var about_1 = __webpack_require__(254);
	var home_1 = __webpack_require__(406);
	var repo_browser_1 = __webpack_require__(403);
	var repo_list_1 = __webpack_require__(405);
	var repo_detail_1 = __webpack_require__(404);
	var criteria_1 = __webpack_require__(400);
	var hierarchy_1 = __webpack_require__(402);
	var comparisons_1 = __webpack_require__(398);
	var criterium_detail_1 = __webpack_require__(401);
	var comparison_results_1 = __webpack_require__(397);
	exports.rootRouterConfig = [
	    { path: '', redirectTo: 'home', terminal: true },
	    { path: 'home', component: home_1.Home },
	    { path: 'hierarchy', component: hierarchy_1.Hierarchy },
	    { path: 'criteria', component: criteria_1.Criteria },
	    { path: 'comparisons', component: comparisons_1.Comparisons },
	    { path: 'detail/:id', component: criterium_detail_1.CriteriumDetail },
	    { path: 'results/:naved', component: comparison_results_1.ComparisonResults },
	    { path: 'about', component: about_1.About },
	    { path: 'github', component: repo_browser_1.RepoBrowser,
	        children: [
	            { path: '', component: repo_list_1.RepoList },
	            { path: ':org', component: repo_list_1.RepoList,
	                children: [
	                    { path: '', component: repo_detail_1.RepoDetail },
	                    { path: ':repo', component: repo_detail_1.RepoDetail }
	                ]
	            }]
	    }
	];
	

/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	__webpack_require__(574);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: __webpack_require__(740),
	            styles: [__webpack_require__(796)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	

/***/ },

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var numeric = __webpack_require__(737);
	var Calculator = (function () {
	    function Calculator() {
	    }
	    Calculator.prototype.calculateAll = function (matrices) {
	        var _this = this;
	        matrices.forEach(function (m) { return _this.calculate(m); });
	    };
	    Calculator.prototype.calculate = function (matrix) {
	        var result = this.eigs(matrix.data);
	        var maxIndex = this.findMaxIndex(result);
	        var N = result.E.x.length;
	        matrix.consistencyRatio =
	            this.consistencyRatio(result.lambda.x[maxIndex], N);
	        matrix.weights = numeric.transpose(result.E.x)[maxIndex];
	        var weightScale = numeric.sum(matrix.weights);
	        matrix.weights = matrix.weights
	            .map(function (w) { return w / weightScale; });
	    };
	    Calculator.prototype.consistencyRatio = function (lambda, dimension) {
	        return (lambda - dimension) / (dimension - 1);
	    };
	    Calculator.prototype.findMaxIndex = function (result) {
	        var arr = result.lambda.x;
	        var maxIndex = 0;
	        var maxElem = arr[0];
	        for (var curr_i = 1; curr_i < arr.length; curr_i++) {
	            if (arr[curr_i] > maxElem) {
	                maxIndex = curr_i;
	                maxElem = arr[curr_i];
	            }
	        }
	        return maxIndex;
	    };
	    Calculator.prototype.eigs = function (A) {
	        return numeric.eig(A);
	    };
	    return Calculator;
	}());
	exports.Calculator = Calculator;
	

/***/ },

/***/ 570:
/***/ function(module, exports) {

	"use strict";
	var InMemoryData = (function () {
	    function InMemoryData() {
	    }
	    InMemoryData.prototype.createDb = function () {
	        var criteria = [
	            { id: 11, name: 'Decision', parent_name: null, parent_id: null, changed: true },
	            { id: 22, name: 'A', parent_name: 'Decision', parent_id: 11, changed: false },
	            { id: 33, name: 'B', parent_name: 'Decision', parent_id: 11, changed: false },
	            { id: 44, name: 'C', parent_name: 'Decision', parent_id: 11, changed: false },
	            { id: 55, name: 'A1', parent_name: 'A', parent_id: 22, changed: false },
	            { id: 66, name: 'A2', parent_name: 'A', parent_id: 22, changed: false },
	            { id: 77, name: 'B1', parent_name: 'B', parent_id: 33, changed: false },
	            { id: 88, name: 'B2', parent_name: 'B', parent_id: 33, changed: false },
	            { id: 99, name: 'A1-1', parent_name: 'A1', parent_id: 55, changed: false },
	            { id: 100, name: 'A1-2', parent_name: 'A1', parent_id: 55, changed: false },
	            { id: 101, name: 'A1-3', parent_name: 'A1', parent_id: 55, changed: false },
	            { id: 102, name: 'A1-4', parent_name: 'A1', parent_id: 55, changed: false },
	            { id: 103, name: 'A2-1', parent_name: 'A2', parent_id: 66, changed: false },
	            { id: 104, name: 'A2-2', parent_name: 'A2', parent_id: 66, changed: false },
	            { id: 105, name: 'A2-3', parent_name: 'A2', parent_id: 66, changed: false },
	            { id: 106, name: 'B2-1', parent_name: 'B2', parent_id: 88, changed: false },
	            { id: 107, name: 'B2-2', parent_name: 'B2', parent_id: 88, changed: false },
	            { id: 108, name: 'B2-3', parent_name: 'B2', parent_id: 88, changed: false }
	        ];
	        return {
	            criteria: criteria,
	            matrices: []
	        };
	    };
	    return InMemoryData;
	}());
	exports.InMemoryData = InMemoryData;
	

/***/ },

/***/ 571:
/***/ function(module, exports) {

	"use strict";
	var Group = (function () {
	    function Group(groupName) {
	        this.pairs = [];
	        this.groupName = groupName;
	    }
	    return Group;
	}());
	exports.Group = Group;
	

/***/ },

/***/ 572:
/***/ function(module, exports) {

	"use strict";


/***/ },

/***/ 573:
/***/ function(module, exports) {

	"use strict";
	var Pair = (function () {
	    function Pair(left, right, score) {
	        if (score === void 0) { score = "9"; }
	        this.score = "9";
	        this.left = left;
	        this.right = right;
	        this.score = score;
	    }
	    return Pair;
	}());
	exports.Pair = Pair;
	

/***/ },

/***/ 574:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Observable class extensions
	__webpack_require__(753);
	__webpack_require__(754);
	// Observable operators
	__webpack_require__(446);
	__webpack_require__(755);
	__webpack_require__(757);
	__webpack_require__(758);
	__webpack_require__(760);
	__webpack_require__(184);
	__webpack_require__(766);
	

/***/ },

/***/ 575:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(55);
	var CriteriaSearchService = (function () {
	    function CriteriaSearchService(http) {
	        this.http = http;
	    }
	    CriteriaSearchService.prototype.search = function (term) {
	        return this.http
	            .get("app/criteria/?name=" + term)
	            .map(function (r) { return r.json().data; });
	    };
	    CriteriaSearchService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], CriteriaSearchService);
	    return CriteriaSearchService;
	    var _a;
	}());
	exports.CriteriaSearchService = CriteriaSearchService;
	

/***/ },

/***/ 737:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	var numeric = ( false)?(function numeric() {}):(exports);
	if(typeof global !== "undefined") { global.numeric = numeric; }

	numeric.version = "1.2.6";

	// 1. Utility functions
	numeric.bench = function bench (f,interval) {
	    var t1,t2,n,i;
	    if(typeof interval === "undefined") { interval = 15; }
	    n = 0.5;
	    t1 = new Date();
	    while(1) {
	        n*=2;
	        for(i=n;i>3;i-=4) { f(); f(); f(); f(); }
	        while(i>0) { f(); i--; }
	        t2 = new Date();
	        if(t2-t1 > interval) break;
	    }
	    for(i=n;i>3;i-=4) { f(); f(); f(); f(); }
	    while(i>0) { f(); i--; }
	    t2 = new Date();
	    return 1000*(3*n-1)/(t2-t1);
	}

	numeric._myIndexOf = (function _myIndexOf(w) {
	    var n = this.length,k;
	    for(k=0;k<n;++k) if(this[k]===w) return k;
	    return -1;
	});
	numeric.myIndexOf = (Array.prototype.indexOf)?Array.prototype.indexOf:numeric._myIndexOf;

	numeric.Function = Function;
	numeric.precision = 4;
	numeric.largeArray = 50;

	numeric.prettyPrint = function prettyPrint(x) {
	    function fmtnum(x) {
	        if(x === 0) { return '0'; }
	        if(isNaN(x)) { return 'NaN'; }
	        if(x<0) { return '-'+fmtnum(-x); }
	        if(isFinite(x)) {
	            var scale = Math.floor(Math.log(x) / Math.log(10));
	            var normalized = x / Math.pow(10,scale);
	            var basic = normalized.toPrecision(numeric.precision);
	            if(parseFloat(basic) === 10) { scale++; normalized = 1; basic = normalized.toPrecision(numeric.precision); }
	            return parseFloat(basic).toString()+'e'+scale.toString();
	        }
	        return 'Infinity';
	    }
	    var ret = [];
	    function foo(x) {
	        var k;
	        if(typeof x === "undefined") { ret.push(Array(numeric.precision+8).join(' ')); return false; }
	        if(typeof x === "string") { ret.push('"'+x+'"'); return false; }
	        if(typeof x === "boolean") { ret.push(x.toString()); return false; }
	        if(typeof x === "number") {
	            var a = fmtnum(x);
	            var b = x.toPrecision(numeric.precision);
	            var c = parseFloat(x.toString()).toString();
	            var d = [a,b,c,parseFloat(b).toString(),parseFloat(c).toString()];
	            for(k=1;k<d.length;k++) { if(d[k].length < a.length) a = d[k]; }
	            ret.push(Array(numeric.precision+8-a.length).join(' ')+a);
	            return false;
	        }
	        if(x === null) { ret.push("null"); return false; }
	        if(typeof x === "function") { 
	            ret.push(x.toString());
	            var flag = false;
	            for(k in x) { if(x.hasOwnProperty(k)) { 
	                if(flag) ret.push(',\n');
	                else ret.push('\n{');
	                flag = true; 
	                ret.push(k); 
	                ret.push(': \n'); 
	                foo(x[k]); 
	            } }
	            if(flag) ret.push('}\n');
	            return true;
	        }
	        if(x instanceof Array) {
	            if(x.length > numeric.largeArray) { ret.push('...Large Array...'); return true; }
	            var flag = false;
	            ret.push('[');
	            for(k=0;k<x.length;k++) { if(k>0) { ret.push(','); if(flag) ret.push('\n '); } flag = foo(x[k]); }
	            ret.push(']');
	            return true;
	        }
	        ret.push('{');
	        var flag = false;
	        for(k in x) { if(x.hasOwnProperty(k)) { if(flag) ret.push(',\n'); flag = true; ret.push(k); ret.push(': \n'); foo(x[k]); } }
	        ret.push('}');
	        return true;
	    }
	    foo(x);
	    return ret.join('');
	}

	numeric.parseDate = function parseDate(d) {
	    function foo(d) {
	        if(typeof d === 'string') { return Date.parse(d.replace(/-/g,'/')); }
	        if(!(d instanceof Array)) { throw new Error("parseDate: parameter must be arrays of strings"); }
	        var ret = [],k;
	        for(k=0;k<d.length;k++) { ret[k] = foo(d[k]); }
	        return ret;
	    }
	    return foo(d);
	}

	numeric.parseFloat = function parseFloat_(d) {
	    function foo(d) {
	        if(typeof d === 'string') { return parseFloat(d); }
	        if(!(d instanceof Array)) { throw new Error("parseFloat: parameter must be arrays of strings"); }
	        var ret = [],k;
	        for(k=0;k<d.length;k++) { ret[k] = foo(d[k]); }
	        return ret;
	    }
	    return foo(d);
	}

	numeric.parseCSV = function parseCSV(t) {
	    var foo = t.split('\n');
	    var j,k;
	    var ret = [];
	    var pat = /(([^'",]*)|('[^']*')|("[^"]*")),/g;
	    var patnum = /^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/;
	    var stripper = function(n) { return n.substr(0,n.length-1); }
	    var count = 0;
	    for(k=0;k<foo.length;k++) {
	      var bar = (foo[k]+",").match(pat),baz;
	      if(bar.length>0) {
	          ret[count] = [];
	          for(j=0;j<bar.length;j++) {
	              baz = stripper(bar[j]);
	              if(patnum.test(baz)) { ret[count][j] = parseFloat(baz); }
	              else ret[count][j] = baz;
	          }
	          count++;
	      }
	    }
	    return ret;
	}

	numeric.toCSV = function toCSV(A) {
	    var s = numeric.dim(A);
	    var i,j,m,n,row,ret;
	    m = s[0];
	    n = s[1];
	    ret = [];
	    for(i=0;i<m;i++) {
	        row = [];
	        for(j=0;j<m;j++) { row[j] = A[i][j].toString(); }
	        ret[i] = row.join(', ');
	    }
	    return ret.join('\n')+'\n';
	}

	numeric.getURL = function getURL(url) {
	    var client = new XMLHttpRequest();
	    client.open("GET",url,false);
	    client.send();
	    return client;
	}

	numeric.imageURL = function imageURL(img) {
	    function base64(A) {
	        var n = A.length, i,x,y,z,p,q,r,s;
	        var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	        var ret = "";
	        for(i=0;i<n;i+=3) {
	            x = A[i];
	            y = A[i+1];
	            z = A[i+2];
	            p = x >> 2;
	            q = ((x & 3) << 4) + (y >> 4);
	            r = ((y & 15) << 2) + (z >> 6);
	            s = z & 63;
	            if(i+1>=n) { r = s = 64; }
	            else if(i+2>=n) { s = 64; }
	            ret += key.charAt(p) + key.charAt(q) + key.charAt(r) + key.charAt(s);
	            }
	        return ret;
	    }
	    function crc32Array (a,from,to) {
	        if(typeof from === "undefined") { from = 0; }
	        if(typeof to === "undefined") { to = a.length; }
	        var table = [0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3,
	                     0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91, 
	                     0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE, 0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7,
	                     0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5, 
	                     0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B, 
	                     0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 
	                     0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F,
	                     0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924, 0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D,
	                     0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433,
	                     0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01, 
	                     0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457, 
	                     0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65, 
	                     0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2, 0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 
	                     0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9, 
	                     0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F, 
	                     0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 
	                     0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683, 
	                     0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8, 0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 
	                     0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7, 
	                     0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5, 
	                     0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B, 
	                     0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79, 
	                     0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236, 0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 
	                     0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D, 
	                     0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713, 
	                     0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 
	                     0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777, 
	                     0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C, 0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 
	                     0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB, 
	                     0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9, 
	                     0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF, 
	                     0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D];
	     
	        var crc = -1, y = 0, n = a.length,i;

	        for (i = from; i < to; i++) {
	            y = (crc ^ a[i]) & 0xFF;
	            crc = (crc >>> 8) ^ table[y];
	        }
	     
	        return crc ^ (-1);
	    }

	    var h = img[0].length, w = img[0][0].length, s1, s2, next,k,length,a,b,i,j,adler32,crc32;
	    var stream = [
	                  137, 80, 78, 71, 13, 10, 26, 10,                           //  0: PNG signature
	                  0,0,0,13,                                                  //  8: IHDR Chunk length
	                  73, 72, 68, 82,                                            // 12: "IHDR" 
	                  (w >> 24) & 255, (w >> 16) & 255, (w >> 8) & 255, w&255,   // 16: Width
	                  (h >> 24) & 255, (h >> 16) & 255, (h >> 8) & 255, h&255,   // 20: Height
	                  8,                                                         // 24: bit depth
	                  2,                                                         // 25: RGB
	                  0,                                                         // 26: deflate
	                  0,                                                         // 27: no filter
	                  0,                                                         // 28: no interlace
	                  -1,-2,-3,-4,                                               // 29: CRC
	                  -5,-6,-7,-8,                                               // 33: IDAT Chunk length
	                  73, 68, 65, 84,                                            // 37: "IDAT"
	                  // RFC 1950 header starts here
	                  8,                                                         // 41: RFC1950 CMF
	                  29                                                         // 42: RFC1950 FLG
	                  ];
	    crc32 = crc32Array(stream,12,29);
	    stream[29] = (crc32>>24)&255;
	    stream[30] = (crc32>>16)&255;
	    stream[31] = (crc32>>8)&255;
	    stream[32] = (crc32)&255;
	    s1 = 1;
	    s2 = 0;
	    for(i=0;i<h;i++) {
	        if(i<h-1) { stream.push(0); }
	        else { stream.push(1); }
	        a = (3*w+1+(i===0))&255; b = ((3*w+1+(i===0))>>8)&255;
	        stream.push(a); stream.push(b);
	        stream.push((~a)&255); stream.push((~b)&255);
	        if(i===0) stream.push(0);
	        for(j=0;j<w;j++) {
	            for(k=0;k<3;k++) {
	                a = img[k][i][j];
	                if(a>255) a = 255;
	                else if(a<0) a=0;
	                else a = Math.round(a);
	                s1 = (s1 + a )%65521;
	                s2 = (s2 + s1)%65521;
	                stream.push(a);
	            }
	        }
	        stream.push(0);
	    }
	    adler32 = (s2<<16)+s1;
	    stream.push((adler32>>24)&255);
	    stream.push((adler32>>16)&255);
	    stream.push((adler32>>8)&255);
	    stream.push((adler32)&255);
	    length = stream.length - 41;
	    stream[33] = (length>>24)&255;
	    stream[34] = (length>>16)&255;
	    stream[35] = (length>>8)&255;
	    stream[36] = (length)&255;
	    crc32 = crc32Array(stream,37);
	    stream.push((crc32>>24)&255);
	    stream.push((crc32>>16)&255);
	    stream.push((crc32>>8)&255);
	    stream.push((crc32)&255);
	    stream.push(0);
	    stream.push(0);
	    stream.push(0);
	    stream.push(0);
	//    a = stream.length;
	    stream.push(73);  // I
	    stream.push(69);  // E
	    stream.push(78);  // N
	    stream.push(68);  // D
	    stream.push(174); // CRC1
	    stream.push(66);  // CRC2
	    stream.push(96);  // CRC3
	    stream.push(130); // CRC4
	    return 'data:image/png;base64,'+base64(stream);
	}

	// 2. Linear algebra with Arrays.
	numeric._dim = function _dim(x) {
	    var ret = [];
	    while(typeof x === "object") { ret.push(x.length); x = x[0]; }
	    return ret;
	}

	numeric.dim = function dim(x) {
	    var y,z;
	    if(typeof x === "object") {
	        y = x[0];
	        if(typeof y === "object") {
	            z = y[0];
	            if(typeof z === "object") {
	                return numeric._dim(x);
	            }
	            return [x.length,y.length];
	        }
	        return [x.length];
	    }
	    return [];
	}

	numeric.mapreduce = function mapreduce(body,init) {
	    return Function('x','accum','_s','_k',
	            'if(typeof accum === "undefined") accum = '+init+';\n'+
	            'if(typeof x === "number") { var xi = x; '+body+'; return accum; }\n'+
	            'if(typeof _s === "undefined") _s = numeric.dim(x);\n'+
	            'if(typeof _k === "undefined") _k = 0;\n'+
	            'var _n = _s[_k];\n'+
	            'var i,xi;\n'+
	            'if(_k < _s.length-1) {\n'+
	            '    for(i=_n-1;i>=0;i--) {\n'+
	            '        accum = arguments.callee(x[i],accum,_s,_k+1);\n'+
	            '    }'+
	            '    return accum;\n'+
	            '}\n'+
	            'for(i=_n-1;i>=1;i-=2) { \n'+
	            '    xi = x[i];\n'+
	            '    '+body+';\n'+
	            '    xi = x[i-1];\n'+
	            '    '+body+';\n'+
	            '}\n'+
	            'if(i === 0) {\n'+
	            '    xi = x[i];\n'+
	            '    '+body+'\n'+
	            '}\n'+
	            'return accum;'
	            );
	}
	numeric.mapreduce2 = function mapreduce2(body,setup) {
	    return Function('x',
	            'var n = x.length;\n'+
	            'var i,xi;\n'+setup+';\n'+
	            'for(i=n-1;i!==-1;--i) { \n'+
	            '    xi = x[i];\n'+
	            '    '+body+';\n'+
	            '}\n'+
	            'return accum;'
	            );
	}


	numeric.same = function same(x,y) {
	    var i,n;
	    if(!(x instanceof Array) || !(y instanceof Array)) { return false; }
	    n = x.length;
	    if(n !== y.length) { return false; }
	    for(i=0;i<n;i++) {
	        if(x[i] === y[i]) { continue; }
	        if(typeof x[i] === "object") { if(!same(x[i],y[i])) return false; }
	        else { return false; }
	    }
	    return true;
	}

	numeric.rep = function rep(s,v,k) {
	    if(typeof k === "undefined") { k=0; }
	    var n = s[k], ret = Array(n), i;
	    if(k === s.length-1) {
	        for(i=n-2;i>=0;i-=2) { ret[i+1] = v; ret[i] = v; }
	        if(i===-1) { ret[0] = v; }
	        return ret;
	    }
	    for(i=n-1;i>=0;i--) { ret[i] = numeric.rep(s,v,k+1); }
	    return ret;
	}


	numeric.dotMMsmall = function dotMMsmall(x,y) {
	    var i,j,k,p,q,r,ret,foo,bar,woo,i0,k0,p0,r0;
	    p = x.length; q = y.length; r = y[0].length;
	    ret = Array(p);
	    for(i=p-1;i>=0;i--) {
	        foo = Array(r);
	        bar = x[i];
	        for(k=r-1;k>=0;k--) {
	            woo = bar[q-1]*y[q-1][k];
	            for(j=q-2;j>=1;j-=2) {
	                i0 = j-1;
	                woo += bar[j]*y[j][k] + bar[i0]*y[i0][k];
	            }
	            if(j===0) { woo += bar[0]*y[0][k]; }
	            foo[k] = woo;
	        }
	        ret[i] = foo;
	    }
	    return ret;
	}
	numeric._getCol = function _getCol(A,j,x) {
	    var n = A.length, i;
	    for(i=n-1;i>0;--i) {
	        x[i] = A[i][j];
	        --i;
	        x[i] = A[i][j];
	    }
	    if(i===0) x[0] = A[0][j];
	}
	numeric.dotMMbig = function dotMMbig(x,y){
	    var gc = numeric._getCol, p = y.length, v = Array(p);
	    var m = x.length, n = y[0].length, A = new Array(m), xj;
	    var VV = numeric.dotVV;
	    var i,j,k,z;
	    --p;
	    --m;
	    for(i=m;i!==-1;--i) A[i] = Array(n);
	    --n;
	    for(i=n;i!==-1;--i) {
	        gc(y,i,v);
	        for(j=m;j!==-1;--j) {
	            z=0;
	            xj = x[j];
	            A[j][i] = VV(xj,v);
	        }
	    }
	    return A;
	}

	numeric.dotMV = function dotMV(x,y) {
	    var p = x.length, q = y.length,i;
	    var ret = Array(p), dotVV = numeric.dotVV;
	    for(i=p-1;i>=0;i--) { ret[i] = dotVV(x[i],y); }
	    return ret;
	}

	numeric.dotVM = function dotVM(x,y) {
	    var i,j,k,p,q,r,ret,foo,bar,woo,i0,k0,p0,r0,s1,s2,s3,baz,accum;
	    p = x.length; q = y[0].length;
	    ret = Array(q);
	    for(k=q-1;k>=0;k--) {
	        woo = x[p-1]*y[p-1][k];
	        for(j=p-2;j>=1;j-=2) {
	            i0 = j-1;
	            woo += x[j]*y[j][k] + x[i0]*y[i0][k];
	        }
	        if(j===0) { woo += x[0]*y[0][k]; }
	        ret[k] = woo;
	    }
	    return ret;
	}

	numeric.dotVV = function dotVV(x,y) {
	    var i,n=x.length,i1,ret = x[n-1]*y[n-1];
	    for(i=n-2;i>=1;i-=2) {
	        i1 = i-1;
	        ret += x[i]*y[i] + x[i1]*y[i1];
	    }
	    if(i===0) { ret += x[0]*y[0]; }
	    return ret;
	}

	numeric.dot = function dot(x,y) {
	    var d = numeric.dim;
	    switch(d(x).length*1000+d(y).length) {
	    case 2002:
	        if(y.length < 10) return numeric.dotMMsmall(x,y);
	        else return numeric.dotMMbig(x,y);
	    case 2001: return numeric.dotMV(x,y);
	    case 1002: return numeric.dotVM(x,y);
	    case 1001: return numeric.dotVV(x,y);
	    case 1000: return numeric.mulVS(x,y);
	    case 1: return numeric.mulSV(x,y);
	    case 0: return x*y;
	    default: throw new Error('numeric.dot only works on vectors and matrices');
	    }
	}

	numeric.diag = function diag(d) {
	    var i,i1,j,n = d.length, A = Array(n), Ai;
	    for(i=n-1;i>=0;i--) {
	        Ai = Array(n);
	        i1 = i+2;
	        for(j=n-1;j>=i1;j-=2) {
	            Ai[j] = 0;
	            Ai[j-1] = 0;
	        }
	        if(j>i) { Ai[j] = 0; }
	        Ai[i] = d[i];
	        for(j=i-1;j>=1;j-=2) {
	            Ai[j] = 0;
	            Ai[j-1] = 0;
	        }
	        if(j===0) { Ai[0] = 0; }
	        A[i] = Ai;
	    }
	    return A;
	}
	numeric.getDiag = function(A) {
	    var n = Math.min(A.length,A[0].length),i,ret = Array(n);
	    for(i=n-1;i>=1;--i) {
	        ret[i] = A[i][i];
	        --i;
	        ret[i] = A[i][i];
	    }
	    if(i===0) {
	        ret[0] = A[0][0];
	    }
	    return ret;
	}

	numeric.identity = function identity(n) { return numeric.diag(numeric.rep([n],1)); }
	numeric.pointwise = function pointwise(params,body,setup) {
	    if(typeof setup === "undefined") { setup = ""; }
	    var fun = [];
	    var k;
	    var avec = /\[i\]$/,p,thevec = '';
	    var haveret = false;
	    for(k=0;k<params.length;k++) {
	        if(avec.test(params[k])) {
	            p = params[k].substring(0,params[k].length-3);
	            thevec = p;
	        } else { p = params[k]; }
	        if(p==='ret') haveret = true;
	        fun.push(p);
	    }
	    fun[params.length] = '_s';
	    fun[params.length+1] = '_k';
	    fun[params.length+2] = (
	            'if(typeof _s === "undefined") _s = numeric.dim('+thevec+');\n'+
	            'if(typeof _k === "undefined") _k = 0;\n'+
	            'var _n = _s[_k];\n'+
	            'var i'+(haveret?'':', ret = Array(_n)')+';\n'+
	            'if(_k < _s.length-1) {\n'+
	            '    for(i=_n-1;i>=0;i--) ret[i] = arguments.callee('+params.join(',')+',_s,_k+1);\n'+
	            '    return ret;\n'+
	            '}\n'+
	            setup+'\n'+
	            'for(i=_n-1;i!==-1;--i) {\n'+
	            '    '+body+'\n'+
	            '}\n'+
	            'return ret;'
	            );
	    return Function.apply(null,fun);
	}
	numeric.pointwise2 = function pointwise2(params,body,setup) {
	    if(typeof setup === "undefined") { setup = ""; }
	    var fun = [];
	    var k;
	    var avec = /\[i\]$/,p,thevec = '';
	    var haveret = false;
	    for(k=0;k<params.length;k++) {
	        if(avec.test(params[k])) {
	            p = params[k].substring(0,params[k].length-3);
	            thevec = p;
	        } else { p = params[k]; }
	        if(p==='ret') haveret = true;
	        fun.push(p);
	    }
	    fun[params.length] = (
	            'var _n = '+thevec+'.length;\n'+
	            'var i'+(haveret?'':', ret = Array(_n)')+';\n'+
	            setup+'\n'+
	            'for(i=_n-1;i!==-1;--i) {\n'+
	            body+'\n'+
	            '}\n'+
	            'return ret;'
	            );
	    return Function.apply(null,fun);
	}
	numeric._biforeach = (function _biforeach(x,y,s,k,f) {
	    if(k === s.length-1) { f(x,y); return; }
	    var i,n=s[k];
	    for(i=n-1;i>=0;i--) { _biforeach(typeof x==="object"?x[i]:x,typeof y==="object"?y[i]:y,s,k+1,f); }
	});
	numeric._biforeach2 = (function _biforeach2(x,y,s,k,f) {
	    if(k === s.length-1) { return f(x,y); }
	    var i,n=s[k],ret = Array(n);
	    for(i=n-1;i>=0;--i) { ret[i] = _biforeach2(typeof x==="object"?x[i]:x,typeof y==="object"?y[i]:y,s,k+1,f); }
	    return ret;
	});
	numeric._foreach = (function _foreach(x,s,k,f) {
	    if(k === s.length-1) { f(x); return; }
	    var i,n=s[k];
	    for(i=n-1;i>=0;i--) { _foreach(x[i],s,k+1,f); }
	});
	numeric._foreach2 = (function _foreach2(x,s,k,f) {
	    if(k === s.length-1) { return f(x); }
	    var i,n=s[k], ret = Array(n);
	    for(i=n-1;i>=0;i--) { ret[i] = _foreach2(x[i],s,k+1,f); }
	    return ret;
	});

	/*numeric.anyV = numeric.mapreduce('if(xi) return true;','false');
	numeric.allV = numeric.mapreduce('if(!xi) return false;','true');
	numeric.any = function(x) { if(typeof x.length === "undefined") return x; return numeric.anyV(x); }
	numeric.all = function(x) { if(typeof x.length === "undefined") return x; return numeric.allV(x); }*/

	numeric.ops2 = {
	        add: '+',
	        sub: '-',
	        mul: '*',
	        div: '/',
	        mod: '%',
	        and: '&&',
	        or:  '||',
	        eq:  '===',
	        neq: '!==',
	        lt:  '<',
	        gt:  '>',
	        leq: '<=',
	        geq: '>=',
	        band: '&',
	        bor: '|',
	        bxor: '^',
	        lshift: '<<',
	        rshift: '>>',
	        rrshift: '>>>'
	};
	numeric.opseq = {
	        addeq: '+=',
	        subeq: '-=',
	        muleq: '*=',
	        diveq: '/=',
	        modeq: '%=',
	        lshifteq: '<<=',
	        rshifteq: '>>=',
	        rrshifteq: '>>>=',
	        bandeq: '&=',
	        boreq: '|=',
	        bxoreq: '^='
	};
	numeric.mathfuns = ['abs','acos','asin','atan','ceil','cos',
	                    'exp','floor','log','round','sin','sqrt','tan',
	                    'isNaN','isFinite'];
	numeric.mathfuns2 = ['atan2','pow','max','min'];
	numeric.ops1 = {
	        neg: '-',
	        not: '!',
	        bnot: '~',
	        clone: ''
	};
	numeric.mapreducers = {
	        any: ['if(xi) return true;','var accum = false;'],
	        all: ['if(!xi) return false;','var accum = true;'],
	        sum: ['accum += xi;','var accum = 0;'],
	        prod: ['accum *= xi;','var accum = 1;'],
	        norm2Squared: ['accum += xi*xi;','var accum = 0;'],
	        norminf: ['accum = max(accum,abs(xi));','var accum = 0, max = Math.max, abs = Math.abs;'],
	        norm1: ['accum += abs(xi)','var accum = 0, abs = Math.abs;'],
	        sup: ['accum = max(accum,xi);','var accum = -Infinity, max = Math.max;'],
	        inf: ['accum = min(accum,xi);','var accum = Infinity, min = Math.min;']
	};

	(function () {
	    var i,o;
	    for(i=0;i<numeric.mathfuns2.length;++i) {
	        o = numeric.mathfuns2[i];
	        numeric.ops2[o] = o;
	    }
	    for(i in numeric.ops2) {
	        if(numeric.ops2.hasOwnProperty(i)) {
	            o = numeric.ops2[i];
	            var code, codeeq, setup = '';
	            if(numeric.myIndexOf.call(numeric.mathfuns2,i)!==-1) {
	                setup = 'var '+o+' = Math.'+o+';\n';
	                code = function(r,x,y) { return r+' = '+o+'('+x+','+y+')'; };
	                codeeq = function(x,y) { return x+' = '+o+'('+x+','+y+')'; };
	            } else {
	                code = function(r,x,y) { return r+' = '+x+' '+o+' '+y; };
	                if(numeric.opseq.hasOwnProperty(i+'eq')) {
	                    codeeq = function(x,y) { return x+' '+o+'= '+y; };
	                } else {
	                    codeeq = function(x,y) { return x+' = '+x+' '+o+' '+y; };                    
	                }
	            }
	            numeric[i+'VV'] = numeric.pointwise2(['x[i]','y[i]'],code('ret[i]','x[i]','y[i]'),setup);
	            numeric[i+'SV'] = numeric.pointwise2(['x','y[i]'],code('ret[i]','x','y[i]'),setup);
	            numeric[i+'VS'] = numeric.pointwise2(['x[i]','y'],code('ret[i]','x[i]','y'),setup);
	            numeric[i] = Function(
	                    'var n = arguments.length, i, x = arguments[0], y;\n'+
	                    'var VV = numeric.'+i+'VV, VS = numeric.'+i+'VS, SV = numeric.'+i+'SV;\n'+
	                    'var dim = numeric.dim;\n'+
	                    'for(i=1;i!==n;++i) { \n'+
	                    '  y = arguments[i];\n'+
	                    '  if(typeof x === "object") {\n'+
	                    '      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);\n'+
	                    '      else x = numeric._biforeach2(x,y,dim(x),0,VS);\n'+
	                    '  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);\n'+
	                    '  else '+codeeq('x','y')+'\n'+
	                    '}\nreturn x;\n');
	            numeric[o] = numeric[i];
	            numeric[i+'eqV'] = numeric.pointwise2(['ret[i]','x[i]'], codeeq('ret[i]','x[i]'),setup);
	            numeric[i+'eqS'] = numeric.pointwise2(['ret[i]','x'], codeeq('ret[i]','x'),setup);
	            numeric[i+'eq'] = Function(
	                    'var n = arguments.length, i, x = arguments[0], y;\n'+
	                    'var V = numeric.'+i+'eqV, S = numeric.'+i+'eqS\n'+
	                    'var s = numeric.dim(x);\n'+
	                    'for(i=1;i!==n;++i) { \n'+
	                    '  y = arguments[i];\n'+
	                    '  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);\n'+
	                    '  else numeric._biforeach(x,y,s,0,S);\n'+
	                    '}\nreturn x;\n');
	        }
	    }
	    for(i=0;i<numeric.mathfuns2.length;++i) {
	        o = numeric.mathfuns2[i];
	        delete numeric.ops2[o];
	    }
	    for(i=0;i<numeric.mathfuns.length;++i) {
	        o = numeric.mathfuns[i];
	        numeric.ops1[o] = o;
	    }
	    for(i in numeric.ops1) {
	        if(numeric.ops1.hasOwnProperty(i)) {
	            setup = '';
	            o = numeric.ops1[i];
	            if(numeric.myIndexOf.call(numeric.mathfuns,i)!==-1) {
	                if(Math.hasOwnProperty(o)) setup = 'var '+o+' = Math.'+o+';\n';
	            }
	            numeric[i+'eqV'] = numeric.pointwise2(['ret[i]'],'ret[i] = '+o+'(ret[i]);',setup);
	            numeric[i+'eq'] = Function('x',
	                    'if(typeof x !== "object") return '+o+'x\n'+
	                    'var i;\n'+
	                    'var V = numeric.'+i+'eqV;\n'+
	                    'var s = numeric.dim(x);\n'+
	                    'numeric._foreach(x,s,0,V);\n'+
	                    'return x;\n');
	            numeric[i+'V'] = numeric.pointwise2(['x[i]'],'ret[i] = '+o+'(x[i]);',setup);
	            numeric[i] = Function('x',
	                    'if(typeof x !== "object") return '+o+'(x)\n'+
	                    'var i;\n'+
	                    'var V = numeric.'+i+'V;\n'+
	                    'var s = numeric.dim(x);\n'+
	                    'return numeric._foreach2(x,s,0,V);\n');
	        }
	    }
	    for(i=0;i<numeric.mathfuns.length;++i) {
	        o = numeric.mathfuns[i];
	        delete numeric.ops1[o];
	    }
	    for(i in numeric.mapreducers) {
	        if(numeric.mapreducers.hasOwnProperty(i)) {
	            o = numeric.mapreducers[i];
	            numeric[i+'V'] = numeric.mapreduce2(o[0],o[1]);
	            numeric[i] = Function('x','s','k',
	                    o[1]+
	                    'if(typeof x !== "object") {'+
	                    '    xi = x;\n'+
	                    o[0]+';\n'+
	                    '    return accum;\n'+
	                    '}'+
	                    'if(typeof s === "undefined") s = numeric.dim(x);\n'+
	                    'if(typeof k === "undefined") k = 0;\n'+
	                    'if(k === s.length-1) return numeric.'+i+'V(x);\n'+
	                    'var xi;\n'+
	                    'var n = x.length, i;\n'+
	                    'for(i=n-1;i!==-1;--i) {\n'+
	                    '   xi = arguments.callee(x[i]);\n'+
	                    o[0]+';\n'+
	                    '}\n'+
	                    'return accum;\n');
	        }
	    }
	}());

	numeric.truncVV = numeric.pointwise(['x[i]','y[i]'],'ret[i] = round(x[i]/y[i])*y[i];','var round = Math.round;');
	numeric.truncVS = numeric.pointwise(['x[i]','y'],'ret[i] = round(x[i]/y)*y;','var round = Math.round;');
	numeric.truncSV = numeric.pointwise(['x','y[i]'],'ret[i] = round(x/y[i])*y[i];','var round = Math.round;');
	numeric.trunc = function trunc(x,y) {
	    if(typeof x === "object") {
	        if(typeof y === "object") return numeric.truncVV(x,y);
	        return numeric.truncVS(x,y);
	    }
	    if (typeof y === "object") return numeric.truncSV(x,y);
	    return Math.round(x/y)*y;
	}

	numeric.inv = function inv(x) {
	    var s = numeric.dim(x), abs = Math.abs, m = s[0], n = s[1];
	    var A = numeric.clone(x), Ai, Aj;
	    var I = numeric.identity(m), Ii, Ij;
	    var i,j,k,x;
	    for(j=0;j<n;++j) {
	        var i0 = -1;
	        var v0 = -1;
	        for(i=j;i!==m;++i) { k = abs(A[i][j]); if(k>v0) { i0 = i; v0 = k; } }
	        Aj = A[i0]; A[i0] = A[j]; A[j] = Aj;
	        Ij = I[i0]; I[i0] = I[j]; I[j] = Ij;
	        x = Aj[j];
	        for(k=j;k!==n;++k)    Aj[k] /= x; 
	        for(k=n-1;k!==-1;--k) Ij[k] /= x;
	        for(i=m-1;i!==-1;--i) {
	            if(i!==j) {
	                Ai = A[i];
	                Ii = I[i];
	                x = Ai[j];
	                for(k=j+1;k!==n;++k)  Ai[k] -= Aj[k]*x;
	                for(k=n-1;k>0;--k) { Ii[k] -= Ij[k]*x; --k; Ii[k] -= Ij[k]*x; }
	                if(k===0) Ii[0] -= Ij[0]*x;
	            }
	        }
	    }
	    return I;
	}

	numeric.det = function det(x) {
	    var s = numeric.dim(x);
	    if(s.length !== 2 || s[0] !== s[1]) { throw new Error('numeric: det() only works on square matrices'); }
	    var n = s[0], ret = 1,i,j,k,A = numeric.clone(x),Aj,Ai,alpha,temp,k1,k2,k3;
	    for(j=0;j<n-1;j++) {
	        k=j;
	        for(i=j+1;i<n;i++) { if(Math.abs(A[i][j]) > Math.abs(A[k][j])) { k = i; } }
	        if(k !== j) {
	            temp = A[k]; A[k] = A[j]; A[j] = temp;
	            ret *= -1;
	        }
	        Aj = A[j];
	        for(i=j+1;i<n;i++) {
	            Ai = A[i];
	            alpha = Ai[j]/Aj[j];
	            for(k=j+1;k<n-1;k+=2) {
	                k1 = k+1;
	                Ai[k] -= Aj[k]*alpha;
	                Ai[k1] -= Aj[k1]*alpha;
	            }
	            if(k!==n) { Ai[k] -= Aj[k]*alpha; }
	        }
	        if(Aj[j] === 0) { return 0; }
	        ret *= Aj[j];
	    }
	    return ret*A[j][j];
	}

	numeric.transpose = function transpose(x) {
	    var i,j,m = x.length,n = x[0].length, ret=Array(n),A0,A1,Bj;
	    for(j=0;j<n;j++) ret[j] = Array(m);
	    for(i=m-1;i>=1;i-=2) {
	        A1 = x[i];
	        A0 = x[i-1];
	        for(j=n-1;j>=1;--j) {
	            Bj = ret[j]; Bj[i] = A1[j]; Bj[i-1] = A0[j];
	            --j;
	            Bj = ret[j]; Bj[i] = A1[j]; Bj[i-1] = A0[j];
	        }
	        if(j===0) {
	            Bj = ret[0]; Bj[i] = A1[0]; Bj[i-1] = A0[0];
	        }
	    }
	    if(i===0) {
	        A0 = x[0];
	        for(j=n-1;j>=1;--j) {
	            ret[j][0] = A0[j];
	            --j;
	            ret[j][0] = A0[j];
	        }
	        if(j===0) { ret[0][0] = A0[0]; }
	    }
	    return ret;
	}
	numeric.negtranspose = function negtranspose(x) {
	    var i,j,m = x.length,n = x[0].length, ret=Array(n),A0,A1,Bj;
	    for(j=0;j<n;j++) ret[j] = Array(m);
	    for(i=m-1;i>=1;i-=2) {
	        A1 = x[i];
	        A0 = x[i-1];
	        for(j=n-1;j>=1;--j) {
	            Bj = ret[j]; Bj[i] = -A1[j]; Bj[i-1] = -A0[j];
	            --j;
	            Bj = ret[j]; Bj[i] = -A1[j]; Bj[i-1] = -A0[j];
	        }
	        if(j===0) {
	            Bj = ret[0]; Bj[i] = -A1[0]; Bj[i-1] = -A0[0];
	        }
	    }
	    if(i===0) {
	        A0 = x[0];
	        for(j=n-1;j>=1;--j) {
	            ret[j][0] = -A0[j];
	            --j;
	            ret[j][0] = -A0[j];
	        }
	        if(j===0) { ret[0][0] = -A0[0]; }
	    }
	    return ret;
	}

	numeric._random = function _random(s,k) {
	    var i,n=s[k],ret=Array(n), rnd;
	    if(k === s.length-1) {
	        rnd = Math.random;
	        for(i=n-1;i>=1;i-=2) {
	            ret[i] = rnd();
	            ret[i-1] = rnd();
	        }
	        if(i===0) { ret[0] = rnd(); }
	        return ret;
	    }
	    for(i=n-1;i>=0;i--) ret[i] = _random(s,k+1);
	    return ret;
	}
	numeric.random = function random(s) { return numeric._random(s,0); }

	numeric.norm2 = function norm2(x) { return Math.sqrt(numeric.norm2Squared(x)); }

	numeric.linspace = function linspace(a,b,n) {
	    if(typeof n === "undefined") n = Math.max(Math.round(b-a)+1,1);
	    if(n<2) { return n===1?[a]:[]; }
	    var i,ret = Array(n);
	    n--;
	    for(i=n;i>=0;i--) { ret[i] = (i*b+(n-i)*a)/n; }
	    return ret;
	}

	numeric.getBlock = function getBlock(x,from,to) {
	    var s = numeric.dim(x);
	    function foo(x,k) {
	        var i,a = from[k], n = to[k]-a, ret = Array(n);
	        if(k === s.length-1) {
	            for(i=n;i>=0;i--) { ret[i] = x[i+a]; }
	            return ret;
	        }
	        for(i=n;i>=0;i--) { ret[i] = foo(x[i+a],k+1); }
	        return ret;
	    }
	    return foo(x,0);
	}

	numeric.setBlock = function setBlock(x,from,to,B) {
	    var s = numeric.dim(x);
	    function foo(x,y,k) {
	        var i,a = from[k], n = to[k]-a;
	        if(k === s.length-1) { for(i=n;i>=0;i--) { x[i+a] = y[i]; } }
	        for(i=n;i>=0;i--) { foo(x[i+a],y[i],k+1); }
	    }
	    foo(x,B,0);
	    return x;
	}

	numeric.getRange = function getRange(A,I,J) {
	    var m = I.length, n = J.length;
	    var i,j;
	    var B = Array(m), Bi, AI;
	    for(i=m-1;i!==-1;--i) {
	        B[i] = Array(n);
	        Bi = B[i];
	        AI = A[I[i]];
	        for(j=n-1;j!==-1;--j) Bi[j] = AI[J[j]];
	    }
	    return B;
	}

	numeric.blockMatrix = function blockMatrix(X) {
	    var s = numeric.dim(X);
	    if(s.length<4) return numeric.blockMatrix([X]);
	    var m=s[0],n=s[1],M,N,i,j,Xij;
	    M = 0; N = 0;
	    for(i=0;i<m;++i) M+=X[i][0].length;
	    for(j=0;j<n;++j) N+=X[0][j][0].length;
	    var Z = Array(M);
	    for(i=0;i<M;++i) Z[i] = Array(N);
	    var I=0,J,ZI,k,l,Xijk;
	    for(i=0;i<m;++i) {
	        J=N;
	        for(j=n-1;j!==-1;--j) {
	            Xij = X[i][j];
	            J -= Xij[0].length;
	            for(k=Xij.length-1;k!==-1;--k) {
	                Xijk = Xij[k];
	                ZI = Z[I+k];
	                for(l = Xijk.length-1;l!==-1;--l) ZI[J+l] = Xijk[l];
	            }
	        }
	        I += X[i][0].length;
	    }
	    return Z;
	}

	numeric.tensor = function tensor(x,y) {
	    if(typeof x === "number" || typeof y === "number") return numeric.mul(x,y);
	    var s1 = numeric.dim(x), s2 = numeric.dim(y);
	    if(s1.length !== 1 || s2.length !== 1) {
	        throw new Error('numeric: tensor product is only defined for vectors');
	    }
	    var m = s1[0], n = s2[0], A = Array(m), Ai, i,j,xi;
	    for(i=m-1;i>=0;i--) {
	        Ai = Array(n);
	        xi = x[i];
	        for(j=n-1;j>=3;--j) {
	            Ai[j] = xi * y[j];
	            --j;
	            Ai[j] = xi * y[j];
	            --j;
	            Ai[j] = xi * y[j];
	            --j;
	            Ai[j] = xi * y[j];
	        }
	        while(j>=0) { Ai[j] = xi * y[j]; --j; }
	        A[i] = Ai;
	    }
	    return A;
	}

	// 3. The Tensor type T
	numeric.T = function T(x,y) { this.x = x; this.y = y; }
	numeric.t = function t(x,y) { return new numeric.T(x,y); }

	numeric.Tbinop = function Tbinop(rr,rc,cr,cc,setup) {
	    var io = numeric.indexOf;
	    if(typeof setup !== "string") {
	        var k;
	        setup = '';
	        for(k in numeric) {
	            if(numeric.hasOwnProperty(k) && (rr.indexOf(k)>=0 || rc.indexOf(k)>=0 || cr.indexOf(k)>=0 || cc.indexOf(k)>=0) && k.length>1) {
	                setup += 'var '+k+' = numeric.'+k+';\n';
	            }
	        }
	    }
	    return Function(['y'],
	            'var x = this;\n'+
	            'if(!(y instanceof numeric.T)) { y = new numeric.T(y); }\n'+
	            setup+'\n'+
	            'if(x.y) {'+
	            '  if(y.y) {'+
	            '    return new numeric.T('+cc+');\n'+
	            '  }\n'+
	            '  return new numeric.T('+cr+');\n'+
	            '}\n'+
	            'if(y.y) {\n'+
	            '  return new numeric.T('+rc+');\n'+
	            '}\n'+
	            'return new numeric.T('+rr+');\n'
	    );
	}

	numeric.T.prototype.add = numeric.Tbinop(
	        'add(x.x,y.x)',
	        'add(x.x,y.x),y.y',
	        'add(x.x,y.x),x.y',
	        'add(x.x,y.x),add(x.y,y.y)');
	numeric.T.prototype.sub = numeric.Tbinop(
	        'sub(x.x,y.x)',
	        'sub(x.x,y.x),neg(y.y)',
	        'sub(x.x,y.x),x.y',
	        'sub(x.x,y.x),sub(x.y,y.y)');
	numeric.T.prototype.mul = numeric.Tbinop(
	        'mul(x.x,y.x)',
	        'mul(x.x,y.x),mul(x.x,y.y)',
	        'mul(x.x,y.x),mul(x.y,y.x)',
	        'sub(mul(x.x,y.x),mul(x.y,y.y)),add(mul(x.x,y.y),mul(x.y,y.x))');

	numeric.T.prototype.reciprocal = function reciprocal() {
	    var mul = numeric.mul, div = numeric.div;
	    if(this.y) {
	        var d = numeric.add(mul(this.x,this.x),mul(this.y,this.y));
	        return new numeric.T(div(this.x,d),div(numeric.neg(this.y),d));
	    }
	    return new T(div(1,this.x));
	}
	numeric.T.prototype.div = function div(y) {
	    if(!(y instanceof numeric.T)) y = new numeric.T(y);
	    if(y.y) { return this.mul(y.reciprocal()); }
	    var div = numeric.div;
	    if(this.y) { return new numeric.T(div(this.x,y.x),div(this.y,y.x)); }
	    return new numeric.T(div(this.x,y.x));
	}
	numeric.T.prototype.dot = numeric.Tbinop(
	        'dot(x.x,y.x)',
	        'dot(x.x,y.x),dot(x.x,y.y)',
	        'dot(x.x,y.x),dot(x.y,y.x)',
	        'sub(dot(x.x,y.x),dot(x.y,y.y)),add(dot(x.x,y.y),dot(x.y,y.x))'
	        );
	numeric.T.prototype.transpose = function transpose() {
	    var t = numeric.transpose, x = this.x, y = this.y;
	    if(y) { return new numeric.T(t(x),t(y)); }
	    return new numeric.T(t(x));
	}
	numeric.T.prototype.transjugate = function transjugate() {
	    var t = numeric.transpose, x = this.x, y = this.y;
	    if(y) { return new numeric.T(t(x),numeric.negtranspose(y)); }
	    return new numeric.T(t(x));
	}
	numeric.Tunop = function Tunop(r,c,s) {
	    if(typeof s !== "string") { s = ''; }
	    return Function(
	            'var x = this;\n'+
	            s+'\n'+
	            'if(x.y) {'+
	            '  '+c+';\n'+
	            '}\n'+
	            r+';\n'
	    );
	}

	numeric.T.prototype.exp = numeric.Tunop(
	        'return new numeric.T(ex)',
	        'return new numeric.T(mul(cos(x.y),ex),mul(sin(x.y),ex))',
	        'var ex = numeric.exp(x.x), cos = numeric.cos, sin = numeric.sin, mul = numeric.mul;');
	numeric.T.prototype.conj = numeric.Tunop(
	        'return new numeric.T(x.x);',
	        'return new numeric.T(x.x,numeric.neg(x.y));');
	numeric.T.prototype.neg = numeric.Tunop(
	        'return new numeric.T(neg(x.x));',
	        'return new numeric.T(neg(x.x),neg(x.y));',
	        'var neg = numeric.neg;');
	numeric.T.prototype.sin = numeric.Tunop(
	        'return new numeric.T(numeric.sin(x.x))',
	        'return x.exp().sub(x.neg().exp()).div(new numeric.T(0,2));');
	numeric.T.prototype.cos = numeric.Tunop(
	        'return new numeric.T(numeric.cos(x.x))',
	        'return x.exp().add(x.neg().exp()).div(2);');
	numeric.T.prototype.abs = numeric.Tunop(
	        'return new numeric.T(numeric.abs(x.x));',
	        'return new numeric.T(numeric.sqrt(numeric.add(mul(x.x,x.x),mul(x.y,x.y))));',
	        'var mul = numeric.mul;');
	numeric.T.prototype.log = numeric.Tunop(
	        'return new numeric.T(numeric.log(x.x));',
	        'var theta = new numeric.T(numeric.atan2(x.y,x.x)), r = x.abs();\n'+
	        'return new numeric.T(numeric.log(r.x),theta.x);');
	numeric.T.prototype.norm2 = numeric.Tunop(
	        'return numeric.norm2(x.x);',
	        'var f = numeric.norm2Squared;\n'+
	        'return Math.sqrt(f(x.x)+f(x.y));');
	numeric.T.prototype.inv = function inv() {
	    var A = this;
	    if(typeof A.y === "undefined") { return new numeric.T(numeric.inv(A.x)); }
	    var n = A.x.length, i, j, k;
	    var Rx = numeric.identity(n),Ry = numeric.rep([n,n],0);
	    var Ax = numeric.clone(A.x), Ay = numeric.clone(A.y);
	    var Aix, Aiy, Ajx, Ajy, Rix, Riy, Rjx, Rjy;
	    var i,j,k,d,d1,ax,ay,bx,by,temp;
	    for(i=0;i<n;i++) {
	        ax = Ax[i][i]; ay = Ay[i][i];
	        d = ax*ax+ay*ay;
	        k = i;
	        for(j=i+1;j<n;j++) {
	            ax = Ax[j][i]; ay = Ay[j][i];
	            d1 = ax*ax+ay*ay;
	            if(d1 > d) { k=j; d = d1; }
	        }
	        if(k!==i) {
	            temp = Ax[i]; Ax[i] = Ax[k]; Ax[k] = temp;
	            temp = Ay[i]; Ay[i] = Ay[k]; Ay[k] = temp;
	            temp = Rx[i]; Rx[i] = Rx[k]; Rx[k] = temp;
	            temp = Ry[i]; Ry[i] = Ry[k]; Ry[k] = temp;
	        }
	        Aix = Ax[i]; Aiy = Ay[i];
	        Rix = Rx[i]; Riy = Ry[i];
	        ax = Aix[i]; ay = Aiy[i];
	        for(j=i+1;j<n;j++) {
	            bx = Aix[j]; by = Aiy[j];
	            Aix[j] = (bx*ax+by*ay)/d;
	            Aiy[j] = (by*ax-bx*ay)/d;
	        }
	        for(j=0;j<n;j++) {
	            bx = Rix[j]; by = Riy[j];
	            Rix[j] = (bx*ax+by*ay)/d;
	            Riy[j] = (by*ax-bx*ay)/d;
	        }
	        for(j=i+1;j<n;j++) {
	            Ajx = Ax[j]; Ajy = Ay[j];
	            Rjx = Rx[j]; Rjy = Ry[j];
	            ax = Ajx[i]; ay = Ajy[i];
	            for(k=i+1;k<n;k++) {
	                bx = Aix[k]; by = Aiy[k];
	                Ajx[k] -= bx*ax-by*ay;
	                Ajy[k] -= by*ax+bx*ay;
	            }
	            for(k=0;k<n;k++) {
	                bx = Rix[k]; by = Riy[k];
	                Rjx[k] -= bx*ax-by*ay;
	                Rjy[k] -= by*ax+bx*ay;
	            }
	        }
	    }
	    for(i=n-1;i>0;i--) {
	        Rix = Rx[i]; Riy = Ry[i];
	        for(j=i-1;j>=0;j--) {
	            Rjx = Rx[j]; Rjy = Ry[j];
	            ax = Ax[j][i]; ay = Ay[j][i];
	            for(k=n-1;k>=0;k--) {
	                bx = Rix[k]; by = Riy[k];
	                Rjx[k] -= ax*bx - ay*by;
	                Rjy[k] -= ax*by + ay*bx;
	            }
	        }
	    }
	    return new numeric.T(Rx,Ry);
	}
	numeric.T.prototype.get = function get(i) {
	    var x = this.x, y = this.y, k = 0, ik, n = i.length;
	    if(y) {
	        while(k<n) {
	            ik = i[k];
	            x = x[ik];
	            y = y[ik];
	            k++;
	        }
	        return new numeric.T(x,y);
	    }
	    while(k<n) {
	        ik = i[k];
	        x = x[ik];
	        k++;
	    }
	    return new numeric.T(x);
	}
	numeric.T.prototype.set = function set(i,v) {
	    var x = this.x, y = this.y, k = 0, ik, n = i.length, vx = v.x, vy = v.y;
	    if(n===0) {
	        if(vy) { this.y = vy; }
	        else if(y) { this.y = undefined; }
	        this.x = x;
	        return this;
	    }
	    if(vy) {
	        if(y) { /* ok */ }
	        else {
	            y = numeric.rep(numeric.dim(x),0);
	            this.y = y;
	        }
	        while(k<n-1) {
	            ik = i[k];
	            x = x[ik];
	            y = y[ik];
	            k++;
	        }
	        ik = i[k];
	        x[ik] = vx;
	        y[ik] = vy;
	        return this;
	    }
	    if(y) {
	        while(k<n-1) {
	            ik = i[k];
	            x = x[ik];
	            y = y[ik];
	            k++;
	        }
	        ik = i[k];
	        x[ik] = vx;
	        if(vx instanceof Array) y[ik] = numeric.rep(numeric.dim(vx),0);
	        else y[ik] = 0;
	        return this;
	    }
	    while(k<n-1) {
	        ik = i[k];
	        x = x[ik];
	        k++;
	    }
	    ik = i[k];
	    x[ik] = vx;
	    return this;
	}
	numeric.T.prototype.getRows = function getRows(i0,i1) {
	    var n = i1-i0+1, j;
	    var rx = Array(n), ry, x = this.x, y = this.y;
	    for(j=i0;j<=i1;j++) { rx[j-i0] = x[j]; }
	    if(y) {
	        ry = Array(n);
	        for(j=i0;j<=i1;j++) { ry[j-i0] = y[j]; }
	        return new numeric.T(rx,ry);
	    }
	    return new numeric.T(rx);
	}
	numeric.T.prototype.setRows = function setRows(i0,i1,A) {
	    var j;
	    var rx = this.x, ry = this.y, x = A.x, y = A.y;
	    for(j=i0;j<=i1;j++) { rx[j] = x[j-i0]; }
	    if(y) {
	        if(!ry) { ry = numeric.rep(numeric.dim(rx),0); this.y = ry; }
	        for(j=i0;j<=i1;j++) { ry[j] = y[j-i0]; }
	    } else if(ry) {
	        for(j=i0;j<=i1;j++) { ry[j] = numeric.rep([x[j-i0].length],0); }
	    }
	    return this;
	}
	numeric.T.prototype.getRow = function getRow(k) {
	    var x = this.x, y = this.y;
	    if(y) { return new numeric.T(x[k],y[k]); }
	    return new numeric.T(x[k]);
	}
	numeric.T.prototype.setRow = function setRow(i,v) {
	    var rx = this.x, ry = this.y, x = v.x, y = v.y;
	    rx[i] = x;
	    if(y) {
	        if(!ry) { ry = numeric.rep(numeric.dim(rx),0); this.y = ry; }
	        ry[i] = y;
	    } else if(ry) {
	        ry = numeric.rep([x.length],0);
	    }
	    return this;
	}

	numeric.T.prototype.getBlock = function getBlock(from,to) {
	    var x = this.x, y = this.y, b = numeric.getBlock;
	    if(y) { return new numeric.T(b(x,from,to),b(y,from,to)); }
	    return new numeric.T(b(x,from,to));
	}
	numeric.T.prototype.setBlock = function setBlock(from,to,A) {
	    if(!(A instanceof numeric.T)) A = new numeric.T(A);
	    var x = this.x, y = this.y, b = numeric.setBlock, Ax = A.x, Ay = A.y;
	    if(Ay) {
	        if(!y) { this.y = numeric.rep(numeric.dim(this),0); y = this.y; }
	        b(x,from,to,Ax);
	        b(y,from,to,Ay);
	        return this;
	    }
	    b(x,from,to,Ax);
	    if(y) b(y,from,to,numeric.rep(numeric.dim(Ax),0));
	}
	numeric.T.rep = function rep(s,v) {
	    var T = numeric.T;
	    if(!(v instanceof T)) v = new T(v);
	    var x = v.x, y = v.y, r = numeric.rep;
	    if(y) return new T(r(s,x),r(s,y));
	    return new T(r(s,x));
	}
	numeric.T.diag = function diag(d) {
	    if(!(d instanceof numeric.T)) d = new numeric.T(d);
	    var x = d.x, y = d.y, diag = numeric.diag;
	    if(y) return new numeric.T(diag(x),diag(y));
	    return new numeric.T(diag(x));
	}
	numeric.T.eig = function eig() {
	    if(this.y) { throw new Error('eig: not implemented for complex matrices.'); }
	    return numeric.eig(this.x);
	}
	numeric.T.identity = function identity(n) { return new numeric.T(numeric.identity(n)); }
	numeric.T.prototype.getDiag = function getDiag() {
	    var n = numeric;
	    var x = this.x, y = this.y;
	    if(y) { return new n.T(n.getDiag(x),n.getDiag(y)); }
	    return new n.T(n.getDiag(x));
	}

	// 4. Eigenvalues of real matrices

	numeric.house = function house(x) {
	    var v = numeric.clone(x);
	    var s = x[0] >= 0 ? 1 : -1;
	    var alpha = s*numeric.norm2(x);
	    v[0] += alpha;
	    var foo = numeric.norm2(v);
	    if(foo === 0) { /* this should not happen */ throw new Error('eig: internal error'); }
	    return numeric.div(v,foo);
	}

	numeric.toUpperHessenberg = function toUpperHessenberg(me) {
	    var s = numeric.dim(me);
	    if(s.length !== 2 || s[0] !== s[1]) { throw new Error('numeric: toUpperHessenberg() only works on square matrices'); }
	    var m = s[0], i,j,k,x,v,A = numeric.clone(me),B,C,Ai,Ci,Q = numeric.identity(m),Qi;
	    for(j=0;j<m-2;j++) {
	        x = Array(m-j-1);
	        for(i=j+1;i<m;i++) { x[i-j-1] = A[i][j]; }
	        if(numeric.norm2(x)>0) {
	            v = numeric.house(x);
	            B = numeric.getBlock(A,[j+1,j],[m-1,m-1]);
	            C = numeric.tensor(v,numeric.dot(v,B));
	            for(i=j+1;i<m;i++) { Ai = A[i]; Ci = C[i-j-1]; for(k=j;k<m;k++) Ai[k] -= 2*Ci[k-j]; }
	            B = numeric.getBlock(A,[0,j+1],[m-1,m-1]);
	            C = numeric.tensor(numeric.dot(B,v),v);
	            for(i=0;i<m;i++) { Ai = A[i]; Ci = C[i]; for(k=j+1;k<m;k++) Ai[k] -= 2*Ci[k-j-1]; }
	            B = Array(m-j-1);
	            for(i=j+1;i<m;i++) B[i-j-1] = Q[i];
	            C = numeric.tensor(v,numeric.dot(v,B));
	            for(i=j+1;i<m;i++) { Qi = Q[i]; Ci = C[i-j-1]; for(k=0;k<m;k++) Qi[k] -= 2*Ci[k]; }
	        }
	    }
	    return {H:A, Q:Q};
	}

	numeric.epsilon = 2.220446049250313e-16;

	numeric.QRFrancis = function(H,maxiter) {
	    if(typeof maxiter === "undefined") { maxiter = 10000; }
	    H = numeric.clone(H);
	    var H0 = numeric.clone(H);
	    var s = numeric.dim(H),m=s[0],x,v,a,b,c,d,det,tr, Hloc, Q = numeric.identity(m), Qi, Hi, B, C, Ci,i,j,k,iter;
	    if(m<3) { return {Q:Q, B:[ [0,m-1] ]}; }
	    var epsilon = numeric.epsilon;
	    for(iter=0;iter<maxiter;iter++) {
	        for(j=0;j<m-1;j++) {
	            if(Math.abs(H[j+1][j]) < epsilon*(Math.abs(H[j][j])+Math.abs(H[j+1][j+1]))) {
	                var QH1 = numeric.QRFrancis(numeric.getBlock(H,[0,0],[j,j]),maxiter);
	                var QH2 = numeric.QRFrancis(numeric.getBlock(H,[j+1,j+1],[m-1,m-1]),maxiter);
	                B = Array(j+1);
	                for(i=0;i<=j;i++) { B[i] = Q[i]; }
	                C = numeric.dot(QH1.Q,B);
	                for(i=0;i<=j;i++) { Q[i] = C[i]; }
	                B = Array(m-j-1);
	                for(i=j+1;i<m;i++) { B[i-j-1] = Q[i]; }
	                C = numeric.dot(QH2.Q,B);
	                for(i=j+1;i<m;i++) { Q[i] = C[i-j-1]; }
	                return {Q:Q,B:QH1.B.concat(numeric.add(QH2.B,j+1))};
	            }
	        }
	        a = H[m-2][m-2]; b = H[m-2][m-1];
	        c = H[m-1][m-2]; d = H[m-1][m-1];
	        tr = a+d;
	        det = (a*d-b*c);
	        Hloc = numeric.getBlock(H, [0,0], [2,2]);
	        if(tr*tr>=4*det) {
	            var s1,s2;
	            s1 = 0.5*(tr+Math.sqrt(tr*tr-4*det));
	            s2 = 0.5*(tr-Math.sqrt(tr*tr-4*det));
	            Hloc = numeric.add(numeric.sub(numeric.dot(Hloc,Hloc),
	                                           numeric.mul(Hloc,s1+s2)),
	                               numeric.diag(numeric.rep([3],s1*s2)));
	        } else {
	            Hloc = numeric.add(numeric.sub(numeric.dot(Hloc,Hloc),
	                                           numeric.mul(Hloc,tr)),
	                               numeric.diag(numeric.rep([3],det)));
	        }
	        x = [Hloc[0][0],Hloc[1][0],Hloc[2][0]];
	        v = numeric.house(x);
	        B = [H[0],H[1],H[2]];
	        C = numeric.tensor(v,numeric.dot(v,B));
	        for(i=0;i<3;i++) { Hi = H[i]; Ci = C[i]; for(k=0;k<m;k++) Hi[k] -= 2*Ci[k]; }
	        B = numeric.getBlock(H, [0,0],[m-1,2]);
	        C = numeric.tensor(numeric.dot(B,v),v);
	        for(i=0;i<m;i++) { Hi = H[i]; Ci = C[i]; for(k=0;k<3;k++) Hi[k] -= 2*Ci[k]; }
	        B = [Q[0],Q[1],Q[2]];
	        C = numeric.tensor(v,numeric.dot(v,B));
	        for(i=0;i<3;i++) { Qi = Q[i]; Ci = C[i]; for(k=0;k<m;k++) Qi[k] -= 2*Ci[k]; }
	        var J;
	        for(j=0;j<m-2;j++) {
	            for(k=j;k<=j+1;k++) {
	                if(Math.abs(H[k+1][k]) < epsilon*(Math.abs(H[k][k])+Math.abs(H[k+1][k+1]))) {
	                    var QH1 = numeric.QRFrancis(numeric.getBlock(H,[0,0],[k,k]),maxiter);
	                    var QH2 = numeric.QRFrancis(numeric.getBlock(H,[k+1,k+1],[m-1,m-1]),maxiter);
	                    B = Array(k+1);
	                    for(i=0;i<=k;i++) { B[i] = Q[i]; }
	                    C = numeric.dot(QH1.Q,B);
	                    for(i=0;i<=k;i++) { Q[i] = C[i]; }
	                    B = Array(m-k-1);
	                    for(i=k+1;i<m;i++) { B[i-k-1] = Q[i]; }
	                    C = numeric.dot(QH2.Q,B);
	                    for(i=k+1;i<m;i++) { Q[i] = C[i-k-1]; }
	                    return {Q:Q,B:QH1.B.concat(numeric.add(QH2.B,k+1))};
	                }
	            }
	            J = Math.min(m-1,j+3);
	            x = Array(J-j);
	            for(i=j+1;i<=J;i++) { x[i-j-1] = H[i][j]; }
	            v = numeric.house(x);
	            B = numeric.getBlock(H, [j+1,j],[J,m-1]);
	            C = numeric.tensor(v,numeric.dot(v,B));
	            for(i=j+1;i<=J;i++) { Hi = H[i]; Ci = C[i-j-1]; for(k=j;k<m;k++) Hi[k] -= 2*Ci[k-j]; }
	            B = numeric.getBlock(H, [0,j+1],[m-1,J]);
	            C = numeric.tensor(numeric.dot(B,v),v);
	            for(i=0;i<m;i++) { Hi = H[i]; Ci = C[i]; for(k=j+1;k<=J;k++) Hi[k] -= 2*Ci[k-j-1]; }
	            B = Array(J-j);
	            for(i=j+1;i<=J;i++) B[i-j-1] = Q[i];
	            C = numeric.tensor(v,numeric.dot(v,B));
	            for(i=j+1;i<=J;i++) { Qi = Q[i]; Ci = C[i-j-1]; for(k=0;k<m;k++) Qi[k] -= 2*Ci[k]; }
	        }
	    }
	    throw new Error('numeric: eigenvalue iteration does not converge -- increase maxiter?');
	}

	numeric.eig = function eig(A,maxiter) {
	    var QH = numeric.toUpperHessenberg(A);
	    var QB = numeric.QRFrancis(QH.H,maxiter);
	    var T = numeric.T;
	    var n = A.length,i,k,flag = false,B = QB.B,H = numeric.dot(QB.Q,numeric.dot(QH.H,numeric.transpose(QB.Q)));
	    var Q = new T(numeric.dot(QB.Q,QH.Q)),Q0;
	    var m = B.length,j;
	    var a,b,c,d,p1,p2,disc,x,y,p,q,n1,n2;
	    var sqrt = Math.sqrt;
	    for(k=0;k<m;k++) {
	        i = B[k][0];
	        if(i === B[k][1]) {
	            // nothing
	        } else {
	            j = i+1;
	            a = H[i][i];
	            b = H[i][j];
	            c = H[j][i];
	            d = H[j][j];
	            if(b === 0 && c === 0) continue;
	            p1 = -a-d;
	            p2 = a*d-b*c;
	            disc = p1*p1-4*p2;
	            if(disc>=0) {
	                if(p1<0) x = -0.5*(p1-sqrt(disc));
	                else     x = -0.5*(p1+sqrt(disc));
	                n1 = (a-x)*(a-x)+b*b;
	                n2 = c*c+(d-x)*(d-x);
	                if(n1>n2) {
	                    n1 = sqrt(n1);
	                    p = (a-x)/n1;
	                    q = b/n1;
	                } else {
	                    n2 = sqrt(n2);
	                    p = c/n2;
	                    q = (d-x)/n2;
	                }
	                Q0 = new T([[q,-p],[p,q]]);
	                Q.setRows(i,j,Q0.dot(Q.getRows(i,j)));
	            } else {
	                x = -0.5*p1;
	                y = 0.5*sqrt(-disc);
	                n1 = (a-x)*(a-x)+b*b;
	                n2 = c*c+(d-x)*(d-x);
	                if(n1>n2) {
	                    n1 = sqrt(n1+y*y);
	                    p = (a-x)/n1;
	                    q = b/n1;
	                    x = 0;
	                    y /= n1;
	                } else {
	                    n2 = sqrt(n2+y*y);
	                    p = c/n2;
	                    q = (d-x)/n2;
	                    x = y/n2;
	                    y = 0;
	                }
	                Q0 = new T([[q,-p],[p,q]],[[x,y],[y,-x]]);
	                Q.setRows(i,j,Q0.dot(Q.getRows(i,j)));
	            }
	        }
	    }
	    var R = Q.dot(A).dot(Q.transjugate()), n = A.length, E = numeric.T.identity(n);
	    for(j=0;j<n;j++) {
	        if(j>0) {
	            for(k=j-1;k>=0;k--) {
	                var Rk = R.get([k,k]), Rj = R.get([j,j]);
	                if(numeric.neq(Rk.x,Rj.x) || numeric.neq(Rk.y,Rj.y)) {
	                    x = R.getRow(k).getBlock([k],[j-1]);
	                    y = E.getRow(j).getBlock([k],[j-1]);
	                    E.set([j,k],(R.get([k,j]).neg().sub(x.dot(y))).div(Rk.sub(Rj)));
	                } else {
	                    E.setRow(j,E.getRow(k));
	                    continue;
	                }
	            }
	        }
	    }
	    for(j=0;j<n;j++) {
	        x = E.getRow(j);
	        E.setRow(j,x.div(x.norm2()));
	    }
	    E = E.transpose();
	    E = Q.transjugate().dot(E);
	    return { lambda:R.getDiag(), E:E };
	};

	// 5. Compressed Column Storage matrices
	numeric.ccsSparse = function ccsSparse(A) {
	    var m = A.length,n,foo, i,j, counts = [];
	    for(i=m-1;i!==-1;--i) {
	        foo = A[i];
	        for(j in foo) {
	            j = parseInt(j);
	            while(j>=counts.length) counts[counts.length] = 0;
	            if(foo[j]!==0) counts[j]++;
	        }
	    }
	    var n = counts.length;
	    var Ai = Array(n+1);
	    Ai[0] = 0;
	    for(i=0;i<n;++i) Ai[i+1] = Ai[i] + counts[i];
	    var Aj = Array(Ai[n]), Av = Array(Ai[n]);
	    for(i=m-1;i!==-1;--i) {
	        foo = A[i];
	        for(j in foo) {
	            if(foo[j]!==0) {
	                counts[j]--;
	                Aj[Ai[j]+counts[j]] = i;
	                Av[Ai[j]+counts[j]] = foo[j];
	            }
	        }
	    }
	    return [Ai,Aj,Av];
	}
	numeric.ccsFull = function ccsFull(A) {
	    var Ai = A[0], Aj = A[1], Av = A[2], s = numeric.ccsDim(A), m = s[0], n = s[1], i,j,j0,j1,k;
	    var B = numeric.rep([m,n],0);
	    for(i=0;i<n;i++) {
	        j0 = Ai[i];
	        j1 = Ai[i+1];
	        for(j=j0;j<j1;++j) { B[Aj[j]][i] = Av[j]; }
	    }
	    return B;
	}
	numeric.ccsTSolve = function ccsTSolve(A,b,x,bj,xj) {
	    var Ai = A[0], Aj = A[1], Av = A[2],m = Ai.length-1, max = Math.max,n=0;
	    if(typeof bj === "undefined") x = numeric.rep([m],0);
	    if(typeof bj === "undefined") bj = numeric.linspace(0,x.length-1);
	    if(typeof xj === "undefined") xj = [];
	    function dfs(j) {
	        var k;
	        if(x[j] !== 0) return;
	        x[j] = 1;
	        for(k=Ai[j];k<Ai[j+1];++k) dfs(Aj[k]);
	        xj[n] = j;
	        ++n;
	    }
	    var i,j,j0,j1,k,l,l0,l1,a;
	    for(i=bj.length-1;i!==-1;--i) { dfs(bj[i]); }
	    xj.length = n;
	    for(i=xj.length-1;i!==-1;--i) { x[xj[i]] = 0; }
	    for(i=bj.length-1;i!==-1;--i) { j = bj[i]; x[j] = b[j]; }
	    for(i=xj.length-1;i!==-1;--i) {
	        j = xj[i];
	        j0 = Ai[j];
	        j1 = max(Ai[j+1],j0);
	        for(k=j0;k!==j1;++k) { if(Aj[k] === j) { x[j] /= Av[k]; break; } }
	        a = x[j];
	        for(k=j0;k!==j1;++k) {
	            l = Aj[k];
	            if(l !== j) x[l] -= a*Av[k];
	        }
	    }
	    return x;
	}
	numeric.ccsDFS = function ccsDFS(n) {
	    this.k = Array(n);
	    this.k1 = Array(n);
	    this.j = Array(n);
	}
	numeric.ccsDFS.prototype.dfs = function dfs(J,Ai,Aj,x,xj,Pinv) {
	    var m = 0,foo,n=xj.length;
	    var k = this.k, k1 = this.k1, j = this.j,km,k11;
	    if(x[J]!==0) return;
	    x[J] = 1;
	    j[0] = J;
	    k[0] = km = Ai[J];
	    k1[0] = k11 = Ai[J+1];
	    while(1) {
	        if(km >= k11) {
	            xj[n] = j[m];
	            if(m===0) return;
	            ++n;
	            --m;
	            km = k[m];
	            k11 = k1[m];
	        } else {
	            foo = Pinv[Aj[km]];
	            if(x[foo] === 0) {
	                x[foo] = 1;
	                k[m] = km;
	                ++m;
	                j[m] = foo;
	                km = Ai[foo];
	                k1[m] = k11 = Ai[foo+1];
	            } else ++km;
	        }
	    }
	}
	numeric.ccsLPSolve = function ccsLPSolve(A,B,x,xj,I,Pinv,dfs) {
	    var Ai = A[0], Aj = A[1], Av = A[2],m = Ai.length-1, n=0;
	    var Bi = B[0], Bj = B[1], Bv = B[2];
	    
	    var i,i0,i1,j,J,j0,j1,k,l,l0,l1,a;
	    i0 = Bi[I];
	    i1 = Bi[I+1];
	    xj.length = 0;
	    for(i=i0;i<i1;++i) { dfs.dfs(Pinv[Bj[i]],Ai,Aj,x,xj,Pinv); }
	    for(i=xj.length-1;i!==-1;--i) { x[xj[i]] = 0; }
	    for(i=i0;i!==i1;++i) { j = Pinv[Bj[i]]; x[j] = Bv[i]; }
	    for(i=xj.length-1;i!==-1;--i) {
	        j = xj[i];
	        j0 = Ai[j];
	        j1 = Ai[j+1];
	        for(k=j0;k<j1;++k) { if(Pinv[Aj[k]] === j) { x[j] /= Av[k]; break; } }
	        a = x[j];
	        for(k=j0;k<j1;++k) {
	            l = Pinv[Aj[k]];
	            if(l !== j) x[l] -= a*Av[k];
	        }
	    }
	    return x;
	}
	numeric.ccsLUP1 = function ccsLUP1(A,threshold) {
	    var m = A[0].length-1;
	    var L = [numeric.rep([m+1],0),[],[]], U = [numeric.rep([m+1], 0),[],[]];
	    var Li = L[0], Lj = L[1], Lv = L[2], Ui = U[0], Uj = U[1], Uv = U[2];
	    var x = numeric.rep([m],0), xj = numeric.rep([m],0);
	    var i,j,k,j0,j1,a,e,c,d,K;
	    var sol = numeric.ccsLPSolve, max = Math.max, abs = Math.abs;
	    var P = numeric.linspace(0,m-1),Pinv = numeric.linspace(0,m-1);
	    var dfs = new numeric.ccsDFS(m);
	    if(typeof threshold === "undefined") { threshold = 1; }
	    for(i=0;i<m;++i) {
	        sol(L,A,x,xj,i,Pinv,dfs);
	        a = -1;
	        e = -1;
	        for(j=xj.length-1;j!==-1;--j) {
	            k = xj[j];
	            if(k <= i) continue;
	            c = abs(x[k]);
	            if(c > a) { e = k; a = c; }
	        }
	        if(abs(x[i])<threshold*a) {
	            j = P[i];
	            a = P[e];
	            P[i] = a; Pinv[a] = i;
	            P[e] = j; Pinv[j] = e;
	            a = x[i]; x[i] = x[e]; x[e] = a;
	        }
	        a = Li[i];
	        e = Ui[i];
	        d = x[i];
	        Lj[a] = P[i];
	        Lv[a] = 1;
	        ++a;
	        for(j=xj.length-1;j!==-1;--j) {
	            k = xj[j];
	            c = x[k];
	            xj[j] = 0;
	            x[k] = 0;
	            if(k<=i) { Uj[e] = k; Uv[e] = c;   ++e; }
	            else     { Lj[a] = P[k]; Lv[a] = c/d; ++a; }
	        }
	        Li[i+1] = a;
	        Ui[i+1] = e;
	    }
	    for(j=Lj.length-1;j!==-1;--j) { Lj[j] = Pinv[Lj[j]]; }
	    return {L:L, U:U, P:P, Pinv:Pinv};
	}
	numeric.ccsDFS0 = function ccsDFS0(n) {
	    this.k = Array(n);
	    this.k1 = Array(n);
	    this.j = Array(n);
	}
	numeric.ccsDFS0.prototype.dfs = function dfs(J,Ai,Aj,x,xj,Pinv,P) {
	    var m = 0,foo,n=xj.length;
	    var k = this.k, k1 = this.k1, j = this.j,km,k11;
	    if(x[J]!==0) return;
	    x[J] = 1;
	    j[0] = J;
	    k[0] = km = Ai[Pinv[J]];
	    k1[0] = k11 = Ai[Pinv[J]+1];
	    while(1) {
	        if(isNaN(km)) throw new Error("Ow!");
	        if(km >= k11) {
	            xj[n] = Pinv[j[m]];
	            if(m===0) return;
	            ++n;
	            --m;
	            km = k[m];
	            k11 = k1[m];
	        } else {
	            foo = Aj[km];
	            if(x[foo] === 0) {
	                x[foo] = 1;
	                k[m] = km;
	                ++m;
	                j[m] = foo;
	                foo = Pinv[foo];
	                km = Ai[foo];
	                k1[m] = k11 = Ai[foo+1];
	            } else ++km;
	        }
	    }
	}
	numeric.ccsLPSolve0 = function ccsLPSolve0(A,B,y,xj,I,Pinv,P,dfs) {
	    var Ai = A[0], Aj = A[1], Av = A[2],m = Ai.length-1, n=0;
	    var Bi = B[0], Bj = B[1], Bv = B[2];
	    
	    var i,i0,i1,j,J,j0,j1,k,l,l0,l1,a;
	    i0 = Bi[I];
	    i1 = Bi[I+1];
	    xj.length = 0;
	    for(i=i0;i<i1;++i) { dfs.dfs(Bj[i],Ai,Aj,y,xj,Pinv,P); }
	    for(i=xj.length-1;i!==-1;--i) { j = xj[i]; y[P[j]] = 0; }
	    for(i=i0;i!==i1;++i) { j = Bj[i]; y[j] = Bv[i]; }
	    for(i=xj.length-1;i!==-1;--i) {
	        j = xj[i];
	        l = P[j];
	        j0 = Ai[j];
	        j1 = Ai[j+1];
	        for(k=j0;k<j1;++k) { if(Aj[k] === l) { y[l] /= Av[k]; break; } }
	        a = y[l];
	        for(k=j0;k<j1;++k) y[Aj[k]] -= a*Av[k];
	        y[l] = a;
	    }
	}
	numeric.ccsLUP0 = function ccsLUP0(A,threshold) {
	    var m = A[0].length-1;
	    var L = [numeric.rep([m+1],0),[],[]], U = [numeric.rep([m+1], 0),[],[]];
	    var Li = L[0], Lj = L[1], Lv = L[2], Ui = U[0], Uj = U[1], Uv = U[2];
	    var y = numeric.rep([m],0), xj = numeric.rep([m],0);
	    var i,j,k,j0,j1,a,e,c,d,K;
	    var sol = numeric.ccsLPSolve0, max = Math.max, abs = Math.abs;
	    var P = numeric.linspace(0,m-1),Pinv = numeric.linspace(0,m-1);
	    var dfs = new numeric.ccsDFS0(m);
	    if(typeof threshold === "undefined") { threshold = 1; }
	    for(i=0;i<m;++i) {
	        sol(L,A,y,xj,i,Pinv,P,dfs);
	        a = -1;
	        e = -1;
	        for(j=xj.length-1;j!==-1;--j) {
	            k = xj[j];
	            if(k <= i) continue;
	            c = abs(y[P[k]]);
	            if(c > a) { e = k; a = c; }
	        }
	        if(abs(y[P[i]])<threshold*a) {
	            j = P[i];
	            a = P[e];
	            P[i] = a; Pinv[a] = i;
	            P[e] = j; Pinv[j] = e;
	        }
	        a = Li[i];
	        e = Ui[i];
	        d = y[P[i]];
	        Lj[a] = P[i];
	        Lv[a] = 1;
	        ++a;
	        for(j=xj.length-1;j!==-1;--j) {
	            k = xj[j];
	            c = y[P[k]];
	            xj[j] = 0;
	            y[P[k]] = 0;
	            if(k<=i) { Uj[e] = k; Uv[e] = c;   ++e; }
	            else     { Lj[a] = P[k]; Lv[a] = c/d; ++a; }
	        }
	        Li[i+1] = a;
	        Ui[i+1] = e;
	    }
	    for(j=Lj.length-1;j!==-1;--j) { Lj[j] = Pinv[Lj[j]]; }
	    return {L:L, U:U, P:P, Pinv:Pinv};
	}
	numeric.ccsLUP = numeric.ccsLUP0;

	numeric.ccsDim = function ccsDim(A) { return [numeric.sup(A[1])+1,A[0].length-1]; }
	numeric.ccsGetBlock = function ccsGetBlock(A,i,j) {
	    var s = numeric.ccsDim(A),m=s[0],n=s[1];
	    if(typeof i === "undefined") { i = numeric.linspace(0,m-1); }
	    else if(typeof i === "number") { i = [i]; }
	    if(typeof j === "undefined") { j = numeric.linspace(0,n-1); }
	    else if(typeof j === "number") { j = [j]; }
	    var p,p0,p1,P = i.length,q,Q = j.length,r,jq,ip;
	    var Bi = numeric.rep([n],0), Bj=[], Bv=[], B = [Bi,Bj,Bv];
	    var Ai = A[0], Aj = A[1], Av = A[2];
	    var x = numeric.rep([m],0),count=0,flags = numeric.rep([m],0);
	    for(q=0;q<Q;++q) {
	        jq = j[q];
	        var q0 = Ai[jq];
	        var q1 = Ai[jq+1];
	        for(p=q0;p<q1;++p) {
	            r = Aj[p];
	            flags[r] = 1;
	            x[r] = Av[p];
	        }
	        for(p=0;p<P;++p) {
	            ip = i[p];
	            if(flags[ip]) {
	                Bj[count] = p;
	                Bv[count] = x[i[p]];
	                ++count;
	            }
	        }
	        for(p=q0;p<q1;++p) {
	            r = Aj[p];
	            flags[r] = 0;
	        }
	        Bi[q+1] = count;
	    }
	    return B;
	}

	numeric.ccsDot = function ccsDot(A,B) {
	    var Ai = A[0], Aj = A[1], Av = A[2];
	    var Bi = B[0], Bj = B[1], Bv = B[2];
	    var sA = numeric.ccsDim(A), sB = numeric.ccsDim(B);
	    var m = sA[0], n = sA[1], o = sB[1];
	    var x = numeric.rep([m],0), flags = numeric.rep([m],0), xj = Array(m);
	    var Ci = numeric.rep([o],0), Cj = [], Cv = [], C = [Ci,Cj,Cv];
	    var i,j,k,j0,j1,i0,i1,l,p,a,b;
	    for(k=0;k!==o;++k) {
	        j0 = Bi[k];
	        j1 = Bi[k+1];
	        p = 0;
	        for(j=j0;j<j1;++j) {
	            a = Bj[j];
	            b = Bv[j];
	            i0 = Ai[a];
	            i1 = Ai[a+1];
	            for(i=i0;i<i1;++i) {
	                l = Aj[i];
	                if(flags[l]===0) {
	                    xj[p] = l;
	                    flags[l] = 1;
	                    p = p+1;
	                }
	                x[l] = x[l] + Av[i]*b;
	            }
	        }
	        j0 = Ci[k];
	        j1 = j0+p;
	        Ci[k+1] = j1;
	        for(j=p-1;j!==-1;--j) {
	            b = j0+j;
	            i = xj[j];
	            Cj[b] = i;
	            Cv[b] = x[i];
	            flags[i] = 0;
	            x[i] = 0;
	        }
	        Ci[k+1] = Ci[k]+p;
	    }
	    return C;
	}

	numeric.ccsLUPSolve = function ccsLUPSolve(LUP,B) {
	    var L = LUP.L, U = LUP.U, P = LUP.P;
	    var Bi = B[0];
	    var flag = false;
	    if(typeof Bi !== "object") { B = [[0,B.length],numeric.linspace(0,B.length-1),B]; Bi = B[0]; flag = true; }
	    var Bj = B[1], Bv = B[2];
	    var n = L[0].length-1, m = Bi.length-1;
	    var x = numeric.rep([n],0), xj = Array(n);
	    var b = numeric.rep([n],0), bj = Array(n);
	    var Xi = numeric.rep([m+1],0), Xj = [], Xv = [];
	    var sol = numeric.ccsTSolve;
	    var i,j,j0,j1,k,J,N=0;
	    for(i=0;i<m;++i) {
	        k = 0;
	        j0 = Bi[i];
	        j1 = Bi[i+1];
	        for(j=j0;j<j1;++j) { 
	            J = LUP.Pinv[Bj[j]];
	            bj[k] = J;
	            b[J] = Bv[j];
	            ++k;
	        }
	        bj.length = k;
	        sol(L,b,x,bj,xj);
	        for(j=bj.length-1;j!==-1;--j) b[bj[j]] = 0;
	        sol(U,x,b,xj,bj);
	        if(flag) return b;
	        for(j=xj.length-1;j!==-1;--j) x[xj[j]] = 0;
	        for(j=bj.length-1;j!==-1;--j) {
	            J = bj[j];
	            Xj[N] = J;
	            Xv[N] = b[J];
	            b[J] = 0;
	            ++N;
	        }
	        Xi[i+1] = N;
	    }
	    return [Xi,Xj,Xv];
	}

	numeric.ccsbinop = function ccsbinop(body,setup) {
	    if(typeof setup === "undefined") setup='';
	    return Function('X','Y',
	            'var Xi = X[0], Xj = X[1], Xv = X[2];\n'+
	            'var Yi = Y[0], Yj = Y[1], Yv = Y[2];\n'+
	            'var n = Xi.length-1,m = Math.max(numeric.sup(Xj),numeric.sup(Yj))+1;\n'+
	            'var Zi = numeric.rep([n+1],0), Zj = [], Zv = [];\n'+
	            'var x = numeric.rep([m],0),y = numeric.rep([m],0);\n'+
	            'var xk,yk,zk;\n'+
	            'var i,j,j0,j1,k,p=0;\n'+
	            setup+
	            'for(i=0;i<n;++i) {\n'+
	            '  j0 = Xi[i]; j1 = Xi[i+1];\n'+
	            '  for(j=j0;j!==j1;++j) {\n'+
	            '    k = Xj[j];\n'+
	            '    x[k] = 1;\n'+
	            '    Zj[p] = k;\n'+
	            '    ++p;\n'+
	            '  }\n'+
	            '  j0 = Yi[i]; j1 = Yi[i+1];\n'+
	            '  for(j=j0;j!==j1;++j) {\n'+
	            '    k = Yj[j];\n'+
	            '    y[k] = Yv[j];\n'+
	            '    if(x[k] === 0) {\n'+
	            '      Zj[p] = k;\n'+
	            '      ++p;\n'+
	            '    }\n'+
	            '  }\n'+
	            '  Zi[i+1] = p;\n'+
	            '  j0 = Xi[i]; j1 = Xi[i+1];\n'+
	            '  for(j=j0;j!==j1;++j) x[Xj[j]] = Xv[j];\n'+
	            '  j0 = Zi[i]; j1 = Zi[i+1];\n'+
	            '  for(j=j0;j!==j1;++j) {\n'+
	            '    k = Zj[j];\n'+
	            '    xk = x[k];\n'+
	            '    yk = y[k];\n'+
	            body+'\n'+
	            '    Zv[j] = zk;\n'+
	            '  }\n'+
	            '  j0 = Xi[i]; j1 = Xi[i+1];\n'+
	            '  for(j=j0;j!==j1;++j) x[Xj[j]] = 0;\n'+
	            '  j0 = Yi[i]; j1 = Yi[i+1];\n'+
	            '  for(j=j0;j!==j1;++j) y[Yj[j]] = 0;\n'+
	            '}\n'+
	            'return [Zi,Zj,Zv];'
	            );
	};

	(function() {
	    var k,A,B,C;
	    for(k in numeric.ops2) {
	        if(isFinite(eval('1'+numeric.ops2[k]+'0'))) A = '[Y[0],Y[1],numeric.'+k+'(X,Y[2])]';
	        else A = 'NaN';
	        if(isFinite(eval('0'+numeric.ops2[k]+'1'))) B = '[X[0],X[1],numeric.'+k+'(X[2],Y)]';
	        else B = 'NaN';
	        if(isFinite(eval('1'+numeric.ops2[k]+'0')) && isFinite(eval('0'+numeric.ops2[k]+'1'))) C = 'numeric.ccs'+k+'MM(X,Y)';
	        else C = 'NaN';
	        numeric['ccs'+k+'MM'] = numeric.ccsbinop('zk = xk '+numeric.ops2[k]+'yk;');
	        numeric['ccs'+k] = Function('X','Y',
	                'if(typeof X === "number") return '+A+';\n'+
	                'if(typeof Y === "number") return '+B+';\n'+
	                'return '+C+';\n'
	                );
	    }
	}());

	numeric.ccsScatter = function ccsScatter(A) {
	    var Ai = A[0], Aj = A[1], Av = A[2];
	    var n = numeric.sup(Aj)+1,m=Ai.length;
	    var Ri = numeric.rep([n],0),Rj=Array(m), Rv = Array(m);
	    var counts = numeric.rep([n],0),i;
	    for(i=0;i<m;++i) counts[Aj[i]]++;
	    for(i=0;i<n;++i) Ri[i+1] = Ri[i] + counts[i];
	    var ptr = Ri.slice(0),k,Aii;
	    for(i=0;i<m;++i) {
	        Aii = Aj[i];
	        k = ptr[Aii];
	        Rj[k] = Ai[i];
	        Rv[k] = Av[i];
	        ptr[Aii]=ptr[Aii]+1;
	    }
	    return [Ri,Rj,Rv];
	}

	numeric.ccsGather = function ccsGather(A) {
	    var Ai = A[0], Aj = A[1], Av = A[2];
	    var n = Ai.length-1,m = Aj.length;
	    var Ri = Array(m), Rj = Array(m), Rv = Array(m);
	    var i,j,j0,j1,p;
	    p=0;
	    for(i=0;i<n;++i) {
	        j0 = Ai[i];
	        j1 = Ai[i+1];
	        for(j=j0;j!==j1;++j) {
	            Rj[p] = i;
	            Ri[p] = Aj[j];
	            Rv[p] = Av[j];
	            ++p;
	        }
	    }
	    return [Ri,Rj,Rv];
	}

	// The following sparse linear algebra routines are deprecated.

	numeric.sdim = function dim(A,ret,k) {
	    if(typeof ret === "undefined") { ret = []; }
	    if(typeof A !== "object") return ret;
	    if(typeof k === "undefined") { k=0; }
	    if(!(k in ret)) { ret[k] = 0; }
	    if(A.length > ret[k]) ret[k] = A.length;
	    var i;
	    for(i in A) {
	        if(A.hasOwnProperty(i)) dim(A[i],ret,k+1);
	    }
	    return ret;
	};

	numeric.sclone = function clone(A,k,n) {
	    if(typeof k === "undefined") { k=0; }
	    if(typeof n === "undefined") { n = numeric.sdim(A).length; }
	    var i,ret = Array(A.length);
	    if(k === n-1) {
	        for(i in A) { if(A.hasOwnProperty(i)) ret[i] = A[i]; }
	        return ret;
	    }
	    for(i in A) {
	        if(A.hasOwnProperty(i)) ret[i] = clone(A[i],k+1,n);
	    }
	    return ret;
	}

	numeric.sdiag = function diag(d) {
	    var n = d.length,i,ret = Array(n),i1,i2,i3;
	    for(i=n-1;i>=1;i-=2) {
	        i1 = i-1;
	        ret[i] = []; ret[i][i] = d[i];
	        ret[i1] = []; ret[i1][i1] = d[i1];
	    }
	    if(i===0) { ret[0] = []; ret[0][0] = d[i]; }
	    return ret;
	}

	numeric.sidentity = function identity(n) { return numeric.sdiag(numeric.rep([n],1)); }

	numeric.stranspose = function transpose(A) {
	    var ret = [], n = A.length, i,j,Ai;
	    for(i in A) {
	        if(!(A.hasOwnProperty(i))) continue;
	        Ai = A[i];
	        for(j in Ai) {
	            if(!(Ai.hasOwnProperty(j))) continue;
	            if(typeof ret[j] !== "object") { ret[j] = []; }
	            ret[j][i] = Ai[j];
	        }
	    }
	    return ret;
	}

	numeric.sLUP = function LUP(A,tol) {
	    throw new Error("The function numeric.sLUP had a bug in it and has been removed. Please use the new numeric.ccsLUP function instead.");
	};

	numeric.sdotMM = function dotMM(A,B) {
	    var p = A.length, q = B.length, BT = numeric.stranspose(B), r = BT.length, Ai, BTk;
	    var i,j,k,accum;
	    var ret = Array(p),reti;
	    for(i=p-1;i>=0;i--) {
	        reti = [];
	        Ai = A[i];
	        for(k=r-1;k>=0;k--) {
	            accum = 0;
	            BTk = BT[k];
	            for(j in Ai) {
	                if(!(Ai.hasOwnProperty(j))) continue;
	                if(j in BTk) { accum += Ai[j]*BTk[j]; }
	            }
	            if(accum) reti[k] = accum;
	        }
	        ret[i] = reti;
	    }
	    return ret;
	}

	numeric.sdotMV = function dotMV(A,x) {
	    var p = A.length, Ai, i,j;
	    var ret = Array(p), accum;
	    for(i=p-1;i>=0;i--) {
	        Ai = A[i];
	        accum = 0;
	        for(j in Ai) {
	            if(!(Ai.hasOwnProperty(j))) continue;
	            if(x[j]) accum += Ai[j]*x[j];
	        }
	        if(accum) ret[i] = accum;
	    }
	    return ret;
	}

	numeric.sdotVM = function dotMV(x,A) {
	    var i,j,Ai,alpha;
	    var ret = [], accum;
	    for(i in x) {
	        if(!x.hasOwnProperty(i)) continue;
	        Ai = A[i];
	        alpha = x[i];
	        for(j in Ai) {
	            if(!Ai.hasOwnProperty(j)) continue;
	            if(!ret[j]) { ret[j] = 0; }
	            ret[j] += alpha*Ai[j];
	        }
	    }
	    return ret;
	}

	numeric.sdotVV = function dotVV(x,y) {
	    var i,ret=0;
	    for(i in x) { if(x[i] && y[i]) ret+= x[i]*y[i]; }
	    return ret;
	}

	numeric.sdot = function dot(A,B) {
	    var m = numeric.sdim(A).length, n = numeric.sdim(B).length;
	    var k = m*1000+n;
	    switch(k) {
	    case 0: return A*B;
	    case 1001: return numeric.sdotVV(A,B);
	    case 2001: return numeric.sdotMV(A,B);
	    case 1002: return numeric.sdotVM(A,B);
	    case 2002: return numeric.sdotMM(A,B);
	    default: throw new Error('numeric.sdot not implemented for tensors of order '+m+' and '+n);
	    }
	}

	numeric.sscatter = function scatter(V) {
	    var n = V[0].length, Vij, i, j, m = V.length, A = [], Aj;
	    for(i=n-1;i>=0;--i) {
	        if(!V[m-1][i]) continue;
	        Aj = A;
	        for(j=0;j<m-2;j++) {
	            Vij = V[j][i];
	            if(!Aj[Vij]) Aj[Vij] = [];
	            Aj = Aj[Vij];
	        }
	        Aj[V[j][i]] = V[j+1][i];
	    }
	    return A;
	}

	numeric.sgather = function gather(A,ret,k) {
	    if(typeof ret === "undefined") ret = [];
	    if(typeof k === "undefined") k = [];
	    var n,i,Ai;
	    n = k.length;
	    for(i in A) {
	        if(A.hasOwnProperty(i)) {
	            k[n] = parseInt(i);
	            Ai = A[i];
	            if(typeof Ai === "number") {
	                if(Ai) {
	                    if(ret.length === 0) {
	                        for(i=n+1;i>=0;--i) ret[i] = [];
	                    }
	                    for(i=n;i>=0;--i) ret[i].push(k[i]);
	                    ret[n+1].push(Ai);
	                }
	            } else gather(Ai,ret,k);
	        }
	    }
	    if(k.length>n) k.pop();
	    return ret;
	}

	// 6. Coordinate matrices
	numeric.cLU = function LU(A) {
	    var I = A[0], J = A[1], V = A[2];
	    var p = I.length, m=0, i,j,k,a,b,c;
	    for(i=0;i<p;i++) if(I[i]>m) m=I[i];
	    m++;
	    var L = Array(m), U = Array(m), left = numeric.rep([m],Infinity), right = numeric.rep([m],-Infinity);
	    var Ui, Uj,alpha;
	    for(k=0;k<p;k++) {
	        i = I[k];
	        j = J[k];
	        if(j<left[i]) left[i] = j;
	        if(j>right[i]) right[i] = j;
	    }
	    for(i=0;i<m-1;i++) { if(right[i] > right[i+1]) right[i+1] = right[i]; }
	    for(i=m-1;i>=1;i--) { if(left[i]<left[i-1]) left[i-1] = left[i]; }
	    var countL = 0, countU = 0;
	    for(i=0;i<m;i++) {
	        U[i] = numeric.rep([right[i]-left[i]+1],0);
	        L[i] = numeric.rep([i-left[i]],0);
	        countL += i-left[i]+1;
	        countU += right[i]-i+1;
	    }
	    for(k=0;k<p;k++) { i = I[k]; U[i][J[k]-left[i]] = V[k]; }
	    for(i=0;i<m-1;i++) {
	        a = i-left[i];
	        Ui = U[i];
	        for(j=i+1;left[j]<=i && j<m;j++) {
	            b = i-left[j];
	            c = right[i]-i;
	            Uj = U[j];
	            alpha = Uj[b]/Ui[a];
	            if(alpha) {
	                for(k=1;k<=c;k++) { Uj[k+b] -= alpha*Ui[k+a]; }
	                L[j][i-left[j]] = alpha;
	            }
	        }
	    }
	    var Ui = [], Uj = [], Uv = [], Li = [], Lj = [], Lv = [];
	    var p,q,foo;
	    p=0; q=0;
	    for(i=0;i<m;i++) {
	        a = left[i];
	        b = right[i];
	        foo = U[i];
	        for(j=i;j<=b;j++) {
	            if(foo[j-a]) {
	                Ui[p] = i;
	                Uj[p] = j;
	                Uv[p] = foo[j-a];
	                p++;
	            }
	        }
	        foo = L[i];
	        for(j=a;j<i;j++) {
	            if(foo[j-a]) {
	                Li[q] = i;
	                Lj[q] = j;
	                Lv[q] = foo[j-a];
	                q++;
	            }
	        }
	        Li[q] = i;
	        Lj[q] = i;
	        Lv[q] = 1;
	        q++;
	    }
	    return {U:[Ui,Uj,Uv], L:[Li,Lj,Lv]};
	};

	numeric.cLUsolve = function LUsolve(lu,b) {
	    var L = lu.L, U = lu.U, ret = numeric.clone(b);
	    var Li = L[0], Lj = L[1], Lv = L[2];
	    var Ui = U[0], Uj = U[1], Uv = U[2];
	    var p = Ui.length, q = Li.length;
	    var m = ret.length,i,j,k;
	    k = 0;
	    for(i=0;i<m;i++) {
	        while(Lj[k] < i) {
	            ret[i] -= Lv[k]*ret[Lj[k]];
	            k++;
	        }
	        k++;
	    }
	    k = p-1;
	    for(i=m-1;i>=0;i--) {
	        while(Uj[k] > i) {
	            ret[i] -= Uv[k]*ret[Uj[k]];
	            k--;
	        }
	        ret[i] /= Uv[k];
	        k--;
	    }
	    return ret;
	};

	numeric.cgrid = function grid(n,shape) {
	    if(typeof n === "number") n = [n,n];
	    var ret = numeric.rep(n,-1);
	    var i,j,count;
	    if(typeof shape !== "function") {
	        switch(shape) {
	        case 'L':
	            shape = function(i,j) { return (i>=n[0]/2 || j<n[1]/2); }
	            break;
	        default:
	            shape = function(i,j) { return true; };
	            break;
	        }
	    }
	    count=0;
	    for(i=1;i<n[0]-1;i++) for(j=1;j<n[1]-1;j++) 
	        if(shape(i,j)) {
	            ret[i][j] = count;
	            count++;
	        }
	    return ret;
	}

	numeric.cdelsq = function delsq(g) {
	    var dir = [[-1,0],[0,-1],[0,1],[1,0]];
	    var s = numeric.dim(g), m = s[0], n = s[1], i,j,k,p,q;
	    var Li = [], Lj = [], Lv = [];
	    for(i=1;i<m-1;i++) for(j=1;j<n-1;j++) {
	        if(g[i][j]<0) continue;
	        for(k=0;k<4;k++) {
	            p = i+dir[k][0];
	            q = j+dir[k][1];
	            if(g[p][q]<0) continue;
	            Li.push(g[i][j]);
	            Lj.push(g[p][q]);
	            Lv.push(-1);
	        }
	        Li.push(g[i][j]);
	        Lj.push(g[i][j]);
	        Lv.push(4);
	    }
	    return [Li,Lj,Lv];
	}

	numeric.cdotMV = function dotMV(A,x) {
	    var ret, Ai = A[0], Aj = A[1], Av = A[2],k,p=Ai.length,N;
	    N=0;
	    for(k=0;k<p;k++) { if(Ai[k]>N) N = Ai[k]; }
	    N++;
	    ret = numeric.rep([N],0);
	    for(k=0;k<p;k++) { ret[Ai[k]]+=Av[k]*x[Aj[k]]; }
	    return ret;
	}

	// 7. Splines

	numeric.Spline = function Spline(x,yl,yr,kl,kr) { this.x = x; this.yl = yl; this.yr = yr; this.kl = kl; this.kr = kr; }
	numeric.Spline.prototype._at = function _at(x1,p) {
	    var x = this.x;
	    var yl = this.yl;
	    var yr = this.yr;
	    var kl = this.kl;
	    var kr = this.kr;
	    var x1,a,b,t;
	    var add = numeric.add, sub = numeric.sub, mul = numeric.mul;
	    a = sub(mul(kl[p],x[p+1]-x[p]),sub(yr[p+1],yl[p]));
	    b = add(mul(kr[p+1],x[p]-x[p+1]),sub(yr[p+1],yl[p]));
	    t = (x1-x[p])/(x[p+1]-x[p]);
	    var s = t*(1-t);
	    return add(add(add(mul(1-t,yl[p]),mul(t,yr[p+1])),mul(a,s*(1-t))),mul(b,s*t));
	}
	numeric.Spline.prototype.at = function at(x0) {
	    if(typeof x0 === "number") {
	        var x = this.x;
	        var n = x.length;
	        var p,q,mid,floor = Math.floor,a,b,t;
	        p = 0;
	        q = n-1;
	        while(q-p>1) {
	            mid = floor((p+q)/2);
	            if(x[mid] <= x0) p = mid;
	            else q = mid;
	        }
	        return this._at(x0,p);
	    }
	    var n = x0.length, i, ret = Array(n);
	    for(i=n-1;i!==-1;--i) ret[i] = this.at(x0[i]);
	    return ret;
	}
	numeric.Spline.prototype.diff = function diff() {
	    var x = this.x;
	    var yl = this.yl;
	    var yr = this.yr;
	    var kl = this.kl;
	    var kr = this.kr;
	    var n = yl.length;
	    var i,dx,dy;
	    var zl = kl, zr = kr, pl = Array(n), pr = Array(n);
	    var add = numeric.add, mul = numeric.mul, div = numeric.div, sub = numeric.sub;
	    for(i=n-1;i!==-1;--i) {
	        dx = x[i+1]-x[i];
	        dy = sub(yr[i+1],yl[i]);
	        pl[i] = div(add(mul(dy, 6),mul(kl[i],-4*dx),mul(kr[i+1],-2*dx)),dx*dx);
	        pr[i+1] = div(add(mul(dy,-6),mul(kl[i], 2*dx),mul(kr[i+1], 4*dx)),dx*dx);
	    }
	    return new numeric.Spline(x,zl,zr,pl,pr);
	}
	numeric.Spline.prototype.roots = function roots() {
	    function sqr(x) { return x*x; }
	    function heval(y0,y1,k0,k1,x) {
	        var A = k0*2-(y1-y0);
	        var B = -k1*2+(y1-y0);
	        var t = (x+1)*0.5;
	        var s = t*(1-t);
	        return (1-t)*y0+t*y1+A*s*(1-t)+B*s*t;
	    }
	    var ret = [];
	    var x = this.x, yl = this.yl, yr = this.yr, kl = this.kl, kr = this.kr;
	    if(typeof yl[0] === "number") {
	        yl = [yl];
	        yr = [yr];
	        kl = [kl];
	        kr = [kr];
	    }
	    var m = yl.length,n=x.length-1,i,j,k,y,s,t;
	    var ai,bi,ci,di, ret = Array(m),ri,k0,k1,y0,y1,A,B,D,dx,cx,stops,z0,z1,zm,t0,t1,tm;
	    var sqrt = Math.sqrt;
	    for(i=0;i!==m;++i) {
	        ai = yl[i];
	        bi = yr[i];
	        ci = kl[i];
	        di = kr[i];
	        ri = [];
	        for(j=0;j!==n;j++) {
	            if(j>0 && bi[j]*ai[j]<0) ri.push(x[j]);
	            dx = (x[j+1]-x[j]);
	            cx = x[j];
	            y0 = ai[j];
	            y1 = bi[j+1];
	            k0 = ci[j]/dx;
	            k1 = di[j+1]/dx;
	            D = sqr(k0-k1+3*(y0-y1)) + 12*k1*y0;
	            A = k1+3*y0+2*k0-3*y1;
	            B = 3*(k1+k0+2*(y0-y1));
	            if(D<=0) {
	                z0 = A/B;
	                if(z0>x[j] && z0<x[j+1]) stops = [x[j],z0,x[j+1]];
	                else stops = [x[j],x[j+1]];
	            } else {
	                z0 = (A-sqrt(D))/B;
	                z1 = (A+sqrt(D))/B;
	                stops = [x[j]];
	                if(z0>x[j] && z0<x[j+1]) stops.push(z0);
	                if(z1>x[j] && z1<x[j+1]) stops.push(z1);
	                stops.push(x[j+1]);
	            }
	            t0 = stops[0];
	            z0 = this._at(t0,j);
	            for(k=0;k<stops.length-1;k++) {
	                t1 = stops[k+1];
	                z1 = this._at(t1,j);
	                if(z0 === 0) {
	                    ri.push(t0); 
	                    t0 = t1;
	                    z0 = z1;
	                    continue;
	                }
	                if(z1 === 0 || z0*z1>0) {
	                    t0 = t1;
	                    z0 = z1;
	                    continue;
	                }
	                var side = 0;
	                while(1) {
	                    tm = (z0*t1-z1*t0)/(z0-z1);
	                    if(tm <= t0 || tm >= t1) { break; }
	                    zm = this._at(tm,j);
	                    if(zm*z1>0) {
	                        t1 = tm;
	                        z1 = zm;
	                        if(side === -1) z0*=0.5;
	                        side = -1;
	                    } else if(zm*z0>0) {
	                        t0 = tm;
	                        z0 = zm;
	                        if(side === 1) z1*=0.5;
	                        side = 1;
	                    } else break;
	                }
	                ri.push(tm);
	                t0 = stops[k+1];
	                z0 = this._at(t0, j);
	            }
	            if(z1 === 0) ri.push(t1);
	        }
	        ret[i] = ri;
	    }
	    if(typeof this.yl[0] === "number") return ret[0];
	    return ret;
	}
	numeric.spline = function spline(x,y,k1,kn) {
	    var n = x.length, b = [], dx = [], dy = [];
	    var i;
	    var sub = numeric.sub,mul = numeric.mul,add = numeric.add;
	    for(i=n-2;i>=0;i--) { dx[i] = x[i+1]-x[i]; dy[i] = sub(y[i+1],y[i]); }
	    if(typeof k1 === "string" || typeof kn === "string") { 
	        k1 = kn = "periodic";
	    }
	    // Build sparse tridiagonal system
	    var T = [[],[],[]];
	    switch(typeof k1) {
	    case "undefined":
	        b[0] = mul(3/(dx[0]*dx[0]),dy[0]);
	        T[0].push(0,0);
	        T[1].push(0,1);
	        T[2].push(2/dx[0],1/dx[0]);
	        break;
	    case "string":
	        b[0] = add(mul(3/(dx[n-2]*dx[n-2]),dy[n-2]),mul(3/(dx[0]*dx[0]),dy[0]));
	        T[0].push(0,0,0);
	        T[1].push(n-2,0,1);
	        T[2].push(1/dx[n-2],2/dx[n-2]+2/dx[0],1/dx[0]);
	        break;
	    default:
	        b[0] = k1;
	        T[0].push(0);
	        T[1].push(0);
	        T[2].push(1);
	        break;
	    }
	    for(i=1;i<n-1;i++) {
	        b[i] = add(mul(3/(dx[i-1]*dx[i-1]),dy[i-1]),mul(3/(dx[i]*dx[i]),dy[i]));
	        T[0].push(i,i,i);
	        T[1].push(i-1,i,i+1);
	        T[2].push(1/dx[i-1],2/dx[i-1]+2/dx[i],1/dx[i]);
	    }
	    switch(typeof kn) {
	    case "undefined":
	        b[n-1] = mul(3/(dx[n-2]*dx[n-2]),dy[n-2]);
	        T[0].push(n-1,n-1);
	        T[1].push(n-2,n-1);
	        T[2].push(1/dx[n-2],2/dx[n-2]);
	        break;
	    case "string":
	        T[1][T[1].length-1] = 0;
	        break;
	    default:
	        b[n-1] = kn;
	        T[0].push(n-1);
	        T[1].push(n-1);
	        T[2].push(1);
	        break;
	    }
	    if(typeof b[0] !== "number") b = numeric.transpose(b);
	    else b = [b];
	    var k = Array(b.length);
	    if(typeof k1 === "string") {
	        for(i=k.length-1;i!==-1;--i) {
	            k[i] = numeric.ccsLUPSolve(numeric.ccsLUP(numeric.ccsScatter(T)),b[i]);
	            k[i][n-1] = k[i][0];
	        }
	    } else {
	        for(i=k.length-1;i!==-1;--i) {
	            k[i] = numeric.cLUsolve(numeric.cLU(T),b[i]);
	        }
	    }
	    if(typeof y[0] === "number") k = k[0];
	    else k = numeric.transpose(k);
	    return new numeric.Spline(x,y,y,k,k);
	}

	// 8. FFT
	numeric.fftpow2 = function fftpow2(x,y) {
	    var n = x.length;
	    if(n === 1) return;
	    var cos = Math.cos, sin = Math.sin, i,j;
	    var xe = Array(n/2), ye = Array(n/2), xo = Array(n/2), yo = Array(n/2);
	    j = n/2;
	    for(i=n-1;i!==-1;--i) {
	        --j;
	        xo[j] = x[i];
	        yo[j] = y[i];
	        --i;
	        xe[j] = x[i];
	        ye[j] = y[i];
	    }
	    fftpow2(xe,ye);
	    fftpow2(xo,yo);
	    j = n/2;
	    var t,k = (-6.2831853071795864769252867665590057683943387987502116419/n),ci,si;
	    for(i=n-1;i!==-1;--i) {
	        --j;
	        if(j === -1) j = n/2-1;
	        t = k*i;
	        ci = cos(t);
	        si = sin(t);
	        x[i] = xe[j] + ci*xo[j] - si*yo[j];
	        y[i] = ye[j] + ci*yo[j] + si*xo[j];
	    }
	}
	numeric._ifftpow2 = function _ifftpow2(x,y) {
	    var n = x.length;
	    if(n === 1) return;
	    var cos = Math.cos, sin = Math.sin, i,j;
	    var xe = Array(n/2), ye = Array(n/2), xo = Array(n/2), yo = Array(n/2);
	    j = n/2;
	    for(i=n-1;i!==-1;--i) {
	        --j;
	        xo[j] = x[i];
	        yo[j] = y[i];
	        --i;
	        xe[j] = x[i];
	        ye[j] = y[i];
	    }
	    _ifftpow2(xe,ye);
	    _ifftpow2(xo,yo);
	    j = n/2;
	    var t,k = (6.2831853071795864769252867665590057683943387987502116419/n),ci,si;
	    for(i=n-1;i!==-1;--i) {
	        --j;
	        if(j === -1) j = n/2-1;
	        t = k*i;
	        ci = cos(t);
	        si = sin(t);
	        x[i] = xe[j] + ci*xo[j] - si*yo[j];
	        y[i] = ye[j] + ci*yo[j] + si*xo[j];
	    }
	}
	numeric.ifftpow2 = function ifftpow2(x,y) {
	    numeric._ifftpow2(x,y);
	    numeric.diveq(x,x.length);
	    numeric.diveq(y,y.length);
	}
	numeric.convpow2 = function convpow2(ax,ay,bx,by) {
	    numeric.fftpow2(ax,ay);
	    numeric.fftpow2(bx,by);
	    var i,n = ax.length,axi,bxi,ayi,byi;
	    for(i=n-1;i!==-1;--i) {
	        axi = ax[i]; ayi = ay[i]; bxi = bx[i]; byi = by[i];
	        ax[i] = axi*bxi-ayi*byi;
	        ay[i] = axi*byi+ayi*bxi;
	    }
	    numeric.ifftpow2(ax,ay);
	}
	numeric.T.prototype.fft = function fft() {
	    var x = this.x, y = this.y;
	    var n = x.length, log = Math.log, log2 = log(2),
	        p = Math.ceil(log(2*n-1)/log2), m = Math.pow(2,p);
	    var cx = numeric.rep([m],0), cy = numeric.rep([m],0), cos = Math.cos, sin = Math.sin;
	    var k, c = (-3.141592653589793238462643383279502884197169399375105820/n),t;
	    var a = numeric.rep([m],0), b = numeric.rep([m],0),nhalf = Math.floor(n/2);
	    for(k=0;k<n;k++) a[k] = x[k];
	    if(typeof y !== "undefined") for(k=0;k<n;k++) b[k] = y[k];
	    cx[0] = 1;
	    for(k=1;k<=m/2;k++) {
	        t = c*k*k;
	        cx[k] = cos(t);
	        cy[k] = sin(t);
	        cx[m-k] = cos(t);
	        cy[m-k] = sin(t)
	    }
	    var X = new numeric.T(a,b), Y = new numeric.T(cx,cy);
	    X = X.mul(Y);
	    numeric.convpow2(X.x,X.y,numeric.clone(Y.x),numeric.neg(Y.y));
	    X = X.mul(Y);
	    X.x.length = n;
	    X.y.length = n;
	    return X;
	}
	numeric.T.prototype.ifft = function ifft() {
	    var x = this.x, y = this.y;
	    var n = x.length, log = Math.log, log2 = log(2),
	        p = Math.ceil(log(2*n-1)/log2), m = Math.pow(2,p);
	    var cx = numeric.rep([m],0), cy = numeric.rep([m],0), cos = Math.cos, sin = Math.sin;
	    var k, c = (3.141592653589793238462643383279502884197169399375105820/n),t;
	    var a = numeric.rep([m],0), b = numeric.rep([m],0),nhalf = Math.floor(n/2);
	    for(k=0;k<n;k++) a[k] = x[k];
	    if(typeof y !== "undefined") for(k=0;k<n;k++) b[k] = y[k];
	    cx[0] = 1;
	    for(k=1;k<=m/2;k++) {
	        t = c*k*k;
	        cx[k] = cos(t);
	        cy[k] = sin(t);
	        cx[m-k] = cos(t);
	        cy[m-k] = sin(t)
	    }
	    var X = new numeric.T(a,b), Y = new numeric.T(cx,cy);
	    X = X.mul(Y);
	    numeric.convpow2(X.x,X.y,numeric.clone(Y.x),numeric.neg(Y.y));
	    X = X.mul(Y);
	    X.x.length = n;
	    X.y.length = n;
	    return X.div(n);
	}

	//9. Unconstrained optimization
	numeric.gradient = function gradient(f,x) {
	    var n = x.length;
	    var f0 = f(x);
	    if(isNaN(f0)) throw new Error('gradient: f(x) is a NaN!');
	    var max = Math.max;
	    var i,x0 = numeric.clone(x),f1,f2, J = Array(n);
	    var div = numeric.div, sub = numeric.sub,errest,roundoff,max = Math.max,eps = 1e-3,abs = Math.abs, min = Math.min;
	    var t0,t1,t2,it=0,d1,d2,N;
	    for(i=0;i<n;i++) {
	        var h = max(1e-6*f0,1e-8);
	        while(1) {
	            ++it;
	            if(it>20) { throw new Error("Numerical gradient fails"); }
	            x0[i] = x[i]+h;
	            f1 = f(x0);
	            x0[i] = x[i]-h;
	            f2 = f(x0);
	            x0[i] = x[i];
	            if(isNaN(f1) || isNaN(f2)) { h/=16; continue; }
	            J[i] = (f1-f2)/(2*h);
	            t0 = x[i]-h;
	            t1 = x[i];
	            t2 = x[i]+h;
	            d1 = (f1-f0)/h;
	            d2 = (f0-f2)/h;
	            N = max(abs(J[i]),abs(f0),abs(f1),abs(f2),abs(t0),abs(t1),abs(t2),1e-8);
	            errest = min(max(abs(d1-J[i]),abs(d2-J[i]),abs(d1-d2))/N,h/N);
	            if(errest>eps) { h/=16; }
	            else break;
	            }
	    }
	    return J;
	}

	numeric.uncmin = function uncmin(f,x0,tol,gradient,maxit,callback,options) {
	    var grad = numeric.gradient;
	    if(typeof options === "undefined") { options = {}; }
	    if(typeof tol === "undefined") { tol = 1e-8; }
	    if(typeof gradient === "undefined") { gradient = function(x) { return grad(f,x); }; }
	    if(typeof maxit === "undefined") maxit = 1000;
	    x0 = numeric.clone(x0);
	    var n = x0.length;
	    var f0 = f(x0),f1,df0;
	    if(isNaN(f0)) throw new Error('uncmin: f(x0) is a NaN!');
	    var max = Math.max, norm2 = numeric.norm2;
	    tol = max(tol,numeric.epsilon);
	    var step,g0,g1,H1 = options.Hinv || numeric.identity(n);
	    var dot = numeric.dot, inv = numeric.inv, sub = numeric.sub, add = numeric.add, ten = numeric.tensor, div = numeric.div, mul = numeric.mul;
	    var all = numeric.all, isfinite = numeric.isFinite, neg = numeric.neg;
	    var it=0,i,s,x1,y,Hy,Hs,ys,i0,t,nstep,t1,t2;
	    var msg = "";
	    g0 = gradient(x0);
	    while(it<maxit) {
	        if(typeof callback === "function") { if(callback(it,x0,f0,g0,H1)) { msg = "Callback returned true"; break; } }
	        if(!all(isfinite(g0))) { msg = "Gradient has Infinity or NaN"; break; }
	        step = neg(dot(H1,g0));
	        if(!all(isfinite(step))) { msg = "Search direction has Infinity or NaN"; break; }
	        nstep = norm2(step);
	        if(nstep < tol) { msg="Newton step smaller than tol"; break; }
	        t = 1;
	        df0 = dot(g0,step);
	        // line search
	        x1 = x0;
	        while(it < maxit) {
	            if(t*nstep < tol) { break; }
	            s = mul(step,t);
	            x1 = add(x0,s);
	            f1 = f(x1);
	            if(f1-f0 >= 0.1*t*df0 || isNaN(f1)) {
	                t *= 0.5;
	                ++it;
	                continue;
	            }
	            break;
	        }
	        if(t*nstep < tol) { msg = "Line search step size smaller than tol"; break; }
	        if(it === maxit) { msg = "maxit reached during line search"; break; }
	        g1 = gradient(x1);
	        y = sub(g1,g0);
	        ys = dot(y,s);
	        Hy = dot(H1,y);
	        H1 = sub(add(H1,
	                mul(
	                        (ys+dot(y,Hy))/(ys*ys),
	                        ten(s,s)    )),
	                div(add(ten(Hy,s),ten(s,Hy)),ys));
	        x0 = x1;
	        f0 = f1;
	        g0 = g1;
	        ++it;
	    }
	    return {solution: x0, f: f0, gradient: g0, invHessian: H1, iterations:it, message: msg};
	}

	// 10. Ode solver (Dormand-Prince)
	numeric.Dopri = function Dopri(x,y,f,ymid,iterations,msg,events) {
	    this.x = x;
	    this.y = y;
	    this.f = f;
	    this.ymid = ymid;
	    this.iterations = iterations;
	    this.events = events;
	    this.message = msg;
	}
	numeric.Dopri.prototype._at = function _at(xi,j) {
	    function sqr(x) { return x*x; }
	    var sol = this;
	    var xs = sol.x;
	    var ys = sol.y;
	    var k1 = sol.f;
	    var ymid = sol.ymid;
	    var n = xs.length;
	    var x0,x1,xh,y0,y1,yh,xi;
	    var floor = Math.floor,h;
	    var c = 0.5;
	    var add = numeric.add, mul = numeric.mul,sub = numeric.sub, p,q,w;
	    x0 = xs[j];
	    x1 = xs[j+1];
	    y0 = ys[j];
	    y1 = ys[j+1];
	    h  = x1-x0;
	    xh = x0+c*h;
	    yh = ymid[j];
	    p = sub(k1[j  ],mul(y0,1/(x0-xh)+2/(x0-x1)));
	    q = sub(k1[j+1],mul(y1,1/(x1-xh)+2/(x1-x0)));
	    w = [sqr(xi - x1) * (xi - xh) / sqr(x0 - x1) / (x0 - xh),
	         sqr(xi - x0) * sqr(xi - x1) / sqr(x0 - xh) / sqr(x1 - xh),
	         sqr(xi - x0) * (xi - xh) / sqr(x1 - x0) / (x1 - xh),
	         (xi - x0) * sqr(xi - x1) * (xi - xh) / sqr(x0-x1) / (x0 - xh),
	         (xi - x1) * sqr(xi - x0) * (xi - xh) / sqr(x0-x1) / (x1 - xh)];
	    return add(add(add(add(mul(y0,w[0]),
	                           mul(yh,w[1])),
	                           mul(y1,w[2])),
	                           mul( p,w[3])),
	                           mul( q,w[4]));
	}
	numeric.Dopri.prototype.at = function at(x) {
	    var i,j,k,floor = Math.floor;
	    if(typeof x !== "number") {
	        var n = x.length, ret = Array(n);
	        for(i=n-1;i!==-1;--i) {
	            ret[i] = this.at(x[i]);
	        }
	        return ret;
	    }
	    var x0 = this.x;
	    i = 0; j = x0.length-1;
	    while(j-i>1) {
	        k = floor(0.5*(i+j));
	        if(x0[k] <= x) i = k;
	        else j = k;
	    }
	    return this._at(x,i);
	}

	numeric.dopri = function dopri(x0,x1,y0,f,tol,maxit,event) {
	    if(typeof tol === "undefined") { tol = 1e-6; }
	    if(typeof maxit === "undefined") { maxit = 1000; }
	    var xs = [x0], ys = [y0], k1 = [f(x0,y0)], k2,k3,k4,k5,k6,k7, ymid = [];
	    var A2 = 1/5;
	    var A3 = [3/40,9/40];
	    var A4 = [44/45,-56/15,32/9];
	    var A5 = [19372/6561,-25360/2187,64448/6561,-212/729];
	    var A6 = [9017/3168,-355/33,46732/5247,49/176,-5103/18656];
	    var b = [35/384,0,500/1113,125/192,-2187/6784,11/84];
	    var bm = [0.5*6025192743/30085553152,
	              0,
	              0.5*51252292925/65400821598,
	              0.5*-2691868925/45128329728,
	              0.5*187940372067/1594534317056,
	              0.5*-1776094331/19743644256,
	              0.5*11237099/235043384];
	    var c = [1/5,3/10,4/5,8/9,1,1];
	    var e = [-71/57600,0,71/16695,-71/1920,17253/339200,-22/525,1/40];
	    var i = 0,er,j;
	    var h = (x1-x0)/10;
	    var it = 0;
	    var add = numeric.add, mul = numeric.mul, y1,erinf;
	    var max = Math.max, min = Math.min, abs = Math.abs, norminf = numeric.norminf,pow = Math.pow;
	    var any = numeric.any, lt = numeric.lt, and = numeric.and, sub = numeric.sub;
	    var e0, e1, ev;
	    var ret = new numeric.Dopri(xs,ys,k1,ymid,-1,"");
	    if(typeof event === "function") e0 = event(x0,y0);
	    while(x0<x1 && it<maxit) {
	        ++it;
	        if(x0+h>x1) h = x1-x0;
	        k2 = f(x0+c[0]*h,                add(y0,mul(   A2*h,k1[i])));
	        k3 = f(x0+c[1]*h,            add(add(y0,mul(A3[0]*h,k1[i])),mul(A3[1]*h,k2)));
	        k4 = f(x0+c[2]*h,        add(add(add(y0,mul(A4[0]*h,k1[i])),mul(A4[1]*h,k2)),mul(A4[2]*h,k3)));
	        k5 = f(x0+c[3]*h,    add(add(add(add(y0,mul(A5[0]*h,k1[i])),mul(A5[1]*h,k2)),mul(A5[2]*h,k3)),mul(A5[3]*h,k4)));
	        k6 = f(x0+c[4]*h,add(add(add(add(add(y0,mul(A6[0]*h,k1[i])),mul(A6[1]*h,k2)),mul(A6[2]*h,k3)),mul(A6[3]*h,k4)),mul(A6[4]*h,k5)));
	        y1 = add(add(add(add(add(y0,mul(k1[i],h*b[0])),mul(k3,h*b[2])),mul(k4,h*b[3])),mul(k5,h*b[4])),mul(k6,h*b[5]));
	        k7 = f(x0+h,y1);
	        er = add(add(add(add(add(mul(k1[i],h*e[0]),mul(k3,h*e[2])),mul(k4,h*e[3])),mul(k5,h*e[4])),mul(k6,h*e[5])),mul(k7,h*e[6]));
	        if(typeof er === "number") erinf = abs(er);
	        else erinf = norminf(er);
	        if(erinf > tol) { // reject
	            h = 0.2*h*pow(tol/erinf,0.25);
	            if(x0+h === x0) {
	                ret.msg = "Step size became too small";
	                break;
	            }
	            continue;
	        }
	        ymid[i] = add(add(add(add(add(add(y0,
	                mul(k1[i],h*bm[0])),
	                mul(k3   ,h*bm[2])),
	                mul(k4   ,h*bm[3])),
	                mul(k5   ,h*bm[4])),
	                mul(k6   ,h*bm[5])),
	                mul(k7   ,h*bm[6]));
	        ++i;
	        xs[i] = x0+h;
	        ys[i] = y1;
	        k1[i] = k7;
	        if(typeof event === "function") {
	            var yi,xl = x0,xr = x0+0.5*h,xi;
	            e1 = event(xr,ymid[i-1]);
	            ev = and(lt(e0,0),lt(0,e1));
	            if(!any(ev)) { xl = xr; xr = x0+h; e0 = e1; e1 = event(xr,y1); ev = and(lt(e0,0),lt(0,e1)); }
	            if(any(ev)) {
	                var xc, yc, en,ei;
	                var side=0, sl = 1.0, sr = 1.0;
	                while(1) {
	                    if(typeof e0 === "number") xi = (sr*e1*xl-sl*e0*xr)/(sr*e1-sl*e0);
	                    else {
	                        xi = xr;
	                        for(j=e0.length-1;j!==-1;--j) {
	                            if(e0[j]<0 && e1[j]>0) xi = min(xi,(sr*e1[j]*xl-sl*e0[j]*xr)/(sr*e1[j]-sl*e0[j]));
	                        }
	                    }
	                    if(xi <= xl || xi >= xr) break;
	                    yi = ret._at(xi, i-1);
	                    ei = event(xi,yi);
	                    en = and(lt(e0,0),lt(0,ei));
	                    if(any(en)) {
	                        xr = xi;
	                        e1 = ei;
	                        ev = en;
	                        sr = 1.0;
	                        if(side === -1) sl *= 0.5;
	                        else sl = 1.0;
	                        side = -1;
	                    } else {
	                        xl = xi;
	                        e0 = ei;
	                        sl = 1.0;
	                        if(side === 1) sr *= 0.5;
	                        else sr = 1.0;
	                        side = 1;
	                    }
	                }
	                y1 = ret._at(0.5*(x0+xi),i-1);
	                ret.f[i] = f(xi,yi);
	                ret.x[i] = xi;
	                ret.y[i] = yi;
	                ret.ymid[i-1] = y1;
	                ret.events = ev;
	                ret.iterations = it;
	                return ret;
	            }
	        }
	        x0 += h;
	        y0 = y1;
	        e0 = e1;
	        h = min(0.8*h*pow(tol/erinf,0.25),4*h);
	    }
	    ret.iterations = it;
	    return ret;
	}

	// 11. Ax = b
	numeric.LU = function(A, fast) {
	  fast = fast || false;

	  var abs = Math.abs;
	  var i, j, k, absAjk, Akk, Ak, Pk, Ai;
	  var max;
	  var n = A.length, n1 = n-1;
	  var P = new Array(n);
	  if(!fast) A = numeric.clone(A);

	  for (k = 0; k < n; ++k) {
	    Pk = k;
	    Ak = A[k];
	    max = abs(Ak[k]);
	    for (j = k + 1; j < n; ++j) {
	      absAjk = abs(A[j][k]);
	      if (max < absAjk) {
	        max = absAjk;
	        Pk = j;
	      }
	    }
	    P[k] = Pk;

	    if (Pk != k) {
	      A[k] = A[Pk];
	      A[Pk] = Ak;
	      Ak = A[k];
	    }

	    Akk = Ak[k];

	    for (i = k + 1; i < n; ++i) {
	      A[i][k] /= Akk;
	    }

	    for (i = k + 1; i < n; ++i) {
	      Ai = A[i];
	      for (j = k + 1; j < n1; ++j) {
	        Ai[j] -= Ai[k] * Ak[j];
	        ++j;
	        Ai[j] -= Ai[k] * Ak[j];
	      }
	      if(j===n1) Ai[j] -= Ai[k] * Ak[j];
	    }
	  }

	  return {
	    LU: A,
	    P:  P
	  };
	}

	numeric.LUsolve = function LUsolve(LUP, b) {
	  var i, j;
	  var LU = LUP.LU;
	  var n   = LU.length;
	  var x = numeric.clone(b);
	  var P   = LUP.P;
	  var Pi, LUi, LUii, tmp;

	  for (i=n-1;i!==-1;--i) x[i] = b[i];
	  for (i = 0; i < n; ++i) {
	    Pi = P[i];
	    if (P[i] !== i) {
	      tmp = x[i];
	      x[i] = x[Pi];
	      x[Pi] = tmp;
	    }

	    LUi = LU[i];
	    for (j = 0; j < i; ++j) {
	      x[i] -= x[j] * LUi[j];
	    }
	  }

	  for (i = n - 1; i >= 0; --i) {
	    LUi = LU[i];
	    for (j = i + 1; j < n; ++j) {
	      x[i] -= x[j] * LUi[j];
	    }

	    x[i] /= LUi[i];
	  }

	  return x;
	}

	numeric.solve = function solve(A,b,fast) { return numeric.LUsolve(numeric.LU(A,fast), b); }

	// 12. Linear programming
	numeric.echelonize = function echelonize(A) {
	    var s = numeric.dim(A), m = s[0], n = s[1];
	    var I = numeric.identity(m);
	    var P = Array(m);
	    var i,j,k,l,Ai,Ii,Z,a;
	    var abs = Math.abs;
	    var diveq = numeric.diveq;
	    A = numeric.clone(A);
	    for(i=0;i<m;++i) {
	        k = 0;
	        Ai = A[i];
	        Ii = I[i];
	        for(j=1;j<n;++j) if(abs(Ai[k])<abs(Ai[j])) k=j;
	        P[i] = k;
	        diveq(Ii,Ai[k]);
	        diveq(Ai,Ai[k]);
	        for(j=0;j<m;++j) if(j!==i) {
	            Z = A[j]; a = Z[k];
	            for(l=n-1;l!==-1;--l) Z[l] -= Ai[l]*a;
	            Z = I[j];
	            for(l=m-1;l!==-1;--l) Z[l] -= Ii[l]*a;
	        }
	    }
	    return {I:I, A:A, P:P};
	}

	numeric.__solveLP = function __solveLP(c,A,b,tol,maxit,x,flag) {
	    var sum = numeric.sum, log = numeric.log, mul = numeric.mul, sub = numeric.sub, dot = numeric.dot, div = numeric.div, add = numeric.add;
	    var m = c.length, n = b.length,y;
	    var unbounded = false, cb,i0=0;
	    var alpha = 1.0;
	    var f0,df0,AT = numeric.transpose(A), svd = numeric.svd,transpose = numeric.transpose,leq = numeric.leq, sqrt = Math.sqrt, abs = Math.abs;
	    var muleq = numeric.muleq;
	    var norm = numeric.norminf, any = numeric.any,min = Math.min;
	    var all = numeric.all, gt = numeric.gt;
	    var p = Array(m), A0 = Array(n),e=numeric.rep([n],1), H;
	    var solve = numeric.solve, z = sub(b,dot(A,x)),count;
	    var dotcc = dot(c,c);
	    var g;
	    for(count=i0;count<maxit;++count) {
	        var i,j,d;
	        for(i=n-1;i!==-1;--i) A0[i] = div(A[i],z[i]);
	        var A1 = transpose(A0);
	        for(i=m-1;i!==-1;--i) p[i] = (/*x[i]+*/sum(A1[i]));
	        alpha = 0.25*abs(dotcc/dot(c,p));
	        var a1 = 100*sqrt(dotcc/dot(p,p));
	        if(!isFinite(alpha) || alpha>a1) alpha = a1;
	        g = add(c,mul(alpha,p));
	        H = dot(A1,A0);
	        for(i=m-1;i!==-1;--i) H[i][i] += 1;
	        d = solve(H,div(g,alpha),true);
	        var t0 = div(z,dot(A,d));
	        var t = 1.0;
	        for(i=n-1;i!==-1;--i) if(t0[i]<0) t = min(t,-0.999*t0[i]);
	        y = sub(x,mul(d,t));
	        z = sub(b,dot(A,y));
	        if(!all(gt(z,0))) return { solution: x, message: "", iterations: count };
	        x = y;
	        if(alpha<tol) return { solution: y, message: "", iterations: count };
	        if(flag) {
	            var s = dot(c,g), Ag = dot(A,g);
	            unbounded = true;
	            for(i=n-1;i!==-1;--i) if(s*Ag[i]<0) { unbounded = false; break; }
	        } else {
	            if(x[m-1]>=0) unbounded = false;
	            else unbounded = true;
	        }
	        if(unbounded) return { solution: y, message: "Unbounded", iterations: count };
	    }
	    return { solution: x, message: "maximum iteration count exceeded", iterations:count };
	}

	numeric._solveLP = function _solveLP(c,A,b,tol,maxit) {
	    var m = c.length, n = b.length,y;
	    var sum = numeric.sum, log = numeric.log, mul = numeric.mul, sub = numeric.sub, dot = numeric.dot, div = numeric.div, add = numeric.add;
	    var c0 = numeric.rep([m],0).concat([1]);
	    var J = numeric.rep([n,1],-1);
	    var A0 = numeric.blockMatrix([[A                   ,   J  ]]);
	    var b0 = b;
	    var y = numeric.rep([m],0).concat(Math.max(0,numeric.sup(numeric.neg(b)))+1);
	    var x0 = numeric.__solveLP(c0,A0,b0,tol,maxit,y,false);
	    var x = numeric.clone(x0.solution);
	    x.length = m;
	    var foo = numeric.inf(sub(b,dot(A,x)));
	    if(foo<0) { return { solution: NaN, message: "Infeasible", iterations: x0.iterations }; }
	    var ret = numeric.__solveLP(c, A, b, tol, maxit-x0.iterations, x, true);
	    ret.iterations += x0.iterations;
	    return ret;
	};

	numeric.solveLP = function solveLP(c,A,b,Aeq,beq,tol,maxit) {
	    if(typeof maxit === "undefined") maxit = 1000;
	    if(typeof tol === "undefined") tol = numeric.epsilon;
	    if(typeof Aeq === "undefined") return numeric._solveLP(c,A,b,tol,maxit);
	    var m = Aeq.length, n = Aeq[0].length, o = A.length;
	    var B = numeric.echelonize(Aeq);
	    var flags = numeric.rep([n],0);
	    var P = B.P;
	    var Q = [];
	    var i;
	    for(i=P.length-1;i!==-1;--i) flags[P[i]] = 1;
	    for(i=n-1;i!==-1;--i) if(flags[i]===0) Q.push(i);
	    var g = numeric.getRange;
	    var I = numeric.linspace(0,m-1), J = numeric.linspace(0,o-1);
	    var Aeq2 = g(Aeq,I,Q), A1 = g(A,J,P), A2 = g(A,J,Q), dot = numeric.dot, sub = numeric.sub;
	    var A3 = dot(A1,B.I);
	    var A4 = sub(A2,dot(A3,Aeq2)), b4 = sub(b,dot(A3,beq));
	    var c1 = Array(P.length), c2 = Array(Q.length);
	    for(i=P.length-1;i!==-1;--i) c1[i] = c[P[i]];
	    for(i=Q.length-1;i!==-1;--i) c2[i] = c[Q[i]];
	    var c4 = sub(c2,dot(c1,dot(B.I,Aeq2)));
	    var S = numeric._solveLP(c4,A4,b4,tol,maxit);
	    var x2 = S.solution;
	    if(x2!==x2) return S;
	    var x1 = dot(B.I,sub(beq,dot(Aeq2,x2)));
	    var x = Array(c.length);
	    for(i=P.length-1;i!==-1;--i) x[P[i]] = x1[i];
	    for(i=Q.length-1;i!==-1;--i) x[Q[i]] = x2[i];
	    return { solution: x, message:S.message, iterations: S.iterations };
	}

	numeric.MPStoLP = function MPStoLP(MPS) {
	    if(MPS instanceof String) { MPS.split('\n'); }
	    var state = 0;
	    var states = ['Initial state','NAME','ROWS','COLUMNS','RHS','BOUNDS','ENDATA'];
	    var n = MPS.length;
	    var i,j,z,N=0,rows = {}, sign = [], rl = 0, vars = {}, nv = 0;
	    var name;
	    var c = [], A = [], b = [];
	    function err(e) { throw new Error('MPStoLP: '+e+'\nLine '+i+': '+MPS[i]+'\nCurrent state: '+states[state]+'\n'); }
	    for(i=0;i<n;++i) {
	        z = MPS[i];
	        var w0 = z.match(/\S*/g);
	        var w = [];
	        for(j=0;j<w0.length;++j) if(w0[j]!=="") w.push(w0[j]);
	        if(w.length === 0) continue;
	        for(j=0;j<states.length;++j) if(z.substr(0,states[j].length) === states[j]) break;
	        if(j<states.length) {
	            state = j;
	            if(j===1) { name = w[1]; }
	            if(j===6) return { name:name, c:c, A:numeric.transpose(A), b:b, rows:rows, vars:vars };
	            continue;
	        }
	        switch(state) {
	        case 0: case 1: err('Unexpected line');
	        case 2: 
	            switch(w[0]) {
	            case 'N': if(N===0) N = w[1]; else err('Two or more N rows'); break;
	            case 'L': rows[w[1]] = rl; sign[rl] = 1; b[rl] = 0; ++rl; break;
	            case 'G': rows[w[1]] = rl; sign[rl] = -1;b[rl] = 0; ++rl; break;
	            case 'E': rows[w[1]] = rl; sign[rl] = 0;b[rl] = 0; ++rl; break;
	            default: err('Parse error '+numeric.prettyPrint(w));
	            }
	            break;
	        case 3:
	            if(!vars.hasOwnProperty(w[0])) { vars[w[0]] = nv; c[nv] = 0; A[nv] = numeric.rep([rl],0); ++nv; }
	            var p = vars[w[0]];
	            for(j=1;j<w.length;j+=2) {
	                if(w[j] === N) { c[p] = parseFloat(w[j+1]); continue; }
	                var q = rows[w[j]];
	                A[p][q] = (sign[q]<0?-1:1)*parseFloat(w[j+1]);
	            }
	            break;
	        case 4:
	            for(j=1;j<w.length;j+=2) b[rows[w[j]]] = (sign[rows[w[j]]]<0?-1:1)*parseFloat(w[j+1]);
	            break;
	        case 5: /*FIXME*/ break;
	        case 6: err('Internal error');
	        }
	    }
	    err('Reached end of file without ENDATA');
	}
	// seedrandom.js version 2.0.
	// Author: David Bau 4/2/2011
	//
	// Defines a method Math.seedrandom() that, when called, substitutes
	// an explicitly seeded RC4-based algorithm for Math.random().  Also
	// supports automatic seeding from local or network sources of entropy.
	//
	// Usage:
	//
	//   <script src=http://davidbau.com/encode/seedrandom-min.js></script>
	//
	//   Math.seedrandom('yipee'); Sets Math.random to a function that is
	//                             initialized using the given explicit seed.
	//
	//   Math.seedrandom();        Sets Math.random to a function that is
	//                             seeded using the current time, dom state,
	//                             and other accumulated local entropy.
	//                             The generated seed string is returned.
	//
	//   Math.seedrandom('yowza', true);
	//                             Seeds using the given explicit seed mixed
	//                             together with accumulated entropy.
	//
	//   <script src="http://bit.ly/srandom-512"></script>
	//                             Seeds using physical random bits downloaded
	//                             from random.org.
	//
	//   <script src="https://jsonlib.appspot.com/urandom?callback=Math.seedrandom">
	//   </script>                 Seeds using urandom bits from call.jsonlib.com,
	//                             which is faster than random.org.
	//
	// Examples:
	//
	//   Math.seedrandom("hello");            // Use "hello" as the seed.
	//   document.write(Math.random());       // Always 0.5463663768140734
	//   document.write(Math.random());       // Always 0.43973793770592234
	//   var rng1 = Math.random;              // Remember the current prng.
	//
	//   var autoseed = Math.seedrandom();    // New prng with an automatic seed.
	//   document.write(Math.random());       // Pretty much unpredictable.
	//
	//   Math.random = rng1;                  // Continue "hello" prng sequence.
	//   document.write(Math.random());       // Always 0.554769432473455
	//
	//   Math.seedrandom(autoseed);           // Restart at the previous seed.
	//   document.write(Math.random());       // Repeat the 'unpredictable' value.
	//
	// Notes:
	//
	// Each time seedrandom('arg') is called, entropy from the passed seed
	// is accumulated in a pool to help generate future seeds for the
	// zero-argument form of Math.seedrandom, so entropy can be injected over
	// time by calling seedrandom with explicit data repeatedly.
	//
	// On speed - This javascript implementation of Math.random() is about
	// 3-10x slower than the built-in Math.random() because it is not native
	// code, but this is typically fast enough anyway.  Seeding is more expensive,
	// especially if you use auto-seeding.  Some details (timings on Chrome 4):
	//
	// Our Math.random()            - avg less than 0.002 milliseconds per call
	// seedrandom('explicit')       - avg less than 0.5 milliseconds per call
	// seedrandom('explicit', true) - avg less than 2 milliseconds per call
	// seedrandom()                 - avg about 38 milliseconds per call
	//
	// LICENSE (BSD):
	//
	// Copyright 2010 David Bau, all rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions are met:
	// 
	//   1. Redistributions of source code must retain the above copyright
	//      notice, this list of conditions and the following disclaimer.
	//
	//   2. Redistributions in binary form must reproduce the above copyright
	//      notice, this list of conditions and the following disclaimer in the
	//      documentation and/or other materials provided with the distribution.
	// 
	//   3. Neither the name of this module nor the names of its contributors may
	//      be used to endorse or promote products derived from this software
	//      without specific prior written permission.
	// 
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	/**
	 * All code is in an anonymous closure to keep the global namespace clean.
	 *
	 * @param {number=} overflow 
	 * @param {number=} startdenom
	 */

	// Patched by Seb so that seedrandom.js does not pollute the Math object.
	// My tests suggest that doing Math.trouble = 1 makes Math lookups about 5%
	// slower.
	numeric.seedrandom = { pow:Math.pow, random:Math.random };

	(function (pool, math, width, chunks, significance, overflow, startdenom) {


	//
	// seedrandom()
	// This is the seedrandom function described above.
	//
	math['seedrandom'] = function seedrandom(seed, use_entropy) {
	  var key = [];
	  var arc4;

	  // Flatten the seed string or build one from local entropy if needed.
	  seed = mixkey(flatten(
	    use_entropy ? [seed, pool] :
	    arguments.length ? seed :
	    [new Date().getTime(), pool, window], 3), key);

	  // Use the seed to initialize an ARC4 generator.
	  arc4 = new ARC4(key);

	  // Mix the randomness into accumulated entropy.
	  mixkey(arc4.S, pool);

	  // Override Math.random

	  // This function returns a random double in [0, 1) that contains
	  // randomness in every bit of the mantissa of the IEEE 754 value.

	  math['random'] = function random() {  // Closure to return a random double:
	    var n = arc4.g(chunks);             // Start with a numerator n < 2 ^ 48
	    var d = startdenom;                 //   and denominator d = 2 ^ 48.
	    var x = 0;                          //   and no 'extra last byte'.
	    while (n < significance) {          // Fill up all significant digits by
	      n = (n + x) * width;              //   shifting numerator and
	      d *= width;                       //   denominator and generating a
	      x = arc4.g(1);                    //   new least-significant-byte.
	    }
	    while (n >= overflow) {             // To avoid rounding up, before adding
	      n /= 2;                           //   last byte, shift everything
	      d /= 2;                           //   right using integer math until
	      x >>>= 1;                         //   we have exactly the desired bits.
	    }
	    return (n + x) / d;                 // Form the number within [0, 1).
	  };

	  // Return the seed that was used
	  return seed;
	};

	//
	// ARC4
	//
	// An ARC4 implementation.  The constructor takes a key in the form of
	// an array of at most (width) integers that should be 0 <= x < (width).
	//
	// The g(count) method returns a pseudorandom integer that concatenates
	// the next (count) outputs from ARC4.  Its return value is a number x
	// that is in the range 0 <= x < (width ^ count).
	//
	/** @constructor */
	function ARC4(key) {
	  var t, u, me = this, keylen = key.length;
	  var i = 0, j = me.i = me.j = me.m = 0;
	  me.S = [];
	  me.c = [];

	  // The empty key [] is treated as [0].
	  if (!keylen) { key = [keylen++]; }

	  // Set up S using the standard key scheduling algorithm.
	  while (i < width) { me.S[i] = i++; }
	  for (i = 0; i < width; i++) {
	    t = me.S[i];
	    j = lowbits(j + t + key[i % keylen]);
	    u = me.S[j];
	    me.S[i] = u;
	    me.S[j] = t;
	  }

	  // The "g" method returns the next (count) outputs as one number.
	  me.g = function getnext(count) {
	    var s = me.S;
	    var i = lowbits(me.i + 1); var t = s[i];
	    var j = lowbits(me.j + t); var u = s[j];
	    s[i] = u;
	    s[j] = t;
	    var r = s[lowbits(t + u)];
	    while (--count) {
	      i = lowbits(i + 1); t = s[i];
	      j = lowbits(j + t); u = s[j];
	      s[i] = u;
	      s[j] = t;
	      r = r * width + s[lowbits(t + u)];
	    }
	    me.i = i;
	    me.j = j;
	    return r;
	  };
	  // For robust unpredictability discard an initial batch of values.
	  // See http://www.rsa.com/rsalabs/node.asp?id=2009
	  me.g(width);
	}

	//
	// flatten()
	// Converts an object tree to nested arrays of strings.
	//
	/** @param {Object=} result 
	  * @param {string=} prop
	  * @param {string=} typ */
	function flatten(obj, depth, result, prop, typ) {
	  result = [];
	  typ = typeof(obj);
	  if (depth && typ == 'object') {
	    for (prop in obj) {
	      if (prop.indexOf('S') < 5) {    // Avoid FF3 bug (local/sessionStorage)
	        try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
	      }
	    }
	  }
	  return (result.length ? result : obj + (typ != 'string' ? '\0' : ''));
	}

	//
	// mixkey()
	// Mixes a string seed into a key that is an array of integers, and
	// returns a shortened string seed that is equivalent to the result key.
	//
	/** @param {number=} smear 
	  * @param {number=} j */
	function mixkey(seed, key, smear, j) {
	  seed += '';                         // Ensure the seed is a string
	  smear = 0;
	  for (j = 0; j < seed.length; j++) {
	    key[lowbits(j)] =
	      lowbits((smear ^= key[lowbits(j)] * 19) + seed.charCodeAt(j));
	  }
	  seed = '';
	  for (j in key) { seed += String.fromCharCode(key[j]); }
	  return seed;
	}

	//
	// lowbits()
	// A quick "n mod width" for width a power of 2.
	//
	function lowbits(n) { return n & (width - 1); }

	//
	// The following constants are related to IEEE 754 limits.
	//
	startdenom = math.pow(width, chunks);
	significance = math.pow(2, significance);
	overflow = significance * 2;

	//
	// When seedrandom.js is loaded, we immediately mix a few bits
	// from the built-in RNG into the entropy pool.  Because we do
	// not want to intefere with determinstic PRNG state later,
	// seedrandom will not call math.random on its own again after
	// initialization.
	//
	mixkey(math.random(), pool);

	// End anonymous scope, and pass initial values.
	}(
	  [],   // pool: entropy pool starts empty
	  numeric.seedrandom, // math: package containing random, pow, and seedrandom
	  256,  // width: each RC4 output is 0 <= x < 256
	  6,    // chunks: at least six RC4 outputs for each double
	  52    // significance: there are 52 significant digits in a double
	  ));
	/* This file is a slightly modified version of quadprog.js from Alberto Santini.
	 * It has been slightly modified by Sébastien Loisel to make sure that it handles
	 * 0-based Arrays instead of 1-based Arrays.
	 * License is in resources/LICENSE.quadprog */
	(function(exports) {

	function base0to1(A) {
	    if(typeof A !== "object") { return A; }
	    var ret = [], i,n=A.length;
	    for(i=0;i<n;i++) ret[i+1] = base0to1(A[i]);
	    return ret;
	}
	function base1to0(A) {
	    if(typeof A !== "object") { return A; }
	    var ret = [], i,n=A.length;
	    for(i=1;i<n;i++) ret[i-1] = base1to0(A[i]);
	    return ret;
	}

	function dpori(a, lda, n) {
	    var i, j, k, kp1, t;

	    for (k = 1; k <= n; k = k + 1) {
	        a[k][k] = 1 / a[k][k];
	        t = -a[k][k];
	        //~ dscal(k - 1, t, a[1][k], 1);
	        for (i = 1; i < k; i = i + 1) {
	            a[i][k] = t * a[i][k];
	        }

	        kp1 = k + 1;
	        if (n < kp1) {
	            break;
	        }
	        for (j = kp1; j <= n; j = j + 1) {
	            t = a[k][j];
	            a[k][j] = 0;
	            //~ daxpy(k, t, a[1][k], 1, a[1][j], 1);
	            for (i = 1; i <= k; i = i + 1) {
	                a[i][j] = a[i][j] + (t * a[i][k]);
	            }
	        }
	    }

	}

	function dposl(a, lda, n, b) {
	    var i, k, kb, t;

	    for (k = 1; k <= n; k = k + 1) {
	        //~ t = ddot(k - 1, a[1][k], 1, b[1], 1);
	        t = 0;
	        for (i = 1; i < k; i = i + 1) {
	            t = t + (a[i][k] * b[i]);
	        }

	        b[k] = (b[k] - t) / a[k][k];
	    }

	    for (kb = 1; kb <= n; kb = kb + 1) {
	        k = n + 1 - kb;
	        b[k] = b[k] / a[k][k];
	        t = -b[k];
	        //~ daxpy(k - 1, t, a[1][k], 1, b[1], 1);
	        for (i = 1; i < k; i = i + 1) {
	            b[i] = b[i] + (t * a[i][k]);
	        }
	    }
	}

	function dpofa(a, lda, n, info) {
	    var i, j, jm1, k, t, s;

	    for (j = 1; j <= n; j = j + 1) {
	        info[1] = j;
	        s = 0;
	        jm1 = j - 1;
	        if (jm1 < 1) {
	            s = a[j][j] - s;
	            if (s <= 0) {
	                break;
	            }
	            a[j][j] = Math.sqrt(s);
	        } else {
	            for (k = 1; k <= jm1; k = k + 1) {
	                //~ t = a[k][j] - ddot(k - 1, a[1][k], 1, a[1][j], 1);
	                t = a[k][j];
	                for (i = 1; i < k; i = i + 1) {
	                    t = t - (a[i][j] * a[i][k]);
	                }
	                t = t / a[k][k];
	                a[k][j] = t;
	                s = s + t * t;
	            }
	            s = a[j][j] - s;
	            if (s <= 0) {
	                break;
	            }
	            a[j][j] = Math.sqrt(s);
	        }
	        info[1] = 0;
	    }
	}

	function qpgen2(dmat, dvec, fddmat, n, sol, crval, amat,
	    bvec, fdamat, q, meq, iact, nact, iter, work, ierr) {

	    var i, j, l, l1, info, it1, iwzv, iwrv, iwrm, iwsv, iwuv, nvl, r, iwnbv,
	        temp, sum, t1, tt, gc, gs, nu,
	        t1inf, t2min,
	        vsmall, tmpa, tmpb,
	        go;

	    r = Math.min(n, q);
	    l = 2 * n + (r * (r + 5)) / 2 + 2 * q + 1;

	    vsmall = 1.0e-60;
	    do {
	        vsmall = vsmall + vsmall;
	        tmpa = 1 + 0.1 * vsmall;
	        tmpb = 1 + 0.2 * vsmall;
	    } while (tmpa <= 1 || tmpb <= 1);

	    for (i = 1; i <= n; i = i + 1) {
	        work[i] = dvec[i];
	    }
	    for (i = n + 1; i <= l; i = i + 1) {
	        work[i] = 0;
	    }
	    for (i = 1; i <= q; i = i + 1) {
	        iact[i] = 0;
	    }

	    info = [];

	    if (ierr[1] === 0) {
	        dpofa(dmat, fddmat, n, info);
	        if (info[1] !== 0) {
	            ierr[1] = 2;
	            return;
	        }
	        dposl(dmat, fddmat, n, dvec);
	        dpori(dmat, fddmat, n);
	    } else {
	        for (j = 1; j <= n; j = j + 1) {
	            sol[j] = 0;
	            for (i = 1; i <= j; i = i + 1) {
	                sol[j] = sol[j] + dmat[i][j] * dvec[i];
	            }
	        }
	        for (j = 1; j <= n; j = j + 1) {
	            dvec[j] = 0;
	            for (i = j; i <= n; i = i + 1) {
	                dvec[j] = dvec[j] + dmat[j][i] * sol[i];
	            }
	        }
	    }

	    crval[1] = 0;
	    for (j = 1; j <= n; j = j + 1) {
	        sol[j] = dvec[j];
	        crval[1] = crval[1] + work[j] * sol[j];
	        work[j] = 0;
	        for (i = j + 1; i <= n; i = i + 1) {
	            dmat[i][j] = 0;
	        }
	    }
	    crval[1] = -crval[1] / 2;
	    ierr[1] = 0;

	    iwzv = n;
	    iwrv = iwzv + n;
	    iwuv = iwrv + r;
	    iwrm = iwuv + r + 1;
	    iwsv = iwrm + (r * (r + 1)) / 2;
	    iwnbv = iwsv + q;

	    for (i = 1; i <= q; i = i + 1) {
	        sum = 0;
	        for (j = 1; j <= n; j = j + 1) {
	            sum = sum + amat[j][i] * amat[j][i];
	        }
	        work[iwnbv + i] = Math.sqrt(sum);
	    }
	    nact = 0;
	    iter[1] = 0;
	    iter[2] = 0;

	    function fn_goto_50() {
	        iter[1] = iter[1] + 1;

	        l = iwsv;
	        for (i = 1; i <= q; i = i + 1) {
	            l = l + 1;
	            sum = -bvec[i];
	            for (j = 1; j <= n; j = j + 1) {
	                sum = sum + amat[j][i] * sol[j];
	            }
	            if (Math.abs(sum) < vsmall) {
	                sum = 0;
	            }
	            if (i > meq) {
	                work[l] = sum;
	            } else {
	                work[l] = -Math.abs(sum);
	                if (sum > 0) {
	                    for (j = 1; j <= n; j = j + 1) {
	                        amat[j][i] = -amat[j][i];
	                    }
	                    bvec[i] = -bvec[i];
	                }
	            }
	        }

	        for (i = 1; i <= nact; i = i + 1) {
	            work[iwsv + iact[i]] = 0;
	        }

	        nvl = 0;
	        temp = 0;
	        for (i = 1; i <= q; i = i + 1) {
	            if (work[iwsv + i] < temp * work[iwnbv + i]) {
	                nvl = i;
	                temp = work[iwsv + i] / work[iwnbv + i];
	            }
	        }
	        if (nvl === 0) {
	            return 999;
	        }

	        return 0;
	    }

	    function fn_goto_55() {
	        for (i = 1; i <= n; i = i + 1) {
	            sum = 0;
	            for (j = 1; j <= n; j = j + 1) {
	                sum = sum + dmat[j][i] * amat[j][nvl];
	            }
	            work[i] = sum;
	        }

	        l1 = iwzv;
	        for (i = 1; i <= n; i = i + 1) {
	            work[l1 + i] = 0;
	        }
	        for (j = nact + 1; j <= n; j = j + 1) {
	            for (i = 1; i <= n; i = i + 1) {
	                work[l1 + i] = work[l1 + i] + dmat[i][j] * work[j];
	            }
	        }

	        t1inf = true;
	        for (i = nact; i >= 1; i = i - 1) {
	            sum = work[i];
	            l = iwrm + (i * (i + 3)) / 2;
	            l1 = l - i;
	            for (j = i + 1; j <= nact; j = j + 1) {
	                sum = sum - work[l] * work[iwrv + j];
	                l = l + j;
	            }
	            sum = sum / work[l1];
	            work[iwrv + i] = sum;
	            if (iact[i] < meq) {
	                // continue;
	                break;
	            }
	            if (sum < 0) {
	                // continue;
	                break;
	            }
	            t1inf = false;
	            it1 = i;
	        }

	        if (!t1inf) {
	            t1 = work[iwuv + it1] / work[iwrv + it1];
	            for (i = 1; i <= nact; i = i + 1) {
	                if (iact[i] < meq) {
	                    // continue;
	                    break;
	                }
	                if (work[iwrv + i] < 0) {
	                    // continue;
	                    break;
	                }
	                temp = work[iwuv + i] / work[iwrv + i];
	                if (temp < t1) {
	                    t1 = temp;
	                    it1 = i;
	                }
	            }
	        }

	        sum = 0;
	        for (i = iwzv + 1; i <= iwzv + n; i = i + 1) {
	            sum = sum + work[i] * work[i];
	        }
	        if (Math.abs(sum) <= vsmall) {
	            if (t1inf) {
	                ierr[1] = 1;
	                // GOTO 999
	                return 999;
	            } else {
	                for (i = 1; i <= nact; i = i + 1) {
	                    work[iwuv + i] = work[iwuv + i] - t1 * work[iwrv + i];
	                }
	                work[iwuv + nact + 1] = work[iwuv + nact + 1] + t1;
	                // GOTO 700
	                return 700;
	            }
	        } else {
	            sum = 0;
	            for (i = 1; i <= n; i = i + 1) {
	                sum = sum + work[iwzv + i] * amat[i][nvl];
	            }
	            tt = -work[iwsv + nvl] / sum;
	            t2min = true;
	            if (!t1inf) {
	                if (t1 < tt) {
	                    tt = t1;
	                    t2min = false;
	                }
	            }

	            for (i = 1; i <= n; i = i + 1) {
	                sol[i] = sol[i] + tt * work[iwzv + i];
	                if (Math.abs(sol[i]) < vsmall) {
	                    sol[i] = 0;
	                }
	            }

	            crval[1] = crval[1] + tt * sum * (tt / 2 + work[iwuv + nact + 1]);
	            for (i = 1; i <= nact; i = i + 1) {
	                work[iwuv + i] = work[iwuv + i] - tt * work[iwrv + i];
	            }
	            work[iwuv + nact + 1] = work[iwuv + nact + 1] + tt;

	            if (t2min) {
	                nact = nact + 1;
	                iact[nact] = nvl;

	                l = iwrm + ((nact - 1) * nact) / 2 + 1;
	                for (i = 1; i <= nact - 1; i = i + 1) {
	                    work[l] = work[i];
	                    l = l + 1;
	                }

	                if (nact === n) {
	                    work[l] = work[n];
	                } else {
	                    for (i = n; i >= nact + 1; i = i - 1) {
	                        if (work[i] === 0) {
	                            // continue;
	                            break;
	                        }
	                        gc = Math.max(Math.abs(work[i - 1]), Math.abs(work[i]));
	                        gs = Math.min(Math.abs(work[i - 1]), Math.abs(work[i]));
	                        if (work[i - 1] >= 0) {
	                            temp = Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
	                        } else {
	                            temp = -Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
	                        }
	                        gc = work[i - 1] / temp;
	                        gs = work[i] / temp;

	                        if (gc === 1) {
	                            // continue;
	                            break;
	                        }
	                        if (gc === 0) {
	                            work[i - 1] = gs * temp;
	                            for (j = 1; j <= n; j = j + 1) {
	                                temp = dmat[j][i - 1];
	                                dmat[j][i - 1] = dmat[j][i];
	                                dmat[j][i] = temp;
	                            }
	                        } else {
	                            work[i - 1] = temp;
	                            nu = gs / (1 + gc);
	                            for (j = 1; j <= n; j = j + 1) {
	                                temp = gc * dmat[j][i - 1] + gs * dmat[j][i];
	                                dmat[j][i] = nu * (dmat[j][i - 1] + temp) - dmat[j][i];
	                                dmat[j][i - 1] = temp;

	                            }
	                        }
	                    }
	                    work[l] = work[nact];
	                }
	            } else {
	                sum = -bvec[nvl];
	                for (j = 1; j <= n; j = j + 1) {
	                    sum = sum + sol[j] * amat[j][nvl];
	                }
	                if (nvl > meq) {
	                    work[iwsv + nvl] = sum;
	                } else {
	                    work[iwsv + nvl] = -Math.abs(sum);
	                    if (sum > 0) {
	                        for (j = 1; j <= n; j = j + 1) {
	                            amat[j][nvl] = -amat[j][nvl];
	                        }
	                        bvec[nvl] = -bvec[nvl];
	                    }
	                }
	                // GOTO 700
	                return 700;
	            }
	        }

	        return 0;
	    }

	    function fn_goto_797() {
	        l = iwrm + (it1 * (it1 + 1)) / 2 + 1;
	        l1 = l + it1;
	        if (work[l1] === 0) {
	            // GOTO 798
	            return 798;
	        }
	        gc = Math.max(Math.abs(work[l1 - 1]), Math.abs(work[l1]));
	        gs = Math.min(Math.abs(work[l1 - 1]), Math.abs(work[l1]));
	        if (work[l1 - 1] >= 0) {
	            temp = Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
	        } else {
	            temp = -Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
	        }
	        gc = work[l1 - 1] / temp;
	        gs = work[l1] / temp;

	        if (gc === 1) {
	            // GOTO 798
	            return 798;
	        }
	        if (gc === 0) {
	            for (i = it1 + 1; i <= nact; i = i + 1) {
	                temp = work[l1 - 1];
	                work[l1 - 1] = work[l1];
	                work[l1] = temp;
	                l1 = l1 + i;
	            }
	            for (i = 1; i <= n; i = i + 1) {
	                temp = dmat[i][it1];
	                dmat[i][it1] = dmat[i][it1 + 1];
	                dmat[i][it1 + 1] = temp;
	            }
	        } else {
	            nu = gs / (1 + gc);
	            for (i = it1 + 1; i <= nact; i = i + 1) {
	                temp = gc * work[l1 - 1] + gs * work[l1];
	                work[l1] = nu * (work[l1 - 1] + temp) - work[l1];
	                work[l1 - 1] = temp;
	                l1 = l1 + i;
	            }
	            for (i = 1; i <= n; i = i + 1) {
	                temp = gc * dmat[i][it1] + gs * dmat[i][it1 + 1];
	                dmat[i][it1 + 1] = nu * (dmat[i][it1] + temp) - dmat[i][it1 + 1];
	                dmat[i][it1] = temp;
	            }
	        }

	        return 0;
	    }

	    function fn_goto_798() {
	        l1 = l - it1;
	        for (i = 1; i <= it1; i = i + 1) {
	            work[l1] = work[l];
	            l = l + 1;
	            l1 = l1 + 1;
	        }

	        work[iwuv + it1] = work[iwuv + it1 + 1];
	        iact[it1] = iact[it1 + 1];
	        it1 = it1 + 1;
	        if (it1 < nact) {
	            // GOTO 797
	            return 797;
	        }

	        return 0;
	    }

	    function fn_goto_799() {
	        work[iwuv + nact] = work[iwuv + nact + 1];
	        work[iwuv + nact + 1] = 0;
	        iact[nact] = 0;
	        nact = nact - 1;
	        iter[2] = iter[2] + 1;

	        return 0;
	    }

	    go = 0;
	    while (true) {
	        go = fn_goto_50();
	        if (go === 999) {
	            return;
	        }
	        while (true) {
	            go = fn_goto_55();
	            if (go === 0) {
	                break;
	            }
	            if (go === 999) {
	                return;
	            }
	            if (go === 700) {
	                if (it1 === nact) {
	                    fn_goto_799();
	                } else {
	                    while (true) {
	                        fn_goto_797();
	                        go = fn_goto_798();
	                        if (go !== 797) {
	                            break;
	                        }
	                    }
	                    fn_goto_799();
	                }
	            }
	        }
	    }

	}

	function solveQP(Dmat, dvec, Amat, bvec, meq, factorized) {
	    Dmat = base0to1(Dmat);
	    dvec = base0to1(dvec);
	    Amat = base0to1(Amat);
	    var i, n, q,
	        nact, r,
	        crval = [], iact = [], sol = [], work = [], iter = [],
	        message;

	    meq = meq || 0;
	    factorized = factorized ? base0to1(factorized) : [undefined, 0];
	    bvec = bvec ? base0to1(bvec) : [];

	    // In Fortran the array index starts from 1
	    n = Dmat.length - 1;
	    q = Amat[1].length - 1;

	    if (!bvec) {
	        for (i = 1; i <= q; i = i + 1) {
	            bvec[i] = 0;
	        }
	    }
	    for (i = 1; i <= q; i = i + 1) {
	        iact[i] = 0;
	    }
	    nact = 0;
	    r = Math.min(n, q);
	    for (i = 1; i <= n; i = i + 1) {
	        sol[i] = 0;
	    }
	    crval[1] = 0;
	    for (i = 1; i <= (2 * n + (r * (r + 5)) / 2 + 2 * q + 1); i = i + 1) {
	        work[i] = 0;
	    }
	    for (i = 1; i <= 2; i = i + 1) {
	        iter[i] = 0;
	    }

	    qpgen2(Dmat, dvec, n, n, sol, crval, Amat,
	        bvec, n, q, meq, iact, nact, iter, work, factorized);

	    message = "";
	    if (factorized[1] === 1) {
	        message = "constraints are inconsistent, no solution!";
	    }
	    if (factorized[1] === 2) {
	        message = "matrix D in quadratic function is not positive definite!";
	    }

	    return {
	        solution: base1to0(sol),
	        value: base1to0(crval),
	        unconstrained_solution: base1to0(dvec),
	        iterations: base1to0(iter),
	        iact: base1to0(iact),
	        message: message
	    };
	}
	exports.solveQP = solveQP;
	}(numeric));
	/*
	Shanti Rao sent me this routine by private email. I had to modify it
	slightly to work on Arrays instead of using a Matrix object.
	It is apparently translated from http://stitchpanorama.sourceforge.net/Python/svd.py
	*/

	numeric.svd= function svd(A) {
	    var temp;
	//Compute the thin SVD from G. H. Golub and C. Reinsch, Numer. Math. 14, 403-420 (1970)
		var prec= numeric.epsilon; //Math.pow(2,-52) // assumes double prec
		var tolerance= 1.e-64/prec;
		var itmax= 50;
		var c=0;
		var i=0;
		var j=0;
		var k=0;
		var l=0;
		
		var u= numeric.clone(A);
		var m= u.length;
		
		var n= u[0].length;
		
		if (m < n) throw "Need more rows than columns"
		
		var e = new Array(n);
		var q = new Array(n);
		for (i=0; i<n; i++) e[i] = q[i] = 0.0;
		var v = numeric.rep([n,n],0);
	//	v.zero();
		
	 	function pythag(a,b)
	 	{
			a = Math.abs(a)
			b = Math.abs(b)
			if (a > b)
				return a*Math.sqrt(1.0+(b*b/a/a))
			else if (b == 0.0) 
				return a
			return b*Math.sqrt(1.0+(a*a/b/b))
		}

		//Householder's reduction to bidiagonal form

		var f= 0.0;
		var g= 0.0;
		var h= 0.0;
		var x= 0.0;
		var y= 0.0;
		var z= 0.0;
		var s= 0.0;
		
		for (i=0; i < n; i++)
		{	
			e[i]= g;
			s= 0.0;
			l= i+1;
			for (j=i; j < m; j++) 
				s += (u[j][i]*u[j][i]);
			if (s <= tolerance)
				g= 0.0;
			else
			{	
				f= u[i][i];
				g= Math.sqrt(s);
				if (f >= 0.0) g= -g;
				h= f*g-s
				u[i][i]=f-g;
				for (j=l; j < n; j++)
				{
					s= 0.0
					for (k=i; k < m; k++) 
						s += u[k][i]*u[k][j]
					f= s/h
					for (k=i; k < m; k++) 
						u[k][j]+=f*u[k][i]
				}
			}
			q[i]= g
			s= 0.0
			for (j=l; j < n; j++) 
				s= s + u[i][j]*u[i][j]
			if (s <= tolerance)
				g= 0.0
			else
			{	
				f= u[i][i+1]
				g= Math.sqrt(s)
				if (f >= 0.0) g= -g
				h= f*g - s
				u[i][i+1] = f-g;
				for (j=l; j < n; j++) e[j]= u[i][j]/h
				for (j=l; j < m; j++)
				{	
					s=0.0
					for (k=l; k < n; k++) 
						s += (u[j][k]*u[i][k])
					for (k=l; k < n; k++) 
						u[j][k]+=s*e[k]
				}	
			}
			y= Math.abs(q[i])+Math.abs(e[i])
			if (y>x) 
				x=y
		}
		
		// accumulation of right hand gtransformations
		for (i=n-1; i != -1; i+= -1)
		{	
			if (g != 0.0)
			{
			 	h= g*u[i][i+1]
				for (j=l; j < n; j++) 
					v[j][i]=u[i][j]/h
				for (j=l; j < n; j++)
				{	
					s=0.0
					for (k=l; k < n; k++) 
						s += u[i][k]*v[k][j]
					for (k=l; k < n; k++) 
						v[k][j]+=(s*v[k][i])
				}	
			}
			for (j=l; j < n; j++)
			{
				v[i][j] = 0;
				v[j][i] = 0;
			}
			v[i][i] = 1;
			g= e[i]
			l= i
		}
		
		// accumulation of left hand transformations
		for (i=n-1; i != -1; i+= -1)
		{	
			l= i+1
			g= q[i]
			for (j=l; j < n; j++) 
				u[i][j] = 0;
			if (g != 0.0)
			{
				h= u[i][i]*g
				for (j=l; j < n; j++)
				{
					s=0.0
					for (k=l; k < m; k++) s += u[k][i]*u[k][j];
					f= s/h
					for (k=i; k < m; k++) u[k][j]+=f*u[k][i];
				}
				for (j=i; j < m; j++) u[j][i] = u[j][i]/g;
			}
			else
				for (j=i; j < m; j++) u[j][i] = 0;
			u[i][i] += 1;
		}
		
		// diagonalization of the bidiagonal form
		prec= prec*x
		for (k=n-1; k != -1; k+= -1)
		{
			for (var iteration=0; iteration < itmax; iteration++)
			{	// test f splitting
				var test_convergence = false
				for (l=k; l != -1; l+= -1)
				{	
					if (Math.abs(e[l]) <= prec)
					{	test_convergence= true
						break 
					}
					if (Math.abs(q[l-1]) <= prec)
						break 
				}
				if (!test_convergence)
				{	// cancellation of e[l] if l>0
					c= 0.0
					s= 1.0
					var l1= l-1
					for (i =l; i<k+1; i++)
					{	
						f= s*e[i]
						e[i]= c*e[i]
						if (Math.abs(f) <= prec)
							break
						g= q[i]
						h= pythag(f,g)
						q[i]= h
						c= g/h
						s= -f/h
						for (j=0; j < m; j++)
						{	
							y= u[j][l1]
							z= u[j][i]
							u[j][l1] =  y*c+(z*s)
							u[j][i] = -y*s+(z*c)
						} 
					}	
				}
				// test f convergence
				z= q[k]
				if (l== k)
				{	//convergence
					if (z<0.0)
					{	//q[k] is made non-negative
						q[k]= -z
						for (j=0; j < n; j++)
							v[j][k] = -v[j][k]
					}
					break  //break out of iteration loop and move on to next k value
				}
				if (iteration >= itmax-1)
					throw 'Error: no convergence.'
				// shift from bottom 2x2 minor
				x= q[l]
				y= q[k-1]
				g= e[k-1]
				h= e[k]
				f= ((y-z)*(y+z)+(g-h)*(g+h))/(2.0*h*y)
				g= pythag(f,1.0)
				if (f < 0.0)
					f= ((x-z)*(x+z)+h*(y/(f-g)-h))/x
				else
					f= ((x-z)*(x+z)+h*(y/(f+g)-h))/x
				// next QR transformation
				c= 1.0
				s= 1.0
				for (i=l+1; i< k+1; i++)
				{	
					g= e[i]
					y= q[i]
					h= s*g
					g= c*g
					z= pythag(f,h)
					e[i-1]= z
					c= f/z
					s= h/z
					f= x*c+g*s
					g= -x*s+g*c
					h= y*s
					y= y*c
					for (j=0; j < n; j++)
					{	
						x= v[j][i-1]
						z= v[j][i]
						v[j][i-1] = x*c+z*s
						v[j][i] = -x*s+z*c
					}
					z= pythag(f,h)
					q[i-1]= z
					c= f/z
					s= h/z
					f= c*g+s*y
					x= -s*g+c*y
					for (j=0; j < m; j++)
					{
						y= u[j][i-1]
						z= u[j][i]
						u[j][i-1] = y*c+z*s
						u[j][i] = -y*s+z*c
					}
				}
				e[l]= 0.0
				e[k]= f
				q[k]= x
			} 
		}
			
		//vt= transpose(v)
		//return (u,q,vt)
		for (i=0;i<q.length; i++) 
		  if (q[i] < prec) q[i] = 0
		  
		//sort eigenvalues	
		for (i=0; i< n; i++)
		{	 
		//writeln(q)
		 for (j=i-1; j >= 0; j--)
		 {
		  if (q[j] < q[i])
		  {
		//  writeln(i,'-',j)
		   c = q[j]
		   q[j] = q[i]
		   q[i] = c
		   for(k=0;k<u.length;k++) { temp = u[k][i]; u[k][i] = u[k][j]; u[k][j] = temp; }
		   for(k=0;k<v.length;k++) { temp = v[k][i]; v[k][i] = v[k][j]; v[k][j] = temp; }
	//	   u.swapCols(i,j)
	//	   v.swapCols(i,j)
		   i = j	   
		  }
		 }	
		}
		
		return {U:u,S:q,V:v}
	};


	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 739:
/***/ function(module, exports) {

	module.exports = "<h3>About Component</h3>\n<p>This is the about component!</p>"

/***/ },

/***/ 740:
/***/ function(module, exports) {

	module.exports = "<nav>\n\t<a [routerLink]=\"['/']\">\n    About\n  </a>\n  |\n\t<a [routerLink]=\"['/hierarchy']\">\n    Hierarchy\n  </a>\n  |\n\t<a routerLink=\"/criteria\" routerLinkActive=\"active\">\n    Criteria\n  </a>\n  |\n\t<a routerLink=\"/comparisons\" routerLinkActive=\"active\">\n    Comparisons\n  </a>\n  |\n\t<a [routerLink]=\"['/github', 'angular']\">\n    Github Repos\n  </a>\n</nav>\n\n<main>\n\t<router-outlet></router-outlet>\n</main>\n\n\n<footer>\n  © 2016\n</footer>\n"

/***/ },

/***/ 741:
/***/ function(module, exports) {

	module.exports = "<h2>Comaprison Results</h2>\n<p>If you hover over the donut chart, you can see the computed weights.</p>\n<hierarchy></hierarchy>\n<div *ngIf=\"matrices\">\n<div *ngFor=\"let matrix of matrices.matrices\">\n\t<h3>Pairwise comparison matrix</h3>\n\t<table class=\"pwc-matrix\">\n\t\t<tr>\n\t\t\t<td></td>\n\t\t\t<td *ngFor=\"let name of matrix.names\">{{name}}</td>\n\t\t</tr>\n\t\t<tr *ngFor=\"let row of matrix.data; let i=index\">\n\t\t\t<td>{{matrix.names[i]}}</td>\n\t\t\t<td *ngFor=\"let val of row\">\n\t\t\t\t{{val | number:'.0-2'}}\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n\t<h3>Calculated Weights</h3>\n\t<pie-chart [matrix]=\"matrix\"></pie-chart>\n</div>\n</div>\n<button (click)=\"goBack()\">Back</button>\n"

/***/ },

/***/ 742:
/***/ function(module, exports) {

	module.exports = "<p>Use the slider to indicate relative importance.  If they are equally important leave</p>\n<p><em>AHP</em> works best if you keep your comparisons close to transitive.</p>\n<p>When you are done, scroll down and click \"compute weights\".</p>\n<div id=\"comparison-container\">\n\t<div class=\"comparison-column\">\n\t<h2>My Comparisons</h2>\n\t<ul class=\"comparison-groups\">\n\t\t<li *ngFor=\"let group of groups\">\n\t\t\t<h3 *ngIf=\"group.pairs.length\">Group: {{group.groupName}}</h3>\n\t\t\t\t<table>\n\t\t\t\t\t<tr *ngFor=\"let pair of group.pairs\" >\n\t\t\t\t\t\t<td>\t{{pair.left.name}} </td>\n\t\t\t\t\t\t<td>\t\t\n\t\t\t\t\t\t\t<input type=\"range\" min=\"1\" max=\"17\" \n\t\t\t\t\t\t\t\tstep=\"1\" value=\"9\" [(ngModel)]=\"pair.score\"/>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td> {{pair.right.name}} </td>\n\t\t\t\t\t\t<td> {{CONVERSIONS[pair.score] | number:'.2-2'}} </td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t</li>\n\t</ul>\n\t</div>\n\t<div class=\"comparison-column\">\n\t\t<button (click)=\"onCompute()\">Compute weights</button>\n\t</div>\n</div>\n"

/***/ },

/***/ 743:
/***/ function(module, exports) {

	module.exports = "<div id=\"search-component\">\n  <h4>Parent Search</h4>\n\t<input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" \n\t\tvalue=\"{{childCriterium.parent_name}}\"/>\n  <div>\n    <div *ngFor=\"let criterium of criteria | async\"\n         (click)=\"chooseParent(criterium)\" class=\"search-result\" >\n      {{criterium.name}}\n    </div>\n  </div>\n</div>\n\n"

/***/ },

/***/ 744:
/***/ function(module, exports) {

	module.exports = "<h2>My Criteria</h2>\n<p>Add, edit, delete, or view details using the buttons.  You can use the search box to conveniently search for parents of criteria you wish to add. </p>\n<p><em>AHP</em> works best if you keep the number of criteria in each group below five.</p>\n<p>When you are done, click comparisons to start comparing your criteria.</p>\n<ul class=\"criteria\">\n  <li *ngFor=\"let criterium of criteria\" (click)=\"onSelect(criterium)\" [class.selected]=\"criterium === selectedCriterium\">\n    <span class=\"criterium-element\">\n      <span class=\"badge\">{{criterium.id}}</span> {{criterium.name}}\n    </span>\n    <button class=\"delete-button\" (click)=\"deleteCriterium(criterium, $event)\">Delete</button>\n  </li>\n</ul>\n\n<div class=\"error\" *ngIf=\"error\">{{error}}</div>\n<button (click)=\"addCriterium()\">Add New Criterium</button>\n<div *ngIf=\"addingCriterium\">\n  <criterium-detail (close)=\"close($event)\"></criterium-detail>\n</div>\n\n<div *ngIf=\"selectedCriterium\">\n  <h2>\n    {{selectedCriterium.name | uppercase}} is my criterium\n  </h2>\n  <button (click)=\"gotoDetail()\">View Details</button>\n</div>\n"

/***/ },

/***/ 745:
/***/ function(module, exports) {

	module.exports = "<div *ngIf=\"criterium\">\n  <h2>{{criterium.name}} details!</h2>\n  <div><label>id: </label>{{criterium.id}}</div>\n  <div>\n    <label>name: </label>\n    <input [(ngModel)]=\"criterium.name\" placeholder=\"name\"/>\n  </div>\n\t<criteria-search [(childCriterium)]=\"criterium\"></criteria-search>\n  <div>\n\t\t\t<label>parent id: </label>\n\t\t\t{{criterium.parent_id}}\n\t</div>\n  <div>\n    <label>parent name: </label>\n\t\t<input [(ngModel)]=\"criterium.parent_name\" placeholder=\"parent name\"/>\n  </div>\n  <button (click)=\"goBack()\">Back</button>\n  <button (click)=\"save()\">Save</button>\n</div>\n"

/***/ },

/***/ 746:
/***/ function(module, exports) {

	module.exports = "<h3>GitHub Browser</h3>\n\n<input type=\"text\" #repoName placeholder=\"Search Github Orgs\">\n<button (click)=\"searchForOrg(repoName.value)\">Search Orgs</button>\n\n<router-outlet></router-outlet>\n"

/***/ },

/***/ 747:
/***/ function(module, exports) {

	module.exports = "<h2>{{ repoDetails.full_name }}</h2>\n\n<pre>this.repoDetails = {{ repoDetails | json }}</pre>\n"

/***/ },

/***/ 748:
/***/ function(module, exports) {

	module.exports = "<h3>Repo list</h3>\n<ul>\n\t<li *ngFor=\"let repo of repos | async\">\n    <a [routerLink]=\"['/github', repo.owner.login, repo.name]\">\n      {{ repo.name }}\n    </a>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>\n"

/***/ },

/***/ 749:
/***/ function(module, exports) {

	module.exports = "<h3>Welcome!</h3>\n<p>This is an application that you can use to implement Thomas Saaty's <em>Analytic Hierarchy Process</em> or <em>AHP</em>.</p>\n\n<p>\nI have yet to implement a persistence layer, so everything you do will persist only until you navigate away from this page (that is, this subsection of the outer site).\n</p>\n\n<p>In brief, the <em>AHP</em> is a multi-criteria analysis framework that decision makers can use to evalute priorities.  As an example, suppose you have a series of road projects that you need to rank in order to determine bugetary constraints and setup a timeline for implementation.</p>\n\n<p>Within the larger setting of your decision, you first put together a set of criteria that you believe will factor in to your planning.</p>\n\n<p>Next you will divide these criteria into subcriteria, and so on, until you have developed a sufficiently detailed hierarchy of criteria.</p>\n\n<p>\nTo learn about the theory behind the <em>AHP</em>, check out this article <a href=\"http://ac.els-cdn.com/0270025587904738/1-s2.0-0270025587904738-main.pdf?_tid=cd28fa40-6a63-11e6-aa0b-00000aab0f26&acdnat=1472088935_18c7589862ab893fbb0b7c21483e7072\" target=\"_blank\">Analytic Hierarchy Process</a>.\t\t\n</p>\n\n<p>\n\tThe process itself consists of three easy steps that follow in an iterative fashion, circularly.\n</p>\n\n<ol>\n\t<li>\n\t\tDefine hierarchy \n\t</li>\n\t<li>\n\t\tCompare the criteria in pairs\n\t</li>\n\t<li>\n\t\tCalculate and review the results\n\t</li>\n\t<li>\n\t\tRevise 1 or 2 based on 3\n\t</li>\n</ol>\n\n<p>To see an example hierarchy, just click on the \"Hiearchy\" tab above!</p>\n\n<p>This app was built using Angular 2, Typescript, D3.js v4, and Numeric Javascript.  It lives in my \"blog\", which is a Laravel 5.1 web application.</p>\n\n"

/***/ },

/***/ 753:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(5);
	var of_1 = __webpack_require__(126);
	Observable_1.Observable.of = of_1.of;
	//# sourceMappingURL=of.js.map

/***/ },

/***/ 754:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(5);
	var throw_1 = __webpack_require__(773);
	Observable_1.Observable.throw = throw_1._throw;
	//# sourceMappingURL=throw.js.map

/***/ },

/***/ 755:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(5);
	var debounceTime_1 = __webpack_require__(776);
	Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
	//# sourceMappingURL=debounceTime.js.map

/***/ },

/***/ 756:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(5);
	var delay_1 = __webpack_require__(777);
	Observable_1.Observable.prototype.delay = delay_1.delay;
	//# sourceMappingURL=delay.js.map

/***/ },

/***/ 757:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(5);
	var distinctUntilChanged_1 = __webpack_require__(778);
	Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },

/***/ 758:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(5);
	var do_1 = __webpack_require__(779);
	Observable_1.Observable.prototype.do = do_1._do;
	//# sourceMappingURL=do.js.map

/***/ },

/***/ 760:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(5);
	var filter_1 = __webpack_require__(781);
	Observable_1.Observable.prototype.filter = filter_1.filter;
	//# sourceMappingURL=filter.js.map

/***/ },

/***/ 766:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(5);
	var switchMap_1 = __webpack_require__(788);
	Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
	//# sourceMappingURL=switchMap.js.map

/***/ },

/***/ 768:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(5);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ErrorObservable = (function (_super) {
	    __extends(ErrorObservable, _super);
	    function ErrorObservable(error, scheduler) {
	        _super.call(this);
	        this.error = error;
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits an error notification.
	     *
	     * <span class="informal">Just emits 'error', and nothing else.
	     * </span>
	     *
	     * <img src="./img/throw.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the error notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then emit an error.</caption>
	     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @example <caption>Map and flattens numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x === 13 ?
	     *     Rx.Observable.throw('Thirteens are bad') :
	     *     Rx.Observable.of('a', 'b', 'c')
	     * );
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link never}
	     * @see {@link of}
	     *
	     * @param {any} error The particular Error to pass to the error notification.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the error notification.
	     * @return {Observable} An error Observable: emits only the error notification
	     * using the given error argument.
	     * @static true
	     * @name throw
	     * @owner Observable
	     */
	    ErrorObservable.create = function (error, scheduler) {
	        return new ErrorObservable(error, scheduler);
	    };
	    ErrorObservable.dispatch = function (arg) {
	        var error = arg.error, subscriber = arg.subscriber;
	        subscriber.error(error);
	    };
	    ErrorObservable.prototype._subscribe = function (subscriber) {
	        var error = this.error;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ErrorObservable.dispatch, 0, {
	                error: error, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.error(error);
	        }
	    };
	    return ErrorObservable;
	}(Observable_1.Observable));
	exports.ErrorObservable = ErrorObservable;
	//# sourceMappingURL=ErrorObservable.js.map

/***/ },

/***/ 773:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ErrorObservable_1 = __webpack_require__(768);
	exports._throw = ErrorObservable_1.ErrorObservable.create;
	//# sourceMappingURL=throw.js.map

/***/ },

/***/ 776:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(27);
	var async_1 = __webpack_require__(452);
	/**
	 * Returns the source Observable delayed by the computed debounce duration,
	 * with the duration lengthened if a new source item arrives before the delay
	 * duration ends.
	 * In practice, for each item emitted on the source, this operator holds the
	 * latest item, waits for a silence for the `dueTime` length, and only then
	 * emits the latest source item on the result Observable.
	 * Optionally takes a scheduler for manging timers.
	 * @param {number} dueTime the timeout value for the window of time required to not drop the item.
	 * @param {Scheduler} [scheduler] the Scheduler to use for managing the timers that handle the timeout for each item.
	 * @return {Observable} an Observable the same as source Observable, but drops items.
	 * @method debounceTime
	 * @owner Observable
	 */
	function debounceTime(dueTime, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
	}
	exports.debounceTime = debounceTime;
	var DebounceTimeOperator = (function () {
	    function DebounceTimeOperator(dueTime, scheduler) {
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	    }
	    DebounceTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
	    };
	    return DebounceTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DebounceTimeSubscriber = (function (_super) {
	    __extends(DebounceTimeSubscriber, _super);
	    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
	        _super.call(this, destination);
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	        this.debouncedSubscription = null;
	        this.lastValue = null;
	        this.hasValue = false;
	    }
	    DebounceTimeSubscriber.prototype._next = function (value) {
	        this.clearDebounce();
	        this.lastValue = value;
	        this.hasValue = true;
	        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
	    };
	    DebounceTimeSubscriber.prototype._complete = function () {
	        this.debouncedNext();
	        this.destination.complete();
	    };
	    DebounceTimeSubscriber.prototype.debouncedNext = function () {
	        this.clearDebounce();
	        if (this.hasValue) {
	            this.destination.next(this.lastValue);
	            this.lastValue = null;
	            this.hasValue = false;
	        }
	    };
	    DebounceTimeSubscriber.prototype.clearDebounce = function () {
	        var debouncedSubscription = this.debouncedSubscription;
	        if (debouncedSubscription !== null) {
	            this.remove(debouncedSubscription);
	            debouncedSubscription.unsubscribe();
	            this.debouncedSubscription = null;
	        }
	    };
	    return DebounceTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNext(subscriber) {
	    subscriber.debouncedNext();
	}
	//# sourceMappingURL=debounceTime.js.map

/***/ },

/***/ 777:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var async_1 = __webpack_require__(452);
	var isDate_1 = __webpack_require__(793);
	var Subscriber_1 = __webpack_require__(27);
	var Notification_1 = __webpack_require__(445);
	/**
	 * Delays the emission of items from the source Observable by a given timeout or
	 * until a given Date.
	 *
	 * <span class="informal">Time shifts each item by some specified amount of
	 * milliseconds.</span>
	 *
	 * <img src="./img/delay.png" width="100%">
	 *
	 * If the delay argument is a Number, this operator time shifts the source
	 * Observable by that amount of time expressed in milliseconds. The relative
	 * time intervals between the values are preserved.
	 *
	 * If the delay argument is a Date, this operator time shifts the start of the
	 * Observable execution until the given date occurs.
	 *
	 * @example <caption>Delay each click by one second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
	 * delayedClicks.subscribe(x => console.log(x));
	 *
	 * @example <caption>Delay all clicks until a future date happens</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var date = new Date('March 15, 2050 12:00:00'); // in the future
	 * var delayedClicks = clicks.delay(date); // click emitted only after that date
	 * delayedClicks.subscribe(x => console.log(x));
	 *
	 * @see {@link debounceTime}
	 * @see {@link delayWhen}
	 *
	 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
	 * a `Date` until which the emission of the source items is delayed.
	 * @param {Scheduler} [scheduler=async] The Scheduler to use for
	 * managing the timers that handle the time-shift for each item.
	 * @return {Observable} An Observable that delays the emissions of the source
	 * Observable by the specified timeout or Date.
	 * @method delay
	 * @owner Observable
	 */
	function delay(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    var absoluteDelay = isDate_1.isDate(delay);
	    var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
	    return this.lift(new DelayOperator(delayFor, scheduler));
	}
	exports.delay = delay;
	var DelayOperator = (function () {
	    function DelayOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    DelayOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
	    };
	    return DelayOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DelaySubscriber = (function (_super) {
	    __extends(DelaySubscriber, _super);
	    function DelaySubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	        this.queue = [];
	        this.active = false;
	        this.errored = false;
	    }
	    DelaySubscriber.dispatch = function (state) {
	        var source = state.source;
	        var queue = source.queue;
	        var scheduler = state.scheduler;
	        var destination = state.destination;
	        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
	            queue.shift().notification.observe(destination);
	        }
	        if (queue.length > 0) {
	            var delay_1 = Math.max(0, queue[0].time - scheduler.now());
	            this.schedule(state, delay_1);
	        }
	        else {
	            source.active = false;
	        }
	    };
	    DelaySubscriber.prototype._schedule = function (scheduler) {
	        this.active = true;
	        this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
	            source: this, destination: this.destination, scheduler: scheduler
	        }));
	    };
	    DelaySubscriber.prototype.scheduleNotification = function (notification) {
	        if (this.errored === true) {
	            return;
	        }
	        var scheduler = this.scheduler;
	        var message = new DelayMessage(scheduler.now() + this.delay, notification);
	        this.queue.push(message);
	        if (this.active === false) {
	            this._schedule(scheduler);
	        }
	    };
	    DelaySubscriber.prototype._next = function (value) {
	        this.scheduleNotification(Notification_1.Notification.createNext(value));
	    };
	    DelaySubscriber.prototype._error = function (err) {
	        this.errored = true;
	        this.queue = [];
	        this.destination.error(err);
	    };
	    DelaySubscriber.prototype._complete = function () {
	        this.scheduleNotification(Notification_1.Notification.createComplete());
	    };
	    return DelaySubscriber;
	}(Subscriber_1.Subscriber));
	var DelayMessage = (function () {
	    function DelayMessage(time, notification) {
	        this.time = time;
	        this.notification = notification;
	    }
	    return DelayMessage;
	}());
	//# sourceMappingURL=delay.js.map

/***/ },

/***/ 778:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(27);
	var tryCatch_1 = __webpack_require__(287);
	var errorObject_1 = __webpack_require__(186);
	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 * If a comparator function is not provided, an equality check is used by default.
	 * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
	 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
	 * @method distinctUntilChanged
	 * @owner Observable
	 */
	function distinctUntilChanged(compare, keySelector) {
	    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
	}
	exports.distinctUntilChanged = distinctUntilChanged;
	var DistinctUntilChangedOperator = (function () {
	    function DistinctUntilChangedOperator(compare, keySelector) {
	        this.compare = compare;
	        this.keySelector = keySelector;
	    }
	    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
	    };
	    return DistinctUntilChangedOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DistinctUntilChangedSubscriber = (function (_super) {
	    __extends(DistinctUntilChangedSubscriber, _super);
	    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
	        _super.call(this, destination);
	        this.keySelector = keySelector;
	        this.hasKey = false;
	        if (typeof compare === 'function') {
	            this.compare = compare;
	        }
	    }
	    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
	        return x === y;
	    };
	    DistinctUntilChangedSubscriber.prototype._next = function (value) {
	        var keySelector = this.keySelector;
	        var key = value;
	        if (keySelector) {
	            key = tryCatch_1.tryCatch(this.keySelector)(value);
	            if (key === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        var result = false;
	        if (this.hasKey) {
	            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
	            if (result === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        else {
	            this.hasKey = true;
	        }
	        if (Boolean(result) === false) {
	            this.key = key;
	            this.destination.next(value);
	        }
	    };
	    return DistinctUntilChangedSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },

/***/ 779:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(27);
	/**
	 * Perform a side effect for every emission on the source Observable, but return
	 * an Observable that is identical to the source.
	 *
	 * <span class="informal">Intercepts each emission on the source and runs a
	 * function, but returns an output which is identical to the source.</span>
	 *
	 * <img src="./img/do.png" width="100%">
	 *
	 * Returns a mirrored Observable of the source Observable, but modified so that
	 * the provided Observer is called to perform a side effect for every value,
	 * error, and completion emitted by the source. Any errors that are thrown in
	 * the aforementioned Observer or handlers are safely sent down the error path
	 * of the output Observable.
	 *
	 * This operator is useful for debugging your Observables for the correct values
	 * or performing other side effects.
	 *
	 * Note: this is different to a `subscribe` on the Observable. If the Observable
	 * returned by `do` is not subscribed, the side effects specified by the
	 * Observer will never happen. `do` therefore simply spies on existing
	 * execution, it does not trigger an execution to happen like `subscribe` does.
	 *
	 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks
	 *   .do(ev => console.log(ev))
	 *   .map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 * @see {@link subscribe}
	 *
	 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
	 * callback for `next`.
	 * @param {function} [error] Callback for errors in the source.
	 * @param {function} [complete] Callback for the completion of the source.
	 * @return {Observable} An Observable identical to the source, but runs the
	 * specified Observer or callback(s) for each item.
	 * @method do
	 * @name do
	 * @owner Observable
	 */
	function _do(nextOrObserver, error, complete) {
	    return this.lift(new DoOperator(nextOrObserver, error, complete));
	}
	exports._do = _do;
	var DoOperator = (function () {
	    function DoOperator(nextOrObserver, error, complete) {
	        this.nextOrObserver = nextOrObserver;
	        this.error = error;
	        this.complete = complete;
	    }
	    DoOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
	    };
	    return DoOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DoSubscriber = (function (_super) {
	    __extends(DoSubscriber, _super);
	    function DoSubscriber(destination, nextOrObserver, error, complete) {
	        _super.call(this, destination);
	        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	        safeSubscriber.syncErrorThrowable = true;
	        this.add(safeSubscriber);
	        this.safeSubscriber = safeSubscriber;
	    }
	    DoSubscriber.prototype._next = function (value) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.next(value);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.next(value);
	        }
	    };
	    DoSubscriber.prototype._error = function (err) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.error(err);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.error(err);
	        }
	    };
	    DoSubscriber.prototype._complete = function () {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.complete();
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    return DoSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=do.js.map

/***/ },

/***/ 781:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(27);
	/**
	 * Filter items emitted by the source Observable by only emitting those that
	 * satisfy a specified predicate.
	 *
	 * <span class="informal">Like
	 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
	 * it only emits a value from the source if it passes a criterion function.</span>
	 *
	 * <img src="./img/filter.png" width="100%">
	 *
	 * Similar to the well-known `Array.prototype.filter` method, this operator
	 * takes values from the source Observable, passes them through a `predicate`
	 * function and only emits those values that yielded `true`.
	 *
	 * @example <caption>Emit only click events whose target was a DIV element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
	 * clicksOnDivs.subscribe(x => console.log(x));
	 *
	 * @see {@link distinct}
	 * @see {@link distinctKey}
	 * @see {@link distinctUntilChanged}
	 * @see {@link distinctUntilKeyChanged}
	 * @see {@link ignoreElements}
	 * @see {@link partition}
	 * @see {@link skip}
	 *
	 * @param {function(value: T, index: number): boolean} predicate A function that
	 * evaluates each value emitted by the source Observable. If it returns `true`,
	 * the value is emitted, if `false` the value is not passed to the output
	 * Observable. The `index` parameter is the number `i` for the i-th source
	 * emission that has happened since the subscription, starting from the number
	 * `0`.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {Observable} An Observable of values from the source that were
	 * allowed by the `predicate` function.
	 * @method filter
	 * @owner Observable
	 */
	function filter(predicate, thisArg) {
	    return this.lift(new FilterOperator(predicate, thisArg));
	}
	exports.filter = filter;
	var FilterOperator = (function () {
	    function FilterOperator(predicate, thisArg) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	    }
	    FilterOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
	    };
	    return FilterOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FilterSubscriber = (function (_super) {
	    __extends(FilterSubscriber, _super);
	    function FilterSubscriber(destination, predicate, thisArg) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.count = 0;
	        this.predicate = predicate;
	    }
	    // the try catch block below is left specifically for
	    // optimization and perf reasons. a tryCatcher is not necessary here.
	    FilterSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.destination.next(value);
	        }
	    };
	    return FilterSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=filter.js.map

/***/ },

/***/ 788:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(182);
	var subscribeToResult_1 = __webpack_require__(189);
	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable, emitting values only from the most recently projected Observable.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link switch}.</span>
	 *
	 * <img src="./img/switchMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an (so-called "inner") Observable. Each time it observes one of these
	 * inner Observables, the output Observable begins emitting the items emitted by
	 * that inner Observable. When a new inner Observable is emitted, `switchMap`
	 * stops emitting items from the earlier-emitted inner Observable and begins
	 * emitting items from the new one. It continues to behave like this for
	 * subsequent inner Observables.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaustMap}
	 * @see {@link mergeMap}
	 * @see {@link switch}
	 * @see {@link switchMapTo}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and taking only the values from the most recently
	 * projected inner Observable.
	 * @method switchMap
	 * @owner Observable
	 */
	function switchMap(project, resultSelector) {
	    return this.lift(new SwitchMapOperator(project, resultSelector));
	}
	exports.switchMap = switchMap;
	var SwitchMapOperator = (function () {
	    function SwitchMapOperator(project, resultSelector) {
	        this.project = project;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
	    };
	    return SwitchMapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SwitchMapSubscriber = (function (_super) {
	    __extends(SwitchMapSubscriber, _super);
	    function SwitchMapSubscriber(destination, project, resultSelector) {
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.index = 0;
	    }
	    SwitchMapSubscriber.prototype._next = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (error) {
	            this.destination.error(error);
	            return;
	        }
	        this._innerSub(result, value, index);
	    };
	    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	        }
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
	    };
	    SwitchMapSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype._unsubscribe = function () {
	        this.innerSubscription = null;
	    };
	    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.innerSubscription = null;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            this.destination.next(innerValue);
	        }
	    };
	    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return SwitchMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switchMap.js.map

/***/ },

/***/ 789:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(282);
	var QueueScheduler_1 = __webpack_require__(791);
	var AsyncScheduler = (function (_super) {
	    __extends(AsyncScheduler, _super);
	    function AsyncScheduler() {
	        _super.apply(this, arguments);
	    }
	    AsyncScheduler.prototype.scheduleNow = function (work, state) {
	        return new FutureAction_1.FutureAction(this, work).schedule(state, 0);
	    };
	    return AsyncScheduler;
	}(QueueScheduler_1.QueueScheduler));
	exports.AsyncScheduler = AsyncScheduler;
	//# sourceMappingURL=AsyncScheduler.js.map

/***/ },

/***/ 790:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(282);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var QueueAction = (function (_super) {
	    __extends(QueueAction, _super);
	    function QueueAction() {
	        _super.apply(this, arguments);
	    }
	    QueueAction.prototype._schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (delay > 0) {
	            return _super.prototype._schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        scheduler.flush();
	        return this;
	    };
	    return QueueAction;
	}(FutureAction_1.FutureAction));
	exports.QueueAction = QueueAction;
	//# sourceMappingURL=QueueAction.js.map

/***/ },

/***/ 791:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueAction_1 = __webpack_require__(790);
	var FutureAction_1 = __webpack_require__(282);
	var QueueScheduler = (function () {
	    function QueueScheduler() {
	        this.active = false;
	        this.actions = []; // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
	        this.scheduledId = null;
	    }
	    QueueScheduler.prototype.now = function () {
	        return Date.now();
	    };
	    QueueScheduler.prototype.flush = function () {
	        if (this.active || this.scheduledId) {
	            return;
	        }
	        this.active = true;
	        var actions = this.actions;
	        // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
	        for (var action = null; action = actions.shift();) {
	            action.execute();
	            if (action.error) {
	                this.active = false;
	                throw action.error;
	            }
	        }
	        this.active = false;
	    };
	    QueueScheduler.prototype.schedule = function (work, delay, state) {
	        if (delay === void 0) { delay = 0; }
	        return (delay <= 0) ?
	            this.scheduleNow(work, state) :
	            this.scheduleLater(work, delay, state);
	    };
	    QueueScheduler.prototype.scheduleNow = function (work, state) {
	        return new QueueAction_1.QueueAction(this, work).schedule(state);
	    };
	    QueueScheduler.prototype.scheduleLater = function (work, delay, state) {
	        return new FutureAction_1.FutureAction(this, work).schedule(state, delay);
	    };
	    return QueueScheduler;
	}());
	exports.QueueScheduler = QueueScheduler;
	//# sourceMappingURL=QueueScheduler.js.map

/***/ },

/***/ 793:
/***/ function(module, exports) {

	"use strict";
	function isDate(value) {
	    return value instanceof Date && !isNaN(+value);
	}
	exports.isDate = isDate;
	//# sourceMappingURL=isDate.js.map

/***/ },

/***/ 795:
/***/ function(module, exports) {

	module.exports = ""

/***/ },

/***/ 796:
/***/ function(module, exports) {

	module.exports = "main { \n\tbackground-color: white;\n\tmargin-top: 10px;\n\tcolor: #333333;\n\tborder-color: #ddd;\n\tpadding: 10px 15px;\n\tborder-bottom: 1px solid transparent;\n\tborder-top-right-radius: 3px;\n\tborder-top-left-radius: 3px;\n}\n"

/***/ },

/***/ 797:
/***/ function(module, exports) {

	module.exports = ":host {\n  height: 360px;\n  margin: 0 auto;                                               /* NEW */\n  position: relative;\n  width: 360px;\n}\n:host .tooltip {\n  background: #eee;\n  box-shadow: 0 0 5px #999999;\n  color: #333;\n  display: none;\n  font-size: 12px;\n  left: 130px;\n  padding: 10px;\n  position: absolute;\n  text-align: center;\n  top: 95px;\n  width: 80px;\n  z-index: 10;\n}\n:host .legend {\n  font-size: 12px;\n}\n:host rect {\n  cursor: pointer;                                              /* NEW */\n  stroke-width: 2;\n}\n:host rect.disabled {                                                 /* NEW */\n  fill: transparent !important;                                 /* NEW */\n}                                                               /* NEW */\n:host h1 {                                                            /* NEW */\n  font-size: 14px;                                              /* NEW */\n  text-align: center;                                           /* NEW */\n}    \t\n"

/***/ },

/***/ 798:
/***/ function(module, exports) {

	module.exports = "table, th, td {\n\t\t\t\t   border: 1px solid black;\n}\n\n.pwc-matrix {\n\tmargin: 0px 0px 50px 140px;\n}\n"

/***/ },

/***/ 799:
/***/ function(module, exports) {

	module.exports = ".comparison-groups {\n\tlist-style: none;\n}\n"

/***/ },

/***/ 800:
/***/ function(module, exports) {

	module.exports = ".search-result{\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width:195px;\n  height: 20px;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n}\ndiv.search-result: hover {\n background-color: blue;\n}\n#search-box{\n  width: 200px;\n  height: 20px;\n}\n\n"

/***/ },

/***/ 801:
/***/ function(module, exports) {

	module.exports = ".selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.criteria {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.criteria li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 25px;\n  border-radius: 4px;\n}\n.criteria li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.criteria li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.criteria .text {\n  position: relative;\n  top: -3px;\n}\n.criteria .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\n.error {color:red;}\nbutton.delete-button{\n  float:right;\n  background-color: gray !important;\n  color:white;\n}\n\n"

/***/ },

/***/ 802:
/***/ function(module, exports) {

	module.exports = "label {\n  display: inline-block;\n  width: 6em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n}\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}\n\n"

/***/ },

/***/ 803:
/***/ function(module, exports) {

	module.exports = ":host .node rect {\n  fill: #999;\n}\n\n:host .node text {\n  font: 10px sans-serif;\n}\n\n:host .node--internal circle {\n  fill: #555;\n}\n\n:host .node--internal text {\n}\n\n:host .link {\n  fill: none;\n  stroke: #555;\n  stroke-opacity: 0.4;\n  stroke-width: 1.5px;\n}\n"

/***/ },

/***/ 804:
/***/ function(module, exports) {

	module.exports = ""

/***/ },

/***/ 805:
/***/ function(module, exports) {

	module.exports = ""

/***/ },

/***/ 806:
/***/ function(module, exports) {

	module.exports = ""

/***/ },

/***/ 807:
/***/ function(module, exports) {

	module.exports = ""

/***/ }

});
//# sourceMappingURL=main.map