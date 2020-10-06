(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/store */ "./assets/js/store/store.js");
/* harmony import */ var _components_App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/App.vue */ "./assets/js/components/App.vue");
/* harmony import */ var _components_Right_Blank__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Right/Blank */ "./assets/js/components/Right/Blank.vue");
/* harmony import */ var _components_Right_Right__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Right/Right */ "./assets/js/components/Right/Right.vue");








vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]);
var routes = [{
  name: 'blank',
  path: '/',
  component: _components_Right_Blank__WEBPACK_IMPORTED_MODULE_6__["default"]
}, {
  name: 'conversation',
  path: '/conversation/:id',
  component: _components_Right_Right__WEBPACK_IMPORTED_MODULE_7__["default"]
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]({
  mode: "abstract",
  routes: routes
});
_store_store__WEBPACK_IMPORTED_MODULE_4__["default"].commit("SET_USERNAME", document.querySelector('#app').dataset.username);
new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
  store: _store_store__WEBPACK_IMPORTED_MODULE_4__["default"],
  router: router,
  render: function render(h) {
    return h(_components_App_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);
  }
}).$mount('#app');
router.replace('/');

/***/ }),

/***/ "./assets/js/components/App.vue":
/*!**************************************!*\
  !*** ./assets/js/components/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0dd47e10& */ "./assets/js/components/App.vue?vue&type=template&id=0dd47e10&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./assets/js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./assets/js/components/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/App.vue?vue&type=template&id=0dd47e10&":
/*!*********************************************************************!*\
  !*** ./assets/js/components/App.vue?vue&type=template&id=0dd47e10& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0dd47e10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/App.vue?vue&type=template&id=0dd47e10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Left/Conversation.vue":
/*!****************************************************!*\
  !*** ./assets/js/components/Left/Conversation.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Conversation_vue_vue_type_template_id_1139f05a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Conversation.vue?vue&type=template&id=1139f05a& */ "./assets/js/components/Left/Conversation.vue?vue&type=template&id=1139f05a&");
/* harmony import */ var _Conversation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Conversation.vue?vue&type=script&lang=js& */ "./assets/js/components/Left/Conversation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Conversation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Conversation_vue_vue_type_template_id_1139f05a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Conversation_vue_vue_type_template_id_1139f05a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Left/Conversation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Left/Conversation.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./assets/js/components/Left/Conversation.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Conversation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Left/Conversation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Left/Conversation.vue?vue&type=template&id=1139f05a&":
/*!***********************************************************************************!*\
  !*** ./assets/js/components/Left/Conversation.vue?vue&type=template&id=1139f05a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_template_id_1139f05a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Conversation.vue?vue&type=template&id=1139f05a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Left/Conversation.vue?vue&type=template&id=1139f05a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_template_id_1139f05a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Conversation_vue_vue_type_template_id_1139f05a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Left/Left.vue":
/*!********************************************!*\
  !*** ./assets/js/components/Left/Left.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Left_vue_vue_type_template_id_51f8fe44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Left.vue?vue&type=template&id=51f8fe44& */ "./assets/js/components/Left/Left.vue?vue&type=template&id=51f8fe44&");
/* harmony import */ var _Left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Left.vue?vue&type=script&lang=js& */ "./assets/js/components/Left/Left.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Left_vue_vue_type_template_id_51f8fe44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Left_vue_vue_type_template_id_51f8fe44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Left/Left.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Left/Left.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./assets/js/components/Left/Left.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Left.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Left/Left.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Left_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Left/Left.vue?vue&type=template&id=51f8fe44&":
/*!***************************************************************************!*\
  !*** ./assets/js/components/Left/Left.vue?vue&type=template&id=51f8fe44& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Left_vue_vue_type_template_id_51f8fe44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Left.vue?vue&type=template&id=51f8fe44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Left/Left.vue?vue&type=template&id=51f8fe44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Left_vue_vue_type_template_id_51f8fe44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Left_vue_vue_type_template_id_51f8fe44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Right/Blank.vue":
/*!**********************************************!*\
  !*** ./assets/js/components/Right/Blank.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blank_vue_vue_type_template_id_7794b070___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blank.vue?vue&type=template&id=7794b070& */ "./assets/js/components/Right/Blank.vue?vue&type=template&id=7794b070&");
/* harmony import */ var _Blank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blank.vue?vue&type=script&lang=js& */ "./assets/js/components/Right/Blank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Blank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Blank_vue_vue_type_template_id_7794b070___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Blank_vue_vue_type_template_id_7794b070___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Right/Blank.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Right/Blank.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./assets/js/components/Right/Blank.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blank.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Blank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Right/Blank.vue?vue&type=template&id=7794b070&":
/*!*****************************************************************************!*\
  !*** ./assets/js/components/Right/Blank.vue?vue&type=template&id=7794b070& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blank_vue_vue_type_template_id_7794b070___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Blank.vue?vue&type=template&id=7794b070& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Blank.vue?vue&type=template&id=7794b070&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blank_vue_vue_type_template_id_7794b070___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blank_vue_vue_type_template_id_7794b070___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Right/Input.vue":
/*!**********************************************!*\
  !*** ./assets/js/components/Right/Input.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input_vue_vue_type_template_id_7b244be6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.vue?vue&type=template&id=7b244be6& */ "./assets/js/components/Right/Input.vue?vue&type=template&id=7b244be6&");
/* harmony import */ var _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.vue?vue&type=script&lang=js& */ "./assets/js/components/Right/Input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Input_vue_vue_type_template_id_7b244be6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Input_vue_vue_type_template_id_7b244be6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Right/Input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Right/Input.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./assets/js/components/Right/Input.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Input.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Right/Input.vue?vue&type=template&id=7b244be6&":
/*!*****************************************************************************!*\
  !*** ./assets/js/components/Right/Input.vue?vue&type=template&id=7b244be6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_7b244be6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Input.vue?vue&type=template&id=7b244be6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Input.vue?vue&type=template&id=7b244be6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_7b244be6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_7b244be6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Right/Message.vue":
/*!************************************************!*\
  !*** ./assets/js/components/Right/Message.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Message_vue_vue_type_template_id_6067fca3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message.vue?vue&type=template&id=6067fca3& */ "./assets/js/components/Right/Message.vue?vue&type=template&id=6067fca3&");
/* harmony import */ var _Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message.vue?vue&type=script&lang=js& */ "./assets/js/components/Right/Message.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Message_vue_vue_type_template_id_6067fca3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Message_vue_vue_type_template_id_6067fca3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Right/Message.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Right/Message.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./assets/js/components/Right/Message.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Message.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Message.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Right/Message.vue?vue&type=template&id=6067fca3&":
/*!*******************************************************************************!*\
  !*** ./assets/js/components/Right/Message.vue?vue&type=template&id=6067fca3& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_6067fca3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Message.vue?vue&type=template&id=6067fca3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Message.vue?vue&type=template&id=6067fca3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_6067fca3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_6067fca3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Right/Right.vue":
/*!**********************************************!*\
  !*** ./assets/js/components/Right/Right.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Right_vue_vue_type_template_id_90418590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Right.vue?vue&type=template&id=90418590& */ "./assets/js/components/Right/Right.vue?vue&type=template&id=90418590&");
/* harmony import */ var _Right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Right.vue?vue&type=script&lang=js& */ "./assets/js/components/Right/Right.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Right_vue_vue_type_template_id_90418590___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Right_vue_vue_type_template_id_90418590___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/Right/Right.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Right/Right.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./assets/js/components/Right/Right.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Right.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Right.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Right_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Right/Right.vue?vue&type=template&id=90418590&":
/*!*****************************************************************************!*\
  !*** ./assets/js/components/Right/Right.vue?vue&type=template&id=90418590& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Right_vue_vue_type_template_id_90418590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Right.vue?vue&type=template&id=90418590& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Right.vue?vue&type=template&id=90418590&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Right_vue_vue_type_template_id_90418590___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Right_vue_vue_type_template_id_90418590___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/store/modules/conversation.js":
/*!*************************************************!*\
  !*** ./assets/js/store/modules/conversation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    conversations: [],
    hubUrl: null
  },
  getters: {
    CONVERSATIONS: function CONVERSATIONS(state) {
      return state.conversations.sort(function (a, b) {
        return a.createdAt < b.createdAt;
      });
    },
    MESSAGES: function MESSAGES(state) {
      return function (conversationId) {
        return state.conversations.messages;
      };
    },
    HUBURL: function HUBURL(state) {
      return state.hubUrl;
    }
  },
  mutations: {
    SET_CONVERSATIONS: function SET_CONVERSATIONS(state, payload) {
      state.conversations = payload;
    },
    SET_MESSAGES: function SET_MESSAGES(state, _ref) {
      var conversationId = _ref.conversationId,
          payload = _ref.payload;
      vue__WEBPACK_IMPORTED_MODULE_5__["default"].set(state.conversations, 'messages', payload);
    },
    ADD_MESSAGE: function ADD_MESSAGE(state, _ref2) {
      var conversationId = _ref2.conversationId,
          payload = _ref2.payload;
      state.conversations.messages.push(payload);
    },
    SET_CONVERSATION_LAST_MESSAGE: function SET_CONVERSATION_LAST_MESSAGE(state, _ref3) {
      var conversationId = _ref3.conversationId,
          payload = _ref3.payload;
      var rs = state.conversations;
      rs.content = payload.content;
      rs.createdAt = payload.createdAt;
    },
    SET_HUBURL: function SET_HUBURL(state, payload) {
      return state.hubUrl = payload;
    },
    UPDATE_CONVERSATIONS: function UPDATE_CONVERSATIONS(state, payload) {
      var rs = state.conversations;
      rs.content = payload.content;
      rs.createdAt = payload.createdAt;
    }
  },
  actions: {
    GET_CONVERSATIONS: function GET_CONVERSATIONS(_ref4) {
      var commit = _ref4.commit;
      return fetch("/conversations").then(function (result) {
        var hubUrl = result.headers.get('Link').match(/<([^>]+)>;\s+rel=(?:mercure|"[^"]*mercure[^"]*")/)[1];
        commit("SET_HUBURL", hubUrl);
        return result.json();
      }).then(function (result) {
        commit("SET_CONVERSATIONS", result);
      });
    },
    GET_MESSAGES: function GET_MESSAGES(_ref5, conversationId) {
      var commit = _ref5.commit,
          getters = _ref5.getters;
      return fetch("/messages/".concat(conversationId)).then(function (result) {
        return result.json();
      }).then(function (result) {
        commit("SET_MESSAGES", {
          conversationId: conversationId,
          payload: result
        });
      });
    },
    POST_MESSAGE: function POST_MESSAGE(_ref6, _ref7) {
      var commit = _ref6.commit;
      var conversationId = _ref7.conversationId,
          content = _ref7.content;
      var formData = new FormData();
      formData.append('content', content);
      return fetch("/messages/".concat(conversationId), {
        method: "POST",
        body: formData
      }).then(function (result) {
        return result.json();
      }).then(function (result) {
        commit("ADD_MESSAGE", {
          conversationId: conversationId,
          payload: result
        });
        commit("SET_CONVERSATION_LAST_MESSAGE", {
          conversationId: conversationId,
          payload: result
        });
      });
    }
  }
});

/***/ }),

/***/ "./assets/js/store/modules/user.js":
/*!*****************************************!*\
  !*** ./assets/js/store/modules/user.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  state: {
    username: null
  },
  getters: {
    USERNAME: function USERNAME(state) {
      return state.username;
    }
  },
  mutations: {
    SET_USERNAME: function SET_USERNAME(state, payload) {
      return state.username = payload;
    }
  },
  actions: {}
});

/***/ }),

/***/ "./assets/js/store/store.js":
/*!**********************************!*\
  !*** ./assets/js/store/store.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modules_conversation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/conversation */ "./assets/js/store/modules/conversation.js");
/* harmony import */ var _modules_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/user */ "./assets/js/store/modules/user.js");


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  modules: {
    conversation: _modules_conversation__WEBPACK_IMPORTED_MODULE_2__["default"],
    user: _modules_user__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Left_Left__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Left/Left */ "./assets/js/components/Left/Left.vue");
/* harmony import */ var _Right_Right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Right/Right */ "./assets/js/components/Right/Right.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Left: _Left_Left__WEBPACK_IMPORTED_MODULE_0__["default"],
    Right: _Right_Right__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Left/Conversation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Left/Conversation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    conversation: Object
  },
  computed: {
    date: function date() {
      return new Date(this.conversation.createdAt).toLocaleTimeString();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Left/Left.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Left/Left.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Conversation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Conversation */ "./assets/js/components/Left/Conversation.vue");















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Conversation: _Conversation__WEBPACK_IMPORTED_MODULE_15__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_14__["mapGetters"])(["CONVERSATIONS", "HUBURL", "USERNAME"])),
  methods: {
    updateConversations: function updateConversations(data) {
      this.$store.commit("UPDATE_CONVERSATIONS", data);
    }
  },
  mounted: function mounted() {
    var _this = this;

    var vm = this;
    this.$store.dispatch("GET_CONVERSATIONS").then(function () {
      var url = new URL(_this.HUBURL);
      url.searchParams.append('topic', "/conversations/".concat(_this.USERNAME));
      var eventSource = new EventSource(url, {
        withCredentials: true
      });

      eventSource.onmessage = function (event) {
        vm.updateConversations(JSON.parse(event.data));
      };
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Blank.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Right/Blank.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Input.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Right/Input.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      content: ''
    };
  },
  methods: {
    sendMessage: function sendMessage() {
      var _this = this;

      this.$store.dispatch("POST_MESSAGE", {
        conversationId: this.$route.params.id,
        content: this.content
      }).then(function () {
        _this.content = '';
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Message.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Right/Message.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    message: Object
  },
  computed: {
    date: function date() {
      return new Date(this.message.createdAt).toLocaleString();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Right.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Right/Right.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Message */ "./assets/js/components/Right/Message.vue");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Input */ "./assets/js/components/Right/Input.vue");















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      eventSource: null
    };
  },
  components: {
    Message: _Message__WEBPACK_IMPORTED_MODULE_15__["default"],
    Input: _Input__WEBPACK_IMPORTED_MODULE_16__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_14__["mapGetters"])(["HUBURL"])), {}, {
    MESSAGES: function MESSAGES() {
      return this.$store.getters.MESSAGES(this.$route.params.id);
    }
  }),
  methods: {
    scrollDown: function scrollDown() {
      this.$refs.messagesBody.scrollTop = this.$refs.messagesBody.scrollHeight;
    },
    addMessage: function addMessage(data) {
      this.$store.commit("ADD_MESSAGE", {
        conversationId: this.$route.params.id,
        payload: data
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    var vm = this;
    this.$store.dispatch("GET_MESSAGES", this.$route.params.id).then(function () {
      _this.scrollDown();

      if (_this.eventSource === null) {
        var url = new URL(_this.HUBURL);
        url.searchParams.append('topic', "/conversations/".concat(_this.$route.params.id));
        _this.eventSource = new EventSource(url, {
          withCredentials: true
        });

        _this.eventSource.onmessage = function (event) {
          vm.addMessage(JSON.parse(event.data));
        };
      }
    });
  },
  watch: {
    MESSAGES: function MESSAGES(val) {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.scrollDown();
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.eventSource instanceof EventSource) {
      this.eventSource.close();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/App.vue?vue&type=template&id=0dd47e10&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/App.vue?vue&type=template&id=0dd47e10& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container py-5 px-4" }, [
    _c(
      "div",
      { staticClass: "row rounded-lg overflow-hidden shadow" },
      [
        _c("Left"),
        _vm._v(" "),
        _c("router-view", { key: _vm.$route.fullPath })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Left/Conversation.vue?vue&type=template&id=1139f05a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Left/Conversation.vue?vue&type=template&id=1139f05a& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "router-link",
    {
      staticClass: "list-group-item list-group-item-action rounded-0",
      attrs: {
        to: {
          name: "conversation",
          params: { id: _vm.conversation.conversationId }
        }
      }
    },
    [
      _c("div", { staticClass: "media" }, [
        _c("img", {
          staticClass: "rounded-circle",
          attrs: {
            src:
              "https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg",
            alt: "user",
            width: "50"
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "media-body ml-4" }, [
          _c(
            "div",
            {
              staticClass:
                "d-flex align-items-center justify-content-between mb-1"
            },
            [
              _c("h6", { staticClass: "mb-0" }, [
                _vm._v(_vm._s(_vm.conversation.username))
              ]),
              _c("small", { staticClass: "small font-weight-bold" }, [
                _vm._v(_vm._s(_vm.date))
              ])
            ]
          ),
          _vm._v(" "),
          _c("p", { staticClass: "font-italic mb-0 text-small" }, [
            _vm._v(_vm._s(_vm.conversation.content))
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Left/Left.vue?vue&type=template&id=51f8fe44&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Left/Left.vue?vue&type=template&id=51f8fe44& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-5 px-0" }, [
    _c("div", { staticClass: "bg-white" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "messages-box" }, [
        _c(
          "div",
          { staticClass: "list-group rounded-0" },
          [
            _vm._l(_vm.CONVERSATIONS.length + 1, function(index) {
              return [
                _c("Conversation", {
                  attrs: { conversation: _vm.CONVERSATIONS[0][index - 1] }
                })
              ]
            })
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bg-gray px-4 py-2 bg-light" }, [
      _c("p", { staticClass: "h5 mb-0 py-1" }, [_vm._v("Recent")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Blank.vue?vue&type=template&id=7794b070&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Right/Blank.vue?vue&type=template&id=7794b070& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    staticClass: "col-7 px-0",
    staticStyle: { width: "100%", "background-color": "white" }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Input.vue?vue&type=template&id=7b244be6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Right/Input.vue?vue&type=template&id=7b244be6& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("form", { staticClass: "bg-light", attrs: { action: "#" } }, [
    _c("div", { staticClass: "input-group" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.content,
            expression: "content"
          }
        ],
        staticClass: "form-control rounded-0 border-0 py-4 bg-light",
        attrs: {
          type: "text",
          placeholder: "Type a message",
          "aria-describedby": "button-addon2"
        },
        domProps: { value: _vm.content },
        on: {
          keyup: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return _vm.sendMessage($event)
          },
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.content = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-link",
          attrs: { id: "button-addon2", type: "submit" }
        },
        [_c("i", { staticClass: "fa fa-paper-plane" })]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Message.vue?vue&type=template&id=6067fca3&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Right/Message.vue?vue&type=template&id=6067fca3& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "media w-50 mb-3", class: { "ml-auto": _vm.message.mine } },
    [
      !_vm.message.mine
        ? _c("img", {
            staticClass: "rounded-circle",
            attrs: {
              src:
                "https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg",
              alt: "user",
              width: "50"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "media-body ml-3" }, [
        _c(
          "div",
          {
            staticClass: "rounded py-2 px-3 mb-2",
            class: [_vm.message.mine ? "bg-primary" : "bg-light"]
          },
          [
            _c(
              "p",
              {
                staticClass: "text-small mb-0",
                class: [_vm.message.mine ? "text-white" : "text-muted"]
              },
              [_vm._v(_vm._s(_vm.message.content))]
            )
          ]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "small text-muted" }, [_vm._v(_vm._s(_vm.date))])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Right/Right.vue?vue&type=template&id=90418590&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Right/Right.vue?vue&type=template&id=90418590& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "col-7 px-0" },
    [
      _c(
        "div",
        { ref: "messagesBody", staticClass: "px-4 py-5 chat-box bg-white" },
        [
          _vm._l(_vm.MESSAGES, function(message, index, key) {
            return [_c("Message", { attrs: { message: message } })]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("Input")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT9iZWRhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWU/MDk2OCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9MZWZ0L0NvbnZlcnNhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGVmdC9Db252ZXJzYXRpb24udnVlPzhjOGEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGVmdC9Db252ZXJzYXRpb24udnVlP2FjODAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGVmdC9MZWZ0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9MZWZ0L0xlZnQudnVlPzg2ZDQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGVmdC9MZWZ0LnZ1ZT82ZTE4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JpZ2h0L0JsYW5rLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9CbGFuay52dWU/N2NlZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9CbGFuay52dWU/NmZiZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9JbnB1dC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmlnaHQvSW5wdXQudnVlP2Q5ZmYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmlnaHQvSW5wdXQudnVlP2MxYjciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmlnaHQvTWVzc2FnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmlnaHQvTWVzc2FnZS52dWU/N2Q5ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9NZXNzYWdlLnZ1ZT8wNjAxIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JpZ2h0L1JpZ2h0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9SaWdodC52dWU/OWRmYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9SaWdodC52dWU/MjQxNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9jb252ZXJzYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xlZnQvQ29udmVyc2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGVmdC9MZWZ0LnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmlnaHQvQmxhbmsudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9JbnB1dC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JpZ2h0L01lc3NhZ2UudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9SaWdodC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT9hN2JlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xlZnQvQ29udmVyc2F0aW9uLnZ1ZT81NWYyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xlZnQvTGVmdC52dWU/ZDFlYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9CbGFuay52dWU/NDg5MyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9JbnB1dC52dWU/MTE4NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9NZXNzYWdlLnZ1ZT9iZWRhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JpZ2h0L1JpZ2h0LnZ1ZT85MTJjIl0sIm5hbWVzIjpbIlZ1ZSIsInVzZSIsIlZ1ZVJvdXRlciIsInJvdXRlcyIsIm5hbWUiLCJwYXRoIiwiY29tcG9uZW50IiwiQmxhbmsiLCJSaWdodCIsInJvdXRlciIsIm1vZGUiLCJzdG9yZSIsImNvbW1pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRhdGFzZXQiLCJ1c2VybmFtZSIsInJlbmRlciIsImgiLCJBcHAiLCIkbW91bnQiLCJyZXBsYWNlIiwic3RhdGUiLCJjb252ZXJzYXRpb25zIiwiaHViVXJsIiwiZ2V0dGVycyIsIkNPTlZFUlNBVElPTlMiLCJzb3J0IiwiYSIsImIiLCJjcmVhdGVkQXQiLCJNRVNTQUdFUyIsImNvbnZlcnNhdGlvbklkIiwibWVzc2FnZXMiLCJIVUJVUkwiLCJtdXRhdGlvbnMiLCJTRVRfQ09OVkVSU0FUSU9OUyIsInBheWxvYWQiLCJTRVRfTUVTU0FHRVMiLCJzZXQiLCJBRERfTUVTU0FHRSIsInB1c2giLCJTRVRfQ09OVkVSU0FUSU9OX0xBU1RfTUVTU0FHRSIsInJzIiwiY29udGVudCIsIlNFVF9IVUJVUkwiLCJVUERBVEVfQ09OVkVSU0FUSU9OUyIsImFjdGlvbnMiLCJHRVRfQ09OVkVSU0FUSU9OUyIsImZldGNoIiwidGhlbiIsInJlc3VsdCIsImhlYWRlcnMiLCJnZXQiLCJtYXRjaCIsImpzb24iLCJHRVRfTUVTU0FHRVMiLCJQT1NUX01FU1NBR0UiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibWV0aG9kIiwiYm9keSIsIlVTRVJOQU1FIiwiU0VUX1VTRVJOQU1FIiwiVnVleCIsIlN0b3JlIiwibW9kdWxlcyIsImNvbnZlcnNhdGlvbiIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUFBLDJDQUFHLENBQUNDLEdBQUosQ0FBUUMsa0RBQVI7QUFFQSxJQUFNQyxNQUFNLEdBQUcsQ0FDWDtBQUNJQyxNQUFJLEVBQUUsT0FEVjtBQUVJQyxNQUFJLEVBQUUsR0FGVjtBQUdJQyxXQUFTLEVBQUVDLCtEQUFLQTtBQUhwQixDQURXLEVBTVg7QUFDSUgsTUFBSSxFQUFFLGNBRFY7QUFFSUMsTUFBSSxFQUFFLG1CQUZWO0FBR0lDLFdBQVMsRUFBRUUsK0RBQUtBO0FBSHBCLENBTlcsQ0FBZjtBQWFBLElBQU1DLE1BQU0sR0FBRyxJQUFJUCxrREFBSixDQUFjO0FBQ3pCUSxNQUFJLEVBQUUsVUFEbUI7QUFFekJQLFFBQU0sRUFBTkE7QUFGeUIsQ0FBZCxDQUFmO0FBS0FRLG9EQUFLLENBQUNDLE1BQU4sQ0FBYSxjQUFiLEVBQTZCQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLE9BQS9CLENBQXVDQyxRQUFwRTtBQUVBLElBQUloQiwyQ0FBSixDQUFRO0FBQ0pXLE9BQUssRUFBTEEsb0RBREk7QUFFSkYsUUFBTSxFQUFOQSxNQUZJO0FBR0pRLFFBQU0sRUFBRSxnQkFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsMkRBQUQsQ0FBTDtBQUFBO0FBSEwsQ0FBUixFQUlHQyxNQUpILENBSVUsTUFKVjtBQU1BWCxNQUFNLENBQUNZLE9BQVAsQ0FBZSxHQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUFrRjtBQUMzQjtBQUNMOzs7QUFHbEQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFV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Ozs7O0FDOURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUsseUNBQXlDLDhCQUE4QixFQUFFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxpQkFBaUIsaUNBQWlDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsa0NBQWtDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw0QkFBNEI7QUFDakM7QUFDQTtBQUNBO0FBQ0EsU0FBUyxrRUFBa0U7QUFDM0U7QUFDQTtBQUNBLG1DQUFtQyxTQUFTLG1CQUFtQixFQUFFO0FBQ2pFLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmUvc3RvcmVcIjtcblxuaW1wb3J0IEFwcCBmcm9tIFwiLi9jb21wb25lbnRzL0FwcC52dWVcIjtcbmltcG9ydCBCbGFuayBmcm9tIFwiLi9jb21wb25lbnRzL1JpZ2h0L0JsYW5rXCI7XG5pbXBvcnQgUmlnaHQgZnJvbSBcIi4vY29tcG9uZW50cy9SaWdodC9SaWdodFwiO1xuXG5WdWUudXNlKFZ1ZVJvdXRlcilcblxuY29uc3Qgcm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ2JsYW5rJyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBjb21wb25lbnQ6IEJsYW5rXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdjb252ZXJzYXRpb24nLFxuICAgICAgICBwYXRoOiAnL2NvbnZlcnNhdGlvbi86aWQnLFxuICAgICAgICBjb21wb25lbnQ6IFJpZ2h0XG4gICAgfVxuXTtcblxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gICAgbW9kZTogXCJhYnN0cmFjdFwiLFxuICAgIHJvdXRlc1xufSlcblxuc3RvcmUuY29tbWl0KFwiU0VUX1VTRVJOQU1FXCIsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKS5kYXRhc2V0LnVzZXJuYW1lKTtcblxubmV3IFZ1ZSh7XG4gICAgc3RvcmUsXG4gICAgcm91dGVyLFxuICAgIHJlbmRlcjogaCA9PiBoKEFwcClcbn0pLiRtb3VudCgnI2FwcCcpXG5cbnJvdXRlci5yZXBsYWNlKCcvJylcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGQ0N2UxMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9ndzAxL0V0bmEvUExJL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBkZDQ3ZTEwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBkZDQ3ZTEwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBkZDQ3ZTEwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkZDQ3ZTEwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBkZDQ3ZTEwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9BcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGQ0N2UxMCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ29udmVyc2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMTM5ZjA1YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db252ZXJzYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db252ZXJzYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9ndzAxL0V0bmEvUExJL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzExMzlmMDVhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzExMzlmMDVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzExMzlmMDVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Db252ZXJzYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTExMzlmMDVhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzExMzlmMDVhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9MZWZ0L0NvbnZlcnNhdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbnZlcnNhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29udmVyc2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db252ZXJzYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTExMzlmMDVhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9MZWZ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MWY4ZmU0NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9MZWZ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTGVmdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2d3MDEvRXRuYS9QTEkvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTFmOGZlNDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTFmOGZlNDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTFmOGZlNDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xlZnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxZjhmZTQ0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUxZjhmZTQ0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9MZWZ0L0xlZnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MZWZ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MZWZ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MZWZ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MWY4ZmU0NCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQmxhbmsudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3OTRiMDcwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0JsYW5rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQmxhbmsudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9ndzAxL0V0bmEvUExJL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc3OTRiMDcwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc3OTRiMDcwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc3OTRiMDcwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CbGFuay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzc5NGIwNzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzc5NGIwNzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL1JpZ2h0L0JsYW5rLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmxhbmsudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0JsYW5rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CbGFuay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzc5NGIwNzAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0lucHV0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YjI0NGJlNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0lucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvZ3cwMS9FdG5hL1BMSS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3YjI0NGJlNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3YjI0NGJlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3YjI0NGJlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW5wdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiMjQ0YmU2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdiMjQ0YmU2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9JbnB1dC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5wdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiMjQ0YmU2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NZXNzYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MDY3ZmNhMyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NZXNzYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWVzc2FnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2d3MDEvRXRuYS9QTEkvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjA2N2ZjYTMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjA2N2ZjYTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjA2N2ZjYTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYwNjdmY2EzJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYwNjdmY2EzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9NZXNzYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVzc2FnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVzc2FnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVzc2FnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjA2N2ZjYTMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JpZ2h0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MDQxODU5MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SaWdodC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1JpZ2h0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvZ3cwMS9FdG5hL1BMSS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5MDQxODU5MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5MDQxODU5MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5MDQxODU5MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUmlnaHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkwNDE4NTkwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzkwNDE4NTkwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9SaWdodC9SaWdodC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JpZ2h0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SaWdodC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmlnaHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkwNDE4NTkwJlwiIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc3RhdGU6IHtcbiAgICAgICAgY29udmVyc2F0aW9uczogW10sXG4gICAgICAgIGh1YlVybDogbnVsbFxuICAgIH0sXG4gICAgZ2V0dGVyczoge1xuICAgICAgICBDT05WRVJTQVRJT05TOiBzdGF0ZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuY29udmVyc2F0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuY3JlYXRlZEF0IDwgYi5jcmVhdGVkQXQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBNRVNTQUdFUzogc3RhdGUgPT4gY29udmVyc2F0aW9uSWQgPT4ge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5jb252ZXJzYXRpb25zLm1lc3NhZ2VzXG4gICAgICAgIH0sXG4gICAgICAgIEhVQlVSTDogc3RhdGUgPT4gc3RhdGUuaHViVXJsXG4gICAgfSxcbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgU0VUX0NPTlZFUlNBVElPTlM6IChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgc3RhdGUuY29udmVyc2F0aW9ucyA9IHBheWxvYWRcbiAgICAgICAgfSxcbiAgICAgICAgU0VUX01FU1NBR0VTOiAoc3RhdGUsIHtjb252ZXJzYXRpb25JZCwgcGF5bG9hZH0pID0+IHtcbiAgICAgICAgICAgIFZ1ZS5zZXQoXG4gICAgICAgICAgICAgICAgc3RhdGUuY29udmVyc2F0aW9ucyxcbiAgICAgICAgICAgICAgICAnbWVzc2FnZXMnLFxuICAgICAgICAgICAgICAgIHBheWxvYWRcbiAgICAgICAgICAgIClcbiAgICAgICAgfSxcbiAgICAgICAgQUREX01FU1NBR0U6IChzdGF0ZSwge2NvbnZlcnNhdGlvbklkLCBwYXlsb2FkfSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUuY29udmVyc2F0aW9ucy5tZXNzYWdlcy5wdXNoKHBheWxvYWQpXG4gICAgICAgIH0sXG4gICAgICAgIFNFVF9DT05WRVJTQVRJT05fTEFTVF9NRVNTQUdFOiAoc3RhdGUsIHtjb252ZXJzYXRpb25JZCwgcGF5bG9hZH0pID0+IHtcbiAgICAgICAgICAgIGxldCBycyA9IHN0YXRlLmNvbnZlcnNhdGlvbnM7XG4gICAgICAgICAgICBycy5jb250ZW50ID0gcGF5bG9hZC5jb250ZW50O1xuICAgICAgICAgICAgcnMuY3JlYXRlZEF0ID0gcGF5bG9hZC5jcmVhdGVkQXQ7XG4gICAgICAgIH0sXG4gICAgICAgIFNFVF9IVUJVUkw6IChzdGF0ZSwgcGF5bG9hZCkgPT4gc3RhdGUuaHViVXJsID0gcGF5bG9hZCxcbiAgICAgICAgVVBEQVRFX0NPTlZFUlNBVElPTlM6IChzdGF0ZSwgcGF5bG9hZCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJzID0gc3RhdGUuY29udmVyc2F0aW9ucztcbiAgICAgICAgICAgIHJzLmNvbnRlbnQgPSBwYXlsb2FkLmNvbnRlbnQ7XG4gICAgICAgICAgICBycy5jcmVhdGVkQXQgPSBwYXlsb2FkLmNyZWF0ZWRBdDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWN0aW9uczoge1xuICAgICAgICBHRVRfQ09OVkVSU0FUSU9OUzogKHtjb21taXR9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goYC9jb252ZXJzYXRpb25zYClcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBodWJVcmwgPSByZXN1bHQuaGVhZGVycy5nZXQoJ0xpbmsnKS5tYXRjaCgvPChbXj5dKyk+O1xccytyZWw9KD86bWVyY3VyZXxcIlteXCJdKm1lcmN1cmVbXlwiXSpcIikvKVsxXVxuICAgICAgICAgICAgICAgICAgICBjb21taXQoXCJTRVRfSFVCVVJMXCIsIGh1YlVybClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5qc29uKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29tbWl0KFwiU0VUX0NPTlZFUlNBVElPTlNcIiwgcmVzdWx0KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIEdFVF9NRVNTQUdFUzogKHtjb21taXQsIGdldHRlcnN9LCBjb252ZXJzYXRpb25JZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaChgL21lc3NhZ2VzLyR7Y29udmVyc2F0aW9uSWR9YClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5qc29uKCkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pdChcIlNFVF9NRVNTQUdFU1wiLCB7Y29udmVyc2F0aW9uSWQsIHBheWxvYWQ6IHJlc3VsdH0pXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBQT1NUX01FU1NBR0U6ICh7Y29tbWl0fSwge2NvbnZlcnNhdGlvbklkLCBjb250ZW50fSkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCBjb250ZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZldGNoKGAvbWVzc2FnZXMvJHtjb252ZXJzYXRpb25JZH1gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbW1pdChcIkFERF9NRVNTQUdFXCIsIHtjb252ZXJzYXRpb25JZCwgcGF5bG9hZDogcmVzdWx0fSlcbiAgICAgICAgICAgICAgICAgICAgY29tbWl0KFwiU0VUX0NPTlZFUlNBVElPTl9MQVNUX01FU1NBR0VcIiwge2NvbnZlcnNhdGlvbklkLCBwYXlsb2FkOiByZXN1bHR9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgc3RhdGU6IHtcbiAgICAgICAgdXNlcm5hbWU6IG51bGxcbiAgICB9LFxuICAgIGdldHRlcnM6IHtcbiAgICAgICAgVVNFUk5BTUU6IHN0YXRlID0+IHN0YXRlLnVzZXJuYW1lXG4gICAgfSxcbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgU0VUX1VTRVJOQU1FOiAoc3RhdGUsIHBheWxvYWQpID0+IHN0YXRlLnVzZXJuYW1lID0gcGF5bG9hZFxuICAgIH0sXG4gICAgYWN0aW9uczoge31cbn1cbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xuXG5WdWUudXNlKFZ1ZXgpO1xuXG5pbXBvcnQgY29udmVyc2F0aW9uIGZyb20gXCIuL21vZHVsZXMvY29udmVyc2F0aW9uXCI7XG5pbXBvcnQgdXNlciBmcm9tIFwiLi9tb2R1bGVzL3VzZXJcIjtcbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgICBtb2R1bGVzOiB7XG4gICAgICAgIGNvbnZlcnNhdGlvbixcbiAgICAgICAgdXNlclxuICAgIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcHktNSBweC00XCI+XG5cblxuPGRpdiBjbGFzcz1cInJvdyByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzaGFkb3dcIj5cbiAgPCEtLSBVc2VycyBib3gtLT5cbiAgPExlZnQgLz5cbiAgPCEtLSBDaGF0IEJveC0tPlxuICA8cm91dGVyLXZpZXcgOmtleT1cIiRyb3V0ZS5mdWxsUGF0aFwiPjwvcm91dGVyLXZpZXc+XG48L2Rpdj5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgTGVmdCBmcm9tIFwiLi9MZWZ0L0xlZnRcIjtcbiAgaW1wb3J0IFJpZ2h0IGZyb20gXCIuL1JpZ2h0L1JpZ2h0XCI7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgY29tcG9uZW50czoge0xlZnQsIFJpZ2h0fVxuICB9XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHJvdXRlci1saW5rIDp0bz1cIntuYW1lOiAnY29udmVyc2F0aW9uJywgcGFyYW1zOiB7aWQ6IGNvbnZlcnNhdGlvbi5jb252ZXJzYXRpb25JZH19XCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiByb3VuZGVkLTBcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWVkaWFcIj5cbiAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vbWhtZC9pbWFnZS91cGxvYWQvdjE1NjQ5NjAzOTUvYXZhdGFyX3VzYWU3ei5zdmdcIiBhbHQ9XCJ1c2VyXCIgd2lkdGg9XCI1MFwiIGNsYXNzPVwicm91bmRlZC1jaXJjbGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5IG1sLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMVwiPlxuICAgICAgICAgIDxoNiBjbGFzcz1cIm1iLTBcIj57e2NvbnZlcnNhdGlvbi51c2VybmFtZX19PC9oNj48c21hbGwgY2xhc3M9XCJzbWFsbCBmb250LXdlaWdodC1ib2xkXCI+e3tkYXRlfX08L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3M9XCJmb250LWl0YWxpYyBtYi0wIHRleHQtc21hbGxcIj57e2NvbnZlcnNhdGlvbi5jb250ZW50fX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9yb3V0ZXItbGluaz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgICBjb252ZXJzYXRpb246IE9iamVjdFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgICAgZGF0ZSgpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5jb252ZXJzYXRpb24uY3JlYXRlZEF0KS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb2wtNSBweC0wXCI+XG4gICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJiZy1ncmF5IHB4LTQgcHktMiBiZy1saWdodFwiPlxuICAgICAgICA8cCBjbGFzcz1cImg1IG1iLTAgcHktMVwiPlJlY2VudDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZXMtYm94XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWdyb3VwIHJvdW5kZWQtMFwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImluZGV4IGluIENPTlZFUlNBVElPTlMubGVuZ3RoICsgMVwiPlxuICAgICAgICAgICAgICA8Q29udmVyc2F0aW9uIDpjb252ZXJzYXRpb249XCJDT05WRVJTQVRJT05TWzBdW2luZGV4IC0gMV1cIiAvPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHttYXBHZXR0ZXJzfSBmcm9tICd2dWV4JztcbiAgaW1wb3J0IENvbnZlcnNhdGlvbiBmcm9tIFwiLi9Db252ZXJzYXRpb25cIlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtDb252ZXJzYXRpb259LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgIC4uLm1hcEdldHRlcnMoW1wiQ09OVkVSU0FUSU9OU1wiLCBcIkhVQlVSTFwiLCBcIlVTRVJOQU1FXCJdKVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB1cGRhdGVDb252ZXJzYXRpb25zKGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoXCJVUERBVEVfQ09OVkVSU0FUSU9OU1wiLCBkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgY29uc3Qgdm0gPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJHRVRfQ09OVkVSU0FUSU9OU1wiKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVybCA9IG5ldyBVUkwodGhpcy5IVUJVUkwpO1xuICAgICAgICAgICAgICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgndG9waWMnLCBgL2NvbnZlcnNhdGlvbnMvJHt0aGlzLlVTRVJOQU1FfWApXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50U291cmNlID0gbmV3IEV2ZW50U291cmNlKHVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50U291cmNlLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0udXBkYXRlQ29udmVyc2F0aW9ucyhKU09OLnBhcnNlKGV2ZW50LmRhdGEpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtNyBweC0wXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcIj5cblxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgfVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gICAgPCEtLSBUeXBpbmcgYXJlYSAtLT5cbiAgICA8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3M9XCJiZy1saWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVHlwZSBhIG1lc3NhZ2VcIiB2LW1vZGVsPVwiY29udGVudFwiIEBrZXl1cC5lbnRlcj1cInNlbmRNZXNzYWdlXCIgYXJpYS1kZXNjcmliZWRieT1cImJ1dHRvbi1hZGRvbjJcIiBjbGFzcz1cImZvcm0tY29udHJvbCByb3VuZGVkLTAgYm9yZGVyLTAgcHktNCBiZy1saWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJidXR0b24tYWRkb24yXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCI+IDxpIGNsYXNzPVwiZmEgZmEtcGFwZXItcGxhbmVcIj48L2k+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGE6ICgpID0+ICh7XG4gICAgICAgICAgICBjb250ZW50OiAnJ1xuICAgICAgICB9KSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJQT1NUX01FU1NBR0VcIiwge1xuICAgICAgICAgICAgICAgICAgICBjb252ZXJzYXRpb25JZDogdGhpcy4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnRcbiAgICAgICAgICAgICAgICB9KS5cbiAgICAgICAgICAgICAgICAgICAgdGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSAnJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8IS0tIFNlbmRlciBNZXNzYWdlLS0+XG4gICAgPGRpdiBjbGFzcz1cIm1lZGlhIHctNTAgbWItM1wiIDpjbGFzcz1cInsnbWwtYXV0byc6IG1lc3NhZ2UubWluZX1cIj5cbiAgICAgICAgPGltZyB2LWlmPVwiIW1lc3NhZ2UubWluZVwiIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL21obWQvaW1hZ2UvdXBsb2FkL3YxNTY0OTYwMzk1L2F2YXRhcl91c2FlN3ouc3ZnXCIgYWx0PVwidXNlclwiIHdpZHRoPVwiNTBcIiBjbGFzcz1cInJvdW5kZWQtY2lyY2xlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1ib2R5IG1sLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3VuZGVkIHB5LTIgcHgtMyBtYi0yXCIgOmNsYXNzPVwiW21lc3NhZ2UubWluZSA/ICdiZy1wcmltYXJ5JyA6ICdiZy1saWdodCddXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtYWxsIG1iLTBcIiA6Y2xhc3M9XCJbbWVzc2FnZS5taW5lID8gJ3RleHQtd2hpdGUnIDogJ3RleHQtbXV0ZWQnXVwiPnt7IG1lc3NhZ2UuY29udGVudCB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzbWFsbCB0ZXh0LW11dGVkXCI+e3sgZGF0ZSB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IE9iamVjdFxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgZGF0ZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5tZXNzYWdlLmNyZWF0ZWRBdCkudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtNyBweC0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJweC00IHB5LTUgY2hhdC1ib3ggYmctd2hpdGVcIiByZWY9XCJtZXNzYWdlc0JvZHlcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihtZXNzYWdlLCBpbmRleCwga2V5KSBpbiBNRVNTQUdFU1wiPlxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIDptZXNzYWdlPVwibWVzc2FnZVwiLz5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxJbnB1dC8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7bWFwR2V0dGVyc30gZnJvbSAndnVleCc7XG4gICAgaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4vTWVzc2FnZVwiO1xuICAgIGltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGE6ICgpID0+ICh7XG4gICAgICAgIGV2ZW50U291cmNlOiBudWxsXG4gICAgfSksXG4gICAgY29tcG9uZW50czoge01lc3NhZ2UsIElucHV0fSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICAuLi5tYXBHZXR0ZXJzKFtcIkhVQlVSTFwiXSksXG4gICAgICAgIE1FU1NBR0VTKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuTUVTU0FHRVModGhpcy4kcm91dGUucGFyYW1zLmlkKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzY3JvbGxEb3duKCkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5tZXNzYWdlc0JvZHkuc2Nyb2xsVG9wID0gdGhpcy4kcmVmcy5tZXNzYWdlc0JvZHkuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICB9LFxuICAgICAgICBhZGRNZXNzYWdlKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcIkFERF9NRVNTQUdFXCIsIHtcbiAgICAgICAgICAgICAgICBjb252ZXJzYXRpb25JZDogdGhpcy4kcm91dGUucGFyYW1zLmlkLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGNvbnN0IHZtID0gdGhpcztcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJHRVRfTUVTU0FHRVNcIiwgdGhpcy4kcm91dGUucGFyYW1zLmlkKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsRG93bigpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmV2ZW50U291cmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmwgPSBuZXcgVVJMKHRoaXMuSFVCVVJMKTtcbiAgICAgICAgICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ3RvcGljJywgYC9jb252ZXJzYXRpb25zLyR7dGhpcy4kcm91dGUucGFyYW1zLmlkfWApXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRTb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UodXJsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudFNvdXJjZS5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmFkZE1lc3NhZ2UoSlNPTi5wYXJzZShldmVudC5kYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBNRVNTQUdFUzogZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsRG93bigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRTb3VyY2UgaW5zdGFuY2VvZiBFdmVudFNvdXJjZSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudFNvdXJjZS5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIHB5LTUgcHgtNFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzaGFkb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIkxlZnRcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicm91dGVyLXZpZXdcIiwgeyBrZXk6IF92bS4kcm91dGUuZnVsbFBhdGggfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJyb3V0ZXItbGlua1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHJvdW5kZWQtMFwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgdG86IHtcbiAgICAgICAgICBuYW1lOiBcImNvbnZlcnNhdGlvblwiLFxuICAgICAgICAgIHBhcmFtczogeyBpZDogX3ZtLmNvbnZlcnNhdGlvbi5jb252ZXJzYXRpb25JZCB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWVkaWFcIiB9LCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLWNpcmNsZVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vbWhtZC9pbWFnZS91cGxvYWQvdjE1NjQ5NjAzOTUvYXZhdGFyX3VzYWU3ei5zdmdcIixcbiAgICAgICAgICAgIGFsdDogXCJ1c2VyXCIsXG4gICAgICAgICAgICB3aWR0aDogXCI1MFwiXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZWRpYS1ib2R5IG1sLTRcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImg2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5jb252ZXJzYXRpb24udXNlcm5hbWUpKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJzbWFsbFwiLCB7IHN0YXRpY0NsYXNzOiBcInNtYWxsIGZvbnQtd2VpZ2h0LWJvbGRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGF0ZSkpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnQtaXRhbGljIG1iLTAgdGV4dC1zbWFsbFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNvbnZlcnNhdGlvbi5jb250ZW50KSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTUgcHgtMFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJnLXdoaXRlXCIgfSwgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWVzc2FnZXMtYm94XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cCByb3VuZGVkLTBcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fbChfdm0uQ09OVkVSU0FUSU9OUy5sZW5ndGggKyAxLCBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIF9jKFwiQ29udmVyc2F0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbnZlcnNhdGlvbjogX3ZtLkNPTlZFUlNBVElPTlNbMF1baW5kZXggLSAxXSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJiZy1ncmF5IHB4LTQgcHktMiBiZy1saWdodFwiIH0sIFtcbiAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImg1IG1iLTAgcHktMVwiIH0sIFtfdm0uX3YoXCJSZWNlbnRcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sLTcgcHgtMFwiLFxuICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwid2hpdGVcIiB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImZvcm1cIiwgeyBzdGF0aWNDbGFzczogXCJiZy1saWdodFwiLCBhdHRyczogeyBhY3Rpb246IFwiI1wiIH0gfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIiB9LCBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5jb250ZW50LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb250ZW50XCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCByb3VuZGVkLTAgYm9yZGVyLTAgcHktNCBiZy1saWdodFwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlR5cGUgYSBtZXNzYWdlXCIsXG4gICAgICAgICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IFwiYnV0dG9uLWFkZG9uMlwiXG4gICAgICAgIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY29udGVudCB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfdm0uc2VuZE1lc3NhZ2UoJGV2ZW50KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3ZtLmNvbnRlbnQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hcHBlbmRcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tbGlua1wiLFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImJ1dHRvbi1hZGRvbjJcIiwgdHlwZTogXCJzdWJtaXRcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1wYXBlci1wbGFuZVwiIH0pXVxuICAgICAgKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibWVkaWEgdy01MCBtYi0zXCIsIGNsYXNzOiB7IFwibWwtYXV0b1wiOiBfdm0ubWVzc2FnZS5taW5lIH0gfSxcbiAgICBbXG4gICAgICAhX3ZtLm1lc3NhZ2UubWluZVxuICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtY2lyY2xlXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9taG1kL2ltYWdlL3VwbG9hZC92MTU2NDk2MDM5NS9hdmF0YXJfdXNhZTd6LnN2Z1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwidXNlclwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCI1MFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1lZGlhLWJvZHkgbWwtM1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkIHB5LTIgcHgtMyBtYi0yXCIsXG4gICAgICAgICAgICBjbGFzczogW192bS5tZXNzYWdlLm1pbmUgPyBcImJnLXByaW1hcnlcIiA6IFwiYmctbGlnaHRcIl1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtc21hbGwgbWItMFwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBbX3ZtLm1lc3NhZ2UubWluZSA/IFwidGV4dC13aGl0ZVwiIDogXCJ0ZXh0LW11dGVkXCJdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5tZXNzYWdlLmNvbnRlbnQpKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInNtYWxsIHRleHQtbXV0ZWRcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0ZSkpXSlcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLTcgcHgtMFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgcmVmOiBcIm1lc3NhZ2VzQm9keVwiLCBzdGF0aWNDbGFzczogXCJweC00IHB5LTUgY2hhdC1ib3ggYmctd2hpdGVcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS5NRVNTQUdFUywgZnVuY3Rpb24obWVzc2FnZSwgaW5kZXgsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIFtfYyhcIk1lc3NhZ2VcIiwgeyBhdHRyczogeyBtZXNzYWdlOiBtZXNzYWdlIH0gfSldXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIklucHV0XCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9