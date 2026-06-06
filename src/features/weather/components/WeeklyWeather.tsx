import type { WeeklyWeatherData } from "@/utils/weather";
import DayCard from "./DayCard";

type Props = {
  weeklyWeather: WeeklyWeatherData;
};

export default function WeeklyWeather({ weeklyWeather }: Props) {
  return (
    <section className="mt-6 rounded-xl bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-sm font-semibold text-gray-700">週間天気</h2>
      <div className="grid grid-cols-7 gap-2">
        {weeklyWeather.weather.time.map((time, index) => (
          <DayCard
            key={time}
            time={time}
            weatherCode={weeklyWeather.weather.weather_code[index]}
            tempratureMax={weeklyWeather.weather.temperature_2m_max[index]}
            tempratureMin={weeklyWeather.weather.temperature_2m_min[index]}
          />
        ))}
      </div>
    </section>
  );
}
