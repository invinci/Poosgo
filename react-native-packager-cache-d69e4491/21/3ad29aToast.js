Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Manager = undefined;
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/node_modules/react-native-root-toast/lib/Toast.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeRootSiblings = require('react-native-root-siblings');

var _reactNativeRootSiblings2 = babelHelpers.interopRequireDefault(_reactNativeRootSiblings);

var _ToastContainer = require('./ToastContainer');

var _ToastContainer2 = babelHelpers.interopRequireDefault(_ToastContainer);

var Toast = function (_Component) {
    babelHelpers.inherits(Toast, _Component);

    function Toast() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, Toast);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this._toast = null, _this.componentWillMount = function () {
            _this._toast = new _reactNativeRootSiblings2.default(_react2.default.createElement(_ToastContainer2.default, babelHelpers.extends({}, _this.props, {
                duration: 0,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            })));
        }, _this.componentWillReceiveProps = function (nextProps) {
            _this._toast.update(_react2.default.createElement(_ToastContainer2.default, babelHelpers.extends({}, nextProps, {
                duration: 0,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            })));
        }, _this.componentWillUnmount = function () {
            _this._toast.destroy();
        }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(Toast, [{
        key: 'render',
        value: function render() {
            return null;
        }
    }]);
    return Toast;
}(_react.Component);

Toast.displayName = 'Toast';
Toast.propTypes = _ToastContainer2.default.propTypes;
Toast.positions = _ToastContainer.positions;
Toast.durations = _ToastContainer.durations;

Toast.show = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { position: _ToastContainer.positions.BOTTOM, duration: _ToastContainer.durations.SHORT };

    return new _reactNativeRootSiblings2.default(_react2.default.createElement(
        _ToastContainer2.default,
        babelHelpers.extends({}, options, {
            visible: true,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 18
            }
        }),
        message
    ));
};

Toast.hide = function (toast) {
    if (toast instanceof _reactNativeRootSiblings2.default) {
        toast.destroy();
    } else {
        console.warn('Toast.hide expected a `RootSiblings` instance as argument.\nBut got `' + typeof toast + '` instead.');
    }
};

exports.Manager = _reactNativeRootSiblings2.default;
exports.default = Toast;