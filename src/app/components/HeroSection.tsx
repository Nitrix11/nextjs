// components/HeroSection.tsx

import Image from 'next/image';
import pic1 from "../components/image/pic1.jpg"; // Optional fallback image

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full -z-10"
      >
        <source src="/ideo1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Introducing Tricia, Founder of Nourish and Flourish
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-4">
          Where every bite is a celebration of flavor.
        </p>
        <a
          href="#"
          className="mt-6 px-6 py-3 bg-[#FF2B6D] text-white text-lg rounded hover:bg-[#FF2B6b] transition"
        >
          LEARN MORE
        </a>
      </div>
    </div>
  );
};

export default HeroSection;