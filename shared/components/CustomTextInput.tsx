import { ComponentProps } from "react";
import { TextInput, View } from "react-native";

export const CustomTextInput = ({
    value,
    onChangeText,
}: CustomTextInputProps) => {
    return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
        // borderBottomWidth: StyleSheet.hairlineWidth,
    }}
    >
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={onChangeText}
        value={value}
        style={{ padding: 10 }}
        // underlineColorAndroid={"transparent"}//// 
      />
    </View>
  );
};

type CustomTextInputProps = ComponentProps<typeof TextInput>;