import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">צור קשר</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="mb-6 text-center">
            <p className="text-lg mb-2">ECT Shop Star</p>
            <p className="mb-1">טלפון: 0544455213</p>
            <p className="mb-4">אימייל: ectshopstar@gmail.com</p>
          </div>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">שם מלא</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="הכנס את שמך המלא"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">מספר טלפון</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="הכנס את מספר הטלפון שלך"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">דוא"ל</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="הכנס את כתובת הדוא״ל שלך"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">הודעה</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="כתוב את הודעתך כאן"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
              >
                שלח הודעה
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
