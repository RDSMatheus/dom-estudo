import initAnimaNumeros from "./anima-numeros.js";
export default function initAnimScroll() {
  const section = document.querySelectorAll("[data-anime='scroll']");

  function animaScroll() {
    const windowHeight = window.innerHeight * 0.6;
    section.forEach((item) => {
      const distancia = item.getBoundingClientRect();
      const visibleScroll = distancia.top - windowHeight < 0;
      if (visibleScroll) {
        item.classList.add("ativo");
      } else if(item.classList.contains("ativo")) {
        item.classList.remove("ativo");
      }
    });
  }
  animaScroll();

  window.addEventListener("scroll", animaScroll);
}