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
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoadingSpinner } from "@/shared/components/LoadingSpinner";
import { CustomModal } from "@/shared/components/CustomModal";
import HorizontalList from "@/shared/components/HorizontalList";
import ModalPicker from "@/shared/components/ModalPicker";
import CustomImage from "@/shared/components/CustomImage";
import { KeyboardAvoidingComponent } from "@/shared/components/KeyboardAvoidingComponent";
import { useAssets } from "expo-asset";
import { btnStyles } from "@/shared/style";
import { Link, useRouter } from "expo-router";
import { CustomText } from "@/shared";

const Checkout = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const router = useRouter();
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
      <Link href="/collection/col2">Navigate to nested collection</Link>

          <Link
            href="/products/5"
            // href={{
            //     pathname: '/products/[id]',
            //     params: { id: '5' },
            //   }}
          >
            Review product 5
          </Link>
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
          style={[btnStyles.PressableButton, btnStyles.PressableButtonPrimary]}
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
      {/* <Link href="/" asChild={true}>
          <CustomText type="link">12345</CustomText>
        </Link> */}
      {/* <MaterialIcons name="close" color="#fff" size={22} /> */}

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Link href="/modal">Present modal</Link>
      </View>
      <TouchableOpacity
        style={btnStyles.heading}
        onPress={() => router.push("/dashboard/users")}
        activeOpacity={0.8}
      >
        {/* <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color={colors[theme].icon}
        /> */}
        <CustomText type="defaultSemiBold">Go to users page</CustomText>
      </TouchableOpacity>
      <Pressable
        style={[btnStyles.PressableButton, btnStyles.PressableButtonPrimary]}
        onPress={() => router.push("/(home)/profile")}
      >
        <Text style={styles.textStyle}>Go to users profile page</Text>
      </Pressable>
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
