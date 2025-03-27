// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Company Info */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Company Info</h2>
                        <p className="mb-2">About Us</p>
                        <p className="mb-2">Careers</p>
                        <p className="mb-2">Privacy Policy</p>
                        <p className="mb-2">Terms of Service</p>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                        <p className="mb-2"><a href="/services" className="hover:underline">Services</a></p>
                        <p className="mb-2"><a href="/projects" className="hover:underline">Projects</a></p>
                        <p className="mb-2"><a href="/testimonials" className="hover:underline">Testimonials</a></p>
                        <p className="mb-2"><a href="/contact" className="hover:underline">Contact Us</a></p>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <p className="mb-2">Phone: (123) 456-7890</p>
                        <p className="mb-2">Email: info@example.com</p>
                        <p className="mb-2">Address: 123 Main St, City, Country</p>
                    </div>

                    {/* Newsletter Subscription */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                        <form className="flex flex-col">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="p-2 rounded mb-2 text-black"
                                required
                            />
                            <button className="bg-yellow-500 text-white py-2 rounded hover:bg-orange-600 transition">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="bg-gray-800 text-center py-4">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;