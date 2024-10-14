import React from 'react';
import about from "../../assets/marketing.jpg";
import strategic from "../../assets/strategic.jpg";
import market from "../../assets/market.jpg";

const About = () => {
  return (
   <section>
    <div className='container grid grid-cols-1 md:grid-cols-2 gap-18 min-h-[650px]'>
      <div className='flex items-center justify-center'>
        <img src={ about } alt="About Image" />
      </div>
      <div className='flex flex-col pl-16  justify-center'>
        <h2 className='font-bold text-red-400 py-2'>ABOUT MARKETING AGENCY</h2>
        <h2 className='font-bold text-5xl py-2 justify-center'>Marketing solutions <br /> for all enterprice</h2>
        <div className='flex gap-6 py-4'>
          <div>
            <img src={ strategic } alt="Strategic Image" />
          </div>
          <div>
            <h4 className='font-bold'>Strategic marketing</h4>
            <p>Digital marketing that helps you to <br /> to promote your brand the world</p>
          </div>
        </div>
        <div className='flex gap-6 py-4'>
          <div>
            <img src={ strategic } alt="Strategic Image" />
          </div>
          <div>
            <h4 className='font-bold'>Strategic marketing</h4>
            <p>Digital marketing that helps you to <br /> to promote your brand the world</p>
          </div>
        </div>
        <div className="mt-6 gap-6">
            <button className="text-white bg-black px-6 py-4 mt-4 font-bold rounded-md shadow-sm">
             Learn more
              </button>
            <button className="text-black bg-white px-6 py-4 mt-4 font-bold rounded-md shadow-sm">
             Our services
              </button>
          </div>
      </div>
    </div>
   </section>
  )
}

export default About