Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/src/containers/Starter/Starter.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _style = require('./style');

var _style2 = babelHelpers.interopRequireDefault(_style);

var Screen = require('Dimensions').get('window'),
    _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var Login = function (_Component) {
  babelHelpers.inherits(Login, _Component);

  function Login() {
    babelHelpers.classCallCheck(this, Login);
    return babelHelpers.possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  babelHelpers.createClass(Login, [{
    key: 'render',
    value: function render() {
      var navigate = this.props.navigation.navigate;


      return _react2.default.createElement(
        _reactNative.View,
        { style: _style2.default.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        },
        _react2.default.createElement(_reactNative.View, { style: _style2.default.imageContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }),
        _react2.default.createElement(
          _reactNative.TouchableOpacity,
          { onPress: function onPress() {
              return navigate('Login');
            }, style: _style2.default.loginContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          },
          _react2.default.createElement(
            _reactNative.Text,
            { style: _style2.default.loginText, __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            },
            'LOG IN'
          )
        ),
        _react2.default.createElement(
          _reactNative.TouchableOpacity,
          { onPress: function onPress() {
              return navigate('Signup');
            }, style: _style2.default.signupContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          _react2.default.createElement(
            _reactNative.Text,
            { style: _style2.default.signupText, __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            },
            'SIGN UP'
          )
        )
      );
    }
  }]);
  return Login;
}(_react.Component);

exports.default = Login;