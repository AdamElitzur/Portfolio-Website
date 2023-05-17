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

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}
