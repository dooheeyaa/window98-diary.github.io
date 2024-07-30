(function () {
  const musicElem = document.querySelector(".aside-music-container");
  const api_key = "AIzaSyAO7fJcNx3-RuoKUTXdpGg2ZhAhPD_1sG0";
  const url = ` https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLFgquLnL59alGJcdc0BEZJb2p7IgkL0Oe&part=snippet&maxResults=20&key=${api_key}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
})();
