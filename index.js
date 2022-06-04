const form = document.querySelector(".form");
const subjectInput = form.querySelector("#subjectInput");
const hourInput = form.querySelector("#hourInput");
const calcBtn = document.querySelector(".calc-btn");
const loadingClock = document.querySelector(".loading-clock");
const resultCont = document.querySelector(".result");
const goBtn = resultCont.querySelector(".go-btn");
const goModal = document.querySelector(".go-modal");
const shareBtn = resultCont.querySelector(".share-btn");
const exitBtn = goModal.querySelector(".exit-btn");
const mediaQueryWeb = window.matchMedia("(min-width: 400px)");
const mediaQueryMobile = window.matchMedia("(max-width: 400px)");

function showResult(event) {
  const resultText = resultCont.querySelector("#resultText");
  const resultDays = resultCont.querySelector("#resultDays");

  event.preventDefault();
  setTimeout(() => {
    resultCont.classList.remove("hidden");
  }, 1500);
  resultText.textContent = subjectInput.value;
  resultDays.textContent = Math.floor(10000 / parseInt(hourInput.value));
}

function showLoading() {
  resultCont.classList.add("hidden");
  // 입력 유무 확인
  if (subjectInput.value.length !== 0 && hourInput.value.length !== 0) {
    // 로딩 시계 보여줬다가 숨기기
    loadingClock.classList.remove("hidden");
    setTimeout(() => {
      loadingClock.classList.add("hidden");
    }, 1500);
    // 로딩 시계 및 결과 부분으로 스크롤 이동
    window.scrollTo({ top: 800, behavior: "smooth" });
  }
}

function handleGoModal() {
  goModal.classList.remove("hidden");

  // 웹, 모바일에 따라 모달창 부분으로 스크롤 이동
  const location = goModal.offsetTop;
  if (mediaQueryWeb.matches) {
    window.scrollTo({ top: location + 350, behavior: "smooth" });
  }
  if (mediaQueryMobile.matches) {
    window.scrollTo({ top: location, behavior: "smooth" });
  }

  // 종료 버튼 클릭시 모달창 숨기기
  exitBtn.addEventListener("click", () => {
    goModal.classList.add("hidden");
  });
}

function handleShareBtn() {
  let dummy = document.createElement("input");
  let txt = location.href;

  document.body.appendChild(dummy);
  dummy.value = txt;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);

  window.alert("링크가 복사되었습니다.");
}

form.addEventListener("submit", showResult);
calcBtn.addEventListener("click", showLoading);
goBtn.addEventListener("click", handleGoModal);
shareBtn.addEventListener("click", handleShareBtn);
