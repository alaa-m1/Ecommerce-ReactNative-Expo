import { ImageSourcePropType } from "react-native";

export type CategoriesResponse = Array<CategoryResponse>;
export type CategoryResponse = {
  id: number;
  categoryLabel: CategoryLabel;
  categoryDetails: {
    title: string;
    price: number;
    description: string;
    imagePath: string;
  };
};

export type CategoryLabel = "accessories" | "dresses" | "hats" | "jackets" | "shoes";

export type ImagePaths = {
  [key: string]: ImageSourcePropType;
};

export type CategoryImages = {
  [K in CategoryLabel]: ImagePaths;
};

export type RootStackParamList = {
  Home: undefined;
  Shop: undefined;
  Product: { category: string };
};

export type Products = Array<Product>;
export type Product = {
  id: number;
  categoryLabel: string;
  title: string;
  price: number;
  description: string;
  imagePath: string;
  rating?: Rating;
  uId: string;
};

type Rating = {
  rate: number;
  count: number;
};