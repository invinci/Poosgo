Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/naveen/Downloads/Archive/node_modules/react-native-phone-input/lib/countryPicker.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _country = require('./country');

var _country2 = babelHelpers.interopRequireDefault(_country);

var _styles = require('./styles');

var _styles2 = babelHelpers.interopRequireDefault(_styles);

var PickerItem = _reactNative.Picker.Item;

var propTypes = {
  buttonColor: _react.PropTypes.string,
  labels: _react.PropTypes.array,
  confirmText: _react.PropTypes.string,
  cancelText: _react.PropTypes.string,
  itemStyle: _react.PropTypes.object,
  onSubmit: _react.PropTypes.func
};

var CountryPicker = function (_Component) {
  babelHelpers.inherits(CountryPicker, _Component);

  function CountryPicker(props) {
    babelHelpers.classCallCheck(this, CountryPicker);

    var _this = babelHelpers.possibleConstructorReturn(this, (CountryPicker.__proto__ || Object.getPrototypeOf(CountryPicker)).call(this, props));

    _this.state = {
      buttonColor: _this.props.buttonColor || '#007AFF',
      modalVisible: false,
      selectedCountry: _this.props.selectedCountry || _country2.default.getAll()[0]
    };

    _this.onPressCancel = _this.onPressCancel.bind(_this);
    _this.onPressSubmit = _this.onPressSubmit.bind(_this);
    _this.onValueChange = _this.onValueChange.bind(_this);
    return _this;
  }

  babelHelpers.createClass(CountryPicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        selectedCountry: nextProps.selectedCountry
      });
    }
  }, {
    key: 'selectCountry',
    value: function selectCountry(selectedCountry) {
      this.setState({
        selectedCountry: selectedCountry
      });
    }
  }, {
    key: 'onPressCancel',
    value: function onPressCancel() {
      this.setState({
        modalVisible: false
      });
    }
  }, {
    key: 'onPressSubmit',
    value: function onPressSubmit() {
      if (this.props.onSubmit) {
        this.props.onSubmit(this.state.selectedCountry);
      }

      this.setState({
        modalVisible: false
      });
    }
  }, {
    key: 'onValueChange',
    value: function onValueChange(selectedCountry) {
      this.setState({
        selectedCountry: selectedCountry
      });
    }
  }, {
    key: 'show',
    value: function show() {
      this.setState({
        modalVisible: true
      });
    }
  }, {
    key: 'renderItem',
    value: function renderItem(country, index) {
      return _react2.default.createElement(PickerItem, {
        key: country.iso2,
        value: country.iso2,
        label: country.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var buttonColor = this.state.buttonColor;

      var itemStyle = this.props.itemStyle || {};
      return _react2.default.createElement(
        _reactNative.Modal,
        {
          animationType: 'slide',
          transparent: true,
          visible: this.state.modalVisible,
          onRequestClose: function onRequestClose() {
            console.log("Country picker has been closed.");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: _styles2.default.basicContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: [_styles2.default.modalContainer, { backgroundColor: this.props.pickerBackgroundColor || 'white' }], __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              { style: _styles2.default.buttonView, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106
                }
              },
              _react2.default.createElement(
                _reactNative.TouchableOpacity,
                { onPress: this.onPressCancel, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                  }
                },
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: [{ color: buttonColor }, this.props.buttonTextStyle], __source: {
                      fileName: _jsxFileName,
                      lineNumber: 108
                    }
                  },
                  this.props.cancelText || 'Cancel'
                )
              ),
              _react2.default.createElement(
                _reactNative.TouchableOpacity,
                { onPress: this.onPressSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                  }
                },
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: [{ color: buttonColor }, this.props.buttonTextStyle], __source: {
                      fileName: _jsxFileName,
                      lineNumber: 114
                    }
                  },
                  this.props.confirmText || 'Confirm'
                )
              )
            ),
            _react2.default.createElement(
              _reactNative.View,
              { style: _styles2.default.mainBox, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 120
                }
              },
              _react2.default.createElement(
                _reactNative.Picker,
                {
                  ref: 'picker',
                  style: _styles2.default.bottomPicker,
                  selectedValue: this.state.selectedCountry,
                  onValueChange: function onValueChange(country) {
                    return _this2.onValueChange(country);
                  },
                  itemStyle: itemStyle,
                  mode: 'dialog',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                  }
                },
                _country2.default.getAll().map(function (country, index) {
                  return _this2.renderItem(country, index);
                })
              )
            )
          )
        )
      );
    }
  }]);
  return CountryPicker;
}(_react.Component);

exports.default = CountryPicker;


CountryPicker.propTypes = propTypes;