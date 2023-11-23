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

export const listInfoStyles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between" },

  buttonContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: { fontSize: 14, fontWeight: "700" },
});
