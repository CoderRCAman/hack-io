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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/StoreProvider.js":
/*!**********************************!*\
  !*** ./context/StoreProvider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StoreProvider),\n/* harmony export */   \"useStoreContext\": () => (/* binding */ useStoreContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction StoreProvider({ children  }) {\n    const { 0: userInfo , 1: setInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: feeds , 1: setFeeds  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const sharedState = {\n        userInfo: userInfo,\n        feeds: feeds,\n        setInfo: setInfo,\n        setFeeds: setFeeds\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: sharedState,\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\input-output\\\\3xFpzqHVqgBFv_LUBKsB3\\\\client\\\\context\\\\StoreProvider.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n};\nfunction useStoreContext() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1N0b3JlUHJvdmlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBdUU7QUFDdkUsTUFBTUksVUFBVSxpQkFBR0Qsb0RBQWEsRUFBRTtBQUNuQixTQUFTRSxhQUFhLENBQUMsRUFBRUMsUUFBUSxHQUFFLEVBQUU7SUFDbEQsTUFBTSxFQUhSLEdBR1NDLFFBQVEsR0FIakIsR0FHbUJDLE9BQU8sTUFBSVIsK0NBQVEsRUFBRTtJQUN0QyxNQUFNLEVBSlIsR0FJU1MsS0FBSyxHQUpkLEdBSWdCQyxRQUFRLE1BQUlWLCtDQUFRLEVBQUU7SUFDcEMsTUFBTVcsV0FBVyxHQUFHO1FBQ2xCSixRQUFRLEVBQUVBLFFBQVE7UUFDbEJFLEtBQUssRUFBRUEsS0FBSztRQUNaRCxPQUFPLEVBQUVBLE9BQU87UUFDaEJFLFFBQVEsRUFBRUEsUUFBUTtLQUNuQjtJQUNELHFCQUNFLDhEQUFDTixVQUFVLENBQUNRLFFBQVE7UUFBQ0MsS0FBSyxFQUFFRixXQUFXO2tCQUFHTCxRQUFROzs7OztZQUF1QixDQUN6RTtDQUNIO0FBRU0sU0FBU1EsZUFBZSxHQUFHO0lBQ2hDLE9BQU9aLGlEQUFVLENBQUNFLFVBQVUsQ0FBQyxDQUFDO0NBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29udGV4dC9TdG9yZVByb3ZpZGVyLmpzPzY0YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdG9yZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFt1c2VySW5mbywgc2V0SW5mb10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtmZWVkcywgc2V0RmVlZHNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBzaGFyZWRTdGF0ZSA9IHtcclxuICAgIHVzZXJJbmZvOiB1c2VySW5mbyxcclxuICAgIGZlZWRzOiBmZWVkcyxcclxuICAgIHNldEluZm86IHNldEluZm8sXHJcbiAgICBzZXRGZWVkczogc2V0RmVlZHMsXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NoYXJlZFN0YXRlfT57Y2hpbGRyZW59PC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZUNvbnRleHQoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiU3RvcmVQcm92aWRlciIsImNoaWxkcmVuIiwidXNlckluZm8iLCJzZXRJbmZvIiwiZmVlZHMiLCJzZXRGZWVkcyIsInNoYXJlZFN0YXRlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVN0b3JlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/StoreProvider.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_StoreProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/StoreProvider */ \"./context/StoreProvider.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_StoreProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"E:\\\\input-output\\\\3xFpzqHVqgBFv_LUBKsB3\\\\client\\\\pages\\\\_app.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\input-output\\\\3xFpzqHVqgBFv_LUBKsB3\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ3NCO0FBQ3JELFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDSCw4REFBYTtrQkFDWiw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNkLENBQ2hCO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFN0b3JlUHJvdmlkZXIgZnJvbSBcIi4uL2NvbnRleHQvU3RvcmVQcm92aWRlclwiO1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFN0b3JlUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9TdG9yZVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJTdG9yZVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();