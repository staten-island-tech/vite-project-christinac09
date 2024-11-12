import "../CSS/style.css";
import { addSongCards, filterButtons } from "./display.js";
import { songs } from "./products.js";
import { addThemes } from "./themes.js";


addSongCards(songs);
addThemes();
filterButtons();


