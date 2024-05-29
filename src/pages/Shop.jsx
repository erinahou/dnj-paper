import React from 'react'
import { Link } from 'react-router-dom'
import { createServer } from "miragejs"

let server = createServer()
server.get("/api/shop", { shopItems:[
    { id: 1, title: "Paper Leather Cap", price: 225},
    { id: 2, title: "Phone Pouch", price: 268},
  ]
})

export default function Shop() {
  let [shopItems, setShopItems] = React.useState([])

  React.useEffect(() => {
    fetch("/api/shop")
      .then(res => res.json())
      .then(data => setShopItems(data.shopItems))
  }, [])

  let shopItemElements = shopItems.map(item => (
    <Link
      to={`/shop/${item.id}`}
      aria-label={`View details for ${item.name}, priced at $${item.price}`}
    >
      <li key={item.id}>{item.title}, {item.price}</li>
    </Link>
  ))

  return(
    <ul>
      {shopItemElements}
    </ul>
  )
}
