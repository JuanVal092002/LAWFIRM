import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Logo from '../assets/img/logo.png';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setBg(true);
      } else {
        setBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  return (
    <header
      className={`${
        bg ? 'bg-whiteshadow-md py-4' : ''
      } p-8 lg:px-0 w-full fixed z-10 transition-all duration-300`}
    >

    <div className='container mx-auto flex 
    items-center justify-between'>
    
    {/* Logo */}
     <a href='#'>
        <img src={Logo} alt='' />
      </a>

    {/* nav */}
    <Nav/>

    {/* NavMobile */}
    <NavMobile/>


    </div> 
    </header>
  );
};

export default Header;
