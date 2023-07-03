import React from 'react'
import { FaInstagram, FaMailBulk, FaMailchimp, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
const Footer = () => {
  const iconStyles = {
    fontSize: '34px', // Change the size as per your requirement
    color: '#F2EAD3', // Change the color as per your requirement
  };
  return (
    <div className="flex flex-row mt-5 ml-10 mr-10 mb-10"     id="contact-container">
      <h1 className='text-5xl font-bold pl-20 pt-10'>Contact us</h1>
      <div className="flex flex-col mt-20 ml-20 gap-5">
        <Link href="https://www.instagram.com/mehndiandmeee/" target='_blank'>
          <div className='flex gap-5'>
            <FaInstagram style={iconStyles}/>
            <p className='mt-0.5'>@mehndiandmeee</p>
          </div>
        </Link>
        <div className='flex gap-5'>
          <FaWhatsapp style={iconStyles}/>
          <p className='mt-0.5'>03147564626</p>
        </div>
        <div className='flex gap-5'>
          <AiOutlineMail style={iconStyles}/>
          <p className='mt-0.5'>@mehndiandmeee</p>
        </div>
      </div>
    </div>
  )
}
AiOutlineMail
export default Footer