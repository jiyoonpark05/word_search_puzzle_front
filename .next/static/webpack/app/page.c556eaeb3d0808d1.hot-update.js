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

/***/ "(app-pages-browser)/./app/components/three/TextArea.tsx":
/*!*******************************************!*\
  !*** ./app/components/three/TextArea.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/recoil/es/index.js\");\n/* harmony import */ var _BunnyStates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BunnyStates */ \"(app-pages-browser)/./app/components/three/BunnyStates.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _textArea_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textArea.css */ \"(app-pages-browser)/./app/components/three/textArea.css.ts\");\n/* harmony import */ var _public_images_textbubble_default_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @public/images/textbubble_default.png */ \"(app-pages-browser)/./public/images/textbubble_default.png\");\n/* harmony import */ var _public_images_textbubble_selector_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @public/images/textbubble_selector.png */ \"(app-pages-browser)/./public/images/textbubble_selector.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst languageList = [\n    \"ENGLISH\",\n    \"GERMAN\"\n];\nconst TextArea = ()=>{\n    _s();\n    const [state, setState] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_BunnyStates__WEBPACK_IMPORTED_MODULE_2__.listeningState);\n    const [senario, setSenario] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_BunnyStates__WEBPACK_IMPORTED_MODULE_2__.senarioState);\n    const [bunny, setBunny] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_BunnyStates__WEBPACK_IMPORTED_MODULE_2__.bunnyState);\n    const [userName, setUserName] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_BunnyStates__WEBPACK_IMPORTED_MODULE_2__.UserNameState);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [userNameInput, setUserNameInput] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [language, setLanguage] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_BunnyStates__WEBPACK_IMPORTED_MODULE_2__.studyLanguageState);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        switch(senario){\n            case 1:\n                setState(\"Listen\");\n                setText(textArry.greeting);\n                break;\n            case 2:\n                // if there is a name on local storage, hey to the user\n                // if not let user write their name\n                localStorage.getItem(\"puzzleUserName\") !== null ? setSenario(6) : setSenario(3);\n                break;\n            case 3:\n                setState(\"Listen\");\n                setText(textArry.askName);\n                setBunny(\"askName\");\n                break;\n            case 4:\n                setState(\"Speak\");\n                break;\n            case 5:\n                setState(\"Listen\");\n                setText(textArry.reaction.replace(\"<USERNAME>\", userName));\n                break;\n            case 6:\n                setText(textArry.recognize.replace(\"<USERNAME>\", userName));\n                setBunny(\"askName\");\n                break;\n            case 7:\n                setState(\"Select\");\n                setText(textArry.chooseType);\n                break;\n            default:\n        }\n    }, [\n        senario\n    ]);\n    const textArry = {\n        greeting: \"welcome to Puzzle forrest\",\n        askName: \"How Do I call you?\",\n        reaction: \"oh, <USERNAME> it's a beautiful name\",\n        recognize: \"oh, <USERNAME> it's glad to see you again\",\n        chooseType: \"awesome, what do you want for today?\"\n    };\n    const handleSubmitName = ()=>{\n        if (userNameInput == \"\") {\n            return;\n        }\n        setUserName(userNameInput);\n        setUserNameInput(\"\");\n        setSenario(senario + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: _textArea_css__WEBPACK_IMPORTED_MODULE_4__.textArea,\n        children: state == \"Speak\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: _textArea_css__WEBPACK_IMPORTED_MODULE_4__.inputBubble,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: _textArea_css__WEBPACK_IMPORTED_MODULE_4__.input,\n                    value: userNameInput,\n                    onChange: (e)=>setUserNameInput(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/TextArea.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: _textArea_css__WEBPACK_IMPORTED_MODULE_4__.sendButton,\n                    onClick: handleSubmitName\n                }, void 0, false, {\n                    fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/TextArea.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/TextArea.tsx\",\n            lineNumber: 84,\n            columnNumber: 9\n        }, undefined) : state == \"Listen\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: _textArea_css__WEBPACK_IMPORTED_MODULE_4__.textBubble,\n            onClick: (e)=>senario == 5 ? setSenario(senario + 2) : setSenario(senario + 1),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _textArea_css__WEBPACK_IMPORTED_MODULE_4__.bubbleWrapper({\n                    type: \"default\"\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        className: _textArea_css__WEBPACK_IMPORTED_MODULE_4__.bubble,\n                        src: _public_images_textbubble_default_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        alt: \"img\"\n                    }, void 0, false, {\n                        fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/TextArea.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: _textArea_css__WEBPACK_IMPORTED_MODULE_4__.text,\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/TextArea.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/TextArea.tsx\",\n                lineNumber: 100,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/TextArea.tsx\",\n            lineNumber: 94,\n            columnNumber: 9\n        }, undefined) : state == \"Select\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: _textArea_css__WEBPACK_IMPORTED_MODULE_4__.textBubble,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _textArea_css__WEBPACK_IMPORTED_MODULE_4__.bubbleWrapper({\n                    type: \"select\"\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        className: _textArea_css__WEBPACK_IMPORTED_MODULE_4__.bubble,\n                        src: _public_images_textbubble_selector_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                        alt: \"img\"\n                    }, void 0, false, {\n                        fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/TextArea.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: _textArea_css__WEBPACK_IMPORTED_MODULE_4__.text,\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/TextArea.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: _textArea_css__WEBPACK_IMPORTED_MODULE_4__.selectWrapper,\n                        children: languageList.map((lang)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: _textArea_css__WEBPACK_IMPORTED_MODULE_4__.options,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: lang\n                                }, void 0, false, {\n                                    fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/TextArea.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/TextArea.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 19\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/TextArea.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/TextArea.tsx\",\n                lineNumber: 107,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/TextArea.tsx\",\n            lineNumber: 106,\n            columnNumber: 9\n        }, undefined) : null\n    }, void 0, false, {\n        fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/TextArea.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TextArea, \"bOX85mDK+Bu3hI4Tt9GuNyAtsWg=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState\n    ];\n});\n_c = TextArea;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextArea);\nvar _c;\n$RefreshReg$(_c, \"TextArea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3RocmVlL1RleHRBcmVhLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBT2pCO0FBQ1E7QUFDTztBQUM0QjtBQUNBO0FBRXRCO0FBQzVDLE1BQU1ZLGVBQWU7SUFBQztJQUFXO0NBQVM7QUFFMUMsTUFBTUMsV0FBVzs7SUFDZixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2Ysc0RBQWNBLENBQUNFLHdEQUFjQTtJQUN2RCxNQUFNLENBQUNjLFNBQVNDLFdBQVcsR0FBR2pCLHNEQUFjQSxDQUFDRyxzREFBWUE7SUFDekQsTUFBTSxDQUFDZSxPQUFPQyxTQUFTLEdBQUduQixzREFBY0EsQ0FBQ0Msb0RBQVVBO0lBQ25ELE1BQU0sQ0FBQ21CLFVBQVVDLFlBQVksR0FBR3JCLHNEQUFjQSxDQUFDSyx1REFBYUE7SUFDNUQsTUFBTSxDQUFDaUIsTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNhLGVBQWVDLGlCQUFpQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBRzNCLHNEQUFjQSxDQUFDSSw0REFBa0JBO0lBRWpFTSxnREFBU0EsQ0FBQztRQUNSLE9BQVFNO1lBQ04sS0FBSztnQkFDSEQsU0FBUztnQkFDVFEsUUFBUUssU0FBU0MsUUFBUTtnQkFDekI7WUFFRixLQUFLO2dCQUNILHVEQUF1RDtnQkFDdkQsbUNBQW1DO2dCQUNuQ0MsYUFBYUMsT0FBTyxDQUFDLHNCQUFzQixPQUN2Q2QsV0FBVyxLQUNYQSxXQUFXO2dCQUNmO1lBQ0YsS0FBSztnQkFDSEYsU0FBUztnQkFDVFEsUUFBUUssU0FBU0ksT0FBTztnQkFDeEJiLFNBQVM7Z0JBQ1Q7WUFDRixLQUFLO2dCQUNISixTQUFTO2dCQUNUO1lBQ0YsS0FBSztnQkFDSEEsU0FBUztnQkFDVFEsUUFBUUssU0FBU0ssUUFBUSxDQUFDQyxPQUFPLENBQUMsY0FBY2Q7Z0JBQ2hEO1lBQ0YsS0FBSztnQkFDSEcsUUFBUUssU0FBU08sU0FBUyxDQUFDRCxPQUFPLENBQUMsY0FBY2Q7Z0JBQ2pERCxTQUFTO2dCQUNUO1lBQ0YsS0FBSztnQkFDSEosU0FBUztnQkFDVFEsUUFBUUssU0FBU1EsVUFBVTtnQkFDM0I7WUFDRjtRQUNGO0lBQ0YsR0FBRztRQUFDcEI7S0FBUTtJQUVaLE1BQU1ZLFdBQVc7UUFDZkMsVUFBVTtRQUNWRyxTQUFTO1FBQ1RDLFVBQVU7UUFDVkUsV0FBVztRQUNYQyxZQUFZO0lBQ2Q7SUFFQSxNQUFNQyxtQkFBbUI7UUFDdkIsSUFBSWIsaUJBQWlCLElBQUk7WUFDdkI7UUFDRjtRQUNBSCxZQUFZRztRQUNaQyxpQkFBaUI7UUFDakJSLFdBQVdELFVBQVU7SUFDdkI7SUFFQSxxQkFDRSw4REFBQ3NCO1FBQUlDLFdBQVdoQyxtREFBWTtrQkFDekJPLFNBQVMsd0JBQ1IsOERBQUN3QjtZQUFJQyxXQUFXaEMsc0RBQWU7OzhCQUM3Qiw4REFBQ21DO29CQUNDQyxNQUFLO29CQUNMSixXQUFXaEMsZ0RBQVM7b0JBQ3BCcUMsT0FBT3BCO29CQUNQcUIsVUFBVSxDQUFDQyxJQUFNckIsaUJBQWlCcUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7OEJBRWxELDhEQUFDTjtvQkFBSUMsV0FBV2hDLHFEQUFjO29CQUFFMEMsU0FBU1o7Ozs7Ozs7Ozs7O3dCQUV6Q3ZCLFNBQVMseUJBQ1gsOERBQUN3QjtZQUNDQyxXQUFXaEMscURBQWM7WUFDekIwQyxTQUFTLENBQUNILElBQ1I5QixXQUFXLElBQUlDLFdBQVdELFVBQVUsS0FBS0MsV0FBV0QsVUFBVTtzQkFHaEUsNEVBQUNzQjtnQkFBSUMsV0FBV2hDLHdEQUFpQixDQUFDO29CQUFFb0MsTUFBTTtnQkFBVTs7a0NBQ2xELDhEQUFDckMsbURBQUtBO3dCQUFDaUMsV0FBV2hDLGlEQUFVO3dCQUFFOEMsS0FBSzdDLDZFQUFhQTt3QkFBRThDLEtBQUk7Ozs7OztrQ0FDdEQsOERBQUNDO3dCQUFLaEIsV0FBV2hDLCtDQUFRO2tDQUFHZTs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFHOUJSLFNBQVMseUJBQ1gsOERBQUN3QjtZQUFJQyxXQUFXaEMscURBQWM7c0JBQzVCLDRFQUFDK0I7Z0JBQUlDLFdBQVdoQyx3REFBaUIsQ0FBQztvQkFBRW9DLE1BQU07Z0JBQVM7O2tDQUNqRCw4REFBQ3JDLG1EQUFLQTt3QkFBQ2lDLFdBQVdoQyxpREFBVTt3QkFBRThDLEtBQUs1Qyw4RUFBWUE7d0JBQUU2QyxLQUFJOzs7Ozs7a0NBQ3JELDhEQUFDQzt3QkFBS2hCLFdBQVdoQywrQ0FBUTtrQ0FBR2U7Ozs7OztrQ0FDNUIsOERBQUNnQjt3QkFBSUMsV0FBV2hDLHdEQUFpQjtrQ0FDOUJLLGFBQWE2QyxHQUFHLENBQUMsQ0FBQ0M7NEJBQ2pCLHFCQUNFLDhEQUFDcEI7Z0NBQUlDLFdBQVdoQyxrREFBVzswQ0FDekIsNEVBQUNnRDs4Q0FBTUc7Ozs7Ozs7Ozs7O3dCQUdiOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUlKOzs7Ozs7QUFHVjtHQTNHTTdDOztRQUNzQmIsa0RBQWNBO1FBQ1ZBLGtEQUFjQTtRQUNsQkEsa0RBQWNBO1FBQ1JBLGtEQUFjQTtRQUdkQSxrREFBY0E7OztLQVAxQ2E7QUE2R04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvdGhyZWUvVGV4dEFyZWEudHN4PzQwNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQge1xuICBidW5ueVN0YXRlLFxuICBsaXN0ZW5pbmdTdGF0ZSxcbiAgc2VuYXJpb1N0YXRlLFxuICBzdHVkeUxhbmd1YWdlU3RhdGUsXG4gIFVzZXJOYW1lU3RhdGUsXG59IGZyb20gXCIuL0J1bm55U3RhdGVzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi90ZXh0QXJlYS5jc3NcIjtcbmltcG9ydCBkZWZhdWx0QnViYmxlIGZyb20gXCJAcHVibGljL2ltYWdlcy90ZXh0YnViYmxlX2RlZmF1bHQucG5nXCI7XG5pbXBvcnQgc2VsZWN0QnViYmxlIGZyb20gXCJAcHVibGljL2ltYWdlcy90ZXh0YnViYmxlX3NlbGVjdG9yLnBuZ1wiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBsYW5ndWFnZUxpc3QgPSBbXCJFTkdMSVNIXCIsIFwiR0VSTUFOXCJdO1xuXG5jb25zdCBUZXh0QXJlYSA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VSZWNvaWxTdGF0ZShsaXN0ZW5pbmdTdGF0ZSk7XG4gIGNvbnN0IFtzZW5hcmlvLCBzZXRTZW5hcmlvXSA9IHVzZVJlY29pbFN0YXRlKHNlbmFyaW9TdGF0ZSk7XG4gIGNvbnN0IFtidW5ueSwgc2V0QnVubnldID0gdXNlUmVjb2lsU3RhdGUoYnVubnlTdGF0ZSk7XG4gIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlUmVjb2lsU3RhdGUoVXNlck5hbWVTdGF0ZSk7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdXNlck5hbWVJbnB1dCwgc2V0VXNlck5hbWVJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VSZWNvaWxTdGF0ZShzdHVkeUxhbmd1YWdlU3RhdGUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3dpdGNoIChzZW5hcmlvKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHNldFN0YXRlKFwiTGlzdGVuXCIpO1xuICAgICAgICBzZXRUZXh0KHRleHRBcnJ5LmdyZWV0aW5nKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBuYW1lIG9uIGxvY2FsIHN0b3JhZ2UsIGhleSB0byB0aGUgdXNlclxuICAgICAgICAvLyBpZiBub3QgbGV0IHVzZXIgd3JpdGUgdGhlaXIgbmFtZVxuICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInB1enpsZVVzZXJOYW1lXCIpICE9PSBudWxsXG4gICAgICAgICAgPyBzZXRTZW5hcmlvKDYpXG4gICAgICAgICAgOiBzZXRTZW5hcmlvKDMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgc2V0U3RhdGUoXCJMaXN0ZW5cIik7XG4gICAgICAgIHNldFRleHQodGV4dEFycnkuYXNrTmFtZSk7XG4gICAgICAgIHNldEJ1bm55KFwiYXNrTmFtZVwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHNldFN0YXRlKFwiU3BlYWtcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBzZXRTdGF0ZShcIkxpc3RlblwiKTtcbiAgICAgICAgc2V0VGV4dCh0ZXh0QXJyeS5yZWFjdGlvbi5yZXBsYWNlKFwiPFVTRVJOQU1FPlwiLCB1c2VyTmFtZSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgc2V0VGV4dCh0ZXh0QXJyeS5yZWNvZ25pemUucmVwbGFjZShcIjxVU0VSTkFNRT5cIiwgdXNlck5hbWUpKTtcbiAgICAgICAgc2V0QnVubnkoXCJhc2tOYW1lXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgc2V0U3RhdGUoXCJTZWxlY3RcIik7XG4gICAgICAgIHNldFRleHQodGV4dEFycnkuY2hvb3NlVHlwZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH0sIFtzZW5hcmlvXSk7XG5cbiAgY29uc3QgdGV4dEFycnkgPSB7XG4gICAgZ3JlZXRpbmc6IFwid2VsY29tZSB0byBQdXp6bGUgZm9ycmVzdFwiLFxuICAgIGFza05hbWU6IFwiSG93IERvIEkgY2FsbCB5b3U/XCIsXG4gICAgcmVhY3Rpb246IFwib2gsIDxVU0VSTkFNRT4gaXQncyBhIGJlYXV0aWZ1bCBuYW1lXCIsXG4gICAgcmVjb2duaXplOiBcIm9oLCA8VVNFUk5BTUU+IGl0J3MgZ2xhZCB0byBzZWUgeW91IGFnYWluXCIsXG4gICAgY2hvb3NlVHlwZTogXCJhd2Vzb21lLCB3aGF0IGRvIHlvdSB3YW50IGZvciB0b2RheT9cIixcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXROYW1lID0gKCkgPT4ge1xuICAgIGlmICh1c2VyTmFtZUlucHV0ID09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0VXNlck5hbWUodXNlck5hbWVJbnB1dCk7XG4gICAgc2V0VXNlck5hbWVJbnB1dChcIlwiKTtcbiAgICBzZXRTZW5hcmlvKHNlbmFyaW8gKyAxKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MudGV4dEFyZWF9PlxuICAgICAge3N0YXRlID09IFwiU3BlYWtcIiA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5pbnB1dEJ1YmJsZX0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5pbnB1dH1cbiAgICAgICAgICAgIHZhbHVlPXt1c2VyTmFtZUlucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyTmFtZUlucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Muc2VuZEJ1dHRvbn0gb25DbGljaz17aGFuZGxlU3VibWl0TmFtZX0+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IHN0YXRlID09IFwiTGlzdGVuXCIgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Nzcy50ZXh0QnViYmxlfVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PlxuICAgICAgICAgICAgc2VuYXJpbyA9PSA1ID8gc2V0U2VuYXJpbyhzZW5hcmlvICsgMikgOiBzZXRTZW5hcmlvKHNlbmFyaW8gKyAxKVxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuYnViYmxlV3JhcHBlcih7IHR5cGU6IFwiZGVmYXVsdFwiIH0pfT5cbiAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e2Nzcy5idWJibGV9IHNyYz17ZGVmYXVsdEJ1YmJsZX0gYWx0PVwiaW1nXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3NzLnRleHR9Pnt0ZXh0fTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogc3RhdGUgPT0gXCJTZWxlY3RcIiA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy50ZXh0QnViYmxlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmJ1YmJsZVdyYXBwZXIoeyB0eXBlOiBcInNlbGVjdFwiIH0pfT5cbiAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e2Nzcy5idWJibGV9IHNyYz17c2VsZWN0QnViYmxlfSBhbHQ9XCJpbWdcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3MudGV4dH0+e3RleHR9PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5zZWxlY3RXcmFwcGVyfT5cbiAgICAgICAgICAgICAge2xhbmd1YWdlTGlzdC5tYXAoKGxhbmcpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5vcHRpb25zfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xhbmd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhO1xuIl0sIm5hbWVzIjpbInVzZVJlY29pbFN0YXRlIiwiYnVubnlTdGF0ZSIsImxpc3RlbmluZ1N0YXRlIiwic2VuYXJpb1N0YXRlIiwic3R1ZHlMYW5ndWFnZVN0YXRlIiwiVXNlck5hbWVTdGF0ZSIsIkltYWdlIiwiY3NzIiwiZGVmYXVsdEJ1YmJsZSIsInNlbGVjdEJ1YmJsZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibGFuZ3VhZ2VMaXN0IiwiVGV4dEFyZWEiLCJzdGF0ZSIsInNldFN0YXRlIiwic2VuYXJpbyIsInNldFNlbmFyaW8iLCJidW5ueSIsInNldEJ1bm55IiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsInRleHQiLCJzZXRUZXh0IiwidXNlck5hbWVJbnB1dCIsInNldFVzZXJOYW1lSW5wdXQiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwidGV4dEFycnkiLCJncmVldGluZyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhc2tOYW1lIiwicmVhY3Rpb24iLCJyZXBsYWNlIiwicmVjb2duaXplIiwiY2hvb3NlVHlwZSIsImhhbmRsZVN1Ym1pdE5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJ0ZXh0QXJlYSIsImlucHV0QnViYmxlIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJzZW5kQnV0dG9uIiwib25DbGljayIsInRleHRCdWJibGUiLCJidWJibGVXcmFwcGVyIiwiYnViYmxlIiwic3JjIiwiYWx0Iiwic3BhbiIsInNlbGVjdFdyYXBwZXIiLCJtYXAiLCJsYW5nIiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/three/TextArea.tsx\n"));

/***/ })

});