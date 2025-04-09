"use client"; 

import Image from 'next/image';
import pic1 from "./image/pic10.jpeg"; // Update the image path
import { motion } from 'framer-motion';

export default function Home() {
  return (
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
          </div>
        </motion.div>

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
      </div>
    </div>
  );
}