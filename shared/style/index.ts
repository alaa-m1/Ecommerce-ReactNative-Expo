import { StyleSheet, Platform, StatusBar, useColorScheme } from "react-native";
import { colors } from "./colors";
import { HEADER_HEIGHT } from "../constants";

export const useAppStyles = () => {
  const theme = useColorScheme() ?? 'light';
  const appStyles = StyleSheet.create({
    AppContainer: {
      // padding: 35,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      flex: 1,
      backgroundColor: colors[theme].bg,
    },
    inputStyling: {
      height: 50,
      backgroundColor: colors[theme].text,
      marginVertical: 10,
      marginHorizontal: 20,
    },
    headerLogo: {
      height: HEADER_HEIGHT,
      width: "100%",
      bottom: 0,
      left: 0,
      position: "absolute",
    },
  });
  return appStyles
};

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
  },
});
