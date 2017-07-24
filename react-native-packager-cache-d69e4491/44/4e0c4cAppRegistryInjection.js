Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/node_modules/react-native-root-siblings/lib/AppRegistryInjection.js';

var _reactNative = require('react-native');

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _staticContainer = require('static-container');

var _staticContainer2 = babelHelpers.interopRequireDefault(_staticContainer);

var _EventEmitter = require('react-native/Libraries/EventEmitter/EventEmitter');

var _EventEmitter2 = babelHelpers.interopRequireDefault(_EventEmitter);

var styles = _reactNative.StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    }
});

var emitter = _reactNative.AppRegistry.rootSiblingsEmitter;

if (!(emitter instanceof _EventEmitter2.default)) {
    emitter = new _EventEmitter2.default();

    var originRegister = _reactNative.AppRegistry.registerComponent;

    _reactNative.AppRegistry.registerComponent = function (appKey, getAppComponent) {
        var siblings = new Map();
        var updates = new Set();

        return originRegister(appKey, function () {
            var _class, _temp;

            var OriginAppComponent = getAppComponent();

            return _temp = _class = function (_Component) {
                babelHelpers.inherits(_class, _Component);

                function _class() {
                    babelHelpers.classCallCheck(this, _class);
                    return babelHelpers.possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
                }

                babelHelpers.createClass(_class, [{
                    key: 'componentWillMount',
                    value: function componentWillMount() {
                        this._update = this._update.bind(this);
                        emitter.addListener('siblings.update', this._update);
                    }
                }, {
                    key: 'componentWillUnmount',
                    value: function componentWillUnmount() {
                        emitter.removeListener('siblings.update', this._update);
                        siblings.clear();
                        updates.clear();
                    }
                }, {
                    key: '_update',
                    value: function _update(id, element, callback) {
                        if (siblings.has(id) && !element) {
                            siblings.delete(id);
                        } else {
                            siblings.set(id, element);
                        }
                        updates.add(id);
                        this.forceUpdate(callback);
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        var elements = [];
                        siblings.forEach(function (element, id) {
                            elements.push(_react2.default.createElement(
                                _staticContainer2.default,
                                {
                                    key: 'root-sibling-' + id,
                                    shouldUpdate: updates.has(id),
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 55
                                    }
                                },
                                element
                            ));
                        });
                        updates.clear();

                        return _react2.default.createElement(
                            _reactNative.View,
                            { style: styles.container, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 66
                                }
                            },
                            _react2.default.createElement(
                                _staticContainer2.default,
                                { shouldUpdate: false, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 67
                                    }
                                },
                                _react2.default.createElement(OriginAppComponent, babelHelpers.extends({}, this.props, {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 68
                                    }
                                }))
                            ),
                            elements
                        );
                    }
                }]);
                return _class;
            }(_react.Component), _class.displayName = 'Root(' + appKey + ')', _temp;
        });
    };

    _reactNative.AppRegistry.rootSiblingsEmitter = emitter;
}

exports.default = emitter;