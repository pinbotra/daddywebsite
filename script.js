// ONE SINGLE DATA ARRAY
const houses = [
  // --- 20 CONDOS ---
  { name: "Sot dg 1", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg", images: ["images/houses/house1.jpg", "images/houses/house1-1.jpg"], description: "Luxury condo." },
  { name: "Sot dg 2", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 3", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 4", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 5", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 6", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 7", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 8", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 9", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 10", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 11", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 12", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 13", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 14", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 15", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 16", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 17", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 18", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 19", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },
  { name: "Sot dg 20", type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" },

  // --- 20 VILLAS ---
  { name: "Luxury Villa 1", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 2", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 3", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 4", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 5", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 6", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 7", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 8", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 9", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 10", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 11", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 12", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 13", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 14", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 15", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 16", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 17", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 18", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 19", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },
  { name: "Luxury Villa 20", type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" },

  // --- 20 TOWNHOUSES ---
  { name: "Modern Town 1", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 2", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 3", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 4", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 5", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 6", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 7", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 8", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 9", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 10", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 11", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 12", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 13", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 14", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 15", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 16", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 17", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 18", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 19", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" },
  { name: "Modern Town 20", type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" }
];

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function renderHouses(list) {
  const wrapper = document.getElementById("categoryWrapper");
  if (!wrapper) return; // Prevent error if element not found
  wrapper.innerHTML = ""; 

  const categories = ["Condo", "Villa", "Townhouse"];

  categories.forEach(cat => {
    const filteredList = list.filter(h => h.type === cat);

    if (filteredList.length > 0) {
      // 1. Create Cream Header
      const sectionHeader = document.createElement("div");
      sectionHeader.className = "category-header-bar";
      sectionHeader.innerHTML = `<h2>${cat}s</h2>`;
      wrapper.appendChild(sectionHeader);

      // 2. Create Grid
      const grid = document.createElement("section");
      grid.className = "house-container"; 

      filteredList.forEach(house => {
        // We find the original index so Detail Page works
        const originalIndex = houses.indexOf(house);
        const card = document.createElement("div");
        card.className = "house-card";
        card.innerHTML = `
          <div class="image-box">
            <img src="${house.image}" alt="${house.name}">
          </div>
          <div class="house-info">
            <h3>${house.name}</h3>
            <p>${house.location}</p>
            <p class="price">${house.price}</p>
            <div class="project-links">
              <a href="detail.html?id=${originalIndex}" class="btn-project">View Details</a>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });
      wrapper.appendChild(grid);
    }
  });
}

// Fixed Search and Filter Logic
function handleFilter() {
  const text = searchInput.value.toLowerCase();
  const cat = categoryFilter.value;
  
  const filtered = houses.filter(h => {
    const matchesName = h.name.toLowerCase().includes(text);
    const matchesCat = (cat === "all" || h.type === cat);
    return matchesName && matchesCat;
  });
  
  renderHouses(filtered);
}

searchInput.addEventListener("input", handleFilter);
categoryFilter.addEventListener("change", handleFilter);

// Initial Load
renderHouses(houses);