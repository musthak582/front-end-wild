import React from 'react'
import Link from 'next/link'
import { sheetItems } from '../../../constants/data/sheetItems'
const Footer = () => {
  return (
    <div className='w-full bg-black py-10'>
      <div className='w-full flex items-center justify-around'>
        <div className='flex flex-wrap justify-center items-center py-4'>
          {
            sheetItems.map((sheetitem) => (
              sheetitem.programmingLanguages.map((language) => (

                <Link key={language.path} href={language.path} className='w-[180px] flex items-center gap-2 justify-between rounded-lg px-4 py-2 m-2 text-[20px] bg-white text-black hover:text-[#FFC500] transition ease-linear duration-300 font-semibold'>
                  {language.icon}
                  <span>{language.label}</span>
                </Link>
              ))
            ))
          }
        </div>
      </div>
      <div className='w-full flex justify-center items-center text-white font-extrabold py-2 md:text-2xl text-[20px]'>
        © 2024 FrontEndWild, All rights reserved.
      </div>
    </div>
  )
}

export default Footer