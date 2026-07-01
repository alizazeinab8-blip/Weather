import type { WeatherData } from "../../assets/types/weather";
import { formatTemperature } from "../../assets/utils/formatTemperature";


interface WeatherTemperatureProps {
  weather: WeatherData;
}

const WeatherTemperature = ({ weather }: WeatherTemperatureProps) => {
  return (
    <div className="mt-6">
      <h1 className="text-6xl font-bold">
        {formatTemperature(weather.main.temp)}
      </h1>

      <p className="text-xl capitalize mt-2">
        {weather.weather[0].description}
      </p>
    </div>
  );
};

export default WeatherTemperature;