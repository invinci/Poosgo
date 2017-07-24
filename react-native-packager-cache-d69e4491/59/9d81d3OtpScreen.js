var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/src/containers/ForgotPassword/OtpScreen/OtpScreen.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Screen = require('Dimensions').get('window'),
    _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var OtpScreen = function (_Component) {
  babelHelpers.inherits(OtpScreen, _Component);

  function OtpScreen(props) {
    babelHelpers.classCallCheck(this, OtpScreen);

    var _this = babelHelpers.possibleConstructorReturn(this, (OtpScreen.__proto__ || Object.getPrototypeOf(OtpScreen)).call(this, props));

    _this.state = {
      otp1: '',
      otp2: '',
      otp3: '',
      otp4: '',
      isVisible: false
    };
    return _this;
  }

  babelHelpers.createClass(OtpScreen, [{
    key: 'resend',
    value: function resend() {}
  }, {
    key: 'submit',
    value: function submit() {
      var context = this;
      var payLoad = {

        "otp": context.state.otp1 + context.state.otp2 + context.state.otp3 + context.state.otp4
      };
      console.log('otp ----- ', payLoad);
      context.setState({
        isVisible: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var context = this;
      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginTop: Screen.height / 100 * 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 22, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                }
              },
              'Enter OTP'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
                }
              },
              'OTP'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { flexDirection: 'row' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              { style: styles.inputContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              },
              _react2.default.createElement(_reactNative.TextInput, {
                autoCapitalize: 'none',
                autoCorrect: false,
                maxLength: 1,
                underlineColorAndroid: 'transparent',
                onSubmitEditing: function onSubmitEditing(event) {
                  _this2.refs.otp2.focus();
                },
                style: { flex: 1, fontSize: 16, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro', textAlign: 'center' },
                onChangeText: function onChangeText(otp1) {
                  return context.setState({ otp1: otp1 });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                }
              })
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: styles.inputContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              },
              _react2.default.createElement(_reactNative.TextInput, {
                ref: 'otp2',
                autoCapitalize: 'none',
                autoCorrect: false,
                maxLength: 1,
                underlineColorAndroid: 'transparent',
                onSubmitEditing: function onSubmitEditing(event) {
                  _this2.refs.otp3.focus();
                },
                style: { flex: 1, fontSize: 16, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro', textAlign: 'center' },
                onChangeText: function onChangeText(otp2) {
                  return context.setState({ otp2: otp2 });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
                }
              })
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: styles.inputContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
                }
              },
              _react2.default.createElement(_reactNative.TextInput, {
                ref: 'otp3',
                autoCapitalize: 'none',
                autoCorrect: false,
                maxLength: 1,
                underlineColorAndroid: 'transparent',
                onSubmitEditing: function onSubmitEditing(event) {
                  _this2.refs.otp4.focus();
                },
                style: { flex: 1, fontSize: 16, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro', textAlign: 'center' },
                onChangeText: function onChangeText(otp3) {
                  return context.setState({ otp3: otp3 });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                }
              })
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: styles.inputContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 95
                }
              },
              _react2.default.createElement(_reactNative.TextInput, {
                ref: 'otp4',
                autoCapitalize: 'none',
                autoCorrect: false,
                maxLength: 1,
                underlineColorAndroid: 'transparent',
                style: { flex: 1, fontSize: 16, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro', textAlign: 'center' },
                onChangeText: function onChangeText(otp4) {
                  return context.setState({ otp4: otp4 });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 96
                }
              })
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return context.submit();
              }, style: { marginTop: Screen.height / 100 * 15, alignItems: 'center', justifyContent: 'center', marginVertical: 10, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 18, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 108
                }
              },
              'VERIFY'
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return context.resend();
              }, style: { marginTop: Screen.height / 100 * 15, alignItems: 'center', justifyContent: 'center', marginVertical: 10, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 18, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                }
              },
              'RESEND OTP'
            )
          )
        )
      );
    }
  }]);
  return OtpScreen;
}(_react.Component);

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a0fb4'
  },
  inputContainer: {
    flex: 1,
    borderBottomWidth: 1,
    marginVertical: Screen.width / 100 * 5,
    marginHorizontal: Screen.width / 100 * 5,
    borderColor: '#b7b7b7',
    height: 30
  }
});

module.exports = OtpScreen;