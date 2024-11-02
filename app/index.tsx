import React from 'react';
import { ScrollView, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Button, Card, Paragraph, Title, useTheme } from 'react-native-paper';
import { Link } from 'expo-router';

const logo: ImageSourcePropType = require("@/shared/assets/images/logo.png");

export default function HomeScreen() {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme.colors.background,
    },
    logo: {
      width: 200,
      height: 200,
      alignSelf: 'center',
      marginBottom: 20,
    },
    card: {
      marginBottom: 16,
    },
    button: {
      marginTop: 16,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        source={logo}
        style={styles.logo}
        resizeMode="contain"
      />
      <Card style={styles.card}>
        <Card.Content>
          <Title>Welcome to Alankaa Software - Ecommerce App</Title>
          <Paragraph>
            Discover a world of fashion and accessories with us. 
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>Why Choose Alankaa?</Title>
          <Paragraph>
            • Alankaa Software brings you a seamless shopping experience with our cutting-edge ecommerce App.{'\n'}
            • Wide range of high-quality products{'\n'}
            • Fast and reliable shipping{'\n'}
            • Excellent customer support
          </Paragraph>
        </Card.Content>
      </Card>

      <Link href="/shop" asChild>
        <Button mode="contained" style={styles.button}>
          Shop with us
        </Button>
      </Link>
    </ScrollView>
  );
}