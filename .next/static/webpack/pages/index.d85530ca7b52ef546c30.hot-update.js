webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _redux_actions_counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/counter */ \"./redux/actions/counter.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/card */ \"./components/card.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/sherifbutt/Library/Mobile Documents/com~apple~CloudDocs/WORK/learning code/js/react/ignite-next/pages/index.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar Index = function Index(props) {\n  var _props$data, _props$data2;\n\n  var counter = props.counter,\n      increment = props.increment;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        className: \"accordion accordion-flush\",\n        id: \"accordionFlushExample\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n          className: \"accordion-item\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"h2\", {\n            className: \"accordion-header\",\n            id: \"flush-headingOne\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"button\", {\n              onClick: function onClick() {\n                return increment();\n              },\n              className: \"accordion-button collapsed\",\n              type: \"button\",\n              \"data-bs-toggle\": \"collapse\",\n              \"data-bs-target\": \"#flush-collapseOne\",\n              \"aria-expanded\": \"false\",\n              \"aria-controls\": \"flush-collapseOne\",\n              children: [\"Welcome to Ignites \", \"  \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"span\", {\n                className: \"badge bg-primary ms-1\",\n                children: props === null || props === void 0 ? void 0 : props.count\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 24,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 14,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n            id: \"flush-collapseOne\",\n            className: \"accordion-collapse collapse\",\n            \"aria-labelledby\": \"flush-headingOne\",\n            \"data-bs-parent\": \"#accordionFlushExample\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n              className: \"accordion-body\",\n              children: (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.map(function (item) {\n                return item.id + \" \";\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        className: \"d-flex align-content-end flex-wrap\",\n        children: (_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.map(function (post) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_components_card__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            post: post\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 20\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Index;\nIndex.getInitialProps = /*#__PURE__*/Object(_Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var posts, data, photos, dataPhots, mirrgedData;\n  return _Users_sherifbutt_Library_Mobile_Documents_com_apple_CloudDocs_WORK_learning_code_js_react_ignite_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          console.log(\"api\");\n          _context.next = 4;\n          return fetch(\"https://jsonplaceholder.typicode.com/posts\");\n\n        case 4:\n          posts = _context.sent;\n          _context.next = 7;\n          return posts.json();\n\n        case 7:\n          data = _context.sent;\n          _context.next = 10;\n          return fetch(\"http://jsonplaceholder.typicode.com/photos\");\n\n        case 10:\n          photos = _context.sent;\n          _context.next = 13;\n          return photos.json();\n\n        case 13:\n          dataPhots = _context.sent;\n          mirrgedData = _objectSpread(_objectSpread({}, data), {}, {\n            dataPhots: dataPhots\n          });\n          return _context.abrupt(\"return\", {\n            data: data,\n            count: data.length\n          });\n\n        case 18:\n          _context.prev = 18;\n          _context.t0 = _context[\"catch\"](0);\n          console.log({\n            err: _context.t0\n          });\n\n        case 21:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee, null, [[0, 18]]);\n}));\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    counter: state.counterReducer\n  };\n};\n\nvar mapDispatchToProps = {\n  increment: _redux_actions_counter__WEBPACK_IMPORTED_MODULE_5__[\"incrementCounter\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Index));\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiY291bnRlciIsImluY3JlbWVudCIsImNvdW50IiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpZCIsInBvc3QiLCJnZXRJbml0aWFsUHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJwb3N0cyIsImpzb24iLCJwaG90b3MiLCJkYXRhUGhvdHMiLCJtaXJyZ2VkRGF0YSIsImxlbmd0aCIsImVyciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY291bnRlclJlZHVjZXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJpbmNyZW1lbnRDb3VudGVyIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDZkMsT0FEZSxHQUNRRCxLQURSLENBQ2ZDLE9BRGU7QUFBQSxNQUNOQyxTQURNLEdBQ1FGLEtBRFIsQ0FDTkUsU0FETTtBQUV2QixzQkFDRSxxRUFBQywwREFBRDtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQTJDLFVBQUUsRUFBQyx1QkFBOUM7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsZ0JBQWY7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUMsa0JBQWQ7QUFBaUMsY0FBRSxFQUFDLGtCQUFwQztBQUFBLG1DQUNFO0FBQ0UscUJBQU8sRUFBRTtBQUFBLHVCQUFNQSxTQUFTLEVBQWY7QUFBQSxlQURYO0FBRUUsdUJBQVMsRUFBQyw0QkFGWjtBQUdFLGtCQUFJLEVBQUMsUUFIUDtBQUlFLGdDQUFlLFVBSmpCO0FBS0UsZ0NBQWUsb0JBTGpCO0FBTUUsK0JBQWMsT0FOaEI7QUFPRSwrQkFBYyxtQkFQaEI7QUFBQSxnREFTc0IsSUFUdEIsZUFVRTtBQUFNLHlCQUFTLEVBQUMsdUJBQWhCO0FBQUEsMEJBQXlDRixLQUF6QyxhQUF5Q0EsS0FBekMsdUJBQXlDQSxLQUFLLENBQUVHO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWVFO0FBQ0UsY0FBRSxFQUFDLG1CQURMO0FBRUUscUJBQVMsRUFBQyw2QkFGWjtBQUdFLCtCQUFnQixrQkFIbEI7QUFJRSw4QkFBZSx3QkFKakI7QUFBQSxtQ0FNRTtBQUFLLHVCQUFTLEVBQUMsZ0JBQWY7QUFBQSx1Q0FDR0gsS0FBSyxDQUFDSSxJQURULGdEQUNHLFlBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRDtBQUFBLHVCQUFVQSxJQUFJLENBQUNDLEVBQUwsR0FBVSxHQUFwQjtBQUFBLGVBQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBNkJFO0FBQUssaUJBQVMsRUFBQyxvQ0FBZjtBQUFBLGtDQUNHUCxLQUFLLENBQUNJLElBRFQsaURBQ0csYUFBWUMsR0FBWixDQUFnQixVQUFDRyxJQUFELEVBQVU7QUFDekIsOEJBQU8scUVBQUMsd0RBQUQ7QUFBTSxnQkFBSSxFQUFFQTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDRCxTQUZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1Q0QsQ0F6Q0Q7O0tBQU1ULEs7QUEyQ05BLEtBQUssQ0FBQ1UsZUFBTix1YUFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFcEJDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBRm9CO0FBQUEsaUJBR0FDLEtBQUssQ0FBQyw0Q0FBRCxDQUhMOztBQUFBO0FBR2RDLGVBSGM7QUFBQTtBQUFBLGlCQUlEQSxLQUFLLENBQUNDLElBQU4sRUFKQzs7QUFBQTtBQUlkVixjQUpjO0FBQUE7QUFBQSxpQkFNQ1EsS0FBSyxDQUFDLDRDQUFELENBTk47O0FBQUE7QUFNZEcsZ0JBTmM7QUFBQTtBQUFBLGlCQVFJQSxNQUFNLENBQUNELElBQVAsRUFSSjs7QUFBQTtBQVFkRSxtQkFSYztBQVVkQyxxQkFWYyxtQ0FVSWIsSUFWSjtBQVVTWSxxQkFBUyxFQUFUQTtBQVZUO0FBQUEsMkNBWWI7QUFDTFosZ0JBQUksRUFBSkEsSUFESztBQUVMRCxpQkFBSyxFQUFFQyxJQUFJLENBQUNjO0FBRlAsV0FaYTs7QUFBQTtBQUFBO0FBQUE7QUFpQnBCUixpQkFBTyxDQUFDQyxHQUFSLENBQVk7QUFBRVEsZUFBRztBQUFMLFdBQVo7O0FBakJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF4Qjs7QUFxQkEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQ3BCLFdBQU8sRUFBRW9CLEtBQUssQ0FBQ0M7QUFEbUIsR0FBWjtBQUFBLENBQXhCOztBQUlBLElBQU1DLGtCQUFrQixHQUFHO0FBQ3pCckIsV0FBUyxFQUFFc0IsdUVBQWdCQTtBQURGLENBQTNCO0FBSWVDLDBIQUFPLENBQUNMLGVBQUQsRUFBa0JHLGtCQUFsQixDQUFQLENBQTZDeEIsS0FBN0MsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IGluY3JlbWVudENvdW50ZXIgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9jb3VudGVyXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZCdcbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY291bnRlciwgaW5jcmVtZW50IH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24gYWNjb3JkaW9uLWZsdXNoXCIgaWQ9XCJhY2NvcmRpb25GbHVzaEV4YW1wbGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1pdGVtXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWhlYWRlclwiIGlkPVwiZmx1c2gtaGVhZGluZ09uZVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5jcmVtZW50KCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI2ZsdXNoLWNvbGxhcHNlT25lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJmbHVzaC1jb2xsYXBzZU9uZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBXZWxjb21lIHRvIElnbml0ZXMge1wiICBcIn1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiZy1wcmltYXJ5IG1zLTFcIj57cHJvcHM/LmNvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBpZD1cImZsdXNoLWNvbGxhcHNlT25lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZmx1c2gtaGVhZGluZ09uZVwiXG4gICAgICAgICAgICAgIGRhdGEtYnMtcGFyZW50PVwiI2FjY29yZGlvbkZsdXNoRXhhbXBsZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWJvZHlcIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YT8ubWFwKChpdGVtKSA9PiBpdGVtLmlkICsgXCIgXCIpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24tY29udGVudC1lbmQgZmxleC13cmFwXCI+XG4gICAgICAgICAge3Byb3BzLmRhdGE/Lm1hcCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxDYXJkIHBvc3Q9e3Bvc3R9IC8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKFwiYXBpXCIpO1xuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHBvc3RzLmpzb24oKTtcblxuICAgIGNvbnN0IHBob3RvcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcGhvdG9zXCIpO1xuXG4gICAgY29uc3QgZGF0YVBob3RzID0gYXdhaXQgcGhvdG9zLmpzb24oKTtcblxuICAgIGNvbnN0IG1pcnJnZWREYXRhID0gey4uLmRhdGEsZGF0YVBob3RzfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBkYXRhLFxuICAgICAgY291bnQ6IGRhdGEubGVuZ3RoXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coeyBlcnIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgY291bnRlcjogc3RhdGUuY291bnRlclJlZHVjZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBpbmNyZW1lbnQ6IGluY3JlbWVudENvdW50ZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbmRleCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})