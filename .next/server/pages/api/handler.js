"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/handler";
exports.ids = ["pages/api/handler"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQztBQUVKLElBQUlDLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNILElBQUksQ0FBQ0MsT0FBT0YsTUFBTSxFQUFFO1FBQ2hCRSxPQUFPRixNQUFNLEdBQUcsSUFBSUQsd0RBQVlBO0lBQ3BDLENBQUM7SUFDREMsU0FBU0UsT0FBT0YsTUFBTTtBQUMxQixDQUFDO0FBRUQsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXNpbm8vLi9saWIvcHJpc21hLmpzPzc1MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5sZXQgcHJpc21hO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbn0gZWxzZSB7XG4gICAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4gICAgICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgfVxuICAgIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicHJvY2VzcyIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/handler.js":
/*!******************************!*\
  !*** ./pages/api/handler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handle(req, res) {\n    const rtps = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].rtps.findMany();\n    const freespins = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bonus.findMany();\n    const q = req.query.type;\n    if (!q) res.json(\"need to specifie type.\");\n    q === \"rtp\" ? res.json(rtps) : res.json(freespins);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGFuZGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpQztBQUVsQixlQUFlQyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMzQyxNQUFNQyxPQUFPLE1BQU1KLGlFQUFvQjtJQUN2QyxNQUFNTSxZQUFZLE1BQU1OLGtFQUFxQjtJQUU3QyxNQUFNUSxJQUFJTixJQUFJTyxLQUFLLENBQUNDLElBQUk7SUFDeEIsSUFBRyxDQUFDRixHQUFHTCxJQUFJUSxJQUFJLENBQUM7SUFFaEJILE1BQU0sUUFBUUwsSUFBSVEsSUFBSSxDQUFDUCxRQUFRRCxJQUFJUSxJQUFJLENBQUNMLFVBQVU7QUFDdEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nhc2luby8uL3BhZ2VzL2FwaS9oYW5kbGVyLmpzPzdlZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9saWIvcHJpc21hXCJcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgcnRwcyA9IGF3YWl0IHByaXNtYS5ydHBzLmZpbmRNYW55KClcbiAgICBjb25zdCBmcmVlc3BpbnMgPSBhd2FpdCBwcmlzbWEuYm9udXMuZmluZE1hbnkoKVxuXG4gICAgY29uc3QgcSA9IHJlcS5xdWVyeS50eXBlXG4gICAgaWYoIXEpIHJlcy5qc29uKFwibmVlZCB0byBzcGVjaWZpZSB0eXBlLlwiKVxuXG4gICAgcSA9PT0gXCJydHBcIiA/IHJlcy5qc29uKHJ0cHMpIDogcmVzLmpzb24oZnJlZXNwaW5zKVxufSJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJydHBzIiwiZmluZE1hbnkiLCJmcmVlc3BpbnMiLCJib251cyIsInEiLCJxdWVyeSIsInR5cGUiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/handler.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/handler.js"));
module.exports = __webpack_exports__;

})();