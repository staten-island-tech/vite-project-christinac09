import "../CSS/style.css";
import { movies } from "./movies.js";
const DOMSelectors = {
  container: document.querySelector(".container"),
  buttons: document.querySelectorAll("button"),
  darkButton: document.querySelector("#darkwarm-btn"),
};
function addMovies(movies) {
  movies.forEach((movie) =>
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
  <h3>${movie.name}</h3>
  <h4>${movie.releaseDate}</h4>
  <img class="${movie.imgUrl}" src="" alt="">
</div>`
    )
  );
}
function addTheme() {
  DOMSelectors.darkButton.addEventListener("click", function (event) {
    event.preventDefault();
    document.body.classList.add("dark-warm");
  });
}
addMovies(movies);
addTheme();
