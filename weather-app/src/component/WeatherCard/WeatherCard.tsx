import type { WeatherData } from "../../assets/types/weather";
import WeatherHeader from "./WeatherHeader";
import WeatherTemperature from "./WeatherTemperature";
import WeatherStats from "./WeatherStats";


interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <div
      className="
        mt-8
        rounded-3xl
        bg-white/20
        backdrop-blur-lg
        border
        border-white/30
        shadow-2xl
        p-6
        text-white
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        animate-fadeIn
      "
    >
      <WeatherHeader weather={weather} />
      <WeatherTemperature weather={weather} />
      <WeatherStats weather={weather} />
    </div>
  );
};

export default WeatherCard;