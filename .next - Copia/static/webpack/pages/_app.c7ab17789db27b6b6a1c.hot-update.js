webpackHotUpdate_N_E("pages/_app",{

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
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);


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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {}, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    var randomChallengeIndex = Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length;
    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];
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
    lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2hhbGxlbmdlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJ1c2VFZmZlY3QiLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsImxldmVsVXAiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZWRDaGFsbGVuZ2UiLCJmaW5hbEV4cGVyaWVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUEwQk8sSUFBTUEsZ0JBQWdCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdEM7QUFFQSxTQUFTQyxpQkFBVCxPQUFzQztBQUFBOztBQUFBLE1BQVZDLFFBQVUsUUFBVkEsUUFBVTs7QUFBQSxrQkFDbEJDLHNEQUFRLENBQUMsQ0FBRCxDQURVO0FBQUEsTUFDbENDLEtBRGtDO0FBQUEsTUFDNUJDLFFBRDRCOztBQUFBLG1CQUVLRixzREFBUSxDQUFDLENBQUQsQ0FGYjtBQUFBLE1BRW5DRyxpQkFGbUM7QUFBQSxNQUVqQkMsb0JBRmlCOztBQUFBLG1CQUdTSixzREFBUSxDQUFDLENBQUQsQ0FIakI7QUFBQSxNQUduQ0ssbUJBSG1DO0FBQUEsTUFHZkMsc0JBSGU7O0FBQUEsbUJBS0VOLHNEQUFRLENBQUMsSUFBRCxDQUxWO0FBQUEsTUFLbkNPLGVBTG1DO0FBQUEsTUFLbkJDLGtCQUxtQjs7QUFPekMsTUFBTUMscUJBQXFCLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQUNWLEtBQUssR0FBRyxDQUFULElBQVksQ0FBckIsRUFBdUIsQ0FBdkIsQ0FBOUI7QUFHQVcseURBQVMsQ0FBQyxZQUFJO0FBQ1ZDLGdCQUFZLENBQUNDLGlCQUFiO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBRix5REFBUyxDQUFDLFlBQU0sQ0FFZixDQUZRLEVBRVAsQ0FBQ1gsS0FBRCxFQUFPRSxpQkFBUCxFQUF5QkUsbUJBQXpCLENBRk8sQ0FBVDs7QUFJRixXQUFTVSxPQUFULEdBQWtCO0FBQ2hCYixZQUFRLENBQUVELEtBQUssR0FBRSxDQUFULENBQVI7QUFDRDs7QUFFRCxXQUFTZSxpQkFBVCxHQUE0QjtBQUN4QixRQUFNQyxvQkFBb0IsR0FBRVAsSUFBSSxDQUFDUSxNQUFMLEtBQWNDLDZDQUFVLENBQUNDLE1BQXJEO0FBQ0EsUUFBTUMsU0FBUyxHQUFHRiw2Q0FBVSxDQUFDRixvQkFBRCxDQUE1QjtBQUVBVCxzQkFBa0IsQ0FBQ2EsU0FBRCxDQUFsQjtBQUVBLFFBQUlDLEtBQUosQ0FBVSxtQkFBVixFQUErQkMsSUFBL0I7O0FBRUEsUUFBR1YsWUFBWSxDQUFDVyxVQUFiLEtBQTJCLFNBQTlCLEVBQXdDO0FBQ3BDLFVBQUlYLFlBQUosQ0FBa0IsZUFBbEIsRUFBa0M7QUFDOUJZLFlBQUksb0JBQVlKLFNBQVMsQ0FBQ0ssTUFBdEI7QUFEMEIsT0FBbEM7QUFHSDtBQUNKOztBQUVELFdBQVNDLGNBQVQsR0FBeUI7QUFDckJuQixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0g7O0FBRUQsV0FBU29CLGtCQUFULEdBQ0E7QUFDRSxRQUFHLENBQUNyQixlQUFKLEVBQW9CO0FBQ2hCO0FBQ0g7O0FBSEgsUUFLUW1CLE1BTFIsR0FLZ0JuQixlQUxoQixDQUtRbUIsTUFMUjtBQU9FLFFBQUlHLGVBQWUsR0FBRzFCLGlCQUFpQixHQUFHdUIsTUFBMUM7O0FBRUEsUUFBR0csZUFBZSxJQUFHcEIscUJBQXJCLEVBQTJDO0FBQ3ZDb0IscUJBQWUsR0FBR0EsZUFBZSxHQUFHcEIscUJBQXBDO0FBQ0FNLGFBQU87QUFDVjs7QUFFRFgsd0JBQW9CLENBQUN5QixlQUFELENBQXBCO0FBQ0FyQixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0FGLDBCQUFzQixDQUFDRCxtQkFBbUIsR0FBRyxDQUF2QixDQUF0QjtBQUVEOztBQUVDLHNCQUNJLHFFQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQTJCLFNBQUssRUFBRTtBQUM5QkosV0FBSyxFQUFMQSxLQUQ4QjtBQUU5QkUsdUJBQWlCLEVBQWpCQSxpQkFGOEI7QUFHOUJNLDJCQUFxQixFQUFyQkEscUJBSDhCO0FBSTlCSix5QkFBbUIsRUFBbkJBLG1CQUo4QjtBQUs5QlUsYUFBTyxFQUFQQSxPQUw4QjtBQU05QkMsdUJBQWlCLEVBQWpCQSxpQkFOOEI7QUFPOUJULHFCQUFlLEVBQWZBLGVBUDhCO0FBUTlCb0Isb0JBQWMsRUFBZEEsY0FSOEI7QUFTOUJDLHdCQUFrQixFQUFsQkE7QUFUOEIsS0FBbEM7QUFBQSxjQVdLN0I7QUFYTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkg7O0dBOUVlRCxpQjs7S0FBQUEsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jN2FiMTc3ODlkYjI3YjZiNmExYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSxSZWFjdE5vZGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2VzLmpzb24nO1xyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XHJcbiAgICB0eXBlOidib2R5J3wnZXllJztcclxuICAgIGRlc2NyaXB0aW9uOnN0cmluZztcclxuICAgIGFtb3VudDpudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGEge1xyXG4gICAgbGV2ZWw6bnVtYmVyO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2U6bnVtYmVyO1xyXG4gICAgZXhwZXJpZW5jZVRvTmV4dExldmVsOm51bWJlcjtcclxuICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ6bnVtYmVyO1xyXG4gICAgYWN0aXZlQ2hhbGxlbmdlOkNoYWxsZW5nZTtcclxuICAgIGxldmVsVXA6KCk9PnZvaWQ7XHJcbiAgICBzdGFydE5ld0NoYWxsZW5nZTooKT0+dm9pZDtcclxuICAgIHJlc2V0Q2hhbGxlbmdlOigpPT52b2lkO1xyXG4gICAgY29tcGxldGVkQ2hhbGxlbmdlOigpPT52b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlUHJvdmlkZXJQcm9wc3tcclxuICAgIGNoaWxkcmVuOlJlYWN0Tm9kZTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe31hcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZVByb3ZpZGVyKHtjaGlsZHJlbn0pe1xyXG4gICAgY29uc3QgW2xldmVsLHNldExldmVsXT11c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0W2N1cnJlbnRFeHBlcmllbmNlLHNldEN1cnJlbnRFeHBlcmllbmNlXT11c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0W2NoYWxsZW5nZXNDb21wbGV0ZWQsc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZF09dXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3RbYWN0aXZlQ2hhbGxlbmdlLHNldEFjdGl2ZUNoYWxsZW5nZV09IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkqNCwyKVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgfSxbbGV2ZWwsY3VycmVudEV4cGVyaWVuY2UsY2hhbGxlbmdlc0NvbXBsZXRlZF0pO1xyXG5cclxuICBmdW5jdGlvbiBsZXZlbFVwKCl7XHJcbiAgICBzZXRMZXZlbCAobGV2ZWwrIDEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKXtcclxuICAgICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXg9KE1hdGgucmFuZG9tKCkqY2hhbGxlbmdlcy5sZW5ndGgpO1xyXG4gICAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcclxuXHJcbiAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpXHJcblxyXG4gICAgICBuZXcgQXVkaW8oJy9ub3RpZmljYXRpb24ubXAzJykucGxheSgpO1xyXG5cclxuICAgICAgaWYoTm90aWZpY2F0aW9uLnBlcm1pc3Npb249PT0gJ2dyYW50ZWQnKXtcclxuICAgICAgICAgIG5ldyBOb3RpZmljYXRpb24gKCdOb3ZvIGRlc2FmaW8gJyx7XHJcbiAgICAgICAgICAgICAgYm9keTpgVmFsZW5kbyAke2NoYWxsZW5nZS5hbW91bnR9LnhwYFxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKXtcclxuICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY29tcGxldGVkQ2hhbGxlbmdlKClcclxuICB7XHJcbiAgICBpZighYWN0aXZlQ2hhbGxlbmdlKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3R7YW1vdW50fT1hY3RpdmVDaGFsbGVuZ2U7XHJcblxyXG4gICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xyXG5cclxuICAgIGlmKGZpbmFsRXhwZXJpZW5jZT49IGV4cGVyaWVuY2VUb05leHRMZXZlbCl7XHJcbiAgICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xyXG4gICAgICAgIGxldmVsVXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZChjaGFsbGVuZ2VzQ29tcGxldGVkICsgMSk7XHJcblxyXG4gIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPENoYWxsZW5nZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgICAgICAgbGV2ZWwsXHJcbiAgICAgICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxyXG4gICAgICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXHJcbiAgICAgICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXHJcbiAgICAgICAgICAgIGxldmVsVXAsXHJcbiAgICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgICBjb21wbGV0ZWRDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9DaGFsbGVuZ2VDb250ZXh0LlByb3ZpZGVyPlxyXG5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9