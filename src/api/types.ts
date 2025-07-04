// src/types.ts

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  dt: number;
}

export interface ForecastData {
  list: {
    dt: number;
    main: {
      temp: number;
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
    dt_txt: string;
  }[];
}

export interface GeocodingResponse {
  name: string;
  lat: number;
  lon: number;
  country?: string;
  state?: string;
}
