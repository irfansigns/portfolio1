(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Cart_js"],{

/***/ "./resources/js/Pages/Cart.js":
/*!************************************!*\
  !*** ./resources/js/Pages/Cart.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./resources/js/Pages/Footer.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./resources/js/Pages/Navbar.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var ziggy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js");
/* harmony import */ var ziggy_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ziggy_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Cart = function Cart(props) {
  var _jsx2;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: '',
    email: '',
    password: 'password',
    password_confirmation: 'password',
    contact: '',
    address: '',
    paymentMethod: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var card = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.usePage)();

  var stateChange = function stateChange() {
    // alert('Working');
    if (card.props.loginDetail.isLoggedIn) {
      setValues(function (values) {
        return _objectSpread(_objectSpread({}, values), {}, {
          name: (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.usePage)().props.auth.user.name,
          contact: (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.usePage)().props.auth.user.contact,
          address: (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.usePage)().props.auth.user.address,
          email: (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.usePage)().props.auth.user.email
        });
      });
    }
  }; // if (card.props.loginDetail.isLoggedIn){
  //   setValues(values => ({...values,
  //     name: usePage().props.auth.user.name,
  //     contact: usePage().props.auth.user.contact,
  //     address: usePage().props.auth.user.address,
  //     email: usePage().props.auth.user.email
  //   }));
  // }
  //const [product , setProduct] = useState(1);


  var cartData = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
    className: "text-danger",
    children: "No Items Selected"
  });

  var tempVar = null;

  function handleChange(e) {
    e.persist();
    setValues(function (values) {
      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, e.target.id, e.target.value));
    });
  }

  var submitHandler = function submitHandler(e) {
    e.preventDefault(); // alert("Submit Clicked");
    // alert(values.name);

    $('#exampleModal').modal('hide');
    var formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('password_confirmation', values.password_confirmation);
    formData.append('contact', values.contact);
    formData.append('address', values.address);
    formData.append('method', values.paymentMethod);

    if (card.props.loginDetail.isLoggedIn) {
      axios.post(ziggy_js__WEBPACK_IMPORTED_MODULE_4___default()('updateUser'), formData).then(function (respond) {
        // console.log(respond);
        if (respond.data.status === 200) {
          _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__.Inertia.get(ziggy_js__WEBPACK_IMPORTED_MODULE_4___default()('product.sorder')); // alert(respond.data.name);
        }
      });
    } else {
      axios.post('/register', formData).then(function (respond) {
        // console.log(respond);
        if (respond.status === 200) {
          _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__.Inertia.get(ziggy_js__WEBPACK_IMPORTED_MODULE_4___default()('product.sorder'));
        }
      });
    }
  };

  if (props.cart.items) {
    var s_prod = Object.keys(props.cart.items).map(function (igKey) {
      return props.cart.items[igKey];
      console.log(s_prod);
    });
    tempVar = "12500";
    cartData = s_prod.map(function (prod) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
          className: "pl-0 border-light",
          scope: "row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "media align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
              className: "reset-anchor d-block animsition-link",
              href: "detail.html",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: base_url + '/img/' + prod.item.i_path,
                alt: "...",
                width: "70"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "media-body ml-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
                className: "h6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                  className: "reset-anchor animsition-link",
                  href: "detail.html",
                  children: prod.pname
                })
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
          className: "align-middle border-light",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
            className: "mb-0 small",
            children: ["$", prod.item.price]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
          className: "align-middle border-light",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "border d-flex align-items-center justify-content-between px-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "small text-uppercase text-gray headings-font-family",
              children: "Quantity"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "quantity",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.InertiaLink, {
                className: "dec-btn p-0",
                href: ziggy_js__WEBPACK_IMPORTED_MODULE_4___default()('product.lessOne', {
                  id: prod.item.id
                }),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                  className: "fas fa-caret-left"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                className: "form-control form-control-sm border-0 shadow-0 p-0",
                type: "text",
                defaultValue: prod.qty
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.InertiaLink, {
                className: "inc-btn p-0",
                href: ziggy_js__WEBPACK_IMPORTED_MODULE_4___default()('product.addCart', {
                  id: prod.item.id
                }),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                  className: "fas fa-caret-right"
                })
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
          className: "align-middle border-light",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "mb-0 small",
            children: prod.price
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
          className: "align-middle border-light",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
            className: "reset-anchor",
            href: "#",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
              className: "fas fa-trash-alt small text-muted"
            })
          })
        })]
      });
    });
  } //end of if(props.cart.items)
  // if (typeof tempVar === 'undefined') {
  //   alert("s_prod is notDetecting")
  // }
  // alert(tempVar);


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "page-holder",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "modal fade",
      id: "exampleModal",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "modal-dialog",
        role: "document",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
              className: "modal-title",
              id: "exampleModalLabel",
              children: "Customer Information"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                "aria-hidden": "true",
                children: "\xD7"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "modal-body",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
              onSubmit: submitHandler,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
                  htmlFor: "exampleInputPassword1",
                  children: "Name"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "text",
                  value: values.name,
                  onChange: handleChange,
                  className: "form-control",
                  id: "name"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
                  htmlFor: "exampleInputEmail1",
                  children: "Email address"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "email",
                  value: values.email,
                  onChange: handleChange,
                  className: "form-control",
                  id: "email",
                  "aria-describedby": "emailHelp"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
                  htmlFor: "mobilenum",
                  children: "Mobile Number"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "text",
                  value: values.contact,
                  onChange: handleChange,
                  className: "form-control",
                  id: "contact"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
                  id: "emailHelp",
                  className: "form-text text-muted",
                  children: "We'll never share your Mobile number with anyone else."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
                  htmlFor: "address",
                  children: "Address"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  type: "text",
                  value: values.address,
                  onChange: handleChange,
                  className: "form-control",
                  id: "address"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "form-group row",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  id: "password",
                  hidden: true,
                  type: "password",
                  value: values.password,
                  onChange: handleChange,
                  className: "form-control",
                  name: "password",
                  required: true
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "form-group row ",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                  id: "password_confirmation",
                  hidden: true,
                  type: "password",
                  value: values.password_confirmation,
                  onChange: handleChange,
                  className: "form-control",
                  name: "password_confirmation",
                  required: true
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                type: "button",
                className: "btn btn-secondary",
                "data-dismiss": "modal",
                children: "Close"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", (_jsx2 = {
                type: "button"
              }, _defineProperty(_jsx2, "type", "submit"), _defineProperty(_jsx2, "className", "btn btn-primary ml-1"), _defineProperty(_jsx2, "children", "Place Order"), _jsx2))]
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
        className: "py-5 bg-yel",
        style: {
          backgroundImage: "url(/img/cart5.jpg)"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "row px-4 px-lg-5 py-lg-4 align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "col-lg-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
                className: "h2 text-uppercase mb-0",
                children: "Cart"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "col-lg-6 text-lg-right",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("nav", {
                "aria-label": "breadcrumb",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ol", {
                  className: "breadcrumb justify-content-lg-end mb-0 px-0",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
                    className: "breadcrumb-item",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
                      href: "index.html",
                      children: "Home"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
                    className: "breadcrumb-item active",
                    "aria-current": "page",
                    children: "Cart"
                  })]
                })
              })
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
        className: "py-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
          className: "h5 text-uppercase mb-4",
          children: "Shopping cart"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "col-lg-8 mb-4 mb-lg-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "table-responsive mb-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
                className: "table",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
                  className: "bg-light",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("th", {
                      className: "border-0",
                      scope: "col",
                      children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
                        className: "text-small text-uppercase",
                        children: "Product"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("th", {
                      className: "border-0",
                      scope: "col",
                      children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
                        className: "text-small text-uppercase",
                        children: "Price"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("th", {
                      className: "border-0",
                      scope: "col",
                      children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
                        className: "text-small text-uppercase",
                        children: "Quantity"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("th", {
                      className: "border-0",
                      scope: "col",
                      children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
                        className: "text-small text-uppercase",
                        children: "Total"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                      className: "border-0",
                      scope: "col",
                      children: " "
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
                  children: cartData
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "bg-light px-4 py-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "row align-items-center text-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "col-md-6 mb-3 mb-md-0 text-md-left",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                    className: "btn btn-link p-0 text-dark btn-sm",
                    href: "shop.html",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                      className: "fas fa-long-arrow-alt-left mr-2",
                      children: " "
                    }), "Continue shopping"]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "col-md-6 text-md-right",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__.InertiaLink, {
                    className: "btn btn-outline-dark btn-sm",
                    "data-toggle": "modal",
                    "data-target": "#exampleModal",
                    onClick: stateChange,
                    children: ["Place Order", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                      className: "fas fa-long-arrow-alt-right ml-2"
                    })]
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-lg-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "card border-0 rounded-0 p-lg-4 bg-light",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "card-body",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                  className: "text-uppercase mb-4",
                  children: "Payment Method"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul", {
                  className: "list-unstyled mb-0",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
                    onChange: handleChange,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                      className: "d-flex align-items-center justify-content-between mb-2",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("strong", {
                        className: "text-uppercase small font-weight-bold",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                          className: "fas fa-money-check-alt mr-1"
                        }), "Bank Transfer"]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                        className: "text-muted small",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                          onChange: handleChange,
                          value: "COD",
                          id: "paymentMethod",
                          type: "radio",
                          name: "payment",
                          "aria-label": "Radio button for following text input"
                        })
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                      className: "d-flex align-items-center justify-content-between",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("strong", {
                        className: "text-uppercase small font-weight-bold",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                          className: "fas fa-truck-moving mr-1"
                        }), "Cash on Delivery"]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                        className: "text-muted small",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                          onChange: handleChange,
                          value: "Bank",
                          id: "paymentMethod",
                          type: "radio",
                          name: "payment",
                          "aria-label": "Radio button for following text input"
                        })
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
                    className: "border-bottom my-2"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                    className: "d-flex align-items-center justify-content-between mb-4",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
                      className: "text-uppercase small font-weight-bold",
                      children: "Total"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                      children: ["$", props.cart.totalprice]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("form", {
                      action: "#",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "form-group mb-0",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
                          className: "form-control",
                          type: "text",
                          placeholder: "Enter your coupon"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
                          className: "btn btn-dark btn-sm btn-block",
                          type: "submit",
                          children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("i", {
                            className: "fas fa-gift mr-2"
                          }), "Apply coupon"]
                        })]
                      })
                    })
                  })]
                })]
              })
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ "./resources/js/Pages/Footer.js":
/*!**************************************!*\
  !*** ./resources/js/Pages/Footer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var Footer = function Footer() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("footer", {
    className: "bg-dark text-white",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "container py-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "row py-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "col-md-4 mb-3 mb-md-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h6", {
            className: "text-uppercase mb-3",
            children: "Customer services"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
            className: "list-unstyled mb-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                className: "footer-link",
                href: "#",
                children: "Help & Contact Us"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                className: "footer-link",
                href: "#",
                children: "Returns & Refunds"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                className: "footer-link",
                href: "#",
                children: "Online Stores"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                className: "footer-link",
                href: "#",
                children: "Terms & Conditions"
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "col-md-4 mb-3 mb-md-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h6", {
            className: "text-uppercase mb-3",
            children: "Company"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
            className: "list-unstyled mb-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                className: "footer-link",
                href: "#",
                children: "What We Do"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                className: "footer-link",
                href: "#",
                children: "Available Services"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                className: "footer-link",
                href: "#",
                children: "Latest Posts"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                className: "footer-link",
                href: "#",
                children: "FAQs"
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "col-md-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h6", {
            className: "text-uppercase mb-3",
            children: "Social media"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
            className: "list-unstyled mb-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                className: "footer-link",
                href: "#",
                children: "Twitter"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                className: "footer-link",
                href: "#",
                children: "Instagram"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                className: "footer-link",
                href: "#",
                children: "Tumblr"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                className: "footer-link",
                href: "#",
                children: "Pinterest"
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "border-top pt-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "col-lg-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
              className: "small text-muted mb-0",
              children: "\xA9 2020 All rights reserved."
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "col-lg-6 text-lg-right",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
              className: "small text-muted mb-0",
              children: ["Template designed by ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                className: "text-white reset-anchor",
                href: "https://bootstraptemple.com/p/bootstrap-ecommerce",
                children: "Bootstrap Temple"
              })]
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./resources/js/Pages/Navbar.js":
/*!**************************************!*\
  !*** ./resources/js/Pages/Navbar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var ziggy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/index.js");
/* harmony import */ var ziggy_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ziggy_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var Navbar = function Navbar(props) {
  var card = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("header", {
    className: "header bg-white",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "container px-0 px-lg-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("nav", {
        className: "navbar navbar-expand-lg navbar-light py-3 px-lg-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
          className: "navbar-brand",
          href: "index.html",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "font-weight-bold text-uppercase text-dark",
            children: "Replica Lounge"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          className: "navbar-toggler navbar-toggler-right",
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "navbar-toggler-icon"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "collapse navbar-collapse",
          id: "navbarSupportedContent",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
            className: "navbar-nav mr-auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
              className: "nav-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.InertiaLink, {
                className: "nav-link active",
                href: base_url + '/products',
                children: "Home"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
              className: "nav-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.InertiaLink, {
                className: "nav-link",
                href: ziggy_js__WEBPACK_IMPORTED_MODULE_3___default()('testEffect'),
                children: "Effect"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
              className: "nav-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                className: "nav-link",
                href: base_url + '/shop',
                children: "Shop"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
              className: "nav-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                className: "nav-link",
                href: "detail.html",
                children: "Contact"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
              className: "nav-item dropdown",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                className: "nav-link dropdown-toggle",
                id: "pagesDropdown",
                href: "#",
                "data-toggle": "dropdown",
                "aria-haspopup": "true",
                "aria-expanded": "false",
                children: "Pages"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "dropdown-menu mt-3",
                "aria-labelledby": "pagesDropdown",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.InertiaLink, {
                  className: "dropdown-item border-0 transition-link",
                  method: "post",
                  href: "/logout",
                  children: "Logout"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  className: "dropdown-item border-0 transition-link",
                  href: "shop.html",
                  children: "Category"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  className: "dropdown-item border-0 transition-link",
                  href: "detail.html",
                  children: "Product detail"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  className: "dropdown-item border-0 transition-link",
                  href: "cart.html",
                  children: "Shopping cart"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  className: "dropdown-item border-0 transition-link",
                  href: "checkout.html",
                  children: "Checkout"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
            className: "navbar-nav ml-auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
              className: "nav-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.InertiaLink, {
                className: "nav-link",
                href: base_url + '/product/cart',
                children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                  className: "fas fa-dolly-flatbed mr-1 text-gray"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("small", {
                  className: "text-gray",
                  id: "cart",
                  children: [" (", card.props.cart.totalqty ? card.props.cart.totalqty : 0, ")"]
                })]
              })
            }), card.props.loginDetail.isLoggedIn ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
              className: "nav-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.InertiaLink, {
                className: "nav-link",
                method: "post",
                href: "",
                children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                  className: "fas fa-user-alt mr-1 text-gray"
                }), "Logout"]
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
              className: "nav-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.InertiaLink, {
                className: "nav-link",
                method: "get",
                href: "",
                children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                  className: "fas fa-user-alt mr-1 text-gray"
                }), "Login"]
              })
            })]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./node_modules/ziggy-js/dist/index.js":
/*!*********************************************!*\
  !*** ./node_modules/ziggy-js/dist/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,t){ true?module.exports=t(__webpack_require__(/*! qs */ "./node_modules/ziggy-js/node_modules/qs/lib/index.js")):0}(this,function(n){function t(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function r(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function e(){return e=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n},e.apply(this,arguments)}function i(n){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},i(n)}function u(n,t){return u=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},u(n,t)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(n){return!1}}function f(n,t,r){return f=o()?Reflect.construct:function(n,t,r){var e=[null];e.push.apply(e,t);var i=new(Function.bind.apply(n,e));return r&&u(i,r.prototype),i},f.apply(null,arguments)}function c(n){var t="function"==typeof Map?new Map:void 0;return c=function(n){if(null===n||-1===Function.toString.call(n).indexOf("[native code]"))return n;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return f(n,arguments,i(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,n)},c(n)}var a=/*#__PURE__*/function(){function t(n,t,r){var e,i;this.name=n,this.definition=t,this.bindings=null!=(e=t.bindings)?e:{},this.wheres=null!=(i=t.wheres)?i:{},this.config=r}var e=t.prototype;return e.matchesUrl=function(t){var r=this;if(!this.definition.methods.includes("GET"))return!1;var e=this.template.replace(/(\/?){([^}?]*)(\??)}/g,function(n,t,e,i){var u,o="(?<"+e+">"+((null==(u=r.wheres[e])?void 0:u.replace(/(^\^)|(\$$)/g,""))||"[^/?]+")+")";return i?"("+t+o+")?":""+t+o}).replace(/^\w+:\/\//,""),i=t.replace(/^\w+:\/\//,"").split("?"),u=i[0],o=i[1],f=new RegExp("^"+e+"/?$").exec(u);return!!f&&{params:f.groups,query:n.parse(o)}},e.compile=function(n){var t=this,r=this.parameterSegments;return r.length?this.template.replace(/{([^}?]+)(\??)}/g,function(e,i,u){var o,f,c;if(!u&&[null,void 0].includes(n[i]))throw new Error("Ziggy error: '"+i+"' parameter is required for route '"+t.name+"'.");if(r[r.length-1].name===i&&".*"===t.wheres[i])return encodeURIComponent(null!=(c=n[i])?c:"").replace(/%2F/g,"/");if(t.wheres[i]&&!new RegExp("^"+(u?"("+t.wheres[i]+")?":t.wheres[i])+"$").test(null!=(o=n[i])?o:""))throw new Error("Ziggy error: '"+i+"' parameter does not match required format '"+t.wheres[i]+"' for route '"+t.name+"'.");return encodeURIComponent(null!=(f=n[i])?f:"")}).replace(/\/+$/,""):this.template},r(t,[{key:"template",get:function(){return((this.config.absolute?this.definition.domain?""+this.config.url.match(/^\w+:\/\//)[0]+this.definition.domain+(this.config.port?":"+this.config.port:""):this.config.url:"")+"/"+this.definition.uri).replace(/\/+$/,"")}},{key:"parameterSegments",get:function(){var n,t;return null!=(n=null==(t=this.template.match(/{[^}?]+\??}/g))?void 0:t.map(function(n){return{name:n.replace(/{|\??}/g,""),required:!/\?}$/.test(n)}}))?n:[]}}]),t}(),s=/*#__PURE__*/function(t){var i,o;function f(n,r,i,u){var o;if(void 0===i&&(i=!0),(o=t.call(this)||this).t=null!=u?u:"undefined"!=typeof Ziggy?Ziggy:null==globalThis?void 0:globalThis.Ziggy,o.t=e({},o.t,{absolute:i}),n){if(!o.t.routes[n])throw new Error("Ziggy error: route '"+n+"' is not in the route list.");o.i=new a(n,o.t.routes[n],o.t),o.u=o.o(r)}return o}o=t,(i=f).prototype=Object.create(o.prototype),i.prototype.constructor=i,u(i,o);var c=f.prototype;return c.toString=function(){var t=this,r=Object.keys(this.u).filter(function(n){return!t.i.parameterSegments.some(function(t){return t.name===n})}).filter(function(n){return"_query"!==n}).reduce(function(n,r){var i;return e({},n,((i={})[r]=t.u[r],i))},{});return this.i.compile(this.u)+n.stringify(e({},r,this.u._query),{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:function(n,t){return"boolean"==typeof n?Number(n):t(n)}})},c.l=function(n){var t=this;n?this.t.absolute&&n.startsWith("/")&&(n=this.h().host+n):n=this.v();var r={},i=Object.entries(this.t.routes).find(function(e){return r=new a(e[0],e[1],t.t).matchesUrl(n)})||[void 0,void 0];return e({name:i[0]},r,{route:i[1]})},c.v=function(){var n=this.h(),t=n.pathname,r=n.search;return(this.t.absolute?n.host+t:t.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"))+r},c.current=function(n,t){var r=this.l(),i=r.name,u=r.params,o=r.query,f=r.route;if(!n)return i;var c=new RegExp("^"+n.replace(/\./g,"\\.").replace(/\*/g,".*")+"$").test(i);if([null,void 0].includes(t)||!c)return c;var s=new a(i,f,this.t);t=this.o(t,s);var l=e({},u,o);return!(!Object.values(t).every(function(n){return!n})||Object.values(l).some(function(n){return void 0!==n}))||Object.entries(t).every(function(n){return l[n[0]]==n[1]})},c.h=function(){var n,t,r,e,i,u,o="undefined"!=typeof window?window.location:{},f=o.host,c=o.pathname,a=o.search;return{host:null!=(n=null==(t=this.t.location)?void 0:t.host)?n:void 0===f?"":f,pathname:null!=(r=null==(e=this.t.location)?void 0:e.pathname)?r:void 0===c?"":c,search:null!=(i=null==(u=this.t.location)?void 0:u.search)?i:void 0===a?"":a}},c.has=function(n){return Object.keys(this.t.routes).includes(n)},c.o=function(n,t){var r=this;void 0===n&&(n={}),void 0===t&&(t=this.i),n=["string","number"].includes(typeof n)?[n]:n;var i=t.parameterSegments.filter(function(n){return!r.t.defaults[n.name]});if(Array.isArray(n))n=n.reduce(function(n,t,r){var u,o;return e({},n,i[r]?((u={})[i[r].name]=t,u):"object"==typeof t?t:((o={})[t]="",o))},{});else if(1===i.length&&!n[i[0].name]&&(n.hasOwnProperty(Object.values(t.bindings)[0])||n.hasOwnProperty("id"))){var u;(u={})[i[0].name]=n,n=u}return e({},this.p(t),this.g(n,t))},c.p=function(n){var t=this;return n.parameterSegments.filter(function(n){return t.t.defaults[n.name]}).reduce(function(n,r,i){var u,o=r.name;return e({},n,((u={})[o]=t.t.defaults[o],u))},{})},c.g=function(n,t){var r=t.bindings,i=t.parameterSegments;return Object.entries(n).reduce(function(n,t){var u,o,f=t[0],c=t[1];if(!c||"object"!=typeof c||Array.isArray(c)||!i.some(function(n){return n.name===f}))return e({},n,((o={})[f]=c,o));if(!c.hasOwnProperty(r[f])){if(!c.hasOwnProperty("id"))throw new Error("Ziggy error: object passed as '"+f+"' parameter is missing route model binding key '"+r[f]+"'.");r[f]="id"}return e({},n,((u={})[f]=c[r[f]],u))},{})},c.valueOf=function(){return this.toString()},c.check=function(n){return this.has(n)},r(f,[{key:"params",get:function(){var n=this.l();return e({},n.params,n.query)}}]),f}(/*#__PURE__*/c(String));return function(n,t,r,e){var i=new s(n,t,r,e);return n?i.toString():i}});


/***/ }),

/***/ "./node_modules/ziggy-js/node_modules/qs/lib/formats.js":
/*!**************************************************************!*\
  !*** ./node_modules/ziggy-js/node_modules/qs/lib/formats.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ "./node_modules/ziggy-js/node_modules/qs/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/ziggy-js/node_modules/qs/lib/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/ziggy-js/node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/ziggy-js/node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/ziggy-js/node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/ziggy-js/node_modules/qs/lib/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/ziggy-js/node_modules/qs/lib/parse.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/ziggy-js/node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/ziggy-js/node_modules/qs/lib/stringify.js":
/*!****************************************************************!*\
  !*** ./node_modules/ziggy-js/node_modules/qs/lib/stringify.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/ziggy-js/node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/ziggy-js/node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/ziggy-js/node_modules/qs/lib/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/ziggy-js/node_modules/qs/lib/utils.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var formats = __webpack_require__(/*! ./formats */ "./node_modules/ziggy-js/node_modules/qs/lib/formats.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ })

}]);