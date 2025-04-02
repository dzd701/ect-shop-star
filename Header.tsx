import React from 'react';
import Logo from '../../components/ui/Logo';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <nav>
          <ul className="flex space-x-6 space-x-reverse">
            <li><Link href="/he" className="text-gray-800 hover:text-purple-600 font-medium">דף הבית</Link></li>
            <li><Link href="/he/catalog" className="text-gray-800 hover:text-purple-600 font-medium">קטלוג</Link></li>
            <li><Link href="/he#contact" className="text-gray-800 hover:text-purple-600 font-medium">צור קשר</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
