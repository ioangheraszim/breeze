export function WeatherInfo() {
  const weatherDiv = document.createElement("div");
  weatherDiv.classList.add("weather-app__info");
  weatherDiv.id = "weather-info";

  return weatherDiv;
}
