import axios from "axios";
import type { AirQualityData } from "../types/airQuality";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getAirQuality = async (
  lat: number,
  lon: number
): Promise<AirQualityData> => {
  const response = await axios.get<AirQualityData>(
    `${BASE_URL}/air_pollution`,
    {
      params: {
        lat,
        lon,
        appid: API_KEY,
      },
    }
  );

  return response.data;
};