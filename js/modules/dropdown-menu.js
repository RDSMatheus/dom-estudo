import outsideClick from "./outside-click.js";

export default class initDropdownMenu {
  constructor(dropdownMenus, activeClass, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = activeClass;

    //define touchstart e click como argumento padrão de events
    if (events === undefined){
      this.events = ["touchstart", "click"];
    } else {
      this.events = events
    }
    this.handleClick = this.handleClick.bind(this);
  }

  //ativa o dropdownmenu e adiciona a função que observa o clique fora
  handleClick(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  //adiciona evento ao dropdownmenu
  addDropdownMenusEvents() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.handleClick);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvents();
    }
    return this;
  }
}
