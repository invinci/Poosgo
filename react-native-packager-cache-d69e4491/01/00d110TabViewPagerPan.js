Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/node_modules/react-native-tab-view/src/TabViewPagerPan.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _TabViewPropTypes = require('./TabViewPropTypes');

var DEAD_ZONE = 12;

var DefaultTransitionSpec = {
  timing: _reactNative.Animated.spring,
  tension: 300,
  friction: 35
};

var TabViewPagerPan = function (_PureComponent) {
  babelHelpers.inherits(TabViewPagerPan, _PureComponent);

  function TabViewPagerPan() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, TabViewPagerPan);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = TabViewPagerPan.__proto__ || Object.getPrototypeOf(TabViewPagerPan)).call.apply(_ref, [this].concat(args))), _this), _this._pendingIndex = null, _this._lastValue = null, _this._isMoving = null, _this._startDirection = 0, _this._isIndexInRange = function (index) {
      var routes = _this.props.navigationState.routes;

      return index >= 0 && index <= routes.length - 1;
    }, _this._isMovingHorizontally = function (evt, gestureState) {
      return Math.abs(gestureState.dx) > Math.abs(gestureState.dy * 3) && Math.abs(gestureState.vx) > Math.abs(gestureState.vy * 3);
    }, _this._isReverseDirection = function (gestureState) {
      if (_this._startDirection > 0) {
        return gestureState.vx < 0;
      } else {
        return gestureState.vx > 0;
      }
    }, _this._getNextIndex = function (evt, gestureState) {
      var currentIndex = typeof _this._pendingIndex === 'number' ? _this._pendingIndex : _this.props.navigationState.index;

      var swipeVelocityThreshold = _this.props.swipeVelocityThreshold;

      if (_reactNative.Platform.OS === 'android') {
        swipeVelocityThreshold /= 1000000;
      }

      if (Math.abs(gestureState.dx) > _this.props.swipeDistanceThreshold || Math.abs(gestureState.vx) > swipeVelocityThreshold) {
        var nextIndex = currentIndex - gestureState.dx / Math.abs(gestureState.dx) * (_reactNative.I18nManager.isRTL ? -1 : 1);
        if (_this._isIndexInRange(nextIndex)) {
          return nextIndex;
        }
      }
      return currentIndex;
    }, _this._canMoveScreen = function (evt, gestureState) {
      if (_this.props.swipeEnabled === false) {
        return false;
      }
      var _this$props$navigatio = _this.props.navigationState,
          routes = _this$props$navigatio.routes,
          index = _this$props$navigatio.index;

      var canMove = _this._isMovingHorizontally(evt, gestureState) && (gestureState.dx >= DEAD_ZONE && index >= 0 || gestureState.dx <= -DEAD_ZONE && index <= routes.length - 1);
      if (canMove) {
        _this._startDirection = gestureState.dx;
      }
      return canMove;
    }, _this._startGesture = function () {
      _this._lastValue = _this.props.getLastPosition();
      _this.props.position.stopAnimation();
    }, _this._respondToGesture = function (evt, gestureState) {
      var width = _this.props.layout.width;

      var currentPosition = typeof _this._lastValue === 'number' ? _this._lastValue : _this.props.navigationState.index;
      var nextPosition = currentPosition - gestureState.dx / width * (_reactNative.I18nManager.isRTL ? -1 : 1);
      if (_this._isMoving === null) {
        _this._isMoving = _this._isMovingHorizontally(evt, gestureState);
      }
      if (_this._isMoving && _this._isIndexInRange(nextPosition)) {
        _this.props.position.setValue(nextPosition);
      }
    }, _this._finishGesture = function (evt, gestureState) {
      var currentIndex = _this.props.navigationState.index;
      var currentValue = _this.props.getLastPosition();
      if (currentValue !== currentIndex) {
        if (_this._isMoving && !_this._isReverseDirection(gestureState)) {
          var nextIndex = _this._getNextIndex(evt, gestureState);
          _this._transitionTo(nextIndex);
        } else {
          _this._transitionTo(currentIndex);
        }
      }
      _this._lastValue = null;
      _this._isMoving = null;
    }, _this._transitionTo = function (toValue) {
      var lastPosition = _this.props.getLastPosition();
      var currentTransitionProps = {
        progress: lastPosition
      };
      var nextTransitionProps = {
        progress: toValue
      };

      _this._pendingIndex = toValue;

      if (_this.props.animationEnabled !== false) {
        var transitionSpec = _this.props.configureTransition(currentTransitionProps, nextTransitionProps);
        var timing = transitionSpec.timing,
            transitionConfig = babelHelpers.objectWithoutProperties(transitionSpec, ['timing']);


        timing(_this.props.position, babelHelpers.extends({}, transitionConfig, {
          toValue: toValue
        })).start(function (_ref2) {
          var finished = _ref2.finished;

          if (finished) {
            _this.props.jumpToIndex(toValue);
            _this._pendingIndex = null;
          }
        });
      } else {
        _this.props.position.setValue(toValue);
        _this.props.jumpToIndex(toValue);
        _this._pendingIndex = null;
      }
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(TabViewPagerPan, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._panResponder = _reactNative.PanResponder.create({
        onMoveShouldSetPanResponder: this._canMoveScreen,
        onMoveShouldSetPanResponderCapture: this._canMoveScreen,
        onPanResponderGrant: this._startGesture,
        onPanResponderMove: this._respondToGesture,
        onPanResponderTerminate: this._finishGesture,
        onPanResponderRelease: this._finishGesture,
        onPanResponderTerminationRequest: function onPanResponderTerminationRequest() {
          return true;
        }
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._resetListener = this.props.subscribe('reset', this._transitionTo);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.navigationState.index !== this.props.navigationState.index) {
        this._transitionTo(this.props.navigationState.index);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._resetListener.remove();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          layout = _props.layout,
          position = _props.position,
          navigationState = _props.navigationState,
          children = _props.children;
      var width = layout.width;
      var routes = navigationState.routes;

      var inputRange = [-1].concat(babelHelpers.toConsumableArray(routes.map(function (x, i) {
        return i;
      })));
      var outputRange = inputRange.map(function (i) {
        return width * i * (_reactNative.I18nManager.isRTL ? 1 : -1);
      });

      var translateX = position.interpolate({
        inputRange: inputRange,
        outputRange: outputRange
      });

      return _react2.default.createElement(
        _reactNative.Animated.View,
        babelHelpers.extends({
          style: [styles.sheet, width ? { width: routes.length * width, transform: [{ translateX: translateX }] } : null]
        }, this._panResponder.panHandlers, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 275
          }
        }),
        _react.Children.map(children, function (child, i) {
          return _react2.default.createElement(
            _reactNative.View,
            {
              key: navigationState.routes[i].key,
              testID: navigationState.routes[i].testID,
              style: width ? { width: width } : i === navigationState.index ? _reactNative.StyleSheet.absoluteFill : null,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 285
              }
            },
            i === navigationState.index || width ? child : null
          );
        })
      );
    }
  }]);
  return TabViewPagerPan;
}(_react.PureComponent);

TabViewPagerPan.propTypes = babelHelpers.extends({}, _TabViewPropTypes.SceneRendererPropType, {
  configureTransition: _propTypes2.default.func.isRequired,
  animationEnabled: _propTypes2.default.bool,
  swipeEnabled: _propTypes2.default.bool,
  swipeDistanceThreshold: _propTypes2.default.number.isRequired,
  swipeVelocityThreshold: _propTypes2.default.number.isRequired,
  children: _propTypes2.default.node
});
TabViewPagerPan.defaultProps = {
  configureTransition: function configureTransition() {
    return DefaultTransitionSpec;
  },
  initialLayout: {
    height: 0,
    width: 0
  },
  swipeDistanceThreshold: 120,
  swipeVelocityThreshold: 0.25
};
exports.default = TabViewPagerPan;


var styles = _reactNative.StyleSheet.create({
  sheet: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch'
  }
});