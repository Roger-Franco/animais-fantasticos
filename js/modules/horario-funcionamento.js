export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  // const diasSemana = funcionamento.dataset.semana.split(',').map((num) => {
  //   return Number(num)
  // }) // macete abaixo
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  // console.log(diasSemana, 'diasSemana');
  // console.log(horarioSemana, 'horarioSemana');

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  // console.log(diaAgora, 'diaAgora');
  // console.log(horarioAgora, 'horarioAgora');
  // if(diaAgora > 0 && diaAgora < 6) {
  //   console.log('Aberto');
  // } else {
  //   console.log('Fechado');
  // }

  // const teste = [1, 2, 3, 4, 5].indexOf(6); // retorna -1 entao é false. Se o
  // elemento existir, ele devolve o indice;

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1; // retorna um boolean
  const horarioAberto = (horarioAgora >= horarioSemana[0]
    && horarioAgora < horarioSemana[1]); // retorna um boolean

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
    // console.log('Aberto');
  } else {
    // console.log('Fechado');
  }
}
