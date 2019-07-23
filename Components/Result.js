import React from "react";
import { Text, View } from 'react-native';

export default function Result({ result }){
  return (
     <View>
       <Text>Flu Status</Text>
       <Text>{result}</Text>
     </View>

  )
}
