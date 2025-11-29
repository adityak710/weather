document.getElementById("btn").addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const response = await fetch("./data/weather-data.json");
  const weatherData = await response.json();

  const cityName = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

  if (!weatherData[cityName]) {
    document.getElementById("result").innerHTML =
      `<p>Sorry, weather data not available for "${cityName}".</p>`;
    return;
  }

  const data = weatherData[cityName];

  document.getElementById("result").innerHTML = `
    <h2>${cityName}</h2>
    <p><strong>Temperature:</strong> ${data.temp} °C</p>
    <p><strong>Humidity:</strong> ${data.humidity}%</p>
    <p><strong>Wind Speed:</strong> ${data.wind} km/h</p>
    <p><strong>Condition:</strong> ${data.condition}</p>
  `;
}
