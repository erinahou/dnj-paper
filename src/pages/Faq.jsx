import React from 'react'
import { useState } from 'react'

export default function Faq() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDrawer}>Toggle Drawer</button>
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleDrawer}></div>
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <button onClick={toggleDrawer}>Close</button>
        <div>
          <div>
            <p class="font-serif">1. PAPER?!</p>
            <p>
            Yes! We use mainly handmade Japanese paper (washi) made in Japan and handmade rag paper, made in our studio from disused clothing and scrap fabrics. We do not use Tyvek, or any other plastic “paper”. Learn more about the materials we use here.
            </p>
          </div>
          <div>
            <p class="font-serif">2. What happens when it gets wet?</p>
            <p>
            Any products that are waxed are shockingly water-resistant. The wax coats the material and the fibers, making it strong, durable, and resistant to moisture. You can see some images here.
            </p>
          </div>
          <div>
            <p class="font-serif">3. Can you wash it?</p>
            <p>
            The un-waxed paper garments can be dry-cleaned, spot cleaned, and repaired. The caps have a fabric band around the inside that can be hand washed. You can watch a short video of the process here.

            ...or the full version here.

            HOW TO WASH A WAXED PAPER CAP

            1) Be gentle
            2) Use some soapy water to hand wash the brim gently until you feel the sweat and grime is dislodged. Rinse gently.
            3) You can stop here and let it dry, but if you feel it needs a deeper clean, you may want to wash the bottom of the brim, or even the whole cap.
            4) You can dunk the whole cap in the sudsy water and gently agitate it by hand, then dunk again to clean it.
            5) Be gentle, and give it a once-over.
            6) Let it dry in the sun.
            </p>
          </div>
          <div>
            <p class="font-serif">4. How do I re-wax my cap?</p>
            <p>
            While it is not necessary, we can re-wax your cap when you want  a bit of a refresh. Please note that we have had our caps for years  and haven’t needed a re-wax, but the longevity really depends on the paper we use for each design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
