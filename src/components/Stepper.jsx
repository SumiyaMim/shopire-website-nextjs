import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Stepper = () => {
  return (
    <div className='bg-slate-50 text-center '>
        <div className='max-w-screen-xl mx-auto px-6 md:px-10 py-20'>
            <h1 className='text-3xl font-semibold text-gray-700 mb-10'>Your Account <span className='text-[#ea4b3d]'>Order Guide</span></h1>
            <div className='flex flex-col lg:flex-row gap-8 items-center'>
                <div className='bg-white flex flex-col items-center p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl'>
                    <div className='bg-[#a58cff] rounded-full px-4 py-2 mb-4'>
                        <h1 className='text-white text-xl font-semibold'>1</h1>
                    </div>
                    <h3 className='text-lg font-semibold mb-2'>Register on the Site</h3>
                    <p className='text-gray-500'>Create an account easily, then visit your dashboard and click the "Reddit Accounts" tab to select and order your account.</p>
                </div>
                <div className='text-2xl'>
                    <MdOutlineKeyboardDoubleArrowRight />
                </div>
                <div className='bg-white flex flex-col items-center p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl'>
                    <div className='bg-[#a58cff] rounded-full px-4 py-2 mb-4'>
                        <h1 className='text-white text-xl font-semibold'>2</h1>
                    </div>
                    <h3 className='text-lg font-semibold mb-2'>Choose Your Account</h3>
                    <p className='text-gray-500'>Explore our wide range of accounts, including aged, high-karma, and new ones. Choose the perfect account for you.</p>
                </div>
                <div className='text-2xl'>
                    <MdOutlineKeyboardDoubleArrowRight />
                </div>
                <div className='bg-white flex flex-col items-center p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl'>
                    <div className='bg-[#a58cff] rounded-full px-4 py-2 mb-4'>
                        <h1 className='text-white text-xl font-semibold'>3</h1>
                    </div>
                    <h3 className='text-lg font-semibold mb-2'>Complete Your Purchase</h3>
                    <p className='text-gray-500'>Complete your purchase by selecting quantity and payment method. Your selected account will be ready for use shortly.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stepper
