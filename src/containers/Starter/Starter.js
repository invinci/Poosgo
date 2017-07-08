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
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Modal,
  Linking,
  Platform,

} from 'react-native';
//import SafariView from 'react-native-safari-view';


//import { Button, SocialIcon } from 'react-native-elements';
//import {connect} from 'react-redux';

import styles from './style';
//import InputWithIcon  from 'app/components/InputWithIcon'

//import Loading from 'app/components/Loading';
//import Icon from 'react-native-vector-icons/Ionicons';
//const {width,height}=Dimensions.get('window');
//import {loginUpdate,loginChecking,socialLoginSuccess,socialLoginFail} from './LoginAction';



let  logo = require('./images/logo.png'),
    Screen = require('Dimensions').get('window'),
    {height, width} = Dimensions.get('window');




 class Login extends Component {

  render() {

const {navigate}=this.props.navigation;

    return (
      <View style={styles.container}>
             <View style={styles.imageContainer}>
             <Image source={logo} resizeMode='contain' style={styles.image}/>
             </View>
             <TouchableOpacity onPress={()=>navigate('Login')} style={styles.loginContainer}>
               <Text style={styles.loginText}>LOG IN</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>navigate('Signup')} style={styles.signupContainer}>
               <Text style={styles.signupText}>SIGN UP</Text>
             </TouchableOpacity>
           </View>
    );
  }
}




export default Login
