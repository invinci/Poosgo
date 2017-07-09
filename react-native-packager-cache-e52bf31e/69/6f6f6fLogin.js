var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/home/naveen/Downloads/Archive/src/containers/Login/Login.js';

var _reactNative = require('react-native');

var _Starter = require('../Starter');

var _Starter2 = _interopRequireDefault(_Starter);

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
  filename: '/home/naveen/Downloads/Archive/src/containers/Login/Login.js',
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
    width = _Dimensions$get.width,
    back_icon = require('./images/back_icon.png');

var lat = 0,
    lng = 0;

var Login = _wrapComponent('Login')((_temp = _class = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      isVisible: false,
      username: '',
      password: '',
      latitude: '30.7046',
      longitude: '76.7179'
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'logIn',
    value: function logIn() {}
  }, {
    key: 'forgotPassword',
    value: function forgotPassword() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'locatePosition',
    value: function locatePosition(ulat, ulng) {}
  }, {
    key: 'render',
    value: function render() {

      return _react3.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        },
        _react3.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            }
          },
          _react3.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginTop: Screen.height / 100 * 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              }
            },
            _react3.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 22, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 137
                }
              },
              'Log In'
            )
          ),
          _react3.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 139
              }
            },
            _react3.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 140
                }
              },
              'USERNAME/EMAIL'
            )
          ),
          _react3.default.createElement(
            _reactNative.View,
            { style: styles.inputContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 142
              }
            },
            _react3.default.createElement(_reactNative.TextInput, {
              underlineColorAndroid: 'transparent',
              autoCapitalize: 'none',
              autoCorrect: false,
              style: { flex: 1, fontSize: 16, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' },
              onChangeText: function onChangeText(username) {
                return context.setState({ username: username });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 143
              }
            })
          ),
          _react3.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 151
              }
            },
            _react3.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 152
                }
              },
              'PASSWORD'
            )
          ),
          _react3.default.createElement(
            _reactNative.View,
            { style: styles.inputContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              }
            },
            _react3.default.createElement(_reactNative.TextInput, {
              underlineColorAndroid: 'transparent',
              autoCorrect: false,
              password: true,
              style: { flex: 1, fontSize: 16, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' },
              onChangeText: function onChangeText(password) {
                return context.setState({ password: password });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 155
              }
            })
          ),
          _react3.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return context.forgotPassword();
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 163
              }
            },
            _react3.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 16, fontWeight: '700', color: '#ffffff', textAlign: 'center', marginVertical: Screen.height / 100 * 3, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 163
                }
              },
              'Forgot Your Password?'
            )
          ),
          _react3.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return context.logIn();
              }, style: { alignItems: 'center', justifyContent: 'center', marginVertical: 10, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 164
              }
            },
            _react3.default.createElement(
              _reactNative.Text,
              { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 18, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 165
                }
              },
              'LOG IN'
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.Component), _class.navigationOptions = {
  headerStyle: {
    backgroundColor: '#5a0fb4',
    elevation: 1 },
  headerTintColor: 'white'

}, _temp));

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a0fb4'
  },
  inputContainer: {
    borderBottomWidth: 1,
    marginVertical: 16,
    marginHorizontal: Screen.width / 100 * 10,
    borderColor: '#b7b7b7',
    height: 50
  }
});

module.exports = Login;