import type { WeatherData } from "../../assets/types/weather";
import { formatTemperature } from "../../assets/utils/formatTemperature";
import {
  Droplets,
  Wind,
  Thermometer,
  ArrowUpDown,
} from "lucide-react";

interface WeatherStatsProps {
  weather: WeatherData;
}

const WeatherStats = ({ weather }: WeatherStatsProps) => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-8">

      <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3">
        <Thermometer size={24} />

        <div>
          <p className="text-sm text-white/70">
            Feels Like
          </p>

          <p className="font-semibold">
            {formatTemperature(weather.main.feels_like)}°
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3">
        <Droplets size={24} />

        <div>
          <p className="text-sm text-white/70">
            Humidity
          </p>

          <p className="font-semibold">
            {weather.main.humidity}%
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3">
        <Wind size={24} />

        <div>
          <p className="text-sm text-white/70">
            Wind
          </p>

          <p className="font-semibold">
            {weather.wind.speed} m/s
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3">
        <ArrowUpDown size={24} />

        <div>
          <p className="text-sm text-white/70">
            Min / Max
          </p>

          <p className="font-semibold">
            {formatTemperature(weather.main.temp_min)}° /
            {" "}
            {formatTemperature(weather.main.temp_max)}°
          </p>
        </div>
      </div>

    </div>
  );
};

export default WeatherStats;