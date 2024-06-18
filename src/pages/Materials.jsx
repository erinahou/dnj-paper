import React from "react"
import { Outlet, NavLink } from "react-router-dom"
import stackOfPaper from '../assets/images/dnj_paperStack@3x.png'
import AgarAgar from "./Materials/AgarAgar"
import Konjac from "./Materials/Konjac"
import FermentedPersimmon from "./Materials/FermentedPersimmon"
import OilPaper from "./Materials/OilPaper"
import Mica from "./Materials/Mica"
import Beeswax from "./Materials/Beeswax"
import paperBrickImg from "../assets/images/dnj_paperBrickPlaceholder@3x.jpeg"
import paperBrickImgTwo from "../assets/images/dnj_paperBrickPlaceholder_2@3x.jpeg"

export default function Materials() {
  return(
    <div className="twelve-grid-container">
      <div className="materials-title twelve-col-full">
        <h1>Every piece from DNJ is made of handmade paper</h1>
        <p>(and sometimes other stuff, too).</p>
      </div>
      <div className="materials-carousel twelve-col-first-four">
        <img src={stackOfPaper} alt="Hanging paper" className="materials-carousel"/>
        <p class="caption">1/3</p>
      </div>
      <div className="twelve-col-last-six">
        <div className="p-large-bottom">
          <p class="label p-medium-bottom">Japanese paper / Washi / 和紙</p>
          <p>
          Originating in China in the 10th century, Japanese washi paper is made from the inner bark of the Paper Mulberry tree. It has many, many uses, from books to clothing, bags, mats, shoes, boxes, umbrellas, architecture, water bottles, lamps, and so much more.
          </p>
          <p class="indented-text">
          Washi paper is different from the kind of paper that you would find in a receipt, or in a notebook. Thanks to the length of it’s fibers and the way it is made, it is more flexible and durable than other kinds of pulp paper.
          </p>
          <p class="indented-text">
          Making paper is a communal activity and requires the labour of an extended network of people. At it’s peak, there were 70,000+ handmade papermaking houses in Japan. Now there are less than 150. Our suppliers are all over Japan, and we work with a distributor to source and pay our suppliers equitably, which means that each sheet costs us roughly $50 AUD. Our supplier gives us an exhaustive amount of information about each sheet, including the source of raw materials, type of water used, name of the person who made each sheet, techniques applied, etc.
          </p>
          <p className="indented-text">
          This video details the intensive process of making one sheet of handmade washi paper. Here is another.
          </p>
        </div>
        <div className="materials-brick p-xsmall-bottom">
          <img src={paperBrickImg} />
          <img src={paperBrickImgTwo} />
        </div>
        <p className="caption p-large-bottom">
          Bricked garments, shown at Matters, Melbourne Design Week 2024
        </p>
        <FermentedPersimmon />
        <AgarAgar />
        <Konjac />
        <Mica />
        <OilPaper />
        <Beeswax />
        <Outlet />
      </div>
    </div>
  )
}
