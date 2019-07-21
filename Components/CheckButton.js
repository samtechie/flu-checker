import React from "react";
import { Button } from "react-native-elements";

export default function CheckButton({ onPress }){
  return (
     <Button
      onPress={onPress}
      title="Check"
    />

  )
}
