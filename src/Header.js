import React, { useState } from 'react';
import logo from './images/Frame.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="pt-6 lg:pt-8">
      <div className="container mx-auto flex lg:px-24 items-center justify-between">

        <div className="block lg:hidden">
          <button onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="lg:mx-0 mx-auto">
          <img src={logo} alt='company logo' />
        </div>

        <div className="hidden lg:flex space-x-6 justify-between">
          <Link to="/" className="hover:text-blue-500 text-blue-deep font-bold">
            Home
          </Link>
          <Link to="/category" className="hover:text-blue-500 text-blue-deep font-bold">
            Category
          </Link>
          <Link to="/about" className="hover:text-blue-500 text-blue-deep font-bold">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-500 text-blue-deep font-bold">
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-1 pl-10 border rounded-full w-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M18 11a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <button className="bg-blue-950 text-white px-4 py-2 rounded-full">
            Join the community
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-full">
            Button2
          </button>
        </div>

        <div className="block lg:hidden">
        <button>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35M18 11a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden flex flex-col space-y-2 px-4 py-2">
          <nav className=""></nav>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link to="/category" className="hover:text-blue-500">
              Category
            </Link>
            <Link to="/about" className="hover:text-blue-500">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
