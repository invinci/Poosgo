Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/home/naveen/Desktop/Ravi/Archive (1)/src/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _configureStore = require('./store/configureStore');

var _configureStore2 = babelHelpers.interopRequireDefault(_configureStore);

var _reactRedux = require('react-redux');

var _Routes = require('./Routes');

var _Routes2 = babelHelpers.interopRequireDefault(_Routes);

var store = (0, _configureStore2.default)();

var App = function App() {
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store, __source: {
                fileName: _jsxFileName,
                lineNumber: 14
            }
        },
        _react2.default.createElement(_Routes2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 15
            }
        })
    );
};

exports.default = App;