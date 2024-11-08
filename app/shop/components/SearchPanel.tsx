import React from "react";
import {
  View,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from "react-native";
import { Avatar, Button, Text } from "react-native-paper";
import { Link, router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/shared/style/colors";

export const SearchPanel = () => {
  const theme = useColorScheme() ?? "light";
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search for product</Text>
      <Link href="/search" asChild>
        <Button
          mode="contained"
          icon={() => <Feather name="search" size={24} color="white" />}
        >
          Search
        </Button>
      </Link>
      {/* <TouchableOpacity onPress={() => router.push("search")}>
        <Avatar.Icon
          style={{
            backgroundColor: "transparent",
          }}
          color={colors[theme].avatarBg}
          // icon={"mdi-store-outline"}
          icon={"mdi-magnify"}
        />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 16,
  },
});
