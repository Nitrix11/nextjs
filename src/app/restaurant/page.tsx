import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const Restaurants = () => {
  const restaurants = [
    {
      name: "The Garden Haven",
      image: "/images/restaurant1.jpg",
      description: "A lush, green oasis offering farm-to-table dishes.",
      video: "/videos/restaurant1.mp4",
      rating: 4.8,
    },
    {
      name: "Coastal Bliss",
      image: "/images/restaurant2.jpg",
      description: "Seafood delights by the ocean with mesmerizing views.",
      video: "/videos/restaurant2.mp4",
      rating: 4.9,
    },
    {
      name: "Urban Spice",
      image: "/images/restaurant3.jpg",
      description: "Fusion cuisine that brings the world to your plate.",
      video: "/videos/restaurant3.mp4",
      rating: 4.7,
    },
    {
      name: "Rustic Retreat",
      image: "/images/restaurant4.jpg",
      description: "Wood-fired pizzas and hearty comfort food.",
      video: "/videos/restaurant4.mp4",
      rating: 4.6,
    },
  ];

  return (
  
    <div className="min-h-screen bg-black-100 text-800">
      {/* Hero Section */}
      <Navbar/>
      <header className="relative bg-cover bg-center h-96 flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-extrabold">Discover Amazing Restaurants</h1>
          <p className="mt-4 text-lg md:text-xl">Explore, indulge, and savor the finest cuisines from around the world.</p>
        </div>
      </header>

      {/* Restaurant Grid */}
      <section className="py-16 px-4 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Featured Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-[#333] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{restaurant.name}</h3>
                <p className="text-gray-600 mb-4">{restaurant.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500 font-bold">⭐ {restaurant.rating}</span>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-[#D32B6D]-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Video Section */}
      <section className="bg-gray-900 text-white py-16 px-4 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Experience the Ambiance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="relative">
              <video
                src={restaurant.video}
                controls
                className="w-full rounded-lg shadow-lg"
              ></video>
              <h3 className="absolute bottom-4 left-4 text-lg font-bold bg-black bg-opacity-70 px-3 py-1 rounded">
                {restaurant.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-pink-500 to-black-500 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Table?</h2>
        <p className="text-lg mb-6">Reserve your spot at any of these amazing restaurants today!</p>
        <button className="bg-white text-blue-500 px-6 py-3 font-bold rounded-lg shadow hover:bg-gray-100 transition-colors">
          Book Now
        </button>
      </section>

      
      <Footer/>
    </div>
  );
};

export default Restaurants;