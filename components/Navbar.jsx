import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex flex-row w-full bg-gray-100'>
      <div className='flex flex-row px-4 py-2 w-full'>
        <Image 
          src='/mehndi.png'
          width={50}
          height={50}
          alt='logo'
          className='mr-4'
        />
        <Image 
          src='/mehndi-icon.png'
          width={30}
          height={30}
          alt='logo'
        />
      </div>
      <div className="flex justify-center items-center w-full">
        <Image 
          src='/mehndi-icon.png'
          width={30}
          height={30}
          alt='logo'
        />
      </div>
      <div className='flex flex-row px-4 py-2 w-full justify-end gap-4'>
        <Link href="#work-container">
            <button className="rounded-full text-black border-2 border-solid border-gray-900 hover:bg-gray-900  hover:text-white px-5 py-2 mt-1">
              My Work
              
      
            </button>
            </Link>
            <Link href="#contact-container">
            <button className="rounded-full text-black border-2 border-solid border-gray-900 hover:bg-gray-900  hover:text-white px-5 py-2 mt-1 ">
              Contact us
              
      
            </button>
            </Link>
      </div>
    </div>
  )
}

export default Navbar
