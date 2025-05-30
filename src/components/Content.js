import { Header } from "./Header.js";
import { InputForm } from "./InputForm.js";
import { WeatherInfo } from "./WeatherInfo.js";
import loadForecast from "./forecastCard.js";
import { updateForecast } from "./forecastCard.js";

export function loadContent() {
  const content = document.getElementById("content");
  content.textContent = "";

  const appContainer = document.createElement("div");
  appContainer.classList.add("weather-app");

  appContainer.append(Header(), WeatherInfo(), InputForm(), loadForecast());

  content.appendChild(appContainer);

  // added this to display simple data on load
  updateForecast([
    {
      datetime: new Date().toISOString(),
      temp: 22,
      icon: "cloudy",
      conditions: "Cloudy",
    },
    {
      datetime: new Date(Date.now() + 86400000).toISOString(),
      temp: 25,
      icon: "partly-cloudy-day",
      conditions: "Partly Cloudy",
    },
    {
      datetime: new Date(Date.now() + 2 * 86400000).toISOString(),
      temp: 27,
      icon: "clear-day",
      conditions: "Sunny",
    },
    {
      datetime: new Date(Date.now() + 3 * 86400000).toISOString(),
      temp: 23,
      icon: "rain",
      conditions: "Light Rain",
    },
    {
      datetime: new Date(Date.now() + 4 * 86400000).toISOString(),
      temp: 24,
      icon: "fog",
      conditions: "Foggy",
    },
  ]);
}
