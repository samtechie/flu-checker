import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class TemperatureInput extends React.Component {
  state = {
    text: ''
  }

  handleTextChange = (text) => {
     this.setState({text});
  }
  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) return;

    onSubmit(text);
    this.setState({ text: '' });
  };
  render(){
    const { placeholder } = this.props;
    const { text } = this.state;
    return(
      <TextInput
          placeholder={this.props.placeholder}
          value={text}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyle}
         keyboardType={'numeric'}
         onChangeText={this.handleTextChange}
         onSubmitEditing={this.handleSubmitEditing}
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
