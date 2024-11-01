import { ParallaxScrollView } from "@/shared";
import { useAppStyles } from "@/shared/style";
import { Stack } from "expo-router";
import { Image } from "react-native";

export default function DynamicLayout({ segment }: { segment: string }) {
  const appStyles=useAppStyles();
  // if (segment === "(home)") {
  //   return (
  //     <ParallaxScrollView
  //       headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
  //       headerImage={
  //         <Image
  //           source={require("@/shared/assets/images/partial-react-logo.png")}
  //           // style={appStyles.reactLogo}
  //         />
  //       }
  //     >
  //       <Stack />
  //     </ParallaxScrollView>
  //   );
  // }

  return <Stack />;
}
