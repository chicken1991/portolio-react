import React from 'react';
import Nav from 'react-bootstrap/Nav'
import brandImage from '../assets/img/benPitroff3.svg';
import NavDropdown from 'react-bootstrap/NavDropdown'; //possibly use this for the collapsed menu


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Nav className="navbar navbarExpandLg navbarDark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbarBrand" href="#home"><img src={brandImage} alt="img not alt - why???" /></a>
        <div className="navbarToggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-responsive"
          aria-controls="navbar-responsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas faBars ms1"></i>
        </div>
        <div className="collapse navbarCollapse" id="navbarResponsive">
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
