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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/server.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"(middleware)/./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction middleware(req) {\n    const { cookies , page  } = req;\n    console.log(cookies);\n    const clientApi = \"http://localhost:3000\";\n    if (page.toRedirect && page.name !== \"/login\" && page.name !== \"/signup\") {\n        const toRedirect = page.toRedirect;\n        next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(`${clientApi}/${toRedirect}`);\n    }\n    if (lodash__WEBPACK_IMPORTED_MODULE_1___default().isEmpty(cookies) || !cookies.isLoggedIn) {\n        console.log(\"aks\");\n        page.redirectTo = page.name;\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(`${clientApi}/login`);\n    }\n//rest will be dependent on which route to and if that is a valid one \n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vcGFnZXMvX21pZGRsZXdhcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDZjtBQUNWLFNBQVNFLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFO0lBQ3BDLE1BQU0sRUFBQ0MsT0FBTyxHQUFDQyxJQUFJLEdBQUMsR0FBR0YsR0FBRztJQUMxQkcsT0FBTyxDQUFDQyxHQUFHLENBQUNILE9BQU8sQ0FBQztJQUNwQixNQUFNSSxTQUFTLEdBQUcsdUJBQXVCO0lBQ3pDLElBQUdILElBQUksQ0FBQ0ksVUFBVSxJQUFLSixJQUFJLENBQUNLLElBQUksS0FBRyxRQUFRLElBQUlMLElBQUksQ0FBQ0ssSUFBSSxLQUFHLFNBQVMsRUFBRztRQUNwRSxNQUFNRCxVQUFVLEdBQUdKLElBQUksQ0FBQ0ksVUFBVTtRQUNsQ1QsOERBQXFCLENBQUMsQ0FBQyxFQUFFUSxTQUFTLENBQUMsQ0FBQyxFQUFFQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0tBQ3JEO0lBQ0QsSUFBR1IscURBQVMsQ0FBQ0csT0FBTyxDQUFDLElBQUksQ0FBQ0EsT0FBTyxDQUFDUyxVQUFVLEVBQUM7UUFDekNQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CRixJQUFJLENBQUNTLFVBQVUsR0FBR1QsSUFBSSxDQUFDSyxJQUFJO1FBQzVCLE9BQVFWLDhEQUFxQixDQUFDLENBQUMsRUFBRVEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUU7S0FDdkQ7QUFDRixzRUFBc0U7Q0FFeEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX21pZGRsZXdhcmUuanM/NTMzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05leHRSZXNwb25zZX0gZnJvbSAnbmV4dC9zZXJ2ZXInIFxyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnICA7IFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcSkge1xyXG4gICAgY29uc3Qge2Nvb2tpZXMscGFnZX0gPSByZXEgOyAgIFxyXG4gICAgY29uc29sZS5sb2coY29va2llcylcclxuICAgIGNvbnN0IGNsaWVudEFwaSA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnIDsgIFxyXG4gICAgaWYocGFnZS50b1JlZGlyZWN0ICYmIChwYWdlLm5hbWUhPT0nL2xvZ2luJyAmJiBwYWdlLm5hbWUhPT0nL3NpZ251cCcpKSB7XHJcbiAgICAgICBjb25zdCB0b1JlZGlyZWN0ID0gcGFnZS50b1JlZGlyZWN0IDsgXHJcbiAgICAgICBOZXh0UmVzcG9uc2UucmVkaXJlY3QoYCR7Y2xpZW50QXBpfS8ke3RvUmVkaXJlY3R9YClcclxuICAgIH1cclxuICAgIGlmKF8uaXNFbXB0eShjb29raWVzKSB8fCAhY29va2llcy5pc0xvZ2dlZEluKXsgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdha3MnKTtcclxuICAgICAgICBwYWdlLnJlZGlyZWN0VG8gPSBwYWdlLm5hbWUgXHJcbiAgICAgICByZXR1cm4gIE5leHRSZXNwb25zZS5yZWRpcmVjdChgJHtjbGllbnRBcGl9L2xvZ2luYCkgOyAgXHJcbiAgICB9IFxyXG4gICAvL3Jlc3Qgd2lsbCBiZSBkZXBlbmRlbnQgb24gd2hpY2ggcm91dGUgdG8gYW5kIGlmIHRoYXQgaXMgYSB2YWxpZCBvbmUgXHJcbiBcclxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJfIiwibWlkZGxld2FyZSIsInJlcSIsImNvb2tpZXMiLCJwYWdlIiwiY29uc29sZSIsImxvZyIsImNsaWVudEFwaSIsInRvUmVkaXJlY3QiLCJuYW1lIiwicmVkaXJlY3QiLCJpc0VtcHR5IiwiaXNMb2dnZWRJbiIsInJlZGlyZWN0VG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./pages/_middleware.js\n");

/***/ })

});