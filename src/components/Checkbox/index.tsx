import React from "react";
import { TouchableOpacity } from "react-native";

import CheckIcon from "@assets/Check";

import { checkboxStyles } from "./styles";

type CheckboxProps = {
  isChecked: boolean;

  onPress: () => void;
};

export function Checkbox({ isChecked, onPress }: CheckboxProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        checkboxStyles.checkbox,
        {
          backgroundColor: isChecked ? "#5E60CE" : "transparent",
          borderColor: isChecked ? "#5E60CE" : "#4EA8DE",
        },
      ]}
    >
      {isChecked && <CheckIcon />}
    </TouchableOpacity>
  );
}
