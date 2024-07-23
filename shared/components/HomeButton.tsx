import React from "react";
import { Button, View, Text } from "react-native";
import { useRouter } from "expo-router";

export const HomeButton = () => {
  const router = useRouter();

  const handleDismissAll = () => {
    if (router.canDismiss()) {
      router.dismissAll();
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go to first screen" onPress={handleDismissAll} />
    </View>
  );
};
