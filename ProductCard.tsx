"use client";

import React from 'react';
import { Product } from '../../lib/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <div className="w-24 h-40 bg-gray-800 rounded-lg border-2 border-gray-700 flex items-center justify-center">
          <div className={`w-20 h-32 ${product.brand === 'Apple' ? 'bg-gray-200' : 'bg-blue-400'} rounded-md flex items-center justify-center`}>
            <span className="text-center text-sm font-bold px-2">{product.model}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{product.model}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">{product.brand}</span>
        </div>
        <p className="text-gray-600 mb-2">נפח אחסון: {product.storage}</p>
        
        {product.specs && (
          <div className="mb-4 text-sm">
            <div className="grid grid-cols-1 gap-1">
              {product.specs.display && <p className="text-gray-600">מסך: {product.specs.display}</p>}
              {product.specs.camera && <p className="text-gray-600">מצלמה: {product.specs.camera}</p>}
              {product.specs.processor && <p className="text-gray-600">מעבד: {product.specs.processor}</p>}
              {product.specs.battery && <p className="text-gray-600">סוללה: {product.specs.battery}</p>}
              {product.specs.os && <p className="text-gray-600">מערכת הפעלה: {product.specs.os}</p>}
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-purple-600 font-bold text-xl">₪{product.price.toLocaleString()}</span>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">הוסף לסל</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
