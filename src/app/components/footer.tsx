import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Company Info */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">ElectraFix</h2>
                        <p className="mb-2"><a href="/about" className="hover:underline">About Us</a></p>
                        <p className="mb-2"><a href="/careers" className="hover:underline">Careers</a></p>
                        <p className="mb-2"><a href="/privacy" className="hover:underline">Privacy Policy</a></p>
                        <p className="mb-2"><a href="/terms" className="hover:underline">Terms of Service</a></p>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                        <p className="mb-2"><a href="/services" className="hover:underline">Our Services</a></p>
                        <p className="mb-2"><a href="/projects" className="hover:underline">Our Projects</a></p>
                        <p className="mb-2"><a href="/testimonials" className="hover:underline">Client Testimonials</a></p>
                        <p className="mb-2"><a href="/contact" className="hover:underline">Contact Us</a></p>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <p className="mb-2">Phone: (123) 456-7890</p>
                        <p className="mb-2">Email: info@ElectraFix.com</p>
                        <p className="mb-2">Address: 123 Electric Ave, City, Country</p>
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
                <p>&copy; {new Date().getFullYear()} ElectraFix. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;