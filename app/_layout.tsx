import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { ComponentProps, useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/shared";
import { StyleSheet } from "react-native";
import "@expo/metro-runtime";
import { Ionicons } from "@expo/vector-icons";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    NotoKufiArabic: require("../shared/assets/fonts/NotoKufiArabic-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            // headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitle: "aaaaaaaa",
          }}
        >
          <Stack.Screen
            name="modal"
            options={{
              // Set the presentation mode to modal for our modal route.
              presentation: "modal",
            }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="auth" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
      {/* </SafeAreaProvider> */}
    </>
  );
}

type PageLogoProps = { iconName: ComponentProps<typeof Ionicons>["name"] };
export const PageLogo = ({ iconName }: PageLogoProps) => {
  return (
    <Ionicons name={iconName} size={36} color="#000" style={styles.image} />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});
