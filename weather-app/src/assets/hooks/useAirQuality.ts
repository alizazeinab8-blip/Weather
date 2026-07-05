import { useState } from "react";
import { getAirQuality } from "../api/airQuality";
import type { AirQualityData } from "../types/airQuality";

export const useAirQuality = () => {
  const [airQuality, setAirQuality] =
    useState<AirQualityData | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const fetchAirQuality = async (
    lat: number,
    lon: number
  ) => {
    try {
      setLoading(true);
      setError("");

      const data = await getAirQuality(
        lat,
        lon
      );

      setAirQuality(data);
    } catch {
      setError("Air quality unavailable");
    } finally {
      setLoading(false);
    }
  };

  return {
    airQuality,
    loading,
    error,
    fetchAirQuality,
  };
};