import type { ForecastItem } from "../types/forecast";

export const filterForecast = (
  forecast: ForecastItem[]
): ForecastItem[] => {
  return forecast.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );
};