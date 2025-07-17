const txt1 = document.getElementById("task-input")
const res = document.getElementById("task-list") 

function Adicionar () { 
}

let time = 25 * 60; 

let timerInterval; 
let isRunning = false; 

const timerDisplay = document.getElementById('timer'); 
const startBtn = document.getElementById("start"); 
const pauseBtn = document.getElementById("pause") 
const resetBtn = document.getElementById("reset") 

function updateTimerDisplay() { 
    const minutes = Math.floor(time / 60).toString().padStart(2, "0"); 
    const seconds = (time % 60).toString().padStart(2, "0"); 
    timerDisplay.textContent = `${minutes}: ${seconds}`; 
}

function startTimer () { 
    if (isRunning) return; 
    isRunning = true;
    timerInterval = setInterval(() => { 
        if (time > 0) { 
            time --; 
            updateTimerDisplay(); 
             } else { 
                clearInterval(timerInterval); 
                isRunning = false; 
                alert("Tempo FInalizado! Faça uma pausa  🙇‍♀️🧘‍♀️")
        }
    }, 1000); 
}

function pauseTimer() { 
    clearInterval(timerInterval); 
    isRunning = false;
}

function resetTimer() { 
    clearInterval(timerInterval); 
    time = 25 * 60; 
    updateTimerDisplay(); 
    isRunning = false;
}

startBtn.addEventListener("click", startTimer); 
pauseBtn.addEventListener("click", pauseTimer); 
resetBtn.addEventListener("click", resetTimer);

updateTimerDisplay(); 