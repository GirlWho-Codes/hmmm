"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/layout/Sidebar.jsx":
/*!***************************************!*\
  !*** ./components/layout/Sidebar.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ \"./components/index.jsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Sidebar = function(param) {\n    var isSideBarOpen = param.isSideBarOpen, setIsSideBarOpen = param.setIsSideBarOpen;\n    var handletoggle = // fuctions\n    function handletoggle() {\n        setIsSideBarOpen(function(prev) {\n            return !prev;\n        });\n    };\n    _s();\n    var asPath = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().asPath;\n    // NavItem\n    var NavItem = function(param) {\n        var icon = param.icon, label = param.label, link = param.link;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: link || \"/\".concat(label.toLowerCase()),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        className: \"text-sm normal-case px-0 justify-start hover:text-softOrange hover:bg-transparent \".concat(asPath === (link || \"/\".concat(label.toLowerCase())) ? \"text-orange hover:!text-orange\" : asPath.includes(\"/\".concat(label.toLowerCase())) ? \"text-orange hover:!text-orange\" : \"text-[#4A5568]\"),\n                        startIcon: icon,\n                        fullWidth: true,\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 19\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 16\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n            lineNumber: 13,\n            columnNumber: 10\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"\".concat(isSideBarOpen ? \" w-[65px] \" : \" w-[250px]\", \"  bg-white pl-8 py-6 h-screen fixed overflow-y-auto z-20 transition-transform transform lg:transform-none \").concat(isSideBarOpen ? \"translate-0\" : \"-translate-x-full\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Logo, {\n                        width: \"\".concat(isSideBarOpen ? 0 : 91.2)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 16\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                        onClick: handletoggle,\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.MenuHamburger, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"space-y-4 lg:space-y-4 mt-10 lg:mt-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Home, {}, void 0, false, void 0, void 0),\n                                label: \"Home\",\n                                link: \"/dashboard\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 16\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Users, {}, void 0, false, void 0, void 0),\n                                label: \"Users\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 16\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Products, {}, void 0, false, void 0, void 0),\n                                label: \"Products\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 16\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Adminstrators, {}, void 0, false, void 0, void 0),\n                                label: \"Adminstrators\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 16\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Roles, {}, void 0, false, void 0, void 0),\n                                label: \"Roles and Priviledges\",\n                                link: \"/roles_and_priviledges\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 16\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                lineNumber: 42,\n                columnNumber: 10\n            }, _this),\n            \"// \"\n        ]\n    }, void 0, true);\n};\n_s(Sidebar, \"9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyx1QkFBdUI7Z0NBQzdCQyxJQUFJLEVBQUMsd0JBQXdCOzs7OztxQ0FDOUI7Ozs7Ozs2QkFDQTs7Ozs7O3FCQUNGO1lBRVUsS0FDYjs7b0JBS0gsQ0FDSjtBQUNMLENBQUM7R0FwRUtULE9BQU87O1FBQ1NILGtEQUFTOzs7QUFEekJHLEtBQUFBLE9BQU87QUFzRWIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9TaWRlYmFyLmpzeD80NDRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ICAgSWNvbkJ1dHRvbiwgQmFja2Ryb3AsIEJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNWRyB9IGZyb20gJy4uJztcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoeyBpc1NpZGVCYXJPcGVuLCBzZXRJc1NpZGVCYXJPcGVuIH0pID0+IHtcclxuICAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgLy8gTmF2SXRlbVxyXG4gICBjb25zdCBOYXZJdGVtID0gKHsgaWNvbiwgbGFiZWwsIGxpbmsgfSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmsgfHwgYC8ke2xhYmVsLnRvTG93ZXJDYXNlKCl9YH0+XHJcbiAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtc20gbm9ybWFsLWNhc2UgcHgtMCBqdXN0aWZ5LXN0YXJ0IGhvdmVyOnRleHQtc29mdE9yYW5nZSBob3ZlcjpiZy10cmFuc3BhcmVudCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGggPT09IChsaW5rIHx8IGAvJHtsYWJlbC50b0xvd2VyQ2FzZSgpfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RleHQtb3JhbmdlIGhvdmVyOiF0ZXh0LW9yYW5nZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhc1BhdGguaW5jbHVkZXMoYC8ke2xhYmVsLnRvTG93ZXJDYXNlKCl9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC1vcmFuZ2UgaG92ZXI6IXRleHQtb3JhbmdlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LVsjNEE1NTY4XSdcclxuICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17aWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgIH07XHJcblxyXG4gICAvLyBmdWN0aW9uc1xyXG4gICBmdW5jdGlvbiBoYW5kbGV0b2dnbGUoKXtcclxuICAgICAgc2V0SXNTaWRlQmFyT3BlbihwcmV2ID0+ICFwcmV2KVxyXG4gICB9XHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgICA8bmF2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNTaWRlQmFyT3BlbiA/XCIgdy1bNjVweF0gXCI6XCIgdy1bMjUwcHhdXCIgfSAgYmctd2hpdGUgcGwtOCBweS02IGgtc2NyZWVuIGZpeGVkIG92ZXJmbG93LXktYXV0byB6LTIwIHRyYW5zaXRpb24tdHJhbnNmb3JtIHRyYW5zZm9ybSBsZzp0cmFuc2Zvcm0tbm9uZSAke1xyXG4gICAgICAgICAgICAgICBpc1NpZGVCYXJPcGVuID8gJ3RyYW5zbGF0ZS0wJyA6ICctdHJhbnNsYXRlLXgtZnVsbCdcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgID4gICAgIFxyXG4gICAgICAgICAgICAgICA8U1ZHLkxvZ28gd2lkdGg9e2Ake2lzU2lkZUJhck9wZW4gPyAwIDogOTEuMiB9YH0gICAvPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZXRvZ2dsZX0gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8U1ZHLk1lbnVIYW1idXJnZXIgLz5cclxuICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J3NwYWNlLXktNCBsZzpzcGFjZS15LTQgbXQtMTAgbGc6bXQtMTYnPlxyXG4gICAgICAgICAgICAgICA8TmF2SXRlbSBpY29uPXs8U1ZHLkhvbWUgLz59IGxhYmVsPSdIb21lJyBsaW5rPScvZGFzaGJvYXJkJyAvPlxyXG4gICAgICAgICAgICAgICA8TmF2SXRlbSBpY29uPXs8U1ZHLlVzZXJzIC8+fSBsYWJlbD0nVXNlcnMnIC8+XHJcbiAgICAgICAgICAgICAgIDxOYXZJdGVtIGljb249ezxTVkcuUHJvZHVjdHMgLz59IGxhYmVsPSdQcm9kdWN0cycgLz5cclxuICAgICAgICAgICAgICAgey8qIDxOYXZJdGVtIGljb249ezxTVkcuVHJhbnNhY3Rpb25zIC8+fSBsYWJlbD0nVHJhbnNhY3Rpb25zJyAvPiAqL31cclxuICAgICAgICAgICAgICAgPE5hdkl0ZW0gaWNvbj17PFNWRy5BZG1pbnN0cmF0b3JzIC8+fSBsYWJlbD0nQWRtaW5zdHJhdG9ycycgLz5cclxuICAgICAgICAgICAgICAgPE5hdkl0ZW1cclxuICAgICAgICAgICAgICAgICAgaWNvbj17PFNWRy5Sb2xlcyAvPn1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J1JvbGVzIGFuZCBQcml2aWxlZGdlcydcclxuICAgICAgICAgICAgICAgICAgbGluaz0nL3JvbGVzX2FuZF9wcml2aWxlZGdlcydcclxuICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICB7LyogQmFja2Ryb3AgKi99XHJcbiAgICAgICAgIC8vIHsvKiA8QmFja2Ryb3BcclxuICAgICAgICAgLy8gICAgb3Blbj17aXNTaWRlQmFyT3Blbn1cclxuICAgICAgICAgLy8gICAgb25DbGljaz17aGFuZGxlQmFja2Ryb3BDbG9zZX1cclxuICAgICAgICAgLy8gICAgc3g9e3sgekluZGV4OiAnMTAnIH19XHJcbiAgICAgICAgIC8vIC8+ICovfVxyXG4gICAgICA8Lz5cclxuICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiJdLCJuYW1lcyI6WyJJY29uQnV0dG9uIiwiQmFja2Ryb3AiLCJCdXR0b24iLCJMaW5rIiwidXNlUm91dGVyIiwiUmVhY3QiLCJTVkciLCJTaWRlYmFyIiwiaXNTaWRlQmFyT3BlbiIsInNldElzU2lkZUJhck9wZW4iLCJoYW5kbGV0b2dnbGUiLCJwcmV2IiwiYXNQYXRoIiwiTmF2SXRlbSIsImljb24iLCJsYWJlbCIsImxpbmsiLCJsaSIsImhyZWYiLCJ0b0xvd2VyQ2FzZSIsImEiLCJjbGFzc05hbWUiLCJpbmNsdWRlcyIsInN0YXJ0SWNvbiIsImZ1bGxXaWR0aCIsIm5hdiIsIkxvZ28iLCJ3aWR0aCIsIm9uQ2xpY2siLCJNZW51SGFtYnVyZ2VyIiwidWwiLCJIb21lIiwiVXNlcnMiLCJQcm9kdWN0cyIsIkFkbWluc3RyYXRvcnMiLCJSb2xlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Sidebar.jsx\n"));

/***/ })

});