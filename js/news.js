const nextBtn = document.querySelector("#next");
const backBtn = document.querySelector("#back");
console.log(backBtn, nextBtn);
const lableSwiper = new Swiper("#lable", {
  navigation: {
    nextEl: nextBtn,
    prevEl: backBtn,
  },

  slidesPerView: 10,
  spaceBetween: 5,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
