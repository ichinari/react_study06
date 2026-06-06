import type { CurrentWeatherData } from "@/utils/weather";
import { getWeatherInfo, formatDateToYearMonthDay } from "@/utils/weather";

type Props = {
  currentWeather: CurrentWeatherData;
};

export default function CurrenWeather({ currentWeather }: Props) {
  return (
    <section className="rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 p-6 text-white shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm opacity-80">{formatDateToYearMonthDay(currentWeather.weather.time)}</p>
          <h1 className="mt-1 text-2xl font-bold">{`${currentWeather.city.name}, ${currentWeather.city.country_code}`}</h1>
        </div>
        <div className="text-5xl">{getWeatherInfo(currentWeather.weather.weather_code).icon}</div>
      </div>

      <div className="mt-6 flex items-end gap-4">
        <span className="text-6xl font-light leading-none">
          {currentWeather.weather.temperature_2m}°
        </span>
        <span className="pb-2 text-lg opacity-90">
          {getWeatherInfo(currentWeather.weather.weather_code).label}
        </span>
      </div>

      <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-white/20 pt-4 text-sm">
        <div>
          <dt className="opacity-70">体感</dt>
          <dd className="mt-1 font-semibold">{currentWeather.weather.apparent_temperature}°</dd>
        </div>
        <div>
          <dt className="opacity-70">湿度</dt>
          <dd className="mt-1 font-semibold">{currentWeather.weather.relative_humidity_2m}%</dd>
        </div>
        <div>
          <dt className="opacity-70">風速</dt>
          <dd className="mt-1 font-semibold">{currentWeather.weather.wind_speed_10m} km/h</dd>
        </div>
      </dl>
    </section>
  );
}
