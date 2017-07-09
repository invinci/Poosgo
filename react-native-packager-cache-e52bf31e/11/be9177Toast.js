Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Manager = undefined;

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp2,
    _jsxFileName = '/home/naveen/Downloads/Archive/node_modules/react-native-root-toast/lib/Toast.js';

var _reactNative = require('react-native');

var _reactNativeRootSiblings = require('react-native-root-siblings');

var _reactNativeRootSiblings2 = _interopRequireDefault(_reactNativeRootSiblings);

var _ToastContainer = require('./ToastContainer');

var _ToastContainer2 = _interopRequireDefault(_ToastContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Toast: {
        displayName: 'Toast'
    }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
    filename: '/home/naveen/Downloads/Archive/node_modules/react-native-root-toast/lib/Toast.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmrLibIndexJs2(Component, id);
    };
}

var Toast = _wrapComponent('Toast')((_temp2 = _class = function (_Component) {
    _inherits(Toast, _Component);

    function Toast() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Toast);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this._toast = null, _this.componentWillMount = function () {
            _this._toast = new _reactNativeRootSiblings2.default(_react3.default.createElement(_ToastContainer2.default, _extends({}, _this.props, {
                duration: 0,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            })));
        }, _this.componentWillReceiveProps = function (nextProps) {
            _this._toast.update(_react3.default.createElement(_ToastContainer2.default, _extends({}, nextProps, {
                duration: 0,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            })));
        }, _this.componentWillUnmount = function () {
            _this._toast.destroy();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Toast, [{
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return Toast;
}(_react2.Component), _class.displayName = 'Toast', _class.propTypes = _ToastContainer2.default.propTypes, _class.positions = _ToastContainer.positions, _class.durations = _ToastContainer.durations, _class.show = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { position: _ToastContainer.positions.BOTTOM, duration: _ToastContainer.durations.SHORT };

    return new _reactNativeRootSiblings2.default(_react3.default.createElement(
        _ToastContainer2.default,
        _extends({}, options, {
            visible: true,
            __source: {
                fileName: _jsxFileName,
                lineNumber: 18
            }
        }),
        message
    ));
}, _class.hide = function (toast) {
    if (toast instanceof _reactNativeRootSiblings2.default) {
        toast.destroy();
    } else {
        console.warn('Toast.hide expected a `RootSiblings` instance as argument.\nBut got `' + typeof toast + '` instead.');
    }
}, _temp2));

exports.Manager = _reactNativeRootSiblings2.default;
exports.default = Toast;