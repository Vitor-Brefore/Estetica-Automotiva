document.querySelectorAll(".service-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("flip");
  });
});
