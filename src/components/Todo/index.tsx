import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import TrashIcon from "@assets/Trash";
import { Checkbox } from "@components/Checkbox";

import { todoStyles } from "./styles";

export type TodoType = {
  id?: number;
  isCompleted?: boolean;
  description: string;

  createdAt?: string;
};

type TodoProps = {
  onPressCheckbox: () => void;
  onPressDelete: () => void;
} & TodoType;

export function Todo({
  isCompleted,
  description,
  onPressCheckbox,
  onPressDelete,
}: TodoProps) {
  return (
    <View style={todoStyles.container}>
      {/* Checkbox */}
      <Checkbox isChecked={isCompleted} onPress={onPressCheckbox} />

      <Text
        style={[
          todoStyles.description,
          {
            color: isCompleted ? "#808080" : "#F2F2F2",
            textDecorationLine: isCompleted ? "line-through" : "none",
          },
        ]}
      >
        {description}
      </Text>

      {/* Delete todo button */}
      <TouchableOpacity
        onPress={onPressDelete}
        style={[todoStyles.deleteButton, { width: 32, height: 32 }]}
      >
        <TrashIcon fill="#808080" />
      </TouchableOpacity>
    </View>
  );
}
