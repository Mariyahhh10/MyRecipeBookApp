import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { RECIPE_CATEGORIES } from '../data/recipeData';
import { globalStyles } from '../styles/globalStyles';

export default function HomeScreen({ navigation }) {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={globalStyles.card}
      onPress={() =>
        navigation.navigate('CategoryList', {
          categoryId: item.id,
          categoryName: item.name,
        })
      }
    >
      <Text style={globalStyles.cardText}>
        {item.icon} {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Welcome to Recipe Book! 📖</Text>
      <Text style={globalStyles.subtitle}>Select a category to explore recipes:</Text>
      <FlatList
        data={RECIPE_CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    </View>
  );
}