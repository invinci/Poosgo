Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _LoginReducer = require('app/containers/Login/LoginReducer');

var _LoginReducer2 = babelHelpers.interopRequireDefault(_LoginReducer);

var _SignupReducer = require('app/containers/Signup/SignupReducer');

var _SignupReducer2 = babelHelpers.interopRequireDefault(_SignupReducer);

var _ForgotReducer = require('app/containers/ForgotPassword/ForgotReducer');

var _ForgotReducer2 = babelHelpers.interopRequireDefault(_ForgotReducer);

var reducers = (0, _redux.combineReducers)({
  Login: _LoginReducer2.default,
  Signup: _SignupReducer2.default,
  Forgot: _ForgotReducer2.default

});
exports.default = reducers;