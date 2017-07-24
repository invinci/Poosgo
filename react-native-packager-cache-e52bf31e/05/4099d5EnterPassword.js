var _jsxFileName = '/home/naveen/Downloads/Archive/src/containers/Signup/EnterPassword.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRootToast = require('react-native-root-toast');

var _reactNativeRootToast2 = babelHelpers.interopRequireDefault(_reactNativeRootToast);

var Screen = require('Dimensions').get('window'),
    _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var EnterPassword = function (_Component) {
  babelHelpers.inherits(EnterPassword, _Component);

  function EnterPassword() {
    babelHelpers.classCallCheck(this, EnterPassword);
    return babelHelpers.possibleConstructorReturn(this, (EnterPassword.__proto__ || Object.getPrototypeOf(EnterPassword)).apply(this, arguments));
  }

  babelHelpers.createClass(EnterPassword, [{
    key: 'render',
    value: function render() {
      var navigate = this.props.navigation.navigate;

      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginTop: Screen.height / 100 * 3 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 22, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              },
              'Enter Password'
            ),
            _react2.default.createElement(
              _reactNative.Text,
              {
                style: { fontSize: 15, fontWeight: '400', color: '#ffffff', fontFamily: 'din round pro', marginTop: 7, textAlign: 'center', padding: 8 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              },
              'Your Password must included at least one symbol and be eight or more charecter long'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              },
              'Password'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: styles.inputContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            },
            _react2.default.createElement(_reactNative.TextInput, {
              autoCapitalize: 'none',
              autoCorrect: false,
              password: true,
              underlineColorAndroid: 'transparent',
              style: { flex: 1, fontSize: 16, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' },
              onChangeText: function onChangeText(password) {
                return console.log(password);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            })
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return navigate('EnterEmail');
              },
              style: { marginTop: Screen.height / 100 * 25, alignItems: 'center', justifyContent: 'center', marginVertical: 10, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 18, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                }
              },
              'CONTINUE'
            )
          )
        )
      );
    }
  }]);
  return EnterPassword;
}(_react.Component);

EnterPassword.navigationOptions = {
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
  DigitsAuthenticateButton: {
    marginTop: Screen.height / 100 * 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5
  },
  DigitsAuthenticateButtonText: {
    color: '#5a0fb4',
    fontWeight: '700',
    fontSize: 18,
    fontFamily: 'din round pro'
  }
});

module.exports = EnterPassword;