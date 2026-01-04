function getWeather() {
  let city = document.getElementById("cityInput").value;
  let apiKey = "a0bc008563d8405ab2f60854250711";

  if (city === "") {
    alert("Please enter city name");
    return;
  }

  let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      document.getElementById("weatherResult").classList.remove("hidden");

      document.getElementById("cityName").innerText =
        data.location.name + ", " + data.location.country;

         document.getElementById("weatherIcon").src =
    "https:" + data.current.condition.icon;

      document.getElementById("temperature").innerText =
        "Temperature: " + data.current.temp_c + "°C";

      document.getElementById("condition").innerText =
        "Condition: " + data.current.condition.text;

      document.getElementById("humidity").innerText =
        "Humidity: " + data.current.humidity + "%";
    })
    .catch(() => {
      alert("City not found");
    });
}
