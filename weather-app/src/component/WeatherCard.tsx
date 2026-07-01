import type { WeatherData } from "../assets/types/weather";

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard = ({ weather }: WeatherCardProps) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="mt-10 w-full max-w-md rounded-2xl bg-white shadow-xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">
            {weather.name}
          </h2>

          <p className="text-gray-500">
            {weather.sys.country}
          </p>
        </div>

        <img
          src={iconUrl}
          alt={weather.weather[0].description}
        />
      </div>

      <div className="mt-6">
        <h1 className="text-6xl font-bold">
          {Math.round(weather.main.temp)}°
        </h1>

        <p className="text-xl capitalize mt-2">
          {weather.weather[0].description}
        </p>
      </div>

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
    </div>
  );
};

export default WeatherCard;