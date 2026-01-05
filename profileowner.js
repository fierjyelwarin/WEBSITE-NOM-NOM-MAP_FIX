document.addEventListener('DOMContentLoaded', () => {

  // ===== ELEMENTS =====
  const ownerCard = document.getElementById('ownerCard');
  const editOwnerModal = document.getElementById('editOwnerModal');
  const detailOwnerModal = document.getElementById('detailOwnerModal');

  const editOwnerBtn = document.querySelector('.edit-owner');
  const cancelEditOwnerBtn = document.getElementById('closeModalBtn');
  const profileForm = document.getElementById('profileForm');

  const photoInput = document.getElementById('editOwnerPhoto');
  const ownerAvatar = document.querySelector('#ownerCard .owner-profile img');

  // ===== OPEN MODALS =====
  ownerCard.addEventListener('click', () => {
    detailOwnerModal.classList.add('active');
  });

  editOwnerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    editOwnerModal.classList.add('active');
  });

  // ===== CANCEL BUTTON =====
  cancelEditOwnerBtn.addEventListener('click', () => {
    editOwnerModal.classList.remove('active');
  });

  // ===== PHOTO PREVIEW =====
  photoInput.addEventListener('change', () => {
    const file = photoInput.files[0];
    if (file) {
      ownerAvatar.src = URL.createObjectURL(file);
    }
  });

  // ===== SAVE PROFILE =====
  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newName = document.getElementById('editName').value;
    const newEmail = document.getElementById('editEmail').value;
    const newPhone = document.getElementById('editphone').value;

    document.querySelector('#ownerCard .owner-info .name').textContent = newName;
    document.querySelector('#ownerCard .owner-info .email').textContent = newEmail;
    document.getElementById('detailOwnerName').textContent = newName;

    editOwnerModal.classList.remove('active');
  });

});

document.querySelectorAll('.close-x').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const modal = e.target.closest('.modal-overlay');
    if (modal) modal.classList.remove('active');
  });
});

const ownerData = {
  phone: '+628123456789'
};

document.getElementById('editphone').value = ownerData.phone;

// ===== RESTAURANT =====
const restoCard = document.getElementById('restoCard');
const editRestoBtn = document.querySelector('.edit-resto');
const detailRestoModal = document.getElementById('detailRestoModal');
const editRestoModal = document.getElementById('editRestoModal');
const cancelEditResto = document.getElementById('cancelEditResto');
const restoEditForm = document.getElementById('restoEditForm');

// BUKA DETAIL
restoCard.addEventListener('click', () => {
  detailRestoModal.classList.add('active');
});

// BUKA EDIT
editRestoBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  editRestoModal.classList.add('active');
});

// CANCEL
cancelEditResto.addEventListener('click', () => {
  editRestoModal.classList.remove('active');
});

// SAVE
restoEditForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newName = document.getElementById('editRestoName').value;
  const newAddress = document.getElementById('editRestoAddress').value;

  document.getElementById('displayRestoName').textContent = newName;
  document.getElementById('displayRestoAddress').textContent = newAddress;

  document.getElementById('detailName').textContent = newName;
  document.getElementById('detailAddress').textContent = newAddress;

  editRestoModal.classList.remove('active');
});

const restoPhotoInput = document.getElementById('editRestoPhoto');
const restoImage = document.querySelector('#restoCard img');

restoPhotoInput.addEventListener('change', () => {
  const file = restoPhotoInput.files[0];
  if (file) {
    restoImage.src = URL.createObjectURL(file);
  }
});

const editRestoPhotoInput = document.getElementById('editRestoPhoto');
const detailRestoPhoto = document.getElementById('detailRestoPhoto');
const restoCardImage = document.querySelector('#restoCard img');

editRestoPhotoInput.addEventListener('change', () => {
  const file = editRestoPhotoInput.files[0];
  if (file) {
    const url = URL.createObjectURL(file);

    // update card
    restoCardImage.src = url;

    // update detail
    detailRestoPhoto.src = url;
  }
});

// === LOGOUT ===
const logoutBtn = document.getElementById("logoutBtn");
const logoutModal = document.getElementById("logoutModal");
const cancelLogout = document.getElementById("cancelLogout");
const confirmLogout = document.getElementById("confirmLogout");

// buka popup logout
logoutBtn.addEventListener("click", () => {
  logoutModal.classList.add("active");
});

// klik NO → tutup popup, stay di page
cancelLogout.addEventListener("click", () => {
  logoutModal.classList.remove("active");
});

// klik YES → arahkan ke welcome page
confirmLogout.addEventListener("click", () => {
  window.location.href = "WelcomePage.html"; 
  // ganti nama file kalo welcome page kamu beda
});

