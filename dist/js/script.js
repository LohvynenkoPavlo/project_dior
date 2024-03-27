const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },

});