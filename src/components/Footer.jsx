import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'
import logo from "../assets/images/dnj_logo@3x.png"

export default function Footer() {
  return(
    <footer className="label">
      <Link to="/">
        <img
          src={logo}
          alt="DNJ Logo"
          className="header-logo"
        />
      </Link>
    </footer>
  )
}

/*<div>
  &#169; 2024 DNJ, Inc. All rights reserved.
</div>*/
