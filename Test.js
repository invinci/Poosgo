import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class Test extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  render(){
    return (
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
        
          dateInput: {
            marginLeft: 36,
            borderWidth: 0,
            borderBottomWidth: 1,
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}