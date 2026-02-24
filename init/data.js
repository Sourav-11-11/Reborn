const sampleProducts = [
  {
    productName: "Vintage Leather Jacket",
    category: "Clothing",
    condition: "Like New",
    description: "Classic brown leather jacket with minimal wear.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
    price: 3200,
    isSold: false,
  },
  
  {
    productName: "Blue Lab Coat",
    category: "Clothing",
    condition: "Like New",
    description: "Blue lab coat worn only a handful of times. Commonly required for dental, nursing, and allied health programmes. Available in S / M / L.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800",
    price: 300,
    isSold: false,
  },
  
  {
    productName: "Classic Wrist Watch",
    category: "Accessories",
    condition: "Used",
    description: "Simple analog wrist watch.",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800",
    price: 1700,
    isSold: false,
  },

  {
    productName: "Brown Leather Wallet",
    category: "Accessories",
    condition: "Used",
    description: "Genuine leather wallet with minor wear.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
    price: 700,
    isSold: false,
  },

  {
    productName: "Brown Oxford Shoes",
    category: "Footwear",
    condition: "Used",
    description: "Classic brown oxford shoes for formal wear.",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800",
    price: 3100,
    isSold: false,
  },

  {
    productName: "Black Backpack",
    category: "Accessories",
    condition: "Used",
    description: "Spacious backpack ideal for college.",
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800",
    price: 1200,
    isSold: false,
  },

  {
    productName: "Grey Sweatshirt",
    category: "Clothing",
    condition: "Used",
    description: "Comfortable everyday sweatshirt.",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
    price: 900,
    isSold: false,
  },

  {
    productName: "Small Wooden Bookshelf",
    category: "Home",
    condition: "Used",
    description: "Compact 3-tier bookshelf.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800",
    price: 3000,
    isSold: false,
  },

  {
    productName: "White Ceramic Vase",
    category: "Home",
    condition: "Like New",
    description: "Minimal ceramic vase for living room decor.",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800",
    price: 600,
    isSold: false,
  },

  {
    productName: "Men's Casual Shirt",
    category: "Clothing",
    condition: "Used",
    description: "Cotton casual shirt in good condition.",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800",
    price: 750,
    isSold: false,
  },

  {
    productName: "Bedside Table Lamp",
    category: "Home",
    condition: "Like New",
    description: "Warm light lamp for bedroom.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
    price: 1300,
    isSold: false,
  },

  {
    productName: "Sports Duffel Bag",
    category: "Accessories",
    condition: "Used",
    description: "Gym bag with multiple compartments.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800",
    price: 1100,
    isSold: false,
  },

  {
    productName: "Blue Cotton Kurti",
    category: "Clothing",
    condition: "Used",
    description: "Lightweight daily wear kurti.",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800",
    price: 850,
    isSold: false,
  },

  {
    productName: "Wall Hanging Mirror",
    category: "Home",
    condition: "Used",
    description: "Simple round wall mirror.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800",
    price: 1400,
    isSold: false,
  },

  {
    productName: "Laptop Backpack",
    category: "Accessories",
    condition: "Like New",
    description: "Padded laptop compartment inside.",
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=800",
    price: 1900,
    isSold: false,
  },

  {
    productName: "Black Formal Shoes",
    category: "Footwear",
    condition: "Used",
    description: "Office wear formal shoes.",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800",
    price: 2100,
    isSold: false,
  },

  {
    productName: "Reading Study Table",
    category: "Home",
    condition: "Used",
    description: "Compact study table with drawer.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
    price: 4200,
    isSold: false,
  },

  {
    productName: "Wool Blazer",
    category: "Clothing",
    condition: "Used",
    description: "Classic wool blazer suitable for formal occasions.",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800",
    price: 2400,
    isSold: false,
  },

  {
    productName: "Vintage Book Bundle",
    category: "Home",
    condition: "Used",
    description: "Collection of old classic novels in good condition.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800",
    price: 1800,
    isSold: false,
  },

  {
    productName: "Film SLR Camera",
    category: "Electronics",
    condition: "Used",
    description: "Classic 35mm film camera in working condition.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    price: 5200,
    isSold: false,
  },

  {
    productName: "Ripped Denim Jeans",
    category: "Clothing",
    condition: "Used",
    description: "Trendy ripped denim jeans with slight fading.",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
    price: 1500,
    isSold: false,
  },

  // ─── NEW ITEMS ─────────────────────────────────────────────────────────────

  {
    productName: "Draughting & Design Tool Set",
    category: "Other",
    condition: "Used",
    description: "Complete student draughting set: metal compass, divider, set squares (30°/60° and 45°), T-square, triangular scale ruler, and 30 cm ruler. Essential for architecture, engineering, and design students.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    price: 950,
    isSold: false,
  },
    {
    productName: "Casio FX-991ES Plus Scientific Calculator",
    category: "Electronics",
    condition: "Used",
    description: "Casio FX-991ES Plus non-programmable scientific calculator. 417 functions, natural textbook display. Works perfectly — ideal for engineering, physics, and maths students.",
    image: "https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?w=800",
    price: 1200,
    isSold: false,
  },
];
module.exports = { data: sampleProducts };