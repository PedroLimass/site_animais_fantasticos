export default function initModal() {
  const botAbrir = document.querySelector('[data-modal="abrir"]');
  const botFechar = document.querySelector('[data-modal="fechar"]');
  const botContainer = document.querySelector('[data-modal="container"]');

  if (botContainer && botFechar && botContainer) {
    function toggleModal(event) {
      event.preventDefault();
      botContainer.classList.toggle("ativo");
    }

    function outModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    botAbrir.addEventListener("click", toggleModal);
    botFechar.addEventListener("click", toggleModal);
    botContainer.addEventListener("click", outModal);
  }
}
