export default class initModal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botAbrir = document.querySelector(botaoAbrir);
    this.botFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outModal = this.outModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  outModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addModalEvent() {
    this.botAbrir.addEventListener("click", this.eventToggleModal);
    this.botFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.outModal);
  }

  init() {
    if (this.botAbrir && this.botFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
