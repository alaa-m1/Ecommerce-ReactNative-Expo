import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { CustomText } from './CustomText';
import { CustomView } from './CustomView';
import { btnStyles } from '../style';
import { colors } from '../style/colors';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <CustomView>
      <TouchableOpacity
        style={btnStyles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color={colors[theme].icon}
        />
        <CustomText type="defaultSemiBold">{title}</CustomText>
      </TouchableOpacity>
      {isOpen && <CustomView style={styles.content}>{children}</CustomView>}
    </CustomView>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
