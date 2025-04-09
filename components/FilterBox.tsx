// File: components/FilterBox.tsx
'use client';

import { useState } from 'react';

interface FilterBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FilterBox({ isOpen, onClose }: FilterBoxProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  
  if (!isOpen) return null;
  
  return (
    <div className="border rounded-md bg-white p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Filters</h3>
        <button onClick={onClose} className="text-gray-500">×</button>
      </div>
      
      <div className="mb-4">
        <h4 className="font-medium mb-2">Operating in</h4>
        <div className="relative">
          <select 
            className="w-full p-2 border rounded-md appearance-none bg-white pr-8" 
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">Select a country</option>
            <option value="greece">Greece</option>
            <option value="italy">Italy</option>
            <option value="spain">Spain</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-medium mb-2">Ferry types</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Normal ferries</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>High-speed ferries</span>
          </label>
        </div>
      </div>
    </div>
  );
}