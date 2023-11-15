import calculator from "./modules/calculator.js";

document.addEventListener("DOMContentLoaded", () => {
  //burger
  const burger = document.querySelector(".header__burger");
  if (burger) {
    const nav = document.querySelector(".header__navigation");
    const header = document.querySelector(".header");
    const body = document.body;

    burger.addEventListener("click", () => {
      header.classList.toggle("active");
      body.classList.toggle("active");
      burger.classList.toggle("active");
      nav.classList.toggle("active");
    });

    const links = document.querySelectorAll(".header__link");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        header.classList.remove("active");
        body.classList.remove("active");
        burger.classList.remove("active");
        nav.classList.remove("active");
      });
    });
  }

  //slider
  const slider = document.querySelector(".slider");
  if (slider) {
    new Swiper(".slider", {
      autoplay: true,
      slidesPerView: "auto",
      spaceBetween: 16,
      navigation: {
        nextEl: ".slider__arrow-next",
        prevEl: ".slider__arrow-prev",
      },
      pagination: {
        el: ".slider__pagination",
        bulletClass: "slider__bullet",
        bulletActiveClass: "active",
        clickable: true,
      },
    });
  }

  //fancybox
  if (document.querySelector("[data-fancybox]")) {
    Fancybox.bind("[data-fancybox]", {
      groupAttr: false,
    });
  }

  //questions
  const questions = document.querySelectorAll(".ques__top");
  if (questions) {
    questions.forEach((item) => {
      item.addEventListener("click", () => {
        const icon = item.querySelector(".ques__icon");
        icon.classList.toggle("active");
      });
    });
  }

  //calculator
  calculator();
});
