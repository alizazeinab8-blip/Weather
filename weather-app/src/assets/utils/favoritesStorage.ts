const FAVORITES_KEY = "weather-favorites";

export const getFavorites = (): string[] => {
  const data = localStorage.getItem(FAVORITES_KEY);

  if (!data) return [];

  return JSON.parse(data);
};

export const saveFavorites = (cities: string[]) => {
  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(cities)
  );
};