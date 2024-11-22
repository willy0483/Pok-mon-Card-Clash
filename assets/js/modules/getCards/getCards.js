import { apiUrl, apiKey } from "../../credentials.js";

// Function to get cards from the API
export const getCards = async () => {
  try {
    const respose = await fetch(apiUrl, {
      headers: {
        "X-Api-Key": apiKey,
      },
    });
    if (!respose.ok) {
      throw error;
    }
    const data = await respose.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getDualCards = async () => {
  const cards = await getCards();

  const randomCard = Math.floor(Math.random() * cards.data.length + 1);
  const randomCard2 = Math.floor(Math.random() * cards.data.length + 1);

  if (randomCard === randomCard2) {
    return getDualCards();
  }
  console.log(cards.data[randomCard], cards.data[randomCard2]);

  let myCards = [cards.data[randomCard], cards.data[randomCard2]];

  return myCards;
};
