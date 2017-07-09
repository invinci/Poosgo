Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/naveen/Downloads/Archive/node_modules/react-native-country-picker-modal/src/CloseButton.android.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _ratio = require('./ratio');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _reactNative.StyleSheet.create({
  closeButton: {
    height: 48,
    width: (0, _ratio.getWidthPercent)(15),
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButtonImage: {
    height: 24,
    width: 24,
    resizeMode: 'contain'
  }
});

var CloseButton = function CloseButton(props) {
  return _react2.default.createElement(
    _reactNative.View,
    { style: styles.closeButton, __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    },
    _react2.default.createElement(
      _reactNative.TouchableNativeFeedback,
      _extends({
        background: _reactNative.Platform.Version < 21 ? _reactNative.TouchableNativeFeedback.SelectableBackground() : _reactNative.TouchableNativeFeedback.SelectableBackgroundBorderless()
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }),
      _react2.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        },
        _react2.default.createElement(_reactNative.Image, {
          source: require('./android-close.png'),
          style: styles.closeButtonImage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        })
      )
    )
  );
};

exports.default = CloseButton;