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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.Web3ReactProvider, {
      getLibrary: getLibrary,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
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
          children: ["active ?", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Button, {
            variant: "contained",
            size: "large",
            color: "primary",
            children: "Mint"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Button, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_SideDrawer__WEBPACK_IMPORTED_MODULE_5__.default, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {
                style: {
                  color: 'white',
                  alignSelf: 'center'
                },
                children: "Connect"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjU0YWJmYWE2ZmRlNzk4YzIzMjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTtBQUdBO0FBR0E7QUFDQTtBQUdBO0FBb0JBOztBQUVBLFNBQVNTLFVBQVQsQ0FBb0JDLFFBQXBCLEVBQWlEO0FBQy9DLE1BQU1DLE9BQU8sR0FBRyxJQUFJVCxrRUFBSixDQUFpQlEsUUFBakIsQ0FBaEI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxlQUFSLEdBQTBCLEtBQTFCO0FBQ0EsU0FBT0QsT0FBUDtBQUNEOztBQUlELDZCQUFlLHNDQUFXO0FBRXhCLE1BQU1FLFFBQVEsR0FBR1Qsb0VBQVUsQ0FBQyxVQUFDVSxLQUFEO0FBQUE7O0FBQUEsV0FBWTtBQUV0Q0MsTUFBQUEsU0FBUyxFQUFDO0FBRVJDLFFBQUFBLFNBQVMsRUFBRTtBQUZILE9BRjRCO0FBUXRDQyxNQUFBQSxJQUFJLG1MQUVESCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLE9BQWxCLENBQTBCLElBQTFCLEVBQWdDLElBQWhDLENBRkMsRUFFc0M7QUFFdENDLFFBQUFBLGdCQUFnQixFQUFFO0FBRm9CLE9BRnRDLHVLQU9ETixLQUFLLENBQUNJLFdBQU4sQ0FBa0JHLElBQWxCLENBQXVCLElBQXZCLENBUEMsRUFPNkIsRUFQN0I7QUFSa0MsS0FBWjtBQUFBLEdBQUQsQ0FBM0I7QUFzQkEsTUFBTUMsT0FBTyxHQUFHVCxRQUFRLEVBQXhCO0FBRUEsc0JBQVE7QUFBQSwyQkFDTiw4REFBQywrREFBRDtBQUFtQixnQkFBVSxFQUFFSixVQUEvQjtBQUFBLDhCQUNFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVBLDhEQUFDLG1EQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixlQUFPLEVBQUUsQ0FBekI7QUFBNEIsYUFBSyxFQUFFO0FBQUNjLFVBQUFBLEtBQUssRUFBRSxLQUFSO0FBQWVDLFVBQUFBLFVBQVUsRUFBRSxJQUEzQjtBQUFpQ1IsVUFBQUEsU0FBUyxFQUFFO0FBQTVDLFNBQW5DO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsQ0FBZjtBQUFrQixZQUFFLEVBQUUsQ0FBdEI7QUFBeUIsWUFBRSxFQUFFLENBQTdCO0FBQWdDLFlBQUUsRUFBRSxDQUFwQztBQUF1QyxZQUFFLEVBQUUsQ0FBM0M7QUFBOEMsZUFBSyxFQUFFO0FBQUNTLFlBQUFBLFlBQVksRUFBRTtBQUFmLFdBQXJEO0FBQUEsOENBRUUsOERBQUMscURBQUQ7QUFBUSxtQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGdCQUFJLEVBQUMsT0FBakM7QUFBeUMsaUJBQUssRUFBQyxTQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQVNFLDhEQUFDLHFEQUFEO0FBQUEsbUNBQ0UsOERBQUMsMkRBQUQ7QUFBQSxxQ0FDRSw4REFBQyx5REFBRDtBQUFZLHFCQUFLLEVBQUU7QUFBQ0Msa0JBQUFBLEtBQUssRUFBRSxPQUFSO0FBQWlCQyxrQkFBQUEsU0FBUyxFQUFFO0FBQTVCLGlCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETSxtQkFBUjtBQThCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFdlYjNSZWFjdFByb3ZpZGVyLCB1c2VXZWIzUmVhY3QsIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcclxuaW1wb3J0IHtcclxuICBOb0V0aGVyZXVtUHJvdmlkZXJFcnJvcixcclxuICBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9ySW5qZWN0ZWRcclxufSBmcm9tICdAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3InXHJcbmltcG9ydCB7IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JXYWxsZXRDb25uZWN0IH0gZnJvbSAnQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdC1jb25uZWN0b3InXHJcbmltcG9ydCB7IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSB9IGZyb20gJ0B3ZWIzLXJlYWN0L2ZyYW1lLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzJ1xyXG5pbXBvcnQgeyBmb3JtYXRFdGhlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3VuaXRzJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9Db21wb25lbnRzL05hdmlnYXRpb24nXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCBDaGFpbklkIGZyb20gJy4uL0NvbXBvbmVudHMvQ2hhaW5JZCdcclxuaW1wb3J0IEFjY291bnQgZnJvbSAnLi4vQ29tcG9uZW50cy9BY2NvdW50J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQnV0dG9uLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBEb25lT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RvbmVPdXRsaW5lJztcclxuaW1wb3J0IGFjdGl2ZSAgZnJvbSAnLi4vQ29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgU2lkZURyYXdlciBmcm9tICcuLi9Db21wb25lbnRzL1NpZGVEcmF3ZXInO1xyXG5cclxuXHJcbmltcG9ydCB7IHVzZUVhZ2VyQ29ubmVjdCwgdXNlSW5hY3RpdmVMaXN0ZW5lciB9IGZyb20gJy4uL2hvb2tzJ1xyXG5pbXBvcnQge1xyXG4gIGluamVjdGVkLFxyXG4gIG5ldHdvcmssXHJcbiAgd2FsbGV0Y29ubmVjdCxcclxuICB3YWxsZXRsaW5rLFxyXG4gIGxlZGdlcixcclxuICB0cmV6b3IsXHJcbiAgbGF0dGljZSxcclxuICBmcmFtZSxcclxuICBhdXRoZXJldW0sXHJcbiAgZm9ydG1hdGljLFxyXG4gIG1hZ2ljLFxyXG4gIHBvcnRpcyxcclxuICB0b3J1c1xyXG59IGZyb20gJy4uL2Nvbm5lY3RvcnMnXHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NwaW5uZXInXHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmZ1bmN0aW9uIGdldExpYnJhcnkocHJvdmlkZXI6IGFueSk6IFdlYjNQcm92aWRlciB7XHJcbiAgY29uc3QgbGlicmFyeSA9IG5ldyBXZWIzUHJvdmlkZXIocHJvdmlkZXIpXHJcbiAgbGlicmFyeS5wb2xsaW5nSW50ZXJ2YWwgPSAxMjAwMFxyXG4gIHJldHVybiBsaWJyYXJ5XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIGNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblxyXG4gICAgbWFpbkltYWdlOntcclxuICBcclxuICAgICAgbWFyZ2luVG9wOiAnNTB2aCdcclxuICBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGZvcm06e1xyXG5cclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmJldHdlZW4oJ3NtJywgJ3hsJyldOntcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9lcjogJ2JsYWNrJ1xyXG5cclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLm9ubHkoJ3hzJyldOnt9XHJcblxyXG5cclxuICAgIH1cclxuICBcclxuICB9KSk7XHJcbiAgXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcblxyXG4gIHJldHVybiAoPD5cclxuICAgIDxXZWIzUmVhY3RQcm92aWRlciBnZXRMaWJyYXJ5PXtnZXRMaWJyYXJ5fT5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IHN0eWxlPXt7d2lkdGg6ICc4MCUnLCBtYXJnaW5MZWZ0OiAnNSUnLCBtYXJnaW5Ub3A6ICcxNXZoJ319PlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17Nn0gbWQ9ezZ9IGxnPXs2fSB4bD17Nn0gc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcxNXZoJ319PlxyXG4gICAgICAgYWN0aXZlID8gXHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cImxhcmdlXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIE1pbnRcclxuICAgICAgICBcclxuICAgICAgICA8L0J1dHRvbj5cclxuXHJcblxyXG4gICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICA8U2lkZURyYXdlcj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgYWxpZ25TZWxmOiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgIENvbm5lY3RcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9TaWRlRHJhd2VyPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0dyaWQ+XHJcbiAgICA8L1dlYjNSZWFjdFByb3ZpZGVyPlxyXG5cclxuICAgICAgXHJcblxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgPC8+KVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJXZWIzUmVhY3RQcm92aWRlciIsIldlYjNQcm92aWRlciIsIkhlYWRlciIsIm1ha2VTdHlsZXMiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiU2lkZURyYXdlciIsIkdyaWQiLCJnZXRMaWJyYXJ5IiwicHJvdmlkZXIiLCJsaWJyYXJ5IiwicG9sbGluZ0ludGVydmFsIiwidXNlU3R5bGUiLCJ0aGVtZSIsIm1haW5JbWFnZSIsIm1hcmdpblRvcCIsImZvcm0iLCJicmVha3BvaW50cyIsImJldHdlZW4iLCJiYWNrZ3JvdW5kQ29sb2VyIiwib25seSIsImNsYXNzZXMiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsImFsaWduU2VsZiJdLCJzb3VyY2VSb290IjoiIn0=