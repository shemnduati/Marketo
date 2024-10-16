import React from 'react';
import monday from "../../assets/logos/monday.svg";
import github from "../../assets/logos/github.svg";
import dropbox from "../../assets/logos/dropbox.svg";
import twitter from "../../assets/logos/twitter.svg";
import slack from "../../assets/logos/slack.svg";

const Companies = () => {
  return (
    <section>
      <div className='pt-24'>
        <div className='flex text-2xl text-gray-700 items-center justify-center'>
          <h2>More than the <span className='font-bold'>3000+</span> Companies trusting crafto</h2>
        </div>
        <div className='flex py-16 justify-center gap-40'>
        <img src={monday} className='w-40 opacity-50 hover:opacity-100 transition duration-300' alt="Monday" />
        <img src={github} className='w-10 opacity-50 hover:opacity-100 transition duration-300'  alt="Github" />
        <img src={dropbox} className='w-40 opacity-50 hover:opacity-100 transition duration-300' alt="DropBox" />
        <img src={twitter} className='w-10 opacity-50 hover:opacity-100 transition duration-300' alt="Twitter" />
        <img src={slack} className='w-40 opacity-50 hover:opacity-100 transition duration-300' alt="Salck" />
        </div>
      </div>
     
    </section>
  )
}

export default Companies