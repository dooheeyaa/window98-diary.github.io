const display = document.querySelector(".display");
const preBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");
const days = document.querySelector(".window-days");

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();

// 월, 날짜 출력하기
function displayCalendar() {
  let firstDay = new Date(year, month, 1); // 첫날
  let firstDayIdx = firstDay.getDay(); // 첫날의 요일, 일:0 ~ 토요일: 6
  let lastDay = new Date(year, month + 1, 0); // 현재 월의 마지막 날
  let numberOfDays = lastDay.getDate(); // 31 출력

  let format = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    timeZone: "Asia/Seoul",
  });
  display.innerText = format;

  // 빈칸 생성
  for (let i = 1; i <= firstDayIdx; i++) {
    const div = document.createElement("div");
    div.innerHTML += " ";
    days.appendChild(div);
  }

  // 날짜 입력
  for (let i = 1; i <= numberOfDays; i++) {
    const div = document.createElement("div");
    const currentDate = new Date(year, month, i);
    div.dataset.date = currentDate.toLocaleDateString();
    div.innerText += i;
    days.appendChild(div);
  }
}
displayCalendar();

preBtn.addEventListener("click", () => {
  days.innerHTML = "";
  if (month < 0) {
    month = 11;
    year -= 1;
  }
  month = month - 1;
  date.setMonth(month);
  displayCalendar();
});

nextBtn.addEventListener("click", () => {
  days.innerHTML = "";
  if (month > 11) {
    month = 0;
    year += 1;
  }
  month = month + 1;
  date.setMonth(month);
  displayCalendar();
});
