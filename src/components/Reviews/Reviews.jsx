import React from 'react';
import avatar1 from "../../assets/avtar1.jpg";
import avatar2 from "../../assets/avtar2.jpg";
import avatar3 from "../../assets/avtar3.jpg";
import avatar4 from "../../assets/avtar4.jpg";

import { StarIcon } from '@heroicons/react/20/solid';
const Reviews = () => {
  return (
   <section>
    <div className='flex gap-8 items-center justify-center py-16'>
      <div className='flex flex-col w-[540px]  border rounded-md border-gray-200'>
       <div className='flex gap-8 px-8 py-8'>
        <div className='flex'>
            <img src={ avatar1 } className='rounded-full w-60 ' alt="Portfolio Image" />
          </div>
          <div>
            <p>
              Team of ThemeZaa has worked closely with us and never failed to follow our pefect business requirement
            </p>
          </div>
        </div>
        <hr className='py-2 w-full' />
        <div className='flex items-center justify-between  px-8 pb-4  gap-16'>
          <h4 className='font-bold'>Herman Miller, ThemeZaa</h4>
          <div className='flex '>
                <StarIcon className="size-7 fill-orange-400" />
                <StarIcon className="size-7 fill-orange-400" />
                <StarIcon className="size-7 fill-orange-400" />
                <StarIcon className="size-7 fill-orange-400" />
                <StarIcon className="size-7 fill-orange-400" />
            </div>
        </div>
      </div>
      <div className='flex flex-col w-[540px]  border rounded-md border-gray-200'>
       <div className='flex gap-8 px-8 py-8'>
        <div className='flex'>
            <img src={ avatar2 } className='rounded-full w-60 ' alt="Portfolio Image" />
          </div>
          <div>
            <p>
              Trust us we looked for a very time and wated thousand of dollars testing other teams and outsoursing companies
            </p>
          </div>
        </div>
        <hr className='py-2 w-full' />
        <div className='flex items-center justify-between  px-8 pb-4  gap-16'>
          <h4 className='font-bold'>Leonel Mooney, Apple</h4>
          <div className='flex '>
                <StarIcon className="size-7 fill-orange-400" />
                <StarIcon className="size-7 fill-orange-400" />
                <StarIcon className="size-7 fill-orange-400" />
                <StarIcon className="size-7 fill-orange-400" />
                <StarIcon className="size-7 fill-orange-400" />
            </div>
        </div>
      </div>
      <div className='flex flex-col w-[540px]  border rounded-md border-gray-200'>
       <div className='flex gap-8 px-8 py-8'>
        <div className='flex'>
            <img src={ avatar3 } className='rounded-full w-60 ' alt="Portfolio Image" />
          </div>
          <div>
            <p>
              I personally enjoyed the enaergy and the professional support the whole team gave us into creating website
            </p>
          </div>
        </div>
        <hr className='py-2 w-full' />
        <div className='flex items-center justify-between  px-8 pb-4  gap-16'>
          <h4 className='font-bold'>Mathew Taylor, LinkSture</h4>
          <div className='flex '>
                <StarIcon className="size-7 fill-orange-400" />
                <StarIcon className="size-7 fill-orange-400" />
                <StarIcon className="size-7 fill-orange-400" />
                <StarIcon className="size-7 fill-orange-400" />
                <StarIcon className="size-7 fill-orange-400" />
            </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Reviews