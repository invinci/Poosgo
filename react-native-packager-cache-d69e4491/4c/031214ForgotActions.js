Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forgotPassword = exports.forgotUpdate = exports.FORGOT_FAIL = exports.FORGOT_SUCCESSFULL = exports.FORGOT_CHECK = exports.FORGOT_UPDATE = undefined;

var _api = require('app/lib/api');

var _api2 = babelHelpers.interopRequireDefault(_api);

var _url = require('app/lib/url');

var _url2 = babelHelpers.interopRequireDefault(_url);

var FORGOT_UPDATE = exports.FORGOT_UPDATE = 'FORGOT_UPDATE';
var FORGOT_CHECK = exports.FORGOT_CHECK = 'FORGOT_CHECK';
var FORGOT_SUCCESSFULL = exports.FORGOT_SUCCESSFULL = 'FORGOT_SUCCESSFULL';
var FORGOT_FAIL = exports.FORGOT_FAIL = 'FORGOT_FAIL';
var forgotUpdate = exports.forgotUpdate = function forgotUpdate(_ref) {
  var prop = _ref.prop,
      value = _ref.value;

  console.log("loo");
  return {
    type: FORGOT_UPDATE,
    payload: { prop: prop, value: value }
  };
};

var forgotPassword = exports.forgotPassword = function forgotPassword(_ref2) {
  var email = _ref2.email;
  return function (dispatch) {

    alert(email);
  };
};