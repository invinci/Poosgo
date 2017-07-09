var _jsxFileName = '/home/naveen/Downloads/Archive/Test.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativePhoneInput = require('react-native-phone-input');

var _reactNativePhoneInput2 = babelHelpers.interopRequireDefault(_reactNativePhoneInput);

var _reactNativeCountryPickerModal = require('react-native-country-picker-modal');

var _reactNativeCountryPickerModal2 = babelHelpers.interopRequireDefault(_reactNativeCountryPickerModal);

var Test = function (_Component) {
    babelHelpers.inherits(Test, _Component);

    function Test() {
        babelHelpers.classCallCheck(this, Test);

        var _this = babelHelpers.possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this));

        _this.onPressFlag = _this.onPressFlag.bind(_this);
        _this.selectCountry = _this.selectCountry.bind(_this);
        _this.state = {
            cca2: 'US'
        };
        return _this;
    }

    babelHelpers.createClass(Test, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                pickerData: this.refs.phone.getPickerData()
            });
        }
    }, {
        key: 'onPressFlag',
        value: function onPressFlag() {
            this.refs.countryPicker.openModal();
        }
    }, {
        key: 'selectCountry',
        value: function selectCountry(country) {
            this.refs.phone.selectCountry(country.cca2.toLowerCase());
            this.setState({ cca2: country.cca2 });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactNative.View,
                { style: styles.container, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                    }
                },
                _react2.default.createElement(_reactNativePhoneInput2.default, {
                    ref: 'phone',
                    onPressFlag: this.onPressFlag,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                }),
                _react2.default.createElement(
                    _reactNativeCountryPickerModal2.default,
                    {
                        ref: 'countryPicker',
                        onChange: function onChange(value) {
                            return _this2.selectCountry(value);
                        },
                        translation: 'eng',
                        cca2: this.state.cca2,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 46
                        }
                    },
                    _react2.default.createElement(_reactNative.View, {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        }
                    })
                )
            );
        }
    }]);
    return Test;
}(_react.Component);

var styles = _reactNative.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 60
    }
});

module.exports = Test;