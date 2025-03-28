'use client'; // Add this directive at the top

import { useState } from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import you from "./image/e28977e2-c930-419f-be96-3a7686693095.jpg"; // Ensure this path is correct

const Contact: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Show alert
        alert('Message submitted!');

        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section id="contact" className="py-16 bg-gray-100 text-center">
            <h1 className="text-4xl mb-10 text-black">Contact Us</h1>
            <div className="max-w-6xl mx-auto">

                {/* Map Section */}
                <h2 className="text-2xl text-black mb-6">Our Location</h2>
                <div className="w-[80vw] h-64 mx-auto mb-6">
                    <iframe
                        title="Google Map"
                        className="w-full h-full rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093826!2d144.953735315318!3d-37.81720997975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f0f5%3A0x5045675218ceed30!2sExample%20Location!5e0!3m2!1sen!2sus!4v1617085062303!5m2!1sen!2sus"
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Form and Image Section */}
                <div className="flex flex-col md:flex-row justify-center items-center"> {/* Center items */}
                    <div className="w-full md:w-1/2 p-4">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl text-black mb-6">Get In Touch</h2>
                            <form onSubmit={handleSubmit}>
                                <input
                                    className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    type="text"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <input
                                    className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    type="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <textarea
                                    className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder="Your Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4 flex justify-center"> {/* Center the image */}
                        <Image
                            src={you} // Use the Next.js Image component
                            alt="Construction Vehicle"
                            width={400} // Reduced width
                            height={200} // Reduced height
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Contact Information Section */}
        </section>
    );
};

export default Contact;