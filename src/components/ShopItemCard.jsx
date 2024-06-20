import React from 'react'

export default function ShopItemCard(prop) {
  return(
    <div>
      <div className="shop-card-image-container">
        <img src={prop.img[0]} className="shop-card-image" />
      </div>
      <div>
        <span>{prop.title}</span>
        <span class="label"> ${prop.price}</span>
        <span class="label">{prop.madeToOrder && ' Made to order'}</span>
      </div>
    </div>
  )
}
