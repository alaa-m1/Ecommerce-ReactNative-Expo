import { Image, View } from "react-native";

export default function CustomImage({
  imageSize,
  stickerSource,
}: {
  imageSize: any;
  stickerSource: any;
}) {
  return (
    <View style={{ top: 0 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}
