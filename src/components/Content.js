import { Header } from "./Header.js";
import { InputForm } from "./InputForm.js";
import { WeatherInfo } from "./WeatherInfo.js";
import loadForecast from "./ForecastCard.js";
import { fetchWeather } from "../fetchWeather.js";

export function loadContent() {
  const content = document.getElementById("content");
  content.textContent = "";

  const appContainer = document.createElement("div");
  appContainer.classList.add("weather-app");

  appContainer.append(
    Header(),
    WeatherInfo(),
    InputForm(),
    loadForecast(),
    fetchWeather()
  );

  content.appendChild(appContainer);
}
