import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon, useColorScheme } from "@/shared";
import { Colors } from "@/shared/constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: "Dashboard",
              title: "Dashboard",
            }}
          />
          <Drawer.Screen
            name="users/index"
            options={{
              drawerLabel: "users",
              title: "users",
            }}
          />
          
          
        </Drawer>
      </GestureHandlerRootView>
  );
}
