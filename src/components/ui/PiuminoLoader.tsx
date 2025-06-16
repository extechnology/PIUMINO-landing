import React from 'react';

const PiuminoLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="relative">
        {/* Main logo container with pulse animation */}
        <div className="animate-pulse">
          {/* Red background with rounded corners */}
          <div className="bg-red-500 rounded-3xl px-8 py-6 relative overflow-hidden">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            
            {/* Logo content */}
            <div className="relative z-10">
              {/* Butterfly icon with rotation animation */}
              <div className="flex items-center justify-center mb-2">
                <div className="animate-spin duration-3000">
                  <svg width="40" height="30" viewBox="0 0 40 30" className="fill-white">
                    {/* Left wing */}
                    <ellipse cx="12" cy="15" rx="12" ry="8" transform="rotate(-20 12 15)" />
                    {/* Right wing */}
                    <ellipse cx="28" cy="15" rx="12" ry="8" transform="rotate(20 28 15)" />
                  </svg>
                </div>
              </div>
              
              {/* PIUMINO text */}
              <div className="text-white font-bold text-4xl tracking-wider mb-1">
                PIUMINO
              </div>
              
              {/* Trademark symbol */}
              <div className="absolute top-2 right-2 text-white text-xs font-bold">
                TM
              </div>
              
              {/* Tagline */}
              <div className="text-white text-sm italic font-light tracking-wide">
                the genuine PU chappals
              </div>
            </div>
          </div>
        </div>
        
        {/* Loading dots animation */}
        <div className="flex justify-center mt-6 space-x-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
        
        {/* Optional loading text */}
        <div className="text-center mt-4 text-gray-600 text-sm animate-pulse">
          Loading...
        </div>
      </div>
      
      {/* Additional spinning ring around the logo */}
      <div className="absolute w-32 h-32 border-4 border-red-200 border-t-red-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default PiuminoLoader;