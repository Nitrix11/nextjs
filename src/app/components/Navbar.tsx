// components/Navbar.tsx

'use client'; // Add this line

import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-accent shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Text */}
        <div className="text-xl font-bold text-primary">
          Nourish and Flourish
        </div>

        {/* Hamburger Menu */}
        <div className="flex-1 text-center">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <Link href="#" passHref>
            <p className="text-black hover:text-primary">
              <i className="fab fa-facebook-f"></i>
            </p>
          </Link>
          <Link href="#" passHref>
            <p className="text-black hover:text-primary">
              <i className="fab fa-instagram"></i>
            </p>
          </Link>
          <Link href="#" passHref>
            <p className="text-black hover:text-primary">
              <i className="fab fa-twitter"></i>
            </p>
          </Link>
          <Link href="#" passHref>
            <p className="text-white hover:text-primary">
              <i className="fab fa-pinterest-p"></i>
            </p>
          </Link>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto py-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" passHref>
                <p className="block px-4 py-2 hover:bg-primary">Home</p>
              </Link>
              <Link href="/about" passHref>
                <p className="block px-4 py-2 hover:bg-primary">About</p>
              </Link>
              <Link href="/restaurant" passHref>
                <p className="block px-4 py-2 hover:bg-primary">Restaurant</p>
              </Link>
              <Link href="/recipes" passHref>
                <p className="block px-4 py-2 hover:bg-primary">Recipes</p>
              </Link>
              <Link href="/videos" passHref>
                <p className="block px-4 py-2 hover:bg-primary">Videos</p>
              </Link>
              <Link href="/contact" passHref>
                <p className="block px-4 py-2 hover:bg-primary">Contact</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;