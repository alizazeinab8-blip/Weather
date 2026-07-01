import type { WeatherData } from "../../assets/types/weather";
import WeatherHeader from "./WeatherHeader";
import WeatherTemperature from "./WeatherTemperature";
import WeatherStats from "./WeatherStats";

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <div className="mt-10 w-full max-w-md rounded-2xl bg-white shadow-xl p-6">
      <WeatherHeader weather={weather} />
      <WeatherTemperature weather={weather} />
      <WeatherStats weather={weather} />
    </div>
  );
};

export default WeatherCard;