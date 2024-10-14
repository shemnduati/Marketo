import React from 'react'

const Products = () => {
  return (
    <section>
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-18 min-h-[650px] py-16'>
            <div className='flex'>
                <div>
                <ul className='hidden md:flex justify-center gap-8'>
                    <li>All</li>
                    <li>Selected</li>
                    <li>Digital</li>
                    <li>Branding</li>
                    <li>Web</li>
                </ul>
                </div>
            </div>
            <div className='items-end'>
                <button className='bg-white text-black'>Explore More</button>
            </div>
        </div>
    </section>
  )
}

export default Products