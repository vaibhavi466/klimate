// src/types.ts

// Used to represent latitude and longitude coordinates
export interface Coordinates {
  lat: number;
  lon: number;
}

// Weather data returned from the current weather API
export interface WeatherData {
  name: string;
   coord: {
    lat: number;
    lon: number;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
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
    deg: number;
  };
  sys: {
    country: string;
    sunrise: number; // ✅ Add this
    sunset: number;  // ✅ Add this
  };
  dt: number; // Unix timestamp
}

// 5-day / 3-hour forecast API data structure
export interface ForecastData {
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
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
    dt_txt: string; // DateTime string for the forecast
  }[];
}

// Geocoding API response when converting location name to lat/lon
export interface GeocodingResponse {
  name: string;
  lat: number;
  lon: number;
  country?: string;
  state?: string;
}
