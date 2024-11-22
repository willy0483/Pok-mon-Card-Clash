import { getDualCards } from "../getCards/getCards.js";

import { app } from "../../main.js";

export const makeCardView = async () => {
  const cards = await getDualCards();

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("mainContainer");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainer");

  cards.forEach((card, index) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const cardImage = document.createElement("img");
    cardImage.src = card.images.small;
    cardImage.alt = card.name;

    const cardLabel = document.createElement("h2");
    cardLabel.classList.add("cardLabel");
    if (index === 0) {
      cardLabel.textContent = "You";
    } else if (index === 1) {
      cardLabel.textContent = "Opponent";
    }

    cardDiv.appendChild(cardLabel);
    cardDiv.appendChild(cardImage);

    cardContainer.appendChild(cardDiv);
    mainContainer.appendChild(cardContainer);
    app.appendChild(mainContainer);
  });
};
