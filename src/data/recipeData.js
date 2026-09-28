export const RECIPE_CATEGORIES = [
  { id: '1', name: 'BREAKFAST', icon: '🍳' },
  { id: '2', name: 'LUNCH', icon: '🥗' },
  { id: '3', name: 'DINNER', icon: '🍝' },
  { id: '4', name: 'DESSERT', icon: '🍰' },
];

export const RECIPES = [
  {
    id: 'r1',
    categoryId: '1',
    title: 'Fluffy Pancakes',
    prepTime: '20 mins',
    servings: 4,
    ingredients: [
      '1 1/2 cups all-purpose flour',
      '3 1/2 tsp baking powder',
      '1 tbsp sugar',
      '1 1/4 cups milk',
      '1 egg',
      '3 tbsp melted butter',
    ],
    instructions:
      '1. Sift flour, baking powder, and sugar together.\n2. Add milk, egg, and melted butter; mix until smooth.\n3. Heat a griddle over medium-high heat.\n4. Pour batter and cook until golden brown on both sides.',
  },
  {
    id: 'r2',
    categoryId: '2',
    title: 'Chicken Caesar Salad',
    prepTime: '15 mins',
    servings: 2,
    ingredients: [
      '2 cups chopped Romaine lettuce',
      '1 cooked chicken breast (sliced)',
      '1/4 cup croutons',
      '2 tbsp grated Parmesan',
      'Caesar dressing to taste',
    ],
    instructions:
      '1. Wash and dry the lettuce.\n2. Toss lettuce, croutons, and Parmesan with Caesar dressing.\n3. Top with warm sliced chicken breast and serve.',
  },
  {
    id: 'r3',
    categoryId: '3',
    title: 'Spaghetti Bolognese',
    prepTime: '35 mins',
    servings: 4,
    ingredients: [
      '400g spaghetti',
      '300g ground beef',
      '1 onion (chopped)',
      '2 cloves garlic (minced)',
      '1 can diced tomatoes',
      '2 tbsp tomato paste',
    ],
    instructions:
      '1. Cook spaghetti according to package instructions.\n2. Sauté onion and garlic, then brown ground beef.\n3. Stir in tomato paste and diced tomatoes; simmer for 20 mins.\n4. Serve sauce hot over cooked spaghetti.',
  },
  {
    id: 'r4',
    categoryId: '4',
    title: 'Chocolate Lava Cake',
    prepTime: '25 mins',
    servings: 2,
    ingredients: [
      '100g dark chocolate',
      '50g butter',
      '2 eggs',
      '2 tbsp sugar',
      '2 tbsp flour',
    ],
    instructions:
      '1. Melt dark chocolate and butter together.\n2. Whisk eggs and sugar until pale, then fold in flour.\n3. Gently mix in melted chocolate.\n4. Bake at 200°C for 12 minutes until edges are firm and center is soft.',
  },
];