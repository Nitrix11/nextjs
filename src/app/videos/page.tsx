'use client';

import React, { useState } from 'react';
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const Videos = () => {
  const [filter, setFilter] = useState('All');

  const videoData = [
    {
      id: 1,
      title: 'Mastering the Art of Pasta',
      category: 'Cooking',
      thumbnail: '/images/pasta.jpg',
      videoUrl: '/videos/pasta.mp4',
    },
    {
      id: 2,
      title: 'Asian Ribbon Salad Recipe',
      category: 'Salads',
      thumbnail: '/images/salad.jpg',
      videoUrl: '/videos/salad.mp4',
    },
    {
      id: 3,
      title: 'The Perfect Amarula Dessert',
      category: 'Desserts',
      thumbnail: '/images/dessert.jpg',
      videoUrl: '/videos/dessert.mp4',
    },
    {
      id: 4,
      title: 'Vegetable Soup for the Soul',
      category: 'Soups',
      thumbnail: '/images/soup.jpg',
      videoUrl: '/videos/soup.mp4',
    },
    {
      id: 5,
      title: 'Hosting with Elegance: Asian Fillet Tips',
      category: 'Entertaining',
      thumbnail: '/images/fillet.jpg',
      videoUrl: '/videos/fillet.mp4',
    },
  ];

  const categories = ['All', 'Cooking', 'Salads', 'Desserts', 'Soups', 'Entertaining'];

  const filteredVideos =
    filter === 'All' ? videoData : videoData.filter((video) => video.category === filter);

  return (
    <div className="bg-black-50 min-h-screen p-6">
        <Navbar/>
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-800">Nourish and Flourish Videos</h1>
          <p className="text-600 mt-2">
            Explore our video collection to inspire your culinary journey.
          </p>
        </header>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm font-medium rounded-full ${
                filter === category
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-[#333] rounded-lg shadow-lg overflow-hidden"
            >
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              {/* Video Info */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-800">{video.title}</h2>
                <p className="text-sm text-500 mt-1">{video.category}</p>
              </div>
              {/* Hover Play Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-pink-600 text-white text-sm font-medium rounded-full hover:bg-[#D32B6D]-700"
                >
                  Watch Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Videos;