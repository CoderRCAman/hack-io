"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_middleware",{

/***/ "(middleware)/./pages/_middleware.js":
/*!******************************!*\
  !*** ./pages/_middleware.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"(middleware)/./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction middleware(req) {\n    const { cookies  } = req;\n    console.log(req);\n    if (lodash__WEBPACK_IMPORTED_MODULE_1___default().isEmpty(cookies)) {\n        next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(\"/login\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vcGFnZXMvX21pZGRsZXdhcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDZjtBQUNWLFNBQVNFLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFO0lBQ3BDLE1BQU0sRUFBQ0MsT0FBTyxHQUFDLEdBQUdELEdBQUc7SUFDckJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUMsQ0FBRTtJQUNsQixJQUFHRixxREFBUyxDQUFDRyxPQUFPLENBQUMsRUFBQztRQUNsQkosOERBQXFCLENBQUMsUUFBUSxDQUFDLENBQUU7S0FDcEM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fbWlkZGxld2FyZS5qcz81MzNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dFJlc3BvbnNlfSBmcm9tICduZXh0L3NlcnZlcicgXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCcgIDsgXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxKSB7XHJcbiAgICBjb25zdCB7Y29va2llc30gPSByZXEgOyAgXHJcbiAgICBjb25zb2xlLmxvZyhyZXEpIDtcclxuICAgIGlmKF8uaXNFbXB0eShjb29raWVzKSl7XHJcbiAgICAgICAgTmV4dFJlc3BvbnNlLnJlZGlyZWN0KCcvbG9naW4nKSA7ICBcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJfIiwibWlkZGxld2FyZSIsInJlcSIsImNvb2tpZXMiLCJjb25zb2xlIiwibG9nIiwiaXNFbXB0eSIsInJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./pages/_middleware.js\n");

/***/ })

});