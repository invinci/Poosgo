Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SignupActions = require('./SignupActions');

var INITIAL_STATE = { Fname: '', Lname: '', mobile: '', dob: '2016-05-15', username: '', email: '', password: '', loading: false, sucecsss: false, data: {} };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _SignupActions.SIGNUP_UPDATE:
      return babelHelpers.extends({}, state, babelHelpers.defineProperty({}, action.payload.prop, action.payload.value));
    case _SignupActions.SIGNUP_CHECK:
      return babelHelpers.extends({}, state, { loading: true });
    case _SignupActions.SIGNUP_SUCCESSFULL:
      return babelHelpers.extends({}, INITIAL_STATE, { loading: false, sucecsss: true, data: action.payload });
    case _SignupActions.SIGNUP_FAIL:
      return INITIAL_STATE;
    case _SignupActions.OTP_BACK:
      return state;
    default:
      return state;
  }
};