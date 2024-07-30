(function () {
  const joinCon = document.querySelector(".join-container");
  const joinForm = document.querySelector(".join-form");
  const joinValue = joinForm.querySelector("input");
  const mainWrap = document.querySelector(".wrap");
  const greeting = document.querySelector(".header-greeting");

  function greetingUser(elem) {
    mainWrap.classList.remove("hidden");
    greeting.innerText = `hello, ${elem}🙋‍♂️`;
  }

  function joinHandler(e) {
    e.preventDefault();
    const userName = joinValue.value;
    localStorage.setItem("userName", userName);
    joinCon.classList.add("hidden");
    greetingUser(userName);
  }

  const localUserName = localStorage.getItem("userName");

  if (localUserName) {
    greetingUser(localUserName);
  } else {
    joinCon.classList.remove("hidden");
    joinForm.addEventListener("submit", joinHandler);
  }
})();
