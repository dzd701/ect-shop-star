"use client";

import React, { useState } from 'react';
import { getBrands, getStorageOptions } from '../../lib/products';

interface FilterOptions {
  brand: string | null;
  storage: string | null;
  priceRange: {
    min: number;
    max: number;
  };
}

interface ProductFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
  resetFilters: () => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange, resetFilters }) => {
  const brands = getBrands();
  const storageOptions = getStorageOptions();
  
  const [filters, setFilters] = useState<FilterOptions>({
    brand: null,
    storage: null,
    priceRange: {
      min: 0,
      max: 6000
    }
  });

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === 'all' ? null : e.target.value;
    const newFilters = { ...filters, brand: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleStorageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === 'all' ? null : e.target.value;
    const newFilters = { ...filters, storage: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (min: number, max: number) => {
    const newFilters = { ...filters, priceRange: { min, max } };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const defaultFilters = {
      brand: null,
      storage: null,
      priceRange: {
        min: 0,
        max: 6000
      }
    };
    setFilters(defaultFilters);
    resetFilters();
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-bold mb-4">סינון מוצרים</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Brand Filter */}
        <div>
          <label htmlFor="brand-filter" className="block text-sm font-medium text-gray-700 mb-1">מותג</label>
          <select
            id="brand-filter"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={filters.brand || 'all'}
            onChange={handleBrandChange}
          >
            <option value="all">כל המותגים</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
        
        {/* Storage Filter */}
        <div>
          <label htmlFor="storage-filter" className="block text-sm font-medium text-gray-700 mb-1">נפח אחסון</label>
          <select
            id="storage-filter"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={filters.storage || 'all'}
            onChange={handleStorageChange}
          >
            <option value="all">כל האפשרויות</option>
            {storageOptions.map(storage => (
              <option key={storage} value={storage}>{storage}</option>
            ))}
          </select>
        </div>
        
        {/* Price Range Filter */}
        <div>
          <label htmlFor="price-filter" className="block text-sm font-medium text-gray-700 mb-1">טווח מחירים</label>
          <div className="flex items-center space-x-2 space-x-reverse">
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="מינימום"
              value={filters.priceRange.min}
              onChange={(e) => handlePriceChange(Number(e.target.value), filters.priceRange.max)}
            />
            <span>-</span>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="מקסימום"
              value={filters.priceRange.max}
              onChange={(e) => handlePriceChange(filters.priceRange.min, Number(e.target.value))}
            />
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <button
          onClick={handleReset}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          אפס סינון
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
