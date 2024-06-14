import React from 'react'
import { sheetItems } from '../../../../constants/data/sheetItems'
import Link from 'next/link'

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Free Cheat Sheets (HTML, CSS, JavaScript,React,TypeScript,...)',
}

const CheatSheets = () => {
  return (
    <div className='w-full bg-[#1B1B1F] flex flex-col items-center justify-center py-[68px] md:px-16 px-6'>
      <div className='w-full py-8 flex flex-col justify-center items-center gap-6 px-6 '>
        <h1 className='text-5xl font-extrabold mt-10 text-white'>Free Cheat Sheets</h1>
        <p className='text-[20px] text-center text-slate-100'>Dive into the world of coding with our quick start cheat sheets for beginners. <br /> These guides provide clear, short summaries of front-end basics, helping you get up to speed quickly and confidently.</p>
      </div>
      <div className='w-full flex flex-row flex-wrap items-center justify-center py-14 gap-6'>
        {
          sheetItems.map((sheetitem) => (
            sheetitem.programmingLanguages.map((lng) =>(
              <>
                <div key={lng.label} className='flex bg-[#2B2F36] flex-col items-center justify-center  gap-10 py-14 px-6 rounded-[24px]'>
                  <div className='text-6xl text-white bg-transparent p-4 border border-[#FFC500] rounded-xl'>{lng.icon}</div>
                  <span className='text-[20px] text-white font-semibold'>{lng.label} Cheat Sheet</span>
                  <button className='py-4 px-[40px] bg-white text-black rounded-full   transition ease-linear duration-300 hover:text-[#FFC500]  border-black font-semibold'>
                    <Link href={lng.path}>Go to cheat sheet</Link>
                  </button>
                </div>
              </>
            ))
          ))
        }
      </div>
    </div>
  )
}

export default CheatSheets