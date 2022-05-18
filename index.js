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
    loadingClock.classList.remove('hidden');
    setTimeout(()=> {
        loadingClock.classList.add('hidden');
    }, 2000)

}

form.addEventListener('submit', handleSubmit);
calcBtn.addEventListener('click', handleLoad);