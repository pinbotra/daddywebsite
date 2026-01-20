

const houses = [
  { name: "Skypark Aurora", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" },
  { name: "Ocean Breeze Villa", type: "Villa", price: "$320,000", location: "Sihanoukville", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae" },
  { name: "City Townhouse", type: "Townhouse", price: "$180,000", location: "Phnom Penh", image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c" },
  { name: "Golden Penthouse", type: "Penthouse", price: "$450,000", location: "Phnom Penh", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" },
  { name: "Palm Garden Villa", type: "Villa", price: "$290,000", location: "Kep", image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb" },
  { name: "Riverside Condo", type: "Condo", price: "$135,000", location: "Phnom Penh", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00" },
  { name: "Sunset Townhome", type: "Townhouse", price: "$165,000", location: "Siem Reap", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914" },
  { name: "Royal Signature Suite", type: "Penthouse", price: "$520,000", location: "Phnom Penh", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811" },
  { name: "Lakeview Condo", type: "Condo", price: "$145,000", location: "Siem Reap", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7" },
  { name: "Emerald Pool Villa", type: "Villa", price: "$380,000", location: "Kampot", image: "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12" },

  /* ===== NEW 12 HOUSES ===== */
  { name: "Blue Horizon Condo", type: "Condo", price: "$155,000", location: "Phnom Penh", image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6" },
  { name: "Angkor Luxury Villa", type: "Villa", price: "$410,000", location: "Siem Reap", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { name: "Central Park Residence", type: "Condo", price: "$175,000", location: "Phnom Penh", image: "https://images.unsplash.com/photo-1554995207-c18c203602cb" },
  { name: "Riverfront Townhouse", type: "Townhouse", price: "$195,000", location: "Kandal", image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83" },
  { name: "Diamond Sky Penthouse", type: "Penthouse", price: "$620,000", location: "Phnom Penh", image: "https://images.unsplash.com/photo-1599423300746-b62533397364" },
  { name: "Green Valley Villa", type: "Villa", price: "$350,000", location: "Battambang", image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b" },
  { name: "Sunrise Condo", type: "Condo", price: "$140,000", location: "Kampot", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" },
  { name: "Modern Nest Townhouse", type: "Townhouse", price: "$185,000", location: "Phnom Penh", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6" },
  { name: "Royal Crown Penthouse", type: "Penthouse", price: "$710,000", location: "Phnom Penh", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d" },
  { name: "Sea Pearl Villa", type: "Villa", price: "$460,000", location: "Koh Rong", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" },
  { name: "Urban Life Condo", type: "Condo", price: "$160,000", location: "Phnom Penh", image: "https://images.unsplash.com/photo-1494526585095-c41746248156" },
  { name: "Golden Leaf Townhouse", type: "Townhouse", price: "$170,000", location: "Takeo", image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126" }
];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const house = houses[id];

document.getElementById("title").textContent = house.name;
document.getElementById("location").textContent = "📍 " + house.location;
document.getElementById("type").textContent = "🏠 " + house.type;
document.getElementById("price").textContent = house.price;

document.getElementById("mainImg").src = house.image;
document.getElementById("img2").src = house.image;
document.getElementById("img3").src = house.image;
