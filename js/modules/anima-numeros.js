export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    // const titulo = document.querySelector('.titulo');
    // console.log(numeros, 'numeros');

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
        // console.log(total, 'total')
        // console.log(start, 'start')
      }, 50 * Math.random());
    });
  }

  // Função abaixo é para identificar o momento em que o usuário estiver com a tela em
  //  "Números", então a função de animação começa.
  let observer; // racking para resolver questão do eslint no observer
  function handleMutation(mutation) {
    // console.log(mutation[0].target.classList.contains('ativo'))
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector('.numeros');

  observer.observe(observerTarget, { attributes: true });
}
