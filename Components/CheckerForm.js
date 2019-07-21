import React from "react";
import { View } from 'react-native';
import { CheckBox } from "react-native-elements";

export default class CheckerForm extends React.Component {
   render(){

     return (
      <View>
        <CheckBox
        center
        title='Yes'
       checked={false}
      />
      <CheckBox
        center
        title='No'
       checked={true}
     />
    </View>

     )
   }

}
