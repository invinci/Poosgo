

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/home/naveen/Downloads/Archive/node_modules/react-native-country-code-telephone-input/countrypicker.js';

var _reactNative = require('react-native');

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    CountryPicker: {
        displayName: 'CountryPicker'
    }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
    filename: '/home/naveen/Downloads/Archive/node_modules/react-native-country-code-telephone-input/countrypicker.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmrLibIndexJs2(Component, id);
    };
}

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

var CountryPicker = _wrapComponent('CountryPicker')((_temp = _class = function (_Component) {
    _inherits(CountryPicker, _Component);

    function CountryPicker(props) {
        _classCallCheck(this, CountryPicker);

        var _this = _possibleConstructorReturn(this, (CountryPicker.__proto__ || Object.getPrototypeOf(CountryPicker)).call(this, props));

        _this.openModal = _this.openModal.bind(_this);

        _this.state = {
            modalVisible: false,
            search: "",
            rawCountryItem: {}
        };
        return _this;
    }

    _createClass(CountryPicker, [{
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

            var countryItem = _react3.default.createElement(
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
                _react3.default.createElement(
                    _reactNative.View,
                    { style: [styles.containerRow, styles.viewBottomBorder, { height: 50, justifyContent: 'space-between' }], __source: {
                            fileName: _jsxFileName,
                            lineNumber: 101
                        }
                    },
                    _react3.default.createElement(
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
                    _react3.default.createElement(
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

            return _react3.default.createElement(
                _reactNative.View,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 122
                    }
                },
                _react3.default.createElement(_reactNative.TextInput, {
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
                _react3.default.createElement(
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

            return _react3.default.createElement(
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
                _react3.default.createElement(
                    _reactNative.View,
                    { style: styles.modalContainer, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 144
                        }
                    },
                    _react3.default.createElement(
                        _reactNative.TouchableOpacity,
                        { onPress: function onPress() {
                                return _this4.setState({ modalVisible: false });
                            }, style: { marginTop: 30, marginLeft: 20 }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 145
                            }
                        },
                        _react3.default.createElement(_reactNative.Image, {
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
}(_react2.Component), _class.propTypes = {
    onChange: _react3.default.PropTypes.func.isRequired
}, _temp));

exports.default = CountryPicker;