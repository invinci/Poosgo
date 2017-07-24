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
  Platform,
  ActivityIndicator,
} from 'react-native';
import Starter from '../Starter'
//import Spinner from 'react-native-loading-spinner-overlay';
import {loginUpdate,loginChecking,logout} from './LoginAction'
import { connect } from 'react-redux'

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
     
  constructor(props){
    super(props);
    this.state={
      isVisible:false,
      username:'',
      password:'',
      latitude:'30.7046',
      longitude:'76.7179',
      active:false,
      animating: false
    }
  }

  componentWillMount(){
    this.props.logout();
  }

  componentDidMount(){}

  fetchProfileInfo(token){
    let context= this;
    let formdata = new FormData();
    formdata.append("token", token)

    fetch('https://tangential-span-155900.appspot.com/api/user/fetchProfile',{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formdata
    }).then(response => {
        return response.json();
      }).then(response => {
        context.setState({animating: false});
        AsyncStorage.setItem('accessToken', JSON.stringify(response));
        alert("SuccessFully Logged in!  ")
      }).catch(err => {
        console.log(err)
      })  
  }

  logIn(user){
    let context = this;
    this.setState({animating: true})
    const { navigate } = this.props.navigation;
    var OBJECT = {  
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
   }
   fetch('https://tangential-span-155900.appspot.com/api/user/loginUser', OBJECT)  
    .then(function(res) {
      console.log(res);
      if(res.status === 200) {
        return res.json();
      } else {
        alert("Anauthorised User!")
        context.setState({animating: false});
      }
      
    }).then(function(res) {
      AsyncStorage.setItem('accessToken', res.id_token);
      context.fetchProfileInfo(res.id_token);
    }).
    catch(function(err) {
      console.log(err);
    })
    //this.props.loginChecking({username,password,navigate})
  }

  forgotPassword(){ }

  render() {
     const animating = this.state.animating
    if(animating) {
      return (
        <View style = {styles.containerIndicator}>
            <ActivityIndicator
               animating = {animating}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}
            />
         </View>
      );
    }
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
              onBlur={()=>{if(username.length <= 0){this.setState({active:false})}}}


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
              onChangeText={(text) => {loginUpdate({prop:'password',value:text}), this.setState({active:true})}}
              onBlur={()=>{if(username.length <= 0&&password.length <= 0){this.setState({active:false})}}}
            />
          </View>
          <TouchableOpacity onPress={()=>navigate('ForgotPassword')}><Text style={{fontSize:16,fontWeight:'700',color:'#ffffff',textAlign:'center',marginVertical:(Screen.height/100)*3,fontFamily:'din round pro'}}>Forgot Your Password?</Text></TouchableOpacity>
          <TouchableOpacity
           onPress={()=>this.logIn({username,password})}
           style={{flex:1}}
           disabled={this.state.active ? false : true}
            >
               <View style={ this.state.active ? styles.loginButtonActive : styles.loginButton}>
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
    opacity: 0.3,
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
    opacity: 1,
  },

  containerIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      //marginTop: 70
   },
	
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
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
