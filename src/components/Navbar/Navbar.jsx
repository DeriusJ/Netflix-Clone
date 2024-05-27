import React, { useEffect, useRef } from 'react';
import './Navbar.css'; // Assuming Navbar.css is in the same directory
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search_icon.svg'; // Using a descriptive variable name
import bellIcon from '../../assets/bell_icon.svg'; // Using a descriptive variable name
import profile from '../../assets/profile_img.png';
import caret from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';

const Navbar = () => {


  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])
  
  return (
    <div  ref={navRef} className='Navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" /> {/* Added alt text */}
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="Search Icon" className='icons' /> {/* Added alt text */}
        <p>Children</p>
        <img src={bellIcon} alt="Bell Icon" className='icons' /> {/* Added alt text */}
        <div className='navbar-profile'>
          <img src={profile} alt="Profile" /> {/* Added alt text */}
          <img src={caret} alt="Profile" /> {/* Added alt text */}
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
