import React from 'react'

export default function ShopItemCard(prop) {
  return(
    <div className="shop-card">
      <img src={prop.img} className="shop-card--image" />
      <div>
        <p>{prop.title}</p>
        <p>{prop.price}</p>
      </div>
    </div>
  )
}
