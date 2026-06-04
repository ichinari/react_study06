import APIClient from "./APIClient";
import type { WeatherParams, WeatherData } from "@/utils/weather";

export default class WeatherAPIClient extends APIClient {
  constructor() {
    super(
      "https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m,apparent_temperature&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=${timezone}"
    );
  }

  public get(params: WeatherParams): Promise<WeatherData | undefined> {
    const { latitude, longitude, timezone } = params;
    const apiPath = this.apiPath
      .replace("${latitude}", latitude.toString())
      .replace("${longitude}", longitude.toString())
      .replace("${timezone}", timezone);
    return this.apiGet(apiPath, null);
  }
}
