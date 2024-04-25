import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // define touchstart e click como argumentos padrao de events caso usuário não determine
    // if(events === undefined) this.events = ['touchstart', 'click'];
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }

    this.activeClass = 'active';
    this.events = ['touchstart', 'click'];

    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  // Ativa o dropdownmenu e adiciona a função que observa o clique fora dele
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    // event booble
    outsideClick(element, this.events, () => {
      element.classList.remove('active');
    });
  }

  // Adiciona os eventos ao dropdownmenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      // essa função abaixo é o mesmo que os dois procedimentos abaixo dela;
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    // menu.addEventListener('click', handleClick)
    // menu.addEventListener('touchstart', handleClick)
    });
  }

  init() {
    this.addDropdownMenusEvent();
    return this;
  }
}
