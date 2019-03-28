import React from 'react';
import './Navbar.scss'
const Navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
    <a className="navbar-brand" href="/">//<span>tbd</span></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Companies <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">Simulator <span className="sr-only">(current)</span></a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar;
