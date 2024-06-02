import React from 'react'
import logo from "../assets/images/dnj_logo.png"
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return(
    <header>
      <Link to="/"><img src={logo} alt="DNJ Logo" /></Link>
      <nav>
        <NavLink
          to="faq"
          className = {({isActive}) => isActive ? "tab-active" : null }
        >
          FAQ
        </NavLink>
        <NavLink
          to="about"
          className = {({isActive}) => isActive ? "tab-active" : null }
        >
          About
        </NavLink>
        <NavLink
          to="projects"
          className = {({isActive}) => isActive ? "tab-active" : null }
        >
          Projects
        </NavLink>
        <NavLink
          to="shop"
          className = {({isActive}) => isActive ? "tab-active" : null }
        >
          Shop
        </NavLink>
        <NavLink
          to="materials"
          className = {({isActive}) => isActive ? "tab-active" : null }
        >
          Materials
        </NavLink>
      </nav>
    </header>
  )
}
