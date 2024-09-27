import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import "../public/navbar.css";
import { Link } from "react-scroll";
import { NavLink } from 'react-router-dom';


const Navbarlitterl = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const toggleNavbar = () => {
        setTimeout(function(){
          setIsNavOpen(!isNavOpen);
        },100)
      };
  return (
    <header>
      <NavLink className="nav__title" to="/">DALTEX</NavLink>
      <nav className={isNavOpen ? "responsive_nav" : "nav__nav"}>
        <NavLink to="/">Home</NavLink>
        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleNavbar}>
        <FaBars />
      </button>
    </header>
  )
}

export default Navbarlitterl