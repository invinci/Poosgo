/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  KeyboardAvoidingView,
  Image,
  TouchableHighlight,
  ScrollView,
  Platform,
  ActivityIndicator
} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, SocialIcon } from 'react-native-elements';
import {connect} from 'react-redux';
import InputWithIcon  from 'app/components/InputWithIcon';
import Loading from 'app/components/Loading';
import Icon from 'react-native-vector-icons/Ionicons';
//import {Actions} from 'react-native-router-flux';
import {forgotUpdate,forgotPassword} from './ForgotActions'
import styles from './style';

//import Hr from 'react-native-hr'
const {width,height}=Dimensions.get('window');

 class ForgotPassword extends Component {
        static navigationOptions= {
                header: null
            }

   setFocus(event, heightUp){

     this.refs.scrollView.scrollTo({y: height-heightUp, animated: true});
   }
handleSend=(email)=>{
        let intRegex = /[0-9 -()+]+$/;
       let eml = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
       if(intRegex.test(email)) {

           if((email.length < 9) || (!intRegex.test(email)))
        {
             alert('Invalid Mobile Number');
             //return false;
        }

        }   else if (eml.test(email) == false) {
                alert("Invalid Email ID");

         }else{

            this.props.forgotPassword({email});


         }



}
  render() {
const {email,password,loading,forgotUpdate,navigation}=this.props;
console.log("loading",loading);
    return (



        <ScrollView  ref="scrollView" contentContainerStyle={{flex:1,  justifyContent: 'center'}}>

       <View style={styles.container}>
          <Image resizeMode="stretch" style={styles.canvas} source={require('./Images/Logo/logo.png')} />
        </View>
        <View style={styles.icon}>
         <TouchableHighlight style={{flex:1}} onPress={()=>navigation.goBack(null)} underlayColor={'transparent'}>
         <Icon name="md-arrow-round-back" size={30} color="#FFFFFF"   />
         </TouchableHighlight>
         </View>
        <View style={styles.headingMain}>
            <View style={styles.subHeadingMain}>
              <View style={{alignSelf:'center'}}>
                  <Text style={styles.headingText}>Forgot Password? </Text>
              </View>

              <View style={styles.subHeadingMainTwo}>
                  <Text style={styles.headingTextTwo}>We just need your registered </Text>
                  <Text style={styles.headingTextThree}>Mobile No. </Text>
              </View>
              <View style={styles.subHeadingMainThree}>
                  <Text style={styles.headingTextTwo}>or </Text>
                  <Text style={styles.headingTextThree}>Email Id </Text>
                  <Text style={styles.headingTextTwo}>to send your password </Text>
              </View>
              <View style={styles.subHeadingMainThree}>
                  <Text style={styles.headingTextTwo}>reset instruction. </Text>
              </View>
            </View>
            {loading?
             <View style={{position:'relative',bottom:180,left:0}}>
               <ActivityIndicator  color={'#FF57A5'} />
             </View>
             :null
             }
          <View style={styles.inputTextMain}>
            <View style={styles.inputTextSub}>
                  <InputWithIcon
                    iconName={ require('./Images/mail/mail.png')}
                    value={email}
                    secureTextEntry={false}
                    placeholder="Email or Mobile No."
                    onFocus={(event) => {
                      this.setFocus(event, (height-100));
                      }}
                      onBlur={(event) => {
                        this.setFocus(event, height);
                        }}
                    keyboardType="default"
                    placeholderTextColor="#333333"
                   onChangeText={(text)=>forgotUpdate({prop:'email',value:text})}
                  />
              </View>

              <View style={styles.btnMain}>
              <Button
                buttonStyle={styles.btnStyle}
                textStyle={styles.btnTextStyle}
                title={`Send`}
                onPress={()=>this.handleSend(email)}
              />

              </View>
              <View style={{height:20}}/>
          </View>
            </View>

            </ScrollView>



    );
  }
}

const mapStateToProps=({Forgot})=>{
  const {email,loading,success}=Forgot;
return{
    email,
    loading,
    success

}

}
export default connect(mapStateToProps,{forgotUpdate,forgotPassword})(ForgotPassword);
