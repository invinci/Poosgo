Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/node_modules/react-native-country-picker-modal/src/KeyboardAvoidingView.android.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});

var KeyboardAvoidingView = function KeyboardAvoidingView(props) {
  return _react2.default.createElement(_reactNative.View, babelHelpers.extends({}, props, { style: [styles.container, props.styles], __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
};

KeyboardAvoidingView.propTypes = {
  offset: _react2.default.PropTypes.number,
  children: _react2.default.PropTypes.node,
  styles: _react2.default.PropTypes.array
};

exports.default = KeyboardAvoidingView;