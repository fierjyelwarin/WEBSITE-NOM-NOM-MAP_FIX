document.addEventListener("DOMContentLoaded", function () {

    const adminBtn = document.getElementById("btn-admin");
    const userBtn  = document.getElementById("btn-user");
    const ownerBtn  = document.getElementById("btn-owner");

    // ke LOGIN ADMIN
    adminBtn.addEventListener("click", function () {
        window.location.href = "loginadmin.html";
    });

    // ke LOGIN / DASHBOARD USER
    userBtn.addEventListener("click", function () {
        window.location.href = "index.html"; 
        // atau index.html (sesuai punyamu)
    });

    // ke LOGIN / DASHBOARD OWNER
    ownerBtn.addEventListener("click", function () {
        window.location.href = "loginowner.html"; 
        // atau index.html (sesuai punyamu)
    });

});