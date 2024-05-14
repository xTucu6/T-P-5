let timer;
let timeLeft;
let running = false;

function startTimer() {
    if (!running) {
        timeLeft = parseInt(document.getElementById('inputTime').value);
        if (timeLeft <= 0) {
            alert('Por favor ingrese un tiempo valido.');
            return;
        }
        running = true;
        timer = setInterval(function () {
            timeLeft--;
            if (timeLeft <= 0) {
                clearInterval(timer);
                running = false;
            }
            displayTime();
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    running = false;
    timeLeft = parseInt(document.getElementById('inputTime').value);
    displayTime();
}

function displayTime() {
    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('display').textContent = formattedTime;
}

document.getElementById('startBtn').addEventListener('click', function () {
    startTimer();
});

document.getElementById('pauseBtn').addEventListener('click', function () {
    pauseTimer();
});

document.getElementById('resetBtn').addEventListener('click', function () {
    resetTimer();
});