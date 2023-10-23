const swiper = new Swiper('.opinions-swiper', {
    loop: true,
    breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 28,
        },
      },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 2200,
      stopOnLastSlide: false,
      disableonInteraction: true,
    },
    freeMode: true,
    speed: 800,
  });
