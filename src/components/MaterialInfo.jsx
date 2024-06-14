import React from 'react'

export default function MaterialInfo(props) {
  return(
    <div className="two-columns-off p-large-bottom">
      <div className="title">
        <p className="label">{props.titleEng}</p>
        <p className="label">/ {props.titleJp}</p>
        <p className="label">/ {props.titleKanji}</p>
      </div>
      <p className="info">{props.info}</p>
    </div>
  )
}
