import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import {
  Collapsible,
  ExternalLink,
  CustomText,
  ParallaxScrollView,
  CustomView,
} from "@/shared";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <CustomView style={styles.titleContainer}>
        <CustomText type="title">Explore  1</CustomText>
      </CustomView>
      <CustomText>
        This app includes example code to help you get started.
      </CustomText>
      <Collapsible title="File-based routing">
        <CustomText>
          This app has two screens:{" "}
          <CustomText type="defaultSemiBold">app/(tabs)/index.tsx</CustomText>{" "}
          and{" "}
          <CustomText type="defaultSemiBold">app/(tabs)/explore.tsx</CustomText>
        </CustomText>
        <CustomText>
          The layout file in{" "}
          <CustomText type="defaultSemiBold">app/(tabs)/_layout.tsx</CustomText>{" "}
          sets up the tab navigator.
        </CustomText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <CustomText type="link">Learn more</CustomText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <CustomText>
          You can open this project on Android, iOS, and the web. To open the
          web version, press <CustomText type="defaultSemiBold">w</CustomText>{" "}
          in the terminal running this project.
        </CustomText>
      </Collapsible>
      <Collapsible title="Images">
        <CustomText>
          For static images, you can use the{" "}
          <CustomText type="defaultSemiBold">@2x</CustomText> and{" "}
          <CustomText type="defaultSemiBold">@3x</CustomText> suffixes to
          provide files for different screen densities
        </CustomText>
        <Image
          source={require("@/shared/assets/images/react-logo.png")}
          style={{ alignSelf: "center" }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <CustomText type="link">Learn more</CustomText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <CustomText>
          Open <CustomText type="defaultSemiBold">app/_layout.tsx</CustomText>{" "}
          to see how to load{" "}
          <CustomText style={{ fontFamily: "NotoKufiArabic" }}>
            custom fonts such as this one.
          </CustomText>
        </CustomText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <CustomText type="link">Learn more</CustomText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <CustomText>
          This template has light and dark mode support. The{" "}
          <CustomText type="defaultSemiBold">useColorScheme()</CustomText> hook
          lets you inspect what the user's current color scheme is, and so you
          can adjust UI colors accordingly.
        </CustomText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <CustomText type="link">Learn more</CustomText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <CustomText>
          This template includes an example of an animated component. The{" "}
          <CustomText type="defaultSemiBold">components/Icon.tsx</CustomText>{" "}
          component uses the powerful{" "}
          <CustomText type="defaultSemiBold">
            react-native-reanimated
          </CustomText>{" "}
          library to create a waving hand animation.
        </CustomText>
        {Platform.select({
          ios: (
            <CustomText>
              The{" "}
              <CustomText type="defaultSemiBold">
                components/ParallaxScrollView.tsx
              </CustomText>{" "}
              component provides a parallax effect for the header image.
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
