import { useEffect } from "react";
import { useWeather } from "./assets/hooks/useWeather";
import SearchBar from "./component/SearchBar";
import WeatherCard from "./component/WeatherCard/WeatherCard";
import Loading from "./component/Loading";
import Error from "./component/Error";

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

  return (
    <div className="min-h-screen flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-8">Weather App</h1>

      <SearchBar onSearch={fetchWeather} />

      {loading && <Loading />}

      {error && <Error message={error} />}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
export default App;
