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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toy_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react.js */ \"./toy-react.js\");\n\n\nclass MyComponent extends _toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super(); //调用component构造函数\n\n    this.state = {\n      a: 1,\n      b: 2\n    };\n  }\n\n  render() {\n    return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"h1\", null, \"my Component\"), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"button\", {\n      onclick: () => {\n        this.setState({\n          a: this.state.a + 1\n        });\n      }\n    }, \"add\"), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"span\", null, this.state.a.toString()), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"span\", null, this.state.b.toString()));\n  }\n\n} // 全局暴露的render方法\n// jsx <MyComponent/>会被babel转为函数createElement，最终变为 render( createElement(x,{},..), body )\n\n\nObject(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(MyComponent, {\n  id: \"a\",\n  class: \"c\"\n}, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, \"asdiu\"), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null)), document.body); // ==> document.body.appenChild(component.root)\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./toy-react.js":
/*!**********************!*\
  !*** ./toy-react.js ***!
  \**********************/
/*! exports provided: Component, createElement, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n// 16:05\nconst RENDER_TO_DOM = Symbol('render to dom'); // 包装类，用于给元素加一层wrapper， 为了实现setAttribute方法 和 appendChild方法\n\nclass ElementWrapper {\n  constructor(type) {\n    // 把我们创建的实体DOM放到一个属性上\n    this.root = document.createElement(type); // 真实的dom对象\n  }\n\n  setAttribute(name, value) {\n    // 表示所有字符\n    if (name.match(/^on([\\s\\S]+)$/)) {\n      //                                     第一个字母onxx都改成小写的\n      this.root.addEventListener(RegExp.$1.replace(/^[\\s\\S]/, c => c.toLowerCase()), value);\n    } else {\n      this.root.setAttribute(name, value);\n    }\n  }\n\n  appendChild(component) {\n    let range = document.createRange();\n    range.setStart(this.root, this.root.childNodes.length); // 最后一个子元素\n\n    range.setEnd(this.root, this.root.childNodes.length);\n    component[RENDER_TO_DOM](range);\n  }\n\n  [RENDER_TO_DOM](range) {\n    range.deleteContents();\n    range.insertNode(this.root);\n  }\n\n} // 包装类，给文本节点添加一个wrapper\n\n\nclass TextWrapper {\n  constructor(content) {\n    this.root = document.createTextNode(content); // 真实的DOM对象\n  }\n\n  [RENDER_TO_DOM](range) {\n    range.deleteContents();\n    range.insertNode(this.root);\n  }\n\n}\n\nclass Component {\n  constructor() {\n    this.props = Object.create(null);\n    this.children = [];\n    this._root = null; // \n\n    this._range = null;\n  }\n\n  setAttribute(name, value) {\n    this.props[name] = value;\n  }\n\n  appendChild(component) {\n    this.children.push(component);\n  }\n\n  [RENDER_TO_DOM](range) {\n    this._range = range;\n    this.render()[RENDER_TO_DOM](range); // 会递归直到找到真正的dom节点\n  }\n\n  rerender() {\n    this._range.deleteContents();\n\n    this[RENDER_TO_DOM](this._range);\n  }\n\n  setState(newState) {\n    if (this.state === null || typeof this.state !== 'object') {\n      this.state = newState;\n      this.rerender();\n      return;\n    } // 深拷贝\n\n\n    let merge = (oldState, newState) => {\n      for (let p in newState) {\n        if (oldState[p] === null || typeof oldState[p] !== 'object') {\n          oldState[p] = newState[p];\n        } else {\n          merge(oldState[p], newState[p]);\n        }\n      }\n    };\n\n    merge(this.state, newState);\n    this.rerender();\n  }\n\n} // Component的render方法最终会调用createElement 返回 createElement的返回值\n\nfunction createElement(type, attributes, ...children) {\n  // createElement 返回的是一个wrapper对象，Component或者ElementWrapper\n  let e;\n\n  if (typeof type === 'string') {\n    // 如果是一个普通的元素\n    e = new ElementWrapper(type);\n  } else {\n    // 如果是一个类\n    e = new type();\n  }\n\n  for (let p in attributes) {\n    e.setAttribute(p, attributes[p]);\n  }\n\n  let insertChildren = children => {\n    for (let child of children) {\n      if (typeof child === 'string') {\n        child = new TextWrapper(child);\n      }\n\n      if (typeof child === 'object' && child instanceof Array) {\n        insertChildren(child);\n      } else {\n        e.appendChild(child);\n      }\n    }\n  };\n\n  insertChildren(children);\n  return e;\n} // 全局的render方法 window.render （ 两个参数，第二个参数是要被挂载的节点，第一个参数是component\n\nfunction render(component, parentElement) {\n  // 先创建range\n  let range = document.createRange();\n  range.setStart(parentElement, 0); // 0th child of parentElement\n\n  range.setEnd(parentElement, parentElement.childNodes.length);\n  range.deleteContents(); // 删除了parentElement之间的内容，\n\n  component[RENDER_TO_DOM](range); // 调用了component的 RENDER_TO_DOM 方法, 并传入range\n}\n\n//# sourceURL=webpack:///./toy-react.js?");

/***/ })

/******/ });