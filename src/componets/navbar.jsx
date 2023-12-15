import React, { useState } from 'react';
import { CiMenuKebab } from 'react-icons/ci';
import { IoCloseSharp } from "react-icons/io5";
import '../styles/navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='navbar'>
      <div className='container'>
        <h1 className='logo'>Logo</h1>
        
        <div className='navbar-components'>
          <a href='/' className='nav-link'>Home</a>
          <a href='/' className='nav-link'>About</a>
          <a href='/' className='nav-link'>Campaigns</a>
          <a href='/' className='nav-link'>Contact</a>
          <a href='/' className='nav-link'>Donate</a>
          </div>
        <div className='mobile' onClick={toggleMenu}>
          <CiMenuKebab />
          </div>

        {showMenu && (
          <div className='menu-box'>
            <a href='/' className='menu-link' onClick={toggleMenu}>Home</a>
            <a href='/' className='menu-link' onClick={toggleMenu}>About</a>
            <a href='/' className='menu-link' onClick={toggleMenu}>Campaigns</a>
            <a href='/' className='menu-link' onClick={toggleMenu}>Contact</a>
            <a href='/' className='menu-link' onClick={toggleMenu}>Donate</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
