Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/src/containers/ForgotPassword/ForgotPassword.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _ForgotActions = require('./ForgotActions');

var Screen = require('Dimensions').get('window'),
    _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var ForgotPassword = function (_Component) {
  babelHelpers.inherits(ForgotPassword, _Component);

  function ForgotPassword(props) {
    babelHelpers.classCallCheck(this, ForgotPassword);

    var _this = babelHelpers.possibleConstructorReturn(this, (ForgotPassword.__proto__ || Object.getPrototypeOf(ForgotPassword)).call(this, props));

    _this.submit = function () {
      var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var email = _this.props.email;
      var navigate = _this.props.navigation.navigate;

      if (!email) {
        _this.setState({ error: 'Email is required' });
      } else if (!pattern.test(email)) {
        _this.setState({ error: 'Insert a valid Email' });
      } else {
        _this.props.forgotPassword({ email: email });
      }
    };

    _this.state = {
      email: '',
      error: ''
    };
    return _this;
  }

  babelHelpers.createClass(ForgotPassword, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          email = _props.email,
          loading = _props.loading,
          success = _props.success,
          forgotUpdate = _props.forgotUpdate,
          forgotPassword = _props.forgotPassword;

      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginTop: Screen.height / 100 * 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.head, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                }
              },
              'Reset Password'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', justifyContent: 'center', marginTop: Screen.height / 100 * 2 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.forgottext, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              'Enter your email below to reset'
            ),
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.forgottext, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                }
              },
              'your password'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 10 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 18, fontWeight: '700', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                }
              },
              'EMAIL'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: styles.inputContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              }
            },
            _react2.default.createElement(_reactNative.TextInput, {
              autoCapitalize: 'none',
              autoCorrect: false,
              keyboardType: 'email-address',
              underlineColorAndroid: 'transparent',
              value: email,
              style: { flex: 1, fontSize: 16, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' },
              onChangeText: function onChangeText(email) {
                return forgotUpdate({ prop: 'email', value: email });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            })
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { height: 30, alignItems: 'center', justifyContent: 'center' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.error, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80
                }
              },
              this.state.error
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return _this2.submit();
              }, style: styles.loginButton, __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 22, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                }
              },
              'SUBMIT'
            )
          )
        )
      );
    }
  }]);
  return ForgotPassword;
}(_react.Component);

ForgotPassword.navigationOptions = {
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
      marginVertical: 5,
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
  loginButton: {
    marginTop: Screen.height / 100 * 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: '#ffffff',
    borderWidth: 1, borderColor: 'transparent', borderRadius: 5
  },
  forgottext: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgba(255,255,255,.9)',
    fontFamily: 'din round pro', textAlign: 'center'
  },
  head: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: 'din round pro'
  },
  error: {
    color: 'red',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'din round pro'
  }
});
var mapStateToProps = function mapStateToProps(_ref) {
  var Forgot = _ref.Forgot;
  var email = Forgot.email,
      loading = Forgot.loading,
      success = Forgot.success;

  return {
    email: email, loading: loading, success: success
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { forgotUpdate: _ForgotActions.forgotUpdate, forgotPassword: _ForgotActions.forgotPassword })(ForgotPassword);