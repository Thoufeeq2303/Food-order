import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineShoppingBag } from "react-icons/md";
import './nav.css'

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand" href="#"><img src='https://streetarabiya.com/wp-content/uploads/2024/04/sa-website-logo-1-1024x274.png' /></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cater">Catering</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/career">Career</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About us</Link>
              </li>
            </ul>
            <Link className='nav-btn' to="/order">ORDER NOW</Link>
            <Link className='nav-btn' to="/login">LOG IN</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
