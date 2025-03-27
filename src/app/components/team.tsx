'use client'; // Ensure this is at the top of your file

import React, { useState } from 'react';
import Image from 'next/image';
import image2 from './image/image 2.jpg'; // Ensure the file exists and path is correct
import image7 from './image/image7.jpg'; // Ensure the file exists and path is correct
import image6 from './image/image6.jpg'; // Ensure the file exists and path is correct
import three from"./image/e28977e2-c930-419f-be96-3a7686693095.jpg"

const teamMembers = [
    {
        name: 'Richard Jackson',
        position: 'Project Manager',
        imageUrl: image2,
    },
    {
        name: 'Molly Squared',
        position: 'Lead Engineer',
        imageUrl: image7,
    },
    {
        name: 'Amy Phillips',
        position: 'Design Specialist',
        imageUrl: image6,
    },
];

const Services2: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <section className="py-16 bg-gray-100">
            {/* Meet Our Team Section */}
            <div className="py-16 max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-10">Meet Our Expert Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
                            <Image 
                                src={member.imageUrl} 
                                alt={member.name} 
                                width={500} // Adjust width as needed
                                height={300} // Adjust height as needed
                                className="w-full h-48 object-cover" 
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-600">{member.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-none border-2 border-yellow-500 transition duration-300 "
                        onClick={toggleModal}
                    >
                        Read More
                    </button>
                </div>
            </div>

            {/* Start Here Section with Background Image */}
            <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${image6.src})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                    <h2 className="text-4xl font-bold mb-4">Your Project Starts Here</h2>
                    <p className="mb-4">Ready to take the next step? Let’s get started on your project today!</p>
                    <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-none border-2 border-yellow-500 transition duration-300 "
                        onClick={toggleModal}
                    >
                        Get Started
                    </button>
                </div>
            </div>

            {/* Modal for Form */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
                    <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3 relative">
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                            onClick={toggleModal}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h3 className="text-xl font-semibold mb-4">Get Started with Your Project</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="border rounded w-full py-2 px-3 text-gray-700"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="border rounded w-full py-2 px-3 text-gray-700"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    className="border rounded w-full py-2 px-3 text-gray-700"
                                    placeholder="Your Message"
                                    rows={3}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-none border-2 border-yellow-500 transition duration-300 "
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Services2;