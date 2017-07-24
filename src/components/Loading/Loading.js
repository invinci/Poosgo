import React from 'react';
import { ActivityIndicator,Dimensions,View,Text } from 'react-native';
const { width, height }=Dimensions.get('window');
  const Loading =(props)=>{
console.log(width,height);
    return (
			<View style={style.loading}>
	      <ActivityIndicator style={{flex:1}} color={'#FF57A5'} />
				</View>
    );
}
const style={
loading:{
	backgroundColor:'transparent',
	position: 'absolute',
	left: 0,
	right: 0,
	bottom: 100,
	width:70,
	height:70,
	alignItems: 'center',
	justifyContent: 'center',

}

}
export default Loading;
