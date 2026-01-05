// proteksi page
if (localStorage.getItem("isLogin") !== "true") {
  window.location.href = "login.html";
}

let rating = 0;

function setRating(value) {
  rating = value;
  document.querySelectorAll(".star").forEach((star, index) => {
    star.classList.toggle("active", index < value);
  });
}

function submitReview() {
  const reviewText = document.getElementById("reviewText").value;

  if (reviewText.trim() === "") {
    alert("Please write a review ✍️");
    return;
  }

  document.getElementById("reviewForm").style.display = "none";
  document.getElementById("reviewSuccess").style.display = "block";
}

function backToDashboard() {
  window.location.href = "rating.html";
}

