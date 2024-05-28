// import React from "react"
import logo from "../assets/images/dnj_logo.png"

export default function Navbar() {
    return(
      <div>
        <img src={logo} alt="DNJ Logo" />
        <nav>
          <ul>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Materials</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </nav>
      </div>
    )
}
