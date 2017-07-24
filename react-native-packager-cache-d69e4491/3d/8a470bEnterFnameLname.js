Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/src/containers/Signup/EnterFnameLname.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _SignupActions = require('./SignupActions');

var Screen = require('Dimensions').get('window'),
    _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var EnterFnameLname = function (_Component) {
  babelHelpers.inherits(EnterFnameLname, _Component);

  function EnterFnameLname(props) {
    babelHelpers.classCallCheck(this, EnterFnameLname);

    var _this = babelHelpers.possibleConstructorReturn(this, (EnterFnameLname.__proto__ || Object.getPrototypeOf(EnterFnameLname)).call(this, props));

    _this.check = function () {
      var navigate = _this.props.navigation.navigate;
      var _this$state = _this.state,
          lname = _this$state.lname,
          fname = _this$state.fname;

      if (!fname) {
        _this.setState({ error: 'Please Provide First Name' });
      } else if (!lname) {
        _this.setState({ error: 'Please Provide Last name' });
      } else {
        _this.props.SignupUpdate({ prop: 'Fname', value: fname });
        _this.props.SignupUpdate({ prop: 'Lname', value: lname });
        _this.setState({ fname: '', lname: '' });
        navigate('EnterDateOfBirth');
      }
    };

    _this.state = {
      fname: '', lname: '', error: ''
    };
    _this.setFname = _this.setFname.bind(_this);
    _this.setLname = _this.setLname.bind(_this);
    return _this;
  }

  babelHelpers.createClass(EnterFnameLname, [{
    key: 'setFname',
    value: function setFname(fname) {
      if (!fname) {
        this.setState({ error: 'Please Provide First Name' });
        this.setState({ fname: '' });
      } else {
        this.setState({ fname: fname });
        this.setState({ error: '' });
      }
    }
  }, {
    key: 'setLname',
    value: function setLname(lname) {
      if (!lname) {
        this.setState({ error: 'Please Provide Last name' });
        this.setState({ lname: '' });
      } else {
        this.setState({ lname: lname });
        this.setState({ error: '' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var context = this;
      var _props = this.props,
          Fname = _props.Fname,
          Lname = _props.Lname,
          SignupUpdate = _props.SignupUpdate;

      console.log(Fname, Lname);
      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginTop: Screen.height / 100 * 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 22, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                }
              },
              'Enter your name'
            ),
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 15, fontWeight: '400', color: '#ffffff', fontFamily: 'din round pro', marginTop: 5 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 85
                }
              },
              'This Will be displayed to other Users'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '700', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 88
                }
              },
              'FIRST NAME'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: styles.inputContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              }
            },
            _react2.default.createElement(_reactNative.TextInput, {
              autoCorrect: false,
              underlineColorAndroid: 'transparent',
              value: this.state.fname,
              style: { flex: 1, fontSize: 16, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' },
              onChangeText: function onChangeText(text) {
                return _this2.setFname(text);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              }
            })
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: 15 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '700', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 101
                }
              },
              'LAST NAME'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: styles.inputContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              }
            },
            _react2.default.createElement(_reactNative.TextInput, {
              autoCorrect: false,
              underlineColorAndroid: 'transparent',
              value: this.state.lname,
              style: { flex: 1, fontSize: 16, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' },
              onChangeText: function onChangeText(text) {
                return _this2.setLname(text);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104
              }
            })
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { height: 30, alignItems: 'center', justifyContent: 'center', marginTop: 20 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: styles.error, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 113
                }
              },
              this.state.error
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginVertical: 10 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 116
                }
              },
              'By tapping Sign Up, you agree to the'
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: { flexDirection: 'row' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 116
                }
              },
              _react2.default.createElement(
                _reactNative.TouchableOpacity,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                  }
                },
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: { color: '#ffffff', fontSize: 16, fontFamily: 'din round pro' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 116
                    }
                  },
                  ' Terms of Service '
                )
              ),
              _react2.default.createElement(
                _reactNative.Text,
                { style: { color: '#b7b7b7', fontSize: 16, fontFamily: 'din round pro' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                  }
                },
                'and'
              ),
              _react2.default.createElement(
                _reactNative.TouchableOpacity,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                  }
                },
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: { color: '#ffffff', fontSize: 16, fontFamily: 'din round pro' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 116
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
                return _this2.check();
              }, style: { alignItems: 'center', justifyContent: 'center', marginTop: Screen.height / 100 * 8, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 },
              disabled: this.state.error === '' ? false : true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 18, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121
                }
              },
              'Sign Up & Accept'
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
      marginVertical: 4,
      marginHorizontal: Screen.width / 100 * 10,
      borderColor: '#b7b7b7',
      height: 30
    },
    android: {
      borderBottomWidth: 1,
      marginVertical: 4,
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
  var Fname = Signup.Fname,
      Lname = Signup.Lname;

  return {
    Fname: Fname,
    Lname: Lname
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { SignupUpdate: _SignupActions.SignupUpdate })(EnterFnameLname);