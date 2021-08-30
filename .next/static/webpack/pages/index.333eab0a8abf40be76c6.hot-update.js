"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/Header.js":
/*!******************************!*\
  !*** ./Components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_rodri_web3_projects_web3_react_page_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var _ChainId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChainId */ "./Components/ChainId.js");
/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Account */ "./Components/Account.js");
/* harmony import */ var _Balance_tsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Balance.tsx */ "./Components/Balance.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/AccountBalanceWallet */ "./node_modules/@material-ui/icons/AccountBalanceWallet.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _SideDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SideDrawer */ "./Components/SideDrawer.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\web3-react-page\\Components\\Header.js",
    _s = $RefreshSig$();












function Header(account) {
  _s();

  var _useWeb3React = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)(),
      active = _useWeb3React.active,
      error = _useWeb3React.error;

  var useStyle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.makeStyles)(function (theme) {
    var _root, _wallet;

    return {
      root: (_root = {}, (0,C_Users_rodri_web3_projects_web3_react_page_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_root, theme.breakpoints.only('xs'), {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
      }), (0,C_Users_rodri_web3_projects_web3_react_page_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_root, theme.breakpoints.between('sm', 'xl'), {
        width: '50vw',
        display: 'flex',
        flexDirection: 'column'
      }), _root),
      wallet: (_wallet = {}, (0,C_Users_rodri_web3_projects_web3_react_page_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_wallet, theme.breakpoints.only('xs'), {
        borderRadius: '10px 10px 10px 10px',
        border: '1px solid white',
        paddingTop: '2vh',
        width: '13%',
        height: '2vh',
        paddingBottom: '2vh',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        marginTop: '2vh',
        marginLeft: '75%',
        cursor: 'pointer',
        alignItems: 'center'
      }), (0,C_Users_rodri_web3_projects_web3_react_page_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_wallet, theme.breakpoints.between('sm', 'xl'), {
        borderRadius: '10px 10px 10px 10px',
        border: '1px solid white',
        marginTop: '2vh',
        cursor: 'pointer',
        alignItems: 'center',
        "float": 'right'
      }), _wallet),
      sideDrawer: {
        color: 'white'
      },
      margin: {
        margin: theme.spacing(2)
      }
    };
  });
  var classes = useStyle();
  /* <ChainId />
        <Account />
        <Balance /> */

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.AppBar, {
      style: {
        display: 'flex',
        flexDirection: 'row'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
        style: {
          margin: '1rem',
          textAlign: 'right',
          "float": 'right'
        },
        children: active ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Badge, {
          color: "primary",
          className: classes.margin,
          variant: "dot",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_10__.default, {
            fontSize: "large"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 146
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 82
        }, this) : error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Badge, {
          color: "error",
          className: classes.margin,
          variant: "dot",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_10__.default, {
            fontSize: "large"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 272
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 210
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_10__.default, {
          fontSize: "large"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 328
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 4
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
        className: classes.wallet,
        children: active ? "".concat(account.substring(0, 6), "...").concat(account.substring(account.length - 4)) : 'No wallet connected'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }, this)
  }, void 0, false);
}

_s(Header, "oMx8kbPXhrr4/acRb67gDYDAPec=", true, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzMzZWFiMGE4YWJmNDBiZTc2YzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUllLFNBQVNpQixNQUFULENBQWdCQyxPQUFoQixFQUF5QjtBQUFBOztBQUFBLHNCQUNaZiw4REFBWSxFQURBO0FBQUEsTUFDOUJnQixNQUQ4QixpQkFDOUJBLE1BRDhCO0FBQUEsTUFDdEJDLEtBRHNCLGlCQUN0QkEsS0FEc0I7O0FBRXhDLE1BQU1DLFFBQVEsR0FBR1Isb0VBQVUsQ0FBQyxVQUFDUyxLQUFEO0FBQUE7O0FBQUEsV0FBWTtBQUV0Q0MsTUFBQUEsSUFBSSxtTEFFRkQsS0FBSyxDQUFDRSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUZFLEVBRTRCO0FBRTlCQyxRQUFBQSxPQUFPLEVBQUUsTUFGcUI7QUFHOUJDLFFBQUFBLGFBQWEsRUFBRSxLQUhlO0FBSTlCQyxRQUFBQSxLQUFLLEVBQUU7QUFKdUIsT0FGNUIsdUtBVUZOLEtBQUssQ0FBQ0UsV0FBTixDQUFrQkssT0FBbEIsQ0FBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsQ0FWRSxFQVVxQztBQUV2Q0QsUUFBQUEsS0FBSyxFQUFFLE1BRmdDO0FBR3ZDRixRQUFBQSxPQUFPLEVBQUUsTUFIOEI7QUFJdkNDLFFBQUFBLGFBQWEsRUFBRTtBQUp3QixPQVZyQyxTQUZrQztBQXFCdENHLE1BQUFBLE1BQU0sdUxBRUpSLEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FGSSxFQUUwQjtBQUMvQk0sUUFBQUEsWUFBWSxFQUFFLHFCQURpQjtBQUUvQkMsUUFBQUEsTUFBTSxFQUFFLGlCQUZ1QjtBQUcvQkMsUUFBQUEsVUFBVSxFQUFFLEtBSG1CO0FBSS9CTCxRQUFBQSxLQUFL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ZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnOyBcclxuaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIsIHVzZVdlYjNSZWFjdCwgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xyXG5pbXBvcnQgQ2hhaW5JZCBmcm9tICcuL0NoYWluSWQnXHJcbmltcG9ydCBBY2NvdW50LCB7ICB9IGZyb20gJy4vQWNjb3VudCdcclxuaW1wb3J0IEJhbGFuY2UgZnJvbSAnLi9CYWxhbmNlLnRzeCdcclxuaW1wb3J0IHsgQXBwQmFyLCBCYWRnZSwgQm94LCBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBBY2NvdW50QmFsYW5jZVdhbGxldEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRCYWxhbmNlV2FsbGV0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBTaWRlRHJhd2VyIGZyb20gJy4vU2lkZURyYXdlcic7XHJcbmltcG9ydCBNZW51SWNvbiAgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoYWNjb3VudCkge1xyXG4gIGNvbnN0IHsgYWN0aXZlLCBlcnJvciB9ID0gdXNlV2ViM1JlYWN0KClcclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdFxyXG5cdFx0cm9vdDoge1xyXG5cdFx0XHRcclxuXHRcdFx0W3RoZW1lLmJyZWFrcG9pbnRzLm9ubHkoJ3hzJyldOntcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ3JvdycsXHJcblx0XHRcdFx0d2lkdGg6ICcxMDAlJ1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0W3RoZW1lLmJyZWFrcG9pbnRzLmJldHdlZW4oJ3NtJywgJ3hsJyldOntcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR3aWR0aDogJzUwdncnLFxyXG5cdFx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcdFxyXG5cdFx0XHRcclxuXHRcdHdhbGxldDoge1xyXG5cdFx0XHJcblx0XHRcdFt0aGVtZS5icmVha3BvaW50cy5vbmx5KCd4cycpXTp7XHJcblx0XHRcdGJvcmRlclJhZGl1czogJzEwcHggMTBweCAxMHB4IDEwcHgnLFxyXG5cdFx0XHRib3JkZXI6ICcxcHggc29saWQgd2hpdGUnLFxyXG5cdFx0XHRwYWRkaW5nVG9wOiAnMnZoJyxcclxuXHRcdFx0d2lkdGg6ICcxMyUnLFxyXG5cdFx0XHRoZWlnaHQ6ICcydmgnLFxyXG5cdFx0XHRwYWRkaW5nQm90dG9tOiAnMnZoJyxcclxuXHRcdFx0cGFkZGluZ0xlZnQ6ICcydncnLFxyXG5cdFx0XHRwYWRkaW5nUmlnaHQ6ICcydncnLFxyXG5cdFx0XHRtYXJnaW5Ub3A6ICcydmgnLFxyXG5cdFx0XHRtYXJnaW5MZWZ0OiAnNzUlJyxcclxuXHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInXHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0W3RoZW1lLmJyZWFrcG9pbnRzLmJldHdlZW4oJ3NtJywgJ3hsJyldOntcclxuXHJcblx0XHRcdGJvcmRlclJhZGl1czogJzEwcHggMTBweCAxMHB4IDEwcHgnLFxyXG5cdFx0XHRib3JkZXI6ICcxcHggc29saWQgd2hpdGUnLFxyXG5cdFx0XHRtYXJnaW5Ub3A6ICcydmgnLFxyXG5cdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0XHRcdGZsb2F0OiAncmlnaHQnXHRcdFxyXG5cdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdH0sXHJcblxyXG5cdFx0c2lkZURyYXdlcjoge1xyXG5cclxuXHRcdFx0Y29sb3I6ICd3aGl0ZSdcclxuXHJcblx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdG1hcmdpbjoge1xyXG5cdFx0XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHRcclxuXHRcdH1cdFx0XHJcblx0XHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHR9KSk7XHJcblxyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1x0XHJcblx0XHJcblx0IC8qIDxDaGFpbklkIC8+XHJcbiAgICAgICAgPEFjY291bnQgLz5cclxuICAgICAgICA8QmFsYW5jZSAvPiAqL1xyXG5cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxBcHBCYXIgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnfX0+XHJcblx0ICBcclxuXHQgIDxCb3ggc3R5bGU9e3sgbWFyZ2luOiAnMXJlbScsIHRleHRBbGlnbjogJ3JpZ2h0JywgZmxvYXQ6ICdyaWdodCcgfX0+e2FjdGl2ZSA/IDxCYWRnZSBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufSB2YXJpYW50PVwiZG90XCI+PEFjY291bnRCYWxhbmNlV2FsbGV0SWNvbiBmb250U2l6ZT0nbGFyZ2UnIC8+PC9CYWRnZT4gOiBlcnJvciA/IDxCYWRnZSBjb2xvcj1cImVycm9yXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0gdmFyaWFudD1cImRvdFwiPjxBY2NvdW50QmFsYW5jZVdhbGxldEljb24gZm9udFNpemU9J2xhcmdlJyAvPjwvQmFkZ2U+IDogPEFjY291bnRCYWxhbmNlV2FsbGV0SWNvbiBmb250U2l6ZT0nbGFyZ2UnIC8+fTwvQm94PlxyXG4gICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy53YWxsZXR9ID5cclxuXHRcdHthY3RpdmUgPyBgJHthY2NvdW50LnN1YnN0cmluZygwLCA2KX0uLi4ke2FjY291bnQuc3Vic3RyaW5nKGFjY291bnQubGVuZ3RoIC0gNCl9YCA6ICdObyB3YWxsZXQgY29ubmVjdGVkJ31cclxuXHQgIDwvQm94Plx0XHRcdFxyXG5cdCAgXHRcclxuXHQgXHJcblx0IDwvQXBwQmFyPiBcclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJXZWIzUmVhY3RQcm92aWRlciIsInVzZVdlYjNSZWFjdCIsIlVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIiwiQ2hhaW5JZCIsIkFjY291bnQiLCJCYWxhbmNlIiwiQXBwQmFyIiwiQmFkZ2UiLCJCb3giLCJJY29uQnV0dG9uIiwiQWNjb3VudEJhbGFuY2VXYWxsZXRJY29uIiwibWFrZVN0eWxlcyIsIlNpZGVEcmF3ZXIiLCJNZW51SWNvbiIsIlR5cG9ncmFwaHkiLCJIZWFkZXIiLCJhY2NvdW50IiwiYWN0aXZlIiwiZXJyb3IiLCJ1c2VTdHlsZSIsInRoZW1lIiwicm9vdCIsImJyZWFrcG9pbnRzIiwib25seSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJiZXR3ZWVuIiwid2FsbGV0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwicGFkZGluZ1RvcCIsImhlaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJjdXJzb3IiLCJhbGlnbkl0ZW1zIiwic2lkZURyYXdlciIsImNvbG9yIiwibWFyZ2luIiwic3BhY2luZyIsImNsYXNzZXMiLCJ0ZXh0QWxpZ24iLCJzdWJzdHJpbmciLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9