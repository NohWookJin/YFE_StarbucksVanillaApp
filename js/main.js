const searchElement = document.querySelector(".search");
const inputElement = document.querySelector("input");

// 서치 영역을 누르면 인풋 창이 늘어나야 함
searchElement.addEventListener("click", () => {
  inputElement.focus();
});

inputElement.addEventListener("focus", () => {
  searchElement.classList.add("focused");
  inputElement.setAttribute("placeholder", "통합 검색");
});

inputElement.addEventListener("blur", () => {
  searchElement.classList.remove("focused");
  inputElement.setAttribute("placeholder", "");
});
