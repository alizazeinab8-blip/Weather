export interface ForecastData {
  list: ForecastItem[];
}

export interface ForecastItem {
  dt: number;

  main: {
    temp: number;
  };

  weather: {
    main: string;
    description: string;
    icon: string;
  }[];

  dt_txt: string;
}