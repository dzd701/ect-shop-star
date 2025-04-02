import React from 'react';
import Header from '../../../components/ui/Header';
import ProductList from '../../../components/catalog/ProductList';

export default function CatalogPage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">קטלוג מכשירים סלולריים</h1>
        <ProductList />
      </div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center mb-4">
            <p className="mb-2">צור קשר:</p>
            <p className="mb-1">טלפון: 0544455213</p>
            <p>אימייל: ectshopstar@gmail.com</p>
          </div>
          <p>© 2025 ECT Shop Star. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </main>
  );
}
