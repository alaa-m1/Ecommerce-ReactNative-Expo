import { CategoryResponse } from '@/shared/types';
import { getImageSource } from '@/shared/utils/helpers';
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

interface ProductCardProps {
  product: CategoryResponse;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <Image
          source={getImageSource(product.categoryLabel, product.categoryDetails.imagePath)}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Title>{product.categoryDetails.title}</Title>
          <Paragraph>Price: ${product.categoryDetails.price}</Paragraph>
          <Paragraph numberOfLines={2}>{product.categoryDetails.description}</Paragraph>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  cardContent: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
});

export default ProductCard;