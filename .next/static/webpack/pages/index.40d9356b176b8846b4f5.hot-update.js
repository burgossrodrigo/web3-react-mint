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
            children: "Mint"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 9
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDBkOTM1NmIxNzZiODg0NmI0ZjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTtBQUdBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFvQkE7O0FBRUEsU0FBU1UsVUFBVCxDQUFvQkMsUUFBcEIsRUFBaUQ7QUFDL0MsTUFBTUMsT0FBTyxHQUFHLElBQUlWLGtFQUFKLENBQWlCUyxRQUFqQixDQUFoQjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLGVBQVIsR0FBMEIsS0FBMUI7QUFDQSxTQUFPRCxPQUFQO0FBQ0Q7O0FBSUQsNkJBQWUsc0NBQVc7QUFFeEIsTUFBTUUsUUFBUSxHQUFHVixvRUFBVSxDQUFDLFVBQUNXLEtBQUQ7QUFBQTs7QUFBQSxXQUFZO0FBRXRDQyxNQUFBQSxTQUFTLEVBQUM7QUFFUkMsUUFBQUEsU0FBUyxFQUFFO0FBRkgsT0FGNEI7QUFRdENDLE1BQUFBLElBQUksbUxBRURILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsT0FBbEIsQ0FBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsQ0FGQyxFQUVzQztBQUV0Q0MsUUFBQUEsZ0JBQWdCLEVBQUU7QUFGb0IsT0FGdEMsdUtBT0ROLEtBQUssQ0FBQ0ksV0FBTixDQUFrQkcsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FQQyxFQU82QixFQVA3QjtBQVJrQyxLQUFaO0FBQUEsR0FBRCxDQUEzQjtBQXNCQSxNQUFNQyxPQUFPLEdBQUdULFFBQVEsRUFBeEI7QUFDQVUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBT2xCLHVEQUFuQjtBQUVBLHNCQUFRO0FBQUEsMkJBQ04sOERBQUMsK0RBQUQ7QUFBbUIsZ0JBQVUsRUFBRUcsVUFBL0I7QUFBQSw4QkFDRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFQSw4REFBQyxtREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0IsZUFBTyxFQUFFLENBQXpCO0FBQTRCLGFBQUssRUFBRTtBQUFDZ0IsVUFBQUEsS0FBSyxFQUFFLEtBQVI7QUFBZUMsVUFBQUEsVUFBVSxFQUFFLElBQTNCO0FBQWlDVixVQUFBQSxTQUFTLEVBQUU7QUFBNUMsU0FBbkM7QUFBQSwrQkFDRSw4REFBQyxtREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxDQUFmO0FBQWtCLFlBQUUsRUFBRSxDQUF0QjtBQUF5QixZQUFFLEVBQUUsQ0FBN0I7QUFBZ0MsWUFBRSxFQUFFLENBQXBDO0FBQXVDLFlBQUUsRUFBRSxDQUEzQztBQUE4QyxlQUFLLEVBQUU7QUFBQ1csWUFBQUEsWUFBWSxFQUFFO0FBQWYsV0FBckQ7QUFBQSxvQkFDRXJCLHVEQUFNLEtBQUssSUFBWCxnQkFDQSw4REFBQyxxREFBRDtBQUFRLG1CQUFPLEVBQUMsV0FBaEI7QUFBNEIsZ0JBQUksRUFBQyxPQUFqQztBQUF5QyxpQkFBSyxFQUFDLFNBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGdCQVNBLDhEQUFDLHFEQUFEO0FBQUEsbUNBQ0UsOERBQUMsMkRBQUQ7QUFBQSxxQ0FDRSw4REFBQyx5REFBRDtBQUFZLHFCQUFLLEVBQUU7QUFBQ3NCLGtCQUFBQSxLQUFLLEVBQUUsT0FBUjtBQUFpQkMsa0JBQUFBLFNBQVMsRUFBRTtBQUE1QixpQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE0sbUJBQVI7QUErQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBXZWIzUmVhY3RQcm92aWRlciwgdXNlV2ViM1JlYWN0LCBVbnN1cHBvcnRlZENoYWluSWRFcnJvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXHJcbmltcG9ydCB7XHJcbiAgTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IsXHJcbiAgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkXHJcbn0gZnJvbSAnQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yRnJhbWUgfSBmcm9tICdAd2ViMy1yZWFjdC9mcmFtZS1jb25uZWN0b3InXHJcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3Byb3ZpZGVycydcclxuaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC91bml0cydcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgQ2hhaW5JZCBmcm9tICcuLi9Db21wb25lbnRzL0NoYWluSWQnXHJcbmltcG9ydCBBY2NvdW50IGZyb20gJy4uL0NvbXBvbmVudHMvQWNjb3VudCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgRG9uZU91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Eb25lT3V0bGluZSc7XHJcbmltcG9ydCBhY3RpdmUgIGZyb20gJy4uL0NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IFNpZGVEcmF3ZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9TaWRlRHJhd2VyJztcclxuXHJcblxyXG5pbXBvcnQgeyB1c2VFYWdlckNvbm5lY3QsIHVzZUluYWN0aXZlTGlzdGVuZXIgfSBmcm9tICcuLi9ob29rcydcclxuaW1wb3J0IHtcclxuICBpbmplY3RlZCxcclxuICBuZXR3b3JrLFxyXG4gIHdhbGxldGNvbm5lY3QsXHJcbiAgd2FsbGV0bGluayxcclxuICBsZWRnZXIsXHJcbiAgdHJlem9yLFxyXG4gIGxhdHRpY2UsXHJcbiAgZnJhbWUsXHJcbiAgYXV0aGVyZXVtLFxyXG4gIGZvcnRtYXRpYyxcclxuICBtYWdpYyxcclxuICBwb3J0aXMsXHJcbiAgdG9ydXNcclxufSBmcm9tICcuLi9jb25uZWN0b3JzJ1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TcGlubmVyJ1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5mdW5jdGlvbiBnZXRMaWJyYXJ5KHByb3ZpZGVyOiBhbnkpOiBXZWIzUHJvdmlkZXIge1xyXG4gIGNvbnN0IGxpYnJhcnkgPSBuZXcgV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKVxyXG4gIGxpYnJhcnkucG9sbGluZ0ludGVydmFsID0gMTIwMDBcclxuICByZXR1cm4gbGlicmFyeVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG5cclxuICBjb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cclxuICAgIG1haW5JbWFnZTp7XHJcbiAgXHJcbiAgICAgIG1hcmdpblRvcDogJzUwdmgnXHJcbiAgXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBmb3JtOntcclxuXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5iZXR3ZWVuKCdzbScsICd4bCcpXTp7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvZXI6ICdibGFjaydcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5vbmx5KCd4cycpXTp7fVxyXG5cclxuXHJcbiAgICB9XHJcbiAgXHJcbiAgfSkpO1xyXG4gIFxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1xyXG4gIGNvbnNvbGUubG9nKHR5cGVvZiBhY3RpdmUpO1xyXG5cclxuICByZXR1cm4gKDw+XHJcbiAgICA8V2ViM1JlYWN0UHJvdmlkZXIgZ2V0TGlicmFyeT17Z2V0TGlicmFyeX0+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBzdHlsZT17e3dpZHRoOiAnODAlJywgbWFyZ2luTGVmdDogJzUlJywgbWFyZ2luVG9wOiAnMTV2aCd9fT5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezZ9IG1kPXs2fSBsZz17Nn0geGw9ezZ9IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMTV2aCd9fT5cclxuICAgICAgeyBhY3RpdmUgPT09IHRydWUgPyBcclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgTWludFxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgICA6XHJcblxyXG4gICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICA8U2lkZURyYXdlcj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgYWxpZ25TZWxmOiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgIENvbm5lY3RcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9TaWRlRHJhd2VyPlxyXG4gICAgICAgIDwvQnV0dG9uPn1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICAgPC9XZWIzUmVhY3RQcm92aWRlcj5cclxuXHJcbiAgICAgIFxyXG5cclxuXHJcbiAgICBcclxuICAgIFxyXG4gIDwvPilcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiV2ViM1JlYWN0UHJvdmlkZXIiLCJXZWIzUHJvdmlkZXIiLCJIZWFkZXIiLCJtYWtlU3R5bGVzIiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsImFjdGl2ZSIsIlNpZGVEcmF3ZXIiLCJHcmlkIiwiZ2V0TGlicmFyeSIsInByb3ZpZGVyIiwibGlicmFyeSIsInBvbGxpbmdJbnRlcnZhbCIsInVzZVN0eWxlIiwidGhlbWUiLCJtYWluSW1hZ2UiLCJtYXJnaW5Ub3AiLCJmb3JtIiwiYnJlYWtwb2ludHMiLCJiZXR3ZWVuIiwiYmFja2dyb3VuZENvbG9lciIsIm9ubHkiLCJjbGFzc2VzIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwiYWxpZ25TZWxmIl0sInNvdXJjZVJvb3QiOiIifQ==