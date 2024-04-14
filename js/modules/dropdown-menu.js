import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    // event booble
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  dropdownMenus.forEach((menu) => {
    // essa função abaixo é o mesmo que os dois procedimentos abaixo dela;
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  // menu.addEventListener('click', handleClick)
  // menu.addEventListener('touchstart', handleClick)
  });
}
