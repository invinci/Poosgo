Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/src/containers/Signup/EnterDateOfBirth.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeDatepicker = require('react-native-datepicker');

var _reactNativeDatepicker2 = babelHelpers.interopRequireDefault(_reactNativeDatepicker);

var _reactRedux = require('react-redux');

var _SignupActions = require('./SignupActions');

var Screen = require('Dimensions').get('window'),
    _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var EnterDateOfBirth = function (_Component) {
  babelHelpers.inherits(EnterDateOfBirth, _Component);

  function EnterDateOfBirth() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, EnterDateOfBirth);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = EnterDateOfBirth.__proto__ || Object.getPrototypeOf(EnterDateOfBirth)).call.apply(_ref, [this].concat(args))), _this), _this.state = { dob: '2016-05-15' }, _this.check = function () {
      var dob = _this.props.dob;
      var navigate = _this.props.navigation.navigate;

      if (!dob) {
        alert('Please Provide DOB');
      } else {
        _this.props.SignupUpdate({ prop: 'dob', value: _this.state.dob });
        navigate('EnterUsername');
      }
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(EnterDateOfBirth, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var context = this;

      var dob = this.props.dob;

      console.log("data", dob);
      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginTop: Screen.height / 100 * 3 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 22, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                }
              },
              'Enter your DOB'
            ),
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 15, fontWeight: '400', color: '#ffffff', fontFamily: 'din round pro', marginTop: 5 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                }
              },
              'This Will be displayed to other Users'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                }
              },
              'BIRTHDAY'
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return console.log("dtae");
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              { style: styles.inputContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              _react2.default.createElement(_reactNativeDatepicker2.default, {
                style: { width: 200 },
                date: this.state.dob,
                mode: 'date',
                showIcon: false,
                placeholder: 'select date',
                format: 'YYYY-MM-DD',

                maxDate: '2016-06-01',
                confirmBtnText: 'Confirm',
                cancelBtnText: 'Cancel',
                customStyles: {
                  dateInput: {
                    marginLeft: 36,
                    borderWidth: 0
                  },
                  dateText: {
                    color: '#ffffff',
                    fontSize: 16
                  }
                },
                onDateChange: function onDateChange(date) {
                  return _this2.setState({ dob: date });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 64
                }
              })
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return _this2.check();
              }, style: { alignItems: 'center', justifyContent: 'center', marginTop: Screen.height / 100 * 25, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 18, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 94
                }
              },
              'CONTINUE'
            )
          )
        ),
        _react2.default.createElement(_reactNative.View, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        })
      );
    }
  }]);
  return EnterDateOfBirth;
}(_react.Component);

EnterDateOfBirth.navigationOptions = {
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
  datePicker: {
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 220,
    borderColor: '#CCC',
    backgroundColor: '#FFF'
  }
});
var mapStateToProps = function mapStateToProps(_ref2) {
  var Signup = _ref2.Signup;
  var Fname = Signup.Fname,
      Lname = Signup.Lname,
      dob = Signup.dob;

  return {
    dob: dob,
    Fname: Fname,
    Lname: Lname
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { SignupUpdate: _SignupActions.SignupUpdate })(EnterDateOfBirth);