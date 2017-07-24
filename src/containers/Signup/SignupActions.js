export const SIGNUP_UPDATE='SIGNUP_UPDATE';
export const SIGNUP_CHECK='SIGNUP_CHECK';
export const SIGNUP_SUCCESSFULL='SIGNUP_SUCCESSFULL';
export const SIGNUP_FAIL='SIGNUP_FAIL';
export const EMAIL_ALREDAY='EMAIL_ALREDAY';
export const MOBILE_ALREDAY='MOBILE_ALREDAY';
export const OTP_BACK='OTP_BACK';
import Api from 'app/lib/api'
import URL from 'app/lib/url'

export const SignupUpdate=({prop,value})=>{
  return {
    type:SIGNUP_UPDATE,
    payload:{prop,value}
  }
}
export const Signupfail=()=>{
  return{
    type: OTP_BACK
  }
}

export const SignupChecking=({name,email,mobile,password,navigation})=>(dispatch)=>{

Api.makeRequest('POST',URL.USER_REGISTER,{},{name,email,mobile,password})
  .then((response)=>response.json())
  .then((responseJson) =>{
     console.log(responseJson,"signup");
       if(responseJson.error){

              if(responseJson.msg==='Mobile number already exists'){
                alert('Mobile Number Already Exist');
                 dispatch({type: MOBILE_ALREDAY});
              }else{
                  alert('Email Already Exist');
                  dispatch({type: EMAIL_ALREDAY});
              }

          }else{
             if(responseJson.token){
                 dispatch({type: SIGNUP_SUCCESSFULL,payload:responseJson});
                 alert('Success! OTP send you mobile number');
                 navigation.navigate('OtpScreen');
              }
          }
   })
 .catch((error) => {
       dispatch({type: SIGNUP_FAIL});
       alert('Sign Up Failed');
   });





}
