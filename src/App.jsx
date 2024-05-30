import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import sanityClient from "./client"
import './App.css'
import Home from './pages/Home'
import Faq from './pages/Faq'
import About from './pages/About'
import Projects from './pages/Projects'
import Shop from './pages/Shop'
import ShopDetail from './pages/ShopDetail'
import Layout from "./components/Layout"

// Put this back on for Sanity
// function App() {
//   const [count, setCount] = useState(0)
//   const [posts, setPosts] = useState("")

//   function increaseNumber() {
//     setCount(prevNum => prevNum += 1)
//   }

//   //Testing with Sanity
//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[_type == "post"]{
//           title,
//           "bodyText": body[].children[].text,
//           author->{
//             name
//           }
//         }`
//       )
//       .then((data) => setPosts(data))
//       .catch(console.error)
//   })

//   console.log(posts); //array of posts

//   return (
//     <div className="container">
//       <Navbar />
//       {posts && posts.map((post, index) => (
//         <div>
//           <h2>{post.title}</h2>
//           <h2>{post.author.name}</h2>
//           <p>{post.bodyText}</p>
//         </div>
//       )
//       )}
//       <Main />
//       <h1>{count}</h1>
//       <button onClick={increaseNumber}>Increase me</button>
//     </div>
//   )
// }

function App() {
  // const [count, setCount] = useState(0)
  // function increaseNumber() {
  //   setCount(prevNum => prevNum += 1)
  // }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ShopDetail/>} />
      </Route>
    </Routes>
  )
}


export default App
// export default client;
