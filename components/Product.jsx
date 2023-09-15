import Link from 'next/link'
import React from 'react'


const Product = () => {
  return (
    <Link href="/1stpro" className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer'>
      <img className='w-full' src='/product-1.webp' alt='img'/>
      <div className='p-4 text-black/[0.9]'>
        <h2 className='text-lg font-medium'>Product name</h2>
        <div className='flex items-center text-black/[0.5]'>
            <p className='mr-2 text-lg font-semibold'> ₹ 14 995.00</p>
            <p className='text-base font-medium line-through'>₹ 19 295.00</p>
            <p className='ml-auto text-base font-medium text-green-500'>
                20% off
            </p>
        </div>
      </div>
    </Link>
  );
};

export default Product
