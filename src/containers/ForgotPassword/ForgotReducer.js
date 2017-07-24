import {FORGOT_UPDATE,FORGOT_CHECK,FORGOT_SUCCESSFULL,FORGOT_FAIL} from './ForgotActions';

const INITIAL_STATE={email:'',loading:false,success:false}
export default (state=INITIAL_STATE,action)=>{
 switch (action.type) {
   case FORGOT_UPDATE:
        return { ...state, [action.payload.prop]:action.payload.value}
   case FORGOT_CHECK:
     return {...state,loading:true}
   case FORGOT_SUCCESSFULL:
    return {...INITIAL_STATE,loading:false,success:true}
  case FORGOT_FAIL:
   return INITIAL_STATE;
   default:
       return state;
 }



}
