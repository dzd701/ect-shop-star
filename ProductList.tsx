"use client";

import React, { useState, useEffect } from 'react';
import { Product, products } from '../../lib/products';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';

const ProductList: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  
  const handleFilterChange = (filters: {
    brand: string | null;
    storage: string | null;
    priceRange: {
      min: number;
      max: number;
    };
  }) => {
    let result = [...products];
    
    // Filter by brand
    if (filters.brand) {
      result = result.filter(product => product.brand === filters.brand);
    }
    
    // Filter by storage
    if (filters.storage) {
      result = result.filter(product => product.storage === filters.storage);
    }
    
    // Filter by price range
    result = result.filter(
      product => product.price >= filters.priceRange.min && product.price <= filters.priceRange.max
    );
    
    setFilteredProducts(result);
  };
  
  const resetFilters = () => {
    setFilteredProducts(products);
  };
  
  return (
    <div>
      <ProductFilter onFilterChange={handleFilterChange} resetFilters={resetFilters} />
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">לא נמצאו מוצרים התואמים את הסינון שבחרת</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
