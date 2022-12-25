const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const pageBody = document.querySelector('body');

startButton.addEventListener('click', startRainbowMedness);
stopButton.addEventListener('click', stopRainbowMedness);

let colorInterval = null;

function startRainbowMedness() {
   startButton.disabled = true;
   colorInterval = setInterval(() => {
      pageBody.style.backgroundColor = getRandomHexColor();
   }, 1000);
}

function stopRainbowMedness() {
   startButton.disabled = false;
   clearInterval(colorInterval);
}

console.log(colorInterval);

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
