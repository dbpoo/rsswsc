$(function() {
  var indexSwiper = new Swiper(".indexSwiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1"
    },
    pagination: {
      el: ".swiper-pagination"
    }
  });

  var indexSwcol1Swiperiper = new Swiper(".col1Swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 85,
      modifier: 5,
      slideShadows: false
    },
    navigation: {
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2"
    }
  });
});
