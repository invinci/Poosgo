Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Downloads/Archive/node_modules/react-navigation/src/views/TabView/TabBarBottom.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _TabBarIcon = require('./TabBarIcon');

var _TabBarIcon2 = babelHelpers.interopRequireDefault(_TabBarIcon);

var TabBarBottom = function (_PureComponent) {
  babelHelpers.inherits(TabBarBottom, _PureComponent);

  function TabBarBottom() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, TabBarBottom);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = TabBarBottom.__proto__ || Object.getPrototypeOf(TabBarBottom)).call.apply(_ref, [this].concat(args))), _this), _this._renderLabel = function (scene) {
      var _this$props = _this.props,
          position = _this$props.position,
          navigation = _this$props.navigation,
          activeTintColor = _this$props.activeTintColor,
          inactiveTintColor = _this$props.inactiveTintColor,
          labelStyle = _this$props.labelStyle,
          showLabel = _this$props.showLabel;

      if (showLabel === false) {
        return null;
      }
      var index = scene.index;
      var routes = navigation.state.routes;

      var inputRange = [-1].concat(babelHelpers.toConsumableArray(routes.map(function (x, i) {
        return i;
      })));
      var outputRange = inputRange.map(function (inputIndex) {
        return inputIndex === index ? activeTintColor : inactiveTintColor;
      });
      var color = position.interpolate({
        inputRange: inputRange,
        outputRange: outputRange
      });

      var tintColor = scene.focused ? activeTintColor : inactiveTintColor;
      var label = _this.props.getLabel(babelHelpers.extends({}, scene, { tintColor: tintColor }));
      if (typeof label === 'string') {
        return _react2.default.createElement(
          _reactNative.Animated.Text,
          { style: [styles.label, { color: color }, labelStyle], __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            }
          },
          label
        );
      }

      if (typeof label === 'function') {
        return label(babelHelpers.extends({}, scene, { tintColor: tintColor }));
      }

      return label;
    }, _this._renderIcon = function (scene) {
      var _this$props2 = _this.props,
          position = _this$props2.position,
          navigation = _this$props2.navigation,
          activeTintColor = _this$props2.activeTintColor,
          inactiveTintColor = _this$props2.inactiveTintColor,
          renderIcon = _this$props2.renderIcon,
          showIcon = _this$props2.showIcon;

      if (showIcon === false) {
        return null;
      }
      return _react2.default.createElement(_TabBarIcon2.default, {
        position: position,
        navigation: navigation,
        activeTintColor: activeTintColor,
        inactiveTintColor: inactiveTintColor,
        renderIcon: renderIcon,
        scene: scene,
        style: styles.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      });
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(TabBarBottom, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          position = _props.position,
          navigation = _props.navigation,
          jumpToIndex = _props.jumpToIndex,
          activeBackgroundColor = _props.activeBackgroundColor,
          inactiveBackgroundColor = _props.inactiveBackgroundColor,
          style = _props.style;
      var routes = navigation.state.routes;

      var inputRange = [-1].concat(babelHelpers.toConsumableArray(routes.map(function (x, i) {
        return i;
      })));
      return _react2.default.createElement(
        _reactNative.Animated.View,
        { style: [styles.tabBar, style], __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        },
        routes.map(function (route, index) {
          var focused = index === navigation.state.index;
          var scene = { route: route, index: index, focused: focused };
          var outputRange = inputRange.map(function (inputIndex) {
            return inputIndex === index ? activeBackgroundColor : inactiveBackgroundColor;
          });
          var backgroundColor = position.interpolate({
            inputRange: inputRange,
            outputRange: outputRange
          });
          var justifyContent = _this2.props.showIcon ? 'flex-end' : 'center';
          return _react2.default.createElement(
            _reactNative.TouchableWithoutFeedback,
            {
              key: route.key,
              onPress: function onPress() {
                return jumpToIndex(index);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 151
              }
            },
            _react2.default.createElement(
              _reactNative.Animated.View,
              {
                style: [styles.tab, { backgroundColor: backgroundColor, justifyContent: justifyContent }],
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 155
                }
              },
              _this2._renderIcon(scene),
              _this2._renderLabel(scene)
            )
          );
        })
      );
    }
  }]);
  return TabBarBottom;
}(_react.PureComponent);

TabBarBottom.defaultProps = {
  activeTintColor: '#3478f6',
  activeBackgroundColor: 'transparent',
  inactiveTintColor: '#929292',
  inactiveBackgroundColor: 'transparent',
  showLabel: true,
  showIcon: true
};
exports.default = TabBarBottom;


var styles = _reactNative.StyleSheet.create({
  tabBar: {
    height: 49,
    flexDirection: 'row',
    borderTopWidth: _reactNative.StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0, 0, 0, .2)',
    backgroundColor: '#f4f4f4' },
  tab: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-end'
  },
  icon: {
    flexGrow: 1
  },
  label: {
    textAlign: 'center',
    fontSize: 10,
    marginBottom: 1.5,
    backgroundColor: 'transparent'
  }
});