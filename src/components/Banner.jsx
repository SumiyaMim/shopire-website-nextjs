import React from 'react'

const Banner = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-6 md:px-10 lg:px-0 py-10'>
      <div className='flex items-center'>
        <div className='w-3/5'>
            <h1 className='text-[40px] font-semibold'>Buy Reddit <span className='text-[#ea4b3d]'>Accounts</span></h1>
        </div>
        <div className='w-2/5'>
            <img src="images/banner.jpg" alt="banner" className='w-[500px]' />
        </div>
      </div>
    </div>
  )
}

export default Banner
