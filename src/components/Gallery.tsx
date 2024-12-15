import React from 'react';
import damipeSari from '../assets/images/damipe-indian-hot.png';
import tajMahal from '../assets/images/taj-mahal.png';
import damipeSide from '../assets/images/damipe-side.png';

const Gallery = () => {
  return (
    <div className="flex flex-col items-center py-12 px-6 md:px-16">
      {/* Title */}
      <h3 className="text-[#4e4e4e] text-lg md:text-xl tracking-widest uppercase mb-4 font-semibold">
        Vibes for Days:
      </h3>

      {/* Divider */}
      <div className="border-b-2 border-gray-400 w-12 mb-8"></div>

      {/* Gallery Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-5xl">
        {/* Large Image Section */}
        <div
          className="relative group h-64 md:h-[32rem] bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${damipeSari})` }}
        >
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <p className="text-white text-2xl font-bold uppercase">Fashion</p>
          </div>
        </div>

        {/* Two Smaller Images */}
        <div className="flex flex-col gap-6">
          <div
            className="relative group h-64 bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${damipeSide})` }}
          >
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-2xl font-bold uppercase">Beauty</p>
            </div>
          </div>
          <div
            className="relative group h-64 bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${tajMahal})` }}
          >
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-2xl font-bold uppercase">Travel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
