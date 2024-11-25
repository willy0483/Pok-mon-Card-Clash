import { apiUrl, apiKey } from "../../credentials.js";

// Function to get cards from the API
export const getCards = async () => {
  try {
    const response = await fetch(
      `${apiUrl}?pageSize=10&page=${Math.floor(Math.random() * 100)}`,
      {
        headers: {
          "X-Api-Key": apiKey,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

export const getDualCards = async () => {
  const cards = await getCards();
  const cardData = cards.data;
  const selectedIndices = new Set();

  while (selectedIndices.size < 5) {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    selectedIndices.add(randomIndex);
  }
  const selectedCards = Array.from(selectedIndices).map(
    (index) => cardData[index]
  );

  return selectedCards;
};
