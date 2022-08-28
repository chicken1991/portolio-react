import React from 'react';
import brandImage from '../assets/img/benPitroff3.svg';

//import image?

// Bootstrap imports?
// import Button from 'react-bootstrap/Button';      // turns out this isn't really needed? Idunno 
import Nav from 'react-bootstrap/Nav'

export default function Navegation() {

    /* Troubleshoot list:
    fixed-top > fixedTop
    textUppercase (or text-uppercase) doesn't actually make it uppercase
    */
    return (
        <Nav className="navbar navbarExpandLg navbarDark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbarBrand" href="#page-top"><img src={brandImage} alt="img not alt - why???"/></a>
                <div className="navbarToggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-responsive"
                    aria-controls="navbar-responsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas faBars ms1"></i>
                </div>
                <div className="collapse navbarCollapse" id="navbarResponsive">
                    <ul className="navbarNav textUppercase msAuto py4 pyLg0">
                        <li className="navItem"><a className="navLink" href="#portfolio">Portfolio</a></li>
                        <li className="navItem"><a className="navLink" href="#about">About</a></li>
                        <li className="navItem"><a className="navLink" href="#contact">Contact</a></li>
                        <li className="navItem"><a className="navLink" href="../assets/benpitroff_resume.pdf">Resume</a></li>
                    </ul>
                </div>
            </div>
        </Nav>
                )
                
}