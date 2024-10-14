import React from 'react';
import portfoli1 from "../../assets/explore/portfolio33.jpg";
import portfoli2 from "../../assets/explore/portfolio98.jpg";
import portfoli3 from "../../assets/explore/portfolio177.jpg";
import portfoli4 from "../../assets/explore/portfolio178.jpg";
import portfoli5 from "../../assets/explore/portfolio207.jpg";
import portfoli6 from "../../assets/explore/portfolio240.jpg";

const Products = () => {
  return (
    <section className='bg-gray-50 opacity-95'>
        <div className='container w-full space-y-10 gap-18 items-center  justify-center py-16 '>
            <div className='flex flex-col '>
                <div className='flex py-8 gap-32'>
                    <div>
                        <ul className='hidden md:flex justify-center gap-8 text-gray-400 text-2md'>
                            <li><u>All</u></li>
                            <li>Selected</li>
                            <li>Digital</li>
                            <li>Branding</li>
                            <li>Web</li>
                        </ul>
                    </div>
                    <div className='ml-auto'>
                    <button className='bg-gray-50 text-black py-4 px-6'>Explore More</button>
                </div>
            </div>
            <div className='flex gap-6 py-6'>
                <div className=''>
                     <img src={ portfoli1 } className='rounded-md w-100' alt="Portfolio Image" />
                     <h4 className='text-center py-6'><span className='font-bold'>Tailoring inteo </span> - <span className='text-gray-400'>Branding</span></h4>
                </div>
                <div className=''>
                     <img src={ portfoli2 } className='rounded-md w-100' alt="Portfolio Image" />
                     <h4 className='text-center py-6'><span className='font-bold'>Design blast </span> - <span className='text-gray-400'>Photography</span></h4>
                </div>
                <div className=''>
                     <img src={ portfoli3 } className='rounded-md w-100' alt="Portfolio Image" />
                     <h4 className='text-center py-6'><span className='font-bold'>Herbal beauty </span> - <span className='text-gray-400'>Application</span></h4>
                </div>
            </div>
            <div className='flex gap-8  py-6'>
                <div className=''>
                     <img src={ portfoli4 } className='rounded-md w-100' alt="Portfolio Image" />
                     <h4 className='text-center py-6'><span className='font-bold'>Cropo identity </span> - <span className='text-gray-400'>Packaging</span></h4>
                </div>
                <div className=''>
                     <img src={ portfoli5 } className='rounded-md w-100' alt="Portfolio Image" />
                     <h4 className='text-center py-6'><span className='font-bold'>Harddot stone </span> - <span className='text-gray-400'>Graphics</span></h4>
                </div>
                <div className=''>
                     <img src={ portfoli6 } className='rounded-md w-100' alt="Portfolio Image" />
                     <h4 className='text-center py-6'><span className='font-bold'>Violators  series </span> - <span className='text-gray-400'>Digital</span></h4>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Products