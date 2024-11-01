import { categoriesRes } from "@/shared/constants/categoriesDetails";
import { mapCategory } from "@/shared/utils/mapCategory";
import _ from "lodash";
import { useMemo } from "react";

export type MainCategoriesLabel = {
  id: string;
  label: string;
};

export const useCategoriesLables = () => {
  const allCategories = mapCategory(categoriesRes);
  const mainCategoriesLabels = Array.from(
    new Set(categoriesRes.map((item) => item.categoryLabel))
  ).map((item) => ({ id: _.uniqueId(), label: item }));

  return { allCategories, mainCategoriesLabels };
};
