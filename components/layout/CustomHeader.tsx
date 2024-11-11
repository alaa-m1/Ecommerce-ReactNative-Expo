import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { Appbar, useTheme } from 'react-native-paper';
import { useAuth } from '@/context/AuthContext';

interface CustomHeaderProps {
  title: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  const { isSignedIn, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();

  const handleAuthAction = () => {
    if (isSignedIn) {
      signOut();
    } else if (pathname !== '/signin') {
      router.push('/signin');
    }
  };

  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.primary }}>
      {pathname !== '/' && (
        <Appbar.BackAction onPress={() => router.back()} color={theme.colors.surface} />
      )}
      <Appbar.Content title={title} color={theme.colors.surface} />
      {pathname !== '/signin' && (
        <Appbar.Action
          icon={isSignedIn ? 'logout' : 'login'}
          onPress={handleAuthAction}
          color={theme.colors.surface}
        />
      )}
    </Appbar.Header>
  );
};

export default CustomHeader;