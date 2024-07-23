import { Image, StyleSheet, Platform, Text } from "react-native";

import {
  ParallaxScrollView,
  CustomText,
  CustomView,
} from "@/shared";
import { Link, Stack } from "expo-router";

export default function Home() {
  return (
    
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/shared/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <Stack.Screen options={{ title: "Overview" }} />
      <Link href="/modal">Present modal</Link>
      
      <CustomView style={styles.stepContainer}>
        <CustomText type="subtitle">Step 1: Try it</CustomText>
        <CustomText>
          Edit{" "}
          <CustomText>app/(tabs)/index.tsx</CustomText>{" "}
          to see changes. Press{" "}
          <CustomText type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </CustomText>{" "}
          to open developer tools.
        </CustomText>
      </CustomView>
      <CustomView style={styles.stepContainer}>
        <CustomText type="subtitle">Step 2: Explore</CustomText>
        <CustomText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </CustomText>
      </CustomView>
      <CustomView style={styles.stepContainer}>
        <CustomText type="subtitle">Step 3: Get a fresh start</CustomText>
        <CustomText>
          When you're ready, run{" "}
          <CustomText type="defaultSemiBold">npm run reset-project</CustomText>{" "}
          to get a fresh <CustomText type="defaultSemiBold">app</CustomText>{" "}
          directory. This will move the current{" "}
          <CustomText type="defaultSemiBold">app</CustomText> to{" "}
          <CustomText type="defaultSemiBold">app-example</CustomText>.
        </CustomText>
      </CustomView>
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
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
