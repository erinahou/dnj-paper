import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function ShopItemPhotos() {
  const { shopItem } = useOutletContext()

  return(
    <img src={shopItem.imageUrl} width={50} />
  )
}
