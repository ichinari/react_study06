import { WEATHER_CODES, UNKNOWN_WEATHER } from "@/constants/weather";

export type CityItem = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation?: number;
  feature_code?: string;
  country_code: string;
  country_id: number;
  country: string;
  timezone: string;
  population?: number;
  postcodes?: string[];
  admin1_id?: number;
  admin2_id?: number;
  admin3_id?: number;
  admin4_id?: number;
  admin1?: string;
  admin2?: string;
  admin3?: string;
  admin4?: string;
};

export type WeatherParams = {
  latitude: number;
  longitude: number;
  timezone: string;
};

export type CurrentUnits = {
  time: string;
  interval: string;
  temperature_2m: string;
  weather_code: string;
  wind_speed_10m: string;
  relative_humidity_2m: string;
  apparent_temperature: string;
};

export type CurrentWeather = {
  time: string;
  interval: number;
  temperature_2m: number;
  weather_code: number;
  wind_speed_10m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
};

export type DailyUnits = {
  time: string;
  weather_code: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
};

export type DailyWeather = {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
};

export type WeatherData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: CurrentUnits;
  current: CurrentWeather;
  daily_units: DailyUnits;
  daily: DailyWeather;
};

export type CurrentWeatherData = {
  weather: CurrentWeather;
  units: CurrentUnits;
  city: { name: string; country_code: string };
};

export type WeeklyWeatherData = {
  weather: DailyWeather;
  units: DailyUnits;
  city: { name: string; country_code: string };
};

export type WeatherInfo = {
  label: string;
  icon: string;
};

export type WeatherCode = keyof typeof WEATHER_CODES;

export const getWeatherInfo = (code: number): WeatherInfo =>
  WEATHER_CODES[code as WeatherCode] ?? UNKNOWN_WEATHER;

export const getTargetCityInfo = (id: string, cities: CityItem[]) => {
  const city = cities.find((city) => city.id === Number(id));
  return city;
};

export const formatDateToYearMonthDay = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
};

export const formatDateToMonthDay = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getMonth() + 1}/${date.getDate()}`;
};

export const formatDateToWeekday = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("ja-JP", { weekday: "short" });
};
