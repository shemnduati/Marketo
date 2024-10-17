import React from 'react';
import logo from "../../assets/logowhite.png";
import { HandThumbUpIcon, PhoneArrowUpRightIcon,  } from '@heroicons/react/20/solid';

const Footer = () => {
  return (
   <section className='bg-black'>
     <div className='container items-center justify-center  flex   pt-16 pb-16 gap-16'>
      <div className='flex flex-col'>
      <img src={logo} className='shrink-0 w-auto h-auto' alt="logo" />
      </div>
      <div className='flex flex-col'>
        <h4 className='font-bold text-white mb-4'>Marketo-London</h4>
        <p className='text-gray-400'>401 Broadway, 24th Floor</p>
        <p className='text-gray-400'>Orchard view, London, UK</p>
        <div className='flex gap-2 pt-4'>
          <PhoneArrowUpRightIcon className="size-5 text-white" />
          <p className='text-gray-400'>123 456 7890</p>
          <button className='items-center  w-10  shadow-md  rounded-2xl bg-gray-500 font-bold text-[10px] text-white'>FREE</button>
        </div>
      </div>
      <div className='flex flex-col'>
        <h4 className='font-bold text-white mb-4'>Marketo-France</h4>
        <p className='text-gray-400'>27 Eden Walk Eden Centre</p>
        <p className='text-gray-400'>Orchard view, London, UK</p>
        <div className='flex gap-2 pt-4'>
          <PhoneArrowUpRightIcon className="size-5 text-white" />
          <p className='text-gray-400'>123 456 7890</p>
        </div>
      </div>
      <div className='flex flex-col'>
        <h4 className='font-bold text-white mb-4'>subscribe our newsletter</h4>
        <input type="text" placeholder='Enter your email...' className='bg-black text-gray-500 border-gray-500 border p-2 rounded-md'/>
        <div className='flex gap-2 pt-4'>
          <HandThumbUpIcon className="size-5 text-white" />
          <p className='text-gray-400'>Protecting your privacy</p>
        </div>
      </div>
      <div className='flex flex-col'>
      <hr className='text-gray-400' />
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Case studies</li>
          <li>Pricing</li>
          <li>Team</li>
          <li>Contact</li>
        </ul>
        <h4>2024 Crafto is Powered by <span><u>ThemeZaa</u></span></h4>
      </div>
      </div>
     </div>
   </section>
  )
}

export default Footer