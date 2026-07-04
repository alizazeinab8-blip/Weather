import type { ForecastItem } from "../../assets/types/forecast";
import { formatTemperature } from "../../assets/utils/formatTemperature";
import { getWeatherIcon } from "../../assets/utils/getWeatherIcon";
import { formatDay } from "../../assets/utils/formatDay";

interface ForecastCardProps {
  item: ForecastItem;
}

const ForecastCard = ({ item }: ForecastCardProps) => {
  return (
    <div className="bg-white/10 rounded-xl p-4 text-white flex flex-col items-center min-w-32">
      <p className="text-lg font-semibold">
  {formatDay(item.dt_txt)}
</p>

      <img
        src={getWeatherIcon(item.weather[0].icon)}
        alt={item.weather[0].description}
      />

      <p className="text-xl font-bold">
        {formatTemperature(item.main.temp)}°
      </p>

      <p className="text-sm capitalize">
        {item.weather[0].description}
      </p>
    </div>
  );
};

export default ForecastCard;