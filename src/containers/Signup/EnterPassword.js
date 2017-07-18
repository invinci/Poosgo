import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
  Platform
} from 'react-native';
import {connect} from 'react-redux'
import {SignupUpdate} from './SignupActions'
//import RestService from '../../utilities/RestService';
import Toast from 'react-native-root-toast';
//import NavigationBar from 'react-native-navbar';

let Screen = require('Dimensions').get('window'),
    {height, width} = Dimensions.get('window');

    //NavigationBar = require('react-native-navbar');



class EnterPassword extends Component {

  state={password:'',error:'',show:false}
  static  navigationOptions= {
          headerStyle: {
          backgroundColor: '#5a0fb4',
          elevation: 1},
          headerTintColor: 'white'
     }

submit=()=>{
  let regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  const {password}=this.state;
  const {navigate}=this.props.navigation;
  if(!password){
    this.setState({error:'Password must be Provide'})
  }else if(password.length<8){
     this.setState({error:'Password must be eight or more charecter long'})

  } else if(!/[@#$&*^%!+=\/\\[\]|?.,<>)(;:'"~`]/.test(password)){
   this.setState({error:'Must contain a Special Charecter'})
  }  else{
    this.props.SignupUpdate({prop:'password',value:this.state.password});
    navigate('EnterEmail');
  }
}

  render() {
const {password}=this.props;
const {show}=this.state

    return (
      <View style={{flex:1}}>

        <View style={styles.container}>
          <View style={{alignItems:'center', marginTop:(Screen.height/100)*3}}>
            <Text style={{fontSize:22,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro'}}>Enter Password</Text>
              <Text
              style={{fontSize:15,fontWeight:'400',color:'#ffffff',fontFamily:'din round pro',marginTop:7,textAlign:'center',padding:8}}>
              Your Password must included at least one symbol and be eight or more charecter long</Text>
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,marginTop:(Screen.height/100)*6}}>
            <Text style={{color:'#b7b7b7',fontSize:16,fontWeight:'600',fontFamily:'din round pro'}}>PASSWORD</Text>
            <View style={{position:'absolute',right:5}}
            >
            <Text
            style={{fontSize:15,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro'}}
            onPress={()=>{this.setState({show:!show})}}
            >SHOW</Text>
            </View>
          </View>
          <View style={styles.inputContainer}>


            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              password={true}
              secureTextEntry={show?false:true}
              value={this.state.password}
              underlineColorAndroid='transparent'
              style={{fontSize:16,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro'}}
              onChangeText={(password) => this.setState({password})}
            />
          </View>

          <View style={{height:30,alignItems:'center',justifyContent:'center',marginTop:20}}>
          <Text style={styles.error}>{this.state.error}</Text>
          </View>
          <TouchableOpacity onPress={()=>this.submit()}
          style={{marginTop:(Screen.height/100)*25,alignItems:'center',justifyContent:'center',marginVertical:10,marginHorizontal:10,padding:15,backgroundColor:'#ffffff',borderWidth:1,borderColor:'transparent',borderRadius:5,}}>
            <Text style={{color:'#5a0fb4', fontWeight:'700',fontSize:18,fontFamily:'din round pro'}}>CONTINUE</Text>
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
       marginVertical:16,
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
  DigitsAuthenticateButton: {
    marginTop:(Screen.height/100)*15,
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
  DigitsAuthenticateButtonText: {
    color:'#5a0fb4',
    fontWeight:'700',
    fontSize:18,
    fontFamily:'din round pro'
  },
  error:{
    color:'red',
    fontSize:18,
    fontWeight:'700',
    fontFamily:'din round pro'
  }
});
const mapStateToProps=({Signup})=>{
  const {password}=Signup
  return{
    password
  }
}
export default connect(mapStateToProps,{SignupUpdate})(EnterPassword);
