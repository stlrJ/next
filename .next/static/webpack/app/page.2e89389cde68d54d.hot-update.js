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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/SearchBar.jsx\n\nvar _s = $RefreshSig$();\n\nfunction Search() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchProducts() {\n            try {\n                const response = await fetch(\"https://fakestoreapi.com/products\");\n                const data = await response.json();\n                setProducts(data);\n            } catch (error) {\n                console.error(\"Failed to fetch products:\", error);\n            }\n        }\n        fetchProducts();\n    }, []);\n    const filteredProducts = products.filter((product)=>product.title.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 20); // Limit to the first 20 products\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Search for products...\",\n                onChange: (e)=>setSearchTerm(e.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/haydenkern/Desktop/nextManuel/app/Search.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"grid\",\n                    gridTemplateColumns: \"repeat(auto-fill, minmax(200px, 1fr))\",\n                    gap: \"1rem\",\n                    padding: \"1rem\"\n                },\n                children: filteredProducts.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            border: \"1px solid #ccc\",\n                            padding: \"1rem\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: product.image,\n                                alt: product.title,\n                                style: {\n                                    width: \"100%\",\n                                    height: \"auto\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/haydenkern/Desktop/nextManuel/app/Search.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: product.title\n                            }, void 0, false, {\n                                fileName: \"/Users/haydenkern/Desktop/nextManuel/app/Search.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"$\",\n                                    product.price.toFixed(2)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/haydenkern/Desktop/nextManuel/app/Search.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"/Users/haydenkern/Desktop/nextManuel/app/Search.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/haydenkern/Desktop/nextManuel/app/Search.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/haydenkern/Desktop/nextManuel/app/Search.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Search, \"+Zr+TWNor38VV6M5hAlr4cM5V9Y=\");\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9TZWFyY2guanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSwyQkFBMkI7OztBQUN3QjtBQUVwQyxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO0lBRTdDQyxnREFBU0EsQ0FBQztRQUNSLGVBQWVNO1lBQ2IsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07Z0JBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtnQkFDaENQLFlBQVlNO1lBQ2QsRUFBRSxPQUFPRSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsNkJBQTZCQTtZQUM3QztRQUNGO1FBRUFMO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTU8sbUJBQW1CWCxTQUN0QlksTUFBTSxDQUFDLENBQUNDLFVBQ1BBLFFBQVFDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNkLFdBQVdhLFdBQVcsS0FFNURFLEtBQUssQ0FBQyxHQUFHLEtBQUssaUNBQWlDO0lBRWxELHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxVQUFVLENBQUNDLElBQU1wQixjQUFjb0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7MEJBSS9DLDhEQUFDUDtnQkFBSVEsT0FBTztvQkFBRUMsU0FBUztvQkFBUUMscUJBQXFCO29CQUF5Q0MsS0FBSztvQkFBUUMsU0FBUztnQkFBTzswQkFDdkhuQixpQkFBaUJvQixHQUFHLENBQUMsQ0FBQ2xCLHdCQUNyQiw4REFBQ0s7d0JBQXFCUSxPQUFPOzRCQUFFTSxRQUFROzRCQUFrQkYsU0FBUzt3QkFBTzs7MENBQ3ZFLDhEQUFDRztnQ0FBSUMsS0FBS3JCLFFBQVFzQixLQUFLO2dDQUFFQyxLQUFLdkIsUUFBUUMsS0FBSztnQ0FBRVksT0FBTztvQ0FBRVcsT0FBTztvQ0FBUUMsUUFBUTtnQ0FBTzs7Ozs7OzBDQUNwRiw4REFBQ0M7MENBQUkxQixRQUFRQyxLQUFLOzs7Ozs7MENBQ2xCLDhEQUFDMEI7O29DQUFFO29DQUFFM0IsUUFBUTRCLEtBQUssQ0FBQ0MsT0FBTyxDQUFDOzs7Ozs7Ozt1QkFIbkI3QixRQUFROEIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVM5QjtHQTVDd0I1QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvU2VhcmNoLmpzeD84MTY1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvU2VhcmNoQmFyLmpzeFxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvZHVjdHMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMnKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0UHJvZHVjdHMoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHByb2R1Y3RzOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmV0Y2hQcm9kdWN0cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHByb2R1Y3RzXG4gICAgLmZpbHRlcigocHJvZHVjdCkgPT5cbiAgICAgIHByb2R1Y3QudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gICAgKVxuICAgIC5zbGljZSgwLCAyMCk7IC8vIExpbWl0IHRvIHRoZSBmaXJzdCAyMCBwcm9kdWN0c1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBwcm9kdWN0cy4uLlwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuXG4gICAgICB7LyogUHJvZHVjdHMgZ3JpZCAqL31cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKScsIGdhcDogJzFyZW0nLCBwYWRkaW5nOiAnMXJlbScgfX0+XG4gICAgICAgIHtmaWx0ZXJlZFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfSBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI2NjYycsIHBhZGRpbmc6ICcxcmVtJyB9fT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QudGl0bGV9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2F1dG8nIH19IC8+XG4gICAgICAgICAgICA8aDM+e3Byb2R1Y3QudGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxwPiR7cHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VhcmNoIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiZmV0Y2hQcm9kdWN0cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImZpbHRlcmVkUHJvZHVjdHMiLCJmaWx0ZXIiLCJwcm9kdWN0IiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2xpY2UiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwic3R5bGUiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdhcCIsInBhZGRpbmciLCJtYXAiLCJib3JkZXIiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDMiLCJwIiwicHJpY2UiLCJ0b0ZpeGVkIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Search.jsx\n"));

/***/ })

});