import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function ShopItemsFabricsAndCare() {
  const { shopItem } = useOutletContext()

  return(
    <p>Fabrics and care detail</p>
  )
}
