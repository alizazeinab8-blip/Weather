import axios from "axios";
import type { WeatherData } from "../types/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const getWeather = async (
  city: string
): Promise<WeatherData> => {
  const response = await api.get<WeatherData>("/weather", {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });

  return response.data;
};