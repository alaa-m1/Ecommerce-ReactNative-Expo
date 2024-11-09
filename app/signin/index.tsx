import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import SignInForm from './components/SigninForm';
import GoogleSignIn from './components/GoogleSignin';

const SignInScreen: React.FC = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (isSignedIn) {
      router.back();
    }
  }, [isSignedIn]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Sign In</Text>
      <SignInForm />
      <Text style={styles.orText}>Or continue with</Text>
      <GoogleSignIn />
      <Text style={styles.termsText}>
        By creating an account, you agree to our{' '}
        <Link href="/privacy-policy">Privacy policy</Link> and{' '}
        <Link href="/terms-of-use">Terms of use</Link>.
      </Text>
      <View style={styles.signUpContainer}>
        <Text>Don't have an account? </Text>
        <Link href="/signup">Sign up</Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 16,
  },
  termsText: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 12,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
});

export default SignInScreen;