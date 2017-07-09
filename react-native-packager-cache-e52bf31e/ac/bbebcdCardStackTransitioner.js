Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp2,
    _jsxFileName = '/home/naveen/Downloads/Archive/node_modules/react-navigation/src/views/CardStackTransitioner.js';

var _reactNative = require('react-native');

var _CardStack = require('./CardStack');

var _CardStack2 = _interopRequireDefault(_CardStack);

var _CardStackStyleInterpolator = require('./CardStackStyleInterpolator');

var _CardStackStyleInterpolator2 = _interopRequireDefault(_CardStackStyleInterpolator);

var _Transitioner = require('./Transitioner');

var _Transitioner2 = _interopRequireDefault(_Transitioner);

var _TransitionConfigs = require('./TransitionConfigs');

var _TransitionConfigs2 = _interopRequireDefault(_TransitionConfigs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  CardStackTransitioner: {
    displayName: 'CardStackTransitioner'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/home/naveen/Downloads/Archive/node_modules/react-navigation/src/views/CardStackTransitioner.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var NativeAnimatedModule = _reactNative.NativeModules && _reactNative.NativeModules.NativeAnimatedModule;

var CardStackTransitioner = _wrapComponent('CardStackTransitioner')((_temp2 = _class = function (_Component) {
  _inherits(CardStackTransitioner, _Component);

  function CardStackTransitioner() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CardStackTransitioner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CardStackTransitioner.__proto__ || Object.getPrototypeOf(CardStackTransitioner)).call.apply(_ref, [this].concat(args))), _this), _this._configureTransition = function (transitionProps, prevTransitionProps) {
      var isModal = _this.props.mode === 'modal';

      var transitionSpec = _extends({}, _TransitionConfigs2.default.getTransitionConfig(_this.props.transitionConfig, transitionProps, prevTransitionProps, isModal).transitionSpec);
      if (!!NativeAnimatedModule && _CardStackStyleInterpolator2.default.canUseNativeDriver(isModal)) {
        transitionSpec.useNativeDriver = true;
      }
      return transitionSpec;
    }, _this._render = function (props) {
      var _this$props = _this.props,
          screenProps = _this$props.screenProps,
          headerMode = _this$props.headerMode,
          mode = _this$props.mode,
          router = _this$props.router,
          cardStyle = _this$props.cardStyle,
          transitionConfig = _this$props.transitionConfig,
          style = _this$props.style;

      return _react3.default.createElement(_CardStack2.default, _extends({
        screenProps: screenProps,
        headerMode: headerMode,
        mode: mode,
        router: router,
        cardStyle: cardStyle,
        transitionConfig: transitionConfig,
        style: style
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CardStackTransitioner, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(_Transitioner2.default, {
        configureTransition: this._configureTransition,
        navigation: this.props.navigation,
        render: this._render,
        style: this.props.style,
        onTransitionStart: this.props.onTransitionStart,
        onTransitionEnd: this.props.onTransitionEnd,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      });
    }
  }]);

  return CardStackTransitioner;
}(_react2.Component), _class.defaultProps = {
  mode: 'card'
}, _temp2));

exports.default = CardStackTransitioner;