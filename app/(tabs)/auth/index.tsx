import { View, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
const Auth=()=> {
  const loginWithFacebook = () => {
    console.log('Button pressed');
  };

  return (
    <View style={styles.container}>
      <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={loginWithFacebook}>
        Login with Facebook
      </FontAwesome.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Auth