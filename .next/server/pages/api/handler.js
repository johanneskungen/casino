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

/***/ "(api)/./pages/api/handler.js":
/*!******************************!*\
  !*** ./pages/api/handler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handle(req, res) {\n    const rtps = await prisma.rtps.findMany();\n    const freespins = await prisma.bonus.findMany();\n    const q = req.query.type;\n    if (!q) res.json(\"need to specifie type.\");\n    q === \"rtp\" ? res.json(rtps) : res.json(freespins);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGFuZGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFDN0MsTUFBTUMsU0FBUyxJQUFJRCx3REFBWUE7QUFFaEIsZUFBZUUsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDM0MsTUFBTUMsT0FBTyxNQUFNSixPQUFPSSxJQUFJLENBQUNDLFFBQVE7SUFDdkMsTUFBTUMsWUFBWSxNQUFNTixPQUFPTyxLQUFLLENBQUNGLFFBQVE7SUFFN0MsTUFBTUcsSUFBSU4sSUFBSU8sS0FBSyxDQUFDQyxJQUFJO0lBQ3hCLElBQUcsQ0FBQ0YsR0FBR0wsSUFBSVEsSUFBSSxDQUFDO0lBRWhCSCxNQUFNLFFBQVFMLElBQUlRLElBQUksQ0FBQ1AsUUFBUUQsSUFBSVEsSUFBSSxDQUFDTCxVQUFVO0FBQ3RELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXNpbm8vLi9wYWdlcy9hcGkvaGFuZGxlci5qcz83ZWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgcnRwcyA9IGF3YWl0IHByaXNtYS5ydHBzLmZpbmRNYW55KClcbiAgICBjb25zdCBmcmVlc3BpbnMgPSBhd2FpdCBwcmlzbWEuYm9udXMuZmluZE1hbnkoKVxuXG4gICAgY29uc3QgcSA9IHJlcS5xdWVyeS50eXBlXG4gICAgaWYoIXEpIHJlcy5qc29uKFwibmVlZCB0byBzcGVjaWZpZSB0eXBlLlwiKVxuXG4gICAgcSA9PT0gXCJydHBcIiA/IHJlcy5qc29uKHJ0cHMpIDogcmVzLmpzb24oZnJlZXNwaW5zKVxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJydHBzIiwiZmluZE1hbnkiLCJmcmVlc3BpbnMiLCJib251cyIsInEiLCJxdWVyeSIsInR5cGUiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/handler.js\n");

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