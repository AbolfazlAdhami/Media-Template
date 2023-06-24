const menu_items = document.querySelectorAll(".mobile-menu .menu-item");

menu_items.forEach((li) => {
  li.addEventListener("click", () => {
    li.querySelector("ul").classList.toggle("show");
    li.querySelector("i").classList.toggle("rotate");
  });
});

// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "vertical",
//   loop: true,
//   // Default parameters

 
// });
// console.log(swiper);
