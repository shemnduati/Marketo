import React from 'react';
import Logo from "../../assets/logo-black.png";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <header>
      <div className='container flex justify-between items-center p-5 w-full'>
        <div className='flex-shrink-0'>
          <img src={ Logo } alt='' />
        </div>
        <div className='flex-grow text-center'>
          <ul className='hidden md:flex justify-center gap-8'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>Price</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='flex-shrink-0 flex gap-5'>
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaTwitter />
        </div>
      </div>
    </header>
  )
}

export default Navbar