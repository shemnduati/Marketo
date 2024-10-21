import React from 'react';
import monday from "../../assets/logos/monday.svg";
import github from "../../assets/logos/github.svg";
import dropbox from "../../assets/logos/dropbox.svg";
import twitter from "../../assets/logos/twitter.svg";
import slack from "../../assets/logos/slack.svg";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../utility/animation";

const Companies = () => {
  return (
    <section>
      <div className='pt-24'>
        <motion.div 
            variants={SlideUp(0.2)} 
            whileInView={"animate"}
            initial={"initial"}
            className='flex text-2xl text-gray-700 items-center justify-center'
         >
          <h2>More than the <span className='font-bold'>30000+</span> Companies trusting crafto</h2>
        </motion.div>
        <div className='flex py-16 justify-center gap-40'>
        <motion.img src={monday} variants={SlideUp(0.3)}  whileInView={"animate"} initial={"initial"}  className='w-40 opacity-50 hover:opacity-100 transition duration-300' alt="Monday" />
        <motion.img src={github} variants={SlideUp(0.4)}  whileInView={"animate"} initial={"initial"} className='w-10 opacity-50 hover:opacity-100 transition duration-300'  alt="Github" />
        <motion.img src={dropbox} variants={SlideUp(0.5)}  whileInView={"animate"} initial={"initial"} className='w-40 opacity-50 hover:opacity-100 transition duration-300' alt="DropBox" />
        <motion.img src={twitter} variants={SlideUp(0.6)}  whileInView={"animate"} initial={"initial"} className='w-10 opacity-50 hover:opacity-100 transition duration-300' alt="Twitter" />
        <motion.img src={slack} variants={SlideUp(0.7)}  whileInView={"animate"} initial={"initial"} className='w-40 opacity-50 hover:opacity-100 transition duration-300' alt="Salck" />
        </div>
      </div>
     
    </section>
  )
}

export default Companies