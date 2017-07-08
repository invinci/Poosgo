import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  DatePickerIOS,
  TextInput,
  Platform
} from 'react-native';

//import moment from 'moment';
//import NavigationBar from 'react-native-navbar';

let     Screen = require('Dimensions').get('window'),
    {height, width} = Dimensions.get('window');
  //  back_icon = require('image!back_icon');
   // NavigationBar = require('react-native-navbar');

class EnterDateOfBirth extends Component {
static  navigationOptions= {
        headerStyle: {
        backgroundColor: '#5a0fb4',
        elevation: 1},
          headerTintColor: 'white'
   }
  render() {
    let context = this;
    const {navigate}=this.props.navigation;
    return (
      <View style={{flex:1}}>

        <View style={styles.container}>
          <View style={{alignItems:'center', marginTop:(Screen.height/100)*3}}>
            <Text style={{fontSize:22,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro'}}>Enter your DOB</Text>
              <Text style={{fontSize:15,fontWeight:'400',color:'#ffffff',fontFamily:'din round pro',marginTop:5}}>This Will be displayed to other Users</Text>
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,marginTop:(Screen.height/100)*6}}>
            <Text style={{color:'#b7b7b7',fontSize:16,fontWeight:'600',fontFamily:'din round pro'}}>BIRTHDAY</Text>
          </View>
          <TouchableOpacity onPress={ ()=>console.log("dtae") }>
            <View style={ styles.inputContainer }>
              <Text style={{fontSize:16,color:'#ffffff',textAlign:'center',fontFamily:'din round pro'}}>{  }</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigate('EnterUsername')} style={{alignItems:'center',justifyContent:'center',marginTop:(Screen.height/100)*25,marginHorizontal:10,padding:15,backgroundColor:'#ffffff',borderWidth:1,borderColor:'transparent',borderRadius:5,}}>
            <Text style={{color:'#5a0fb4', fontWeight:'700',fontSize:18,fontFamily:'din round pro'}}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      <View/>
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
  datePicker: {
   borderTopWidth: 1,
   position: 'absolute',
   bottom: 0,
   right: 0,
   left: 0,
   height: 220,
   borderColor: '#CCC',
   backgroundColor: '#FFF',
  },
});

module.exports = EnterDateOfBirth;
