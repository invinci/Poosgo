Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = babelHelpers.interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _combineReducers = require('./combineReducers');

var _combineReducers2 = babelHelpers.interopRequireDefault(_combineReducers);

var _reduxPersist = require('redux-persist');

var _reactNative = require('react-native');

var loggerMiddleware = (0, _reduxLogger.createLogger)();
var middlewares = [_reduxThunk2.default];

if (process.env.NODE_ENV === 'development') {
  var _require = require('redux-logger'),
      logger = _require.logger;

  middlewares.push(loggerMiddleware);
}

function configureStore() {

  var store = (0, _redux.createStore)(_combineReducers2.default, _redux.applyMiddleware.apply(undefined, middlewares), (0, _reduxPersist.autoRehydrate)());
  (0, _reduxPersist.persistStore)(store, { storage: _reactNative.AsyncStorage, whitelist: ['Login'] });

  return store;
}