export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    // console.log('sim')
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade; // a animação começa antes
      if (isSectionVisible < 0) {
        // console.log('animar');
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
      // console.log(sectionTop);
    });
  }
  if (sections.length) {
    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
