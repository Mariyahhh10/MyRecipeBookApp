import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { RECIPES } from '../data/recipeData';
import { globalStyles } from '../styles/globalStyles';
import CustomButton from '../components/CustomButton';

export default function CategoryListScreen({ route, navigation }) {
  // Extract parameters passed from HomeScreen
  const { categoryId, categoryName } = route.params;

  // Filter recipes based on selected category
  const categoryRecipes = RECIPES.filter((item) => item.categoryId === categoryId);

  const renderRecipeItem = ({ item }) => (
    <TouchableOpacity
      style={globalStyles.card}
      onPress={() =>
        navigation.navigate('RecipeDetail', {
          recipe: item,
        })
      }
    >
      <Text style={globalStyles.cardText}>🍽️ {item.title}</Text>
      <Text style={{ color: '#777', marginTop: 4 }}>
        Prep Time: {item.prepTime} | Servings: {item.servings}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{categoryName} Recipes</Text>

      {categoryRecipes.length > 0 ? (
        <FlatList
          data={categoryRecipes}
          keyExtractor={(item) => item.id}
          renderItem={renderRecipeItem}
        />
      ) : (
        <><Text style={globalStyles.subtitle}>No recipes found in this category.</Text><Text style={globalStyles.title}>{categoryName} Recipes</Text><Text style={{ color: '#888', marginBottom: 12 }}>
            {categoryRecipes.length} {categoryRecipes.length === 1 ? 'recipe' : 'recipes'} available
          </Text></>
      )}

      {/* Demonstration of manual reverse navigation using navigation.goBack() */}
      <CustomButton
        title="← Back to Categories"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}