import { DOMSelectors } from "./dom";
import { songs } from "./products";

function addSongCards(products) {
    products.forEach((product) =>
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
          <h3 class="card-title">${product.title}</h3>
          <h4 class="card-artist">${product.artist}</h4>
          <p class="card-info">${product.releaseDate}</p>
          <img class="card-img" src="${product.imageUrl}" alt="${product.altText}">
          <h5 class="card-price">$${product.price}</h5>
        </div>`
      )
    );
  }

function removeAllCards() {
  DOMSelectors.container.replaceChildren(); //removes all children
}

function getFiltered(type) {
  let filtered;
  let acceptedTypes = ["Pop", "K-pop", "KRnB", "Hip Hop"]
  removeAllCards();
  if (type === "reset") {
    filtered = songs
  } else if (type === "Pop") {
    filtered = songs.filter((song) => song.genre === acceptedTypes[0])
  } else if (type === "K-pop") {
    filtered = songs.filter((song)=> song.genre === acceptedTypes[1])
  } else if (type === "K-RnB") {
    filtered = songs.filter((song)=> song.genre === acceptedTypes[2])
  } else if (type === "Hip Hop") {
    filtered = songs.filter((song)=> song.genre === acceptedTypes[3])
  } else if (type === "Other") {
    filtered = songs.filter((song)=> !acceptedTypes.includes(song.genre))
  }
  return filtered
}

function filterButtons() {
  let type, filtered;
  DOMSelectors.showAllButton.addEventListener("click", function(event) {
    event.preventDefault;
    filtered = getFiltered("reset")
    addSongCards(filtered)
  })
  DOMSelectors.genreOptionButtons.forEach((genreOption)=>genreOption.addEventListener("click", function(event) {
    event.preventDefault;
    type = genreOption.innerHTML
    console.log(type)
    filtered = getFiltered(type)
    addSongCards(filtered)
  }))

}

export {addSongCards, filterButtons}