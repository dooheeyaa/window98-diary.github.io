(function () {
  const memoForm = document.querySelector(".window-memo-form-input-container");
  const memoInput = document.getElementById("window-memo-input");
  const memoList = document.querySelector(".window-memo-list");

  let memoArr = [];

  // 배열 -> local
  function memoToLocal() {
    localStorage.setItem("memo", JSON.stringify(memoArr));
  }

  // 삭제 함수
  function deleteMemo(e) {
    const parent = e.target.parentNode;
    parent.remove();
    memoArr = memoArr.filter((x) => x.id !== parseInt(parent.id));
    memoToLocal();
  }

  // 창에 보여주는 함수
  function showMemo(memo) {
    const list = document.createElement("li");
    list.id = memo.id;
    list.classList.add("window-memo-item");

    const listStyle = document.createElement("span");
    listStyle.classList.add("window-memo-list-style");

    const memoContent = document.createElement("div");
    memoContent.classList.add("window-memo-item");
    memoContent.innerText = memo.memo;

    list.appendChild(listStyle);
    list.appendChild(memoContent);
    memoList.appendChild(list);

    listStyle.addEventListener("click", deleteMemo);
  }

  // 값을 저장하는 함수
  function memoHandler(e) {
    e.preventDefault();
    const memo = memoInput.value;
    memoInput.value = "";
    const memoObj = {
      id: Date.now(),
      memo,
    };
    memoArr.push(memoObj);
    showMemo(memoObj);
    memoToLocal();
  }

  let memoFromLocal = localStorage.getItem("memo");

  if (memoFromLocal) {
    const parseMemo = JSON.parse(memoFromLocal);
    memoArr = parseMemo;
    memoArr.forEach(showMemo);
  }
  memoForm.addEventListener("submit", memoHandler);
})();
