webpackHotUpdate_N_E("pages/weather",{

/***/ "./pages/weather.js":
/*!**************************!*\
  !*** ./pages/weather.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/user */ \"./redux/actions/user.js\");\n\n\nvar _jsxFileName = \"/Users/sherifbutt/Library/Mobile Documents/com~apple~CloudDocs/WORK/learning code/js/react/ignite-next/pages/weather.js\",\n    _this = undefined;\n\n // Redux\n\n\n\n\nvar Weather = function Weather(props) {\n  cons;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n        className: \"fas fa-cloud-sun\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this), \"  \", props.date]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Weather;\n\nWeather.getInitialProps = function () {\n  var date = new Date().toDateString();\n  return {\n    date: date\n  };\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    user: state.userReducer\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    setUser: _redux_actions_user__WEBPACK_IMPORTED_MODULE_3__[\"setUser\"]\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Weather));\n\nvar _c;\n\n$RefreshReg$(_c, \"Weather\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2VhdGhlci5qcz8xZTBhIl0sIm5hbWVzIjpbIldlYXRoZXIiLCJwcm9wcyIsImNvbnMiLCJkYXRlIiwiZ2V0SW5pdGlhbFByb3BzIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlciIsInVzZXJSZWR1Y2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJzZXRVc2VyIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUN4QkMsTUFBSTtBQUNMLHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixRQUN5Q0QsS0FBSyxDQUFDRSxJQUQvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQVREOztLQUFNSCxPOztBQVdOQSxPQUFPLENBQUNJLGVBQVIsR0FBMEIsWUFBTTtBQUM5QixNQUFNRCxJQUFJLEdBQUcsSUFBSUUsSUFBSixHQUFXQyxZQUFYLEVBQWI7QUFDQSxTQUFPO0FBQ0xILFFBQUksRUFBSkE7QUFESyxHQUFQO0FBR0QsQ0FMRDs7QUFPQSxJQUFNSSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDQyxRQUFJLEVBQUVELEtBQUssQ0FBQ0U7QUFEc0IsR0FBWjtBQUFBLENBQXhCOztBQUlBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeENDLFdBQU8sRUFBUEEsMkRBQU9BO0FBRGlDLEdBQWY7QUFBQSxDQUEzQjs7QUFJZUMsMEhBQU8sQ0FBQ1AsZUFBRCxFQUFrQkksa0JBQWxCLENBQVAsQ0FBNkNYLE9BQTdDLENBQWYiLCJmaWxlIjoiLi9wYWdlcy93ZWF0aGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuLy8gUmVkdXhcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldFVzZXIgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy91c2VyXCI7XG5cbmNvbnN0IFdlYXRoZXIgPSAocHJvcHMpID0+IHtcbiAgIGNvbnNcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsb3VkLXN1blwiPjwvaT4gIHtwcm9wcy5kYXRlfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5XZWF0aGVyLmdldEluaXRpYWxQcm9wcyA9ICgpID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCk7XG4gIHJldHVybiB7XG4gICAgZGF0ZSxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlclJlZHVjZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBzZXRVc2VyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoV2VhdGhlcik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/weather.js\n");

/***/ })

})