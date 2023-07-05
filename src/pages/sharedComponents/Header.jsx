/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import Breadcrumb from './Breadcrumb'

function Header() {
  return (
    <header>
        <div className="container">
          <nav>
              <h1>JobArouter</h1>
              <NavLink to="/" >Home</NavLink>
              <NavLink to="about" >About us</NavLink>
              <NavLink to="help">Help</NavLink>
              <NavLink to="careers">Careers</NavLink>
          </nav>
          <Breadcrumb />
        </div>
    </header>
  )
}

export default Header