import debounce from './debounce.js';

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    // this.checkDistance = this.checkDistance.bind(this);
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // Pega a distância de cada elemento em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      }; // retorna o elemento e o offset da section
    });
    // console.log(this.distance);
  }

  // Verifica a distância em cada objeto em relação ao scroll do site
  checkDistance() {
    // console.log('teste');
    // console.log(window.pageYOffset);
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Remove o evento de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
