import React, { useState, useEffect } from 'react';
import { NavLink as Link } from "react-router-dom";
import '../Style/Navbar.css';
import { Button } from './Button';
import About from '../Components/About';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TUTORIALS
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item sidebar-logo'>
                  <Link to='/' class="sidebar-logo-text" onClick={closeMobileMenu}>
                    TUTORIALS
                  </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/faculty' className='nav-links' onClick={closeMobileMenu}>
                        Faculty
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu} >
                        Contact
                    </Link>
                </li>
          </ul>
           <Link to='/sign-up' className='sign-up-btn' onClick={closeMobileMenu} >
              SIGN UP
            </Link> 
        </div>
      </nav>
    </>
  );
}

export default Navbar;