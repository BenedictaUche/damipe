import React from 'react'
import damipeSide from '../assets/images/damipe-side.png'
import damipeStudio from '../assets/images/damipe-studio.png'
import damipeSwing from '../assets/images/damipe-swing.png'
import damipeButterfly from '../assets/images/damipe-butterfly.png'

const Footer = () => {
  return (
    <footer className="bg-[#f8eae4] text-gray-700 py-16 px-6 md:px-12">
      {/* Upper Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-5xl font-light mb-4">
            Instagram
          </h2>
          <p className="text-gray-500 text-sm">
            Taiyaki occupy farm-to-table swag fashion axe four loko. Church-key palo santo selvage.
          </p>
          <p className="text-base mt-2 text-gray-400 font-medium">@damipe</p>
        </div>
        {/* Images Section */}
        <div className="grid grid-cols-4 gap-2">
          <img src={damipeSide} alt="Side" className="h-32 w-full object-cover" />
          <img src={damipeStudio} alt="Studio" className="h-32 w-full object-cover" />
          <img src={damipeSwing} alt="Swing" className="h-32 w-full object-cover" />
          <img src={damipeButterfly} alt="Butterfly" className="h-32 w-full object-cover" />
        </div>
      </div>

      {/* Lower Section */}
      <div className="border-t border-gray-200 mt-12 pt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section - Style Icon */}
        <div className="flex justify-center md:justify-start items-center">
          <div className="border border-gray-400 rounded-full w-32 h-32 flex flex-col justify-center items-center">
            <p className="text-xs uppercase text-gray-500 tracking-widest">Stories</p>
            <p className="text-3xl font-medium">Damipe</p>
            <p className="text-xs uppercase text-gray-500 tracking-widest">Vibes</p>
          </div>
        </div>

        {/* Center Section - Links */}
        <div className="flex flex-col space-y-2 text-sm text-gray-600">
          <p className="uppercase font-medium text-gray-800 mb-2">Home</p>
          <p>About</p>
          <p>Coaching</p>
          <p>Podcast</p>
          <p>Content</p>
          <p>Portfolio</p>
          <p>Contact Us</p>
          <p>The Blog</p>
        </div>

        {/* Right Section - Subscription */}
        <div>
          <p className="italic text-gray-500 mb-2 text-sm">
            Like peeking behind the scenes?
          </p>
          <h3 className="text-lg font-medium mb-4">
            Get on the <span className="font-light">75 List</span>
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Poke fixie kickstarter fashion axe mixtape. You’ll also get my exclusive free preset!
          </p>
          <button className="text-xs uppercase font-medium tracking-wide hover:underline">
            Get on the list
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
