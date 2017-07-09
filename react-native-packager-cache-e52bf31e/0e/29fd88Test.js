Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/home/naveen/Downloads/Archive/Test.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNativeDatepicker = require('react-native-datepicker');

var _reactNativeDatepicker2 = _interopRequireDefault(_reactNativeDatepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Test: {
    displayName: 'Test'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/home/naveen/Downloads/Archive/Test.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var Test = _wrapComponent('Test')(function (_Component) {
  _inherits(Test, _Component);

  function Test(props) {
    _classCallCheck(this, Test);

    var _this = _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));

    _this.state = { date: "2016-05-15" };
    return _this;
  }

  _createClass(Test, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react3.default.createElement(_reactNativeDatepicker2.default, {
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
}(_react2.Component));

exports.default = Test;