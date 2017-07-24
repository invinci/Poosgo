Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var _countries = require('./resources/countries.json');

var _countries2 = babelHelpers.interopRequireDefault(_countries);

var instance = null;

var Country = function () {
    babelHelpers.createClass(Country, null, [{
        key: 'getInstance',
        value: function getInstance() {
            if (!instance) {
                instance = new Country();
            }
            return instance;
        }
    }]);

    function Country() {
        babelHelpers.classCallCheck(this, Country);

        this.countryCodes = [];
    }

    babelHelpers.createClass(Country, [{
        key: 'addCountryCode',
        value: function addCountryCode(iso2, dialCode, priority) {
            if (!(dialCode in this.countryCodes)) {
                this.countryCodes[dialCode] = [];
            }

            var index = priority || 0;
            this.countryCodes[dialCode][index] = iso2;
        }
    }, {
        key: 'getAll',
        value: function getAll() {
            if (!this.countries) {
                this.countries = _lodash2.default.orderBy(_countries2.default, ['name'], ['asc']);
            }
            return this.countries;
        }
    }, {
        key: 'getCountryCodes',
        value: function getCountryCodes() {
            var _this = this;

            if (!this.countryCodes.length) {
                this.getAll().map(function (country) {
                    _this.addCountryCode(country.iso2, country.dialCode, country.priority);
                    if (country.areaCodes) country.areaCodes.map(function (areaCode) {
                        _this.addCountryCode(country.iso2, country.dialCode + areaCode);
                    });
                });
            }
            return this.countryCodes;
        }
    }, {
        key: 'getCountryDataByCode',
        value: function getCountryDataByCode(iso2) {
            return _lodash2.default.find(this.getAll(), function (country) {
                return country.iso2 === iso2;
            });
        }
    }]);
    return Country;
}();

exports.default = Country.getInstance();