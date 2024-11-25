import { getDualCards } from "../getCards/getCards.js";
import { app } from "../../main.js";
import { duelCards } from "../chosenCard/chosenCard.js";

export const makeFiveCardView = async () => {
  const cardContainer = document.createElement("section");
  cardContainer.classList.add("cardsContainer");
  cardContainer.innerHTML = "";

  const myHand = document.createElement("div");
  myHand.classList.add("myHand");

  const cards = await getDualCards();
  console.log(cards);

  cards.forEach((myCards) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement("img");
    cardImage.src = myCards.images.small;
    cardImage.alt = myCards.name;

    card.appendChild(cardImage);
    myHand.appendChild(card);

    card.addEventListener("click", () => {
      duelCards(myCards);
    });
  });

  cardContainer.appendChild(myHand);
  app.appendChild(cardContainer);
};
