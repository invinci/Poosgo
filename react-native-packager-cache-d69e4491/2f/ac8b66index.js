Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/node_modules/react-native-phone-input/lib/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _flags = require('./resources/flags');

var _flags2 = babelHelpers.interopRequireDefault(_flags);

var _phoneNumber = require('./phoneNumber');

var _phoneNumber2 = babelHelpers.interopRequireDefault(_phoneNumber);

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var _countryPicker = require('./countryPicker');

var _countryPicker2 = babelHelpers.interopRequireDefault(_countryPicker);

var PhoneInput = function (_Component) {
    babelHelpers.inherits(PhoneInput, _Component);

    function PhoneInput(props, context) {
        babelHelpers.classCallCheck(this, PhoneInput);

        var _this = babelHelpers.possibleConstructorReturn(this, (PhoneInput.__proto__ || Object.getPrototypeOf(PhoneInput)).call(this, props, context));

        _this.onChangePhoneNumber = _this.onChangePhoneNumber.bind(_this);
        _this.onPressFlag = _this.onPressFlag.bind(_this);
        _this.selectCountry = _this.selectCountry.bind(_this);
        _this.getFlag = _this.getFlag.bind(_this);

        var iso2 = _this.props.initialCountry || 'us';
        var countryData = _phoneNumber2.default.getCountryDataByCode(iso2);
        _this.state = {
            iso2: iso2,
            formattedNumber: countryData ? '+' + countryData.dialCode : '',
            value: null
        };
        return _this;
    }

    babelHelpers.createClass(PhoneInput, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.value != this.state.value) {
                this.setState({ value: nextProps.value });
                this.updateFlagAndFormatNumber(nextProps.value);
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.value) this.updateFlagAndFormatNumber(this.props.value);
        }
    }, {
        key: 'updateFlagAndFormatNumber',
        value: function updateFlagAndFormatNumber(number) {
            var actionAfterSetState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var iso2 = this.props.initialCountry || 'us';
            var phoneNumber = number;
            if (number) {
                if (phoneNumber[0] != '+') phoneNumber = '+' + phoneNumber;
                iso2 = _phoneNumber2.default.getCountryCodeOfNumber(phoneNumber);
            }
            this.setState({ iso2: iso2, formattedNumber: phoneNumber }, actionAfterSetState);
        }
    }, {
        key: 'onChangePhoneNumber',
        value: function onChangePhoneNumber(number) {
            var _this2 = this;

            var actionAfterSetState = this.props.onChangePhoneNumber ? function () {
                _this2.props.onChangePhoneNumber(number);
            } : null;
            this.updateFlagAndFormatNumber(number, actionAfterSetState);
        }
    }, {
        key: 'isValidNumber',
        value: function isValidNumber() {
            return _phoneNumber2.default.isValidNumber(this.state.formattedNumber, this.state.iso2);
        }
    }, {
        key: 'getNumberType',
        value: function getNumberType() {
            return _phoneNumber2.default.getNumberType(this.state.formattedNumber, this.state.iso2);
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.state.formattedNumber;
        }
    }, {
        key: 'getFlag',
        value: function getFlag(iso2) {
            return _flags2.default.get(iso2);
        }
    }, {
        key: 'getAllCountries',
        value: function getAllCountries() {
            return _phoneNumber2.default.getAllCountries();
        }
    }, {
        key: 'getPickerData',
        value: function getPickerData() {
            return _phoneNumber2.default.getAllCountries().map(function (country, index) {
                return {
                    key: index,
                    image: _flags2.default.get(country.iso2),
                    label: country.name,
                    dialCode: '+' + country.dialCode,
                    iso2: country.iso2
                };
            });
        }
    }, {
        key: 'selectCountry',
        value: function selectCountry(iso2) {
            var _this3 = this;

            if (this.state.iso2 != iso2) {
                var countryData = _phoneNumber2.default.getCountryDataByCode(iso2);
                if (countryData) {
                    this.setState({
                        iso2: iso2,
                        formattedNumber: '+' + countryData.dialCode
                    }, function () {
                        if (_this3.props.onSelectCountry) _this3.props.onSelectCountry(iso2);
                    });
                }
            }
        }
    }, {
        key: 'onPressFlag',
        value: function onPressFlag() {
            if (this.props.onPressFlag) this.props.onPressFlag();else {
                if (this.state.iso2) this.refs.picker.selectCountry(this.state.iso2);
                this.refs.picker.show();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var TextComponent = this.props.textComponent || _reactNative.TextInput;
            return _react2.default.createElement(
                _reactNative.View,
                { style: [_styles2.default.container, this.props.style], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 122
                    }
                },
                _react2.default.createElement(
                    _reactNative.TouchableWithoutFeedback,
                    { onPress: this.onPressFlag, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 123
                        }
                    },
                    _react2.default.createElement(_reactNative.Image, { source: _flags2.default.get(this.state.iso2),
                        resizeMode: 'stretch',
                        style: [_styles2.default.flag, this.props.flagStyle],
                        onPress: this.onPressFlag,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 124
                        }
                    })
                ),
                _react2.default.createElement(
                    _reactNative.View,
                    { style: { flex: 1, marginLeft: this.props.offset || 10 }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 130
                        }
                    },
                    _react2.default.createElement(TextComponent, babelHelpers.extends({
                        autoCorrect: false,
                        style: [_styles2.default.text, this.props.textStyle],
                        onChangeText: function onChangeText(text) {
                            return _this4.onChangePhoneNumber(text);
                        },
                        keyboardType: 'phone-pad',
                        underlineColorAndroid: 'rgba(0,0,0,0)',
                        value: this.state.formattedNumber
                    }, this.props.textProps, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 131
                        }
                    }))
                ),
                _react2.default.createElement(_countryPicker2.default, {
                    ref: 'picker',
                    selectedCountry: this.state.iso2,
                    onSubmit: this.selectCountry,
                    buttonColor: this.props.pickerButtonColor,
                    buttonTextStyle: this.props.pickerButtonTextStyle,
                    itemStyle: this.props.itemStyle,
                    cancelText: this.props.cancelText,
                    cancelTextStyle: this.props.cancelTextStyle,
                    confirmText: this.props.confirmText,
                    confirmTextStyle: this.props.confirmTextStyle,
                    pickerBackgroundColor: this.props.pickerBackgroundColor,
                    itemStyle: this.props.pickerItemStyle,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 142
                    }
                })
            );
        }
    }]);
    return PhoneInput;
}(_react.Component);

exports.default = PhoneInput;


PhoneInput.propTypes = {
    textComponent: _react.PropTypes.func,
    initialCountry: _react.PropTypes.string,
    onChangePhoneNumber: _react.PropTypes.func,
    value: _react.PropTypes.string,
    style: _react.PropTypes.object,
    flagStyle: _react.PropTypes.object,
    textStyle: _react.PropTypes.object,
    offset: _react.PropTypes.number,
    textProps: _react.PropTypes.object,
    onSelectCountry: _react.PropTypes.func,
    pickerButtonColor: _react.PropTypes.string,
    pickerBackgroundColor: _react.PropTypes.string,
    pickerItemStyle: _react.PropTypes.object,
    cancelText: _react.PropTypes.string,
    cancelTextStyle: _react.PropTypes.object,
    confirmText: _react.PropTypes.string,
    confirmTextTextStyle: _react.PropTypes.object
};