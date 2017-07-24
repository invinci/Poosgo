Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/node_modules/react-native-country-picker-modal/src/CloseButton.android.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _ratio = require('./ratio');

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
      babelHelpers.extends({
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