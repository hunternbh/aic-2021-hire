import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { SIGNUPLINK } from './utils';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

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
  window.addEventListener('resize', showButton)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img src="/logo-white.png" alt="" className='navbar-icon' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Hire
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/hire-x'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Hire-X
                </Link>
              </li>
              <li className='nav-item'>
                <a href="https://streamlit13.herokuapp.com/"
                className='nav-links'
                onClick={closeMobileMenu}>

                Hire-Y
                </a>
              </li>
              <li className='nav-item'>
                <Link
                  to='/ourstory'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Our Story
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <a href={SIGNUPLINK} className='btn-link'>
                    <Button buttonStyle='btn--outline'>Inquire</Button></a>
                ) : (
                  <a href={SIGNUPLINK} className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Inquire
                    </Button>
                    </a>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
