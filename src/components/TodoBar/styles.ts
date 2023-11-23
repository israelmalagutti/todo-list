import { StyleSheet } from "react-native";

export const todoBarStyles = StyleSheet.create({
  container: {
    width: "100%",

    flexDirection: "row",
    gap: 4,
  },

  input: {
    color: "#F2F2F2",
    backgroundColor: "#262626",
    flex: 1,

    paddingVertical: 12,
    paddingHorizontal: 16,

    borderWidth: 1,
    borderRadius: 6,
  },

  addButton: {
    backgroundColor: "#1E6F9F",

    width: 52,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 6,
  },
});
