import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav'
import brandImage from '../assets/img/benPitroff3.svg';
import NavDropdown from 'react-bootstrap/NavDropdown'; //possibly use this for the collapsed menu

function NavTabs({ currentPage, handlePageChange }) {

  //Hamburger stuff for react
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
    // figure out how to close navbar once "new page" is loaded, or clicked.
  }

  //Scrolly navbar stuff
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  let navbarClasses = ['navbar', 'navbarExpandLg', 'navbarDark', 'fixed-top'];
  if (scrolled) {
    navbarClasses.push('navbar-shrink');
  }


  return (
    <Nav className={navbarClasses.join(" ")} id="mainNav">
      <div className="container">
        <a className="navbarBrand" href="#home"><img src={brandImage} alt="img not alt - why???" /></a>
        <div onClick={handleToggle} className="navbarToggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-responsive"
          aria-controls="navbar-responsive" aria-expanded="false" aria-label="Toggle navigation">
          {navbarOpen ? "Close" : "Menu"}
          <i className="fas fa-bars ms-1"></i>
        </div>
        <div className={`menuNav ${navbarOpen ? "navbarCollapse collapse show" : ".navbarToggler navbarCollapse collapse"}`} id="navbarResponsive">
          <ul className="navbarNav textUppercase msAuto py4 pyLg0">
            <li className="navItem">
              <a
                href="#home"
                onClick={() => handlePageChange('Home')}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={currentPage === 'Home' ? 'navLink active' : 'navLink'}
              >
                Home
              </a>
            </li>
            <li className="navItem">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'About' ? 'navLink active' : 'navLink'}
              >
                About
              </a>
            </li>
            <li className="navItem">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Contact' ? 'navLink active' : 'navLink'}
              >
                Contact
              </a>
            </li>
            <li className="navItem">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Resume' ? 'navLink active' : 'navLink'}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Nav >
  );
}

export default NavTabs;
