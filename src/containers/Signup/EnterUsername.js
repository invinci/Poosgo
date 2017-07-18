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
import {SignupUpdate} from './SignupActions';

let Screen = require('Dimensions').get('window'),
    {height, width} = Dimensions.get('window');
    //back_icon = require('image!back_icon');
   // NavigationBar = require('react-native-navbar');

class EnterUsername extends Component {
  static  navigationOptions= {
           headerStyle: {
           backgroundColor: '#5a0fb4',
           elevation: 1},
           headerTintColor: 'white'
     }

  constructor(props){
    super(props);
    this.state={
      username:'',
      error:''
    }
  }

  submit=()=>{
   const {navigate}=this.props.navigation;
    if(this.state.username == '' && !this.state.username.trim()){
      this.setState({error:'Please enter username'})
    }
    else{
      this.props.SignupUpdate({prop:'username',value:this.state.username})
     navigate('EnterPassword')

    }
  }


  render() {
     const {username}=this.props;

    return (
      <View style={{flex:1}}>

        <View style={styles.container}>
          <View style={{alignItems:'center', marginTop:(Screen.height/100)*3}}>
            <Text style={{fontSize:22,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro'}}>Enter Username</Text>
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,marginTop:(Screen.height/100)*6}}>
            <Text style={{color:'#b7b7b7',fontSize:16,fontWeight:'600',fontFamily:'din round pro'}}>USERNAME</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              underlineColorAndroid='transparent'
              value={this.state.username}
              style={{flex:1,fontSize:17,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro',}}
              onChangeText={(username) =>this.setState({username})}
            />
          </View>
          <View style={{height:30,alignItems:'center',justifyContent:'center',marginTop:20}}>
          <Text style={styles.error}>{this.state.error}</Text>
          </View>
          <TouchableOpacity onPress={()=>this.submit()} style={{marginTop:(Screen.height/100)*25,alignItems:'center',justifyContent:'center',marginVertical:10,marginHorizontal:10,padding:15,backgroundColor:'#ffffff',borderWidth:1,borderColor:'transparent',borderRadius:5,}}>
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
 error:{
   color:'red',
   fontSize:18,
   fontWeight:'700',
   fontFamily:'din round pro'
 }
});
const mapStateToProps=({Signup})=>{
   const {username}=Signup;
   return{
     username
   }

}
export default connect(mapStateToProps,{SignupUpdate})(EnterUsername)
