"use client"; // Ensure this is at the top of your file

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import electricalService1 from './image/pic4.jpeg'; // Update image paths
import electricalService2 from './image/pic5.jpeg'; 
import electricalService3 from './image/pic9.jpeg';
import Image from 'next/image';
import hero2 from "./image/pic1.jpeg"; // Update hero image
import { motion } from 'framer-motion';
import { FaBolt, FaTools, FaProjectDiagram, FaLightbulb, FaShieldAlt } from 'react-icons/fa'; // Import relevant icons

const servicesData = [
  {
    title: 'Electrical Installations',
    description: 'Professional installations for residential and commercial properties.',
    imageUrl: electricalService1,
    additionalInfo: '✔ Lighting systems\n✔ Wiring upgrades\n✔ Circuit installations',
    icon: <FaBolt className="text-4xl text-yellow-500 mb-4" />,
  },
  {
    title: 'Maintenance Services',
    description: 'Regular maintenance to ensure your electrical systems are safe and efficient.',
    imageUrl: electricalService2,
    additionalInfo: '✔ Safety inspections\n✔ Routine servicing\n✔ Emergency repairs',
    icon: <FaTools className="text-4xl text-yellow-500 mb-4" />,
  },
  {
    title: 'Project Management',
    description: 'Expert management to ensure timely and efficient electrical project completion.',
    imageUrl: electricalService3,
    additionalInfo: '✔ Budget management\n✔ Schedule oversight\n✔ Risk assessment',
    icon: <FaProjectDiagram className="text-4xl text-yellow-500 mb-4" />,
  },
  {
    title: 'Smart Home Solutions',
    description: 'Innovative smart home installations for convenience and efficiency.',
    imageUrl: electricalService1,
    additionalInfo: '✔ Smart lighting\n✔ Home automation\n✔ Energy management',
    icon: <FaLightbulb className="text-4xl text-yellow-500 mb-4" />,
  },
  {
    title: 'Emergency Services',
    description: '24/7 emergency electrical services for unexpected issues.',
    imageUrl: electricalService2,
    additionalInfo: '✔ Quick response\n✔ Safety assured\n✔ Comprehensive repairs',
    icon: <FaShieldAlt className="text-4xl text-yellow-500 mb-4" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-white pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-black text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Electrical Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center text-center relative transition-transform transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-full h-40 relative">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-t-lg mb-4"
                  />
                </div>
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded">
                  Featured
                </div>
                <h3 className="text-2xl font-semibold mb-2 mt-12">{service.title}</h3>
                <p className="text-gray-700 mb-2">{service.description}</p>
                <p className="text-gray-500 text-sm">{service.additionalInfo}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="my-10" />

      <div className="py-16 bg-black text-white">
        <div className="gap-[200px] max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center">
            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Why Choose Us?
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We provide top-notch electrical services that ensure your safety and satisfaction. Our experienced team is dedicated to delivering quality results tailored to your needs.
            </motion.p>
            <motion.p
              className="text-gray-300 mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our commitment to excellence and client satisfaction has made us a leader in the industry. We focus on innovative solutions and effective project management to achieve your vision.
            </motion.p>
            <motion.ul
              className="list-disc list-inside text-left mx-auto"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <li>Expert Team with Industry Experience</li>
              <li>Quality Assurance and Continuous Improvement</li>
              <li>Customer-Centric Approach with Open Communication</li>
              <li>Timely Delivery of Projects with No Compromises</li>
            </motion.ul>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={hero2}
                alt="Why Choose Us"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;