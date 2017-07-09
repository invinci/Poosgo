var _jsxFileName = '/home/naveen/Downloads/Archive/src/containers/Signup/EnterPhoneNumber.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

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

var EnterEmail = function (_Component) {
  babelHelpers.inherits(EnterEmail, _Component);

  function EnterEmail(props) {
    babelHelpers.classCallCheck(this, EnterEmail);

    var _this = babelHelpers.possibleConstructorReturn(this, (EnterEmail.__proto__ || Object.getPrototypeOf(EnterEmail)).call(this, props));

    _this.state = {
      mobileNum: '',
      dataAll: {}
    };
    _this.onPressFlag = _this.onPressFlag.bind(_this);
    _this.selectCountry = _this.selectCountry.bind(_this);
    _this.state = {
      cca2: _reactNativeDeviceInfo2.default.getDeviceCountry()
    };
    return _this;
  }

  babelHelpers.createClass(EnterEmail, [{
    key: 'PhoneNumberPickerChanged',
    value: function PhoneNumberPickerChanged(country, callingCode, phoneNumber) {
      console.log(country, callingCode, phoneNumber);
      this.setState({
        countryName: country.name,
        callingCode: callingCode,
        phoneNo: phoneNumber
      });
    }
  }, {
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
    key: 'validateEmail',
    value: function validateEmail() {
      var context = this;
      if (context.state.email == '' && !context.state.email.trim()) {
        alert('Please enter your email');
      } else {
        context.setState({
          isVisible: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var dataAll = this.state.dataAll;
      console.log(dataAll);
      var context = this;
      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginTop: Screen.height / 100 * 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 22, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                }
              },
              'Enter Mobile Number'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 89
                }
              },
              'Mobile Number'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: [styles.containerPhone, { marginTop: -200 }], __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              { style: { flex: 0.2 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 92
                }
              },
              _react2.default.createElement(_reactNativePhoneInput2.default, {
                ref: 'phone',
                onPressFlag: this.onPressFlag,
                textStyle: { color: 'white' },
                style: { height: 40, borderBottomWidth: 1, borderColor: 'white' },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 93
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
                    lineNumber: 99
                  }
                },
                _react2.default.createElement(_reactNative.View, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                  }
                })
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: { flex: 0.8 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 108
                }
              },
              _react2.default.createElement(
                _reactNative.View,
                { style: styles.inputContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                  }
                },
                _react2.default.createElement(_reactNative.TextInput, {
                  autoCapitalize: 'none',
                  autoCorrect: false,
                  underlineColorAndroid: 'transparent',
                  style: { flex: 1, fontSize: 17, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' },
                  onChangeText: function onChangeText(username) {
                    return context.setState({ username: username });
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return context.submit();
              }, style: { marginTop: -(Screen.height / 100) * 5, alignItems: 'center', justifyContent: 'center', marginVertical: 10, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 120
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 18, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121
                }
              },
              'CONTINUE'
            )
          )
        )
      );
    }
  }]);
  return EnterEmail;
}(_react.Component);

EnterEmail.navigationOptions = {
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
    flex: 1,
    alignItems: 'center',
    padding: 20,

    flexDirection: 'row'
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

module.exports = EnterEmail;