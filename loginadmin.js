document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("adminLoginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // biar halaman ga reload

    // (opsional) ambil value input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const adminId = document.getElementById("adminId").value;

    // sementara LANGSUNG MASUK (tanpa validasi)
    window.location.href = "indexadmin.html";
  });

});