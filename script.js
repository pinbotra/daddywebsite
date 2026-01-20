const houses = [
  // 20 CONDOS
  ...Array(20).fill().map((_, i) => ({ name: `Sot dg ${i+1}`, type: "Condo", price: "$120,000", location: "Phnom Penh", image: "images/houses/house1.jpg" })),
  // 20 VILLAS
  ...Array(20).fill().map((_, i) => ({ name: `Luxury Villa ${i+1}`, type: "Villa", price: "$450,000", location: "Siem Reap", image: "images/houses/house2.jpg" })),
  // 20 TOWNHOUSES
  ...Array(20).fill().map((_, i) => ({ name: `Modern Town ${i+1}`, type: "Townhouse", price: "$230,000", location: "Battambang", image: "images/houses/house3.jpg" }))
];

const wrapper = document.getElementById("categoryWrapper");

function renderHouses(list) {
  wrapper.innerHTML = "";
  const categories = ["Condo", "Villa", "Townhouse"];

  categories.forEach(cat => {
    const filtered = list.filter(h => h.type === cat);
    if (filtered.length > 0) {
      const bar = document.createElement("div");
      bar.className = "category-header-bar";
      bar.id = `${cat.toLowerCase()}-section`;
      bar.innerHTML = `<h2>${cat}s</h2>`;
      wrapper.appendChild(bar);

      const grid = document.createElement("section");
      grid.className = "house-container";

      filtered.forEach(house => {
        const idx = houses.indexOf(house);
        grid.innerHTML += `
          <div class="house-card">
            <div class="image-box"><img src="${house.image}"></div>
            <div class="house-info">
              <h3>${house.name}</h3>
              <p>${house.location}</p>
              <p class="price">${house.price}</p>
              <a href="detail.html?id=${idx}" class="btn-project">View Details</a>
            </div>
          </div>`;
      });
      wrapper.appendChild(grid);
    }
  });
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  const val = e.target.value.toLowerCase();
  renderHouses(houses.filter(h => h.name.toLowerCase().includes(val)));
});

document.getElementById("categoryFilter").addEventListener("change", (e) => {
  const val = e.target.value;
  renderHouses(val === "all" ? houses : houses.filter(h => h.type === val));
});

renderHouses(houses);