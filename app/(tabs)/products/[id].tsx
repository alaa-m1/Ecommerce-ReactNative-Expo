import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";

const Products = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { id } = params;
  const [count, setCount] = useState(0);
  return (
    <>
      <Stack.Screen
        options={{
          title: params.id as string,
          headerShown: true,
          headerRight: () => (
            <Button
              onPress={() => setCount((c) => c + 1)}
              title="Update count"
            />
          ),
        }}
      />
      <Text
        onPress={() => {
          router.setParams({ id: "Updated" });
        }}
      >
        Update the title
      </Text>
      <Text>Count: {count}</Text>
      <View>
        <Text>product id: {id}</Text>
      </View>
    </>
  );
};

export default Products;
