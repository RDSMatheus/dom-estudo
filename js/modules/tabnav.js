export default function initTab() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabConteudo = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabConteudo.length) {
    tabConteudo[0].classList.add("ativo");
    function tabAtive(index) {
      tabConteudo.forEach((item) => {
        item.classList.remove("ativo");
      });
      const direcao = tabConteudo[index].dataset.anime;
      console.log(direcao)
      tabConteudo[index].classList.add("ativo", direcao);
    }

    function clicouTab(element, index) {
      element.addEventListener("click", () => {
        tabAtive(index);
      });
    }

    tabMenu.forEach(clicouTab);
  }
}
