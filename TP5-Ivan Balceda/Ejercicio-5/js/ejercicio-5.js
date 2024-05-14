let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function startTimer() {
    timer = setInterval(function () {
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
            }
        }
        displayTime();
    }, 10);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    displayTime();
}

function displayTime() {
    let formattedMilliseconds = milliseconds.toString().padStart(2, '0');
    let formattedSeconds = seconds.toString().padStart(2, '0');
    let formattedMinutes = minutes.toString().padStart(2, '0');
    document.getElementById('display').textContent = `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
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