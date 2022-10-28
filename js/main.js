var swiper = new Swiper(".home", {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});