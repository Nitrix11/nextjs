'use client'; 
import React, { useState } from 'react';
import Image from 'next/image';
import RecipeCard from '../pages/RecipeCard';
import image from"../../../../public/pic1.jpg"
import bg2 from '../../../../public/pic1.jpg';
import Footer from '../Footer';
import Navbar from '../Navbar';
  const recipes = [
    // Dessert
    { title: 'Amarula Coffee Ice Cream Terrine', prepTime: '20 min', cookTime: '10 min', servings: '6+', image: '/pic1.jpg', category: 'Dessert' },
    { title: 'Chocolate Lava Cake', prepTime: '15 min', cookTime: '20 min', servings: '4+', image: '/pic1.jpg', category: 'Dessert' },
    { title: 'Lemon Tart', prepTime: '30 min', cookTime: '35 min', servings: '8+', image: '/pic1.jpg', category: 'Dessert' },
    { title: 'Fruit Pavlova', prepTime: '20 min', cookTime: '90 min', servings: '6+', image: '/pic1.jpg', category: 'Dessert' },
  
    // Entertaining
    { title: 'Asian Fillet + Calamari', prepTime: '20 min', cookTime: '30 min', servings: '6+', image: '/pic1.jpg', category: 'Entertaining' },
    { title: 'Stuffed Mushrooms', prepTime: '15 min', cookTime: '25 min', servings: '4+', image: '/pic1.jpg', category: 'Entertaining' },
    { title: 'Charcuterie Board', prepTime: '15 min', cookTime: '0 min', servings: '8+', image: '/pic1.jpg', category: 'Entertaining' },
    { title: 'Mini Quiches', prepTime: '20 min', cookTime: '30 min', servings: '12+', image: '/pic1.jpg', category: 'Entertaining' },
  
    // Breakfast
    { title: 'Avocado Toast', prepTime: '10 min', cookTime: '0 min', servings: '2+', image: '/pic1.jpg', category: 'Breakfast' },
    { title: 'Pancakes', prepTime: '10 min', cookTime: '20 min', servings: '4+', image: '/pic1.jpg', category: 'Breakfast' },
    { title: 'Omelette', prepTime: '5 min', cookTime: '10 min', servings: '1+', image: '/pic1.jpg', category: 'Breakfast' },
    { title: 'Smoothie Bowl', prepTime: '5 min', cookTime: '0 min', servings: '1+', image: '/pic1.jpg', category: 'Breakfast' },
  
    // Mains
    { title: 'Grilled Chicken Breast', prepTime: '15 min', cookTime: '30 min', servings: '4+', image: '/pic1.jpg', category: 'Mains' },
    { title: 'Spaghetti Bolognese', prepTime: '10 min', cookTime: '30 min', servings: '4+', image: '/pic1.jpg', category: 'Mains' },
    { title: 'Beef Stir-Fry', prepTime: '15 min', cookTime: '15 min', servings: '4+', image: '/pic1.jpg', category: 'Mains' },
    { title: 'Vegetable Curry', prepTime: '10 min', cookTime: '40 min', servings: '4+', image: '/pic1.jpg', category: 'Mains' },
  
    // Salads
    { title: 'Caesar Salad', prepTime: '10 min', cookTime: '0 min', servings: '4+', image: '/pic1.jpg', category: 'Salads' },
    { title: 'Greek Salad', prepTime: '10 min', cookTime: '0 min', servings: '4+', image: '/pic1.jpg', category: 'Salads' },
    { title: 'Quinoa Salad', prepTime: '10 min', cookTime: '0 min', servings: '4+', image: '/pic1.jpg', category: 'Salads' },
    { title: 'Caprese Salad', prepTime: '10 min', cookTime: '0 min', servings: '2+', image: '/pic1.jpg', category: 'Salads' },
  
    // Sides
    { title: 'Garlic Bread', prepTime: '5 min', cookTime: '15 min', servings: '4+', image: '/pic1.jpg', category: 'Sides' },
    { title: 'Roasted Vegetables', prepTime: '10 min', cookTime: '30 min', servings: '4+', image: '/pic1.jpg', category: 'Sides' },
    { title: 'Coleslaw', prepTime: '10 min', cookTime: '0 min', servings: '6+', image: '/pic1.jpg', category: 'Sides' },
    { title: 'Mashed Potatoes', prepTime: '15 min', cookTime: '20 min', servings: '4+', image: '/pic1.jpg', category: 'Sides' },
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
  
    const filteredRecipes = selectedCategory
      ? recipes.filter(recipe => recipe.category === selectedCategory)
      : recipes;
  
    const displayedRecipes = showAll ? filteredRecipes : filteredRecipes.slice(0, selectedCategory ? 4 : 8);
  
    return (
      <section className="py-12 relative">
        <Navbar/>
        <div className="relative h-64 overflow-hidden">
        <Image
          src={bg2}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 z-0"
        />
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
              <RecipeCard key={index} {...recipe} />
            ))}
          </div>
          {!showAll && displayedRecipes.length >= 8 && (
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setShowAll(true)}
            >
              Load More
            </button>
          )}
        </div>
        <Footer/>
      </section>
    );
  };
  
  export default RecipesSection;