import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
   Platform

} from 'react-native';
import {connect} from 'react-redux';
import {forgotUpdate,forgotPassword} from './ForgotActions'

let Screen = require('Dimensions').get('window'),
    {height, width} = Dimensions.get('window');

   // NavigationBar = require('react-native-navbar');

class ForgotPassword extends Component {
  static  navigationOptions= {
           headerStyle: {
           backgroundColor: '#5a0fb4',
           elevation: 1},
           headerTintColor: 'white',

     }
  constructor(props){
    super(props);
    this.state={
      email:'',
      error:''
    }
  }
  submit=()=>{
   let pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const {email}=this.props;
    const {navigate}=this.props.navigation;
              if(!email){
                this.setState({error:'Email is required'})
              }else if(!pattern.test(email)){
                   this.setState({error:'Insert a valid Email'})

              }else{
                  //alert(pattern.test(email))
                this.props.forgotPassword({email});

              }

      }
  render() {
  const {email,loading,success,forgotUpdate,forgotPassword}=this.props;
    return (
      <View style={{flex:1}}>

        <View style={styles.container}>
          <View style={{alignItems:'center', marginTop:(Screen.height/100)*5}}>
            <Text style={styles.head}>Reset Password</Text>
          </View>
          <View style={{alignItems:'center',justifyContent:'center', marginTop:(Screen.height/100)*2}}>
            <Text style={styles.forgottext}>Enter your email below to reset</Text>
               <Text style={styles.forgottext}>your password</Text>
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,marginTop:(Screen.height/100)*10}}>
            <Text style={{color:'#b7b7b7',fontSize:18,fontWeight:'700',fontFamily:'din round pro'}}>EMAIL</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              underlineColorAndroid='transparent'
              value={email}
              style={{flex:1,fontSize:16,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro'}}
              onChangeText={(email) => forgotUpdate({prop:'email',value:email})}
            />
          </View>
          <View style={{height:30,alignItems:'center',justifyContent:'center'}}>
          <Text style={styles.error}>{this.state.error}</Text>

          </View>
          <TouchableOpacity onPress={()=>this.submit()} style={styles.loginButton}>
            <Text style={{color:'#5a0fb4', fontWeight:'700',fontSize:22,fontFamily:'din round pro'}}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a0fb4',
  },
  inputContainer:{
    ...Platform.select({
     ios: {
       borderBottomWidth:1,
       marginVertical:5,
       marginHorizontal:(Screen.width/100)*10,
       borderColor:'#b7b7b7',
       height:30,
     },
     android: {
       borderBottomWidth:1,
       marginVertical:5,
       marginHorizontal:(Screen.width/100)*10,
       borderColor:'#b7b7b7',
       height:40,
     },
   })
 },
 loginButton:{
   marginTop:(Screen.height/100)*15,
   alignItems:'center',
   justifyContent:'center',
   marginVertical:20,
   marginHorizontal:10,
   padding:15,
   backgroundColor:'#ffffff',
   borderWidth:1,borderColor:'transparent',borderRadius:5,
 },
 forgottext:{
   fontSize:18,
   fontWeight:'600',
   color:'rgba(255,255,255,.9)',
   fontFamily:'din round pro',textAlign:'center'
 },
 head:{
   fontSize:22,
   fontWeight:'700',
   color:'#ffffff',
   fontFamily:'din round pro'
 },
 error:{
   color:'red',
   fontSize:18,
   fontWeight:'700',
   fontFamily:'din round pro'
 }
});
const mapStateToProps=({Forgot})=>{
  const {email,loading,success}=Forgot;
   return{
          email,loading,success
   }

}
export default connect(mapStateToProps,{forgotUpdate,forgotPassword})(ForgotPassword);
