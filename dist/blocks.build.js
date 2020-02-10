/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! exports provided: icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export icon */\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__ = __webpack_require__(/*! @wordpress/i18n */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_blocks__ = __webpack_require__(/*! @wordpress/blocks */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_blocks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_blocks__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit__ = __webpack_require__(/*! ./edit */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__save__ = __webpack_require__(/*! ./save */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_scss__);\n/**\n * External dependencies\n */\n\n\n\n\n/**\n * Internal dependencies\n */\n\n\n\n\nvar icon = wp.element.createElement(\n\t__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"SVG\"],\n\t{ xmlns: 'http://www.w3.org/2000/svg', 'enable-background': 'new 0 0 24 24', height: '24', viewBox: '0 0 24 24', width: '24' },\n\twp.element.createElement(\n\t\t__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"G\"],\n\t\tnull,\n\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"Rect\"], { fill: 'none', height: '24', width: '24', x: '0' })\n\t),\n\twp.element.createElement(\n\t\t__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"G\"],\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\t__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"G\"],\n\t\t\tnull,\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"Rect\"], { height: '6', width: '1.5', x: '11.5', y: '9' }),\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"Path\"], { d: 'M9,9H6c-0.6,0-1,0.5-1,1v4c0,0.5,0.4,1,1,1h3c0.6,0,1-0.5,1-1v-2H8.5v1.5h-2v-3H10V10C10,9.5,9.6,9,9,9z' }),\n\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__[\"Polygon\"], { points: '19,10.5 19,9 14.5,9 14.5,15 16,15 16,13 18,13 18,11.5 16,11.5 16,10.5' })\n\t\t)\n\t)\n);\n\n/**\n * Register Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\nObject(__WEBPACK_IMPORTED_MODULE_2__wordpress_blocks__[\"registerBlockType\"])('danhauk/random-gif-block', {\n\ttitle: Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('Random GIF'),\n\ticon: icon,\n\tcategory: 'common',\n\tkeywords: [Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('gif'), Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('giphy'), Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__[\"__\"])('image')],\n\n\tattributes: {\n\t\tapiKey: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tgiphyUrl: {\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\n\tedit: __WEBPACK_IMPORTED_MODULE_3__edit__[\"a\" /* default */],\n\tsave: __WEBPACK_IMPORTED_MODULE_4__save__[\"a\" /* default */]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXh0ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCB7IF9fIH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcbmltcG9ydCB7IFNWRywgRywgUmVjdCwgUGF0aCwgUG9seWdvbiB9IGZyb20gJ0B3b3JkcHJlc3MvY29tcG9uZW50cyc7XG5pbXBvcnQgeyByZWdpc3RlckJsb2NrVHlwZSB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2tzJztcblxuLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmV4cG9ydCB2YXIgaWNvbiA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0U1ZHLFxuXHR7IHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZW5hYmxlLWJhY2tncm91bmQnOiAnbmV3IDAgMCAyNCAyNCcsIGhlaWdodDogJzI0Jywgdmlld0JveDogJzAgMCAyNCAyNCcsIHdpZHRoOiAnMjQnIH0sXG5cdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRHLFxuXHRcdG51bGwsXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJlY3QsIHsgZmlsbDogJ25vbmUnLCBoZWlnaHQ6ICcyNCcsIHdpZHRoOiAnMjQnLCB4OiAnMCcgfSlcblx0KSxcblx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdEcsXG5cdFx0bnVsbCxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRHLFxuXHRcdFx0bnVsbCxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSZWN0LCB7IGhlaWdodDogJzYnLCB3aWR0aDogJzEuNScsIHg6ICcxMS41JywgeTogJzknIH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBhdGgsIHsgZDogJ005LDlINmMtMC42LDAtMSwwLjUtMSwxdjRjMCwwLjUsMC40LDEsMSwxaDNjMC42LDAsMS0wLjUsMS0xdi0ySDguNXYxLjVoLTJ2LTNIMTBWMTBDMTAsOS41LDkuNiw5LDksOXonIH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBvbHlnb24sIHsgcG9pbnRzOiAnMTksMTAuNSAxOSw5IDE0LjUsOSAxNC41LDE1IDE2LDE1IDE2LDEzIDE4LDEzIDE4LDExLjUgMTYsMTEuNSAxNiwxMC41JyB9KVxuXHRcdClcblx0KVxuKTtcblxuLyoqXG4gKiBSZWdpc3RlciBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xucmVnaXN0ZXJCbG9ja1R5cGUoJ2RhbmhhdWsvcmFuZG9tLWdpZi1ibG9jaycsIHtcblx0dGl0bGU6IF9fKCdSYW5kb20gR0lGJyksXG5cdGljb246IGljb24sXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0a2V5d29yZHM6IFtfXygnZ2lmJyksIF9fKCdnaXBoeScpLCBfXygnaW1hZ2UnKV0sXG5cblx0YXR0cmlidXRlczoge1xuXHRcdGFwaUtleToge1xuXHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHR9LFxuXHRcdGdpcGh5VXJsOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH1cblx0fSxcblxuXHRlZGl0OiBlZGl0LFxuXHRzYXZlOiBzYXZlXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */,
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */,
/* 5 */
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/*! dynamic exports provided */
/*! exports used: __ */
/***/ (function(module, exports) {

module.exports = wp.i18n;

/***/ }),
/* 6 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: G, Path, Polygon, Rect, SVG */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),
/* 7 */
/*!*****************************!*\
  !*** external "wp.element" ***!
  \*****************************/
/*! dynamic exports provided */
/*! exports used: Component, createRef */
/***/ (function(module, exports) {

module.exports = wp.element;

/***/ }),
/* 8 */
/*!***************************!*\
  !*** ./src/block/edit.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__ = __webpack_require__(/*! @wordpress/i18n */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_element__ = __webpack_require__(/*! @wordpress/element */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_element__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * External dependencies\n */\n\n\n\nvar GIPHY_API_KEY = 'NhhRs0qhtbib0fq39VbKNVXdjpM1ZmGO';\n\nvar RandomGifEdit = function (_Component) {\n\t_inherits(RandomGifEdit, _Component);\n\n\tfunction RandomGifEdit() {\n\t\tvar _ref;\n\n\t\tvar _temp, _this, _ret;\n\n\t\t_classCallCheck(this, RandomGifEdit);\n\n\t\tfor (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n\t\t\targs[_key] = arguments[_key];\n\t\t}\n\n\t\treturn _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RandomGifEdit.__proto__ || Object.getPrototypeOf(RandomGifEdit)).call.apply(_ref, [this].concat(args))), _this), _this.textControlRef = Object(__WEBPACK_IMPORTED_MODULE_1__wordpress_element__[\"createRef\"])(), _this.state = {\n\t\t\tresult: null\n\t\t}, _this.getRandomGifUrl = function () {\n\t\t\tvar url = 'https://api.giphy.com/v1/gifs/random?rating=g&apiKey=' + GIPHY_API_KEY;\n\n\t\t\tvar xhr = new XMLHttpRequest();\n\t\t\txhr.open('GET', url);\n\t\t\txhr.onload = function () {\n\t\t\t\tif (xhr.status === 200) {\n\t\t\t\t\tvar res = JSON.parse(xhr.responseText);\n\t\t\t\t\tvar result = res.data;\n\t\t\t\t\t_this.selectGif(result);\n\t\t\t\t} else {\n\t\t\t\t\t_this.setState({\n\t\t\t\t\t\tresult: 'There was a problem getting a gif. Try again.'\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t};\n\n\t\t\txhr.send();\n\t\t}, _this.selectGif = function (randomGif) {\n\t\t\tvar setAttributes = _this.props.setAttributes;\n\n\t\t\tvar giphyUrl = randomGif.embed_url;\n\n\t\t\tsetAttributes({ giphyUrl: giphyUrl });\n\t\t}, _temp), _possibleConstructorReturn(_this, _ret);\n\t}\n\n\t_createClass(RandomGifEdit, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _props = this.props,\n\t\t\t    attributes = _props.attributes,\n\t\t\t    setAttributes = _props.setAttributes;\n\n\n\t\t\tif (!attributes.giphyUrl) {\n\t\t\t\tthis.getRandomGifUrl();\n\t\t\t}\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\tattributes.giphyUrl && wp.element.createElement('iframe', { src: attributes.giphyUrl })\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn RandomGifEdit;\n}(__WEBPACK_IMPORTED_MODULE_1__wordpress_element__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (RandomGifEdit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0LmpzPzNmZTEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIEV4dGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBfXyB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5pbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZVJlZiB9IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCc7XG5cbnZhciBHSVBIWV9BUElfS0VZID0gJ05oaFJzMHFodGJpYjBmcTM5VmJLTlZYZGpwTTFabUdPJztcblxudmFyIFJhbmRvbUdpZkVkaXQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoUmFuZG9tR2lmRWRpdCwgX0NvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gUmFuZG9tR2lmRWRpdCgpIHtcblx0XHR2YXIgX3JlZjtcblxuXHRcdHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmFuZG9tR2lmRWRpdCk7XG5cblx0XHRmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuXHRcdFx0YXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gUmFuZG9tR2lmRWRpdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJhbmRvbUdpZkVkaXQpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy50ZXh0Q29udHJvbFJlZiA9IGNyZWF0ZVJlZigpLCBfdGhpcy5zdGF0ZSA9IHtcblx0XHRcdHJlc3VsdDogbnVsbFxuXHRcdH0sIF90aGlzLmdldFJhbmRvbUdpZlVybCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciB1cmwgPSAnaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvcmFuZG9tP3JhdGluZz1nJmFwaUtleT0nICsgR0lQSFlfQVBJX0tFWTtcblxuXHRcdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdFx0eGhyLm9wZW4oJ0dFVCcsIHVybCk7XG5cdFx0XHR4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0dmFyIHJlcyA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG5cdFx0XHRcdFx0dmFyIHJlc3VsdCA9IHJlcy5kYXRhO1xuXHRcdFx0XHRcdF90aGlzLnNlbGVjdEdpZihyZXN1bHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdF90aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdHJlc3VsdDogJ1RoZXJlIHdhcyBhIHByb2JsZW0gZ2V0dGluZyBhIGdpZi4gVHJ5IGFnYWluLidcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0eGhyLnNlbmQoKTtcblx0XHR9LCBfdGhpcy5zZWxlY3RHaWYgPSBmdW5jdGlvbiAocmFuZG9tR2lmKSB7XG5cdFx0XHR2YXIgc2V0QXR0cmlidXRlcyA9IF90aGlzLnByb3BzLnNldEF0dHJpYnV0ZXM7XG5cblx0XHRcdHZhciBnaXBoeVVybCA9IHJhbmRvbUdpZi5lbWJlZF91cmw7XG5cblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBnaXBoeVVybDogZ2lwaHlVcmwgfSk7XG5cdFx0fSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoUmFuZG9tR2lmRWRpdCwgW3tcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcblx0XHRcdCAgICBhdHRyaWJ1dGVzID0gX3Byb3BzLmF0dHJpYnV0ZXMsXG5cdFx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9wcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG5cblx0XHRcdGlmICghYXR0cmlidXRlcy5naXBoeVVybCkge1xuXHRcdFx0XHR0aGlzLmdldFJhbmRvbUdpZlVybCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0YXR0cmlidXRlcy5naXBoeVVybCAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScsIHsgc3JjOiBhdHRyaWJ1dGVzLmdpcGh5VXJsIH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBSYW5kb21HaWZFZGl0O1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBSYW5kb21HaWZFZGl0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2VkaXQuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!***************************!*\
  !*** ./src/block/save.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_element__ = __webpack_require__(/*! @wordpress/element */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_element__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * WordPress dependencies\n */\n\n\nvar RandomGifSave = function (_Component) {\n\t_inherits(RandomGifSave, _Component);\n\n\tfunction RandomGifSave() {\n\t\t_classCallCheck(this, RandomGifSave);\n\n\t\treturn _possibleConstructorReturn(this, (RandomGifSave.__proto__ || Object.getPrototypeOf(RandomGifSave)).apply(this, arguments));\n\t}\n\n\t_createClass(RandomGifSave, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar attributes = this.props.attributes;\n\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\tattributes.giphyUrl && wp.element.createElement('iframe', { src: attributes.giphyUrl })\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn RandomGifSave;\n}(__WEBPACK_IMPORTED_MODULE_0__wordpress_element__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (RandomGifSave);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zYXZlLmpzP2M0ZDQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50JztcblxudmFyIFJhbmRvbUdpZlNhdmUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoUmFuZG9tR2lmU2F2ZSwgX0NvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gUmFuZG9tR2lmU2F2ZSgpIHtcblx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmFuZG9tR2lmU2F2ZSk7XG5cblx0XHRyZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJhbmRvbUdpZlNhdmUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSYW5kb21HaWZTYXZlKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoUmFuZG9tR2lmU2F2ZSwgW3tcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgYXR0cmlidXRlcyA9IHRoaXMucHJvcHMuYXR0cmlidXRlcztcblxuXG5cdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0YXR0cmlidXRlcy5naXBoeVVybCAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScsIHsgc3JjOiBhdHRyaWJ1dGVzLmdpcGh5VXJsIH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBSYW5kb21HaWZTYXZlO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBSYW5kb21HaWZTYXZlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL3NhdmUuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!****************************!*\
  !*** external "wp.blocks" ***!
  \****************************/
/*! dynamic exports provided */
/*! exports used: registerBlockType */
/***/ (function(module, exports) {

module.exports = wp.blocks;

/***/ })
/******/ ]);