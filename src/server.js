import { createServer, Response } from "miragejs";

export function makeServer() {
  const shopItems = [
    { id: 1, title: "Paper Leather Cap", price: 225, madeToOrder: false, imageUrl: ["https://res.cloudinary.com/dmvbynqto/image/upload/v1717285292/dnj_cap.jpg", "https://res.cloudinary.com/dmvbynqto/image/upload/v1718757794/DNJ-PAPER---Paper-Leather-Ballcap---messy-orange-gouache_u8w64p.jpg", "https://res.cloudinary.com/dmvbynqto/image/upload/v1718764976/DNJ-PAPER---Paper-Leather-Ballcap--calligraphy-ink_zngyhq.jpg"], description: `This waxed paper ‘leather’ baseball cap is handmade in our studio in Melbourne, Australia. Our caps are made with traditional Japanese washi paper, produced from the fibrous bark of kozo (Mulberry) trees, lined with natural fabric (deadstock, repurposed, or found) and then waxed. Though it starts stiff, over time, the paper  will soften, molding the cap to your head. The waxed paper is water resistant, durable, light, and warm. To see what we have in stock, get in touch or check our Insta (@dnj_paper).`, customOrder: `We love custom orders! We can make a specific colour for you, stitch your name into the cap, etc. Send us a reference or Pantone colour and we can go from there 👽️ See below for some inspiration.`, cleaning: `To clean, lightly handwash in cold water or dryclean.Learn more about the materials we use here.`},
    { id: 2, title: "Phone Pouch", price: 268, madeToOrder: false, imageUrl: ["https://res.cloudinary.com/dmvbynqto/image/upload/v1717285384/dnj_phone_pouch.png", "https://res.cloudinary.com/dmvbynqto/image/upload/v1718757794/DNJ-PAPER---Paper-Leather-Ballcap---messy-orange-gouache_u8w64p.jpg", ""], description: `This piece is a collaboration with Articles of Clothing, which is a project that operates across womenswear, unisex wear, accessories, homewares, workwear and collaborations.

    The phone pouch design is based on Article N°157 Belt Pocket, and can be worn across the shoulder, or around the waist with an adjustable strap. For this special collaboration, the bag has been redesigned with a slimmer pouch perfect as a phone pouch or small document carrier, made from
    hand-made, hand-dyed washi paper, each one is internally lined for protection, and then sealed for durability and water resistance with beeswax.

    The paper was made in Kurotani, Kyoto, and Mino, Gifu, and hand-dyed in our studio using natural indigo and reclaimed synthetic dyes from deadstock fabrics or remnant dye on it’s way to landfill.
    `, customOrder: `We love custom orders! We can make a specific colour for you, stitch your name into the cap, etc. Send us a reference or Pantone colour and we can go from there 👽️ See below for some inspiration.`, cleaning: `To clean, lightly handwash in cold water or dryclean.Learn more about the materials we use here.`},
    { id: 3, title: "Cropped Jacket", price: 900, madeToOrder: true, imageUrl: ["https://res.cloudinary.com/dmvbynqto/image/upload/v1717285385/dnj_cropped_jacket.jpg", ""], description: `This boxy cropped jacket is made in our studio in Melbourne, Australia.

    This item is only available for custom order. We adjust the pattern for fit, and discuss custom details: size, colour, paper type/finish, oil, dyed, natural, thicker, thinner, waxed, etc.

    To clean, lightly handwash in cold water or dryclean.`, customOrder: `We love custom orders! We can make a specific colour for you, stitch your name into the cap, etc. Send us a reference or Pantone colour and we can go from there 👽️ See below for some inspiration.`, cleaning: `To clean, lightly handwash in cold water or dryclean.Learn more about the materials we use here.`},
    { id: 4, title: "Mac coat", price: 1200, madeToOrder: true, imageUrl: ["https://res.cloudinary.com/dmvbynqto/image/upload/v1717285385/dnj_mac_coat.jpg", ""], description: `This design is based on the classic Mac Coat, and is constructed of panels of handmade Japanese paper, connected with soft rayon tape  in our studio in Melbourne, Australia.

    The paper we typically use for this design is made in Kurotani, Kyoto, and treated using traditional methods of turning a sheet of paper into a cloth.

    This item is only available for custom order. We adjust the pattern for fit, and discuss custom details: size, colour, button/buttonhole type, paper type/finish, oil, dyed, natural, thicker, thinner, waxed, collar application and shape, internal or external pockets/lining.`, customOrder: `We love custom orders! We can make a specific colour for you, stitch your name into the cap, etc. Send us a reference or Pantone colour and we can go from there 👽️ See below for some inspiration.`, cleaning: `To clean, lightly handwash in cold water or dryclean.Learn more about the materials we use here.`}
  ];

  return createServer({
    routes() {
      this.namespace = "api";

      // Route for fetching all shop items
      this.get("/shop", () => {
        return { shopItems };
      });

      // Route for fetching a single shop item by ID
      this.get("/shop/:id", (schema, request) => {
        let id = request.params.id;
        let shopItem = shopItems.find((item) => item.id === parseInt(id));
        return shopItem ? { shopItem } : new Response(404, {}, { error: "Item not found" });
      });
    },
  });
}
