<<<<<<< HEAD
"use client"; 
=======
'use client'; 
>>>>>>> 0c75ba59087fb2ef85b479932be498a9d7b26d7f

import { useEffect, useState } from 'react';
import Image from 'next/image';
<<<<<<< HEAD
import pic1 from "./image/pic10.jpeg"; // Update the image path
import { motion } from 'framer-motion';
=======
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
>>>>>>> 0c75ba59087fb2ef85b479932be498a9d7b26d7f

  return (
<<<<<<< HEAD
    <div className="bg-[#f4f4f4] py-[60px] px-[20px] text-center text-black flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
      <motion.div
        className="w-full md:w-6/12 relative mb-[20px]"
        style={{ height: '75vh', maxWidth: '500px' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full h-full rounded-[10px] overflow-hidden">
          <Image
            src={pic1}
            alt="Electrician at work"
            className="object-cover w-full h-full"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </motion.div>

      <div className="w-full md:w-6/12 text-left flex flex-col justify-center px-4">
        <motion.h2
          className="text-[1.5em] mb-[10px] text-[#ffc107]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Our Electrical Services
        </motion.h2>
        <motion.h1
          className="text-[2em] mb-[10px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your Trusted Electricians
        </motion.h1>
        <motion.p
          className="text-[1em] my-[10px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We specialize in residential and commercial electrical services. From installations to repairs, our certified electricians ensure safety and quality in every project.
        </motion.p>

        <motion.div
          className="flex items-center justify-start my-[20px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-[3em] text-[#ffc107] mr-[10px]">500+</span>
          <div>
            <span className="text-sm">COMPLETED</span><br />
            <span className="text-sm">ELECTRICAL PROJECTS</span>
=======
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
>>>>>>> 0c75ba59087fb2ef85b479932be498a9d7b26d7f
          </div>
        </div>

<<<<<<< HEAD
        <motion.div
          className="flex items-center justify-start mb-[20px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[...Array(5)].map((_, index) => (
            <svg key={index} className="w-5 h-5 text-[#ffc107] mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.505L.27 8.24l6.573-.957L10 1l3.15 6.283 6.573.957-4.925 4.345 1.123 6.505z" />
            </svg>
          ))}
          <span className="text-sm ml-2">5 Rating | 4.8 Reviews</span>
        </motion.div>

        <motion.button
          className="bg-[#ffc107] text-white py-2 px-4 rounded mt-[20px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Quote
        </motion.button>
=======
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
>>>>>>> 0c75ba59087fb2ef85b479932be498a9d7b26d7f
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