import React from "react"
import { Outlet, NavLink } from "react-router-dom"

export default function MaterialLayout() {
  return(
    <>
      <nav>
        <NavLink
        to="washi"
        className= {({isActive}) => isActive ? "tab-active" : null }
        >
          Washi
        </NavLink>
        <NavLink
        to="kanten"
        className= {({isActive}) => isActive ? "tab-active" : null }
        >
          Kanten
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}
