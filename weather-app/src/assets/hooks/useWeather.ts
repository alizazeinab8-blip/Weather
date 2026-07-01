import { useCallback, useState } from "react";
import { getWeather } from "../api/weatherApi";
import type { WeatherData } from "../types/weather";

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = useCallback(async (city: string) => {
  try {
    setLoading(true);
    setError("");

    const data = await getWeather(city);

    setWeather(data);
  } catch (error) {
    setWeather(null);
    setError("City not found");
  } finally {
    setLoading(false);
  }
}, []);

  return {
    weather,
    loading,
    error,
    fetchWeather,
  };
};