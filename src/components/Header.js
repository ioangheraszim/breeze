export function Header() {
  const header = document.createElement("h1");
  header.classList.add("weather-app__title");
  header.textContent = "Breeze App";

  return header;
}
