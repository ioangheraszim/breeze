export default function loadForecast() {
  const forecastDiv = document.createElement("div");
  forecastDiv.classList.add("forecast");

  const title = document.createElement("h2");
  title.classList.add("forecast__title");
  title.textContent = "Weekly Forecast";

  const container = document.createElement("div");
  container.classList.add("forecast__container");

  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].forEach((day) => {
    const card = document.createElement("div");
    card.classList.add("forecast__card");
    card.id = day.toLowerCase();

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("forecast__card-title");
    cardTitle.textContent = day;

    const tempDiv = document.createElement("div");
    tempDiv.classList.add("forecast__card-temp");

    const tempC = document.createElement("span");
    tempC.classList.add("forecast__card-temp--degrees");
    tempC.textContent = "--C";

    const icon = document.createElement("img");
    icon.src = "#";
    icon.classList.add("forecast__card-icon");
    icon.alt = "Weather Icon";

    const tempF = document.createElement("span");
    tempF.classList.add("forecast__card-temp--degrees");
    tempF.textContent = "--";

    const condition = document.createElement("p");
    condition.classList.add("forecast__card-condition");
    condition.textContent = "--";

    tempDiv.append(tempC, icon, tempF);
    card.append(cardTitle, tempDiv, condition);
    container.appendChild(card);
  });

  forecastDiv.append(title, container);

  return forecastDiv;
}

export function updateForecast(weatherData) {
  const days = weatherData.days.slice(0, 5);

  days.forEach((dayData, index) => {
    const dayName = new Date(dayData.datetime)
      .toLocaleDateString("en-US", {
        weekday: "long",
      })
      .toLowerCase();

    const card = document.getElementById(dayName);
    if (!card) return;

    const tempElements = card.querySelectorAll(".forecast__card-temp--degrees");
    const icon = card.querySelector(".forecast__card-icon");
    const condition = card.querySelector(".forecast__card-condition");

    if (tempElements.length === 2) {
      tempElements[0].textContent = `${Math.round(dayData.temp)}°C`;
      tempElements[1].textContent = `${Math.round(
        (dayData.temp * 9) / 5 + 32
      )}°F`;
    }

    if (icon) {
      icon.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${dayData.icon}.png`;
    }

    if (condition) {
      condition.textContent = dayData.conditions;
    }
  });
}
