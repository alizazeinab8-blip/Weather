import type { WeatherData } from "../../assets/types/weather";
import { getWeatherIcon } from "../../assets/utils/getWeatherIcon";


interface WeatherHeaderProps {
  weather: WeatherData;
}

const WeatherHeader = ({ weather }: WeatherHeaderProps) => {
const iconUrl = getWeatherIcon(weather.weather[0].icon);
  return (
    
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold">{weather.name}</h2>
        <p className="text-gray-500">{weather.sys.country}</p>
      </div>

      <img
        src={iconUrl}
        alt={weather.weather[0].description}
      />
    </div>
  );
};

export default WeatherHeader;