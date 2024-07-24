import { Image, StyleSheet, Platform, Text } from "react-native";

import {
  AnimatedIcon,
  ParallaxScrollView,
  CustomText,
  CustomView,
} from "@/shared";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#fff", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/shared/assets/images/logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <CustomView style={styles.titleContainer}>
        <CustomText type="title">Phoenix Al-Ankaa</CustomText>
        <br />
        <Text>Phoenix E-Commerce</Text>
        {/* <MaterialIcons name="close" color="#fff" size={22} /> */}
        <AnimatedIcon icon={"v 1.0"} />
      </CustomView>
      <Link href="/collection/col2">Navigate to nested collection</Link>

      <Link
        href="/products/5"
        // href={{
        //     pathname: '/products/[id]',
        //     params: { id: '5' },
        //   }}
      >
        product 5
      </Link>
      <CustomView style={styles.stepContainer}>
        <CustomText type="subtitle">Features we provide</CustomText>
        <CustomText>
          Accounting system <CustomText>support</CustomText> multiple suppliers
          <CustomText type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </CustomText>{" "}
          to open developer tools.
        </CustomText>
      </CustomView>
      <CustomView style={styles.stepContainer}>
        <CustomText type="subtitle">Support</CustomText>
        <CustomText>
          ISO -Android
        </CustomText>
      </CustomView>
      <CustomView style={styles.stepContainer}>
        <CustomText type="subtitle">Client Support</CustomText>
        <CustomText>
         24/24
          <CustomText type="defaultSemiBold">After buying support</CustomText>{" "}
          - Two versions free update <CustomText type="defaultSemiBold">2</CustomText>
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
    height: 300,
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
