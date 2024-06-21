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
      <div className="product-container twelve-grid-container">
        <div className="product-title">
          <Link
            to=".."
            relative="path"
          >
            &larr; <span className="label">All items</span>
          </Link>
        </div>
        <div className="product-images-description">
          <h4>{shopItem.title} {shopItem.madeToOrder && ' (Made to order)'}</h4>
          <div className="p-medium-bottom">
            <p>{shopItem.description}</p>
          </div>
          <div className="p-medium-bottom">
            <p className="label">Custom order</p>
            <p>{shopItem.customOrder}</p>
          </div>
          <div className="p-medium-bottom">
            <p className="label">Cleaning</p>
            <p>{shopItem.cleaning}</p>
          </div>
          <div className="p-medium-bottom">
            <p>A${shopItem.price}</p>
          </div>
          <button className="buy-button">Add to bag</button>
        </div>
        <div className="product-images-container">
          {
            shopItem.imageUrl.map((image, index) => {
              return <img src={image} key={index}/>
            })
          }
        </div>
      </div>
    </div>
  )
}
