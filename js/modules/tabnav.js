export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  tabContent[0].classList.add('ativo');

  function activeTab(index) {
    // tabContent.forEach((li, i) => {
    //   console.log(li, i);
    //   if(index === li[i])
    //   li.classList.add('ativo')
    // })
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao);
  }

  if (tabContent.length && tabMenu.length) {
    tabMenu.forEach((itemMenu, idx) => {
      itemMenu.addEventListener('click', () => {
        activeTab(idx);
      });
    });
  }
}
