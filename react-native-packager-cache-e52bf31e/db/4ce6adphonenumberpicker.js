

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/home/naveen/Downloads/Archive/node_modules/react-native-country-code-telephone-input/phonenumberpicker.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _libphonenumberJs = require('libphonenumber-js');

var _metadata = require('libphonenumber-js/metadata.min');

var _metadata2 = _interopRequireDefault(_metadata);

var _countrypicker = require('./countrypicker');

var _countrypicker2 = _interopRequireDefault(_countrypicker);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    PhoneNumberPicker: {
        displayName: 'PhoneNumberPicker'
    }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
    filename: '/home/naveen/Downloads/Archive/node_modules/react-native-country-code-telephone-input/phonenumberpicker.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmrLibIndexJs2(Component, id);
    };
}

var styles = _reactNative.StyleSheet.create({
    containerCol: {
        flexDirection: 'column',
        marginVertical: 8,
        marginHorizontal: 8
    },

    containerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    viewBottomBorder: {
        marginHorizontal: 30,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },

    TextInputPhoneNumber: {
        fontSize: 20,
        height: 60,
        alignItems: 'center'
    },

    TextCountryName: {
        fontSize: 20,
        color: '#5890FF'
    }
});

var PhoneNumberPicker = _wrapComponent('PhoneNumberPicker')(function (_React$Component) {
    _inherits(PhoneNumberPicker, _React$Component);

    function PhoneNumberPicker(props) {
        _classCallCheck(this, PhoneNumberPicker);

        var _this = _possibleConstructorReturn(this, (PhoneNumberPicker.__proto__ || Object.getPrototypeOf(PhoneNumberPicker)).call(this, props));

        _this.state = {
            phoneNo: '',
            country: props.countryHint,
            onChange: props.onChange,
            skipFormatAsYouType: false
        };
        return _this;
    }

    _createClass(PhoneNumberPicker, [{
        key: 'numberChanged',
        value: function numberChanged(country, callingCode, phoneNumber) {
            callingCode = callingCode + "";
            phoneNumber = phoneNumber + "";
            callingCode = callingCode.replace(/\D/g, '');
            phoneNumber = phoneNumber.replace(/\D/g, '');
            this.state.onChange(country, callingCode, phoneNumber);
        }
    }, {
        key: 'getCountryFromCCA2',
        value: function getCountryFromCCA2(cca2) {
            var countryName = "";
            var callingCode = "";

            do {
                if (cca2.length > 2) {
                    cca2 = "";
                    break;
                }

                for (var i = 0; i < _data2.default.length; i++) {
                    if (_data2.default[i].code.toUpperCase() == cca2.toUpperCase()) {
                        countryName = _data2.default[i].name;
                        callingCode = _data2.default[i].dial_code;
                        break;
                    }
                }
            } while (0);

            if (countryName.length == 0 || cca2.length == 0 || callingCode.length == 0) {
                countryName = this.state.country.callingCode.length > 0 ? "Invalid country code" : "Choose a country";

                cca2 = "";
                callingCode = "";
            }

            return { name: countryName,
                cca2: cca2,
                callingCode: callingCode };
        }
    }, {
        key: 'getCountryFromCallingCode',
        value: function getCountryFromCallingCode(callingCode, phoneNumber) {
            var cca2 = "";
            var countryName = "";

            callingCode = callingCode.replace(/\D/g, '');
            phoneNumber = phoneNumber.replace(/\D/g, '');

            do {
                if (callingCode.length > 4) {
                    callingCode = callingCode.slice(0, 4);
                    break;
                }

                if (_metadata2.default.country_phone_code_to_countries[callingCode] && _metadata2.default.country_phone_code_to_countries[callingCode][0]) {
                    cca2 = _metadata2.default.country_phone_code_to_countries[callingCode][0];
                }

                var formatter = new _libphonenumberJs.asYouType();

                if (cca2.length == 0) {
                    formatter.input("+" + callingCode);
                    if (formatter.country !== undefined && formatter.country.length == 2) {
                        cca2 = formatter.country;
                    }
                }

                if (cca2.length == 0) {
                    formatter.input("+" + callingCode + phoneNumber);
                    if (formatter.country !== undefined && formatter.country.length == 2) {
                        cca2 = formatter.country;
                    }
                }

                if (cca2.length) {
                    for (var i = 0; i < _data2.default.length; i++) {
                        if (_data2.default[i].code.toUpperCase() == cca2.toUpperCase()) {
                            countryName = _data2.default[i].name;
                            callingCode = _data2.default[i].dial_code.replace(/\D/g, '');
                            break;
                        }
                    }
                }
            } while (0);

            if (countryName.length == 0 || cca2.length == 0) {
                countryName = this.state.country.callingCode.length > 0 ? "Invalid country code" : "Choose a country";
                cca2 = "";
            }

            return { name: countryName,
                cca2: cca2,
                callingCode: callingCode };
        }
    }, {
        key: 'FlagPickedChanged',
        value: function FlagPickedChanged(updatedCountry) {
            if (updatedCountry === undefined) {
                return;
            }
            this.setState({ country: updatedCountry });
            this.numberChanged(updatedCountry, updatedCountry.callingCode, this.state.phoneNo);
            this.textInputPhoneNumber.focus();
        }
    }, {
        key: 'CallingCodeChanged',
        value: function CallingCodeChanged(updatedCallingCode) {
            var countryFromCallingCode = this.getCountryFromCallingCode(updatedCallingCode, this.state.phoneNo);
            this.setState({ country: countryFromCallingCode });
            this.numberChanged(countryFromCallingCode, countryFromCallingCode.callingCode, this.state.phoneNo);
            if (countryFromCallingCode.cca2.length) {
                this.textInputPhoneNumber.focus();
            }
        }
    }, {
        key: 'PhoneChanged',
        value: function PhoneChanged(updatedPhoneNo) {
            updatedPhoneNo = updatedPhoneNo.replace(/\D/g, '');

            var skipFormatAsYouType = updatedPhoneNo == this.state.phoneNo;

            skipFormatAsYouType |= updatedPhoneNo.length < this.state.phoneNo.length;
            this.setState({ skipFormatAsYouType: skipFormatAsYouType });
            this.setState({ phoneNo: updatedPhoneNo });

            this.numberChanged(this.state.country, this.state.country.callingCode, updatedPhoneNo);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            setTimeout(function () {
                _this2.textInputPhoneNumber.focus();
            }, 100);
        }
    }, {
        key: 'SafeRenderCountryPicker',
        value: function SafeRenderCountryPicker(cca2) {
            var _this3 = this;

            var countryPicker = void 0;
            var countryFromCCA2 = this.getCountryFromCCA2(cca2);
            if (countryFromCCA2.cca2.length == 0) {
                cca2 = 'LS';
            }
            countryPicker = _react3.default.createElement(
                _reactNative.View,
                { style: [styles.containerRow, styles.viewBottomBorder], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 229
                    }
                },
                _react3.default.createElement(
                    _reactNative.TouchableOpacity,
                    { style: [styles.containerRow], onPress: function onPress() {
                            return _this3.countryPicker.openModal();
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 230
                        }
                    },
                    _react3.default.createElement(_countrypicker2.default, {
                        ref: function ref(countryPicker) {
                            return _this3.countryPicker = countryPicker;
                        },
                        closeable: true,
                        onChange: this.FlagPickedChanged.bind(this),
                        cca2: cca2, translation: 'eng', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 231
                        }
                    }),
                    _react3.default.createElement(
                        _reactNative.Text,
                        { style: styles.TextCountryName, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 236
                            }
                        },
                        ' ',
                        countryFromCCA2.name,
                        ' '
                    ),
                    _react3.default.createElement(_reactNative.Image, {
                        style: { width: 20, height: 20 },
                        source: require('./down.png'), __source: {
                            fileName: _jsxFileName,
                            lineNumber: 237
                        }
                    })
                )
            );
            return countryPicker;
        }
    }, {
        key: 'PhoneNumberFormatAsYouType',
        value: function PhoneNumberFormatAsYouType() {
            if (this.state.skipFormatAsYouType) {
                return this.state.phoneNo;
            }
            return new _libphonenumberJs.asYouType(this.state.country.cca2).input(this.state.phoneNo);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react3.default.createElement(
                _reactNative.View,
                { style: styles.containerCol, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 254
                    }
                },
                this.SafeRenderCountryPicker(this.state.country.cca2),
                _react3.default.createElement(
                    _reactNative.View,
                    { style: styles.containerRow, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 256
                        }
                    },
                    _react3.default.createElement(
                        _reactNative.View,
                        { style: [styles.containerRow, styles.viewBottomBorder], __source: {
                                fileName: _jsxFileName,
                                lineNumber: 257
                            }
                        },
                        _react3.default.createElement(_reactNative.TextInput, { style: [styles.TextInputPhoneNumber, { flex: 3, borderBottomWidth: 2 }],
                            underlineColorAndroid: 'transparent',
                            onChangeText: this.CallingCodeChanged.bind(this),
                            value: "+" + this.state.country.callingCode,
                            keyboardType: 'phone-pad', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 258
                            }
                        }),
                        _react3.default.createElement(_reactNative.TextInput, { style: [styles.TextInputPhoneNumber, { flex: 1 }],
                            underlineColorAndroid: 'transparent',
                            editable: false,
                            value: "-", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 264
                            }
                        }),
                        _react3.default.createElement(_reactNative.TextInput, { style: [styles.TextInputPhoneNumber, { flex: 8, borderBottomWidth: 2 }],
                            ref: function ref(textInputPhoneNumber) {
                                return _this4.textInputPhoneNumber = textInputPhoneNumber;
                            },
                            underlineColorAndroid: 'transparent',
                            onChangeText: this.PhoneChanged.bind(this),
                            placeholder: ' Enter your phone number',
                            value: this.PhoneNumberFormatAsYouType(),
                            autoFocus: true,
                            keyboardType: 'phone-pad', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 269
                            }
                        })
                    )
                )
            );
        }
    }]);

    return PhoneNumberPicker;
}(_react3.default.Component));

PhoneNumberPicker.PropTypes = {
    onChange: _react3.default.PropTypes.Function,
    countryHint: _react3.default.PropTypes.Object
};

PhoneNumberPicker.defaultProps = {
    countryHint: { name: 'United States', cca2: 'US', callingCode: '1' }
};

exports.default = PhoneNumberPicker;