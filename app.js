"use strict";

const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-list");
const glide1 = document.getElementById("glide1");
const menuLeft = menu.getBoundingClientRect().left;
const thumbnails = document.querySelectorAll(".small-img");
const mainImg = document.querySelector(".main-img");

//Menu hiding
openNav.addEventListener("click", () => {
  if (menuLeft < 0) {
    menu.classList.add("show");
  }
});

closeNav.addEventListener("click", () => {
  if (menuLeft < 0) {
    menu.classList.remove("show");
  }
});

// Fixed Navigation bar
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) navBar.classList.add("fix-nav");
  else navBar.classList.remove("fix-nav");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(navBar);

// Home page :Slider  using glide.js

function slider() {
  if (glide1)
    new Glide(glide1, {
      type: "carousel",
      startAt: 0,
      perView: 5,
      hoverpause: false,
      autoplay: 2000,
      animationDuration: 800,
      animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
      breakpoints: {
        1200: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
      },
    }).mount();
}
slider();
