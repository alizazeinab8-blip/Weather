import type { WeatherData } from "../../assets/types/weather";

interface WeatherStatsProps {
  weather: WeatherData;
}

const WeatherStats = ({ weather }: WeatherStatsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8 text-gray-700">
      <div>
        <p className="font-semibold">Feels Like</p>
        <p>{Math.round(weather.main.feels_like)}°C</p>
      </div>

      <div>
        <p className="font-semibold">Humidity</p>
        <p>{weather.main.humidity}%</p>
      </div>

      <div>
        <p className="font-semibold">Wind</p>
        <p>{weather.wind.speed} m/s</p>
      </div>

      <div>
        <p className="font-semibold">Min / Max</p>
        <p>
          {Math.round(weather.main.temp_min)}° /
          {" "}
          {Math.round(weather.main.temp_max)}°
        </p>
      </div>
    </div>
  );
};

export default WeatherStats;