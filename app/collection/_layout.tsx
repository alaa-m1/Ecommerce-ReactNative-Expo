import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon, useColorScheme } from "@/shared";
import { Colors } from "@/shared/constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
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
