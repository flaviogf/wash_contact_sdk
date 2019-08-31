"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mask = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Mask =
/*#__PURE__*/
function () {
  function Mask() {
    _classCallCheck(this, Mask);
  }

  _createClass(Mask, null, [{
    key: "cep",
    value: function cep(value) {
      return value.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2').replace(/(-\d{3})\d+$/, '$1');
    }
  }, {
    key: "phone",
    value: function phone(value) {
      return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2').replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3').replace(/(-\d{4})\d+$/, '$1');
    }
  }]);

  return Mask;
}();

exports.Mask = Mask;