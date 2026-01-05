const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  // cek kosong
  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  // validasi email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // cek password sama
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // lolos semua
  localStorage.setItem("isLogin", "true");
  window.location.href = "review.html";
});