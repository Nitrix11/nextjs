// components/Footer.tsx

const Footer: React.FC = () => {
    return (
      <footer className="bg-black-800 py-12 relative">
        <div className="absolute inset-0 bg-black opacity-30"></div> 
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <div className="flex justify-center mb-6">
            {/* Social Media Links */}
            <a href="#" className="mx-2 text-white hover:text-blue-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="mx-2 text-white hover:text-blue-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="mx-2 text-white hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="mx-2 text-white hover:text-blue-400">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="mx-2 text-white hover:text-blue-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
  
          {/* Navigation Links */}
          <nav className="mb-6">
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="#" className="text-white hover:text-blue-400">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-400">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-400">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-400">About Us</a>
              </li>
            </ul>
          </nav>
  
          {/* Newsletter Subscription */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-white">Subscribe to Our Newsletter</h3>
            <form className="flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="border rounded-l-lg p-2 w-64"
                required
              />
              <button type="submit" className="bg-[#FF2B6D] text-white px-4 rounded-r-lg hover:bg-blue-700 transition">
                Subscribe
              </button>
            </form>
          </div>
  
          {/* Brand Title */}
          <h1 className="text-2xl font-bold mb-2 text-white">Nourish and Flourish!</h1>
  
          {/* Copyright Information */}
          <p className="text-gray-300 text-sm mb-6">Copyright © 2025 The Tricia Co, all rights reserved.</p>
  
          {/* Call to Action Button */}
          <div className="mt-4">
            <a href="#" className="bg-[#FF2B6D] text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Book Now
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;