(function () {
  const time = document.querySelector(".section-time");

  function timHandler() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    time.innerText = `${hours}:${minutes}:${seconds}`;
  }

  timHandler();
  setInterval(timHandler, 1000);
})();
