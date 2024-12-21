import React from 'react'
import { RiUserCommunityLine } from "react-icons/ri";
import { FaMoneyBills } from "react-icons/fa6";
import { PiCellSignalHighBold } from "react-icons/pi";
import { BiSelection } from "react-icons/bi";

const Orders = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-6 md:px-10 py-20'>
        <div className='flex items-center justify-center gap-4 mb-24'>
            <div className='bg-[#ea4b3d] w-fit p-2.5 rounded-full'>
                <img src="images/success.png" alt="icon" className='w-7' />
            </div>
            <h3 className='text-2xl font-semibold'>Every day we successfully fulfill 260+ orders and continue to improve.</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10' data-aos="fade-up">
            <div className='flex flex-col items-center'>
                <RiUserCommunityLine className='text-5xl mb-3'/>
                <h4 className='mb-1'>2873 +</h4>
                <h5 className='text-gray-500'>HAPPY CLIENTS</h5>
            </div>
            <div className='flex flex-col items-center'>
                <FaMoneyBills className='text-5xl mb-3'/>
                <h4 className='mb-1'>0.014 +</h4>
                <h5 className='text-gray-500'>PRICE FOR A SHOPIRE</h5>
            </div>
            <div className='flex flex-col items-center'>
                <PiCellSignalHighBold className='text-5xl mb-3'/>
                <h4 className='mb-1'>4639449 +</h4>
                <h5 className='text-gray-500'>VOTES DONE</h5>
            </div>
            <div className='flex flex-col items-center'>
                <BiSelection className='text-5xl mb-3'/>
                <h4 className='mb-1'>18 +</h4>
                <h5 className='text-gray-500 text-center'>SELECTION GEO OF ACCOUNTS</h5>
            </div>
        </div>
    </div>
  )
}

export default Orders
