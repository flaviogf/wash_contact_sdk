"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contact = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var API_URL = 'https://backend.appwash.net/contact/api/v1/contacts';
var headers = {
  'Content-Type': 'application/json'
};

var json = function json() {
  return function (res) {
    return res.json();
  };
};

var Contact =
/*#__PURE__*/
function () {
  function Contact() {
    _classCallCheck(this, Contact);
  }

  _createClass(Contact, null, [{
    key: "create",
    value: function create(_ref) {
      var name = _ref.name,
          email = _ref.email,
          phone = _ref.phone,
          cep = _ref.cep,
          _ref$interest = _ref.interest,
          interest = _ref$interest === void 0 ? 'washer' : _ref$interest;
      var body = JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        cep: cep,
        interest: interest
      });
      return fetch(API_URL, {
        method: 'POST',
        body: body,
        headers: headers
      }).then(json());
    }
  }]);

  return Contact;
}();

exports.Contact = Contact;