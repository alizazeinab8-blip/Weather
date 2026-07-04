import { useState, useCallback } from "react";
import { getForecast } from "../api/forecast";
import type { ForecastData } from "../types/forecast";

export const useForecast = () => {
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchForecast = useCallback(async (city: string) => {
    try {
      setLoading(true);
      setError("");

      const data = await getForecast(city);
      setForecast(data);
    } catch (err) {
      setForecast(null);
      setError("Forecast not available");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    forecast,
    loading,
    error,
    fetchForecast,
  };
};