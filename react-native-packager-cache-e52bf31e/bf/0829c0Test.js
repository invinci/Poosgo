Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Downloads/Archive/Test.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNativeDatepicker = require('react-native-datepicker');

var _reactNativeDatepicker2 = babelHelpers.interopRequireDefault(_reactNativeDatepicker);

var Test = function (_Component) {
  babelHelpers.inherits(Test, _Component);

  function Test(props) {
    babelHelpers.classCallCheck(this, Test);

    var _this = babelHelpers.possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));

    _this.state = { date: "2016-05-15" };
    return _this;
  }

  babelHelpers.createClass(Test, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_reactNativeDatepicker2.default, {
        style: { width: 200 },
        date: this.state.date,
        mode: 'date',
        placeholder: 'select date',
        format: 'YYYY-MM-DD',
        minDate: '2016-05-01',
        maxDate: '2016-06-01',
        confirmBtnText: 'Confirm',
        cancelBtnText: 'Cancel',
        customStyles: {

          dateInput: {
            marginLeft: 36,
            borderWidth: 0,
            borderBottomWidth: 1
          }
        },
        onDateChange: function onDateChange(date) {
          _this2.setState({ date: date });
        },
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