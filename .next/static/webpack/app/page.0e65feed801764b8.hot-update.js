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

/***/ "(app-pages-browser)/./src/app/_components/AnalogClock.jsx":
/*!*********************************************!*\
  !*** ./src/app/_components/AnalogClock.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AnalogClock() {\n    _s();\n    const hourRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const minuteRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const secondRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const tick = ()=>{\n            const date = new Date();\n            const [seconds, minutes, hours] = [\n                date.getSeconds(),\n                date.getMinutes(),\n                date.getHours()\n            ];\n            const secondDeg = seconds * 6;\n            const minuteDeg = minutes * 6 + seconds * 0.1;\n            const hourDeg = hours * 30 + minutes * 0.5 + seconds * (0.5 / 60);\n            if (secondRef.current) secondRef.current.style.transform = \"rotate(\".concat(secondDeg, \"deg)\");\n            if (minuteRef.current) minuteRef.current.style.transform = \"rotate(\".concat(minuteDeg, \"deg)\");\n            if (hourRef.current) hourRef.current.style.transform = \"rotate(\".concat(hourDeg, \"deg)\");\n        };\n        tick(); // 초기 설정\n        const interval = setInterval(tick, 1000); // 1초마다 업데이트\n        return ()=>clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 제거\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"analog-clock\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"analog-clock__case\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"analog-clock__frame\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"analog-clock__frame-img\",\n                        src: \"https://q.livesense.co.jp/images/index/clock.svg\",\n                        alt: \"\",\n                        decoding: \"async\",\n                        width: 92,\n                        height: 92\n                    }, void 0, false, {\n                        fileName: \"/Users/gim-yelim/Desktop/news-room/src/app/_components/AnalogClock.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/gim-yelim/Desktop/news-room/src/app/_components/AnalogClock.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"analog-clock__hour\",\n                    ref: hourRef,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"analog-clock__hour-img\",\n                        src: \"https://q.livesense.co.jp/images/index/hour.svg\",\n                        alt: \"\",\n                        decoding: \"async\",\n                        fill: true\n                    }, void 0, false, {\n                        fileName: \"/Users/gim-yelim/Desktop/news-room/src/app/_components/AnalogClock.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/gim-yelim/Desktop/news-room/src/app/_components/AnalogClock.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"analog-clock__min\",\n                    ref: minuteRef,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"analog-clock__min-img\",\n                        src: \"https://q.livesense.co.jp/images/index/minutes.svg\",\n                        alt: \"\",\n                        decoding: \"async\",\n                        fill: true\n                    }, void 0, false, {\n                        fileName: \"/Users/gim-yelim/Desktop/news-room/src/app/_components/AnalogClock.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/gim-yelim/Desktop/news-room/src/app/_components/AnalogClock.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"analog-clock__sec\",\n                    ref: secondRef,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"analog-clock__sec-img\",\n                        src: \"https://q.livesense.co.jp/images/index/seconds.svg\",\n                        alt: \"\",\n                        decoding: \"async\",\n                        fill: true\n                    }, void 0, false, {\n                        fileName: \"/Users/gim-yelim/Desktop/news-room/src/app/_components/AnalogClock.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/gim-yelim/Desktop/news-room/src/app/_components/AnalogClock.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gim-yelim/Desktop/news-room/src/app/_components/AnalogClock.jsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/gim-yelim/Desktop/news-room/src/app/_components/AnalogClock.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(AnalogClock, \"Zk1B7yOeqewIlUwtna81qfoRrzE=\");\n_c = AnalogClock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnalogClock);\nvar _c;\n$RefreshReg$(_c, \"AnalogClock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvQW5hbG9nQ2xvY2suanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDK0I7QUFDa0I7QUFFakQsU0FBU0k7O0lBQ1AsTUFBTUMsVUFBVUYsNkNBQU1BLENBQUM7SUFDdkIsTUFBTUcsWUFBWUgsNkNBQU1BLENBQUM7SUFDekIsTUFBTUksWUFBWUosNkNBQU1BLENBQUM7SUFFekJELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sT0FBTztZQUNYLE1BQU1DLE9BQU8sSUFBSUM7WUFDakIsTUFBTSxDQUFDQyxTQUFTQyxTQUFTQyxNQUFNLEdBQUc7Z0JBQ2hDSixLQUFLSyxVQUFVO2dCQUNmTCxLQUFLTSxVQUFVO2dCQUNmTixLQUFLTyxRQUFRO2FBQ2Q7WUFFRCxNQUFNQyxZQUFZTixVQUFVO1lBQzVCLE1BQU1PLFlBQVlOLFVBQVUsSUFBSUQsVUFBVTtZQUMxQyxNQUFNUSxVQUFVTixRQUFRLEtBQUtELFVBQVUsTUFBTUQsVUFBVyxPQUFNLEVBQUM7WUFFL0QsSUFBSUosVUFBVWEsT0FBTyxFQUNuQmIsVUFBVWEsT0FBTyxDQUFDQyxLQUFLLENBQUNDLFNBQVMsR0FBRyxVQUFvQixPQUFWTCxXQUFVO1lBQzFELElBQUlYLFVBQVVjLE9BQU8sRUFDbkJkLFVBQVVjLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxTQUFTLEdBQUcsVUFBb0IsT0FBVkosV0FBVTtZQUMxRCxJQUFJYixRQUFRZSxPQUFPLEVBQ2pCZixRQUFRZSxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLFVBQWtCLE9BQVJILFNBQVE7UUFDeEQ7UUFFQVgsUUFBUSxRQUFRO1FBQ2hCLE1BQU1lLFdBQVdDLFlBQVloQixNQUFNLE9BQU8sWUFBWTtRQUV0RCxPQUFPLElBQU1pQixjQUFjRixXQUFXLHFCQUFxQjtJQUM3RCxHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFLRCxXQUFVOzhCQUNkLDRFQUFDM0Isa0RBQUtBO3dCQUNKMkIsV0FBVTt3QkFDVkUsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsVUFBUzt3QkFDVEMsT0FBTzt3QkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7OEJBR1osOERBQUNMO29CQUFLRCxXQUFVO29CQUFxQk8sS0FBSzdCOzhCQUN4Qyw0RUFBQ0wsa0RBQUtBO3dCQUNKMkIsV0FBVTt3QkFDVkUsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsVUFBUzt3QkFDVEksSUFBSTs7Ozs7Ozs7Ozs7OEJBR1IsOERBQUNQO29CQUFLRCxXQUFVO29CQUFvQk8sS0FBSzVCOzhCQUN2Qyw0RUFBQ04sa0RBQUtBO3dCQUNKMkIsV0FBVTt3QkFDVkUsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsVUFBUzt3QkFDVEksSUFBSTs7Ozs7Ozs7Ozs7OEJBR1IsOERBQUNQO29CQUFLRCxXQUFVO29CQUFvQk8sS0FBSzNCOzhCQUN2Qyw0RUFBQ1Asa0RBQUtBO3dCQUNKMkIsV0FBVTt3QkFDVkUsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsVUFBUzt3QkFDVEksSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQjtHQTFFUy9CO0tBQUFBO0FBNEVULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvQW5hbG9nQ2xvY2suanN4PzU1NzgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBBbmFsb2dDbG9jaygpIHtcbiAgY29uc3QgaG91clJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbWludXRlUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBzZWNvbmRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aWNrID0gKCkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCBbc2Vjb25kcywgbWludXRlcywgaG91cnNdID0gW1xuICAgICAgICBkYXRlLmdldFNlY29uZHMoKSxcbiAgICAgICAgZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICAgIGRhdGUuZ2V0SG91cnMoKSxcbiAgICAgIF07XG5cbiAgICAgIGNvbnN0IHNlY29uZERlZyA9IHNlY29uZHMgKiA2O1xuICAgICAgY29uc3QgbWludXRlRGVnID0gbWludXRlcyAqIDYgKyBzZWNvbmRzICogMC4xO1xuICAgICAgY29uc3QgaG91ckRlZyA9IGhvdXJzICogMzAgKyBtaW51dGVzICogMC41ICsgc2Vjb25kcyAqICgwLjUgLyA2MCk7XG5cbiAgICAgIGlmIChzZWNvbmRSZWYuY3VycmVudClcbiAgICAgICAgc2Vjb25kUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3NlY29uZERlZ31kZWcpYDtcbiAgICAgIGlmIChtaW51dGVSZWYuY3VycmVudClcbiAgICAgICAgbWludXRlUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke21pbnV0ZURlZ31kZWcpYDtcbiAgICAgIGlmIChob3VyUmVmLmN1cnJlbnQpXG4gICAgICAgIGhvdXJSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7aG91ckRlZ31kZWcpYDtcbiAgICB9O1xuXG4gICAgdGljaygpOyAvLyDstIjquLAg7ISk7KCVXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aWNrLCAxMDAwKTsgLy8gMey0iOuniOuLpCDsl4XrjbDsnbTtirhcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTsgLy8g7Lu07Y+s64SM7Yq4IOyWuOuniOyatO2KuCDsi5wg7J247YSw67KMIOygnOqxsFxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbmFsb2ctY2xvY2tcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5hbG9nLWNsb2NrX19jYXNlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuYWxvZy1jbG9ja19fZnJhbWVcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFuYWxvZy1jbG9ja19fZnJhbWUtaW1nXCJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcS5saXZlc2Vuc2UuY28uanAvaW1hZ2VzL2luZGV4L2Nsb2NrLnN2Z1wiXG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgICAgICB3aWR0aD17OTJ9XG4gICAgICAgICAgICBoZWlnaHQ9ezkyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5hbG9nLWNsb2NrX19ob3VyXCIgcmVmPXtob3VyUmVmfT5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFuYWxvZy1jbG9ja19faG91ci1pbWdcIlxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9xLmxpdmVzZW5zZS5jby5qcC9pbWFnZXMvaW5kZXgvaG91ci5zdmdcIlxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICAgICAgZmlsbFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5hbG9nLWNsb2NrX19taW5cIiByZWY9e21pbnV0ZVJlZn0+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhbmFsb2ctY2xvY2tfX21pbi1pbWdcIlxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9xLmxpdmVzZW5zZS5jby5qcC9pbWFnZXMvaW5kZXgvbWludXRlcy5zdmdcIlxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICAgICAgZmlsbFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYW5hbG9nLWNsb2NrX19zZWNcIiByZWY9e3NlY29uZFJlZn0+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhbmFsb2ctY2xvY2tfX3NlYy1pbWdcIlxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9xLmxpdmVzZW5zZS5jby5qcC9pbWFnZXMvaW5kZXgvc2Vjb25kcy5zdmdcIlxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICAgICAgZmlsbFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBbmFsb2dDbG9jaztcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQW5hbG9nQ2xvY2siLCJob3VyUmVmIiwibWludXRlUmVmIiwic2Vjb25kUmVmIiwidGljayIsImRhdGUiLCJEYXRlIiwic2Vjb25kcyIsIm1pbnV0ZXMiLCJob3VycyIsImdldFNlY29uZHMiLCJnZXRNaW51dGVzIiwiZ2V0SG91cnMiLCJzZWNvbmREZWciLCJtaW51dGVEZWciLCJob3VyRGVnIiwiY3VycmVudCIsInN0eWxlIiwidHJhbnNmb3JtIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwic3JjIiwiYWx0IiwiZGVjb2RpbmciLCJ3aWR0aCIsImhlaWdodCIsInJlZiIsImZpbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/AnalogClock.jsx\n"));

/***/ })

});