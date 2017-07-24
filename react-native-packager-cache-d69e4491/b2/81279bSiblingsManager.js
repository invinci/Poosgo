Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _AppRegistryInjection = require('./AppRegistryInjection');

var _AppRegistryInjection2 = babelHelpers.interopRequireDefault(_AppRegistryInjection);

var styles = _reactNative.StyleSheet.create({
    offStream: {
        position: 'absolute'
    }
});
var uid = 0;

var _class = function () {
    function _class(element, callback) {
        babelHelpers.classCallCheck(this, _class);
        this._id = null;

        Object.defineProperty(this, '_id', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: uid++
        });

        this.update(element, callback);
    }

    babelHelpers.createClass(_class, [{
        key: '_offStreamElement',
        value: function _offStreamElement(element) {
            return (0, _react.cloneElement)(element, {
                style: [element.props.style, styles.offStream]
            });
        }
    }, {
        key: 'update',
        value: function update(element, callback) {
            _AppRegistryInjection2.default.emit('siblings.update', this._id, this._offStreamElement(element), callback);
        }
    }, {
        key: 'destroy',
        value: function destroy(callback) {
            _AppRegistryInjection2.default.emit('siblings.update', this._id, null, callback);
        }
    }]);
    return _class;
}();

exports.default = _class;