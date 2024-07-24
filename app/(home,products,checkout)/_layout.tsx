import { ParallaxScrollView } from "@/shared";
import { Stack } from "expo-router";
import { Image } from "react-native";

export default function DynamicLayout({ segment }: { segment: string }) {
  if (segment === "(home)") {
    return (
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image
            source={require("@/shared/assets/images/partial-react-logo.png")}
            //   style={styles.reactLogo}
          />
        }
      >
        <Stack />
      </ParallaxScrollView>
    );
  }

  return <Stack />;
}
