import CityItem from "./CityItem";
import type { CityItem as CityItemType } from "@/utils/weather";

type Props = {
  list: CityItemType[];
  handleShowWeather: (id: number) => void;
  handleDelete: (id: number) => void;
};

export default function CityList({ list, handleShowWeather, handleDelete }: Props) {
  return (
    <div className="mt-4">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
        登録した都市
      </h2>
      <ul className="space-y-2">
        {list.map((city) => (
          <CityItem
            key={city.id}
            city={city}
            handleShowWeather={handleShowWeather}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
