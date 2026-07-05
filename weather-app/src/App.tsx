import { useEffect } from "react";
import { useWeather } from "./assets/hooks/useWeather";
import SearchBar from "./component/SearchBar";
import WeatherCard from "./component/WeatherCard/WeatherCard";
import Loading from "./component/Loading";
import Error from "./component/Error";
import { getBackground } from "./assets/utils/getBackground";
import { useForecast } from "./assets/hooks/useForecast";
import Forecast from "../src/component/Forecast/Forecast";
import { saveCity, getSavedCity } from "./assets/utils/localStorage";
import { useFavorites } from "./assets/hooks/useFavorites";
import Favorites from "../src/component/Favorites/Favorites";
import { useAirQuality } from "../src/assets/hooks/useAirQuality";

function App() {

  const {
  airQuality,
  fetchAirQuality,
} = useAirQuality();
  
  const {
  weather,
  loading,
  error,
  fetchWeather,
  fetchWeatherByCoords,
} = useWeather();

  const {
  forecast,
  loading: forecastLoading,
  error: forecastError,
  fetchForecast,
  fetchForecastByCoords,
} = useForecast();

const {
  favorites,
  addFavorite,
} = useFavorites();

const handleSearch = async (city: string) => {
  const data = await fetchWeather(city);

  if (!data) return;

  await fetchForecast(city);

  await fetchAirQuality(
    data.coord.lat,
    data.coord.lon
  );

  saveCity(city);
};

  useEffect(() => {
  const city = getSavedCity() || "Tehran";

  handleSearch(city);
}, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  const background = getBackground(
  weather?.weather[0].main ?? ""
);
<div className={`min-h-screen ${background} flex items-center justify-center p-6`}></div>

const handleCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;

      await fetchWeatherByCoords(latitude, longitude);

      await fetchForecastByCoords(latitude, longitude);
    },
    () => {
      alert("Location access denied.");
    }
  );
};

  return (
  <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-700 flex items-center justify-center p-6">
    <div className="w-full max-w-lg">
      <h1 className="text-6xl font-black tracking-tight text-white text-center mb-8">
  Weather App
</h1>

      <SearchBar onSearch={handleSearch} />
      <Favorites
  cities={favorites}
  onSelect={handleSearch}
/>

    <button
  onClick={handleCurrentLocation}
  className="
    mt-4
    w-full
    rounded-xl
    bg-white/20
    backdrop-blur
    p-3
    text-white
    hover:bg-white/30
    transition-all
  "
>
    📍 Use My Location
</button>
      {loading && <Loading />}

      {error && <Error message={error} />}

{weather && (
  <WeatherCard
    weather={weather}
    onFavorite={() => addFavorite(weather.name)}
  />
)}      {forecast && <Forecast forecast={forecast} />}
    </div>
  </div>
);
}

export default App;
