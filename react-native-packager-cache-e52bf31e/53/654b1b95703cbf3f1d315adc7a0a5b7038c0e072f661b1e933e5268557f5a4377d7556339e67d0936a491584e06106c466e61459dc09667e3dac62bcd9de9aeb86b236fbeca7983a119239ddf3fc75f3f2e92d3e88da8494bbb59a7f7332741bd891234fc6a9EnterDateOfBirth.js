var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _class,
    _temp,
    _jsxFileName = '/home/naveen/Downloads/Archive/src/containers/Signup/EnterDateOfBirth.js';

var _reactNative = require('react-native');

var _reactNativeDatepicker = require('react-native-datepicker');

var _reactNativeDatepicker2 = _interopRequireDefault(_reactNativeDatepicker);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _components = {
  EnterDateOfBirth: {
    displayName: 'EnterDateOfBirth'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/home/naveen/Downloads/Archive/src/containers/Signup/EnterDateOfBirth.js',
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

var EnterDateOfBirth = _wrapComponent('EnterDateOfBirth')((_temp = _class = function (_Component) {
  _inherits(EnterDateOfBirth, _Component);

  function EnterDateOfBirth(props) {
    _classCallCheck(this, EnterDateOfBirth);

    var _this = _possibleConstructorReturn(this, (EnterDateOfBirth.__proto__ || Object.getPrototypeOf(EnterDateOfBirth)).call(this, props));

    _this.state = { date: "2016-05-15" };
    return _this;
  }

  _createClass(EnterDateOfBirth, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var context = this;
      var navigate = this.props.navigation.navigate;

      return _react3.default.createElement(_reactNative.View, { style: { flex: 1 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react3.default.createElement(_reactNative.View, { style: styles.container, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react3.default.createElement(_reactNative.View, { style: { alignItems: 'center', marginTop: Screen.height / 100 * 3 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react3.default.createElement(_reactNative.Text, { style: { fontSize: 22, fontWeight: '700', color: '#ffffff', fontFamily: 'din round pro' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Enter your DOB'), _react3.default.createElement(_reactNative.Text, { style: { fontSize: 15, fontWeight: '400', color: '#ffffff', fontFamily: 'din round pro', marginTop: 5 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'This Will be displayed to other Users')), _react3.default.createElement(_reactNative.View, { style: { marginHorizontal: Screen.width / 100 * 10, marginTop: Screen.height / 100 * 6 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react3.default.createElement(_reactNative.Text, { style: { color: '#b7b7b7', fontSize: 16, fontWeight: '600', fontFamily: 'din round pro' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'BIRTHDAY')), _react3.default.createElement(_reactNative.TouchableOpacity, { onPress: function onPress() {
          return console.log("dtae");
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react3.default.createElement(_reactNative.View, { style: styles.inputContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react3.default.createElement(_reactNativeDatepicker2.default, {
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
            borderBottomWidth: 1,
            color: 'white',
            backgroundColor: 'red'
          }
        },
        onDateChange: function onDateChange(date) {
          _this2.setState({ date: date });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }))), _react3.default.createElement(_reactNative.TouchableOpacity, { onPress: function onPress() {
          return navigate('EnterUsername');
        }, style: { alignItems: 'center', justifyContent: 'center', marginTop: Screen.height / 100 * 25, marginHorizontal: 10, padding: 15, backgroundColor: '#ffffff', borderWidth: 1, borderColor: 'transparent', borderRadius: 5 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react3.default.createElement(_reactNative.Text, { style: { color: '#5a0fb4', fontWeight: '700', fontSize: 18, fontFamily: 'din round pro' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, 'CONTINUE'))), _react3.default.createElement(_reactNative.View, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }));
    }
  }]);

  return EnterDateOfBirth;
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