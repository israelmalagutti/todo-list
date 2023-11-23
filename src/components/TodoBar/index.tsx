import React, { useCallback, useRef, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

import CircledPlus from "@assets/CircledPlus";

import { todoBarStyles } from "./styles";

type TodoBarProps = {
  onChangeText?: (text: string) => string | void;
  onAddTodo: (value: string) => void;
};

export function TodoBar({ onChangeText, onAddTodo }: TodoBarProps) {
  const [value, setValue] = useState("");
  const [isActive, setActive] = useState<boolean>(false);
  const inputRef = useRef<TextInput>(null);

  const handleTextChange = useCallback(
    (text: string) => {
      setValue(text);
    },
    [onChangeText]
  );

  return (
    <View style={todoBarStyles.container}>
      <TextInput
        ref={inputRef}
        value={value}
        onBlur={() => setActive(false)}
        onFocus={() => setActive(true)}
        onChangeText={text => handleTextChange(text)}
        onSubmitEditing={() => {
          onAddTodo(value);
        }}
        placeholder="Add a new todo"
        placeholderTextColor="#808080"
        keyboardAppearance="dark"
        style={[
          todoBarStyles.input,
          { borderColor: isActive ? "#5E60CE" : "#0D0D0D80" },
        ]}
      />

      <TouchableOpacity
        activeOpacity={0.7}
        style={todoBarStyles.addButton}
        onPress={() => onAddTodo(value)}
      >
        <CircledPlus />
      </TouchableOpacity>
    </View>
  );
}
