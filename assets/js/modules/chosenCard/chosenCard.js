import { app } from "../../main.js";
import { getRandomCard } from "../getSingleCard/getSingleCard.js";
import { whoWins } from "../whoWins/whoWins.js";

const duelContainer = document.createElement("div");
duelContainer.classList.add("duelContainer");

export const duelCards = async (cards) => {
  const mycards = await getRandomCard();

  duelContainer.innerHTML = ``;

  const myCard = document.createElement("div");
  myCard.classList.add("myCard");

  const card = document.createElement("div");
  card.classList.add("card");

  const cardImage = document.createElement("img");
  cardImage.src = cards.images.small;
  cardImage.alt = cards.name;

  card.appendChild(cardImage);
  myCard.appendChild(card);
  duelContainer.appendChild(myCard);

  const opponentCard = document.createElement("div");
  opponentCard.classList.add("opponentCard");

  const opponent = document.createElement("div");
  opponent.classList.add("card");

  const opponentImage = document.createElement("img");
  opponentImage.src = mycards.images.small;
  opponentImage.alt = mycards.name;

  whoWins(cards, mycards);
  opponent.appendChild(opponentImage);
  opponentCard.appendChild(opponent);
  duelContainer.appendChild(opponentCard);
  app.appendChild(duelContainer);
};
