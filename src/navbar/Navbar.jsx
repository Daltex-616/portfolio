import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../public/navbar.css";
import { Link } from "react-scroll";


export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <Link classID="nav__title" to="profile" activeClass="active" spy={true} smooth={true} offset={0} duration={500}>DALTEX</Link>
    
      <nav className={isNavOpen ? "responsive_nav" : "nav__nav"}>
        <Link to="profile" spy={true} smooth={true} offset={-50} duration={500}>Home</Link>
        <Link to="skills" spy={true} smooth={true} offset={-40} duration={500}>Skills</Link>
        <Link to="portafolio" spy={true} smooth={true} offset={0} duration={500}>Portafolio</Link>
        <Link to="Contacto" spy={true} smooth={true} offset={200} duration={500}>Contacto</Link>


        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleNavbar}>
        <FaBars />
      </button>
    </header>
  );
};