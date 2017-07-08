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


let     Screen = require('Dimensions').get('window'),
    {height, width} = Dimensions.get('window');
    //back_icon = require('image!back_icon');
    //NavigationBar = require('react-native-navbar');

class EnterFnameLname extends Component {
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
          <View style={{alignItems:'center', marginTop:(Screen.height/100)*5}}>
            <Text style={{fontSize:22,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro'}}>Enter your name</Text>
              <Text style={{fontSize:15,fontWeight:'400',color:'#ffffff',fontFamily:'din round pro',marginTop:5}}>This Will be displayed to other Users</Text>
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,marginTop:(Screen.height/100)*6}}>
            <Text style={{color:'#b7b7b7',fontSize:16,fontWeight:'600',fontFamily:'din round pro'}}>First Name</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              autoCorrect={false}
              underlineColorAndroid='transparent'
              style={{flex:1,fontSize:16,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro'}}
              onChangeText={(firstName) => console.log(firstName)}
            />
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,}}>
            <Text style={{color:'#b7b7b7',fontSize:16,fontWeight:'600',fontFamily:'din round pro'}}>Last Name</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              autoCorrect={false}
              underlineColorAndroid='transparent'
              style={{flex:1,fontSize:16,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro'}}
              onChangeText={(lastName) => console.log(firstName)}
            />
          </View>
          <View style={{alignItems:'center',marginVertical:10}}>
            <Text style={{color:'#b7b7b7',fontSize:16,fontFamily:'din round pro'}}>By tapping Sign Up, you agree to the</Text><View style={{flexDirection:'row'}}><TouchableOpacity><Text style={{color:'#ffffff',fontSize:16,fontFamily:'din round pro'}}> Terms of Service </Text></TouchableOpacity><Text style={{color:'#b7b7b7',fontSize:16,fontFamily:'din round pro'}}>and</Text><TouchableOpacity><Text style={{color:'#ffffff',fontSize:16,fontFamily:'din round pro'}}> Privacy Policy</Text></TouchableOpacity></View>
          </View>
          <TouchableOpacity onPress={()=>navigate('EnterDateOfBirth')} style={{alignItems:'center',justifyContent:'center',marginTop:(Screen.height/100)*20,marginHorizontal:10,padding:15,backgroundColor:'#ffffff',borderWidth:1,borderColor:'transparent',borderRadius:5,}}>
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

module.exports = EnterFnameLname;
