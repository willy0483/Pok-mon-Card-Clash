import { scoreboardView } from "../scoreboardView/scoreboardView.js";

export const whoWins = (player1, player2) => {
  console.log(player1, player2);

  const player1HP = player1.hp;
  const player2HP = player2.hp;

  if (player1HP > player2HP) {
    console.log("Player 1 wins");
    scoreboardView("Player 1 wins");
  }

  if (player1HP < player2HP) {
    console.log("Player 2 wins");
    scoreboardView("Player 2 wins");
  }

  if (player1HP == player2HP) {
    console.log("It's a tie");
    scoreboardView("It's a tie");
  }
};
