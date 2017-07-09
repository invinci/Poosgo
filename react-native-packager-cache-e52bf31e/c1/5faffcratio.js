Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPercent = exports.getHeightPercent = exports.getWidthPercent = undefined;

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _React$Dimensions$get = _reactNative2.default.Dimensions.get('window'),
    height = _React$Dimensions$get.height,
    width = _React$Dimensions$get.width;

var ANDROID_MINUS_HEIGHT = 24;
var getHeight = function getHeight() {
  return _reactNative2.default.Platform.OS === 'android' ? height - ANDROID_MINUS_HEIGHT : height;
};
var getWidthPercent = exports.getWidthPercent = function getWidthPercent(percentage) {
  return width * percentage / 100;
};
var getHeightPercent = exports.getHeightPercent = function getHeightPercent(percentage) {
  return getHeight() * percentage / 100;
};
var getPercent = exports.getPercent = function getPercent(percentage) {
  return (getHeight() + width) / 2 * percentage / 100;
};