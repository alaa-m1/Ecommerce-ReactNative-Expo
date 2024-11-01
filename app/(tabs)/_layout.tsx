import { Tabs } from "expo-router";
import React from "react";
// import { TabBarIcon, useColorScheme } from "@/shared";
import { colors } from "@/shared/style/colors";
import { defaultTheme } from "@/shared/constants";
import { useColorScheme } from "react-native";
import { TabBarIcon } from "@/shared";

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? defaultTheme;

  return (
    <Tabs
      initialRouteName="dashboard"
      screenOptions={{
        tabBarActiveTintColor: colors[colorScheme].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="tab1"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="products/[id]"
        // getId={
        //   ({ params }) => String(Date.now())
        // }
        options={{
          href: "products/100",
          title: "Products",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="shopping-basket" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="checkout/index"
        options={{
          title: "checkout11",
          //href: null,//disable the button
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="shopping-cart-checkout" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "dashboard",
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
