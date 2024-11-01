import { Image, StyleSheet } from "react-native";

import {
  ParallaxScrollView,
  CustomText,
  CustomView,
} from "@/shared";
import { Link, Stack } from "expo-router";
import { useAppStyles } from "@/shared/style";

export default function HomeScreen() {
  const appStyles=useAppStyles();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/shared/assets/images/partial-react-logo.png")}
          style={appStyles.reactLogo}
        />
      }
    >
      <Stack.Screen options={{ title: "Overview" }} />
      <Link href="/modal">Present modal</Link>

      <CustomView style={styles.stepContainer}>
        <CustomText type="subtitle">Steps to buy a product</CustomText>
        <CustomText>
          Search for your favourite product
          <CustomText>- select your product and quantity</CustomText> Enter your
          bank account
        </CustomText>
      </CustomView>
      <Link href="/">Home</Link>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
