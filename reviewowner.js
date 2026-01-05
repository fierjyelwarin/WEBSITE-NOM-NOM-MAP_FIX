const buttons = document.querySelectorAll('.mini-btn');
const popup = document.getElementById('replyPopup');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.review-mini');
    const input = card.querySelector('.mini-input');
    const replyBox = card.querySelector('.owner-reply');
    const replyText = card.querySelector('.owner-text');
    const editBtn = card.querySelector('.edit-btn'); // Ambil referensi tombol edit

    if (!input || !replyBox || !replyText) {
      console.error('Struktur HTML salah');
      return;
    }

    // LOGIKA TOMBOL SEND
    if (btn.classList.contains('send-btn')) {
      if (!input.value.trim()) return;

      // Isi teks balasan (akan muncul di bawah nama karena CSS block)
      replyText.textContent = input.value;

      // Tampilkan balasan & sembunyikan input
      replyBox.classList.remove('hidden');
      input.classList.add('hidden'); // Gunakan class hidden, jangan .remove()
      btn.classList.add('hidden'); // Sembunyikan tombol Send
      
      // Munculkan tombol Edit
      if (editBtn) editBtn.classList.remove('hidden');

      // Jalankan popup
      popup.classList.add('show');
      setTimeout(() => {
        popup.classList.remove('show');
      }, 2000);
    }
  });
});

// LOGIKA TOMBOL EDIT (Tambahkan ini)
document.querySelectorAll('.edit-btn').forEach(editBtn => {
  editBtn.addEventListener('click', () => {
    const card = editBtn.closest('.review-mini');
    const input = card.querySelector('.mini-input');
    const sendBtn = card.querySelector('.send-btn');
    const replyBox = card.querySelector('.owner-reply');
    const replyText = card.querySelector('.owner-text');

    // Kembalikan teks ke input untuk diedit
    input.value = replyText.textContent;

    // Tukar tampilan: Munculkan input & Send, sembunyikan Reply & Edit
    input.classList.remove('hidden');
    sendBtn.classList.remove('hidden');
    replyBox.classList.add('hidden');
    editBtn.classList.add('hidden');
    
    input.focus(); // Otomatis fokus ke kotak ketik
  });
});