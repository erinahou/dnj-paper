import React from 'react'
import { Link } from 'react-router-dom'
import { makeServer } from '../../server'

// Initialize the MirageJS server
makeServer();

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
      key={item.id}
    >
      <li>{item.title}, {item.price}</li>
    </Link>
  ))

  return(
    <ul>
      {shopItemElements}
    </ul>
  )
}
