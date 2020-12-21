webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/user.js":
/*!********************************!*\
  !*** ./redux/reducers/user.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {var initialState = {\n  id: '42398742364239847239',\n  name: 'sherifduck',\n  age: 0\n};\n\nvar userReducer = function userReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"SET_USER\":\n      state = {\n        id: action.payload.id,\n        name: action.payload.name,\n        age: action.payload.age\n      };\n      return state;\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (userReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvdXNlci5qcz8xOTZlIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlkIiwibmFtZSIsImFnZSIsInVzZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxrREFBTUEsWUFBWSxHQUFHO0FBQ25CQyxJQUFFLEVBQUMsc0JBRGdCO0FBRW5CQyxNQUFJLEVBQUUsWUFGYTtBQUduQkMsS0FBRyxFQUFFO0FBSGMsQ0FBckI7O0FBS0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCTCxZQUF5QjtBQUFBLE1BQVhNLE1BQVc7O0FBQ3BELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssVUFBTDtBQUNFRixXQUFLLEdBQUc7QUFDTkosVUFBRSxFQUFFSyxNQUFNLENBQUNFLE9BQVAsQ0FBZVAsRUFEYjtBQUVOQyxZQUFJLEVBQUVJLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlTixJQUZmO0FBR05DLFdBQUcsRUFBRUcsTUFBTSxDQUFDRSxPQUFQLENBQWVMO0FBSGQsT0FBUjtBQUtBLGFBQU9FLEtBQVA7O0FBQ0Y7QUFBUyxhQUFPQSxLQUFQO0FBUlg7QUFVRCxDQVhEOztBQVllRCwwRUFBZiIsImZpbGUiOiIuL3JlZHV4L3JlZHVjZXJzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlkOic0MjM5ODc0MjM2NDIzOTg0NzIzOScsXG4gIG5hbWU6ICdzaGVyaWZkdWNrJyxcbiAgYWdlOiAwLFxufVxuY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIlNFVF9VU0VSXCI6XG4gICAgICBzdGF0ZSA9IHtcbiAgICAgICAgaWQ6IGFjdGlvbi5wYXlsb2FkLmlkLFxuICAgICAgICBuYW1lOiBhY3Rpb24ucGF5bG9hZC5uYW1lLFxuICAgICAgICBhZ2U6IGFjdGlvbi5wYXlsb2FkLmFnZSxcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgdXNlclJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/reducers/user.js\n");

/***/ })

})