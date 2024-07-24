import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import {
  Collapsible,
  ExternalLink,
  CustomText,
  ParallaxScrollView,
  CustomView,
} from "@/shared";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <CustomView style={styles.titleContainer}>
        <CustomText type="title">Features</CustomText>
      </CustomView>
      <CustomText>
        Buy purchasing this product, you will get:
      </CustomText>
      <Collapsible title="3 years guarantee">
        <CustomText>
        Guarantee info:{" "}
          <CustomText type="defaultSemiBold">info 11111</CustomText>{" "}
          and{" "}
          <CustomText type="defaultSemiBold">info 2222</CustomText>
        </CustomText>
        <CustomText>
          The layout file in{" "}
          <CustomText type="defaultSemiBold">app/(tabs)/_layout.tsx</CustomText>{" "}
          sets up the tab navigator.
        </CustomText>
        <ExternalLink href="https://google.com">
          <CustomText type="link">Learn more</CustomText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="24/24 online support">
        <CustomText>
          You can open this project on Android, iOS, and the web. To open the
          web version, press <CustomText type="defaultSemiBold">w</CustomText>{" "}
          in the terminal running this project.
        </CustomText>
        <Image
          source={require("@/shared/assets/images/react-logo.png")}
          style={{ alignSelf: "center" }}
        />
        {Platform.select({
          ios: (
            <CustomText>
              The{" "}
              <CustomText type="defaultSemiBold">
                components/ParallaxScrollView.tsx
              </CustomText>{" "}
              Only on ISO
            </CustomText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
