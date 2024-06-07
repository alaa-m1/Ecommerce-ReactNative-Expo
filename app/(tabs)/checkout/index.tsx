import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  Switch,
  Pressable,
  Alert,
  Button,
} from "react-native";
import React, { useState } from "react";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { LoadingSpinner } from "@/shared/components/LoadingSpinner";
import { CustomModal } from "@/shared/components/CustomModal";
import HorizontalList from "@/shared/components/HorizontalList";
import ModalPicker from "@/shared/components/ModalPicker";
import CustomImage from "@/shared/components/CustomImage";
import { KeyboardAvoidingComponent } from "@/shared/components/KeyboardAvoidingComponent";
import { useAssets } from "expo-asset";
const Checkout = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalClose = () => {
    setModalVisible(false);
    Alert.alert("Modal has been closed.");
  };

  const [pickedEmoji, setPickedEmoji] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // ...rest of the code remains same

  const onAddSticker = () => {
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };
  const [emoji, error] = useAssets([
    require("@/shared/assets/images/adaptive-icon.png"),
    require("@/shared/assets/images/react-logo.png"),
  ]);
  return (
    <SafeAreaView>
      <View style={styles.centeredView}>
        <Button onPress={() => onAddSticker()} title="Open" />
      </View>
      <View style={styles.container}>
        {/* rest of the code remains unchanged */}
        <ModalPicker
          open={isModalOpen}
          onClose={onModalClose}
          title="Add a payment"
        >
          <HorizontalList
            onSelect={(item: File) => setPickedEmoji(item)}
            onCloseModal={onModalClose}
            listData={emoji}
          />
        </ModalPicker>
        {/* <StatusBar style="auto" /> */}
        <StatusBar />
      </View>
      <Text>ttttt</Text>
      <View>
        <View>
          {/* <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} /> */}
          {pickedEmoji && (
            <CustomImage imageSize={40} stickerSource={pickedEmoji} />
          )}
        </View>
      </View>

      <View style={styles.centeredView}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text>Show Modal</Text>
        </Pressable>
      </View>
      {/* <View> */}
      <KeyboardAvoidingComponent />
      <LoadingSpinner />
      <View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
      {/* <View style={[styles.box2, StyleSheet.absoluteFill]}>
        <Text>2222</Text>
      </View> */}
      {/* </View> */}
      <CustomModal open={modalVisible} onModalClose={handleModalClose} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },

  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    // paddingTop: 50,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default Checkout;
