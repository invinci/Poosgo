Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/node_modules/react-navigation/src/views/HeaderTitle.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var HeaderTitle = function HeaderTitle(_ref) {
  var style = _ref.style,
      rest = babelHelpers.objectWithoutProperties(_ref, ['style']);
  return _react2.default.createElement(_reactNative.Text, babelHelpers.extends({
    numberOfLines: 1
  }, rest, {
    style: [styles.title, style],
    accessibilityTraits: 'header',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
};

var styles = _reactNative.StyleSheet.create({
  title: {
    fontSize: _reactNative.Platform.OS === 'ios' ? 17 : 18,
    fontWeight: _reactNative.Platform.OS === 'ios' ? '600' : '500',
    color: 'rgba(0, 0, 0, .9)',
    textAlign: _reactNative.Platform.OS === 'ios' ? 'center' : 'left',
    marginHorizontal: 16
  }
});

exports.default = HeaderTitle;