webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _redux_actions_counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/counter */ \"./redux/actions/counter.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/card */ \"./components/card.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/sherifbutt/Library/Mobile Documents/com~apple~CloudDocs/WORK/learning code/js/react/ignite-next/pages/index.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar Index = function Index(props) {\n  var _props$data, _props$data2;\n\n  var counter = props.counter,\n      increment = props.increment;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        className: \"accordion accordion-flush\",\n        id: \"accordionFlushExample\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n          className: \"accordion-item\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"h2\", {\n            className: \"accordion-header\",\n            id: \"flush-headingOne\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"button\", {\n              onClick: function onClick() {\n                return increment();\n              },\n              className: \"accordion-button collapsed\",\n              type: \"button\",\n              \"data-bs-toggle\": \"collapse\",\n              \"data-bs-target\": \"#flush-collapseOne\",\n              \"aria-expanded\": \"false\",\n              \"aria-controls\": \"flush-collapseOne\",\n              children: [\"Welcome to Ignites \", \"  \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"span\", {\n                className: \"badge bg-primary ms-1\",\n                children: props === null || props === void 0 ? void 0 : props.count\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 24,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 14,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n            id: \"flush-collapseOne\",\n            className: \"accordion-collapse collapse\",\n            \"aria-labelledby\": \"flush-headingOne\",\n            \"data-bs-parent\": \"#accordionFlushExample\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n              className: \"accordion-body\",\n              children: (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.map(function (item) {\n                return item.id + \" \";\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        className: \"d-flex align-content-end flex-wrap\",\n        children: (_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.map(function (post) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_components_card__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            post: post\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 20\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var posts, data, photos, dataPhots, mirrgedData;\n  return _Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          console.log(\"api\");\n          _context.next = 4;\n          return fetch(\"https://jsonplaceholder.typicode.com/posts\");\n\n        case 4:\n          posts = _context.sent;\n          _context.next = 7;\n          return posts.json();\n\n        case 7:\n          data = _context.sent;\n          _context.next = 10;\n          return fetch(\"http://jsonplaceholder.typicode.com/photos\");\n\n        case 10:\n          photos = _context.sent;\n          _context.next = 13;\n          return photos.json();\n\n        case 13:\n          dataPhots = _context.sent;\n          mirrgedData = _objectSpread(_objectSpread({}, data), {}, {\n            dataP: dataP\n          });\n          return _context.abrupt(\"return\", {\n            data: data,\n            count: data.length\n          });\n\n        case 18:\n          _context.prev = 18;\n          _context.t0 = _context[\"catch\"](0);\n          console.log({\n            err: _context.t0\n          });\n\n        case 21:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, null, [[0, 18]]);\n}));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    counter: state.counterReducer\n  };\n};\n\nvar mapDispatchToProps = {\n  increment: _redux_actions_counter__WEBPACK_IMPORTED_MODULE_5__[\"incrementCounter\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Index));\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiY291bnRlciIsImluY3JlbWVudCIsImNvdW50IiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpZCIsInBvc3QiLCJnZXRJbml0aWFsUHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJwb3N0cyIsImpzb24iLCJwaG90b3MiLCJkYXRhUGhvdHMiLCJtaXJyZ2VkRGF0YSIsImRhdGFQIiwibGVuZ3RoIiwiZXJyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb3VudGVyUmVkdWNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImluY3JlbWVudENvdW50ZXIiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNmQyxPQURlLEdBQ1FELEtBRFIsQ0FDZkMsT0FEZTtBQUFBLE1BQ05DLFNBRE0sR0FDUUYsS0FEUixDQUNORSxTQURNO0FBRXZCLHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0U7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsMkJBQWY7QUFBMkMsVUFBRSxFQUFDLHVCQUE5QztBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxnQkFBZjtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxrQkFBZDtBQUFpQyxjQUFFLEVBQUMsa0JBQXBDO0FBQUEsbUNBQ0U7QUFDRSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1BLFNBQVMsRUFBZjtBQUFBLGVBRFg7QUFFRSx1QkFBUyxFQUFDLDRCQUZaO0FBR0Usa0JBQUksRUFBQyxRQUhQO0FBSUUsZ0NBQWUsVUFKakI7QUFLRSxnQ0FBZSxvQkFMakI7QUFNRSwrQkFBYyxPQU5oQjtBQU9FLCtCQUFjLG1CQVBoQjtBQUFBLGdEQVNzQixJQVR0QixlQVVFO0FBQU0seUJBQVMsRUFBQyx1QkFBaEI7QUFBQSwwQkFBeUNGLEtBQXpDLGFBQXlDQSxLQUF6Qyx1QkFBeUNBLEtBQUssQ0FBRUc7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBZUU7QUFDRSxjQUFFLEVBQUMsbUJBREw7QUFFRSxxQkFBUyxFQUFDLDZCQUZaO0FBR0UsK0JBQWdCLGtCQUhsQjtBQUlFLDhCQUFlLHdCQUpqQjtBQUFBLG1DQU1FO0FBQUssdUJBQVMsRUFBQyxnQkFBZjtBQUFBLHVDQUNHSCxLQUFLLENBQUNJLElBRFQsZ0RBQ0csWUFBWUMsR0FBWixDQUFnQixVQUFDQyxJQUFEO0FBQUEsdUJBQVVBLElBQUksQ0FBQ0MsRUFBTCxHQUFVLEdBQXBCO0FBQUEsZUFBaEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUE2QkU7QUFBSyxpQkFBUyxFQUFDLG9DQUFmO0FBQUEsa0NBQ0dQLEtBQUssQ0FBQ0ksSUFEVCxpREFDRyxhQUFZQyxHQUFaLENBQWdCLFVBQUNHLElBQUQsRUFBVTtBQUN6Qiw4QkFBTyxxRUFBQyx3REFBRDtBQUFNLGdCQUFJLEVBQUVBO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNELFNBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVDRCxDQXpDRDs7S0FBTVQsSztBQTJDTkEsS0FBSyxDQUFDVSxlQUFOLHVhQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVwQkMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFGb0I7QUFBQSxpQkFHQUMsS0FBSyxDQUFDLDRDQUFELENBSEw7O0FBQUE7QUFHZEMsZUFIYztBQUFBO0FBQUEsaUJBSURBLEtBQUssQ0FBQ0MsSUFBTixFQUpDOztBQUFBO0FBSWRWLGNBSmM7QUFBQTtBQUFBLGlCQU1DUSxLQUFLLENBQUMsNENBQUQsQ0FOTjs7QUFBQTtBQU1kRyxnQkFOYztBQUFBO0FBQUEsaUJBUUlBLE1BQU0sQ0FBQ0QsSUFBUCxFQVJKOztBQUFBO0FBUWRFLG1CQVJjO0FBVWRDLHFCQVZjLG1DQVVJYixJQVZKO0FBVVNjLGlCQUFLLEVBQUxBO0FBVlQ7QUFBQSwyQ0FZYjtBQUNMZCxnQkFBSSxFQUFKQSxJQURLO0FBRUxELGlCQUFLLEVBQUVDLElBQUksQ0FBQ2U7QUFGUCxXQVphOztBQUFBO0FBQUE7QUFBQTtBQWlCcEJULGlCQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFUyxlQUFHO0FBQUwsV0FBWjs7QUFqQm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCOztBQXFCQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDckIsV0FBTyxFQUFFcUIsS0FBSyxDQUFDQztBQURtQixHQUFaO0FBQUEsQ0FBeEI7O0FBSUEsSUFBTUMsa0JBQWtCLEdBQUc7QUFDekJ0QixXQUFTLEVBQUV1Qix1RUFBZ0JBO0FBREYsQ0FBM0I7QUFJZUMsMEhBQU8sQ0FBQ0wsZUFBRCxFQUFrQkcsa0JBQWxCLENBQVAsQ0FBNkN6QixLQUE3QyxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgaW5jcmVtZW50Q291bnRlciB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL2NvdW50ZXJcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkJ1xuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjb3VudGVyLCBpbmNyZW1lbnQgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbiBhY2NvcmRpb24tZmx1c2hcIiBpZD1cImFjY29yZGlvbkZsdXNoRXhhbXBsZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWl0ZW1cIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhY2NvcmRpb24taGVhZGVyXCIgaWQ9XCJmbHVzaC1oZWFkaW5nT25lXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbmNyZW1lbnQoKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjZmx1c2gtY29sbGFwc2VPbmVcIlxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImZsdXNoLWNvbGxhcHNlT25lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gSWduaXRlcyB7XCIgIFwifVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJnLXByaW1hcnkgbXMtMVwiPntwcm9wcz8uY291bnR9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGlkPVwiZmx1c2gtY29sbGFwc2VPbmVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb24tY29sbGFwc2UgY29sbGFwc2VcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJmbHVzaC1oZWFkaW5nT25lXCJcbiAgICAgICAgICAgICAgZGF0YS1icy1wYXJlbnQ9XCIjYWNjb3JkaW9uRmx1c2hFeGFtcGxlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tYm9keVwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRhPy5tYXAoKGl0ZW0pID0+IGl0ZW0uaWQgKyBcIiBcIil9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1jb250ZW50LWVuZCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICB7cHJvcHMuZGF0YT8ubWFwKChwb3N0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPENhcmQgcG9zdD17cG9zdH0gLz47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coXCJhcGlcIik7XG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcG9zdHMuanNvbigpO1xuXG4gICAgY29uc3QgcGhvdG9zID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9waG90b3NcIik7XG5cbiAgICBjb25zdCBkYXRhUGhvdHMgPSBhd2FpdCBwaG90b3MuanNvbigpO1xuXG4gICAgY29uc3QgbWlycmdlZERhdGEgPSB7Li4uZGF0YSxkYXRhUH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YSxcbiAgICAgIGNvdW50OiBkYXRhLmxlbmd0aFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKHsgZXJyIH0pO1xuICB9XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGNvdW50ZXI6IHN0YXRlLmNvdW50ZXJSZWR1Y2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgaW5jcmVtZW50OiBpbmNyZW1lbnRDb3VudGVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSW5kZXgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})