import type { WeatherInfo } from "@/utils/weather";

export const WEATHER_CODES = {
  0: { label: "快晴", icon: "☀️" },
  1: { label: "晴れ", icon: "🌤️" },
  2: { label: "一部曇り", icon: "⛅️" },
  3: { label: "曇り", icon: "☁️" },
  45: { label: "霧", icon: "🌫️" },
  48: { label: "霧氷の霧", icon: "🌫️" },
  51: { label: "霧雨（弱）", icon: "🌦️" },
  53: { label: "霧雨（中）", icon: "🌦️" },
  55: { label: "霧雨（強）", icon: "🌦️" },
  56: { label: "着氷性の霧雨（弱）", icon: "🌧️" },
  57: { label: "着氷性の霧雨（強）", icon: "🌧️" },
  61: { label: "雨（弱）", icon: "🌧️" },
  63: { label: "雨（中）", icon: "🌧️" },
  65: { label: "雨（強）", icon: "🌧️" },
  66: { label: "着氷性の雨（弱）", icon: "🌧️" },
  67: { label: "着氷性の雨（強）", icon: "🌧️" },
  71: { label: "雪（弱）", icon: "🌨️" },
  73: { label: "雪（中）", icon: "🌨️" },
  75: { label: "雪（強）", icon: "❄️" },
  77: { label: "霧雪", icon: "🌨️" },
  80: { label: "にわか雨（弱）", icon: "🌦️" },
  81: { label: "にわか雨（中）", icon: "🌦️" },
  82: { label: "にわか雨（激）", icon: "⛈️" },
  85: { label: "にわか雪（弱）", icon: "🌨️" },
  86: { label: "にわか雪（強）", icon: "❄️" },
  95: { label: "雷雨", icon: "⛈️" },
  96: { label: "雷雨（弱いひょう）", icon: "⛈️" },
  99: { label: "雷雨（強いひょう）", icon: "⛈️" },
} as const satisfies Record<number, WeatherInfo>;

export const UNKNOWN_WEATHER: WeatherInfo = {
  label: "不明",
  icon: "❓",
};
