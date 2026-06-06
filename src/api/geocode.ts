import APIClient from "@/api/APIClient";
import type { CityItem } from "@/utils/weather";

export default class GeoCodeAPIClient extends APIClient {
  constructor() {
    super(
      "https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5&language=ja&format=json"
    );
  }

  public get(city: string): Promise<{ results: CityItem[] } | undefined> {
    const apiPath = this.apiPath.replace("${city}", city);
    return this.apiGet(apiPath, null);
  }
}
