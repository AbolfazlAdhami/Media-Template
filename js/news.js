
// import { newsData } from "./jsonData/newsData";
console.log(lables);
function main() {
  let startPage = 1;
  let endPage = 0;
  let currentPage = 1;
  const pagination = document.querySelector("#pagination");
  const newsBody = document.querySelector(".news-body");

  const lableShow = () => {
    const lableDiv = document.querySelector("#lable .labes-group");
    labels.forEach((element) => {
      lableDiv.innerHTML += `<button class="btn btn-outline-secondary p-2 text-center  swiper-slide fs-3 fw-bold">${element}</button>`;
    });
    const fristChild = document.querySelector(".labes-group .btn");
    fristChild.classList.replace(
      "btn-outline-secondary",
      "btn-outline-primary"
    );
  };

  const lableSwiper = new Swiper("#lable", {
    navigation: {
      nextEl: "#next",
      prevEl: "#back",
    },

    slidesPerView: 10,
    spaceBetween: 5,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      640: {
        slidesPerView: 5,
        spaceBetween: 25,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 8,
        spaceBetween: 30,
      },
    },
  });
  lableShow(lables);
}
document.addEventListener("DOMContentLoaded", main());
