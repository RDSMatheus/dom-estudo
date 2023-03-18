export default class initAccordion {
  constructor(lista) {
    this.accordionList = document.querySelectorAll(lista);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent(){
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.accordionList.length) {
      this.addAccordionEvent();
      this.toggleAccordion(this.accordionList[0])

      
    }
  }
}
