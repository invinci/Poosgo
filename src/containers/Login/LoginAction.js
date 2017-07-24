
export const LOGIN_UPDATE='LOGIN_UPDATE';
export const LOGIN_CHECK='LOGIN_CHECK';
export const LOGIN_SUCCESSFULL='LOGIN_SUCCESSFULL';
export const LOGIN_FAIL='LOGIN_FAIL';
export const LOG_OUT='LOG_OUT';
import Api from 'app/lib/api'
import URL from 'app/lib/url'


export const loginUpdate=({prop,value})=>{
return {
        type:LOGIN_UPDATE,
        payload:{prop,value}
  }

}
export const logout=()=>{
  return{
    type:LOG_OUT
  }
}

export const socialLoginSuccess=()=>{
  return{
    type:LOGIN_SUCCESSFULL
  }
}

export const socialLoginFail=()=>{
return{
  type:LOGIN_FAIL
 }

}
export  const loginChecking=(user, navigate)=>(dispatch)=>{
   var OBJECT = {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
      {
        "username": "ravik",
        "password": "12345"
      }
    ])
   }
    fetch('https://virtserver.swaggerhub.com/kalaiprakash/registerNewUser/0.1/user/loginUser', OBJECT)  
    .then(function(res) {
      console.log(res);
      return{ type: LOGIN_SUCCESSFULL, payload: res };
    }).
    catch(function(err) {
      console.log(err);
      return({ type: LOGIN_FAIL });
    })
}
