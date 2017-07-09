var _jsxFileName = '/home/naveen/Downloads/Archive/src/containers/Signup/EnterFnameLname.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var Screen = require('Dimensions').get('window'),
    _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var EnterFnameLname = function (_Component) {
  babelHelpers.inherits(EnterFnameLname, _Component);

  function EnterFnameLname() {
    babelHelpers.classCallCheck(this, EnterFnameLname);
    return babelHelpers.possibleConstructorReturn(this, (EnterFnameLname.__proto__ || Object.getPrototypeOf(EnterFnameLname)).apply(this, arguments));
  }

  babelHelpers.createClass(EnterFnameLname, [{
    key: 'render',
    value: function render() {
      var context = this;
      var navigate = this.props.navigation.navigate;

      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginTop: Screen.height / 100 * 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 22, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                }
              },
              'Enter your name'
            ),
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 15, fontWeight: '400', color: '#ffffff', fontFamily: 'din round pro', marginTop: 5 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              'This Will be displayed to other Users'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                }
              },
              'First Name'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: styles.inputContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            },
            _react2.default.createElement(_reactNative.TextInput, {
              autoCorrect: false,
              underlineColorAndroid: 'transparent',
              style: { flex: 1, fontSize: 16, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' },
              onChangeText: function onChangeText(firstName) {
                return console.log(firstName);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            })
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                }
              },
              'Last Name'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: styles.inputContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            },
            _react2.default.createElement(_reactNative.TextInput, {
              autoCorrect: false,
              underlineColorAndroid: 'transparent',
              style: { flex: 1, fontSize: 16, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' },
              onChangeText: function onChangeText(lastName) {
                return console.log(firstName);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            })
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginVertical: 10 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                }
              },
              'By tapping Sign Up, you agree to the'
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: { flexDirection: 'row' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                }
              },
              _react2.default.createElement(
                _reactNative.TouchableOpacity,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                  }
                },
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: { color: '#ffffff', fontSize: 16, fontFamily: 'din round pro' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63
                    }
                  },
                  ' Terms of Service '
                )
              ),
              _react2.default.createElement(
                _reactNative.Text,
                { style: { color: '#b7b7b7', fontSize: 16, fontFamily: 'din round pro' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                  }
                },
                'and'
              ),
              _react2.default.createElement(
                _reactNative.TouchableOpacity,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                  }
                },
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: { color: '#ffffff', fontSize: 16, fontFamily: 'din round pro' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63
                    }
                  },
                  ' Privacy Policy'
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return navigate('EnterDateOfBirth');
              }, style: { alignItems: 'center', justifyContent: 'center', marginTop: Screen.height / 100 * 20, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 18, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                }
              },
              'CONTINUE'
            )
          )
        )
      );
    }
  }]);
  return EnterFnameLname;
}(_react.Component);

EnterFnameLname.navigationOptions = {
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

module.exports = EnterFnameLname;