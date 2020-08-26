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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toy_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react.js */ \"./toy-react.js\");\n\n\nclass Square extends _toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"button\", {\n      className: \"square\",\n      onClick: this.props.onClick\n    }, this.props.value);\n  }\n\n}\n\nclass Board extends _toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  renderSquare(i) {\n    return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Square, {\n      value: this.props.squares[i],\n      onClick: () => this.props.onClick(i)\n    });\n  }\n\n  render() {\n    return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: \"board-row\"\n    }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: \"board-row\"\n    }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: \"board-row\"\n    }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));\n  }\n\n}\n\nclass Game extends _toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      history: [{\n        squares: Array(9).fill(null)\n      }],\n      stepNumber: 0,\n      xIsNext: true\n    };\n  }\n\n  handleClick(i) {\n    const history = this.state.history.slice(0, this.state.stepNumber + 1);\n    const current = history[history.length - 1];\n    const squares = current.squares.slice();\n\n    if (calculateWinner(squares) || squares[i]) {\n      return;\n    }\n\n    squares[i] = this.state.xIsNext ? \"X\" : \"O\";\n    this.setState({\n      history: history.concat([{\n        squares: squares\n      }]),\n      stepNumber: history.length,\n      xIsNext: !this.state.xIsNext\n    });\n  }\n\n  jumpTo(step) {\n    this.setState({\n      stepNumber: step,\n      xIsNext: step % 2 === 0\n    });\n  }\n\n  render() {\n    const history = this.state.history;\n    const current = history[this.state.stepNumber];\n    const winner = calculateWinner(current.squares);\n    const moves = history.map((step, move) => {\n      const desc = move ? 'Go to move #' + move : 'Go to game start';\n      return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"li\", {\n        key: move\n      }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"button\", {\n        onClick: () => this.jumpTo(move)\n      }, desc));\n    });\n    let status;\n\n    if (winner) {\n      status = \"Winner: \" + winner;\n    } else {\n      status = \"Next player: \" + (this.state.xIsNext ? \"X\" : \"O\");\n    }\n\n    return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: \"game\"\n    }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: \"game-board\"\n    }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Board, {\n      squares: current.squares,\n      onClick: i => this.handleClick(i)\n    })), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: \"game-info\"\n    }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, status), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"ol\", null, moves)));\n  }\n\n} // ========================================\n\n\nObject(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Game, null), document.getElementById(\"root\"));\n\nfunction calculateWinner(squares) {\n  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];\n\n  for (let i = 0; i < lines.length; i++) {\n    const [a, b, c] = lines[i];\n\n    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {\n      return squares[a];\n    }\n  }\n\n  return null;\n}\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./toy-react.js":
/*!**********************!*\
  !*** ./toy-react.js ***!
  \**********************/
/*! exports provided: Component, createElement, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n// 16:05\nconst RENDER_TO_DOM = Symbol('render to dom'); // 包装类，用于给元素加一层wrapper， 为了实现setAttribute方法 和 appendChild方法\n\nclass ElementWrapper {\n  constructor(type) {\n    // 把我们创建的实体DOM放到一个属性上\n    this.root = document.createElement(type); // 真实的dom对象\n  }\n\n  setAttribute(name, value) {\n    // 表示所有字符\n    if (name.match(/^on([\\s\\S]+)$/)) {\n      //                                     第一个字母onxx都改成小写的\n      this.root.addEventListener(RegExp.$1.replace(/^[\\s\\S]/, c => c.toLowerCase()), value);\n    } else {\n      if (name === 'className') {\n        this.root.setAttribute('class', value);\n      } else {\n        this.root.setAttribute(name, value);\n      }\n    }\n  }\n\n  appendChild(component) {\n    let range = document.createRange();\n    range.setStart(this.root, this.root.childNodes.length); // 最后一个子元素\n\n    range.setEnd(this.root, this.root.childNodes.length);\n    component[RENDER_TO_DOM](range);\n  }\n\n  [RENDER_TO_DOM](range) {\n    range.deleteContents();\n    range.insertNode(this.root);\n  }\n\n} // 包装类，给文本节点添加一个wrapper\n\n\nclass TextWrapper {\n  constructor(content) {\n    this.root = document.createTextNode(content); // 真实的DOM对象\n  }\n\n  [RENDER_TO_DOM](range) {\n    range.deleteContents();\n    range.insertNode(this.root);\n  }\n\n}\n\nclass Component {\n  constructor() {\n    this.props = Object.create(null);\n    this.children = [];\n    this._root = null; // \n\n    this._range = null;\n  }\n\n  setAttribute(name, value) {\n    this.props[name] = value;\n  }\n\n  appendChild(component) {\n    this.children.push(component);\n  }\n\n  [RENDER_TO_DOM](range) {\n    this._range = range;\n    this.render()[RENDER_TO_DOM](range); // 会递归直到找到真正的dom节点\n  }\n\n  rerender() {\n    // 保存老的range\n    let oldRange = this._range; // 设置新的range，放在老的range的start的位置\n\n    let range = document.createRange();\n    range.setStart(this._range.startContainer, this._range.startOffset);\n    range.setEnd(this._range.startContainer, this._range.startOffset); // 起点终点一样\n\n    this[RENDER_TO_DOM](range); // 完成插入后，把老的range的start挪到插入的内容之后，再把内容删除\n\n    oldRange.setStart(range.endContainer, range.endOffset);\n    oldRange.deleteContents();\n  }\n\n  setState(newState) {\n    if (this.state === null || typeof this.state !== 'object') {\n      this.state = newState;\n      this.rerender();\n      return;\n    } // 深拷贝\n\n\n    let merge = (oldState, newState) => {\n      for (let p in newState) {\n        if (oldState[p] === null || typeof oldState[p] !== 'object') {\n          oldState[p] = newState[p];\n        } else {\n          merge(oldState[p], newState[p]);\n        }\n      }\n    };\n\n    merge(this.state, newState);\n    this.rerender();\n  }\n\n} // Component的render方法最终会调用createElement 返回 createElement的返回值\n\nfunction createElement(type, attributes, ...children) {\n  // createElement 返回的是一个wrapper对象，Component或者ElementWrapper\n  let e;\n\n  if (typeof type === 'string') {\n    // 如果是一个普通的元素\n    e = new ElementWrapper(type);\n  } else {\n    // 如果是一个类\n    e = new type();\n  }\n\n  for (let p in attributes) {\n    e.setAttribute(p, attributes[p]);\n  }\n\n  let insertChildren = children => {\n    for (let child of children) {\n      if (typeof child === 'string') {\n        child = new TextWrapper(child);\n      }\n\n      if (child === null) {\n        continue;\n      }\n\n      if (typeof child === 'object' && child instanceof Array) {\n        insertChildren(child);\n      } else {\n        e.appendChild(child);\n      }\n    }\n  };\n\n  insertChildren(children);\n  return e;\n} // 全局的render方法 window.render （ 两个参数，第二个参数是要被挂载的节点，第一个参数是component\n\nfunction render(component, parentElement) {\n  // 先创建range\n  let range = document.createRange();\n  range.setStart(parentElement, 0); // 0th child of parentElement\n\n  range.setEnd(parentElement, parentElement.childNodes.length);\n  range.deleteContents(); // 删除了parentElement之间的内容，\n\n  component[RENDER_TO_DOM](range); // 调用了component的 RENDER_TO_DOM 方法, 并传入range\n}\n\n//# sourceURL=webpack:///./toy-react.js?");

/***/ })

/******/ });