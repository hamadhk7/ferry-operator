// File: components/OperatorsList.tsx
'use client';

import { useState } from 'react';
import { operators } from '@/data/operators';
import OperatorCard from './OperatorCard';
import FilterBox from './FilterBox';

export default function OperatorsList() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  return (
//     
<div className="w-full max-w-6xl mx-auto px-4">
  <div className="flex justify-between items-center border-b pb-4 mb-6">
    <div>
      <h1 className="text-2xl font-bold mb-2">Ferry operators</h1>
      <p className="text-gray-600">Discover the <span className="font-bold">57 ferry operators</span> we work with</p>
    </div>
    <button className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white border-5 border-yellow-100 rounded-lg hover:bg-cyan-700 hover:border-cyan-700">
      <span>Book your tickets</span>
      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
  </div>
  
  <div className="flex flex-col md:flex-row justify-between mb-6">
    <div className="flex space-x-4 mb-4 md:mb-0">
      <button 
        className="flex items-center px-4 py-2 border rounded-md bg-white"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6h16M4 12h16M4 18h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Filters
      </button>
      
      <div className="relative">
        <button className="flex items-center px-4 py-2 border rounded-md bg-white">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H14M4 18H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Sort by: Reviews number (high first)
          <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      {/* Remove search div in mobile view */}
      <div className="relative hidden md:block">
        <button className="flex items-center px-4 py-2 border rounded-md bg-white">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21l-4.35-4.35M18 10a8 8 0 1 1-8-8 8 8 0 0 1 8 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Search
          <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    
    <div className="hidden md:block">
      <button className="inline-flex items-center px-4 py-2 bg-white text-cyan-500 border rounded-md">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="#00bcd4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#00bcd4" strokeWidth="2" fill="none"/>
          <path stroke="#00bcd4" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
          <path stroke="#00bcd4" strokeWidth="2" d="M4.93 4.93l14.14 14.14"/>
          <path stroke="#00bcd4" strokeWidth="2" d="M4.93 19.07l14.14-14.14"/>
        </svg>
        Live Map View
      </button>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="md:col-span-1">
      <FilterBox isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </div>
    
    <div className="md:col-span-2">
      {operators.map(operator => (
        <OperatorCard key={operator.id} operator={operator} />
      ))}
    </div>
  </div>
</div>

  );
}
