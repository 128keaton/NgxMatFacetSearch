(self["webpackChunkngx_material_facet_search"] = self["webpackChunkngx_material_facet_search"] || []).push([["main"],{

/***/ 1175:
/*!*********************************************************************************!*\
  !*** ./dist/ngx-mat-facet-search/__ivy_ngcc__/fesm2015/ngx-mat-facet-search.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FACET_CONFIG": function() { return /* binding */ FACET_CONFIG; },
/* harmony export */   "FacetConfig": function() { return /* binding */ FacetConfig; },
/* harmony export */   "FacetDataType": function() { return /* binding */ FacetDataType; },
/* harmony export */   "FacetFilterType": function() { return /* binding */ FacetFilterType; },
/* harmony export */   "NgxMatFacetSearchComponent": function() { return /* binding */ NgxMatFacetSearchComponent; },
/* harmony export */   "NgxMatFacetSearchModule": function() { return /* binding */ NgxMatFacetSearchModule; },
/* harmony export */   "ɵa": function() { return /* binding */ FacetConfig; },
/* harmony export */   "ɵb": function() { return /* binding */ CSVPipe; },
/* harmony export */   "ɵc": function() { return /* binding */ FilterPipe; },
/* harmony export */   "ɵd": function() { return /* binding */ KeysPipe; },
/* harmony export */   "ɵe": function() { return /* binding */ FacetDetailsModalComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 9618);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/autocomplete */ 6811);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3305);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4089);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7299);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 7689);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9923);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 4958);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 6243);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/animations */ 8638);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout */ 6754);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/flex-layout */ 6267);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-cookie-service */ 7571);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 1749);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 7733);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-bar */ 8241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ 7156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 823);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 4113);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 7040);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 3045);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7617);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 4699);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 9596);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/chips */ 5432);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ 6759);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 5434);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/a11y */ 2882);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 1608);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ 2281);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/flex-layout/extended */ 766);



















































const _c0 = ["typeAheadInput"];
function FacetDetailsModalComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.data.description);
} }
function FacetDetailsModalComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 16);
} }
function FacetDetailsModalComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
} }
function FacetDetailsModalComponent_div_14_ng_container_1_mat_selection_list_1_mat_list_option_1_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", item_r15.count, ")");
} }
function FacetDetailsModalComponent_div_14_ng_container_1_mat_selection_list_1_mat_list_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FacetDetailsModalComponent_div_14_ng_container_1_mat_selection_list_1_mat_list_option_1_Template_mat_list_option_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const item_r15 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r18.addOptionToSelected(ctx_r18.data, item_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FacetDetailsModalComponent_div_14_ng_container_1_mat_selection_list_1_mat_list_option_1_small_3_Template, 3, 1, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r15.value)("selected", ctx_r14.isItemSelected(item_r15))("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r15.text ? ctx_r14.truncateText(item_r15.text) : "- empty -", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r15.count);
} }
function FacetDetailsModalComponent_div_14_ng_container_1_mat_selection_list_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-selection-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FacetDetailsModalComponent_div_14_ng_container_1_mat_selection_list_1_mat_list_option_1_Template, 4, 5, "mat-list-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r13.data.options));
} }
function FacetDetailsModalComponent_div_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FacetDetailsModalComponent_div_14_ng_container_1_mat_selection_list_1_Template, 3, 3, "mat-selection-list", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r12.data.options).length > 0)("ngIfElse", _r3);
} }
function FacetDetailsModalComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FacetDetailsModalComponent_div_14_ng_container_1_Template, 3, 4, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r5.data.options))("ngIfElse", _r1);
} }
function FacetDetailsModalComponent_div_15_ng_container_7_mat_selection_list_1_mat_list_option_1_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", item_r24.count, ")");
} }
function FacetDetailsModalComponent_div_15_ng_container_7_mat_selection_list_1_mat_list_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FacetDetailsModalComponent_div_15_ng_container_7_mat_selection_list_1_mat_list_option_1_Template_mat_list_option_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const item_r24 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r27.addOptionToSelected(ctx_r27.data, item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FacetDetailsModalComponent_div_15_ng_container_7_mat_selection_list_1_mat_list_option_1_small_3_Template, 3, 1, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r24.value)("@fadeIn", undefined)("selected", ctx_r23.isItemSelected(item_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r24.text ? ctx_r23.truncateText(item_r24.text) : "- empty -", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r24.count);
} }
function FacetDetailsModalComponent_div_15_ng_container_7_mat_selection_list_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-selection-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FacetDetailsModalComponent_div_15_ng_container_7_mat_selection_list_1_mat_list_option_1_Template, 4, 5, "mat-list-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r22.data.options));
} }
function FacetDetailsModalComponent_div_15_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FacetDetailsModalComponent_div_15_ng_container_7_mat_selection_list_1_Template, 3, 3, "mat-selection-list", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r21.data.options).length > 0)("ngIfElse", _r3);
} }
function FacetDetailsModalComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_div_15_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.typeaheadText = $event; })("ngModelChange", function FacetDetailsModalComponent_div_15_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.typeaheadValueChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FacetDetailsModalComponent_div_15_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r32.clearInput(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, FacetDetailsModalComponent_div_15_ng_container_7_Template, 3, 4, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r6.data.typeahead.placeholder || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r6.typeaheadText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r6.clearButtonDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx_r6.data.options && !!_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 5, ctx_r6.data.options))("ngIfElse", _r1);
} }
function FacetDetailsModalComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_div_16_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.data.values[0].value = $event; })("focus", function FacetDetailsModalComponent_div_16_Template_input_focus_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.isUpdate ? ctx_r36.emptyFunction() : _r33.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-datepicker-toggle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-datepicker", null, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r33)("ngModel", ctx_r7.data.values[0].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r33);
} }
function FacetDetailsModalComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_div_17_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r39.data.values[0].value = $event; })("focus", function FacetDetailsModalComponent_div_17_Template_input_focus_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.isUpdate ? ctx_r41.emptyFunction() : _r37.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-datepicker-toggle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-datepicker", null, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_div_17_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.data.values[1].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-datepicker-toggle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-datepicker", null, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r37)("ngModel", ctx_r8.data.values[0].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r38)("ngModel", ctx_r8.data.values[1].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r38);
} }
function FacetDetailsModalComponent_div_18_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FacetDetailsModalComponent_div_18_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r44.data.values = undefined; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FacetDetailsModalComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function FacetDetailsModalComponent_div_18_Template_mat_select_valueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r46.data.fixedFilterType || (ctx_r46.data.values[0].type = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Contains");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Ends With");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Equals");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Starts With");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function FacetDetailsModalComponent_div_18_Template_input_keydown_enter_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r48.validateAndSubmit(); })("ngModelChange", function FacetDetailsModalComponent_div_18_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r49.data.values[0].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FacetDetailsModalComponent_div_18_button_13_Template, 3, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r9.data.fixedFilterType || ctx_r9.data.values[0].type)("disabled", !!ctx_r9.data.fixedFilterType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r9.FacetFilterType.contains);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r9.FacetFilterType.endsWith);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r9.FacetFilterType.equal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r9.FacetFilterType.startsWith);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r9.data.placeholder || ctx_r9.data.labelText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r9.data.values[0].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.data.values);
} }
function FacetDetailsModalComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_div_19_Template_mat_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r50.data.values[0].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.data.values[0].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.data.placeholder || ctx_r10.data.labelText);
} }
function FacetDetailsModalComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FacetDetailsModalComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r52.removeFacet(ctx_r52.data); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = ["filterInput"];
function NgxMatFacetSearchComponent_div_1_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function NgxMatFacetSearchComponent_div_1_mat_icon_1_Template_mat_icon_mousedown_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.clickStarted(); })("mouseup", function NgxMatFacetSearchComponent_div_1_mat_icon_1_Template_mat_icon_mouseup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.clickEnded(); })("mouseleave", function NgxMatFacetSearchComponent_div_1_mat_icon_1_Template_mat_icon_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.clickEnded(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", ctx_r7.tooltip);
} }
function NgxMatFacetSearchComponent_div_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function NgxMatFacetSearchComponent_div_1_mat_icon_2_Template_mat_icon_mousedown_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.clickStarted(); })("mouseup", function NgxMatFacetSearchComponent_div_1_mat_icon_2_Template_mat_icon_mouseup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r15.clickEnded(); })("mouseleave", function NgxMatFacetSearchComponent_div_1_mat_icon_2_Template_mat_icon_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.clickEnded(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NgxMatFacetSearchComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxMatFacetSearchComponent_div_1_mat_icon_1_Template, 2, 1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxMatFacetSearchComponent_div_1_mat_icon_2_Template, 2, 0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tooltip != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tooltip == null);
} }
function NgxMatFacetSearchComponent_mat_chip_5_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](facet_r17.icon);
} }
function NgxMatFacetSearchComponent_mat_chip_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](facet_r17.labelText + ": \u00A0");
} }
function NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "csv");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const options_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 5, options_r28, "selected", true), "text", " / "), " ");
} }
function NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "csv");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const options_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 5, options_r28, "selected", true), "text", " / "), " ");
} }
function NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "csv");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const options_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 5, options_r28, "selected", true), "text", " / "), " ");
} }
function NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "csv");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const options_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 5, options_r28, "selected", true), "text", " / "), " ");
} }
function NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_div_1_Template, 4, 9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_div_2_Template, 4, 9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_div_3_Template, 4, 9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_div_4_Template, 4, 9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r20.FacetDataType.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r20.FacetDataType.CategorySingle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r20.FacetDataType.Typeahead);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r20.FacetDataType.TypeaheadSingle);
} }
function NgxMatFacetSearchComponent_mat_chip_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u201C", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, facet_r17.values[0].value, ctx_r21.dateFormat), "\u201D ");
} }
function NgxMatFacetSearchComponent_mat_chip_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" \u201C", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, facet_r17.values[0].value, ctx_r22.dateFormat), "\u201D ~ \u201C", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 5, facet_r17.values[1].value, ctx_r22.dateFormat), "\u201D ");
} }
function NgxMatFacetSearchComponent_mat_chip_5_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-checkbox", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NgxMatFacetSearchComponent_mat_chip_5_div_7_Template_mat_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return facet_r17.values[0].value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true)("ngModel", facet_r17.values[0].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", facet_r17.labelText, " ");
} }
function NgxMatFacetSearchComponent_mat_chip_5_span_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u201C..", facet_r17.values[0].value, "..\u201D ");
} }
function NgxMatFacetSearchComponent_mat_chip_5_span_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u201C", facet_r17.values[0].value, "\u201D ");
} }
function NgxMatFacetSearchComponent_mat_chip_5_span_8_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u201C", facet_r17.values[0].value, "...\u201D ");
} }
function NgxMatFacetSearchComponent_mat_chip_5_span_8_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u201C...", facet_r17.values[0].value, "\u201D ");
} }
function NgxMatFacetSearchComponent_mat_chip_5_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxMatFacetSearchComponent_mat_chip_5_span_8_span_2_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgxMatFacetSearchComponent_mat_chip_5_span_8_span_3_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NgxMatFacetSearchComponent_mat_chip_5_span_8_span_4_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NgxMatFacetSearchComponent_mat_chip_5_span_8_span_5_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", facet_r17.values[0].type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r24.FacetFilterType.contains);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r24.FacetFilterType.equal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r24.FacetFilterType.startsWith);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r24.FacetFilterType.endsWith);
} }
function NgxMatFacetSearchComponent_mat_chip_5_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxMatFacetSearchComponent_mat_chip_5_mat_icon_9_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54); const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r52.removeFacet(facet_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NgxMatFacetSearchComponent_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function NgxMatFacetSearchComponent_mat_chip_5_Template_mat_chip_selectionChange_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const facet_r17 = restoredCtx.$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r55.chipSelected($event, facet_r17); })("click", function NgxMatFacetSearchComponent_mat_chip_5_Template_mat_chip_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56); const facet_r17 = restoredCtx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r57.selectedFacet = facet_r17; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxMatFacetSearchComponent_mat_chip_5_mat_icon_1_Template, 2, 1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxMatFacetSearchComponent_mat_chip_5_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_Template, 5, 4, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NgxMatFacetSearchComponent_mat_chip_5_div_5_Template, 3, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NgxMatFacetSearchComponent_mat_chip_5_div_6_Template, 4, 8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NgxMatFacetSearchComponent_mat_chip_5_div_7_Template, 3, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NgxMatFacetSearchComponent_mat_chip_5_span_8_Template, 6, 5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NgxMatFacetSearchComponent_mat_chip_5_mat_icon_9_Template, 2, 0, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facet_r17 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", facet_r17.labelText + (facet_r17.description ? ": " + facet_r17.description : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", facet_r17.readonly ? "accent" : undefined)("selected", facet_r17 === ctx_r2.selectedFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", facet_r17.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.chipLabelsEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", facet_r17.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", facet_r17.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r2.FacetDataType.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r2.FacetDataType.DateRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r2.FacetDataType.Boolean);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r2.FacetDataType.Text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !facet_r17.readonly);
} }
function NgxMatFacetSearchComponent_mat_option_13_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facet_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](facet_r58.icon);
} }
function NgxMatFacetSearchComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxMatFacetSearchComponent_mat_option_13_mat_icon_1_Template, 2, 1, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facet_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", facet_r58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", facet_r58.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](facet_r58.labelText);
} }
function NgxMatFacetSearchComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxMatFacetSearchComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r61.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.clearButtonText, " ");
} }
var FacetDataType;
(function (FacetDataType) {
    FacetDataType["Text"] = "Text";
    FacetDataType["Boolean"] = "Boolean";
    FacetDataType["Category"] = "Category";
    FacetDataType["CategorySingle"] = "CategorySingle";
    FacetDataType["Date"] = "Date";
    FacetDataType["DateRange"] = "DateRange";
    FacetDataType["Typeahead"] = "Typeahead";
    FacetDataType["TypeaheadSingle"] = "TypeaheadSingle";
})(FacetDataType || (FacetDataType = {}));

var FacetFilterType;
(function (FacetFilterType) {
    FacetFilterType["contains"] = "contains";
    FacetFilterType["startsWith"] = "startsWith";
    FacetFilterType["endsWith"] = "endsWith";
    FacetFilterType["equal"] = "equal";
    FacetFilterType["and"] = "and";
    FacetFilterType["between"] = "between";
    FacetFilterType["greaterThan"] = "greaterThan";
    FacetFilterType["lessThan"] = "lessThan";
    FacetFilterType["greaterThanOrEqual"] = "greaterThanOrEqual";
    FacetFilterType["lessThanOrEqual"] = "lessThanOrEqual";
})(FacetFilterType || (FacetFilterType = {}));

class FacetConfig {
    constructor() {
        this.allowDebugClick = true;
        this.identifier = null;
        this.cookieExpiresOn = 1;
    }
}

const MAX_TEXT_LENGTH = 60;
class FacetDetailsModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.clearButtonDisabled = true;
        this.FacetDataType = FacetDataType;
        this.FacetFilterType = FacetFilterType;
        this.typeAheadInputChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
        this.isItemSelected = (option) => {
            return lodash__WEBPACK_IMPORTED_MODULE_0__.some(this.data.values, option);
        };
        this.addOptionToSelected = (facet, option) => {
            if (lodash__WEBPACK_IMPORTED_MODULE_0__.some(facet.values, { value: option.value })) {
                lodash__WEBPACK_IMPORTED_MODULE_0__.remove(facet.values, { value: option.value });
            }
            else {
                option.selected = true;
                switch (facet.type) {
                    case FacetDataType.Category:
                    case FacetDataType.Typeahead:
                        if (lodash__WEBPACK_IMPORTED_MODULE_0__.isNil(facet.values)) {
                            facet.values = [];
                        }
                        option.type = FacetFilterType.contains;
                        facet.values.push(option);
                        break;
                    case FacetDataType.CategorySingle:
                    case FacetDataType.TypeaheadSingle:
                        option.type = FacetFilterType.equal;
                        facet.values = [option];
                        break;
                }
            }
        };
        this.isUpdateButtonDisabled = () => {
            switch (this.data.type) {
                case FacetDataType.Category:
                case FacetDataType.CategorySingle:
                    return !lodash__WEBPACK_IMPORTED_MODULE_0__.some(this.data.values, (val) => val.value);
                case FacetDataType.Date:
                    return !lodash__WEBPACK_IMPORTED_MODULE_0__.some(this.data.values, (val) => val.value);
                case FacetDataType.DateRange:
                    return !(this.data.values[0].value) || !(this.data.values[1].value);
                case FacetDataType.Text:
                    return !lodash__WEBPACK_IMPORTED_MODULE_0__.some(this.data.values, (val) => val.value);
                case FacetDataType.Boolean:
                    return !(this.data.values[0].value);
                case FacetDataType.Typeahead:
                case FacetDataType.TypeaheadSingle:
                    return !lodash__WEBPACK_IMPORTED_MODULE_0__.some(this.data.values, (val) => val.value);
            }
        };
        switch (this.data.type) {
            case FacetDataType.Category:
                break;
            case FacetDataType.CategorySingle:
                break;
            case FacetDataType.Typeahead:
            case FacetDataType.TypeaheadSingle:
                // Go ahead and run query by default
                if (this.data.typeahead && this.data.typeahead.function) {
                    this.data.typeahead.function('').subscribe(options => {
                        if (!!options) {
                            this.data.options = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(options);
                        }
                        else {
                            this.data.options = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([]);
                        }
                    });
                }
                break;
            case FacetDataType.Date:
                this.data.values = this.data.values || [{ type: FacetFilterType.equal }];
                break;
            case FacetDataType.DateRange:
                this.data.values = this.data.values || [{ type: FacetFilterType.startsWith }, { type: FacetFilterType.endsWith }];
                break;
            case FacetDataType.Boolean:
                this.data.values = this.data.values || [{ type: FacetFilterType.equal }];
                break;
            case FacetDataType.Text:
                this.data.values = this.data.values || [{ type: FacetFilterType.contains, value: '' }];
                break;
            default:
                this.data.values = this.data.values || [{}];
        }
    }
    ngOnInit() {
    }
    /**
     * Setup debounce on the TypeAhead search
     */
    ngAfterViewInit() {
        if (this.typeAheadInputs.length > 0) {
            this.typeAheadInputChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(val => !!val), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => {
                this.data.options = undefined;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(this.data.typeahead.debounce || 300)).subscribe(txt => {
                let search = txt;
                if (!!!search) {
                    search = '';
                }
                this.data.typeahead.function(search).subscribe(options => {
                    if (!!options) {
                        this.data.options = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(options);
                    }
                    else {
                        this.data.options = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([]);
                    }
                });
            });
        }
    }
    typeaheadValueChanged(event) {
        if (!!event) {
            this.typeAheadInputChanged.next(event);
        }
        else {
            this.typeAheadInputChanged.next(' ');
        }
        this.clearButtonDisabled = (!!!event || event.length === 0);
    }
    truncateText(txt) {
        if (txt && txt.length) {
            return txt.length > MAX_TEXT_LENGTH ?
                `${txt.substring(0, MAX_TEXT_LENGTH).trim()}...` :
                txt;
        }
        else {
            return txt;
        }
    }
    onOk() {
        this.finished(this.data);
    }
    onCancel() {
        this.onClose();
    }
    onClose() {
        this.dialogRef.close();
    }
    validateAndSubmit() {
        if (!this.isUpdateButtonDisabled()) {
            this.onOk();
        }
    }
    emptyFunction() {
    }
    clearInput() {
        this.typeaheadText = '';
        this.typeaheadValueChanged('');
    }
}
FacetDetailsModalComponent.ɵfac = function FacetDetailsModalComponent_Factory(t) { return new (t || FacetDetailsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA)); };
FacetDetailsModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FacetDetailsModalComponent, selectors: [["ngx-mat-facet-details-modal"]], viewQuery: function FacetDetailsModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.typeAheadInputs = _t);
    } }, decls: 24, vars: 13, consts: [["fxLayout", "column", "fxLayoutAlign", "start", 1, "mat-typography"], ["fxLayout", "row", "fxLayoutAlign", "space-between none", "color", "primary", 1, "modal-header"], ["mat-dialog-title", "", 1, "modal-title"], ["mat-icon-button", "", 1, "modal-close", 3, "click"], [1, "dialog-content"], [4, "ngIf"], ["loading", ""], ["noResults", ""], [3, "ngSwitch"], ["fxLayout", "column", "fxLayoutGap", "20px", 4, "ngSwitchCase"], ["fxLayout", "column", 4, "ngSwitchCase"], ["fxLayout", "row", 4, "ngSwitchCase"], ["fxLayout", "row", "fxLayoutGap", "30px", 4, "ngSwitchCase"], ["dir", "rtl"], ["mat-button", "", 3, "color", "disabled", "click"], ["mat-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["diameter", "50"], [1, "no-results"], ["fxLayout", "column", "fxLayoutGap", "20px"], [4, "ngIf", "ngIfElse"], [3, "value", "selected", "click", 4, "ngFor", "ngForOf"], [3, "value", "selected", "click"], ["fxFlex", "70", 1, "typeahead-form-field"], ["matInput", "", "autocomplete", "off", "autofocus", "", "cdkFocusInitial", "", 3, "ngModel", "placeholder", "ngModelChange"], ["typeAheadInput", ""], ["mat-mini-fab", "", 3, "disabled", "click"], ["fxFill", ""], ["matInput", "", "autocomplete", "off", "placeholder", "Choose a date", 3, "matDatepicker", "ngModel", "ngModelChange", "focus"], ["matSuffix", "", 3, "for"], ["picker", ""], ["fxLayout", "column"], ["matInput", "", "autocomplete", "off", "placeholder", "Choose a start date", 3, "matDatepicker", "ngModel", "ngModelChange", "focus"], ["startDatePicker", ""], ["matInput", "", "autocomplete", "off", "placeholder", "Choose an end date", 3, "matDatepicker", "ngModel", "ngModelChange"], ["endDatePicker", ""], ["fxLayout", "row"], ["fxFlex", "30"], ["placeholder", "Criteria Type", 3, "value", "disabled", "valueChange"], [3, "value"], ["fxFlex", "70"], ["matInput", "", "autocomplete", "off", "cdkFocusInitial", "", "autofocus", "", 3, "ngModel", "placeholder", "keydown.enter", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["fxLayout", "row", "fxLayoutGap", "30px"], [3, "ngModel", "ngModelChange"], ["mat-button", "", "color", "warn", 3, "click"]], template: function FacetDetailsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FacetDetailsModalComponent_Template_button_click_4_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-dialog-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FacetDetailsModalComponent_p_8_Template, 2, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, FacetDetailsModalComponent_ng_template_9_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FacetDetailsModalComponent_ng_template_11_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FacetDetailsModalComponent_div_14_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, FacetDetailsModalComponent_div_15_Template, 9, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, FacetDetailsModalComponent_div_16_Template, 6, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, FacetDetailsModalComponent_div_17_Template, 11, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, FacetDetailsModalComponent_div_18_Template, 14, 9, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, FacetDetailsModalComponent_div_19_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-dialog-actions", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FacetDetailsModalComponent_Template_button_click_21_listener() { return ctx.onOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, FacetDetailsModalComponent_button_23_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.labelText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.data.type === ctx.FacetDataType.Category || ctx.data.type === ctx.FacetDataType.CategorySingle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.data.type === ctx.FacetDataType.Typeahead || ctx.data.type === ctx.FacetDataType.TypeaheadSingle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.data.type === ctx.FacetDataType.Date);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.data.type === ctx.FacetDataType.DateRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.data.type === ctx.FacetDataType.Text);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.data.type === ctx.FacetDataType.Boolean);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.isUpdate ? "accent" : "primary")("disabled", ctx.isUpdateButtonDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isUpdate ? "Update" : "Add Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUpdate);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchCase, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Dir, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatSpinner, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutGapDirective, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatSelectionList, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.FlexFillDirective, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepicker, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckbox], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe], styles: [".modal-header[_ngcontent-%COMP%]{padding:15px 10px 0 20px;margin:-24px -24px 23px!important;width:unset!important}mat-spinner[_ngcontent-%COMP%]{margin:1em auto}.dialog-content[_ngcontent-%COMP%]{min-height:150px}span.no-results[_ngcontent-%COMP%]{text-align:center;color:gray;margin-top:1em;margin-bottom:1em}.typeahead-form-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{box-shadow:none;width:30px;height:30px}.typeahead-form-field[_ngcontent-%COMP%]     mat-icon{font-size:18px}.typeahead-form-field[_ngcontent-%COMP%]     .mat-mini-fab{background-color:gray;transition:background-color .3s ease-in-out}.typeahead-form-field[_ngcontent-%COMP%]     .mat-mini-fab[disabled]{background-color:hsla(0,0%,50%,.44);color:#fff!important}.typeahead-form-field[_ngcontent-%COMP%]     .mat-mini-fab .mat-button-wrapper{padding:0}.typeahead-form-field[_ngcontent-%COMP%]     .mat-form-field-infix{display:flex;justify-content:center;align-items:center}.modal-close[_ngcontent-%COMP%], .modal-title[_ngcontent-%COMP%]{margin-bottom:15px!important}.modal-close[_ngcontent-%COMP%]{margin-top:-5px}"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.trigger)('fadeIn', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({ opacity: '0', height: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.animate)('.2s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({ opacity: '1', height: '*' })),
                ]),
            ]),
        ] } });
FacetDetailsModalComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA,] }] }
];
FacetDetailsModalComponent.propDecorators = {
    typeAheadInputs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChildren, args: ['typeAheadInput',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FacetDetailsModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngx-mat-facet-details-modal',
                template: "<div fxLayout=\"column\" fxLayoutAlign=\"start\" class=\"mat-typography\">\n\n  <mat-toolbar fxLayout=\"row\" fxLayoutAlign=\"space-between none\" color=\"primary\" class=\"modal-header\">\n    <h2 class=\"modal-title\" mat-dialog-title>{{data.labelText}}</h2>\n    <button class=\"modal-close\" mat-icon-button (click)=\"onCancel()\">\n      <mat-icon>clear</mat-icon>\n    </button>\n  </mat-toolbar>\n\n  <mat-dialog-content class=\"dialog-content\">\n\n    <p *ngIf=\"data.description\">{{data.description}}</p>\n\n    <ng-template #loading>\n      <mat-spinner diameter=\"50\"></mat-spinner>\n    </ng-template>\n\n    <ng-template #noResults>\n      <span class=\"no-results\" @fadeIn>No Results</span>\n    </ng-template>\n\n    <ng-container [ngSwitch]=\"true\">\n\n      <div *ngSwitchCase=\"data.type === FacetDataType.Category || data.type === FacetDataType.CategorySingle\"\n           fxLayout=\"column\" fxLayoutGap=\"20px\">\n\n        <ng-container *ngIf=\"!!(data.options | async); else loading\">\n          <mat-selection-list *ngIf=\"(data.options | async).length > 0; else noResults\">\n            <mat-list-option *ngFor=\"let item of (data.options | async)\" [value]=\"item.value\" [selected]=\"isItemSelected(item)\"\n                             @fadeIn\n                             (click)=\"addOptionToSelected(data, item) \">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t{{ item.text ? truncateText(item.text) : \"- empty -\" }}\n              <small *ngIf=\"item.count\">\n\t\t\t\t\t\t\t\t<i>({{item.count}})</i>\n\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t</span>\n\n            </mat-list-option>\n          </mat-selection-list>\n        </ng-container>\n\n      </div>\n      <div *ngSwitchCase=\"data.type === FacetDataType.Typeahead || data.type === FacetDataType.TypeaheadSingle\"\n           fxLayout=\"column\" fxLayoutGap=\"20px\">\n\n        <mat-form-field fxFlex=\"70\" class=\"typeahead-form-field\">\n          <input matInput #typeAheadInput\n                 autocomplete=\"off\"\n                 [(ngModel)]=\"typeaheadText\"\n                 placeholder=\"{{data.typeahead.placeholder || ''}}\"\n                 (ngModelChange)=\"typeaheadValueChanged($event)\"\n                 autofocus cdkFocusInitial/>\n\n          <button mat-mini-fab [disabled]=\"clearButtonDisabled\" (click)=\"clearInput()\">\n            <mat-icon>clear</mat-icon>\n          </button>\n        </mat-form-field>\n\n        <ng-container *ngIf=\"!!data.options && !!(data.options | async); else loading\">\n          <mat-selection-list *ngIf=\"(data.options | async).length > 0; else noResults\">\n            <mat-list-option *ngFor=\"let item of (data.options | async)\" [value]=\"item.value\"\n                             @fadeIn\n                             [selected]=\"isItemSelected(item)\"\n                             (click)=\"addOptionToSelected(data, item) \">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t{{ item.text ? truncateText(item.text) : \"- empty -\" }}\n              <small *ngIf=\"item.count\">\n\t\t\t\t\t\t\t\t<i>({{item.count}})</i>\n\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t</span>\n\n            </mat-list-option>\n          </mat-selection-list>\n        </ng-container>\n\n      </div>\n      <div *ngSwitchCase=\"data.type === FacetDataType.Date\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n\n        <mat-form-field fxFill>\n          <input matInput autocomplete=\"off\" [matDatepicker]=\"picker\" [(ngModel)]=\"data.values[0].value\"\n                 placeholder=\"Choose a date\" (focus)=\"isUpdate ? emptyFunction() : picker.open()\"/>\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        </mat-form-field>\n        <mat-datepicker #picker></mat-datepicker>\n\n      </div>\n      <div *ngSwitchCase=\"data.type === FacetDataType.DateRange\" fxLayout=\"column\">\n\n        <mat-form-field fxFill>\n          <input matInput autocomplete=\"off\" [matDatepicker]=\"startDatePicker\"\n                 [(ngModel)]=\"data.values[0].value\" placeholder=\"Choose a start date\"\n                 (focus)=\"isUpdate ? emptyFunction() : startDatePicker.open()\"/>\n          <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\n        </mat-form-field>\n        <mat-datepicker #startDatePicker></mat-datepicker>\n\n        <mat-form-field fxFill>\n          <input matInput autocomplete=\"off\" [matDatepicker]=\"endDatePicker\"\n                 [(ngModel)]=\"data.values[1].value\" placeholder=\"Choose an end date\"/>\n          <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\n        </mat-form-field>\n        <mat-datepicker #endDatePicker></mat-datepicker>\n\n      </div>\n      <div *ngSwitchCase=\"data.type === FacetDataType.Text\" fxLayout=\"row\">\n\n        <mat-form-field fxFlex=\"30\">\n\n\n          <mat-select [(value)]=\"data.fixedFilterType || data.values[0].type\"\n                      [disabled]=\"!!data.fixedFilterType\" placeholder=\"Criteria Type\">\n            <!--\n            <mat-option *ngFor=\"let type of FacetFilterType | keys\" [value]=\"type.key\">{{type.value}}</mat-option>\n            -->\n            <mat-option [value]=\"FacetFilterType.contains\">Contains</mat-option>\n            <mat-option [value]=\"FacetFilterType.endsWith\">Ends With</mat-option>\n            <mat-option [value]=\"FacetFilterType.equal\">Equals</mat-option>\n            <mat-option [value]=\"FacetFilterType.startsWith\">Starts With</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field fxFlex=\"70\">\n          <input matInput (keydown.enter)=\"validateAndSubmit()\" autocomplete=\"off\" cdkFocusInitial [(ngModel)]=\"data.values[0].value\"\n                 placeholder=\"{{data.placeholder || data.labelText }}\" autofocus/>\n          <button mat-button *ngIf=\"data.values\" matSuffix mat-icon-button aria-label=\"Clear\"\n                  (click)=\"data.values = undefined\">\n            <mat-icon>close</mat-icon>\n          </button>\n        </mat-form-field>\n\n      </div>\n      <div *ngSwitchCase=\"data.type === FacetDataType.Boolean\" fxLayout=\"row\" fxLayoutGap=\"30px\">\n        <mat-checkbox [(ngModel)]=\"data.values[0].value\">{{data.placeholder || data.labelText}}</mat-checkbox>\n      </div>\n    </ng-container>\n\n  </mat-dialog-content>\n\n  <mat-dialog-actions dir=\"rtl\">\n\n    <button mat-button [color]=\"isUpdate ? 'accent' : 'primary'\" (click)=\"onOk()\"\n            [disabled]=\"isUpdateButtonDisabled()\">{{isUpdate ? 'Update' : 'Add Filter'}}</button>\n\n    <button mat-button *ngIf=\"isUpdate\" color=\"warn\" (click)=\"removeFacet(this.data)\">Remove</button>\n\n  </mat-dialog-actions>\n</div>\n",
                animations: [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.trigger)('fadeIn', [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.transition)(':enter', [
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({ opacity: '0', height: 0 }),
                            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.animate)('.2s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({ opacity: '1', height: '*' })),
                        ]),
                    ]),
                ],
                styles: [".modal-header{padding:15px 10px 0 20px;margin:-24px -24px 23px!important;width:unset!important}mat-spinner{margin:1em auto}.dialog-content{min-height:150px}span.no-results{text-align:center;color:gray;margin-top:1em;margin-bottom:1em}.typeahead-form-field button{box-shadow:none;width:30px;height:30px}.typeahead-form-field ::ng-deep mat-icon{font-size:18px}.typeahead-form-field ::ng-deep .mat-mini-fab{background-color:gray;transition:background-color .3s ease-in-out}.typeahead-form-field ::ng-deep .mat-mini-fab[disabled]{background-color:hsla(0,0%,50%,.44);color:#fff!important}.typeahead-form-field ::ng-deep .mat-mini-fab .mat-button-wrapper{padding:0}.typeahead-form-field ::ng-deep .mat-form-field-infix{display:flex;justify-content:center;align-items:center}.modal-close,.modal-title{margin-bottom:15px!important}.modal-close{margin-top:-5px}"]
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA]
            }] }]; }, { typeAheadInputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChildren,
            args: ['typeAheadInput']
        }] }); })();

const FACET_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('Facet Configuration', {
    providedIn: 'root',
    factory: () => new FacetConfig()
});

// @dynamic
class NgxMatFacetSearchComponent {
    constructor(configuration, dialog, media, cookieService) {
        this.dialog = dialog;
        this.media = media;
        this.cookieService = cookieService;
        this.placeholder = 'Filter Table...';
        this.clearButtonText = 'Clear Filters';
        this.clearButtonEnabled = true;
        this.dateFormat = 'M/d/yyyy';
        this.tooltip = null;
        this.displayFilterIcon = true;
        this.facetWidth = '400px';
        this.facetHasBackdrop = true;
        this.confirmOnRemove = true;
        this.chipLabelsEnabled = true;
        this.identifier = null;
        this.selectedFacets = [];
        this.availableFacets = [];
        this.filteredFacets = [];
        this.FacetDataType = FacetDataType;
        this.FacetFilterType = FacetFilterType;
        this.allowDebugClick = false;
        this.cookieExpiresOn = 1;
        this.searchUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.identifier = configuration.identifier;
        this.allowDebugClick = configuration.allowDebugClick;
        this.cookieExpiresOn = configuration.cookieExpiresOn;
    }
    static getFixedURL() {
        return window.location.pathname.toString()
            .replace(/\s+/g, '-')
            .replace(/\//g, '-');
    }
    ngOnInit() {
        if (!this.identifier) {
            this.identify(NgxMatFacetSearchComponent.getFixedURL());
        }
        this.updateAvailableFacets();
        this.selectedFacets = this.loadFromCookies();
        this.source.filter(facet => facet && facet.values && Array.isArray(facet.values))
            .forEach(facet => this.selectedFacets.push(facet));
        if (this.selectedFacets && Array.isArray(this.selectedFacets) && this.selectedFacets.length > 0) {
            this.emitSelectedEvent();
        }
    }
    ngAfterViewInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.fromEvent)(this.filterInput.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(150), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.map)(() => this.filterInput.nativeElement.value)).subscribe((filterText) => {
            if (!!filterText && filterText.length > 0) {
                this.filteredFacets = this.availableFacets.filter(f => f.name.toLowerCase().includes(filterText));
            }
            else {
                this.filteredFacets = this.availableFacets;
            }
        });
    }
    chipSelected(event, facet) {
        if (event.selected && !facet.readonly) {
            const elementRef = event.source._elementRef.nativeElement;
            const bound = elementRef.getBoundingClientRect();
            this.facetSelected(facet, {
                top: bound.top + bound.height + 'px',
                left: (!this.media.isActive('xs') ? bound.left + 'px' : undefined)
            }, true);
        }
    }
    autoCompleteSelected(event) {
        const selectedFacet = event.option.value;
        const elementRef = event.option._getHostElement().parentElement.getBoundingClientRect();
        const top = elementRef.top;
        const left = elementRef.left;
        this.facetSelected(selectedFacet, {
            top: top + 'px',
            left: (!this.media.isActive('xs') ? left + 'px' : undefined)
        }, false);
    }
    facetSelected(facet, position, isUpdate) {
        this.promptFacet(lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(facet), position, isUpdate);
    }
    promptFacet(facet, position, isUpdate) {
        this.filteredFacets = this.availableFacets;
        setTimeout(() => {
            const facetDetailsModal = this.dialog.open(FacetDetailsModalComponent, {
                width: this.facetWidth,
                hasBackdrop: this.facetHasBackdrop,
                position,
                backdropClass: 'transparentBackdrop',
                panelClass: 'mat-facet-search-dialog',
                data: facet,
                disableClose: true,
                closeOnNavigation: false
            });
            facetDetailsModal.componentInstance.removeFacet = (f) => {
                if (this.removeFacet(f)) {
                    facetDetailsModal.close();
                }
            };
            facetDetailsModal.componentInstance.isUpdate = isUpdate;
            facetDetailsModal.componentInstance.finished = (updatedFacet) => {
                this.addOrUpdateFacet(updatedFacet);
                facetDetailsModal.close();
            };
            facetDetailsModal.beforeClosed().subscribe(() => {
                this.selectedFacet = undefined;
            });
        }, 1);
    }
    addOrUpdateFacet(facet) {
        const index = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.selectedFacets, { name: facet.name });
        if (index > -1) {
            this.selectedFacets[index] = facet;
        }
        else {
            this.selectedFacets.push(facet);
        }
        this.emitSelectedEvent();
        this.updateCookies();
    }
    removeFacet(facet) {
        if (!this.confirmOnRemove || (this.confirmOnRemove && confirm('Do you really want to remove "' + facet.labelText + '" filter?'))) {
            lodash__WEBPACK_IMPORTED_MODULE_0__.remove(this.selectedFacets, { name: facet.name });
            this.emitSelectedEvent();
            this.updateCookies();
            return true;
        }
        return false;
    }
    updateAvailableFacets() {
        const sourceClone = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.source);
        lodash__WEBPACK_IMPORTED_MODULE_0__.remove(sourceClone, (a) => {
            return lodash__WEBPACK_IMPORTED_MODULE_0__.some(this.selectedFacets, { name: a.name });
        });
        this.availableFacets = sourceClone;
        this.filteredFacets = this.availableFacets;
    }
    reset() {
        this.selectedFacets = this.source.filter(facet => facet.readonly === true);
        this.emitSelectedEvent();
        this.clearCookies();
    }
    emitSelectedEvent() {
        this.updateAvailableFacets();
        this.searchUpdated.next(this.selectedFacets.map(facet => ({
            name: facet.name,
            labelText: facet.labelText,
            type: facet.type,
            values: facet.values.map(val => ({
                value: val.value,
                labelText: val.text,
                type: val.type,
                active: true
            }))
        })));
    }
    displayFn(...args) {
        return undefined;
    }
    focus(event) {
        event.stopPropagation();
        this.inputAutoComplete.openPanel();
    }
    identify(identifier) {
        if (identifier.length === 0 || identifier === '-') {
            this.identifier = 'default-facet';
        }
        else {
            this.identifier = `${identifier}-facet`;
        }
    }
    clearCookies() {
        if (!this.identifier) {
            return;
        }
        this.cookieService.delete(this.identifier);
    }
    printIdentity() {
        console.log(this.identifier);
    }
    // Debug
    clickStarted() {
        if (!this.allowDebugClick) {
            return;
        }
        this.timeoutHandler = setTimeout(() => {
            this.printIdentity();
            this.timeoutHandler = null;
        }, 1000);
    }
    clickEnded() {
        if (this.timeoutHandler) {
            clearTimeout(this.timeoutHandler);
            this.timeoutHandler = null;
        }
    }
    updateCookies() {
        if (!this.identifier) {
            return;
        }
        if (this.selectedFacets.length === 0) {
            this.clearCookies();
            return;
        }
        this.cookieService.set(this.identifier, JSON.stringify(this.selectedFacets), this.cookieExpiresOn);
    }
    loadFromCookies() {
        let cookieFacets = [];
        if (!!this.identifier && this.cookieService.check(this.identifier)) {
            cookieFacets = JSON.parse(this.cookieService.get(this.identifier));
        }
        return cookieFacets;
    }
}
NgxMatFacetSearchComponent.ɵfac = function NgxMatFacetSearchComponent_Factory(t) { return new (t || NgxMatFacetSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FACET_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__.MediaObserver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_28__.CookieService)); };
NgxMatFacetSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxMatFacetSearchComponent, selectors: [["ngx-mat-facet-search"]], viewQuery: function NgxMatFacetSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filterInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputAutoComplete = _t.first);
    } }, inputs: { placeholder: "placeholder", clearButtonText: "clearButtonText", clearButtonEnabled: "clearButtonEnabled", dateFormat: "dateFormat", tooltip: "tooltip", displayFilterIcon: "displayFilterIcon", facetWidth: "facetWidth", facetHasBackdrop: "facetHasBackdrop", confirmOnRemove: "confirmOnRemove", chipLabelsEnabled: "chipLabelsEnabled", identifier: "identifier", source: "source" }, outputs: { searchUpdated: "searchUpdated" }, decls: 15, vars: 10, consts: [["fxLayout", "row", "fxLayoutGap", "20px", "fxLayoutAlign", "space-between center", 1, "main-facet-wrapper"], ["fxFlex", "initial", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxFlex", "grow"], [3, "multiple"], ["chipList", ""], ["class", "facet-chip", "fxFlex", "initial", "matTooltipShowDelay", "1000", 3, "color", "selected", "matTooltip", "selectionChange", "click", 4, "ngFor", "ngForOf"], ["disableRipple", "", "disabled", "", 1, "filterInputContainer"], [1, "add-icon", 3, "click"], [1, "filterInput", 3, "matChipInputFor", "placeholder", "matChipInputAddOnBlur", "matAutocomplete"], ["filterInput", ""], ["panelWidth", "250px", 1, "mat-facet-autocomplete", 3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["fxHide.xs", "", "mat-button", "", "color", "accent", "fxFlex", "none", 3, "click", 4, "ngIf"], ["fxFlex", "initial", "fxLayout", "row", "fxLayoutAlign", "center center"], ["class", "filter-list-icon", 3, "matTooltip", "mousedown", "mouseup", "mouseleave", 4, "ngIf"], ["class", "filter-list-icon", 3, "mousedown", "mouseup", "mouseleave", 4, "ngIf"], [1, "filter-list-icon", 3, "matTooltip", "mousedown", "mouseup", "mouseleave"], [1, "filter-list-icon", 3, "mousedown", "mouseup", "mouseleave"], ["fxFlex", "initial", "matTooltipShowDelay", "1000", 1, "facet-chip", 3, "color", "selected", "matTooltip", "selectionChange", "click"], ["class", "inlineChipIcon", 4, "ngIf"], ["fxHide.xs", "", 4, "ngIf"], [3, "ngSwitch"], [4, "ngIf"], [4, "ngSwitchCase"], ["fxLayout", "row", "fxLayoutGap", "15px", 4, "ngSwitchCase"], ["matChipRemove", "", 3, "click", 4, "ngIf"], [1, "inlineChipIcon"], ["fxHide.xs", ""], ["fxLayout", "row", "fxLayoutGap", "15px"], [1, "inlineChipCheckbox", 3, "disabled", "ngModel", "ngModelChange"], ["matChipRemove", "", 3, "click"], [3, "value"], ["fxHide.xs", "", "mat-button", "", "color", "accent", "fxFlex", "none", 3, "click"]], template: function NgxMatFacetSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxMatFacetSearchComponent_div_1_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-chip-list", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NgxMatFacetSearchComponent_mat_chip_5_Template, 10, 12, "mat-chip", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-chip", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxMatFacetSearchComponent_Template_mat_icon_click_7_listener($event) { return ctx.focus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-autocomplete", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function NgxMatFacetSearchComponent_Template_mat_autocomplete_optionSelected_11_listener($event) { return ctx.autoCompleteSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NgxMatFacetSearchComponent_mat_option_13_Template, 4, 3, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NgxMatFacetSearchComponent_button_14_Template, 2, 1, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displayFilterIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectedFacets);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matChipInputFor", _r1)("placeholder", ctx.placeholder)("matChipInputAddOnBlur", false)("matAutocomplete", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredFacets);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.clearButtonEnabled && ctx.selectedFacets.length > 0);
    } }, directives: function () { return [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocomplete, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgSwitchCase, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_32__.DefaultShowHideDirective, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipRemove, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton]; }, pipes: function () { return [CSVPipe, FilterPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe]; }, styles: ["*[_ngcontent-%COMP%]{outline:0}.filterInputContainer[_ngcontent-%COMP%]{background-color:transparent!important;border:1px dashed rgba(0,0,0,.56);opacity:.8!important;transition:none!important;box-shadow:none!important}.filterInput[_ngcontent-%COMP%]{border:none!important;background:none!important;width:85px;font-size:14px!important;font-weight:400;flex:0;text-align:right}[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(0,0,0,.86);opacity:1}[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(0,0,0,.86);opacity:1}[_ngcontent-%COMP%]::placeholder{color:rgba(0,0,0,.86);opacity:1}.transparentBackdrop[_ngcontent-%COMP%]{background-color:transparent!important}.inlineChipIcon[_ngcontent-%COMP%]{width:18px;height:18px;font-size:18px;margin-right:7px;margin-left:0}[_nghost-%COMP%]   .mat-checkbox-inner-container[_ngcontent-%COMP%]{transform:scale(.7)}.inlineChipCheckbox[_nghost-%COMP%]   label.mat-checkbox-layout[_ngcontent-%COMP%]   div.mat-checkbox-inner-container[_ngcontent-%COMP%], .inlineChipCheckbox   [_nghost-%COMP%]   label.mat-checkbox-layout[_ngcontent-%COMP%]   div.mat-checkbox-inner-container[_ngcontent-%COMP%]{transform:scale(.7)}.add-icon[_ngcontent-%COMP%]:hover, .filterInputContainer[_ngcontent-%COMP%]:hover{cursor:pointer}.main-facet-wrapper[_ngcontent-%COMP%]{min-height:36px}  .mat-autocomplete-panel.mat-autocomplete-visible{left:-40px!important;top:15px!important}"] });
NgxMatFacetSearchComponent.ctorParameters = () => [
    { type: FacetConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [FACET_CONFIG,] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__.MediaObserver },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_28__.CookieService }
];
NgxMatFacetSearchComponent.propDecorators = {
    source: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    clearButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    clearButtonEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    dateFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    displayFilterIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    facetWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    facetHasBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    confirmOnRemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    chipLabelsEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    identifier: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    searchUpdated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    filterInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild, args: ['filterInput',] }],
    inputAutoComplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild, args: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger, { read: _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMatFacetSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngx-mat-facet-search',
                template: "<div fxLayout=\"row\" class=\"main-facet-wrapper\" fxLayoutGap=\"20px\" fxLayoutAlign=\"space-between center\">\n\n  <div fxFlex=\"initial\" *ngIf=\"displayFilterIcon\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-icon class=\"filter-list-icon\" *ngIf=\"tooltip != null\" (mousedown)=\"clickStarted()\" (mouseup)=\"clickEnded()\" (mouseleave)=\"clickEnded()\" [matTooltip]=\"tooltip\">filter_list</mat-icon>\n    <mat-icon class=\"filter-list-icon\" *ngIf=\"tooltip == null\" (mousedown)=\"clickStarted()\" (mouseup)=\"clickEnded()\" (mouseleave)=\"clickEnded()\">filter_list</mat-icon>\n  </div>\n\n  <div fxFlex=\"grow\">\n\n    <mat-chip-list #chipList [multiple]=\"false\">\n\n      <mat-chip *ngFor=\"let facet of selectedFacets\" [color]=\"facet.readonly ? 'accent' : undefined\"\n                class=\"facet-chip\"\n                (selectionChange)=\"chipSelected($event, facet)\" (click)=\"selectedFacet = facet\"\n                [selected]=\"facet === selectedFacet\" fxFlex=\"initial\"\n                matTooltip=\"{{facet.labelText + (facet.description ? ': ' + facet.description : '')}}\"\n                matTooltipShowDelay=\"1000\">\n        <mat-icon *ngIf=\"facet.icon\" class=\"inlineChipIcon\">{{facet.icon}}</mat-icon>\n\n        <span *ngIf=\"chipLabelsEnabled\" fxHide.xs>{{ facet.labelText + ': &nbsp;'}}</span>\n\n        <ng-container [ngSwitch]=\"facet.type\">\n\n          <ng-container *ngIf=\"facet.values as options\">\n            <div *ngSwitchCase=\"FacetDataType.Category\">\n              {{options | filter: 'selected': true | csv:'text':' / '}}\n            </div>\n            <div *ngSwitchCase=\"FacetDataType.CategorySingle\">\n              {{options | filter: 'selected': true | csv:'text':' / '}}\n            </div>\n            <div *ngSwitchCase=\"FacetDataType.Typeahead\">\n              {{options | filter: 'selected': true | csv:'text':' / '}}\n            </div>\n            <div *ngSwitchCase=\"FacetDataType.TypeaheadSingle\">\n              {{options | filter: 'selected': true | csv:'text':' / '}}\n            </div>\n          </ng-container>\n\n          <div *ngSwitchCase=\"FacetDataType.Date\">\n            \u201C{{facet.values[0].value | date:dateFormat}}\u201D\n          </div>\n\n          <div *ngSwitchCase=\"FacetDataType.DateRange\">\n            \u201C{{facet.values[0].value | date:dateFormat}}\u201D ~ \u201C{{facet.values[1].value | date:dateFormat}}\u201D\n          </div>\n\n          <div *ngSwitchCase=\"FacetDataType.Boolean\" fxLayout=\"row\" fxLayoutGap=\"15px\">\n            <mat-checkbox [disabled]=\"true\" class=\"inlineChipCheckbox\" [(ngModel)]=\"facet.values[0].value\">\n              {{facet.labelText}}\n            </mat-checkbox>\n          </div>\n\n          <span *ngSwitchCase=\"FacetDataType.Text\">\n\t\t\t\t\t\t<ng-container [ngSwitch]=\"facet.values[0].type\">\n\t\t\t\t\t\t\t<span *ngSwitchCase=\"FacetFilterType.contains\">\n\t\t\t\t\t\t\t\t\u201C..{{facet.values[0].value}}..\u201D\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span *ngSwitchCase=\"FacetFilterType.equal\">\n\t\t\t\t\t\t\t\t\u201C{{facet.values[0].value}}\u201D\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span *ngSwitchCase=\"FacetFilterType.startsWith\">\n\t\t\t\t\t\t\t\t\u201C{{facet.values[0].value}}...\u201D\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span *ngSwitchCase=\"FacetFilterType.endsWith\">\n\t\t\t\t\t\t\t\t\u201C...{{facet.values[0].value}}\u201D\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</span>\n        </ng-container>\n\n        <mat-icon *ngIf=\"!facet.readonly\" matChipRemove (click)=\"removeFacet(facet)\">cancel</mat-icon>\n\n      </mat-chip>\n\n      <mat-chip class=\"filterInputContainer\" disableRipple disabled>\n\n        <mat-icon class=\"add-icon\" (click)=\"focus($event)\">add</mat-icon>\n\n        <input #filterInput [matChipInputFor]=\"chipList\" class=\"filterInput\" [placeholder]=\"placeholder\"\n               [matChipInputAddOnBlur]=\"false\" [matAutocomplete]=\"auto\">\n\n        <mat-autocomplete #auto=\"matAutocomplete\" class=\"mat-facet-autocomplete\" (optionSelected)=\"autoCompleteSelected($event)\"\n                          [displayWith]=\"displayFn\" panelWidth=\"250px\">\n          <mat-option *ngFor=\"let facet of filteredFacets\" [value]=\"facet\">\n            <mat-icon *ngIf=\"facet.icon\">{{facet.icon}}</mat-icon>\n            <span>{{ facet.labelText }}</span>\n          </mat-option>\n        </mat-autocomplete>\n\n      </mat-chip>\n\n    </mat-chip-list>\n\n  </div>\n\n\n  <button *ngIf=\"clearButtonEnabled && selectedFacets.length > 0\" fxHide.xs mat-button (click)=\"reset()\" color=\"accent\"\n          fxFlex=\"none\">\n    {{clearButtonText}}\n  </button>\n\n</div>\n",
                styles: ["*{outline:0}.filterInputContainer{background-color:transparent!important;border:1px dashed rgba(0,0,0,.56);opacity:.8!important;transition:none!important;box-shadow:none!important}.filterInput{border:none!important;background:none!important;width:85px;font-size:14px!important;font-weight:400;flex:0;text-align:right}::-moz-placeholder{color:rgba(0,0,0,.86);opacity:1}:-ms-input-placeholder{color:rgba(0,0,0,.86);opacity:1}::placeholder{color:rgba(0,0,0,.86);opacity:1}.transparentBackdrop{background-color:transparent!important}.inlineChipIcon{width:18px;height:18px;font-size:18px;margin-right:7px;margin-left:0}:host-context .mat-checkbox-inner-container{transform:scale(.7)}:host-context(.inlineChipCheckbox) label.mat-checkbox-layout div.mat-checkbox-inner-container{transform:scale(.7)}.add-icon:hover,.filterInputContainer:hover{cursor:pointer}.main-facet-wrapper{min-height:36px}::ng-deep .mat-autocomplete-panel.mat-autocomplete-visible{left:-40px!important;top:15px!important}"]
            }]
    }], function () { return [{ type: FacetConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [FACET_CONFIG]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog }, { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__.MediaObserver }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_28__.CookieService }]; }, { placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], clearButtonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], clearButtonEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], dateFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], displayFilterIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], facetWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], facetHasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], confirmOnRemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], chipLabelsEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], identifier: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], searchUpdated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], filterInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: ['filterInput']
        }], inputAutoComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger, { read: _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger }]
        }] }); })();

class CSVPipe {
    transform(value, objectKeyName, separator) {
        return lodash__WEBPACK_IMPORTED_MODULE_0__.map(value, (element) => {
            return objectKeyName ? element[objectKeyName] : element;
        }).join(separator || ',');
    }
}
CSVPipe.ɵfac = function CSVPipe_Factory(t) { return new (t || CSVPipe)(); };
CSVPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "csv", type: CSVPipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CSVPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
        args: [{
                name: 'csv',
                pure: false
            }]
    }], null, null); })();

class FilterPipe {
    transform(objectArray, fieldName, fieldValue) {
        return lodash__WEBPACK_IMPORTED_MODULE_0__.filter(objectArray, (obj) => {
            return obj[fieldName] === fieldValue;
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
        args: [{
                name: 'filter',
                pure: false
            }]
    }], null, null); })();

class KeysPipe {
    transform(value) {
        return lodash__WEBPACK_IMPORTED_MODULE_0__.map(lodash__WEBPACK_IMPORTED_MODULE_0__.keys(value), (x) => {
            return {
                key: x,
                value: x
            };
        });
    }
}
KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
KeysPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "keys", type: KeysPipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
        args: [{
                name: 'keys',
                pure: false
            }]
    }], null, null); })();

class NgxMatFacetSearchModule {
}
NgxMatFacetSearchModule.ɵfac = function NgxMatFacetSearchModule_Factory(t) { return new (t || NgxMatFacetSearchModule)(); };
NgxMatFacetSearchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxMatFacetSearchModule });
NgxMatFacetSearchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_28__.CookieService], imports: [[
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__.A11yModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_34__.FlexLayoutModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOptionModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipsModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxMatFacetSearchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                imports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__.A11yModule,
                    _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_34__.FlexLayoutModule,
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule,
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule,
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule,
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOptionModule,
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule,
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipsModule,
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule,
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteModule,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule,
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule,
                ],
                declarations: [
                    CSVPipe,
                    FilterPipe,
                    KeysPipe,
                    NgxMatFacetSearchComponent,
                    FacetDetailsModalComponent,
                ],
                exports: [NgxMatFacetSearchComponent],
                entryComponents: [FacetDetailsModalComponent],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_28__.CookieService]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxMatFacetSearchModule, { declarations: function () { return [CSVPipe, FilterPipe, KeysPipe, NgxMatFacetSearchComponent, FacetDetailsModalComponent]; }, imports: function () { return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__.A11yModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_34__.FlexLayoutModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbarModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOptionModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipsModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatNativeDateModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinnerModule]; }, exports: function () { return [NgxMatFacetSearchComponent]; } }); })();

/*
 * Public API Surface of ngx-mat-facet-search
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 1585:
/*!*****************************************************************!*\
  !*** ./projects/demo-application/src/app/app-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page-one/page-one.component */ 2148);
/* harmony import */ var _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-two/page-two.component */ 3889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);





const routes = [
    {
        path: '',
        component: _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_0__.PageOneComponent
    },
    {
        path: 'two',
        component: _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_1__.PageTwoComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 3589:
/*!************************************************************!*\
  !*** ./projects/demo-application/src/app/app.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _demo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo.service */ 4786);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 7733);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 1608);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7617);









function AppComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Page One ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Page Two ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(router, demoService) {
        this.router = router;
        this.demoService = demoService;
        this.showPageOne = true;
        this.showPageTwo = true;
        this.currentIdentifier = demoService.currentIdentifier.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(id => ` - ${id}`));
    }
    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                const currentURL = event.url;
                if (currentURL.includes('two')) {
                    this.showPageTwo = false;
                    this.showPageOne = true;
                    console.log('Page Two');
                }
                else {
                    this.showPageOne = false;
                    this.showPageTwo = true;
                    console.log('Page One');
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_demo_service__WEBPACK_IMPORTED_MODULE_0__.DemoService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 5, consts: [[1, "spacer"], ["mat-button", "", "routerLink", "", 4, "ngIf"], ["mat-button", "", "routerLink", "/two", 4, "ngIf"], ["fxLayout", "column"], ["mat-button", "", "routerLink", ""], ["mat-button", "", "routerLink", "/two"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_button_5_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_button_6_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Angular Material Facet Search", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, ctx.currentIdentifier), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPageOne);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPageTwo);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n  .mat-card {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFJRTtFQUNFLDJCQUFBO0FBREoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5cbjo6bmctZGVlcCB7XG4gIC5tYXQtY2FyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 4510:
/*!*********************************************************!*\
  !*** ./projects/demo-application/src/app/app.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 3220);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 1585);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 3589);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 8366);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 9009);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ 1608);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 4699);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 7465);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 7733);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7617);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mat-facet-search */ 1175);
/* harmony import */ var _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-one/page-one.component */ 2148);
/* harmony import */ var _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-two/page-two.component */ 3889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
            ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_7__.NgxMatFacetSearchModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_2__.PageOneComponent,
        _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_3__.PageTwoComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
        ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_7__.NgxMatFacetSearchModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule] }); })();


/***/ }),

/***/ 4786:
/*!***********************************************************!*\
  !*** ./projects/demo-application/src/app/demo.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoService": function() { return /* binding */ DemoService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2741);


class DemoService {
    constructor() {
        this.currentIdentifier = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('default-facet');
    }
    updateIdentifier(identifier) {
        this.currentIdentifier.next(identifier);
    }
}
DemoService.ɵfac = function DemoService_Factory(t) { return new (t || DemoService)(); };
DemoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DemoService, factory: DemoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2148:
/*!********************************************************************************!*\
  !*** ./projects/demo-application/src/app/pages/page-one/page-one.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageOneComponent": function() { return /* binding */ PageOneComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 267);
/* harmony import */ var ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mat-facet-search */ 1175);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7115);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _demo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../demo.service */ 4786);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 9009);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 7465);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ 1608);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 4699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6274);












class PageOneComponent {
    constructor(demoService) {
        this.demoService = demoService;
        this.selectedFacets = [];
        // Settings
        this.chipLabelsEnabled = true;
        this.clearButtonEnabled = true;
        this.confirmOnRemove = true;
        this.testEmptyFilterTypeahead = (text) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([
                { value: '-a', text: ' A' },
                { value: '-b', text: ' B' },
                { value: '-c', text: ' C' }
            ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(values => {
                const filtered = values.filter(value => value.text.includes(text));
                if (filtered.length === 0) {
                    return null;
                }
                return filtered;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(values => console.log('Test empty:', values)));
        };
        this.facets = [
            {
                name: 'userName',
                labelText: 'User Name',
                type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.FacetDataType.Text,
                description: 'Please enter your user name (simple text input example)',
                icon: 'person_outline'
            }, {
                name: 'birthday',
                labelText: 'Birthday',
                icon: 'date_range',
                description: 'Please select your birthday (date select example)',
                type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.FacetDataType.Date,
            },
            {
                name: 'eventDays',
                labelText: 'Event Days',
                icon: 'event_available',
                description: 'Please select start and end dates (date range select example)',
                type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.FacetDataType.DateRange,
            },
            {
                name: 'isParticipant',
                labelText: 'Is a Participant?',
                icon: 'live_help',
                description: 'This is a test field, you can test boolean data type.',
                type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.FacetDataType.Boolean,
            },
            {
                name: 'state',
                labelText: 'State',
                description: 'Please select something (single select, http example)',
                type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.FacetDataType.CategorySingle,
                icon: 'folder_open',
                /* mock http service call  */
                options: (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([
                    { value: 'open', text: 'Open', count: 49 },
                    { value: 'closed', text: 'Closed', count: 23 }
                ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(700))
            },
            {
                name: 'license',
                labelText: 'License(s)',
                description: 'Please select your licenses (multi select, http example)',
                type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.FacetDataType.Category,
                icon: 'drive_eta',
                /* mock http service call  */
                options: (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([
                    { value: 'a', text: 'Class A' },
                    { value: 'b', text: 'Class B' },
                    { value: 'c', text: 'Class C' }
                ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(1200))
            },
            {
                name: 'city',
                labelText: 'Cities',
                description: 'Please select from cities.',
                type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.FacetDataType.Typeahead,
                icon: 'location_city',
                typeahead: {
                    function: (txt) => {
                        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([
                            { value: txt + '-a', text: txt + ' A' },
                            { value: txt + '-b', text: txt + ' B' },
                            { value: txt + '-c', text: txt + ' C' }
                        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(1200));
                    },
                }
            },
            {
                name: 'empty',
                labelText: 'Empty Test',
                description: 'Please select from options.',
                type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.FacetDataType.Typeahead,
                icon: 'clear',
                typeahead: {
                    function: this.testEmptyFilterTypeahead,
                    placeholder: 'Empty'
                }
            }
        ];
    }
    // You can use an event method like this to trigger your filtering logic.
    filterUpdated(facetFilters) {
        this.selectedFacets = facetFilters;
        console.log('filter', facetFilters);
    }
    ngAfterViewInit() {
        this.demoService.updateIdentifier(this.facetSearch.identifier);
    }
}
PageOneComponent.ɵfac = function PageOneComponent_Factory(t) { return new (t || PageOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_demo_service__WEBPACK_IMPORTED_MODULE_0__.DemoService)); };
PageOneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PageOneComponent, selectors: [["app-page-one"]], viewQuery: function PageOneComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.NgxMatFacetSearchComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.facetSearch = _t.first);
    } }, decls: 22, vars: 10, consts: [["placeholder", "Add a filter...", "clearButtonText", "CLEAR FILTERS", 3, "source", "chipLabelsEnabled", "confirmOnRemove", "clearButtonEnabled", "searchUpdated"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutGap", "15px"], ["fxFlex", "none"], ["fxLayout", "column"], [3, "ngModel", "ngModelChange"], ["fxFlex", ""], [2, "font-family", "monospace", "font-size", "small"]], template: function PageOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ngx-mat-facet-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("searchUpdated", function PageOneComponent_Template_ngx_mat_facet_search_searchUpdated_2_listener($event) { return ctx.filterUpdated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PageOneComponent_Template_mat_checkbox_ngModelChange_9_listener($event) { return ctx.chipLabelsEnabled = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Chip labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PageOneComponent_Template_mat_checkbox_ngModelChange_11_listener($event) { return ctx.clearButtonEnabled = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "\"Clear\" Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PageOneComponent_Template_mat_checkbox_ngModelChange_13_listener($event) { return ctx.confirmOnRemove = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Confirmation on remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Output");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "pre", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("source", ctx.facets)("chipLabelsEnabled", ctx.chipLabelsEnabled)("confirmOnRemove", ctx.confirmOnRemove)("clearButtonEnabled", ctx.clearButtonEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.chipLabelsEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.clearButtonEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.confirmOnRemove);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 8, ctx.selectedFacets));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.NgxMatFacetSearchComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.JsonPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW9uZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3889:
/*!********************************************************************************!*\
  !*** ./projects/demo-application/src/app/pages/page-two/page-two.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTwoComponent": function() { return /* binding */ PageTwoComponent; }
/* harmony export */ });
/* harmony import */ var ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mat-facet-search */ 1175);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 267);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8561);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 7115);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 4089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _demo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../demo.service */ 4786);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 9009);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 7465);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ 1608);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 4699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6274);












class PageTwoComponent {
    constructor(demoService) {
        this.demoService = demoService;
        this.selectedFacets = [];
        // Settings
        this.chipLabelsEnabled = true;
        this.clearButtonEnabled = true;
        this.confirmOnRemove = true;
        this.testEmptyFilterTypeahead = (text) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([
                { value: '-a', text: ' A' },
                { value: '-b', text: ' B' },
                { value: '-c', text: ' C' }
            ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(values => {
                const filtered = values.filter(value => value.text.includes(text));
                if (filtered.length === 0) {
                    return null;
                }
                return filtered;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(values => console.log('Test empty:', values)));
        };
        this.facets = [
            {
                name: 'userName',
                labelText: 'User Name',
                type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.FacetDataType.Text,
                description: 'Please enter your user name (simple text input example)',
                icon: 'person_outline'
            }, {
                name: 'birthday',
                labelText: 'Birthday',
                icon: 'date_range',
                description: 'Please select your birthday (date select example)',
                type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.FacetDataType.Date,
            },
            {
                name: 'eventDays',
                labelText: 'Event Days',
                icon: 'event_available',
                description: 'Please select start and end dates (date range select example)',
                type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.FacetDataType.DateRange,
            },
            {
                name: 'isParticipant',
                labelText: 'Is a Participant?',
                icon: 'live_help',
                description: 'This is a test field, you can test boolean data type.',
                type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.FacetDataType.Boolean,
            },
            {
                name: 'state',
                labelText: 'State',
                description: 'Please select something (single select, http example)',
                type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.FacetDataType.CategorySingle,
                icon: 'folder_open',
                /* mock http service call  */
                options: (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([
                    { value: 'open', text: 'Open', count: 49 },
                    { value: 'closed', text: 'Closed', count: 23 }
                ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(700))
            },
            {
                name: 'license',
                labelText: 'License(s)',
                description: 'Please select your licenses (multi select, http example)',
                type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.FacetDataType.Category,
                icon: 'drive_eta',
                /* mock http service call  */
                options: (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([
                    { value: 'a', text: 'Class A' },
                    { value: 'b', text: 'Class B' },
                    { value: 'c', text: 'Class C' }
                ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(1200))
            },
            {
                name: 'city',
                labelText: 'Cities',
                description: 'Please select from cities.',
                type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.FacetDataType.Typeahead,
                icon: 'location_city',
                typeahead: {
                    function: (txt) => {
                        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([
                            { value: txt + '-a', text: txt + ' A' },
                            { value: txt + '-b', text: txt + ' B' },
                            { value: txt + '-c', text: txt + ' C' }
                        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(1200));
                    },
                }
            },
            {
                name: 'empty',
                labelText: 'Empty Test',
                description: 'Please select from options.',
                type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.FacetDataType.Typeahead,
                icon: 'clear',
                typeahead: {
                    function: this.testEmptyFilterTypeahead,
                    placeholder: 'Empty'
                }
            }
        ];
    }
    // You can use an event method like this to trigger your filtering logic.
    filterUpdated(facetFilters) {
        this.selectedFacets = facetFilters;
        console.log('filter', facetFilters);
    }
    ngAfterViewInit() {
        this.demoService.updateIdentifier(this.facetSearch.identifier);
    }
}
PageTwoComponent.ɵfac = function PageTwoComponent_Factory(t) { return new (t || PageTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_demo_service__WEBPACK_IMPORTED_MODULE_0__.DemoService)); };
PageTwoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PageTwoComponent, selectors: [["app-page-two"]], viewQuery: function PageTwoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.NgxMatFacetSearchComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.facetSearch = _t.first);
    } }, decls: 22, vars: 10, consts: [["placeholder", "Add a filter...", "clearButtonText", "CLEAR FILTERS", 3, "source", "chipLabelsEnabled", "confirmOnRemove", "clearButtonEnabled", "searchUpdated"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutGap", "15px"], ["fxFlex", "none"], ["fxLayout", "column"], [3, "ngModel", "ngModelChange"], ["fxFlex", ""], [2, "font-family", "monospace", "font-size", "small"]], template: function PageTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ngx-mat-facet-search", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("searchUpdated", function PageTwoComponent_Template_ngx_mat_facet_search_searchUpdated_2_listener($event) { return ctx.filterUpdated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PageTwoComponent_Template_mat_checkbox_ngModelChange_9_listener($event) { return ctx.chipLabelsEnabled = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Chip labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PageTwoComponent_Template_mat_checkbox_ngModelChange_11_listener($event) { return ctx.clearButtonEnabled = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "\"Clear\" Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function PageTwoComponent_Template_mat_checkbox_ngModelChange_13_listener($event) { return ctx.confirmOnRemove = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Confirmation on remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Output");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "pre", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("source", ctx.facets)("chipLabelsEnabled", ctx.chipLabelsEnabled)("confirmOnRemove", ctx.confirmOnRemove)("clearButtonEnabled", ctx.clearButtonEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.chipLabelsEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.clearButtonEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.confirmOnRemove);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 8, ctx.selectedFacets));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_5__.NgxMatFacetSearchComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.JsonPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXR3by5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2816:
/*!*******************************************************************!*\
  !*** ./projects/demo-application/src/environments/environment.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8853:
/*!***********************************************!*\
  !*** ./projects/demo-application/src/main.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 3220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4510);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2816);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 1854:
/*!*********************************************************************************!*\
  !*** ./projects/demo-application/$_lazy_route_resources/ lazy namespace object ***!
  \*********************************************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 1854;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(8853); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map