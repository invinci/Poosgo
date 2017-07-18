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
import PhoneNumberPicker from 'react-native-country-code-telephone-input'
import CountryPicker, {getAllCountries} from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-input'
import DeviceInfo from 'react-native-device-info';
import dataCountry from 'app/lib/data.json';


let Screen = require('Dimensions').get('window'),
    {height, width} = Dimensions.get('window');
const NORTH_AMERICA = ['CA', 'MX', 'US'];
class EnterPhoneNumber extends Component {s
  constructor(props){
   super(props);
   this.state={
     mobile:'',
     dataAll: {}
   }
   this.onPressFlag = this.onPressFlag.bind(this)
   this.selectCountry = this.selectCountry.bind(this)
   this.state = {
       cca2: DeviceInfo.getDeviceCountry()
   };
 }
   static  navigationOptions= {
           headerStyle: {
           backgroundColor: '#5a0fb4',
           elevation: 1},
           headerTintColor: 'white'
      }




    componentDidMount(){
         this.setState({
             pickerData: this.refs.phone.getPickerData()
         })
     }

     onPressFlag(){
         this.refs.countryPicker.openModal()
     }

     selectCountry(country){
         this.refs.phone.selectCountry(country.cca2.toLowerCase())
         this.setState({cca2: country.cca2})
         console.log("phone",this.state.callingCode,"country",country);
     }

submit=()=>{
   console.log("phone",this.state.callingCode,"country",country);
}


  render() {
    let dataAll = this.state.dataAll;
    let context = this;
    return (
      <View style={{flex:1}}>

         <View style={styles.container}>
           <View style={{alignItems:'center', marginTop:(Screen.height/100)*10}}>
             <Text style={{fontSize:22,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro'}}>Enter Mobile Number</Text>
                    <Text style={{color:'#b7b7b7',fontSize:16,fontWeight:'600',fontFamily:'din round pro',marginTop:(Screen.height/100)*2}}>Mobile Number</Text>
           </View>


         <View style={styles.containerPhone }>
           <View style={{flex: 0.2,height:40}}>
               <PhoneInput
                   ref='phone'
                   onPressFlag={this.onPressFlag}
               />
               <CountryPicker
                   ref='countryPicker'
                   onChange={(value)=> this.selectCountry(value)}
                   translation='eng'
                   cca2={this.state.cca2}
               >
                 <View></View>
               </CountryPicker>
           </View>
            <View style={{flex: 0.8}}>
               <View style={styles.inputContainer}>
                 <TextInput
                   autoCapitalize='none'
                   autoCorrect={false}
                   underlineColorAndroid='transparent'
                   style={{flex:1,fontSize:17,fontWeight:'700',color:'white',fontFamily:'din round pro',}}
                   onChangeText={(mobile) => this.setState({mobile})}
                 />
               </View>
            </View>
         </View>
       <TouchableOpacity onPress={()=>this.submit()} style={{marginTop:(Screen.height/100)*15,alignItems:'center',justifyContent:'center',marginVertical:10,marginHorizontal:10,padding:15,backgroundColor:'#ffffff',borderWidth:1,borderColor:'transparent',borderRadius:5,}}>
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

  containerPhone: {

      alignItems: 'center',
      paddingLeft:10,
      paddingRight:10,
      marginHorizontal:50,
      flexDirection: 'row',
      height:80,

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

  }
});

const mapStateToProps=({Signup})=>{
  const {mobile}=Signup
  return{
    mobile
  }
}
export default connect(mapStateToProps,{SignupUpdate})(EnterPhoneNumber);
