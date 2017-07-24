Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/src/containers/Signup/EnterEmail.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _SignupActions = require('./SignupActions');

var Screen = require('Dimensions').get('window'),
    _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var EnterEmail = function (_Component) {
  babelHelpers.inherits(EnterEmail, _Component);

  function EnterEmail() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, EnterEmail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = EnterEmail.__proto__ || Object.getPrototypeOf(EnterEmail)).call.apply(_ref, [this].concat(args))), _this), _this.state = { email: '', error: '' }, _this.submit = function () {
      var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var email = _this.state.email;
      var navigate = _this.props.navigation.navigate;

      if (!email) {
        _this.setState({ error: 'Please Enter Email' });
      } else if (!pattern.test(email)) {
        _this.setState({ error: 'Email is not valid' });
      } else {
        _this.props.SignupUpdate({ prop: 'email', value: email });
        navigate('EnterPhoneNumber');
      }
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(EnterEmail, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var email = this.props.email;


      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginTop: Screen.height / 100 * 3 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 22, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58
                }
              },
              'Enter Email'
            ),
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 15, fontWeight: '400', color: '#ffffff', fontFamily: 'din round pro', marginTop: 5, textAlign: 'center', padding: 3, marginHorizontal: 10 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                }
              },
              'Other Users Can Search You By Email, Name, Phone Number'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              'EMAIL'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: styles.inputContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            },
            _react2.default.createElement(_reactNative.TextInput, {
              autoCapitalize: 'none',
              underlineColorAndroid: 'transparent',
              autoCorrect: false,
              keyboardType: 'email-address',
              value: this.state.email,
              style: { flex: 1, fontSize: 16, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' },
              onChangeText: function onChangeText(email) {
                return _this2.setState({ email: email });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            })
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { height: 30, alignItems: 'center', justifyContent: 'center', marginTop: 20 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.error, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                }
              },
              this.state.error
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return _this2.submit();
              },
              style: { marginTop: Screen.height / 100 * 25, alignItems: 'center', justifyContent: 'center', marginVertical: 10, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 18, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
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
  })),
  error: {
    color: 'red',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'din round pro'
  }
});
var mapStateToProps = function mapStateToProps(_ref2) {
  var Signup = _ref2.Signup;
  var email = Signup.email;

  return {
    email: email
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { SignupUpdate: _SignupActions.SignupUpdate })(EnterEmail);