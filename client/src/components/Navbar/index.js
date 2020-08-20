//dependencies
import React from 'react'
import { Link } from 'react-router-dom'

//assets
import logo from "./p-i_logo.png"

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="navbar-brand">
    <img
    src={logo}
    width="30"
    height="30"
    alt="logo"
    loading="lazy"
    />
  </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" className="nav-link" >Home </Link>
      </li>
      <li className="nav-item">
        <Link to="/projects" className="nav-link" >Projects</Link>
      </li>
      <li className="nav-item">
        <Link to="/create" className="nav-link" >Create Project</Link>
      </li>
    </ul>
  </div>
</nav>

        )
}

export default Navbar