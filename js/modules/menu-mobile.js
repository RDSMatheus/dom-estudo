import outsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events){
    this.menuButton = document.querySelector('[data-menu="button"]');
    this.menuList = document.querySelector('[data-menu="list"]');

    //define touchstart e click como argumento padrão de events
    if (events === undefined){
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.activeClass = "active";

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuEvents(){
    this.events.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));
  }

  init(){
    if (this.menuButton && this.menuList) {
      this.addMenuEvents()
    }
    return this;
  }
}
