Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _class = function (_Component) {
    babelHelpers.inherits(_class, _Component);

    function _class() {
        babelHelpers.classCallCheck(this, _class);
        return babelHelpers.possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    babelHelpers.createClass(_class, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return nextProps.shouldUpdate;
        }
    }, {
        key: 'render',
        value: function render() {
            var child = this.props.children;
            return child === null || child === false ? null : _react.Children.only(child);
        }
    }]);
    return _class;
}(_react.Component);

_class.propTypes = {
    shouldUpdate: _propTypes2.default.bool.isRequired
};
exports.default = _class;