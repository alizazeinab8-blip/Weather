import type { WeatherData } from "../../assets/types/weather";
import { getWeatherIcon } from "../../assets/utils/getWeatherIcon";
import {formatDate} from "../../assets/utils/formatDate"
import { MapPin } from "lucide-react";
import { Star } from "lucide-react";


interface WeatherHeaderProps {
  weather: WeatherData;
  onFavorite: () => void;
}

const WeatherHeader = ({
  weather,
  onFavorite,
}: WeatherHeaderProps) => {
const iconUrl = getWeatherIcon(weather.weather[0].icon);
<p>{formatDate()}</p>
  return (
    
    
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold">{weather.name}</h2>
        <p className="text-white/80"></p>
      </div>

      <img
        src={iconUrl}
        alt={weather.weather[0].description}
      />
    </div>
  );
  <div className="flex items-center justify-between">
  <div className="flex items-center gap-2">
    <MapPin size={20} />

    <span>
      {weather.name}, {weather.sys.country}
    </span>
  </div>

  <button
    onClick={onFavorite}
    className="hover:scale-110 transition"
  >
    <Star />
  </button>
</div>
  
};


export default WeatherHeader;