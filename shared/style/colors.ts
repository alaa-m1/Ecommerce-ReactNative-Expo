/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const colors = {
  light: {
    bg: "#eaeaea",
    headerBg: "#ffffff",
    avatarBg: "#6da0d3",
    headings: "#1976d2",
    text: "#272727",
    card: "#aaa",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    primary: "#0f1696",
    secondary: "#242bb6",
    shadow: "#45505f",
    error: "#d32f2f",
    warning: "#ed6c02",
    success: "#2e7d32",
    info: "#0288d1",

  },
  dark:{
    bg: "#272727",
    headerBg: "#00000",
    avatarBg: "#618fbe",
    headings: "#196fc4",
    text: "#eaeaea",
    card: "#aaa",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,

    primary: "#0f1696",
    secondary: "#242bb6",
    shadow: "#45505f",
    error: "#d32f2f",
    warning: "#ed6c02",
    success: "#2e7d32",
    info: "#0288d1",
    
  }
};