document.addEventListener("DOMContentLoaded", function() {
    const multiselect = document.querySelector(".multiselect");
    const selectBox = document.getElementById("selectBox");
    const checkboxes = document.getElementById("checkboxes");
    const selectedText = document.querySelector(".selected-text");

    selectBox.addEventListener("click", () => {
      multiselect.classList.toggle("active");
    });

    checkboxes.addEventListener("change", () => {
      const selected = Array.from(
        checkboxes.querySelectorAll("input:checked")
      ).map(cb => cb.value);
      
      selectedText.textContent = selected.length
        ? selected.join(", ")
        : "Selecione as disciplinas...";
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".multiselect")) {
        multiselect.classList.remove("active");
      }
    });
  });