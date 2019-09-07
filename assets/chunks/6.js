(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/components/PriceWidget/components/SliderWidget/index.js":
/*!*********************************************************************!*\
  !*** ./src/components/PriceWidget/components/SliderWidget/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/components/PriceWidget/components/SliderWidget/style.js\");\n\n\n\nvar SliderWidget = function SliderWidget(_ref) {\n  var from = _ref.from,\n      to = _ref.to,\n      onChange = _ref.onChange;\n\n  var handleChange = function handleChange(e, newValue) {\n    onChange(newValue[0], newValue[1]);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    value: [from, to],\n    onChange: handleChange,\n    valueLabelDisplay: \"on\",\n    \"aria-labelledby\": \"range-slider\",\n    step: 30,\n    marks: true\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SliderWidget);\n\n//# sourceURL=webpack:///./src/components/PriceWidget/components/SliderWidget/index.js?");

/***/ }),

/***/ "./src/components/PriceWidget/components/SliderWidget/style.js":
/*!*********************************************************************!*\
  !*** ./src/components/PriceWidget/components/SliderWidget/style.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Slider */ \"./node_modules/@material-ui/core/esm/Slider/index.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  margin-top: 15px;\\n\\n  .MuiSlider-rail {\\n    height: 4px;\\n    border-radius: 5px;\\n    background: white;\\n    border: 2px solid #c6c6c6;\\n  }\\n\\n  .MuiSlider-track {\\n    height: 5px;\\n    border: 1px solid rgb(198, 198, 198);\\n    background: rgb(198, 198, 198);\\n  }\\n\\n  .MuiSlider-thumb {\\n    height: 16px;\\n    width: 6px;\\n    border-radius: 6px;\\n    background: white;\\n    border: 1px solid rgb(150, 150, 150);\\n    margin-left: 0px;\\n\\n    &:hover {\\n      box-shadow: 0px 0px 0px 8px rgba(142, 142, 146, 0.16);\\n    }\\n\\n    &.MuiSlider-active {\\n      box-shadow: 0px 0px 0px 14px rgba(154, 154, 158, 0.16);\\n    }\\n  }\\n\\n  .MuiSlider-valueLabel {\\n    color: black;\\n    margin-top: 40px;\\n    font-family: Roboto;\\n    font-weight: 300;\\n  }\\n\\n  .MuiSlider-mark {\\n    height: 12px;\\n    margin-top: -2px;\\n    color: #eaeaea;\\n\\n    &.MuiSlider-markActive {\\n      background: #c6c6c6;\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar SliderStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_templateObject());\n/* harmony default export */ __webpack_exports__[\"default\"] = (SliderStyled);\n\n//# sourceURL=webpack:///./src/components/PriceWidget/components/SliderWidget/style.js?");

/***/ })

}]);