import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function ShopDetail() {
  let params = useParams()
  let [shopItem, setShopItem] = React.useState(null)

  React.useEffect(() => {
    fetch(`/api/shop/${params.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data) // remove this later
        setShopItem(data.shopItem)
      })
  }, [params.id])

  if (!shopItem) {
    return <p>Loading...</p>
  }

  return(
    <div>

      <div class="product-container twelve-grid-container">
        <div class="product-title">
          <Link
            to=".."
            relative="path"
          >
            &larr; <span class="label">All items</span>
          </Link>
        </div>
        <div class="product-images-description">
          <h4>{shopItem.title} {shopItem.madeToOrder && ' (Made to order)'}</h4>
          <div class="p-medium-bottom">
            <p>{shopItem.description}</p>
          </div>
          <div class="p-medium-bottom">
            <p class="label">Custom order</p>
            <p>{shopItem.customOrder}</p>
          </div>
          <div class="p-medium-bottom">
            <p class="label">Cleaning</p>
            <p>{shopItem.cleaning}</p>
          </div>
          <div class="p-medium-bottom">
            <p>A${shopItem.price}</p>
          </div>
          <button class="buy-button">Add to bag</button>
        </div>
        <div class="product-images-container">
          {
            shopItem.imageUrl.map(image => <img src={image}/>)
          }
        </div>
      </div>
    </div>
  )
}
