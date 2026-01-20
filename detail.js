const houses = [
  ...Array(20).fill().map((_, i) => ({ name: `Sot dg ${i+1}`, type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" })),
  ...Array(20).fill().map((_, i) => ({ name: `Luxury Villa ${i+1}`, type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" })),
  ...Array(20).fill().map((_, i) => ({ name: `Modern Town ${i+1}`, type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" }))
];

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));
const house = houses[id];

if (house) {
  document.getElementById("title").innerText = house.name;
  document.getElementById("location").innerText = "📍 " + house.location;
  document.getElementById("type").innerText = "🏠 " + house.type;
  document.getElementById("price").innerText = house.price;
  
  // Set Images
  document.getElementById("mainImg").src = house.image;
  document.getElementById("img2").src = house.image;
  document.getElementById("img3").src = house.image;
} else {
  window.location.href = "index.html";
}