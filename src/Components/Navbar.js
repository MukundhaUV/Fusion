import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 800) {
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
      <nav className='navbar navbar-collapse'>
        <div className='navbar-container'>
          <a to='/' className='navbar-logo navbar-brand' onClick={closeMobileMenu}>
            FUSION
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active navbar-collapse' : 'nav-menu'}>
            <li className='nav-item'>
              <a 
                to='/' 
                className='nav-links' 
                onClick={closeMobileMenu}
              >
              HOME
              </a>
            </li>
            
            <li className="nav-item dropdown" id='drop'>
              <a className="nav-links nav-link dropdown-toggle">
              <i className="fas fa-fw fa-hand-holding-medical"></i>
              BROWSE CATEGORIES
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <ul className="dropdown-content nav-menu dropdown-toggle" id="dpp">
                      <li className="nav-item" id="dp1">
                    <a to='/' className="dropdown-item">STYLING AND CUT</a>
                    <a to='/' className="dropdown-item">Home service</a>
                    <a to='/' className="dropdown-item">Clinic service</a>
                    </li>
                    <li className="nav-item" id="dp2">
                    <a to='/' className="dropdown-item">STYLING AND CUT</a>
                    <a to='/' className="dropdown-item">Home service</a>
                    <a to='/' className="dropdown-item">Clinic service</a>
                    </li>
                    <li className="nav-item" id="dp3">
                    <a to='/' className="dropdown-item">STYLING AND CUT</a>
                    <a to='/' className="dropdown-item">Home service</a>
                    <a to='/' className="dropdown-item">Clinic service</a>
                    </li>
                  </ul>

              </div>
            </li>

            <li className='nav-item' id='drop1'>
              <a
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              ABOUT US
              <i className="fas fa-caret-down"></i>
              </a>
            </li>
            
            <li className='nav-item' id='drop1'>
              <a
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              <i className="fas fa-fw fa-dog"></i>
                BLOG
              </a>
            </li>

            <li className='nav-item' id='drop1'>
              <a
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               CONTACT US
              </a>
            </li>

            <li className='nav-item' id='drop1'>
              <a
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               JOIN FUSION
              </a>
            </li>
          </ul>
          </div>
      </nav>
    </>
  );
}

export default Navbar;