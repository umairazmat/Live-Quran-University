"use client"; 
import React, { useState } from 'react';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react'; 
import Image from 'next/image';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-blue-700 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image 
            src="/placeholder.svg" 
            alt="Logo" 
            className="h-8 w-8" 
            width={32} 
            height={32} 
          />
          <span className="font-bold text-lg">Al Madina Quranic Academy</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {['home', 'courses', 'about', 'register', 'contact', 'pricing'].map((link) => (
            <a
              key={link}
              className="font-bold hover:text-blue-200" 
              href={`#${link}`}
              onClick={closeMenu}
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
                className="font-bold hover:text-blue-200"
                onClick={closeMenu}
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
