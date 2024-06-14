import React from 'react'
import MaterialInfo from "../../components/MaterialInfo"

export default function FermentedPersimmon() {
  let bodyText = `Kakishibu is a dye made from the tannin of fermented persimmon, crushed and processed while they are green. The dye offers antibacterial and strengthening qualities to paper. We use it as a finish and a dye for our paper cloth.`

  console.log()
  return(
    <MaterialInfo
      titleEng="Fermented Persimmon Dye"
      titleJp="Kakishibu"
      titleKanji="柿渋"
      info={bodyText}
    />
  )
}
