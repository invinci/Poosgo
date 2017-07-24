Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/naveen/Downloads/Archive/node_modules/react-navigation/src/navigators/createNavigator.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Navigator: {
    displayName: 'Navigator',
    isInFunction: true
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/home/naveen/Downloads/Archive/node_modules/react-navigation/src/navigators/createNavigator.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var createNavigator = function createNavigator(router, routeConfigs, navigatorConfig, navigatorType) {
  return function (View) {
    var _class, _temp;

    var Navigator = _wrapComponent('Navigator')((_temp = _class = function (_React$Component) {
      _inherits(Navigator, _React$Component);

      function Navigator() {
        _classCallCheck(this, Navigator);

        return _possibleConstructorReturn(this, (Navigator.__proto__ || Object.getPrototypeOf(Navigator)).apply(this, arguments));
      }

      _createClass(Navigator, [{
        key: 'render',
        value: function render() {
          return _react3.default.createElement(View, _extends({}, this.props, { router: router, __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }));
        }
      }]);

      return Navigator;
    }(_react3.default.Component), _class.router = router, _class.routeConfigs = routeConfigs, _class.navigatorConfig = navigatorConfig, _class.navigatorType = navigatorType, _temp));

    return Navigator;
  };
};

exports.default = createNavigator;