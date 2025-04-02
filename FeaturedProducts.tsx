import React from 'react';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">מכשירים מובילים</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <div className="w-24 h-40 bg-gray-800 rounded-lg border-2 border-gray-700 flex items-center justify-center">
                <div className="w-20 h-32 bg-blue-400 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-bold">מכשיר 1</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">סמארטפון פרימיום</h3>
              <p className="text-gray-600 mb-4">מסך 6.7 אינץ', מעבד מתקדם, מצלמה 108MP</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold text-xl">₪3,499</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">פרטים נוספים</button>
              </div>
            </div>
          </div>
          
          {/* Product Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <div className="w-24 h-40 bg-gray-800 rounded-lg border-2 border-gray-700 flex items-center justify-center">
                <div className="w-20 h-32 bg-green-400 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-bold">מכשיר 2</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">סמארטפון מתקדם</h3>
              <p className="text-gray-600 mb-4">מסך 6.4 אינץ', סוללה חזקה, מצלמה כפולה</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold text-xl">₪2,199</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">פרטים נוספים</button>
              </div>
            </div>
          </div>
          
          {/* Product Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <div className="w-24 h-40 bg-gray-800 rounded-lg border-2 border-gray-700 flex items-center justify-center">
                <div className="w-20 h-32 bg-purple-400 rounded-md flex items-center justify-center">
                  <span className="text-white text-sm font-bold">מכשיר 3</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">סמארטפון חסכוני</h3>
              <p className="text-gray-600 mb-4">מסך 6.1 אינץ', מעבד יעיל, מחיר משתלם</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold text-xl">₪1,299</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">פרטים נוספים</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <a href="/he/catalog" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">לצפייה בכל המכשירים</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
