import {
  StyleSheet,
  Dimensions
} from 'react-native';
const {width,height}=Dimensions.get('window');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a0fb4',
  },
  loginTextContainer:{
    alignItems:'center',
     marginTop:(height/100)*5
  },
  loginText:{
    fontSize:22,
    fontWeight:'700',
    color:'#ffffff'
  },
  labelOne:{
    marginHorizontal:(width/100)*10,
    marginTop:(height/100)*6
  },
  labelOneText:{
    color:'#b7b7b7',
    fontSize:16,
    fontWeight:'600'
  },
  usernameInput:{
    flex:1,
    fontSize:16,
    fontWeight:'700',
    color:'#ffffff'
  },
  forgotLabel:{
    marginHorizontal:(width/100)*10,
    marginTop:(height/100)*6
  },
  forgotText:{
    color:'#b7b7b7',
    fontSize:16,
    fontWeight:'600'
  },
  passwordInput:{
    flex:1,
    fontSize:16,
    fontWeight:'700',
    color:'#ffffff'
  },
  forgotPasswordButton:{
    fontSize:16,
    fontWeight:'700',
    color:'#ffffff',
    textAlign:'center',
    marginVertical:(height/100)*3,
  },
  loginContainer:{
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
    marginHorizontal:10,
    padding:15,
    backgroundColor:'#ffffff',
    borderWidth:1,
    borderColor:'transparent',
    borderRadius:5,
  },
  loginButtonText:{
    color:'#5a0fb4',
    fontWeight:'700',
    fontSize:18
  }

});

export default styles;
