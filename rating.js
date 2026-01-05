function goToAddReview() {
  if (localStorage.getItem("isLogin") === "true") {
    window.location.href = "review.html";
  } else {
    window.location.href = "login.html";
  }
}

const reviewData = {
  "bakso-samrat": [
    {
      name: "jaehyun's gf",
      stars: 5,
      text: "jujur ini bakso tuh comforting banget 😭 kuahnya gurih parah."
    },
    {
      name: "Rizky Aja",
      stars: 4,
      text: "enak sih, cuma rame kalo jam makan. still worth it."
    },
    {
      name: "Ratna Dewi",
      stars: 5,
      text: "Baksonya gurih dan cocok untuk makan bersama keluarga."
    },
    {
      name: "Muhammad Rizky Pratama",
      stars: 5,
      text: "Baksonya legit parah sih. Kuahnya tuh bukan yang hambar, beneran kerasa kaldu. Dateng pas laper banget, langsung puas."
    },
    {
      name: "Alya Azzahra",
      stars: 4,
      text: "Tempatnya cukup nyaman buat makan santai. Baksonya enak, cuma rame banget kalo jam makan siang."
    },
    {
      name: "Yoga Pradipta Wijaya",
      stars: 5,
      text: "Sering lewat tapi baru sempet coba. Ternyata enak banget, nyesel nggak dari dulu."
    },
    
  ],

  "Momoyo": [
    {
      name: "matchalover99",
      stars: 5,
      text: "ini es krim favorit aku sejak lama, rasanya konsisten."
    },
    {
      name: "Anisa Putri",
      stars: 4,
      text: "tempatnya lucu dan nyaman buat nongkrong."
    },
    {
      name: "Kaylaaaaa",
      stars: 5,
      text: "toppingnya lucu-lucu, es krimnya lembut. ngantrinya kadang lumayan tapi masih oke."
    },
    {
      name: "Nadira Putri Ayuningtyas",
      stars: 4,
      text: "Rasanya enak dan konsisten. Anak-anak juga suka, cuma tempatnya agak ramai di jam sore."
    },
    {
      name: "anakjajanlaper",
      stars: 5,
      text: "ini tuh es krim yang cocok kalo lagi bad mood. beli, duduk, beres."
    },
    {
      name: "Aulia Fadhilah R",
      stars: 4,
      text: "Rasanya enak, cuma kadang tempat duduk penuh kalau weekend."
    },
    {
      name: "dessertfirstasklater",
      stars: 5,
      text: "ga tau lagi ini es krim tuh nagih banget. abis makan berat lanjut momoyo tuh wajib."
    },
  ],

  "taichan-bengawan": [
    {
      name: "Raka Aditya Pramudya",
      stars: 4,
      text: "taichannya juicy parah, ga kering sama sekali. sambelnya pedesnya nampol tapi masih enak, bukan pedes nyiksa.."
    },
    {
      name: "sambaladicct",
      stars: 5,
      text: "sambelnya tuh tipe pedes gutih bukan pedes asem. dipake ke nasi auto nambah."
    },
    {
      name: "scoupotatos",
      stars: 4,
      text: "taichannya enak banget, apalagi kalo masih panas. cuma kalo rame nunggu agak lama dikit"
    },
    {
      name: "Dwi Lestari Puspita",
      stars: 5,
      text: "Menu taichannya cocok untuk makan bersama keluarga, rasanya tidak terlalu asin dan porsinya pas."
    },
    {
      name: "anaklapermalem",
      stars: 5,
      text: "ini tuh taichan yang aman buat jam 10 malem. ayamnya lembut, sambelnya bikin melek."
    },
    {
      name: "kulinerbandung",
      stars: 5,
      text: "sate ayamnya ga bau, matengnya pas. sambal + jeruk nipisnya bikin rasanya seger banget."
    },
  ],
 
    "baskin-robbins": [
    {
      name: "caca nyobain",
      stars: 4,
      text: "love the ice cream, especially cotton candy & pralines n cream. cuma ya harganya agak nyesss😭"
    },
    {
      name: "jaemin's ice cream buddy",
      stars: 5,
      text: "dateng kesini niatnya cuma liat-liat, pulangnya bawa triple scoop 🤡 salah sendiri sih rasanya enak semua"
    },
    {
      name: "scoupotatos",
      stars: 4,
      text: "taichannya enak banget, apalagi kalo masih panas. cuma kalo rame nunggu agak lama dikit"
    },
    {
      name: "Dwi Kartika",
      stars: 4,
      text: "Tempatnya bersih dan nyaman untuk bawa anak-anak. Pelayanannya juga ramah."
    },
    {
      name: "bucin manis",
      stars: 5,
      text: "date spot paling aman. es krimnya nggak pernah fail, tinggal pilih rasa sesuai mood 💕"
    },
    {
      name: "Rama Prakoso",
      stars: 5,
      text: "Rasa es krimnya enak dan premium, cuma kadang antreannya cukup panjang di jam ramai."
    },
  ],

    "sadrasa-kitchen": [
    {
      name: "Andreas M",
      stars: 4,
      text: "Minumannya fresh dan presentasinya menarik. Worth it buat nongkrong agak lama."
    },
    {
      name: "vaniadyaaa",
      stars: 5,
      text: "overall enak dan nyaman, cuma harganya memang sesuai sama konsep tempatnya."
    },
    {
      name: "familytrip2024",
      stars: 4,
      text: "Kami datang sekeluarga, tempatnya cukup luas dan nyaman. Anak-anak juga betah"
    },
    {
      name: "Nadia Putri",
      stars: 5,
      text: "dateng kesini tuh berasa slow living 😌 makan enak, ambience dapet, nggak berisik."
    },
    {
      name: "lagi healing",
      stars: 4,
      text: "Makanannya enak dan konsisten, hanya saja parkir agak terbatas pas jam sibuk"
    },
    {
      name: "Lina Wijaya",
      stars: 5,
      text: "Tempatnya bersih dan nyaman, pelayanan ramah. Menu cukup beragam untuk keluarga."
    },
  ],

    "feel-matcha": [
    {
      name: "matchaenthusiast",
      stars: 5,
      text: "matchanya legit banget, bukan yang pahit asal 😭 kerasa quality-nya" 
    },
    {
      name: "Rina Kusuma",
      stars: 4,
      text: "Rasanya enak dan konsisten. Tempatnya nyaman meskipun tidak terlalu besar"
    },
    {
      name: "latteovercoffee",
      stars: 5,
      text: "finally nemu matcha yang nggak kaleng-kaleng di bandung"
    },
    {
      name: "Dimas Pradana",
      stars: 4,
      text: "Matcha-nya enak, cuma pas weekend agak ramai. Overall tetap worth it."
    },
    {
      name: "Nabila Azzahra",
      stars: 4,
      text: "Minumannya enak dan tampilannya menarik, harga masih masuk akal."
    },
    {
      name: "greenpowderlover",
      stars: 5,
      text: "aftertaste matchanya bersih, nggak langu. fix bakal balik lagi"
    },
  ],

  "warung-nasi": [
  {
    name: "laparjam12",
    stars: 5,
    text: "sumpah ini nasi padang versi sunda 😭 sambelnya pedes nagih, lauknya banyak pilihan."
  },
  {
    name: "anakkosbandung",
    stars: 5,
    text: "ayam gorengnya crispy, bumbunya nyerep. porsi nasi bisa nambah jadi aman."
  },
  {
    name: "Ibu Rini Lestari",
    stars: 5,
    text: "Masakannya cocok untuk keluarga, rasanya khas rumahan dan sambalnya segar."
  },
  {
    name: "temennya makan",
    stars: 4,
    text: "enak banget tapi rame parah kalo jam makan siang. dateng agak awal lebih aman."
  },
  {
    name: "jaehyun’s lunch spot",
    stars: 5,
    text: "ini tuh comfort food. sambel hijau + ayam + tempe = combo wajib."
  },
  {
    name: "Dedi Saputra",
    stars: 4,
    text: "Rasanya enak dan konsisten, hanya saja tempatnya cukup padat saat ramai."
  },
  {
    name: "keluargakuliner",
    stars: 5,
    text: "Kami makan bersama keluarga besar, semua suka terutama sambal dan tahu tempenya."
  },
  {
    name: "nasicampurislife",
    stars: 5,
    text: "ngambil lauk kebanyakan tapi gapernah nyesel 😭 semuanya enak."
  },
  {
    name: "Alya Prameswari",
    stars: 4,
    text: "Masakannya enak, harga masih terjangkau. Akan lebih nyaman kalau antriannya lebih tertib."
  },
  {
    name: "perutbahagia",
    stars: 5,
    text: "setiap ke bandung pasti mampir. rasanya nggak pernah berubah dari dulu."
  },
],

  "bubur-dpr": [
  {
    name: "buburlife",
    stars: 5,
    text: "buburnya halus banget, gurih, ga hambar. toppingnya juga royal."
  },
  {
    name: "sarapanjam6",
    stars: 5,
    text: "dateng pagi-pagi paling pas. bubur ayamnya hangat, cocok buat start hari."
  },
  {
    name: "Ibu Siti Rahmawati",
    stars: 5,
    text: "Buburnya lembut dan rasanya pas, cocok untuk anak-anak dan orang tua."
  },
  {
    name: "anakpagi",
    stars: 4,
    text: "enak sih, cuma kalo udah rame nunggu agak lama. worth it tho."
  },
  {
    name: "jeno’s breakfast",
    stars: 5,
    text: "bubur + cakwe + telur setengah mateng = combo juara 😭"
  },
  {
    name: "Rangga Pratama",
    stars: 4,
    text: "Rasanya enak dan konsisten, hanya saja tempatnya cukup ramai saat jam sarapan."
  },
  {
    name: "keluargapagi",
    stars: 5,
    text: "Kami sering sarapan di sini bersama keluarga, semua suka karena rasanya ringan."
  },
  {
    name: "laparbangun",
    stars: 5,
    text: "ini bubur yang bikin bangun tidur langsung niat makan."
  },
  {
    name: "Aurelia Tan",
    stars: 4,
    text: "Buburnya enak dan topping lengkap, akan lebih nyaman jika tempatnya lebih luas."
  },
  {
    name: "tim_bubur_diaduk",
    stars: 5,
    text: "mau diaduk atau ga diaduk tetep enak. buburnya konsisten parah."
  },
],

  "sincere-cafe": [
  {
    name: "latteandvibes",
    stars: 5,
    text: "kopinya enak, ga terlalu asam. tempatnya adem, vibesnya tenang."
  },
  {
    name: "jaemin’s coffee date",
    stars: 5,
    text: "ke sini sore-sore enak banget. kopi + cahaya matahari = aesthetic."
  },
  {
    name: "Clara Novita",
    stars: 5,
    text: "Pelayanannya ramah dan suasananya nyaman untuk mengobrol lama."
  },
  {
    name: "workfromcafe",
    stars: 4,
    text: "wifi aman, colokan ada. cuma kalo rame agak berisik dikit."
  },
  {
    name: "anakmanis",
    stars: 5,
    text: "dessertnya enak, ga kemanisan. matcha sama coklatnya juara."
  },
  {
    name: "Dimas Prakoso",
    stars: 4,
    text: "Kopi berkualitas dan suasana tenang, hanya saja parkir agak terbatas."
  },
  {
    name: "keluargasantai",
    stars: 5,
    text: "Tempatnya nyaman untuk duduk santai bersama keluarga."
  },
  {
    name: "senjacoffeeclub",
    stars: 5,
    text: "dateng pas sore tuh paling pas. tenang, ga berisik, chill banget."
  },
  {
    name: "Reina L.",
    stars: 4,
    text: "Menu variatif dan rasanya enak, semoga ke depannya bisa tambah menu."
  },
  {
    name: "kopihujan",
    stars: 5,
    text: "tempat ngopi yang bikin pengen diem lama-lama."
  }
],

  "richeese-factory": [
  {
    name: "pecintapedes",
    stars: 5,
    text: "level pedesnya beneran nampol 😭 saus kejunya guilty pleasure banget."
  },
  {
    name: "MarkLeeEats",
    stars: 5,
    text: "ayamnya crispy, sausnya keju + pedes tuh combo ga gagal."
  },
  {
    name: "Rani Putri",
    stars: 4,
    text: "Rasanya konsisten dan porsinya cukup mengenyangkan."
  },
  {
    name: "anakkampuslapar",
    stars: 5,
    text: "abis kelas langsung ke sini tuh solusi. kenyang, pedes, bahagia."
  },
  {
    name: "keluargakuliner",
    stars: 4,
    text: "Cocok untuk makan bersama keluarga, pilihan menunya cukup beragam."
  },
  {
    name: "pedesdaily",
    stars: 5,
    text: "ini tempat langganan kalo lagi pengen pedes + keju."
  },
  {
    name: "Fajar Nugraha",
    stars: 4,
    text: "Pelayanan cukup cepat, hanya saja kadang ramai saat jam makan."
  },
  {
    name: "cheeselover99",
    stars: 5,
    text: "saus kejunya ga pelit. worth it banget."
  },
  {
    name: "Nadya A.",
    stars: 4,
    text: "Ayamnya enak dan renyah, mungkin bisa ditambah variasi menu."
  },
  {
    name: "midnightmunch",
    stars: 5,
    text: "malem-malem makan richeese tuh mood booster."
  }
],

  "nara-park": [
  {
    name: "healingdulu",
    stars: 5,
    text: "tempatnya adem, tenang, cocok buat healing tipis-tipis 🌿."
  },
  {
    name: "jaehyun's gf",
    stars: 5,
    text: "vibesnya cakep banget buat foto, makan sambil lihat hijau-hijau tuh damai."
  },
  {
    name: "Ayu Prameswari",
    stars: 4,
    text: "Suasana nyaman dan cocok untuk berkumpul bersama keluarga."
  },
  {
    name: "nongkrongcantik",
    stars: 5,
    text: "ini tempat kalo mau ngobrol lama tanpa berisik. calming banget."
  },
  {
    name: "Budi Santoso",
    stars: 4,
    text: "Pelayanan baik dan area cukup luas, hanya parkiran agak penuh saat weekend."
  },
  {
    name: "latteandpeace",
    stars: 5,
    text: "kopinya enak, suasananya juara. betah duduk lama."
  },
  {
    name: "familytrip.id",
    stars: 4,
    text: "Anak-anak nyaman, tempat bersih, dan banyak pilihan tenant."
  },
  {
    name: "anakarsitektur",
    stars: 5,
    text: "konsep bangunannya estetik banget, rapi dan modern."
  },
  {
    name: "Maya K.",
    stars: 4,
    text: "Makanannya enak, mungkin harga sedikit premium tapi sebanding dengan suasana."
  },
  {
    name: "sorevibes",
    stars: 5,
    text: "dateng sore-sore tuh paling pas, anginnya enak banget."
  }
],

 "ayam-sari": [
  {
    name: "ayamislife",
    stars: 5,
    text: "ayamnya juicy, bumbunya nyerep banget. sambalnya nagih parah."
  },
  {
    name: "Raka Pradipta",
    stars: 4,
    text: "Rasanya konsisten dari dulu, cocok buat makan bareng keluarga."
  },
  {
    name: "jaeminluv",
    stars: 5,
    text: "ini ayam tuh aman buat semua selera, ga pernah gagal."
  },
  {
    name: "Sulastri28",
    stars: 5,
    text: "Ayamnya empuk dan bumbunya pas, anak-anak juga suka."
  },
  {
    name: "kulinerbandung",
    stars: 4,
    text: "porsinya pas, sambalnya mantap, cuma agak rame pas jam makan siang."
  },
  {
    name: "anaklapar",
    stars: 5,
    text: "jujur ini comfort food sih, makan langsung kenyang dan puas."
  },
  {
    name: "Dimas A.",
    stars: 4,
    text: "Pelayanan cepat dan tempat cukup bersih, recommended."
  },
  {
    name: "pecintasambal",
    stars: 5,
    text: "sambalnya juara, pedesnya nampol tapi masih enak."
  },
  {
    name: "makanhemat",
    stars: 4,
    text: "Harga masih oke buat kualitas ayam dan rasa."
  },
  {
    name: "weekdaylunch",
    stars: 5,
    text: "paling pas buat makan siang, cepet, enak, kenyang."
  }
],

  "batagor-kahuripan": [
  {
    name: "batagorenthusiast",
    stars: 5,
    text: "batagornya crispy di luar tapi dalemnya lembut, bumbu kacangnya juara."
  },
  {
    name: "Naufal Ramadhan",
    stars: 4,
    text: "rasanya enak dan konsisten, cocok buat ngemil sore."
  },
  {
    name: "jaehyunbias",
    stars: 5,
    text: "jujur ini batagor tuh comfort food banget, sekali makan pengen nambah."
  },
  {
    name: "Ratna Fadia",
    stars: 5,
    text: "Batagornya gurih dan tidak terlalu berminyak, cocok untuk keluarga."
  },
  {
    name: "kulinerbandung",
    stars: 4,
    text: "bumbu kacangnya kental dan gurih, hanya saja tempatnya agak ramai."
  },
  {
    name: "laparbanget",
    stars: 5,
    text: "saus kacangnya nagih parah, pedesnya pas."
  },
  {
    name: "Rizky F.",
    stars: 4,
    text: "pelayanan cepat walaupun rame, masih worth it."
  },
  {
    name: "ngemilcantik",
    stars: 5,
    text: "batagornya fresh, rasanya klasik tapi tetep enak."
  },
  {
    name: "fooddiary.id",
    stars: 4,
    text: "tekstur batagor oke, porsinya cukup buat satu orang."
  },
  {
    name: "sianglapar",
    stars: 5,
    text: "makan di sini tuh ga pernah gagal, rasanya konsisten."
  }
],

  "cerita-manis": [
  {
    name: "sweettoothclub",
    stars: 5,
    text: "dessertnya lucu-lucu dan rasanya enak, manisnya pas ga bikin eneg."
  },
  {
    name: "jaehyun's gf",
    stars: 5,
    text: "ini tempat manis-manis yang aman banget kalo lagi pengen dessert 😭"
  },
  {
    name: "Sari Handayani",
    stars: 5,
    text: "Makanannya enak dan penyajiannya cantik, cocok untuk keluarga."
  },
  {
    name: "dessertdiary.id",
    stars: 4,
    text: "menu dessert variatif, minumannya juga segar."
  },
  {
    name: "ngopipelan",
    stars: 4,
    text: "tempatnya kecil tapi homey, enak buat duduk lama."
  },
  {
    name: "matchalover",
    stars: 5,
    text: "aku suka banget dessertnya, rasanya ringan dan ga berlebihan."
  },
  {
    name: "Rizky P.",
    stars: 4,
    text: "rasanya enak, cuma kalo rame agak susah dapet tempat duduk."
  },
  {
    name: "anakcemalcemil",
    stars: 5,
    text: "presentation dessertnya cakep, fotogenik juga."
  },
  {
    name: "kulinercihapit",
    stars: 4,
    text: "pelayanan ramah dan cepat, overall recommended."
  }
],

  "bien-patisserie": [
  {
    name: "croissantaddict",
    stars: 5,
    text: "croissantnya flaky banget, buttery tapi ga bikin eneg. nagih."
  },
  {
    name: "Nadia Putri",
    stars: 5,
    text: "kue-kue di sini rasanya konsisten dan fresh, cocok buat acara keluarga."
  },
  {
    name: "joshua's gf",
    stars: 4,
    text: "pastry-nya enak banget tapi cepet abis kalo dateng agak siang 😭"
  },
  {
    name: "Andi Pratama",
    stars: 5,
    text: "Pelayanannya ramah dan kualitas rotinya sangat baik."
  },
  {
    name: "ngopidikit",
    stars: 4,
    text: "kopinya oke, pastry-nya juara. tempatnya juga bersih."
  },
  {
    name: "anakroti",
    stars: 5,
    text: "ini salah satu patisserie favorit di bandung sih, ga pernah gagal."
  },
  {
    name: "dessertdiary.id",
    stars: 5,
    text: "varian pastry lengkap, teksturnya pas semua."
  },
  {
    name: "Rafi K.",
    stars: 4,
    text: "rasanya enak, cuma tempat duduknya terbatas kalo lagi rame."
  },
  {
    name: "coupledate",
    stars: 5,
    text: "enak buat brunch tipis-tipis bareng pasangan."
  },
  {
    name: "kulinercihapit",
    stars: 4,
    text: "harga sebanding sama kualitas, recommended."
  }
],

  "dimsum-ayam": [
  {
    name: "dimsumhunter",
    stars: 5,
    text: "dimsumnya juicy banget, ayamnya kerasa, sausnya juga mantap."
  },
  {
    name: "jaeratorium",
    stars: 4,
    text: "enak parah buat ngemil sore, chili oil-nya nagih 😭"
  },
  {
    name: "Rina Maharani",
    stars: 5,
    text: "Cocok untuk makan bersama keluarga, porsinya cukup dan rasanya konsisten."
  },
  {
    name: "anakjajan",
    stars: 4,
    text: "hakau sama siomay ayamnya favorit sih."
  },
  {
    name: "Riskie Roni",
    stars: 4,
    text: "rasanya enak, cuma kalo jam rame harus agak sabar nunggu."
  },
  {
    name: "kulinerbandung.id",
    stars: 5,
    text: "tekstur dimsum lembut, ga bau ayam sama sekali."
  },
  {
    name: "ngidamdimsum",
    stars: 5,
    text: "dimsum ayamnya juicy, kulitnya ga tebel."
  },
  {
    name: "Mama Dini",
    stars: 5,
    text: "Anak-anak suka sekali, cocok untuk keluarga."
  },
  {
    name: "streetfoodluv",
    stars: 4,
    text: "sausnya enak, tinggal ditambah varian aja biar makin lengkap."
  },
  {
    name: "laparlagi",
    stars: 5,
    text: "murah, enak, ngenyangin. ga heran rame."
  }
],

  "sate-bu-ngantuk": [
  {
    name: "anakjajanmalem",
    stars: 5,
    text: "satenya empuk banget, bumbunya berasa"
  },
  {
    name: "jaemin's wife",
    stars: 4,
    text: "sate ayamnya juara sih, apalagi dimakan panas-panas."
  },
  {
    name: "laparjam11",
    stars: 5,
    text: "dateng udah malem tapi masih rame, worth it ternyata."
  },
  {
    name: "kulinerbandung",
    stars: 4,
    text: "porsinya cukup, rasa konsisten dari dulu."
  },
  {
    name: "Nabila Azzahra",
    stars: 4,
    text: "enak, pelayanan cepat juga"
  },
  {
    name: "Mama Rika",
    stars: 5,
    text: "Sate kambingnya tidak bau, cocok untuk keluarga."
  },
  {
    name: "jajanmalamsquad",
    stars: 4,
    text: "enak makan sore-sore, cuma tempat duduk minim"
  },
  {
    name: "Fajar Pratama",
    stars: 5,
    text: "sate ayamnya juicy, lontongnya juga pas."
  }
],

  "sedjuk-kopi": [
  {
    name: "anakmiejam10",
    stars: 5,
    text: "bakminya simple tapi nagih, tekstur mienya pas banget."
  },
  {
    name: "jeno's gf",
    stars: 5,
    text: "mie ayamnya tuh comforting parah, cocok buat makan sendiri."
  },
  {
    name: "kopimalam",
    stars: 4,
    text: "kopinya enak, ga terlalu asam. pas buat nemenin bakmi."
  },
  {
    name: "Bapak Agus Santoso",
    stars: 5,
    text: "Bakmi dan kopinya seimbang, tempatnya juga nyaman."
  },
  {
    name: "laparmalamhari",
    stars: 4,
    text: "enak tapi kalo rame agak lama nunggu."
  },
  {
    name: "Nadia Prameswari",
    stars: 5,
    text: "bakmi ayamnya gurih, porsi cukup bikin kenyang."
  },
  {
    name: "anaknongkrong",
    stars: 5,
    text: "vibesnya tenang, enak buat ngobrol santai sambil ngopi."
  },
  {
    name: "Mama Dini",
    stars: 4,
    text: "Rasanya cocok untuk semua usia, tidak terlalu berbumbu."
  },
  {
    name: "kulinerweekend",
    stars: 5,
    text: "mie nya kenyal, toppingnya ga pelit."
  },
  {
    name: "Reza Fathur",
    stars: 4,
    text: "tempatnya adem, cuma parkir agak terbatas."
  }
],

  "sultan-agung": [
  {
    name: "anakrumahan",
    stars: 5,
    text: "menu nusantaranya lengkap, rasanya konsisten dari dulu."
  },
  {
    name: "keluargabahagia_4",
    stars: 5,
    text: "sering makan bareng keluarga di sini, porsinya pas buat rame-rame."
  },
  {
    name: "Rina Kartikasari",
    stars: 4,
    text: "makanannya enak, suasananya juga nyaman."
  },
  {
    name: "makanmalem",
    stars: 5,
    text: "ayam goreng sama sambelnya juara sih, nagih."
  },
  {
    name: "Bapak Hendra Wijaya",
    stars: 5,
    text: "Tempatnya luas dan bersih, cocok untuk acara keluarga."
  },
  {
    name: "anaklapar24",
    stars: 4,
    text: "rasanya oke, cuma kalo weekend rame banget."
  },
  {
    name: "Ayu Pramitha",
    stars: 5,
    text: "menu tradisionalnya berasa rumahan, cocok buat orang tua juga."
  },
  {
    name: "foodhunter.id",
    stars: 4,
    text: "pilihan menu banyak, pelayanan cukup cepat."
  },
  {
    name: "tummytalk",
    stars: 5,
    text: "sambelnya mantap, lauknya ga pelit."
  },
  {
    name: "Pak Darto",
    stars: 4,
    text: "Masakannya enak, hanya parkir agak terbatas."
  }
],

  "woi-supertiam": [
  {
    name: "rotisusu",
    stars: 4,
    text: "rotinya lembut, butter sama susunya berasa."
  },
  {
    name: "anakbrunch",
    stars: 4,
    text: "menu simpel tapi nagih, cocok buat sarapan santai."
  },
  {
    name: "Nadia Putri",
    stars: 4,
    text: "kopinya enak, tapi tempatnya lumayan rame."
  },
  {
    name: "laparpagi",
    stars: 4,
    text: "supertiam nya konsisten, rasa gak pernah aneh."
  },
  {
    name: "kopipagi",
    stars: 4,
    text: "minuman oke, roti panggangnya pas gak terlalu kering."
  },
  {
    name: "jajanbandung",
    stars: 4,
    text: "pelayanan lumayan cepat walau rame."
  },
  {
    name: "sarapanaman",
    stars: 4,
    text: "menu aman buat semua umur."
  },
  {
    name: "Raka Wijaya",
    stars: 3,
    text: "rame di jam tertentu, jadi agak lama nunggu."
  },
  {
    name: "toastlover",
    stars: 4,
    text: "butter sugar nya simple tapi enak."
  },
  {
    name: "sianglapar",
    stars: 4,
    text: "cocok buat makan ringan, jangan expect berat."
  }
],

  "boemi-mitoha": [
  {
    name: "laparbanget",
    stars: 4,
    text: "sambalnya enak dan pedesnya pas, cocok buat makan siang."
  },
  {
    name: "Dian Prameswari",
    stars: 4,
    text: "Masakan Sunda nya autentik, rasanya konsisten."
  },
  {
    name: "anakrumahan",
    stars: 4,
    text: "menu banyak dan cocok buat makan bareng keluarga."
  },
  {
    name: "nasihangat",
    stars: 4,
    text: "ikan gorengnya gurih, lalapannya cukup fresh."
  },
  {
    name: "Budi Santoso",
    stars: 4,
    text: "Porsi cukup, harga masih masuk akal."
  },
  {
    name: "kulinerbandung",
    stars: 4,
    text: "tempat makan Sunda yang aman dan konsisten."
  },
  {
    name: "ibu2review",
    stars: 4,
    text: "pelayanan cepat, tempatnya bersih."
  },
  {
    name: "sianglapar",
    stars: 3,
    text: "rame pas jam makan siang, jadi agak nunggu."
  },
  {
    name: "Aldo Putra",
    stars: 4,
    text: "sambalnya enak tapi porsinya standar."
  },
  {
    name: "makansiangterus",
    stars: 4,
    text: "menu klasik, rasanya oke dan konsisten."
  }
],

  "tji-laki": [
  {
    name: "bananaenthusiast",
    stars: 4,
    text: "bolu pisangnya moist banget, legit dan gak bikin enek."
  },
  {
    name: "anakngemil",
    stars: 4,
    text: "wajib sabar sih, ngantrinya lumayan, tapi rasanya emang worth it."
  },
  {
    name: "Dewi Anggraini",
    stars: 4,
    text: "bolu pisangnya lembut dan cocok untuk oleh-oleh keluarga."
  },
  {
    name: "laparjamempat",
    stars: 4,
    text: "teksturnya pas, manisnya gak berlebihan."
  },
  {
    name: "jaehyunbiased",
    stars: 4,
    text: "dateng sore rame banget, tapi bolunya fresh semua."
  },
  {
    name: "pecintabolupisang",
    stars: 5,
    text: "ini bolu pisang favorit aku sih, wanginya aja udah bikin lapar."
  },
  {
    name: "anaksore",
    stars: 4,
    text: "harus dateng lebih pagi kalo gak mau ngantri lama."
  },
  {
    name: "Rizky Pradana",
    stars: 4,
    text: "rasanya konsisten dari dulu, cuma emang rame terus."
  },
  {
    name: "cemalcemil",
    stars: 3,
    text: "bolunya enak, tapi ngantrinya bisa cukup lama pas weekend."
  },
  {
    name: "keluargajajan",
    stars: 4,
    text: "sering beli buat dibawa pulang, selalu habis cepat di rumah."
  }
],

 "sate-mas-pendi": [
  {
    name: "anakjajanmalam",
    stars: 5,
    text: "satenya empuk banget, bumbu kacangnya medok dan gurih."
  },
  {
    name: "Rafi Pratama",
    stars: 4,
    text: "sate ayamnya enak, tapi menurut aku paling juara tuh bumbunya."
  },
  {
    name: "laperjamsebelas",
    stars: 4,
    text: "dateng agak malam rame, tapi servis masih cepet."
  },
  {
    name: "Dinda Maharani",
    stars: 5,
    text: "lontongnya pas, sate gak kering sama sekali."
  },
  {
    name: "penggemarsate",
    stars: 4,
    text: "porsinya cukup ngenyangin, cocok buat makan malam."
  },
  {
    name: "anakrumahan",
    stars: 4,
    text: "rasanya konsisten dari dulu, khas sate Bandung."
  },
  {
    name: "makanenakaja",
    stars: 5,
    text: "sate kambingnya gak bau, empuk dan bumbunya nempel."
  },
  {
    name: "keluargalapar",
    stars: 4,
    text: "sering makan rame-rame keluarga, semuanya suka."
  },
  {
    name: "fadilngopi",
    stars: 3,
    text: "enak sih, cuma pas rame nunggu agak lama."
  },
  {
    name: "cemalcemilbandung",
    stars: 4,
    text: "kalau lagi pengen sate yang aman dan enak, ini pilihan pasti."
  }
],

"kupat-tahu": [
  {
    name: "jajanjalanbandung",
    stars: 5,
    text: "bumbu kacangnya legit parah, manis gurihnya pas banget."
  },
  {
    name: "anaklaper",
    stars: 4,
    text: "rasanya enak banget sih, cuma rame parah harus sabar ngantri."
  },
  {
    name: "Nabila Rahmawati",
    stars: 4,
    text: "kupat tahunya lembut, bumbunya khas dan konsisten."
  },
  {
    name: "cemalcemil",
    stars: 4,
    text: "dateng siang rame banget, tapi rasanya emang sebanding."
  },
  {
    name: "keluargajajan",
    stars: 4,
    text: "cocok buat makan bareng keluarga, porsinya ngenyangin."
  },
  {
    name: "laparjamduabelas",
    stars: 3,
    text: "enak, tapi tempatnya sempit dan ngantrinya lumayan bikin capek."
  },
  {
    name: "bandungfoodstory",
    stars: 5,
    text: "bumbu kacangnya khas banget, susah nyari yang mirip."
  },
  {
    name: "anakpasundan",
    stars: 4,
    text: "kalau gak rame mungkin bisa 5, tapi overall rasanya top."
  },
  {
    name: "makanpakehati",
    stars: 4,
    text: "pelayanannya cepet walau rame, itu poin plus."
  },
  {
    name: "randomfoodie",
    stars: 3,
    text: "harus datang lebih pagi biar gak ngantri lama."
  }
],

 "nolda-pocha": [
  {
    name: "anakpocha",
    stars: 4,
    text: "vibes pojangmacha dapet banget, cocok nongkrong ramean."
  },
  {
    name: "jaehyunbias",
    stars: 5,
    text: "tteokbokkinya pedes nagih, porsi pas buat sharing."
  },
  {
    name: "Raka Pradana",
    stars: 4,
    text: "menunya variatif dan rasanya konsisten, cuma rame di jam malem."
  },
  {
    name: "hangoutmalam",
    stars: 4,
    text: "enak buat nongkrong, tapi nunggu makanan agak lama."
  },
  {
    name: "keluargakuliner",
    stars: 4,
    text: "anak-anak suka, rasanya aman dan gak aneh."
  },
  {
    name: "lapermalam",
    stars: 3,
    text: "dateng weekend rame banget, harus sabar nunggu."
  },
  {
    name: "seoulvibes",
    stars: 5,
    text: "ramyeonnya mantap, kuahnya gurih pedes pas."
  },
  {
    name: "fooddiary.id",
    stars: 4,
    text: "tempatnya cozy tapi agak sempit kalo lagi penuh."
  },
  {
    name: "nongkrongtipis",
    stars: 4,
    text: "kalau gak rame, betah lama-lama di sini."
  },
  {
    name: "randomdiner",
    stars: 3,
    text: "rasanya oke, tapi sistem antriannya bisa diperbaiki."
  }
],

 "batagor-kingsley": [
  {
    name: "kulineranbandung",
    stars: 5,
    text: "ini batagor legenda sih, dari dulu rasanya gak berubah."
  },
  {
    name: "anaklapar",
    stars: 4,
    text: "saus kacangnya juara, gurihnya dapet banget."
  },
  {
    name: "Dimas Ardiansyah",
    stars: 4,
    text: "tekstur batagornya pas, ikannya kerasa."
  },
  {
    name: "mamamcantik",
    stars: 5,
    text: "setiap ke bandung pasti mampir ke sini."
  },
  {
    name: "keluargajajan",
    stars: 4,
    text: "anak-anak suka, tapi rame kalo jam siang."
  },
  {
    name: "snackhunter",
    stars: 3,
    text: "enak, cuma harganya sekarang agak mahal."
  },
  {
    name: "BandungFoodTrip",
    stars: 4,
    text: "porsinya oke, cocok buat sharing."
  },
  {
    name: "randomreviewer",
    stars: 4,
    text: "kalau gak ngantri, makannya jadi lebih nikmat."
  },
  {
    name: "streetfoodvibes",
    stars: 5,
    text: "saus kacang + jeruk nipisnya top tier."
  },
  {
    name: "jajanafteroffice",
    stars: 4,
    text: "pas buat cemal-cemil sore, tapi parkir agak susah."
  }
],

  "kedai-oifyoo": [
  {
    name: "cilokloverss",
    stars: 4,
    text: "cilok kuah dagingnya enak sih, kuahnya gurih pedesnya dapet. porsinya lumayan buat ngemil sore."
  },
  {
    name: "anak frozen food",
    stars: 4,
    text: "cireng mozzarella isi juaraaa pas digoreng 😭 kejunya lumer. tapi harus cepet dimakan biar ga keras."
  },
  {
    name: "jaemin eats",
    stars: 4,
    text: "corn dog mozzarella isi 2 favorit aku. luarnya crunchy, dalemnya lembut. cuma kalo udah agak dingin kejunya berasa kurang stretch."
  },
  {
    name: "bundasuka ngemil",
    stars: 4,
    text: "anak-anak di rumah suka banget mac n cheese sama cheesy potato. rasanya creamy, cocok buat camilan keluarga."
  },
  {
    name: "mager masak club",
    stars: 4,
    text: "lumpia pizza isi 7 praktis buat stok di freezer. rasanya oke, tapi kalo dipanggang harus pas biar ga kering."
  },
  {
    name: "raka.frozen",
    stars: 4,
    text: "mozzyga originalnya enak dan gurih, cocok buat cemal-cemil. tapi rasanya standar, ga yang wow banget."
  },
  {
    name: "nindy kulineran",
    stars: 3,
    text: "menunya unik-unik, cuma pas rame responnya agak lama. overall masih oke sih buat frozen food."
  }
],

"tsukamie-noodle": [
  {
    name: "miejam12malem",
    stars: 5,
    text: "mie-nya legit banget, teksturnya dapet. makan malem di sini tuh vibes-nya dapet."
  },
  {
    name: "anaknongkrongbandung",
    stars: 4,
    text: "tempatnya cozy, cocok buat nongkrong lama sambil ngemil."
  },
  {
    name: "raka_pratama",
    stars: 5,
    text: "mie pedesnya juara, rasanya bold tapi gak bikin enek."
  },
  {
    name: "afterworkmood",
    stars: 4,
    text: "enak buat abis kerja, cuma kadang rame banget."
  },
  {
    name: "ngidamramen",
    stars: 5,
    text: "kuahnya rich tapi gak berat, mie-nya juga kenyal."
  },
  {
    name: "anakbarlaper",
    stars: 4,
    text: "minuman oke, mie enak, cuma harga agak premium."
  },
  {
    name: "keluargajajan",
    stars: 4,
    text: "rasa cocok buat banyak umur, walau konsepnya lebih ke anak muda."
  },
  {
    name: "latebiteclub",
    stars: 5,
    text: "sering ke sini malem, selalu puas sama rasanya."
  },
  {
    name: "reviewjujuraja",
    stars: 4,
    text: "bukan mie paling murah, tapi kualitasnya konsisten."
  },
  {
    name: "foodhunter.id",
    stars: 5,
    text: "salah satu spot mie yang wajib dicoba di Bandung."
  }
],

"yabe-izakaya": [
  {
    name: "afterofficebbq",
    stars: 5,
    text: "yakitorinya enak banget, smoky-nya dapet. cocok buat abis kerja."
  },
  {
    name: "anakpaskal",
    stars: 4,
    text: "tempatnya cozy dan vibes Jepang-nya kerasa, cuma suka rame."
  },
  {
    name: "sashimilover",
    stars: 5,
    text: "sashiminya fresh, potongannya juga oke."
  },
  {
    name: "nongkrongmalem",
    stars: 4,
    text: "minumannya variatif, enak buat nongkrong lama."
  },
  {
    name: "jaehyun’s bestie",
    stars: 5,
    text: "jujur ini salah satu izakaya paling aman di Bandung."
  },
  {
    name: "keluargamakan",
    stars: 4,
    text: "rasa cocok di lidah, tapi lebih pas buat nongkrong daripada makan berat."
  },
  {
    name: "reviewjujuraja",
    stars: 4,
    text: "makanannya enak, cuma kadang harus nunggu agak lama pas rame."
  },
  {
    name: "anakbarbandung",
    stars: 5,
    text: "menu grill-nya juara, bumbunya pas."
  },
  {
    name: "weekendvibes",
    stars: 4,
    text: "rame banget kalo weekend, tapi servicenya masih oke."
  },
  {
    name: "foodhunter.id",
    stars: 5,
    text: "spot izakaya favorit di area Paskal."
  }
],

  "blue-turtle": [
  {
    name: "ayamcrispyaddict",
    stars: 5,
    text: "ayamnya crispy banget, sausnya nendang. makan pake nasi anget tuh bahagia."
  },
  {
    name: "anakpalasari",
    stars: 4,
    text: "porsinya oke, rasanya konsisten. cuma kadang rame."
  },
  {
    name: "friedchickenclub",
    stars: 4,
    text: "kulit ayamnya crunchy, dalemnya masih juicy."
  },
  {
    name: "jaehyun’s gf",
    stars: 5,
    text: "jujur ini salah satu ayam crispy favorit aku di Bandung 😭"
  },
  {
    name: "makanbarengkeluarga",
    stars: 4,
    text: "cocok buat makan rame-rame, rasanya bisa diterima semua umur."
  },
  {
    name: "reviewjujuraja",
    stars: 4,
    text: "enak, cuma tempatnya ga terlalu besar."
  },
  {
    name: "sauslover",
    stars: 5,
    text: "sausnya tuh juara sih, ga pelit dan rasanya pas."
  },
  {
    name: "kulinerweekend",
    stars: 4,
    text: "worth it buat dicoba, tapi kalo lagi rame harus sabar nunggu."
  },
  {
    name: "anaklapar",
    stars: 4,
    text: "ayamnya gede, bumbunya berasa. bakal repeat."
  },
  {
    name: "nongkrongnyemil",
    stars: 5,
    text: "cocok buat makan sore-sore, nagih parah."
  }
],
};

function openDetail(card) {
  const id = card.dataset.id;

  document.getElementById("detailModal").classList.remove("hidden");
  document.getElementById("detailName").innerText = card.dataset.name;
  document.getElementById("detailLocation").innerText = "📍 " + card.dataset.location;
  document.getElementById("detailRating").innerText = card.dataset.rating;
  document.getElementById("detailImage").src = card.dataset.image;

  const reviewList = document.querySelector(".review-list");
  reviewList.innerHTML = ""; // reset dulu

  const reviews = reviewData[id] || [];

  reviews.forEach(r => {
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `
      <strong>${r.name}</strong> ${"⭐".repeat(r.stars)}
      <p>${r.text}</p>
    `;
    reviewList.appendChild(div);
  });

  document.getElementById("detailModal").classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeDetail() {
  document.getElementById("detailModal").classList.add("hidden");
  document.body.classList.remove("modal-open");
}
