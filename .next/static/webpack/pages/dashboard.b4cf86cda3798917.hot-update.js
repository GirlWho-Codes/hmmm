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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ \"./components/index.jsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Sidebar = function(param) {\n    var isSideBarOpen = param.isSideBarOpen, setIsSideBarOpen = param.setIsSideBarOpen;\n    var handletoggle = // fuctions\n    function handletoggle() {\n        setIsSideBarOpen(function(prev) {\n            return !prev;\n        });\n    };\n    _s();\n    var asPath = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().asPath;\n    // NavItem\n    var NavItem = function(param) {\n        var icon = param.icon, label = param.label, link = param.link;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: link || \"/\".concat(label.toLowerCase()),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        className: \"text-sm normal-case px-0 justify-start hover:text-softOrange hover:bg-transparent \".concat(asPath === (link || \"/\".concat(label.toLowerCase())) ? \"text-orange hover:!text-orange\" : asPath.includes(\"/\".concat(label.toLowerCase())) ? \"text-orange hover:!text-orange\" : \"text-[#4A5568]\"),\n                        startIcon: icon,\n                        fullWidth: true,\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 19\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 16\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n            lineNumber: 13,\n            columnNumber: 10\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"\".concat(isSideBarOpen ? \" w-[65px] \" : \" w-[250px]\", \"  bg-white pl-8 py-6 h-screen fixed overflow-y-auto z-20 transition-transform transform lg:transform-none \").concat(isSideBarOpen ? \"translate-0\" : \"-translate-x-full\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Logo, {\n                        width: \"\".concat(isSideBarOpen ? 0 : 91.2)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 16\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                        onClick: handletoggle,\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.MenuHamburger, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"space-y-4 lg:space-y-4 mt-10 lg:mt-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Home, {}, void 0, false, void 0, void 0),\n                                label: \"\".concat(isSideBarOpen ? \"\" : \"Home\"),\n                                link: \"/dashboard\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 16\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Users, {}, void 0, false, void 0, void 0),\n                                label: \"\".concat(isSideBarOpen ? \"\" : \"Users\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 16\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Products, {}, void 0, false, void 0, void 0),\n                                label: \"\".concat(isSideBarOpen ? \"\" : \"Product\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 16\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Adminstrators, {}, void 0, false, void 0, void 0),\n                                label: \"\".concat(isSideBarOpen ? \"\" : \"Administrators\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 16\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_4__.SVG.Roles, {}, void 0, false, void 0, void 0),\n                                label: \"\".concat(isSideBarOpen ? \"\" : \"Roles and Priviledges\"),\n                                link: \"/roles_and_priviledges\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 16\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Julius\\\\Desktop\\\\hmmm\\\\components\\\\layout\\\\Sidebar.jsx\",\n                lineNumber: 42,\n                columnNumber: 10\n            }, _this),\n            \"// \"\n        ]\n    }, void 0, true);\n};\n_s(Sidebar, \"9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxnQkFBRSw4REFBQ1IsZ0RBQWlCLG9DQUFHO2dDQUFFUyxLQUFLLEVBQUUsRUFBQyxDQUFxQyxPQUFuQ1AsYUFBYSxHQUFFLEVBQUUsR0FBQyxnQkFBZ0IsQ0FBRTs7Ozs7cUNBQUk7MENBQ3hGLDhEQUFDSyxPQUFPO2dDQUNMQyxJQUFJLGdCQUFFLDhEQUFDUix3Q0FBUyxvQ0FBRztnQ0FDbkJTLEtBQUssRUFBRSxFQUFDLENBQTZDLE9BQTNDUCxhQUFhLEdBQUcsRUFBRSxHQUFDLHVCQUF1QixDQUFFO2dDQUN0RFEsSUFBSSxFQUFDLHdCQUF3Qjs7Ozs7cUNBQzlCOzs7Ozs7NkJBQ0E7Ozs7OztxQkFDRjtZQUVVLEtBQ2I7O29CQUtILENBQ0o7QUFDTCxDQUFDO0dBcEVLVCxPQUFPOztRQUNTSCxrREFBUzs7O0FBRHpCRyxLQUFBQSxPQUFPO0FBc0ViLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvU2lkZWJhci5qc3g/NDQ0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyAgIEljb25CdXR0b24sIEJhY2tkcm9wLCBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTVkcgfSBmcm9tICcuLic7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKHsgaXNTaWRlQmFyT3Blbiwgc2V0SXNTaWRlQmFyT3BlbiB9KSA9PiB7XHJcbiAgIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgIC8vIE5hdkl0ZW1cclxuICAgY29uc3QgTmF2SXRlbSA9ICh7IGljb24sIGxhYmVsLCBsaW5rIH0pID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtsaW5rIHx8IGAvJHtsYWJlbC50b0xvd2VyQ2FzZSgpfWB9PlxyXG4gICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXNtIG5vcm1hbC1jYXNlIHB4LTAganVzdGlmeS1zdGFydCBob3Zlcjp0ZXh0LXNvZnRPcmFuZ2UgaG92ZXI6YmctdHJhbnNwYXJlbnQgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNQYXRoID09PSAobGluayB8fCBgLyR7bGFiZWwudG9Mb3dlckNhc2UoKX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LW9yYW5nZSBob3ZlcjohdGV4dC1vcmFuZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYXNQYXRoLmluY2x1ZGVzKGAvJHtsYWJlbC50b0xvd2VyQ2FzZSgpfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RleHQtb3JhbmdlIGhvdmVyOiF0ZXh0LW9yYW5nZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dC1bIzRBNTU2OF0nXHJcbiAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICBzdGFydEljb249e2ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICB9O1xyXG5cclxuICAgLy8gZnVjdGlvbnNcclxuICAgZnVuY3Rpb24gaGFuZGxldG9nZ2xlKCl7XHJcbiAgICAgIHNldElzU2lkZUJhck9wZW4ocHJldiA9PiAhcHJldilcclxuICAgfVxyXG5cclxuICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICAgPG5hdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzU2lkZUJhck9wZW4gP1wiIHctWzY1cHhdIFwiOlwiIHctWzI1MHB4XVwiIH0gIGJnLXdoaXRlIHBsLTggcHktNiBoLXNjcmVlbiBmaXhlZCBvdmVyZmxvdy15LWF1dG8gei0yMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSB0cmFuc2Zvcm0gbGc6dHJhbnNmb3JtLW5vbmUgJHtcclxuICAgICAgICAgICAgICAgaXNTaWRlQmFyT3BlbiA/ICd0cmFuc2xhdGUtMCcgOiAnLXRyYW5zbGF0ZS14LWZ1bGwnXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICA+ICAgICBcclxuICAgICAgICAgICAgICAgPFNWRy5Mb2dvIHdpZHRoPXtgJHtpc1NpZGVCYXJPcGVuID8gMCA6IDkxLjIgfWB9ICAgLz5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGV0b2dnbGV9IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPFNWRy5NZW51SGFtYnVyZ2VyIC8+XHJcbiAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcblxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdzcGFjZS15LTQgbGc6c3BhY2UteS00IG10LTEwIGxnOm10LTE2Jz5cclxuICAgICAgICAgICAgICAgPE5hdkl0ZW0gaWNvbj17PFNWRy5Ib21lIC8+fSBsYWJlbD17YCR7aXNTaWRlQmFyT3BlbiA/IFwiXCI6XCJIb21lXCJ9YH0gIGxpbms9Jy9kYXNoYm9hcmQnIC8+XHJcbiAgICAgICAgICAgICAgIDxOYXZJdGVtIGljb249ezxTVkcuVXNlcnMgLz59IGxhYmVsPXtgJHtpc1NpZGVCYXJPcGVuID8gXCJcIjpcIlVzZXJzXCJ9YH0gLz5cclxuICAgICAgICAgICAgICAgPE5hdkl0ZW0gaWNvbj17PFNWRy5Qcm9kdWN0cyAvPn0gbGFiZWw9e2Ake2lzU2lkZUJhck9wZW4gPyBcIlwiOlwiUHJvZHVjdFwifWB9IC8+XHJcbiAgICAgICAgICAgICAgIHsvKiA8TmF2SXRlbSBpY29uPXs8U1ZHLlRyYW5zYWN0aW9ucyAvPn0gbGFiZWw9J1RyYW5zYWN0aW9ucycgLz4gKi99XHJcbiAgICAgICAgICAgICAgIDxOYXZJdGVtIGljb249ezxTVkcuQWRtaW5zdHJhdG9ycyAvPn0gbGFiZWw9e2Ake2lzU2lkZUJhck9wZW4/IFwiXCI6XCJBZG1pbmlzdHJhdG9yc1wifWB9IC8+XHJcbiAgICAgICAgICAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgICAgICAgICAgIGljb249ezxTVkcuUm9sZXMgLz59XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtgJHtpc1NpZGVCYXJPcGVuID8gXCJcIjpcIlJvbGVzIGFuZCBQcml2aWxlZGdlc1wifWB9XHJcbiAgICAgICAgICAgICAgICAgIGxpbms9Jy9yb2xlc19hbmRfcHJpdmlsZWRnZXMnXHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgey8qIEJhY2tkcm9wICovfVxyXG4gICAgICAgICAvLyB7LyogPEJhY2tkcm9wXHJcbiAgICAgICAgIC8vICAgIG9wZW49e2lzU2lkZUJhck9wZW59XHJcbiAgICAgICAgIC8vICAgIG9uQ2xpY2s9e2hhbmRsZUJhY2tkcm9wQ2xvc2V9XHJcbiAgICAgICAgIC8vICAgIHN4PXt7IHpJbmRleDogJzEwJyB9fVxyXG4gICAgICAgICAvLyAvPiAqL31cclxuICAgICAgPC8+XHJcbiAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iXSwibmFtZXMiOlsiSWNvbkJ1dHRvbiIsIkJhY2tkcm9wIiwiQnV0dG9uIiwiTGluayIsInVzZVJvdXRlciIsIlJlYWN0IiwiU1ZHIiwiU2lkZWJhciIsImlzU2lkZUJhck9wZW4iLCJzZXRJc1NpZGVCYXJPcGVuIiwiaGFuZGxldG9nZ2xlIiwicHJldiIsImFzUGF0aCIsIk5hdkl0ZW0iLCJpY29uIiwibGFiZWwiLCJsaW5rIiwibGkiLCJocmVmIiwidG9Mb3dlckNhc2UiLCJhIiwiY2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJzdGFydEljb24iLCJmdWxsV2lkdGgiLCJuYXYiLCJMb2dvIiwid2lkdGgiLCJvbkNsaWNrIiwiTWVudUhhbWJ1cmdlciIsInVsIiwiSG9tZSIsIlVzZXJzIiwiUHJvZHVjdHMiLCJBZG1pbnN0cmF0b3JzIiwiUm9sZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Sidebar.jsx\n"));

/***/ })

});