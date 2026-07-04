import axios from "axios";
import type { ForecastData } from "../types/forecast";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getForecast = async (
  city: string
): Promise<ForecastData> => {
  const response = await axios.get<ForecastData>(
    `${BASE_URL}/forecast`,
    {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    }
  );

  return response.data;
};

export const getForecastByCoords = async (
  lat: number,
  lon: number
): Promise<ForecastData> => {
  const response = await axios.get<ForecastData>(
    `${BASE_URL}/forecast`,
    {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
      },
    }
  );

  return response.data;
};