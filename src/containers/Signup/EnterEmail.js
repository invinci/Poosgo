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

//import RestService from '../../utilities/RestService';
//import Spinner from 'react-native-loading-spinner-overlay';
//import Toast from 'react-native-root-toast';
//mport NavigationBar from 'react-native-navbar';

let Screen = require('Dimensions').get('window'),
    {height, width} = Dimensions.get('window');
  //  back_icon = require('image!back_icon');
   // NavigationBar = require('react-native-navbar');

class EnterEmail extends Component {
  static  navigationOptions= {
           headerStyle: {
          backgroundColor: '#5a0fb4',
          elevation: 1},
            headerTintColor: 'white'
     }


  render() {

    const {navigate}=this.props.navigation;
    return (
      <View style={{flex:1}}>


        <View style={styles.container}>
          <View style={{alignItems:'center', marginTop:(Screen.height/100)*3}}>
            <Text style={{fontSize:22,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro'}}>Enter Email</Text>
              <Text style={{fontSize:15,fontWeight:'400',color:'#ffffff',fontFamily:'din round pro',marginTop:5,textAlign:'center',padding:3,marginHorizontal:10}}>Other Users Can Search You By Email, Name, Phone Number</Text>
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,marginTop:(Screen.height/100)*6}}>
            <Text style={{color:'#b7b7b7',fontSize:16,fontWeight:'600',fontFamily:'din round pro'}}>Email</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              autoCapitalize='none'
              underlineColorAndroid='transparent'
              autoCorrect={false}
              keyboardType='email-address'
              style={{flex:1,fontSize:16,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro'}}
              onChangeText={(email) => console.log(firstName)}
            />
          </View>
          <TouchableOpacity onPress={()=>navigate('EnterPhoneNumber')}
          style={{marginTop:(Screen.height/100)*15,backgroundColor:'red',alignItems:'center',justifyContent:'center',marginVertical:10,marginHorizontal:10,padding:15,backgroundColor:'#ffffff',borderWidth:1,borderColor:'transparent',borderRadius:5,}}>
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
});

module.exports = EnterEmail;
