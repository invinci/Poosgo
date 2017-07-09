Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllCountries = undefined;
var _jsxFileName = '/home/naveen/Downloads/Archive/node_modules/react-native-country-picker-modal/src/CountryPicker.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _fuse = require('fuse.js');

var _fuse2 = babelHelpers.interopRequireDefault(_fuse);

var _cca = require('../data/cca2');

var _cca2 = babelHelpers.interopRequireDefault(_cca);

var _ratio = require('./ratio');

var _CloseButton = require('./CloseButton');

var _CloseButton2 = babelHelpers.interopRequireDefault(_CloseButton);

var _CountryPicker = require('./CountryPicker.style');

var _CountryPicker2 = babelHelpers.interopRequireDefault(_CountryPicker);

var _KeyboardAvoidingView = require('./KeyboardAvoidingView');

var _KeyboardAvoidingView2 = babelHelpers.interopRequireDefault(_KeyboardAvoidingView);

var countries = null;
var Emoji = null;
var styles = {};

var isEmojiable = _reactNative.Platform.OS === 'ios';

if (isEmojiable) {
  countries = require('../data/countries-emoji');
  Emoji = require('react-native-emoji').default;
} else {
  countries = require('../data/countries');

  Emoji = _react2.default.createElement(_reactNative.View, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  });
}

var getAllCountries = exports.getAllCountries = function getAllCountries() {
  return _cca2.default.map(function (cca2) {
    return babelHelpers.extends({}, countries[cca2], { cca2: cca2 });
  });
};

var ds = new _reactNative.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
    return r1 !== r2;
  } });

var CountryPicker = function (_Component) {
  babelHelpers.inherits(CountryPicker, _Component);
  babelHelpers.createClass(CountryPicker, null, [{
    key: 'renderEmojiFlag',
    value: function renderEmojiFlag(cca2, emojiStyle) {
      return _react2.default.createElement(
        _reactNative.Text,
        { style: [styles.emojiFlag, emojiStyle], __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        },
        cca2 !== '' && countries[cca2.toUpperCase()] ? _react2.default.createElement(Emoji, { name: countries[cca2.toUpperCase()].flag, __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }) : null
      );
    }
  }, {
    key: 'renderImageFlag',
    value: function renderImageFlag(cca2, imageStyle) {
      return cca2 !== '' ? _react2.default.createElement(_reactNative.Image, {
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
      return _react2.default.createElement(
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
    babelHelpers.classCallCheck(this, CountryPicker);

    var _this = babelHelpers.possibleConstructorReturn(this, (CountryPicker.__proto__ || Object.getPrototypeOf(CountryPicker)).call(this, props));

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

    var countryList = [].concat(babelHelpers.toConsumableArray(props.countryList)),
        excludeCountries = [].concat(babelHelpers.toConsumableArray(props.excludeCountries));

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
      return [].concat(babelHelpers.toConsumableArray(acc), [{ id: item, name: _this.getCountryName(countries[item]) }]);
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

  babelHelpers.createClass(CountryPicker, [{
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

      this.props.onChange(babelHelpers.extends({
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
        return babelHelpers.extends({}, acc, babelHelpers.defineProperty({}, _this2.getCountryName(countries[val]).slice(0, 1).toUpperCase(), ''));
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

      return _react2.default.createElement(
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

      return _react2.default.createElement(
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
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.letter, __source: {
              fileName: _jsxFileName,
              lineNumber: 273
            }
          },
          _react2.default.createElement(
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
      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.itemCountry, __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          }
        },
        CountryPicker.renderFlag(cca2),
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.itemCountryName, __source: {
              fileName: _jsxFileName,
              lineNumber: 285
            }
          },
          _react2.default.createElement(
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

      return _react2.default.createElement(
        _reactNative.View,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          }
        },
        _react2.default.createElement(
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
          this.props.children ? this.props.children : _react2.default.createElement(
            _reactNative.View,
            { style: styles.touchFlag, __source: {
                fileName: _jsxFileName,
                lineNumber: 305
              }
            },
            CountryPicker.renderFlag(this.props.cca2)
          )
        ),
        _react2.default.createElement(
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
          _react2.default.createElement(
            _reactNative.View,
            { style: styles.modalContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 314
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              { style: styles.header, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 315
                }
              },
              this.props.closeable && _react2.default.createElement(_CloseButton2.default, {
                onPress: function onPress() {
                  return _this6.onClose();
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 318
                }
              }),
              this.props.filterable && _react2.default.createElement(_reactNative.TextInput, {
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
            _react2.default.createElement(
              _KeyboardAvoidingView2.default,
              { behavior: 'padding', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 334
                }
              },
              _react2.default.createElement(
                _reactNative.View,
                { style: styles.contentContainer, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 335
                  }
                },
                _react2.default.createElement(_reactNative.ListView, {
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
                _react2.default.createElement(
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
}(_react.Component);

CountryPicker.propTypes = {
  cca2: _react2.default.PropTypes.string.isRequired,
  translation: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func.isRequired,
  onClose: _react2.default.PropTypes.func,
  closeable: _react2.default.PropTypes.bool,
  filterable: _react2.default.PropTypes.bool,
  children: _react2.default.PropTypes.node,
  countryList: _react2.default.PropTypes.array,
  excludeCountries: _react2.default.PropTypes.array,
  styles: _react2.default.PropTypes.object,
  filterPlaceholder: _react2.default.PropTypes.string,
  autoFocusFilter: _react2.default.PropTypes.bool
};
CountryPicker.defaultProps = {
  translation: 'eng',
  countryList: _cca2.default,
  excludeCountries: [],
  filterPlaceholder: 'Filter',
  autoFocusFilter: true
};
exports.default = CountryPicker;