(function () {
  const joinWrap = document.querySelector(".wrap");
  const mainWrap = document.querySelector(".main-wrap");
  const joinForm = document.querySelector(".join-form");
  const joinInput = document.getElementById("join-input");
  const windowGreeting = document.querySelector(".window-greeting");

  // 화면에 표시
  function joinHandler(e) {
    e.preventDefault();
    const userName = joinInput.value;
    localStorage.setItem("userName", userName);
    joinWrap.classList.add("hidden");
    joinGreeting(userName);
  }

  const userName = localStorage.getItem("userName");

  function joinGreeting(userName) {
    mainWrap.classList.remove("hidden");
    windowGreeting.innerText = `hello, ${userName} enjoy yourself!`;
  }

  if (userName) {
    joinGreeting(userName);
  } else {
    joinWrap.classList.remove("hidden");
    joinForm.addEventListener("submit", joinHandler);
  }
})();
