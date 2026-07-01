import { useEffect } from "react";
import { useWeather } from "./assets/hooks/useWeather";
import SearchBar from "./component/SearchBar";
import WeatherCard from "./component/WeatherCard/WeatherCard";
import Loading from "./component/Loading";
import Error from "./component/Error";
import { getBackground } from "./assets/utils/getBackground";

function App() {
  
  const { weather, loading, error, fetchWeather } = useWeather();

  useEffect(() => {
    fetchWeather("Tehran");
  }, [fetchWeather]);

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

  return (
  <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-700 flex items-center justify-center p-6">
    <div className="w-full max-w-md">
      <h1 className="text-6xl font-black tracking-tight text-white text-center mb-8">
  Weather App
</h1>

      <SearchBar onSearch={fetchWeather} />

      {loading && <Loading />}

      {error && <Error message={error} />}

      {weather && <WeatherCard weather={weather} />}
    </div>
  </div>
);
}
export default App;
