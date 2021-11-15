const title = document.querySelector(".title")
const sup = document.createElement("sup")
sup.textContent = "©"

title.addEventListener("mouseover", mouseOver);
title.addEventListener("mouseout", mouseOut)

function mouseOver() {
  title.textContent = "Hand Drawn Clothing Co."
  title.append(sup)
}

function mouseOut() {
  title.textContent = "Dessiné à la Main Clothing Co."
  title.append(sup)
}