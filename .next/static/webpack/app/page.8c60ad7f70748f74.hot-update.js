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

/***/ "(app-pages-browser)/./app/Search.jsx":
/*!************************!*\
  !*** ./app/Search.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Search() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://fakestoreapi.com/products\").then((res)=>res.json()).then((data)=>{\n            setProducts(data);\n        }).catch((error)=>{\n            console.error(\"There was an error fetching the products:\", error);\n        });\n    }, []);\n    const filteredProducts = products.filter((product)=>product.title.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 20); // Only show the first 20 products\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Search for products...\",\n                onChange: (e)=>setSearchTerm(e.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/haydenkern/Desktop/nextManuel/app/Search.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: styles.gridContainer,\n                children: filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.productCard,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: product.image,\n                                alt: product.title,\n                                className: styles.productImage\n                            }, void 0, false, {\n                                fileName: \"/Users/haydenkern/Desktop/nextManuel/app/Search.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: styles.productTitle,\n                                children: product.title\n                            }, void 0, false, {\n                                fileName: \"/Users/haydenkern/Desktop/nextManuel/app/Search.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: styles.productPrice,\n                                children: [\n                                    \"$\",\n                                    product.price.toFixed(2)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/haydenkern/Desktop/nextManuel/app/Search.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"/Users/haydenkern/Desktop/nextManuel/app/Search.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/haydenkern/Desktop/nextManuel/app/Search.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/haydenkern/Desktop/nextManuel/app/Search.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Search, \"+Zr+TWNor38VV6M5hAlr4cM5V9Y=\");\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9TZWFyY2guanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQUVwQyxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO0lBRTdDQyxnREFBU0EsQ0FBQztRQUNSTSxNQUFNLHFDQUNIQyxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDLENBQUNHO1lBQ0xQLFlBQVlPO1FBQ2QsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO1lBQ05DLFFBQVFELEtBQUssQ0FBQyw2Q0FBNkNBO1FBQzdEO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUUsbUJBQW1CWixTQUN0QmEsTUFBTSxDQUFDLENBQUNDLFVBQ1BBLFFBQVFDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNmLFdBQVdjLFdBQVcsS0FFNURFLEtBQUssQ0FBQyxHQUFHLEtBQUssa0NBQWtDO0lBRW5ELHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxVQUFVLENBQUNDLElBQU1yQixjQUFjcUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7MEJBRy9DLDhEQUFDUDtnQkFBSVEsV0FBV0MsT0FBT0MsYUFBYTswQkFDakNqQixpQkFBaUJrQixHQUFHLENBQUMsQ0FBQ2hCLHdCQUNyQiw4REFBQ0s7d0JBQXFCUSxXQUFXQyxPQUFPRyxXQUFXOzswQ0FDakQsOERBQUNDO2dDQUFJQyxLQUFLbkIsUUFBUW9CLEtBQUs7Z0NBQUVDLEtBQUtyQixRQUFRQyxLQUFLO2dDQUFFWSxXQUFXQyxPQUFPUSxZQUFZOzs7Ozs7MENBQzNFLDhEQUFDQztnQ0FBR1YsV0FBV0MsT0FBT1UsWUFBWTswQ0FBR3hCLFFBQVFDLEtBQUs7Ozs7OzswQ0FDbEQsOERBQUN3QjtnQ0FBRVosV0FBV0MsT0FBT1ksWUFBWTs7b0NBQUU7b0NBQUUxQixRQUFRMkIsS0FBSyxDQUFDQyxPQUFPLENBQUM7Ozs7Ozs7O3VCQUhuRDVCLFFBQVE2QixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBUzlCO0dBeEN3QjVDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9TZWFyY2guanN4PzgxNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCdodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMnKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldFByb2R1Y3RzKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgcHJvZHVjdHM6XCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHByb2R1Y3RzXG4gICAgLmZpbHRlcigocHJvZHVjdCkgPT5cbiAgICAgIHByb2R1Y3QudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gICAgKVxuICAgIC5zbGljZSgwLCAyMCk7IC8vIE9ubHkgc2hvdyB0aGUgZmlyc3QgMjAgcHJvZHVjdHNcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgcHJvZHVjdHMuLi5cIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkQ29udGFpbmVyfT5cbiAgICAgICAge2ZpbHRlcmVkUHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RDYXJkfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QudGl0bGV9IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RJbWFnZX0gLz5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0VGl0bGV9Pntwcm9kdWN0LnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdWN0UHJpY2V9PiR7cHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VhcmNoIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImZpbHRlcmVkUHJvZHVjdHMiLCJmaWx0ZXIiLCJwcm9kdWN0IiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2xpY2UiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwiZ3JpZENvbnRhaW5lciIsIm1hcCIsInByb2R1Y3RDYXJkIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJwcm9kdWN0SW1hZ2UiLCJoMyIsInByb2R1Y3RUaXRsZSIsInAiLCJwcm9kdWN0UHJpY2UiLCJwcmljZSIsInRvRml4ZWQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Search.jsx\n"));

/***/ })

});