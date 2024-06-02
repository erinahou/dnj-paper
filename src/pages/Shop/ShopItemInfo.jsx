import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function ShopItemInfo() {
  const { shopItem } = useOutletContext()

  return(
    <p>Description: {shopItem.description}</p>
  )
}
