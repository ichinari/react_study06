import { getWeatherInfo, formatDateToMonthDay, formatDateToWeekday } from "@/utils/weather";

type Props = {
  time: string;
  weatherCode: number;
  tempratureMax: number;
  tempratureMin: number;
};

export default function DayCard({ time, weatherCode, tempratureMax, tempratureMin }: Props) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white px-3 py-4 shadow-sm">
      <p className="text-xs font-semibold text-gray-500">{formatDateToWeekday(time)}</p>
      <p className="mt-1 text-xs text-gray-400">{formatDateToMonthDay(time)}</p>
      <div className="my-2 text-3xl">{getWeatherInfo(weatherCode).icon}</div>
      <div className="flex flex-col gap-2 text-sm">
        <span className="font-semibold text-red-500">{tempratureMax}°</span>
        <span className="text-blue-500">{tempratureMin}°</span>
      </div>
    </div>
  );
}
