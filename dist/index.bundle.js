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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction log(_val) {\n  console.log(_val);\n}\n\nfunction ButtonHello() {\n  function clickBtn() {\n    alert('Hello Quan');\n  }\n\n  return React.createElement(\"button\", {\n    onClick: clickBtn\n  }, \"Say hello\");\n}\n\nvar CounterButton =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _inherits(CounterButton, _React$PureComponent);\n\n  //React.Component\n  function CounterButton(props) {\n    var _this;\n\n    _classCallCheck(this, CounterButton);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(CounterButton).call(this, props));\n    _this.state = {\n      count: 1\n    };\n    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  } // shouldComponentUpdate(nextProps, nextState) {\n  //   if (this.props.color !== nextProps.color) {\n  //     return true;\n  //   }\n  //   if (this.state.count !== nextState.count) {\n  //     return true;\n  //   }\n  //   return false;\n  // }\n\n\n  _createClass(CounterButton, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      this.setState({\n        count: this.state.count + 1\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"button\", {\n        color: this.props.color,\n        onClick: handleClick\n      }, \"Count: \", this.state.count);\n    }\n  }]);\n\n  return CounterButton;\n}(React.PureComponent);\n\nvar ListOfWords =\n/*#__PURE__*/\nfunction (_React$PureComponent2) {\n  _inherits(ListOfWords, _React$PureComponent2);\n\n  function ListOfWords() {\n    _classCallCheck(this, ListOfWords);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ListOfWords).apply(this, arguments));\n  }\n\n  _createClass(ListOfWords, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, this.props.words.join(','));\n    }\n  }]);\n\n  return ListOfWords;\n}(React.PureComponent);\n\nvar WordAdder =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(WordAdder, _React$Component);\n\n  function WordAdder(props) {\n    var _this2;\n\n    _classCallCheck(this, WordAdder);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(WordAdder).call(this, props));\n    _this2.state = {\n      words: ['marklar']\n    };\n    _this2.handleClick = _this2.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this2)));\n    return _this2;\n  }\n\n  _createClass(WordAdder, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      // This section is bad style and causes a bug\n      var words = this.state.words;\n      words.push('marklar');\n      this.setState({\n        words: words\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(\"button\", {\n        onClick: this.handleClick\n      }, \"Click\"), React.createElement(ListOfWords, {\n        words: this.state.words\n      }));\n    }\n  }]);\n\n  return WordAdder;\n}(React.Component);\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(App, _React$Component2);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(ButtonHello, null), React.createElement(\"p\", null, \"---------------------------------\"), React.createElement(CounterButton, null), React.createElement(\"p\", null, \"---------------------------------\"), React.createElement(WordAdder, null));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });