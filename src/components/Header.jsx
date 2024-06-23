import React from 'react'
import '../styles/header.css'
import logo from "../assets/images/dnj_logo@3x.png"
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return(
    <div>

      <header>
        <nav className="header-nav label">
          <Link
            className = {({isActive}) => isActive ? "tab-active" : null }
            onClick={toggleDrawer}
          >
            FAQ
          </Link>
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

      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleDrawer}></div>
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <div className="faq-title p-medium-bottom">
          <h1 className="label">Frequently asked questions</h1>
          <button className="bracket-button" onClick={toggleDrawer}>(Close)</button>
        </div>
        <div>
          <div className="p-medium-bottom">
            <p className="font-serif">1. PAPER?!</p>
            <p>
            Yes! We use mainly handmade Japanese paper (washi) made in Japan and handmade rag paper, made in our studio from disused clothing and scrap fabrics. We do not use Tyvek, or any other plastic “paper”. Learn more about the materials we use here.
            </p>
          </div>
          <div className="p-medium-bottom">
            <p class="font-serif">2. What happens when it gets wet?</p>
            <p>
            Any products that are waxed are shockingly water-resistant. The wax coats the material and the fibers, making it strong, durable, and resistant to moisture. You can see some images here.
            </p>
          </div>
          <div className="p-medium-bottom">
            <p class="font-serif">3. Can you wash it?</p>
            <p>
             The un-waxed paper garments can be dry-cleaned, spot cleaned, and repaired. The caps have a fabric band around the inside that can be hand washed. You can watch a short video of the process here.
            </p>
            <p>...or the full version here.</p>
            <p>How to wash a waxed paper cap</p>
            <ol>
              <li>Be gentle</li>
              <li> Use some soapy water to hand wash the brim gently until you feel the sweat and grime is dislodged. Rinse gently.</li>
              <li>You can stop here and let it dry, but if you feel it needs a deeper clean, you may want to wash the bottom of the brim, or even the whole cap.</li>
              <li>You can dunk the whole cap in the sudsy water and gently agitate it by hand, then dunk again to clean it.</li>
              <li>Be gentle, and give it a once-over.</li>
              <li>Let it dry in the sun.</li>
            </ol>
          </div>
          <div className="p-medium-bottom">
            <p class="font-serif">4. How do I re-wax my cap?</p>
            <p>
            While it is not necessary, we can re-wax your cap when you want  a bit of a refresh. Please note that we have had our caps for years  and haven’t needed a re-wax, but the longevity really depends on the paper we use for each design.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
