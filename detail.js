const houses = [
  {
    name: "Sot dg",
    type: "Condo",
    price: "$120,000",
    location: "Phnom Penh",
    images: [
      "images/houses/house1.jpg",
      "images/houses/house1-1.jpg",
      "images/houses/house1-2.jpg"
    ],
    description:
      "Luxury property with modern design, premium materials, private balcony, parking, security and great location."
  },

  {
    name: "Ocean Breeze Villa",
    type: "Villa",
    price: "$320,000",
    location: "Sihanoukville",
    images: [
      "images/houses/villa1.jpg",
      "images/houses/villa2.jpg",
      "images/houses/villa3.jpg"
    ],
    description:
      "Beautiful sea-view villa with private pool, garden, and luxury finishing."
  },

  {
    name: "City Townhouse",
    type: "Townhouse",
    price: "$180,000",
    location: "Phnom Penh",
    images: [
      "images/houses/town1.jpg",
      "images/houses/town2.jpg",
      "images/houses/town3.jpg"
    ],
    description:
      "Modern townhouse located in the heart of the city with parking and security."
  }
];

/* ================= SAFE ID ================= */
const params = new URLSearchParams(window.location.search);
let id = parseInt(params.get("id"));

/* IF WRONG ID → GO BACK HOME */
if (isNaN(id) || !houses[id]) {
  window.location.href = "index.html";
}

/* ================= DATA ================= */
const house = houses[id];

/* TEXT */
document.getElementById("title").textContent = house.name;
document.getElementById("location").textContent = "📍 " + house.location;
document.getElementById("type").textContent = "🏠 " + house.type;
document.getElementById("price").textContent = house.price;
document.getElementById("description").textContent = house.description;

/* IMAGES */
document.getElementById("mainImg").src = house.images[0];
document.getElementById("img2").src = house.images[1];
document.getElementById("img3").src = house.images[2];

/* CLICK CHANGE IMAGE */
document.getElementById("img2").onclick = () => {
  document.getElementById("mainImg").src = house.images[1];
};

document.getElementById("img3").onclick = () => {
  document.getElementById("mainImg").src = house.images[2];
};


