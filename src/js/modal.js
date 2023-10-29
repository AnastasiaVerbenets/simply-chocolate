(() => {
  // const refs = {
  //   openModalBtn: document.querySelector('[data-modal-open]'),
  //   closeModalBtn: document.querySelector('[data-modal-close]'),
  //   modal: document.querySelector('[data-modal]'),
  // };

  // refs.openModalBtn.addEventListener('click', toggleModal);
  // refs.closeModalBtn.addEventListener('click', toggleModal);

  const buyNowRefs = {
    openModalBtn: document.querySelector('[data-buy-now-modal-open]'),
    closeModalBtn: document.querySelector('[data-buy-now-modal-close]'),
    modal: document.querySelector('[data-buy-now-modal]'),
  };

  buyNowRefs.openModalBtn.addEventListener('click', toggleModal);
  buyNowRefs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // refs.modal.classList.toggle('is-hidden');
    buyNowRefs.modal.classList.toggle('is-hidden');
  }
})();
