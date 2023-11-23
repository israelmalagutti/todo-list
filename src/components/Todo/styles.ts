import { StyleSheet } from "react-native";

export const todoStyles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",

    minHeight: 56,
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",

    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    gap: 8,

    borderRadius: 8,
  },

  description: {
    flexGrow: 1,
  },

  deleteButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
