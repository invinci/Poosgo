import {combineReducers} from 'redux';
import LoginReducer from 'app/containers/Login/LoginReducer'
import SignupReducer from 'app/containers/Signup/SignupReducer'
import ForgotPasswordReducer from 'app/containers/ForgotPassword/ForgotReducer'
const reducers=combineReducers({
Login:LoginReducer,
Signup:SignupReducer,
Forgot:ForgotPasswordReducer


})
export default reducers;
