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
exports.id = "pages/logout";
exports.ids = ["pages/logout"];
exports.modules = {

/***/ "./axios/index.js":
/*!************************!*\
  !*** ./axios/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:5000\",\n    // timeout : 1000 , \n    withCredentials: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9heGlvcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUI7QUFDekIsTUFBTUMsUUFBUSxHQUFHRCxtREFBWSxDQUFDO0lBQzFCRyxPQUFPLEVBQUcsdUJBQXVCO0lBQ2pDLG9CQUFvQjtJQUNwQkMsZUFBZSxFQUFHLElBQUk7Q0FDekIsQ0FBQztBQUVGLGlFQUFlSCxRQUFRLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9heGlvcy9pbmRleC5qcz85N2ViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5jb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCcgLFxyXG4gICAgLy8gdGltZW91dCA6IDEwMDAgLCBcclxuICAgIHdpdGhDcmVkZW50aWFscyA6IHRydWUgXHJcbn0pIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2UgOyAiXSwibmFtZXMiOlsiYXhpb3MiLCJpbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./axios/index.js\n");

/***/ }),

/***/ "./pages/logout.js":
/*!*************************!*\
  !*** ./pages/logout.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ logout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../axios */ \"./axios/index.js\");\n\n\n\nfunction logout() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"text-white bg-red-500 p-3 rounded-md\",\n            onClick: ()=>{\n                _axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/user/logout\");\n            },\n            children: \"Logout\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\vikrant\\\\Desktop\\\\hack\\\\hack-io\\\\client\\\\pages\\\\logout.js\",\n            lineNumber: 7,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vikrant\\\\Desktop\\\\hack\\\\hack-io\\\\client\\\\pages\\\\logout.js\",\n        lineNumber: 5,\n        columnNumber: 7\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDRztBQUNiLFNBQVNFLE1BQU0sR0FBRztJQUMvQixxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsMkNBQTJDO2tCQUV0RCw0RUFBQ0MsUUFBTTtZQUFDRCxTQUFTLEVBQUMsc0NBQXNDO1lBQ3hERSxPQUFPLEVBQUUsSUFBSTtnQkFBQ0wsa0RBQVMsQ0FBQyxjQUFjLENBQUM7YUFBQztzQkFFdkMsUUFBTTs7Ozs7Z0JBQVM7Ozs7O1lBQ2QsQ0FDVDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvbG9nb3V0LmpzP2FjNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnLi4vYXhpb3MnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW4nPlxyXG5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGJnLXJlZC01MDAgcC0zIHJvdW5kZWQtbWQnXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKT0+e2F4aW9zLmdldCgnL3VzZXIvbG9nb3V0Jyl9fVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsImxvZ291dCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/logout.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/logout.js"));
module.exports = __webpack_exports__;

})();