Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNavigation = require('react-navigation');

var _reactNative = require('react-native');

var _Starter = require('app/containers/Starter');

var _Starter2 = babelHelpers.interopRequireDefault(_Starter);

var _Login = require('app/containers/Login');

var _Login2 = babelHelpers.interopRequireDefault(_Login);

var _EnterEmail = require('app/containers/Signup/EnterEmail');

var _EnterEmail2 = babelHelpers.interopRequireDefault(_EnterEmail);

var _EnterDateOfBirth = require('app/containers/Signup/EnterDateOfBirth');

var _EnterDateOfBirth2 = babelHelpers.interopRequireDefault(_EnterDateOfBirth);

var _EnterUsername = require('app/containers/Signup/EnterUsername');

var _EnterUsername2 = babelHelpers.interopRequireDefault(_EnterUsername);

var _EnterFnameLname = require('app/containers/Signup/EnterFnameLname');

var _EnterFnameLname2 = babelHelpers.interopRequireDefault(_EnterFnameLname);

var _EnterPassword = require('app/containers/Signup/EnterPassword');

var _EnterPassword2 = babelHelpers.interopRequireDefault(_EnterPassword);

var _EnterPhoneNumber = require('app/containers/Signup/EnterPhoneNumber');

var _EnterPhoneNumber2 = babelHelpers.interopRequireDefault(_EnterPhoneNumber);

var _ForgotPassword = require('app/containers/ForgotPassword');

var _ForgotPassword2 = babelHelpers.interopRequireDefault(_ForgotPassword);

var Signup = (0, _reactNavigation.StackNavigator)({
  EnterFnameLname: {
    screen: _EnterFnameLname2.default
  },
  EnterDateOfBirth: {
    screen: _EnterDateOfBirth2.default

  },
  EnterUsername: {
    screen: _EnterUsername2.default
  },
  EnterPassword: {
    screen: _EnterPassword2.default
  },
  EnterEmail: {
    screen: _EnterEmail2.default
  },
  EnterPhoneNumber: {
    screen: _EnterPhoneNumber2.default
  }
}, {
  headerMode: 'none'

});
var LoginStack = (0, _reactNavigation.StackNavigator)({
  LoginScreen: {
    screen: _Login2.default
  },
  ForgotPassword: {
    screen: _ForgotPassword2.default

  }
}, {
  headerMode: 'none'
});

var Routes = (0, _reactNavigation.StackNavigator)({
  Starter: {
    screen: _Starter2.default,
    navigationOptions: {
      header: null

    }
  },
  Login: {
    screen: LoginStack

  },
  Signup: {
    screen: Signup
  }

}, {
  headerMode: 'screen'

});

exports.default = Routes;