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

function handleSubmit(event) {
  const resultText = resultCont.querySelector("#resultText");
  const resultDays = resultCont.querySelector("#resultDays");

  event.preventDefault();
  setTimeout(() => {
    resultCont.classList.remove("hidden");
  }, 1500);
  resultText.textContent = subjectInput.value;
  resultDays.textContent = Math.floor(10000 / parseInt(hourInput.value));
}

function handleLoad() {
  resultCont.classList.add("hidden");
  if (subjectInput.value.length !== 0 && hourInput.value.length !== 0) {
    loadingClock.classList.remove("hidden");
    setTimeout(() => {
      loadingClock.classList.add("hidden");
    }, 1500);
  }
}

function handleGoModal() {
  goModal.classList.remove("hidden");
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

form.addEventListener("submit", handleSubmit);
calcBtn.addEventListener("click", handleLoad);
goBtn.addEventListener("click", handleGoModal);
shareBtn.addEventListener("click", handleShareBtn);
