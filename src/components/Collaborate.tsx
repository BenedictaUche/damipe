import damipeStanding from '../assets/images/damipe-standing-looking-back.jpg'
import { Button } from './ui/button'

const Collaborate = () => {
  return (
    <div
      className="h-screen flex justify-center items-center px-4 bg-cover bg-center mx-24 my-14"
      style={{ backgroundImage: `url(${damipeStanding})` }}
    >
      <div className="bg-[#efded6] p-8 md:px-24 md:py-28 shadow-lg max-w-3xl">
        <h3 className="text-2xl md:text-[50px] font-light text-[#4e4e4e] leading-snug">
          Shall we create something
          <span className="italic font-medium"> beautiful</span>, together, or what?
        </h3>
        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          We take a limited number of brand commissions each quarter and would love to work with you.
          Brand packages begin at <span className="font-medium">$7500</span> and we
        </p>
        <div className="mt-6">
          <Button
            className="uppercase text-sm w-[16em] h-[4.7em] bg-white text-[#4e4e4e] rounded-none hover:bg-gray-100 border border-gray-300 transition"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Collaborate
