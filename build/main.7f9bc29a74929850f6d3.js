/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/common/loader/index.js":
/*!*******************************************!*\
  !*** ./components/common/loader/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Loader\": function() { return /* binding */ Loader; }\n/* harmony export */ });\n/* harmony import */ var _core_dom_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/dom/dom */ \"./core/dom/dom.js\");\n\nfunction Loader() {\n  return _core_dom_dom__WEBPACK_IMPORTED_MODULE_0__.$.create(\"div\", \"loader\").html(`\n    <div class=\"lds-spinner\">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n    </div>\n    `);\n}\n\n//# sourceURL=webpack:///./components/common/loader/index.js?");

/***/ }),

/***/ "./components/excel/Excel.js":
/*!***********************************!*\
  !*** ./components/excel/Excel.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Excel\": function() { return /* binding */ Excel; }\n/* harmony export */ });\n/* harmony import */ var _core_dom_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/dom/dom */ \"./core/dom/dom.js\");\n/* harmony import */ var _core_dom_Emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/dom/Emitter */ \"./core/dom/Emitter.js\");\n/* harmony import */ var _core_store_StoreSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/store/StoreSubscriber */ \"./core/store/StoreSubscriber.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ \"./store/actions.js\");\n/* harmony import */ var _core_utils_preventDefault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utils/preventDefault */ \"./core/utils/preventDefault.js\");\n\n\n\n\n\nclass Excel {\n  constructor(options) {\n    this.components = options.components || [];\n    this.store = options.store;\n    this.emitter = new _core_dom_Emitter__WEBPACK_IMPORTED_MODULE_1__.Emitter();\n    this.subscriber = new _core_store_StoreSubscriber__WEBPACK_IMPORTED_MODULE_2__.StoreSubscriber(this.store);\n  }\n  getRoot() {\n    const $root = _core_dom_dom__WEBPACK_IMPORTED_MODULE_0__.$.create(\"div\", \"excel\");\n    const componentOptions = {\n      emitter: this.emitter,\n      store: this.store\n    };\n    this.components = this.components.map(Component => {\n      const $el = _core_dom_dom__WEBPACK_IMPORTED_MODULE_0__.$.create(\"div\", Component.className);\n      const component = new Component($el, componentOptions);\n      $el.html(component.toHTML());\n      $root.append($el);\n      return component;\n    });\n    return $root;\n  }\n  init() {\n    if (true) {\n      document.addEventListener(\"contextmenu\", _core_utils_preventDefault__WEBPACK_IMPORTED_MODULE_4__.preventDefault);\n    }\n    this.store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_3__.updateOpenedDate)());\n    this.subscriber.subscribeComponents(this.components);\n    this.components.forEach(component => component.init());\n  }\n  destroy() {\n    document.removeEventListener(\"contextmenu\", _core_utils_preventDefault__WEBPACK_IMPORTED_MODULE_4__.preventDefault);\n    this.subscriber.unsubscribeFromStore();\n    this.components.forEach(component => component.destroy());\n  }\n}\n\n//# sourceURL=webpack:///./components/excel/Excel.js?");

/***/ }),

/***/ "./components/formula/Formula.js":
/*!***************************************!*\
  !*** ./components/formula/Formula.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Formula\": function() { return /* binding */ Formula; }\n/* harmony export */ });\n/* harmony import */ var _core_dom_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/dom/dom */ \"./core/dom/dom.js\");\n/* harmony import */ var _core_excel_ExcelComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/excel/ExcelComponent */ \"./core/excel/ExcelComponent.js\");\n\n\nclass Formula extends _core_excel_ExcelComponent__WEBPACK_IMPORTED_MODULE_1__.ExcelComponent {\n  static className = \"excel__formula\";\n  constructor($root, options) {\n    super($root, {\n      name: \"Formula\",\n      listeners: [\"input\", \"keydown\"],\n      subscribe: [\"currentText\"],\n      ...options\n    });\n    this.formulaText = \"\";\n  }\n  toHTML() {\n    return `\n      <div class=\"info\">fx</div>\n      <div id=\"formula\" class=\"input\" contenteditable spellcheck=\"false\"></div>\n    `;\n  }\n  init() {\n    super.init();\n    this.$folmula = this.$root.find(\"#formula\");\n    this.$on(\"table:select\", cell => {\n      this.$folmula.text(cell.data.value);\n    });\n  }\n  storeChanged({\n    currentText\n  }) {\n    this.$folmula.text(currentText);\n  }\n  onInput(event) {\n    this.$emit(\"formula:input\", (0,_core_dom_dom__WEBPACK_IMPORTED_MODULE_0__.$)(event.target).text());\n  }\n  onKeydown(event) {\n    const keys = [\"Enter\", \"Tab\"];\n    if (keys.includes(event.key)) {\n      event.preventDefault();\n      this.$emit(\"formula:done\", event);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./components/formula/Formula.js?");

/***/ }),

/***/ "./components/header/Header.js":
/*!*************************************!*\
  !*** ./components/header/Header.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ \"./constants.js\");\n/* harmony import */ var _core_excel_ExcelComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/excel/ExcelComponent */ \"./core/excel/ExcelComponent.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions */ \"./store/actions.js\");\n/* harmony import */ var _core_utils_debaunce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/debaunce */ \"./core/utils/debaunce.js\");\n/* harmony import */ var _core_dom_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/dom/dom */ \"./core/dom/dom.js\");\n/* harmony import */ var _core_routes_ActiveRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/routes/ActiveRoute */ \"./core/routes/ActiveRoute.js\");\n\n\n\n\n\n\nclass Header extends _core_excel_ExcelComponent__WEBPACK_IMPORTED_MODULE_1__.ExcelComponent {\n  static className = \"excel__header\";\n  constructor($root, options) {\n    super($root, {\n      name: \"Header\",\n      listeners: [\"input\", \"click\"],\n      subscribe: [\"tableName\"],\n      ...options\n    });\n  }\n  toHTML() {\n    const title = this.store.getState().title || _constants__WEBPACK_IMPORTED_MODULE_0__.defaultTitle;\n    return `\n    <input id=\"table-name-input\" type=\"text\" class=\"input\" value=\"${title}\" />\n\n    <div>\n      <div class=\"button\" data-button=\"delete\">\n        <span class=\"material-icons\" data-button=\"delete\"> delete </span>\n      </div>\n      <div class=\"button\" data-button=\"exit\">\n        <span class=\"material-icons\" data-button=\"exit\"> exit_to_app </span>\n      </div>\n    </div>\n    `;\n  }\n  init() {\n    super.init();\n    this.$tableNameInput = this.$root.find(\"#table-name-input\");\n  }\n  prepare() {\n    this.onInput = (0,_core_utils_debaunce__WEBPACK_IMPORTED_MODULE_3__.debounce)(this.onInput, 300);\n  }\n  storeChanged({\n    tableName\n  }) {\n    this.$tableNameInput.text(tableName);\n  }\n  onInput(e) {\n    this.$dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__.changeTitle(e.target.value));\n  }\n  onClick(e) {\n    const target = (0,_core_dom_dom__WEBPACK_IMPORTED_MODULE_4__.$)(e.target);\n    if (!target.data.button) return;\n    if (target.data.button === \"delete\") {\n      const desision = confirm(\"Are you sure you want to delete this table?\");\n      if (desision) {\n        localStorage.removeItem(\"excel:\" + _core_routes_ActiveRoute__WEBPACK_IMPORTED_MODULE_5__.ActiveRoute.param);\n        _core_routes_ActiveRoute__WEBPACK_IMPORTED_MODULE_5__.ActiveRoute.navigate(\"dashboard\");\n      }\n    }\n    if (target.data.button === \"exit\") {\n      _core_routes_ActiveRoute__WEBPACK_IMPORTED_MODULE_5__.ActiveRoute.navigate(\"dashboard\");\n    }\n  }\n}\n\n//# sourceURL=webpack:///./components/header/Header.js?");

/***/ }),

/***/ "./components/table/Table.js":
/*!***********************************!*\
  !*** ./components/table/Table.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Table\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var _core_excel_ExcelComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/excel/ExcelComponent */ \"./core/excel/ExcelComponent.js\");\n/* harmony import */ var _table_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.template */ \"./components/table/table.template.js\");\n/* harmony import */ var _table_resize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.resize */ \"./components/table/table.resize.js\");\n/* harmony import */ var _table_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table.functions */ \"./components/table/table.functions.js\");\n/* harmony import */ var _TableSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TableSelection */ \"./components/table/TableSelection.js\");\n/* harmony import */ var _core_dom_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/dom/dom */ \"./core/dom/dom.js\");\n/* harmony import */ var _core_utils_nextSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/utils/nextSelector */ \"./core/utils/nextSelector.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions */ \"./store/actions.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ \"./constants.js\");\n/* harmony import */ var _core_utils_parse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/utils/parse */ \"./core/utils/parse.js\");\n\n\n\n\n\n\n\n\n\n\nclass Table extends _core_excel_ExcelComponent__WEBPACK_IMPORTED_MODULE_0__.ExcelComponent {\n  static className = \"excel__table\";\n  constructor($root, options) {\n    super($root, {\n      name: \"table\",\n      listeners: [\"mousedown\", \"keydown\", \"input\"],\n      ...options\n    });\n  }\n  toHTML() {\n    return (0,_table_template__WEBPACK_IMPORTED_MODULE_1__.createTable)(20, this.store.getState());\n  }\n  prepare() {\n    this.selection = new _TableSelection__WEBPACK_IMPORTED_MODULE_4__.TableSelection();\n  }\n  init() {\n    super.init();\n    this.selectCell(this.$root.find('[data-id=\"0:0\"]'));\n    this.$on(\"formula:input\", value => {\n      this.selection.current.attr(\"data-value\", value).text((0,_core_utils_parse__WEBPACK_IMPORTED_MODULE_9__.parse)(value));\n      this.updateTextInStore(value);\n    });\n    this.$on(\"formula:done\", () => {\n      this.selection.current.focus();\n    });\n    this.$on(\"toolbar:applyStyle\", value => {\n      this.selection.applyStyle(value);\n      this.$dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__.applyStyle({\n        value,\n        ids: this.selection.selectedIds\n      }));\n    });\n  }\n  selectCell($cell) {\n    this.selection.select($cell);\n    this.$emit(\"table:select\", $cell);\n    const styles = $cell.getStyles(Object.keys(_constants__WEBPACK_IMPORTED_MODULE_8__.defaultStyles));\n    this.$dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__.changeStyles(styles));\n  }\n  async resizeTable(event) {\n    try {\n      const data = await (0,_table_resize__WEBPACK_IMPORTED_MODULE_2__.resizeHandler)(this.$root, event);\n      this.$dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__.tableResize(data));\n    } catch (e) {\n      console.warn(\"Resize error\", e.message);\n    }\n  }\n  onMousedown(event) {\n    if ((0,_table_functions__WEBPACK_IMPORTED_MODULE_3__.shouldResize)(event)) {\n      this.resizeTable(event);\n    } else if ((0,_table_functions__WEBPACK_IMPORTED_MODULE_3__.isCell)(event)) {\n      const $target = (0,_core_dom_dom__WEBPACK_IMPORTED_MODULE_5__.$)(event.target);\n      if (event.shiftKey) {\n        const $cells = (0,_table_functions__WEBPACK_IMPORTED_MODULE_3__.matrix)($target, this.selection.current).map(id => this.$root.find(`[data-id=\"${id}\"]`));\n        this.selection.selectGroup($cells);\n      } else {\n        this.selectCell($target);\n      }\n    }\n  }\n  onKeydown(event) {\n    const keys = [\"Enter\", \"Tab\", \"ArrowLeft\", \"ArrowRight\", \"ArrowDown\", \"ArrowUp\"];\n    const {\n      key\n    } = event;\n    if (keys.includes(key) && !event.shiftKey) {\n      event.preventDefault();\n      const id = this.selection.current.id(true);\n      const $nextCell = this.$root.find((0,_core_utils_nextSelector__WEBPACK_IMPORTED_MODULE_6__.nextSelector)(key, id));\n      this.selectCell($nextCell);\n    }\n  }\n  updateTextInStore(text) {\n    console.log(\"table\", text);\n    this.$dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__.changeText({\n      id: this.selection.current.id(),\n      value: text\n    }));\n  }\n  onInput(event) {\n    this.updateTextInStore((0,_core_dom_dom__WEBPACK_IMPORTED_MODULE_5__.$)(event.target).text());\n  }\n}\n\n//# sourceURL=webpack:///./components/table/Table.js?");

/***/ }),

/***/ "./components/table/TableSelection.js":
/*!********************************************!*\
  !*** ./components/table/TableSelection.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TableSelection\": function() { return /* binding */ TableSelection; }\n/* harmony export */ });\nclass TableSelection {\n  static className = \"selected\";\n  constructor() {\n    this.group = [];\n    this.current = null;\n  }\n  select($el) {\n    this.clear();\n    this.group.push($el);\n    $el.focus().addClass(TableSelection.className);\n    this.current = $el;\n  }\n  selectGroup($group = []) {\n    this.clear();\n    this.group = $group;\n    this.group.forEach($el => $el.addClass(TableSelection.className));\n  }\n  get selectedIds() {\n    return this.group.map($el => $el.id());\n  }\n  clear() {\n    this.group.forEach($el => $el.removeClass(TableSelection.className));\n    this.group = [];\n  }\n  applyStyle(style) {\n    this.group.forEach($el => $el.css(style));\n  }\n}\n\n//# sourceURL=webpack:///./components/table/TableSelection.js?");

/***/ }),

/***/ "./components/table/table.functions.js":
/*!*********************************************!*\
  !*** ./components/table/table.functions.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isCell\": function() { return /* binding */ isCell; },\n/* harmony export */   \"matrix\": function() { return /* binding */ matrix; },\n/* harmony export */   \"shouldResize\": function() { return /* binding */ shouldResize; }\n/* harmony export */ });\n/* harmony import */ var _core_utils_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/utils/range */ \"./core/utils/range.js\");\n\nfunction shouldResize(event) {\n  return event.target.dataset.resize;\n}\nfunction isCell(event) {\n  return event.target.dataset.type === \"cell\";\n}\nfunction matrix($target, $current) {\n  const target = $target.id(true);\n  const current = $current.id(true);\n  const cols = (0,_core_utils_range__WEBPACK_IMPORTED_MODULE_0__.range)(current.col, target.col);\n  const rows = (0,_core_utils_range__WEBPACK_IMPORTED_MODULE_0__.range)(current.row, target.row);\n  return cols.reduce((acc, col) => {\n    rows.forEach(row => acc.push(`${row}:${col}`));\n    return acc;\n  }, []);\n}\n\n//# sourceURL=webpack:///./components/table/table.functions.js?");

/***/ }),

/***/ "./components/table/table.resize.js":
/*!******************************************!*\
  !*** ./components/table/table.resize.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resizeHandler\": function() { return /* binding */ resizeHandler; }\n/* harmony export */ });\n/* harmony import */ var _core_dom_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/dom/dom */ \"./core/dom/dom.js\");\n\nfunction resizeHandler($root, event) {\n  return new Promise(resolve => {\n    const $resizer = (0,_core_dom_dom__WEBPACK_IMPORTED_MODULE_0__.$)(event.target);\n    const $parent = $resizer.closest('[data-type=\"resizable\"]');\n    const coords = $parent.getCoords();\n    const type = $resizer.data.resize;\n    const sideProp = type === \"col\" ? \"bottom\" : \"right\";\n    let size;\n    $resizer.css({\n      opacity: 1,\n      [sideProp]: \"-5000px\"\n    });\n    document.onmousemove = e => {\n      if (type === \"col\") {\n        const delta = e.pageX - coords.right;\n        size = coords.width + delta;\n        $resizer.css({\n          right: -delta + \"px\"\n        });\n      } else {\n        const delta = e.pageY - coords.bottom;\n        size = coords.height + delta;\n        $resizer.css({\n          bottom: -delta + \"px\"\n        });\n      }\n    };\n    document.onmouseup = () => {\n      document.onmousemove = null;\n      document.onmouseup = null;\n      if (type === \"col\") {\n        $parent.css({\n          width: size + \"px\"\n        });\n        $root.findAll(`[data-col=\"${$parent.data.col}\"]`).forEach(el => el.style.width = size + \"px\");\n      } else {\n        $parent.css({\n          height: size + \"px\"\n        });\n      }\n      resolve({\n        value: size,\n        type,\n        id: $parent.data[type]\n      });\n      $resizer.css({\n        opacity: 0,\n        bottom: 0,\n        right: 0\n      });\n    };\n  });\n}\n\n//# sourceURL=webpack:///./components/table/table.resize.js?");

/***/ }),

/***/ "./components/table/table.template.js":
/*!********************************************!*\
  !*** ./components/table/table.template.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTable\": function() { return /* binding */ createTable; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ \"./constants.js\");\n/* harmony import */ var _core_utils_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils/parse */ \"./core/utils/parse.js\");\n/* harmony import */ var _core_utils_toInlineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/toInlineStyles */ \"./core/utils/toInlineStyles.js\");\n\n\n\nconst CODES = {\n  A: 65,\n  Z: 90\n};\nconst DEFAULT_WIDTH = 120;\nconst DEFAULT_HEIGHT = 24;\nfunction getWidth(state, index) {\n  return (state[index] ?? DEFAULT_WIDTH) + \"px\";\n}\nfunction getHeight(state, index) {\n  return (state[index] ?? DEFAULT_HEIGHT) + \"px\";\n}\nfunction toCell(state, row) {\n  return function (_, col) {\n    const id = `${row}:${col}`;\n    const styles = (0,_core_utils_toInlineStyles__WEBPACK_IMPORTED_MODULE_2__.toInlineStyles)({\n      ..._constants__WEBPACK_IMPORTED_MODULE_0__.defaultStyles,\n      ...state.stylesState[id]\n    });\n    return `\n      <div class=\"cell\" contenteditable \n        data-col=${col} \n        data-type=\"cell\"\n        data-id=${id}\n        data-value=\"${state.dataState[id] || \"\"}\"\n        style=\"${styles}; width: ${getWidth(state.colState, col)}\">\n        ${(0,_core_utils_parse__WEBPACK_IMPORTED_MODULE_1__.parse)(state.dataState[id]) ?? \"\"}\n      </div>\n    `;\n  };\n}\nfunction toColumn({\n  col,\n  index,\n  width\n}) {\n  return `\n    <div \n    class=\"column\" \n    data-type=\"resizable\" \n    data-col=${index} \n    style=\"width: ${width}\">\n      ${col}\n      <div class=\"col-resize\" data-resize=\"col\"></div>\n    </div>\n    `;\n}\nfunction createRow(index, content, state) {\n  const resize = index ? `<div class=\"row-resize\" data-resize=\"row\"></div>` : \"\";\n  return `\n    <div \n    class=\"row\" \n    data-type=\"resizable\" \n    data-row=\"${index}\"\n    style=\"height: ${getHeight(state, index)}\"\n    >\n      <div class=\"row-info\">\n        ${index || \"\"}\n        ${resize}\n      </div>\n      <div class=\"row-data\">\n        ${content}\n      </div>\n    </div>\n    `;\n}\nfunction toChar(_, index) {\n  return String.fromCharCode(CODES.A + index);\n}\nfunction withWidthFrom(state) {\n  return function (col, index) {\n    return {\n      col,\n      index,\n      width: getWidth(state, index)\n    };\n  };\n}\nfunction createTable(rowsCount = 15, state = {}) {\n  const colsCount = CODES.Z - CODES.A + 1;\n  const rows = [];\n  const cols = new Array(colsCount).fill(\"\").map(toChar).map(withWidthFrom(state.colState)).map(toColumn).join(\"\");\n  rows.push(createRow(null, cols, {}));\n  for (let row = 0; row < rowsCount; row++) {\n    const cells = new Array(colsCount).fill(\"\").map(toCell(state, row)).join(\"\");\n    rows.push(createRow(row + 1, cells, state.rowState));\n  }\n  return rows.join(\"\");\n}\n\n//# sourceURL=webpack:///./components/table/table.template.js?");

/***/ }),

/***/ "./components/toolbar/Toolbar.js":
/*!***************************************!*\
  !*** ./components/toolbar/Toolbar.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Toolbar\": function() { return /* binding */ Toolbar; }\n/* harmony export */ });\n/* harmony import */ var _toolbar_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar.template */ \"./components/toolbar/toolbar.template.js\");\n/* harmony import */ var _core_dom_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/dom/dom */ \"./core/dom/dom.js\");\n/* harmony import */ var _core_excel_ExcelStateComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/excel/ExcelStateComponent */ \"./core/excel/ExcelStateComponent.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ \"./constants.js\");\n\n\n\n\nclass Toolbar extends _core_excel_ExcelStateComponent__WEBPACK_IMPORTED_MODULE_2__.ExcelStateComponent {\n  static className = \"excel__toolbar\";\n  constructor($root, options) {\n    super($root, {\n      name: \"Toolbar\",\n      listeners: [\"click\"],\n      subscribe: [\"currentStyles\"],\n      ...options\n    });\n  }\n  prepare() {\n    this.initState(_constants__WEBPACK_IMPORTED_MODULE_3__.defaultStyles);\n  }\n  get template() {\n    return (0,_toolbar_template__WEBPACK_IMPORTED_MODULE_0__.createToolbar)(this.state);\n  }\n  toHTML() {\n    return this.template;\n  }\n  storeChanged({\n    currentStyles\n  }) {\n    this.setState(currentStyles);\n  }\n  onClick(event) {\n    const $target = (0,_core_dom_dom__WEBPACK_IMPORTED_MODULE_1__.$)(event.target);\n    if ($target.data.type === \"button\") {\n      const style = JSON.parse($target.data.value);\n      this.$emit(\"toolbar:applyStyle\", style);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./components/toolbar/Toolbar.js?");

/***/ }),

/***/ "./components/toolbar/toolbar.template.js":
/*!************************************************!*\
  !*** ./components/toolbar/toolbar.template.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createToolbar\": function() { return /* binding */ createToolbar; }\n/* harmony export */ });\nfunction toButton(button) {\n  const meta = `\n    data-type=\"button\"\n    data-value='${JSON.stringify(button.value)}'\n  `;\n  return `\n        <div\n          class=\"button ${button.active ? \"active\" : \"\"}\"\n          ${meta}\n        >\n            <span class=\"material-icons\" ${meta}\n            >\n              ${button.icon}\n            </span>\n        </div>\n    `;\n}\nfunction createToolbar(state) {\n  const buttons = [{\n    icon: \"format_align_left\",\n    active: state[\"textAlign\"] === \"left\",\n    value: {\n      textAlign: \"left\"\n    }\n  }, {\n    icon: \"format_align_center\",\n    active: state[\"textAlign\"] === \"center\",\n    value: {\n      textAlign: \"center\"\n    }\n  }, {\n    icon: \"format_align_right\",\n    active: state[\"textAlign\"] === \"right\",\n    value: {\n      textAlign: \"right\"\n    }\n  }, {\n    icon: \"format_bold\",\n    active: state[\"fontWeight\"] === \"bold\",\n    value: {\n      fontWeight: state[\"fontWeight\"] === \"bold\" ? \"normal\" : \"bold\"\n    }\n  }, {\n    icon: \"format_italic\",\n    active: state[\"fontStyle\"] === \"italic\",\n    value: {\n      fontStyle: state[\"fontStyle\"] === \"italic\" ? \"normal\" : \"italic\"\n    }\n  }, {\n    icon: \"format_underlined\",\n    active: state[\"textDecoration\"] === \"underline\",\n    value: {\n      textDecoration: state[\"textDecoration\"] === \"underline\" ? \"none\" : \"underline\"\n    }\n  }];\n  return buttons.map(toButton).join(\"\");\n}\n\n//# sourceURL=webpack:///./components/toolbar/toolbar.template.js?");

/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultStyles\": function() { return /* binding */ defaultStyles; },\n/* harmony export */   \"defaultTitle\": function() { return /* binding */ defaultTitle; }\n/* harmony export */ });\nconst defaultStyles = {\n  textAlign: \"left\",\n  fontWeight: \"normal\",\n  textDecoration: \"none\",\n  fontStyle: \"normal\"\n};\nconst defaultTitle = \"New table\";\n\n//# sourceURL=webpack:///./constants.js?");

/***/ }),

/***/ "./core/dom/DomListener.js":
/*!*********************************!*\
  !*** ./core/dom/DomListener.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DomListener\": function() { return /* binding */ DomListener; }\n/* harmony export */ });\n/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/capitalize */ \"./core/utils/capitalize.js\");\n\nclass DomListener {\n  constructor($root, listeners = []) {\n    if (!$root) {\n      throw new Error(\"No $root provided for DomListener!\");\n    }\n    this.$root = $root;\n    this.listeners = listeners;\n  }\n  initDOMListeners() {\n    this.listeners.forEach(listener => {\n      const method = getMethodName(listener);\n      if (!this[method]) {\n        throw new Error(`Method ${method} is not implemented in ${this.name || \"\"} Component`);\n      }\n      this[method] = this[method].bind(this);\n      this.$root.on(listener, this[method]);\n    });\n  }\n  removeDOMListeners() {\n    this.listeners.forEach(listener => {\n      const method = getMethodName(listener);\n      this.$root.off(listener, this[method]);\n    });\n  }\n}\n\n// input => onInput\nfunction getMethodName(eventName) {\n  return \"on\" + (0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_0__.capitalize)(eventName);\n}\n\n//# sourceURL=webpack:///./core/dom/DomListener.js?");

/***/ }),

/***/ "./core/dom/Emitter.js":
/*!*****************************!*\
  !*** ./core/dom/Emitter.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Emitter\": function() { return /* binding */ Emitter; }\n/* harmony export */ });\nclass Emitter {\n  constructor() {\n    this.listeners = {};\n  }\n  emit(eventName, ...args) {\n    if (!Array.isArray(this.listeners[eventName])) {\n      return false;\n    }\n    this.listeners[eventName].forEach(listener => {\n      listener(...args);\n    });\n    return true;\n  }\n  subscribe(eventName, fn) {\n    this.listeners[eventName] = this.listeners[eventName] || [];\n    this.listeners[eventName].push(fn);\n    return () => {\n      this.listeners[eventName] = this.listeners[eventName].filter(listener => listener !== fn);\n    };\n  }\n}\n\n//# sourceURL=webpack:///./core/dom/Emitter.js?");

/***/ }),

/***/ "./core/dom/dom.js":
/*!*************************!*\
  !*** ./core/dom/dom.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": function() { return /* binding */ $; }\n/* harmony export */ });\nclass Dom {\n  constructor(selector) {\n    this.$el = typeof selector === \"string\" ? document.querySelector(selector) : selector;\n  }\n  html(html) {\n    if (typeof html === \"string\") {\n      this.$el.innerHTML = html;\n      return this;\n    }\n    return this.$el.outerHTML.trim();\n  }\n  text(text) {\n    if (typeof text !== \"undefined\") {\n      this.$el.textContent = text;\n      return this;\n    }\n    if (this.$el.tagName.toLowerCase() === \"input\") {\n      return this.$el.value.trim();\n    } else {\n      return this.$el.textContent.trim();\n    }\n  }\n  clear() {\n    this.html(\"\");\n    return this;\n  }\n  append(node) {\n    if (node instanceof Dom) {\n      node = node.$el;\n    }\n    if (Element.prototype.append) {\n      this.$el.append(node);\n    } else {\n      this.appendChild(node);\n    }\n    return this;\n  }\n  on(eventType, callback) {\n    this.$el.addEventListener(eventType, callback);\n  }\n  off(eventType, callback) {\n    this.$el.removeEventListener(eventType, callback);\n  }\n  find(selector) {\n    return $(this.$el.querySelector(selector));\n  }\n  get data() {\n    return this.$el.dataset;\n  }\n  closest(selector) {\n    return $(this.$el.closest(selector));\n  }\n  getCoords() {\n    return this.$el.getBoundingClientRect();\n  }\n  findAll(selector) {\n    return this.$el.querySelectorAll(selector);\n  }\n  css(styles = {}) {\n    Object.keys(styles).forEach(key => {\n      this.$el.style[key] = styles[key];\n    });\n  }\n  getStyles(styles = []) {\n    return styles.reduce((res, s) => {\n      res[s] = this.$el.style[s];\n      return res;\n    }, {});\n  }\n  id(parse) {\n    if (parse) {\n      const parsed = this.id().split(\":\");\n      return {\n        row: +parsed[0],\n        col: +parsed[1]\n      };\n    }\n    return this.data.id;\n  }\n  focus() {\n    this.$el.focus();\n    return this;\n  }\n  attr(name, value) {\n    if (value) {\n      this.$el.setAttribute(name, value);\n      return this;\n    }\n    return this.$el.getAttribute(name);\n  }\n  addClass(className) {\n    this.$el.classList.add(className);\n  }\n  removeClass(className) {\n    this.$el.classList.remove(className);\n  }\n}\nfunction $(selector) {\n  return new Dom(selector);\n}\n$.create = (tagName, classes = \"\") => {\n  const el = document.createElement(tagName);\n  if (classes) {\n    el.classList.add(classes);\n  }\n  return $(el);\n};\n\n//# sourceURL=webpack:///./core/dom/dom.js?");

/***/ }),

/***/ "./core/excel/ExcelComponent.js":
/*!**************************************!*\
  !*** ./core/excel/ExcelComponent.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ExcelComponent\": function() { return /* binding */ ExcelComponent; }\n/* harmony export */ });\n/* harmony import */ var _dom_DomListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/DomListener */ \"./core/dom/DomListener.js\");\n\nclass ExcelComponent extends _dom_DomListener__WEBPACK_IMPORTED_MODULE_0__.DomListener {\n  constructor($root, options = {}) {\n    super($root, options.listeners);\n    this.emitter = options.emitter;\n    this.subscribe = options.subscribe ?? [];\n    this.store = options.store;\n    this.unsubcribers = [];\n    this.prepare();\n  }\n\n  //Настраиваем наш компонент до init\n  prepare() {}\n  toHTML() {\n    return \"\";\n  }\n\n  //Увеомляем слушателей про событие event\n  $emit(eventName, ...args) {\n    this.emitter.emit(eventName, ...args);\n  }\n\n  //Подписываемся на событие event\n  $on(eventName, fn) {\n    const unsub = this.emitter.subscribe(eventName, fn);\n    this.unsubcribers.push(unsub);\n  }\n  $dispatch(action) {\n    this.store.dispatch(action);\n  }\n\n  //Сюда приходят только изменения по тем\n  //полям, на которые мы подписались\n  storeChanged() {}\n  isWatching(key) {\n    return this.subscribe.includes(key);\n  }\n\n  //Инициализируем компонент\n  //Добавляем DOM слушателей\n  init() {\n    this.initDOMListeners();\n  }\n\n  //Удалякм компонент\n  //Чистим слушатели\n  destroy() {\n    this.removeDOMListeners();\n    this.unsubcribers.forEach(unsub => unsub());\n  }\n}\n\n//# sourceURL=webpack:///./core/excel/ExcelComponent.js?");

/***/ }),

/***/ "./core/excel/ExcelStateComponent.js":
/*!*******************************************!*\
  !*** ./core/excel/ExcelStateComponent.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ExcelStateComponent\": function() { return /* binding */ ExcelStateComponent; }\n/* harmony export */ });\n/* harmony import */ var _ExcelComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExcelComponent */ \"./core/excel/ExcelComponent.js\");\n\nclass ExcelStateComponent extends _ExcelComponent__WEBPACK_IMPORTED_MODULE_0__.ExcelComponent {\n  constructor(...args) {\n    super(...args);\n  }\n  get template() {\n    return JSON.stringify(this.state, null, 2);\n  }\n  initState(initialState = {}) {\n    this.state = {\n      ...initialState\n    };\n  }\n  setState(newState) {\n    this.state = {\n      ...this.state,\n      ...newState\n    };\n    this.$root.html(this.template);\n  }\n}\n\n//# sourceURL=webpack:///./core/excel/ExcelStateComponent.js?");

/***/ }),

/***/ "./core/page/Page.js":
/*!***************************!*\
  !*** ./core/page/Page.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Page\": function() { return /* binding */ Page; }\n/* harmony export */ });\nclass Page {\n  constructor(params) {\n    this.params = params;\n  }\n  getRoot() {\n    throw new Error('Method \"getRoot\" should be implemented');\n  }\n  afterRender() {}\n  destroy() {}\n}\n\n//# sourceURL=webpack:///./core/page/Page.js?");

/***/ }),

/***/ "./core/page/StateProcessor.js":
/*!*************************************!*\
  !*** ./core/page/StateProcessor.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateProcessor\": function() { return /* binding */ StateProcessor; }\n/* harmony export */ });\n/* harmony import */ var _utils_debaunce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/debaunce */ \"./core/utils/debaunce.js\");\n\nclass StateProcessor {\n  constructor(client, delay = 300) {\n    this.client = client;\n    this.listen = (0,_utils_debaunce__WEBPACK_IMPORTED_MODULE_0__.debounce)(this.listen.bind(this), delay);\n  }\n  listen(state) {\n    this.client.save(state);\n  }\n  get() {\n    return this.client.get();\n  }\n}\n\n//# sourceURL=webpack:///./core/page/StateProcessor.js?");

/***/ }),

/***/ "./core/routes/ActiveRoute.js":
/*!************************************!*\
  !*** ./core/routes/ActiveRoute.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ActiveRoute\": function() { return /* binding */ ActiveRoute; }\n/* harmony export */ });\nclass ActiveRoute {\n  static get path() {\n    return window.location.hash.slice(1);\n  }\n  static get param() {\n    return ActiveRoute.path.split(\"/\")[1];\n  }\n  static navigate(path) {\n    window.location.hash = path;\n  }\n}\n\n//# sourceURL=webpack:///./core/routes/ActiveRoute.js?");

/***/ }),

/***/ "./core/routes/Router.js":
/*!*******************************!*\
  !*** ./core/routes/Router.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Router\": function() { return /* binding */ Router; }\n/* harmony export */ });\n/* harmony import */ var _components_common_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/common/loader */ \"./components/common/loader/index.js\");\n/* harmony import */ var _dom_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/dom */ \"./core/dom/dom.js\");\n/* harmony import */ var _ActiveRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActiveRoute */ \"./core/routes/ActiveRoute.js\");\n\n\n\nclass Router {\n  constructor(selector, routes) {\n    if (!selector) {\n      throw new Error(\"Selector is not provided in Router\");\n    }\n    if (!routes.pages.length) {\n      throw new Error(\"Pages is not provided in Router\");\n    }\n    this.loader = new _components_common_loader__WEBPACK_IMPORTED_MODULE_0__.Loader();\n    this.$placeholder = (0,_dom_dom__WEBPACK_IMPORTED_MODULE_1__.$)(selector);\n    this.routes = routes;\n    this.page = null;\n    this.changePageHandler = this.changePageHandler.bind(this);\n    this.init();\n  }\n  init() {\n    window.addEventListener(\"hashchange\", this.changePageHandler);\n    this.changePageHandler();\n  }\n  async changePageHandler() {\n    if (this.page) {\n      this.page.destroy();\n    }\n    this.$placeholder.clear().append(this.loader);\n    let Page = null;\n    this.routes.pages.forEach(el => {\n      if (_ActiveRoute__WEBPACK_IMPORTED_MODULE_2__.ActiveRoute.path.includes(el.path)) {\n        Page = el.page;\n      }\n    });\n    if (!Page) {\n      Page = this.routes.pages[0].page;\n      window.location.hash = `#${this.routes.pages[0].path}`;\n    }\n    this.page = new Page(_ActiveRoute__WEBPACK_IMPORTED_MODULE_2__.ActiveRoute.param);\n    const root = await this.page.getRoot();\n    this.$placeholder.clear().append(root);\n    this.page.afterRender();\n  }\n  destroy() {\n    window.removeEventListener(\"hashchange\", this.changePageHandler);\n  }\n}\n\n//# sourceURL=webpack:///./core/routes/Router.js?");

/***/ }),

/***/ "./core/store/StoreSubscriber.js":
/*!***************************************!*\
  !*** ./core/store/StoreSubscriber.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StoreSubscriber\": function() { return /* binding */ StoreSubscriber; }\n/* harmony export */ });\n/* harmony import */ var _utils_isEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/isEqual */ \"./core/utils/isEqual.js\");\n\nclass StoreSubscriber {\n  constructor(store) {\n    this.store = store;\n    this.sub = null;\n    this.prevState = {};\n  }\n  subscribeComponents(components) {\n    this.prevState = this.store.getState();\n    this.sub = this.store.subscribe(state => {\n      Object.keys(state).forEach(key => {\n        if (!(0,_utils_isEqual__WEBPACK_IMPORTED_MODULE_0__.isEqual)(this.prevState[key], state[key])) {\n          components.forEach(component => {\n            if (component.isWatching(key)) {\n              const chages = {\n                [key]: state[key]\n              };\n              component.storeChanged(chages);\n            }\n          });\n        }\n      });\n      this.prevState = this.store.getState();\n    });\n  }\n  unsubscribeFromStore() {\n    this.sub.unsubscribe();\n  }\n}\n\n//# sourceURL=webpack:///./core/store/StoreSubscriber.js?");

/***/ }),

/***/ "./core/store/createStore.js":
/*!***********************************!*\
  !*** ./core/store/createStore.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createStore\": function() { return /* binding */ createStore; }\n/* harmony export */ });\nfunction createStore(rootReducer, initialState = {}) {\n  let state = rootReducer({\n    ...initialState\n  }, {\n    type: \"__INIT__\"\n  });\n  let listeners = [];\n  return {\n    subscribe(fn) {\n      listeners.push(fn);\n      return {\n        unsubscribe() {\n          listeners = listeners.filter(l => l !== fn);\n        }\n      };\n    },\n    dispatch(action) {\n      state = rootReducer(state, action);\n      listeners.forEach(listener => listener(state));\n    },\n    getState() {\n      return JSON.parse(JSON.stringify(state));\n    }\n  };\n}\n\n//# sourceURL=webpack:///./core/store/createStore.js?");

/***/ }),

/***/ "./core/utils/camelToDashCase.js":
/*!***************************************!*\
  !*** ./core/utils/camelToDashCase.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"camelToDashCase\": function() { return /* binding */ camelToDashCase; }\n/* harmony export */ });\nfunction camelToDashCase(str) {\n  return str.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`);\n}\n\n//# sourceURL=webpack:///./core/utils/camelToDashCase.js?");

/***/ }),

/***/ "./core/utils/capitalize.js":
/*!**********************************!*\
  !*** ./core/utils/capitalize.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capitalize\": function() { return /* binding */ capitalize; }\n/* harmony export */ });\nfunction capitalize(string) {\n  if (typeof string !== \"string\") {\n    return \"\";\n  }\n  return string.charAt(0).toUpperCase() + string.slice(1);\n}\n\n//# sourceURL=webpack:///./core/utils/capitalize.js?");

/***/ }),

/***/ "./core/utils/clone.js":
/*!*****************************!*\
  !*** ./core/utils/clone.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clone\": function() { return /* binding */ clone; }\n/* harmony export */ });\nfunction clone(obj) {\n  return JSON.parse(JSON.stringify(obj));\n}\n\n//# sourceURL=webpack:///./core/utils/clone.js?");

/***/ }),

/***/ "./core/utils/debaunce.js":
/*!********************************!*\
  !*** ./core/utils/debaunce.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": function() { return /* binding */ debounce; }\n/* harmony export */ });\nfunction debounce(fn, wait) {\n  let timeout;\n  return function (...args) {\n    const later = () => {\n      clearTimeout(timeout);\n      fn.apply(this, args);\n    };\n    clearTimeout(timeout);\n    timeout = setTimeout(later, wait);\n  };\n}\n\n//# sourceURL=webpack:///./core/utils/debaunce.js?");

/***/ }),

/***/ "./core/utils/isEqual.js":
/*!*******************************!*\
  !*** ./core/utils/isEqual.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isEqual\": function() { return /* binding */ isEqual; }\n/* harmony export */ });\nfunction isEqual(a, b) {\n  if (typeof a === \"object\" && typeof b === \"object\") {\n    return JSON.stringify(a) === JSON.stringify(b);\n  }\n  return a === b;\n}\n\n//# sourceURL=webpack:///./core/utils/isEqual.js?");

/***/ }),

/***/ "./core/utils/nextSelector.js":
/*!************************************!*\
  !*** ./core/utils/nextSelector.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nextSelector\": function() { return /* binding */ nextSelector; }\n/* harmony export */ });\nfunction nextSelector(key, {\n  col,\n  row\n}) {\n  const MIN_VALUE = 0;\n  switch (key) {\n    case \"Enter\":\n    case \"ArrowDown\":\n      row++;\n      break;\n    case \"Tab\":\n    case \"ArrowRight\":\n      col++;\n      break;\n    case \"ArrowLeft\":\n      col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1;\n      break;\n    case \"ArrowUp\":\n      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1;\n      break;\n  }\n  return `[data-id=\"${row}:${col}\"]`;\n}\n\n//# sourceURL=webpack:///./core/utils/nextSelector.js?");

/***/ }),

/***/ "./core/utils/parse.js":
/*!*****************************!*\
  !*** ./core/utils/parse.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parse\": function() { return /* binding */ parse; }\n/* harmony export */ });\nfunction parse(value = \"\") {\n  if (value.startsWith(\"=\")) {\n    try {\n      return eval(value.slice(1));\n    } catch (e) {\n      return value;\n    }\n  }\n  return value;\n}\n\n//# sourceURL=webpack:///./core/utils/parse.js?");

/***/ }),

/***/ "./core/utils/preventDefault.js":
/*!**************************************!*\
  !*** ./core/utils/preventDefault.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"preventDefault\": function() { return /* binding */ preventDefault; }\n/* harmony export */ });\nfunction preventDefault(e) {\n  e.preventDefault();\n}\n\n//# sourceURL=webpack:///./core/utils/preventDefault.js?");

/***/ }),

/***/ "./core/utils/range.js":
/*!*****************************!*\
  !*** ./core/utils/range.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"range\": function() { return /* binding */ range; }\n/* harmony export */ });\nfunction range(start, end) {\n  if (start > end) {\n    [end, start] = [start, end];\n  }\n  return new Array(end - start + 1).fill(\"\").map((_, index) => start + index);\n}\n\n//# sourceURL=webpack:///./core/utils/range.js?");

/***/ }),

/***/ "./core/utils/storage.js":
/*!*******************************!*\
  !*** ./core/utils/storage.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storage\": function() { return /* binding */ storage; }\n/* harmony export */ });\nfunction storage(key, data = null) {\n  if (!data) {\n    return JSON.parse(localStorage.getItem(key));\n  }\n  localStorage.setItem(key, JSON.stringify(data));\n}\n\n//# sourceURL=webpack:///./core/utils/storage.js?");

/***/ }),

/***/ "./core/utils/toInlineStyles.js":
/*!**************************************!*\
  !*** ./core/utils/toInlineStyles.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toInlineStyles\": function() { return /* binding */ toInlineStyles; }\n/* harmony export */ });\n/* harmony import */ var _camelToDashCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camelToDashCase */ \"./core/utils/camelToDashCase.js\");\n\nfunction toInlineStyles(styles = {}) {\n  return Object.keys(styles).map(key => `${(0,_camelToDashCase__WEBPACK_IMPORTED_MODULE_0__.camelToDashCase)(key)}:${styles[key]}`).join(\";\");\n}\n\n//# sourceURL=webpack:///./core/utils/toInlineStyles.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ \"./scss/index.scss\");\n/* harmony import */ var _core_routes_Router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/routes/Router */ \"./core/routes/Router.js\");\n/* harmony import */ var _pages_dashboard_DashboardPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard/DashboardPage */ \"./pages/dashboard/DashboardPage.js\");\n/* harmony import */ var _pages_excel_ExcelPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/excel/ExcelPage */ \"./pages/excel/ExcelPage.js\");\n\n\n\n\nnew _core_routes_Router__WEBPACK_IMPORTED_MODULE_1__.Router(\"#app\", {\n  pages: [{\n    page: _pages_dashboard_DashboardPage__WEBPACK_IMPORTED_MODULE_2__.DashboardPage,\n    path: \"dashboard\"\n  }, {\n    page: _pages_excel_ExcelPage__WEBPACK_IMPORTED_MODULE_3__.ExcelPage,\n    path: \"excel\"\n  }]\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./pages/dashboard/DashboardPage.js":
/*!******************************************!*\
  !*** ./pages/dashboard/DashboardPage.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DashboardPage\": function() { return /* binding */ DashboardPage; }\n/* harmony export */ });\n/* harmony import */ var _core_dom_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/dom/dom */ \"./core/dom/dom.js\");\n/* harmony import */ var _core_page_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/page/Page */ \"./core/page/Page.js\");\n/* harmony import */ var _dashboard_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.functions */ \"./pages/dashboard/dashboard.functions.js\");\n\n\n\nclass DashboardPage extends _core_page_Page__WEBPACK_IMPORTED_MODULE_1__.Page {\n  getRoot() {\n    const now = Date.now().toString();\n    return _core_dom_dom__WEBPACK_IMPORTED_MODULE_0__.$.create(\"div\", \"db\").html(`\n      <div class=\"db__header\">\n        <h1>Excel Dashboard</h1>\n      </div>\n\n      <div class=\"db__new\">\n        <div class=\"db__view\">\n          <a href=\"#excel/${now}\" class=\"db__create\">\n            New <br />Table \n          </a>\n        </div>\n      </div>\n\n      <div class=\"db__table db__view\">\n        ${(0,_dashboard_functions__WEBPACK_IMPORTED_MODULE_2__.createRecordsTable)()}\n      </div>\n    `);\n  }\n}\n\n//# sourceURL=webpack:///./pages/dashboard/DashboardPage.js?");

/***/ }),

/***/ "./pages/dashboard/dashboard.functions.js":
/*!************************************************!*\
  !*** ./pages/dashboard/dashboard.functions.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createRecordsTable\": function() { return /* binding */ createRecordsTable; }\n/* harmony export */ });\n/* harmony import */ var _core_utils_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/utils/storage */ \"./core/utils/storage.js\");\n\nfunction toHTML(key) {\n  const model = (0,_core_utils_storage__WEBPACK_IMPORTED_MODULE_0__.storage)(key);\n  const id = key.split(\":\")[1];\n  return `\n        <li class=\"db__record\">\n            <a href=\"#excel/${id}\">${model.title}</a>\n            <strong>\n              ${new Date(model.openedDate).toLocaleDateString()}\n              ${new Date(model.openedDate).toLocaleTimeString()}\n            </strong>\n        </li>\n    `;\n}\nfunction getAllKeys() {\n  const keys = [];\n  for (let i = 0; i < localStorage.length; i++) {\n    const key = localStorage.key(i);\n    if (!key.includes(\"excel\")) {\n      continue;\n    }\n    keys.push(key);\n  }\n  return keys;\n}\nfunction createRecordsTable() {\n  const keys = getAllKeys();\n  if (!keys.length) {\n    return `<p>You have not created any tables yet</p>`;\n  }\n  return `\n        <div class=\"db__list-header\">\n            <span>Name</span>\n            <span>Opened date</span>\n        </div>\n\n        <ul class=\"db__list\">\n           ${keys.map(toHTML).join(\"\")}\n        </ul>\n    `;\n}\n\n//# sourceURL=webpack:///./pages/dashboard/dashboard.functions.js?");

/***/ }),

/***/ "./pages/excel/ExcelPage.js":
/*!**********************************!*\
  !*** ./pages/excel/ExcelPage.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ExcelPage\": function() { return /* binding */ ExcelPage; }\n/* harmony export */ });\n/* harmony import */ var _components_excel_Excel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/excel/Excel */ \"./components/excel/Excel.js\");\n/* harmony import */ var _components_formula_Formula__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/formula/Formula */ \"./components/formula/Formula.js\");\n/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header/Header */ \"./components/header/Header.js\");\n/* harmony import */ var _components_table_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/table/Table */ \"./components/table/Table.js\");\n/* harmony import */ var _components_toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/toolbar/Toolbar */ \"./components/toolbar/Toolbar.js\");\n/* harmony import */ var _core_store_createStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/store/createStore */ \"./core/store/createStore.js\");\n/* harmony import */ var _store_initialState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/initialState */ \"./store/initialState.js\");\n/* harmony import */ var _store_rootReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/rootReducer */ \"./store/rootReducer.js\");\n/* harmony import */ var _core_page_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/page/Page */ \"./core/page/Page.js\");\n/* harmony import */ var _core_page_StateProcessor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/page/StateProcessor */ \"./core/page/StateProcessor.js\");\n/* harmony import */ var _shared_LocalStorageClient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/LocalStorageClient */ \"./shared/LocalStorageClient.js\");\n\n\n\n\n\n\n\n\n\n\n\nclass ExcelPage extends _core_page_Page__WEBPACK_IMPORTED_MODULE_8__.Page {\n  constructor(param) {\n    super(param);\n    this.storeSub = null;\n    this.processor = new _core_page_StateProcessor__WEBPACK_IMPORTED_MODULE_9__.StateProcessor(new _shared_LocalStorageClient__WEBPACK_IMPORTED_MODULE_10__.LocalStorageClient(this.params || Date.now().toString()));\n  }\n  async getRoot() {\n    const state = await this.processor.get();\n    const store = (0,_core_store_createStore__WEBPACK_IMPORTED_MODULE_5__.createStore)(_store_rootReducer__WEBPACK_IMPORTED_MODULE_7__.rootReducer, (0,_store_initialState__WEBPACK_IMPORTED_MODULE_6__.normalizeInitialState)(state));\n    this.storeSub = store.subscribe(this.processor.listen);\n    this.excel = new _components_excel_Excel__WEBPACK_IMPORTED_MODULE_0__.Excel({\n      components: [_components_header_Header__WEBPACK_IMPORTED_MODULE_2__.Header, _components_toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar, _components_formula_Formula__WEBPACK_IMPORTED_MODULE_1__.Formula, _components_table_Table__WEBPACK_IMPORTED_MODULE_3__.Table],\n      store\n    });\n    return this.excel.getRoot();\n  }\n  afterRender() {\n    this.excel.init();\n  }\n  destroy() {\n    this.excel.destroy();\n    this.storeSub.unsubscribe();\n  }\n}\n\n//# sourceURL=webpack:///./pages/excel/ExcelPage.js?");

/***/ }),

/***/ "./shared/LocalStorageClient.js":
/*!**************************************!*\
  !*** ./shared/LocalStorageClient.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LocalStorageClient\": function() { return /* binding */ LocalStorageClient; }\n/* harmony export */ });\n/* harmony import */ var _core_utils_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils/storage */ \"./core/utils/storage.js\");\n\nclass LocalStorageClient {\n  constructor(name) {\n    this.name = storageName(name);\n  }\n  save(state) {\n    (0,_core_utils_storage__WEBPACK_IMPORTED_MODULE_0__.storage)(this.name, state);\n    return Promise.resolve();\n  }\n  get() {\n    // return Promise.resolve(storage(this.name));\n    return new Promise(resolve => {\n      const state = (0,_core_utils_storage__WEBPACK_IMPORTED_MODULE_0__.storage)(this.name);\n      setTimeout(() => {\n        resolve(state);\n      }, 1000);\n    });\n  }\n}\nfunction storageName(param) {\n  return \"excel:\" + param;\n}\n\n//# sourceURL=webpack:///./shared/LocalStorageClient.js?");

/***/ }),

/***/ "./store/actions.js":
/*!**************************!*\
  !*** ./store/actions.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"applyStyle\": function() { return /* binding */ applyStyle; },\n/* harmony export */   \"changeStyles\": function() { return /* binding */ changeStyles; },\n/* harmony export */   \"changeText\": function() { return /* binding */ changeText; },\n/* harmony export */   \"changeTitle\": function() { return /* binding */ changeTitle; },\n/* harmony export */   \"tableResize\": function() { return /* binding */ tableResize; },\n/* harmony export */   \"updateOpenedDate\": function() { return /* binding */ updateOpenedDate; }\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./store/types.js\");\n\nfunction tableResize(data) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.TABLE_RESIZE,\n    data\n  };\n}\nfunction changeText(data) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.CHANGE_TEXT,\n    data\n  };\n}\nfunction changeStyles(data) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.CHANGE_STYLES,\n    data\n  };\n}\nfunction applyStyle(data) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.APPLY_STYLE,\n    data\n  };\n}\nfunction changeTitle(data) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.CHANGE_TITLE,\n    data\n  };\n}\nfunction updateOpenedDate() {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_OPENED_DATE\n  };\n}\n\n//# sourceURL=webpack:///./store/actions.js?");

/***/ }),

/***/ "./store/initialState.js":
/*!*******************************!*\
  !*** ./store/initialState.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"normalizeInitialState\": function() { return /* binding */ normalizeInitialState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./constants.js\");\n/* harmony import */ var _core_utils_clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils/clone */ \"./core/utils/clone.js\");\n\n\nconst defaultState = {\n  rowState: {},\n  colState: {},\n  dataState: {},\n  stylesState: {},\n  title: _constants__WEBPACK_IMPORTED_MODULE_0__.defaultTitle,\n  currentStyles: _constants__WEBPACK_IMPORTED_MODULE_0__.defaultStyles,\n  currentText: \"\",\n  openedDate: new Date().toJSON()\n};\nconst normalize = state => ({\n  ...state,\n  currentStyles: _constants__WEBPACK_IMPORTED_MODULE_0__.defaultStyles,\n  currentText: \"\"\n});\nfunction normalizeInitialState(state) {\n  return state ? normalize(state) : (0,_core_utils_clone__WEBPACK_IMPORTED_MODULE_1__.clone)(defaultState);\n}\n\n//# sourceURL=webpack:///./store/initialState.js?");

/***/ }),

/***/ "./store/rootReducer.js":
/*!******************************!*\
  !*** ./store/rootReducer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rootReducer\": function() { return /* binding */ rootReducer; }\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./store/types.js\");\n\nfunction rootReducer(state, action) {\n  let field;\n  let val;\n  switch (action.type) {\n    case _types__WEBPACK_IMPORTED_MODULE_0__.TABLE_RESIZE:\n      field = action.data.type === \"col\" ? \"colState\" : \"rowState\";\n      return {\n        ...state,\n        [field]: value(state, field, action)\n      };\n    case _types__WEBPACK_IMPORTED_MODULE_0__.CHANGE_TEXT:\n      return {\n        ...state,\n        currentText: action.data.value,\n        [field]: value(state, field, action)\n      };\n    case _types__WEBPACK_IMPORTED_MODULE_0__.CHANGE_STYLES:\n      return {\n        ...state,\n        currentStyles: action.data\n      };\n    case _types__WEBPACK_IMPORTED_MODULE_0__.APPLY_STYLE:\n      field = \"stylesState\";\n      val = state[field] || {};\n      action.data.ids.forEach(id => {\n        val[id] = {\n          ...val[id],\n          ...action.data.value\n        };\n      });\n      return {\n        ...state,\n        [field]: val,\n        currentStyles: {\n          ...state.currentStyles,\n          ...action.data.value\n        }\n      };\n    case _types__WEBPACK_IMPORTED_MODULE_0__.CHANGE_TITLE:\n      return {\n        ...state,\n        title: action.data\n      };\n    case _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_OPENED_DATE:\n      return {\n        ...state,\n        openedDate: new Date().toJSON()\n      };\n    default:\n      return state;\n  }\n}\nfunction value(state, field, action) {\n  const val = state[field] || {};\n  val[action.data.id] = action.data.value;\n  return val;\n}\n\n//# sourceURL=webpack:///./store/rootReducer.js?");

/***/ }),

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APPLY_STYLE\": function() { return /* binding */ APPLY_STYLE; },\n/* harmony export */   \"CHANGE_STYLES\": function() { return /* binding */ CHANGE_STYLES; },\n/* harmony export */   \"CHANGE_TEXT\": function() { return /* binding */ CHANGE_TEXT; },\n/* harmony export */   \"CHANGE_TITLE\": function() { return /* binding */ CHANGE_TITLE; },\n/* harmony export */   \"TABLE_RESIZE\": function() { return /* binding */ TABLE_RESIZE; },\n/* harmony export */   \"UPDATE_OPENED_DATE\": function() { return /* binding */ UPDATE_OPENED_DATE; }\n/* harmony export */ });\nconst TABLE_RESIZE = \"TABLE_RESIZE\";\nconst CHANGE_TEXT = \"CHANGE_TEXT\";\nconst APPLY_STYLE = \"APPLY_STYLE\";\nconst CHANGE_STYLES = \"CHANGE_STYLES\";\nconst CHANGE_TITLE = \"CHANGE_TITLE\";\nconst UPDATE_OPENED_DATE = \"UPDATE_OPENED_DATE\";\n\n//# sourceURL=webpack:///./store/types.js?");

/***/ }),

/***/ "./scss/index.scss":
/*!*************************!*\
  !*** ./scss/index.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/index.scss?");

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