import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';
import PhoneNumberPicker from 'react-native-country-code-telephone-input'
import CountryPicker, {getAllCountries} from 'react-native-country-picker-modal';
import DeviceInfo from 'react-native-device-info';
import dataCountry from 'app/lib/data.json';
//import RestService from '../../utilities/RestService';
//import Spinner from 'react-native-loading-spinner-overlay';
//import Toast from 'react-native-root-toast';
//mport NavigationBar from 'react-native-navbar';

let Screen = require('Dimensions').get('window'),
    {height, width} = Dimensions.get('window');
  //  back_icon = require('image!back_icon');
   // NavigationBar = require('react-native-navbar');
const NORTH_AMERICA = ['CA', 'MX', 'US'];
class EnterEmail extends Component {
  constructor(props){
  super(props);
  this.state={
    mobileNum:'',
    dataAll: {}
  }
}
  static  navigationOptions= {
          headerStyle: {
          backgroundColor: '#5a0fb4',
          elevation: 1},
          headerTintColor: 'white'
     }
     PhoneNumberPickerChanged(country, callingCode, phoneNumber) {
       console.log(country, callingCode, phoneNumber)
       this.setState({
         countryName: country.name,
         callingCode: callingCode,
         phoneNo:phoneNumber
       });
     }

   componentWillMount(){
     let code = DeviceInfo.getDeviceCountry();
     let dataAll={};
     for(let i=0; i< dataCountry.length; i++){
       console.log(dataCountry[i]);
       if(dataCountry[i].code=== code){
         dataAll=dataCountry[i];
         this.setState({dataAll});
         return;
       }
     }
   }
  validateEmail() {
    let context = this;
    if(context.state.email == '' && !context.state.email.trim()){
      alert('Please enter your email')
    }
    else{
      context.setState({
        isVisible:true
      })

    }
  }
  submit(){

    // let payLoad={
    //   "first_name": context.props.data.fname,
    //   "last_name": context.props.data.lname,
    //   "username": context.props.data.uname,
    //   "email": context.state.email,
    //   "mobile": context.props.data.pnumb,
    //   "password": context.props.data.pword
    // }
    // context.setState({
    //   isVisible:true
    // })
    // console.log('payLoad ------- ', payLoad)
    // RestService.postHttp('User/registerNewUser', payLoad).then((result) => {
    //   console.log('result resgister ---- ',result)
    //   context.setState({
    //     isVisible:false
    //   })
    //   if(result.statusCode == 200){
    //     Toast.show(result.message, {
    //         duration: Toast.durations.LONG,
    //         position: Toast.positions.TOP,
    //         shadow: true,
    //         animation: true,
    //         hideOnPress: true,
    //         delay: 0,
    //       });
    //     context.props.navigator.resetTo({
    //       component: require('../StartPage')
    //     })
    //   }
    //   else{
    //     alert(result.message)
    //   }
    // })
  }
  render() {
    let dataAll = this.state.dataAll;
    console.log(dataAll);
    let context = this;
    return (
      <View style={{flex:1}}>

        <View style={styles.container}>
          <View style={{alignItems:'center', marginTop:(Screen.height/100)*5}}>
            <Text style={{fontSize:22,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro'}}>Enter Mobile Number</Text>
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,marginTop:(Screen.height/100)*6}}>
            <Text style={{color:'#b7b7b7',fontSize:16,fontWeight:'600',fontFamily:'din round pro'}}>Mobile Number</Text>
          </View>
          <PhoneNumberPicker
            countryHint={{name:  this.state.dataAll.name , cca2:  this.state.dataAll.code , callingCode:  dataAll.dial_code }}
        onChange={this.PhoneNumberPickerChanged.bind(this)}/>
          <TouchableOpacity onPress={()=>context.submit()} style={{marginTop:(Screen.height/100)*15,alignItems:'center',justifyContent:'center',marginVertical:10,marginHorizontal:10,padding:15,backgroundColor:'#ffffff',borderWidth:1,borderColor:'transparent',borderRadius:5,}}>
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
    borderBottomWidth:1,
    marginVertical:16,
    marginHorizontal:(Screen.width/100)*10,
    borderColor:'#b7b7b7',
    height:30,
  }
});

module.exports = EnterEmail;
