import React from 'react';
import './Navbar.css'
const Navbar = () => {
  const link = {

  }
  
  return (
  <nav className='navbar navbar-dark bg-dark'>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar;