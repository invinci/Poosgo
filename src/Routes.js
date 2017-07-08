import React,{Component} from 'react';

import {

  StackNavigator,


} from 'react-navigation';
import {View,Text,Platform} from 'react-native';


import Starter from 'app/containers/Starter'
import Login from 'app/containers/Login'
import EnterEmail from 'app/containers/Signup/EnterEmail'
import EnterDateOfBirth from 'app/containers/Signup/EnterDateOfBirth'
import EnterUsername from 'app/containers/Signup/EnterUsername'
import EnterFnameLname from 'app/containers/Signup/EnterFnameLname'
import EnterPassword from 'app/containers/Signup/EnterPassword'
import EnterPhoneNumber from 'app/containers/Signup/EnterPhoneNumber'

const Signup=StackNavigator({
 EnterFnameLname:{
   screen:EnterFnameLname
 },
 EnterDateOfBirth:{
   screen:EnterDateOfBirth,

 },
 EnterUsername:{
   screen:EnterUsername
 },
 EnterPassword:{
   screen:EnterPassword
 },
 EnterEmail:{
   screen:EnterEmail
 },
 EnterPhoneNumber:{
  screen: EnterPhoneNumber
 }
},

{
  headerMode: 'none',


})


const Routes = StackNavigator({
  Starter: {
    screen: Starter,
    navigationOptions: {
      header: null,

    },
  },
  Login:{
    screen:Login,
  },
  Signup:{
    screen:Signup
  }


},
{
  headerMode: 'screen',
  
});




export default Routes;
