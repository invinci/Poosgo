import {
  StyleSheet,
  Dimensions
} from 'react-native';
const {width,height}=Dimensions.get('window');

var styles = StyleSheet.create({
container:{
      flex: 1,
      backgroundColor: '#5a0fb4',
    },
  imageContainer:{
    flex:6,
    alignItems:'center',
     marginTop:(height/100)*30
  },
  image:{
    height:(height/100)*20,
    width:(width/100)*100
  },
  loginContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
    marginHorizontal:10,
    backgroundColor:'#ffffff',
    borderWidth:1,
    borderColor:'transparent',
    borderRadius:5
  },
  loginText:{

     fontSize:22,
     fontWeight:'700',
     color:'#5a0fb4',
     fontFamily:'din round pro'
  },
  signupContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
    marginHorizontal:10,
    backgroundColor:'transparent',
    borderWidth:2,
    borderColor:'#ffffff',
    borderRadius:5,
  },
  signupText:{
    color:'#ffffff',
    fontSize:22,
    fontWeight:'700',
    fontFamily:'din round pro'
  }

});

export default styles;
