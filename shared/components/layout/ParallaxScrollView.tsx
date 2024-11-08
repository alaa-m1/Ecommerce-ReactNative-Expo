import type { PropsWithChildren, ReactElement } from "react";
import {
  ScrollView,
  StyleSheet,
  useColorScheme,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { CustomView } from "../CustomView";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useAppStyles } from "@/shared/style";
import { HEADER_HEIGHT } from "@/shared/constants";
import HeaderView from "./HeaderView";



type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
  canGoBack?: boolean;
  showCardIcon?: boolean;
}>;

export function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
  canGoBack = false,
  showCardIcon = true,
}: Props) {
  const appStyles=useAppStyles();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const theme = useColorScheme() ?? 'light';
  const navigate = useNavigation();
  const route = useRoute();
  const cartIsEmpty = false;
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <CustomView style={styles.mainContainer}>
      <ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        style={appStyles.AppContainer}
      >
        <HeaderView headerImage={headerImage} canGoBack={canGoBack} showCardIcon={showCardIcon}/>
        <CustomView style={styles.content}>{children}</CustomView>
      </ScrollView>
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
