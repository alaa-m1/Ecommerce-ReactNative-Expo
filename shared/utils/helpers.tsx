import { ImageSourcePropType } from "react-native";
import { CategoryImages, CategoryLabel } from "../types";

const imageSources: CategoryImages = {
  accessories: {
    "1.jpeg": require("@/shared/assets/images/categories/accessories/1.jpeg"),
    "2.jpeg": require("@/shared/assets/images/categories/accessories/2.jpeg"),
    "3.jpeg": require("@/shared/assets/images/categories/accessories/3.jpeg"),
    "4.jpeg": require("@/shared/assets/images/categories/accessories/4.jpeg"),
    "5.jpeg": require("@/shared/assets/images/categories/accessories/5.jpeg"),
    "6.jpeg": require("@/shared/assets/images/categories/accessories/6.jpeg"),
    "7.jpeg": require("@/shared/assets/images/categories/accessories/7.jpeg"),
  },
  dresses: {
    "1.jpeg": require("@/shared/assets/images/categories/dresses/1.jpeg"),
    "2.jpeg": require("@/shared/assets/images/categories/dresses/2.jpeg"),
    "3.jpeg": require("@/shared/assets/images/categories/dresses/3.jpeg"),
    "4.jpeg": require("@/shared/assets/images/categories/dresses/4.jpeg"),
    "5.jpeg": require("@/shared/assets/images/categories/dresses/5.jpeg"),
    "6.jpeg": require("@/shared/assets/images/categories/dresses/6.jpeg"),
    "7.jpeg": require("@/shared/assets/images/categories/dresses/7.jpeg"),
  },
  hats: {
    "1.jpeg": require("@/shared/assets/images/categories/hats/1.jpeg"),
    "2.jpeg": require("@/shared/assets/images/categories/hats/2.jpeg"),
    "3.jpeg": require("@/shared/assets/images/categories/hats/3.jpeg"),
    "4.jpeg": require("@/shared/assets/images/categories/hats/4.jpeg"),
  },
  jackets: {
    "1.jpeg": require("@/shared/assets/images/categories/jackets/1.jpeg"),
    "2.jpeg": require("@/shared/assets/images/categories/jackets/2.jpeg"),
    "3.jpeg": require("@/shared/assets/images/categories/jackets/3.jpeg"),
    "4.jpeg": require("@/shared/assets/images/categories/jackets/4.jpeg"),
  },
  shoes: {
    "1.jpeg": require("@/shared/assets/images/categories/shoes/1.jpeg"),
    "2.jpeg": require("@/shared/assets/images/categories/shoes/2.jpeg"),
    "3.jpeg": require("@/shared/assets/images/categories/shoes/3.jpeg"),
    "4.jpeg": require("@/shared/assets/images/categories/shoes/4.jpeg"),
  },
};

export const getImageSource = (
  category: CategoryLabel,
  imagePath: string
): ImageSourcePropType => {
  if (category in imageSources && imagePath in imageSources[category]) {
    return imageSources[category][imagePath];
  }
  // Return a default image or throw an error if the image is not found
  return require("@/shared/assets/images/categories/default-image.png");
};
