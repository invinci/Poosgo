Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var _country = require('./country');

var _country2 = babelHelpers.interopRequireDefault(_country);

var _numberType = require('./resources/numberType.json');

var _numberType2 = babelHelpers.interopRequireDefault(_numberType);

var PNF = require('google-libphonenumber').PhoneNumberFormat;
var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
var instance = null;

var PhoneNumber = function () {
    babelHelpers.createClass(PhoneNumber, null, [{
        key: 'getInstance',
        value: function getInstance() {
            if (!instance) {
                instance = new PhoneNumber();
            }
            return instance;
        }
    }]);

    function PhoneNumber() {
        babelHelpers.classCallCheck(this, PhoneNumber);
    }

    babelHelpers.createClass(PhoneNumber, [{
        key: 'getAllCountries',
        value: function getAllCountries() {
            return _country2.default.getAll();
        }
    }, {
        key: 'getDialCode',
        value: function getDialCode(number) {
            var dialCode = "";

            if (number.charAt(0) == "+") {
                var numericChars = "";

                for (var i = 0; i < number.length; i++) {
                    var c = number.charAt(i);

                    if (this.isNumeric(c)) {
                        numericChars += c;

                        if (_country2.default.getCountryCodes()[numericChars]) {
                            dialCode = number.substr(0, i + 1);
                        }

                        if (numericChars.length == 4) {
                            break;
                        }
                    }
                }
            }
            return dialCode;
        }
    }, {
        key: 'getNumeric',
        value: function getNumeric(str) {
            return str.replace(/\D/g, "");
        }
    }, {
        key: 'isNumeric',
        value: function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
    }, {
        key: 'getCountryCodeOfNumber',
        value: function getCountryCodeOfNumber(number) {
            var dialCode = this.getDialCode(number);
            var numeric = this.getNumeric(dialCode);
            var countryCode = _country2.default.getCountryCodes()[numeric];

            if (countryCode) return _lodash2.default.first(countryCode.filter(function (iso2) {
                return iso2;
            }));else return '';
        }
    }, {
        key: 'parse',
        value: function parse(number, iso2) {
            try {
                return phoneUtil.parse(number, iso2);
            } catch (err) {
                console.log("Exception was thrown: " + err.toString());
                return null;
            }
        }
    }, {
        key: 'isValidNumber',
        value: function isValidNumber(number, iso2) {
            var phoneInfo = this.parse(number, iso2);
            if (phoneInfo) return phoneUtil.isValidNumber(phoneInfo);else return false;
        }
    }, {
        key: 'getNumberType',
        value: function getNumberType(number, iso2) {
            var phoneInfo = this.parse(number, iso2);
            var type = -1;
            if (phoneInfo) type = phoneUtil.getNumberType(phoneInfo);
            return _lodash2.default.findKey(_numberType2.default, function (noType) {
                return noType === type;
            });
        }
    }, {
        key: 'getCountryDataByCode',
        value: function getCountryDataByCode(iso2) {
            return _country2.default.getCountryDataByCode(iso2);
        }
    }]);
    return PhoneNumber;
}();

exports.default = PhoneNumber.getInstance();