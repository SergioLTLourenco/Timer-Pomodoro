let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const minutesInput = document.getElementById("minutesInput");
const secondsInput = document.getElementById("secondsInput");

// Atualiza o display do cronômetro
function updateTimerDisplay() {
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

// Configura o tempo inicial com base nos valores de entrada
function setInitialTime() {
    minutes = parseInt(minutesInput.value) || 0;
    seconds = parseInt(secondsInput.value) || 0;
    updateTimerDisplay();
}

// Função para iniciar o temporizador
function startTimer() {
    if (isRunning) return;
    isRunning = true;

    timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                isRunning = false;
                alert("Tempo acabou!");
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
        updateTimerDisplay();
    }, 1000);
}

// Função para pausar o temporizador
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Função para resetar o temporizador
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    setInitialTime();
}

// Adiciona eventos aos botões
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
minutesInput.addEventListener("input", setInitialTime);
secondsInput.addEventListener("input", setInitialTime);

// Inicializa o display com os valores de entrada
setInitialTime();