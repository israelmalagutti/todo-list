import React from "react";
import { Image, Text, View } from "react-native";

import { emptyListStyles } from "./styles";

export function EmptyList() {
  return (
    <View style={emptyListStyles.container}>
      <Image source={require("@assets/Clipboard.png")} />

      <View>
        <Text style={emptyListStyles.textBold}>
          You don't have tasks registered yet
        </Text>

        <Text style={emptyListStyles.text}>
          Create tasks and organize your to-do items
        </Text>
      </View>
    </View>
  );
}
