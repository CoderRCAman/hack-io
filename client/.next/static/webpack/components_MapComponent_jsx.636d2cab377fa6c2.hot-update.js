"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_MapComponent_jsx",{

/***/ "./components/MapComponent.jsx":
/*!*************************************!*\
  !*** ./components/MapComponent.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MapComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nconsole.log(\"run\");\nfunction MyComponent() {\n    _s();\n    var map = (0,react_leaflet__WEBPACK_IMPORTED_MODULE_4__.useMap)();\n    console.log(\"map center:\", map.getCenter());\n    return null;\n}\n_s(MyComponent, \"cX187cvZ2hODbkaiLn05gMk1sCM=\", false, function() {\n    return [\n        react_leaflet__WEBPACK_IMPORTED_MODULE_4__.useMap\n    ];\n});\n_c = MyComponent;\nfunction MapComponent() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_4__.MapContainer, {\n        center: [\n            50.5,\n            30.5\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyComponent, {}, void 0, false, {\n            fileName: \"E:\\\\input-output\\\\3xFpzqHVqgBFv_LUBKsB3\\\\client\\\\components\\\\MapComponent.jsx\",\n            lineNumber: 16,\n            columnNumber: 8\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\input-output\\\\3xFpzqHVqgBFv_LUBKsB3\\\\client\\\\components\\\\MapComponent.jsx\",\n        lineNumber: 15,\n        columnNumber: 4\n    }, this);\n};\n_c1 = MapComponent;\nvar _c, _c1;\n$RefreshReg$(_c, \"MyComponent\");\n$RefreshReg$(_c1, \"MapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcENvbXBvbmVudC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStFO0FBQ3ZEO0FBQ0U7QUFDUTs7QUFDbENPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUVsQixTQUFTQyxXQUFXLEdBQUc7O0lBQ25CLElBQU1DLEdBQUcsR0FBR1IscURBQU0sRUFBRTtJQUNwQkssT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxFQUFFRSxHQUFHLENBQUNDLFNBQVMsRUFBRSxDQUFDO0lBQzNDLE9BQU8sSUFBSTtDQUNaO0dBSk1GLFdBQVc7O1FBQ0pQLGlEQUFNOzs7QUFEYk8sS0FBQUEsV0FBVztBQU1MLFNBQVNHLFlBQVksR0FBRztJQUNyQyxxQkFDQyw4REFBQ1osdURBQVk7UUFBQ2EsTUFBTSxFQUFFO0FBQUMsZ0JBQUk7QUFBRyxnQkFBSTtTQUFDO2tCQUMvQiw0RUFBQ0osV0FBVzs7OztnQkFBRzs7Ozs7WUFDSixDQUNkO0NBQ0g7QUFOdUJHLE1BQUFBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBDb21wb25lbnQuanN4PzYyNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwQ29udGFpbmVyLCBUaWxlTGF5ZXIsIHVzZU1hcCwgTWFya2VyLCBQb3B1cCB9IGZyb20gXCJyZWFjdC1sZWFmbGV0XCI7XHJcbmltcG9ydCBMIGZyb20gXCJsZWFmbGV0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwibGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzXCI7XHJcbmNvbnNvbGUubG9nKCdydW4nKSBcclxuXHJcbmZ1bmN0aW9uIE15Q29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgbWFwID0gdXNlTWFwKClcclxuICAgIGNvbnNvbGUubG9nKCdtYXAgY2VudGVyOicsIG1hcC5nZXRDZW50ZXIoKSlcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwQ29tcG9uZW50KCkge1xyXG4gIHJldHVybiAoXHJcbiAgIDxNYXBDb250YWluZXIgY2VudGVyPXtbNTAuNSAsIDMwLjVdfSA+XHJcbiAgICAgICA8TXlDb21wb25lbnQgLz5cclxuICAgPC9NYXBDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTWFwQ29udGFpbmVyIiwiVGlsZUxheWVyIiwidXNlTWFwIiwiTWFya2VyIiwiUG9wdXAiLCJMIiwiUmVhY3QiLCJjb25zb2xlIiwibG9nIiwiTXlDb21wb25lbnQiLCJtYXAiLCJnZXRDZW50ZXIiLCJNYXBDb21wb25lbnQiLCJjZW50ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MapComponent.jsx\n");

/***/ })

});