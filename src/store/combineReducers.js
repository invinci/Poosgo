import {combineReducers} from 'redux';
import LoginReducer from 'app/containers/Login/LoginReducer'

const reducers=combineReducers({
Login:LoginReducer

})
export default reducers;
