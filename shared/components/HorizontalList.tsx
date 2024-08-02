import { useState } from "react";
import { StyleSheet, FlatList, Image, Platform, Pressable } from "react-native";
import { btnStyles } from "../style";

type HorizontalListProps<T> = {
  onSelect: (item: T) => void;
  onCloseModal: any;
  listData: T[];
};

const HorizontalList = <T,>({
  onSelect,
  onCloseModal,
  listData,
}: Readonly<HorizontalListProps<T>>) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={listData}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
        style={[btnStyles.PressableButton, btnStyles.PressableButtonSecondary]}
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item as any} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
export default HorizontalList;
