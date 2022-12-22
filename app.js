const hamburger = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".nav");
hamburger.addEventListener("click", () => {
  nav.toggleAttribute("data-visible");
});
