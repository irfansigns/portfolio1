"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Slider_js"],{

/***/ "./resources/js/Pages/Slider.js":
/*!**************************************!*\
  !*** ./resources/js/Pages/Slider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar Slider = function Slider(props) {\n  var detailImages = Object.keys(props.detailImg).map(function (igKey) {\n    return props.detailImg[igKey];\n  }); // Very Very Important data was not coming in the form of Array.was coming in form of Object.map function is only available on Array.\n\n  console.log(detailImages);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"carouselExampleCaptions\",\n    className: \"carousel slide\",\n    \"data-ride\": \"carousel\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ol\", {\n    className: \"carousel-indicators\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    \"data-target\": \"#carouselExampleCaptions\",\n    \"data-slide-to\": \"0\",\n    className: \"active\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    \"data-target\": \"#carouselExampleCaptions\",\n    \"data-slide-to\": \"1\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    \"data-target\": \"#carouselExampleCaptions\",\n    \"data-slide-to\": \"2\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"carousel-inner\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"carousel-item active\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: '../img/' + props.images,\n    className: \"d-block w-100\",\n    alt: \"...\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"carousel-caption d-none d-md-block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h5\", null, \"First slide label\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Some representative placeholder content for the first slide.\"))), detailImages.map(function (img) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"carousel-item \"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n      src: '../img/' + img.name,\n      className: \"d-block w-100\",\n      alt: \"...\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"carousel-caption d-none d-md-block\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h5\", null, \"First slide label\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Some representative placeholder content for the first slide.\")));\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    className: \"carousel-control-prev\",\n    href: \"#carouselExampleCaptions\",\n    role: \"button\",\n    \"data-slide\": \"prev\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"carousel-control-prev-icon\",\n    \"aria-hidden\": \"true\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"sr-only\"\n  }, \"Previous\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    className: \"carousel-control-next\",\n    href: \"#carouselExampleCaptions\",\n    role: \"button\",\n    \"data-slide\": \"next\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"carousel-control-next-icon\",\n    \"aria-hidden\": \"true\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"sr-only\"\n  }, \"Next\"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvUGFnZXMvU2xpZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFVO0FBQ3JCLE1BQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlILEtBQUssQ0FBQ0ksU0FBbEIsRUFBNkJDLEdBQTdCLENBQWlDLFVBQUFDLEtBQUssRUFBRTtBQUN6RCxXQUFPTixLQUFLLENBQUNJLFNBQU4sQ0FBZ0JFLEtBQWhCLENBQVA7QUFDSCxHQUZvQixDQUFyQixDQURxQixDQUlyQjs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlQLFlBQVo7QUFDQSxzQkFDSSxpSEFDQTtBQUFLLE1BQUUsRUFBQyx5QkFBUjtBQUFrQyxhQUFTLEVBQUMsZ0JBQTVDO0FBQTZELGlCQUFVO0FBQXZFLGtCQUNJO0FBQUksYUFBUyxFQUFDO0FBQWQsa0JBQ0k7QUFBSSxtQkFBWSwwQkFBaEI7QUFBMkMscUJBQWMsR0FBekQ7QUFBNkQsYUFBUyxFQUFDO0FBQXZFLElBREosZUFFSTtBQUFJLG1CQUFZLDBCQUFoQjtBQUEyQyxxQkFBYztBQUF6RCxJQUZKLGVBR0k7QUFBSSxtQkFBWSwwQkFBaEI7QUFBMkMscUJBQWM7QUFBekQsSUFISixDQURKLGVBTUk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNBO0FBQUssT0FBRyxFQUFFLFlBQVlELEtBQUssQ0FBQ1MsTUFBNUI7QUFBb0MsYUFBUyxFQUFDLGVBQTlDO0FBQThELE9BQUcsRUFBQztBQUFsRSxJQURBLGVBRUE7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSxpRkFESixlQUVJLDJIQUZKLENBRkEsQ0FESixFQVVKUixZQUFZLENBQUNJLEdBQWIsQ0FBaUIsVUFBQUssR0FBRyxFQUFFO0FBQ2xCLHdCQUNJO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0k7QUFBSyxTQUFHLEVBQUUsWUFBWUEsR0FBRyxDQUFDQyxJQUExQjtBQUFnQyxlQUFTLEVBQUMsZUFBMUM7QUFBMEQsU0FBRyxFQUFDO0FBQTlELE1BREosZUFFSTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNJLGlGQURKLGVBRUksMkhBRkosQ0FGSixDQURKO0FBU0gsR0FWRCxDQVZJLENBTkosZUE4QlE7QUFBRyxhQUFTLEVBQUMsdUJBQWI7QUFBcUMsUUFBSSxFQUFDLDBCQUExQztBQUFxRSxRQUFJLEVBQUMsUUFBMUU7QUFBbUYsa0JBQVc7QUFBOUYsa0JBQ0k7QUFBTSxhQUFTLEVBQUMsNEJBQWhCO0FBQTZDLG1CQUFZO0FBQXpELElBREosZUFFSTtBQUFNLGFBQVMsRUFBQztBQUFoQixnQkFGSixDQTlCUixlQWtDUTtBQUFHLGFBQVMsRUFBQyx1QkFBYjtBQUFxQyxRQUFJLEVBQUMsMEJBQTFDO0FBQXFFLFFBQUksRUFBQyxRQUExRTtBQUFtRixrQkFBVztBQUE5RixrQkFDSTtBQUFNLGFBQVMsRUFBQyw0QkFBaEI7QUFBNkMsbUJBQVk7QUFBekQsSUFESixlQUVJO0FBQU0sYUFBUyxFQUFDO0FBQWhCLFlBRkosQ0FsQ1IsQ0FEQSxDQURKO0FBMkNILENBakREOztBQW1EQSxpRUFBZVosTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9QYWdlcy9TbGlkZXIuanM/Y2Y1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2xpZGVyID0gKHByb3BzKSA9PntcclxuICAgIGNvbnN0IGRldGFpbEltYWdlcyA9IE9iamVjdC5rZXlzKHByb3BzLmRldGFpbEltZykubWFwKGlnS2V5PT57XHJcbiAgICAgICAgcmV0dXJuIHByb3BzLmRldGFpbEltZ1tpZ0tleV07XHJcbiAgICB9KVxyXG4gICAgLy8gVmVyeSBWZXJ5IEltcG9ydGFudCBkYXRhIHdhcyBub3QgY29taW5nIGluIHRoZSBmb3JtIG9mIEFycmF5LndhcyBjb21pbmcgaW4gZm9ybSBvZiBPYmplY3QubWFwIGZ1bmN0aW9uIGlzIG9ubHkgYXZhaWxhYmxlIG9uIEFycmF5LlxyXG4gICAgY29uc29sZS5sb2coZGV0YWlsSW1hZ2VzKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjYXJvdXNlbEV4YW1wbGVDYXB0aW9uc1wiIGNsYXNzTmFtZT1cImNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cclxuICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVDYXB0aW9uc1wiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVDYXB0aW9uc1wiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVDYXB0aW9uc1wiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT5cclxuICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eycuLi9pbWcvJyArIHByb3BzLmltYWdlc30gY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiIGFsdD1cIi4uLlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+Rmlyc3Qgc2xpZGUgbGFiZWw8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlNvbWUgcmVwcmVzZW50YXRpdmUgcGxhY2Vob2xkZXIgY29udGVudCBmb3IgdGhlIGZpcnN0IHNsaWRlLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG5cclxuICAgIHtcclxuICAgICAgICBkZXRhaWxJbWFnZXMubWFwKGltZz0+e1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW0gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycuLi9pbWcvJyArIGltZy5uYW1lfSBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCIgYWx0PVwiLi4uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNhcHRpb24gZC1ub25lIGQtbWQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkZpcnN0IHNsaWRlIGxhYmVsPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+U29tZSByZXByZXNlbnRhdGl2ZSBwbGFjZWhvbGRlciBjb250ZW50IGZvciB0aGUgZmlyc3Qgc2xpZGUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjY2Fyb3VzZWxFeGFtcGxlQ2FwdGlvbnNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUNhcHRpb25zXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk5leHQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJTbGlkZXIiLCJwcm9wcyIsImRldGFpbEltYWdlcyIsIk9iamVjdCIsImtleXMiLCJkZXRhaWxJbWciLCJtYXAiLCJpZ0tleSIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZXMiLCJpbWciLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/Pages/Slider.js\n");

/***/ })

}]);