import type { ForecastData } from "../../assets/types/forecast";
import ForecastCard from "./ForecastCard";
import { filterForecast } from "../../assets/utils/filterForecast";



interface ForecastProps {
  forecast: ForecastData;
}

const Forecast = ({ forecast }: ForecastProps) => {
    const dailyForecast = filterForecast(forecast.list);
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-white mb-4">
        5 Day Forecast
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {dailyForecast.map((item) => (
  <ForecastCard
    key={item.dt}
    item={item}
  />
))}
      </div>
    </div>
  );
};

export default Forecast;