import React, { useState } from 'react'

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo"></div>
        <div>
          <ul className="nav-links">
            <li><a href="#profile">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo"></div>
        <div className="hamburger-menu">
          <div 
            className={`hamburger-icon ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#profile" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contacts" onClick={toggleMenu}>Contacts</a></li>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav

