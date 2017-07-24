var _jsxFileName = '/home/naveen/Downloads/Archive/src/containers/Signup/EnterPhoneNumber.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeCountryCodeTelephoneInput = require('react-native-country-code-telephone-input');

var _reactNativeCountryCodeTelephoneInput2 = babelHelpers.interopRequireDefault(_reactNativeCountryCodeTelephoneInput);

var _reactNativeCountryPickerModal = require('react-native-country-picker-modal');

var _reactNativeCountryPickerModal2 = babelHelpers.interopRequireDefault(_reactNativeCountryPickerModal);

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
    key: 'componentWillMount',
    value: function componentWillMount() {
      var code = _reactNativeDeviceInfo2.default.getDeviceCountry();
      var dataAll = {};
      for (var i = 0; i < _data2.default.length; i++) {
        console.log(_data2.default[i]);
        if (_data2.default[i].code === code) {
          dataAll = _data2.default[i];
          this.setState({ dataAll: dataAll });
          return;
        }
      }
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
    key: 'submit',
    value: function submit() {}
  }, {
    key: 'render',
    value: function render() {
      var dataAll = this.state.dataAll;
      console.log(dataAll);
      var context = this;
      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginTop: Screen.height / 100 * 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 22, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 118
                }
              },
              'Enter Mobile Number'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 120
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121
                }
              },
              'Mobile Number'
            )
          ),
          _react2.default.createElement(_reactNativeCountryCodeTelephoneInput2.default, {
            countryHint: { name: this.state.dataAll.name, cca2: this.state.dataAll.code, callingCode: dataAll.dial_code },
            onChange: this.PhoneNumberPickerChanged.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            }
          }),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return context.submit();
              }, style: { marginTop: Screen.height / 100 * 15, alignItems: 'center', justifyContent: 'center', marginVertical: 10, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 18, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 127
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
  inputContainer: {
    borderBottomWidth: 1,
    marginVertical: 16,
    marginHorizontal: Screen.width / 100 * 10,
    borderColor: '#b7b7b7',
    height: 30
  }
});

module.exports = EnterEmail;