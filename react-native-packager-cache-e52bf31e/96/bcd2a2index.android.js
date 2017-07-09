var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Starter = require('app/containers/Starter');

var _Starter2 = _interopRequireDefault(_Starter);

var _Routes = require('app/Routes');

var _Routes2 = _interopRequireDefault(_Routes);

var _Test = require('./Test');

var _Test2 = _interopRequireDefault(_Test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactNative.AppRegistry.registerComponent('Goopso', function () {
  return _Routes2.default;
});