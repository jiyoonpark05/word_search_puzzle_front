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

/***/ "(app-pages-browser)/./app/components/puzzle/puzzle.tsx":
/*!******************************************!*\
  !*** ./app/components/puzzle/puzzle.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight */ \"(app-pages-browser)/./app/components/puzzle/highlight.tsx\");\n/* harmony import */ var _foundAnswers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundAnswers */ \"(app-pages-browser)/./app/components/puzzle/foundAnswers.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _puzzle_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./puzzle.types */ \"(app-pages-browser)/./app/components/puzzle/puzzle.types.ts\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: relative;\\n  flex-basis: 70%;\\n  /* max-width: calc(100vw - 50%); */\\n  width: 100%;\\n  height: calc(100% - 40px);\\n  background-color: white;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  position: absolute;\\n  z-index: 10;\\n  cursor: pointer;\\n  width: 100%;\\n  height: 100%;\\n  display: grid;\\n  row-gap: 0;\\n  column-gap: 0;\\n  grid-template-columns: repeat(\",\n        \", 1fr);\\n  grid-template-rows: repeat(\",\n        \", 1fr);\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  user-select: none;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 24px;\\n  aspect-ratio: 1;\\n  font-weight: 600;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Puzzle = (param)=>{\n    let { ...props } = param;\n    _s();\n    const { words, foundAnswers, start, move, handleStart, handleMove, handleFinished } = props;\n    let rowCount = words.length;\n    let columnCount = words[0].length;\n    const gridRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    // cells from the puzzle board api\n    const renderCells = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        const cellList = [];\n        for(let y = 0; y < rowCount; y += 1){\n            for(let x = 0; x < columnCount; x += 1){\n                const keyValue = \"\".concat(x, \"-\").concat(y);\n                cellList.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(WordTile, {\n                    className: keyValue,\n                    \"data-x\": x,\n                    \"data-y\": y,\n                    children: words[y][x]\n                }, keyValue, false, {\n                    fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/puzzle/puzzle.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, undefined));\n            }\n        }\n        return cellList;\n    }, [\n        columnCount,\n        rowCount,\n        words\n    ]);\n    const handleMouseDown = (e)=>{\n        const x = parseInt(e.target.getAttribute(\"data-x\"), 10);\n        const y = parseInt(e.target.getAttribute(\"data-y\"), 10);\n        handleStart({\n            x,\n            y\n        });\n    };\n    const handleMouseMove = (e)=>{\n        const x = parseInt(e.target.getAttribute(\"data-x\"), 10);\n        const y = parseInt(e.target.getAttribute(\"data-y\"), 10);\n        handleMove({\n            x,\n            y\n        });\n    };\n    const handleMouseUp = (e)=>{\n        handleFinished();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_foundAnswers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                parent: gridRef.current,\n                foundAnswers: foundAnswers\n            }, void 0, false, {\n                fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/puzzle/puzzle.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_highlight__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                parent: gridRef.current,\n                start: start,\n                end: move,\n                color: _puzzle_types__WEBPACK_IMPORTED_MODULE_5__.HIGHLIGHT_COLOR[foundAnswers.length % _puzzle_types__WEBPACK_IMPORTED_MODULE_5__.HIGHLIGHT_COLOR.length]\n            }, void 0, false, {\n                fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/puzzle/puzzle.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Grid, {\n                ref: gridRef,\n                row: rowCount,\n                column: columnCount,\n                onMouseDown: handleMouseDown,\n                onMouseMove: handleMouseMove,\n                onMouseUp: handleMouseUp,\n                style: {\n                    pointerEvents: props.disabled ? \"none\" : \"auto\"\n                },\n                children: renderCells\n            }, void 0, false, {\n                fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/puzzle/puzzle.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/parkjiyoon/project/word_search_puzzle_front/app/components/puzzle/puzzle.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Puzzle, \"J0XwCpFA5CjErQ0PiDV0tBSp44k=\");\n_c = Puzzle;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n_c1 = Container;\nconst Grid = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1(), (props)=>props.column, (props)=>props.row);\n_c2 = Grid;\nconst WordTile = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject2());\n_c3 = WordTile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Puzzle);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Puzzle\");\n$RefreshReg$(_c1, \"Container\");\n$RefreshReg$(_c2, \"Grid\");\n$RefreshReg$(_c3, \"WordTile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3B1enpsZS9wdXp6bGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0o7QUFDTTtBQUNIO0FBRXNCO0FBRTdELE1BQU1NLFNBQVM7UUFBQyxFQUFFLEdBQUdDLE9BQW1COztJQUN0QyxNQUFNLEVBQ0pDLEtBQUssRUFDTEMsWUFBWSxFQUNaQyxLQUFLLEVBQ0xDLElBQUksRUFDSkMsV0FBVyxFQUNYQyxVQUFVLEVBQ1ZDLGNBQWMsRUFDZixHQUFHUDtJQUVKLElBQUlRLFdBQVdQLE1BQU1RLE1BQU07SUFDM0IsSUFBSUMsY0FBY1QsS0FBSyxDQUFDLEVBQUUsQ0FBQ1EsTUFBTTtJQUNqQyxNQUFNRSxVQUFVakIsNkNBQU1BLENBQWlCO0lBRXZDLGtDQUFrQztJQUNsQyxNQUFNa0IsY0FBY25CLDhDQUFPQSxDQUFDO1FBQzFCLE1BQU1vQixXQUFXLEVBQUU7UUFDbkIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlOLFVBQVVNLEtBQUssRUFBRztZQUNwQyxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUwsYUFBYUssS0FBSyxFQUFHO2dCQUN2QyxNQUFNQyxXQUFXLEdBQVFGLE9BQUxDLEdBQUUsS0FBSyxPQUFGRDtnQkFDekJELFNBQVNJLElBQUksZUFDWCw4REFBQ0M7b0JBQVNDLFdBQVdIO29CQUF5QkksVUFBUUw7b0JBQUdNLFVBQVFQOzhCQUM5RGIsS0FBSyxDQUFDYSxFQUFFLENBQUNDLEVBQUU7bUJBRHNCQzs7Ozs7WUFJeEM7UUFDRjtRQUNBLE9BQU9IO0lBQ1QsR0FBRztRQUFDSDtRQUFhRjtRQUFVUDtLQUFNO0lBRWpDLE1BQU1xQixrQkFBa0IsQ0FBQ0M7UUFDdkIsTUFBTVIsSUFBWVMsU0FBU0QsRUFBRUUsTUFBTSxDQUFDQyxZQUFZLENBQUMsV0FBVztRQUM1RCxNQUFNWixJQUFZVSxTQUFTRCxFQUFFRSxNQUFNLENBQUNDLFlBQVksQ0FBQyxXQUFXO1FBRTVEckIsWUFBWTtZQUFFVTtZQUFHRDtRQUFFO0lBQ3JCO0lBRUEsTUFBTWEsa0JBQWtCLENBQUNKO1FBQ3ZCLE1BQU1SLElBQVlTLFNBQVNELEVBQUVFLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDLFdBQVc7UUFDNUQsTUFBTVosSUFBWVUsU0FBU0QsRUFBRUUsTUFBTSxDQUFDQyxZQUFZLENBQUMsV0FBVztRQUM1RHBCLFdBQVc7WUFBRVM7WUFBR0Q7UUFBRTtJQUNwQjtJQUVBLE1BQU1jLGdCQUFnQixDQUFDTDtRQUNyQmhCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3NCOzswQkFDQyw4REFBQ2pDLHFEQUFZQTtnQkFBQ2tDLFFBQVFuQixRQUFRb0IsT0FBTztnQkFBRTdCLGNBQWNBOzs7Ozs7MEJBQ3JELDhEQUFDUCxrREFBU0E7Z0JBQ1JtQyxRQUFRbkIsUUFBUW9CLE9BQU87Z0JBQ3ZCNUIsT0FBT0E7Z0JBQ1A2QixLQUFLNUI7Z0JBQ0w2QixPQUFPbkMsMERBQWUsQ0FBQ0ksYUFBYU8sTUFBTSxHQUFHWCwwREFBZUEsQ0FBQ1csTUFBTSxDQUFDOzs7Ozs7MEJBRXRFLDhEQUFDeUI7Z0JBQ0NDLEtBQUt4QjtnQkFDTHlCLEtBQUs1QjtnQkFDTDZCLFFBQVEzQjtnQkFDUjRCLGFBQWFoQjtnQkFDYmlCLGFBQWFaO2dCQUNiYSxXQUFXWjtnQkFDWGEsT0FBTztvQkFDTEMsZUFBZTFDLE1BQU0yQyxRQUFRLEdBQUcsU0FBUztnQkFDM0M7MEJBRUMvQjs7Ozs7Ozs7Ozs7O0FBSVQ7R0F4RU1iO0tBQUFBO0FBMEVOLE1BQU04QixZQUFZaEMseURBQU1BLENBQUMrQyxHQUFHO01BQXRCZjtBQVNOLE1BQU1LLE9BQU9yQyx5REFBTUEsQ0FBQytDLEdBQUcscUJBU1csQ0FBQzVDLFFBQVVBLE1BQU1xQyxNQUFNLEVBQzFCLENBQUNyQyxRQUFVQSxNQUFNb0MsR0FBRztNQVY3Q0Y7QUFhTixNQUFNaEIsV0FBV3JCLHlEQUFNQSxDQUFDK0MsR0FBRztNQUFyQjFCO0FBVU4sK0RBQWVuQixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3B1enpsZS9wdXp6bGUudHN4P2NiNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gXCIuL2hpZ2hsaWdodFwiO1xuaW1wb3J0IEZvdW5kQW5zd2VycyBmcm9tIFwiLi9mb3VuZEFuc3dlcnNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCB7IEJvYXJkUHJvcHMsIEhJR0hMSUdIVF9DT0xPUiB9IGZyb20gXCIuL3B1enpsZS50eXBlc1wiO1xuXG5jb25zdCBQdXp6bGUgPSAoeyAuLi5wcm9wcyB9OiBCb2FyZFByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB3b3JkcyxcbiAgICBmb3VuZEFuc3dlcnMsXG4gICAgc3RhcnQsXG4gICAgbW92ZSxcbiAgICBoYW5kbGVTdGFydCxcbiAgICBoYW5kbGVNb3ZlLFxuICAgIGhhbmRsZUZpbmlzaGVkLFxuICB9ID0gcHJvcHM7XG5cbiAgbGV0IHJvd0NvdW50ID0gd29yZHMubGVuZ3RoO1xuICBsZXQgY29sdW1uQ291bnQgPSB3b3Jkc1swXS5sZW5ndGg7XG4gIGNvbnN0IGdyaWRSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIC8vIGNlbGxzIGZyb20gdGhlIHB1enpsZSBib2FyZCBhcGlcbiAgY29uc3QgcmVuZGVyQ2VsbHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjZWxsTGlzdCA9IFtdO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgcm93Q291bnQ7IHkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjb2x1bW5Db3VudDsgeCArPSAxKSB7XG4gICAgICAgIGNvbnN0IGtleVZhbHVlID0gYCR7eH0tJHt5fWA7XG4gICAgICAgIGNlbGxMaXN0LnB1c2goXG4gICAgICAgICAgPFdvcmRUaWxlIGNsYXNzTmFtZT17a2V5VmFsdWV9IGtleT17a2V5VmFsdWV9IGRhdGEteD17eH0gZGF0YS15PXt5fT5cbiAgICAgICAgICAgIHt3b3Jkc1t5XVt4XX1cbiAgICAgICAgICA8L1dvcmRUaWxlPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2VsbExpc3Q7XG4gIH0sIFtjb2x1bW5Db3VudCwgcm93Q291bnQsIHdvcmRzXSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHg6IG51bWJlciA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteFwiKSwgMTApO1xuICAgIGNvbnN0IHk6IG51bWJlciA9IHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEteVwiKSwgMTApO1xuXG4gICAgaGFuZGxlU3RhcnQoeyB4LCB5IH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB4OiBudW1iZXIgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiksIDEwKTtcbiAgICBjb25zdCB5OiBudW1iZXIgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiksIDEwKTtcbiAgICBoYW5kbGVNb3ZlKHsgeCwgeSB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKGU6IGFueSkgPT4ge1xuICAgIGhhbmRsZUZpbmlzaGVkKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEZvdW5kQW5zd2VycyBwYXJlbnQ9e2dyaWRSZWYuY3VycmVudH0gZm91bmRBbnN3ZXJzPXtmb3VuZEFuc3dlcnN9IC8+XG4gICAgICA8SGlnaGxpZ2h0XG4gICAgICAgIHBhcmVudD17Z3JpZFJlZi5jdXJyZW50fVxuICAgICAgICBzdGFydD17c3RhcnR9XG4gICAgICAgIGVuZD17bW92ZX1cbiAgICAgICAgY29sb3I9e0hJR0hMSUdIVF9DT0xPUltmb3VuZEFuc3dlcnMubGVuZ3RoICUgSElHSExJR0hUX0NPTE9SLmxlbmd0aF19XG4gICAgICAvPlxuICAgICAgPEdyaWRcbiAgICAgICAgcmVmPXtncmlkUmVmfVxuICAgICAgICByb3c9e3Jvd0NvdW50fVxuICAgICAgICBjb2x1bW49e2NvbHVtbkNvdW50fVxuICAgICAgICBvbk1vdXNlRG93bj17aGFuZGxlTW91c2VEb3dufVxuICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxuICAgICAgICBvbk1vdXNlVXA9e2hhbmRsZU1vdXNlVXB9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9pbnRlckV2ZW50czogcHJvcHMuZGlzYWJsZWQgPyBcIm5vbmVcIiA6IFwiYXV0b1wiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7cmVuZGVyQ2VsbHN9XG4gICAgICA8L0dyaWQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtYmFzaXM6IDcwJTtcbiAgLyogbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNTAlKTsgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuYDtcblxuY29uc3QgR3JpZCA9IHN0eWxlZC5kaXY8eyBjb2x1bW46IG51bWJlcjsgcm93OiBudW1iZXIgfT5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcm93LWdhcDogMDtcbiAgY29sdW1uLWdhcDogMDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJHsocHJvcHMpID0+IHByb3BzLmNvbHVtbn0sIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KCR7KHByb3BzKSA9PiBwcm9wcy5yb3d9LCAxZnIpO1xuYDtcblxuY29uc3QgV29yZFRpbGUgPSBzdHlsZWQuZGl2YFxuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBmb250LXdlaWdodDogNjAwO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgUHV6emxlO1xuIl0sIm5hbWVzIjpbInVzZU1lbW8iLCJ1c2VSZWYiLCJIaWdobGlnaHQiLCJGb3VuZEFuc3dlcnMiLCJzdHlsZWQiLCJISUdITElHSFRfQ09MT1IiLCJQdXp6bGUiLCJwcm9wcyIsIndvcmRzIiwiZm91bmRBbnN3ZXJzIiwic3RhcnQiLCJtb3ZlIiwiaGFuZGxlU3RhcnQiLCJoYW5kbGVNb3ZlIiwiaGFuZGxlRmluaXNoZWQiLCJyb3dDb3VudCIsImxlbmd0aCIsImNvbHVtbkNvdW50IiwiZ3JpZFJlZiIsInJlbmRlckNlbGxzIiwiY2VsbExpc3QiLCJ5IiwieCIsImtleVZhbHVlIiwicHVzaCIsIldvcmRUaWxlIiwiY2xhc3NOYW1lIiwiZGF0YS14IiwiZGF0YS15IiwiaGFuZGxlTW91c2VEb3duIiwiZSIsInBhcnNlSW50IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VVcCIsIkNvbnRhaW5lciIsInBhcmVudCIsImN1cnJlbnQiLCJlbmQiLCJjb2xvciIsIkdyaWQiLCJyZWYiLCJyb3ciLCJjb2x1bW4iLCJvbk1vdXNlRG93biIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwiZGlzYWJsZWQiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/puzzle/puzzle.tsx\n"));

/***/ })

});