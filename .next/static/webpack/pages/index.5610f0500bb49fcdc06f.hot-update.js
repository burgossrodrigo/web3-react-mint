"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_rodri_web3_projects_web3_react_page_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/providers */ "./node_modules/@ethersproject/providers/lib.esm/index.js");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Header */ "./Components/Header.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\web3-react-page\\pages\\index.tsx";








function getLibrary(provider) {
  var library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var useStyle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.makeStyles)(function (theme) {
    var _form;

    return {
      mainImage: {
        marginTop: '50vh'
      },
      form: (_form = {}, (0,C_Users_rodri_web3_projects_web3_react_page_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_form, theme.breakpoints.between('sm', 'xl'), {
        backgroundColoer: 'black'
      }), (0,C_Users_rodri_web3_projects_web3_react_page_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_form, theme.breakpoints.only('xs'), {}), _form)
    };
  });
  var classes = useStyle();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.Web3ReactProvider, {
      getLibrary: getLibrary,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {
        container: true,
        spacing: 3,
        style: {
          width: '80%',
          marginLeft: '5%',
          marginTop: '15vh'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {
          item: true,
          xs: 6,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6,
          style: {
            marginBottom: '15vh'
          },
          children: ["active ?", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Button, {
            variant: "contained",
            size: "large",
            color: "primary",
            children: Mint
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Button, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SideDrawer, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Typography, {
                style: {
                  color: 'white',
                  alignSelf: 'center'
                },
                children: "Connect"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }, this)
  }, void 0, false);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTYxMGYwNTAwYmI0OWZjZGMwNmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBR0E7QUFHQTtBQUNBO0FBb0JBOztBQUVBLFNBQVNPLFVBQVQsQ0FBb0JDLFFBQXBCLEVBQWlEO0FBQy9DLE1BQU1DLE9BQU8sR0FBRyxJQUFJUCxrRUFBSixDQUFpQk0sUUFBakIsQ0FBaEI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxlQUFSLEdBQTBCLEtBQTFCO0FBQ0EsU0FBT0QsT0FBUDtBQUNEOztBQUlELDZCQUFlLHNDQUFXO0FBRXhCLE1BQU1FLFFBQVEsR0FBR1Asb0VBQVUsQ0FBQyxVQUFDUSxLQUFEO0FBQUE7O0FBQUEsV0FBWTtBQUV0Q0MsTUFBQUEsU0FBUyxFQUFDO0FBRVJDLFFBQUFBLFNBQVMsRUFBRTtBQUZILE9BRjRCO0FBUXRDQyxNQUFBQSxJQUFJLG1MQUVESCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLE9BQWxCLENBQTBCLElBQTFCLEVBQWdDLElBQWhDLENBRkMsRUFFc0M7QUFFdENDLFFBQUFBLGdCQUFnQixFQUFFO0FBRm9CLE9BRnRDLHVLQU9ETixLQUFLLENBQUNJLFdBQU4sQ0FBa0JHLElBQWxCLENBQXVCLElBQXZCLENBUEMsRUFPNkIsRUFQN0I7QUFSa0MsS0FBWjtBQUFBLEdBQUQsQ0FBM0I7QUFzQkEsTUFBTUMsT0FBTyxHQUFHVCxRQUFRLEVBQXhCO0FBRUEsc0JBQVE7QUFBQSwyQkFDTiw4REFBQywrREFBRDtBQUFtQixnQkFBVSxFQUFFSixVQUEvQjtBQUFBLDhCQUNFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVBLDhEQUFDLG1EQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixlQUFPLEVBQUUsQ0FBekI7QUFBNEIsYUFBSyxFQUFFO0FBQUNjLFVBQUFBLEtBQUssRUFBRSxLQUFSO0FBQWVDLFVBQUFBLFVBQVUsRUFBRSxJQUEzQjtBQUFpQ1IsVUFBQUEsU0FBUyxFQUFFO0FBQTVDLFNBQW5DO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsQ0FBZjtBQUFrQixZQUFFLEVBQUUsQ0FBdEI7QUFBeUIsWUFBRSxFQUFFLENBQTdCO0FBQWdDLFlBQUUsRUFBRSxDQUFwQztBQUF1QyxZQUFFLEVBQUUsQ0FBM0M7QUFBOEMsZUFBSyxFQUFFO0FBQUNTLFlBQUFBLFlBQVksRUFBRTtBQUFmLFdBQXJEO0FBQUEsOENBRUUsOERBQUMscURBQUQ7QUFBUSxtQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGdCQUFJLEVBQUMsT0FBakM7QUFBeUMsaUJBQUssRUFBQyxTQUEvQztBQUFBLHNCQUVHQztBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFTRSw4REFBQyxxREFBRDtBQUFBLG1DQUNFLDhEQUFDLFVBQUQ7QUFBQSxxQ0FDRSw4REFBQyxVQUFEO0FBQVkscUJBQUssRUFBRTtBQUFDQyxrQkFBQUEsS0FBSyxFQUFFLE9BQVI7QUFBaUJDLGtCQUFBQSxTQUFTLEVBQUU7QUFBNUIsaUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURNLG1CQUFSO0FBOEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIsIHVzZVdlYjNSZWFjdCwgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xyXG5pbXBvcnQge1xyXG4gIE5vRXRoZXJldW1Qcm92aWRlckVycm9yLFxyXG4gIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZFxyXG59IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QgfSBmcm9tICdAd2ViMy1yZWFjdC93YWxsZXRjb25uZWN0LWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckZyYW1lIH0gZnJvbSAnQHdlYjMtcmVhY3QvZnJhbWUtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9wcm92aWRlcnMnXHJcbmltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvdW5pdHMnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL0NvbXBvbmVudHMvTmF2aWdhdGlvbidcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9Db21wb25lbnRzL0hlYWRlcidcclxuaW1wb3J0IENoYWluSWQgZnJvbSAnLi4vQ29tcG9uZW50cy9DaGFpbklkJ1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuLi9Db21wb25lbnRzL0FjY291bnQnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IERvbmVPdXRsaW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRG9uZU91dGxpbmUnO1xyXG5cclxuaW1wb3J0IHsgdXNlRWFnZXJDb25uZWN0LCB1c2VJbmFjdGl2ZUxpc3RlbmVyIH0gZnJvbSAnLi4vaG9va3MnXHJcbmltcG9ydCB7XHJcbiAgaW5qZWN0ZWQsXHJcbiAgbmV0d29yayxcclxuICB3YWxsZXRjb25uZWN0LFxyXG4gIHdhbGxldGxpbmssXHJcbiAgbGVkZ2VyLFxyXG4gIHRyZXpvcixcclxuICBsYXR0aWNlLFxyXG4gIGZyYW1lLFxyXG4gIGF1dGhlcmV1bSxcclxuICBmb3J0bWF0aWMsXHJcbiAgbWFnaWMsXHJcbiAgcG9ydGlzLFxyXG4gIHRvcnVzXHJcbn0gZnJvbSAnLi4vY29ubmVjdG9ycydcclxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3Bpbm5lcidcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuZnVuY3Rpb24gZ2V0TGlicmFyeShwcm92aWRlcjogYW55KTogV2ViM1Byb3ZpZGVyIHtcclxuICBjb25zdCBsaWJyYXJ5ID0gbmV3IFdlYjNQcm92aWRlcihwcm92aWRlcilcclxuICBsaWJyYXJ5LnBvbGxpbmdJbnRlcnZhbCA9IDEyMDAwXHJcbiAgcmV0dXJuIGxpYnJhcnlcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcbiAgY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHJcbiAgICBtYWluSW1hZ2U6e1xyXG4gIFxyXG4gICAgICBtYXJnaW5Ub3A6ICc1MHZoJ1xyXG4gIFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZm9ybTp7XHJcblxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuYmV0d2Vlbignc20nLCAneGwnKV06e1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb2VyOiAnYmxhY2snXHJcblxyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMub25seSgneHMnKV06e31cclxuXHJcblxyXG4gICAgfVxyXG4gIFxyXG4gIH0pKTtcclxuICBcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuXHJcbiAgcmV0dXJuICg8PlxyXG4gICAgPFdlYjNSZWFjdFByb3ZpZGVyIGdldExpYnJhcnk9e2dldExpYnJhcnl9PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gc3R5bGU9e3t3aWR0aDogJzgwJScsIG1hcmdpbkxlZnQ6ICc1JScsIG1hcmdpblRvcDogJzE1dmgnfX0+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXs2fSBtZD17Nn0gbGc9ezZ9IHhsPXs2fSBzdHlsZT17e21hcmdpbkJvdHRvbTogJzE1dmgnfX0+XHJcbiAgICAgICBhY3RpdmUgPyBcclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge01pbnR9XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9CdXR0b24+XHJcblxyXG5cclxuICAgICAgICA8QnV0dG9uPlxyXG4gICAgICAgICAgPFNpZGVEcmF3ZXI+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIGFsaWduU2VsZjogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICBDb25uZWN0XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvU2lkZURyYXdlcj5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICAgPC9XZWIzUmVhY3RQcm92aWRlcj5cclxuXHJcbiAgICAgIFxyXG5cclxuXHJcbiAgICBcclxuICAgIFxyXG4gIDwvPilcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiV2ViM1JlYWN0UHJvdmlkZXIiLCJXZWIzUHJvdmlkZXIiLCJIZWFkZXIiLCJtYWtlU3R5bGVzIiwiQnV0dG9uIiwiR3JpZCIsImdldExpYnJhcnkiLCJwcm92aWRlciIsImxpYnJhcnkiLCJwb2xsaW5nSW50ZXJ2YWwiLCJ1c2VTdHlsZSIsInRoZW1lIiwibWFpbkltYWdlIiwibWFyZ2luVG9wIiwiZm9ybSIsImJyZWFrcG9pbnRzIiwiYmV0d2VlbiIsImJhY2tncm91bmRDb2xvZXIiLCJvbmx5IiwiY2xhc3NlcyIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpbkJvdHRvbSIsIk1pbnQiLCJjb2xvciIsImFsaWduU2VsZiJdLCJzb3VyY2VSb290IjoiIn0=