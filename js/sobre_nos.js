document.addEventListener("DOMContentLoaded", () => {
  const carouselItems = document.querySelector(".carousel-items");
  const items = document.querySelectorAll(".carousel-item");
  let index = 0;

  function showNextItem() {
    index = (index + 1) % items.length;
    carouselItems.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(showNextItem, 5000); // Muda o item a cada 5 segundos
});
