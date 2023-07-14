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

const badgeElement = document.querySelector("header .badges");
const toTopElement = document.querySelector("#to-top");

// lodash 라이브러리로 스크롤 반복 횟수를 줄여줌(익명함수의 반복횟수를 3초마다 딜레이)
window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY > 500) {
      // 상단 뱃지 숨김 처리
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeElement, 0.4, {
        opacity: 0,
        display: "none",
      });
      // 스크롤 최상단으로 가는 버튼 보이기
      gsap.to(toTopElement, 0.2, {
        x: 0,
      });
    } else {
      // 상단 뱃지 보임 처리
      gsap.to(badgeElement, 0.4, {
        opacity: 1,
        display: "block",
      });
      // 스크롤 최상단으로 가는 버튼 숨기기
      gsap.to(toTopElement, 0.2, {
        x: 100,
      });
    }
  }, 300)
);

toTopElement.addEventListener("click", () => {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeElements = document.querySelectorAll(".visual .fade-in");
fadeElements.forEach((element, index) => {
  gsap.to(element, 1, {
    delay: (index + 1) * 0.7, // 0.7 1.4 2.1 2.8
    opacity: 1,
  });
});

// new Swiper(생성자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical", // 수직 정렬, 기본값은 수평
  autoplay: true, // 자동 재생
  loop: true, // 반복
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionElement = document.querySelector(".promotion");
const promotionToggleButton = document.querySelector(".toggle-promotion");

let isHidePromotion = false;
promotionToggleButton.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionElement.classList.add("hide");
  } else {
    promotionElement.classList.remove("hide");
  }
});

const random = (min, max) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

const floaingObejct = (selector, delay, size) => {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
};
floaingObejct(".floating1", 1, 15);
floaingObejct(".floating2", 0.5, 15);
floaingObejct(".floating3", 1.5, 20);

const spyElements = document.querySelectorAll("section.scroll-spy");
spyElements.forEach((element) => {
  new ScrollMagic.Scene({
    triggerElement: element, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8, // 스크롤 0(맨위)~1(맨 아래) 중 0.8 지점에서 감시 포착할 위치
  })
    .setClassToggle(element, "show")
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
