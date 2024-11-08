import "../CSS/style.css";
import { movies } from "./movies.js";
const DOMSelectors = {
  container: document.querySelector(".container"),
  buttons: document.querySelectorAll("button"),
  warmButton: document.getElementById("warm-btn"),
  coolButton: document.getElementById("cool-btn"),
};
function addMovies(movies) {
  movies.forEach((movie) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
  <h3>${movie.name}</h3>
  <h4>${movie.releaseDate}</h4>
  <img class="card-img" src="${movie.imgUrl}" alt="">
</div>`
    )
  );
}
function addTheme() {
  DOMSelectors.warmButton.addEventListener("click", function (event) {
    event.preventDefault();
    //document.body.classList.replace("cool", "warm"); // replace combines remove and add
    document.body.className = "warm";
  });
  DOMSelectors.coolButton.addEventListener("click", function (event) {
    event.preventDefault();
    document.body.className = "cool";
    //document.body.classList.replace("warm", "cool");
  });
}

addMovies(movies);
addTheme();
