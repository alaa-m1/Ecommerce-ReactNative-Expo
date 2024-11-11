import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

WebBrowser.maybeCompleteAuthSession();

const GoogleSignIn: React.FC = () => {
  const { signIn } = useAuth();
  const router = useRouter();
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: 'YOUR_EXPO_CLIENT_ID',
    iosClientId: 'YOUR_IOS_CLIENT_ID',
    androidClientId: 'YOUR_ANDROID_CLIENT_ID',
    webClientId: 'YOUR_WEB_CLIENT_ID',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log(authentication);
      // Here you would typically validate the token with your backend
      // For this example, we'll just sign in immediately
      signIn();
      router.back();
    }
  }, [response]);

  return (
    <Button
      mode="outlined"
      icon={() => <Ionicons name="logo-google" size={24} color="#DB4437" />}
      onPress={() => promptAsync()}
      style={styles.button}
      labelStyle={styles.buttonLabel}
    >
      Sign in with Google
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: '#DB4437',
  },
  buttonLabel: {
    color: '#DB4437',
  },
});

export default GoogleSignIn;