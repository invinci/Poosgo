var _jsxFileName = '/home/naveen/Downloads/Archive/src/containers/Signup/EnterDateOfBirth.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeDatepicker = require('react-native-datepicker');

var _reactNativeDatepicker2 = babelHelpers.interopRequireDefault(_reactNativeDatepicker);

var Screen = require('Dimensions').get('window'),
    _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var EnterDateOfBirth = function (_Component) {
  babelHelpers.inherits(EnterDateOfBirth, _Component);

  function EnterDateOfBirth(props) {
    babelHelpers.classCallCheck(this, EnterDateOfBirth);

    var _this = babelHelpers.possibleConstructorReturn(this, (EnterDateOfBirth.__proto__ || Object.getPrototypeOf(EnterDateOfBirth)).call(this, props));

    _this.state = { date: "2016-05-15" };
    return _this;
  }

  babelHelpers.createClass(EnterDateOfBirth, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var context = this;
      var navigate = this.props.navigation.navigate;

      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginTop: Screen.height / 100 * 3 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 22, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              },
              'Enter your DOB'
            ),
            _react2.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 15, fontWeight: '400', color: '#ffffff', fontFamily: 'din round pro', marginTop: 5 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                }
              },
              'This Will be displayed to other Users'
            )
          ),
          _react2.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
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
                lineNumber: 48
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              { style: styles.inputContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                }
              },
              _react2.default.createElement(_reactNativeDatepicker2.default, {
                style: { width: 200 },
                date: this.state.date,
                mode: 'date',
                showIcon: false,
                placeholder: 'select date',
                format: 'YYYY-MM-DD',
                minDate: '2016-05-01',
                maxDate: '2016-06-01',
                confirmBtnText: 'Confirm',
                cancelBtnText: 'Cancel',
                customStyles: {
                  dateInput: {
                    marginLeft: 36,
                    borderWidth: 0,
                    borderBottomWidth: 1

                  },
                  dateText: {
                    color: '#ffffff',
                    fontSize: 16
                  }
                },
                onDateChange: function onDateChange(date) {
                  _this2.setState({ date: date });
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              })
            )
          ),
          _react2.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return navigate('EnterUsername');
              }, style: { alignItems: 'center', justifyContent: 'center', marginTop: Screen.height / 100 * 25, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              }
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 18, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 81
                }
              },
              'CONTINUE'
            )
          )
        ),
        _react2.default.createElement(_reactNative.View, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
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

module.exports = EnterDateOfBirth;