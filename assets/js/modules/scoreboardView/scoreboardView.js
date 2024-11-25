import { app } from "../../main.js";

const scoreboardContainer = document.createElement("div");
scoreboardContainer.classList.add("scoreboardContainer");

export const scoreboardView = (scoreboard) => {
  scoreboardContainer.innerHTML = "";

  scoreboardContainer.innerHTML = `
        <h2>${scoreboard}</h2>
    `;

  app.appendChild(scoreboardContainer);
};
