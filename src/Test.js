import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  Platform,
  Image,
  StyleSheet,
  TextInput
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';


type State = {
    keyboardUp: boolean,
}

const { width }= Dimensions.get('window');
 class Test extends Component {
  constructor(props){
    super(props);
    this.state={
        selected:''
    }
  }
   state: State = {};
  componentWillMount(){
      if (Platform.OS==='android') {
          this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
          this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
      }
  }
  componentWillUnmount(){
       this.keyboardDidShowListener.remove();
       this.keyboardDidHideListener.remove();
   }
   keyboardWillShow = () => {
       this.setState({ keyboardUp: true });
   };

   keyboardWillHide = () => {
       this.setState({ keyboardUp: false });
   };
   onPress=(selected)=>{
     console.log("selected",selected);
     this.setState({selected:selected})

   }
   iconColor=()=>{
     return 'red'
     console.log(this.state.selected);
     return 'red'
   }
  render(){
    const {first,second,third,four,five,dispatch}=this.props;
    console.log(first,second,third,four,five,"ghh");
    return(

<View style={{flex:1,backgroundColor:'green'}}>

            {this.props.children}

      <View style={[style.tabbarView,this.state.keyboardUp && style.hidden]}>
      <TouchableOpacity style={{flex:1}} onPress={()=>dispatch({type:'TAB_ONE'})}>
      <View style={style.iconContainer}>
      <Icon name="ios-book" color={first?'red':'blue'}  size={30}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{flex:1}} onPress={()=>dispatch({type:'TAB_TWO'})}>
       <View style={style.iconContainer}>
       <Icon name="ios-book" color={second?'red':'blue'} size={30}/>
       </View>
       </TouchableOpacity>
       <View style={{flex:1,backgroundColor:'white',margin:10}}/>
        <TouchableOpacity style={{flex:1}}  onPress={()=>dispatch({type:'TAB_THREE'})}>
       <View style={style.iconContainer}>
       <Icon name="ios-book" color={third?'red':'blue'}  size={30}/>
       </View>
       </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={()=>dispatch({type:'TAB_FIVE'})} >
       <View style={style.iconContainer}>
       <Icon name="ios-book" color={five?'red':'blue'} size={30}/>
       </View>
       </TouchableOpacity>
       </View>

         <View style={[style.imageContainer,this.state.keyboardUp && style.hidden]}>
          <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={()=>dispatch({type:'TAB_FOUR'})}>
         <Image   style={[style.image,this.state.keyboardUp && style.hideimage]}   source={require('../Testimages/baby.jpg')}/>
         </TouchableOpacity>
          </View>

       </View>

    )
  }
}
const style=StyleSheet.create({
tabbarView:{
  height:80,
  width:width,
  backgroundColor:'white',
  position:'absolute',
  bottom:0,
  right:0,
  left:0,
  flexDirection:'row',
  borderWidth:1,
  borderColor:'red',
  zIndex:2

},
iconContainer:{
  flex:1,
  backgroundColor:'white',
  alignItems:'center',
  justifyContent:'center'
},
imageContainer:{
  height:100,
  width:100,
  borderRadius:50,
  position:'absolute',
  bottom:5,
  left:width/2-50,
  backgroundColor:'yellow',
  alignItems:'center',
  justifyContent:'center',
  borderWidth:1,
  borderColor:'red',
  zIndex:2


},
image:{
  width: 90,
   height: 90,
   borderRadius:50
},
hidden: {
       height: 0,
   },
hideimage:{
     height: 0,
     width:0
   }


})
const mapStateToProps=({Tab})=>{
  const {first,second,third,four,five}=Tab;
return{
    first,
    second,
    third,
    four,
    five
}

}
export default connect(mapStateToProps,null)(Test);
