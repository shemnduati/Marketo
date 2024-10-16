import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/20/solid';

const Clients = () => {
  return (
    <section className='py-8'>
        <div className='flex gap-36  items-center justify-center'>
            <div className='flex'>
                <ArrowUpIcon className="size-7 fill-green-600" />
                <div className='flex flex-col space-y-2'>
                    <h1 className='text-5xl font-bold'>353%</h1>
                    <h4>Revenue increaing</h4>
                </div>
            </div>
            <div className='flex'>
                <ArrowUpIcon className="size-7 fill-green-600" />
                <div className='flex flex-col space-y-2'>
                <h1 className='text-5xl font-bold'>642%</h1>
                <h4>Company growth</h4>
                </div>
            </div>
            <div className='flex'>
                <ArrowUpIcon className="size-7 fill-green-600" />
                <div className='flex flex-col space-y-2'>
                <h1 className='text-5xl font-bold'>376%</h1>
                <h4>Clients enhanced</h4>
                </div>
            </div>
            <div className='flex'>
                <ArrowUpIcon className="size-7 fill-green-600" />
                <div className='flex flex-col space-y-2'>
                <h1 className='text-5xl font-bold'>285%</h1>
                <h4>Convert traffic</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Clients