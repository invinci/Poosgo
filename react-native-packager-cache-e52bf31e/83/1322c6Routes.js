Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNavigation = require('react-navigation');

var _reactNative = require('react-native');

var _Starter = require('app/containers/Starter');

var _Starter2 = _interopRequireDefault(_Starter);

var _Login = require('app/containers/Login');

var _Login2 = _interopRequireDefault(_Login);

var _EnterEmail = require('app/containers/Signup/EnterEmail');

var _EnterEmail2 = _interopRequireDefault(_EnterEmail);

var _EnterDateOfBirth = require('app/containers/Signup/EnterDateOfBirth');

var _EnterDateOfBirth2 = _interopRequireDefault(_EnterDateOfBirth);

var _EnterUsername = require('app/containers/Signup/EnterUsername');

var _EnterUsername2 = _interopRequireDefault(_EnterUsername);

var _EnterFnameLname = require('app/containers/Signup/EnterFnameLname');

var _EnterFnameLname2 = _interopRequireDefault(_EnterFnameLname);

var _EnterPassword = require('app/containers/Signup/EnterPassword');

var _EnterPassword2 = _interopRequireDefault(_EnterPassword);

var _EnterPhoneNumber = require('app/containers/Signup/EnterPhoneNumber');

var _EnterPhoneNumber2 = _interopRequireDefault(_EnterPhoneNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Routes = (0, _reactNavigation.StackNavigator)({
  Starter: {
    screen: _Starter2.default,
    navigationOptions: {
      header: null

    }
  },
  Login: {
    screen: _Login2.default
  },
  Signup: {
    screen: Signup
  }

}, {
  headerMode: 'screen'

});

exports.default = Routes;