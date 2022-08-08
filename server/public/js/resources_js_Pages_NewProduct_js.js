"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_NewProduct_js"],{

/***/ "./resources/js/Pages/NewProduct.js":
/*!******************************************!*\
  !*** ./resources/js/Pages/NewProduct.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ \"./node_modules/@inertiajs/inertia/dist/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar NewProduct = function NewProduct(props) {\n  var thumbnailRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var detailImg = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    name: '',\n    price: '',\n    quantity: '',\n    category: ''\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      values = _useState2[0],\n      setValues = _useState2[1];\n\n  var cat = props.category; // console.log(cat); Everytime i write something in Input field whole component rereders?\n\n  function handleSubmit(e) {\n    e.preventDefault(); // console.log(values);\n\n    var formData = new FormData();\n    formData.append('name', values.name);\n    formData.append('price', values.price);\n    formData.append('quantity', values.quantity);\n    formData.append('category', values.category);\n    formData.append('thumbnail', thumbnailRef.current.files[0]); //formData.append('detailImg' , detailImg.current.files);\n\n    for (var i = 0; i < detailImg.current.files.length; i++) {\n      formData.append('IoFiles[]', detailImg.current.files[i]);\n    }\n\n    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.post('/products', formData);\n  }\n\n  function handleChange(e) {\n    e.persist();\n    setValues(function (values) {\n      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, e.target.id, e.target.value));\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"container mt-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-md-6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n    onSubmit: handleSubmit,\n    encType: \"multipart/form-data\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    htmlFor: \"name\"\n  }, \"Product Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    value: values.name,\n    className: \"form-control\",\n    id: \"name\",\n    \"aria-describedby\": \"prodName\",\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"small\", {\n    id: \"prodName\",\n    className: \"form-text text-muted\"\n  }, \"Please Enter Product Name.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"input-group mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"input-group-prepend\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    className: \"input-group-text\",\n    htmlFor: \"category\"\n  }, \"Brand\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"select\", {\n    value: values.category,\n    className: \"custom-select\",\n    id: \"category\",\n    onChange: handleChange\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n    value: \"0\"\n  }, \"Choose...\"), cat.map(function (category) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"option\", {\n      key: category.id,\n      value: category.id\n    }, category.catname);\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    htmlFor: \"price\"\n  }, \"Price\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    value: values.price,\n    id: \"price\",\n    className: \"form-control\",\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    htmlFor: \"Quantity\"\n  }, \"Quantity\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    value: values.quantity,\n    className: \"form-control\",\n    id: \"quantity\",\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    htmlFor: \"thumbnail\"\n  }, \"Product Picture\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    ref: thumbnailRef,\n    type: \"file\",\n    className: \"form-control\",\n    id: \"thumbnail\",\n    value: values.thumbnail\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"form-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n    htmlFor: \"detailImg\"\n  }, \"Product Picture\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    ref: detailImg,\n    type: \"file\",\n    multiple: true,\n    className: \"form-control\",\n    id: \"detailImg\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\"\n  }, \"Submit\")))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewProduct);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvUGFnZXMvTmV3UHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVTtBQUN6QixNQUFNQyxZQUFZLEdBQUdKLDZDQUFNLENBQUMsSUFBRCxDQUEzQjtBQUNBLE1BQU1LLFNBQVMsR0FBR0wsNkNBQU0sQ0FBQyxJQUFELENBQXhCOztBQUNBLGtCQUE2QkQsK0NBQVEsQ0FBQztBQUNsQ08sSUFBQUEsSUFBSSxFQUFHLEVBRDJCO0FBRWxDQyxJQUFBQSxLQUFLLEVBQUUsRUFGMkI7QUFHbENDLElBQUFBLFFBQVEsRUFBRSxFQUh3QjtBQUlsQ0MsSUFBQUEsUUFBUSxFQUFDO0FBSnlCLEdBQUQsQ0FBckM7QUFBQTtBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFnQkMsU0FBaEI7O0FBT0EsTUFBTUMsR0FBRyxHQUFHVCxLQUFLLENBQUNNLFFBQWxCLENBVnlCLENBV3pCOztBQUVBLFdBQVNJLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXdCO0FBQ3hCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FEd0IsQ0FFeEI7O0FBQ0EsUUFBTUMsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakI7QUFDQUQsSUFBQUEsUUFBUSxDQUFDRSxNQUFULENBQWdCLE1BQWhCLEVBQXlCUixNQUFNLENBQUNKLElBQWhDO0FBQ0FVLElBQUFBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixPQUFoQixFQUEwQlIsTUFBTSxDQUFDSCxLQUFqQztBQUNBUyxJQUFBQSxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNkJSLE1BQU0sQ0FBQ0YsUUFBcEM7QUFDQVEsSUFBQUEsUUFBUSxDQUFDRSxNQUFULENBQWdCLFVBQWhCLEVBQTZCUixNQUFNLENBQUNELFFBQXBDO0FBQ0FPLElBQUFBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixXQUFoQixFQUE4QmQsWUFBWSxDQUFDZSxPQUFiLENBQXFCQyxLQUFyQixDQUEyQixDQUEzQixDQUE5QixFQVJ3QixDQVN4Qjs7QUFFQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdoQixTQUFTLENBQUNjLE9BQVYsQ0FBa0JDLEtBQWxCLENBQXdCRSxNQUE1QyxFQUFvREQsQ0FBQyxFQUFyRCxFQUF5RDtBQUNyREwsTUFBQUEsUUFBUSxDQUFDRSxNQUFULENBQWdCLFdBQWhCLEVBQTZCYixTQUFTLENBQUNjLE9BQVYsQ0FBa0JDLEtBQWxCLENBQXdCQyxDQUF4QixDQUE3QjtBQUNIOztBQUNEcEIsSUFBQUEsNERBQUEsQ0FBYSxXQUFiLEVBQXlCZSxRQUF6QjtBQUNDOztBQUVELFdBQVNRLFlBQVQsQ0FBc0JWLENBQXRCLEVBQXdCO0FBQ3BCQSxJQUFBQSxDQUFDLENBQUNXLE9BQUY7QUFDQWQsSUFBQUEsU0FBUyxDQUFDLFVBQUFELE1BQU07QUFBQSw2Q0FBU0EsTUFBVCwyQkFBaUJJLENBQUMsQ0FBQ1ksTUFBRixDQUFTQyxFQUExQixFQUErQmIsQ0FBQyxDQUFDWSxNQUFGLENBQVNFLEtBQXhDO0FBQUEsS0FBUCxDQUFUO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBTSxZQUFRLEVBQUVmLFlBQWhCO0FBQThCLFdBQU8sRUFBQztBQUF0QyxrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQU8sV0FBTyxFQUFDO0FBQWYsb0JBREosZUFFSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFNBQUssRUFBRUgsTUFBTSxDQUFDSixJQUFqQztBQUF1QyxhQUFTLEVBQUMsY0FBakQ7QUFBZ0UsTUFBRSxFQUFDLE1BQW5FO0FBQTBFLHdCQUFpQixVQUEzRjtBQUFzRyxZQUFRLEVBQUVrQjtBQUFoSCxJQUZKLGVBR0k7QUFBTyxNQUFFLEVBQUMsVUFBVjtBQUFxQixhQUFTLEVBQUM7QUFBL0Isa0NBSEosQ0FESixlQU9JO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFPLGFBQVMsRUFBQyxrQkFBakI7QUFBb0MsV0FBTyxFQUFDO0FBQTVDLGFBREosQ0FESixlQUlJO0FBQVEsU0FBSyxFQUFFZCxNQUFNLENBQUNELFFBQXRCO0FBQWdDLGFBQVMsRUFBQyxlQUExQztBQUEwRCxNQUFFLEVBQUMsVUFBN0Q7QUFBd0UsWUFBUSxFQUFFZTtBQUFsRixrQkFDSTtBQUFRLFNBQUssRUFBQztBQUFkLGlCQURKLEVBR1FaLEdBQUcsQ0FBQ2lCLEdBQUosQ0FBUSxVQUFBcEIsUUFBUSxFQUFFO0FBQ2Qsd0JBQ0k7QUFBUSxTQUFHLEVBQUVBLFFBQVEsQ0FBQ2tCLEVBQXRCO0FBQTBCLFdBQUssRUFBRWxCLFFBQVEsQ0FBQ2tCO0FBQTFDLE9BQStDbEIsUUFBUSxDQUFDcUIsT0FBeEQsQ0FESjtBQUdILEdBSkQsQ0FIUixDQUpKLENBUEosZUF1Qkk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFPLFdBQU8sRUFBQztBQUFmLGFBREosZUFFSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFNBQUssRUFBRXBCLE1BQU0sQ0FBQ0gsS0FBakM7QUFBd0MsTUFBRSxFQUFDLE9BQTNDO0FBQW1ELGFBQVMsRUFBQyxjQUE3RDtBQUE0RSxZQUFRLEVBQUVpQjtBQUF0RixJQUZKLENBdkJKLGVBNEJJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBTyxXQUFPLEVBQUM7QUFBZixnQkFESixlQUVJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsU0FBSyxFQUFFZCxNQUFNLENBQUNGLFFBQWpDO0FBQTJDLGFBQVMsRUFBQyxjQUFyRDtBQUFvRSxNQUFFLEVBQUMsVUFBdkU7QUFBa0YsWUFBUSxFQUFFZ0I7QUFBNUYsSUFGSixDQTVCSixlQWlDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQU8sV0FBTyxFQUFDO0FBQWYsdUJBREosZUFFSTtBQUFPLE9BQUcsRUFBRXBCLFlBQVo7QUFBMEIsUUFBSSxFQUFDLE1BQS9CO0FBQXNDLGFBQVMsRUFBQyxjQUFoRDtBQUErRCxNQUFFLEVBQUMsV0FBbEU7QUFBOEUsU0FBSyxFQUFFTSxNQUFNLENBQUNxQjtBQUE1RixJQUZKLENBakNKLGVBc0NJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBTyxXQUFPLEVBQUM7QUFBZix1QkFESixlQUVJO0FBQU8sT0FBRyxFQUFFMUIsU0FBWjtBQUF1QixRQUFJLEVBQUMsTUFBNUI7QUFBbUMsWUFBUSxNQUEzQztBQUE0QyxhQUFTLEVBQUMsY0FBdEQ7QUFBcUUsTUFBRSxFQUFDO0FBQXhFLElBRkosQ0F0Q0osZUE0Q0k7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUM7QUFBaEMsY0E1Q0osQ0FESixDQURKLENBREosQ0FESjtBQXNESCxDQXpGRDs7QUEyRkEsaUVBQWVILFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvTmV3UHJvZHVjdC5qcz9kMTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUgLCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtJbmVydGlhfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnO1xyXG5cclxuY29uc3QgTmV3UHJvZHVjdCA9IChwcm9wcykgPT57XHJcbiAgICBjb25zdCB0aHVtYm5haWxSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBkZXRhaWxJbWcgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbdmFsdWVzICwgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lIDogJycsXHJcbiAgICAgICAgcHJpY2U6ICcnLFxyXG4gICAgICAgIHF1YW50aXR5OiAnJyxcclxuICAgICAgICBjYXRlZ29yeTonJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY2F0ID0gcHJvcHMuY2F0ZWdvcnk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjYXQpOyBFdmVyeXRpbWUgaSB3cml0ZSBzb21ldGhpbmcgaW4gSW5wdXQgZmllbGQgd2hvbGUgY29tcG9uZW50IHJlcmVkZXJzP1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCduYW1lJyAsIHZhbHVlcy5uYW1lKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgncHJpY2UnICwgdmFsdWVzLnByaWNlKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgncXVhbnRpdHknICwgdmFsdWVzLnF1YW50aXR5KTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnY2F0ZWdvcnknICwgdmFsdWVzLmNhdGVnb3J5KTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgndGh1bWJuYWlsJyAsIHRodW1ibmFpbFJlZi5jdXJyZW50LmZpbGVzWzBdKTtcclxuICAgIC8vZm9ybURhdGEuYXBwZW5kKCdkZXRhaWxJbWcnICwgZGV0YWlsSW1nLmN1cnJlbnQuZmlsZXMpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGV0YWlsSW1nLmN1cnJlbnQuZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ0lvRmlsZXNbXScsIGRldGFpbEltZy5jdXJyZW50LmZpbGVzW2ldKTtcclxuICAgIH1cclxuICAgIEluZXJ0aWEucG9zdCgnL3Byb2R1Y3RzJyxmb3JtRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpe1xyXG4gICAgICAgIGUucGVyc2lzdCgpO1xyXG4gICAgICAgIHNldFZhbHVlcyh2YWx1ZXMgPT4gKHsuLi52YWx1ZXMsW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWV9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlByb2R1Y3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dmFsdWVzLm5hbWV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwibmFtZVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJwcm9kTmFtZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgaWQ9XCJwcm9kTmFtZVwiIGNsYXNzTmFtZT1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+UGxlYXNlIEVudGVyIFByb2R1Y3QgTmFtZS48L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIiBodG1sRm9yPVwiY2F0ZWdvcnlcIj5CcmFuZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3ZhbHVlcy5jYXRlZ29yeX0gY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiIGlkPVwiY2F0ZWdvcnlcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPkNob29zZS4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Lm1hcChjYXRlZ29yeT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjYXRlZ29yeS5pZH0gdmFsdWU9e2NhdGVnb3J5LmlkfT57Y2F0ZWdvcnkuY2F0bmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5QcmljZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dmFsdWVzLnByaWNlfSBpZD1cInByaWNlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiUXVhbnRpdHlcIj5RdWFudGl0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dmFsdWVzLnF1YW50aXR5fSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInF1YW50aXR5XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGh1bWJuYWlsXCI+UHJvZHVjdCBQaWN0dXJlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e3RodW1ibmFpbFJlZn0gdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInRodW1ibmFpbFwiIHZhbHVlPXt2YWx1ZXMudGh1bWJuYWlsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXRhaWxJbWdcIj5Qcm9kdWN0IFBpY3R1cmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17ZGV0YWlsSW1nfSB0eXBlPVwiZmlsZVwiIG11bHRpcGxlIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZGV0YWlsSW1nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdQcm9kdWN0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiSW5lcnRpYSIsIk5ld1Byb2R1Y3QiLCJwcm9wcyIsInRodW1ibmFpbFJlZiIsImRldGFpbEltZyIsIm5hbWUiLCJwcmljZSIsInF1YW50aXR5IiwiY2F0ZWdvcnkiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJjYXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiY3VycmVudCIsImZpbGVzIiwiaSIsImxlbmd0aCIsInBvc3QiLCJoYW5kbGVDaGFuZ2UiLCJwZXJzaXN0IiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsIm1hcCIsImNhdG5hbWUiLCJ0aHVtYm5haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/Pages/NewProduct.js\n");

/***/ })

}]);