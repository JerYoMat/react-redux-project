import React from 'react';
import './NavbarCustom.scss';
import * as coda from '../images/coda.png';
import Search from './Search';
const NavbarCustom = () => {
  
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <a className="navbar-brand" href="/"><img src={coda} alt='logo'/><span>CoDA</span></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/companies">Companies <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/simulator">Simulator <span className="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
  </nav>
  )
}

export default NavbarCustom;
