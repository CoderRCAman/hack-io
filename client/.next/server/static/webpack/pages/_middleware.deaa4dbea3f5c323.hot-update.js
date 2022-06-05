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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"(middleware)/./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction middleware(req) {\n    const { cookies , page  } = req;\n    console.log(req);\n    if (lodash__WEBPACK_IMPORTED_MODULE_1___default().isEmpty(cookies)) {\n        page.redirectTo = page.name;\n        next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(\"http://localhost:3000/login\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vcGFnZXMvX21pZGRsZXdhcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDZjtBQUNWLFNBQVNFLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFO0lBQ3BDLE1BQU0sRUFBQ0MsT0FBTyxHQUFDQyxJQUFJLEdBQUMsR0FBR0YsR0FBRztJQUMxQkcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEdBQUcsQ0FBQyxDQUFFO0lBQ2xCLElBQUdGLHFEQUFTLENBQUNHLE9BQU8sQ0FBQyxFQUFDO1FBQ2xCQyxJQUFJLENBQUNJLFVBQVUsR0FBR0osSUFBSSxDQUFDSyxJQUFJO1FBQzNCViw4REFBcUIsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFFO0tBQ3pEO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX21pZGRsZXdhcmUuanM/NTMzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05leHRSZXNwb25zZX0gZnJvbSAnbmV4dC9zZXJ2ZXInIFxyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnICA7IFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcSkge1xyXG4gICAgY29uc3Qge2Nvb2tpZXMscGFnZX0gPSByZXEgOyAgXHJcbiAgICBjb25zb2xlLmxvZyhyZXEpIDtcclxuICAgIGlmKF8uaXNFbXB0eShjb29raWVzKSl7IFxyXG4gICAgICAgIHBhZ2UucmVkaXJlY3RUbyA9IHBhZ2UubmFtZSBcclxuICAgICAgICBOZXh0UmVzcG9uc2UucmVkaXJlY3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbicpIDsgIFxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIl8iLCJtaWRkbGV3YXJlIiwicmVxIiwiY29va2llcyIsInBhZ2UiLCJjb25zb2xlIiwibG9nIiwiaXNFbXB0eSIsInJlZGlyZWN0VG8iLCJuYW1lIiwicmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./pages/_middleware.js\n");

/***/ })

});