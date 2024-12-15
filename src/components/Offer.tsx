import React from 'react';
import { Headphones, CirclePlay, WalletCards } from 'lucide-react';

const Offer = () => {
  return (
    <div className="flex flex-col items-center py-12 px-16">
      {/* Title */}
      <h3 className="text-[#4e4e4e] text-lg tracking-widest uppercase mb-6 font-semibold">What I can do for you:</h3>

      <div className='border-b-2 border-b-gray-500/50 w-12 mb-8'></div>

      {/* Offer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center my-14">
        {/* Collaborations */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 mb-4">
            {/* Headphone Icon */}
            <Headphones size={40} className='text-[#E8DAD3]'/>
          </div>
          <h4 className="text-[30px] font-medium mb-2">Collaborations</h4>
          <p className="text-gray-500 text-xl leading-relaxed">
            Lorem ipsum dolor sit amet adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.
          </p>
        </div>

        {/* Content Creation */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 mb-4">
            {/* Play Icon */}
            <CirclePlay size={40} className='text-[#E8DAD3]'/>
          </div>
          <h4 className="text-[30px] font-medium mb-2">Content Creation</h4>
          <p className="text-gray-500 text-xl leading-relaxed">
            Lorem ipsum dolor sit amet adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.
          </p>
        </div>

        {/* Consulting */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 mb-4">
            {/* Bag Icon */}
            <WalletCards size={40} className='text-[#E8DAD3]'/>
          </div>
          <h4 className="text-[30px] font-medium mb-2">Consulting</h4>
          <p className="text-gray-500 text-xl leading-relaxed">
            Lorem ipsum dolor sit amet adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.
          </p>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="mt-12">
        <button className="px-20 py-6 bg-[#f8eae4] text-black font-medium tracking-widest">
          NEED SOMETHING ELSE? INQUIRE
        </button>
      </div>
    </div>
  );
};

export default Offer;
