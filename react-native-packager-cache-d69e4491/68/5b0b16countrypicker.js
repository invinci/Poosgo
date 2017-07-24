

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/node_modules/react-native-country-code-telephone-input/countrypicker.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _data = require('./data');

var _data2 = babelHelpers.interopRequireDefault(_data);

var styles = _reactNative.StyleSheet.create({
    containerCol: {
        flexDirection: 'column',
        marginVertical: 8,
        marginHorizontal: 8
    },

    containerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    viewBottomBorder: {
        marginHorizontal: 8,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },

    TextCountryName: {
        fontSize: 20,
        color: '#5890FF',
        marginVertical: 8,
        marginHorizontal: 8
    },

    searchBar: {
        padding: 3,
        paddingLeft: 8,
        height: 30,
        marginVertical: 8,
        marginHorizontal: 8,
        fontSize: 20

    }
});

var CountryPicker = function (_Component) {
    babelHelpers.inherits(CountryPicker, _Component);

    function CountryPicker(props) {
        babelHelpers.classCallCheck(this, CountryPicker);

        var _this = babelHelpers.possibleConstructorReturn(this, (CountryPicker.__proto__ || Object.getPrototypeOf(CountryPicker)).call(this, props));

        _this.openModal = _this.openModal.bind(_this);

        _this.state = {
            modalVisible: false,
            search: "",
            rawCountryItem: {}
        };
        return _this;
    }

    babelHelpers.createClass(CountryPicker, [{
        key: 'notifyChange',
        value: function notifyChange() {
            this.props.onChange({ name: this.state.rawCountryItem.name,
                cca2: this.state.rawCountryItem.code,
                callingCode: this.state.rawCountryItem.dial_code.replace(/\D/g, '') });
        }
    }, {
        key: 'onSelectCountry',
        value: function onSelectCountry(rawCountryItem) {
            this.setState({ modalVisible: false, rawCountryItem: rawCountryItem }, this.notifyChange.bind(this));
        }
    }, {
        key: 'openModal',
        value: function openModal() {
            this.setState({ modalVisible: true, search: "" });
        }
    }, {
        key: 'doSearch',
        value: function doSearch(text) {
            this.setState({ search: text });
            this.scrollView.scrollTo({ x: 0, y: 0, animated: true });
        }
    }, {
        key: 'renderCountry',
        value: function renderCountry(rawCountryItem) {
            var _this2 = this;

            var countryItem = _react2.default.createElement(
                _reactNative.TouchableOpacity,
                {
                    key: rawCountryItem.code,
                    onPress: function onPress() {
                        return _this2.onSelectCountry(rawCountryItem);
                    }, s: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 97
                    }
                },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: [styles.containerRow, styles.viewBottomBorder, { height: 50, justifyContent: 'space-between' }], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 101
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.TextCountryName, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 102
                            }
                        },
                        ' ',
                        rawCountryItem.name,
                        ' '
                    ),
                    _react2.default.createElement(
                        _reactNative.Text,
                        { style: styles.TextCountryName, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 103
                            }
                        },
                        ' ',
                        rawCountryItem.dial_code,
                        ' '
                    )
                )
            );

            return countryItem;
        }
    }, {
        key: 'renderScrollView',
        value: function renderScrollView() {
            var _this3 = this;

            var createItem = function createItem(rawCountryItem) {
                var search = _this3.state.search;
                if (search && search.length && rawCountryItem.name.toLowerCase().indexOf(search.trim().toLowerCase()) === -1) {
                    return;
                }

                return _this3.renderCountry(rawCountryItem);
            };

            return _react2.default.createElement(
                _reactNative.View,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 122
                    }
                },
                _react2.default.createElement(_reactNative.TextInput, {
                    style: styles.searchBar,
                    placeholder: 'Type a country name...',
                    onChangeText: this.doSearch.bind(this),
                    value: this.state.search,
                    clearButtonMode: 'while-editing',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 123
                    }
                }),
                _react2.default.createElement(
                    _reactNative.ScrollView,
                    { ref: function ref(scrollView) {
                            return _this3.scrollView = scrollView;
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 131
                        }
                    },
                    _data2.default.map(createItem)
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                _reactNative.Modal,
                {
                    visible: this.state.modalVisible,
                    onRequestClose: function onRequestClose() {
                        return _this4.setState({ modalVisible: false });
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 140
                    }
                },
                _react2.default.createElement(
                    _reactNative.View,
                    { style: styles.modalContainer, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 144
                        }
                    },
                    _react2.default.createElement(
                        _reactNative.TouchableOpacity,
                        { onPress: function onPress() {
                                return _this4.setState({ modalVisible: false });
                            }, style: { marginTop: 30, marginLeft: 20 }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 145
                            }
                        },
                        _react2.default.createElement(_reactNative.Image, {
                            style: { width: 20, height: 20 },
                            source: require('./back.png'), __source: {
                                fileName: _jsxFileName,
                                lineNumber: 146
                            }
                        })
                    ),
                    this.renderScrollView()
                )
            );
        }
    }]);
    return CountryPicker;
}(_react.Component);

CountryPicker.propTypes = {
    onChange: _react2.default.PropTypes.func.isRequired
};
exports.default = CountryPicker;