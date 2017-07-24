Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginChecking = exports.socialLoginFail = exports.socialLoginSuccess = exports.logout = exports.loginUpdate = exports.LOG_OUT = exports.LOGIN_FAIL = exports.LOGIN_SUCCESSFULL = exports.LOGIN_CHECK = exports.LOGIN_UPDATE = undefined;

var _api = require('app/lib/api');

var _api2 = babelHelpers.interopRequireDefault(_api);

var _url = require('app/lib/url');

var _url2 = babelHelpers.interopRequireDefault(_url);

var LOGIN_UPDATE = exports.LOGIN_UPDATE = 'LOGIN_UPDATE';
var LOGIN_CHECK = exports.LOGIN_CHECK = 'LOGIN_CHECK';
var LOGIN_SUCCESSFULL = exports.LOGIN_SUCCESSFULL = 'LOGIN_SUCCESSFULL';
var LOGIN_FAIL = exports.LOGIN_FAIL = 'LOGIN_FAIL';
var LOG_OUT = exports.LOG_OUT = 'LOG_OUT';
var loginUpdate = exports.loginUpdate = function loginUpdate(_ref) {
  var prop = _ref.prop,
      value = _ref.value;

  return {
    type: LOGIN_UPDATE,
    payload: { prop: prop, value: value }
  };
};
var logout = exports.logout = function logout() {
  return {
    type: LOG_OUT
  };
};

var socialLoginSuccess = exports.socialLoginSuccess = function socialLoginSuccess() {
  return {
    type: LOGIN_SUCCESSFULL
  };
};

var socialLoginFail = exports.socialLoginFail = function socialLoginFail() {
  return {
    type: LOGIN_FAIL
  };
};
var loginChecking = exports.loginChecking = function loginChecking(user, navigate) {
  return function (dispatch) {
    var OBJECT = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([{
        "username": "ravik",
        "password": "12345"
      }])
    };
    fetch('https://virtserver.swaggerhub.com/kalaiprakash/registerNewUser/0.1/user/loginUser', OBJECT).then(function (res) {
      console.log(res);
      return { type: LOGIN_SUCCESSFULL, payload: res };
    }).catch(function (err) {
      console.log(err);
      return { type: LOGIN_FAIL };
    });
  };
};