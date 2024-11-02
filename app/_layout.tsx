import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { ComponentProps, useEffect } from "react";
import "react-native-reanimated";
import { Platform, StatusBar, StyleSheet, useColorScheme } from "react-native";
import "@expo/metro-runtime";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { defaultTheme } from "@/shared/constants";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme() ?? defaultTheme;
  const [loaded] = useFonts({
    NotoKufiArabic: require("../shared/assets/fonts/NotoKufiArabic-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  //////////
  const router = useRouter();
  const isAuthenticated = true; // Replace with real auth logic

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated]);

  if (!loaded) {
    return null;
  }

  if (!isAuthenticated) {
    return null; // Or a loading indicator
  }
  ///////////
  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{
            headerShown: false,
            // headerStyle: {
            //   backgroundColor: "#f4511e",
            // },
            // headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitle: "Ecommerce App",
          }}>
          <Stack.Screen name="index" options={{ title: "Alankaa Ecommerce" }} />
          <Stack.Screen name="shop" options={{ title: "Shop" }} />
          <Stack.Screen
            name="product/[category]"
            // options={({ route }) => ({
            //   title: route.params.category.charAt(0).toUpperCase() + route.params.category.slice(1)
            // })}
          />
          <Stack.Screen
            name="modal"
            options={{
              // Set the presentation mode to modal for our modal route.
              presentation: "modal",
            }}
          />
          <Stack.Screen name="(tabs)" />
          {/* <Stack.Screen name="auth" /> */}
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

type PageLogoProps = { iconName: ComponentProps<typeof Ionicons>["name"] };
export const PageLogo = ({ iconName }: PageLogoProps) => {
  return (
    <Ionicons name={iconName} size={36} color="#000" style={styles.image} />
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
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
