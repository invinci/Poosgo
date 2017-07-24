import {SIGNUP_UPDATE,SIGNUP_CHECK,SIGNUP_SUCCESSFULL,SIGNUP_FAIL,EMAIL_ALREDAY,MOBILE_ALREDAY,OTP_BACK} from './SignupActions';

const INITIAL_STATE={Fname:'',Lname:'',mobile:'',dob:'2016-05-15',username:'',email:'',password:'',loading:false,sucecsss:false,data:{}}
export default (state=INITIAL_STATE,action)=>{
 switch (action.type) {
   case SIGNUP_UPDATE:
        return { ...state, [action.payload.prop]:action.payload.value}
   case SIGNUP_CHECK:
     return {...state,loading:true}
   case SIGNUP_SUCCESSFULL:
    return {...INITIAL_STATE,loading:false,sucecsss:true,data:action.payload}
  case SIGNUP_FAIL:
   return INITIAL_STATE;
case OTP_BACK:
      return state;
   default:
       return state;
 }



}
