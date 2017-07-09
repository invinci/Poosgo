Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/home/naveen/Downloads/Archive/node_modules/react-native-datepicker/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  DatePicker: {
    displayName: 'DatePicker'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/home/naveen/Downloads/Archive/node_modules/react-native-datepicker/index.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var FORMATS = {
  'date': 'YYYY-MM-DD',
  'datetime': 'YYYY-MM-DD HH:mm',
  'time': 'HH:mm'
};

var SUPPORTED_ORIENTATIONS = ['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right'];

var DatePicker = _wrapComponent('DatePicker')(function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    _this.state = {
      date: _this.getDate(),
      modalVisible: false,
      animatedHeight: new _reactNative.Animated.Value(0),
      allowPointerEvents: true
    };

    _this.getDate = _this.getDate.bind(_this);
    _this.getDateStr = _this.getDateStr.bind(_this);
    _this.datePicked = _this.datePicked.bind(_this);
    _this.onPressDate = _this.onPressDate.bind(_this);
    _this.onPressCancel = _this.onPressCancel.bind(_this);
    _this.onPressConfirm = _this.onPressConfirm.bind(_this);
    _this.onDateChange = _this.onDateChange.bind(_this);
    _this.onPressMask = _this.onPressMask.bind(_this);
    _this.onDatePicked = _this.onDatePicked.bind(_this);
    _this.onTimePicked = _this.onTimePicked.bind(_this);
    _this.onDatetimePicked = _this.onDatetimePicked.bind(_this);
    _this.onDatetimeTimePicked = _this.onDatetimeTimePicked.bind(_this);
    _this.setModalVisible = _this.setModalVisible.bind(_this);
    return _this;
  }

  _createClass(DatePicker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.ignoredYellowBox = ['Warning: Failed propType'];
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.date !== this.props.date) {
        this.setState({ date: this.getDate(nextProps.date) });
      }
    }
  }, {
    key: 'setModalVisible',
    value: function setModalVisible(visible) {
      var _this2 = this;

      var _props = this.props,
          height = _props.height,
          duration = _props.duration;

      if (visible) {
        this.setState({ modalVisible: visible });
        return _reactNative.Animated.timing(this.state.animatedHeight, {
          toValue: height,
          duration: duration
        }).start();
      } else {
        return _reactNative.Animated.timing(this.state.animatedHeight, {
          toValue: 0,
          duration: duration
        }).start(function () {
          _this2.setState({ modalVisible: visible });
        });
      }
    }
  }, {
    key: 'onStartShouldSetResponder',
    value: function onStartShouldSetResponder(e) {
      return true;
    }
  }, {
    key: 'onMoveShouldSetResponder',
    value: function onMoveShouldSetResponder(e) {
      return true;
    }
  }, {
    key: 'onPressMask',
    value: function onPressMask() {
      if (typeof this.props.onPressMask === 'function') {
        this.props.onPressMask();
      } else {
        this.onPressCancel();
      }
    }
  }, {
    key: 'onPressCancel',
    value: function onPressCancel() {
      this.setModalVisible(false);

      if (typeof this.props.onCloseModal === 'function') {
        this.props.onCloseModal();
      }
    }
  }, {
    key: 'onPressConfirm',
    value: function onPressConfirm() {
      this.datePicked();
      this.setModalVisible(false);

      if (typeof this.props.onCloseModal === 'function') {
        this.props.onCloseModal();
      }
    }
  }, {
    key: 'getDate',
    value: function getDate() {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.date;
      var _props2 = this.props,
          mode = _props2.mode,
          minDate = _props2.minDate,
          maxDate = _props2.maxDate,
          _props2$format = _props2.format,
          format = _props2$format === undefined ? FORMATS[mode] : _props2$format;

      if (!date) {
        var now = new Date();
        if (minDate) {
          var _minDate = this.getDate(minDate);

          if (now < _minDate) {
            return _minDate;
          }
        }

        if (maxDate) {
          var _maxDate = this.getDate(maxDate);

          if (now > _maxDate) {
            return _maxDate;
          }
        }

        return now;
      }

      if (date instanceof Date) {
        return date;
      }

      return (0, _moment2.default)(date, format).toDate();
    }
  }, {
    key: 'getDateStr',
    value: function getDateStr() {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.date;
      var _props3 = this.props,
          mode = _props3.mode,
          _props3$format = _props3.format,
          format = _props3$format === undefined ? FORMATS[mode] : _props3$format;


      if (date instanceof Date) {
        return (0, _moment2.default)(date).format(format);
      } else {
        return (0, _moment2.default)(this.getDate(date)).format(format);
      }
    }
  }, {
    key: 'datePicked',
    value: function datePicked() {
      if (typeof this.props.onDateChange === 'function') {
        this.props.onDateChange(this.getDateStr(this.state.date), this.state.date);
      }
    }
  }, {
    key: 'getTitleElement',
    value: function getTitleElement() {
      var _props4 = this.props,
          date = _props4.date,
          placeholder = _props4.placeholder,
          customStyles = _props4.customStyles;


      if (!date && placeholder) {
        return _react3.default.createElement(
          _reactNative.Text,
          { style: [_style2.default.placeholderText, customStyles.placeholderText], __source: {
              fileName: _jsxFileName,
              lineNumber: 178
            }
          },
          placeholder
        );
      }
      return _react3.default.createElement(
        _reactNative.Text,
        { style: [_style2.default.dateText, customStyles.dateText], __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          }
        },
        this.getDateStr()
      );
    }
  }, {
    key: 'onDateChange',
    value: function onDateChange(date) {
      var _this3 = this;

      this.setState({
        allowPointerEvents: false,
        date: date
      });
      var timeoutId = setTimeout(function () {
        _this3.setState({
          allowPointerEvents: true
        });
        clearTimeout(timeoutId);
      }, 200);
    }
  }, {
    key: 'onDatePicked',
    value: function onDatePicked(_ref) {
      var action = _ref.action,
          year = _ref.year,
          month = _ref.month,
          day = _ref.day;

      if (action !== _reactNative.DatePickerAndroid.dismissedAction) {
        this.setState({
          date: new Date(year, month, day)
        });
        this.datePicked();
      } else {
        this.onPressCancel();
      }
    }
  }, {
    key: 'onTimePicked',
    value: function onTimePicked(_ref2) {
      var action = _ref2.action,
          hour = _ref2.hour,
          minute = _ref2.minute;

      if (action !== _reactNative.DatePickerAndroid.dismissedAction) {
        this.setState({
          date: (0, _moment2.default)().hour(hour).minute(minute).toDate()
        });
        this.datePicked();
      } else {
        this.onPressCancel();
      }
    }
  }, {
    key: 'onDatetimePicked',
    value: function onDatetimePicked(_ref3) {
      var action = _ref3.action,
          year = _ref3.year,
          month = _ref3.month,
          day = _ref3.day;
      var _props5 = this.props,
          mode = _props5.mode,
          androidMode = _props5.androidMode,
          _props5$format = _props5.format,
          format = _props5$format === undefined ? FORMATS[mode] : _props5$format,
          _props5$is24Hour = _props5.is24Hour,
          is24Hour = _props5$is24Hour === undefined ? !format.match(/h|a/) : _props5$is24Hour;


      if (action !== _reactNative.DatePickerAndroid.dismissedAction) {
        var timeMoment = (0, _moment2.default)(this.state.date);

        _reactNative.TimePickerAndroid.open({
          hour: timeMoment.hour(),
          minute: timeMoment.minutes(),
          is24Hour: is24Hour,
          mode: androidMode
        }).then(this.onDatetimeTimePicked.bind(this, year, month, day));
      } else {
        this.onPressCancel();
      }
    }
  }, {
    key: 'onDatetimeTimePicked',
    value: function onDatetimeTimePicked(year, month, day, _ref4) {
      var action = _ref4.action,
          hour = _ref4.hour,
          minute = _ref4.minute;

      if (action !== _reactNative.DatePickerAndroid.dismissedAction) {
        this.setState({
          date: new Date(year, month, day, hour, minute)
        });
        this.datePicked();
      } else {
        this.onPressCancel();
      }
    }
  }, {
    key: 'onPressDate',
    value: function onPressDate() {
      if (this.props.disabled) {
        return true;
      }

      _reactNative.Keyboard.dismiss();

      this.setState({
        date: this.getDate()
      });

      if (_reactNative.Platform.OS === 'ios') {
        this.setModalVisible(true);
      } else {
        var _props6 = this.props,
            mode = _props6.mode,
            androidMode = _props6.androidMode,
            _props6$format = _props6.format,
            format = _props6$format === undefined ? FORMATS[mode] : _props6$format,
            minDate = _props6.minDate,
            maxDate = _props6.maxDate,
            _props6$is24Hour = _props6.is24Hour,
            is24Hour = _props6$is24Hour === undefined ? !format.match(/h|a/) : _props6$is24Hour;

        if (mode === 'date') {
          _reactNative.DatePickerAndroid.open({
            date: this.state.date,
            minDate: minDate && this.getDate(minDate),
            maxDate: maxDate && this.getDate(maxDate),
            mode: androidMode
          }).then(this.onDatePicked);
        } else if (mode === 'time') {

          var timeMoment = (0, _moment2.default)(this.state.date);

          _reactNative.TimePickerAndroid.open({
            hour: timeMoment.hour(),
            minute: timeMoment.minutes(),
            is24Hour: is24Hour
          }).then(this.onTimePicked);
        } else if (mode === 'datetime') {

          _reactNative.DatePickerAndroid.open({
            date: this.state.date,
            minDate: minDate && this.getDate(minDate),
            maxDate: maxDate && this.getDate(maxDate),
            mode: androidMode
          }).then(this.onDatetimePicked);
        }
      }

      if (typeof this.props.onOpenModal === 'function') {
        this.props.onOpenModal();
      }
    }
  }, {
    key: '_renderIcon',
    value: function _renderIcon() {
      var _props7 = this.props,
          showIcon = _props7.showIcon,
          iconSource = _props7.iconSource,
          iconComponent = _props7.iconComponent,
          customStyles = _props7.customStyles;


      if (showIcon) {
        if (!!iconComponent) {
          return iconComponent;
        }
        return _react3.default.createElement(_reactNative.Image, {
          style: [_style2.default.dateIcon, customStyles.dateIcon],
          source: iconSource,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 312
          }
        });
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props8 = this.props,
          mode = _props8.mode,
          style = _props8.style,
          customStyles = _props8.customStyles,
          disabled = _props8.disabled,
          minDate = _props8.minDate,
          maxDate = _props8.maxDate,
          minuteInterval = _props8.minuteInterval,
          timeZoneOffsetInMinutes = _props8.timeZoneOffsetInMinutes,
          cancelBtnText = _props8.cancelBtnText,
          confirmBtnText = _props8.confirmBtnText,
          TouchableComponent = _props8.TouchableComponent,
          testID = _props8.testID,
          cancelBtnTestID = _props8.cancelBtnTestID,
          confirmBtnTestID = _props8.confirmBtnTestID;


      var dateInputStyle = [_style2.default.dateInput, customStyles.dateInput, disabled && _style2.default.disabled, disabled && customStyles.disabled];

      return _react3.default.createElement(
        TouchableComponent,
        {
          style: [_style2.default.dateTouch, style],
          underlayColor: 'transparent',
          onPress: this.onPressDate,
          testID: testID,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 347
          }
        },
        _react3.default.createElement(
          _reactNative.View,
          { style: [_style2.default.dateTouchBody, customStyles.dateTouchBody], __source: {
              fileName: _jsxFileName,
              lineNumber: 353
            }
          },
          !this.props.hideText ? _react3.default.createElement(
            _reactNative.View,
            { style: dateInputStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 356
              }
            },
            this.getTitleElement()
          ) : _react3.default.createElement(_reactNative.View, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 360
            }
          }),
          this._renderIcon(),
          _reactNative.Platform.OS === 'ios' && _react3.default.createElement(
            _reactNative.Modal,
            {
              transparent: true,
              animationType: 'none',
              visible: this.state.modalVisible,
              supportedOrientations: SUPPORTED_ORIENTATIONS,
              onRequestClose: function onRequestClose() {
                _this4.setModalVisible(false);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 363
              }
            },
            _react3.default.createElement(
              _reactNative.View,
              {
                style: { flex: 1 },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 370
                }
              },
              _react3.default.createElement(
                TouchableComponent,
                {
                  style: _style2.default.datePickerMask,
                  activeOpacity: 1,
                  underlayColor: '#00000077',
                  onPress: this.onPressMask,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 373
                  }
                },
                _react3.default.createElement(
                  TouchableComponent,
                  {
                    underlayColor: '#fff',
                    style: { flex: 1 },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 379
                    }
                  },
                  _react3.default.createElement(
                    _reactNative.Animated.View,
                    {
                      style: [_style2.default.datePickerCon, { height: this.state.animatedHeight }, customStyles.datePickerCon],
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 383
                      }
                    },
                    _react3.default.createElement(
                      _reactNative.View,
                      { pointerEvents: this.state.allowPointerEvents ? 'auto' : 'none', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 386
                        }
                      },
                      _react3.default.createElement(_reactNative.DatePickerIOS, {
                        date: this.state.date,
                        mode: mode,
                        minimumDate: minDate && this.getDate(minDate),
                        maximumDate: maxDate && this.getDate(maxDate),
                        onDateChange: this.onDateChange,
                        minuteInterval: minuteInterval,
                        timeZoneOffsetInMinutes: timeZoneOffsetInMinutes,
                        style: [_style2.default.datePicker, customStyles.datePicker],
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 387
                        }
                      })
                    ),
                    _react3.default.createElement(
                      TouchableComponent,
                      {
                        underlayColor: 'transparent',
                        onPress: this.onPressCancel,
                        style: [_style2.default.btnText, _style2.default.btnCancel, customStyles.btnCancel],
                        testID: cancelBtnTestID,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 398
                        }
                      },
                      _react3.default.createElement(
                        _reactNative.Text,
                        {
                          style: [_style2.default.btnTextText, _style2.default.btnTextCancel, customStyles.btnTextCancel],
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 404
                          }
                        },
                        cancelBtnText
                      )
                    ),
                    _react3.default.createElement(
                      TouchableComponent,
                      {
                        underlayColor: 'transparent',
                        onPress: this.onPressConfirm,
                        style: [_style2.default.btnText, _style2.default.btnConfirm, customStyles.btnConfirm],
                        testID: confirmBtnTestID,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 410
                        }
                      },
                      _react3.default.createElement(
                        _reactNative.Text,
                        { style: [_style2.default.btnTextText, customStyles.btnTextConfirm], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 416
                          }
                        },
                        confirmBtnText
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return DatePicker;
}(_react2.Component));

DatePicker.defaultProps = {
  mode: 'date',
  androidMode: 'default',
  date: '',

  height: 259,

  duration: 300,
  confirmBtnText: '确定',
  cancelBtnText: '取消',
  iconSource: require('./date_icon.png'),
  customStyles: {},

  showIcon: true,
  disabled: false,
  hideText: false,
  placeholder: '',
  TouchableComponent: _reactNative.TouchableHighlight,
  modalOnResponderTerminationRequest: function modalOnResponderTerminationRequest(e) {
    return true;
  }
};

DatePicker.propTypes = {
  mode: _propTypes2.default.oneOf(['date', 'datetime', 'time']),
  androidMode: _propTypes2.default.oneOf(['calendar', 'spinner', 'default']),
  date: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.instanceOf(Date)]),
  format: _propTypes2.default.string,
  minDate: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.instanceOf(Date)]),
  maxDate: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.instanceOf(Date)]),
  height: _propTypes2.default.number,
  duration: _propTypes2.default.number,
  confirmBtnText: _propTypes2.default.string,
  cancelBtnText: _propTypes2.default.string,
  iconSource: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object]),
  iconComponent: _propTypes2.default.element,
  customStyles: _propTypes2.default.object,
  showIcon: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  onDateChange: _propTypes2.default.func,
  onOpenModal: _propTypes2.default.func,
  onCloseModal: _propTypes2.default.func,
  onPressMask: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  modalOnResponderTerminationRequest: _propTypes2.default.func,
  is24Hour: _propTypes2.default.bool
};

exports.default = DatePicker;