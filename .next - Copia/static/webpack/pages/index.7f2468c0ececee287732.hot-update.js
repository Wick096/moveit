webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/ChallengeContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/ChallengeContext.tsx ***!
  \*******************************************/
/*! exports provided: ChallengeContext, ChallengeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeContext", function() { return ChallengeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeProvider", function() { return ChallengeProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);


var _jsxFileName = "C:\\Users\\brn93\\moveit-netx2\\src\\contexts\\ChallengeContext.tsx",
    _s = $RefreshSig$();




var ChallengeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengeProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      challengesCompleted = _useState3[0],
      setChallengesCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Notification.requestPermission();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('level', String(level));
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('currentExperience', String(currentExperience));
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    var randomChallengeIndex = Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_3__.length;
    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_3__[randomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio ', {
        body: "Valendo ".concat(challenge.amount, ".xp")
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completedChallenge() {
    if (!activeChallenge) {
      return;
    }

    var amount = activeChallenge.amount;
    var finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengeContext.Provider, {
    value: {
      level: level,
      currentExperience: currentExperience,
      experienceToNextLevel: experienceToNextLevel,
      challengesCompleted: challengesCompleted,
      levelUp: levelUp,
      startNewChallenge: startNewChallenge,
      activeChallenge: activeChallenge,
      resetChallenge: resetChallenge,
      completedChallenge: completedChallenge
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 9
  }, this);
}

_s(ChallengeProvider, "AareP/MOFgJ9M4IpBsMNtIv3Qb8=");

_c = ChallengeProvider;

var _c;

$RefreshReg$(_c, "ChallengeProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2hhbGxlbmdlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJ1c2VFZmZlY3QiLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsIkNvb2tpZXMiLCJzZXQiLCJTdHJpbmciLCJsZXZlbFVwIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYm9keSIsImFtb3VudCIsInJlc2V0Q2hhbGxlbmdlIiwiY29tcGxldGVkQ2hhbGxlbmdlIiwiZmluYWxFeHBlcmllbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQStCTyxJQUFNQSxnQkFBZ0IsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF0QztBQUVBLFNBQVNDLGlCQUFULE9BQXNDO0FBQUE7O0FBQUEsTUFBVkMsUUFBVSxRQUFWQSxRQUFVOztBQUFBLGtCQUNsQkMsc0RBQVEsQ0FBQyxDQUFELENBRFU7QUFBQSxNQUNsQ0MsS0FEa0M7QUFBQSxNQUM1QkMsUUFENEI7O0FBQUEsbUJBRUtGLHNEQUFRLENBQUMsQ0FBRCxDQUZiO0FBQUEsTUFFbkNHLGlCQUZtQztB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InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdmMjQ2OGMwZWNlY2VlMjg3NzMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLFJlYWN0Tm9kZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XHJcblxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XHJcbiAgICB0eXBlOidib2R5J3wnZXllJztcclxuICAgIGRlc2NyaXB0aW9uOnN0cmluZztcclxuICAgIGFtb3VudDpudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGEge1xyXG4gICAgbGV2ZWw6bnVtYmVyO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2U6bnVtYmVyO1xyXG4gICAgZXhwZXJpZW5jZVRvTmV4dExldmVsOm51bWJlcjtcclxuICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ6bnVtYmVyO1xyXG4gICAgYWN0aXZlQ2hhbGxlbmdlOkNoYWxsZW5nZTtcclxuICAgIGxldmVsVXA6KCk9PnZvaWQ7XHJcbiAgICBzdGFydE5ld0NoYWxsZW5nZTooKT0+dm9pZDtcclxuICAgIHJlc2V0Q2hhbGxlbmdlOigpPT52b2lkO1xyXG4gICAgY29tcGxldGVkQ2hhbGxlbmdlOigpPT52b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlUHJvdmlkZXJQcm9wc3tcclxuICAgIGNoaWxkcmVuOlJlYWN0Tm9kZTtcclxuICAgIGxldmVsOm51bWJlcjtcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlOm51bWJlcjtcclxuICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ6bnVtYmVyO1xyXG4gICAgICBcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe31hcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZVByb3ZpZGVyKHtjaGlsZHJlbn0pe1xyXG4gICAgY29uc3QgW2xldmVsLHNldExldmVsXT11c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0W2N1cnJlbnRFeHBlcmllbmNlLHNldEN1cnJlbnRFeHBlcmllbmNlXT11c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0W2NoYWxsZW5nZXNDb21wbGV0ZWQsc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZF09dXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3RbYWN0aXZlQ2hhbGxlbmdlLHNldEFjdGl2ZUNoYWxsZW5nZV09IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkqNCwyKVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgQ29va2llcy5zZXQoJ2xldmVsJyxTdHJpbmcobGV2ZWwpKTtcclxuICAgICAgICBDb29raWVzLnNldCgnY3VycmVudEV4cGVyaWVuY2UnLFN0cmluZyhjdXJyZW50RXhwZXJpZW5jZSkpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjaGFsbGVuZ2VzQ29tcGxldGVkJyxTdHJpbmcoY2hhbGxlbmdlc0NvbXBsZXRlZCkpO1xyXG5cclxuICAgIH0sW2xldmVsLGN1cnJlbnRFeHBlcmllbmNlLGNoYWxsZW5nZXNDb21wbGV0ZWRdKTtcclxuXHJcbiAgZnVuY3Rpb24gbGV2ZWxVcCgpe1xyXG4gICAgc2V0TGV2ZWwgKGxldmVsKyAxKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCl7XHJcbiAgICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nZUluZGV4PShNYXRoLnJhbmRvbSgpKmNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF07XHJcblxyXG4gICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKVxyXG5cclxuICAgICAgbmV3IEF1ZGlvKCcvbm90aWZpY2F0aW9uLm1wMycpLnBsYXkoKTtcclxuXHJcbiAgICAgIGlmKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uPT09ICdncmFudGVkJyl7XHJcbiAgICAgICAgICBuZXcgTm90aWZpY2F0aW9uICgnTm92byBkZXNhZmlvICcse1xyXG4gICAgICAgICAgICAgIGJvZHk6YFZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fS54cGBcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0Q2hhbGxlbmdlKCl7XHJcbiAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNvbXBsZXRlZENoYWxsZW5nZSgpXHJcbiAge1xyXG4gICAgaWYoIWFjdGl2ZUNoYWxsZW5nZSl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0e2Ftb3VudH09YWN0aXZlQ2hhbGxlbmdlO1xyXG5cclxuICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcclxuXHJcbiAgICBpZihmaW5hbEV4cGVyaWVuY2U+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpe1xyXG4gICAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcclxuICAgICAgICBsZXZlbFVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKTtcclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgIHNldENoYWxsZW5nZXNDb21wbGV0ZWQoY2hhbGxlbmdlc0NvbXBsZXRlZCArIDEpO1xyXG5cclxuICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxDaGFsbGVuZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIGxldmVsLFxyXG4gICAgICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcclxuICAgICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxyXG4gICAgICAgICAgICBsZXZlbFVwLFxyXG4gICAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcclxuICAgICAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxyXG4gICAgICAgICAgICByZXNldENoYWxsZW5nZSxcclxuICAgICAgICAgICAgY29tcGxldGVkQ2hhbGxlbmdlLFxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ2hhbGxlbmdlQ29udGV4dC5Qcm92aWRlcj5cclxuXHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==