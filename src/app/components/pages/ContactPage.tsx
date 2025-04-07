'use client'; 
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Map from '../Map'; 
import Navbar from '../Navbar';
import Footer from '../Footer';
import Image from 'next/image';
import bg from '../../../../public/pic1.jpg';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('contact-section');
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
      id="contact-section"
      className={`relative py-12 transition-transform duration-700 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <Navbar/>

      {/* Top Section with Background Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={bg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 z-0"
        />
        <div className="flex items-center justify-center h-full bg-black bg-opacity-60 z-10">
          <h1 className="text-white text-4xl font-bold text-center bg-[rgba(0,0,0,0.5)] z-30 p-4">
            CONTACT TRICIA
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 z-20">
        {/* Add gap between map and section */}
        <div className="mb-8 mt-4">
          <Map />
        </div>

        {/* Contact Form */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" className="border rounded w-full p-2" />
          </div>
          <div>
            <label className="block text-gray-700">Surname</label>
            <input type="text" className="border rounded w-full p-2" />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input type="tel" className="border rounded w-full p-2" />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" className="border rounded w-full p-2" />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea className="border rounded w-full p-2" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-[#FF2B6D] text-white px-4 py-2 rounded hover:bg-pink-600 transition">
            Book Online
          </button>
        </form>

        {/* Footer */}
        <Footer/>
      </div>
    </section>
  );
};

export default Contact;