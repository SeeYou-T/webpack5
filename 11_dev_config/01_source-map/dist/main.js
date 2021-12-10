/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************!*\
  !*** ./app.js ***!
  \****************/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var A = /*#__PURE__*/function () {
  function A() {
    _classCallCheck(this, A);

    this.str = "haha";
  }

  _createClass(A, [{
    key: "sayHaHa",
    value: function sayHaHa() {
      console.log(this.str);
    }
  }]);

  return A;
}();

var a = new A();
a.sayHaHa();
/******/ })()
;
//# sourceMappingURL=main.js.map