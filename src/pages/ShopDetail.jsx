import React from 'react'
import { useParams } from 'react-router-dom'

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

  return(
    <div>
      {shopItem ? (
        <div>
          <h1>{shopItem.title}</h1>
          <p>Price: ${shopItem.price}</p>
        </div>
      ) : <p>Loading...</p>}
    </div>
  )
}
