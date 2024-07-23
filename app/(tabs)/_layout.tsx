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
        name="index"
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
          href:"products/100",
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
          href: null,//disable the button
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="shopping-cart-checkout" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard/index"
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
