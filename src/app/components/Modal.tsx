// components/Modal.tsx

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipe: {
    title: string;
    prepTime: string;
    cookTime: string;
    servings: string;
    image: string;
    ingredients: string[];
  } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, recipe }) => {
  if (!isOpen || !recipe) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white rounded p-4 max-w-md w-full">
        <h2 className="text-xl font-bold text-black">{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded" />
        <div className='text-black'>
          <p>Prep Time: {recipe.prepTime}</p>
          <p>Cook Time: {recipe.cookTime}</p>
          <p>Servings: {recipe.servings}</p>
          <h3 className="font-semibold mt-2">Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>- {ingredient}</li>
            ))}
          </ul>
        </div>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;