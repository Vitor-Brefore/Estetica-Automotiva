document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu a");
  const sections = document.querySelectorAll("section");

  // Função para verificar qual seção está na viewport
  function onScroll() {
    let currentSection = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom > 0) {
        currentSection = section;
      }
    });

    if (currentSection) {
      const currentLink = document.querySelector(
        `.menu a[href="#${currentSection.id}"]`
      );

      // Remove a classe 'active' de todos os links
      links.forEach((link) => link.classList.remove("active"));

      // Adiciona a classe 'active' ao link da seção atual
      if (currentLink) {
        currentLink.classList.add("active");
      }
    }
  }

  // Adiciona o evento de rolagem
  window.addEventListener("scroll", onScroll);

  // Evento de clique para links da navbar
  links.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove a classe 'active' de todos os links
      links.forEach((l) => l.classList.remove("active"));

      // Adiciona a classe 'active' ao link clicado
      this.classList.add("active");
    });
  });

  document.getElementById("hamburger").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("active");
  });

  // Chama a função onScroll uma vez para definir a seção ativa inicial
  onScroll();
});
