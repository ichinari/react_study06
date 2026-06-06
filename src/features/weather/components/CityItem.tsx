import type { CityItem as CityItemType } from "@/utils/weather";
import Button from "@/components/Button";

type Props = {
  city: CityItemType;
  handleShowWeather: (id: number) => void;
  handleDelete: (id: number) => void;
};

export default function CityItem({ city, handleShowWeather, handleDelete }: Props) {
  return (
    <li className="flex items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 hover:bg-gray-50">
      <Button
        optionalClass="flex-1 text-left text-sm font-medium text-gray-800"
        onClick={() => handleShowWeather(city.id)}
      >
        {city.name}（{city.country}）
      </Button>
      <Button color="gray" onClick={() => handleDelete(city.id)}>
        ✗
      </Button>
    </li>
  );
}
