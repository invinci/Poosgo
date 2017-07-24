Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/src/containers/Signup/EnterPassword.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _SignupActions = require('./SignupActions');

var _reactNativeRootToast = require('react-native-root-toast');

var _reactNativeRootToast2 = babelHelpers.interopRequireDefault(_reactNativeRootToast);

var Screen = require('Dimensions').get('window'),
    _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var EnterPassword = function (_Component) {
  babelHelpers.inherits(EnterPassword, _Component);

  function EnterPassword(props) {
    babelHelpers.classCallCheck(this, EnterPassword);

    var _this = babelHelpers.possibleConstructorReturn(this, (EnterPassword.__proto__ || Object.getPrototypeOf(EnterPassword)).call(this, props));

    _this.submit = function () {
      var regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
      var password = _this.state.password;
      var navigate = _this.props.navigation.navigate;

      _this.setState({ error: '' });
      var user = {
        "username": _this.props.username,
        "first_name": _this.props.Fname,
        "last_name": _this.props.Lname,
        "date_of_birth": _this.props.dob
      };
      _this.registerUser(user);
    };

    _this.state = {
      password: '', error: '', show: false };
    return _this;
  }

  babelHelpers.createClass(EnterPassword, [{
    key: 'registerUser',
    value: function registerUser(user) {
      var navigate = this.props.navigation.navigate;

      var OBJECT = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      };
      fetch('https://tangential-span-155900.appspot.com/api/user/registerNewUser', OBJECT).then(function (res) {
        console.log(res);
        if (res.status === 200) {
          return res.json();
        } else {
          alert("Data not correct");
        }
      }).then(function (res) {
        alert("DOne");
        navigate('EnterEmail');
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'setPass',
    value: function setPass(password) {
      if (!password) {
        this.setState({ error: 'Password must be Provide' });
        this.setState({ password: password });
      } else if (password.length < 8) {
        this.setState({ error: 'Password must be eight or more charecter long' });
        this.setState({ password: password });
      } else if (!/[@#$&*^%!+=\/\\[\]|?.,<>)(;:'"~`]/.test(password)) {
        this.setState({ error: 'Must contain a Special Charecter' });
        this.setState({ password: password });
      } else {
        this.setState({ error: '' });
        this.setState({ password: password });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var password = this.props.password;
      var show = this.state.show;


      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginTop: Screen.height / 100 * 3 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 22, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 105
                }
              },
              'Enter Password'
            ),
            _react2.default.createElement(
              _reactNative.Text,
              {
                style: { fontSize: 15, fontWeight: '400', color: '#ffffff', fontFamily: 'din round pro', marginTop: 7, textAlign: 'center', padding: 8 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106
                }
              },
              'Your Password must included at least one symbol and be eight or more charecter long'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                }
              },
              'PASSWORD'
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: { position: 'absolute', right: 5 },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 112
                }
              },
              _react2.default.createElement(
                _reactNative.Text,
                {
                  style: { fontSize: 15, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' },
                  onPress: function onPress() {
                    _this2.setState({ show: !show });
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                  }
                },
                'SHOW'
              )
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: styles.inputContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 120
              }
            },
            _react2.default.createElement(_reactNative.TextInput, {
              autoCapitalize: 'none',
              autoCorrect: false,
              underlineColorAndroid: 'transparent',
              value: this.state.password,
              password: true,
              secureTextEntry: show ? false : true,
              style: { flex: 1, fontSize: 17, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' },
              onChangeText: function onChangeText(password) {
                return _this2.setPass(password);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              }
            })
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { height: 30, alignItems: 'center', justifyContent: 'center', marginTop: 10 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 145
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.error, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 146
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
              style: { marginTop: Screen.height / 100 * 25, alignItems: 'center', justifyContent: 'center', marginVertical: 10, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 },
              disabled: this.state.error === '' ? false : true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 148
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 18, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 152
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
  },
  error: {
    color: 'red',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'din round pro'
  }
});
var mapStateToProps = function mapStateToProps(_ref) {
  var Signup = _ref.Signup;
  var dob = Signup.dob,
      Fname = Signup.Fname,
      Lname = Signup.Lname,
      password = Signup.password,
      username = Signup.username;

  return {
    password: password,
    dob: dob,
    Fname: Fname,
    Lname: Lname,
    username: username
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { SignupUpdate: _SignupActions.SignupUpdate })(EnterPassword);