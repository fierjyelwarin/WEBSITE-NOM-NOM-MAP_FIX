document.addEventListener("DOMContentLoaded", function () {

  /* ================= ELEMENT UTAMA ================= */
  const cards = document.querySelectorAll(".card");
  const overlay = document.getElementById("detailOverlay");
  const closeBtn = document.getElementById("closeDetail");

  const detailImage = document.getElementById("detailImage");
  const detailTitle = document.getElementById("detailTitle");
  const detailCategory = document.getElementById("detailCategory");
  const detailSummary = document.getElementById("detailSummary");
  const menuImage = document.getElementById("menuImage");
  const defaultMenuImage = document.getElementById("menuImage");
  const fileInput = document.getElementById("fileInput");
  const menuGallery = document.getElementById("menu-gallery");
  

  /* ================= DATA MENU DEFAULT ================= */
  const menuPhotos = {
    "Richeese Factory": "MENU RICHEESE.jpeg",
    "Hayam Resto": "MENU HAYAM.jpg"
    
  };

  /* ================= DATA RINGKASAN ================= */
  const summaries = {
    "Richeese Factory": `
📍 Jl. Kiara Sari Utama III No.4, Margasari, Kec. Buahbatu, Kota Bandung
⏳ Buka · Tutup pukul 19.00
☎️ 0812-3456-7890
ℹ️ Bawa Pulang · Makan di Tempat
`,
    "Hayam Resto": `
📍 Jl. Kiara Sari Utama III No.4, Margasari, Kec. Buahbatu, Kota Bandung
⏳ Buka · Tutup pukul 19.00
☎️ 0812-3456-7890
ℹ️ Bawa Pulang · Makan di Tempat
`
  };

  /* ================= DATA RATING ================= */
  const ratings = {
    "Richeese Factory": {
      star: "⭐ 4.7",
      review: "Ayam crispy dengan saus keju creamy, pedasnya nagih."
    },
    "Hayam Resto": {
      star: "⭐ 4.5",
      review: "Olahan ayam khas lokal, porsi besar dan rasa konsisten."
    }
  };

  /* ================= CLICK CARD ================= */
  cards.forEach(card => {
    card.style.cursor = "pointer";

    card.addEventListener("click", () => {
      console.log("CARD KEKLIK");

      const img = card.querySelector("img").src;
      const title = card.querySelector("h3").innerText;
      const category = card.querySelector(".category").innerText;

      /* RESET */
      if (menuGallery) menuGallery.innerHTML = "";

      /* DATA UTAMA */
      detailImage.src = img;
      detailTitle.innerText = title;
      detailCategory.innerText = category;

      /* RINGKASAN */
      detailSummary.innerText =
        summaries[title] || "Ringkasan belum tersedia.";

      /* MENU DEFAULT */
      if (defaultMenuImage && menuPhotos[title]) {
        defaultMenuImage.src = menuPhotos[title];
        defaultMenuImage.style.display = "block";
      } else if (defaultMenuImage) {
        defaultMenuImage.style.display = "none";
      }

      /* RATING */
      const ratingTab = document.getElementById("rating");
      const ratingData = ratings[title];

      ratingTab.innerHTML = ratingData
        ? `<p>${ratingData.star}</p><p>${ratingData.review}</p>`
        : `<p>⭐ 4.0</p><p>Belum ada ulasan.</p>`;

      overlay.classList.add("active");
    });
  });

  /* ================= CLOSE MODAL ================= */
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
    });
  }

  /* ================= UPLOAD FOTO MENU ================= */
  if (fileInput && menuGallery) {
    fileInput.addEventListener("change", function () {
      [...fileInput.files].forEach(file => {
        const reader = new FileReader();
        reader.onload = e => {
          const img = document.createElement("img");
          img.src = e.target.result;
          img.className = "menu-img";
          menuGallery.appendChild(img);
        };
        reader.readAsDataURL(file);
      });
    });
  }
  /* ================= SEARCH LOGIC ================= */
  const searchInput = document.getElementById("searchInput");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const keyword = searchInput.value.toLowerCase();

      cards.forEach(card => {
        const title = card.querySelector("h3")?.innerText.toLowerCase() || "";
        const category = card.querySelector(".category")?.innerText.toLowerCase() || "";
        
        if (title.includes(keyword) || category.includes(keyword)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  /* ================= TAB LOGIC ================= */
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn")
        .forEach(b => b.classList.remove("active"));

      document.querySelectorAll(".tab-content")
        .forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

});
