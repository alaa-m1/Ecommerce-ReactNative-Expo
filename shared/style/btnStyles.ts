import { StyleSheet } from "react-native";

export const btnStyles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  PressableButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  PressableButtonPrimary: {
    backgroundColor: "#2196F3",
  },
  PressableButtonSecondary: {
    backgroundColor: "#F194FF",
  }
});
