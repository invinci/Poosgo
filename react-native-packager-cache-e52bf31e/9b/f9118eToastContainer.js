Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.durations = exports.positions = undefined;

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/home/naveen/Downloads/Archive/node_modules/react-native-root-toast/lib/ToastContainer.js';

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    ToastContainer: {
        displayName: 'ToastContainer'
    }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
    filename: '/home/naveen/Downloads/Archive/node_modules/react-native-root-toast/lib/ToastContainer.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmrLibIndexJs2(Component, id);
    };
}

var TOAST_MAX_WIDTH = 0.8;
var TOAST_ANIMATION_DURATION = 200;
var DIMENSION = _reactNative.Dimensions.get('window');
var KEYBOARD_HEIGHT = 0;

_reactNative.Keyboard.addListener('keyboardDidChangeFrame', function (_ref) {
    var endCoordinates = _ref.endCoordinates;

    KEYBOARD_HEIGHT = DIMENSION.height - endCoordinates.screenY;
});

var WINDOW_WIDTH = DIMENSION.width;
var positions = {
    TOP: 20,
    BOTTOM: -20,
    CENTER: 0
};

var durations = {
    LONG: 3500,
    SHORT: 2000
};

var styles = _reactNative.StyleSheet.create({
    defaultStyle: {
        position: 'absolute',
        width: WINDOW_WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerStyle: {
        padding: 10,
        backgroundColor: '#000',
        opacity: 0.8,
        borderRadius: 5,
        marginHorizontal: WINDOW_WIDTH * ((1 - TOAST_MAX_WIDTH) / 2)
    },
    shadowStyle: {
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 10
    },
    textStyle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    }
});

var ToastContainer = _wrapComponent('ToastContainer')((_temp = _class = function (_Component) {
    _inherits(ToastContainer, _Component);

    function ToastContainer() {
        _classCallCheck(this, ToastContainer);

        var _this = _possibleConstructorReturn(this, (ToastContainer.__proto__ || Object.getPrototypeOf(ToastContainer)).apply(this, arguments));

        _this.componentDidMount = function () {
            if (_this.state.visible) {
                _this._showTimeout = setTimeout(function () {
                    return _this._show();
                }, _this.props.delay);
            }
        };

        _this.componentWillReceiveProps = function (nextProps) {
            if (nextProps.visible !== _this.props.visible) {
                if (nextProps.visible) {
                    clearTimeout(_this._showTimeout);
                    clearTimeout(_this._hideTimeout);
                    _this._showTimeout = setTimeout(function () {
                        return _this._show();
                    }, _this.props.delay);
                } else {
                    _this._hide();
                }

                _this.setState({
                    visible: nextProps.visible
                });
            }
        };

        _this.componentWillUnmount = function () {
            _this._hide();
        };

        _this.shouldComponentUpdate = function (nextProps, nextState) {
            return _this.state.visible !== nextState.visible;
        };

        _this._animating = false;
        _this._root = null;
        _this._hideTimeout = null;
        _this._showTimeout = null;

        _this._show = function () {
            clearTimeout(_this._showTimeout);
            if (!_this._animating) {
                clearTimeout(_this._hideTimeout);
                _this._animating = true;
                _this._root.setNativeProps({
                    pointerEvents: 'auto'
                });
                _this.props.onShow && _this.props.onShow(_this.props.siblingManager);
                _reactNative.Animated.timing(_this.state.opacity, {
                    toValue: _this.props.opacity,
                    duration: _this.props.animation ? TOAST_ANIMATION_DURATION : 0,
                    easing: _reactNative.Easing.out(_reactNative.Easing.ease)
                }).start(function (_ref2) {
                    var finished = _ref2.finished;

                    if (finished) {
                        _this._animating = !finished;
                        _this.props.onShown && _this.props.onShown(_this.props.siblingManager);
                        if (_this.props.duration > 0) {
                            _this._hideTimeout = setTimeout(function () {
                                return _this._hide();
                            }, _this.props.duration);
                        }
                    }
                });
            }
        };

        _this._hide = function () {
            clearTimeout(_this._showTimeout);
            clearTimeout(_this._hideTimeout);
            if (!_this._animating) {
                _this._root.setNativeProps({
                    pointerEvents: 'none'
                });
                _this.props.onHide && _this.props.onHide(_this.props.siblingManager);
                _reactNative.Animated.timing(_this.state.opacity, {
                    toValue: 0,
                    duration: _this.props.animation ? TOAST_ANIMATION_DURATION : 0,
                    easing: _reactNative.Easing.in(_reactNative.Easing.ease)
                }).start(function (_ref3) {
                    var finished = _ref3.finished;

                    if (finished) {
                        _this._animating = false;
                        _this.props.onHidden && _this.props.onHidden(_this.props.siblingManager);
                    }
                });
            }
        };

        _this.state = {
            visible: _this.props.visible,
            opacity: new _reactNative.Animated.Value(0)
        };
        return _this;
    }

    _createClass(ToastContainer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;

            var offset = props.position;
            var position = offset ? _defineProperty({}, offset < 0 ? 'bottom' : 'top', offset < 0 ? KEYBOARD_HEIGHT - offset : offset) : {
                top: 0,
                bottom: KEYBOARD_HEIGHT
            };

            return this.state.visible || this._animating ? _react3.default.createElement(
                _reactNative.View,
                {
                    style: [styles.defaultStyle, position],
                    pointerEvents: 'box-none',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 201
                    }
                },
                _react3.default.createElement(
                    _reactNative.TouchableWithoutFeedback,
                    {
                        onPress: this.props.hideOnPress ? this._hide : null,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 208
                        }
                    },
                    _react3.default.createElement(
                        _reactNative.Animated.View,
                        {
                            style: [styles.containerStyle, props.containerStyle, props.backgroundColor && { backgroundColor: props.backgroundColor }, {
                                opacity: this.state.opacity
                            }, props.shadow && styles.shadowStyle, props.shadowColor && { shadowColor: props.shadowColor }],
                            pointerEvents: 'none',
                            ref: function ref(ele) {
                                return _this2._root = ele;
                            },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 211
                            }
                        },
                        _react3.default.createElement(
                            _reactNative.Text,
                            { style: [styles.textStyle, props.textStyle, props.textColor && { color: props.textColor }], __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 225
                                }
                            },
                            this.props.children
                        )
                    )
                )
            ) : null;
        }
    }]);

    return ToastContainer;
}(_react2.Component), _class.displayName = 'ToastContainer', _class.propTypes = _extends({}, _reactNative.View.propTypes, {
    containerStyle: _reactNative.View.propTypes.style,
    duration: _react2.PropTypes.number,
    visible: _react2.PropTypes.bool,
    position: _react2.PropTypes.number,
    animation: _react2.PropTypes.bool,
    shadow: _react2.PropTypes.bool,
    backgroundColor: _react2.PropTypes.string,
    opacity: _react2.PropTypes.number,
    shadowColor: _react2.PropTypes.string,
    textColor: _react2.PropTypes.string,
    textStyle: _reactNative.Text.propTypes.style,
    delay: _react2.PropTypes.number,
    hideOnPress: _react2.PropTypes.bool,
    onHide: _react2.PropTypes.func,
    onHidden: _react2.PropTypes.func,
    onShow: _react2.PropTypes.func,
    onShown: _react2.PropTypes.func
}), _class.defaultProps = {
    visible: false,
    duration: durations.SHORT,
    animation: true,
    shadow: true,
    position: positions.BOTTOM,
    opacity: 0.8,
    delay: 0,
    hideOnPress: true
}, _temp));

exports.default = ToastContainer;
exports.positions = positions;
exports.durations = durations;