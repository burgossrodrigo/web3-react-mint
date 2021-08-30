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
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/providers */ "./node_modules/@ethersproject/providers/lib.esm/index.js");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Header */ "./Components/Header.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Components_SideDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/SideDrawer */ "./Components/SideDrawer.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\web3-react-page\\pages\\index.tsx";










function getLibrary(provider) {
  var library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_6__.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var useStyle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(function (theme) {
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
  console.log(typeof _Components_Header__WEBPACK_IMPORTED_MODULE_4__.default);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.Web3ReactProvider, {
      getLibrary: getLibrary,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
        container: true,
        spacing: 3,
        style: {
          width: '80%',
          marginLeft: '5%',
          marginTop: '15vh'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {
          item: true,
          xs: 6,
          sm: 6,
          md: 6,
          lg: 6,
          xl: 6,
          style: {
            marginBottom: '15vh'
          },
          children: _Components_Header__WEBPACK_IMPORTED_MODULE_4__.default === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Button, {
            variant: "contained",
            size: "large",
            color: "primary",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
              style: {
                color: 'white',
                alignSelf: 'center'
              },
              children: "Connect"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 9
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Button, {
            variant: "contained",
            size: "large",
            color: "primary",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_SideDrawer__WEBPACK_IMPORTED_MODULE_5__.default, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                style: {
                  color: 'white',
                  alignSelf: 'center'
                },
                children: "Connect"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODIxYTZlNzgyMjhiNTM5Nzg1MzkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTtBQUdBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFvQkE7O0FBRUEsU0FBU1UsVUFBVCxDQUFvQkMsUUFBcEIsRUFBaUQ7QUFDL0MsTUFBTUMsT0FBTyxHQUFHLElBQUlWLGtFQUFKLENBQWlCUyxRQUFqQixDQUFoQjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLGVBQVIsR0FBMEIsS0FBMUI7QUFDQSxTQUFPRCxPQUFQO0FBQ0Q7O0FBSUQsNkJBQWUsc0NBQVc7QUFFeEIsTUFBTUUsUUFBUSxHQUFHVixvRUFBVSxDQUFDLFVBQUNXLEtBQUQ7QUFBQTs7QUFBQSxXQUFZO0FBRXRDQyxNQUFBQSxTQUFTLEVBQUM7QUFFUkMsUUFBQUEsU0FBUyxFQUFFO0FBRkgsT0FGNEI7QUFRdENDLE1BQUFBLElBQUksbUxBRURILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsT0FBbEIsQ0FBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsQ0FGQyxFQUVzQztBQUV0Q0MsUUFBQUEsZ0JBQWdCLEVBQUU7QUFGb0IsT0FGdEMsdUtBT0ROLEtBQUssQ0FBQ0ksV0FBTixDQUFrQkcsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FQQyxFQU82QixFQVA3QjtBQVJrQyxLQUFaO0FBQUEsR0FBRCxDQUEzQjtBQXNCQSxNQUFNQyxPQUFPLEdBQUdULFFBQVEsRUFBeEI7QUFDQVUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBT2xCLHVEQUFuQjtBQUVBLHNCQUFRO0FBQUEsMkJBQ04sOERBQUMsK0RBQUQ7QUFBbUIsZ0JBQVUsRUFBRUcsVUFBL0I7QUFBQSw4QkFDRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFQSw4REFBQyxtREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0IsZUFBTyxFQUFFLENBQXpCO0FBQTRCLGFBQUssRUFBRTtBQUFDZ0IsVUFBQUEsS0FBSyxFQUFFLEtBQVI7QUFBZUMsVUFBQUEsVUFBVSxFQUFFLElBQTNCO0FBQWlDVixVQUFBQSxTQUFTLEVBQUU7QUFBNUMsU0FBbkM7QUFBQSwrQkFDRSw4REFBQyxtREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxDQUFmO0FBQWtCLFlBQUUsRUFBRSxDQUF0QjtBQUF5QixZQUFFLEVBQUUsQ0FBN0I7QUFBZ0MsWUFBRSxFQUFFLENBQXBDO0FBQXVDLFlBQUUsRUFBRSxDQUEzQztBQUE4QyxlQUFLLEVBQUU7QUFBQ1csWUFBQUEsWUFBWSxFQUFFO0FBQWYsV0FBckQ7QUFBQSxvQkFDRXJCLHVEQUFNLEtBQUssSUFBWCxnQkFDQSw4REFBQyxxREFBRDtBQUFRLG1CQUFPLEVBQUMsV0FBaEI7QUFBNEIsZ0JBQUksRUFBQyxPQUFqQztBQUF5QyxpQkFBSyxFQUFDLFNBQS9DO0FBQUEsbUNBQ0ksOERBQUMseURBQUQ7QUFBWSxtQkFBSyxFQUFFO0FBQUNzQixnQkFBQUEsS0FBSyxFQUFFLE9BQVI7QUFBaUJDLGdCQUFBQSxTQUFTLEVBQUU7QUFBNUIsZUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGdCQVNBLDhEQUFDLHFEQUFEO0FBQVEsbUJBQU8sRUFBQyxXQUFoQjtBQUE0QixnQkFBSSxFQUFDLE9BQWpDO0FBQXlDLGlCQUFLLEVBQUMsU0FBL0M7QUFBQSxtQ0FDRSw4REFBQywyREFBRDtBQUFBLHFDQUNFLDhEQUFDLHlEQUFEO0FBQVkscUJBQUssRUFBRTtBQUFDRCxrQkFBQUEsS0FBSyxFQUFFLE9BQVI7QUFBaUJDLGtCQUFBQSxTQUFTLEVBQUU7QUFBNUIsaUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURNLG1CQUFSO0FBK0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIsIHVzZVdlYjNSZWFjdCwgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xyXG5pbXBvcnQge1xyXG4gIE5vRXRoZXJldW1Qcm92aWRlckVycm9yLFxyXG4gIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZFxyXG59IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QgfSBmcm9tICdAd2ViMy1yZWFjdC93YWxsZXRjb25uZWN0LWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckZyYW1lIH0gZnJvbSAnQHdlYjMtcmVhY3QvZnJhbWUtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9wcm92aWRlcnMnXHJcbmltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvdW5pdHMnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL0NvbXBvbmVudHMvTmF2aWdhdGlvbidcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9Db21wb25lbnRzL0hlYWRlcidcclxuaW1wb3J0IENoYWluSWQgZnJvbSAnLi4vQ29tcG9uZW50cy9DaGFpbklkJ1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuLi9Db21wb25lbnRzL0FjY291bnQnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IERvbmVPdXRsaW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRG9uZU91dGxpbmUnO1xyXG5pbXBvcnQgYWN0aXZlICBmcm9tICcuLi9Db21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBTaWRlRHJhd2VyIGZyb20gJy4uL0NvbXBvbmVudHMvU2lkZURyYXdlcic7XHJcblxyXG5cclxuaW1wb3J0IHsgdXNlRWFnZXJDb25uZWN0LCB1c2VJbmFjdGl2ZUxpc3RlbmVyIH0gZnJvbSAnLi4vaG9va3MnXHJcbmltcG9ydCB7XHJcbiAgaW5qZWN0ZWQsXHJcbiAgbmV0d29yayxcclxuICB3YWxsZXRjb25uZWN0LFxyXG4gIHdhbGxldGxpbmssXHJcbiAgbGVkZ2VyLFxyXG4gIHRyZXpvcixcclxuICBsYXR0aWNlLFxyXG4gIGZyYW1lLFxyXG4gIGF1dGhlcmV1bSxcclxuICBmb3J0bWF0aWMsXHJcbiAgbWFnaWMsXHJcbiAgcG9ydGlzLFxyXG4gIHRvcnVzXHJcbn0gZnJvbSAnLi4vY29ubmVjdG9ycydcclxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3Bpbm5lcidcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuZnVuY3Rpb24gZ2V0TGlicmFyeShwcm92aWRlcjogYW55KTogV2ViM1Byb3ZpZGVyIHtcclxuICBjb25zdCBsaWJyYXJ5ID0gbmV3IFdlYjNQcm92aWRlcihwcm92aWRlcilcclxuICBsaWJyYXJ5LnBvbGxpbmdJbnRlcnZhbCA9IDEyMDAwXHJcbiAgcmV0dXJuIGxpYnJhcnlcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuXHJcbiAgY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHJcbiAgICBtYWluSW1hZ2U6e1xyXG4gIFxyXG4gICAgICBtYXJnaW5Ub3A6ICc1MHZoJ1xyXG4gIFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZm9ybTp7XHJcblxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuYmV0d2Vlbignc20nLCAneGwnKV06e1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb2VyOiAnYmxhY2snXHJcblxyXG4gICAgICB9LFxyXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMub25seSgneHMnKV06e31cclxuXHJcblxyXG4gICAgfVxyXG4gIFxyXG4gIH0pKTtcclxuICBcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICBjb25zb2xlLmxvZyh0eXBlb2YgYWN0aXZlKTtcclxuXHJcbiAgcmV0dXJuICg8PlxyXG4gICAgPFdlYjNSZWFjdFByb3ZpZGVyIGdldExpYnJhcnk9e2dldExpYnJhcnl9PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gc3R5bGU9e3t3aWR0aDogJzgwJScsIG1hcmdpbkxlZnQ6ICc1JScsIG1hcmdpblRvcDogJzE1dmgnfX0+XHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXs2fSBtZD17Nn0gbGc9ezZ9IHhsPXs2fSBzdHlsZT17e21hcmdpbkJvdHRvbTogJzE1dmgnfX0+XHJcbiAgICAgIHsgYWN0aXZlID09PSB0cnVlID8gXHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7Y29sb3I6ICd3aGl0ZScsIGFsaWduU2VsZjogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICBDb25uZWN0XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgOlxyXG5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgIDxTaWRlRHJhd2VyPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17e2NvbG9yOiAnd2hpdGUnLCBhbGlnblNlbGY6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgQ29ubmVjdFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L1NpZGVEcmF3ZXI+XHJcbiAgICAgICAgPC9CdXR0b24+fVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgICA8L1dlYjNSZWFjdFByb3ZpZGVyPlxyXG5cclxuICAgICAgXHJcblxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgPC8+KVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJXZWIzUmVhY3RQcm92aWRlciIsIldlYjNQcm92aWRlciIsIkhlYWRlciIsIm1ha2VTdHlsZXMiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiYWN0aXZlIiwiU2lkZURyYXdlciIsIkdyaWQiLCJnZXRMaWJyYXJ5IiwicHJvdmlkZXIiLCJsaWJyYXJ5IiwicG9sbGluZ0ludGVydmFsIiwidXNlU3R5bGUiLCJ0aGVtZSIsIm1haW5JbWFnZSIsIm1hcmdpblRvcCIsImZvcm0iLCJicmVha3BvaW50cyIsImJldHdlZW4iLCJiYWNrZ3JvdW5kQ29sb2VyIiwib25seSIsImNsYXNzZXMiLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJhbGlnblNlbGYiXSwic291cmNlUm9vdCI6IiJ9