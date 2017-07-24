Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignupChecking = exports.Signupfail = exports.SignupUpdate = exports.OTP_BACK = exports.MOBILE_ALREDAY = exports.EMAIL_ALREDAY = exports.SIGNUP_FAIL = exports.SIGNUP_SUCCESSFULL = exports.SIGNUP_CHECK = exports.SIGNUP_UPDATE = undefined;

var _api = require('app/lib/api');

var _api2 = babelHelpers.interopRequireDefault(_api);

var _url = require('app/lib/url');

var _url2 = babelHelpers.interopRequireDefault(_url);

var SIGNUP_UPDATE = exports.SIGNUP_UPDATE = 'SIGNUP_UPDATE';
var SIGNUP_CHECK = exports.SIGNUP_CHECK = 'SIGNUP_CHECK';
var SIGNUP_SUCCESSFULL = exports.SIGNUP_SUCCESSFULL = 'SIGNUP_SUCCESSFULL';
var SIGNUP_FAIL = exports.SIGNUP_FAIL = 'SIGNUP_FAIL';
var EMAIL_ALREDAY = exports.EMAIL_ALREDAY = 'EMAIL_ALREDAY';
var MOBILE_ALREDAY = exports.MOBILE_ALREDAY = 'MOBILE_ALREDAY';
var OTP_BACK = exports.OTP_BACK = 'OTP_BACK';
var SignupUpdate = exports.SignupUpdate = function SignupUpdate(_ref) {
  var prop = _ref.prop,
      value = _ref.value;

  return {
    type: SIGNUP_UPDATE,
    payload: { prop: prop, value: value }
  };
};
var Signupfail = exports.Signupfail = function Signupfail() {
  return {
    type: OTP_BACK
  };
};

var SignupChecking = exports.SignupChecking = function SignupChecking(_ref2) {
  var name = _ref2.name,
      email = _ref2.email,
      mobile = _ref2.mobile,
      password = _ref2.password,
      navigation = _ref2.navigation;
  return function (dispatch) {

    _api2.default.makeRequest('POST', _url2.default.USER_REGISTER, {}, { name: name, email: email, mobile: mobile, password: password }).then(function (response) {
      return response.json();
    }).then(function (responseJson) {
      console.log(responseJson, "signup");
      if (responseJson.error) {

        if (responseJson.msg === 'Mobile number already exists') {
          alert('Mobile Number Already Exist');
          dispatch({ type: MOBILE_ALREDAY });
        } else {
          alert('Email Already Exist');
          dispatch({ type: EMAIL_ALREDAY });
        }
      } else {
        if (responseJson.token) {
          dispatch({ type: SIGNUP_SUCCESSFULL, payload: responseJson });
          alert('Success! OTP send you mobile number');
          navigation.navigate('OtpScreen');
        }
      }
    }).catch(function (error) {
      dispatch({ type: SIGNUP_FAIL });
      alert('Sign Up Failed');
    });
  };
};