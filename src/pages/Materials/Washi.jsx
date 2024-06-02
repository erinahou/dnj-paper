import React from 'react'
import MaterialInfo from '../../components/MaterialInfo'

export default function Washi() {
  let bodyText = `Originating in China in the 10th century, Japanese washi paper is made from the inner bark of the Paper Mulberry tree. It has many, many uses, from books to clothing, bags, mats, shoes, boxes, umbrellas, architecture, water bottles, lamps, and so much more.

  Washi paper is different from the kind of paper that you would find in a receipt, or in a notebook. Thanks to the length of it’s fibers and the way it is made, it is more flexible and durable than other kinds of pulp paper.

  Making paper is a communal activity and requires the labour of an extended network of people. At it’s peak, there were 70,000+ handmade papermaking houses in Japan. Now there are less than 150. Our suppliers are all over Japan, and we work with a distributor to source and pay our suppliers equitably, which means that each sheet costs us roughly $50 AUD. Our supplier gives us an exhaustive amount of information about each sheet, including the source of raw materials, type of water used, name of the person who made each sheet, techniques applied, etc.
  `
  return(
      <MaterialInfo
        title="Japanese paper / Washi / 和紙"
        info={bodyText}
      />
  )
}
