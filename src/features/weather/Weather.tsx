import { useState } from "react";
import SearchForm from "./components/SearchForm";
import CityList from "./components/CityList";
import CurrenWeather from "./components/CurrenWeather";
import WeeklyWeather from "./components/WeeklyWeather";
import GeoCodeAPIClient from "@/api/geocode";
import WeatherAPIClient from "@/api/weather";
import type { CityItem, CurrentWeatherData, WeeklyWeatherData } from "@/utils/weather";
import { getTargetCityInfo } from "@/utils/weather";

const geoCodeAPIClient = new GeoCodeAPIClient();
const weatherAPIClient = new WeatherAPIClient();

export default function Weather() {
  const [cities, setCities] = useState<CityItem[]>([]);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherData | null>(null);
  const [weeklyWeather, setWeeklyWeather] = useState<WeeklyWeatherData | null>(null);

  const sendRequest = async (city: string) => {
    // ここに都市名を使った経緯緯度取得API実行
    const response = await geoCodeAPIClient.get(city);
    if (!response) return setCities([]);
    setCities(response.results);
  };

  const handleShowWeather = async (id: number) => {
    const city = getTargetCityInfo(String(id), cities);
    if (!city) return;
    const { name, country_code, latitude, longitude, timezone } = city;
    const response = await weatherAPIClient.get({ latitude, longitude, timezone });
    if (!response) return;

    setCurrentWeather({
      weather: response.current,
      units: response.current_units,
      city: { name, country_code },
    });
    setWeeklyWeather({
      weather: response.daily,
      units: response.daily_units,
      city: { name, country_code },
    });
  };

  const handleDelete = (id: number) => {
    setCities((prev) => prev.filter((city) => city.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-[280px_1fr]">
        <aside className="rounded-xl bg-white p-4 shadow-sm">
          <SearchForm sendRequest={sendRequest} />
          <CityList
            list={cities}
            handleShowWeather={handleShowWeather}
            handleDelete={handleDelete}
          />
        </aside>
        <main>
          {currentWeather && <CurrenWeather currentWeather={currentWeather} />}
          {weeklyWeather && <WeeklyWeather weeklyWeather={weeklyWeather} />}
        </main>
      </div>
    </div>
  );
}
