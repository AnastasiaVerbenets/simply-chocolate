var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination', 
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 16
      }
    }
  });
  