"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/puzzle/page",{

/***/ "(app-pages-browser)/./app/(routes)/puzzle/page.tsx":
/*!**************************************!*\
  !*** ./app/(routes)/puzzle/page.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlayPuzzle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.css */ \"(app-pages-browser)/./app/(routes)/puzzle/page.css.ts\");\n/* harmony import */ var _components_puzzle_puzzle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/puzzle/puzzle */ \"(app-pages-browser)/./app/components/puzzle/puzzle.tsx\");\n/* harmony import */ var _app_components_puzzle_useBoard_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/puzzle/useBoard.hook */ \"(app-pages-browser)/./app/components/puzzle/useBoard.hook.tsx\");\n/* harmony import */ var _app_components_puzzle_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/puzzle/sidebar */ \"(app-pages-browser)/./app/components/puzzle/sidebar.tsx\");\n/* harmony import */ var _app_components_useModal_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/useModal.hook */ \"(app-pages-browser)/./app/components/useModal.hook.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _app_components_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/components/modal */ \"(app-pages-browser)/./app/components/modal.tsx\");\n/* harmony import */ var _app_components_puzzle_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/app/components/puzzle/time */ \"(app-pages-browser)/./app/components/puzzle/time.tsx\");\n/* harmony import */ var _app_components_modalContents_gameClear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/components/modalContents/gameClear */ \"(app-pages-browser)/./app/components/modalContents/gameClear.tsx\");\n/* harmony import */ var _app_components_modalContents_gameResult__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/app/components/modalContents/gameResult */ \"(app-pages-browser)/./app/components/modalContents/gameResult.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction PlayPuzzle(param) {\n    let { puzzle } = param;\n    _s();\n    const { isOpen, openModal, closeModal } = (0,_app_components_useModal_hook__WEBPACK_IMPORTED_MODULE_5__.useModal)();\n    const [modalChild, setModalChild] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(window.innerWidth);\n    // open game information modal before play\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        const element = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_modalContents_gameClear__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/(routes)/puzzle/page.tsx\",\n            lineNumber: 26,\n            columnNumber: 21\n        }, this);\n        setModalChild(element);\n    }, []);\n    // arrange the elements depends on the window width\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        const resizeListener = ()=>{\n            setSize(window.innerWidth);\n        };\n        window.addEventListener(\"resize\", resizeListener);\n        return ()=>{\n            window.removeEventListener(\"resize\", resizeListener);\n        };\n    }, [\n        size\n    ]);\n    const puzzleModel = {\n        id: \"hello\",\n        color_code: \"black\",\n        attempt_count: \"\",\n        progress_state: \"R\",\n        limit_time: \"1\",\n        start_date: \"2024-01-01\",\n        end_date: \"2024-01-01\",\n        words: [\n            {\n                word: \"ORM\",\n                path: [\n                    {\n                        x: 1,\n                        y: 5\n                    },\n                    {\n                        x: 1,\n                        y: 4\n                    },\n                    {\n                        x: 1,\n                        y: 3\n                    }\n                ]\n            },\n            {\n                word: \"WORLD\",\n                path: [\n                    {\n                        x: 4,\n                        y: 0\n                    },\n                    {\n                        x: 5,\n                        y: 0\n                    },\n                    {\n                        x: 6,\n                        y: 0\n                    },\n                    {\n                        x: 7,\n                        y: 0\n                    },\n                    {\n                        x: 8,\n                        y: 0\n                    }\n                ]\n            },\n            {\n                word: \"PROGRAM\",\n                path: [\n                    {\n                        x: 2,\n                        y: 7\n                    },\n                    {\n                        x: 3,\n                        y: 7\n                    },\n                    {\n                        x: 4,\n                        y: 7\n                    },\n                    {\n                        x: 5,\n                        y: 7\n                    },\n                    {\n                        x: 6,\n                        y: 7\n                    },\n                    {\n                        x: 7,\n                        y: 7\n                    },\n                    {\n                        x: 8,\n                        y: 7\n                    }\n                ]\n            }\n        ],\n        puzzle: [\n            [\n                \"P\",\n                \"D\",\n                \"G\",\n                \"H\",\n                \"W\",\n                \"O\",\n                \"R\",\n                \"L\",\n                \"D\",\n                \"G\"\n            ],\n            [\n                \"I\",\n                \"U\",\n                \"X\",\n                \"T\",\n                \"K\",\n                \"K\",\n                \"F\",\n                \"G\",\n                \"G\",\n                \"B\"\n            ],\n            [\n                \"O\",\n                \"F\",\n                \"Z\",\n                \"D\",\n                \"H\",\n                \"M\",\n                \"F\",\n                \"M\",\n                \"U\",\n                \"B\"\n            ],\n            [\n                \"X\",\n                \"O\",\n                \"B\",\n                \"Z\",\n                \"O\",\n                \"I\",\n                \"S\",\n                \"H\",\n                \"U\",\n                \"Z\"\n            ],\n            [\n                \"S\",\n                \"R\",\n                \"R\",\n                \"L\",\n                \"L\",\n                \"O\",\n                \"S\",\n                \"T\",\n                \"F\",\n                \"D\"\n            ],\n            [\n                \"O\",\n                \"M\",\n                \"L\",\n                \"M\",\n                \"H\",\n                \"E\",\n                \"J\",\n                \"M\",\n                \"H\",\n                \"W\"\n            ],\n            [\n                \"U\",\n                \"E\",\n                \"I\",\n                \"D\",\n                \"Q\",\n                \"U\",\n                \"M\",\n                \"R\",\n                \"O\",\n                \"E\"\n            ],\n            [\n                \"H\",\n                \"O\",\n                \"P\",\n                \"R\",\n                \"O\",\n                \"G\",\n                \"R\",\n                \"A\",\n                \"M\",\n                \"N\"\n            ],\n            [\n                \"V\",\n                \"H\",\n                \"I\",\n                \"H\",\n                \"A\",\n                \"U\",\n                \"F\",\n                \"V\",\n                \"A\",\n                \"T\"\n            ],\n            [\n                \"Y\",\n                \"G\",\n                \"E\",\n                \"N\",\n                \"E\",\n                \"R\",\n                \"A\",\n                \"T\",\n                \"E\",\n                \"W\"\n            ]\n        ]\n    };\n    const boardProps = (0,_app_components_puzzle_useBoard_hook__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(puzzleModel, {});\n    const handleTimerFinish = ()=>{\n        const element = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_modalContents_gameResult__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            result: \"F\"\n        }, void 0, false, {\n            fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/(routes)/puzzle/page.tsx\",\n            lineNumber: 97,\n            columnNumber: 21\n        }, this);\n        setModalChild(element);\n        openModal();\n    };\n    const handleGameClear = ()=>{\n        const element = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_modalContents_gameResult__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            result: \"P\"\n        }, void 0, false, {\n            fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/(routes)/puzzle/page.tsx\",\n            lineNumber: 103,\n            columnNumber: 21\n        }, this);\n        setModalChild(element);\n        openModal();\n    };\n    const isComplete = boardProps.answers.length === boardProps.foundAnswers.length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_modal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                modalName: \"\",\n                modalSize: \"small\",\n                closeButton: false,\n                onClose: closeModal,\n                children: modalChild\n            }, void 0, false, {\n                fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/(routes)/puzzle/page.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _page_css__WEBPACK_IMPORTED_MODULE_1__.playWrapper,\n                children: [\n                    size <= 900 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_puzzle_time__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        initialDuration: 60,\n                        onFinish: handleTimerFinish,\n                        isComplete: isComplete,\n                        onClear: handleGameClear\n                    }, void 0, false, {\n                        fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/(routes)/puzzle/page.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_puzzle_puzzle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        ...boardProps\n                    }, void 0, false, {\n                        fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/(routes)/puzzle/page.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_puzzle_sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        ...boardProps,\n                        isComplete: isComplete,\n                        handleTimerFinish: handleTimerFinish,\n                        handleGameClear: handleGameClear,\n                        windowWidth: size\n                    }, void 0, false, {\n                        fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/(routes)/puzzle/page.tsx\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/(routes)/puzzle/page.tsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PlayPuzzle, \"QjOMpdRwwbPsvR+NGfpXJQhqcek=\", false, function() {\n    return [\n        _app_components_useModal_hook__WEBPACK_IMPORTED_MODULE_5__.useModal,\n        _app_components_puzzle_useBoard_hook__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = PlayPuzzle;\nvar _c;\n$RefreshReg$(_c, \"PlayPuzzle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS9wdXp6bGUvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2tDO0FBQ2tCO0FBRVM7QUFDUDtBQUNJO0FBQ0g7QUFDWjtBQUNLO0FBQ2lCO0FBRUU7QUFNcEQsU0FBU1csV0FBVyxLQUF1QjtRQUF2QixFQUFFQyxNQUFNLEVBQWUsR0FBdkI7O0lBQ2pDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRSxHQUFHWCx1RUFBUUE7SUFDbEQsTUFBTSxDQUFDWSxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFtQjtJQUMvRCxNQUFNLENBQUNZLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQVNjLE9BQU9DLFVBQVU7SUFFMUQsMENBQTBDO0lBQzFDaEIsZ0RBQVNBLENBQUM7UUFDUixNQUFNaUIsd0JBQVUsOERBQUNiLCtFQUFTQTs7Ozs7UUFDMUJRLGNBQWNLO0lBQ2hCLEdBQUcsRUFBRTtJQUVMLG1EQUFtRDtJQUNuRGpCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWtCLGlCQUFpQjtZQUNyQkosUUFBUUMsT0FBT0MsVUFBVTtRQUMzQjtRQUNBRCxPQUFPSSxnQkFBZ0IsQ0FBQyxVQUFVRDtRQUNsQyxPQUFPO1lBQ0xILE9BQU9LLG1CQUFtQixDQUFDLFVBQVVGO1FBQ3ZDO0lBQ0YsR0FBRztRQUFDTDtLQUFLO0lBRVQsTUFBTVEsY0FBYztRQUNsQkMsSUFBSTtRQUNKQyxZQUFZO1FBQ1pDLGVBQWU7UUFDZkMsZ0JBQWdCO1FBQ2hCQyxZQUFZO1FBQ1pDLFlBQVk7UUFDWkMsVUFBVTtRQUNWQyxPQUFPO1lBQ0w7Z0JBQ0VDLE1BQU07Z0JBQ05DLE1BQU07b0JBQ0o7d0JBQUVDLEdBQUc7d0JBQUdDLEdBQUc7b0JBQUU7b0JBQ2I7d0JBQUVELEdBQUc7d0JBQUdDLEdBQUc7b0JBQUU7b0JBQ2I7d0JBQUVELEdBQUc7d0JBQUdDLEdBQUc7b0JBQUU7aUJBQ2Q7WUFDSDtZQUNBO2dCQUNFSCxNQUFNO2dCQUNOQyxNQUFNO29CQUNKO3dCQUFFQyxHQUFHO3dCQUFHQyxHQUFHO29CQUFFO29CQUNiO3dCQUFFRCxHQUFHO3dCQUFHQyxHQUFHO29CQUFFO29CQUNiO3dCQUFFRCxHQUFHO3dCQUFHQyxHQUFHO29CQUFFO29CQUNiO3dCQUFFRCxHQUFHO3dCQUFHQyxHQUFHO29CQUFFO29CQUNiO3dCQUFFRCxHQUFHO3dCQUFHQyxHQUFHO29CQUFFO2lCQUNkO1lBQ0g7WUFDQTtnQkFDRUgsTUFBTTtnQkFDTkMsTUFBTTtvQkFDSjt3QkFBRUMsR0FBRzt3QkFBR0MsR0FBRztvQkFBRTtvQkFDYjt3QkFBRUQsR0FBRzt3QkFBR0MsR0FBRztvQkFBRTtvQkFDYjt3QkFBRUQsR0FBRzt3QkFBR0MsR0FBRztvQkFBRTtvQkFDYjt3QkFBRUQsR0FBRzt3QkFBR0MsR0FBRztvQkFBRTtvQkFDYjt3QkFBRUQsR0FBRzt3QkFBR0MsR0FBRztvQkFBRTtvQkFDYjt3QkFBRUQsR0FBRzt3QkFBR0MsR0FBRztvQkFBRTtvQkFDYjt3QkFBRUQsR0FBRzt3QkFBR0MsR0FBRztvQkFBRTtpQkFDZDtZQUNIO1NBQ0Q7UUFDRDFCLFFBQVE7WUFDTjtnQkFBQztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSzthQUFJO1lBQ2xEO2dCQUFDO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2FBQUk7WUFDbEQ7Z0JBQUM7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7YUFBSTtZQUNsRDtnQkFBQztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSzthQUFJO1lBQ2xEO2dCQUFDO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2FBQUk7WUFDbEQ7Z0JBQUM7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7YUFBSTtZQUNsRDtnQkFBQztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSzthQUFJO1lBQ2xEO2dCQUFDO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2dCQUFLO2FBQUk7WUFDbEQ7Z0JBQUM7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7Z0JBQUs7YUFBSTtZQUNsRDtnQkFBQztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSztnQkFBSzthQUFJO1NBQ25EO0lBQ0g7SUFFQSxNQUFNMkIsYUFBYXJDLGdGQUFRQSxDQUFDd0IsYUFBYSxDQUFDO0lBQzFDLE1BQU1jLG9CQUFvQjtRQUN4QixNQUFNbEIsd0JBQVUsOERBQUNaLGlGQUFVQTtZQUFDK0IsUUFBTzs7Ozs7O1FBQ25DeEIsY0FBY0s7UUFDZFI7SUFDRjtJQUVBLE1BQU00QixrQkFBa0I7UUFDdEIsTUFBTXBCLHdCQUFVLDhEQUFDWixpRkFBVUE7WUFBQytCLFFBQU87Ozs7OztRQUNuQ3hCLGNBQWNLO1FBQ2RSO0lBQ0Y7SUFFQSxNQUFNNkIsYUFDSkosV0FBV0ssT0FBTyxDQUFDQyxNQUFNLEtBQUtOLFdBQVdPLFlBQVksQ0FBQ0QsTUFBTTtJQUU5RCxxQkFDRTs7MEJBQ0UsOERBQUN0Qyw2REFBS0E7Z0JBQ0p3QyxXQUFVO2dCQUNWQyxXQUFVO2dCQUNWQyxhQUFhO2dCQUNiQyxTQUFTbkM7MEJBRVJDOzs7Ozs7MEJBRUgsOERBQUNtQztnQkFBSUMsV0FBV3BELGtEQUFlOztvQkFDNUJrQixRQUFRLHFCQUNQLDhEQUFDVixtRUFBSUE7d0JBQ0g4QyxpQkFBaUI7d0JBQ2pCQyxVQUFVZjt3QkFDVkcsWUFBWUE7d0JBQ1phLFNBQVNkOzs7Ozs7a0NBR2IsOERBQUN6QyxpRUFBTUE7d0JBQUUsR0FBR3NDLFVBQVU7Ozs7OztrQ0FDdEIsOERBQUNwQyxzRUFBT0E7d0JBQ0wsR0FBR29DLFVBQVU7d0JBQ2RJLFlBQVlBO3dCQUNaSCxtQkFBbUJBO3dCQUNuQkUsaUJBQWlCQTt3QkFDakJlLGFBQWF2Qzs7Ozs7Ozs7Ozs7Ozs7QUFLdkI7R0ExSHdCUDs7UUFDb0JQLG1FQUFRQTtRQTJFL0JGLDRFQUFRQTs7O0tBNUVMUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHJvdXRlcykvcHV6emxlL3BhZ2UudHN4P2MwODUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4vcGFnZS5jc3NcIjtcbmltcG9ydCBQdXp6bGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcHV6emxlL3B1enpsZVwiO1xuaW1wb3J0IHsgcHV6emxlTW9kZWwgfSBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9wdXp6bGUvcHV6emxlLnR5cGVzXCI7XG5pbXBvcnQgdXNlQm9hcmQgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvcHV6emxlL3VzZUJvYXJkLmhvb2tcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL3B1enpsZS9zaWRlYmFyXCI7XG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gXCJAL2FwcC9jb21wb25lbnRzL3VzZU1vZGFsLmhvb2tcIjtcbmltcG9ydCB7IFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL21vZGFsXCI7XG5pbXBvcnQgVGltZSBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9wdXp6bGUvdGltZVwiO1xuaW1wb3J0IEdhbWVDbGVhciBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9tb2RhbENvbnRlbnRzL2dhbWVDbGVhclwiO1xuaW1wb3J0IEdhbWVPdmVyIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL21vZGFsQ29udGVudHMvZ2FtZU92ZXJcIjtcbmltcG9ydCBHYW1lUmVzdWx0IGZyb20gXCJAL2FwcC9jb21wb25lbnRzL21vZGFsQ29udGVudHMvZ2FtZVJlc3VsdFwiO1xuXG5pbnRlcmZhY2UgUHV6emxlUHJvcHMge1xuICBwdXp6bGU6IHB1enpsZU1vZGVsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5UHV6emxlKHsgcHV6emxlIH06IFB1enpsZVByb3BzKSB7XG4gIGNvbnN0IHsgaXNPcGVuLCBvcGVuTW9kYWwsIGNsb3NlTW9kYWwgfSA9IHVzZU1vZGFsKCk7XG4gIGNvbnN0IFttb2RhbENoaWxkLCBzZXRNb2RhbENoaWxkXSA9IHVzZVN0YXRlPFJlYWN0Tm9kZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZTxudW1iZXI+KHdpbmRvdy5pbm5lcldpZHRoKTtcblxuICAvLyBvcGVuIGdhbWUgaW5mb3JtYXRpb24gbW9kYWwgYmVmb3JlIHBsYXlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gPEdhbWVDbGVhciAvPjtcbiAgICBzZXRNb2RhbENoaWxkKGVsZW1lbnQpO1xuICB9LCBbXSk7XG5cbiAgLy8gYXJyYW5nZSB0aGUgZWxlbWVudHMgZGVwZW5kcyBvbiB0aGUgd2luZG93IHdpZHRoXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmVzaXplTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICBzZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUxpc3RlbmVyKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplTGlzdGVuZXIpO1xuICAgIH07XG4gIH0sIFtzaXplXSk7XG5cbiAgY29uc3QgcHV6emxlTW9kZWwgPSB7XG4gICAgaWQ6IFwiaGVsbG9cIixcbiAgICBjb2xvcl9jb2RlOiBcImJsYWNrXCIsXG4gICAgYXR0ZW1wdF9jb3VudDogXCJcIixcbiAgICBwcm9ncmVzc19zdGF0ZTogXCJSXCIsXG4gICAgbGltaXRfdGltZTogXCIxXCIsXG4gICAgc3RhcnRfZGF0ZTogXCIyMDI0LTAxLTAxXCIsXG4gICAgZW5kX2RhdGU6IFwiMjAyNC0wMS0wMVwiLFxuICAgIHdvcmRzOiBbXG4gICAgICB7XG4gICAgICAgIHdvcmQ6IFwiT1JNXCIsXG4gICAgICAgIHBhdGg6IFtcbiAgICAgICAgICB7IHg6IDEsIHk6IDUgfSxcbiAgICAgICAgICB7IHg6IDEsIHk6IDQgfSxcbiAgICAgICAgICB7IHg6IDEsIHk6IDMgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHdvcmQ6IFwiV09STERcIixcbiAgICAgICAgcGF0aDogW1xuICAgICAgICAgIHsgeDogNCwgeTogMCB9LFxuICAgICAgICAgIHsgeDogNSwgeTogMCB9LFxuICAgICAgICAgIHsgeDogNiwgeTogMCB9LFxuICAgICAgICAgIHsgeDogNywgeTogMCB9LFxuICAgICAgICAgIHsgeDogOCwgeTogMCB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgd29yZDogXCJQUk9HUkFNXCIsXG4gICAgICAgIHBhdGg6IFtcbiAgICAgICAgICB7IHg6IDIsIHk6IDcgfSxcbiAgICAgICAgICB7IHg6IDMsIHk6IDcgfSxcbiAgICAgICAgICB7IHg6IDQsIHk6IDcgfSxcbiAgICAgICAgICB7IHg6IDUsIHk6IDcgfSxcbiAgICAgICAgICB7IHg6IDYsIHk6IDcgfSxcbiAgICAgICAgICB7IHg6IDcsIHk6IDcgfSxcbiAgICAgICAgICB7IHg6IDgsIHk6IDcgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBwdXp6bGU6IFtcbiAgICAgIFtcIlBcIiwgXCJEXCIsIFwiR1wiLCBcIkhcIiwgXCJXXCIsIFwiT1wiLCBcIlJcIiwgXCJMXCIsIFwiRFwiLCBcIkdcIl0sXG4gICAgICBbXCJJXCIsIFwiVVwiLCBcIlhcIiwgXCJUXCIsIFwiS1wiLCBcIktcIiwgXCJGXCIsIFwiR1wiLCBcIkdcIiwgXCJCXCJdLFxuICAgICAgW1wiT1wiLCBcIkZcIiwgXCJaXCIsIFwiRFwiLCBcIkhcIiwgXCJNXCIsIFwiRlwiLCBcIk1cIiwgXCJVXCIsIFwiQlwiXSxcbiAgICAgIFtcIlhcIiwgXCJPXCIsIFwiQlwiLCBcIlpcIiwgXCJPXCIsIFwiSVwiLCBcIlNcIiwgXCJIXCIsIFwiVVwiLCBcIlpcIl0sXG4gICAgICBbXCJTXCIsIFwiUlwiLCBcIlJcIiwgXCJMXCIsIFwiTFwiLCBcIk9cIiwgXCJTXCIsIFwiVFwiLCBcIkZcIiwgXCJEXCJdLFxuICAgICAgW1wiT1wiLCBcIk1cIiwgXCJMXCIsIFwiTVwiLCBcIkhcIiwgXCJFXCIsIFwiSlwiLCBcIk1cIiwgXCJIXCIsIFwiV1wiXSxcbiAgICAgIFtcIlVcIiwgXCJFXCIsIFwiSVwiLCBcIkRcIiwgXCJRXCIsIFwiVVwiLCBcIk1cIiwgXCJSXCIsIFwiT1wiLCBcIkVcIl0sXG4gICAgICBbXCJIXCIsIFwiT1wiLCBcIlBcIiwgXCJSXCIsIFwiT1wiLCBcIkdcIiwgXCJSXCIsIFwiQVwiLCBcIk1cIiwgXCJOXCJdLFxuICAgICAgW1wiVlwiLCBcIkhcIiwgXCJJXCIsIFwiSFwiLCBcIkFcIiwgXCJVXCIsIFwiRlwiLCBcIlZcIiwgXCJBXCIsIFwiVFwiXSxcbiAgICAgIFtcIllcIiwgXCJHXCIsIFwiRVwiLCBcIk5cIiwgXCJFXCIsIFwiUlwiLCBcIkFcIiwgXCJUXCIsIFwiRVwiLCBcIldcIl0sXG4gICAgXSxcbiAgfTtcblxuICBjb25zdCBib2FyZFByb3BzID0gdXNlQm9hcmQocHV6emxlTW9kZWwsIHt9KTtcbiAgY29uc3QgaGFuZGxlVGltZXJGaW5pc2ggPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IDxHYW1lUmVzdWx0IHJlc3VsdD1cIkZcIiAvPjtcbiAgICBzZXRNb2RhbENoaWxkKGVsZW1lbnQpO1xuICAgIG9wZW5Nb2RhbCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUdhbWVDbGVhciA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gPEdhbWVSZXN1bHQgcmVzdWx0PVwiUFwiIC8+O1xuICAgIHNldE1vZGFsQ2hpbGQoZWxlbWVudCk7XG4gICAgb3Blbk1vZGFsKCk7XG4gIH07XG5cbiAgY29uc3QgaXNDb21wbGV0ZSA9XG4gICAgYm9hcmRQcm9wcy5hbnN3ZXJzLmxlbmd0aCA9PT0gYm9hcmRQcm9wcy5mb3VuZEFuc3dlcnMubGVuZ3RoO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbFxuICAgICAgICBtb2RhbE5hbWU9XCJcIlxuICAgICAgICBtb2RhbFNpemU9XCJzbWFsbFwiXG4gICAgICAgIGNsb3NlQnV0dG9uPXtmYWxzZX1cbiAgICAgICAgb25DbG9zZT17Y2xvc2VNb2RhbH1cbiAgICAgID5cbiAgICAgICAge21vZGFsQ2hpbGR9XG4gICAgICA8L01vZGFsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5wbGF5V3JhcHBlcn0+XG4gICAgICAgIHtzaXplIDw9IDkwMCAmJiAoXG4gICAgICAgICAgPFRpbWVcbiAgICAgICAgICAgIGluaXRpYWxEdXJhdGlvbj17NjB9XG4gICAgICAgICAgICBvbkZpbmlzaD17aGFuZGxlVGltZXJGaW5pc2h9XG4gICAgICAgICAgICBpc0NvbXBsZXRlPXtpc0NvbXBsZXRlfVxuICAgICAgICAgICAgb25DbGVhcj17aGFuZGxlR2FtZUNsZWFyfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxQdXp6bGUgey4uLmJvYXJkUHJvcHN9IC8+XG4gICAgICAgIDxTaWRlYmFyXG4gICAgICAgICAgey4uLmJvYXJkUHJvcHN9XG4gICAgICAgICAgaXNDb21wbGV0ZT17aXNDb21wbGV0ZX1cbiAgICAgICAgICBoYW5kbGVUaW1lckZpbmlzaD17aGFuZGxlVGltZXJGaW5pc2h9XG4gICAgICAgICAgaGFuZGxlR2FtZUNsZWFyPXtoYW5kbGVHYW1lQ2xlYXJ9XG4gICAgICAgICAgd2luZG93V2lkdGg9e3NpemV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjc3MiLCJQdXp6bGUiLCJ1c2VCb2FyZCIsIlNpZGViYXIiLCJ1c2VNb2RhbCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTW9kYWwiLCJUaW1lIiwiR2FtZUNsZWFyIiwiR2FtZVJlc3VsdCIsIlBsYXlQdXp6bGUiLCJwdXp6bGUiLCJpc09wZW4iLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwibW9kYWxDaGlsZCIsInNldE1vZGFsQ2hpbGQiLCJzaXplIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJlbGVtZW50IiwicmVzaXplTGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInB1enpsZU1vZGVsIiwiaWQiLCJjb2xvcl9jb2RlIiwiYXR0ZW1wdF9jb3VudCIsInByb2dyZXNzX3N0YXRlIiwibGltaXRfdGltZSIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsIndvcmRzIiwid29yZCIsInBhdGgiLCJ4IiwieSIsImJvYXJkUHJvcHMiLCJoYW5kbGVUaW1lckZpbmlzaCIsInJlc3VsdCIsImhhbmRsZUdhbWVDbGVhciIsImlzQ29tcGxldGUiLCJhbnN3ZXJzIiwibGVuZ3RoIiwiZm91bmRBbnN3ZXJzIiwibW9kYWxOYW1lIiwibW9kYWxTaXplIiwiY2xvc2VCdXR0b24iLCJvbkNsb3NlIiwiZGl2IiwiY2xhc3NOYW1lIiwicGxheVdyYXBwZXIiLCJpbml0aWFsRHVyYXRpb24iLCJvbkZpbmlzaCIsIm9uQ2xlYXIiLCJ3aW5kb3dXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/puzzle/page.tsx\n"));

/***/ })

});