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

/***/ "(app-pages-browser)/./app/components/three/Background.tsx":
/*!*********************************************!*\
  !*** ./app/components/three/Background.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Background: function() { return /* binding */ Background; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/useTexture.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Background = ()=>{\n    _s();\n    const texture = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_1__.useTexture)(\"textures/forest_background.jpg\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.OrbitControls, {\n                enableZoom: false,\n                enableRotate: false,\n                rotate: true\n            }, void 0, false, {\n                fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/Background.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sphereGeometry\", {\n                        args: [\n                            5,\n                            64,\n                            64\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/Background.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                        map: texture,\n                        side: three__WEBPACK_IMPORTED_MODULE_3__.BackSide\n                    }, void 0, false, {\n                        fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/Background.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/three/Background.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Background, \"q8rsCTPf13E3QkRL8SXytI6B+wA=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_1__.useTexture\n    ];\n});\n_c = Background;\nvar _c;\n$RefreshReg$(_c, \"Background\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3RocmVlL0JhY2tncm91bmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEQ7QUFDL0I7QUFFeEIsTUFBTUcsYUFBYTs7SUFDeEIsTUFBTUMsVUFBVUgsNkRBQVVBLENBQUM7SUFFM0IscUJBQ0U7OzBCQUNFLDhEQUFDRCw0REFBYUE7Z0JBQUNLLFlBQVk7Z0JBQU9DLGNBQWM7Z0JBQU9DLE1BQU07Ozs7OzswQkFDN0QsOERBQUNDOztrQ0FDQyw4REFBQ0M7d0JBQWVDLE1BQU07NEJBQUM7NEJBQUc7NEJBQUk7eUJBQUc7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFxQkMsS0FBS1I7d0JBQVNTLE1BQU1YLDJDQUFjOzs7Ozs7Ozs7Ozs7OztBQUloRSxFQUFFO0dBWldDOztRQUNLRix5REFBVUE7OztLQURmRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy90aHJlZS9CYWNrZ3JvdW5kLnRzeD9mMjA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yYml0Q29udHJvbHMsIHVzZVRleHR1cmUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuXG5leHBvcnQgY29uc3QgQmFja2dyb3VuZCA9ICgpID0+IHtcbiAgY29uc3QgdGV4dHVyZSA9IHVzZVRleHR1cmUoXCJ0ZXh0dXJlcy9mb3Jlc3RfYmFja2dyb3VuZC5qcGdcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE9yYml0Q29udHJvbHMgZW5hYmxlWm9vbT17ZmFsc2V9IGVuYWJsZVJvdGF0ZT17ZmFsc2V9IHJvdGF0ZSAvPlxuICAgICAgPG1lc2g+XG4gICAgICAgIDxzcGhlcmVHZW9tZXRyeSBhcmdzPXtbNSwgNjQsIDY0XX0gLz5cbiAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIG1hcD17dGV4dHVyZX0gc2lkZT17VEhSRUUuQmFja1NpZGV9IC8+XG4gICAgICA8L21lc2g+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIk9yYml0Q29udHJvbHMiLCJ1c2VUZXh0dXJlIiwiVEhSRUUiLCJCYWNrZ3JvdW5kIiwidGV4dHVyZSIsImVuYWJsZVpvb20iLCJlbmFibGVSb3RhdGUiLCJyb3RhdGUiLCJtZXNoIiwic3BoZXJlR2VvbWV0cnkiLCJhcmdzIiwibWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJtYXAiLCJzaWRlIiwiQmFja1NpZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/three/Background.tsx\n"));

/***/ })

});