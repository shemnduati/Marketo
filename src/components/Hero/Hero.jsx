import React from "react";
import Img from "../../assets/hero.png";
import Img2 from "../../assets/logos/background.jpg";
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/20/solid';


const Hero = () => {
  return (
    <section>
      <div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px] bg-red-50" 
       
      >
        {/* Text Area */}
        <div className="flex flex-col justify-center items-center  ">
          <h1 className="text-8xl font-bold items-center">Business</h1>
          <h1 className="text-8xl font-bold items-center">Planning</h1>
          <p className="text-gray-400 mt-6 text-xl  items-center justify-center">
            We do our best to implement your ideas into the <br></br> project to make it
            successful & profitable.
          </p>
          <div className="mt-6 space-x-4 flex">
            <button className="text-white bg-black flex items-center px-6 py-4 mt-4 font-bold rounded-md shadow-sm">
              Discover Crafto
              <ArrowRightIcon className="ml-2 size-5 fill-white group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </button>
            <button className="text-black bg-white px-6 py-4 mt-4 font-bold rounded-md shadow-sm">
              Get Started
              </button>
          </div>
          <div className="flex gap-6 mt-32">
            <h4 className="flex items-center justify-center font-semibold">
                <CheckIcon className="size-6 bg-green-600 rounded-full mx-2 p-1 fill-white group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                Conversion Strategy
            </h4>
            <h4 className="flex items-center justify-center font-semibold">
                <CheckIcon className="size-6 bg-green-600 rounded-full mx-2 p-1 fill-white group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                Targeted Growth
            </h4>
          </div>
        </div>
        {/* Image Area */}
        <div className="flex w-full">
          <img src={Img} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
