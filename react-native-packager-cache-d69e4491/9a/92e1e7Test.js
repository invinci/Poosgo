Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = "/home/naveen/Desktop/Ravi/Archive (1)/Test.js";

var _react = require("react");

var _react2 = babelHelpers.interopRequireDefault(_react);

var Test = function (_Component) {
  babelHelpers.inherits(Test, _Component);

  function Test(props) {
    babelHelpers.classCallCheck(this, Test);

    var _this = babelHelpers.possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));

    _this.state = { date: "2016-05-15" };
    return _this;
  }

  babelHelpers.createClass(Test, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(Viw, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      });
    }
  }]);
  return Test;
}(_react.Component);

exports.default = Test;