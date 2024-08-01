(function () {
  const windowTime = document.querySelector(".window-time");

  function timeHandler() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    windowTime.innerText = `${hours}:${minutes}:${seconds}`;
  }

  timeHandler();
  setInterval(timeHandler, 1000);
})();
