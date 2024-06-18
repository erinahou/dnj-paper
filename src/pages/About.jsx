import React from 'react'
import teamPhoto from '../assets/images/dnj_team_portrait.jpg'

export default function About() {
    return(
      <div class="twelve-grid-container">
        <div class="twelve-col-full p-large-bottom">
          <h1>
          Paper is for drawing, wrapping, wiping, absorbing, sketching, crumpling, covering, tearing, soaking up, writing, throwing away. But paper can be a beautiful and radical material for clothing; in longstanding cultural histories throughout Asia and the West and as a tool to critique the disposability of fashion. This practice explores all the things that paper can offer as a material for design at the intersections of history, aesthetics, and function.
          </h1>
        </div>
        <div class="about-portrait twelve-col-first-five">
          <img src={ teamPhoto } alt="Portrait of founders" />
          <p class="caption">
            Our work is designed and made in our studio in Naarm (Melbourne, Australia).We acknowledge that the land on which we work and learn was never ceded from it’s traditional custodians, the people of the Woi wurrung and Boon wurrung language groups of the Eastern Kulin Nations.
          </p>
        </div>
        <div class="twelve-col-last-six">
          <div class="p-medium-bottom">
            <p>
              DNJ Paper is a collaborative research project and label situated in Melbourne, Australia, and is led by designers Daphne Mohajer va Pesaran and Jake Nakashima-Edwards. We employ a range of techniques, both traditional and nontraditional, to create paper clothing, accessories, and objects. We aim to address pressing social, aesthetic, and conceptual questions related to fashion and textiles design.
            </p>
            <p className="indented-text">
              We use handmade recycled rag paper, produced in our studio, as well as handmade Japanese paper, also known as washi. The washi is sourced from small studios located throughout Japan, and each sheet comes with comprehensive information on the conditions of its production.
            </p>
            <p className="indented-text">
              Our pieces are considered a work in progress, never fully "finished," and are designed to evolve over time. The intention is to allow for wear, repair, and decay. Wherever possible, we reduce, reuse, regenerate, and recycle.
            </p>
          </div>
          <div class="two-columns-off p-medium-bottom">
            <div class="title">
              <p class="label">Daphne Mohajer va Pesaran (PhD)</p>
            </div>
            <p class="info">
              Daphne is the Program Manager of the Bachelor of Textiles (Design) and lectures in fashion and textiles design and research in The School of Fashion and Textiles at RMIT University in Melbourne, Australia. She spent ten years studying and working in Tokyo, where she learned about many traditional craft practices. In her research and design practice she works with garments/products made from handmade paper and explores what materials and relationships can emerge in communities of human and nonhuman people. Daphne is currently undertaking research fellowships for the British Museum, the Australian Museum, and the International Specialized Skills Institute to research the use of paper for clothing in Japan and the Pacific Islands, as well as recycling used clothing into paper. She has recently published a book with Valiz, titled Radical Fashion Exercises: a workbook of modes and methods, co-edited with Dr Laura Gardner.
            </p>
          </div>
          <div class="two-columns-off p-medium-bottom">
            <div class="title">
              <p class="label">
                Jake Nakashima-Edwards
              </p>
            </div>
            <p class="info">
              Jake Nakashima-Edwards is a fashion practitioner and sessional teacher in The School of Fashion and Textiles at RMIT University, based in Naarm (Melbourne), Australia. His current practice, DNJ Paper, is a collaborative research project and micro-label, which he leads alongside Daphne Mohajer Va Pesaran. The project employs a range of techniques, both traditional and nontraditional, to create washi paper clothing, accessories, and objects. Jake's work has been exhibited at Craft Victoria, Melbourne Design Week, Melbourne Spring Fashion Week, iD Dunedin Fashion Week, and The Australian Tapestry Workshop. He was a recipient of Creative Victoria's Creator's Fund in 2022.  Jake is interested in the intersections between fashion, culture, capital, and the environment.
            </p>
          </div>
          <div>
            <p class="p-medium-bottom">
              To buy a DNJ piece, please have a look at our shop,or visit one of our stockists:
            </p>

            <p class="label">Melbourne, Australia</p>
            <ul class="p-medium-bottom">
              <li>Craft Victoria</li>
              <li>The Social Studio</li>
            </ul>

            <p class="label">Adelaide, Australia</p>
            <ul class="p-medium-bottom">
              <li>Shop Pond</li>
            </ul>

            <p class="label">London, UK</p>
            <ul class="p-medium-bottom">
              <li>STORE STORE</li>
            </ul>

            <p class="label">Tokyo, Japan</p>
            <ul class="p-medium-bottom" >
              <li>Daily Supply SSS</li>
            </ul>
          </div>
          <div>
            <p class="label">
              Paper Clothes and Sustainable Design Resources:
            </p>
            <ul>
              <li>Atopos Collection</li>
              <li>Kamiko, Washi, Takuhonshi: Making paper clothing in Japan</li>
              <li>Kamiko: Growing Paper Clothes in Rural Japan</li>
              <li>Awagami Paper Factory</li>
              <li>Shifu: A Traditional Paper Textile of Japan</li>
              <li>Why is Japan Still so Attached to Paper?</li>
              <li>V&A 60s Paper Dresses</li>
              <li>COSMIC WONDER kamiko/kamikoromo</li>
              <li>Perfect Paper Cloth from Kurotani</li>
              <li>Alexa Hatanaka</li>
              <li>MOMIGAMI by Donald Farnsworth</li>
              <li>Pride of Japan Papermaking Map</li>
              <li>紙衣和紙の衣服造形</li>
              <li>紙を材料とした衣服造形の取り組み</li>
              <li>柿渋紙衣の研究と衣服制作</li>
              <li>奈良東大寺修二会に用いられる紙衣の研究</li>
              <li>Sustainable Textile Toolkit</li>
              <li>Sustainable Fashion Toolkit</li>
            </ul>
          </div>
        </div>
      </div>
    )
}
