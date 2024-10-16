import React from 'react';
import strategy from "../../assets/strategy.jpg";
import strategic from "../../assets/strategic.jpg";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PlusIcon, ArrowRightIcon, PlayIcon } from '@heroicons/react/20/solid'


const Starategy = () => {
  return (
    <section>
    <div className='container grid grid-cols-1 md:grid-cols-2 py-28 gap-12 min-h-[650px]'>
      <div className='flex flex-col pl-16 -mt-8 px-12  justify-center'>
        <h2 className='font-bold text-red-400 py-2'>OUR BUSINESS STRATEGY </h2>
        <h2 className='font-bold text-5xl py-2 justify-center'> We have helped<br /> businesses revenue.</h2>
        <div className="">
          <div className="">
            <Disclosure as="div" className="pt-4" defaultOpen={true}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-xl text font-medium text-black group-data-[hover]:text-wblack/80">
                  Unique and bold website design
                </span>
                <PlusIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-md text-black/50">
              We deliver customized marketing campaign to use you audience to make positive move.
              </DisclosurePanel>
            </Disclosure>
            <hr className='mt-6 px-6' />
            <Disclosure as="div" className="pt-4">
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-xl font-medium text-black group-data-[hover]:text-black/80">
                We're ready to start marketing  now
                </span>
                <PlusIcon className="size-5 fill-balck/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-md text-black/50">
                We deliver customized marketing campaign to use you audience to make positive move.
              </DisclosurePanel>
              <hr className='mt-6 px-6' />
            </Disclosure>
            <Disclosure as="div" className="pt-4" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-xl font-medium text-black group-data-[hover]:text-wblack/80">
                  Something marketing for everyone
                </span>
                <PlusIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-md text-black/50">
                We deliver customized marketing campaign to use you audience to make positive move.
              </DisclosurePanel>
            </Disclosure>
          </div>
          <div className="flex mt-6 gap-6">
            <button className="flex items-center text-white bg-black px-6 py-4 mt-4 font-bold rounded-md shadow-sm">
              How it works
              <ArrowRightIcon className="ml-2 size-5 fill-white group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </button>
            <button className="flex items-center text-black bg-white px-6 py-4 mt-4 font-bold rounded-md shadow-sm">
              Play video
              <PlayIcon className="ml-2 size-5 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
            </button>
          </div>
          </div>
    </div>
      <div className='flex items-center justify-center'>
        <img src={ strategy } alt="About Image" />
      </div>
    </div>
   </section>
  )
}

export default Starategy