import type { PropsWithChildren, ReactElement } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { CustomView } from "../CustomView";
import { Avatar } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import { useAppStyles } from "@/shared/style";
import { colors } from "@/shared/style/colors";
import { HEADER_HEIGHT } from "@/shared/constants";
import HeaderView from "./HeaderView";



type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
  canGoBack?: boolean;
  showCardIcon?: boolean;
}>;

export function ParallaxView({
  children,
  headerImage,
  headerBackgroundColor,
  canGoBack = false,
  showCardIcon = true,
}: Props) {
  const appStyles=useAppStyles();
  return (
    <CustomView style={styles.mainContainer}>
      <CustomView
      style={appStyles.AppContainer}
      >
        <HeaderView headerImage={headerImage} canGoBack={canGoBack} showCardIcon={showCardIcon}/>
        <CustomView style={styles.content}>{children}</CustomView>
      </CustomView>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  }
});
