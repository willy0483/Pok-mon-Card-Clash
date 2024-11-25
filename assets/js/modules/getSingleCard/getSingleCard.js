import { apiUrl, apiKey } from "../../credentials.js";

export const getRandomCard = async () => {
  try {
    const response = await fetch(
      `https://api.pokemontcg.io/v2/cards?pageSize=1&page=${Math.floor(
        Math.random() * 100
      )}`,
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
    return data.data[0];
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
