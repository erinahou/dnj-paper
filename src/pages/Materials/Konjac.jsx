import React from 'react'
import MaterialInfo from '../../components/MaterialInfo'

export default function Konjac() {
  let bodyText = `Konjac is a common name for the East and Southeast Asian plant Amorphophallus konjac, which has an edible corm (bulbo-tuber). It is also known as konjaku, konnyaku potato, devil's tongue, voodoo lily, snake palm, or elephant yam. It is edible, and used in lots of Asian food products. We use it as a finish on our paper cloth.`
  return(
      <MaterialInfo
        titleEng="Konjac"
        titleJp="Konnyaku"
        titleKanji="コンニャク"
        info={bodyText}
      />
  )
}
