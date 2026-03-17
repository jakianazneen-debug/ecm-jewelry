export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  description: string;
  story: string;
  badge?: string;
  featured?: boolean;
}

// Using Unsplash jewelry images
export const products: Product[] = [
  // Earrings
  {
    id: 1,
    name: "Luna Crescent Earrings",
    price: 45,
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
    ],
    description: "Delicate crescent moon earrings crafted in 18k gold-plated sterling silver with moonstone accents.",
    story: "Inspired by the lunar cycle and the quiet energy of moonlit nights. Each crescent captures the mystical glow of the moon.",
    badge: "Bestseller",
    featured: true,
  },
  {
    id: 2,
    name: "Celestial Drop Earrings",
    price: 58,
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    ],
    description: "Elegant drop earrings with hand-set gemstones, perfect for both day and evening wear.",
    story: "Born from the stars — each drop reflects the celestial beauty of a night sky.",
    featured: true,
  },
  {
    id: 3,
    name: "Vintage Pearl Studs",
    price: 42,
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"],
    description: "Classic freshwater pearl studs set in sterling silver — timeless elegance.",
    story: "Pearls have adorned queens and goddesses for centuries. These studs carry that legacy.",
  },
  {
    id: 4,
    name: "Golden Hoop Earrings",
    price: 38,
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80"],
    description: "Modern minimalist hoops in 18k gold-fill. Lightweight and everyday-ready.",
    story: "Simple. Bold. Timeless. These hoops speak for themselves.",
    badge: "New",
  },
  // Necklaces
  {
    id: 5,
    name: "Moonstone Pendant Necklace",
    price: 72,
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    ],
    description: "A luminous moonstone pendant on a delicate 18k gold chain. Mesmerizing iridescence.",
    story: "Inspired by lunar energy and quiet night skies. The moonstone glows like the full moon.",
    badge: "Bestseller",
    featured: true,
  },
  {
    id: 6,
    name: "Layered Gold Necklace",
    price: 65,
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1573408301185-9519f94816ca?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1573408301185-9519f94816ca?w=800&q=80"],
    description: "Three delicate gold chains layered to create effortless depth and elegance.",
    story: "Layers tell stories — wear yours with confidence.",
    featured: true,
  },
  {
    id: 7,
    name: "Turquoise Beaded Necklace",
    price: 55,
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"],
    description: "Hand-strung turquoise beads with gold accents — culturally rich and vibrant.",
    story: "Turquoise has been worn by ancient civilizations as a stone of protection and wisdom.",
    badge: "New",
  },
  {
    id: 8,
    name: "Diamond Clavicle Chain",
    price: 89,
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1586878341523-7f2b5c3f7d44?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1586878341523-7f2b5c3f7d44?w=800&q=80"],
    description: "Dainty diamond-cut chain that sits perfectly at the clavicle.",
    story: "Understated luxury at its finest — this chain whispers elegance.",
  },
  // Bracelets
  {
    id: 9,
    name: "Gold Bangle Set",
    price: 48,
    category: "Bracelets",
    image: "https://images.unsplash.com/photo-1573408301369-0e29f5f8b1b0?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1573408301369-0e29f5f8b1b0?w=800&q=80"],
    description: "Set of 3 gold-plated bangles — stack them all or wear one at a time.",
    story: "In many cultures, bangles symbolize prosperity and joy. Stack your story.",
    badge: "Bestseller",
  },
  {
    id: 10,
    name: "Beaded Wrap Bracelet",
    price: 35,
    category: "Bracelets",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"],
    description: "Handwoven beaded wrap bracelet with 14k gold clasp. Bohemian chic.",
    story: "Crafted by artisans who weave stories into every bead.",
  },
  {
    id: 11,
    name: "Tennis Bracelet",
    price: 95,
    category: "Bracelets",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"],
    description: "Classic tennis bracelet with channel-set cubic zirconia stones.",
    story: "Elegance has a name, and it sparkles on your wrist.",
    badge: "Premium",
  },
  {
    id: 12,
    name: "Charm Link Bracelet",
    price: 52,
    category: "Bracelets",
    image: "https://images.unsplash.com/photo-1630019925419-5c83938d4b69?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1630019925419-5c83938d4b69?w=800&q=80"],
    description: "Gold link bracelet with celestial charm pendants — moon, star, and sun.",
    story: "Wear the universe on your wrist.",
    badge: "New",
  },
  // Rings
  {
    id: 13,
    name: "Moon Ring",
    price: 35,
    category: "Rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80"],
    description: "Minimalist crescent moon ring in sterling silver. Stack or wear alone.",
    story: "A ring that channels moonlight and mystery.",
    badge: "Bestseller",
  },
  {
    id: 14,
    name: "Stackable Gemstone Rings",
    price: 28,
    category: "Rings",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"],
    description: "Set of 3 dainty gemstone rings — amethyst, rose quartz, and citrine.",
    story: "Three stones, three intentions. Choose your energy.",
    badge: "New",
  },
  {
    id: 15,
    name: "Vintage Signet Ring",
    price: 62,
    category: "Rings",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"],
    description: "Bold gold signet ring with floral engraving. A statement piece.",
    story: "Signet rings were once sealed with identity. This one is yours.",
  },
  {
    id: 16,
    name: "Twisted Band Ring",
    price: 32,
    category: "Rings",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80"],
    description: "Elegant twisted rope-pattern band ring in 18k gold-fill.",
    story: "Intertwined strength and beauty — a perfect everyday ring.",
  },
  // Extras
  {
    id: 17,
    name: "Anklet Chain",
    price: 29,
    category: "Extras",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80"],
    description: "Delicate gold-fill anklet with tiny charm detail. Summer-ready.",
    story: "Let every step tell a story of elegance.",
    badge: "New",
  },
  {
    id: 18,
    name: "Jewelry Gift Box",
    price: 18,
    category: "Extras",
    image: "https://images.unsplash.com/photo-1549388604-817d15aa0110?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1549388604-817d15aa0110?w=800&q=80"],
    description: "Luxury velvet jewelry box — perfect for gifting your loved ones.",
    story: "Because the box is part of the magic.",
  },
  {
    id: 19,
    name: "Body Chain",
    price: 55,
    category: "Extras",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"],
    description: "Boho-inspired gold body chain. A statement accessory for any occasion.",
    story: "Adorn yourself. You are the canvas.",
    badge: "Premium",
  },
  {
    id: 20,
    name: "Hair Pin Set",
    price: 22,
    category: "Extras",
    image: "https://images.unsplash.com/photo-1573408301185-9519f94816ca?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1573408301185-9519f94816ca?w=800&q=80"],
    description: "Set of 4 decorative gold hair pins with floral and star motifs.",
    story: "Beauty from crown to sole — adorn even your hair.",
    badge: "New",
  },
];

export const categories = ["Complete", "Earrings", "Bracelets", "Necklaces", "Rings", "Extras"];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (cat: string) =>
  cat === "Complete" ? products : products.filter(p => p.category === cat);
export const getProductById = (id: number) => products.find(p => p.id === id);
