import React from 'react';
import { ScrollView, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Card, Title, Paragraph, useTheme } from 'react-native-paper';
import { useLocalSearchParams } from 'expo-router';
import { categoriesRes } from '@/shared/constants/categoriesDetails';
import { CategoryLabel, CategoryResponse } from '@/shared/types';

type ImagePaths = {
  [key: string]: ImageSourcePropType;
};

type CategoryImages = {
  [K in CategoryLabel]: ImagePaths;
};

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

  const imageSources: CategoryImages = {
    accessories: {
      '1.jpeg': require('@/shared/assets/images/categories/accessories/1.jpeg'),
      '2.jpeg': require('@/shared/assets/images/categories/accessories/2.jpeg'),
      '3.jpeg': require('@/shared/assets/images/categories/accessories/3.jpeg'),
      '4.jpeg': require('@/shared/assets/images/categories/accessories/4.jpeg'),
      '5.jpeg': require('@/shared/assets/images/categories/accessories/5.jpeg'),
      '6.jpeg': require('@/shared/assets/images/categories/accessories/6.jpeg'),
      '7.jpeg': require('@/shared/assets/images/categories/accessories/7.jpeg'),
    },
    dresses: {
      '1.jpeg': require('@/shared/assets/images/categories/dresses/1.jpeg'),
      '2.jpeg': require('@/shared/assets/images/categories/dresses/2.jpeg'),
      '3.jpeg': require('@/shared/assets/images/categories/dresses/3.jpeg'),
      '4.jpeg': require('@/shared/assets/images/categories/dresses/4.jpeg'),
      '5.jpeg': require('@/shared/assets/images/categories/dresses/5.jpeg'),
      '6.jpeg': require('@/shared/assets/images/categories/dresses/6.jpeg'),
      '7.jpeg': require('@/shared/assets/images/categories/dresses/7.jpeg'),
    },
    hats: {
      '1.jpeg': require('@/shared/assets/images/categories/hats/1.jpeg'),
      '2.jpeg': require('@/shared/assets/images/categories/hats/2.jpeg'),
      '3.jpeg': require('@/shared/assets/images/categories/hats/3.jpeg'),
      '4.jpeg': require('@/shared/assets/images/categories/hats/4.jpeg'),
    },
    jackets: {
      '1.jpeg': require('@/shared/assets/images/categories/jackets/1.jpeg'),
      '2.jpeg': require('@/shared/assets/images/categories/jackets/2.jpeg'),
      '3.jpeg': require('@/shared/assets/images/categories/jackets/3.jpeg'),
      '4.jpeg': require('@/shared/assets/images/categories/jackets/4.jpeg'),
    },
    shoes: {
      '1.jpeg': require('@/shared/assets/images/categories/shoes/1.jpeg'),
      '2.jpeg': require('@/shared/assets/images/categories/shoes/2.jpeg'),
      '3.jpeg': require('@/shared/assets/images/categories/shoes/3.jpeg'),
      '4.jpeg': require('@/shared/assets/images/categories/shoes/4.jpeg'),
    },
  };

  const getImageSource = (category: CategoryLabel, imagePath: string): ImageSourcePropType => {
    if (category in imageSources && imagePath in imageSources[category]) {
      return imageSources[category][imagePath];
    }
    // Return a default image or throw an error if the image is not found
    return require('@/shared/assets/images/categories/default-image.png');
  };

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