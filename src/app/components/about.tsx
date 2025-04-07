'use client'; 

import { useEffect, useState } from 'react';
import Image from 'next/image';
import tricia from '../components/image/Tricia.png'; 

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('about-section');
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="about-section"
      className={`bg-white py-12 transition-transform duration-700 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className={`md:w-1/2 mb-6 md:mb-0 transform transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About Nourish and Flourish</h2>
          <p className="text-gray-600 mb-4">
            Nourish and Flourish is a vibrant culinary destination dedicated to celebrating the art of wholesome cooking and the joy of sharing delicious meals with loved ones. Our mission is to inspire individuals and families to embrace healthy eating habits while enjoying flavorful dishes that nourish both body and soul.
          </p>
          <p className="text-gray-600 mb-4">
            At Nourish and Flourish, we believe that food is more than sustenance; it is a way to connect, create memories, and foster a sense of community. Our diverse range of recipes features fresh, locally-sourced ingredients that are both nutritious and satisfying. From hearty breakfasts to sumptuous dinners, we offer something for every palate.
          </p>
          <p className="text-gray-600 mb-4">
            Join us on a culinary journey where you can explore new flavors, learn cooking techniques, and discover the joy of preparing meals that are not only good for you but also delightful to share. Whether you're a seasoned chef or just starting, our resources and community will help you flourish in the kitchen.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-[#FF2B6D] text-white px-4 py-2 rounded hover:bg-pink-600 transition"> 
              Read More
            </a>
            <a href="#" className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
              Book Now
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 relative">
          <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
            <Image
              src={tricia}
              alt="Nourish and Flourish"
              className="w-full h-auto" // Fill the container
              layout="responsive"
              priority
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        // Increase the bottom margin for the image to create more gap
        .image-container {
          margin-top: 2rem; // Adjust as needed for more space
        }
      `}</style>
    </section>
  );
};

export default About;