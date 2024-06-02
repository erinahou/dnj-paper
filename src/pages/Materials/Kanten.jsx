import React from 'react'
import MaterialInfo from "../../components/MaterialInfo"

export default function Kanten() {
  let bodyText = `Agar may have been discovered in Japan in 1658 by Mino Tarōzaemon (美濃 太郎左衞門), an innkeeper in current Fushimi-ku, Kyoto who, according to legend, was said to have discarded surplus seaweed soup (Tokoroten) and noticed that it gelled later after a winter night's freezing. Over the following centuries, agar became a common gelling agent in several Southeast Asian cuisines. We use it as a finish on our paper cloth.`

  console.log()
  return(
    <MaterialInfo
      title="Agar Agar / Kanten / 寒天"
      info={bodyText}
    />
  )
}
