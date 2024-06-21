import React from 'react'
import ShopItemCard from '../../components/ShopItemCard';
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

  let shopItemElements = shopItems.map((item, key) => (
    <Link
      to={`/shop/${item.id}`}
      aria-label={`View details for ${item.name}, priced at $${item.price}`}
      key={item.id}
      className={ key %  2 === 0 ? 'shop-card shop-card-side-even' : 'shop-card shop-card-side-odd' }
    >
      <ShopItemCard
        img={item.imageUrl}
        title={item.title}
        price={item.price}
        madeToOrder={item.madeToOrder}
      />
    </Link>
  ))

  return(
    <div className="shop-list-container twelve-grid-container">
      {shopItemElements}
    </div>
  )
}
