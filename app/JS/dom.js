const DOMSelectors = {
  container: document.querySelector(".container"),

  warmButton: document.getElementById("warm-btn"),
  coolButton: document.getElementById("cool-btn"),
  lightWarmButton: document.getElementById("lightwarm-btn"),

  showAllButton: document.getElementById("reset-filter"),
  alphabeticalButton: document.getElementById("alphabetical-filter"),
  genreOptionButtons: document.querySelectorAll(".genre-option"),
  releaseOptionButtons: document.querySelectorAll(".release-option"),
};

export { DOMSelectors };
