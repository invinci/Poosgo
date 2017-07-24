Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.durations = exports.positions = undefined;
var _jsxFileName = '/home/naveen/Downloads/Archive/node_modules/react-native-root-toast/lib/ToastContainer.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

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

var ToastContainer = function (_Component) {
    babelHelpers.inherits(ToastContainer, _Component);

    function ToastContainer() {
        babelHelpers.classCallCheck(this, ToastContainer);

        var _this = babelHelpers.possibleConstructorReturn(this, (ToastContainer.__proto__ || Object.getPrototypeOf(ToastContainer)).apply(this, arguments));

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

    babelHelpers.createClass(ToastContainer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;

            var offset = props.position;
            var position = offset ? babelHelpers.defineProperty({}, offset < 0 ? 'bottom' : 'top', offset < 0 ? KEYBOARD_HEIGHT - offset : offset) : {
                top: 0,
                bottom: KEYBOARD_HEIGHT
            };

            return this.state.visible || this._animating ? _react2.default.createElement(
                _reactNative.View,
                {
                    style: [styles.defaultStyle, position],
                    pointerEvents: 'box-none',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 201
                    }
                },
                _react2.default.createElement(
                    _reactNative.TouchableWithoutFeedback,
                    {
                        onPress: this.props.hideOnPress ? this._hide : null,
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 208
                        }
                    },
                    _react2.default.createElement(
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
                        _react2.default.createElement(
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
}(_react.Component);

ToastContainer.displayName = 'ToastContainer';
ToastContainer.propTypes = babelHelpers.extends({}, _reactNative.View.propTypes, {
    containerStyle: _reactNative.View.propTypes.style,
    duration: _react.PropTypes.number,
    visible: _react.PropTypes.bool,
    position: _react.PropTypes.number,
    animation: _react.PropTypes.bool,
    shadow: _react.PropTypes.bool,
    backgroundColor: _react.PropTypes.string,
    opacity: _react.PropTypes.number,
    shadowColor: _react.PropTypes.string,
    textColor: _react.PropTypes.string,
    textStyle: _reactNative.Text.propTypes.style,
    delay: _react.PropTypes.number,
    hideOnPress: _react.PropTypes.bool,
    onHide: _react.PropTypes.func,
    onHidden: _react.PropTypes.func,
    onShow: _react.PropTypes.func,
    onShown: _react.PropTypes.func
});
ToastContainer.defaultProps = {
    visible: false,
    duration: durations.SHORT,
    animation: true,
    shadow: true,
    position: positions.BOTTOM,
    opacity: 0.8,
    delay: 0,
    hideOnPress: true
};
exports.default = ToastContainer;
exports.positions = positions;
exports.durations = durations;