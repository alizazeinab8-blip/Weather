import type { WeatherData } from "../../assets/types/weather";

interface WeatherHeaderProps {
  weather: WeatherData;
}

const WeatherHeader = ({ weather }: WeatherHeaderProps) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

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