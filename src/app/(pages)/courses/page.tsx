import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Courses (HTML, CSS, JavaScript,React,TypeScript,...)',
}
const Course = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-10'>
      <h1 className="text-4xl">Courses - Comming Soon...</h1>
      <Link href={'/'} className="transition-all duration-300 rounded-lg font-semibold text-white hover:text-[#FFC500] py-4 px-10 bg-black">Back to Home</Link>
    </div>
  )
}

export default Course