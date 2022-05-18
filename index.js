const form = document.querySelector('.form');
const calcBtn = document.querySelector('.calc-btn');
const loadingClock = document.querySelector('.loading-clock');
const goModal = document.querySelector(".go-modal");
const exitBtn = goModal.querySelector(".exitBtn");

// function handleExit(){
//     console.log("hi")
//     goModal.classList.add("hidden");
// }

// if(exitBtn){
//     exitBtn.addEventListener("click", handleExit);
// }

function handleSubmit(){
    event.preventDefault();
}

function handleLoad(){
    loadingClock.style.backgroundImage = url('./images/logo-bg-clock.png')
}

form.addEventListener('submit', handleSubmit);
calcBtn.addEventListener('click', handleLoad);