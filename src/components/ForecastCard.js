export default function LoadForecast() {
  const forecastDiv = document.createElement("div");
  forecastDiv.classList.add("forecast");

  const title = document.createElement("h2");
  title.classList.add("forecast__title");
  title.textContent = "Weekly Forecast";

  const container = document.createElement("div");
  container.classList.add("forecast__container");

  forecastDiv.append(title, container);
  return forecastDiv;
}

export function updateForecast(weatherDays) {
  const container = document.querySelector(".forecast__container");
  if (!container) return;

  container.innerHTML = "";
  weatherDays.slice(0, 5).forEach((dayData) => {
    const card = document.createElement("div");
    card.classList.add("forecast__card");

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("forecast__card-title");
    const weekday = new Date(dayData.datetime).toLocaleDateString("en-US", {
      weekday: "long",
    });
    cardTitle.textContent = weekday;

    const tempDiv = document.createElement("div");
    tempDiv.classList.add("forecast__card-temp");

    const tempC = document.createElement("span");
    tempC.classList.add("forecast__card-temp--degrees");
    tempC.textContent = `${Math.round(dayData.temp)}°C`;

    const icon = document.createElement("img");
    icon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${dayData.icon}.png`;
    icon.classList.add("forecast__card-icon");
    icon.alt = dayData.conditions || "Weather Icon";

    const tempF = document.createElement("span");
    tempF.classList.add("forecast__card-temp--degrees");
    tempF.textContent = `${Math.round((dayData.temp * 9) / 5 + 32)}°F`;

    const condition = document.createElement("p");
    condition.classList.add("forecast__card-condition");
    condition.textContent = dayData.conditions || "--";

    tempDiv.append(tempC, icon, tempF);
    card.append(cardTitle, tempDiv, condition);
    container.appendChild(card);
  });
}
