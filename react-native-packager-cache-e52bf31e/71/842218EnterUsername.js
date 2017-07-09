var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/home/naveen/Downloads/Archive/src/containers/Signup/EnterUsername.js';

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  EnterUsername: {
    displayName: 'EnterUsername'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/home/naveen/Downloads/Archive/src/containers/Signup/EnterUsername.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var Screen = require('Dimensions').get('window'),
    _Dimensions$get = _reactNative.Dimensions.get('window'),
    height = _Dimensions$get.height,
    width = _Dimensions$get.width;

var EnterUsername = _wrapComponent('EnterUsername')((_temp = _class = function (_Component) {
  _inherits(EnterUsername, _Component);

  function EnterUsername(props) {
    _classCallCheck(this, EnterUsername);

    var _this = _possibleConstructorReturn(this, (EnterUsername.__proto__ || Object.getPrototypeOf(EnterUsername)).call(this, props));

    _this.state = {
      username: ''
    };
    return _this;
  }

  _createClass(EnterUsername, [{
    key: 'submit',
    value: function submit() {
      var context = this;
      if (context.state.username == '' && !context.state.username.trim()) {
        alert('Please enter username');
      } else {}
    }
  }, {
    key: 'render',
    value: function render() {
      var context = this;
      var navigate = this.props.navigation.navigate;

      return _react3.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        },
        _react3.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          },
          _react3.default.createElement(
            _reactNative.View,
            { style: { alignItems: 'center', marginTop: Screen.height / 100 * 3 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              }
            },
            _react3.default.createElement(
              _reactNative.Text,
              { style: { fontSize: 22, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                }
              },
              'Enter Username'
            )
          ),
          _react3.default.createElement(
            _reactNative.View,
            { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            },
            _react3.default.createElement(
              _reactNative.Text,
              { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                }
              },
              'Username'
            )
          ),
          _react3.default.createElement(
            _reactNative.View,
            { style: styles.inputContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              }
            },
            _react3.default.createElement(_reactNative.TextInput, {
              autoCapitalize: 'none',
              autoCorrect: false,
              underlineColorAndroid: 'transparent',
              style: { flex: 1, fontSize: 17, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' },
              onChangeText: function onChangeText(username) {
                return context.setState({ username: username });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            })
          ),
          _react3.default.createElement(
            _reactNative.TouchableOpacity,
            { onPress: function onPress() {
                return navigate('EnterPassword');
              }, style: { marginTop: Screen.height / 100 * 25, alignItems: 'center', justifyContent: 'center', marginVertical: 10, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              }
            },
            _react3.default.createElement(
              _reactNative.Text,
              { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 18, fontFamily: 'din round pro' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
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
  inputContainer: _extends({}, _reactNative.Platform.select({
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

module.exports = EnterUsername;