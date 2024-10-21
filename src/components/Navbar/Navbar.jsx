import React from 'react';
import Logo from "../../assets/logo-black.png";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <header>
      <div className='flex justify-between items-center p-12  w-full bg-red-50'>
        <div className='flex-shrink-0'>
          <img src={ Logo } alt='' />
        </div>
        <div className='flex-grow text-center'>
          <ul className='hidden md:flex justify-center gap-8'>
            <li className='text-[18px] font-semibold text-gray-400'>Home</li>
            <li className='text-[18px] font-semibold'>About</li>
            <li className='text-[18px] font-semibold'>Services</li>
            <li className='text-[18px] font-semibold'>Case Studies</li>
            <li className='text-[18px] font-semibold '>Price</li>
            <li className='text-[18px] font-semibold '>Team</li>
            <li className='text-[18px] font-semibold '>Contact</li>
          </ul>
        </div>
        <div className='flex-shrink-0 flex gap-5'>
          <FaFacebook className='text-[20px]' />
          <FaInstagram className='text-[20px]' />
          <FaLinkedin className='text-[20px]' />
        </div>
      </div>
    </header>
  )
}

export default Navbar