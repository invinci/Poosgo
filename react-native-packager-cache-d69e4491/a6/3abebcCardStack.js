Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/node_modules/react-navigation/src/views/CardStack.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _clamp = require('clamp');

var _clamp2 = babelHelpers.interopRequireDefault(_clamp);

var _reactNative = require('react-native');

var _Card = require('./Card');

var _Card2 = babelHelpers.interopRequireDefault(_Card);

var _Header = require('./Header');

var _Header2 = babelHelpers.interopRequireDefault(_Header);

var _NavigationActions = require('../NavigationActions');

var _NavigationActions2 = babelHelpers.interopRequireDefault(_NavigationActions);

var _addNavigationHelpers = require('../addNavigationHelpers');

var _addNavigationHelpers2 = babelHelpers.interopRequireDefault(_addNavigationHelpers);

var _SceneView = require('./SceneView');

var _SceneView2 = babelHelpers.interopRequireDefault(_SceneView);

var _TransitionConfigs = require('./TransitionConfigs');

var _TransitionConfigs2 = babelHelpers.interopRequireDefault(_TransitionConfigs);

var emptyFunction = function emptyFunction() {};

var ANIMATION_DURATION = 500;

var POSITION_THRESHOLD = 1 / 2;

var RESPOND_THRESHOLD = 20;

var GESTURE_RESPONSE_DISTANCE_HORIZONTAL = 25;
var GESTURE_RESPONSE_DISTANCE_VERTICAL = 135;

var animatedSubscribeValue = function animatedSubscribeValue(animatedValue) {
  if (!animatedValue.__isNative) {
    return;
  }
  if (Object.keys(animatedValue._listeners).length === 0) {
    animatedValue.addListener(emptyFunction);
  }
};

var CardStack = function (_Component) {
  babelHelpers.inherits(CardStack, _Component);

  function CardStack() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, CardStack);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = CardStack.__proto__ || Object.getPrototypeOf(CardStack)).call.apply(_ref, [this].concat(args))), _this), _this._gestureStartValue = 0, _this._isResponding = false, _this._immediateIndex = null, _this._screenDetails = {}, _this._getScreenDetails = function (scene) {
      var _this$props = _this.props,
          screenProps = _this$props.screenProps,
          navigation = _this$props.navigation,
          router = _this$props.router;

      var screenDetails = _this._screenDetails[scene.key];
      if (!screenDetails || screenDetails.state !== scene.route) {
        var screenNavigation = (0, _addNavigationHelpers2.default)(babelHelpers.extends({}, navigation, {
          state: scene.route
        }));
        screenDetails = {
          state: scene.route,
          navigation: screenNavigation,
          options: router.getScreenOptions(screenNavigation, screenProps)
        };
        _this._screenDetails[scene.key] = screenDetails;
      }
      return screenDetails;
    }, _this._renderCard = function (scene) {
      var isModal = _this.props.mode === 'modal';

      var _TransitionConfigs$ge = _TransitionConfigs2.default.getTransitionConfig(_this.props.transitionConfig, {}, {}, isModal),
          screenInterpolator = _TransitionConfigs$ge.screenInterpolator;

      var style = screenInterpolator && screenInterpolator(babelHelpers.extends({}, _this.props, { scene: scene }));

      var SceneComponent = _this.props.router.getComponentForRouteName(scene.route.routeName);

      return _react2.default.createElement(
        _Card2.default,
        babelHelpers.extends({}, _this.props, {
          key: 'card_' + scene.key,
          style: [style, _this.props.cardStyle],
          scene: scene,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 430
          }
        }),
        _this._renderInnerScene(SceneComponent, scene)
      );
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(CardStack, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var _this2 = this;

      if (props.screenProps !== this.props.screenProps) {
        this._screenDetails = {};
      }
      props.scenes.forEach(function (newScene) {
        if (_this2._screenDetails[newScene.key] && _this2._screenDetails[newScene.key].state !== newScene.route) {
          _this2._screenDetails[newScene.key] = null;
        }
      });
    }
  }, {
    key: '_renderHeader',
    value: function _renderHeader(scene, headerMode) {
      var header = this._getScreenDetails(scene).options.header;

      if (typeof header !== 'undefined' && typeof header !== 'function') {
        return header;
      }

      var renderHeader = header || function (props) {
        return _react2.default.createElement(_Header2.default, babelHelpers.extends({}, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          }
        }));
      };

      var _props = this.props,
          mode = _props.mode,
          passProps = babelHelpers.objectWithoutProperties(_props, ['mode']);


      return renderHeader(babelHelpers.extends({}, passProps, {
        scene: scene,
        mode: headerMode,
        getScreenDetails: this._getScreenDetails
      }));
    }
  }, {
    key: '_animatedSubscribe',
    value: function _animatedSubscribe(props) {
      animatedSubscribeValue(props.layout.width);
      animatedSubscribeValue(props.layout.height);
      animatedSubscribeValue(props.position);
    }
  }, {
    key: '_reset',
    value: function _reset(resetToIndex, duration) {
      _reactNative.Animated.timing(this.props.position, {
        toValue: resetToIndex,
        duration: duration,
        easing: _reactNative.Easing.linear(),
        useNativeDriver: this.props.position.__isNative
      }).start();
    }
  }, {
    key: '_goBack',
    value: function _goBack(backFromIndex, duration) {
      var _this3 = this;

      var _props2 = this.props,
          navigation = _props2.navigation,
          position = _props2.position,
          scenes = _props2.scenes;

      var toValue = Math.max(backFromIndex - 1, 0);

      this._immediateIndex = toValue;

      _reactNative.Animated.timing(position, {
        toValue: toValue,
        duration: duration,
        easing: _reactNative.Easing.linear(),
        useNativeDriver: position.__isNative
      }).start(function () {
        _this3._immediateIndex = null;
        var backFromScene = scenes.find(function (s) {
          return s.index === toValue + 1;
        });
        if (!_this3._isResponding && backFromScene) {
          navigation.dispatch(_NavigationActions2.default.back({ key: backFromScene.route.key }));
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var floatingHeader = null;
      var headerMode = this._getHeaderMode();
      if (headerMode === 'float') {
        floatingHeader = this._renderHeader(this.props.scene, headerMode);
      }
      var _props3 = this.props,
          navigation = _props3.navigation,
          position = _props3.position,
          layout = _props3.layout,
          scene = _props3.scene,
          scenes = _props3.scenes,
          mode = _props3.mode;
      var index = navigation.state.index;

      var isVertical = mode === 'modal';

      var responder = _reactNative.PanResponder.create({
        onPanResponderTerminate: function onPanResponderTerminate() {
          _this4._isResponding = false;
          _this4._reset(index, 0);
        },
        onPanResponderGrant: function onPanResponderGrant() {
          position.stopAnimation(function (value) {
            _this4._isResponding = true;
            _this4._gestureStartValue = value;
          });
        },
        onMoveShouldSetPanResponder: function onMoveShouldSetPanResponder(event, gesture) {
          if (index !== scene.index) {
            return false;
          }
          var immediateIndex = _this4._immediateIndex == null ? index : _this4._immediateIndex;
          var currentDragDistance = gesture[isVertical ? 'dy' : 'dx'];
          var currentDragPosition = event.nativeEvent[isVertical ? 'pageY' : 'pageX'];
          var axisLength = isVertical ? layout.height.__getValue() : layout.width.__getValue();
          var axisHasBeenMeasured = !!axisLength;

          var screenEdgeDistance = currentDragPosition - currentDragDistance;

          var gestureResponseDistance = isVertical ? GESTURE_RESPONSE_DISTANCE_VERTICAL : GESTURE_RESPONSE_DISTANCE_HORIZONTAL;

          if (screenEdgeDistance > gestureResponseDistance) {
            return false;
          }

          var hasDraggedEnough = Math.abs(currentDragDistance) > RESPOND_THRESHOLD;

          var isOnFirstCard = immediateIndex === 0;
          var shouldSetResponder = hasDraggedEnough && axisHasBeenMeasured && !isOnFirstCard;
          return shouldSetResponder;
        },
        onPanResponderMove: function onPanResponderMove(event, gesture) {
          var startValue = _this4._gestureStartValue;
          var axis = isVertical ? 'dy' : 'dx';
          var axisDistance = isVertical ? layout.height.__getValue() : layout.width.__getValue();
          var currentValue = _reactNative.I18nManager.isRTL && axis === 'dx' ? startValue + gesture[axis] / axisDistance : startValue - gesture[axis] / axisDistance;
          var value = (0, _clamp2.default)(index - 1, currentValue, index);
          position.setValue(value);
        },
        onPanResponderTerminationRequest: function onPanResponderTerminationRequest() {
          return false;
        },
        onPanResponderRelease: function onPanResponderRelease(event, gesture) {
          if (!_this4._isResponding) {
            return;
          }
          _this4._isResponding = false;

          var immediateIndex = _this4._immediateIndex == null ? index : _this4._immediateIndex;

          var axisDistance = isVertical ? layout.height.__getValue() : layout.width.__getValue();
          var movedDistance = gesture[isVertical ? 'moveY' : 'moveX'];
          var defaultVelocity = axisDistance / ANIMATION_DURATION;
          var gestureVelocity = gesture[isVertical ? 'vy' : 'vx'];
          var velocity = Math.max(gestureVelocity, defaultVelocity);
          var resetDuration = movedDistance / velocity;
          var goBackDuration = (axisDistance - movedDistance) / velocity;

          position.stopAnimation(function (value) {
            if (gestureVelocity < -0.5) {
              _this4._reset(immediateIndex, resetDuration);
              return;
            }
            if (gestureVelocity > 0.5) {
              _this4._goBack(immediateIndex, goBackDuration);
              return;
            }

            if (value <= index - POSITION_THRESHOLD) {
              _this4._goBack(immediateIndex, goBackDuration);
            } else {
              _this4._reset(immediateIndex, resetDuration);
            }
          });
        }
      });

      var _getScreenDetails = this._getScreenDetails(scene),
          options = _getScreenDetails.options;

      var gesturesEnabled = typeof options.gesturesEnabled === 'boolean' ? options.gesturesEnabled : _reactNative.Platform.OS === 'ios';

      var handlers = gesturesEnabled ? responder.panHandlers : {};

      return _react2.default.createElement(
        _reactNative.View,
        babelHelpers.extends({}, handlers, { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 363
          }
        }),
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.scenes, __source: {
              fileName: _jsxFileName,
              lineNumber: 364
            }
          },
          scenes.map(function (s) {
            return _this4._renderCard(s);
          })
        ),
        floatingHeader
      );
    }
  }, {
    key: '_getHeaderMode',
    value: function _getHeaderMode() {
      if (this.props.headerMode) {
        return this.props.headerMode;
      }
      if (_reactNative.Platform.OS === 'android' || this.props.mode === 'modal') {
        return 'screen';
      }
      return 'float';
    }
  }, {
    key: '_renderInnerScene',
    value: function _renderInnerScene(SceneComponent, scene) {
      var _getScreenDetails2 = this._getScreenDetails(scene),
          navigation = _getScreenDetails2.navigation;

      var screenProps = this.props.screenProps;

      var headerMode = this._getHeaderMode();
      if (headerMode === 'screen') {
        return _react2.default.createElement(
          _reactNative.View,
          { style: styles.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 391
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: { flex: 1 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 392
              }
            },
            _react2.default.createElement(_SceneView2.default, {
              screenProps: screenProps,
              navigation: navigation,
              component: SceneComponent,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 393
              }
            })
          ),
          this._renderHeader(scene, headerMode)
        );
      }
      return _react2.default.createElement(_SceneView2.default, {
        screenProps: this.props.screenProps,
        navigation: navigation,
        component: SceneComponent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      });
    }
  }]);
  return CardStack;
}(_react.Component);

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,

    flexDirection: 'column-reverse'
  },
  scenes: {
    flex: 1
  }
});

exports.default = CardStack;