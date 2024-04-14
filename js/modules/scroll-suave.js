export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // Forma alternativa:
    //   const distanceToTop = section.offsetTop
    //   // console.log(href, 'href');
    //   // console.log(section, 'section');
    //   // console.log(distanceToTop, 'distanceToTop');
    //   // window.scrollTo(0, distanceToTop)
    //   window.scrollTo({
    //     top: distanceToTop,
    //     behavior: 'smooth',
    //   })
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
