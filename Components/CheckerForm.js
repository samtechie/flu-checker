import React from "react";
import { View } from 'react-native';
import { CheckBox } from "react-native-elements";

export default class CheckerForm extends React.Component {
   state = {
   checkedId: -1,
   checkboxes: [{id: "yes", title: "Yes"}, {id: "no", title: "No"}]
 }

 handleCheck = (checkedId) => {
  const { onCheck } = this.props;

  if (!checkedId) return;

  onCheck(checkedId);

   this.setState({checkedId})
 }

 render() {
   const { checkboxes, checkedId } = this.state
   return (
     <View>
       {checkboxes.map(checkbox => (
         <CheckBox
           key={checkbox.id}
           center
           title={checkbox.title}
           checked={checkbox.id == checkedId}
           onPress={() => this.handleCheck(checkbox.id)}
         />
        )) }
     </View>
   )
 }

}

