Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LoginAction = require('./LoginAction');

var _constants = require('redux-persist/constants');

var INITIAL_STATE = { username: '', password: '', loading: false, auth: false, user: {} };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _constants.REHYDRATE:
      return state;
    case _LoginAction.LOGIN_UPDATE:
      return babelHelpers.extends({}, state, babelHelpers.defineProperty({}, action.payload.prop, action.payload.value));
    case _LoginAction.LOGIN_CHECK:
      alert();
      return babelHelpers.extends({}, state, { loading: true });
    case _LoginAction.LOGIN_SUCCESSFULL:
      alert();
      return babelHelpers.extends({}, INITIAL_STATE, { loading: false, auth: true, user: action.payload });
    case _LoginAction.LOGIN_FAIL:
    case _LoginAction.LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};