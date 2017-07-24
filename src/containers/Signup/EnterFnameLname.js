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

let     Screen = require('Dimensions').get('window'),
    {height, width} = Dimensions.get('window');
    //back_icon = require('image!back_icon');
    //NavigationBar = require('react-native-navbar');

class EnterFnameLname extends Component {
  constructor(props){
    super(props);
    this.state={
      fname:'',lname:'',error: ''
    }
    this.setFname= this.setFname.bind(this);
    this.setLname= this.setLname.bind(this);
  }


  static  navigationOptions= {
    headerStyle: {
    backgroundColor: '#5a0fb4',
    elevation: 1},
    headerTintColor: 'white'
  }


  check=()=>{
    const {navigate}=this.props.navigation;
    const {lname,fname}=this.state;
    if(!fname){
      this.setState({error:'Please Provide First Name'})
    }else if(!lname){
      this.setState({error:'Please Provide Last name'});

    }else {
      this.props.SignupUpdate({prop:'Fname',value:fname})
      this.props.SignupUpdate({prop:'Lname',value:lname});
      this.setState({fname:'',lname:''});
      navigate('EnterDateOfBirth')
    }
  }

  setFname(fname){
    if(!fname){
      this.setState({error:'Please Provide First Name'})
       this.setState({fname: ''});
    }else {
      this.setState({fname});
      this.setState({error:''});
    }
  }

  setLname(lname){
   if(!lname){
      this.setState({error:'Please Provide Last name'});
      this.setState({lname : ''});
    }else {
      this.setState({lname});
      this.setState({error:''});
    }
  }

  render() {
    let context = this;
    const {Fname,Lname,SignupUpdate}=this.props;
    console.log(Fname,Lname);
    return (
      <View style={{flex:1}}>

        <View style={styles.container}>
          <View style={{alignItems:'center', marginTop:(Screen.height/100)*5}}>
            <Text style={{fontSize:22,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro'}}>Enter your name</Text>
              <Text style={{fontSize:15,fontWeight:'400',color:'#ffffff',fontFamily:'din round pro',marginTop:5}}>This Will be displayed to other Users</Text>
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,marginTop:(Screen.height/100)*6}}>
            <Text style={{color:'#b7b7b7',fontSize:16,fontWeight:'700',fontFamily:'din round pro'}}>FIRST NAME</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              autoCorrect={false}
              underlineColorAndroid='transparent'
              value={this.state.fname}
              style={{flex:1,fontSize:16,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro'}}
              onChangeText={(text) => this.setFname(text)}
            />
          </View>
          <View style={{marginHorizontal:(Screen.width/100)*10,marginTop:15}}>
            <Text style={{color:'#b7b7b7',fontSize:16,fontWeight:'700',fontFamily:'din round pro'}}>LAST NAME</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              autoCorrect={false}
              underlineColorAndroid='transparent'
              value={this.state.lname}
              style={{flex:1,fontSize:16,fontWeight:'700',color:'#ffffff',fontFamily:'din round pro'}}
              onChangeText={(text) =>this.setLname(text) }
            />
          </View>
          <View style={{height:30,alignItems:'center',justifyContent:'center',marginTop:20}}>
          <Text style={styles.error}>{this.state.error}</Text>
          </View>
          <View style={{alignItems:'center',marginVertical:10}}>
            <Text style={{color:'#b7b7b7',fontSize:16,fontFamily:'din round pro'}}>By tapping Sign Up, you agree to the</Text><View style={{flexDirection:'row'}}><TouchableOpacity><Text style={{color:'#ffffff',fontSize:16,fontFamily:'din round pro'}}> Terms of Service </Text></TouchableOpacity><Text style={{color:'#b7b7b7',fontSize:16,fontFamily:'din round pro'}}>and</Text><TouchableOpacity><Text style={{color:'#ffffff',fontSize:16,fontFamily:'din round pro'}}> Privacy Policy</Text></TouchableOpacity></View>
          </View>
          <TouchableOpacity onPress={()=>this.check()} style={{alignItems:'center',justifyContent:'center',marginTop:(Screen.height/100)*8,marginHorizontal:10,padding:15,backgroundColor:'#ffffff',borderWidth:1,borderColor:'transparent',borderRadius:5,}}
            disabled={this.state.error === '' ? false : true}
            >
            <Text style={{color:'#5a0fb4', fontWeight:'700',fontSize:18,fontFamily:'din round pro'}}>Sign Up & Accept</Text>
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
       marginVertical:4,
       marginHorizontal:(Screen.width/100)*10,
       borderColor:'#b7b7b7',
       height:30,
     },
     android: {
       borderBottomWidth:1,
       marginVertical:4,
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
const {Fname,Lname}=Signup;
      return {
        Fname,
        Lname
      }
}

export default connect(mapStateToProps,{SignupUpdate})(EnterFnameLname);
