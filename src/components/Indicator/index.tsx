import React from "react";
import { Text, View } from "react-native";

import { indicatorStyles } from "./styles";

type IndicatorProps = {
  numberOfTodos: number;
};

export function Indicator({ numberOfTodos }: IndicatorProps) {
  return (
    <View style={indicatorStyles.container}>
      <Text style={indicatorStyles.text}>{numberOfTodos}</Text>
    </View>
  );
}
