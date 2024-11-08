import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Searchbar, IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { CategoryResponse } from '@/shared/types';
import { categoriesRes } from '@/shared/constants/categoriesDetails';
import { useAppStyles } from '@/shared/style';
import ProductCard from './ProductCard';

const SearchModal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<CategoryResponse[]>([]);
  const appStyles=useAppStyles();
  const router = useRouter();

  useEffect(() => {
    const filtered = categoriesRes.filter(product =>
      product.categoryDetails.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={appStyles.AppContainer}>
      <View style={styles.header}>
        <IconButton icon="arrow-left" onPress={handleBack} />
        <Searchbar
          placeholder="Search for products"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />
      </View>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  searchBar: {
    flex: 1,
  },
  productList: {
    padding: 16,
  },
});

export default SearchModal;