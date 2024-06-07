import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { CustomText, CustomView } from '@/shared';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <CustomView style={styles.container}>
        <CustomText type="title">This screen doesn't exist.</CustomText>
        <Link href="/" style={styles.link}>
          <CustomText type="link">Go to home screen!</CustomText>
        </Link>
      </CustomView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
