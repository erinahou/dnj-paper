import { useEffect, useState } from 'react'
// import React from "react"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import sanityClient from "./client"
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState("")

  function increaseNumber() {
    setCount(prevNum => prevNum += 1)
  }

  //Testing with Sanity
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          "bodyText": body[].children[].text,
          author->{
            name
          }
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error)
  })

  console.log(posts); //array of posts

  return (
    <div className="container">
      {posts && posts.map((post, index) => (
        <div>
          <h2>{post.title}</h2>
          <h2>{post.author.name}</h2>
          <p>{post.bodyText}</p>
        </div>
      )
      )}
      <Navbar />
      <Main />
      <h1>{count}</h1>
      <button onClick={increaseNumber}>Increase me</button>
    </div>
  )
}

export default App
// export default client;
