const swiper = new Swiper('.swiper', {
    loop: true,
    breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 18,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
          // spaceBetween: 29,
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
