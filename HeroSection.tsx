import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">המכשירים הסלולריים המתקדמים ביותר</h1>
            <p className="text-xl mb-6">מגוון רחב של מכשירים סלולריים מהמותגים המובילים במחירים אטרקטיביים</p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="/he/catalog" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">לקטלוג המכשירים</a>
              <a href="/he#contact" className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition">צור קשר</a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
              <div className="relative flex items-center justify-center h-full">
                <div className="w-48 h-80 bg-gray-800 rounded-3xl border-4 border-gray-700 flex items-center justify-center">
                  <div className="w-44 h-72 bg-blue-400 rounded-2xl flex items-center justify-center overflow-hidden">
                    <span className="text-white text-xl font-bold">סמארטפון</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
