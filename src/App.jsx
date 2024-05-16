// import { useState } from 'react'
import React from "react"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Navbar />
      <Body />
    </div>
  )
}

export default App
