export async function fetchWeather(location) {
  const myKey = "SDNXTATU5JA2W5UHA5L9VTMPG";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${myKey}&contentType=json`;

  try {
    const response = await fetch(url);
    if (!response) throw new Error("Failed to fetch weather data.");

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error fetching weather data:", error);
    return null;
  }
}
