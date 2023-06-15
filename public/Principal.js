/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/estilos.css":
/*!************************************!*\
  !*** ./src/assets/css/estilos.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://stack-webpack/./src/assets/css/estilos.css?");

/***/ }),

/***/ "./src/assets/scss/index.scss":
/*!************************************!*\
  !*** ./src/assets/scss/index.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://stack-webpack/./src/assets/scss/index.scss?");

/***/ }),

/***/ "./src/Pessoa.js":
/*!***********************!*\
  !*** ./src/Pessoa.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pessoa)\n/* harmony export */ });\nclass Pessoa {\r\n    cumprimentar(){\r\n        return 'Bom dia'\r\n    }\r\n}\n\n//# sourceURL=webpack://stack-webpack/./src/Pessoa.js?");

/***/ }),

/***/ "./src/Principal.js":
/*!**************************!*\
  !*** ./src/Principal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pessoa */ \"./src/Pessoa.js\");\n/* harmony import */ var _modules_ModuloA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ModuloA */ \"./src/modules/ModuloA.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets */ \"./src/assets/index.js\");\n\r\n\r\n\r\n// const Pessoa = require('./Pessoa')\r\n\r\nconst atendente = new _Pessoa__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\nconsole.log(atendente.cumprimentar())\n\n//# sourceURL=webpack://stack-webpack/./src/Principal.js?");

/***/ }),

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_estilos_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/estilos.css */ \"./src/assets/css/estilos.css\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/assets/scss/index.scss\");\n\r\n\n\n//# sourceURL=webpack://stack-webpack/./src/assets/index.js?");

/***/ }),

/***/ "./src/modules/ModuloA.js":
/*!********************************!*\
  !*** ./src/modules/ModuloA.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ModuloB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModuloB */ \"./src/modules/ModuloB.js\");\n/* harmony import */ var _ModuloB__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ModuloB__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconsole.log(_ModuloB__WEBPACK_IMPORTED_MODULE_0___default().saudacao())\n\n//# sourceURL=webpack://stack-webpack/./src/modules/ModuloA.js?");

/***/ }),

/***/ "./src/modules/ModuloB.js":
/*!********************************!*\
  !*** ./src/modules/ModuloB.js ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = {\r\n    saudacao() { return 'Olá mundo, sou o B!!' }\r\n}\n\n//# sourceURL=webpack://stack-webpack/./src/modules/ModuloB.js?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Principal.js");
/******/ 	
/******/ })()
;