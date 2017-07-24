Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/src/containers/Signup/EnterPhoneNumber.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _SignupActions = require('./SignupActions');

var _reactNativeCountryCodeTelephoneInput = require('react-native-country-code-telephone-input');

var _reactNativeCountryCodeTelephoneInput2 = babelHelpers.interopRequireDefault(_reactNativeCountryCodeTelephoneInput);

var _reactNativeCountryPickerModal = require('react-native-country-picker-modal');

var _reactNativeCountryPickerModal2 = babelHelpers.interopRequireDefault(_reactNativeCountryPickerModal);

var _reactNativePhoneInput = require('react-native-phone-input');

var _reactNativePhoneInput2 = babelHelpers.interopRequireDefault(_reactNativePhoneInput);

var _reactNativeDeviceInfo = require('react-native-device-info');

var _reactNativeDeviceInfo2 = babelHelpers.interopRequireDefault(_reactNativeDeviceInfo);

var _data = require('app/lib/data.json');

var _data2 = babelHelpers.interopRequireDefault(_data);

var Screen = require('Dimensions').get('window'),
    _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var NORTH_AMERICA = ['CA', 'MX', 'US'];

var EnterPhoneNumber = function (_Component) {
  babelHelpers.inherits(EnterPhoneNumber, _Component);

  function EnterPhoneNumber(props) {
    babelHelpers.classCallCheck(this, EnterPhoneNumber);

    var _this = babelHelpers.possibleConstructorReturn(this, (EnterPhoneNumber.__proto__ || Object.getPrototypeOf(EnterPhoneNumber)).call(this, props));

    _this.submit = function () {
      console.log("phone", _this.state.callingCode, "country", country);
    };

    _this.state = {
      mobile: '',
      dataAll: {}
    };
    _this.onPressFlag = _this.onPressFlag.bind(_this);
    _this.selectCountry = _this.selectCountry.bind(_this);
    _this.state = {
      cca2: _reactNativeDeviceInfo2.default.getDeviceCountry()
    };
    return _this;
  }

  babelHelpers.createClass(EnterPhoneNumber, [{
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
      console.log("phone", this.state.callingCode, "country", country);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var dataAll = this.state.dataAll;
      var context = this;
      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginTop: Screen.height / 100 * 10 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 22, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                }
              },
              'Enter Mobile Number'
            ),
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro', marginTop: Screen.height / 100 * 2 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 77
                }
              },
              'Mobile Number'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: styles.containerPhone, __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              { style: { flex: 0.2, height: 40 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82
                }
              },
              _react2.default.createElement(_reactNativePhoneInput2.default, {
                ref: 'phone',
                onPressFlag: this.onPressFlag,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
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
                    lineNumber: 87
                  }
                },
                _react2.default.createElement(_reactNative.View, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                  }
                })
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: { flex: 0.8 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 96
                }
              },
              _react2.default.createElement(
                _reactNative.View,
                { style: styles.inputContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                  }
                },
                _react2.default.createElement(_reactNative.TextInput, {
                  autoCapitalize: 'none',
                  autoCorrect: false,
                  underlineColorAndroid: 'transparent',
                  style: { flex: 1, fontSize: 17, fontWeight: '700', color: 'white', fontFamily: 'din round pro' },
                  onChangeText: function onChangeText(mobile) {
                    return _this2.setState({ mobile: mobile });
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return _this2.submit();
              }, style: { marginTop: Screen.height / 100 * 15, alignItems: 'center', justifyContent: 'center', marginVertical: 10, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 108
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 18, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 109
                }
              },
              'CONTINUE'
            )
          )
        )
      );
    }
  }]);
  return EnterPhoneNumber;
}(_react.Component);

EnterPhoneNumber.navigationOptions = {
  headerStyle: {
    backgroundColor: '#5a0fb4',
    elevation: 1 },
  headerTintColor: 'white'
};


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a0fb4'
  },

  containerPhone: {

    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginHorizontal: 50,
    flexDirection: 'row',
    height: 80

  },
  inputContainer: babelHelpers.extends({}, _reactNative.Platform.select({
    ios: {
      borderBottomWidth: 1,
      marginVertical: 16,
      marginHorizontal: Screen.width / 100 * 10,
      borderColor: '#b7b7b7',
      height: 30
    },
    android: {
      borderBottomWidth: 1,
      marginVertical: 5,
      marginHorizontal: Screen.width / 100 * 10,
      borderColor: '#b7b7b7',
      height: 40
    }
  }))
});

var mapStateToProps = function mapStateToProps(_ref) {
  var Signup = _ref.Signup;
  var mobile = Signup.mobile;

  return {
    mobile: mobile
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { SignupUpdate: _SignupActions.SignupUpdate })(EnterPhoneNumber);