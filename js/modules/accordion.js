export default function initAccordion() {
  const listaTitulo = document.querySelectorAll("[data-anime='accordion'] dt");
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
