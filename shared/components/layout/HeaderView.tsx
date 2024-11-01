import {
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
  StyleSheet,
} from "react-native";
import React from "react";
import { router, useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { Avatar } from "react-native-paper";
import { colors } from "@/shared/style/colors";
import { HEADER_HEIGHT } from "@/shared/constants";

type HeaderViewProps = {
  headerImage: React.ReactElement;
  canGoBack?: boolean;
  showCardIcon?: boolean;
}

const HeaderView = ({
  headerImage,
  canGoBack = false,
  showCardIcon = true,
}: HeaderViewProps) => {
  const theme = useColorScheme() ?? "light";
  const navigate = useNavigation();
  const route = useRoute();
  const cartIsEmpty = false;
  return (
    <View style={styles.HeaderContainer}>
      {/* <Animated.View
            style={[
              styles.header,
              { backgroundColor: headerBackgroundColor[colorScheme] },
              headerAnimatedStyle,
            ]}
          > */}
      <View style={styles.imgContainer}>{headerImage}</View>
      {/* </Animated.View> */}
      <View style={styles.utilsContainer}>
        {canGoBack ? (
          <TouchableOpacity onPress={() => navigate.goBack()}>
            <Avatar.Icon
              style={{
                backgroundColor: colors[theme].headerBg,
                elevation: 10,
              }}
              color={colors[theme].avatarBg}
              icon={"arrow-left"}
            />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
        {showCardIcon && !cartIsEmpty ? (
          <TouchableOpacity onPress={() => router.push("shooping-cart")}>
            <Avatar.Icon
              style={{
                backgroundColor: "transparent",
              }}
              color={colors[theme].avatarBg}
              // icon={"mdi-store-outline"}
              icon={"cart-outline"}
            />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};

export default HeaderView;

const styles = StyleSheet.create({
  HeaderContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
  },
  imgContainer: {
    // marginTop: 100,
    height: HEADER_HEIGHT,
  },
  utilsContainer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
});
