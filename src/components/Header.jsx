import React from 'react'
import logo from "../assets/images/dnj_logo.png"
import { Link } from 'react-router-dom'

export default function Header() {
  return(
    <header>
      <Link to="/"><img src={logo} alt="DNJ Logo" /></Link>
      <nav>
        <Link to="/faq">FAQ</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/shop">Shop</Link>
      </nav>
    </header>
  )
}
