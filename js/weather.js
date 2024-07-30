(function () {
  const apiKey = "43675d8fda3378a8d15b535cfbc4bc7a";
  const weatherCon = document.querySelector(".aside-weather-container");

  function found(position) {
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const city = document.createElement("div");
        city.classList.add("aside-weather-city");
        city.innerText = data.name;

        const weather = document.createElement("div");
        weather.classList.add("aside-weather");
        weather.innerText = data.weather[0].main;

        const temp = document.createElement("div");
        temp.classList.add("aside-weather-temp");
        temp.innerText = data.main.temp;

        weatherCon.appendChild(weather);
        weatherCon.appendChild(temp);
        weatherCon.appendChild(city);
      });
  }

  function notFound() {
    alert(`Can't find your location.`);
  }

  navigator.geolocation.getCurrentPosition(found, notFound);
})();
