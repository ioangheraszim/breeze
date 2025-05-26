import { fetchWeather } from "../fetchWeather";
import { updateForecast } from "./ForecastCard";

export function InputForm() {
  const container = document.createElement("div");

  const input = document.createElement("input");
  input.id = "location";
  input.classList.add("weather-app__input");
  input.placeholder = "Enter location";

  const button = document.createElement("button");
  button.classList.add("weather-app__button");
  button.textContent = "Weather";
  button.addEventListener("click", async () => {
    const location = input.value.trim();
    if (!location) return;

    const weatherData = await fetchWeather(location);
    if (weatherData) updateForecast(weatherData);
  });

  container.append(input, button);
  return container;
}
