//import {FORGOT_UPDATE,FORGOT_CHECK,FORGOT_SUCCESSFULL,FORGOT_FAIL} from './ForgotActions';

const INITIAL_STATE={first:false,second:false,third:false,four:false,five:false}
export default (state=INITIAL_STATE,action)=>{
 switch (action.type) {
   case 'TAB_ONE':
        return {first:true,second:false,third:false,four:false,five:false }
   case 'TAB_TWO':
     return {first:false,second:true,third:false,four:false,five:false}
   case 'TAB_THREE':
    return {first:false,second:false,third:true,four:false,five:false}
  case 'TAB_FOUR':
    return {first:false,second:false,third:false,four:true,five:false}
   case  'TAB_FIVE':
      return {first:false,second:false,third:false,four:false,five:true}
   default:
       return state;
 }
}
