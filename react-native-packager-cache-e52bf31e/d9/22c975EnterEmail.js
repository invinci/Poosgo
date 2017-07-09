var _jsxFileName = '/home/naveen/Downloads/Archive/src/containers/Signup/EnterEmail.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Screen = require('Dimensions').get('window'),
    _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var EnterEmail = function (_Component) {
  babelHelpers.inherits(EnterEmail, _Component);

  function EnterEmail() {
    babelHelpers.classCallCheck(this, EnterEmail);
    return babelHelpers.possibleConstructorReturn(this, (EnterEmail.__proto__ || Object.getPrototypeOf(EnterEmail)).apply(this, arguments));
  }

  babelHelpers.createClass(EnterEmail, [{
    key: 'render',
    value: function render() {
      var navigate = this.props.navigation.navigate;

      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
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
              'Enter Email'
            ),
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 15, fontWeight: '400', color: '#ffffff', fontFamily: 'din round pro', marginTop: 5, textAlign: 'center', padding: 3, marginHorizontal: 10 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              },
              'Other Users Can Search You By Email, Name, Phone Number'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              'Email'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: styles.inputContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            },
            _react2.default.createElement(_reactNative.TextInput, {
              autoCapitalize: 'none',
              underlineColorAndroid: 'transparent',
              autoCorrect: false,
              keyboardType: 'email-address',
              style: { flex: 1, fontSize: 16, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' },
              onChangeText: function onChangeText(email) {
                return console.log(firstName);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              }
            })
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return navigate('EnterPhoneNumber');
              },
              style: { marginTop: Screen.height / 100 * 15, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', marginVertical: 10, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 18, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
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
  }))
});

module.exports = EnterEmail;