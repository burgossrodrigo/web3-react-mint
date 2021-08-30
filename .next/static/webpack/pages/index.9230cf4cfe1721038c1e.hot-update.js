"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./connectors.ts":
/*!***********************!*\
  !*** ./connectors.ts ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "injected": function() { return /* binding */ injected; },
/* harmony export */   "network": function() { return /* binding */ network; },
/* harmony export */   "walletconnect": function() { return /* binding */ walletconnect; },
/* harmony export */   "walletlink": function() { return /* binding */ walletlink; },
/* harmony export */   "ledger": function() { return /* binding */ ledger; },
/* harmony export */   "trezor": function() { return /* binding */ trezor; },
/* harmony export */   "lattice": function() { return /* binding */ lattice; },
/* harmony export */   "frame": function() { return /* binding */ frame; },
/* harmony export */   "authereum": function() { return /* binding */ authereum; },
/* harmony export */   "fortmatic": function() { return /* binding */ fortmatic; },
/* harmony export */   "magic": function() { return /* binding */ magic; },
/* harmony export */   "portis": function() { return /* binding */ portis; },
/* harmony export */   "torus": function() { return /* binding */ torus; }
/* harmony export */ });
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/injected-connector */ "./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js");
/* harmony import */ var _web3_react_network_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/network-connector */ "./node_modules/@web3-react/network-connector/dist/network-connector.esm.js");
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/walletconnect-connector */ "./node_modules/@web3-react/walletconnect-connector/dist/walletconnect-connector.esm.js");
/* harmony import */ var _web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/walletlink-connector */ "./node_modules/@web3-react/walletlink-connector/dist/walletlink-connector.esm.js");
/* harmony import */ var _web3_react_ledger_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/ledger-connector */ "./node_modules/@web3-react/ledger-connector/dist/ledger-connector.esm.js");
/* harmony import */ var _web3_react_trezor_connector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web3-react/trezor-connector */ "./node_modules/@web3-react/trezor-connector/dist/trezor-connector.esm.js");
/* harmony import */ var _web3_react_lattice_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/lattice-connector */ "./node_modules/@web3-react/lattice-connector/dist/lattice-connector.esm.js");
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/frame-connector */ "./node_modules/@web3-react/frame-connector/dist/frame-connector.esm.js");
/* harmony import */ var _web3_react_authereum_connector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @web3-react/authereum-connector */ "./node_modules/@web3-react/authereum-connector/dist/authereum-connector.esm.js");
/* harmony import */ var _web3_react_fortmatic_connector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @web3-react/fortmatic-connector */ "./node_modules/@web3-react/fortmatic-connector/dist/fortmatic-connector.esm.js");
/* harmony import */ var _web3_react_magic_connector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @web3-react/magic-connector */ "./node_modules/@web3-react/magic-connector/dist/magic-connector.esm.js");
/* harmony import */ var _web3_react_portis_connector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @web3-react/portis-connector */ "./node_modules/@web3-react/portis-connector/dist/portis-connector.esm.js");
/* harmony import */ var _web3_react_torus_connector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @web3-react/torus-connector */ "./node_modules/@web3-react/torus-connector/dist/torus-connector.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);













var POLLING_INTERVAL = 12000;
var RPC_URLS = {
  1: "https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",
  4: "https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213"
};
var injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__.InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
});
var network = new _web3_react_network_connector__WEBPACK_IMPORTED_MODULE_1__.NetworkConnector({
  urls: {
    1: RPC_URLS[1],
    4: RPC_URLS[4]
  },
  defaultChainId: 1
});
var walletconnect = new _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_2__.WalletConnectConnector({
  rpc: {
    1: RPC_URLS[1]
  },
  qrcode: true
});
var walletlink = new _web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_3__.WalletLinkConnector({
  url: RPC_URLS[1],
  appName: 'web3-react example',
  supportedChainIds: [1, 3, 4, 5, 42, 10, 137, 250, 69, 56, 420, 80001]
});
var ledger = new _web3_react_ledger_connector__WEBPACK_IMPORTED_MODULE_4__.LedgerConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL
});
var trezor = new _web3_react_trezor_connector__WEBPACK_IMPORTED_MODULE_5__.TrezorConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
  manifestEmail: 'dummy@abc.xyz',
  manifestAppUrl: 'http://localhost:1234'
});
var lattice = new _web3_react_lattice_connector__WEBPACK_IMPORTED_MODULE_6__.LatticeConnector({
  chainId: 4,
  appName: 'web3-react',
  url: RPC_URLS[4]
});
var frame = new _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_7__.FrameConnector({
  supportedChainIds: [1]
});
var authereum = new _web3_react_authereum_connector__WEBPACK_IMPORTED_MODULE_8__.AuthereumConnector({
  chainId: 42
});
var fortmatic = new _web3_react_fortmatic_connector__WEBPACK_IMPORTED_MODULE_9__.FortmaticConnector({
  apiKey: "pk_test_A6260FCBAA2EBDFB",
  chainId: 4
});
var magic = new _web3_react_magic_connector__WEBPACK_IMPORTED_MODULE_10__.MagicConnector({
  apiKey: "pk_test_398B82F5F0E88874",
  chainId: 4,
  email: 'hello@example.org'
});
var portis = new _web3_react_portis_connector__WEBPACK_IMPORTED_MODULE_11__.PortisConnector({
  dAppId: "e9be171c-2b7f-4ff0-8db9-327707511ee2",
  networks: [1, 100]
});
var torus = new _web3_react_torus_connector__WEBPACK_IMPORTED_MODULE_12__.TorusConnector({
  chainId: 1
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTIzMGNmNGNmZTE3MjEwMzhjMWUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1hLGdCQUFnQixHQUFHLEtBQXpCO0FBQ0EsSUFBTUMsUUFBdUMsR0FBRztBQUM5QyxLQUFHQywrREFEMkM7QUFFOUMsS0FBR0EsK0RBQXFCRztBQUZzQixDQUFoRDtBQUtPLElBQU1DLFFBQVEsR0FBRyxJQUFJbkIsNkVBQUosQ0FBc0I7QUFBRW9CLEVBQUFBLGlCQUFpQixFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLEVBQWI7QUFBckIsQ0FBdEIsQ0FBakI7QUFFQSxJQUFNQyxPQUFPLEdBQUcsSUFBSXBCLDJFQUFKLENBQXFCO0FBQzFDcUIsRUFBQUEsSUFBSSxFQUFFO0FBQUUsT0FBR1IsUUFBUSxDQUFDLENBQUQsQ0FBYjtBQUFrQixPQUFHQSxRQUFRLENBQUMsQ0FBRDtBQUE3QixHQURvQztBQUUxQ1MsRUFBQUEsY0FBYyxFQUFFO0FBRjBCLENBQXJCLENBQWhCO0FBS0EsSUFBTUMsYUFBYSxHQUFHLElBQUl0Qix1RkFBSixDQUEyQjtBQUN0RHVCLEVBQUFBLEdBQUcsRUFBRTtBQUFFLE9BQUdYLFFBQVEsQ0FBQyxDQUFEO0FBQWIsR0FEaUQ7QUFFdERZLEVBQUFBLE1BQU0sRUFBRTtBQUY4QyxDQUEzQixDQUF0QjtBQUtBLElBQU1DLFVBQVUsR0FBRyxJQUFJeEIsaUZBQUosQ0FBd0I7QUFDaER5QixFQUFBQSxHQUFHLEVBQUVkLFFBQVEsQ0FBQyxDQUFELENBRG1DO0FBRWhEZSxFQUFBQSxPQUFPLEVBQUUsb0JBRnVDO0FBR2hEVCxFQUFBQSxpQkFBaUIsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEVBQS9CLEVBQW1DLEVBQW5DLEVBQXVDLEdBQXZDLEVBQTRDLEtBQTVDO0FBSDZCLENBQXhCLENBQW5CO0FBTUEsSUFBTVUsTUFBTSxHQUFHLElBQUkxQix5RUFBSixDQUFvQjtBQUFFMkIsRUFBQUEsT0FBTyxFQUFFLENBQVg7QUFBY0gsRUFBQUEsR0FBRyxFQUFFZCxRQUFRLENBQUMsQ0FBRCxDQUEzQjtBQUFnQ2tCLEVBQUFBLGVBQWUsRUFBRW5CO0FBQWpELENBQXBCLENBQWY7QUFFQSxJQUFNb0IsTUFBTSxHQUFHLElBQUk1Qix5RUFBSixDQUFvQjtBQUN4QzBCLEVBQUFBLE9BQU8sRUFBRSxDQUQrQjtBQUV4Q0gsRUFBQUEsR0FBRyxFQUFFZCxRQUFRLENBQUMsQ0FBRCxDQUYyQjtBQUd4Q2tCLEVBQUFBLGVBQWUsRUFBRW5CLGdCQUh1QjtBQUl4Q3FCLEVBQUFBLGFBQWEsRUFBRSxlQUp5QjtBQUt4Q0MsRUFBQUEsY0FBYyxFQUFFO0FBTHdCLENBQXBCLENBQWY7QUFRQSxJQUFNQyxPQUFPLEdBQUcsSUFBSTlCLDJFQUFKLENBQXFCO0FBQzFDeUIsRUFBQUEsT0FBTyxFQUFFLENBRGlDO0FBRTFDRixFQUFBQSxPQUFPLEVBQUUsWUFGaUM7QUFHMUNELEVBQUFBLEdBQUcsRUFBRWQsUUFBUSxDQUFDLENBQUQ7QUFINkIsQ0FBckIsQ0FBaEI7QUFNQSxJQUFNdUIsS0FBSyxHQUFHLElBQUk5Qix1RUFBSixDQUFtQjtBQUFFYSxFQUFBQSxpQkFBaUIsRUFBRSxDQUFDLENBQUQ7QUFBckIsQ0FBbkIsQ0FBZDtBQUVBLElBQU1rQixTQUFTLEdBQUcsSUFBSTlCLCtFQUFKLENBQXVCO0FBQUV1QixFQUFBQSxPQUFPLEVBQUU7QUFBWCxDQUF2QixDQUFsQjtBQUVBLElBQU1RLFNBQVMsR0FBRyxJQUFJOUIsK0VBQUosQ0FBdUI7QUFBRStCLEVBQUFBLE1BQU0sRUFBRXpCLDBCQUFWO0FBQW1EZ0IsRUFBQUEsT0FBTyxFQUFFO0FBQTVELENBQXZCLENBQWxCO0FBRUEsSUFBTVcsS0FBSyxHQUFHLElBQUloQyx3RUFBSixDQUFtQjtBQUN0QzhCLEVBQUFBLE1BQU0sRUFBRXpCLDBCQUQ4QjtBQUV0Q2dCLEVBQUFBLE9BQU8sRUFBRSxDQUY2QjtBQUd0Q2EsRUFBQUEsS0FBSyxFQUFFO0FBSCtCLENBQW5CLENBQWQ7QUFNQSxJQUFNQyxNQUFNLEdBQUcsSUFBSWxDLDBFQUFKLENBQW9CO0FBQUVtQyxFQUFBQSxNQUFNLEVBQUUvQixzQ0FBVjtBQUFnRGlDLEVBQUFBLFFBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxHQUFKO0FBQTFELENBQXBCLENBQWY7QUFFQSxJQUFNQyxLQUFLLEdBQUcsSUFBSXJDLHdFQUFKLENBQW1CO0FBQUVtQixFQUFBQSxPQUFPLEVBQUU7QUFBWCxDQUFuQixDQUFkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2Nvbm5lY3RvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3InXHJcbmltcG9ydCB7IE5ldHdvcmtDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9uZXR3b3JrLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgV2FsbGV0Q29ubmVjdENvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBXYWxsZXRMaW5rQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3Qvd2FsbGV0bGluay1jb25uZWN0b3InXHJcbmltcG9ydCB7IExlZGdlckNvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2xlZGdlci1jb25uZWN0b3InXHJcbmltcG9ydCB7IFRyZXpvckNvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L3RyZXpvci1jb25uZWN0b3InXHJcbmltcG9ydCB7IExhdHRpY2VDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9sYXR0aWNlLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgRnJhbWVDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9mcmFtZS1jb25uZWN0b3InXHJcbmltcG9ydCB7IEF1dGhlcmV1bUNvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2F1dGhlcmV1bS1jb25uZWN0b3InXHJcbmltcG9ydCB7IEZvcnRtYXRpY0Nvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2ZvcnRtYXRpYy1jb25uZWN0b3InXHJcbmltcG9ydCB7IE1hZ2ljQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvbWFnaWMtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBQb3J0aXNDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9wb3J0aXMtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBUb3J1c0Nvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L3RvcnVzLWNvbm5lY3RvcidcclxuXHJcbmNvbnN0IFBPTExJTkdfSU5URVJWQUwgPSAxMjAwMFxyXG5jb25zdCBSUENfVVJMUzogeyBbY2hhaW5JZDogbnVtYmVyXTogc3RyaW5nIH0gPSB7XHJcbiAgMTogcHJvY2Vzcy5lbnYuUlBDX1VSTF8xIGFzIHN0cmluZyxcclxuICA0OiBwcm9jZXNzLmVudi5SUENfVVJMXzQgYXMgc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbmplY3RlZCA9IG5ldyBJbmplY3RlZENvbm5lY3Rvcih7IHN1cHBvcnRlZENoYWluSWRzOiBbMSwgMywgNCwgNSwgNDJdIH0pXHJcblxyXG5leHBvcnQgY29uc3QgbmV0d29yayA9IG5ldyBOZXR3b3JrQ29ubmVjdG9yKHtcclxuICB1cmxzOiB7IDE6IFJQQ19VUkxTWzFdLCA0OiBSUENfVVJMU1s0XSB9LFxyXG4gIGRlZmF1bHRDaGFpbklkOiAxXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qgd2FsbGV0Y29ubmVjdCA9IG5ldyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yKHtcclxuICBycGM6IHsgMTogUlBDX1VSTFNbMV0gfSxcclxuICBxcmNvZGU6IHRydWVcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB3YWxsZXRsaW5rID0gbmV3IFdhbGxldExpbmtDb25uZWN0b3Ioe1xyXG4gIHVybDogUlBDX1VSTFNbMV0sXHJcbiAgYXBwTmFtZTogJ3dlYjMtcmVhY3QgZXhhbXBsZScsXHJcbiAgc3VwcG9ydGVkQ2hhaW5JZHM6IFsxLCAzLCA0LCA1LCA0MiwgMTAsIDEzNywgMjUwLCA2OSwgNTYsIDQyMCwgODAwMDFdXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbGVkZ2VyID0gbmV3IExlZGdlckNvbm5lY3Rvcih7IGNoYWluSWQ6IDEsIHVybDogUlBDX1VSTFNbMV0sIHBvbGxpbmdJbnRlcnZhbDogUE9MTElOR19JTlRFUlZBTCB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IHRyZXpvciA9IG5ldyBUcmV6b3JDb25uZWN0b3Ioe1xyXG4gIGNoYWluSWQ6IDEsXHJcbiAgdXJsOiBSUENfVVJMU1sxXSxcclxuICBwb2xsaW5nSW50ZXJ2YWw6IFBPTExJTkdfSU5URVJWQUwsXHJcbiAgbWFuaWZlc3RFbWFpbDogJ2R1bW15QGFiYy54eXonLFxyXG4gIG1hbmlmZXN0QXBwVXJsOiAnaHR0cDovL2xvY2FsaG9zdDoxMjM0J1xyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGxhdHRpY2UgPSBuZXcgTGF0dGljZUNvbm5lY3Rvcih7XHJcbiAgY2hhaW5JZDogNCxcclxuICBhcHBOYW1lOiAnd2ViMy1yZWFjdCcsXHJcbiAgdXJsOiBSUENfVVJMU1s0XVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGZyYW1lID0gbmV3IEZyYW1lQ29ubmVjdG9yKHsgc3VwcG9ydGVkQ2hhaW5JZHM6IFsxXSB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhlcmV1bSA9IG5ldyBBdXRoZXJldW1Db25uZWN0b3IoeyBjaGFpbklkOiA0MiB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcnRtYXRpYyA9IG5ldyBGb3J0bWF0aWNDb25uZWN0b3IoeyBhcGlLZXk6IHByb2Nlc3MuZW52LkZPUlRNQVRJQ19BUElfS0VZIGFzIHN0cmluZywgY2hhaW5JZDogNCB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IG1hZ2ljID0gbmV3IE1hZ2ljQ29ubmVjdG9yKHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk1BR0lDX0FQSV9LRVkgYXMgc3RyaW5nLFxyXG4gIGNoYWluSWQ6IDQsXHJcbiAgZW1haWw6ICdoZWxsb0BleGFtcGxlLm9yZydcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBwb3J0aXMgPSBuZXcgUG9ydGlzQ29ubmVjdG9yKHsgZEFwcElkOiBwcm9jZXNzLmVudi5QT1JUSVNfREFQUF9JRCBhcyBzdHJpbmcsIG5ldHdvcmtzOiBbMSwgMTAwXSB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvcnVzID0gbmV3IFRvcnVzQ29ubmVjdG9yKHsgY2hhaW5JZDogMSB9KVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0ZWRDb25uZWN0b3IiLCJOZXR3b3JrQ29ubmVjdG9yIiwiV2FsbGV0Q29ubmVjdENvbm5lY3RvciIsIldhbGxldExpbmtDb25uZWN0b3IiLCJMZWRnZXJDb25uZWN0b3IiLCJUcmV6b3JDb25uZWN0b3IiLCJMYXR0aWNlQ29ubmVjdG9yIiwiRnJhbWVDb25uZWN0b3IiLCJBdXRoZXJldW1Db25uZWN0b3IiLCJGb3J0bWF0aWNDb25uZWN0b3IiLCJNYWdpY0Nvbm5lY3RvciIsIlBvcnRpc0Nvbm5lY3RvciIsIlRvcnVzQ29ubmVjdG9yIiwiUE9MTElOR19JTlRFUlZBTCIsIlJQQ19VUkxTIiwicHJvY2VzcyIsImVudiIsIlJQQ19VUkxfMSIsIlJQQ19VUkxfNCIsImluamVjdGVkIiwic3VwcG9ydGVkQ2hhaW5JZHMiLCJuZXR3b3JrIiwidXJscyIsImRlZmF1bHRDaGFpbklkIiwid2FsbGV0Y29ubmVjdCIsInJwYyIsInFyY29kZSIsIndhbGxldGxpbmsiLCJ1cmwiLCJhcHBOYW1lIiwibGVkZ2VyIiwiY2hhaW5JZCIsInBvbGxpbmdJbnRlcnZhbCIsInRyZXpvciIsIm1hbmlmZXN0RW1haWwiLCJtYW5pZmVzdEFwcFVybCIsImxhdHRpY2UiLCJmcmFtZSIsImF1dGhlcmV1bSIsImZvcnRtYXRpYyIsImFwaUtleSIsIkZPUlRNQVRJQ19BUElfS0VZIiwibWFnaWMiLCJNQUdJQ19BUElfS0VZIiwiZW1haWwiLCJwb3J0aXMiLCJkQXBwSWQiLCJQT1JUSVNfREFQUF9JRCIsIm5ldHdvcmtzIiwidG9ydXMiXSwic291cmNlUm9vdCI6IiJ9