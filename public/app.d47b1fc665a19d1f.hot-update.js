/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_roots_bud_sage"]("app",{

/***/ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* global __webpack_require__ */\nvar Refresh = __webpack_require__(\"../node_modules/react-refresh/runtime.js\");\n\n/**\n * Extracts exports from a webpack module object.\n * @param {string} moduleId A Webpack module ID.\n * @returns {*} An exports object from the module.\n */\nfunction getModuleExports(moduleId) {\n  if (typeof moduleId === 'undefined') {\n    // `moduleId` is unavailable, which indicates that this module is not in the cache,\n    // which means we won't be able to capture any exports,\n    // and thus they cannot be refreshed safely.\n    // These are likely runtime or dynamically generated modules.\n    return {};\n  }\n\n  var maybeModule = __webpack_require__.c[moduleId];\n  if (typeof maybeModule === 'undefined') {\n    // `moduleId` is available but the module in cache is unavailable,\n    // which indicates the module is somehow corrupted (e.g. broken Webpacak `module` globals).\n    // We will warn the user (as this is likely a mistake) and assume they cannot be refreshed.\n    console.warn('[React Refresh] Failed to get exports for module: ' + moduleId + '.');\n    return {};\n  }\n\n  var exportsOrPromise = maybeModule.exports;\n  if (typeof Promise !== 'undefined' && exportsOrPromise instanceof Promise) {\n    return exportsOrPromise.then(function (exports) {\n      return exports;\n    });\n  }\n  return exportsOrPromise;\n}\n\n/**\n * Calculates the signature of a React refresh boundary.\n * If this signature changes, it's unsafe to accept the boundary.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L795-L816).\n * @param {*} moduleExports A Webpack module exports object.\n * @returns {string[]} A React refresh boundary signature array.\n */\nfunction getReactRefreshBoundarySignature(moduleExports) {\n  var signature = [];\n  signature.push(Refresh.getFamilyByType(moduleExports));\n\n  if (moduleExports == null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over exports.\n    return signature;\n  }\n\n  for (var key in moduleExports) {\n    if (key === '__esModule') {\n      continue;\n    }\n\n    signature.push(key);\n    signature.push(Refresh.getFamilyByType(moduleExports[key]));\n  }\n\n  return signature;\n}\n\n/**\n * Creates a data object to be retained across refreshes.\n * This object should not transtively reference previous exports,\n * which can form infinite chain of objects across refreshes, which can pressure RAM.\n *\n * @param {*} moduleExports A Webpack module exports object.\n * @returns {*} A React refresh boundary signature array.\n */\nfunction getWebpackHotData(moduleExports) {\n  return {\n    signature: getReactRefreshBoundarySignature(moduleExports),\n    isReactRefreshBoundary: isReactRefreshBoundary(moduleExports),\n  };\n}\n\n/**\n * Creates a helper that performs a delayed React refresh.\n * @returns {function(function(): void): void} A debounced React refresh function.\n */\nfunction createDebounceUpdate() {\n  /**\n   * A cached setTimeout handler.\n   * @type {number | undefined}\n   */\n  var refreshTimeout;\n\n  /**\n   * Performs react refresh on a delay and clears the error overlay.\n   * @param {function(): void} callback\n   * @returns {void}\n   */\n  function enqueueUpdate(callback) {\n    if (typeof refreshTimeout === 'undefined') {\n      refreshTimeout = setTimeout(function () {\n        refreshTimeout = undefined;\n        Refresh.performReactRefresh();\n        callback();\n      }, 30);\n    }\n  }\n\n  return enqueueUpdate;\n}\n\n/**\n * Checks if all exports are likely a React component.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L748-L774).\n * @param {*} moduleExports A Webpack module exports object.\n * @returns {boolean} Whether the exports are React component like.\n */\nfunction isReactRefreshBoundary(moduleExports) {\n  if (Refresh.isLikelyComponentType(moduleExports)) {\n    return true;\n  }\n  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over exports.\n    return false;\n  }\n\n  var hasExports = false;\n  var areAllExportsComponents = true;\n  for (var key in moduleExports) {\n    hasExports = true;\n\n    // This is the ES Module indicator flag\n    if (key === '__esModule') {\n      continue;\n    }\n\n    // We can (and have to) safely execute getters here,\n    // as Webpack manually assigns harmony exports to getters,\n    // without any side-effects attached.\n    // Ref: https://github.com/webpack/webpack/blob/b93048643fe74de2a6931755911da1212df55897/lib/MainTemplate.js#L281\n    var exportValue = moduleExports[key];\n    if (!Refresh.isLikelyComponentType(exportValue)) {\n      areAllExportsComponents = false;\n    }\n  }\n\n  return hasExports && areAllExportsComponents;\n}\n\n/**\n * Checks if exports are likely a React component and registers them.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L818-L835).\n * @param {*} moduleExports A Webpack module exports object.\n * @param {string} moduleId A Webpack module ID.\n * @returns {void}\n */\nfunction registerExportsForReactRefresh(moduleExports, moduleId) {\n  if (Refresh.isLikelyComponentType(moduleExports)) {\n    // Register module.exports if it is likely a component\n    Refresh.register(moduleExports, moduleId + ' %exports%');\n  }\n\n  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {\n    // Exit if we can't iterate over the exports.\n    return;\n  }\n\n  for (var key in moduleExports) {\n    // Skip registering the ES Module indicator\n    if (key === '__esModule') {\n      continue;\n    }\n\n    var exportValue = moduleExports[key];\n    if (Refresh.isLikelyComponentType(exportValue)) {\n      var typeID = moduleId + ' %exports% ' + key;\n      Refresh.register(exportValue, typeID);\n    }\n  }\n}\n\n/**\n * Compares previous and next module objects to check for mutated boundaries.\n *\n * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L776-L792).\n * @param {*} prevSignature The signature of the current Webpack module exports object.\n * @param {*} nextSignature The signature of the next Webpack module exports object.\n * @returns {boolean} Whether the React refresh boundary should be invalidated.\n */\nfunction shouldInvalidateReactRefreshBoundary(prevSignature, nextSignature) {\n  if (prevSignature.length !== nextSignature.length) {\n    return true;\n  }\n\n  for (var i = 0; i < nextSignature.length; i += 1) {\n    if (prevSignature[i] !== nextSignature[i]) {\n      return true;\n    }\n  }\n\n  return false;\n}\n\nvar enqueueUpdate = createDebounceUpdate();\nfunction executeRuntime(moduleExports, moduleId, webpackHot, refreshOverlay, isTest) {\n  registerExportsForReactRefresh(moduleExports, moduleId);\n\n  if (webpackHot) {\n    var isHotUpdate = !!webpackHot.data;\n    var prevData;\n    if (isHotUpdate) {\n      prevData = webpackHot.data.prevData;\n    }\n\n    if (isReactRefreshBoundary(moduleExports)) {\n      webpackHot.dispose(\n        /**\n         * A callback to performs a full refresh if React has unrecoverable errors,\n         * and also caches the to-be-disposed module.\n         * @param {*} data A hot module data object from Webpack HMR.\n         * @returns {void}\n         */\n        function hotDisposeCallback(data) {\n          // We have to mutate the data object to get data registered and cached\n          data.prevData = getWebpackHotData(moduleExports);\n        }\n      );\n      webpackHot.accept(\n        /**\n         * An error handler to allow self-recovering behaviours.\n         * @param {Error} error An error occurred during evaluation of a module.\n         * @returns {void}\n         */\n        function hotErrorHandler(error) {\n          if (typeof refreshOverlay !== 'undefined' && refreshOverlay) {\n            refreshOverlay.handleRuntimeError(error);\n          }\n\n          if (typeof isTest !== 'undefined' && isTest) {\n            if (window.onHotAcceptError) {\n              window.onHotAcceptError(error.message);\n            }\n          }\n\n          __webpack_require__.c[moduleId].hot.accept(hotErrorHandler);\n        }\n      );\n\n      if (isHotUpdate) {\n        if (\n          prevData &&\n          prevData.isReactRefreshBoundary &&\n          shouldInvalidateReactRefreshBoundary(\n            prevData.signature,\n            getReactRefreshBoundarySignature(moduleExports)\n          )\n        ) {\n          webpackHot.invalidate();\n        } else {\n          enqueueUpdate(\n            /**\n             * A function to dismiss the error overlay after performing React refresh.\n             * @returns {void}\n             */\n            function updateCallback() {\n              if (typeof refreshOverlay !== 'undefined' && refreshOverlay) {\n                refreshOverlay.clearRuntimeErrors();\n              }\n            }\n          );\n        }\n      }\n    } else {\n      if (isHotUpdate && typeof prevData !== 'undefined') {\n        webpackHot.invalidate();\n      }\n    }\n  }\n}\n\nmodule.exports = Object.freeze({\n  enqueueUpdate: enqueueUpdate,\n  executeRuntime: executeRuntime,\n  getModuleExports: getModuleExports,\n  isReactRefreshBoundary: isReactRefreshBoundary,\n  registerExportsForReactRefresh: registerExportsForReactRefresh,\n});\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js?");

/***/ }),

/***/ "../node_modules/@roots/bud-client/lib/dom-ready.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst domReady = onReady => {\n    window.requestAnimationFrame(async function check() {\n        document.body ? await onReady() : window.requestAnimationFrame(check);\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (domReady);\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/bud-client/lib/dom-ready.js?");

/***/ }),

/***/ "../node_modules/@roots/sage/lib/client/dom-ready.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _roots_bud_client_dom_ready__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _roots_bud_client_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/@roots/bud-client/lib/dom-ready.js\");\n\n\n\n//# sourceURL=webpack://@roots/bud/sage/../node_modules/@roots/sage/lib/client/dom-ready.js?");

/***/ }),

/***/ "./scripts/app.js":
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _Users_dominikkowalski_Sites_sage_wp_content_themes_sage_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_dominikkowalski_Sites_sage_wp_content_themes_sage_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/react-refresh/runtime.js\");\n/* harmony import */ var _roots_sage_client_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"../node_modules/@roots/sage/lib/client/dom-ready.js\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(\"../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n\n__webpack_require__.$Refresh$.runtime = /*#__PURE__*/ (_Users_dominikkowalski_Sites_sage_wp_content_themes_sage_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_Users_dominikkowalski_Sites_sage_wp_content_themes_sage_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_Users_dominikkowalski_Sites_sage_wp_content_themes_sage_node_modules_react_refresh_runtime_js__WEBPACK_IMPORTED_MODULE_0__, 2)));\n\n\n/**\n * Application entrypoint\n */ (0,_roots_sage_client_dom_ready__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(async ()=>{\n// ...\n});\n/**\n * @see {@link https://webpack.js.org/api/hot-module-replacement/}\n */ if (true) __webpack_module__.hot.accept(console.error);\nconst postSplide = document.querySelectorAll('.post__splide');\nif (postSplide) {\n    postSplide.forEach((slider)=>{\n        new Splide(slider, {\n            arrows: true,\n            perPage: 3,\n            perMove: 1,\n            gap: 25,\n            pagination: true,\n            type: 'loop',\n            autoplay: true,\n            breakpoints: {\n                767: {\n                    perPage: 1\n                }\n            }\n        }).mount();\n    });\n}\n\n\nvar $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nvar $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tvar errorOverlay;\n\t\tif (true) {\n\t\t\terrorOverlay = false;\n\t\t}\n\t\tvar testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\t__webpack_module__.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://@roots/bud/sage/./scripts/app.js?");

/***/ })

});