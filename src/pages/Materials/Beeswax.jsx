import React from 'react'
import MaterialInfo from "../../components/MaterialInfo"

export default function Beeswax() {
  let bodyText = `Beeswax is a product made from the honeycomb of the honeybee and other bees. The mixing of pollen oils into honeycomb wax turns the white wax into a yellow or brown color. Beeswax is used for high cholesterol, pain, fungal skin infections, and other conditions.

  We use beeswax for waterproofing our products, and get it from Honey For Life.`

  console.log()
  return(
    <MaterialInfo
      titleEng="Beeswax"
      titleJp="Mitsuro"
      titleKanji="蜜蝋"
      info={bodyText}
    />
  )
}
