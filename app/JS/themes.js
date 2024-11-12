import { DOMSelectors } from "./dom";

function addThemes() {
    DOMSelectors.warmButton.addEventListener("click", function (event) {
      event.preventDefault();
      //document.body.classList.replace("cool", "warm"); // replace combines remove and add
      document.body.className = "warm";
    });
    DOMSelectors.coolButton.addEventListener("click", function (event) {
      event.preventDefault();
      document.body.className = "cool";
    });
    DOMSelectors.lightWarmButton.addEventListener("click", function (event) {
        event.preventDefault();
        document.body.className = "light-warm"
    })
  }

export {addThemes}