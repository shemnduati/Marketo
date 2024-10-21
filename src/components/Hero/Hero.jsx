import React from "react";
import Img from "../../assets/hero.png";
import Img2 from "../../assets/dots.jpg";
import { CheckIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import { motion, AnimatePresence } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";
import { useState, useEffect } from "react";


// Variants for letter sliding in with bounce
const letterVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 500 } },
};

// Bounce effect for the entire word
const wordVariant = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      times: [0, 0.5, 1],
    },
  },
};
const Hero = () => {
    // State to handle which word to display
    const [wordIndex, setWordIndex] = useState(0);
    const words = ["Planning", "Strategy", "Approach"];
  
    // Change the word every 5 seconds
    useEffect(() => {
      const timer = setInterval(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 5000); // Change word every 5 seconds
  
      return () => clearInterval(timer);
    }, []);
  
    // Helper function to split word into letters
    const splitWord = (word) => word.split("");
  return (
    <section>
      <div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px] bg-red-50" 
     
      >
      
        {/* Text Area */}
        <div className="flex flex-col justify-center items-center">
          <motion.h1 
              variants={SlideRight(0.2)} 
              whileInView={"animate"}
              initial={"initial"}
              className="text-9xl font-semibold items-center">
                Business
          </motion.h1>
          <AnimatePresence>
            <motion.h1 
              key={words[wordIndex]} 
              className="text-9xl font-semibold flex"
              exit={{ opacity: 0, x: 50 }}  // Word slides out
              initial={{ opacity: 0, x: -50 }} // Word slides in
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "tween", duration: 0.8 }}
            >
              {splitWord(words[wordIndex]).map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  variants={letterVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: i * 0.05 }} // Delay for each letter
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </AnimatePresence>
          <motion.p 
              variants={SlideRight(0.6)} 
              whileInView={"animate"}
              initial={"initial"}
              className="text-gray-400 mt-6 text-xl  items-center justify-center">
            We do our best to implement your ideas into the <br></br> project to make it
            successful & profitable.
          </motion.p>
          <div className="mt-6 space-x-4 flex">
            <motion.button 
                variants={SlideRight(0.8)} 
                whileInView={"animate"}
                initial={"initial"} 
                className="text-white bg-black flex items-center px-6 py-4 mt-4 font-bold rounded-md shadow-sm"
              >
                Discover Crafto
                <ArrowRightIcon className="ml-2 size-5 fill-white group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
              </motion.button>
            <motion.button 
                  variants={SlideRight(0.6)} 
                  whileInView={"animate"}
                  initial={"initial"} 
                  className="text-black bg-white px-6 py-4 mt-4 font-bold rounded-md shadow-sm"
            >
              Get Started
              </motion.button>
          </div>
          <div className="flex gap-6 mt-32">
            <motion.h4 
               variants={SlideRight(0.9)} 
               whileInView={"animate"}
               initial={"initial"}
               className="flex items-center justify-center font-semibold"
            >
                <CheckIcon className="size-6 bg-green-600 rounded-full mx-2 p-1 fill-white group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                Conversion Strategy
            </motion.h4>
            <motion.h4 
               variants={SlideRight(0.8)} 
               whileInView={"animate"}
               initial={"initial"}
               className="flex items-center justify-center font-semibold"
            >
                <CheckIcon className="size-6 bg-green-600 rounded-full mx-2 p-1 fill-white group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                Targeted Growth
            </motion.h4>
          </div>
        </div>
        {/* Image Area */}
        <motion.div 
          variants={SlideLeft(0.2)} 
           whileInView={"animate"}
           initial={"initial"}
          className="flex w-full">
          <img src={Img} alt="Hero Image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
