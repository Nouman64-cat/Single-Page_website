"use client"
import React,{ useState } from 'react'
import FlipCard from 'react-card-flip';
import Image from 'next/image';
import { BsSend } from 'react-icons/bs';
import Link from 'next/link';
const Experiment = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHoverMessage, setShowHoverMessage] = useState(false);

  let hoverMessageTimeout;
  const handleClick = () => {
    setIsFlipped(!isFlipped);
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
    <div>
      <FlipCard isFlipped={isFlipped} flipDirection="vertical">
        {/* Front side of the card */}
        <div onClick={handleClick} 
        onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
        className='cursor-pointer' id="card-front">
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
        <div onClick={handleClick} className='flex flex-col justify-center items-center  bg-gray-100 mt-20 ml-20 h-[18.2rem] w-[18.2rem] cursor-pointer rounded-custom' id="card-back">
            {/* <Image 
              src='/image-2.png'
              width={300}
              height={300}
              alt='logo'
              className='mt-20 ml-20 hover:opacity-0.7 front'
            /> */}
            <h1 className="text-black font-semibold text-2xl text-gray-900">Bridal Mehndi Design</h1>
            <p className="text-black text-center text-gray-700 mt-10">Get your brides get ready for ceremony!</p>
            <Link href="https://www.instagram.com/mehndiandmeee/" target='_blank'>
            <button className="relative rounded-full text-black border-2 border-solid border-gray-900 hover:bg-gray-900  hover:text-white px-8 py-3 mt-10 ">
              <span className="flex flex-row gap-5">Visit on Instagram
              <BsSend style={iconStyles}/></span>
              
            </button>
            </Link>
          </div>
      </FlipCard>
    </div>
  );
};

export default Experiment