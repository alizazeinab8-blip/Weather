export interface WeatherData {
  name: string;

  sys: {
    country: string;
  sunrise: number;
  sunset: number;
  };

  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };

  weather: {
    main: string;
    description: string;
    icon: string;
  }[];

  wind: {
    speed: number;
  };
}