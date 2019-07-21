import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Constants } from "expo";
import CheckerForm from './Components/CheckerForm';
import TemperatureInput from './Components/TemperatureInput';
import CheckButton from './Components/CheckButton';

export default class App extends React.Component {
  handleFluCheck =() => {
    console.log('Test')
  }
  render(){
    //const temperature ='81'
  return (
    <View style={styles.container}>
      <Text>Flu-Checker</Text>
      <Text>Have you had fever over the last five days?</Text>
       <CheckerForm/>
      <Text>Temperature Measurement</Text>
        <TemperatureInput placeholder='Enter your temperature'/>
      <Text>Have you had Cough?</Text>
       <CheckerForm/>
      <CheckButton onPress={this.handleFluCheck}/>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 10,
    fontWeight: "bold",
  },
 button: {
    marginTop: 10,
    minWidth: 100,
    borderWidth: 2,
    borderRadius: 3
  },
});
