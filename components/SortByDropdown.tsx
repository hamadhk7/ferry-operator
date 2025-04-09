// File: components/SortByDropdown.tsx
'use client';

import { useState } from 'react';

export default function SortByDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState('Reviews');
  
  return (
    <div className="relative">
      <button 
        className="flex items-center px-4 py-2 border rounded-md bg-white" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H14M4 18H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Sort by: {sortOption}
        <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg">
          <ul>
            {['Reviews', 'Name (A-Z)', 'Name (Z-A)'].map((option) => (
              <li 
                key={option} 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSortOption(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}