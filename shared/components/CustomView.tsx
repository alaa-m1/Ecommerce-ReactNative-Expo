import { View, type ViewProps } from "react-native";

import { useThemeColor } from "../hooks/useThemeColor";

export type CustomViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export const CustomView = ({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: CustomViewProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
};
