import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import heropic from "../components/image/hero.jpg";
// Import your two images correctly
import pic1 from "../components/image/download.jpg";
import pic2 from "../components/image/WhatsApp Image 2025-03-27 at 03.18.22_767bfbf7.jpg";

function StatItem({ number, label, icon }: { number: string; label: string; icon: string }) {
  return (
    <motion.div
      className="flex items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-yellow-600 mr-2 text-2xl animate-pulse">{icon}</span>
      <div>
        <div className="text-3xl font-bold text-yellow-600">{number} *</div>
        <div className="text-sm uppercase tracking-wider">{label}</div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Background Image with 100vh height */}
      <div className="absolute inset-0 z-0 h-screen">
        <Image
          src={heropic} // Replace with your image
          alt="Construction background"
          fill // Use 'fill' for full width and height
          style={{ objectFit: 'cover', opacity: 0.7 }} // Inline styles for objectFit and opacity
          priority
        />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 flex justify-between items-center py-6 px-8 border-b border-gray-700">
        <div className="text-yellow-400 font-bold text-2xl"> Hardhat Solution</div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-yellow-400">Home</a>
          <a href="#" className="text-white hover:text-yellow-400">About</a>
          <a href="#" className="text-white hover:text-yellow-400">Services</a>
          <a href="#" className="text-white hover:text-yellow-400">Projects</a>
          <a href="#" className="text-white hover:text-yellow-400">Contact</a>
        </div>
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-8 pt-24 pb-48">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-light mb-2">Circle got smaller</h1>
          <h2 className="text-6xl md:text-8xl font-bold text-yellow-400 mb-8">VISION GOT LARGER</h2>

          <p className="text-xl md:text-2xl mb-12">
            Enter: d.fie-voice where we operate. A successful website proudly showcases great diversity for successful emergencies in the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-none border-2 border-yellow-500 transition duration-300 flex items-center justify-center">
              <span className="mr-2">Get Listen</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button className="bg-transparent hover:bg-yellow-500 text-yellow-500 hover:text-black font-bold py-3 px-8 rounded-none border-2 border-yellow-500 transition duration-300">
              Generalize *
            </button>
          </div>

          <div className="w-16 h-1 bg-yellow-400 mb-16"></div>
        </div>
      </div>

      {/* Combined Yellow and White Container with Overlapping Effect */}
      <div className="relative z-20 -mt-40"> {/* Adjusted margin-top */}
        <div className="container mx-auto flex flex-col md:flex-row justify-center">
          {/* Yellow Container */}
          <div className="bg-yellow-400 text-black p-8 rounded-t-lg md:w-1/2 relative">
            <h3 className="text-2xl font-bold mb-4">Our proud</h3>
            <h4 className="text-4xl font-bold mb-6">25 years of undefeated success</h4>
            <p className="text-gray-700">
              We have a long and proud history focused on environmental, social, and economic outcomes, creating spaces that respond effectively.
            </p>
          </div>

          {/* White Container */}
          <div className="bg-white text-black p-8 rounded-b-lg md:w-1/2 relative">
            <h3 className="text-2xl font-bold mb-4">Watch with us - 5</h3>
            <h4 className="text-2xl font-bold mb-6">Successful/Project Finalized</h4>

            <div className="grid grid-cols-2 gap-8">
              {/* Additional content can go here */}
            </div>
          </div>
        </div>
      </div>

      {/* Background for the second section */}
      <div className="bg-white py-16">
        {/* Additional content can go here */}
      </div>
    </div>
  );
}