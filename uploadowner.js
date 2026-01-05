function setupUploader(inputId, pickId, tempId, previewId, submitId, hintId) {
  const input = document.getElementById(inputId);
  const pick = document.getElementById(pickId);
  const temp = document.getElementById(tempId);
  const preview = document.getElementById(previewId);
  const submit = document.getElementById(submitId);
  const hint = document.getElementById(hintId);

  let files = [];

  pick.onclick = () => input.click();

  input.onchange = () => {
    Array.from(input.files).forEach(file => {
      files.push(file);

      const reader = new FileReader();
      reader.onload = e => {
        const card = document.createElement("div");
        card.className = "temp-card";
        card.innerHTML = `
          <img src="${e.target.result}">
          <button class="remove-btn">&times;</button>
        `;

        card.querySelector(".remove-btn").onclick = () => {
          const index = [...temp.children].indexOf(card);
          files.splice(index, 1);
          card.remove();
          if (files.length === 0) hint.style.display = "block";
        };

        temp.appendChild(card);
        hint.style.display = "none";
      };
      reader.readAsDataURL(file);
    });

    input.value = "";
  };

  submit.onclick = () => {
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = e => {
        const img = document.createElement("img");
        img.src = e.target.result;
        preview.appendChild(img);
      };
      reader.readAsDataURL(file);
    });

    files = [];
    temp.innerHTML = "";
    hint.style.display = "block";
  };
}

setupUploader("menuInput","menuPick","menuTemp","menuPreview","menuSubmit","menuHint");
setupUploader("restoInput","restoPick","restoTemp","restoPreview","restoSubmit","restoHint");