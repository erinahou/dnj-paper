import React from 'react'
import MaterialInfo from "../../components/MaterialInfo"

export default function OilPaper() {
  let bodyText = `Oiled with special drying oils, oil paper is used for umbrellas, rainwear, hats, and protective paper cloth.`

  console.log()
  return(
    <MaterialInfo
      titleEng="Oil Paper"
      titleJp="Aburagami"
      titleKanji="油紙"
      info={bodyText}
    />
  )
}
