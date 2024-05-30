import { createServer, Response } from "miragejs";

export function makeServer() {
  const shopItems = [
    { id: 1, title: "Paper Leather Cap", price: 225 },
    { id: 2, title: "Phone Pouch", price: 268 },
    { id: 3, title: "Cropped Jacket", price: 900 },
    { id: 3, title: "Mac coat", price: 1200 }
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
