(self["webpackChunkngx_material_facet_search"] = self["webpackChunkngx_material_facet_search"] || []).push([["main"],{

/***/ 2415:
/*!********************************************************************!*\
  !*** ./dist/ngx-mat-facet-search/fesm2015/ngx-mat-facet-search.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultFacetModalConfig": function() { return /* binding */ DefaultFacetModalConfig; },
/* harmony export */   "FACET_CONFIG": function() { return /* binding */ FACET_CONFIG; },
/* harmony export */   "FACET_MODAL_DATA": function() { return /* binding */ FACET_MODAL_DATA; },
/* harmony export */   "FacetConfig": function() { return /* binding */ FacetConfig; },
/* harmony export */   "FacetDataType": function() { return /* binding */ FacetDataType; },
/* harmony export */   "FacetFilterType": function() { return /* binding */ FacetFilterType; },
/* harmony export */   "FacetIdentifierStrategy": function() { return /* binding */ FacetIdentifierStrategy; },
/* harmony export */   "FacetResultType": function() { return /* binding */ FacetResultType; },
/* harmony export */   "NgxMatFacetSearchComponent": function() { return /* binding */ NgxMatFacetSearchComponent; },
/* harmony export */   "NgxMatFacetSearchModule": function() { return /* binding */ NgxMatFacetSearchModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/autocomplete */ 1554);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 7519);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 2759);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/animations */ 7238);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 3220);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 1436);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! uuid */ 1319);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/portal */ 7636);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/overlay */ 8203);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/chips */ 8341);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-bar */ 2178);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/a11y */ 9238);













































const _c0 = ["typeAheadInput"];

function FacetDetailsModalComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.description);
  }
}

function FacetDetailsModalComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 19);
  }
}

function FacetDetailsModalComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
  }
}

function FacetDetailsModalComponent_div_14_ng_container_1_mat_selection_list_2_mat_list_option_1_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", item_r16.count, ")");
  }
}

function FacetDetailsModalComponent_div_14_ng_container_1_mat_selection_list_2_mat_list_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FacetDetailsModalComponent_div_14_ng_container_1_mat_selection_list_2_mat_list_option_1_small_3_Template, 3, 1, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const first_r17 = ctx.first;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r16.value)("selected", ctx_r15.isItemSelected(item_r16))("@fadeIn", undefined)("firstElement", first_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r16.text ? ctx_r15.truncateText(item_r16.text) : "- empty -", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16.count);
  }
}

function FacetDetailsModalComponent_div_14_ng_container_1_mat_selection_list_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-selection-list", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FacetDetailsModalComponent_div_14_ng_container_1_mat_selection_list_2_Template_mat_selection_list_selectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const options_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r20.selectionChange($event, ctx_r20.data, options_r13);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FacetDetailsModalComponent_div_14_ng_container_1_mat_selection_list_2_mat_list_option_1_Template, 4, 6, "mat-list-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const options_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", options_r13);
  }
}

function FacetDetailsModalComponent_div_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FacetDetailsModalComponent_div_14_ng_container_1_mat_selection_list_2_Template, 2, 1, "mat-selection-list", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const options_r13 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", options_r13.length > 0)("ngIfElse", _r3);
  }
}

function FacetDetailsModalComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FacetDetailsModalComponent_div_14_ng_container_1_Template, 4, 2, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r5.data.options))("ngIfElse", _r1);
  }
}

function FacetDetailsModalComponent_div_15_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetDetailsModalComponent_div_15_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r27.clearInput();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function FacetDetailsModalComponent_div_15_ng_container_7_mat_selection_list_2_mat_list_option_1_small_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", item_r32.count, ")");
  }
}

function FacetDetailsModalComponent_div_15_ng_container_7_mat_selection_list_2_mat_list_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FacetDetailsModalComponent_div_15_ng_container_7_mat_selection_list_2_mat_list_option_1_small_3_Template, 3, 1, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r32 = ctx.$implicit;
    const first_r33 = ctx.first;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r32.value)("@fadeIn", undefined)("firstElement", first_r33)("selected", ctx_r31.isItemSelected(item_r32));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r32.text ? ctx_r31.truncateText(item_r32.text) : "- empty -", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r32.count);
  }
}

function FacetDetailsModalComponent_div_15_ng_container_7_mat_selection_list_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-selection-list", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FacetDetailsModalComponent_div_15_ng_container_7_mat_selection_list_2_Template_mat_selection_list_selectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);
      const options_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r36.selectionChange($event, ctx_r36.data, options_r29);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FacetDetailsModalComponent_div_15_ng_container_7_mat_selection_list_2_mat_list_option_1_Template, 4, 6, "mat-list-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const options_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", options_r29);
  }
}

function FacetDetailsModalComponent_div_15_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FacetDetailsModalComponent_div_15_ng_container_7_mat_selection_list_2_Template, 2, 1, "mat-selection-list", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const options_r29 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", options_r29.length > 0)("ngIfElse", _r3);
  }
}

const _c1 = function () {
  return {
    placeholder: ""
  };
};

function FacetDetailsModalComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_div_15_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r40.typeaheadText = $event;
    })("ngModelChange", function FacetDetailsModalComponent_div_15_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r42.typeaheadValueChanged($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FacetDetailsModalComponent_div_15_button_6_Template, 3, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FacetDetailsModalComponent_div_15_ng_container_7_Template, 4, 2, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", (ctx_r6.data.typeahead || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1)).placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.typeaheadText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.clearButtonDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx_r6.data.options))("ngIfElse", _r1);
  }
}

function FacetDetailsModalComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_div_16_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r44.setValue(ctx_r44.data, $event);
    })("focus", function FacetDetailsModalComponent_div_16_Template_input_focus_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

      const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r46.isUpdate ? ctx_r46.emptyFunction() : _r43.open();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-datepicker-toggle", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-datepicker", null, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.data.labelText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r43)("ngModel", ctx_r7.getValue(ctx_r7.data));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r43);
  }
}

function FacetDetailsModalComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_div_17_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r49.setValue(ctx_r49.data, $event);
    })("focus", function FacetDetailsModalComponent_div_17_Template_input_focus_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

      const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r51.isUpdate ? ctx_r51.emptyFunction() : _r47.open();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-datepicker-toggle", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-datepicker", null, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_div_17_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r52.setValue(ctx_r52.data, $event, 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-datepicker-toggle", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-datepicker", null, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r8.data.labelText, " - Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r47)("ngModel", ctx_r8.getValue(ctx_r8.data));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r8.data.labelText, " - End");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r48)("ngModel", ctx_r8.getValue(ctx_r8.data, 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r48);
  }
}

function FacetDetailsModalComponent_div_18_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetDetailsModalComponent_div_18_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r54.data.values = undefined;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function FacetDetailsModalComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Criteria Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FacetDetailsModalComponent_div_18_Template_mat_select_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r56.data.fixedFilterType = $event;
      return ctx_r56.setType(ctx_r56.data, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contains");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ends With");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Equals");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Starts With");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Search Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function FacetDetailsModalComponent_div_18_Template_input_keydown_enter_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r58.validateAndSubmit();
    })("ngModelChange", function FacetDetailsModalComponent_div_18_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r59.setValue(ctx_r59.data, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FacetDetailsModalComponent_div_18_button_17_Template, 3, 0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r9.data.fixedFilterType || ctx_r9.getType(ctx_r9.data));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r9.FacetFilterType.contains);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r9.FacetFilterType.endsWith);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r9.FacetFilterType.equal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r9.FacetFilterType.startsWith);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r9.data.placeholder || ctx_r9.data.labelText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.getValue(ctx_r9.data));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.data.values);
  }
}

function FacetDetailsModalComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FacetDetailsModalComponent_div_19_Template_mat_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r60.setValue(ctx_r60.data, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.getValue(ctx_r10.data));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.data.placeholder || ctx_r10.data.labelText);
  }
}

function FacetDetailsModalComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetDetailsModalComponent_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r62.onRemove();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function FacetModalComponent_ng_template_0_Template(rf, ctx) {}

const _c2 = ["filterInput"];

function NgxMatFacetSearchComponent_div_1_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgxMatFacetSearchComponent_div_1_mat_icon_1_Template_mat_icon_mousedown_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r9.clickStarted();
    })("mouseup", function NgxMatFacetSearchComponent_div_1_mat_icon_1_Template_mat_icon_mouseup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r11.clickEnded();
    })("mouseleave", function NgxMatFacetSearchComponent_div_1_mat_icon_1_Template_mat_icon_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r12.clickEnded();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r7.tooltip);
  }
}

function NgxMatFacetSearchComponent_div_1_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgxMatFacetSearchComponent_div_1_mat_icon_2_Template_mat_icon_mousedown_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r13.clickStarted();
    })("mouseup", function NgxMatFacetSearchComponent_div_1_mat_icon_2_Template_mat_icon_mouseup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r15.clickEnded();
    })("mouseleave", function NgxMatFacetSearchComponent_div_1_mat_icon_2_Template_mat_icon_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return ctx_r16.clickEnded();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function NgxMatFacetSearchComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatFacetSearchComponent_div_1_mat_icon_1_Template, 2, 1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxMatFacetSearchComponent_div_1_mat_icon_2_Template, 2, 0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.tooltip !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.tooltip === null);
  }
}

function NgxMatFacetSearchComponent_mat_chip_5_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](facet_r17.icon);
  }
}

function NgxMatFacetSearchComponent_mat_chip_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](facet_r17.labelText + ": \xA0");
  }
}

function NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "csv");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const options_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 5, options_r28, "selected", true), "text", " / "), " ");
  }
}

function NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "csv");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const options_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 5, options_r28, "selected", true), "text", " / "), " ");
  }
}

function NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "csv");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const options_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 5, options_r28, "selected", true), "text", " / "), " ");
  }
}

function NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "csv");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const options_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 5, options_r28, "selected", true), "text", " / "), " ");
  }
}

function NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_div_1_Template, 4, 9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_div_2_Template, 4, 9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_div_3_Template, 4, 9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_div_4_Template, 4, 9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r20.FacetDataType.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r20.FacetDataType.CategorySingle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r20.FacetDataType.Typeahead);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r20.FacetDataType.TypeaheadSingle);
  }
}

function NgxMatFacetSearchComponent_mat_chip_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u201C", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r21.getValue(facet_r17), ctx_r21.dateFormat), "\u201D ");
  }
}

function NgxMatFacetSearchComponent_mat_chip_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" \u201C", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r22.getValue(facet_r17), ctx_r22.dateFormat), "\u201D ~ \u201C", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, ctx_r22.getValue(facet_r17, 1), ctx_r22.dateFormat), "\u201D ");
  }
}

function NgxMatFacetSearchComponent_mat_chip_5_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxMatFacetSearchComponent_mat_chip_5_div_7_Template_mat_checkbox_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r39.setValue(facet_r17, $event.checked);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r23.getValue(facet_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", facet_r17.labelText, " ");
  }
}

function NgxMatFacetSearchComponent_mat_chip_5_span_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u201C..", ctx_r43.getValue(facet_r17), "..\u201D ");
  }
}

function NgxMatFacetSearchComponent_mat_chip_5_span_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u201C", ctx_r44.getValue(facet_r17), "\u201D ");
  }
}

function NgxMatFacetSearchComponent_mat_chip_5_span_8_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u201C", ctx_r45.getValue(facet_r17), "...\u201D ");
  }
}

function NgxMatFacetSearchComponent_mat_chip_5_span_8_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u201C...", ctx_r46.getValue(facet_r17), "\u201D ");
  }
}

function NgxMatFacetSearchComponent_mat_chip_5_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxMatFacetSearchComponent_mat_chip_5_span_8_span_2_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxMatFacetSearchComponent_mat_chip_5_span_8_span_3_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxMatFacetSearchComponent_mat_chip_5_span_8_span_4_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxMatFacetSearchComponent_mat_chip_5_span_8_span_5_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r24.getType(facet_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r24.FacetFilterType.contains);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r24.FacetFilterType.equal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r24.FacetFilterType.startsWith);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r24.FacetFilterType.endsWith);
  }
}

function NgxMatFacetSearchComponent_mat_chip_5_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatFacetSearchComponent_mat_chip_5_mat_icon_9_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);
      const facet_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r52.removeFacet(facet_r17);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function NgxMatFacetSearchComponent_mat_chip_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function NgxMatFacetSearchComponent_mat_chip_5_Template_mat_chip_selectionChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);
      const facet_r17 = restoredCtx.$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r55.chipSelected($event, facet_r17);
    })("click", function NgxMatFacetSearchComponent_mat_chip_5_Template_mat_chip_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);
      const facet_r17 = restoredCtx.$implicit;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r57.selectedFacet = facet_r17;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatFacetSearchComponent_mat_chip_5_mat_icon_1_Template, 2, 1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxMatFacetSearchComponent_mat_chip_5_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxMatFacetSearchComponent_mat_chip_5_ng_container_4_Template, 5, 4, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxMatFacetSearchComponent_mat_chip_5_div_5_Template, 3, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgxMatFacetSearchComponent_mat_chip_5_div_6_Template, 4, 8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgxMatFacetSearchComponent_mat_chip_5_div_7_Template, 3, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgxMatFacetSearchComponent_mat_chip_5_span_8_Template, 6, 5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgxMatFacetSearchComponent_mat_chip_5_mat_icon_9_Template, 2, 0, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const facet_r17 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", facet_r17.labelText + (facet_r17.description ? ": " + facet_r17.description : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@chipAnimation", undefined)("color", facet_r17.readonly ? "accent" : undefined)("selected", facet_r17 === ctx_r2.selectedFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", facet_r17.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.chipLabelsEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", facet_r17.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", facet_r17.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r2.FacetDataType.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r2.FacetDataType.DateRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r2.FacetDataType.Boolean);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r2.FacetDataType.Text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !facet_r17.readonly);
  }
}

function NgxMatFacetSearchComponent_mat_option_13_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const facet_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](facet_r58.icon);
  }
}

function NgxMatFacetSearchComponent_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatFacetSearchComponent_mat_option_13_mat_icon_1_Template, 2, 1, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const facet_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", facet_r58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", facet_r58.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](facet_r58.labelText);
  }
}

function NgxMatFacetSearchComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatFacetSearchComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r61.reset();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.clearButtonText, " ");
  }
}

var FacetDataType;

(function (FacetDataType) {
  FacetDataType["Text"] = "Text"; // eslint-disable-next-line id-blacklist

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

var FacetIdentifierStrategy;

(function (FacetIdentifierStrategy) {
  FacetIdentifierStrategy["WindowURL"] = "windowURL";
  FacetIdentifierStrategy["ParentID"] = "parentID";
  FacetIdentifierStrategy["Random"] = "random";
  FacetIdentifierStrategy["Manual"] = "manual";
})(FacetIdentifierStrategy || (FacetIdentifierStrategy = {}));

class FacetConfig {
  constructor(configuration) {
    this.allowDebugClick = true;
    this.identifierStrategy = FacetIdentifierStrategy.ParentID;

    this.loggingCallback = () => {};

    if (configuration) {
      if (configuration.hasOwnProperty('allowDebugClick')) {
        this.allowDebugClick = configuration.allowDebugClick || false;
      }

      if (configuration.hasOwnProperty('identifierStrategy')) {
        this.identifierStrategy = configuration.identifierStrategy || FacetIdentifierStrategy.ParentID;
      }

      if (configuration.hasOwnProperty('loggingCallback') && !!configuration.loggingCallback) {
        this.loggingCallback = configuration.loggingCallback;
      }
    }
  }

}

var FacetResultType;

(function (FacetResultType) {
  FacetResultType[FacetResultType["REMOVE"] = 0] = "REMOVE";
  FacetResultType[FacetResultType["CANCEL"] = 1] = "CANCEL";
  FacetResultType[FacetResultType["ADD"] = 2] = "ADD";
})(FacetResultType || (FacetResultType = {}));

const FACET_MODAL_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('facet.data');

class FacetModalRef {
  constructor(overlayRef, positionStrategy, config) {
    this.overlayRef = overlayRef;
    this.positionStrategy = positionStrategy;
    this.config = config;
    this.afterClosedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.beforeClosedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this._result = {
      type: FacetResultType.CANCEL
    };

    if (!config.disableClose) {
      this.overlayRef.backdropClick().subscribe(() => {
        this.close(this._result);
      });
      this.overlayRef.detachments().subscribe(() => {
        this.beforeClosedSubject.next(this._result);
        this.beforeClosedSubject.complete();
      });
      this.overlayRef.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event.key === 'Escape')).subscribe(() => {
        this.close();
      });
    }
  }

  close(dialogResult) {
    if (!!dialogResult) {
      this._result = dialogResult;
    }

    this.beforeClosedSubject.next(this._result);
    this.beforeClosedSubject.complete();
    this.afterClosedSubject.next(this._result);
    this.afterClosedSubject.complete();
    this.overlayRef.dispose();
  }

  afterClosed() {
    return this.afterClosedSubject.asObservable();
  }

  beforeClosed() {
    return this.beforeClosedSubject.asObservable();
  }

  positionChanges() {
    return this.positionStrategy.positionChanges;
  }

}

class FocusOnShowDirective {
  constructor(el) {
    this.el = el;
    this.timeout = '0';
    this.firstElement = true;

    if (!el.nativeElement.focus) {
      throw new Error('Element does not accept focus.');
    }
  }

  ngOnInit() {
    if (this.firstElement) {
      setTimeout(() => {
        this.focusInput();
      }, Number(this.timeout) || 0);
    }
  }

  focusInput() {
    const input = this.el.nativeElement;
    input.focus();

    if (this.el.nativeElement.hasOwnProperty('select')) {
      input.select();
    }
  }

}

FocusOnShowDirective.ɵfac = function FocusOnShowDirective_Factory(t) {
  return new (t || FocusOnShowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

FocusOnShowDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: FocusOnShowDirective,
  selectors: [["", "focusOnShow", ""]],
  inputs: {
    timeout: ["focusOnShow", "timeout"],
    firstElement: "firstElement"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusOnShowDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[focusOnShow]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    timeout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['focusOnShow']
    }],
    firstElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

const MAX_TEXT_LENGTH = 60;

class FacetDetailsModalComponent {
  constructor(data, modalRef) {
    this.data = data;
    this.modalRef = modalRef;
    this.clearButtonDisabled = true;
    this.FacetDataType = FacetDataType;
    this.FacetFilterType = FacetFilterType;
    this.typeAheadInputChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');

    this.isItemSelected = option => (this.data.values || []).some(o => o.value === option.value);

    this.addOptionToSelected = (facet, option) => {
      if ((facet.values || []).some(f => f.value === option.value) && (facet.type === FacetDataType.Category || facet.type === FacetDataType.Typeahead)) {
        facet.values = (facet.values || []).filter(f => f.value !== option.value);
      } else {
        option.selected = true;

        switch (facet.type) {
          case FacetDataType.Category:
          case FacetDataType.Typeahead:
            if (facet.values === null || facet.values === undefined) {
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
    }; // @ts-ignore


    this.isUpdateButtonDisabled = () => {
      switch (this.data.type) {
        case FacetDataType.Category:
        case FacetDataType.CategorySingle:
        case FacetDataType.Date:
        case FacetDataType.Text:
        case FacetDataType.Typeahead:
        case FacetDataType.TypeaheadSingle:
          return !(this.data.values || []).some(v => v.value);

        case FacetDataType.DateRange:
          return !this.getValue(this.data) || !this.getValue(this.data, 1);

        case FacetDataType.Boolean:
          return !this.getValue(this.data);
      }
    };

    this.isUpdate = modalRef.config.isUpdate;
  }

  ngOnInit() {
    switch (this.data.type) {
      case FacetDataType.Typeahead:
      case FacetDataType.TypeaheadSingle:
        // Go ahead and run query by default
        if (this.data.typeahead && this.data.typeahead.function) {
          this.data.options = this.data.typeahead.function('');
        }

        break;

      case FacetDataType.Date:
        this.data.values = this.data.values || [{
          type: FacetFilterType.equal
        }];
        break;

      case FacetDataType.DateRange:
        this.data.values = this.data.values || [{
          type: FacetFilterType.startsWith
        }, {
          type: FacetFilterType.endsWith
        }];
        break;

      case FacetDataType.Boolean:
        this.data.values = this.data.values || [{
          type: FacetFilterType.equal
        }];
        break;

      case FacetDataType.Text:
        this.data.values = this.data.values || [{
          type: FacetFilterType.contains,
          value: ''
        }];
        break;

      default:
        this.data.values = this.data.values || [{}];
    }
  }
  /**
   * Setup debounce on the TypeAhead search
   */


  ngAfterViewInit() {
    var _a;

    if (this.typeAheadInputs.length > 0) {
      this.typeAheadInputChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.data.options = undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(((_a = this.data.typeahead) === null || _a === void 0 ? void 0 : _a.debounce) || 300)).subscribe(search => {
        if (!!this.data.typeahead && !!this.data.typeahead.function) {
          this.data.typeahead.function(search || '').subscribe(options => {
            if (!!options) {
              this.data.options = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(options);
            } else {
              this.data.options = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
            }
          });
        }
      });
    }
  }

  typeaheadValueChanged(event) {
    this.typeAheadInputChanged.next(event);
    this.clearButtonDisabled = !event || event.length === 0;
  }

  truncateText(txt) {
    if (txt && txt.length) {
      return txt.length > MAX_TEXT_LENGTH ? `${txt.substring(0, MAX_TEXT_LENGTH).trim()}...` : txt;
    } else {
      return txt;
    }
  }

  onOk() {
    this.modalRef.close({
      type: FacetResultType.ADD,
      data: this.data
    });
  }

  onRemove() {
    this.modalRef.close({
      type: FacetResultType.REMOVE,
      data: this.data
    });
  }

  onCancel() {
    this.modalRef.close({
      type: FacetResultType.CANCEL
    });
  }

  onClose() {
    this.modalRef.close();
  }

  validateAndSubmit() {
    if (!this.isUpdateButtonDisabled()) {
      this.onOk();
    }
  }

  emptyFunction() {}

  clearInput() {
    this.typeaheadText = null;
    this.typeaheadValueChanged(null);
  }

  getValue(facet, offset) {
    if (!!facet && !!facet.values && facet.values.length > 0 && !!facet.values[offset || 0].value) {
      return facet.values[offset || 0].value;
    }

    return null;
  }

  getType(facet, offset) {
    if (!!facet && !!facet.values && facet.values.length > 0 && !!facet.values[offset || 0].type) {
      return facet.values[offset || 0].type;
    }

    return null;
  }

  setValue(facet, newValue, offset) {
    if (!!facet && !!facet.values && facet.values.length > 0 && !!facet.values[offset || 0]) {
      facet.values[offset || 0].value = newValue;
    }
  }

  setType(facet, newType, offset) {
    if (!!facet && !!facet.values && facet.values.length > 0 && !!facet.values[offset || 0].type) {
      facet.values[offset || 0].type = newType;
    }
  }

  selectionChange(selection, facet, options) {
    selection.options.filter(option => option.selected).map(selectedOption => (options || []).find(option => option.value === selectedOption.value)).filter(f => !!f).map(f => f).filter(facetOption => !(facet.values || []).find(v => v === facetOption.value)).forEach(selectedOption => this.addOptionToSelected(facet, selectedOption));
  }

}

FacetDetailsModalComponent.ɵfac = function FacetDetailsModalComponent_Factory(t) {
  return new (t || FacetDetailsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FACET_MODAL_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FacetModalRef));
};

FacetDetailsModalComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FacetDetailsModalComponent,
  selectors: [["ngx-mat-facet-details-modal"]],
  viewQuery: function FacetDetailsModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeAheadInputs = _t);
    }
  },
  decls: 24,
  vars: 13,
  consts: [[1, "mat-typography", "details"], ["color", "primary", 1, "modal-header"], [1, "modal-title"], ["mat-icon-button", "", 1, "modal-close", 3, "click"], [1, "content"], ["class", "description", 4, "ngIf"], ["loading", ""], ["noResults", ""], [3, "ngSwitch"], ["class", "category-wrapper", 4, "ngSwitchCase"], ["class", "typeahead-wrapper", 4, "ngSwitchCase"], ["class", "date-wrapper", 4, "ngSwitchCase"], ["class", "date-range-wrapper", 4, "ngSwitchCase"], ["class", "text-wrapper", 4, "ngSwitchCase"], ["class", "boolean-wrapper", 4, "ngSwitchCase"], [1, "actions"], ["mat-flat-button", "", 1, "add-update-button", 3, "color", "disabled", "click"], ["mat-icon-button", "", "class", "remove-button", "color", "warn", "matTooltip", "Delete Filter", "matTooltipPosition", "after", 3, "click", 4, "ngIf"], [1, "description"], ["diameter", "20"], [1, "facet-no-results"], [1, "category-wrapper"], [4, "ngIf", "ngIfElse"], [3, "selectionChange", 4, "ngIf", "ngIfElse"], [3, "selectionChange"], ["focusOnShow", "", 3, "value", "selected", "firstElement", 4, "ngFor", "ngForOf"], ["focusOnShow", "", 3, "value", "selected", "firstElement"], [4, "ngIf"], [1, "typeahead-wrapper"], ["appearance", "outline", "floatLabel", "never", 1, "typeahead-form-field"], ["matInput", "", "autocomplete", "off", "focusOnShow", "100", 3, "ngModel", "placeholder", "ngModelChange"], ["typeAheadInput", ""], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["focusOnShow", "", 3, "value", "firstElement", "selected", 4, "ngFor", "ngForOf"], ["focusOnShow", "", 3, "value", "firstElement", "selected"], [1, "date-wrapper"], ["appearance", "outline", "floatLabel", "always", 1, "date-field"], ["matInput", "", "autocomplete", "off", "focusOnShow", "100", "placeholder", "Choose a date", 3, "matDatepicker", "ngModel", "ngModelChange", "focus"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "date-range-wrapper"], ["appearance", "outline", "floatLabel", "always"], ["matInput", "", "focusOnShow", "100", "autocomplete", "off", "placeholder", "Choose a starting date", 3, "matDatepicker", "ngModel", "ngModelChange", "focus"], ["startDatePicker", ""], ["matInput", "", "autocomplete", "off", "placeholder", "Choose an end date", 3, "matDatepicker", "ngModel", "ngModelChange"], ["endDatePicker", ""], [1, "text-wrapper"], ["appearance", "outline", 1, "criteria-field"], ["placeholder", "Criteria Type", 3, "value", "valueChange"], [3, "value"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "focusOnShow", "", "autocomplete", "off", "autofocus", "", 3, "ngModel", "placeholder", "keydown.enter", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [1, "boolean-wrapper"], [3, "ngModel", "ngModelChange"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Delete Filter", "matTooltipPosition", "after", 1, "remove-button", 3, "click"]],
  template: function FacetDetailsModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetDetailsModalComponent_Template_button_click_4_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "clear");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FacetDetailsModalComponent_p_8_Template, 2, 1, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FacetDetailsModalComponent_ng_template_9_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FacetDetailsModalComponent_ng_template_11_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FacetDetailsModalComponent_div_14_Template, 3, 4, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FacetDetailsModalComponent_div_15_Template, 9, 8, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FacetDetailsModalComponent_div_16_Template, 8, 4, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FacetDetailsModalComponent_div_17_Template, 15, 8, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FacetDetailsModalComponent_div_18_Template, 18, 8, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FacetDetailsModalComponent_div_19_Template, 3, 2, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacetDetailsModalComponent_Template_button_click_21_listener() {
        return ctx.onOk();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FacetDetailsModalComponent_button_23_Template, 3, 0, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.labelText);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.data.type === ctx.FacetDataType.Category || ctx.data.type === ctx.FacetDataType.CategorySingle);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.data.type === ctx.FacetDataType.Typeahead || ctx.data.type === ctx.FacetDataType.TypeaheadSingle);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.data.type === ctx.FacetDataType.Date);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.data.type === ctx.FacetDataType.DateRange);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.data.type === ctx.FacetDataType.Text);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.data.type === ctx.FacetDataType.Boolean);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.isUpdate ? "accent" : "primary")("disabled", ctx.isUpdateButtonDisabled());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isUpdate ? "Update" : "Add");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUpdate);
    }
  },
  directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitchCase, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatSpinner, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatSelectionList, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListOption, FocusOnShowDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckbox, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  styles: ["mat-spinner[_ngcontent-%COMP%]{margin:1em auto}.details[_ngcontent-%COMP%]{align-items:stretch}.content[_ngcontent-%COMP%], .details[_ngcontent-%COMP%]{display:flex;flex-direction:column}.content[_ngcontent-%COMP%]{min-height:120px;padding-top:22px;align-items:normal}.content[_ngcontent-%COMP%]   mat-selection-list[_ngcontent-%COMP%]{flex:1;max-height:30vh;overflow-y:auto}.actions[_ngcontent-%COMP%]{padding:16px;display:flex;justify-content:space-between;flex-direction:row-reverse}span.facet-no-results[_ngcontent-%COMP%]{text-align:center;color:gray;margin-top:1em;margin-bottom:1em}.mat-selection-list[_ngcontent-%COMP%]{margin-top:0;padding-top:0}.mat-form-field[_ngcontent-%COMP%]{margin:0!important;padding-left:15px;padding-right:15px}.mat-dialog-actions[_ngcontent-%COMP%]{padding:0 15px 15px}.modal-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center!important;border-top-left-radius:8px;border-top-right-radius:8px}.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{height:40px!important;margin:0!important;line-height:45px}p.description[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px;margin-bottom:0;color:gray;flex:1}.date-range-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;justify-content:space-between}.category-wrapper[_ngcontent-%COMP%], .date-range-wrapper[_ngcontent-%COMP%]{margin-top:1em}.boolean-wrapper[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px;flex:4;display:flex;justify-content:flex-start;align-items:center}.text-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:2;margin-top:1rem}.date-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.date-wrapper[_ngcontent-%COMP%]   .date-field[_ngcontent-%COMP%]{flex:1}.typeahead-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;margin-top:1em}.typeahead-wrapper[_ngcontent-%COMP%]   .typeahead-form-field[_ngcontent-%COMP%]{flex:1}"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
      opacity: '0',
      height: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.animate)('.2s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
      opacity: '1',
      height: '*'
    }))])])]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacetDetailsModalComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-mat-facet-details-modal',
      templateUrl: './facet-details-modal.component.html',
      styleUrls: ['./facet-details-modal.component.scss'],
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
        opacity: '0',
        height: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.animate)('.2s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
        opacity: '1',
        height: '*'
      }))])])]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [FACET_MODAL_DATA]
      }]
    }, {
      type: FacetModalRef
    }];
  }, {
    typeAheadInputs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: ['typeAheadInput']
    }]
  });
})();

const FACET_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Facet Configuration', {
  providedIn: 'root',
  factory: () => new FacetConfig()
});

class VCRefInjector {
  constructor(injector) {
    this.raw = injector;
  }

  get parentIdentifier() {
    const parent = this.parent;

    if (!!parent) {
      return parent.tagName.toLowerCase();
    }

    return null;
  }

  get parent() {
    if (!!this.raw && this.raw._lView && this.raw._lView.length > 0) {
      return this.raw._lView[0];
    }

    return null;
  }

}

const chipAnimation = [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.trigger)('chipAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
  transform: 'translateX(0)',
  opacity: 0,
  position: 'absolute'
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
  transform: 'translateX(-100%)',
  opacity: 1,
  position: '*'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.animate)('200ms ease-out')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.transition)('* => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
  position: 'absolute'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.animate)('200ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
  transform: 'translateX(-100%)',
  opacity: 0
}))])])];
const DefaultFacetModalConfig = {
  backdropClass: '',
  disableClose: false,
  panelClass: '',
  isUpdate: false
};
const facetModalAnimations = {
  modalContainer: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.trigger)('modalContainer', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.state)('void, exit', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
    opacity: 0,
    transform: 'scale(0.7)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.state)('enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
    transform: 'none'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.transition)('* => enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
    transform: 'none',
    opacity: 1
  }))), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.transition)('* => void, * => exit', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.animate)('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_22__.style)({
    opacity: 0
  })))])
};

class FacetModalComponent extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__.BasePortalOutlet {
  constructor() {
    super(...arguments);
    this.hostClass = 'facet-modal-component';
    this.state = 'enter';
    this.animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  get animationState() {
    return this.state;
  }

  _onAnimationDone({
    toState,
    totalTime
  }) {
    if (toState === 'enter') {
      this.animationStateChanged.next({
        state: 'opened',
        totalTime
      });
    } else if (toState === 'exit') {
      this.animationStateChanged.next({
        state: 'closed',
        totalTime
      });
    }
  }

  _onAnimationStart({
    toState,
    totalTime
  }) {
    if (toState === 'enter') {
      this.animationStateChanged.next({
        state: 'opening',
        totalTime
      });
    } else if (toState === 'exit' || toState === 'void') {
      this.animationStateChanged.next({
        state: 'closing',
        totalTime
      });
    }
  }

  attachComponentPortal(componentPortal) {
    return this.portalOutlet.attachComponentPortal(componentPortal);
  }

  attachTemplatePortal(portal) {
    throw new Error('Method not implemented.');
  }

  _startExitAnimation() {
    this.state = 'exit';
  }

}

FacetModalComponent.ɵfac = /* @__PURE__ */function () {
  let ɵFacetModalComponent_BaseFactory;
  return function FacetModalComponent_Factory(t) {
    return (ɵFacetModalComponent_BaseFactory || (ɵFacetModalComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FacetModalComponent)))(t || FacetModalComponent);
  };
}();

FacetModalComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FacetModalComponent,
  selectors: [["ngx-facet-modal"]],
  viewQuery: function FacetModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__.CdkPortalOutlet, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.portalOutlet = _t.first);
    }
  },
  hostVars: 3,
  hostBindings: function FacetModalComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostListener"]("@modalContainer.done", function FacetModalComponent_animation_modalContainer_done_HostBindingHandler($event) {
        return ctx._onAnimationDone($event);
      })("@modalContainer.start", function FacetModalComponent_animation_modalContainer_start_HostBindingHandler($event) {
        return ctx._onAnimationStart($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@modalContainer", ctx.animationState);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.hostClass);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 0,
  consts: [["cdkPortalOutlet", ""], [1, "arrow"]],
  template: function FacetModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FacetModalComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
    }
  },
  directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__.CdkPortalOutlet],
  styles: ["[_nghost-%COMP%]{position:relative;background:#fff;border-radius:8px;min-width:300px}.arrow[_ngcontent-%COMP%]{position:absolute;z-index:-1;width:20px;height:20px;top:-10px;left:24px;border-radius:4px;transform-origin:top left;transform:rotate(45deg)}"],
  data: {
    animation: [facetModalAnimations.modalContainer]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacetModalComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-facet-modal',
      templateUrl: './facet-modal.component.html',
      styleUrls: ['./facet-modal.component.scss'],
      animations: [facetModalAnimations.modalContainer]
    }]
  }], null, {
    portalOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__.CdkPortalOutlet, {
        static: true
      }]
    }],
    hostClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class']
    }],
    animationState: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['@modalContainer']
    }],
    _onAnimationDone: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['@modalContainer.done', ['$event']]
    }],
    _onAnimationStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['@modalContainer.start', ['$event']]
    }]
  });
})();

class FacetModalService {
  constructor(overlay, injector) {
    this.overlay = overlay;
    this.injector = injector;
  }

  open(component, target, config = {}) {
    const facetModalConfig = Object.assign({}, DefaultFacetModalConfig, config);
    const offsetY = facetModalConfig.offsetY || 0;
    const offsetX = facetModalConfig.offsetX || 0;
    const positionStrategy = this.overlay.position().flexibleConnectedTo(target).withPush(false).withFlexibleDimensions(true).withPositions([{
      overlayX: 'start',
      overlayY: 'top',
      originX: 'start',
      originY: 'center',
      offsetX,
      offsetY
    }]);
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.block()
    });
    const modalRef = new FacetModalRef(overlayRef, positionStrategy, facetModalConfig);
    const injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
      providers: [{
        provide: FACET_MODAL_DATA,
        useValue: config.data
      }, {
        provide: FacetModalRef,
        useValue: modalRef
      }],
      parent: this.injector
    });
    const modal = overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__.ComponentPortal(FacetModalComponent, null, injector)).instance;
    modal.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__.ComponentPortal(component, null, injector));
    return modalRef;
  }

}

FacetModalService.ɵfac = function FacetModalService_Factory(t) {
  return new (t || FacetModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
};

FacetModalService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FacetModalService,
  factory: FacetModalService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacetModalService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }];
  }, null);
})();

class FacetStorageService {
  constructor() {
    this.useLocalStorage = false;

    this.loggingCallback = () => {};
  }
  /**
   * Update the loggingCallback function
   */


  updateLoggingCallback(loggingCallback) {
    this.loggingCallback = loggingCallback;
  }
  /**
   * Saves the selected facets to localStorage for our current identifier
   */


  updateSavedFacets(identifier, selectedFacets) {
    if (!identifier) {
      this.loggingCallback(`Cannot update ${this.mode}, no ID set`);
      return;
    }

    this.loggingCallback(`Saving facets in ${this.mode} for component with ID`, identifier);

    if (this.useLocalStorage) {
      localStorage.setItem(identifier, JSON.stringify(selectedFacets));
    } else {
      sessionStorage.setItem(identifier, JSON.stringify(selectedFacets));
    }
  }
  /**
   * Clears previously saved facets for this specific component
   */


  clearStorage(identifier) {
    if (!identifier) {
      return;
    }

    this.loggingCallback(`Clearing ${this.mode} for ID`, identifier);

    if (this.useLocalStorage) {
      localStorage.removeItem(identifier);
    } else {
      sessionStorage.removeItem(identifier);
    }
  }
  /**
   * Loads facets from storage for our current identifier
   */


  loadFacetsFromStorage(identifier) {
    let sessionFacets = [];

    if (!!identifier && !this.checkStorage(identifier)) {
      if (this.useLocalStorage) {
        sessionFacets = JSON.parse(localStorage.getItem(identifier) || '');
      } else {
        sessionFacets = JSON.parse(sessionStorage.getItem(identifier) || '');
      }

      sessionFacets = sessionFacets || [];
      this.loggingCallback('Loaded facets for component with ID', identifier, sessionFacets);
    } else if (!identifier) {
      this.loggingCallback('No identifier set on this component');
    } else if (this.checkStorage(identifier)) {
      this.loggingCallback(`No ${this.mode} variable set for component with ID`, identifier, localStorage.getItem(identifier));
    }

    return sessionFacets;
  }

  get mode() {
    return this.useLocalStorage ? 'localStorage' : 'sessionStorage';
  }

  checkStorage(key) {
    if (this.useLocalStorage) {
      return !localStorage.getItem(key);
    } else {
      return !sessionStorage.getItem(key);
    }
  }

}

FacetStorageService.ɵfac = function FacetStorageService_Factory(t) {
  return new (t || FacetStorageService)();
};

FacetStorageService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FacetStorageService,
  factory: FacetStorageService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacetStorageService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class CSVPipe {
  transform(value, objectKeyName, separator) {
    return value.map(e => objectKeyName ? e[objectKeyName] : e).join(separator || ',');
  }

}

CSVPipe.ɵfac = function CSVPipe_Factory(t) {
  return new (t || CSVPipe)();
};

CSVPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "csv",
  type: CSVPipe,
  pure: false
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CSVPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'csv',
      pure: false
    }]
  }], null, null);
})();

class FilterPipe {
  transform(objectArray, fieldName, fieldValue) {
    return objectArray.filter(obj => obj[fieldName] === fieldValue);
  }

}

FilterPipe.ɵfac = function FilterPipe_Factory(t) {
  return new (t || FilterPipe)();
};

FilterPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filter",
  type: FilterPipe,
  pure: false
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'filter',
      pure: false
    }]
  }], null, null);
})();

class NgxMatFacetSearchComponent {
  constructor(configuration, modal, storageService, vcRef) {
    this.modal = modal;
    this.storageService = storageService;
    this.vcRef = vcRef;
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
    this.selectedFacets = [];
    this.availableFacets = [];
    this.filteredFacets = [];
    this.FacetDataType = FacetDataType;
    this.FacetFilterType = FacetFilterType;
    this.allowDebugClick = false;
    this.sourceFacets = [];

    this.loggingCallback = () => {};

    this.injectorRef = new VCRefInjector(this.vcRef.injector);
    this.searchUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.reconfigure(configuration);
    this.searchUpdated.subscribe(facets => {
      this.loggingCallback('Facet(s) updated', facets);
    });
  }

  set source(facets) {
    if (!!facets && facets.length > 0) {
      this.sourceFacets = facets;
      this.selectedFacets = this.selectedFacets.filter(s => facets.some(f => f.name === s.name));
      this.availableFacets = facets.map(f => Object.assign({}, f)).filter(f => !this.selectedFacets.some(s => s.name === f.name));
      this.filteredFacets = this.availableFacets;
      this.updateSelectedFacets();
    }
  }

  static getFixedURL() {
    return window.location.pathname.toString().replace(/\s+/g, '-').replace(/\//g, '-').replace(/^-/g, '').replace(/--/g, '-');
  }

  ngOnInit() {
    if (!this.identifier) {
      this.generateIdentity();
    } else {
      this.updateSelectedFacets();
    }
  }

  ngAfterViewInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.fromEvent)(this.filterInput.nativeElement, 'keyup').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(150), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.map)(() => this.filterInput.nativeElement.value)).subscribe(filterText => {
      if (!!filterText && filterText.length > 0) {
        this.filteredFacets = this.availableFacets.filter(f => !!f && !!f.name && f.name.toLowerCase().includes(filterText.toLowerCase()));
      } else {
        this.filteredFacets = this.availableFacets;
      }
    });

    if (this.selectedFacets.length > 0) {
      this.emitSelectedEvent();
    }
  }

  chipSelected(event, facet) {
    if (event.selected && !facet.readonly) {
      const elementRef = event.source._elementRef.nativeElement;
      this.facetSelected(facet, {
        top: elementRef.clientHeight - 5,
        left: -3
      }, true, elementRef);
    }
  }

  autoCompleteDisplay(_) {
    return null;
  }

  autoCompleteSelected(event) {
    const selectedFacet = event.option.value;

    const parentElement = event.option._getHostElement().parentElement;

    if (!!parentElement) {
      const elementRef = parentElement.getBoundingClientRect();
      const top = elementRef.top - 3;
      const left = elementRef.left;
      this.facetSelected(selectedFacet, {
        top,
        left
      }, false, event.option._getHostElement());
    }
  }

  facetSelected(facet, position, isUpdate, target) {
    this.promptFacet(Object.assign({}, facet), position, isUpdate, target);
  }

  promptFacet(facet, position, isUpdate, target) {
    this.filteredFacets = this.availableFacets;
    const facetDetailsModal = this.modal.open(FacetDetailsModalComponent, target, {
      data: facet,
      offsetY: position.top,
      offsetX: position.left,
      isUpdate
    });
    facetDetailsModal.beforeClosed().subscribe(() => {
      this.selectedFacet = undefined;
    });
    facetDetailsModal.afterClosed().subscribe(result => {
      if (result.type === FacetResultType.REMOVE) {
        this.removeFacet(result.data);
      } else if (result.type === FacetResultType.ADD) {
        this.addOrUpdateFacet(result.data);
      }
    });
  }

  addOrUpdateFacet(facet) {
    const index = this.selectedFacets.findIndex(f => f.name === facet.name);

    if (index > -1) {
      this.selectedFacets[index] = facet;
    } else {
      this.selectedFacets.push(facet);
    }

    this.emitSelectedEvent();
    this.storageService.updateSavedFacets(this.identifier, this.selectedFacets);
  }

  removeFacet(facet) {
    if (!this.confirmOnRemove || this.confirmOnRemove && confirm('Do you really want to remove "' + facet.labelText + '" filter?')) {
      this.selectedFacets = this.selectedFacets.filter(f => f.name !== facet.name);
      this.emitSelectedEvent();
      this.storageService.updateSavedFacets(this.identifier, this.selectedFacets);
      return true;
    }

    return false;
  }

  updateSelectedFacets() {
    this.loggingCallback('Updating selected facets:', this.selectedFacets);
    this.sourceFacets.filter(facet => facet && facet.values && Array.isArray(facet.values)).forEach(facet => this.selectedFacets.push(facet));
    this.selectedFacets = this.storageService.loadFacetsFromStorage(this.identifier).filter(facet => this.availableFacets.findIndex(f => f.name === facet.name) > -1).map(facet => {
      const availableFacet = this.availableFacets.find(f => f.name === facet.name);

      if (!!availableFacet) {
        availableFacet.values = facet.values;
      }

      return availableFacet;
    }).filter(facet => !!facet);

    if (this.selectedFacets.length > 0) {
      this.emitSelectedEvent();
    }
  }

  updateAvailableFacets() {
    this.availableFacets = this.sourceFacets.map(f => Object.assign({}, f)).filter(f => !this.selectedFacets.some(s => s.name === f.name));
    this.filteredFacets = this.availableFacets;
  }

  reset() {
    this.selectedFacets = this.sourceFacets.filter(facet => facet.readonly === true);
    this.emitSelectedEvent();
    this.storageService.clearStorage(this.identifier);
  }

  emitSelectedEvent() {
    this.updateAvailableFacets();
    this.searchUpdated.next(this.selectedFacets.map(facet => ({
      name: facet.name,
      labelText: facet.labelText,
      type: facet.type,
      values: (facet.values || []).map(val => ({
        value: val.value,
        labelText: val.text,
        type: val.type,
        active: true
      }))
    })));
  }

  focus(event) {
    event.stopPropagation();
    this.inputAutoComplete.openPanel();
  }
  /**
   * Update the identity of this Facet Search Component
   * This function does NOT reload/re-fetch previously saved facets from localStorage
   *
   * @param identifier - new identifier for the component
   */


  identify(identifier) {
    this.loggingCallback(`Identifying facet with ID: ${identifier}`);

    if (!identifier || identifier.length === 0 || identifier === '-') {
      this.identifier = 'default-facet';
    } else {
      this.identifier = `${identifier}-facet`;
    }
  }
  /**
   * Returns the FacetIdentifierStrategy currently being used for identity generation
   */


  getIdentifierStrategy() {
    return this.identifierStrategy;
  }
  /**
   * Prints this component's identity to console
   */


  printIdentity() {
    console.log(this.identifier);
    this.updateAvailableFacets();
  } /// DEBUG - Long Click Filter Icon


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
  /**
   * Reconfigure this Facet Search Component
   * This function will reload the previously saved facets from localStorage if they exist
   *
   * @param configuration - Partial FacetConfig
   * @param identity - Optional identity parameter if you want to override or provide a manual value
   */


  reconfigure(configuration, identity) {
    if (!!configuration) {
      if (configuration.hasOwnProperty('allowDebugClick')) {
        this.allowDebugClick = configuration.allowDebugClick || false;
      }

      if (configuration.hasOwnProperty('identifierStrategy')) {
        this.identifierStrategy = configuration.identifierStrategy || FacetIdentifierStrategy.ParentID;
      }

      if (configuration.hasOwnProperty('loggingCallback') && !!configuration.loggingCallback) {
        this.loggingCallback = configuration.loggingCallback;
      }
    }

    this.generateIdentity(identity);
    this.loggingCallback('Reconfigured', this.identifier);
    this.storageService.updateLoggingCallback(this.loggingCallback);
  }

  getValue(facet, offset) {
    if (!!facet && !!facet.values && facet.values.length > 0 && !!facet.values[offset || 0].value) {
      return facet.values[offset || 0].value;
    }

    return null;
  }

  getType(facet, offset) {
    if (!!facet && !!facet.values && facet.values.length > 0 && !!facet.values[offset || 0].type) {
      return facet.values[offset || 0].type;
    }

    return null;
  }

  setValue(facet, newValue, offset) {
    if (!!facet && !!facet.values && facet.values.length > 0 && !!facet.values[offset || 0]) {
      facet.values[offset || 0].value = newValue;
    }
  }
  /**
   * Generates an identity for a Facet Search Component
   *
   * @param manual - manually set the identifier
   * @private
   */


  generateIdentity(manual) {
    let identity;
    this.loggingCallback('Generating ID with strategy', this.identifierStrategy);

    switch (this.identifierStrategy) {
      case FacetIdentifierStrategy.WindowURL:
        identity = NgxMatFacetSearchComponent.getFixedURL();
        break;

      case FacetIdentifierStrategy.ParentID:
        identity = this.injectorRef.parentIdentifier;
        break;

      case FacetIdentifierStrategy.Random:
        identity = (0,uuid__WEBPACK_IMPORTED_MODULE_28__.default)();
        break;

      default:
        identity = manual;
        break;
    }

    this.identify(identity);
  }

}

NgxMatFacetSearchComponent.ɵfac = function NgxMatFacetSearchComponent_Factory(t) {
  return new (t || NgxMatFacetSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FACET_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FacetModalService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FacetStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
};

NgxMatFacetSearchComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxMatFacetSearchComponent,
  selectors: [["ngx-mat-facet-search"]],
  viewQuery: function NgxMatFacetSearchComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filterInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputAutoComplete = _t.first);
    }
  },
  inputs: {
    placeholder: "placeholder",
    clearButtonText: "clearButtonText",
    clearButtonEnabled: "clearButtonEnabled",
    dateFormat: "dateFormat",
    tooltip: "tooltip",
    displayFilterIcon: "displayFilterIcon",
    facetWidth: "facetWidth",
    facetHasBackdrop: "facetHasBackdrop",
    confirmOnRemove: "confirmOnRemove",
    chipLabelsEnabled: "chipLabelsEnabled",
    identifier: "identifier",
    source: "source"
  },
  outputs: {
    searchUpdated: "searchUpdated"
  },
  decls: 15,
  vars: 11,
  consts: [[1, "main-facet-wrapper"], ["class", "icon-wrapper", 4, "ngIf"], [1, "content-wrapper"], [3, "multiple"], ["chipList", ""], ["class", "facet-chip", "matTooltipShowDelay", "1000", 3, "color", "selected", "matTooltip", "selectionChange", "click", 4, "ngFor", "ngForOf"], ["disableRipple", "", "disabled", "", 1, "filter-input-container"], [1, "add-icon", 3, "click"], [1, "filter-input", 3, "matChipInputFor", "placeholder", "matChipInputAddOnBlur", "matAutocomplete"], ["filterInput", ""], ["panelWidth", "250px", 1, "mat-facet-autocomplete", 3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "accent", 3, "click", 4, "ngIf"], [1, "icon-wrapper"], ["class", "filter-list-icon", 3, "matTooltip", "mousedown", "mouseup", "mouseleave", 4, "ngIf"], ["class", "filter-list-icon", 3, "mousedown", "mouseup", "mouseleave", 4, "ngIf"], [1, "filter-list-icon", 3, "matTooltip", "mousedown", "mouseup", "mouseleave"], [1, "filter-list-icon", 3, "mousedown", "mouseup", "mouseleave"], ["matTooltipShowDelay", "1000", 1, "facet-chip", 3, "color", "selected", "matTooltip", "selectionChange", "click"], ["class", "inline-chip-icon", 4, "ngIf"], [4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["matChipRemove", "", 3, "click", 4, "ngIf"], [1, "inline-chip-icon"], [1, "inline-chip-checkbox", 3, "disabled", "ngModel", "ngModelChange"], ["matChipRemove", "", 3, "click"], [3, "value"], ["mat-button", "", "color", "accent", 3, "click"]],
  template: function NgxMatFacetSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxMatFacetSearchComponent_div_1_Template, 3, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-chip-list", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxMatFacetSearchComponent_mat_chip_5_Template, 10, 13, "mat-chip", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-chip", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxMatFacetSearchComponent_Template_mat_icon_click_7_listener($event) {
        return ctx.focus($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-autocomplete", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function NgxMatFacetSearchComponent_Template_mat_autocomplete_optionSelected_11_listener($event) {
        return ctx.autoCompleteSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgxMatFacetSearchComponent_mat_option_13_Template, 4, 3, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NgxMatFacetSearchComponent_button_14_Template, 2, 1, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayFilterIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedFacets);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@chipAnimation", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matChipInputFor", _r1)("placeholder", ctx.placeholder)("matChipInputAddOnBlur", false)("matAutocomplete", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.autoCompleteDisplay);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredFacets);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clearButtonEnabled && ctx.selectedFacets.length > 0);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocomplete, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitchCase, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipRemove, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton],
  pipes: [CSVPipe, FilterPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  styles: ["*[_ngcontent-%COMP%]{outline:0}.filter-input-container[_ngcontent-%COMP%]{background-color:transparent!important;opacity:1!important;box-shadow:none!important}.filter-input-container[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]{border:none!important;background:none!important;width:85px;font-size:14px!important;font-weight:400;flex:0;caret-color:transparent;text-align:right}[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(0,0,0,.86);opacity:1}[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(0,0,0,.86);opacity:1}[_ngcontent-%COMP%]::placeholder{color:rgba(0,0,0,.86);opacity:1}.inline-chip-icon[_ngcontent-%COMP%]{width:18px;height:18px;font-size:18px;margin-right:7px;margin-left:0}[_nghost-%COMP%]   .mat-checkbox-inner-container[_ngcontent-%COMP%]{transform:scale(.7)}.inlineChipCheckbox[_nghost-%COMP%]   label.mat-checkbox-layout[_ngcontent-%COMP%]   div.mat-checkbox-inner-container[_ngcontent-%COMP%], .inlineChipCheckbox   [_nghost-%COMP%]   label.mat-checkbox-layout[_ngcontent-%COMP%]   div.mat-checkbox-inner-container[_ngcontent-%COMP%]{transform:scale(.7)}.add-icon[_ngcontent-%COMP%]:hover, .filter-input-container[_ngcontent-%COMP%]:hover{cursor:pointer}.main-facet-wrapper[_ngcontent-%COMP%]{min-height:36px;display:flex;align-items:center}.main-facet-wrapper[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:center;align-items:center;margin-right:20px}  .mat-autocomplete-panel.mat-autocomplete-visible{left:-40px!important;top:15px!important}  .mat-chip-list-wrapper{transition:width .3s ease-in-out}.content-wrapper[_ngcontent-%COMP%]{flex:1}"],
  data: {
    animation: [chipAnimation]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatFacetSearchComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-mat-facet-search',
      templateUrl: 'ngx-mat-facet-search.component.html',
      styleUrls: ['./ngx-mat-facet-search.component.scss'],
      animations: [chipAnimation]
    }]
  }], function () {
    return [{
      type: FacetConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [FACET_CONFIG]
      }]
    }, {
      type: FacetModalService
    }, {
      type: FacetStorageService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }];
  }, {
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearButtonText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearButtonEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateFormat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayFilterIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    facetWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    facetHasBackdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    confirmOnRemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    chipLabelsEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    identifier: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    source: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    searchUpdated: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    filterInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['filterInput']
    }],
    inputAutoComplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger, {
        read: _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger
      }]
    }]
  });
})();

class KeysPipe {
  transform(value) {
    return Object.keys(value).map(k => ({
      key: k,
      value: k
    }));
  }

}

KeysPipe.ɵfac = function KeysPipe_Factory(t) {
  return new (t || KeysPipe)();
};

KeysPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "keys",
  type: KeysPipe,
  pure: false
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'keys',
      pure: false
    }]
  }], null, null);
})();

class NgxMatFacetSearchModule {}

NgxMatFacetSearchModule.ɵfac = function NgxMatFacetSearchModule_Factory(t) {
  return new (t || NgxMatFacetSearchModule)();
};

NgxMatFacetSearchModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxMatFacetSearchModule
});
NgxMatFacetSearchModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_31__.A11yModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__.MatProgressBarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOptionModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipsModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatNativeDateModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__.PortalModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMatFacetSearchModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_31__.A11yModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_32__.MatProgressBarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOptionModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipsModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatNativeDateModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_23__.PortalModule],
      declarations: [CSVPipe, FilterPipe, KeysPipe, NgxMatFacetSearchComponent, FacetDetailsModalComponent, FacetModalComponent, FocusOnShowDirective],
      exports: [NgxMatFacetSearchComponent],
      entryComponents: [FacetDetailsModalComponent]
    }]
  }], null, null);
})();
/*
 * Public API Surface of ngx-mat-facet-search
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 906:
/*!*****************************************************************!*\
  !*** ./projects/demo-application/src/app/app-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page-one/page-one.component */ 9944);
/* harmony import */ var _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-two/page-two.component */ 1473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





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
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 9361:
/*!************************************************************!*\
  !*** ./projects/demo-application/src/app/app.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-mat-facet-search */ 2415);
/* harmony import */ var _ngx_mat_facet_search_package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ngx-mat-facet-search/package.json */ 5591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 5618);








class AppComponent {
    constructor(router) {
        this.router = router;
        this.showPageOne = true;
        this.showPageTwo = true;
        this.version = _ngx_mat_facet_search_package_json__WEBPACK_IMPORTED_MODULE_0__.version;
        this.repo = _ngx_mat_facet_search_package_json__WEBPACK_IMPORTED_MODULE_0__.repository;
    }
    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
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
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            {
                provide: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.FACET_CONFIG, useFactory: () => new ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.FacetConfig({
                    loggingCallback: (...args) => {
                        console.log(...args);
                    },
                    identifierStrategy: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.FacetIdentifierStrategy.ParentID
                })
            }
        ])], decls: 13, vars: 4, consts: [[1, "spacer"], ["mat-button", "", "routerLink", "", 3, "color"], ["mat-button", "", "routerLink", "/two", 3, "color"], ["target", "_blank", "mat-stroked-button", "", 3, "href"], ["fxLayout", "column", 1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Page One ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Page Two ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "View on GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Angular Material Facet Search: v", ctx.version, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx.showPageTwo ? "primary" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx.showPageOne ? "primary" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.repo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n  .mat-card {\n  box-shadow: none !important;\n}\n\n[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFJRTtFQUNFLDJCQUFBO0FBREo7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRkY7O0FBTUE7RUFDRSxjQUFBO0FBSEYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5cbjo6bmctZGVlcCB7XG4gIC5tYXQtY2FyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cblxuLmNvbnRhaW5lciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 2124:
/*!*********************************************************!*\
  !*** ./projects/demo-application/src/app/app.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 906);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 9361);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ 5618);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mat-facet-search */ 2415);
/* harmony import */ var _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-one/page-one.component */ 9944);
/* harmony import */ var _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-two/page-two.component */ 1473);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/settings/settings.component */ 2869);
/* harmony import */ var _components_output_output_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/output/output.component */ 9479);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 1436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_9__.NgxMatFacetSearchModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDividerModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_2__.PageOneComponent,
        _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_3__.PageTwoComponent,
        _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__.SettingsComponent,
        _components_output_output_component__WEBPACK_IMPORTED_MODULE_5__.OutputComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_9__.NgxMatFacetSearchModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDividerModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule] }); })();


/***/ }),

/***/ 8574:
/*!*************************************************************!*\
  !*** ./projects/demo-application/src/app/common.helpers.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testEmptyFilterTypeahead": function() { return /* binding */ testEmptyFilterTypeahead; },
/* harmony export */   "lotsOfValuesTypeAhead": function() { return /* binding */ lotsOfValuesTypeAhead; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5792);


const testEmptyFilterTypeahead = (text) => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)([
    { value: '-a', text: ' A' },
    { value: '-b', text: ' B' },
    { value: '-c', text: ' C' }
]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(values => {
    const filtered = values.filter(value => !!value.text && value.text.includes(text));
    if (filtered.length === 0) {
        return null;
    }
    return filtered;
}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delay)(300));
const randomValueArray = [...new Set(Array.from({ length: 40 }, () => Math.floor(Math.random() * 40)).map(num => ({
        value: `${num}`,
        text: `${num}`
    })))];
const lotsOfValuesTypeAhead = (text) => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(randomValueArray).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(values => {
    const filtered = values.filter(value => {
        if (text.length > 0) {
            return !!value.text && value.text.includes(text);
        }
        return true;
    });
    if (filtered.length === 0) {
        return null;
    }
    return filtered;
}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delay)(300));


/***/ }),

/***/ 9479:
/*!*********************************************************************************!*\
  !*** ./projects/demo-application/src/app/components/output/output.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutputComponent": function() { return /* binding */ OutputComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ 5618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);




class OutputComponent {
    constructor() {
        this.selectedFacets = [];
    }
    ngOnInit() {
    }
    filterUpdated(facetFilters) {
        this.selectedFacets = facetFilters;
        console.log('filter', facetFilters);
    }
}
OutputComponent.ɵfac = function OutputComponent_Factory(t) { return new (t || OutputComponent)(); };
OutputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputComponent, selectors: [["app-output"]], decls: 7, vars: 3, consts: [["fxFlex", ""]], template: function OutputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Output");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx.selectedFacets));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardContent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe], styles: ["[_nghost-%COMP%] {\n  flex: 3;\n}\n\npre[_ngcontent-%COMP%] {\n  background: black;\n  color: white;\n  padding: 1em;\n  border-radius: 5px;\n  font-family: monospace;\n  font-size: small;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91dHB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJvdXRwdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXg6IDM7XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTptb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTpzbWFsbDtcbn1cblxuLm1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuIl19 */"] });


/***/ }),

/***/ 2869:
/*!*************************************************************************************!*\
  !*** ./projects/demo-application/src/app/components/settings/settings.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": function() { return /* binding */ SettingsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-mat-facet-search */ 2415);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5792);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _common_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common.helpers */ 8574);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 5618);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 1436);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 3166);


















function SettingsComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const strategy_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", strategy_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.displayStrategy(strategy_r2), " ");
  }
}

function SettingsComponent_mat_form_field_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Manual Identifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_mat_form_field_19_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r4.manualIdentifier = $event;
    })("change", function SettingsComponent_mat_form_field_19_Template_input_change_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r6.manualIdentifierUpdated.next(_r3.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.manualIdentifier);
  }
}

class SettingsComponent {
  constructor() {
    this.strategyUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(true);
    this.manualIdentifierUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(true);
    this.facetsUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(true);
    this.currentIdentifier = ''; // Settings

    this.chipLabelsEnabled = true;
    this.clearButtonEnabled = true;
    this.confirmOnRemove = true;
    this.isUsingSetB = true;
    this.allStrategies = [];
    this.showManualInput = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    this.manualIdentifier = '';
    this.facets = [];
    this.allFacets = [{
      name: 'userName',
      labelText: 'User Name',
      type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.FacetDataType.Text,
      description: 'Please enter your user name (simple text input example)',
      icon: 'person_outline'
    }, {
      name: 'birthday',
      labelText: 'Birthday',
      icon: 'date_range',
      description: 'Please select your birthday (date select example)',
      type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.FacetDataType.Date
    }, {
      name: 'eventDays',
      labelText: 'Event Days',
      icon: 'event_available',
      description: 'Please select start and end dates (date range select example)',
      type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.FacetDataType.DateRange
    }, {
      name: 'isParticipant',
      labelText: 'Is a Participant?',
      icon: 'live_help',
      description: 'This is a test field, you can test boolean data type.',
      type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.FacetDataType.Boolean
    }, {
      name: 'state',
      labelText: 'State',
      description: 'Please select something (single select, http example)',
      type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.FacetDataType.CategorySingle,
      icon: 'folder_open',

      /* mock http service call  */
      options: (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([{
        value: 'open',
        text: 'Open',
        count: 49
      }, {
        value: 'closed',
        text: 'Closed',
        count: 23
      }]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(700))
    }, {
      name: 'license',
      labelText: 'License(s)',
      description: 'Please select your licenses (multi select, http example)',
      type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.FacetDataType.Category,
      icon: 'drive_eta',

      /* mock http service call  */
      options: (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([{
        value: 'a',
        text: 'Class A'
      }, {
        value: 'b',
        text: 'Class B'
      }, {
        value: 'c',
        text: 'Class C'
      }]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(1200))
    }, {
      name: 'city',
      labelText: 'Cities',
      description: 'Please select from cities.',
      type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.FacetDataType.Typeahead,
      icon: 'location_city',
      typeahead: {
        function: txt => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([{
          value: txt + '-a',
          text: txt + ' A'
        }, {
          value: txt + '-b',
          text: txt + ' B'
        }, {
          value: txt + '-c',
          text: txt + ' C'
        }]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(1200))
      }
    }, {
      name: 'birthday',
      labelText: 'Birthday 2',
      icon: 'date_range',
      description: 'Please select your birthday (date select example)',
      type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.FacetDataType.Date
    }, {
      name: 'empty',
      labelText: 'Empty Test',
      description: 'Please select from options.',
      type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.FacetDataType.Typeahead,
      icon: 'clear',
      typeahead: {
        function: _common_helpers__WEBPACK_IMPORTED_MODULE_0__.testEmptyFilterTypeahead,
        placeholder: 'Empty'
      }
    }, {
      name: 'many',
      labelText: 'Many Test',
      description: 'Please select from options.',
      type: ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.FacetDataType.Typeahead,
      icon: 'dns',
      typeahead: {
        function: _common_helpers__WEBPACK_IMPORTED_MODULE_0__.lotsOfValuesTypeAhead,
        placeholder: '1'
      }
    }];

    this.chunkArray = (arr, n) => {
      const chunkLength = Math.max(arr.length / n, 1);
      const chunks = [];

      for (let i = 0; i < n; i++) {
        if (chunkLength * (i + 1) <= arr.length) {
          chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
        }
      }

      return chunks;
    };

    this.allStrategies = Object.keys(ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.FacetIdentifierStrategy);
    this.strategyUpdated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(v => v.toLowerCase() === 'manual')).subscribe(this.showManualInput);
  }

  set strategy(value) {
    this.currentStrategy = value;
  }

  ngAfterViewInit() {
    this.toggleSet();
  }

  displayStrategy(raw) {
    switch (raw) {
      case 'WindowURL':
        return 'Window URL';

      case 'ParentID':
        return 'Parent ID';

      default:
        return raw;
    }
  }

  toggleSet() {
    const chunked = this.chunkArray(this.allFacets, 2);

    if (this.isUsingSetB) {
      this.facets = chunked[0];
      this.isUsingSetB = false;
    } else {
      this.facets = chunked[1];
      this.isUsingSetB = true;
    }

    this.facetsUpdated.emit(this.facets);
  }

}

SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
  return new (t || SettingsComponent)();
};

SettingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SettingsComponent,
  selectors: [["app-settings"]],
  inputs: {
    strategy: "strategy",
    currentIdentifier: "currentIdentifier"
  },
  outputs: {
    strategyUpdated: "strategyUpdated",
    manualIdentifierUpdated: "manualIdentifierUpdated",
    facetsUpdated: "facetsUpdated"
  },
  decls: 21,
  vars: 10,
  consts: [["fxFlex", "1 1 auto"], ["fxLayout", "column"], [3, "ngModel", "ngModelChange"], ["mat-button", "", 3, "click"], ["appearance", "outline"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matTooltip", "Current Identifier"], ["class", "manual-input", "appearance", "outline", 4, "ngIf"], [3, "value"], ["appearance", "outline", 1, "manual-input"], ["matInput", "", "placeholder", "cool-beans", 3, "ngModel", "ngModelChange", "change"], ["manualInput", ""]],
  template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-content", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-checkbox", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_mat_checkbox_ngModelChange_4_listener($event) {
        return ctx.chipLabelsEnabled = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Chip labels");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-checkbox", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_mat_checkbox_ngModelChange_6_listener($event) {
        return ctx.clearButtonEnabled = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\"Clear\" Button");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-checkbox", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_mat_checkbox_ngModelChange_8_listener($event) {
        return ctx.confirmOnRemove = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Confirmation on remove");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_10_listener() {
        return ctx.toggleSet();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "ID Generation Strategy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-select", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function SettingsComponent_Template_mat_select_valueChange_15_listener($event) {
        return ctx.currentStrategy = $event;
      })("selectionChange", function SettingsComponent_Template_mat_select_selectionChange_15_listener($event) {
        return ctx.strategyUpdated.emit($event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SettingsComponent_mat_option_16_Template, 2, 2, "mat-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "pre", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SettingsComponent_mat_form_field_19_Template, 5, 1, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.chipLabelsEnabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.clearButtonEnabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.confirmOnRemove);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Use ", ctx.isUsingSetB ? "Set A" : "Set B", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.currentStrategy);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allStrategies);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentIdentifier);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 8, ctx.showManualInput));
    }
  },
  directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 1em;\n}\n\npre[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  background: black;\n  border-radius: 5px;\n  font-family: monospace;\n  font-size: small;\n  padding: 1rem;\n  margin-top: -1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZmxleDogMTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4ubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbnByZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTptb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTpzbWFsbDtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLXRvcDogLTFlbTtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 9944:
/*!********************************************************************************!*\
  !*** ./projects/demo-application/src/app/pages/page-one/page-one.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageOneComponent": function() { return /* binding */ PageOneComponent; }
/* harmony export */ });
/* harmony import */ var ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-mat-facet-search */ 2415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 5618);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/settings/settings.component */ 2869);
/* harmony import */ var _components_output_output_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/output/output.component */ 9479);








class PageOneComponent {
    constructor() {
        this.facets = [];
    }
    strategyUpdated(newStrategy) {
        this.facetSearch.reconfigure({
            identifierStrategy: newStrategy
        });
    }
    manualIdentifierUpdated(identifier) {
        this.facetSearch.reconfigure(null, identifier);
    }
    facetsUpdated(facets) {
        this.facets = facets;
    }
}
PageOneComponent.ɵfac = function PageOneComponent_Factory(t) { return new (t || PageOneComponent)(); };
PageOneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PageOneComponent, selectors: [["app-page-one"]], viewQuery: function PageOneComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.NgxMatFacetSearchComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.facetSearch = _t.first);
    } }, decls: 11, vars: 7, consts: [["placeholder", "Add a filter...", "clearButtonText", "CLEAR FILTERS", 3, "source", "chipLabelsEnabled", "confirmOnRemove", "clearButtonEnabled", "searchUpdated"], ["search", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutGap", "15px", 1, "content"], [3, "currentIdentifier", "strategy", "facetsUpdated", "strategyUpdated", "manualIdentifierUpdated"], ["settings", ""], [3, "vertical"], ["output", ""]], template: function PageOneComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ngx-mat-facet-search", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("searchUpdated", function PageOneComponent_Template_ngx_mat_facet_search_searchUpdated_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10); return _r2.filterUpdated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "app-settings", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("facetsUpdated", function PageOneComponent_Template_app_settings_facetsUpdated_6_listener($event) { return ctx.facetsUpdated($event); })("strategyUpdated", function PageOneComponent_Template_app_settings_strategyUpdated_6_listener($event) { return ctx.strategyUpdated($event); })("manualIdentifierUpdated", function PageOneComponent_Template_app_settings_manualIdentifierUpdated_6_listener($event) { return ctx.manualIdentifierUpdated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-output", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("source", ctx.facets)("chipLabelsEnabled", _r1.chipLabelsEnabled)("confirmOnRemove", _r1.confirmOnRemove)("clearButtonEnabled", _r1.clearButtonEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currentIdentifier", _r0.identifier)("strategy", _r0.getIdentifierStrategy());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("vertical", true);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.NgxMatFacetSearchComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutGapDirective, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent, _components_output_output_component__WEBPACK_IMPORTED_MODULE_1__.OutputComponent], styles: ["[_nghost-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.content[_ngcontent-%COMP%]   .mat-divider[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utb25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUFFO0VBQ0UsWUFBQTtBQUVKIiwiZmlsZSI6InBhZ2Utb25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRlbnQge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgLm1hdC1kaXZpZGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 1473:
/*!********************************************************************************!*\
  !*** ./projects/demo-application/src/app/pages/page-two/page-two.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageTwoComponent": function() { return /* binding */ PageTwoComponent; }
/* harmony export */ });
/* harmony import */ var ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-mat-facet-search */ 2415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 5618);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/settings/settings.component */ 2869);
/* harmony import */ var _components_output_output_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/output/output.component */ 9479);








class PageTwoComponent {
    constructor() {
        this.facets = [];
    }
    strategyUpdated(newStrategy) {
        this.facetSearch.reconfigure({
            identifierStrategy: newStrategy
        });
    }
    manualIdentifierUpdated(identifier) {
        this.facetSearch.reconfigure(null, identifier);
    }
    facetsUpdated(facets) {
        this.facets = facets;
    }
}
PageTwoComponent.ɵfac = function PageTwoComponent_Factory(t) { return new (t || PageTwoComponent)(); };
PageTwoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PageTwoComponent, selectors: [["app-page-two"]], viewQuery: function PageTwoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.NgxMatFacetSearchComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.facetSearch = _t.first);
    } }, decls: 11, vars: 7, consts: [["placeholder", "Add a filter...", "clearButtonText", "CLEAR FILTERS", 3, "source", "chipLabelsEnabled", "confirmOnRemove", "clearButtonEnabled", "searchUpdated"], ["search", ""], ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayoutGap", "15px", 1, "content"], [3, "currentIdentifier", "strategy", "facetsUpdated", "strategyUpdated", "manualIdentifierUpdated"], ["settings", ""], [3, "vertical"], ["output", ""]], template: function PageTwoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ngx-mat-facet-search", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("searchUpdated", function PageTwoComponent_Template_ngx_mat_facet_search_searchUpdated_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10); return _r2.filterUpdated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "app-settings", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("facetsUpdated", function PageTwoComponent_Template_app_settings_facetsUpdated_6_listener($event) { return ctx.facetsUpdated($event); })("strategyUpdated", function PageTwoComponent_Template_app_settings_strategyUpdated_6_listener($event) { return ctx.strategyUpdated($event); })("manualIdentifierUpdated", function PageTwoComponent_Template_app_settings_manualIdentifierUpdated_6_listener($event) { return ctx.manualIdentifierUpdated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-divider", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-output", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("source", ctx.facets)("chipLabelsEnabled", _r1.chipLabelsEnabled)("confirmOnRemove", _r1.confirmOnRemove)("clearButtonEnabled", _r1.clearButtonEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currentIdentifier", _r0.identifier)("strategy", _r0.getIdentifierStrategy());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("vertical", true);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, ngx_mat_facet_search__WEBPACK_IMPORTED_MODULE_3__.NgxMatFacetSearchComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutGapDirective, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent, _components_output_output_component__WEBPACK_IMPORTED_MODULE_1__.OutputComponent], styles: ["[_nghost-%COMP%] {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.content[_ngcontent-%COMP%]   .mat-divider[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtdHdvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUFFO0VBQ0UsWUFBQTtBQUVKIiwiZmlsZSI6InBhZ2UtdHdvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRlbnQge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgLm1hdC1kaXZpZGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 8580:
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

/***/ 2154:
/*!***********************************************!*\
  !*** ./projects/demo-application/src/main.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 2124);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8580);




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

/***/ }),

/***/ 5591:
/*!****************************************************!*\
  !*** ./projects/ngx-mat-facet-search/package.json ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"ngx-mat-facet-search","version":"0.5.9","author":"Keaton Burleson","repository":"https://github.com/128keaton/NgxMatFacetSearch","peerDependencies":{"@angular/common":"^12.0.4","@angular/core":"^12.0.4","@angular/forms":"^12.0.4","@angular/material":"^12.0.4","uuid":"^8.3.2"},"dependencies":{"tslib":"^2.1.0"}}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(2154); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2017.js.map