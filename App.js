import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Constants } from "expo";
import CheckerForm from './Components/CheckerForm';
import TemperatureInput from './Components/TemperatureInput';
import CheckButton from './Components/CheckButton';
import Result from './Components/Result'

export default class App extends React.Component {
  state = {
    fever: '',
    cough: '',
    temperature: 0,
    displayResult: false,
    result: ''
  }
  handleFluCheck =() => {
    const { temperature, cough, fever } = this.state;
     this.setState({displayResult: true})
     if(temperature > 38 && cough === 'yes' && fever === 'yes'){
       this.setState({result:'Yes'})
     }else{
       this.setState({ result: 'No' });
     }

  }
  handleTemperatureInput =(text) =>{
     this.setState({temperature: parseInt(text)})
     console.log(text + " is your temperature");
  }

  handleCoughCheck =(checkedId) => {
      this.setState({cough: checkedId})
      console.log(checkedId + " for cough");
  }
  handleFeverCheck =(checkedId) =>{
     this.setState({ fever: checkedId });
      console.log(checkedId + " for fever");
  }
  render(){
    const {displayResult,result } = this.state
  return (

  <View style={styles.container}>
      <Text>Flu-Checker</Text>
         <Text>Have you had fever over the last five days?</Text>
      <CheckerForm onCheck={this.handleFeverCheck}/>
      <Text>Temperature Measurement</Text>
         <TemperatureInput
          placeholder="Enter your temperature"
          onSubmit={this.handleTemperatureInput}
         />
      <Text>Have you had Cough?</Text>
        <CheckerForm onCheck={this.handleCoughCheck}/>
      <CheckButton onPress={this.handleFluCheck} />
      {displayResult ? (
          <Result result={result}

          />
        ) : (
           <View>
             <Text>Check if you have flu</Text>
           </View>
        )}
    </View>)
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
