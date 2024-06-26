export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  // Ativa a tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  // Adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, idx) => {
      itemMenu.addEventListener('click', () => {
        this.activeTab(idx);
      });
    });
  }

  init() {
    if (this.tabContent.length && this.tabMenu.length) {
      // Ativa primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
