import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative w-10 h-10 mr-2">
        <div className="absolute inset-0 bg-purple-600 rounded-lg transform rotate-45"></div>
        <div className="absolute inset-1 bg-white rounded-lg transform rotate-45 flex items-center justify-center">
          <div className="w-6 h-6 bg-purple-600 rounded-sm transform -rotate-45 flex items-center justify-center">
            <span className="text-white text-xs font-bold">ECT</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col rtl:mr-2">
        <div className="text-xl font-bold text-purple-600">ECT Shop Star</div>
        <div className="text-xs text-gray-500">חנות מכשירים סלולריים</div>
      </div>
    </div>
  );
};

export default Logo;
