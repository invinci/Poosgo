var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/home/naveen/Downloads/Archive/src/containers/Signup/EnterPhoneNumber.js';

var _reactNative = require('react-native');

var _reactNativeCountryCodeTelephoneInput = require('react-native-country-code-telephone-input');

var _reactNativeCountryCodeTelephoneInput2 = _interopRequireDefault(_reactNativeCountryCodeTelephoneInput);

var _reactNativeCountryPickerModal = require('react-native-country-picker-modal');

var _reactNativeCountryPickerModal2 = _interopRequireDefault(_reactNativeCountryPickerModal);

var _reactNativeDeviceInfo = require('react-native-device-info');

var _reactNativeDeviceInfo2 = _interopRequireDefault(_reactNativeDeviceInfo);

var _data = require('app/lib/data.json');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  EnterEmail: {
    displayName: 'EnterEmail'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/home/naveen/Downloads/Archive/src/containers/Signup/EnterPhoneNumber.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var Screen = require('Dimensions').get('window'),
    _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var NORTH_AMERICA = ['CA', 'MX', 'US'];

var EnterEmail = _wrapComponent('EnterEmail')((_temp = _class = function (_Component) {
  _inherits(EnterEmail, _Component);

  function EnterEmail(props) {
    _classCallCheck(this, EnterEmail);

    var _this = _possibleConstructorReturn(this, (EnterEmail.__proto__ || Object.getPrototypeOf(EnterEmail)).call(this, props));

    _this.state = {
      mobileNum: '',
      dataAll: {}
    };
    return _this;
  }

  _createClass(EnterEmail, [{
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
      return _react3.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        },
        _react3.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            }
          },
          _react3.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginTop: Screen.height / 100 * 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              }
            },
            _react3.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 22, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 118
                }
              },
              'Enter Mobile Number'
            )
          ),
          _react3.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 120
              }
            },
            _react3.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121
                }
              },
              'Mobile Number'
            )
          ),
          _react3.default.createElement(_reactNativeCountryCodeTelephoneInput2.default, {
            countryHint: { name: this.state.dataAll.name, cca2: this.state.dataAll.code, callingCode: dataAll.dial_code },
            onChange: this.PhoneNumberPickerChanged.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            }
          }),
          _react3.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return context.submit();
              }, style: { marginTop: Screen.height / 100 * 15, alignItems: 'center', justifyContent: 'center', marginVertical: 10, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 126
              }
            },
            _react3.default.createElement(
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
}(_react2.Component), _class.navigationOptions = {
  headerStyle: {
    backgroundColor: '#5a0fb4',
    elevation: 1 },
  headerTintColor: 'white'
}, _temp));

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