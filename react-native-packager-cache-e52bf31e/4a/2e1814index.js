Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Downloads/Archive/node_modules/react-native-emoji/index.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _nodeEmoji = require('node-emoji');

var _nodeEmoji2 = babelHelpers.interopRequireDefault(_nodeEmoji);

var Emoji = function (_React$Component) {
  babelHelpers.inherits(Emoji, _React$Component);

  function Emoji() {
    babelHelpers.classCallCheck(this, Emoji);
    return babelHelpers.possibleConstructorReturn(this, (Emoji.__proto__ || Object.getPrototypeOf(Emoji)).apply(this, arguments));
  }

  babelHelpers.createClass(Emoji, [{
    key: 'render',
    value: function render() {
      var emoji = _nodeEmoji2.default.get(this.props.name);
      return _react2.default.createElement(
        _reactNative.Text,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        emoji
      );
    }
  }]);
  return Emoji;
}(_react2.default.Component);

Emoji.propTypes = {
  name: _react2.default.PropTypes.string.isRequired
};
exports.default = Emoji;