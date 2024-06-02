import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function ModalPicker({
  open,
  children,
  onClose,
  title,
}: Readonly<ModalPickerProps>) {
  return (
    <Modal animationType="slide" transparent={true} visible={open}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: "35%",
    width: "100%",
    backgroundColor: "#ccc",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "15%",
    backgroundColor: "#676b71",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});

type ModalPickerProps = {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
  title: string
};
