"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/CountButton.jsx":
/*!*****************************!*\
  !*** ./app/CountButton.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CountButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CountButton(param) {\n    let { id, increment = 1 } = param;\n    _s();\n    let [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function handleClick() {\n        setCount(count + increment);\n    }\n    function rollOverCount() {\n        if (count > 10) {\n            setCount(0);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(rollOverCount, [\n        count\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: id,\n                onClick: handleClick,\n                children: [\n                    \"+\",\n                    increment\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/haydenkern/Desktop/nextManuel/app/CountButton.jsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"count\",\n                children: count\n            }, void 0, false, {\n                fileName: \"/Users/haydenkern/Desktop/nextManuel/app/CountButton.jsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CountButton, \"/xL7qdScToREtqzbt5GZ1kHtYjQ=\");\n_c = CountButton;\nvar _c;\n$RefreshReg$(_c, \"CountButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Db3VudEJ1dHRvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRDO0FBRTdCLFNBQVNFLFlBQVksS0FBbUI7UUFBbkIsRUFBQ0MsRUFBRSxFQUFFQyxZQUFZLENBQUMsRUFBQyxHQUFuQjs7SUFDaEMsSUFBSSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLFNBQVNPO1FBQ0xELFNBQVNELFFBQVFEO0lBQ3JCO0lBRUEsU0FBU0k7UUFDTCxJQUFJSCxRQUFRLElBQUc7WUFDWEMsU0FBUztRQUNiO0lBQ0o7SUFDQUwsZ0RBQVNBLENBQUNPLGVBQWU7UUFBQ0g7S0FBTTtJQUNoQyxxQkFDSTs7MEJBQ0EsOERBQUNJO2dCQUFPTixJQUFJQTtnQkFBSU8sU0FBU0g7O29CQUFhO29CQUFFSDs7Ozs7OzswQkFDeEMsOERBQUNPO2dCQUFJUixJQUFHOzBCQUFTRTs7Ozs7Ozs7QUFHekI7R0FsQndCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvQ291bnRCdXR0b24uanN4PzRjYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudEJ1dHRvbih7aWQsIGluY3JlbWVudCA9IDF9KXtcbiAgICBsZXQgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKVxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCl7XG4gICAgICAgIHNldENvdW50KGNvdW50ICsgaW5jcmVtZW50KVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiByb2xsT3ZlckNvdW50KCl7XG4gICAgICAgIGlmIChjb3VudCA+IDEwKXtcbiAgICAgICAgICAgIHNldENvdW50KDApXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXNlRWZmZWN0KHJvbGxPdmVyQ291bnQsIFtjb3VudF0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGJ1dHRvbiBpZD17aWR9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT4re2luY3JlbWVudH08L2J1dHRvbj5cbiAgICAgICAgPGRpdiBpZD1cImNvdW50XCI+e2NvdW50fTwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ291bnRCdXR0b24iLCJpZCIsImluY3JlbWVudCIsImNvdW50Iiwic2V0Q291bnQiLCJoYW5kbGVDbGljayIsInJvbGxPdmVyQ291bnQiLCJidXR0b24iLCJvbkNsaWNrIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/CountButton.jsx\n"));

/***/ })

});