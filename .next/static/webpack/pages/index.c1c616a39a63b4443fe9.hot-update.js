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
          marginLeft: '5%'
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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Button, {
            children: "Mint"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzFjNjE2YTM5YTYzYjQ0NDNmZTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBR0E7QUFHQTtBQUNBO0FBb0JBOztBQUVBLFNBQVNPLFVBQVQsQ0FBb0JDLFFBQXBCLEVBQWlEO0FBQy9DLE1BQU1DLE9BQU8sR0FBRyxJQUFJUCxrRUFBSixDQUFpQk0sUUFBakIsQ0FBaEI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxlQUFSLEdBQTBCLEtBQTFCO0FBQ0EsU0FBT0QsT0FBUDtBQUNEOztBQUlELDZCQUFlLHNDQUFXO0FBRXhCLE1BQU1FLFFBQVEsR0FBR1Asb0VBQVUsQ0FBQyxVQUFDUSxLQUFEO0FBQUE7O0FBQUEsV0FBWTtBQUV0Q0MsTUFBQUEsU0FBUyxFQUFDO0FBRVJDLFFBQUFBLFNBQVMsRUFBRTtBQUZILE9BRjRCO0FBUXRDQyxNQUFBQSxJQUFJLG1MQUVESCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLE9BQWxCLENBQTBCLElBQTFCLEVBQWdDLElBQWhDLENBRkMsRUFFc0M7QUFFdENDLFFBQUFBLGdCQUFnQixFQUFFO0FBRm9CLE9BRnRDLHVLQU9ETixLQUFLLENBQUNJLFdBQU4sQ0FBa0JHLElBQWxCLENBQXVCLElBQXZCLENBUEMsRUFPNkIsRUFQN0I7QUFSa0MsS0FBWjtBQUFBLEdBQUQsQ0FBM0I7QUFzQkEsTUFBTUMsT0FBTyxHQUFHVCxRQUFRLEVBQXhCO0FBRUEsc0JBQVE7QUFBQSwyQkFDTiw4REFBQywrREFBRDtBQUFtQixnQkFBVSxFQUFFSixVQUEvQjtBQUFBLDhCQUNFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLG1EQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixlQUFPLEVBQUUsQ0FBekI7QUFBNEIsYUFBSyxFQUFFO0FBQUNjLFVBQUFBLEtBQUssRUFBRSxLQUFSO0FBQWVDLFVBQUFBLFVBQVUsRUFBRTtBQUEzQixTQUFuQztBQUFBLCtCQUNBLDhEQUFDLG1EQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBa0IsWUFBRSxFQUFFLENBQXRCO0FBQXlCLFlBQUUsRUFBRSxDQUE3QjtBQUFnQyxZQUFFLEVBQUUsQ0FBcEM7QUFBdUMsWUFBRSxFQUFFLENBQTNDO0FBQThDLGVBQUssRUFBRTtBQUFDQyxZQUFBQSxZQUFZLEVBQUU7QUFBZixXQUFyRDtBQUFBLGlDQUNFLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETSxtQkFBUjtBQWdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFdlYjNSZWFjdFByb3ZpZGVyLCB1c2VXZWIzUmVhY3QsIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcclxuaW1wb3J0IHtcclxuICBOb0V0aGVyZXVtUHJvdmlkZXJFcnJvcixcclxuICBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9ySW5qZWN0ZWRcclxufSBmcm9tICdAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3InXHJcbmltcG9ydCB7IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JXYWxsZXRDb25uZWN0IH0gZnJvbSAnQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdC1jb25uZWN0b3InXHJcbmltcG9ydCB7IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSB9IGZyb20gJ0B3ZWIzLXJlYWN0L2ZyYW1lLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzJ1xyXG5pbXBvcnQgeyBmb3JtYXRFdGhlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3VuaXRzJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9Db21wb25lbnRzL05hdmlnYXRpb24nXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9IZWFkZXInXHJcbmltcG9ydCBDaGFpbklkIGZyb20gJy4uL0NvbXBvbmVudHMvQ2hhaW5JZCdcclxuaW1wb3J0IEFjY291bnQgZnJvbSAnLi4vQ29tcG9uZW50cy9BY2NvdW50J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBEb25lT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RvbmVPdXRsaW5lJztcclxuXHJcbmltcG9ydCB7IHVzZUVhZ2VyQ29ubmVjdCwgdXNlSW5hY3RpdmVMaXN0ZW5lciB9IGZyb20gJy4uL2hvb2tzJ1xyXG5pbXBvcnQge1xyXG4gIGluamVjdGVkLFxyXG4gIG5ldHdvcmssXHJcbiAgd2FsbGV0Y29ubmVjdCxcclxuICB3YWxsZXRsaW5rLFxyXG4gIGxlZGdlcixcclxuICB0cmV6b3IsXHJcbiAgbGF0dGljZSxcclxuICBmcmFtZSxcclxuICBhdXRoZXJldW0sXHJcbiAgZm9ydG1hdGljLFxyXG4gIG1hZ2ljLFxyXG4gIHBvcnRpcyxcclxuICB0b3J1c1xyXG59IGZyb20gJy4uL2Nvbm5lY3RvcnMnXHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NwaW5uZXInXHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmZ1bmN0aW9uIGdldExpYnJhcnkocHJvdmlkZXI6IGFueSk6IFdlYjNQcm92aWRlciB7XHJcbiAgY29uc3QgbGlicmFyeSA9IG5ldyBXZWIzUHJvdmlkZXIocHJvdmlkZXIpXHJcbiAgbGlicmFyeS5wb2xsaW5nSW50ZXJ2YWwgPSAxMjAwMFxyXG4gIHJldHVybiBsaWJyYXJ5XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcblxyXG4gIGNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblxyXG4gICAgbWFpbkltYWdlOntcclxuICBcclxuICAgICAgbWFyZ2luVG9wOiAnNTB2aCdcclxuICBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGZvcm06e1xyXG5cclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmJldHdlZW4oJ3NtJywgJ3hsJyldOntcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9lcjogJ2JsYWNrJ1xyXG5cclxuICAgICAgfSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLm9ubHkoJ3hzJyldOnt9XHJcblxyXG5cclxuICAgIH1cclxuICBcclxuICB9KSk7XHJcbiAgXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHJcblxyXG4gIHJldHVybiAoPD5cclxuICAgIDxXZWIzUmVhY3RQcm92aWRlciBnZXRMaWJyYXJ5PXtnZXRMaWJyYXJ5fT5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gc3R5bGU9e3t3aWR0aDogJzgwJScsIG1hcmdpbkxlZnQ6ICc1JSd9fT5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezZ9IG1kPXs2fSBsZz17Nn0geGw9ezZ9IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMTV2aCd9fT5cclxuICAgICAgICA8QnV0dG9uPk1pbnQ8L0J1dHRvbj5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICAgPC9XZWIzUmVhY3RQcm92aWRlcj5cclxuXHJcbiAgICAgIFxyXG5cclxuXHJcbiAgICBcclxuICAgIFxyXG4gIDwvPilcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiV2ViM1JlYWN0UHJvdmlkZXIiLCJXZWIzUHJvdmlkZXIiLCJIZWFkZXIiLCJtYWtlU3R5bGVzIiwiQnV0dG9uIiwiR3JpZCIsImdldExpYnJhcnkiLCJwcm92aWRlciIsImxpYnJhcnkiLCJwb2xsaW5nSW50ZXJ2YWwiLCJ1c2VTdHlsZSIsInRoZW1lIiwibWFpbkltYWdlIiwibWFyZ2luVG9wIiwiZm9ybSIsImJyZWFrcG9pbnRzIiwiYmV0d2VlbiIsImJhY2tncm91bmRDb2xvZXIiLCJvbmx5IiwiY2xhc3NlcyIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpbkJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=