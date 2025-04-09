import React from 'react';
import Link from 'next/link';

interface RecipeCardProps {
  title: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  image: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, prepTime, cookTime, servings, image }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>Prep Time: {prepTime}</p>
        <p>Cook Time: {cookTime}</p>
        <p>Servings: {servings}</p>

          <button className="mt-2 bg-[#FF2B6D]  text-white px-4 py-2 rounded">
            View Recipe
          </button>

      </div>
    </div>
  );
};

export default RecipeCard;