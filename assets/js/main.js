export const app = document.getElementById("app");

import { makeFiveCardView } from "./modules/fiveCardsView/fiveCardsView.js";

export function startGame() {
  makeFiveCardView();
}

startGame();
