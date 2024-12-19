import React from 'react'
import { FaStar } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

const Banner = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-6 md:px-10 pt-36 pb-16'>
      <div className='flex flex-col md:flex-row md:items-center gap-8 lg:gap-0'>
        <div className='md:w-1/2 lg:w-3/5'> 
            <div className='lg:w-4/5'>
                <h1 className='text-3xl lg:text-[40px] font-semibold mb-5'>Buy Reddit <span className='text-[#ea4b3d]'>Accounts</span></h1>
                <p className='lg:text-xl text-gray-500 mb-4'>Instantly acquire high-quality Reddit accounts through Shopire, perfect for expanding your Reddit presence, engagement, and influence!</p>
                <div className='text-[#ea4b3d] font-medium flex items-center gap-2 mb-5'>
                    <span className='text-yellow-400'><FaStar /></span> 
                    <p>Rated <span className='text-black font-bold text-lg'>4.7/5</span> from over 2000+ reviews</p>
                </div>
                <div className='flex gap-2 items-center bg-slate-100 w-fit px-3 py-2 rounded-lg font-semibold mb-3'>
                    <i className='text-[#ea4b3d]'><GiCheckMark /></i>
                    <p>Accounts Available 24/7</p>
                </div>
                <div className='flex gap-2 items-center bg-slate-100 w-fit px-3 py-2 rounded-lg font-semibold mb-3'>
                    <i className='text-[#ea4b3d]'><GiCheckMark /></i>
                    <p>High Quality & Aged Accounts</p>
                </div>
                <div className='flex gap-2 items-center bg-slate-100 w-fit px-3 py-2 rounded-lg font-semibold mb-3'>
                    <i className='text-[#ea4b3d]'><GiCheckMark /></i>
                    <p>Multiple Account Options</p>
                </div>
            </div>
        </div>
        <div className='md:w-1/2 lg:w-2/5'>
            <img src="images/banner.jpg" alt="banner" className='w-full' />
        </div>
      </div>
    </div>
  )
}

export default Banner
