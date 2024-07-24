import { View, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { PageLogo } from '../_layout';
const Auth22=()=> {
  const loginWithFacebook = () => {
    console.log('Button pressed');
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
          options={{
            headerShown:true,
            title: 'My home',
            headerStyle: { backgroundColor: '#714eee' },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
  
            headerTitle: props => <PageLogo iconName={"log-in"}  />,
            headerRight: () => <Link href="/" >Home</Link>,
          }}
        />
      <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={loginWithFacebook}>
        Login with Facebook11
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

export default Auth22