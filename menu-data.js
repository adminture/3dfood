// ============================================================
// MENU CONFIG — this is the ONLY file you usually need to edit
// when adding a new dish or tweaking a price/size.
// ============================================================
//
// For each item:
//   id        -> used in the URL, e.g. item.html?id=pizza
//   name      -> shown on menu + AR page
//   desc      -> short description
//   thumb     -> a photo for the menu card (jpg/png in /images, or leave "" for emoji fallback)
//   emoji     -> shown if no thumb image
//   model     -> path to the .glb file for this dish (put file in /models)
//   iosModel  -> path to matching .usdz file (optional, for iPhone AR). Leave "" if you don't have one.
//   baseScale -> starting scale guess for the "medium" size. You WILL need to
//                calibrate this per model (see instructions Claude gave you for the pizza).
//                Rule of thumb: try 0.006 first, then halve/double until it looks
//                right on your actual table in AR.
//   sizes     -> array of { label, sub, scaleMultiplier, price }
//                scaleMultiplier is multiplied by baseScale. Keep "medium" at 1.
//
// To ADD A NEW DISH: copy one whole {...} block below, change the values,
// add it to the MENU array. That's it — menu.html and item.html both read
// from this file automatically.
// ============================================================

const MENU = [
  {
    id: "pizza",
    name: "Italian Supreme Pizza",
    desc: "Pepperoni, Italian sausage, tomato, bell pepper, olives, basil, mozzarella",
    thumb: "",
    emoji: "🍕",
    model: "models/pizza.glb",
    iosModel: "models/pizza.usdz",
    baseScale: 0.006,
    sizes: [
      { label: "Small",  sub: "8\"",  scaleMultiplier: 0.8,  price: 249 },
      { label: "Medium", sub: "10\"", scaleMultiplier: 1,    price: 349 },
      { label: "Large",  sub: "14\"", scaleMultiplier: 1.4,  price: 479 }
    ]
  },
  {
    id: "pasta",
    name: "Creamy Pasta",
    desc: "Penne tossed in a rich white sauce with herbs and parmesan",
    thumb: "",
    emoji: "🍝",
    model: "models/pasta.glb",
    iosModel: "models/pasta.usdz",
    baseScale: 0.006,
    sizes: [
      { label: "Regular", sub: "Single", scaleMultiplier: 1,    price: 229 },
      { label: "Large",   sub: "Sharing", scaleMultiplier: 1.3, price: 349 }
    ]
  },
  {
    id: "maggi",
    name: "Masala Maggi",
    desc: "Classic street-style Maggi noodles with veggies and masala",
    thumb: "",
    emoji: "🍜",
    model: "models/maggi.glb",
    iosModel: "models/maggi.usdz",
    baseScale: 0.006,
    sizes: [
      { label: "Regular", sub: "1 plate", scaleMultiplier: 1,   price: 79 },
      { label: "Double",  sub: "2 plate", scaleMultiplier: 1.2, price: 139 }
    ]
  },
  {
    id: "mutton",
    name: "Mutton Curry",
    desc: "Slow-cooked mutton in a spiced Jharkhand-style curry",
    thumb: "",
    emoji: "🍖",
    model: "models/mutton.glb",
    iosModel: "models/mutton.usdz",
    baseScale: 0.006,
    sizes: [
      { label: "Half", sub: "2 pcs", scaleMultiplier: 0.85, price: 279 },
      { label: "Full",  sub: "4 pcs", scaleMultiplier: 1,   price: 499 }
    ]
  },
  {
    id: "biryani",
    name: "Mutton Biryani",
    desc: "Aromatic long-grain rice layered with spiced mutton",
    thumb: "",
    emoji: "🍛",
    model: "models/biryani.glb",
    iosModel: "models/biryani.usdz",
    baseScale: 0.006,
    sizes: [
      { label: "Half", sub: "~300g", scaleMultiplier: 0.85, price: 199 },
      { label: "Full",  sub: "~600g", scaleMultiplier: 1,   price: 349 }
    ]
  }
];
