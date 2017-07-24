Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStateToProps = undefined;
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/src/containers/Login/Login.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Starter = require('../Starter');

var _Starter2 = babelHelpers.interopRequireDefault(_Starter);

var _LoginAction = require('./LoginAction');

var _reactRedux = require('react-redux');

var logo = require('./images/logo.png'),
    Screen = require('Dimensions').get('window'),
    _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width,
    back_icon = require('./images/back_icon.png');

var lat = 0,
    lng = 0;

var Login = function (_Component) {
  babelHelpers.inherits(Login, _Component);

  function Login(props) {
    babelHelpers.classCallCheck(this, Login);

    var _this = babelHelpers.possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      isVisible: false,
      username: '',
      password: '',
      latitude: '30.7046',
      longitude: '76.7179',
      active: false,
      animating: false
    };
    return _this;
  }

  babelHelpers.createClass(Login, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.logout();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'fetchProfileInfo',
    value: function fetchProfileInfo(token) {
      var context = this;
      var formdata = new FormData();
      formdata.append("token", token);

      fetch('https://tangential-span-155900.appspot.com/api/user/fetchProfile', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data'
        },
        body: formdata
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        context.setState({ animating: false });
        _reactNative.AsyncStorage.setItem('accessToken', JSON.stringify(response));
        alert("SuccessFully Logged in!  ");
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'logIn',
    value: function logIn(user) {
      var context = this;
      this.setState({ animating: true });
      var navigate = this.props.navigation.navigate;

      var OBJECT = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      };
      fetch('https://tangential-span-155900.appspot.com/api/user/loginUser', OBJECT).then(function (res) {
        console.log(res);
        if (res.status === 200) {
          return res.json();
        } else {
          alert("Anauthorised User!");
          context.setState({ animating: false });
        }
      }).then(function (res) {
        _reactNative.AsyncStorage.setItem('accessToken', res.id_token);
        context.fetchProfileInfo(res.id_token);
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'forgotPassword',
    value: function forgotPassword() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var animating = this.state.animating;
      if (animating) {
        return _react2.default.createElement(
          _reactNative.View,
          { style: styles.containerIndicator, __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            }
          },
          _react2.default.createElement(_reactNative.ActivityIndicator, {
            animating: animating,
            color: '#bc2b78',
            size: 'large',
            style: styles.activityIndicator,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116
            }
          })
        );
      }
      var _props = this.props,
          loginUpdate = _props.loginUpdate,
          username = _props.username,
          password = _props.password,
          loading = _props.loading,
          auth = _props.auth;
      var navigate = this.props.navigation.navigate;

      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginTop: Screen.height / 100 * 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 132
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 22, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 133
                }
              },
              'Log In'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 136
                }
              },
              'USERNAME'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: styles.inputContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 138
              }
            },
            _react2.default.createElement(_reactNative.TextInput, {
              autoCapitalize: 'none',
              autoCorrect: false,
              value: username,
              underlineColorAndroid: 'transparent',
              style: { flex: 1, color: '#ffffff', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' },
              onChangeText: function onChangeText(text) {
                loginUpdate({ prop: 'username', value: text }), _this2.setState({ active: true });
              },
              onBlur: function onBlur() {
                if (username.length <= 0) {
                  _this2.setState({ active: false });
                }
              },

              __source: {
                fileName: _jsxFileName,
                lineNumber: 139
              }
            })
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 151
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 152
                }
              },
              'PASSWORD'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: styles.inputContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              }
            },
            _react2.default.createElement(_reactNative.TextInput, {
              autoCorrect: false,
              password: true,
              value: password,
              underlineColorAndroid: 'transparent',
              style: { flex: 1, fontSize: 16, fontWeight: '600', color: '#ffffff', fontFamily: 'din round pro' },
              onChangeText: function onChangeText(text) {
                loginUpdate({ prop: 'password', value: text }), _this2.setState({ active: true });
              },
              onBlur: function onBlur() {
                if (username.length <= 0 && password.length <= 0) {
                  _this2.setState({ active: false });
                }
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 155
              }
            })
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return navigate('ForgotPassword');
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 165
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 16, fontWeight: '700', color: '#ffffff', textAlign: 'center', marginVertical: Screen.height / 100 * 3, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 165
                }
              },
              'Forgot Your Password?'
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            {
              onPress: function onPress() {
                return _this2.logIn({ username: username, password: password });
              },
              style: { flex: 1 },
              disabled: this.state.active ? false : true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 166
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              { style: this.state.active ? styles.loginButtonActive : styles.loginButton, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 171
                }
              },
              _react2.default.createElement(
                _reactNative.Text,
                { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 22, fontFamily: 'din round pro' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 172
                  }
                },
                'LOG IN'
              )
            )
          )
        )
      );
    }
  }]);
  return Login;
}(_react.Component);

Login.navigationOptions = {
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
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: '#ffffff',
    borderWidth: 1, borderColor: 'transparent',
    borderRadius: 5,
    opacity: 0.3
  },
  loginButtonActive: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: '#ffffff',
    borderWidth: 1, borderColor: 'transparent',
    borderRadius: 5,
    opacity: 1
  },

  containerIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  },

  inputContainer: babelHelpers.extends({}, _reactNative.Platform.select({
    ios: {
      borderBottomWidth: 1,
      marginVertical: 8,
      marginHorizontal: Screen.width / 100 * 10,
      borderColor: '#b7b7b7',
      height: 30
    },
    android: {
      borderBottomWidth: 1,
      marginVertical: 8,
      marginHorizontal: Screen.width / 100 * 10,
      borderColor: '#b7b7b7',
      height: 40
    }
  }))
});
var mapStateToProps = exports.mapStateToProps = function mapStateToProps(_ref) {
  var Login = _ref.Login;
  var username = Login.username,
      password = Login.password,
      loading = Login.loading,
      auth = Login.auth;

  return {
    username: username,
    password: password,
    loading: loading,
    auth: auth
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { loginUpdate: _LoginAction.loginUpdate, loginChecking: _LoginAction.loginChecking, logout: _LoginAction.logout })(Login);