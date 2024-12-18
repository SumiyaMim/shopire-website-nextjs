import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-slate-100'>
      <div className='max-w-screen-xl mx-auto py-12 px-6 md:px-10 lg:px-0 flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-20'>
        <div className='md:w-80 lg:w-96'>
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img
                    src="images/icon.png"
                    className="h-8"
                    alt="Flowbite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap uppercase">
                    Shopire
                </span>
            </a>
            <p className='text-base my-6'>The mission is to provide growing brands and content creators with greater popularity and engagement with their target audience on Reddit.</p>
            <div className='text-xl flex items-center gap-4'>
                <i className='rounded-full p-3 bg-gray-200 hover:bg-[#ff594a] hover:text-white'><FaFacebookF></FaFacebookF></i>
                <i className='rounded-full p-3 bg-gray-200 hover:bg-[#ff594a] hover:text-white'><FaPinterestP></FaPinterestP></i>
                <i className='rounded-full p-3 bg-gray-200 hover:bg-[#ff594a] hover:text-white'><FaInstagram></FaInstagram></i>
            </div>
        </div>
        <div>
            <h2 className='font-semibold text-sm mb-5'>Our Company</h2>
            <p className='text-sm text-gray-500 mb-3 hover:text-[#f34d3f]'>About</p>
            <p className='text-sm text-gray-500 mb-3 hover:text-[#f34d3f]'>Contact</p>
            <p className='text-sm text-gray-500 mb-3 hover:text-[#f34d3f]'>Blog</p>
            <p className='text-sm text-gray-500 mb-3 hover:text-[#f34d3f]'>FAQ</p>
        </div>
        <div>
            <h2 className='font-semibold text-sm mb-5'>Quick Links</h2>
            <p className='text-sm text-gray-500 mb-3 hover:text-[#f34d3f]'>Privacy Policy</p>
            <p className='text-sm text-gray-500 mb-3 hover:text-[#f34d3f]'>Terms & Conditions</p>
            <p className='text-sm text-gray-500 mb-3 hover:text-[#f34d3f]'>Return Policy</p>
            <p className='text-sm text-gray-500 mb-3 hover:text-[#f34d3f]'>Ethical Policy</p>
        </div>
      </div>
      <div className='max-w-screen-xl px-6 md:px-10 lg:px-0 mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 pt-8 pb-12 text-sm text-gray-700 font-medium'>
        <div>
            <p className=''>Copyright © {new Date().getFullYear()} Shopire. All Right Reserved</p>
        </div>
        <div className='flex items-center gap-4'>
            <p className='hover:text-[#f34d3f]'>English</p>
            <p className='hover:text-[#f34d3f]'>Spanish</p>
            <p className='hover:text-[#f34d3f]'>French</p>
            <p className='hover:text-[#f34d3f]'>Japanese</p>
        </div>
      </div>
    </div>
 
  )
}

export default Footer
