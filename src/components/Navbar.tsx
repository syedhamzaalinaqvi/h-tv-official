'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between mb-4 md:mb-0">
          <Link href="/" className="flex items-center">
            <span className="text-white text-2xl font-bold ml-2">H-TV Stream</span>
          </Link>
        </div>
        
        <nav className="flex flex-wrap items-center">
          <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4 text-sm md:text-base w-full overflow-x-auto py-2">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-3 py-1 rounded-full transition-colors ${
                activeCategory === 'all'
                  ? 'bg-accent text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? 'bg-accent text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
