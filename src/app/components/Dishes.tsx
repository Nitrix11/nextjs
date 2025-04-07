// components/PopularDishes.tsx

'use client'; // Client-side directive

import Image from 'next/image';
import dessertImage from '../components/image/pic1.jpg'; // Replace with actual image path
import entertainingImage from '../components/image/pic2.jpg' // Replace with actual image path
import saladImage from '../components/image/pic6.jpg'; // Replace with actual image path
import pastaImage from '../components/image/pic3.jpg'; // Replace with actual image path
import soupImage from '../components/image/pic4.jpg'; // Replace with actual image path

const PopularDishes: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-100 to-white py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dish Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Image
              src={dessertImage}
              alt="Dessert"
              className="w-full h-64 object-cover"
              layout="responsive"
              priority
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Dessert</h3>
              <p className="text-gray-600 mb-4">Amarula Coffee Ice Cream Terrine</p>
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Prep Time: 20 min</span>
                <span>Serves: 6+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">⭐ 4.5</span>
                <a href="#" className="bg-pink-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition">
                  Try It
                </a>
              </div>
            </div>
          </div>

          {/* Dish Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Image
              src={entertainingImage}
              alt="Entertaining"
              className="w-full h-64 object-cover"
              layout="responsive"
              priority
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Entertaining</h3>
              <p className="text-gray-600 mb-4">Asian Fillet + Calamari</p>
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Prep Time: 20 min</span>
                <span>Serves: 6+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">⭐ 4.8</span>
                <a href="#" className="bg-pink-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition">
                  Try It
                </a>
              </div>
            </div>
          </div>

          {/* Dish Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Image
              src={saladImage}
              alt="Asian Ribbon Salad"
              className="w-full h-64 object-cover"
              layout="responsive"
              priority
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Salad</h3>
              <p className="text-gray-600 mb-4">Asian Ribbon Salad</p>
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Prep Time: 10 min</span>
                <span>Serves: 6-8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">⭐ 4.7</span>
                <a href="#" className="bg-pink-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition">
                  Try It
                </a>
              </div>
            </div>
          </div>

          {/* Dish Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Image
              src={pastaImage}
              alt="Pasta"
              className="w-full h-64 object-cover"
              layout="responsive"
              priority
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Pasta</h3>
              <p className="text-gray-600 mb-4">Creamy Garlic Pasta</p>
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Prep Time: 15 min</span>
                <span>Serves: 4</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">⭐ 4.6</span>
                <a href="#" className="bg-pink-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition">
                  Try It
                </a>
              </div>
            </div>
          </div>

          {/* Dish Card 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <Image
              src={soupImage}
              alt="Soup"
              className="w-full h-64 object-cover"
              layout="responsive"
              priority
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Soup</h3>
              <p className="text-gray-600 mb-4">Hearty Vegetable Soup</p>
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Prep Time: 25 min</span>
                <span>Serves: 4-6</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yellow-500 font-bold">⭐ 4.9</span>
                <a href="#" className="bg-pink-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition">
                  Try It
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <a href="#" className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            More Recipes
          </a>
        </div>
      </div>
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-pink-100 opacity-30"></div>
    </section>
  );
};

export default PopularDishes;