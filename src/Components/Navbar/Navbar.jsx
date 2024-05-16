import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo_2 from '../../images/logoimg1.png'
import menu_icon from '../../images/menu-icon.png';
import {Link} from 'react-scroll';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}` }>
        <img src={logo_2} alt="logo" className='logo' />
        <h2>Princeton</h2>
         <ul className={mobileMenu ?  '' : 'hide-mobile-menu'}>
            <li><Link to="home" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="program"  smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to="about"  smooth={true} offset={-150} duration={500}>About</Link></li>
            <li><Link to="campus"  smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to="contact"  smooth={true} offset={-260} duration={500} >Contact</Link></li> 
        </ul>
        <img src={menu_icon} alt="icon" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}


export default Navbar