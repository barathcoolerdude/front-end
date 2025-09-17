const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

// Open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";  // Show modal
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";  // Hide modal
});

// Optional: Close when clicking outside the modal-content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
