import React from 'react';
import Image from 'next/image';
import person from "./image/person.jpg";
import one from "./image/Bulldozer.jpg";

const ConstructionSection = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 uppercase tracking-tight">
            Hardhat Solutions 30
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Building the foundations for your future.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl">
            Leveraging decades of combined industry expertise, we're dedicated to delivering exceptional construction solutions worldwide. We prioritize quality, efficiency, and client satisfaction in every project.
          </p>
        </div>

        {/* Two Column Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16 min-h-[50vh]">
          {/* Left Column - Text Content (50%) */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">•</span>
                <span className="text-gray-800 font-medium">Commitment to Excellence in Project Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">•</span>
                <span className="text-gray-800 font-medium">Focus on Client Success and Resource Optimization</span>
              </li>
            </ul>

            <div className="border-t border-gray-300 my-6 w-full"></div>

            <div className="flex items-center mb-8">
              {/* Phone SVG Icon */}
              <svg
                className="w-6 h-6 text-black-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <p className="text-2xl font-bold text-gray-800">+123 555 8824</p>
                <p className="text-lg text-gray-600">Contact us for a free consultation!</p>
              </div>
            </div>

            <div className="border-t border-gray-300 my-6 w-full"></div>

            <div className="flex items-center mb-8">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-gray-300">
                <Image
                  src={person}
                  alt="Project Manager"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800 uppercase">John Smith</p>
                <p className="text-lg text-gray-600">Lead Project Manager</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With over 30 years of experience, we've cultivated a unique and collaborative work environment, ensuring every project meets our high standards.
            </p>
          </div>

          {/* Right Column - Image (50%) */}
          <div className="lg:w-1/2 relative min-h-[400px]">
            <div className="relative h-full w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src={one}
                alt="Construction site"
                fill
                className="object-cover"
                priority
              />
              {/* Folded corner effect */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-100 transform rotate-45 origin-bottom-right z-0"></div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            {/* Folded corner effect */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-100 transform rotate-45 origin-bottom-right z-0"></div>
            {/* Video container with shadow */}
            <div className="relative z-10 overflow-hidden shadow-xl rounded-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full min-h-[400px]"
                  src="https://www.youtube.com/embed/your_video_id" // Replace your_video_id
                  title="Construction timelapse"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase">
            Building the Future Together
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ConstructionSection;