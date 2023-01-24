function initTab() {
  const tabMenu = document.querySelectorAll(".jstab-menu li");
  const tabConteudo = document.querySelectorAll(".js-tabconteudo section");

  if (tabMenu.length && tabConteudo.length) {
    tabConteudo[0].classList.add("ativo");
    function tabAtive(index) {
      tabConteudo.forEach((item) => {
        item.classList.remove("ativo");
      });
      tabConteudo[index].classList.add("ativo");
    }

    function clicouTab(element, index) {
      element.addEventListener("click", () => {
        tabAtive(index);
      });
    }

    tabMenu.forEach(clicouTab);
  }
}
initTab();
// acordion list
function initAccordion() {
  const listaTitulo = document.querySelectorAll(".js-faq dt");
  if (listaTitulo.length) {
    listaTitulo[0].classList.add("ativo");
    listaTitulo[0].nextElementSibling.classList.add("ativo");
    function abrirLista(event) {
      this.classList.toggle("ativo");
      event.currentTarget.nextElementSibling.classList.toggle("ativo");
    }

    listaTitulo.forEach((item) => {
      item.addEventListener("click", abrirLista);
    });
  }
}
initAccordion();

function initScroll() {
  const menuInterno = document.querySelectorAll(".js-menu a[href^='#']");
  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const scrollItem = document.querySelector(href);
    scrollItem.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // const top = scrollItem.offsetTop
    // console.log(href, top)
    // scroll({
    //   top: top,
    //   behavior: "smooth"
    // });
  }

  menuInterno.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}
initScroll();

function initAnimScroll() {
  const section = document.querySelectorAll(".js-scroll");

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
initAnimScroll()
