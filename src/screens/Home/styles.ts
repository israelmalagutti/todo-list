import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    height: "100%",
    position: "relative",

    alignItems: "center",

    paddingTop: 16,
  },

  backgroundColor1: {
    backgroundColor: "#0D0D0D",
    position: "absolute",
    left: 0,
    top: 0,

    width: "100%",
    height: "100%",
  },

  backgroundColor2: {
    backgroundColor: "#1A1A1A",
    position: "absolute",
    left: 0,
    bottom: 0,

    width: "100%",
    height: "84%",
  },

  contentContainer: {
    paddingHorizontal: 24,
    gap: 32,
  },
});

export const logoStyles = StyleSheet.create({
  container: {
    paddingVertical: 40,
  },

  text: {
    color: "#4EA8DE",
    fontSize: 48,
    fontWeight: "900",
  },
});

export const todoListStyles = StyleSheet.create({
  container: {
    flex: 1,

    gap: 8,

    borderColor: "#808080",
  },
});
