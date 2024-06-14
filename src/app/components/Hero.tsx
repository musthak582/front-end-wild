import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full bg-[#1B1B1F]  px-6 xl:px-16 flex flex-col gap-8 justify-center items-center pt-[20px] lg:pt-[60px]'>
      <div className='w-full flex flex-col justify-center items-center lg:flex-row py-20 bg-[#1B1B1F]'>
        <div className='w-full  lg:w-[800px] flex flex-col lg:justify-start lg:items-start items-center'>
          <p className='text-[#FFC500] text-[56px] leading-[64px] font-extrabold '>Be</p>
          <p className='text-white text-[56px] leading-[64px] font-extrabold'>Awesome at </p>
          <p className=' text-white text-[56px] leading-[64px] font-extrabold'>Front End Stuff</p>
          <p className='text-white text-center lg:text-start text-[24px] leading-[36px] font-semibold mt-6'>Start your front end developer journey today, easy to understand resources for everyone.!</p>
          <div className='w-full flex lg:justify-start justify-center gap-4 py-10'>
            <Link href={'/cheatsheets'} className='bg-white hover:text-[#FFC500] transition ease-in-out duration-300 text-black font-semibold py-4 px-10 rounded-[100px]'>Go to Cheat Sheets</Link>
            <Link href={'/courses'} className='bg-[#FFC500] hover:text-white transition ease-in-out duration-300 text-black font-semibold py-4 px-10 rounded-[100px]'>Go to Courses</Link>
          </div>
        </div>
        <div className='p-10 lg:p-32 order-first lg:order-last flex items-center justify-center'>
          <Image
            src={'/hero-image.png'}
            width={250}
            height={250}
            alt='hero-image'
            className="animate-pulse"
          />
        </div>
      </div>

    </div>
  )
}

export default Hero