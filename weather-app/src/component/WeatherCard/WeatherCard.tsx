import type { WeatherData } from "../../assets/types/weather";
import WeatherHeader from "./WeatherHeader";
import WeatherTemperature from "./WeatherTemperature";
import WeatherStats from "./WeatherStats";


interface WeatherCardProps {
  weather: WeatherData;
  onFavorite: () => void;
}
const WeatherCard = ({
  weather,
  onFavorite,
}: WeatherCardProps) => {
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
        sm:p-8
        text-white
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        animate-fadeIn
      "
    >
<WeatherHeader
  weather={weather}
  onFavorite={onFavorite}
/>      <WeatherTemperature weather={weather} />
      <WeatherStats weather={weather} />
    </div>
  );
};

export default WeatherCard;