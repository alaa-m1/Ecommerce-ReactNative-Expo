import React from "react";
import { Tabs } from "expo-router";
import { TabBarIcon } from "@/shared";
import { colors } from "@/shared/style/colors";
import { defaultTheme } from "@/shared/constants";
import { useColorScheme } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme()??defaultTheme;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors[colorScheme].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="col1"
        options={{
          title: "Col 1111",
          // href: null,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="shopping-cart-checkout" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="col2"
        options={{
          title: "Col 2222",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "space-dashboard" : "dashboard"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
