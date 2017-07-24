Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ForgotActions = require('./ForgotActions');

var INITIAL_STATE = { email: '', loading: false, success: false };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _ForgotActions.FORGOT_UPDATE:
      return babelHelpers.extends({}, state, babelHelpers.defineProperty({}, action.payload.prop, action.payload.value));
    case _ForgotActions.FORGOT_CHECK:
      return babelHelpers.extends({}, state, { loading: true });
    case _ForgotActions.FORGOT_SUCCESSFULL:
      return babelHelpers.extends({}, INITIAL_STATE, { loading: false, success: true });
    case _ForgotActions.FORGOT_FAIL:
      return INITIAL_STATE;
    default:
      return state;
  }
};