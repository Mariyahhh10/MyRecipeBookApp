import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import CustomButton from '../components/CustomButton';

export default function RecipeDetailScreen({ route, navigation }) {
  // Extract the recipe object passed via route.params
  const { recipe } = route.params;

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.detailTitle}>{recipe.title}</Text>
      <Text style={globalStyles.detailMeta}>
        ⏱️ Prep Time: {recipe.prepTime} | 👥 Servings: {recipe.servings}
      </Text>

      <Text style={globalStyles.sectionHeader}>Ingredients</Text>
      {recipe.ingredients.map((item, index) => (
        <Text key={index} style={globalStyles.bodyText}>
          • {item}
        </Text>
      ))}

      <Text style={globalStyles.sectionHeader}>Instructions</Text>
      <Text style={globalStyles.bodyText}>{recipe.instructions}</Text>

      <View style={{ marginVertical: 20 }}>
        {/* Custom button to trigger manual reverse navigation */}
        <CustomButton
          title="← Back to List"
          onPress={() => navigation.goBack()}
        />
      </View>
    </ScrollView>
  );
}