import React from 'react'
import Image from 'next/image'
import style from './style.css'
const Hero = () => {
  return (
    <div className='flex flex-row w-full' id='hero-container'>
      <div className='flex flex-col'>
        <h1 className='text-5xl font-bold pt-[4rem] pl-[10rem]' id="heaing-h1">Mehndi and Meee</h1>
        <p className='pl-[10rem] w-[30rem] text-justify pt-5'>Aliquam porta nisl dolor, mol
          estie pellentesque elit molesti
          e in. Morbi metus neque, elem
          entum ullam Aliquam porta ni
          sl dolor, molestie pellentesque
          elit molestie in. Morbi metuse
          que, elem entum ullam
        </p>
      </div>
      <div className='flex flex-col'>
        <Image 
          src='/image-2.png'
          width={350}
          height={350}
          alt='logo'
          className='mt-20 ml-[10rem]'
        />
      </div>
    </div>
  )
}

export default Hero
