
document.querySelectorAll('.main-nav a[data-section]').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    const section = this.getAttribute('data-section');

    // If it's an anchor link or SPA section, prevent default
    if (!href || href === '#' || href.endsWith('#')) {
      e.preventDefault();

      // Hide all submenus
      document.querySelectorAll('.submenu').forEach(menu => {
        menu.style.display = 'none';
      });

      // Show the related submenu
      const submenu = document.getElementById(`${section}-submenu`);
      if (submenu) {
        submenu.style.display = 'block';
      }
    }
    // Otherwise, allow normal navigation to .html page
  });
});

// Hide submenus when clicking outside the nav
document.addEventListener('click', function (e) {
  if (!e.target.closest('.main-nav')) {
    document.querySelectorAll('.submenu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});



function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
  
// function translatePage(lang) {
//   const t = translations[lang];
//   if (!t) return;

//   for (const key in t) {
//     const el = document.getElementById(key);
//     if (el) {
//       el.innerHTML = t[key];
//     }
//   }

//   // Update all discover/read buttons
//   document.querySelectorAll(".discoverBtn").forEach(btn => btn.textContent = t.discoverBtn);
//   document.querySelectorAll(".readArticleBtn").forEach(btn => btn.textContent = t.readArticleBtn);
// }

// document.getElementById("langSelector").addEventListener("change", function () {
//   const lang = this.value;
//   translatePage(lang);
// });

// // Default language on load
// document.addEventListener("DOMContentLoaded", () => translatePage("EN"));


const fruitData = {
  
   eggplant: {
    title: "Eggplant Types",
    description: "Eggplant is a versatile crop available in many types. Compact varieties suit small spaces, while vigorous types give continuous harvests. Hybrid seeds provide high yield, uniform fruits, and disease resistance, while heirloom types offer traditional flavor and seed saving. Main categories include globe, elongated/Asian, mini, and specialty eggplants such as striped or white.",

    types: [
      { name: "Black Beauty", img: "https://seedsnsuch.com/cdn/shop/files/2_9c3d23e4-2f67-4f2e-814d-1ebe6d763aa0_875x700.png?v=1744117711" },
      { name: "Graffiti Eggplant", img: "https://atlas-content-cdn.pixelsquid.com/stock-images/graffiti-eggplant-v10ywO1-600.jpg" },
      { name: "Thai Eggplant", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVoqTDV8VHmWFan2ZLA0LGXO5fAD9svgui0Q&s" }
    ]
  
  },
  cucumber: {
    title: "Cucumber Types",
    description: "Cucumbers are among the most widely grown vegetables, available in different types to suit various needs. Bush varieties are compact and ideal for small spaces, while vining types spread widely and produce over a longer season. Hybrid (F1) seeds provide high yield, uniform fruits, and strong disease resistance, while open-pollinated/heirloom varieties offer traditional taste and can be saved for replanting. Main categories include slicing cucumbers (fresh eating), pickling cucumbers (small, firm, perfect for pickles), burpless/seedless cucumbers (mild flavor, easy to digest), and specialty types like Armenian or lemon cucumbers (unique shape and taste).",
    types: [
      { name: "English Cucumber", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dY6w4BVP4SaPZGN9Yj2pHAQBssQMNicgZQ&s" },
      { name: "Persian Cucumber", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDMaAR7p2xF8eOHRAhKLV6aCrjTp-QVgQTg&s" },
      { name: "Pickling Cucumber", img: "https://png.pngtree.com/png-vector/20240801/ourmid/pngtree-health-benefits-of-pickling-cucumbers-png-image_13327173.png" }
    ]

  },
  carrot: {
    title: "Carrot Types",
     description: "Carrots are a widely grown root vegetable, valued for sweetness, nutrition, and versatility. Short-rooted or early types grow quickly and suit shallow soils, while long-rooted varieties need deeper soil and produce larger yields. Hybrid (F1) seeds give uniform roots, high yield, and disease resistance, while open-pollinated/heirloom varieties provide traditional taste and allow seed saving. Main categories include imperator carrots (long, slender, sweet), danvers (medium-length, adaptable), nantés (cylindrical, crisp, sweet), and chantenay/baby carrots (short, thick, early, great for snacking or processing).",
 
    types: [
      { name: "Nantes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qgo9m53D9nhEaqzTyPpctUo_hPIlOA2xHQ&s" },
      { name: "Imperator", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8eW0CpdyGsM7uh7p1-eF6mnCIN3bTw5GdA&s" },
      { name: "Purple Carrot", img: "https://media.istockphoto.com/id/1473442124/photo/purple-carrot.jpg?s=612x612&w=0&k=20&c=AxfBa_5JWOBuOicRmNxYVy7gzGDcV6oI4MwWMw8PTXU=" }
    ]
      
  },
   squash: {
    title: "squash Types",
     description: "Squash is a versatile crop available as summer types like zucchini for fresh eating and winter types like pumpkin and butternut for storage and cooking. Bush varieties suit small gardens, while vining types give larger harvests. Hybrid seeds ensure high yield and disease resistance, while heirloom types offer traditional flavor and seed saving.",
 
    types: [
      { name: "Long Island Cheese", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFFPijyOULmGyGKCI0oYgZR-se6rBlFpRsg&s" },
      { name: "Baby bear", img: "https://www.pfalzmarkt.de/wp-content/uploads/kuerbis-babybear-1.jpg" },
      { name: "Butternut squash", img: "https://www.veggycation.com.au/siteassets/veggycationvegetable/pumpkin-butternut.jpg" },
    ]
  },
     Pepper: {
    title: "Pepper Types",
     description: "Peppers are a popular and versatile crop, available in many types to match different tastes and markets. Sweet peppers are mild and often grown as bell peppers in various colors, while hot peppers range from mildly spicy to very hot, used fresh, dried, or in sauces. Hybrid (F1) seeds provide high yield, uniform fruits, and strong disease resistance, while open-pollinated/heirloom varieties offer traditional flavors and can be saved for seed. Main categories include bell peppers (blocky, sweet, colorful), chili peppers (spicy, many heat levels), banana peppers (long, mild to medium heat), and specialty types like pimientos or ornamental peppers (unique shapes, flavors, and colors).",

    types: [
      { name: "capsicum", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCChfKiZ2okzf5rBlv1NX1KCzz4d_FPXdng&s" },
      { name: "Jalapeño", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnvwM7bNTT9akQxZ9lsa_yMiT6LmvcpEoDFA&s" },
      { name: "Banana pepper", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaTEfpMlLMYKMOGyammnjFs7r-nPNl_QWDUg&s" }
    ]

  },
       Onion: {
    title: "Onion Types",
     description: "Onions are one of the most essential vegetables worldwide, available in several types for different uses. Short-day varieties grow best in warmer regions with mild winters, while long-day types are suited for cooler climates with longer summer days. Hybrid (F1) seeds offer uniform bulbs, higher yield, and disease resistance, while open-pollinated/heirloom varieties provide traditional flavor and can be saved for replanting.",

    types: [
      { name: "White", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNA0JiOlRcp4Gl_kPcyOG7Or9jMgTM-mJZjw&s" },
      { name: "Yellow", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_TaCRUyCB-UmltWmo1YV8uGcgWiCV6QqCQ&s" },
      { name: "Red", img: "https://cdn.mafrservices.com/sys-master-root/h61/h93/33626788986910/9562_main.jpg" }
    ]

  },
  tomato: {
    title: "Tomato Types",
     description: "Tomatoes are one of the world’s most popular vegetables, available in many types. Determinate (bush) varieties are compact and early, while indeterminate (vine) types grow continuously for higher yields. Hybrid (F1) seeds give uniform, disease-resistant crops, while open-pollinated/heirloom varieties offer rich flavor and can be saved for replanting. Main categories include cherry (small and sweet), roma/plum (sauce and paste), beefsteak (large and juicy), and globe (versatile, all-purpose).",
    types: [
      { name: "Cherry Tomato", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJVVqfTLk_M3iSijixioqpdnZh2d6ftAPCw&s" },
      { name: "Beefsteak", img: "https://thumbs.dreamstime.com/b/ripe-heirloom-wrinkled-beefsteak-tomato-solanum-lycopersicum-fruit-isolated-ribbed-199448108.jpg" }
    ]
    
  },
    Melon: {
    title: "Melon Types",
      description: "Bush or compact types are suitable for smaller spaces, while vining varieties spread widely and give higher yields. Hybrid (F1) seeds ensure uniform size, strong disease resistance, and high productivity, while open-pollinated/heirloom varieties offer traditional flavor and allow seed saving. Main categories include cantaloupe (muskmelon) with sweet, aromatic flesh, honeydew with smooth skin and mild sweetness, watermelon known for its juicy, refreshing taste, and specialty melons such as galia or korean melon, valued for unique flavor and appearance.",
    types: [
      { name: "Cantaloupe", img: "https://m.media-amazon.com/images/I/818lNSOUUJL._UF894,1000_QL80_.jpg" },
      { name: "honeydew melons", img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Honeydew.jpg" }
    ]
    
  },
   watermelon: {
    title: "Watermelon Types",
     description: "Watermelon is a favorite summer fruit, available in different types. Bush varieties suit small spaces, while vining types give bigger harvests. Hybrid seeds provide high yield, uniform fruits, and disease resistance, while heirloom types offer traditional flavor and seed saving. Main categories include seedless, seeded, mini/personal, and specialty watermelons with yellow or orange flesh.",

    types: [
      { name: "Crimson Sweet", img: "https://royalseed.biz/ws/media-library/23fc5cdaf2454df693d57f9a32e40110/crimson-sweet0.5x.png" },
      { name: "Charleston Gray", img: "https://seedmart.com.au/wp-content/uploads/2022/08/watermelon-charleston-grey-isolated-seedmart.jpg" },
      { name: "Yellow Flesh", img: "https://png.pngtree.com/png-vector/20250725/ourmid/pngtree-thai-yellow-flesh-jackfruit-png-image_16833257.webp" }
    ]
    
  },

};
document.addEventListener("DOMContentLoaded", () => {
  // Popup elements
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupDesc = document.getElementById("popup-description");
  const popupTypes = document.getElementById("popup-types");
  const closeBtn = popup.querySelector(".close");

  // Close button functionality
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // (Optional) Close popup when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });

  // (Optional) Close popup with ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      popup.style.display = "none";
    }
  });

  // Open popup when clicking on a card
  document.querySelectorAll(".veggie-card").forEach(card => {
    card.addEventListener("click", () => {
      const key = card.dataset.key;
      const data = fruitData[key];
      if (!data) {
        alert("No data for this item.");
        return;
      }

      popupTitle.textContent = data.title;
      popupDesc.textContent = data.description;
      popupTypes.innerHTML = data.types.map(type => `
        <div class="type-item" style="text-align:center;">
          <img src="${type.img}" alt="${type.name}" 
               style="max-width:80px; max-height:80px; display:block; margin: 0 auto;">
          <span>${type.name}</span>
        </div>
      `).join("");

      // popup.style.display = "block"; // or "flex" if using flexbox
      popup.style.display = "flex"; // not "block"
    });
  });
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

toggle.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent immediate close
  nav.classList.toggle("active");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove("active");
  }
});



