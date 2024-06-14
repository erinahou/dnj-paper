import React from 'react'
import MaterialInfo from "../../components/MaterialInfo"

export default function Mica() {
  let bodyText = `Mica is used to add a shine and lustre to the paper cloth. We are currently seeking sustainable and ethical sources of or allternatives to Mica, but they are very hard to find.`

  console.log()
  return(
    <MaterialInfo
      titleEng="Mica"
      titleJp="Unmo"
      titleKanji="雲母"
      info={bodyText}
    />
  )
}
