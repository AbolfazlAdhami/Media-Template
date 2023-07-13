const menu_items = document.querySelectorAll(".mobile-menu .menu-item");

menu_items.forEach((li) => {
  li.addEventListener("click", () => {
    li.querySelector("ul").classList.toggle("show");
    li.querySelector("i").classList.toggle("rotate");
  });
});

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: "#next",
    prevEl: "#back",
  },
  speed: 400,
  spaceBetween: 100,
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 25,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});


const newsSlider = new Swiper(".news", {});