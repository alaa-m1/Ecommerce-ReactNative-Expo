import { ParallaxScrollView } from "@/shared";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <View></View>
      <Text>dashboard page  1111</Text>
      </SafeAreaView>
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
