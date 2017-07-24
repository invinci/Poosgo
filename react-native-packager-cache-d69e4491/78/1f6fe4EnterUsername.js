Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/src/containers/Signup/EnterUsername.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _SignupActions = require('./SignupActions');

var Screen = require('Dimensions').get('window'),
    _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var EnterUsername = function (_Component) {
  babelHelpers.inherits(EnterUsername, _Component);

  function EnterUsername(props) {
    babelHelpers.classCallCheck(this, EnterUsername);

    var _this = babelHelpers.possibleConstructorReturn(this, (EnterUsername.__proto__ || Object.getPrototypeOf(EnterUsername)).call(this, props));

    _this.submit = function () {
      var navigate = _this.props.navigation.navigate;

      if (_this.state.username == '' && !_this.state.username.trim()) {
        _this.setState({ error: 'Please enter username' });
      } else {
        _this.props.SignupUpdate({ prop: 'username', value: _this.state.username });
        navigate('EnterPassword');
      }
    };

    _this.state = {
      username: '',
      error: ''
    };
    return _this;
  }

  babelHelpers.createClass(EnterUsername, [{
    key: 'setUname',
    value: function setUname(username) {
      if (!username) {
        this.setState({ error: 'Please enter username' });
        this.setState({ username: '' });
      } else {
        this.setState({ username: username });
        this.setState({ error: '' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var username = this.props.username;


      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginTop: Screen.height / 100 * 3 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 22, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                }
              },
              'Enter Username'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              },
              'USERNAME'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: styles.inputContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              }
            },
            _react2.default.createElement(_reactNative.TextInput, {
              autoCapitalize: 'none',
              autoCorrect: false,
              underlineColorAndroid: 'transparent',
              value: this.state.username,
              style: { flex: 1, fontSize: 17, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' },
              onChangeText: function onChangeText(username) {
                return _this2.setUname(username);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              }
            })
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { height: 30, alignItems: 'center', justifyContent: 'center', marginTop: 10 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.error, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                }
              },
              this.state.error
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return _this2.submit();
              }, style: { marginTop: Screen.height / 100 * 25, alignItems: 'center', justifyContent: 'center', marginVertical: 10, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 86
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 18, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 87
                }
              },
              'CONTINUE'
            )
          )
        )
      );
    }
  }]);
  return EnterUsername;
}(_react.Component);

EnterUsername.navigationOptions = {
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
var mapStateToProps = function mapStateToProps(_ref) {
  var Signup = _ref.Signup;
  var username = Signup.username;

  return {
    username: username
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { SignupUpdate: _SignupActions.SignupUpdate })(EnterUsername);