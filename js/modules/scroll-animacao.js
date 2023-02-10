export default function initAnimScroll() {
  const section = document.querySelectorAll("[data-anime='scroll']");

  function animaScroll() {
    const windowHeight = window.innerHeight * 0.5;
    section.forEach((item) => {
      const distancia = item.getBoundingClientRect();
      const visibleScroll = distancia.top - windowHeight < 0;
      if (visibleScroll) {
        item.classList.add("ativo");
      } else {
        item.classList.remove("ativo");
      }
    });
  }
  animaScroll();

  window.addEventListener("scroll", animaScroll);
}