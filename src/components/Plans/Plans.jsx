import React from 'react'

const Plans = () => {
  return (
    <section className='bg-gray-50 opacity-95'>
      <div className='container w-full space-y-10 gap-18 items-center  justify-center py-28 '>
        <div className='flex flex-col items-center '>
          <h2 className='font-semibold text-red-400 py-2'>PREDICTABLE PRICING PLANS</h2>
          <h2 className='text-center font-bold text-5xl py-2 '> We have tailored pricing<br /> plans for everyone.</h2>
        </div>
        <div className='flex gap-8 p-8 '>
          <div className='flex flex-col py-16 rounded-md bg-white/50  shadow-xl items-center justify-center'>
            <button className='items-center  w-28 py-1.5 shadow-md  my-4 rounded-2xl bg-white font-bold text-xs border-black/50 border'>STANDARD</button>
            <h1 className='text-6xl my-4 font-semibold'>
              <span className='text-3xl font-bold align-super'>$</span>250
            </h1>
            <h4 className='text-center px-24 '>All the basic for businesses that are just getting started.</h4>
            <button className="text-white items-center w-40 bg-black px-3 py-4 mt-4 text-sm font-bold rounded-md shadow-sm">
              Choose package
            </button>
              <p className='p-4'>Monthly billing</p>
              <hr className='mt-4  w-full' />
              <h4 className='p-4 text-gray-400'>Competitve work analysis</h4>
              <hr className='mt-2  w-full' />
              <h4 className='p-4 text-gray-400'>Social media share audit</h4>
              <hr className='mt-2  w-full' />
              <h4 className='text-center p-4'><u>Get your 30 day free trial</u></h4>
          </div>
          <div className='flex flex-col rounded-md bg-white/50  shadow-xl items-center justify-center'>
            <button className='items-center  w-28 py-1.5 shadow-md  my-4 rounded-2xl bg-white font-bold text-xs border-black/50 border'>BUSINESS</button>
            <h1 className='text-6xl my-4 font-semibold'>
              <span className='text-3xl font-bold align-super'>$</span>350
            </h1>
            <h4 className='text-center px-24 '>All the basic for businesses that are just getting started.</h4>
            <button className="text-white items-center w-40 bg-black px-3 py-4 mt-4 text-sm font-bold rounded-md shadow-sm">
              Choose package
            </button>
              <p className='p-4'>Monthly billing</p>
              <hr className='mt-4  w-full' />
              <h4 className='p-4 '>Competitve work analysis</h4>
              <hr className='mt-2  w-full' />
              <h4 className='p-4 text-gray-400'>Social media share audit</h4>
              <hr className='mt-2  w-full' />
              <h4 className='text-center p-4'><u>Get your 30 day free trial</u></h4>
          </div>
          <div className='flex flex-col rounded-md bg-white/50  shadow-xl items-center justify-center'>
            <button className='items-center  w-28 py-1.5   shadow-md  my-4 rounded-2xl bg-white font-bold text-xs border-black/50 border'>ULTIMATE</button>
            <h1 className='text-6xl my-4 font-semibold'>
              <span className='text-3xl font-bold align-super'>$</span>450
            </h1>
            <h4 className='text-center px-24 '>All the basic for businesses that are just getting started.</h4>
            <button className="text-white items-center w-40 bg-black px-3 py-4 mt-4 text-sm font-bold rounded-md shadow-sm">
              Choose package
            </button>
              <p className='p-4'>Monthly billing</p>
              <hr className='mt-4  w-full' />
              <h4 className='p-4 '>Competitve work analysis</h4>
              <hr className='mt-2  w-full' />
              <h4 className='p-4 '>Social media share audit</h4>
              <hr className='mt-2  w-full' />
              <h4 className='text-center p-4'><u>Get your 30 day free trial</u></h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plans