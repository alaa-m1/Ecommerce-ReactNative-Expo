import React from 'react';
import { ScrollView, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Card, Title, Paragraph, useTheme } from 'react-native-paper';
import { useLocalSearchParams } from 'expo-router';
import { categoriesRes } from '@/shared/constants/categoriesDetails';
import { CategoryLabel, CategoryResponse } from '@/shared/types';
import { getImageSource } from '@/shared/utils/helpers';



export default function ProductPage() {
  const { category } = useLocalSearchParams<{ category: string }>();
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme.colors.background,
    },
    card: {
      marginBottom: 16,
    },
    productImage: {
      width: '100%',
      height: 200,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
  });

  const products = categoriesRes.filter(item => item.categoryLabel === category);



  return (
    <ScrollView style={styles.container}>
      <Title style={{ marginBottom: 16, textTransform: 'capitalize' }}>{category}</Title>
      {products.map((product: CategoryResponse) => (
        <Card key={product.id} style={styles.card}>
          <Image
            source={getImageSource(product.categoryLabel, product.categoryDetails.imagePath)}
            style={styles.productImage}
            resizeMode="cover"
          />
          <Card.Content>
            <Title>{product.categoryDetails.title}</Title>
            <Paragraph>Price: ${product.categoryDetails.price}</Paragraph>
            <Paragraph>{product.categoryDetails.description}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}