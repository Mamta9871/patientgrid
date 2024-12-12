import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex items-center justify-between py-4 px-6 md:px-12 lg:px-20 bg-gray-200'>
        {/* Logo */}
        <img src={logo} alt="Logo" className='h-10 w-auto' />

        {/* Desktop and Tablet Menu */}
        <ul className='hidden md:flex lg:gap-7 text-black md:gap-3'>
            <Link to="Home" spy={true} smooth={true} offset={50} duration={500} className='hover:text-blue-500 cursor-pointer'>Products</Link>
            <Link to="Plans" spy={true} smooth={true} offset={50} duration={500} className='hover:text-blue-500 cursor-pointer'>Plans</Link>
            <Link to="More" spy={true} smooth={true} offset={50} duration={500} className='hover:text-blue-500 cursor-pointer'>More</Link>
        </ul>

        {/* Buttons for Tablet and Desktop */}
        <div className='hidden md:flex gap-4'>
          <button className='text-black hover:underline'>Login</button>
          <button className='bg-blue-600 px-4 py-2 rounded-full text-white hover:bg-blue-700'>
            Request a demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-black focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-gray-100'>
          <ul className='flex flex-col gap-4 px-6 py-4 text-black cursor-pointer'>
            <Link to="Home" spy={true} smooth={true} offset={50} duration={500} >
              <a className='hover:text-blue-500'>Products</a>
            </Link>
            <Link to="Plans" spy={true} smooth={true} offset={50} duration={500} >
              <a href="#Plans" className='hover:text-blue-500'>Plans</a>
            </Link>
            <Link to="More" spy={true} smooth={true} offset={50} duration={500} >
              <a href="#More" className='hover:text-blue-500'>More</a>
            </Link>
            <li>
              <button className='text-black hover:underline'>Login</button>
            </li>
            <li>
              <button className='bg-blue-600 px-8 py-2 rounded-full text-white hover:bg-blue-700'>
                Request a demo
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
