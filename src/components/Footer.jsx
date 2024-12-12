import React from 'react'
import logo from '../assets/logo.png'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='pt-10 mt-16 px-4 md:px-20 lg:px-32 bg-blue-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
              <img className='text-white filter invert' src={logo} alt="white Logo" />
              <p className='text-gray-100 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolores odit 
                dolor ullam quibusdam quisquam? Lorem ipsum dolor sit amet.</p>
                <div className='w-full md:w-1/3 mt-5 md:mb-0 flex gap-3 text-2xl text-white'>
              <CiFacebook/>
              <FaInstagram/> 
              <FaTwitter/> 
            </div>
            </div>
            
            <div className='w-full md:w-1/5 mb-8 mt-2 md:mb-0'>
              
              <ul className='text-gray-100 flex flex-col gap-2'>
                <a href="#Header" className='hover:text-white'>+91-8853923455</a>
                <a href="#About" className='hover:text-white'>+91-4567895478</a>
                <a href="#Contact" className='hover:text-white'>patientgrid@gmail.com</a>
              </ul>
            </div>
            <div className='w-full md:w-1/3'>
              <h3 className='text-gray-100 font-bold text-lg mb-4'>Subscribe Newsletter</h3>
              <div className='flex gap-2'>
                <input type="email" placeholder='  Email' className='p-2 rounded-full bg-white text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
                <button className='py-2 px-4  rounded bg-blue-500 text-white'>Subscribe</button>
              </div>
            </div>
        </div>
        <div className='border-t border-gray-200 py-4 mt-10 text-center text-gray-100 flex gap-5 justify-center'>
                <a href="#Header" className='hover:text-white'>Products</a>
                <a href="#About" className='hover:text-white'>Plans</a>
                <a href="#Contact" className='hover:text-white'>More</a> 
        </div>
        <div className='border-t border-gray-200 py-4 text-center text-gray-100 '>
                
                Copyright 2024 © Mamta. All Right Reserved.
        </div>
    </div>
  )
}

export default Footer