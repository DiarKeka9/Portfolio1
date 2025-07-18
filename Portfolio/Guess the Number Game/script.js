const randomNumber = Math.floor(Math.random() * 10) + 1;
const result = document.getElementById('result');

document.getElementById('check').addEventListener('click', () => {
  const guess = parseInt(document.getElementById('guess').value);
  if (guess === randomNumber) {
    result.textContent = "Correct! You guessed it!";
  } else {
    result.textContent = "Wrong! Try again.";
  }
});
