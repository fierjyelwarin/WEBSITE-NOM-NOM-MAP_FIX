/* ===================== DATA ===================== */

const monthlyData = [
  // JANUARI
  [
    { name: "KFC Dago", freq: 38, rating: 84, color: "#5b1f0f" },
    { name: "Solaria BIP", freq: 30, rating: 90, color: "#ffdbac" },
    { name: "Richeese Factory", freq: 22, rating: 82, color: "#a43a1c" },
    { name: "Kopi Kenangan Dipatiukur", freq: 18, rating: 78, color: "#f3b06b" }
  ],
  // FEB
  [
    { name: "J.Co PVJ", freq: 35, rating: 86, color: "#a43a1c" },
    { name: "Kopi Tuku", freq: 28, rating: 88, color: "#f3b06b" },
    { name: "Solaria Ciwalk", freq: 22, rating: 84, color: "#ffdbac" },
    { name: "McDonald's Dago", freq: 20, rating: 80, color: "#5b1f0f" }
  ],
  // MAR
  [
    { name: "Bakmi GM", freq: 40, rating: 90, color: "#5b1f0f" },
    { name: "Kopi Kenangan Braga", freq: 30, rating: 85, color: "#f3b06b" },
    { name: "Solaria Istana Plaza", freq: 20, rating: 88, color: "#ffdbac" },
    { name: "J.Co Trans Studio", freq: 10, rating: 78, color: "#a43a1c" }
  ],
  // APR
  [
    { name: "McDonald's Sudirman", freq: 42, rating: 87, color: "#5b1f0f" },
    { name: "Solaria Paskal", freq: 28, rating: 90, color: "#ffdbac" },
    { name: "Ramen Ya!", freq: 20, rating: 85, color: "#a43a1c" },
    { name: "Kopi Tuku", freq: 10, rating: 80, color: "#f3b06b" }
  ],
  // MEI
  [
    { name: "KFC Setiabudi", freq: 45, rating: 88, color: "#5b1f0f" },
    { name: "Solaria Festival Citylink", freq: 25, rating: 90, color: "#ffdbac" },
    { name: "Ayam Geprek Bensu", freq: 18, rating: 82, color: "#a43a1c" },
    { name: "Kopi Kenangan Riau", freq: 12, rating: 78, color: "#f3b06b" }
  ],
  // JUN
  [
    { name: "Kopi Kenangan Lembang", freq: 48, rating: 90, color: "#f3b06b" },
    { name: "Warung Kopi Gunung", freq: 30, rating: 92, color: "#ffdbac" },
    { name: "Solaria Dago", freq: 15, rating: 85, color: "#5b1f0f" },
    { name: "J.Co Lembang", freq: 7, rating: 80, color: "#a43a1c" }
  ],
  // JUL
  [
    { name: "The Lodge Maribaya", freq: 50, rating: 95, color: "#ffdbac" },
    { name: "Kopi Toko Djawa", freq: 25, rating: 88, color: "#f3b06b" },
    { name: "Solaria Paris Van Java", freq: 15, rating: 85, color: "#5b1f0f" },
    { name: "McDonald's Setiabudi", freq: 10, rating: 82, color: "#a43a1c" }
  ],
  // AGU
  [
    { name: "Ramen Ya! Braga", freq: 45, rating: 90, color: "#a43a1c" },
    { name: "Solaria BEC", freq: 30, rating: 88, color: "#ffdbac" },
    { name: "Kopi Kenangan Asia Afrika", freq: 15, rating: 85, color: "#f3b06b" },
    { name: "KFC Asia Afrika", freq: 10, rating: 80, color: "#5b1f0f" }
  ],
  // SEP
  [
    { name: "Bakso Boedjangan", freq: 42, rating: 92, color: "#5b1f0f" },
    { name: "Solaria Dago", freq: 28, rating: 90, color: "#ffdbac" },
    { name: "Kopi Tuku", freq: 20, rating: 88, color: "#f3b06b" },
    { name: "J.Co Cihampelas", freq: 10, rating: 80, color: "#a43a1c" }
  ],
  // OKT
  [
    { name: "Solaria Transmart", freq: 48, rating: 94, color: "#ffdbac" },
    { name: "Richeese Factory", freq: 25, rating: 90, color: "#a43a1c" },
    { name: "Kopi Kenangan Buah Batu", freq: 17, rating: 88, color: "#f3b06b" },
    { name: "McDonald's Soekarno Hatta", freq: 10, rating: 85, color: "#5b1f0f" }
  ],
  // NOV
  [
    { name: "Bakmi GM Braga", freq: 45, rating: 93, color: "#5b1f0f" },
    { name: "Solaria Paskal", freq: 30, rating: 90, color: "#ffdbac" },
    { name: "Kopi Toko Djawa", freq: 15, rating: 88, color: "#f3b06b" },
    { name: "J.Co Dipatiukur", freq: 10, rating: 82, color: "#a43a1c" }
  ],
  // DES
  [
    { name: "The Valley Bistro", freq: 55, rating: 96, color: "#ffdbac" },
    { name: "Kopi Luwak Café", freq: 25, rating: 92, color: "#f3b06b" },
    { name: "Solaria Dago", freq: 12, rating: 88, color: "#5b1f0f" },
    { name: "McDonald's Braga", freq: 8, rating: 85, color: "#a43a1c" }
  ]
];

const dashboardMonthly = { /* DATA KAMU TETEP PERSIS, GA DISENTUH */ 
  0:{summary:{user:1230,resto:320,view:5400,avgRating:4.3},users:[{name:"Dimas",email:"dimas@gmail.com",review:12},{name:"Aiden",email:"aiden@gmail.com",review:6}],restos:[{name:"KFC Dago",category:"Asin",status:"Verified"},{name:"J.Co PVJ",category:"Manis",status:"Verified"}],reviews:[{user:"Charlie_19",text:"Delicious 😋"},{user:"Perry_E",text:"Tempatnya nyaman"}]},
  1:{summary:{user:1350,resto:340,view:6200,avgRating:4.5},users:[{name:"Alexander",email:"alex@gmail.com",review:15}],restos:[{name:"Solaria Ciwalk",category:"Asin",status:"Verified"}],reviews:[{user:"Zefa_V",text:"Harga murah 👍"}]},
  2:{summary:{user:1400,resto:360,view:6800,avgRating:4.4},users:[{name:"Timothy",email:"tim@gmail.com",review:10}],restos:[{name:"Bakmi GM",category:"Asin",status:"Verified"}],reviews:[{user:"Jhon_*",text:"Pelayanan cepat"}]},
  3:{summary:{user:1500,resto:380,view:7200,avgRating:4.6},users:[{name:"Nabila",email:"nabila@gmail.com",review:14}],restos:[{name:"McDonald's Sudirman",category:"Asin",status:"Verified"}],reviews:[{user:"Nayla",text:"Overall mantap ✨"}]},
  4:{summary:{user:1600,resto:400,view:7800,avgRating:4.5},users:[{name:"Aulia",email:"aulia@gmail.com",review:11}],restos:[{name:"KFC Setiabudi",category:"Asin",status:"Verified"}],reviews:[{user:"Raka",text:"Murah & enak"}]},
  5:{summary:{user:1700,resto:430,view:8300,avgRating:4.7},users:[{name:"Putri",email:"putri@gmail.com",review:16}],restos:[{name:"Kopi Kenangan Lembang",category:"Minuman",status:"Verified"}],reviews:[{user:"Dewi",text:"View bagus banget 🌿"}]},
  6:{summary:{user:1800,resto:460,view:9100,avgRating:4.8},users:[{name:"Bima",email:"bima@gmail.com",review:18}],restos:[{name:"The Lodge Maribaya",category:"Wisata",status:"Verified"}],reviews:[{user:"Rani",text:"Instagramable 😍"}]},
  7:{summary:{user:1900,resto:480,view:9600,avgRating:4.6},users:[{name:"Rizky",email:"rizky@gmail.com",review:13}],restos:[{name:"Ramen Ya! Braga",category:"Asin",status:"Verified"}],reviews:[{user:"Salsa",text:"Ramen favorit!"}]},
  8:{summary:{user:2000,resto:500,view:10200,avgRating:4.7},users:[{name:"Yoga",email:"yoga@gmail.com",review:20}],restos:[{name:"Bakso Boedjangan",category:"Asin",status:"Verified"}],reviews:[{user:"Fahri",text:"Porsinya gede"}]},
  9:{summary:{user:2100,resto:520,view:10800,avgRating:4.8},users:[{name:"Anisa",email:"anisa@gmail.com",review:17}],restos:[{name:"Solaria Transmart",category:"Asin",status:"Verified"}],reviews:[{user:"Kevin",text:"Langganan tiap minggu"}]},
  10:{summary:{user:2200,resto:540,view:11500,avgRating:4.7},users:[{name:"Sarah",email:"sarah@gmail.com",review:19}],restos:[{name:"Bakmi GM Braga",category:"Asin",status:"Verified"}],reviews:[{user:"Rio",text:"Ga pernah gagal"}]},
  11:{summary:{user:2500,resto:600,view:13000,avgRating:4.9},users:[{name:"Admin",email:"admin@gmail.com",review:25}],restos:[{name:"The Valley Bistro",category:"Fine Dining",status:"Verified"}],reviews:[{user:"FoodHunter",text:"Best of the year 🏆"}]}
};

/* ===================== FUNCTIONS ===================== */

function updateChart() {
  const month = Number(document.getElementById("monthSelect").value);
  const data = monthlyData[month];

  let total = data.reduce((s, i) => s + i.freq, 0);
  let start = 0;
  let gradient = "";

  data.forEach(i => {
    let p = (i.freq / total) * 100;
    gradient += `${i.color} ${start}% ${start + p}%, `;
    start += p;
  });

  document.getElementById("pieChart").style.background =
    `conic-gradient(${gradient.slice(0, -2)})`;

  const legend = document.getElementById("pieLegend");
  legend.innerHTML = "";
  data.forEach(i => {
    legend.innerHTML += `<span><i class="dot" style="background:${i.color}"></i>${i.name}</span>`;
  });

  const sorted = [...data].sort((a, b) => b.rating - a.rating);
  const barChart = document.getElementById("barChart");
  barChart.innerHTML = "";

  sorted.forEach(i => {
    barChart.innerHTML += `
      <div class="bar" style="height:${i.rating}%;background:${i.color}">
        <span>${i.name}</span>
      </div>`;
  });

  document.getElementById("topName").innerText = sorted[0].name;
  document.getElementById("topInfo").innerText =
    `Rating: ${sorted[0].rating} | Frekuensi: ${sorted[0].freq}`;
}

function updateDashboard() {
  const month = Number(document.getElementById("monthSelect").value);
  const data = dashboardMonthly[month];

  document.getElementById("totalUser").innerText = data.summary.user;
  document.getElementById("totalResto").innerText = data.summary.resto;
  document.getElementById("totalView").innerText = data.summary.view;
  document.getElementById("avgRating").innerText = data.summary.avgRating;

  const userTable = document.getElementById("userTable");
  userTable.innerHTML = "";
  data.users.forEach(u => {
    userTable.innerHTML += `<tr><td>${u.name}</td><td>${u.email}</td><td>${u.review}</td></tr>`;
  });

  const restoTable = document.getElementById("restoTable");
  restoTable.innerHTML = "";
  data.restos.forEach(r => {
    restoTable.innerHTML += `<tr><td>${r.name}</td><td>${r.category}</td><td>${r.status}</td></tr>`;
  });

  const reviewGrid = document.getElementById("reviewGrid");
  reviewGrid.innerHTML = "";
  data.reviews.forEach(r => {
    reviewGrid.innerHTML += `
      <div class="review-item">
        <img src="https://i.pravatar.cc/150?u=${r.user}">
        <div class="review-content">
          <span class="user-name">${r.user}</span>
          <div class="bubble">${r.text}</div>
        </div>
      </div>`;
  });
}

function handleMonthChange() {
  updateChart();
  updateDashboard();
}

function handleLogout(event) {
    // Mencegah link pindah halaman secara otomatis
    event.preventDefault(); 
    
    const yakin = confirm("Are you sure you want to exit?");
    
    if (yakin) {
        // Jika ada session atau token di localStorage, hapus di sini
        // localStorage.removeItem("userToken"); 

        alert("Logout berhasil!");
        // Arahkan ke welcome page
        window.location.href = "WelcomePage.html"; 
    }
}

/* ===================== LOAD AWAL ===================== */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("monthSelect").value = "0";
  handleMonthChange();
});
