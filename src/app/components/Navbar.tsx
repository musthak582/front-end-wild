'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from '../../../constants/data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsOpen(false);
  }
  return (
    <header className={`w-full fixed flex items-center py-4 xl:px-16 z-50 bg-black px-6`}>
      <nav className={` text-white flex bg-black justify-between items-center w-full`}>
        <Link href='/' className='flex justify-center items-center'>
          <Image src='/fw-logo.png'
            width={35}
            height={35}
            alt='logo'
          />
          <span className={`text-[20px] font-extrabold text-white `}>
            FrontEndWild
          </span>
        </Link>
        <ul className={`transition-all duration-500 ${isOpen ? "right-0" : "right-[-100%]"} md:flex-row items-center gap-2 text-[18px] font-semibold absolute md:static top-[70px] bg-zinc-100 md:bg-black  w-1/2 text-black md:text-white flex flex-col py-4 md:py-0 md:justify-end md:gap-[4px] boreder border-red-500`}>
          {
            links.map((link) => (
              <li key={link.path} className={`px-4 py-1 rounded-lg hover:text-[#FFC500] transition ease-linear duration-300`}>
                <Link onClick={handleLinkClick} href={link.path}>{link.name}</Link>
              </li>
            ))
          }
        </ul>
        <div className='md:hidden flex justify-center items-center'>
          <button onClick={() => {
            setIsOpen(!isOpen);
          }}>
            {
              isOpen ? <FaTimes size={24} /> : <FaBars size={24} />
            }
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
