export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function cliqueForaModal(e) {
  // console.log(e.target);
  // console.log(this);
    if (e.target === this) {
      toggleModal(e);
    }
  }

  if (botaoAbrir && botaoFechar && containerModal) {
  //   function abrirModal(e) {
    //     e.preventDefault()
    //     containerModal.classList.add('ativo')
    //   }

    //   function fecharModal(e) {
    //     e.preventDefault()
    //   containerModal.classList.remove('ativo')
    // }

    // botaoAbrir.addEventListener('click', abrirModal)
    // botaoFechar.addEventListener('click', fecharModal)
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}
