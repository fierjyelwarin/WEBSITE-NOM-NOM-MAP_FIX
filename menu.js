document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua kartu
    const allCards = document.querySelectorAll('.card');

    allCards.forEach(card => {
        // Ambil elemen di dalam setiap kartu secara spesifik
        const btnMenu = card.querySelector('.section-menu');
        const btnRingkasan = card.querySelector('.divider');
        const contentRingkasan = card.querySelector('.info-list');
        const contentMenu = card.querySelector('.menu-list-content');
        
        const fileInput = card.querySelector('input[type="file"]');
        const uploadBox = card.querySelector('.upload-box');
        const gallery = card.querySelector('.menu-grid');

        // 1. LOGIKA PINDAH TAB
        if (btnMenu && contentMenu && contentRingkasan) {
            btnMenu.onclick = function() {
                contentRingkasan.style.display = 'none'; // Sembunyikan Alamat/Telp
                contentMenu.style.display = 'block';    // Munculkan Menu/Upload
            };
        }

        if (btnRingkasan && contentMenu && contentRingkasan) {
            btnRingkasan.onclick = function() {
                contentMenu.style.display = 'none';      // Sembunyikan Menu
                contentRingkasan.style.display = 'block'; // Munculkan Alamat/Telp
            };
        }

        // 2. LOGIKA UPLOAD GAMBAR
        if (uploadBox && fileInput) {
            uploadBox.onclick = () => fileInput.click();

            fileInput.onchange = function() {
                Array.from(this.files).forEach(file => {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        // Kasih style biar gambarnya rapi di grid
                        img.style.width = "100%";
                        img.style.aspectRatio = "1/1";
                        img.style.objectFit = "cover";
                        img.style.borderRadius = "8px";
                        gallery.appendChild(img);
                    }
                    reader.readAsDataURL(file);
                });
            };
        }
    });
});