
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
  
  melon: {
    title: "Melon Types",
    description: "Deliciously sweet and fragrant melon varieties for fresh consumption.",
    types: [
      { name: "Cantaloupe", img: "https://i.pinimg.com/736x/4c/47/f6/4c47f64a791710e7a5c154d882c00396.jpg" },
      { name: "Honeydew", img: "https://t3.ftcdn.net/jpg/01/45/45/64/360_F_145456438_LPnXiZKl870Y1djFOfzwcYJ3WCR9fUCr.jpg" }
    ]
  },
   eggplant: {
    title: "Eggplant Types",
    description: "Versatile eggplant varieties ideal for grilling, baking, or stews.",
    types: [
      { name: "Black Beauty", img: "https://seedsnsuch.com/cdn/shop/files/2_9c3d23e4-2f67-4f2e-814d-1ebe6d763aa0_875x700.png?v=1744117711" },
      { name: "Graffiti Eggplant", img: "https://atlas-content-cdn.pixelsquid.com/stock-images/graffiti-eggplant-v10ywO1-600.jpg" },
      { name: "Thai Eggplant", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVoqTDV8VHmWFan2ZLA0LGXO5fAD9svgui0Q&s" }
    ]
  },
  cucumber: {
    title: "Cucumber Types",
    description: "An outstanding gynoecious American Slicer type cucumber developed for the tropical conditions present in Latin America. It produces high yields of outstanding quality, dark green, firm fruit that have a large to extra large size and good post-harvest holding ability. It typically matures around 60-65 days from direct seeding. This variety has a very strong and vigorous plant with resistance to MVR, CMV, PRSV, WMV, ZYMV, and TLS.",
    types: [
      { name: "English Cucumber", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dY6w4BVP4SaPZGN9Yj2pHAQBssQMNicgZQ&s" },
      { name: "Persian Cucumber", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDMaAR7p2xF8eOHRAhKLV6aCrjTp-QVgQTg&s" },
      { name: "Pickling Cucumber", img: "https://png.pngtree.com/png-vector/20240801/ourmid/pngtree-health-benefits-of-pickling-cucumbers-png-image_13327173.png" }
    ]
  },
  carrot: {
    title: "Carrot Types",
    description: "A high quality Nantes/ Berlicum type carrot with long, slender, and cylindrical roots. This variety has good resistance to Alternaria dauci and was developed for tropical markets. It has a very vigorous and rustic plant that has an intermediate maturity around 110 days. It produces high yields of very high quality carrots that have excellent post harvest ability.",
    types: [
      { name: "Nantes", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qgo9m53D9nhEaqzTyPpctUo_hPIlOA2xHQ&s" },
      { name: "Imperator", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8eW0CpdyGsM7uh7p1-eF6mnCIN3bTw5GdA&s" },
      { name: "Purple Carrot", img: "https://media.istockphoto.com/id/1473442124/photo/purple-carrot.jpg?s=612x612&w=0&k=20&c=AxfBa_5JWOBuOicRmNxYVy7gzGDcV6oI4MwWMw8PTXU=" }
    ]
  },
   squash: {
    title: "squash Types",
    description: "A squash is a cultivated winter squash in the genus Cucurbita.[1][2] The term is most commonly applied to round, orange-colored squash varieties, but does not possess a scientific definition. It may be used in reference to many different squashes of varied appearance and belonging to multiple species in the Cucurbita genus.[3]",
    types: [
      { name: "Long Island Cheese", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFFPijyOULmGyGKCI0oYgZR-se6rBlFpRsg&s" },
      { name: "Baby bear", img: "https://www.pfalzmarkt.de/wp-content/uploads/kuerbis-babybear-1.jpg" },
      { name: "Butternut squash", img: "https://www.veggycation.com.au/siteassets/veggycationvegetable/pumpkin-butternut.jpg" },
    ]
  },
     Pepper: {
    title: "Pepper Types",
    description: "One of the highest yielding jalapeño varieties available on the market today. It has thick-walled, medium-large fruit with smooth, dark green skin and a spicy flavor. The three inch sized fruit mature into a bright red color, perfect for the processing/ hot sauce markets. The plant is highly adaptable, vigorous, compact, which allows for easy machine or hand harvesting. The plant also has an excellent disease package, including resistance to Bacterial Spot 1-3 (BST 1-3) as well as Tomato Spotted Wilt Virus (TSWV).",
    types: [
      { name: "capsicum", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCChfKiZ2okzf5rBlv1NX1KCzz4d_FPXdng&s" },
      { name: "Jalapeño", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnvwM7bNTT9akQxZ9lsa_yMiT6LmvcpEoDFA&s" },
      { name: "Banana pepper", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaTEfpMlLMYKMOGyammnjFs7r-nPNl_QWDUg&s" }
    ]
  },
       Onion: {
    title: "Onion Types",
    description: "An outstanding hybrid short day onion tailored for tropical growing seasons. This variety has PRR resistance, thin necks, excellent uniformity, and a 2-4 month storage ability. This makes it highly desirable for markets where the prices of onions fluctuate highly. Growers can harvest and store their produce until market conditions improve with this variety. It has a round to deep round shape. It is very adaptable, early, and has a fresh market bulb with with tight, brown skins that darken with storage.",
    types: [
      { name: "White", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNA0JiOlRcp4Gl_kPcyOG7Or9jMgTM-mJZjw&s" },
      { name: "Yellow", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_TaCRUyCB-UmltWmo1YV8uGcgWiCV6QqCQ&s" },
      { name: "Red", img: "https://cdn.mafrservices.com/sys-master-root/h61/h93/33626788986910/9562_main.jpg" }
    ]
  },
  tomato: {
    title: "Tomato Types",
    description: "This is a variety with high yields when grown in tropical conditions. It produces high quality, 100-120 Gr fruit in a concentrated set. It has intermediate maturity at 80 days, and is resistant to Verticillium Wilt (V), Fusarium Wilt (F0), Tomato Yellow Leaf Curl Virus (TYLC), and Bacterial Wilt (BW).",
    types: [
      { name: "Cherry Tomato", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJVVqfTLk_M3iSijixioqpdnZh2d6ftAPCw&s" },
      { name: "Beefsteak", img: "https://thumbs.dreamstime.com/b/ripe-heirloom-wrinkled-beefsteak-tomato-solanum-lycopersicum-fruit-isolated-ribbed-199448108.jpg" }
    ]
  },
  Basil:{
     title: "Basil Types",
    description: "Basil, scientifically known as Ocimum basilicum, is a fragrant herb from the mint family, widely used in culinary and medicinal applications",
    types: [
      { name: "sweet basil", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdaannMkMS7GfMsb4KbCHd05eB4WX37QO3LQ&s" },
      { name: "Genovese basil", img: "https://lesverts.com/wp-content/uploads/2024/09/Compact-Genovese-Basil.min_.webp" }
    ]
  },
    Melon: {
    title: "Melon Types",
    description: "melon, (Cucumis melo), trailing vine in the gourd family (Cucurbitaceae), grown for its often musky-scented edible fruit. The melon plant is native to central Asia, and its many cultivated varieties are widely grown in warm regions around the world. Most commercially important melons are sweet and eaten fresh, though some varieties can be made into preserves or pickled.",
    types: [
      { name: "Cantaloupe", img: "https://m.media-amazon.com/images/I/818lNSOUUJL._UF894,1000_QL80_.jpg" },
      { name: "honeydew melons", img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Honeydew.jpg" }
    ]
  },
   watermelon: {
    title: "Watermelon Types",
    description: "A highly adaptable and very productive Caribbean Gold/ Harper type melon. Sweet flavor, long storage life, resistant to Fusarium Race 1-2 and Powdery Mildew.",
    types: [
      { name: "Crimson Sweet", img: "https://royalseed.biz/ws/media-library/23fc5cdaf2454df693d57f9a32e40110/crimson-sweet0.5x.png" },
      { name: "Charleston Gray", img: "https://seedmart.com.au/wp-content/uploads/2022/08/watermelon-charleston-grey-isolated-seedmart.jpg" },
      { name: "Yellow Flesh", img: "https://png.pngtree.com/png-vector/20250725/ourmid/pngtree-thai-yellow-flesh-jackfruit-png-image_16833257.webp" }
    ]
  },
    Strawberry: {
    title: "Strawberry Types",
    description: "The garden strawberry (or simply strawberry; Fragaria × ananassa) is a widely grown hybrid plant cultivated worldwide for its fruit. The genus Fragaria, the strawberries, is in the rose family, Rosaceae. The fruit is appreciated for its aroma, bright red colour, juicy texture, and sweetness.",
    types: [
      { name: "Honeoye Strawberry", img: "https://www.inmygarden.eu/images/Zdjecia_produktowe/owocowe/owocowe/qr11852.jpg" },
      { name: "Seascape Strawberry", img: "https://i.ebayimg.com/images/g/ofEAAOSw3XRoKnrV/s-l500.jpg" }
    ]
  },
    Orange: {
    title: "Orange Types",
    description: "The orange fruit is a citrus fruit, botanically classified as Citrus × sinensis, a hybrid of the pomelo and mandarin orange. ",
    types: [
      { name: "Citrus orange", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWIvvGsT0MFntvZug1Iuu8ZaIzK0yYIdw0A&s" },
      { name: "sinensis orange", img: "https://media.istockphoto.com/id/182463420/photo/tangerine-duo-with-leafs.jpg?s=612x612&w=0&k=20&c=d3JZRAqgqZ5RWyN4ryFteCnmFNbeD9e3TNJkS2IC0vU=" }
    ]
  },
    Apple: {
    title: "Apple Types",
    description: "An  apple is a sweet, edible fruit produced by an  apple tree (Malus domestic). In France, it is the most consumed edible fruit and the third in the planet. The main types of  apples come from the domestic apple or common apple. ",
    types: [
      { name: "Gala apple", img: "https://www.shutterstock.com/image-photo/royal-gala-small-new-zealand-260nw-2476663685.jpg" },
      { name: "Beefsteak", img: "https://media.istockphoto.com/id/1371960141/photo/five-green-apples.jpg?s=612x612&w=0&k=20&c=_Lt5gAirj6VwX9s9HlA1yOVvS3PARnihoHeuQ_rJVAc=" }
    ]
  },
    Grapes: {
    title: "Grapes Types",
    description: "A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes are a non-climacteric type of fruit, generally occurring in clusters.",
    types: [
      { name: "Muscat", img: "https://www.shutterstock.com/image-photo/sweet-green-grape-leaves-isolated-260nw-2502190143.jpg" },
      { name: "Pinot Gris", img: "https://thumbs.dreamstime.com/b/pinot-gris-grape-white-background-pinot-gris-grape-pinkish-purple-berries-isolated-white-background-288598295.jpg" }
    ]
  },
    Banana: {
    title: "Banana Types",
    description: "A banana is an elongated, edible fruit—botanically a berry—produced by several kinds of large treelike herbaceous flowering plants in the genus Musa",
    types: [
      { name: "Cavendish", img: "https://img.freepik.com/premium-photo/cavendish-banana-isolated-white-background_38172-788.jpg" },
      { name: "Plantain", img: "https://www.shutterstock.com/image-photo/plantain-banana-on-white-background-260nw-265925420.jpg" }
    ]
  },
  // Add cucumber, eggplant, carrot...
};

// Popup elements
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupDesc = document.getElementById("popup-description");
const popupTypes = document.getElementById("popup-types");

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
        <img src="${type.img}" alt="${type.name}" style="max-width:80px; max-height:80px; display:block; margin: 0 auto;">
        <span>${type.name}</span>
      </div>
    `).join("");

    popup.style.display = "block";
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