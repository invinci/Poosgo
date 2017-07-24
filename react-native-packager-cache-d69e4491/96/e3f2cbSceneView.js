Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/node_modules/react-navigation/src/views/SceneView.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var SceneView = function (_PureComponent) {
  babelHelpers.inherits(SceneView, _PureComponent);

  function SceneView() {
    babelHelpers.classCallCheck(this, SceneView);
    return babelHelpers.possibleConstructorReturn(this, (SceneView.__proto__ || Object.getPrototypeOf(SceneView)).apply(this, arguments));
  }

  babelHelpers.createClass(SceneView, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        navigation: this.props.navigation
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          screenProps = _props.screenProps,
          navigation = _props.navigation,
          Component = _props.component;


      return _react2.default.createElement(Component, { screenProps: screenProps, navigation: navigation, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      });
    }
  }]);
  return SceneView;
}(_react.PureComponent);

SceneView.childContextTypes = {
  navigation: _propTypes2.default.object.isRequired
};
exports.default = SceneView;