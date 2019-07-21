import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class TemperatureInput extends React.Component {
  state = {
    text: '',
  }
  handleTextChange = (text) => {
     this.setState({text});
  }
  render(){
    return(
      <TextInput
          placeholder={this.props.placeholder}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyle}
         keyboardType={'numeric'}
         onChangeText={this.handleTextChange}
         value={text}
      />
    )
  }
}

const styles = StyleSheet.create({

  TextInputStyle: {
    textAlign: "center",
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#009688",
    marginBottom: 10
  },
});
