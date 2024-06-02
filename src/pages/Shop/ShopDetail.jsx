import React from 'react'
import { useParams, Link, NavLink, Outlet } from 'react-router-dom'

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
      <div>
        <Link
          to=".."
          relative="path"
        >
          &larr; <span>Back to all shop items</span>
        </Link>
      </div>
      <img src={shopItem.imageUrl} width={150} />
      <h1>{shopItem.title}</h1>
      <p>Price: ${shopItem.price}</p>
      <nav>
        <NavLink
          to="."
          end
          className= {({isActive}) => isActive ? "tab-active" : null }
        >
          Description
        </NavLink>
        <NavLink
          to="fabrics-and-care"
          className= {({isActive}) => isActive ? "tab-active" : null }
        >
          Fabrics and care
        </NavLink>
        <NavLink
          to="photos"
          className= {({isActive}) => isActive ? "tab-active" : null }
        >
          Photos
        </NavLink>
      </nav>
      <Outlet context={{ shopItem }} />
    </div>
  )
}
