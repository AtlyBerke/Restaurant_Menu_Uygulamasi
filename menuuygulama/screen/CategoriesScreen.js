import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGrid from '../components/CategoryGrid';

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('FoodOverview', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        pressFood={pressHandler}
      />
    );
  }

  return (
    <ImageBackground
      source={{ uri: 'https://static.vecteezy.com/system/resources/previews/021/428/963/non_2x/background-junk-food-related-seamless-pattern-and-background-editable-stroke-fast-food-line-art-of-hamburger-pizza-hot-dog-beverage-cheeseburger-restaurant-menu-background-free-vector.jpg' }} // Arka plan resmi URL'si
      style={styles.background}
    >
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
});
