import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
  TextInput,
  Platform
} from 'react-native';
import Starter from '../Starter'
//import Spinner from 'react-native-loading-spinner-overlay';
import {loginUpdate,loginChecking,logout} from './LoginAction'
import { connect } from 'react-redux'
//import RestService from '../utilities/RestService';
//import Spinner from 'react-native-loading-spinner-overlay';
//import NavigationBar from 'react-native-navbar';

//var jwtDecode = require('jwt-decode');
//import styles from './styles'
let logo = require('./images/logo.png'),
    Screen = require('Dimensions').get('window'),
    {height, width} = Dimensions.get('window'),
    back_icon = require('./images/back_icon.png');
    //NavigationBar = require('react-native-navbar');
let lat = 0, lng = 0;

class Login extends Component {
  static  navigationOptions= {
           headerStyle: {
           backgroundColor: '#5a0fb4',
           elevation: 1},
           headerTintColor: 'white',

     }
     componentWillMount(){
       this.props.logout();
     }
  constructor(props){
    super(props);
    this.state={
      isVisible:false,
      username:'',
      password:'',
      latitude:'30.7046',
      longitude:'76.7179',
      active:false
    }
  }



  logIn(username,password){

    const { navigate } = this.props.navigation;

    this.props.loginChecking({username,password,navigate})


  }
  forgotPassword(){
    // let context = this;
    // context.props.navigator.push({
    //   component:require('./ResetPassword')
    // })
  }

  componentDidMount(){
    // let  context = this;
  }
  // context.locatePosition()


  render() {
const {loginUpdate,username,password,loading,auth} =this.props;
const { navigate } = this.props.navigation;
    return (
      <View style={{flex:1}}>


        <View style={styles.container}>
          <View style={{alignItems:'center', marginTop:(Screen.height/100)*5}}>
            <Text style={{fontSize:22,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro'}}>Log In</Text>
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,marginTop:(Screen.height/100)*6}}>
            <Text style={{color:'#b7b7b7',fontSize:16,fontWeight:'600',fontFamily:'din round pro'}}>USERNAME</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              value={username}
               underlineColorAndroid='transparent'
              style={{flex:1,color:'#ffffff',fontSize:16,fontWeight:'600',fontFamily:'din round pro'}}
              onChangeText={(text) =>{loginUpdate({prop:'username',value:text}),this.setState({active:true}) }}
              onBlur={()=>{if(username.length>0){this.setState({active:false})}}}


            />
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,marginTop:(Screen.height/100)*6}}>
            <Text style={{color:'#b7b7b7',fontSize:16,fontWeight:'600',fontFamily:'din round pro'}}>PASSWORD</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              autoCorrect={false}
              password={true}
              value={password}
              underlineColorAndroid='transparent'
              style={{flex:1,fontSize:16,fontWeight:'600',color:'#ffffff',fontFamily:'din round pro'}}
              onChangeText={(text) => {loginUpdate({prop:'password',value:text}),this.setState({active:true})}}
              onBlur={()=>{if(username.length>0&&password.length>0){this.setState({active:false})}}}
            />
          </View>
          <TouchableOpacity onPress={()=>navigate('ForgotPassword')}><Text style={{fontSize:16,fontWeight:'700',color:'#ffffff',textAlign:'center',marginVertical:(Screen.height/100)*3,fontFamily:'din round pro'}}>Forgot Your Password?</Text></TouchableOpacity>
          <TouchableOpacity
           onPress={()=>this.logIn({username,password})}
           style={{flex:1}}
            >
                      <View style={this.state.active?styles.loginButtonActive:styles.loginButton}>
            <Text style={{color:'#5a0fb4', fontWeight:'700',fontSize:22,fontFamily:'din round pro'}}>LOG IN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// fontSize:22,
// fontWeight:'700',
// color:'#5a0fb4',
// fontFamily:'din round pro'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a0fb4',
  },
  loginButton:{
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
    marginHorizontal:10,
    padding:15,
    backgroundColor:'#ffffff',
    borderWidth:1,borderColor:'transparent',
    borderRadius:5,
  },
  loginButtonActive:{
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
    marginHorizontal:10,
    padding:15,
    backgroundColor:'#ffffff',
    borderWidth:1,borderColor:'transparent',
    borderRadius:5,
    opacity:0.3
  },

  inputContainer:{
    ...Platform.select({
     ios: {
       borderBottomWidth:1,
       marginVertical:8,
       marginHorizontal:(Screen.width/100)*10,
       borderColor:'#b7b7b7',
       height:30,
     },
     android: {
       borderBottomWidth:1,
       marginVertical:8,
       marginHorizontal:(Screen.width/100)*10,
       borderColor:'#b7b7b7',
       height:40,
     },
   })
  },
});
export const mapStateToProps=({Login})=>{
const {username,password,loading,auth}=Login;
    return{
      username,
      password,
      loading,
      auth
    }

}


export default connect(mapStateToProps,{loginUpdate,loginChecking,logout})(Login);
