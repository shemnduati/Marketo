import React from 'react';
import customers from "../../assets/customers.jpg";
import { StarIcon } from '@heroicons/react/20/solid';

const Customers = () => {
  return (
    <section>
        <div className='container flex space-y-8 py-8 gap-16 items-center justify-center'>
            <div className='flex'>
                <h2 className='text-3xl font-semibold'>25,000 + Happy customer</h2>
            </div>
            <div>
             <img src={ customers } className='rounded-md w-100' alt="Portfolio Image" />
            </div>
            <div className='flex '>
                <StarIcon className="size-7 fill-yellow-400" />
                <StarIcon className="size-7 fill-yellow-400" />
                <StarIcon className="size-7 fill-yellow-400" />
                <StarIcon className="size-7 fill-yellow-400" />
                <StarIcon className="size-7 fill-yellow-400" />
            </div>
            <div className='text-3xl font-semibold'>
                <h2><u>2,488</u> Rating</h2>
            </div>
        </div>
    </section>
  )
}

export default Customers