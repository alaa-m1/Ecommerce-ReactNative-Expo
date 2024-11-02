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

type SearchViewProps = {
  canGoBack?: boolean;
  showCardIcon?: boolean;
}

export const SearchView = ({
  canGoBack = false,
  showCardIcon = true,
}: SearchViewProps) => {
  const theme = useColorScheme() ?? "light";
  const navigate = useNavigation();
  const cartIsEmpty = false;
  return (
    <View style={styles.MainContainer}>
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


const styles = StyleSheet.create({
  MainContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
  },
  utilsContainer: {
    // position: "absolute",
    width: "100%",
    // bottom: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
});
