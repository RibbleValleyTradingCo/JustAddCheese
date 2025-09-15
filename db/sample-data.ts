import { hashSync } from "bcrypt-ts-edge";
const sampleData = {

  users: [
    {
      name: "James O'Neill",
      email: "james@example.com",
      password: hashSync("1234578", 10),
      role: "admin",
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      password: hashSync("1234578", 10),
      role: "user",
    }
  ],

  products: [
    {
      name: "Acacia Cheese Serving Board",
      slug: "acacia-cheese-serving-board",
      category: "Boards & Serveware",
      description:
        "Hand-finished acacia board with juice groove. Ideal for 3–5 cheeses and accompaniments.",
      images: [
        "/images/sample-products/cheese-board-1.jpg",
        "/images/sample-products/cheese-board-2.jpg",
      ],
      price: 34.99,
      brand: "Just Add Cheese",
      rating: 4.7,
      numReviews: 42,
      stock: 12,
      isFeatured: true,
      banner: "banner-board.jpg",
    },
    {
      name: "3-Piece Cheese Knife Set",
      slug: "three-piece-cheese-knife-set", 
      category: "Knives & Tools",
      description:
        "Soft, hard and parmesan knives in brushed stainless with comfy grips. Dishwasher safe.",
      images: [
        "/images/sample-products/knife-set-1.jpg",
        "/images/sample-products/knife-set-2.jpg",
      ],
      price: 24.95,
      brand: "JAC Tools",
      rating: 4.6,
      numReviews: 33,
      stock: 20,
      isFeatured: true,
      banner: "banner-knives.jpg",
    },
    {
      name: "Stoneware Ramekin Set",
      slug: "stoneware-ramekin-set",
      category: "Ramekins & Bowls",
      description:
        "Oven-safe ramekins for chutneys, olives and nuts. Matches our Cream Rind palette.",
      images: [
        "/images/sample-products/ramekins-1.jpg",
        "/images/sample-products/ramekins-2.jpg",
      ],
      price: 18.5,
      brand: "Just Add Cheese",
      rating: 4.4,
      numReviews: 21,
      stock: 16,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Charcoal & Sea Salt Crackers",
      slug: "charcoal-sea-salt-crackers",
      category: "Crackers & Toasts",
      description:
        "Crisp, neutral base with a hint of sea salt—brilliant with blue and soft-rind cheeses.",
      images: [
        "/images/sample-products/crackers-1.jpg",
        "/images/sample-products/crackers-2.jpg",
      ],
      price: 3.95,
      brand: "JAC Pantry",
      rating: 4.5,
      numReviews: 58,
      stock: 48,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Fig & Balsamic Chutney (200g)",
      slug: "fig-and-balsamic-chutney-200g",
      category: "Chutneys & Preserves",
      description:
        "Rich fig with a balsamic lift—made for Brie, Camembert and aged Gouda.",
      images: [
        "/images/sample-products/fig-chutney-1.jpg",
        "/images/sample-products/fig-chutney-2.jpg",
      ],
      price: 4.5,
      brand: "JAC Pantry",
      rating: 4.8,
      numReviews: 73,
      stock: 60,
      isFeatured: true,
      banner: "banner-fig.jpg",
    },
    {
      name: "Truffle Honey Drizzle (150g)",
      slug: "truffle-honey-drizzle-150g",
      category: "Honey & Sweet Pairings",
      description:
        "Acacia honey infused with black truffle—unreal on Pecorino, Taleggio or blue.",
      images: [
        "/images/sample-products/truffle-honey-1.jpg",
        "/images/sample-products/truffle-honey-2.jpg",
      ],
      price: 7.95,
      brand: "JAC Pantry",
      rating: 4.6,
      numReviews: 29,
      stock: 25,
      isFeatured: false,
      banner: null,
    },
  ],
};

export default sampleData;