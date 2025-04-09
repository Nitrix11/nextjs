import React from 'react';
import Image from 'next/image';

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

// Static recipe data
const recipe = {
  title: 'Chocolate Cake',
  prepTime: '20 min',
  cookTime: '30 min',
  servings: '8',
  image: '/path/to/image.jpg', // Update the image path
  instructions: 'Mix ingredients and bake at 350°F for 30 minutes.',
};

const RecipeDetail: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-1/2">
          <Image src={recipe.image} alt={recipe.title} width={500} height={500} />
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-3xl font-bold">{recipe.title}</h2>
          <p>Prep Time: {recipe.prepTime}</p>
          <p>Cook Time: {recipe.cookTime}</p>
          <p>Servings: {recipe.servings}</p>
          <h3 className="mt-4">Instructions</h3>
          <p>{recipe.instructions}</p>
          <p>Enjoy!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecipeDetail;




