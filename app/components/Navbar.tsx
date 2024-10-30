"use client"; // Ensure the component runs on the client side

import React, { useState } from 'react';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react'; // Example icons, update based on your icons source

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); // Initialize active link

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

   const handleLinkClick = (link :any) => {
    setActiveLink(link); // Set the active link
    closeMenu(); // Close the menu on link click (for mobile)
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-blue-700 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-lg">Al Madina Quranic Academy</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {['home', 'courses', 'about', 'register', 'contact', 'pricing'].map((link) => (
            <a
              key={link}
              className={`hover:text-blue-200 ${activeLink === link ? 'text-blue-200' : ''}`} // Active link styling
              href={`#${link}`}
              onClick={() => handleLinkClick(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)} {/* Capitalize first letter */}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden" onClick={handleMenuToggle}>
          {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 py-2">
          <nav className="flex flex-col items-center space-y-2 text-sm font-medium">
            {['home', 'courses', 'about', 'register', 'contact', 'pricing'].map((link) => (
              <a
                key={link}
                className={`hover:text-blue-200 ${activeLink === link ? 'text-blue-200' : ''}`} // Active link styling
                href={`#${link}`}
                onClick={() => handleLinkClick(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)} {/* Capitalize first letter */}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
