// Hamburger menu event listener
const hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click", hamburgerClick)

function hamburgerClick() {
  hamburger.classList.toggle("is-active")
}