"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_AdminForm_js"],{

/***/ "./resources/js/Pages/AdminForm.js":
/*!*****************************************!*\
  !*** ./resources/js/Pages/AdminForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar AdminForm = function AdminForm(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    category: 0\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      value = _useState2[0],\n      setValue = _useState2[1]; // const [items , showItems] = useState(false);\n\n\n  var page = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)(); // const handleSubmit = (e) =>{\n  //     e.preventDefault();\n  //     showItems(true);\n  // alert(value.category);\n  // const formData  = new formData();\n  // formData.append('category' , values.category);\n  // axios.post('',formData);\n  // }\n\n  function handleChange(e) {\n    e.persist();\n    setValue(function (value) {\n      return _objectSpread(_objectSpread({}, value), {}, _defineProperty({}, e.target.id, e.target.value));\n    });\n    console.log(value.category);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"section\", {\n    className: \"py-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"form\", {\n    method: \"POST\",\n    onSubmit: props.submit,\n    encType: \"multipart/form-data\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"label\", {\n    htmlFor: \"cate\"\n  }, \"Category Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"select\", {\n    id: \"category\",\n    value: value.category,\n    className: \"custom-select\",\n    onChange: handleChange\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"option\", {\n    value: \"0\"\n  }, \"All Categories\"), page.props.categories.map(function (category) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"option\", {\n      key: category.id,\n      value: category.id\n    }, category.cname);\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\"\n  }, \"Submit\"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvUGFnZXMvQWRtaW5Gb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1LLFNBQVMsR0FBRSxTQUFYQSxTQUFXLENBQUNDLEtBQUQsRUFBUztBQUN0QixrQkFBMkJKLCtDQUFRLENBQUM7QUFDaENLLElBQUFBLFFBQVEsRUFBQztBQUR1QixHQUFELENBQW5DO0FBQUE7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBZUMsUUFBZixpQkFEc0IsQ0FLdEI7OztBQUVBLE1BQU1DLElBQUksR0FBR04saUVBQU8sRUFBcEIsQ0FQc0IsQ0FTdEI7QUFDQTtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBRUE7QUFDSjs7QUFFQSxXQUFTTyxZQUFULENBQXNCQyxDQUF0QixFQUF3QjtBQUNwQkEsSUFBQUEsQ0FBQyxDQUFDQyxPQUFGO0FBQ0FKLElBQUFBLFFBQVEsQ0FBQyxVQUFBRCxLQUFLO0FBQUEsNkNBQVNBLEtBQVQsMkJBQWdCSSxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsRUFBekIsRUFBOEJILENBQUMsQ0FBQ0UsTUFBRixDQUFTTixLQUF2QztBQUFBLEtBQU4sQ0FBUjtBQUNBUSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsS0FBSyxDQUFDRCxRQUFsQjtBQUNIOztBQUVELHNCQUNBLGlIQUNJO0FBQVMsYUFBUyxFQUFDO0FBQW5CLGtCQUNJO0FBQU0sVUFBTSxFQUFDLE1BQWI7QUFBb0IsWUFBUSxFQUFFRCxLQUFLLENBQUNZLE1BQXBDO0FBQTRDLFdBQU8sRUFBQztBQUFwRCxrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQU8sV0FBTyxFQUFDO0FBQWYscUJBREosZUFFSTtBQUFRLE1BQUUsRUFBQyxVQUFYO0FBQXNCLFNBQUssRUFBRVYsS0FBSyxDQUFDRCxRQUFuQztBQUE2QyxhQUFTLEVBQUMsZUFBdkQ7QUFBdUUsWUFBUSxFQUFFSTtBQUFqRixrQkFDSTtBQUFRLFNBQUssRUFBQztBQUFkLHNCQURKLEVBR1lELElBQUksQ0FBQ0osS0FBTCxDQUFXYSxVQUFYLENBQXNCQyxHQUF0QixDQUEwQixVQUFBYixRQUFRLEVBQUU7QUFDaEMsd0JBQ0k7QUFBUSxTQUFHLEVBQUVBLFFBQVEsQ0FBQ1EsRUFBdEI7QUFBMEIsV0FBSyxFQUFFUixRQUFRLENBQUNRO0FBQTFDLE9BQStDUixRQUFRLENBQUNjLEtBQXhELENBREo7QUFHSCxHQUpELENBSFosQ0FGSixDQURKLGVBZUk7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUM7QUFBaEMsY0FmSixDQURKLENBREosQ0FEQTtBQXVCSCxDQWhERDs7QUFrREEsaUVBQWVoQixTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL1BhZ2VzL0FkbWluRm9ybS5qcz82ZDlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtJbmVydGlhTGluaywgdXNlUGFnZX0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0JztcclxuXHJcbmNvbnN0IEFkbWluRm9ybSA9KHByb3BzKT0+e1xyXG4gICAgY29uc3QgW3ZhbHVlICwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGNhdGVnb3J5OjBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNvbnN0IFtpdGVtcyAsIHNob3dJdGVtc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgcGFnZSA9IHVzZVBhZ2UoKTtcclxuXHJcbiAgICAvLyBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT57XHJcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgIHNob3dJdGVtcyh0cnVlKTtcclxuICAgICAgICAvLyBhbGVydCh2YWx1ZS5jYXRlZ29yeSk7XHJcbiAgICAgICAgLy8gY29uc3QgZm9ybURhdGEgID0gbmV3IGZvcm1EYXRhKCk7XHJcbiAgICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdjYXRlZ29yeScgLCB2YWx1ZXMuY2F0ZWdvcnkpO1xyXG5cclxuICAgICAgICAvLyBheGlvcy5wb3N0KCcnLGZvcm1EYXRhKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSl7XHJcbiAgICAgICAgZS5wZXJzaXN0KCk7XHJcbiAgICAgICAgc2V0VmFsdWUodmFsdWUgPT4gKHsuLi52YWx1ZSxbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZX0pKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZS5jYXRlZ29yeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0yXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17cHJvcHMuc3VibWl0fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXRlXCI+Q2F0ZWdvcnkgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImNhdGVnb3J5XCIgdmFsdWU9e3ZhbHVlLmNhdGVnb3J5fSBjbGFzc05hbWU9XCJjdXN0b20tc2VsZWN0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPkFsbCBDYXRlZ29yaWVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZS5wcm9wcy5jYXRlZ29yaWVzLm1hcChjYXRlZ29yeT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y2F0ZWdvcnkuaWR9IHZhbHVlPXtjYXRlZ29yeS5pZH0+e2NhdGVnb3J5LmNuYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9zZWN0aW9uPiAgICAgIFxyXG4gICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluRm9ybTsiXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZVN0YXRlIiwiSW5lcnRpYUxpbmsiLCJ1c2VQYWdlIiwiQWRtaW5Gb3JtIiwicHJvcHMiLCJjYXRlZ29yeSIsInZhbHVlIiwic2V0VmFsdWUiLCJwYWdlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInBlcnNpc3QiLCJ0YXJnZXQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXQiLCJjYXRlZ29yaWVzIiwibWFwIiwiY25hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/Pages/AdminForm.js\n");

/***/ })

}]);