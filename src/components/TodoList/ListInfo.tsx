import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Indicator } from "@components/Indicator";
import { TodoType } from "@components/Todo";

import { listInfoStyles } from "./styles";

type ListInfoProps = {
  todos: TodoType[];
  filter: "all" | "done";

  setFilter: (filter: "all" | "done") => void;
};

export function ListInfo({ todos, filter, setFilter }: ListInfoProps) {
  const completedTodos = todos.filter(todo => todo.isCompleted === true);

  function handlePress(type: "all" | "done") {
    setFilter(type);
  }

  return (
    <View style={listInfoStyles.container}>
      <TouchableOpacity
        onPress={() => handlePress("all")}
        style={listInfoStyles.buttonContainer}
      >
        <Text
          style={[
            listInfoStyles.buttonText,
            {
              color: "#4EA8DE",
              borderBottomWidth: filter === "all" ? 1 : 0,
              borderColor: "#808080",
            },
          ]}
        >
          All todos
        </Text>

        <Indicator numberOfTodos={todos.length} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handlePress("done")}
        style={listInfoStyles.buttonContainer}
      >
        <Text
          style={[
            listInfoStyles.buttonText,
            {
              color: "#8284FA",
              borderBottomWidth: filter === "done" ? 1 : 0,
              borderColor: "#808080",
            },
          ]}
        >
          Done
        </Text>

        <Indicator numberOfTodos={completedTodos.length} />
      </TouchableOpacity>
    </View>
  );
}
