import { useState } from "react";
import {
  getFavorites,
  saveFavorites,
} from "../utils/favoritesStorage";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(
    getFavorites()
  );

  const addFavorite = (city: string) => {
    if (favorites.includes(city)) return;

    const updated = [...favorites, city];

    setFavorites(updated);

    saveFavorites(updated);
  };

  const removeFavorite = (city: string) => {
    const updated = favorites.filter(
      (item) => item !== city
    );

    setFavorites(updated);

    saveFavorites(updated);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
  };
};