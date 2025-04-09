'use client'; 
import React, { useState } from 'react';
import Image from 'next/image';
import RecipeCard from '../pages/RecipeCard';
import image from"../../../../public/pic1.jpg"
import bg2 from '../../../../public/pic1.jpg';
import Modal from '../Modal';
import Footer from '../Footer';
import Navbar from '../Navbar';

interface Recipe {
  title: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  image: string;
  category: string;
}
const recipes = [
  // Dessert
  {
    title: 'Amarula Coffee Ice Cream Terrine',
    prepTime: '20 min',
    cookTime: '10 min',
    servings: '6+',
    image: '/pic1.jpg',
    category: 'Dessert',
    ingredients: [
      '500ml Amarula liqueur',
      '2 cups heavy cream',
      '1 cup condensed milk',
      '1 cup brewed coffee',
      '1 tsp vanilla extract'
    ],
  },
  {
    title: 'Chocolate Lava Cake',
    prepTime: '15 min',
    cookTime: '20 min',
    servings: '4+',
    image: '/pic1.jpg',
    category: 'Dessert',
    ingredients: [
      '1 cup dark chocolate',
      '½ cup butter',
      '1 cup powdered sugar',
      '2 eggs',
      '2 egg yolks',
      '½ cup flour'
    ],
  },
  {
    title: 'Lemon Tart',
    prepTime: '30 min',
    cookTime: '35 min',
    servings: '8+',
    image: '/pic1.jpg',
    category: 'Dessert',
    ingredients: [
      '1 ½ cups flour',
      '½ cup butter',
      '⅓ cup sugar',
      '1 egg',
      '1 cup lemon juice',
      '1 cup sugar',
      '3 eggs'
    ],
  },
  {
    title: 'Fruit Pavlova',
    prepTime: '20 min',
    cookTime: '90 min',
    servings: '6+',
    image: '/pic1.jpg',
    category: 'Dessert',
    ingredients: [
      '4 egg whites',
      '1 cup sugar',
      '1 tsp vanilla extract',
      '1 tsp vinegar',
      '2 cups whipped cream',
      'Mixed fresh fruits (kiwi, strawberries, passion fruit)'
    ],
  },
  
  // Entertaining
  {
    title: 'Asian Fillet + Calamari',
    prepTime: '20 min',
    cookTime: '30 min',
    servings: '6+',
    image: '/pic1.jpg',
    category: 'Entertaining',
    ingredients: [
      '4 fillets of fish',
      '300g calamari',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1 tbsp ginger',
      '1 tbsp garlic'
    ],
  },
  {
    title: 'Stuffed Mushrooms',
    prepTime: '15 min',
    cookTime: '25 min',
    servings: '4+',
    image: '/pic1.jpg',
    category: 'Entertaining',
    ingredients: [
      '12 large mushrooms',
      '½ cup cream cheese',
      '¼ cup grated Parmesan cheese',
      '1 clove garlic, minced',
      '2 tbsp fresh parsley, chopped'
    ],
  },
  {
    title: 'Charcuterie Board',
    prepTime: '15 min',
    cookTime: '0 min',
    servings: '8+',
    image: '/pic1.jpg',
    category: 'Entertaining',
    ingredients: [
      'Assorted cheeses (brie, cheddar, gouda)',
      'Cured meats (salami, prosciutto)',
      'Olives',
      'Nuts',
      'Fresh fruits (grapes, figs)',
      'Crackers'
    ],
  },
  {
    title: 'Mini Quiches',
    prepTime: '20 min',
    cookTime: '30 min',
    servings: '12+',
    image: '/pic1.jpg',
    category: 'Entertaining',
    ingredients: [
      '1 pie crust',
      '6 eggs',
      '1 cup milk',
      '1 cup cheese (cheddar or Swiss)',
      '½ cup diced vegetables (spinach, bell peppers)',
      'Salt and pepper to taste'
    ],
  },

  // Breakfast
  {
    title: 'Avocado Toast',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: '2+',
    image: '/pic1.jpg',
    category: 'Breakfast',
    ingredients: [
      '2 slices of bread',
      '1 ripe avocado',
      'Salt and pepper to taste',
      'Red pepper flakes (optional)',
      'Lemon juice (optional)'
    ],
  },
  {
    title: 'Pancakes',
    prepTime: '10 min',
    cookTime: '20 min',
    servings: '4+',
    image: '/pic1.jpg',
    category: 'Breakfast',
    ingredients: [
      '1 cup flour',
      '2 tbsp sugar',
      '2 tsp baking powder',
      '½ tsp salt',
      '1 cup milk',
      '1 egg',
      '2 tbsp melted butter'
    ],
  },
  {
    title: 'Omelette',
    prepTime: '5 min',
    cookTime: '10 min',
    servings: '1+',
    image: '/pic1.jpg',
    category: 'Breakfast',
    ingredients: [
      '2 eggs',
      'Salt and pepper to taste',
      '1 tbsp butter',
      '¼ cup cheese (optional)',
      'Chopped vegetables (bell peppers, onions)'
    ],
  },
  {
    title: 'Smoothie Bowl',
    prepTime: '5 min',
    cookTime: '0 min',
    servings: '1+',
    image: '/pic1.jpg',
    category: 'Breakfast',
    ingredients: [
      '1 banana',
      '1 cup frozen berries',
      '½ cup yogurt',
      '¼ cup milk',
      'Toppings: granola, sliced fruits, nuts'
    ],
  },

  // Mains
  {
    title: 'Grilled Chicken Breast',
    prepTime: '15 min',
    cookTime: '30 min',
    servings: '4+',
    image: '/pic1.jpg',
    category: 'Mains',
    ingredients: [
      '4 chicken breasts',
      '2 tbsp olive oil',
      '1 tsp garlic powder',
      '1 tsp paprika',
      'Salt and pepper to taste'
    ],
  },
  {
    title: 'Spaghetti Bolognese',
    prepTime: '10 min',
    cookTime: '30 min',
    servings: '4+',
    image: '/pic1.jpg',
    category: 'Mains',
    ingredients: [
      '200g spaghetti',
      '300g ground beef',
      '1 onion, chopped',
      '2 cloves garlic, minced',
      '400g canned tomatoes',
      'Italian herbs'
    ],
  },
  {
    title: 'Beef Stir-Fry',
    prepTime: '15 min',
    cookTime: '15 min',
    servings: '4+',
    image: '/pic1.jpg',
    category: 'Mains',
    ingredients: [
      '500g beef strips',
      '2 cups mixed vegetables (broccoli, bell peppers)',
      '3 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1 tsp ginger'
    ],
  },
  {
    title: 'Vegetable Curry',
    prepTime: '10 min',
    cookTime: '40 min',
    servings: '4+',
    image: '/pic1.jpg',
    category: 'Mains',
    ingredients: [
      '1 can coconut milk',
      '2 cups mixed vegetables (carrots, peas, potatoes)',
      '2 tbsp curry powder',
      '1 onion, chopped',
      'Salt to taste'
    ],
  },

  // Salads
  {
    title: 'Caesar Salad',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: '4+',
    image: '/pic1.jpg',
    category: 'Salads',
    ingredients: [
      '1 head romaine lettuce',
      '½ cup Caesar dressing',
      '¼ cup grated Parmesan cheese',
      'Croutons',
      'Pepper to taste'
    ],
  },
  {
    title: 'Greek Salad',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: '4+',
    image: '/pic1.jpg',
    category: 'Salads',
    ingredients: [
      '2 tomatoes, chopped',
      '1 cucumber, sliced',
      '½ red onion, sliced',
      '200g feta cheese',
      'Olives',
      'Olive oil and vinegar for dressing'
    ],
  },
  {
    title: 'Quinoa Salad',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: '4+',
    image: '/pic1.jpg',
    category: 'Salads',
    ingredients: [
      '1 cup cooked quinoa',
      '1 bell pepper, diced',
      '1 cucumber, diced',
      '½ cup corn',
      '¼ cup parsley, chopped',
      'Lemon juice and olive oil for dressing'
    ],
  },
  {
    title: 'Caprese Salad',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: '2+',
    image: '/pic1.jpg',
    category: 'Salads',
    ingredients: [
      '2 tomatoes, sliced',
      '1 ball mozzarella cheese, sliced',
      'Fresh basil leaves',
      'Olive oil',
      'Salt and pepper to taste'
    ],
  },

  // Sides
  {
    title: 'Garlic Bread',
    prepTime: '5 min',
    cookTime: '15 min',
    servings: '4+',
    image: '/pic1.jpg',
    category: 'Sides',
    ingredients: [
      '1 loaf French bread',
      '½ cup butter, softened',
      '4 cloves garlic, minced',
      '2 tbsp parsley, chopped',
      'Salt to taste'
    ],
  },
  {
    title: 'Roasted Vegetables',
    prepTime: '10 min',
    cookTime: '30 min',
    servings: '4+',
    image: '/pic1.jpg',
    category: 'Sides',
    ingredients: [
      '2 cups mixed vegetables (carrots, bell peppers, zucchini)',
      '3 tbsp olive oil',
      'Salt and pepper to taste',
      '1 tsp Italian herbs'
    ],
  },
  {
    title: 'Coleslaw',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: '6+',
    image: '/pic1.jpg',
    category: 'Sides',
    ingredients: [
      '4 cups shredded cabbage',
      '1 cup shredded carrots',
      '½ cup mayonnaise',
      '1 tbsp apple cider vinegar',
      'Salt and pepper to taste'
    ],
  },
  {
    title: 'Mashed Potatoes',
    prepTime: '15 min',
    cookTime: '20 min',
    servings: '4+',
    image: '/pic1.jpg',
    category: 'Sides',
    ingredients: [
      '4 large potatoes, peeled and cubed',
      '½ cup milk',
      '¼ cup butter',
      'Salt and pepper to taste'
    ],
  },
];

const categories = [
  'Breakfast',
  'Christmas',
  'Dessert',
  'Entertaining',
  'Gifting',
  'Kiddies',
  'Mains',
  'Salads',
  'Sides',
  'Valentine\'s',
];

const RecipesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const filteredRecipes = selectedCategory
    ? recipes.filter(recipe => recipe.category === selectedCategory)
    : recipes;

  const displayedRecipes = showAll ? filteredRecipes : filteredRecipes.slice(0, selectedCategory ? 4 : 8);

  const handleCardClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  return (
    <section className="py-12 relative">
      <Navbar />
      <div className="relative h-64 overflow-hidden">
        <Image src={bg2} alt="Background Image" layout="fill" objectFit="cover" className="absolute top-0 left-0 z-0" />
        <div className="flex items-center justify-center h-full bg-black bg-opacity-60 z-10">
          <h1 className="text-white text-4xl font-bold text-center bg-[rgba(0,0,0,0.5)] z-30 p-4">
            Recipes
          </h1>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white"></h2>
        <div className="mb-4">
          <select
            className="border rounded p-2 w-full"
            onChange={(e) => setSelectedCategory(e.target.value)}
            defaultValue=""
          >
            <option value="">Select a recipe category...</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedRecipes.map((recipe, index) => (
            <div key={index} onClick={() => handleCardClick(recipe)}>
              <RecipeCard {...recipe} />
            </div>
          ))}
        </div>
        {!showAll && displayedRecipes.length >= 8 && (
          <button
            className="mt-4 bg-[#FF2B6D] text-white px-4 py-2 rounded"
            onClick={() => setShowAll(true)}
          >
            Load More
          </button>
        )}
      </div>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        recipe={selectedRecipe}
      />
    </section>
  );
};

export default RecipesSection;