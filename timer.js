let timerElement = document.getElementById('timer');
let startTime = Date.now();

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateTimer() {
  let currentTime = Date.now();
  let elapsedTime = currentTime - startTime;
  timerElement.textContent = formatTime(elapsedTime);
}

setInterval(updateTimer, 1000);
