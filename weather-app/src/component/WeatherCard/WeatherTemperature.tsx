import type { WeatherData } from "../../assets/types/weather";
import { formatTemperature } from "../../assets/utils/formatTemperature";


interface WeatherTemperatureProps {
  weather: WeatherData;
}

const WeatherTemperature = ({ weather }: WeatherTemperatureProps) => {
  return (
    <div className="mt-6">
      <h1 className="text-8xl font-extrabold tracking-tight">
        {formatTemperature(weather.main.temp)}
      </h1>

      <p className="mt-3 text-2xl capitalize text-white/80">
        {weather.weather[0].description}
      </p>
    </div>
  );
};

export default WeatherTemperature;