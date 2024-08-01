(function () {
  const windowWeather = document.querySelector(".window-weather");
  const apiKey = "43675d8fda3378a8d15b535cfbc4bc7a";

  function geoDone(p) {
    const lat = p.coords.latitude;
    const lon = p.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const weather = data.weather[0].main;
        const city = data.name;
        windowWeather.innerText = `${weather} ${city}`;
      });
  }

  function geoNot() {
    alert(`Can't find your location!`);
  }

  navigator.geolocation.getCurrentPosition(geoDone, geoNot);
})();
