Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllCountries = undefined;

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/naveen/Downloads/Archive/node_modules/react-native-country-picker-modal/src/CountryPicker.js',
    _class,
    _temp;

var _reactNative = require('react-native');

var _fuse = require('fuse.js');

var _fuse2 = _interopRequireDefault(_fuse);

var _cca = require('../data/cca2');

var _cca2 = _interopRequireDefault(_cca);

var _ratio = require('./ratio');

var _CloseButton = require('./CloseButton');

var _CloseButton2 = _interopRequireDefault(_CloseButton);

var _CountryPicker = require('./CountryPicker.style');

var _CountryPicker2 = _interopRequireDefault(_CountryPicker);

var _KeyboardAvoidingView = require('./KeyboardAvoidingView');

var _KeyboardAvoidingView2 = _interopRequireDefault(_KeyboardAvoidingView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  CountryPicker: {
    displayName: 'CountryPicker'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/home/naveen/Downloads/Archive/node_modules/react-native-country-picker-modal/src/CountryPicker.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var countries = null;
var Emoji = null;
var styles = {};

var isEmojiable = _reactNative.Platform.OS === 'ios';

if (isEmojiable) {
  countries = require('../data/countries-emoji');
  Emoji = require('react-native-emoji').default;
} else {
  countries = require('../data/countries');

  Emoji = _react3.default.createElement(_reactNative.View, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  });
}

var getAllCountries = exports.getAllCountries = function getAllCountries() {
  return _cca2.default.map(function (cca2) {
    return _extends({}, countries[cca2], { cca2: cca2 });
  });
};

var ds = new _reactNative.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
    return r1 !== r2;
  } });

var CountryPicker = _wrapComponent('CountryPicker')((_temp = _class = function (_Component) {
  _inherits(CountryPicker, _Component);

  _createClass(CountryPicker, null, [{
    key: 'renderEmojiFlag',
    value: function renderEmojiFlag(cca2, emojiStyle) {
      return _react3.default.createElement(
        _reactNative.Text,
        { style: [styles.emojiFlag, emojiStyle], __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        },
        cca2 !== '' && countries[cca2.toUpperCase()] ? _react3.default.createElement(Emoji, { name: countries[cca2.toUpperCase()].flag, __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }) : null
      );
    }
  }, {
    key: 'renderImageFlag',
    value: function renderImageFlag(cca2, imageStyle) {
      return cca2 !== '' ? _react3.default.createElement(_reactNative.Image, {
        style: [styles.imgStyle, imageStyle],
        source: { uri: countries[cca2].flag },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }) : null;
    }
  }, {
    key: 'renderFlag',
    value: function renderFlag(cca2, itemStyle, emojiStyle, imageStyle) {
      return _react3.default.createElement(
        _reactNative.View,
        { style: [styles.itemCountryFlag, itemStyle], __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        },
        isEmojiable ? CountryPicker.renderEmojiFlag(cca2, emojiStyle) : CountryPicker.renderImageFlag(cca2, imageStyle)
      );
    }
  }]);

  function CountryPicker(props) {
    _classCallCheck(this, CountryPicker);

    var _this = _possibleConstructorReturn(this, (CountryPicker.__proto__ || Object.getPrototypeOf(CountryPicker)).call(this, props));

    _this.openModal = _this.openModal.bind(_this);
    _this.itemHeight = (0, _ratio.getHeightPercent)(7);
    _this.listHeight = countries.length * _this.itemHeight;

    _this.handleFilterChange = function (value) {
      var filteredCountries = value === '' ? _this.state.cca2List : _this.fuse.search(value);

      _this._listView.scrollTo({ y: 0 });

      _this.setState({
        filter: value,
        dataSource: ds.cloneWithRows(filteredCountries)
      });
    };

    var countryList = [].concat(_toConsumableArray(props.countryList)),
        excludeCountries = [].concat(_toConsumableArray(props.excludeCountries));

    excludeCountries.map(function (excludeCountry) {
      var index = countryList.indexOf(excludeCountry);

      if (index !== -1) {
        countryList.splice(index, 1);
      }
    });

    countryList = countryList.map(function (c) {
      return [c, _this.getCountryName(countries[c])];
    }).sort(function (a, b) {
      if (a[1] < b[1]) return -1;
      if (a[1] > b[1]) return 1;
      return 0;
    }).map(function (c) {
      return c[0];
    });

    _this.state = {
      modalVisible: false,
      cca2List: countryList,
      dataSource: ds.cloneWithRows(countryList),
      filter: '',
      letters: _this.getLetters(countryList)
    };

    if (_this.props.styles) {
      Object.keys(_CountryPicker2.default).forEach(function (key) {
        styles[key] = _reactNative.StyleSheet.flatten([_CountryPicker2.default[key], _this.props.styles[key]]);
      });
      styles = _reactNative.StyleSheet.create(styles);
    } else {
      styles = _CountryPicker2.default;
    }

    _this.fuse = new _fuse2.default(countryList.reduce(function (acc, item) {
      return [].concat(_toConsumableArray(acc), [{ id: item, name: _this.getCountryName(countries[item]) }]);
    }, []), {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ['name'],
      id: 'id'
    });
    return _this;
  }

  _createClass(CountryPicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.countryList !== this.props.countryList) {
        this.setState({
          cca2List: nextProps.countryList,
          dataSource: ds.cloneWithRows(nextProps.countryList)
        });
      }
    }
  }, {
    key: 'onSelectCountry',
    value: function onSelectCountry(cca2) {
      this.setState({
        modalVisible: false,
        filter: '',
        dataSource: ds.cloneWithRows(this.state.cca2List)
      });

      this.props.onChange(_extends({
        cca2: cca2
      }, countries[cca2], {
        flag: undefined,
        name: this.getCountryName(countries[cca2])
      }));
    }
  }, {
    key: 'onClose',
    value: function onClose() {
      this.setState({
        modalVisible: false,
        filter: '',
        dataSource: ds.cloneWithRows(this.state.cca2List)
      });
      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: 'getCountryName',
    value: function getCountryName(country, optionalTranslation) {
      var translation = optionalTranslation || this.props.translation || 'eng';
      return country.name[translation] || country.name.common;
    }
  }, {
    key: 'setVisibleListHeight',
    value: function setVisibleListHeight(offset) {
      this.visibleListHeight = (0, _ratio.getHeightPercent)(100) - offset;
    }
  }, {
    key: 'getLetters',
    value: function getLetters(list) {
      var _this2 = this;

      return Object.keys(list.reduce(function (acc, val) {
        return _extends({}, acc, _defineProperty({}, _this2.getCountryName(countries[val]).slice(0, 1).toUpperCase(), ''));
      }, {})).sort();
    }
  }, {
    key: 'openModal',
    value: function openModal() {
      this.setState({ modalVisible: true });
    }
  }, {
    key: 'scrollTo',
    value: function scrollTo(letter) {
      var _this3 = this;

      var index = this.state.cca2List.map(function (country) {
        return _this3.getCountryName(countries[country])[0];
      }).indexOf(letter);
      if (index === -1) {
        return;
      }
      var position = index * this.itemHeight;

      if (position + this.visibleListHeight > this.listHeight) {
        position = this.listHeight - this.visibleListHeight;
      }

      this._listView.scrollTo({
        y: position
      });
    }
  }, {
    key: 'renderCountry',
    value: function renderCountry(country, index) {
      var _this4 = this;

      return _react3.default.createElement(
        _reactNative.TouchableOpacity,
        {
          key: index,
          onPress: function onPress() {
            return _this4.onSelectCountry(country);
          },
          activeOpacity: 0.99,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          }
        },
        this.renderCountryDetail(country)
      );
    }
  }, {
    key: 'renderLetters',
    value: function renderLetters(letter, index) {
      var _this5 = this;

      return _react3.default.createElement(
        _reactNative.TouchableOpacity,
        {
          key: index,
          onPress: function onPress() {
            return _this5.scrollTo(letter);
          },
          activeOpacity: 0.6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          }
        },
        _react3.default.createElement(
          _reactNative.View,
          { style: styles.letter, __source: {
              fileName: _jsxFileName,
              lineNumber: 273
            }
          },
          _react3.default.createElement(
            _reactNative.Text,
            { style: styles.letterText, __source: {
                fileName: _jsxFileName,
                lineNumber: 274
              }
            },
            letter
          )
        )
      );
    }
  }, {
    key: 'renderCountryDetail',
    value: function renderCountryDetail(cca2) {
      var country = countries[cca2];
      return _react3.default.createElement(
        _reactNative.View,
        { style: styles.itemCountry, __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          }
        },
        CountryPicker.renderFlag(cca2),
        _react3.default.createElement(
          _reactNative.View,
          { style: styles.itemCountryName, __source: {
              fileName: _jsxFileName,
              lineNumber: 285
            }
          },
          _react3.default.createElement(
            _reactNative.Text,
            { style: styles.countryName, __source: {
                fileName: _jsxFileName,
                lineNumber: 286
              }
            },
            this.getCountryName(country)
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      return _react3.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          }
        },
        _react3.default.createElement(
          _reactNative.TouchableOpacity,
          {
            onPress: function onPress() {
              return _this6.setState({ modalVisible: true });
            },
            activeOpacity: 0.7,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 297
            }
          },
          this.props.children ? this.props.children : _react3.default.createElement(
            _reactNative.View,
            { style: styles.touchFlag, __source: {
                fileName: _jsxFileName,
                lineNumber: 305
              }
            },
            CountryPicker.renderFlag(this.props.cca2)
          )
        ),
        _react3.default.createElement(
          _reactNative.Modal,
          {
            visible: this.state.modalVisible,
            onRequestClose: function onRequestClose() {
              return _this6.setState({ modalVisible: false });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 310
            }
          },
          _react3.default.createElement(
            _reactNative.View,
            { style: styles.modalContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 314
              }
            },
            _react3.default.createElement(
              _reactNative.View,
              { style: styles.header, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 315
                }
              },
              this.props.closeable && _react3.default.createElement(_CloseButton2.default, {
                onPress: function onPress() {
                  return _this6.onClose();
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 318
                }
              }),
              this.props.filterable && _react3.default.createElement(_reactNative.TextInput, {
                autoFocus: this.props.autoFocusFilter,
                autoCorrect: false,
                placeholder: this.props.filterPlaceholder,
                style: [styles.input, !this.props.closeable && styles.inputOnly],
                onChangeText: this.handleFilterChange,
                value: this.state.filter,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 324
                }
              })
            ),
            _react3.default.createElement(
              _KeyboardAvoidingView2.default,
              { behavior: 'padding', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 334
                }
              },
              _react3.default.createElement(
                _reactNative.View,
                { style: styles.contentContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 335
                  }
                },
                _react3.default.createElement(_reactNative.ListView, {
                  keyboardShouldPersistTaps: 'always',
                  enableEmptySections: true,
                  ref: function ref(listView) {
                    return _this6._listView = listView;
                  },
                  dataSource: this.state.dataSource,
                  renderRow: function renderRow(country) {
                    return _this6.renderCountry(country);
                  },
                  initialListSize: 30,
                  pageSize: 15,
                  onLayout: function onLayout(_ref) {
                    var offset = _ref.nativeEvent.layout.y;
                    return _this6.setVisibleListHeight(offset);
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 336
                  }
                }),
                _react3.default.createElement(
                  _reactNative.ScrollView,
                  {
                    contentContainerStyle: styles.letters,
                    keyboardShouldPersistTaps: 'always',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 350
                    }
                  },
                  this.state.filter === '' && this.state.letters.map(function (letter, index) {
                    return _this6.renderLetters(letter, index);
                  })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CountryPicker;
}(_react2.Component), _class.propTypes = {
  cca2: _react3.default.PropTypes.string.isRequired,
  translation: _react3.default.PropTypes.string,
  onChange: _react3.default.PropTypes.func.isRequired,
  onClose: _react3.default.PropTypes.func,
  closeable: _react3.default.PropTypes.bool,
  filterable: _react3.default.PropTypes.bool,
  children: _react3.default.PropTypes.node,
  countryList: _react3.default.PropTypes.array,
  excludeCountries: _react3.default.PropTypes.array,
  styles: _react3.default.PropTypes.object,
  filterPlaceholder: _react3.default.PropTypes.string,
  autoFocusFilter: _react3.default.PropTypes.bool
}, _class.defaultProps = {
  translation: 'eng',
  countryList: _cca2.default,
  excludeCountries: [],
  filterPlaceholder: 'Filter',
  autoFocusFilter: true
}, _temp));

exports.default = CountryPicker;