const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop submit default

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // cek kosong
  if (email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  // validasi format email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // kalau lolos semua
  localStorage.setItem("isLogin", "true");
  window.location.href = "review.html";
});