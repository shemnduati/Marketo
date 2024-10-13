import React from "react";
import Img from "../../assets/hero.png";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px]">
        {/* Text Area */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-8xl font-bold">Bussiness</h1>
          <h1 className="text-8xl font-bold">Planning</h1>
          <p className="text-gray-400 mt-4 gap-3">
            We do our best to implement your ideas into the project to make it
            successful & profitable.
          </p>
          <div className="gap-6">
            <button className="text-white bg-black px-6 py-4 mt-4 font-bold rounded-md shadow-sm">
              Discover Crafto
              </button>
            <button className="text-black bg-white px-6 py-4 mt-4 font-bold rounded-md shadow-sm">
              Get Started
              </button>
          </div>
          <div className="flex gap-6 mt-4">
            <h4>Conversion Strategy</h4>
            <h4>Targeted Growth </h4> 
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
