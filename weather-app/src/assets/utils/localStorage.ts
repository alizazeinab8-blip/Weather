const CITY_KEY = "weather-app-city";

export const saveCity = (city: string) => {
  localStorage.setItem(CITY_KEY, city);
};

export const getSavedCity = (): string | null => {
  return localStorage.getItem(CITY_KEY);
};