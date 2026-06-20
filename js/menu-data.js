/* =============================================================
   THAI·USA — site + menu data
   Content preserved from the original thaiusa.vercel.app site.
   The `thai` labels on categories are decorative typographic accents.
   ============================================================= */

window.SITE = {
  name: "THAI·USA",
  city: "Huntington, NY",
  tagline: "Experience authentic Thai cuisine in the heart of Huntington",
  about:
    "Located in the heart of Huntington, our restaurant offers a welcoming ambiance for a memorable dining experience. We look forward to serving you.",
  address: {
    line1: "273 New York Ave",
    line2: "Huntington, NY 11743",
    country: "United States",
    maps: "https://www.google.com/maps/search/?api=1&query=273+New+York+Ave+Huntington+NY+11743",
  },
  phone: "(631) 427-8464",
  phoneHref: "tel:+16314278464",
  hours: [
    { day: "Monday", time: "5 – 9 PM" },
    { day: "Tuesday", time: "Closed", closed: true },
    { day: "Wednesday", time: "12 – 3 PM · 5 – 9 PM" },
    { day: "Thursday", time: "12 – 3 PM · 5 – 9 PM" },
    { day: "Friday", time: "12 – 3 PM · 5 – 10 PM" },
    { day: "Saturday", time: "12 – 3 PM · 5 – 10 PM" },
    { day: "Sunday", time: "12 – 3 PM · 5 – 9 PM" },
  ],
  social: {
    facebook: "https://www.facebook.com/thaiusahuntingtonny/",
    instagram: "https://www.instagram.com/thaiusahuntington/",
  },
  notes: [
    "A 20% gratuity will be applied to parties of six or more.",
    "Spicy level can be adjusted upon request.",
    "Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.",
    "Please inform your server of any food allergies.",
  ],
};

window.CATEGORIES = [
  { id: "appetizers",   name: "Appetizers",      thai: "ของว่าง" },
  { id: "soups",        name: "Soups",           thai: "ซุป" },
  { id: "salad",        name: "Salads",          thai: "สลัด" },
  { id: "lunch",        name: "Lunch Specials",  thai: "อาหารกลางวัน" },
  { id: "curries",      name: "Curries",         thai: "แกง" },
  { id: "rice_noodle",  name: "Rice & Noodles",  thai: "ข้าวและเส้น" },
  { id: "beef",         name: "Beef Dishes",     thai: "เนื้อ" },
  { id: "poultry",      name: "Poultry",         thai: "สัตว์ปีก" },
  { id: "seafood",      name: "Seafood",         thai: "อาหารทะเล" },
  { id: "sides_extras", name: "Sides & Extras",  thai: "เครื่องเคียง" },
  { id: "desserts",     name: "Desserts",        thai: "ของหวาน" },
];

window.MENU = {
  appetizers: [
    { name: "Edamame", description: "", price: "$6.50" },
    { name: "Thai Chicken Wings", description: "", price: "$10.00" },
    { name: "Tao Hoo Tod", description: "Crispy tofu served with crushed peanut dipping sauce", price: "$10.00" },
    { name: "Sauteed Bok Choy with Garlic", description: "", price: "$10.00" },
    { name: "Po Pia Tod", description: "Bean thread noodles & vegetables in a crisp wrapping served with plum sauce", price: "$6.00", veg: true },
    { name: "Po Pia Sod", description: "Fresh hand‑rolled shrimp, tofu, bean sprouts & cucumber wrapped in rice paper, brushed with plum sauce", price: "$11.00" },
    { name: "Mee Krob", description: "Crispy rice noodles, tofu, shrimp & scallions in tamarind fruit sauce", price: "$12.00", veg: true },
    { name: "Tod Mun Pla", description: "Thai style fish cake with cucumber relish & crushed peanut sauce", price: "$10.00" },
    { name: "Gai Satay", description: "Marinated & grilled chicken skewers with peanut sauce", price: "$10.00" },
    { name: "Thai Dumpling", description: "Steamed Thai dumpling with minced chicken & shrimp", price: "$10.00" },
    { name: "Golden Shrimp", description: "Marinated shrimp wrapped in rice paper & plum sauce", price: "$10.00" },
    { name: "Yum Pla Muk", description: "Calamari, cucumber & onions in lime sauce", price: "$12.00" },
    { name: "Fried Calamari", description: "Deep fried calamari with sweet chili sauce", price: "$12.00" },
    { name: "Blackened Tuna", description: "Pan-seared fresh tuna coated in spices, served with wasabi and spicy Thai sauce", price: "Market Price" },
    { name: "Golden Puff", description: "Puff pastry stuffed with chicken and potato, served with cucumber salad (4 pieces)", price: "$10.00" },
    { name: "Crab Dumpling", description: "Steamed or fried Thai dumpling with crab", price: "$10.00" },
    { name: "Fried Pork Dumpling", description: "", price: "$10.00" },
  ],
  soups: [
    { name: "Vegetable Soup", description: "Glass noodles & mixed vegetables simmered in a clear broth", price: "$6.00" },
    { name: "Tom Kha Gai", description: "Chicken, coconut milk, galangal root, lemongrass & cilantro", price: "$6.00", veg: true },
    { name: "Tom Yum Goong", description: "Shrimp, mushroom, kaffir lime leaf & chili paste in hot & sour lemongrass herb broth", price: "$6.00", veg: true },
  ],
  salad: [
    { name: "U.S.A. House Salad", description: "Mixed garden greens, sprouts, cucumbers and bean curd with peanut dressing", price: "$7.00" },
    { name: "Som Tum (Green Papaya Salad)", description: "Green papaya mixed with carrots, tomatoes and chilis in lime dressing", price: "$11.00" },
    { name: "Crispy Calamari Salad", description: "Crispy calamari tossed in house lime dressing with mango, ginger, peanuts, onions, scallions and tomatoes", price: "$12.50" },
    { name: "Larb (Thai Lettuce Wrap)", description: "Minced beef or chicken seasoned with roasted garlic, lemongrass, cilantro etc., served on romaine", price: "$16.50" },
    { name: "Yum Woon Sen (Entrée)", description: "Bean thread noodles, shrimp, shiitake mushrooms, scallions, lime sauce, sprinkled cashews", price: "$17.00", veg: true },
    { name: "Yum Moo (Entrée)", description: "Grilled marinated sliced pork with fresh ginger, orange, cashew and lime sauce", price: "$17.00", veg: true },
  ],
  lunch: [
    { name: "Pad Thai (Chicken or Shrimp)", description: "Served with salad or soup and jasmine rice", price: "$15.00" },
    { name: "Pad Khe Mao (Drunken Noodles)", description: "", price: "$15.00" },
    { name: "Graprow (Chicken or Tofu)", description: "", price: "$15.00" },
    { name: "Steamed Vegetables", description: "With rice noodles topped with Thai peanut sauce", price: "$15.00" },
    { name: "Beef Broccoli", description: "Served with oyster sauce", price: "$16.00" },
    { name: "Gang Massaman", description: "Sliced chicken, onions & potato simmered in mild yellow curry", price: "$15.00" },
    { name: "Gang Gai", description: "Sliced chicken, mixed vegetables & bamboo shoots in red curry", price: "$15.00" },
    { name: "Yum Gai (Salad)", description: "Mixed greens with fresh mango, ginger, cashews, topped with sliced chicken", price: "$15.00" },
    { name: "Larb", description: "Ground pork flavored with garlic, lemongrass etc., served on lettuce", price: "$15.00" },
    { name: "Goong Pad Khing", description: "Shrimp, mixed vegetables, mushrooms and onions with fresh ginger", price: "$16.00" },
    { name: "Blackened Filet", description: "Herb‑encrusted filet of fish with mixed vegetables", price: "$18.50" },
  ],
  curries: [
    { name: "Gang Gai", description: "Sliced chicken with mixed vegetables, basil, coconut milk & red curry", price: "$18.00", veg: true },
    { name: "Gang Massaman", description: "Sliced chicken with mixed herbs, potatoes, onions, cucumbers, coconut milk & yellow curry", price: "$18.00", veg: true },
    { name: "Gang Keaw Wan Nuea", description: "Sliced beef with eggplant, bamboo shoots, basil leaves, coconut milk & green curry", price: "$18.50", veg: true },
    { name: "Gang Seafood", description: "Seafood curry with fish, shrimp, squid & scallop in coconut curry", price: "$23.00" },
  ],
  rice_noodle: [
    { name: "Pad Thai Shrimp", description: "", price: "$17.00", veg: true },
    { name: "Pad Se-Ew", description: "Beef, broccoli, sweet soy sauce", price: "$18.00", veg: true },
    { name: "Khao Pad Gai", description: "Thai fried rice with chicken, tomato, onion & garlic", price: "$17.00", veg: true },
    { name: "Thai‑USA Drunken Noodles", description: "Flat noodles with ground pork, shrimp and mixed veggies in basil chili sauce", price: "$21.00" },
  ],
  beef: [
    { name: "Nua Yang", description: "Grilled N.Y. sirloin coated with crushed peppers served with sticky rice, vegetables & lime sauce", price: "$30.50" },
    { name: "Nua Nam Mun Hoy", description: "Sliced sirloin stir‑fried with broccoli & onions in oyster sauce", price: "$18.50" },
    { name: "Yum Nua", description: "Grilled sliced beef with cucumber, mint, lemongrass, onion & tomato in lime chili paste sauce", price: "$19.50" },
  ],
  poultry: [
    { name: "Gai Pad Khing", description: "Sliced chicken sautéed with fresh ginger, mushrooms & onions in light soy sauce", price: "$18.00", veg: true },
    { name: "Gai Graprow", description: "Sliced chicken sautéed with onions, red peppers, mixed vegetables & basil", price: "$18.00", veg: true },
    { name: "Rama Gai", description: "Grilled marinated chicken breast with steamed vegetables & peanut curry sauce", price: "$18.00", veg: true },
    { name: "Gai Yang", description: "Grilled Cornish game hen, green papaya salad, sticky rice & red chili sauce", price: "$25.00" },
    { name: "Ped Ob Grob", description: "Crispy boneless Long Island duck glazed with plum, chili, mint & ginger sauce", price: "$33.00" },
  ],
  seafood: [
    { name: "Available Fillet: Salmon or Catfish", description: "Blackened herb‑coated fillet with mixed vegetables", price: "Market Price" },
    { name: "Whole Fish Catch of the Day", description: "Deep fried whole fish or roasted fillet with chili, garlic & tamarind sauce", price: "Market Price" },
    { name: "Choo Chee", description: "Shrimp with vegetables, kaffir lime leaves & Panang curry in young coconut", price: "$23.00" },
    { name: "Goong Gratiem", description: "Sautéed shrimp with garlic, black pepper & cilantro", price: "$23.00" },
    { name: "Pad Ta‑Lay", description: "Shrimp, scallops, squid & vegetables in lightly seasoned sauce", price: "$23.00" },
  ],
  sides_extras: [
    { name: "Jasmine Rice", description: "", price: "$2.50" },
    { name: "Coconut Rice", description: "", price: "$4.00" },
    { name: "Sticky Rice", description: "", price: "$3.00" },
    { name: "Brown Rice", description: "", price: "$3.00" },
    { name: "Substitute Brown Rice", description: "", price: "$1.50" },
    { name: "Extra Shrimp", description: "", price: "$6.00" },
    { name: "Extra Vegetable or Tofu", description: "", price: "$3.00" },
    { name: "Extra Sauce", description: "", price: "$3.00" },
    { name: "Sharing Dinner Plate", description: "(Customers sharing plates)", price: "$3.00" },
  ],
  desserts: [
    { name: "Thai Pumpkin Custard", description: "", price: "$6.00" },
    { name: "Homemade Key Lime Pie", description: "", price: "$6.00" },
    { name: "Fried Banana Glazed with Honey", description: "", price: "$6.00" },
    { name: "Fried Banana à la Mode", description: "", price: "$9.00" },
    { name: "Chocolate Chip Brownie à la Mode", description: "", price: "$9.00" },
    { name: "Traditional Coconut w/ Fresh Mango (seasonal)", description: "", price: "$11.00" },
    { name: "Ice Cream (Vanilla, Coconut, Cappuccino Crush, Green Tea)", description: "", price: "" },
  ],
};
