import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, useTheme } from 'react-native-paper';
import { Link } from 'expo-router';
import { useCategoriesLables } from './hooks/useCategoriesLables';
import { SearchView } from './components/SearchView';

const categoryImages = {
  accessories: require('@/shared/assets/images/categories/accessories/1.jpeg'),
  dresses: require('@/shared/assets/images/categories/dresses/1.jpeg'),
  hats: require('@/shared/assets/images/categories/hats/1.jpeg'),
  jackets: require('@/shared/assets/images/categories/jackets/1.jpeg'),
  shoes: require('@/shared/assets/images/categories/shoes/1.jpeg'),
};
export default function ShopScreen() {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    categoriesContainer: {
      padding: 16,
    },
    categoryCard: {
      width: 200,
      marginRight: 16,
    },
  });

  const { mainCategoriesLabels } = useCategoriesLables();
  return (
    <ScrollView style={styles.container}>
      <Title style={{ padding: 16 }}>Categories</Title>
      <SearchView/>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {mainCategoriesLabels.map((category) => (
          <Link key={category.id} href={`/product/${category.label}`} asChild>
          <Card style={styles.categoryCard}>
          <Card.Cover  source={categoryImages[category.label as keyof typeof categoryImages]} />
            <Card.Content>
              <Paragraph style={{ textTransform: 'capitalize' }}>{category.label}</Paragraph>
            </Card.Content>
          </Card>
        </Link>
        ))}
      </ScrollView>
    </ScrollView>
  );
}