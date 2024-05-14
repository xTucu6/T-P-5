document.addEventListener('DOMContentLoaded', function () {
  let randomNumber;
  const startBtn = document.getElementById('startBtn');
  const gameArea = document.getElementById('gameArea');
  const userInput = document.getElementById('userInput');
  const submitBtn = document.getElementById('submitBtn');

  startBtn.addEventListener('click', function () {
    randomNumber = generateRandomNumber();
    gameArea.style.display = 'block';
  });

  submitBtn.addEventListener('click', function () {
    const userGuess = parseInt(userInput.value);
    if (userGuess === randomNumber) {
      alert('¡Felicidades! ¡Adivinaste el número!');
      gameArea.style.display = 'none';
    } else if (userGuess < randomNumber) {
      alert('El número que ingresaste es menor.');
    } else {
      alert('El número que ingresaste es mayor.');
    }
  });

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
});