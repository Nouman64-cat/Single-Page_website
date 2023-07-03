"use client";
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import FlipCard from 'react-card-flip';
import Experiment from './experiment';
import { BsSend } from 'react-icons/bs';
import Link from 'next/link';
const Work = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipped1, setIsFlipped1] = useState(false);
  
  const [showHoverMessage, setShowHoverMessage] = useState(false);

  let hoverMessageTimeout;

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  const handleClick1 = () => {
    setIsFlipped1(!isFlipped1);
  };
  const iconStyles = {
      fontSize: '20px', // Change the size as per your requirement// Change the color as per your requirement
    };
    const handleCardMouseEnter = () => {
    hoverMessageTimeout = setTimeout(() => {
      setShowHoverMessage(true);
    }, 2000);
  };

  const handleCardMouseLeave = () => {
    clearTimeout(hoverMessageTimeout);
    setShowHoverMessage(false);
  };
  return (
    <div className='flex flex-col mt-5' id='work-container'>
      
      <div className='flex flex-row'>
        <h1 className='text-5xl font-bold pl-10 pt-10'>Services/ My Work</h1>
        <p className='pl-[10rem] w-[30rem] text-justify pt-5'>Aliquam porta nisl dolor, mol
          estie pellentesque elit molesti
          e in. Morbi metus neque, elem
          entum ullam Aliquam porta ni
          sl dolor, molestie pellentesque
          elit molestie in. Morbi metuse
          que, elem entum ullam
        </p>
      </div>
      <div className='flex flex-row ml-5'>
          <FlipCard isFlipped={isFlipped} flipDirection="vertical">
          {/* Front side of the card */}
          <div 
            onClick={handleClick}
            className='cursor-pointer' 
            id="card-front"
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
            >
            <Image 
              src='/image-1.png'
              width={300}
              height={300}
              alt='logo'
            
            />
            {showHoverMessage && (
              <div className="hover-message">Click to flip</div>
            )}
          </div>
        
          {/* Back side of the card */}
          <div onClick={handleClick} className='flex flex-col justify-center items-center  bg-gray-100 mt-20 ml-20 h-[18.2rem] w-[18.4rem] cursor-pointer rounded-custom' id="card-back">
            {/* <Image 
              src='/image-2.png'
              width={300}
              height={300}
              alt='logo'
              className='mt-20 ml-20 hover:opacity-0.7 front'
            /> */}
            <h1 className="text-black font-semibold text-2xl  text-gray-900">Bridal Mehndi Design</h1>
            <p className="text-black text-center text-gray-700 mt-10">Get your brides get ready for ceremony!</p>
            <Link href="https://www.instagram.com/mehndiandmeee/" target='_blank'>
            <button className="relative rounded-full text-black border-2 border-solid border-gray-900 hover:bg-gray-900  hover:text-white px-8 py-3 mt-10 ">
              <span className="flex flex-row gap-5">Visit on Instagram
              <BsSend style={iconStyles}/></span>
              
            </button>
            </Link>
          </div>
        </FlipCard>
        <Experiment />
      </div>
    </div>
  )
}

export default Work