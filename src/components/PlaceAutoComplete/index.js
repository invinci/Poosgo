

import React,{Component}  from 'react';

//import  {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {View} from 'react-native';


export default class PlaceAutoComplete extends Component{
constructor(props){
  super(props);
}
  render() {
    const {onPress}=this.props;
    return (
      <View style={{flex:1}}>

      {
        /*<GooglePlacesAutocomplete
          placeholder='Enter Location'
          minLength={2}
          autoFocus={false}
          returnKeyType={'search'}
          fetchDetails={true}
          listViewDisplayed='auto'
          renderDescription={(row) => row.description}
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                  console.log(data);
                  console.log(details);
                }}
          styles={{
            textInputContainer: {
              backgroundColor: 'red',
              width:300,
              height:60
            },
            textInput: {
              height: 50,
              color: 'blue',
              fontSize: 16,
              borderRadius:0

            },
            listView:{
              width:300,
              height:60,
              backgroundColor:'green'
            },
            predefinedPlacesDescription: {
              color: '#1faadb'
            },
          }}

          query={{
                  // available options: https://developers.google.com/places/web-service/autocomplete
                  key: 'AIzaSyA5m8U4SYKBhV4IldQs409Jv28L3avWYtM',
                  language: 'en', // language of the results
                  types: '(cities)', // default: 'geocode'
                }}

                currentLocation={false}

     />
   */}
     </View>
    );
  }
}
