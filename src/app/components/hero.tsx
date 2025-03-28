"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import heropic from "../components/image/hero.jpg";

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
        <div className="text-3xl font-bold text-yellow-600">{number}</div>
        <div className="text-sm uppercase tracking-wider">{label}</div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const yellowContainerRef = useRef(null);
  const yellowContainerInView = useInView(yellowContainerRef, { once: true });

  const whiteContainerRef = useRef(null);
  const whiteContainerInView = useInView(whiteContainerRef, { once: true });

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Background Image with 100vh height */}
      <div className="absolute inset-0 z-0 h-screen">
        <Image
          src={heropic}
          alt="Construction background"
          layout="fill"
          objectFit="cover"
          className="object-cover opacity-70"
          priority
        />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 flex justify-between items-center py-6 px-8 border-b border-gray-700">
        <div className="text-yellow-400 font-bold text-2xl">Hardhat Solution</div>
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
          <h1 className="text-5xl md:text-7xl font-light mb-2">Building the Future</h1>
          <h2 className="text-6xl md:text-8xl font-bold text-yellow-400 mb-8">YOUR VISION, OUR MISSION</h2>

          <p className="text-xl md:text-2xl mb-12">
            At Hardhat Solution, we deliver innovative construction solutions tailored to your needs, ensuring excellence in every project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-none border-2 border-yellow-500 transition duration-300 flex items-center justify-center">
              <span className="mr-2">Get Started</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button className="bg-transparent hover:bg-yellow-500 text-yellow-500 hover:text-black font-bold py-3 px-8 rounded-none border-2 border-yellow-500 transition duration-300">
              Learn More
            </button>
          </div>

          <div className="w-16 h-1 bg-yellow-400 mb-16"></div>

          {/* Add StatItem components here */}
          <div className="flex justify-evenly mb-16">
            <StatItem number="100+" label="Projects" icon="🏗️" />
            <StatItem number="50+" label="Clients" icon="👥" />
            <StatItem number="98%" label="Satisfaction" icon="✅" />
          </div>
        </div>
      </div>

      {/* Combined Yellow and White Container with Overlapping Effect */}
      <div className="relative z-20 -mt-32 bg-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-center">
          {/* Yellow Container */}
          <motion.div
            ref={yellowContainerRef}
            className="bg-yellow-400 text-black p-8 rounded-t-lg md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={yellowContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
            <h4 className="text-4xl font-bold mb-6">Over 30 Years of Excellence</h4>
            <p className="text-gray-700">
              We pride ourselves on a legacy of quality, innovation, and sustainability, delivering projects that meet the highest standards.
            </p>
          </motion.div>

          {/* White Container */}
          <motion.div
            ref={whiteContainerRef}
            className="bg-white text-black p-8 rounded-b-lg md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={whiteContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Project Highlights</h3>
            <h4 className="text-2xl font-bold mb-6">Success Stories</h4>

            <div className="grid grid-cols-2 gap-8">
              {/* Additional content can go here */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background for the second section */}
      <div className="bg-white py-16">
        {/* Additional content can go here */}
      </div>
    </div>
  );
}