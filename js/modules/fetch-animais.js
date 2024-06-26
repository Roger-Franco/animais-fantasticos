import AnimaNumeros from './anima-numeros.js';

// Cria a div contendo informações com o total de animais
export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    // console.log(animal);
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Preenche cada animal no dom
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // puxa os animais atravé de um arquivo json e crica cada animal ultilizando createAnimal
  async function criarAnimais() {
    try {
      // fetch espera resposta e transforma em json
      const animaisResponse = await fetch(url);

      const animaisJSON = await animaisResponse.json();

      // Após a tranformação de json, ativa as funções para preencher e animar os números
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  return criarAnimais();
}
