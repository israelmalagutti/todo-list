import { StyleSheet } from "react-native";

export const todoListStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export const emptyListStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    gap: 16,
  },

  textBold: {
    color: "#808080",

    textAlign: "center",

    fontSize: 14,
    fontWeight: "700",
  },

  text: {
    color: "#808080",

    textAlign: "center",

    fontSize: 14,
  },
});
