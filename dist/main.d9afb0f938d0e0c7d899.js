/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/excel/Excel.js":
/*!***********************************!*\
  !*** ./components/excel/Excel.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Excel": function() { return /* binding */ Excel; }
/* harmony export */ });
/* harmony import */ var _core_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/dom */ "./core/dom.js");
/* harmony import */ var _core_Emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Emitter */ "./core/Emitter.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Excel = /*#__PURE__*/function () {
  function Excel(selector, options) {
    _classCallCheck(this, Excel);
    this.$el = (0,_core_dom__WEBPACK_IMPORTED_MODULE_0__.$)(selector);
    this.components = options.components || [];
    this.emitter = new _core_Emitter__WEBPACK_IMPORTED_MODULE_1__.Emitter();
  }
  _createClass(Excel, [{
    key: "getRoot",
    value: function getRoot() {
      var $root = _core_dom__WEBPACK_IMPORTED_MODULE_0__.$.create("div", "excel");
      var componentOptions = {
        emitter: this.emitter
      };
      this.components = this.components.map(function (Component) {
        var $el = _core_dom__WEBPACK_IMPORTED_MODULE_0__.$.create("div", Component.className);
        var component = new Component($el, componentOptions);
        $el.html(component.toHTML());
        $root.append($el);
        return component;
      });
      return $root;
    }
  }, {
    key: "render",
    value: function render() {
      this.$el.append(this.getRoot());
      this.components.forEach(function (component) {
        return component.init();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.components.forEach(function (component) {
        return component.destroy();
      });
    }
  }]);
  return Excel;
}();

/***/ }),

/***/ "./components/formula/Formula.js":
/*!***************************************!*\
  !*** ./components/formula/Formula.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Formula": function() { return /* binding */ Formula; }
/* harmony export */ });
/* harmony import */ var _core_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/dom */ "./core/dom.js");
/* harmony import */ var _core_ExcelComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ExcelComponent */ "./core/ExcelComponent.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Formula = /*#__PURE__*/function (_ExcelComponent) {
  _inherits(Formula, _ExcelComponent);
  var _super = _createSuper(Formula);
  function Formula($root, options) {
    var _this;
    _classCallCheck(this, Formula);
    _this = _super.call(this, $root, _objectSpread({
      name: "Formula",
      listeners: ["input", "keydown"]
    }, options));
    _this.formulaText = "";
    return _this;
  }
  _createClass(Formula, [{
    key: "toHTML",
    value: function toHTML() {
      return "\n      <div class=\"info\">fx</div>\n      <div id=\"formula\" class=\"input\" contenteditable spellcheck=\"false\"></div>\n    ";
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      _get(_getPrototypeOf(Formula.prototype), "init", this).call(this);
      this.$folmula = this.$root.find("#formula");
      this.$on("table:select", function (cell) {
        _this2.$folmula.text(cell.text());
      });
      this.$on("table:input", function (cell) {
        _this2.$folmula.text(cell.text());
      });
    }
  }, {
    key: "onInput",
    value: function onInput(event) {
      this.$emit("formula:input", (0,_core_dom__WEBPACK_IMPORTED_MODULE_0__.$)(event.target).text());
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(event) {
      var keys = ["Enter", "Tab"];
      if (keys.includes(event.key)) {
        event.preventDefault();
        this.$emit("formula:done", event);
      }
    }
  }]);
  return Formula;
}(_core_ExcelComponent__WEBPACK_IMPORTED_MODULE_1__.ExcelComponent);
_defineProperty(Formula, "className", "excel__formula");

/***/ }),

/***/ "./components/header/Header.js":
/*!*************************************!*\
  !*** ./components/header/Header.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var _core_ExcelComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ExcelComponent */ "./core/ExcelComponent.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Header = /*#__PURE__*/function (_ExcelComponent) {
  _inherits(Header, _ExcelComponent);
  var _super = _createSuper(Header);
  function Header($root, options) {
    _classCallCheck(this, Header);
    return _super.call(this, $root, _objectSpread({
      name: "Header"
    }, options));
  }
  _createClass(Header, [{
    key: "toHTML",
    value: function toHTML() {
      return "\n    <input type=\"text\" class=\"input\" value=\"\u041D\u043E\u0432\u0430\u044F \u0442\u0430\u0431\u043B\u0438\u0446\u0430\" />\n\n    <div>\n      <div class=\"button\">\n        <span class=\"material-icons\"> delete </span>\n      </div>\n      <div class=\"button\">\n        <span class=\"material-icons\"> exit_to_app </span>\n      </div>\n    </div>\n    ";
    }
  }]);
  return Header;
}(_core_ExcelComponent__WEBPACK_IMPORTED_MODULE_0__.ExcelComponent);
_defineProperty(Header, "className", "excel__header");

/***/ }),

/***/ "./components/table/Table.js":
/*!***********************************!*\
  !*** ./components/table/Table.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Table": function() { return /* binding */ Table; }
/* harmony export */ });
/* harmony import */ var _core_ExcelComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ExcelComponent */ "./core/ExcelComponent.js");
/* harmony import */ var _table_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.template */ "./components/table/table.template.js");
/* harmony import */ var _table_resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.resize */ "./components/table/table.resize.js");
/* harmony import */ var _table_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table.functions */ "./components/table/table.functions.js");
/* harmony import */ var _TableSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TableSelection */ "./components/table/TableSelection.js");
/* harmony import */ var _core_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/dom */ "./core/dom.js");
/* harmony import */ var _utils_nextSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/nextSelector */ "./utils/nextSelector.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







var Table = /*#__PURE__*/function (_ExcelComponent) {
  _inherits(Table, _ExcelComponent);
  var _super = _createSuper(Table);
  function Table($root, options) {
    _classCallCheck(this, Table);
    return _super.call(this, $root, _objectSpread({
      name: "table",
      listeners: ["mousedown", "keydown", "input"]
    }, options));
  }
  _createClass(Table, [{
    key: "toHTML",
    value: function toHTML() {
      return (0,_table_template__WEBPACK_IMPORTED_MODULE_1__.createTable)(20);
    }
  }, {
    key: "prepare",
    value: function prepare() {
      this.selection = new _TableSelection__WEBPACK_IMPORTED_MODULE_4__.TableSelection();
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      _get(_getPrototypeOf(Table.prototype), "init", this).call(this);
      this.selectCell(this.$root.find('[data-id="0:0"]'));
      this.$on("formula:input", function (text) {
        _this.selection.current.text(text);
      });
      this.$on("formula:done", function () {
        _this.selection.current.focus();
      });
    }
  }, {
    key: "selectCell",
    value: function selectCell($cell) {
      this.selection.select($cell);
      this.$emit("table:select", $cell);
    }
  }, {
    key: "onMousedown",
    value: function onMousedown(event) {
      var _this2 = this;
      if ((0,_table_functions__WEBPACK_IMPORTED_MODULE_3__.shouldResize)(event)) {
        (0,_table_resize__WEBPACK_IMPORTED_MODULE_2__.resizeHandler)(this.$root, event);
      } else if ((0,_table_functions__WEBPACK_IMPORTED_MODULE_3__.isCell)(event)) {
        var $target = (0,_core_dom__WEBPACK_IMPORTED_MODULE_5__.$)(event.target);
        if (event.shiftKey) {
          var $cells = (0,_table_functions__WEBPACK_IMPORTED_MODULE_3__.matrix)($target, this.selection.current).map(function (id) {
            return _this2.$root.find("[data-id=\"".concat(id, "\"]"));
          });
          this.selection.selectGroup($cells);
        } else {
          this.selection.select($target);
        }
      }
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(event) {
      var keys = ["Enter", "Tab", "ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp"];
      var key = event.key;
      if (keys.includes(key) && !event.shiftKey) {
        event.preventDefault();
        var id = this.selection.current.id(true);
        var $nextCell = this.$root.find((0,_utils_nextSelector__WEBPACK_IMPORTED_MODULE_6__.nextSelector)(key, id));
        this.selectCell($nextCell);
      }
    }
  }, {
    key: "onInput",
    value: function onInput(event) {
      this.$emit("table:input", (0,_core_dom__WEBPACK_IMPORTED_MODULE_5__.$)(event.target));
    }
  }]);
  return Table;
}(_core_ExcelComponent__WEBPACK_IMPORTED_MODULE_0__.ExcelComponent);
_defineProperty(Table, "className", "excel__table");

/***/ }),

/***/ "./components/table/TableSelection.js":
/*!********************************************!*\
  !*** ./components/table/TableSelection.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableSelection": function() { return /* binding */ TableSelection; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TableSelection = /*#__PURE__*/function () {
  function TableSelection() {
    _classCallCheck(this, TableSelection);
    this.group = [];
    this.current = null;
  }
  _createClass(TableSelection, [{
    key: "select",
    value: function select($el) {
      this.clear();
      this.group.push($el);
      $el.focus().addClass(TableSelection.className);
      this.current = $el;
    }
  }, {
    key: "selectGroup",
    value: function selectGroup() {
      var $group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.clear();
      this.group = $group;
      this.group.forEach(function ($el) {
        return $el.addClass(TableSelection.className);
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.group.forEach(function ($el) {
        return $el.removeClass(TableSelection.className);
      });
      this.group = [];
    }
  }]);
  return TableSelection;
}();
_defineProperty(TableSelection, "className", "selected");

/***/ }),

/***/ "./components/table/table.functions.js":
/*!*********************************************!*\
  !*** ./components/table/table.functions.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCell": function() { return /* binding */ isCell; },
/* harmony export */   "matrix": function() { return /* binding */ matrix; },
/* harmony export */   "shouldResize": function() { return /* binding */ shouldResize; }
/* harmony export */ });
/* harmony import */ var _utils_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/range */ "./utils/range.js");

function shouldResize(event) {
  return event.target.dataset.resize;
}
function isCell(event) {
  return event.target.dataset.type === "cell";
}
function matrix($target, $current) {
  var target = $target.id(true);
  var current = $current.id(true);
  var cols = (0,_utils_range__WEBPACK_IMPORTED_MODULE_0__.range)(current.col, target.col);
  var rows = (0,_utils_range__WEBPACK_IMPORTED_MODULE_0__.range)(current.row, target.row);
  return cols.reduce(function (acc, col) {
    rows.forEach(function (row) {
      return acc.push("".concat(row, ":").concat(col));
    });
    return acc;
  }, []);
}

/***/ }),

/***/ "./components/table/table.resize.js":
/*!******************************************!*\
  !*** ./components/table/table.resize.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resizeHandler": function() { return /* binding */ resizeHandler; }
/* harmony export */ });
/* harmony import */ var _core_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/dom */ "./core/dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function resizeHandler($root, event) {
  var $resizer = (0,_core_dom__WEBPACK_IMPORTED_MODULE_0__.$)(event.target);
  var $parent = $resizer.closest('[data-type="resizable"]');
  var coords = $parent.getCoords();
  var type = $resizer.data.resize;
  var sideProp = type === "col" ? "bottom" : "right";
  var size = {
    width: 0,
    height: 0
  };
  $resizer.css(_defineProperty({
    opacity: 1
  }, sideProp, "-5000px"));
  document.onmousemove = function (e) {
    if (type === "col") {
      var delta = e.pageX - coords.right;
      size.width = coords.width + delta;
      $resizer.css({
        right: -delta + "px"
      });
    } else {
      var _delta = e.pageY - coords.bottom;
      size.height = coords.height + _delta;
      $resizer.css({
        bottom: -_delta + "px"
      });
    }
  };
  document.onmouseup = function () {
    document.onmousemove = null;
    document.onmouseup = null;
    if (type === "col") {
      $parent.css({
        width: size.width + "px"
      });
      $root.findAll("[data-col=\"".concat($parent.data.col, "\"]")).forEach(function (el) {
        return el.style.width = size.width + "px";
      });
    } else {
      $parent.css({
        height: size.height + "px"
      });
    }
    $resizer.css({
      opacity: 0,
      bottom: 0,
      right: 0
    });
  };
}

/***/ }),

/***/ "./components/table/table.template.js":
/*!********************************************!*\
  !*** ./components/table/table.template.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTable": function() { return /* binding */ createTable; }
/* harmony export */ });
var CODES = {
  A: 65,
  Z: 90
};
function toCell(row) {
  return function (_, col) {
    return "\n      <div class=\"cell\" contenteditable \n        data-col=".concat(col, " \n        data-type=\"cell\"\n        data-id=").concat(row, ":").concat(col, ">\n      </div>\n    ");
  };
}
function toColumn(col, index) {
  return "\n    <div class=\"column\" data-type=\"resizable\" data-col=".concat(index, ">\n      ").concat(col, "\n      <div class=\"col-resize\" data-resize=\"col\"></div>\n    </div>\n    ");
}
function createRow(index, content) {
  var resize = index ? "<div class=\"row-resize\" data-resize=\"row\"></div>" : "";
  return "\n    <div class=\"row\" data-type=\"resizable\">\n      <div class=\"row-info\">\n        ".concat(index || "", "\n        ").concat(resize, "\n      </div>\n      <div class=\"row-data\">\n        ").concat(content, "\n      </div>\n    </div>\n    ");
}
function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}
function createTable() {
  var rowsCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
  var colsCount = CODES.Z - CODES.A + 1;
  var rows = [];
  var cols = new Array(colsCount).fill("").map(toChar).map(toColumn).join("");
  rows.push(createRow(null, cols));
  for (var row = 0; row < rowsCount; row++) {
    var cells = new Array(colsCount).fill("").map(toCell(row)).join("");
    rows.push(createRow(row + 1, cells));
  }
  return rows.join("");
}

/***/ }),

/***/ "./components/toolbar/Toolbar.js":
/*!***************************************!*\
  !*** ./components/toolbar/Toolbar.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toolbar": function() { return /* binding */ Toolbar; }
/* harmony export */ });
/* harmony import */ var _core_ExcelComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ExcelComponent */ "./core/ExcelComponent.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Toolbar = /*#__PURE__*/function (_ExcelComponent) {
  _inherits(Toolbar, _ExcelComponent);
  var _super = _createSuper(Toolbar);
  function Toolbar($root, options) {
    _classCallCheck(this, Toolbar);
    return _super.call(this, $root, _objectSpread({
      name: "Toolbar",
      listeners: ["click"]
    }, options));
  }
  _createClass(Toolbar, [{
    key: "onClick",
    value: function onClick(event) {
      console.log("Toolbar click", event);
    }
  }, {
    key: "toHTML",
    value: function toHTML() {
      return "\n    <div class=\"button\">\n    <span class=\"material-icons\"> format_align_left </span>\n  </div>\n  <div class=\"button\">\n    <span class=\"material-icons\"> format_align_center </span>\n  </div>\n  <div class=\"button\">\n    <span class=\"material-icons\"> format_align_right </span>\n  </div>\n  <div class=\"button\">\n    <span class=\"material-icons\"> format_bold </span>\n  </div>\n  <div class=\"button\">\n    <span class=\"material-icons\"> format_italic </span>\n  </div>\n  <div class=\"button\">\n    <span class=\"material-icons\"> format_underlined </span>\n  </div>\n    ";
    }
  }]);
  return Toolbar;
}(_core_ExcelComponent__WEBPACK_IMPORTED_MODULE_0__.ExcelComponent);
_defineProperty(Toolbar, "className", "excel__toolbar");

/***/ }),

/***/ "./core/DomListener.js":
/*!*****************************!*\
  !*** ./core/DomListener.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomListener": function() { return /* binding */ DomListener; }
/* harmony export */ });
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/capitalize */ "./utils/capitalize.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var DomListener = /*#__PURE__*/function () {
  function DomListener($root) {
    var listeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    _classCallCheck(this, DomListener);
    if (!$root) {
      throw new Error("No $root provided for DomListener!");
    }
    this.$root = $root;
    this.listeners = listeners;
  }
  _createClass(DomListener, [{
    key: "initDOMListeners",
    value: function initDOMListeners() {
      var _this = this;
      this.listeners.forEach(function (listener) {
        var method = getMethodName(listener);
        if (!_this[method]) {
          throw new Error("Method ".concat(method, " is not implemented in ").concat(_this.name || "", " Component"));
        }
        _this[method] = _this[method].bind(_this);
        _this.$root.on(listener, _this[method]);
      });
    }
  }, {
    key: "removeDOMListeners",
    value: function removeDOMListeners() {
      var _this2 = this;
      this.listeners.forEach(function (listener) {
        var method = getMethodName(listener);
        _this2.$root.off(listener, _this2[method]);
      });
    }
  }]);
  return DomListener;
}();

// input => onInput
function getMethodName(eventName) {
  return "on" + (0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_0__.capitalize)(eventName);
}

/***/ }),

/***/ "./core/Emitter.js":
/*!*************************!*\
  !*** ./core/Emitter.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Emitter": function() { return /* binding */ Emitter; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Emitter = /*#__PURE__*/function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
    this.listeners = {};
  }
  _createClass(Emitter, [{
    key: "emit",
    value: function emit(eventName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (!Array.isArray(this.listeners[eventName])) {
        return false;
      }
      this.listeners[eventName].forEach(function (listener) {
        listener.apply(void 0, args);
      });
      return true;
    }
  }, {
    key: "subscribe",
    value: function subscribe(eventName, fn) {
      var _this = this;
      this.listeners[eventName] = this.listeners[eventName] || [];
      this.listeners[eventName].push(fn);
      return function () {
        _this.listeners[eventName] = _this.listeners[eventName].filter(function (listener) {
          return listener !== fn;
        });
      };
    }
  }]);
  return Emitter;
}();

/***/ }),

/***/ "./core/ExcelComponent.js":
/*!********************************!*\
  !*** ./core/ExcelComponent.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcelComponent": function() { return /* binding */ ExcelComponent; }
/* harmony export */ });
/* harmony import */ var _DomListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomListener */ "./core/DomListener.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ExcelComponent = /*#__PURE__*/function (_DomListener) {
  _inherits(ExcelComponent, _DomListener);
  var _super = _createSuper(ExcelComponent);
  function ExcelComponent($root) {
    var _this;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, ExcelComponent);
    _this = _super.call(this, $root, options.listeners);
    _this.emitter = options.emitter;
    _this.unsubcribers = [];
    _this.prepare();
    return _this;
  }

  //Настраиваем наш компонент до init
  _createClass(ExcelComponent, [{
    key: "prepare",
    value: function prepare() {}
  }, {
    key: "toHTML",
    value: function toHTML() {
      return "";
    }

    //Увеомляем слушателей про событие event
  }, {
    key: "$emit",
    value: function $emit(eventName) {
      var _this$emitter;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      (_this$emitter = this.emitter).emit.apply(_this$emitter, [eventName].concat(args));
    }

    //Подписываемся на событие event
  }, {
    key: "$on",
    value: function $on(eventName, fn) {
      var unsub = this.emitter.subscribe(eventName, fn);
      this.unsubcribers.push(unsub);
    }

    //Инициализируем компонент
    //Добавляем DOM слушателей
  }, {
    key: "init",
    value: function init() {
      this.initDOMListeners();
    }

    //Удалякм компонент
    //Чистим слушатели
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeDOMListeners();
      this.unsubcribers.forEach(function (unsub) {
        return unsub();
      });
    }
  }]);
  return ExcelComponent;
}(_DomListener__WEBPACK_IMPORTED_MODULE_0__.DomListener);

/***/ }),

/***/ "./core/dom.js":
/*!*********************!*\
  !*** ./core/dom.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ $; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Dom = /*#__PURE__*/function () {
  function Dom(selector) {
    _classCallCheck(this, Dom);
    this.$el = typeof selector === "string" ? document.querySelector(selector) : selector;
  }
  _createClass(Dom, [{
    key: "html",
    value: function html(_html) {
      if (typeof _html === "string") {
        this.$el.innerHTML = _html;
        return this;
      }
      return this.$el.outerHTML.trim();
    }
  }, {
    key: "text",
    value: function text(_text) {
      if (typeof _text === "string") {
        this.$el.textContent = _text;
        return this;
      }
      if (this.$el.tagName.toLowerCase() === "input") {
        return this.$el.value.trim();
      } else {
        return this.$el.textContent.trim();
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.html("");
      return this;
    }
  }, {
    key: "append",
    value: function append(node) {
      if (node instanceof Dom) {
        node = node.$el;
      }
      if (Element.prototype.append) {
        this.$el.append(node);
      } else {
        this.appendChild(node);
      }
      return this;
    }
  }, {
    key: "on",
    value: function on(eventType, callback) {
      this.$el.addEventListener(eventType, callback);
    }
  }, {
    key: "off",
    value: function off(eventType, callback) {
      this.$el.removeEventListener(eventType, callback);
    }
  }, {
    key: "find",
    value: function find(selector) {
      return $(this.$el.querySelector(selector));
    }
  }, {
    key: "data",
    get: function get() {
      return this.$el.dataset;
    }
  }, {
    key: "closest",
    value: function closest(selector) {
      return $(this.$el.closest(selector));
    }
  }, {
    key: "getCoords",
    value: function getCoords() {
      return this.$el.getBoundingClientRect();
    }
  }, {
    key: "findAll",
    value: function findAll(selector) {
      return this.$el.querySelectorAll(selector);
    }
  }, {
    key: "css",
    value: function css() {
      var _this = this;
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.keys(styles).forEach(function (key) {
        _this.$el.style[key] = styles[key];
      });
    }
  }, {
    key: "id",
    value: function id(parse) {
      if (parse) {
        var parsed = this.id().split(":");
        return {
          row: +parsed[0],
          col: +parsed[1]
        };
      }
      return this.data.id;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.$el.focus();
      return this;
    }
  }, {
    key: "addClass",
    value: function addClass(className) {
      this.$el.classList.add(className);
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      this.$el.classList.remove(className);
    }
  }]);
  return Dom;
}();
function $(selector) {
  return new Dom(selector);
}
$.create = function (tagName) {
  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_excel_Excel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/excel/Excel */ "./components/excel/Excel.js");
/* harmony import */ var _components_formula_Formula__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/formula/Formula */ "./components/formula/Formula.js");
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/Header */ "./components/header/Header.js");
/* harmony import */ var _components_table_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/table/Table */ "./components/table/Table.js");
/* harmony import */ var _components_toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/toolbar/Toolbar */ "./components/toolbar/Toolbar.js");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scss/index.scss */ "./scss/index.scss");






var excel = new _components_excel_Excel__WEBPACK_IMPORTED_MODULE_0__.Excel("#app", {
  components: [_components_header_Header__WEBPACK_IMPORTED_MODULE_2__.Header, _components_toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar, _components_formula_Formula__WEBPACK_IMPORTED_MODULE_1__.Formula, _components_table_Table__WEBPACK_IMPORTED_MODULE_3__.Table]
});
excel.render();

/***/ }),

/***/ "./utils/capitalize.js":
/*!*****************************!*\
  !*** ./utils/capitalize.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalize": function() { return /* binding */ capitalize; }
/* harmony export */ });
function capitalize(string) {
  if (typeof string !== "string") {
    return "";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "./utils/nextSelector.js":
/*!*******************************!*\
  !*** ./utils/nextSelector.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nextSelector": function() { return /* binding */ nextSelector; }
/* harmony export */ });
function nextSelector(key, _ref) {
  var col = _ref.col,
    row = _ref.row;
  var MIN_VALUE = 0;
  switch (key) {
    case "Enter":
    case "ArrowDown":
      row++;
      break;
    case "Tab":
    case "ArrowRight":
      col++;
      break;
    case "ArrowLeft":
      col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1;
      break;
    case "ArrowUp":
      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1;
      break;
  }
  return "[data-id=\"".concat(row, ":").concat(col, "\"]");
}

/***/ }),

/***/ "./utils/range.js":
/*!************************!*\
  !*** ./utils/range.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "range": function() { return /* binding */ range; }
/* harmony export */ });
function range(start, end) {
  if (start > end) {
    var _ref = [start, end];
    end = _ref[0];
    start = _ref[1];
  }
  return new Array(end - start + 1).fill("").map(function (_, index) {
    return start + index;
  });
}

/***/ }),

/***/ "./scss/index.scss":
/*!*************************!*\
  !*** ./scss/index.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("./index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;