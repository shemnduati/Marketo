import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/20/solid';

const Call = () => {
  return (
    <section>
        <div className='flex flex-col'>
            <div className='flex gap-8 items-center justify-center'>
                 <button className='items-center  w-24 py-1.5 shadow-md  my-4 rounded-2xl bg-white font-bold text-xs border-black/50 border'>HURRAY</button>
                 <h4 className='text-[18px]'>Let's make something great work together. <b><u>Got a project in mind?</u></b></h4>
            </div>
            <div className='container rounded-md w-[1020px] p-16 bg-orange-600 flex items-center justify-center  mt-16'>
               <div>
                    <h1 className='text-white font-bold text-4xl'>Let's talk about how we can transform your business! </h1>
               </div>
               <div className='flex gap-8'>
                <div className='p-6 bg-black/20 opacity-05 rounded-full'>
                     <EnvelopeIcon className="size-7 text-white " />
                </div>
                <div className='flex flex-col'>
                    <p className='text-white'>Intrested in working?</p>
                    <h4 className='text-2xl font-bold'><u>hello@domain.com</u></h4>
                </div>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Call