Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/home/naveen/Downloads/Archive/src/containers/Starter/Starter.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Login: {
    displayName: 'Login'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/home/naveen/Downloads/Archive/src/containers/Starter/Starter.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var logo = require('./images/logo.png'),
    Screen = require('Dimensions').get('window'),
    _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var Login = _wrapComponent('Login')(function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      var navigate = this.props.navigation.navigate;


      return _react3.default.createElement(
        _reactNative.View,
        { style: _style2.default.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        },
        _react3.default.createElement(
          _reactNative.View,
          { style: _style2.default.imageContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          },
          _react3.default.createElement(_reactNative.Image, { source: logo, resizeMode: 'contain', style: _style2.default.image, __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          })
        ),
        _react3.default.createElement(
          _reactNative.TouchableOpacity,
          { onPress: function onPress() {
              return navigate('Login');
            }, style: _style2.default.loginContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          },
          _react3.default.createElement(
            _reactNative.Text,
            { style: _style2.default.loginText, __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            },
            'LOG IN'
          )
        ),
        _react3.default.createElement(
          _reactNative.TouchableOpacity,
          { onPress: function onPress() {
              return navigate('Signup');
            }, style: _style2.default.signupContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          _react3.default.createElement(
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
}(_react2.Component));

exports.default = Login;