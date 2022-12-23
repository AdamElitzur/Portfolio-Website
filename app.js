const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#nav");
const li = document.querySelectorAll(".nav-element");
const body = document.querySelector("body");
console.log(li);
hamburger.addEventListener("click", () => {
  nav.toggleAttribute("data-visible");
  body.toggleAttribute("data-visible");
});

li.forEach(function (elem) {
  elem.addEventListener("click", function () {
    nav.toggleAttribute("data-visible");
    body.toggleAttribute("data-visible");
  });
});
// document.onclick = function (clickEvent) {
//   console.log(nav.hasAttribute("data-visible"));
//   if (nav.hasAttribute("data-visible") && clickEvent.target.id !== "nav") {
//     nav.toggleAttribute("data-visible");
//   }
// };
